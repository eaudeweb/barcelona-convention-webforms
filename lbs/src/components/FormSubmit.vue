<template>
  <div>
    <b-btn variant="success" style="position: absolute;
    top: 5px;
    right: 5px;" @click="doStuff">submit</b-btn>
    <a href="" id="a">click here to download your file</a>

  <!--   <b-btn @click="validate" variant="primary" type="submit" style="position: absolute;
    top: 5px;
    right: 85px;">Validate</b-btn> -->
<!--     <div style="position: fixed;left:0;right:50%;top:0;bottom:0; background: white">
     <pre>
       
      {{converted_xml}}
     </pre>
    </div> -->
  </div>
</template>

<script>

import {saveXml2} from '../api.js';
var json2xml = require('json2xml');


export default {

  name: 'FormSubmit',


  props: {
    info: null,
  },

  updated() {
  },

  created() {
    this.dataset = this.info 
    this.validate()
  },

  data () {
    return {
      dataset: null,
      validation: [],
      jsonemptyinstance: {
          "_attributes": {
                  "xmlns": "https://dd.info-rac.org/namespaces/9",
                  "xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
                  "xsi:schemaLocation": "https://dd.info-rac.org/namespaces/9 https://dd.info-rac.org/v2/dataset/8/schema-dst-8.xsd"
          },
          "BC_LBS": {
              "_attributes": {
                  "xmlns": "https://dd.info-rac.org/namespaces/10"
              },
              "measuresdata": [],
              "_attributes": {
                  "xmlns": "https://dd.info-rac.org/namespaces/11"
              },
              "measuredata_difficulty": [],
              "_attributes": {
                  "xmlns": "https://dd.info-rac.org/namespaces/12"
              },
              "enforcementmeasuresdata": [],
              "_attributes": {
                  "xmlns": "https://dd.info-rac.org/namespaces/13"
              },
              "lbsinventorydata": []
          }
      },
     converted_xml: null
    }
  },

  methods: {
    doStuff(){
      // let tab_1_collection_id = this.dataset.tab_1.data.collection_id;
      // let tab_1 = this.dataset.tab_1.data.question.agreements;

      // for(let collection of tab_1) {
      //   this.jsonemptyinstance.BC_BCRS.bilateralmultilateralagreementsdata.push(
      //             {
      //                "Row":{
      //                 "agreementname": collection.name,
      //                 "website_other_reference": collection.reference,
      //                 "collection_id": tab_1_collection_id
      //               } 
      //             }
      //     )
      // }



      let tab_3 = this.dataset.tab_3.data;
      for (let article of tab_3.articles) {
        for (let article_item of article.article_items){
          let collection_id = article_item.collection_id;
          let parent_collection_id = article_item.parent_collection_id
          let description = article_item.description
          let row =  {
                     "Row":{
                      "description": description,
                      "parent_collection_id": parent_collection_id,
                      "collection_id": collection_id,
                      "changes": null,
                      "difficulties": null,
                      "difficulties_comments": null,
                      "status":null,
                      "status_comments": null,
                    } 
                  }
            for(let item of article_item.items) {
              if(item.type ==='changes') {
                row.Row.changes = item.selected
              } else if (item.type === 'status') {
                row.Row.status = item.selected;
                row.Row.status_comments = item.comments
              } else {
                // row.Row.difficulties = item.selected
                row.Row.difficulties_comments = item.comments
                if(item.selected.length){
                  for(let difficulty of item.selected) {
                      this.jsonemptyinstance.BC_LBS.measuredata_difficulty.push(
                          {
                          "Row": {
                                    "collection_id": collection_id,
                                    "difficulty": difficulty
                                }
                             }
                        )
                  }
                }

              }
            }
          this.jsonemptyinstance.BC_LBS.measuresdata.push(row)
        }
      }


      var convxml = json2xml(this.jsonemptyinstance, { attributes_key: '_attributes', header:true })
      console.log(convxml)
      let file = new Blob([convxml], {type: 'xml'});
      console.log(file)

      var form = new FormData();
      form.append("file", file);
      form.append("file_id", "12312");
      saveXml2(form)



        var a = document.getElementById("a");
        a.href = URL.createObjectURL(file);
        a.download = 'file.xml';

    },
    validate() {
      this.validation = [];
      let data = this.dataset;
      // delete data.tab_1
        for(let a in data) {
          if(a != 'tab_2' && a != 'tab_6'){
              let tab_title = data[a].label 
              for(let b of data[a].data.articles) {
                let article_title = b.article_title
                if(!b.optional) {
                  for(let c of b.article_items){
                    let description = c.description 
                    for(let d of c.items) {
                      let answer_label = d.label;
                      if(d.selected === null || d.selected === []) {
                        this.validation.push({
                          tab: tab_title,
                          article: article_title,
                          description: description,
                          answer: answer_label
                        })
                        break;
                      }
                    }
                    break;
                  }
                }
              }
          } else {
            // let tab_title = data[a].label;
            // let article_title = data[a].data.table_label;
            // let description = data[a].data.question.label;
            // for(let answer of data[a].data.question.agreements) {
            //   let answer_name = answer.name;
            //   let answer_reference = answer.reference;
            //   if(answer_name === '') {
            //     this.validation.push({
            //         tab: tab_title,
            //         article: article_title,
            //         description: description,
            //         answer: 'Agrement name'
            //     })
            //   } 

            //   if(answer_reference === '') {
            //     this.validation.push({
            //         tab: tab_title,
            //         article: article_title,
            //         description: description,
            //         answer: 'reference'
            //     })
            //   }
            // }
          }
        }

      this.$emit('validationDone', this.validation)
    }
  },
    watch: {
    info: {
      handler: function(old_val,new_val) {
        this.validate()
      },
      deep: true,
      immediate: true,
    } 
  }
}
</script>

<style lang="css" scoped>
</style>