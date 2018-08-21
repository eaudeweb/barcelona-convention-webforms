<template>
  <div v-if="info">
  <div class="question-wrapper">
        <h3>{{info.label}}</h3>

      


        <div class="answer">
          <div class="table-head">
            
            <b>{{info.data.table_1.table_label}}</b>
            <hr>
            <p v-html="info.data.table_1.table_note"></p>


          </div>

          <div role="tablist">
          <b-card v-for="(article,index) in info.data.table_1.articles" :key="article.article_title" class="mb-1">
            <h5 :id="titleSlugify(article.article_title)" style="cursor: pointer" href="#" v-b-toggle="`article_${index}`" variant="info">
              {{article.article_title}} <span style="float:right">▼</span>
            </h5>
            <b-collapse class="mt-3"  :id="`article_${index}`" accordion="my-accordion" role="tabpanel">
              <div class="form-section" v-for="(item_array,array_index) in article.article_items">
                <div class="form-subsection" v-for="item in item_array.items">
                <div class="mt-2"><b>{{item.label}}</b> <small class="muted" v-if="item.info">({{item.info}})</small></div>
                <p>
                  {{item.description}}
                </p>

                <div class="form-fields">
             
                  <b-form-input required v-if="item.type != 'textarea'" :disabled="item.disabled" :id="`${tabId}_${index}_${array_index}_${item.name}_${item.type}`" :type="item.type" :name="item.name" v-model="item.selected"></b-form-input>
                  <textarea class="form-control" v-else  v-model="item.selected"></textarea>
                </div>
                
           

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



  <div class="question-wrapper">
        <div class="question">
     
        </div>
        <div class="answer">
          <div class="table-head">
            <b>
              {{info.data.table_2.table_label}}
            </b>
          </div>
          <table class="table table-striped">
            <thead class="bg-primary" style="color: white">
              <th><span>Remove Row</span></th>
              <th v-for="item in info.data.table_2.articles[0].items"><span v-html="item.label"></span></th>
            </thead>
          <tbody>
            <tr v-for="(items,index) in info.data.table_2.articles">
              
            <td><b-btn variant="danger" @click="removeRow(index)">X</b-btn></td>
            <td v-for="item in items.items">
            <b-form-input v-if="item.label != 'Notes'" required v-model="item.selected"
                  type="number"
                  placeholder=""></b-form-input>
            <textarea style="height: auto" v-else class="form-control" v-model="item.selected"></textarea>
            </td>
          </tr>
          </tbody>
          </table>
          <b-btn style="    
              width: 100%;
              margin-top: -1.3rem;
              border-top-left-radius: 0;
              border-top-right-radius: 0;" 
              variant="default" @click="addRow">
               + Add another row
             </b-btn> 
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


  created(){
    if(this.info.data.table_2.articles.length === 0) {
      this.addRow()
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
     addRow(){
    let row = {
        items: [{
          label: 'Cr (tons)',
          selected: '',
        },
        {
          label: 'Cu (tons)',
          selected: '',
        },{
          label: 'Pb (tons)',
          selected: '',
        },{
          label: 'Ni (tons)',
          selected: '',
        },{
          label: 'Zn (tons)',
          selected: '',
        },{
          label: 'Oil (tons)',
          selected: '',
        },{
          label: 'ΣPAH9 (tons)',
          selected: '',
        },{
          label: 'ΣPAH16 (tons)',
          selected: '',
        },{
          label: 'ΣPCB7 (tons)',
          selected: '',
        },{
          label: 'HCB (kg)',
          selected: '',
        },{
          label: 'g-HCH (kg)',
          selected: '',
        },{
          label: 'p,p\' DDT (kg)',
          selected: '',
        },{
          label: 'p,p\' DDE (kg)',
          selected: '',
        },{
          label: 'p,p\' DDD (kg)',
          selected: '',
        },{
          label: 'ΣDDX (kg)',
          selected: '',
        },{
          label: 'TBT (kg)',
          selected: '',
        },{
          label: 'DBT (kg)',
          selected: '',
        },{
          label: 'Notes',
          selected: '',
        },]
      };

      console.log(this.info.data.table_2.articles)

      this.info.data.table_2.articles.push(row)
  },

  removeRow(index){
      this.info.data.table_2.articles.splice(index, 1)
  },


  },
}
</script>

<style lang="css" scoped>

.table {
  display: block;

  overflow-x: auto;
}

.table td {
  min-width: 100px;
}

</style>