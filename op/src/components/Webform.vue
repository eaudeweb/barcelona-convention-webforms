<template>
	<b-container style="position: relative">
    <center><h1 class="mb-3 mt-2">Offshore Protocol</h1></center>
    <center><h5><small class="text-muted">Implementation of the protocol for the protection of the mediterranean sea against pollution resulting from exploration and exploitation of the continental shelf and the sea bed and its subsoil (offshore protocol)</small></h5></center>
      <b-card no-body>
        <b-form validated novalidate @submit="onSubmit">
          <b-tabs card>
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



     // if(data.BC_OP.measuresdata.Row.length) {
     //        for(let agreement of data.BC_OP.measuresdata.Row) {
     //          // console.log(agreement.collection_id)
     //            let collection_id = agreement.collection_id
     //            let parent_collection_id = agreement.parent_collection_id
     //            for (let tab in this.form){
     //              // console.log(tab)
     //              if(tab === 'tab_1') {
     //                for(let article of this.form[tab].data.articles){
     //                  for(let article_item of article.article_items){
     //                    if(article_item.collection_id === collection_id) {
     //                      for(let item of article_item.items) {
     //                        if(item.type === 'changes') {
     //                          item.selected = agreement.changes
     //                        } else if (item.type === 'status') {
     //                          item.selected = agreement.status
     //                          item.comments = agreement.status_comments
     //                        } else {
     //                          item.comments = agreement.difficulties_comments;
     //                        }
     //                      }
     //                    }
     //                  }
     //                }
     //              }
     //            }
     //        }

     //      }

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
