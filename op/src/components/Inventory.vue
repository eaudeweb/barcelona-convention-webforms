<template>
  <div v-if="info">
  <div class="question-wrapper">
        <h3>{{info.label}}</h3>

  <div class="answer" style="position: relative;">
        <div class="table-head">
            <b>{{info.data.table_label}}</b>
          </div>

          <div role="tablist">

            <div role="tablist">

              <b-card style="background: #eee" v-for="(article,index) in info.data.articles" :key="index" class="mb-1">
                <h5 style="cursor: pointer" href="#" v-b-toggle="`article_${index}`" variant="info">
                   {{article.article_title.label}} : {{article.article_title.selected}}
                  <span style="float:right">▼</span>
                </h5>
              <br>
              <b-form-input required :id="`${tabId}_${index}_${article.article_title.name}_${article.article_title.type}`" :type="article.article_title.type" :name="article.article_title.name" v-model="article.article_title.selected"></b-form-input>
              <b-btn variant="danger" @click="removeInventory(index)"> X</b-btn>

                <b-collapse class="mt-3" visible :id="`article_${index}`" accordion="my-accordion" role="tabpanel">
                  <div class="form-subsection" v-for="(item,item_index) in article.article_items">
                      <div class="form-fields">
                        <div class="mt-2">{{item.label}}  <small v-if="item.description" class="muted">({{item.description}})</small></div>
                            <!-- {{field}} -->
                          <b-form-input required v-if="item.type != 'select' && item.type!='textarea'" :id="`${tabId}_${index}_${item_index}_${item.name}_${item.name}`" :type="item.type" :name="item.name" v-model="item.selected"></b-form-input>

                          <b-form-select required v-else-if="item.type !='textarea'" :id="`${tabId}_${index}_${item_index}_${item.name}_${item.name}`" :name="item.name" v-model="item.selected" :options="item.options"></b-form-select>

                          <textarea v-else-if="item.type === 'textarea'" class="form-control" v-model ="item.selected"></textarea> 
                      </div>
                  </div>
                </b-collapse>
              </b-card>
               <b-btn style="
                  position: absolute;
                  top: 9px;
                  right: 13px;"
                  variant="primary" @click="addInventory"> + Add</b-btn>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>

import {slugify} from '../utils.js';

export default {

  name: 'Inventory',

  props: {
    info: null,
    tabId:null

  },

  created(){

    if(this.info.data.articles.length > 0){
    } else {
      this.addInventory()
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

  addInventory(){
    let inventory = {
        article_title: {
          label: 'Operator',
          type: 'text',
          name: 'operator',
          selected: '',
        },
        article_items: [{
          label: 'Production Start',
          description: '',
          type: 'date',
          name: 'production_start',
          selected: '',
        },{
          label: 'Current status',
          type: 'select',
          name: 'current_status',
          options: [
          {value: 1, text: 'closed down'},
          {value: 2, text: 'decommissioned'},
          {value: 3, text: 'derogation'},
          {value: 4, text: 'operational'}
          ],
          selected: '',
        },{
          label: 'Primary Production',
          type: 'select',
          name: 'primary_production',
          options: [
            {value: 1, text: 'Condensate'},
            {value: 2, text: 'Gas'},
            {value: 3, text: 'Oil and gas'},
            {value: 4, text: 'Oil'}
          ],
          selected: '',
        },{
          label: 'Category',
          type: 'select',
          name: 'category',
          options: [
            {value: 1, text: 'Fixed steel'},
            {value: 2, text: 'Floating concrete'},
            {value: 3, text: 'Floating Steel'},
            {value: 4, text: 'Gravity based concrete'},
            {value: 5, text: 'Subsea Steel'},
            {value: 6, text: 'Others'}
          ],
          selected: '',
        },{
          label: 'Weight Substructure',
          description: 'tonnes',
          type: 'number',
          name: 'weight_substructure',
          selected: '',
        },{
          label: 'Weight Topside',
          description: 'tonnes',
          type: 'number',
          name: 'weight_topside',
          selected: '',
        },{
          label: 'Remarks',
          description: 'E.g. measures taken to not affect other legitimate uses of the sea: navigation, fishing and the protection of the marine environment',
          type: 'textarea',
          name: 'remarks',
          selected: '',
        }]
      }
      this.info.data.articles.push(inventory)
    },


    removeInventory(index) {
      this.info.data.articles.splice(index, 1)
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

</style>
