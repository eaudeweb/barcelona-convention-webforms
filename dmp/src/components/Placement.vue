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
                
                  <b-form-input required :id="`${tabId}_${index}_${array_index}_${item.name}_${item.type}`" :type="item.type" :name="item.name" v-model="item.selected"></b-form-input>

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



    addDump() {
      let dump = {
          article_title: {
            label: 'Placement Site Code',
            name: 'placement_site_code',
            type: 'text',
            info: 'National Code given',
            selected: '',
          },
          article_items: [{
            label: 'Locations of the placement',
            additional_info: 'As defined in the Updated Guidelines on artificial reefs ',
            type: 'text',
            name: 'placement_location',
            selected: '',
            info: 'A Map showing the placement site location with coordinates including depth and distance to shore and distance to the other reefs marked (YES/NO)',
          }, {
            label: 'Purpose of Placement',
            type: 'text',
            name: 'placement_purpose',
            selected: '',
            info: '(a) Environmental purposes including restoration of habitat, ecosystem management and biodiversity (b) Living marine resources (c ) Tourism etc',
          }, {
            label: 'Material Characteristics and Quantity',
            type: 'text',
            additional_info: 'Inert materials which do not cause pollution through leaching, physical or chemical weathering and/or biological activity',
            name: 'material_characteristics_and_quantity',
            selected: '',
            info: 'Detailed explanation of the composition of the material and their quantity (in tons)',
          }, {
            label: 'Is Impact Hypothesis conducted and when by who (yes/no; date; name)',
            type: 'text',
            name: 'impact_hypothesis_status',
            selected: '',
            info: '',
          }, {
            label: 'The name of the permitting authority and the name of national legislation',
            type: 'text',
            name: 'permitting_authority_name',
            selected: '',
            info: 'Name of the authority; legislation name and number as official gazette'
          }, 
          {
            label: 'Plans for Monitoring activities are in place (3) (YES/NO)',
            type: 'text',
            name: 'plans_for_monitoring',
            selected: '',
            info: 'Explain the monitoring and modalities including a plan for pre-placement and post- placement monitoring and evaluation.',
            additional_info: 'Pre-placement monitoring plans should set a reference baseline. Post-Placement monitoring plans should aim to produce scientific evidence to impact hypothesis',
          }, 
          {
            label: 'Notes',
            type: 'text',
            name: 'notes',
            selected: '',
            info: 'Other relevant information in details',
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
    right:3rem;
}
</style>
