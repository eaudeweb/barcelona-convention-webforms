<template>
  <div v-if="info">
  <div class="question-wrapper">
        <h3>{{info.label}}</h3>

        <div class="question">
            <p>{{info.data.question}}</p>
        </div>

        <div class="answer">
          <div class="table-head">
            <b>{{info.data.table_1.table_label}}</b>
          </div>
          <div role="tablist">
          <b-card v-for="(article,index) in info.data.table_1.articles" :key="article.article_title" class="mb-1">
            <h5 :id="titleSlugify(article.article_title)" style="cursor: pointer" href="#" v-b-toggle="`article_${index}`" variant="info">
              <span class="text-muted" v-if="article.optional">Optional: </span>
              {{article.article_title}} <span style="float:right">▼</span>
            </h5>
            <b-collapse class="mt-3"  :id="`article_${index}`" accordion="my-accordion" role="tabpanel">
              <div class="form-section" v-for="(item_array,array_index) in article.article_items">
                <h6><b>{{item_array.description}}</b></h6>
                <div class="form-subsection" v-for="item in item_array.items">
                <div class="mt-2">{{item.label}} <small class="muted">({{item.info}})</small></div>
                <div class="form-fields">
                  <div v-if="item.type === 'difficulties'">
                    <b-form-group>
                      <b-form-checkbox-group stacked :id="`checkbox_${tabId}_${index}_${array_index}_${item.type}`" :name="`radio_${tabId}_${index}_${array_index}_${item.type}`" v-model="item.selected" :options="item.options">
                      </b-form-checkbox-group>

                      </b-form-group>
                  </div>
                  <div v-else>
                   <b-form-group>
                      <b-form-radio-group stacked :required="!article.optional" :id="`radio_${tabId}_${index}_${array_index}_${item.type}`" v-model="item.selected" :options="item.options" :name="`radio_${tabId}_${index}_${array_index}_${item.type}`">
                      </b-form-radio-group>
                    </b-form-group>
                  </div>
                </div>
                
              
                 
                <b-row>
                 <b-col lg="12" v-if="item.type === 'status' || item.type === 'difficulties'">
                   <textarea 
                      class="form-control"
                      v-model="item.comments"
                      placeholder="additional comments"></textarea>
                  </b-col>
                </b-row>



                <small style="font-style:italic; font-size: .6rem">
                  <p class="mb-0" v-for="option of item.options_description">
                    {{option}}
                  </p>
                </small>
              </div>
              </div>
            </b-collapse>
            </b-card>
          </div>
        </div>

           <div class="answer">
          <div class="table-head">
            <b>{{info.data.table_2.table_label}}</b>
          </div>
          <div role="tablist">
          <b-card v-for="(article,index) in info.data.table_2.articles" :key="article.article_title" class="mb-1">
            <h5 :id="titleSlugify(article.article_title)" style="cursor: pointer"  variant="info">
              <span class="text-muted" v-if="article.optional">Optional: </span>
              {{article.article_title}}
            </h5>
            <div class="mt-3"  :id="`article_${index}`">
              <div class="form-section" v-for="(item_array,array_index) in article.article_items">
                <h6><b>{{item_array.description}}</b></h6>
                <div class="form-subsection" v-for="(item, item_index) in item_array.items">
                <div class="mt-2">{{item.label}} <small class="muted">({{item.info}})</small></div>
                <div class="form-fields">
                    <b-form-group>

                      <b-form-checkbox-group stacked :id="`checkbox_${tabId}_${index}_${array_index}_${item_index}`" :name="`checkbox_${tabId}_${index}_${array_index}_${item_index}`" v-model="item.selected" :options="item.options">
                      </b-form-checkbox-group>
                      </b-form-group>
                </div>

               
                <b-row>
                 <b-col lg="12">
                   <textarea 
                      class="form-control"
                      v-model="item.comments"
                      placeholder="additional comments"></textarea>
                  </b-col>
                </b-row>

              </div>
              </div>
            </div>
            </b-card>
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

  data () {
    return {

    }
  },

  methods: {
    titleSlugify(text) {
      return slugify(text)
    },
    addSpa(){
      let spa = {
              article_title: {
                label: "Name of the SPA",
                value: 'please specify a name',
                name: 'name',
                type: 'text'
              },
              article_items: [{
                label: 'Date of establishment',
                type: 'date',
                name: 'date',
                value: '',
              }, {
                label: 'Category',
                type: 'text',
                name: 'category',
                value: '',
              }, {
                label: 'Jurisdiction',
                type: 'text',
                name: 'jurisdiction',
                value: '',
              }, {
                label: 'Coordinates',
                type: 'text',
                name: 'coordinates',
                value: '',
              }, {
                label: 'Surface (marine, terrestrial, wetland)',
                type: 'text',
                name: 'surface',
                value: '',
              }, {
                label: 'Main ecosystems, species and their habits',
                type: 'text',
                name: 'ecosystems',
                value: '',
              }, 
              {
                label: 'Management plan',
                type: 'multiple',
                name: 'management',
                value: [
                {
                    label: "Date of adoption",
                    value: '',
                    name: 'date',
                    type: 'date'
                },
                {
                  label: "No",
                  value: '',
                  type: 'number',
                  name: 'number' 
                },
                {
                  label: "Under development",
                  value: '',
                  type: 'text',
                  name: 'under_dev' 
                }]
              }]
            }

      this.info.data.table_2.articles.push(spa)
    },

    removeSpa(index) {
      // console.log(this.info.data.table_2.articles[index])
      console.log(index)
      this.info.data.table_2.articles.splice(index, 1)
    },
  },
}
</script>

<style lang="css" scoped>

</style>