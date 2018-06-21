<template>
	<b-container style="position: relative">
    <center><h1 class="mb-3 mt-2">Offshore Protocol</h1></center>
    <center><h5><small class="text-muted">Implementation of the protocol for the protection of the mediterranean sea against pollution resulting from exploration and exploitation of the continental shelf and the sea bed and its subsoil (offshore protocol)</small></h5></center>
      <b-card no-body>
        <b-form validated novalidate @submit="onSubmit">
          <b-tabs v-if="prefilled" card>
            <b-tab title="Reporting party" active>
              <countrytab tabId="0" :info.sync="form.country"></countrytab>
            </b-tab>
            <b-tab :title="doTitle(form.tab_1.label)">
     			    <lrmeasures tabId="1" :info.sync="form.tab_1"></lrmeasures>
            </b-tab>
            <b-tab :title="doTitle(form.tab_2.label)" >
              <permits tabId="2" :info.sync="form.tab_2"></permits>
            </b-tab>
            <b-tab :title="doTitle(form.tab_3.label)" >
              <inventory tabId="3"  :info.sync="form.tab_3"></inventory>
            </b-tab>
            <b-tab :title="doTitle(form.tab_4.label)" >
              <enfmeasures tabId="4" :info.sync="form.tab_4"></enfmeasures>
            </b-tab>
          </b-tabs>
        </b-form>
   			<formsubmit v-on:validationDone="getValidationData($event)" :info.sync="form"></formsubmit>
        <div  v-if="validation_data.length" ref="validationContainer" class="validation">
                  <b-btn @click="toggleValidationContainer" class="validation-toggle" variant="default">{{button_text}}</b-btn>
                  <validation :validationData="validation_data"></validation>
          </div>
      </b-card>

    </b-container>
</template>

<script>

import {getInstance, getCountry} from '../api.js';

import Countrytab from './Country.vue'
import LRMeasures from './LRMeasures.vue'
import Dummy from './Dummy.vue'
import Inventory from './Inventory.vue'
import ENFMeasures from './ENFMeasures.vue'
import Validation from './Validation.vue'
import PermitsAndQuantities from './PermitsAndQuantities.vue'


import FormSubmit from './FormSubmit.vue'
import form from '../assets/form.js'


export default {

  name: 'Webform',
  components: {
    countrytab: Countrytab,
    lrmeasures: LRMeasures,
    dummy: Dummy,
    inventory: Inventory,
    enfmeasures: ENFMeasures,
  	formsubmit: FormSubmit,
    validation: Validation,
    permits: PermitsAndQuantities
  },

  data () {
    return {
    	visibleTab: false,
      form: {},
      validation_data: [],
      button_text: 'Hide list',
      prefilled: false,
      country: '',
    }
  },

  created() {
    this.form = form;
      getInstance().then((response) => {
        let instance_data = response.data
        getCountry().then((response) => {
            this.country = response.data
            this.prefill(instance_data)
          })
      })
  },

  methods: {
    getValidationData(data) {
      this.validation_data = data
    },

    prefill(data) {
     for(let table in this.form.country.tables) {
          for (let value of this.form.country.tables[table]) {
            value.selected = data.BC_OP.contacting_party[value.name]
            if(value.name === 'partyname') {
              value.selected = this.country;
            }
          }
      }


     if(data.BC_OP.measuresdata.Row.length) {
            for(let agreement of data.BC_OP.measuresdata.Row) {
                let collection_id = agreement.collection_id
                let parent_collection_id = agreement.parent_collection_id
                for (let tab in this.form){
                  if(tab === 'tab_1') {
                    for(let article of this.form[tab].data.articles){
                      for(let article_item of article.article_items){
                        if(article_item.collection_id === collection_id) {
                          for(let item of article_item.items) {
                            if(item.type === 'changes') {
                              item.selected = agreement.changes
                            } else if (item.type === 'status') {
                              item.selected = agreement.status
                              item.comments = agreement.status_comments
                            } else {
                              item.comments = agreement.difficulties_comments;
                            }
                          }
                        }
                      }
                    }
                  }
                }
            }

          }




      if(data.BC_OP.measuredata_difficulty) {

          if(data.BC_OP.measuredata_difficulty.Row.length) {
            for(let agreement of data.BC_OP.measuredata_difficulty.Row) {

              // console.log(agreement.collection_id)
                let collection_id = agreement.collection_id
                let difficulty = agreement.difficulty
                for (let tab in this.form){
                  // console.log(tab)
                  if(tab === 'tab_1') {
                    for(let article of this.form[tab].data.articles){
                      for(let article_item of article.article_items){
                        if(article_item.collection_id === collection_id) {
                          for(let item of article_item.items) {
                            if(item.type === 'difficulties') {
                              item.selected.push(difficulty)
                            } 
                          }
                        }
                      }
                    }
                  }
                }
            }

          }
      }



    if (data.BC_OP.permits_and_quantities) {
      if (data.BC_OP.permits_and_quantities.Row && data.BC_OP.permits_and_quantities.Row.length && data.BC_OP.permits_and_quantities.Row.length > 1) {
        for (let perm of data.BC_OP.permits_and_quantities.Row) {
          // TODO: change this to colleciton collection id
          let title = perm.title
          for (let article of this.form.tab_2.data.articles) {
            if (article.article_title === title) {
              for (let article_items of article.article_items) {
                for(let items of article_items.items) {
                  items.selected = perm[items.name]
                }
              }
            }
          }
        }
      }
    }


    if (data.BC_OP.inventory_offshore_installations) {
      if (data.BC_OP.inventory_offshore_installations.Row.length) {
        for (let inventory of data.BC_OP.inventory_offshore_installations.Row) {
          // console.log(inventory)
          // let collection_id = agreement.collection_id
          // let difficulty = agreement.difficulty
          let inventoryJson = {
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
            }, {
              label: 'Current status',
              type: 'select',
              name: 'current_status',
              options: [{
                value: 1,
                text: 'closed down'
              }, {
                value: 2,
                text: 'decommissioned'
              }, {
                value: 3,
                text: 'derogation'
              }, {
                value: 4,
                text: 'operational'
              }],
              selected: '',
            }, {
              label: 'Primary Production',
              type: 'select',
              name: 'primary_production',
              options: [{
                value: 1,
                text: 'Condensate'
              }, {
                value: 2,
                text: 'Gas'
              }, {
                value: 3,
                text: 'Oil and gas'
              }, {
                value: 4,
                text: 'Oil'
              }],
              selected: '',
            }, {
              label: 'Category',
              type: 'select',
              name: 'category',
              options: [{
                value: 1,
                text: 'Fixed steel'
              }, {
                value: 2,
                text: 'Floating concrete'
              }, {
                value: 3,
                text: 'Floating Steel'
              }, {
                value: 4,
                text: 'Gravity based concrete'
              }, {
                value: 5,
                text: 'Subsea Steel'
              }, {
                value: 6,
                text: 'Others'
              }],
              selected: '',
            }, {
              label: 'Weight Substructure',
              description: 'tonnes',
              type: 'number',
              name: 'weight_substructure',
              selected: '',
            }, {
              label: 'Weight Topside',
              description: 'tonnes',
              type: 'number',
              name: 'weight_topside',
              selected: '',
            }, {
              label: 'Remarks',
              description: 'E.g. measures taken to not affect other legitimate uses of the sea: navigation, fishing and the protection of the marine environment',
              type: 'text',
              name: 'remarks',
              selected: '',
            }]
          }
          let inventoryobj = inventoryJson
          inventoryobj.article_title.selected = inventory.operator;
          for (let article of inventoryobj.article_items) {
            article.selected = inventory[article.name]
          }
          this.form.tab_3.data.articles.push(inventoryobj)
        }
      }
      else if (data.BC_OP.inventory_offshore_installations.Row) {
        let inventory = data.BC_OP.inventory_offshore_installations.Row;
        let inventoryJson = {
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
          }, {
            label: 'Current status',
            type: 'select',
            name: 'current_status',
            options: [{
              value: 1,
              text: 'closed down'
            }, {
              value: 2,
              text: 'decommissioned'
            }, {
              value: 3,
              text: 'derogation'
            }, {
              value: 4,
              text: 'operational'
            }],
            selected: '',
          }, {
            label: 'Primary Production',
            type: 'select',
            name: 'primary_production',
            options: [{
              value: 1,
              text: 'Condensate'
            }, {
              value: 2,
              text: 'Gas'
            }, {
              value: 3,
              text: 'Oil and gas'
            }, {
              value: 4,
              text: 'Oil'
            }],
            selected: '',
          }, {
            label: 'Category',
            type: 'select',
            name: 'category',
            options: [{
              value: 1,
              text: 'Fixed steel'
            }, {
              value: 2,
              text: 'Floating concrete'
            }, {
              value: 3,
              text: 'Floating Steel'
            }, {
              value: 4,
              text: 'Gravity based concrete'
            }, {
              value: 5,
              text: 'Subsea Steel'
            }, {
              value: 6,
              text: 'Others'
            }],
            selected: '',
          }, {
            label: 'Weight Substructure',
            description: 'tonnes',
            type: 'number',
            name: 'weight_substructure',
            selected: '',
          }, {
            label: 'Weight Topside',
            description: 'tonnes',
            type: 'number',
            name: 'weight_topside',
            selected: '',
          }, {
            label: 'Remarks',
            description: 'E.g. measures taken to not affect other legitimate uses of the sea: navigation, fishing and the protection of the marine environment',
            type: 'text',
            name: 'remarks',
            selected: '',
          }]
        }
        let inventoryobj = inventoryJson
        inventoryobj.article_title.selected = inventory.operator;
        for (let article of inventoryobj.article_items) {
          article.selected = inventory[article.name]
        }
        this.form.tab_3.data.articles.push(inventoryobj)
      }
    }





    if (data.BC_OP.enf_measures) {
      if (data.BC_OP.enf_measures.Row && data.BC_OP.enf_measures.Row.length && data.BC_OP.enf_measures.Row.length > 1) {
        for (let perm of data.BC_OP.enf_measures.Row) {
          let collection_id = perm.collection_id
          for (let article of this.form.tab_4.data.articles) {
            if (article.collection_id === collection_id) {
              for (let article_items of article.article_items) {
                  article_items.value = perm[article_items.name]
              }
            }
          }
        }
      }
    }


    this.prefilled = true;


    },


    doTitle(title) {
      return title.split(":")[0]
    },

    onSubmit (evt) {
       evt.preventDefault();
    },
    toggleValidationContainer(){
      if(this.button_text === 'Hide list') this.button_text = 'Show List'
        else this.button_text = 'Hide list'
      this.$refs.validationContainer.classList.toggle('closed')
    },
  },

}
</script>

<style lang="css" scoped>
.subtitle {
  max-width: 488px;margin: auto;display: block;
}

.container {
  max-width: 700px;
}

.validation {
  position: fixed;
  right: 0;
  transform:translateX(0);
  width: 300px;
  top: 0;
  background: white;
  border: 1px solid #aaa;
      padding: 1rem;
    box-shadow: 1px 1px 3px #aaa;
    z-index: 1;
  transition: all 300ms;
}

.validation.closed {
  transform: translateX(100%);
}

.validation-toggle {
      position: absolute;
    right: 100%;
    top: -1px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}
</style>
