<template>
  <div>
    <b-btn variant="success" style="position: absolute;
    top: 5px;
    right: 5px;" @click="doStuff">submit</b-btn>

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

import {saveInstance} from '../api.js';


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
          "BC_LBS": {
              "@xmlns": "https://dd.info-rac.org/namespaces/9",
              "@xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
              "@xsi:schemaLocation": "https://dd.info-rac.org/namespaces/9 https://dd.info-rac.org/v2/dataset/8/schema-dst-8.xsd",
              "measuresdata": [],
              "measuredata_difficulty": [],
              "enforcementmeasuresdata": [],
              "lbsinventorydata": []
          }
      },
     converted_xml: null
    }
  },

  methods: {

    matchEnfField(name){
      switch (name) {
        case 'inspections':
          return 'inspectionnumber'
          break;
        case 'non_compliance':
          return 'casesnumber'
          break;
        case 'total_amount':
          return 'fineissuesnumber'
          break;
        case 'suspensions':
          return 'suspensionsnumber'
          break;
        case 'shutdowns':
          return 'shutdownsnumber'
          break;
        case 'enforcement':
          return 'othernumber'
          break;
        case 'implemented':
          return 'cleannumber'
          break;
        case 'remarks':
          return 'comment'
          break;
        default:
          // statements_def
          break;
      }
    },


    matchInvField(label){
      switch (label) {
        case 'Pollutant name':
          return 'pollutantgroup'
          break;
        case 'Sector of Activity':
          return 'activitysector'
          break;
        case 'Sub-sector':
          return 'activitysubsector'
          break;
        case 'Release to Air - Information based on':
          return 'reportedinfotypeair'
          break;
        case 'Release to Air - Quantities Kg/year':
          return 'airquantity'
          break;
        case 'Release to Water - Information based on':
          return 'reportedinfotypewater'
          break;
        case 'Release to Water - Quantities Kg/year':
          return 'waterquantity'
          break;
        case 'Release to Soil - Information based on':
          return 'reportedinfotypesoil'
          break;
        case 'Release to Soil - Quantities Kg/year':
          return 'soilquantity'
          break;
        default:
          // statements_def
          break;
      }
    },

    doStuff(){

      this.jsonemptyinstance = {
                 "BC_LBS": {
              "@xmlns": "https://dd.info-rac.org/namespaces/9",
              "@xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
              "@xsi:schemaLocation": "https://dd.info-rac.org/namespaces/9 https://dd.info-rac.org/v2/dataset/8/schema-dst-8.xsd",
              "measuresdata": [],
              "measuredata_difficulty": [],
              "enforcementmeasuresdata": [],
              "lbsinventorydata": []
          }
      }

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


      let tab_1 = this.dataset.tab_1.data;
      for (let article of tab_1.articles) {
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


      let tab_4 = this.dataset.tab_4.data;
      for (let article of tab_4.articles) {
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
      let tab_5 = this.dataset.tab_5.data;
      for (let article of tab_5.articles) {
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


      let tab_6 = this.dataset.tab_6.data;
      for (let article of tab_6.articles) {
          let collection_id = article.collection_id;
          let parent_collection_id = article.parent_collection_id
          let description = article.article_title
          let row =  {
                     "Row":{
                      "description": description,
                      "parent_collection_id": parent_collection_id,
                      "collection_id": collection_id,
                      "inspectionnumber": null,
                      "casesnumber":null,
                      "fineissuesnumber": null,
                      "suspensionsnumber": null,
                      "shutdownsnumber":null,
                      "othernumber": 'asd',
                      "cleannumber": null,
                      "comment": null
                    } 
                  }
        for (let article_item of article.article_items){
          row.Row[this.matchEnfField(article_item.name)] =  article_item.value
        }
        this.jsonemptyinstance.BC_LBS.enforcementmeasuresdata.push(row)
      }

      let tab_2 = this.dataset.tab_2.data;
      for (let article of tab_2.articles) {
          let collection_id = tab_2.collection_id;
          let parent_collection_id = tab_2.parent_collection_id
        for (let article_item of article.article_items){
          let row =  {
                     "Row":{
                      "parent_collection_id": parent_collection_id,
                      "collection_id": collection_id,
                      "pollutantgroup": null,
                      "activitysector":null,
                      "activitysubsector": null,
                      "reportedinfotypeair": null,
                      "airquantity":null,
                      "reportedinfotypewater": null,
                      "waterquantity": null,
                      "reportedinfotypesoil": null,
                      "soilquantity": null
                    } 
                  }

          for(let item of article_item.items){
            row.Row[this.matchInvField(item.label)] =  item.selected || item.value
          }
        this.jsonemptyinstance.BC_LBS.lbsinventorydata.push(row)
        }
      }

      console.log(this.jsonemptyinstance)

      saveInstance(this.jsonemptyinstance)
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