<template>
  <div v-if="info">
  <div class="question-wrapper">
        <h3>{{info.label}}</h3>

      <div class="question">
        <div class="mt-2">{{info.data.question.label}} <small class="muted">({{info.data.question.info}})</small></div>
        <b-form-group>
          <b-form-radio-group stacked id="radio_MEDPOL_option" v-model="info.data.question.selected" :options="info.data.question.options" name="radio_MEDPOL_option">
          </b-form-radio-group>
        </b-form-group>
        <small style="font-style:italic; font-size: .6rem">
          <p class="mb-0" v-for="option of info.data.question.options_description">
            {{option}}
          </p>
        </small>
      </div>
       <!-- <div class="answer" v-if="!info.data.question.selected" style="position: relative;"> -->
       <div class="answer" style="position: relative;">

          <div class="table-head">
            <b>{{info.data.table_label}}</b>
          </div>
          <div role="tablist">
            <div role="tablist">
              <b-card style="background: #eee" v-for="(article,index) in info.data.articles" :key="index" class="mb-1">
                <h5 style="cursor: pointer" href="#" v-b-toggle="`article_${index}`" variant="info">
                  {{article.article_title.value}}
                  <span style="float:right">▼</span>
                </h5>
               <label>
                  {{article.article_title.label}}
               </label>

               <b-input-group>
                <b-form-input :type="article.article_title.type" :name="article.article_title.name" v-model="article.article_title.value"></b-form-input>
                <b-input-group-append>
                  <b-btn variant="danger" @click="removeSpa(index)"> X Remove spa</b-btn> 
                </b-input-group-append>
               </b-input-group>

                <b-collapse class="mt-3" visible :id="`article_${index}`" accordion="my-accordion" role="tabpanel">
                  <div class="form-subsection" v-for="(item,item_index) in article.article_items">
               
                      <div class="form-fields">
                        <div class="mt-2">{{item.label}}</div>
                            <!-- {{field}} -->
                          <b-form-select :id="`${tabId}_${index}_${item_index}_${item.name}_${item.name}`" :type="item.type" :name="item.name" v-model="item.selected" :options="item.options"></b-form-select>
                      </div>
                  </div>
                </b-collapse>
              </b-card>
               <b-btn style="    
                  position: absolute;
                  top: 9px;
                  right: 13px;" 
                  variant="primary" @click="addSpa"> + Add</b-btn> 
            </div>
          </div>
        </div>

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

  data () {
    return {

    }
  },

  methods: {
    titleSlugify(text) {
      return slugify(text)
    },

  addSpa(){
      let spa ={
          article_title: {
            label: "Name of the SPA",
            value: 'please specify a name',
            name: 'name',
            type: 'text'
          },
          article_items: [{
            type: 'select',
            label: 'Implementation of Protection measures',
            info: 'Please select an option',
            selected: null,
            options: [
              { text: 'Dumping and releases of wastes/other substances likely to impair the integrity of the SPAMI', value: 1 },
              { text: 'Monitoring programme implemented', value: 2 },
              { text: 'Introduction and reintroduction of any species into the SPAMI', value: 3 },
              { text: 'Any activity or act likely to harm or disturb the species/ecosyste ms/natural, cultural or aesthetics characteristics of the SPAMI', value: 4 },
              { text: 'Activities in the zone surrounding the area', value: 5 },

            ]
          }, {
            type: 'select',
            label: 'Difficulties/Challenges',
            info: 'Please tick all that apply',
            selected: [],
            options: [
              { text: 'Policy framework', value: 1 },
              { text: 'Regulatory framework', value: 2 },
              { text: 'Financial resources', value: 3 },
              { text: 'Administrative management', value: 4 },
              { text: 'Technical Guidance Capabilities', value: 5 }
            ],
          }]
        }
      this.info.data.table_3.articles.push(spa)
    },


    removeSpa(index) {
      // console.log(this.info.data.table_2.articles[index])
      console.log(index)
      this.info.data.table_3.articles.splice(index, 1)
    },
  },
}
</script>

<style lang="css" scoped>

</style>