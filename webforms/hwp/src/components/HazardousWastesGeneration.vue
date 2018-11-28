<template>
  <div v-if="info">
  <div class="question-wrapper">
        <h3>{{info.label}}</h3>

      <div class="question">
        <div class="mt-2">{{info.data.table_1.question.label}} <small class="muted">{{info.data.table_1.question.info}}</small></div>
      </div>
       <!-- <div class="answer" v-if="!info.data.question.selected" style="position: relative;"> -->
       <div class="answer" style="position: relative;">
          <div class="table-head">
            <b>{{info.data.table_1.table_label}}</b>
          </div>
          <div role="tablist">
            <div role="tablist">
              <b-card style="background: #eee" v-for="(article,index) in info.data.table_1.articles" :key="index" class="mb-1">
                <h5 style="cursor: pointer" href="#" v-b-toggle="`article_${index}`" variant="info">
                  {{article.article_title}}
                  <span style="float:right">▼</span>
                </h5>
               <label>
               </label>
              <b-btn variant="danger" @click="removeSpa(index)"> X Remove hazard</b-btn> 

                <b-collapse class="mt-3" visible :id="`article_${index}`" accordion="my-accordion" role="tabpanel">
                  <div class="form-subsection" v-for="(item,item_index) in article.article_items">
               
                      <div class="form-fields">
                        <div class="mt-2">{{item.label}}</div>
                            <!-- {{field}} -->
                          <textarea class="form-control" required :id="`${tabId}_${index}_${item_index}_${item.name}_${item.name}`" :name="item.name" v-model="item.selected"></textarea>
              

                      </div>
                  </div>
                </b-collapse>
              </b-card>
               <b-btn style="    
                  position: absolute;
                  top: 9px;
                  right: 13px;" 
                  variant="primary" @click="addHazard"> + Add</b-btn> 
            </div>
          </div>
        </div>
        <br><br>


       <div class="answer" style="position: relative;">
          <div class="table-head">
            <b>{{info.data.table_2.table_label}}</b>
            <hr>
            <p>{{info.data.table_2.question}}</p>
          </div>
          <div role="tablist">
            <div role="tablist">
              <b-card style="background: #eee" v-for="(article,index) in info.data.table_2.articles" :key="index" class="mb-1">
                <h5 style="cursor: pointer" href="#" v-b-toggle="`table_2_article_${index}`" variant="info">
                  {{article.article_title}}
                  <span style="float:right">▼</span>
                </h5>
               <label>
                    {{article.article_title.label}}
               </label>

                <b-collapse class="mt-3" visible :id="`table_2_article_${index}`" accordion="my-accordion" role="tabpanel">
                  <div class="form-subsection" v-for="(item,item_index) in article.article_items">
               
                      <div class="form-fields mt-2">

                      <b-input-group size="md" :prepend="item.label">
                          <b-form-input required :id="`${tabId}_${index}_${item_index}_${item.name}_${item.name}`" :type="item.type" :name="item.name" v-model="item.selected"></b-form-input>
                      </b-input-group>

                      </div>
                  </div>
                </b-collapse>
              </b-card>
            </div>
          </div>
        </div>



        <br><br>

       <div class="answer" style="position: relative;">
          <div class="table-head">
            <b>{{info.data.table_3.table_label}}</b>
          </div>
          <div role="tablist">
            <div role="tablist">
              <b-card style="background: #eee" v-for="(article,index) in info.data.table_3.articles" :key="index" class="mb-1">
                <h5 style="cursor: pointer" href="#" v-b-toggle="`table_3_article_${index}`" variant="info">
                  {{article.article_title.name}} - {{article.article_title.label}}

                  <span style="float:right">▼</span>
                </h5>
               <label>
                   {{article.article_label.label}}

               </label>

                <b-collapse class="mt-3" visible :id="`table_3_article_${index}`" accordion="my-accordion" role="tabpanel">
                  <div class="form-subsection" v-for="(item,item_index) in article.article_items">
               
                      <div class="form-fields mt-2">

                      <b-input-group size="md" :prepend="item.label">
                          <b-form-input required :id="`${tabId}_${index}_${item_index}_${item.name}_${item.name}`" :type="item.type" :name="item.name" v-model="item.selected"></b-form-input>
                      </b-input-group>

                      </div>
                  </div>
                </b-collapse>
              </b-card>
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


 
  created(){
    if(this.info.data.table_1.articles.length === 0) {
      this.addHazard(0)
    } else {
      this.info.data.table_1.articles[this.info.data.table_1.articles.length - 1].article_title
    }
  },


  data () {
    return {
      hazardCount: 0
    }
  },

  methods: {
    titleSlugify(text) {
      return slugify(text)
    },

  addHazard(counter){
    this.hazardCount += 1
      let incident ={
          article_title: this.hazardCount,
          article_items: [{
            label: 'Waste description',
            type: 'textarea',
            name: 'wastedescription',
            selected: '',
          }, {
            label: 'Definition',
            type: 'textarea',
            name: 'definition',
            selected: '',
          }, {
            label: 'Main characteristics',
            type: 'textarea',
            name: 'main_characteristics',
            selected: '',
          }, {
            label: 'Transboundary movement procedure established',
            type: 'textarea',
            name: 'movement_procedure',
            selected: '',
          }]
        }
      this.info.data.table_1.articles.push(incident)
      console.log(incident)
    },


    removeSpa(index) {
      // console.log(this.info.data.table_2.articles[index])
      this.hazardCount -= 1

      if(this.hazardCount < 0) {
        this.hazardCount = 0;
      }

      this.info.data.table_1.articles.splice(index, 1)
      this.updateHazards();
    },

    updateHazards() {
      let hazardCount = 1;
      for(let hazard of this.info.data.table_1.articles) {

        hazard.article_title = hazardCount
        hazardCount += 1
      }
    }


  },
}
</script>

<style lang="css" scoped>

.btn-danger {
      position: absolute;
    top: 1rem;
    left: 4rem;
}

</style>