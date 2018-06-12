<template>
	<b-container style="position: relative">
    <center><h1 class="mb-3 mt-2">LBS Protocol</h1></center>
    <center><h5><small class="text-muted">Implementation of the protocol for the protection of the mediterranean sea against pollution from land-based sources and activities (LBS Protocol)</small></h5></center>
      <b-card no-body>
        <b-form validated novalidate @submit="onSubmit">
          <b-tabs card>
            <b-tab title="Country" active>
              <countrytab tabId="0" :info.sync="form.country"></countrytab>
            </b-tab>
            <b-tab :title="doTitle(form.tab_1.label)">
     			    <lrmeasures tabId="1" :info.sync="form.tab_1"></lrmeasures>
            </b-tab>
            <b-tab :title="doTitle(form.tab_2.label)" >
              <lbsprotocol tabId="2" :info.sync="form.tab_2"></lbsprotocol>
            </b-tab>
            <b-tab :title="doTitle(form.tab_3.label)" >
              <raps tabId="3"  :info.sync="form.tab_3"></raps>
            </b-tab>
            <b-tab :title="doTitle(form.tab_4.label)" >
              <naps tabId="4" :info.sync="form.tab_4"></naps>
            </b-tab>
            <b-tab :title="doTitle(form.tab_5.label)" >
              <monitoring tabId="5" :info.sync="form.tab_5"></monitoring>
            </b-tab>
            <b-tab :title="doTitle(form.tab_6.label)" >
              <enfmeasures tabId="6" :info.sync="form.tab_6"></enfmeasures>
            </b-tab>
          </b-tabs>
        </b-form>
   			<formsubmit :country="country" v-on:validationDone="getValidationData($event)" :info.sync="form"></formsubmit>
        <div  v-if="validation_data.length" ref="validationContainer" class="validation closed">
                  <b-btn @click="toggleValidationContainer" class="validation-toggle" variant="default">{{button_text}}</b-btn> 
                  <validation :validationData="validation_data"></validation>
          </div>
      </b-card>

    </b-container>
</template>

<script>

import {getCompanyData, getInstance, getCountry} from '../api.js';
import prefilldata from '../assets/prefill.js';
import LRMeasures from './LRMeasures.vue'
import LBSProtocol from './LBSProtocol.vue'
import RAPs from './RAPs.vue'
import NAPs from './NAPs.vue'
import Monitoring from './Monitoring.vue'
import ENFMeasures from './ENFMeasures.vue'
import Validation from './Validation.vue'
import Countrytab from './Country.vue'


import FormSubmit from './FormSubmit.vue'
import form from '../assets/form.js'



export default {

  name: 'Webform',
  components: {
    lrmeasures: LRMeasures,
    lbsprotocol: LBSProtocol,
    raps: RAPs,
    naps: NAPs,
    monitoring: Monitoring,
    enfmeasures: ENFMeasures,
  	formsubmit: FormSubmit,
    validation: Validation,
    countrytab: Countrytab
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
      this.prefill(response.data)
    })
    getCountry().then((response) => {
      this.country = response.data
    })
    // this.prefill(prefilldata)
  },

  methods: {
    getValidationData(data) {
      this.validation_data = data
    },
    prefill(data){

      

      for(let table in this.form.country.tables) {
          for (let value of this.form.country.tables[table]) {
            value.selected = data.BC_LBS.contacting_party[value.name]
          }
      }


      
      if(data.BC_LBS.enforcementmeasuresdata){
        if(data.BC_LBS.enforcementmeasuresdata.Row && data.BC_LBS.enforcementmeasuresdata.Row.length && data.BC_LBS.enforcementmeasuresdata.Row.length > 1){
          for(let measures of data.BC_LBS.enforcementmeasuresdata.Row) {
              let collection_id = measures.collection_id
               for (let tab in this.form){
                    if(tab ==='tab_6') {
                      for(let article of this.form[tab].data.articles){
                        if(article.collection_id === collection_id) {
                            for(let article_items of article.article_items){
                              for(let measure in measures){
                                if(this.matchEnfField(measure) === article_items.name) {
                                  article_items.value = measures[measure]
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


    if(data.BC_LBS.lbsinventorydata){
      if(data.BC_LBS.lbsinventorydata.Row && data.BC_LBS.lbsinventorydata.Row.length && data.BC_LBS.lbsinventorydata.Row.length > 1){
      let inv_reported = data.BC_LBS.lbsinventorydata.Row[0].reportednbb
      this.form.tab_2.data.question.selected = inv_reported
        for(let invdata of data.BC_LBS.lbsinventorydata.Row) {
            let description = invdata.description
             for (let tab in this.form){
                  if(tab ==='tab_2') {
                    for(let article of this.form[tab].data.articles){
                      for(let article_items of article.article_items){
                        if(article_items.description === description) {
                          for(let item of article_items.items){
                            // console.log(item)
                            for(let invitem in invdata){
                              if(this.matchInvField(item.label) === invitem) {
                                  item.selected = invdata[invitem] 
                                  item.value = invdata[invitem]
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
    }





      if(data.BC_LBS.measuresdata.Row.length) {
        for(let agreement of data.BC_LBS.measuresdata.Row) {
            let collection_id = agreement.collection_id
            let parent_collection_id = agreement.parent_collection_id
            for (let tab in this.form){
              if(tab != 'tab_2' && tab != 'tab_6' && tab != 'country' ) {
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

      if(data.BC_LBS.measuredata_difficulty) {
          if(data.BC_LBS.measuredata_difficulty.Row.length) {
            for(let agreement of data.BC_LBS.measuredata_difficulty.Row) {
                let collection_id = agreement.collection_id
                let difficulty = agreement.difficulty
                for (let tab in this.form){
                  // console.log(tab)
                  if(tab != 'tab_2' && tab != 'tab_6' && tab != 'country') {
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


     matchEnfField(name){
      switch (name) {
        case 'inspectionnumber':
          return 'inspections'
          break;
        case 'casesnumber':
          return 'non_compliance'
          break;
        case 'fineissuesnumber':
          return 'total_amount'
          break;
        case 'suspensionsnumber':
          return 'suspensions'
          break;
        case 'shutdownsnumber':
          return 'shutdowns'
          break;
        case 'othernumber':
          return 'enforcement'
          break;
        case 'cleannumber':
          return 'implemented'
          break;
        case 'comment':
          return 'remarks'
          break;
        default:
          return false;
          break;
      }
    },


    matchInvField(label){
      switch (label) {
        case 'Pollutant name':
          return 'pollutantgroup'
          break;
        case 'Sector of Activity':
          return 'activitysector'
          break;
        case 'Sub-sector':
          return 'activitysubsector'
          break;
        case 'Release to Air - Information based on':
          return 'reportedinfotypeair'
          break;
        case 'Release to Air - Quantities Kg/year':
          return 'airquantity'
          break;
        case 'Release to Water - Information based on':
          return 'reportedinfotypewater'
          break;
        case 'Release to Water - Quantities Kg/year':
          return 'waterquantity'
          break;
        case 'Release to Soil - Information based on':
          return 'reportedinfotypesoil'
          break;
        case 'Release to Soil - Quantities Kg/year':
          return 'soilquantity'
          break;
        default:
          // statements_def
          break;
      }
    }

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
