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
                
                <b-row >
                 <b-col lg="5" v-if="item.type === 'status' && item.selected == '1'">
                   <b-form-textarea v-model="item.comments"
                      type="text"
                      placeholder="additional comments"></b-form-textarea>
                  </b-col>
                  <b-col lg="5" v-else-if="item.type != 'status' && item.type != 'changes' ">
                   <b-form-textarea v-model="item.comments"
                      type="text"
                      placeholder="additional comments"></b-form-textarea>
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

        <div class="answer" style="position: relative;">
          <div class="table-head">
            <b>{{info.data.table_2.table_label}}</b>
          </div>
          <div role="tablist">
            <div role="tablist">
              <b-card style="background: #eee" v-for="(article,index) in info.data.table_2.articles" :key="index" class="mb-1">
                <h5 style="cursor: pointer" href="#" v-b-toggle="`article_${index}`" variant="info">
                  {{article.article_title.selected}}
                  <span style="float:right">▼</span>
                </h5>
               <label>
                  {{article.article_title.label}}
               </label>

               <b-input-group>
                <b-form-input :type="article.article_title.type" :name="article.article_title.name" v-model="article.article_title.selected"></b-form-input>
                <b-input-group-append>
                  <b-btn variant="danger" @click="removeSpa(index)"> X Remove spa</b-btn> 
                </b-input-group-append>
               </b-input-group>

                <b-collapse class="mt-3" visible :id="`article_${index}`" accordion="my-accordion" role="tabpanel">
                  <div class="form-subsection" v-for="(item,item_index) in article.article_items">
                    <div v-if="(item.type === 'text' || item.type ==='date') && item.name != 'dateofadoption'">
                      <div class="mt-2">{{item.label}}</div>
                      <div class="form-fields">
                        <b-form-input :id="`${tabId}_${index}_${item_index}_${item.name}`" :type="item.type" :name="item.name" v-model="item.selected"></b-form-input>
                      </div>
                    </div>
                     <div v-else-if="item.type === 'radio'">
                      <div class="mt-2">{{item.label}}</div>
                      <div class="form-fields">
                        <b-form-radio-group stacked :id="`${tabId}_${index}_${item_index}_${item.name}`" :name="item.name" @change="updateAdoptionDateField($event)" :options="item.options" v-model="item.selected"></b-form-radio-group>
                      </div>
                    </div>
                    <div v-else-if="item.type === 'select'">
                      <div class="mt-2">{{item.label}}</div>
                      <div class="form-fields">
                        <b-form-select :id="`${tabId}_${index}_${item_index}_${item.name}`" :name="item.name" :options="item.options" v-model="item.selected"></b-form-select>
                      </div>
                    </div>


                    <div v-if="item.name === 'dateofadoption' && showAdoptionDate">
                      <div class="mt-2">{{item.label}}</div>
                      <div class="form-fields">
                        <b-form-input :id="`${tabId}_${index}_${item_index}_${item.name}`" :type="item.type" :name="item.name" v-model="item.selected"></b-form-input>
                      </div>
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


          <div class="answer">
          <div class="table-head">
            <b>{{info.data.table_3.table_label}}</b>
          </div>
          <div role="tablist">
          <b-card v-for="(article,index) in info.data.table_3.articles" :key="article.article_title" class="mb-1">
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
                
                <b-row >
                 <b-col lg="5" v-if="item.type === 'status' && item.selected == '1'">
                   <b-form-textarea v-model="item.comments"
                      type="text"
                      placeholder="additional comments"></b-form-textarea>
                  </b-col>
                  <b-col lg="5" v-else-if="item.type != 'status' && item.type != 'changes' ">
                   <b-form-textarea v-model="item.comments"
                      type="text"
                      placeholder="additional comments"></b-form-textarea>
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
      showAdoptionDate: false
    }
  },

  methods: {
    titleSlugify(text) {
      return slugify(text)
    },

    updateAdoptionDateField(e){
      if(e === 1) {
        this.showAdoptionDate = true;
      } else {
        this.showAdoptionDate = false;
      }
    },

    addSpa(){
      let spa = {
          article_title: {
            label: "Name of the SPA",
            selected: 'please specify a name',
            name: 'name',
            type: 'text'
          },
          article_items: [{
              label: 'Date of establishment',
              type: 'date',
              name: 'date',
              selected: '',
            }, {
              label: 'Category',
              type: 'text',
              name: 'category',
              selected: '',
            }, 
            {
                  type: 'select',
                  label: 'Jurisdiction',
                  name: 'jurisdiction',
                  selected: null,
                  options: [
                    { text: 'Please select one item', value: null },
                    { text: 'National', value: 1 },
                    { text: 'Adiacent', value: 2 },
                    { text: 'High seas', value: 3 }
                  ]
                },
            {
              label: 'Coordinates',
              type: 'text',
              name: 'coordinates',
              selected: '',
            }, {
              label: 'Surface (marine, terrestrial, wetland)',
              type: 'text',
              name: 'surface',
              selected: '',
            }, {
              label: 'Main ecosystems, species and their habits',
              type: 'text',
              name: 'ecosystems',
              selected: '',
            },
             {
              type: 'radio',
              label: 'Management plan',
              name: 'management',
              selected: null,
              options: [
                { text: 'Yes', value: 1 },
                { text: 'No', value: 2 },
                { text: 'Under Development', value: 3 }
              ]
            },
            {
              label: 'Date of adoption',
              type: 'date',
              name: 'dateofadoption',
              selected: '',
            } 
          ]
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