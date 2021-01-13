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

        <div class="answer" style="position: relative;">
          <div class="table-head">
            <b>{{info.data.table_2.table_label}}</b>
          </div>
          <div role="tablist">
            <div role="tablist">
              <b-card v-if="checkCountry(article.iso)" v-for="(article,index) in info.data.table_2.articles" :key="index" class="mb-1">
                <h5 style="cursor: pointer" href="#" v-b-toggle="`article_${index}`" variant="info">
                  {{article.article_title}}
                  <span style="float:right">▼</span>
                </h5>
               <label>
                  {{article.article_title.label}}
               </label>

              <b-input-group v-if="article.custom">
                <b-form-input placeholder="name of the spami" required :type="text" :name="article.article_title" v-model="article.article_title"></b-form-input>
                <b-input-group-append>
                  <b-btn variant="danger" @click="removeSpami(index)"> X Remove spami</b-btn> 
                </b-input-group-append>
               </b-input-group>


                <b-collapse class="mt-3" visible :id="`article_${index}`" accordion="my-accordion" role="tabpanel">
                  <div class="form-subsection" v-for="(item,item_index) in article.article_items">
                    <div v-if="(item.type === 'text' || item.type ==='date' || item.type ==='number')">
                      <div class="mt-2">{{item.label}}</div>
                      <div class="form-fields">
                        <b-form-input required :id="`${tabId}_${index}_${item_index}_${item.name}`" :type="item.type" :name="item.name" v-model="item.selected"></b-form-input>
                      </div>
                    </div>
                     <div v-else-if="item.type === 'radio'">
                      <div class="mt-2">{{item.label}}</div>
                      <div class="form-fields">
                        <b-form-radio-group required stacked :id="`${tabId}_${index}_${item_index}_${item.name}`" :name="item.name" :options="item.options" v-model="item.selected"></b-form-radio-group>
                      </div>
                    </div>
                    <div v-else-if="item.type === 'checkbox'">
                      <div class="mt-2">{{item.label}}</div>
                      <div class="form-fields">
                        <b-form-checkbox-group stacked :id="`${tabId}_${index}_${item_index}_${item.name}`" :name="item.name" :options="item.options" v-model="item.selected"></b-form-checkbox-group>
                      </div>
                    </div>
                  </div>
                </b-collapse>
              </b-card>
               <b-btn style="    
                  position: absolute;
                  top: 9px;
                  right: 13px;" 
                  variant="primary" @click="addSpami"> + Add</b-btn> 
            </div>
          </div>
        </div>

       <div class="answer" style="position: relative;">
          <div class="table-head">
            <b>{{info.data.table_3.table_label}}</b>
          </div>
          <div role="tablist">
            <div role="tablist">
              <b-card style="background: #eee" v-for="(article,index) in info.data.table_3.articles" :key="index" class="mb-1">
                <h5 style="cursor: pointer" href="#" v-b-toggle="`article_${index}`" variant="info">
                  {{article.article_title.selected}}
                  <span style="float:right">▼</span>
                </h5>
               <label>
                  {{article.article_title.label}}
               </label>

               <b-input-group>
                <b-form-input required :type="article.article_title.type" :name="article.article_title.name" v-model="article.article_title.selected"></b-form-input>
                <b-input-group-append>
                  <b-btn variant="danger" @click="removeSpa(index)"> X Remove spa</b-btn> 
                </b-input-group-append>
               </b-input-group>

                <b-collapse class="mt-3" visible :id="`article_${index}`" accordion="my-accordion" role="tabpanel">
                  <div class="form-subsection" v-for="(item,item_index) in article.article_items">
               
                      <div class="form-fields">
                        <div class="mt-2">{{item.label}}</div>
                            <!-- {{field}} -->



                          <b-form-checkbox-group v-if="item.type ==='checkbox'" stacked  :id="`${tabId}_${index}_${item_index}_${item.name}_${item.name}`" :name="`checkbox_${tabId}_${index}_${item_index}_${item.name}_${item.name}`" v-model="item.selected" :options="item.options">
                          </b-form-checkbox-group>
                           <b-form-radio-group required v-else stacked  :id="`${tabId}_${index}_${item_index}_${item.name}_${item.name}`" :name="`radio_${tabId}_${index}_${item_index}_${item.name}_${item.name}`" v-model="item.selected" :options="item.options">
                          </b-form-radio-group>
                          <div v-if="checkForCommentsField(item)">
                            Comments
                            <textarea class="form-control"  v-model="item.comments"></textarea>
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

      </div>
  </div>
</template>

<script>

import {slugify} from '../utils.js';

export default {

  name: 'NAPs',

  props: {
    info: null,
    tabId:null,
    country: null,
  },

  created() {
    if(this.info.data.table_3.articles.length > 0){
    } else {
      this.addSpa()
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

    checkCountry(iso) {
      if(typeof(iso) === "string") {
        if(iso === this.country) {
          return true
        }
      } else {
        if (iso.includes(this.country)) {
          return true
        }
      }
    },


   checkForCommentsField(item){
      if(item.hasOwnProperty('comments')) {
        return true
      } else {
        return false
      }
    },

  addSpami(){
      let spami = {
            "article_title": "",
            "parent_collection_id": 509,
            "iso": this.country,
            "custom": true,
            "article_items": [{
                "type": "date",
                "label": "Dates of establishment and inclusion",
                "name": "date_of_establishment",
                "selected": null
              },
              {
                "type": "text",
                "label": "Surface",
                "name": "surface",
                "selected": null
              },
              {
                "type": "text",
                "label": "Coordinates",
                "name": "coordinates",
                "selected": null
              },
              {
                "type": "checkbox",
                "label": "Jurisdiction",
                "name": "jurisdiction",
                "selected": null,
                "options": [{
                    "text": "National",
                    "value": 1
                  },
                  {
                    "text": "Adjacent water",
                    "value": 2
                  },
                  {
                    "text": "High seas",
                    "value": 3
                  }
                ]
              },
              {
                "type": "radio",
                "label": "Management plan",
                "name": "management",
                "selected": null,
                "options": [{
                    "text": "Yes",
                    "value": 1
                  },
                  {
                    "text": "No",
                    "value": 2
                  },
                  {
                    "text": "In process",
                    "value": 3
                  }
                ]
              },
              {
                "type": "date",
                "label": "Date of adoption",
                "name": "date_of_adoption",
                "selected": null
              },
              {
                "type": "text",
                "label": "Change of delimitation",
                "name": "delimitation_change",
                "selected": null
              },
              {
                "type": "text",
                "label": "Change of legal status",
                "name": "legal_status_change",
                "selected": null
              },
              {
                "type": "text",
                "label": "Reasons for changes",
                "name": "changes_reasons",
                "selected": null
              }
            ]
          }
      this.info.data.table_2.articles.push(spami)
    },



  addSpa(){
      let spa ={
          article_title: {
            label: "Name of the SPA",
            selected: 'please specify a name',
            name: 'name',
            type: 'text'
          },
          article_items: [{
            type: 'checkbox',
            label: 'Implementation of Protection measures',
            info: 'Please select an option',
            selected: null,
            options: [
              { text: 'Dumping and releases of wastes/other substances likely to impair the integrity of the SPAMI', value: 1 },
              { text: 'Monitoring programme implemented', value: 2 },
              { text: 'Introduction and reintroduction of any species into the SPAMI', value: 3 },
              { text: 'Any activity or act likely to harm or disturb the species/ecosyste ms/natural, cultural or aesthetics characteristics of the SPAMI', value: 4 },
              { text: 'Activities in the zone surrounding the area', value: 5 },
            ],
            comments: "",
          }, {
            type: 'radio',
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
            comments: "",
          }]
        }
      this.info.data.table_3.articles.push(spa)
    },


    removeSpa(index) {
      // console.log(this.info.data.table_2.articles[index])
      console.log(index)
      this.info.data.table_3.articles.splice(index, 1)
    },

     removeSpami(index) {
      // console.log(this.info.data.table_2.articles[index])
      this.info.data.table_2.articles.splice(index, 1)
    },
  },
}
</script>

<style lang="css" scoped>

</style>
