<template>
  <div v-if="info">
  <div class="question-wrapper">
        <h3>{{info.label}}</h3>
        



  <div class="answer" style="position: relative;">
        <div class="table-head">
            <b>{{info.data.table_1.table_label}}</b>
          </div>
   
          <div role="tablist">

            <div role="tablist">

              <b-card style="background: #eee" v-for="(article,index) in info.data.table_1.articles" :key="index" class="mb-1">
                <h5 style="cursor: pointer" href="#" v-b-toggle="`article_${index}`" variant="info">
                   {{article.article_title.label}} : {{article.article_title.selected}}
                  <span style="float:right">▼</span>
                </h5>
              <br>

              <b-form-input required :id="`${tabId}_${index}_${article.article_title.name}_${article.article_title.type}`" :type="article.article_title.type" :name="article.article_title.name" v-model="article.article_title.selected"></b-form-input>

              <b-btn variant="danger" @click="removeIncident(index)"> X</b-btn> 

                <b-collapse class="mt-3" visible :id="`article_${index}`" accordion="my-accordion" role="tabpanel">
                  <div class="form-subsection" v-for="(item,item_index) in article.article_items">
               
                      <div class="form-fields">
                        <div class="mt-2">{{item.label}}</div>
                            <!-- {{field}} -->
                          <b-form-input required :id="`${tabId}_${index}_${item_index}_${item.name}_${item.name}`" :type="item.type" :name="item.name" v-model="item.selected"></b-form-input>
                     
                      </div>
                  </div>
                </b-collapse>
              </b-card>
               <b-btn style="    
                  position: absolute;
                  top: 9px;
                  right: 13px;" 
                  variant="primary" @click="addIncident"> + Add</b-btn> 
            </div>
          </div>
        </div>
        <br><br>


  <div class="answer" style="position: relative;">
        <div class="table-head">
            <b>{{info.data.table_2.table_label}}</b>
          </div>
   
          <div role="tablist">

            <div role="tablist">

              <b-card style="background: #eee" v-for="(article,index) in info.data.table_2.articles" :key="index" class="mb-1">
                <h5 style="cursor: pointer" href="#" v-b-toggle="`article_table_2_${index}`" variant="info">
                   {{article.article_title.label}} : {{article.article_title.selected}}
                  <span style="float:right">▼</span>
                </h5>
              <br>

              <b-form-input required :id="`${tabId}_${index}_${article.article_title.name}_${article.article_title.type}`" :type="article.article_title.type" :name="article.article_title.name" v-model="article.article_title.selected"></b-form-input>

              <b-btn variant="danger" @click="removeIncidentmov(index)"> X</b-btn> 

                <b-collapse class="mt-3" visible :id="`article_table_2_${index}`" accordion="my-accordion" role="tabpanel">
                  <div class="form-subsection" v-for="(item,item_index) in article.article_items">
               
                      <div class="form-fields">
                        <div class="mt-2">{{item.label}}</div>
                            <!-- {{field}} -->
                          <b-form-input required :id="`${tabId}_${index}_${item_index}_${item.name}_${item.name}`" :type="item.type" :name="item.name" v-model="item.selected"></b-form-input>
                     
                      </div>
                  </div>
                </b-collapse>
              </b-card>
               <b-btn style="    
                  position: absolute;
                  top: 9px;
                  right: 13px;" 
                  variant="primary" @click="addIncidentmov"> + Add</b-btn> 
            </div>
          </div>
        </div>
        <br><br>

      </div>
  </div>
</template>

<script>

import {slugify} from '../utils.js';

export default {

  name: 'NAPs',

  props: {
    info: null,
    tabId:null
    
  },

  created(){
    if(this.info.data.table_1.articles.length === 0) {
      this.addIncident()
    }
    if(this.info.data.table_2.articles.length === 0) {
      this.addIncidentmov()
    }
  },


  data () {
    return {
    }
  },

  methods: {
    titleSlugify(text) {
      return slugify(text)
    },

  addIncident(){
    let incident = {
          article_title: {
            name: 'incident_date',
            type: 'date',
            label: 'Date of the incident',
            selected: '',
          },
          article_items: [{
            label: 'Countries involved',
            type: 'text',
            name: 'countries_involved',
            selected: '',
          }, {
            label: 'Type of wastes',
            type: 'text',
            name: 'wastes_type',
            selected: '',
          }, {
            label: 'Amount(in metric tonnes)',
            type: 'number',
            name: 'wastes_amount',
            selected: '',
          }, {
            label: 'Reason for the incident',
            type: 'text',
            name: 'incident_reason',
            selected: '',
          }, {
            label: 'Measures taken to deal with the incident',
            type: 'text',
            name: 'measures_taken',
            selected: '',
          }, {
            label: 'Effectiveness of the measures taken',
            type: 'text',
            name: 'measures_effectiveness',
            selected: '',
          },
          {
            label: 'Remarks',
            type: 'text',
            name: 'remarks',
            selected: '',
          }]
        }
      this.info.data.table_1.articles.push(incident)
    },


    removeIncident(index) {

      this.info.data.table_1.articles.splice(index, 1)
    },


      addIncidentmov(){
    let incident = {
          article_title: {
            name: 'incident_date_place',
            type: 'date',
            label: 'Date and place of the accident',
            selected: '',
          },
          article_items: [{
            label: 'Countries involved',
            type: 'text',
            name: 'countries_involved_movement',
            selected: '',
          }, {
            label: 'Type of wastes',
            type: 'text',
            name: 'wastes_type_movement',
            selected: '',
          }, {
            label: 'Amount(in metric tonnes)',
            type: 'number',
            name: 'wastes_amount_movement',
            selected: '',
          }, {
            label: 'Type of accident',
            type: 'text',
            name: 'accident_type_movement',
            selected: '',
          }, {
            label: 'Measures taken to deal with the incident',
            type: 'text',
            name: 'measures_taken_movement',
            selected: '',
          }, {
            label: 'Effectiveness of the measures taken',
            type: 'text',
            name: 'measures_effectiveness_movement',
            selected: '',
          },
          {
            label: 'Remarks',
            type: 'text',
            name: 'remarks_movement',
            selected: '',
          }]
        }
      this.info.data.table_2.articles.push(incident)
    },


    removeIncidentmov(index) {

      this.info.data.table_2.articles.splice(index, 1)
    },

  },
}
</script>

<style lang="scss" scoped>

.btn-danger {
      position: absolute;
    top: 1rem;
    right: 3rem;
}

.questions .row {
  padding-bottom: 1.5rem;
  padding-top:1rem;
  border-bottom: 1px solid #eee;
  padding-bottom: 1rem;
      margin-left: 0;
    margin-right: 0;
    border-left: 1px solid #eee;
    border-right: 1px solid #eee;
  &:first-of-type{
  padding-top:2rem;

  }
}

.questions {
}

</style>