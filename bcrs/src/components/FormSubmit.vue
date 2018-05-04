<template>
	<div>
		<b-btn variant="success" style="position: absolute;
    top: 5px;
    right: 5px;" @click="doStuff">submit</b-btn>

  <!--   <b-btn @click="validate" variant="primary" type="submit" style="position: absolute;
    top: 5px;
    right: 85px;">Validate</b-btn> -->
	</div>
</template>

<script>

import {saveInstance} from '../api.js';
const {toXml, toJson} = require('json-xml');
import emptyinstance from '../assets/empty-instance.xml';

console.log(emptyinstance)

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
    }
  },

  methods: {
  	doStuff(){
  		var info = this.info
      // console.log(info)
      const xmlconverted = toXml(info)
      console.log(xmlconverted)
      console.log(toJson(xmlconverted))
      // saveInstance(info)
  	},
    validate() {
      this.validation = [];
      let data = this.dataset;
      // delete data.tab_1
        for(let a in data) {
          if(a != 'tab_1'){
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
            let tab_title = data[a].label;
            let article_title = data[a].data.table_label;
            let description = data[a].data.question.label;
            for(let answer of data[a].data.question.agreements) {
              let answer_name = answer.name;
              let answer_reference = answer.reference;
              if(answer_name === '') {
                this.validation.push({
                    tab: tab_title,
                    article: article_title,
                    description: description,
                    answer: 'Agrement name'
                })
              } 

              if(answer_reference === '') {
                this.validation.push({
                    tab: tab_title,
                    article: article_title,
                    description: description,
                    answer: 'reference'
                })
              }
            }
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