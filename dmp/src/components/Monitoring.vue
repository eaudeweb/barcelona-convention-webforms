<template>
  <div v-if="info">
    <div class="question-wrapper">
      <h3>{{info.label}}</h3>






        <div class="answer">
          <div class="table-head">
            
            <b>{{info.data.table_label}}</b>

          </div>

          <div style="position: relative" role="tablist">
          <b-card v-for="(article,index) in info.data.articles" class="mb-1">
            <h5 :id="`titleSlugify(${article.article_title.label}_${index})`" style="cursor: pointer" href="#" v-b-toggle="`article_${index}`" variant="info">
            {{article.article_title.label}} : {{article.article_title.selected}} <span style="float:right">▼</span>
            </h5>

            <b-btn variant="danger" @click="removeDump(index)"> X</b-btn> 

            <b-form-input required :id="`${tabId}_${index}_${article.article_title.name}_${article.article_title.type}`" :type="article.article_title.type" :name="article.article_title.name" v-model="article.article_title.selected"></b-form-input>


            <b-collapse class="mt-3"  :id="`article_${index}`" accordion="my-accordion" role="tabpanel">

              <div class="form-fields mb-3" v-for="(item, array_index) in article.article_items">

                <div><b>{{item.label}}</b> <small class="muted" v-if="item.info">({{item.info}})</small></div>
                
                  <b-form-input class="form-control" required v-if="item.type === 'text'" :id="`${tabId}_${index}_${array_index}_${item.name}_${item.type}`" :type="item.type" :name="item.name" v-model="item.selected"></b-form-input>

                  <b-form-radio-group required stacked v-if="item.type === 'radio'" :id="`${tabId}_${index}_${array_index}_${item.name}_${item.type}`" :type="item.type" :name="item.name" v-model="item.selected" :options="item.options"></b-form-radio-group>

                  <b-form-checkbox-group stacked v-if="item.type === 'checkbox'" :id="`${tabId}_${index}_${array_index}_${item.name}_${item.type}`" :type="item.type" :name="item.name" v-model="item.selected" :options="item.options"></b-form-checkbox-group>
                  <textarea class="form-control" v-if="item.type === 'textarea'"  v-model="item.selected"></textarea>


                  <div v-if="checkForCommentsField(item)">
                    Comments
                    <textarea class="form-control"  v-model="item.comments"></textarea>
                  </div>
                </div>
            </b-collapse>
            </b-card>
        
            <b-btn style="    
                  position: absolute;
                  top: -3rem;
                  right: 13px;" 
                  variant="primary" @click="addDump"> + Add</b-btn> 
          </div>
        </div>







    </div>
  </div>
</template>
<script>

import {slugify} from '../utils.js';


export default {


  props: {
    info: null,
    tabId:null

  },

  created() {
    if(this.info.data.articles.length === 0) {
      this.addDump();
    }
  },


  methods :{

    titleSlugify(text) {
      return slugify(text)
    },


    checkForCommentsField(item){
      if(item.hasOwnProperty('comments')) {
        console.log(item)
        return true
      } else {
        return false
      }
    },


    addDump() {
      let dump = {
          article_title: {
            label: '5.1 Dump Site Code for Sites Monitore d during Reporting Period',
            name: 'dump_site_code_monitore_d',
            type: 'text',
            info: 'Two-letter prefix for country code and the Contracting Party\'s own alphanumeric dump site code (copied from 3.1)',
            selected: '',
          },
          article_items: [{
            label: '5.2 Was Monitoring Conducted during the Reporting Period?',
            type: 'radio',
            name: 'monitoring_conducted_rep_period',
            selected: '',
            info: '',
            options: [{text:'yes', value: true}, {text:'no', value:false}]
          }, {
            label: '5.3.1 If Field Monitoring was Conducted, when was it done?',
            type: 'checkbox',
            name: 'field_monitoring_when',
            selected: '',
            info: 'In case of other, explain',
            options:[
            {text: 'before dumping at sea', value: 1},
            {text: 'during dumping at sea', value: 2},
            {text: 'after dumping at sea', value: 3},
            {text: 'other', value: 4}
            ],
            comments: '',
          }, {
            label: '5.3.2 If Field Monitoring was Conducted, what type of survey was completed?',
            type: 'checkbox',
            name: 'field_monitoring_survey_type',
            selected: '',
            info: 'In case of other, explain',
            options:[
            {text: 'biological', value: 1},
            {text: 'geological', value: 2},
            {text: 'chemical', value: 3},
            {text: 'physical', value: 4},
            {text: 'other', value: 5}
            ],
            comments: '',
          }, {
            label: '5.3.3 If Field Monitoring was Conducted, has an Adverse Impact(s) been found beyond that predicted?',
            type: 'radio',
            name: 'adverse_impact_found',
            selected: '',
            info: '',
            options: [{text:'yes', value: true}, {text:'no', value:false}],
          }, {
            label: '5.3.4 If an adverse impacts(s) was noted in 5.3.3 describe briefly',
            type: 'textarea',
            name: 'impact_description',
            selected: '',
            info: 'Brief information on: impacts (e.g. physical, chemical or biological) and their spatial or temporal variation'
          }, 
          {
            label: '5.4.1 Was Compliance Monitoring Conducted for a Permit(s) Issued to Use the Dump Site?',
            type: 'radio',
            name: 'compliance_monitoring_permit',
            selected: '',
            info: '',
            options: [{text:'yes', value: true}, {text:'no', value:false}],

          }, 
          {
            label: '5.4.2 If Compliance Monitoring was Conducted, were the dumping at sea operations found to be in compliance with the permit(s)?',
            type: 'radio',
            name: 'operations_in_compliance_with_permit',
            selected: '',
            info: '',
            options: [{text:'yes', value: true}, {text:'no', value:false}],

          }, 
          {
            label: '5.4.3 If dumping at sea operations were not in compliance, is follow-up action planned?',
            type: 'radio',
            name: 'is_follow_up_planned',
            selected: '',
            info: 'If Yes explain e.g. amendment of or revoking of the dumping permit, redefinition or closing of the dumping site',
            options: [{text:'yes', value: true}, {text:'no', value:false}],
            comments: '',
          }]
        }
        this.info.data.articles.push(dump)
    },

    removeDump(index){
      this.info.data.articles.splice(index, 1)
    },

  },

  data () {
    return {
    }
  },
}
</script>

<style lang="css" scoped>


.btn-danger {
      position: absolute;
    top: .5rem;
    right:1rem;
}
</style>
