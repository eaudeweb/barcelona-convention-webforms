<template>
	<b-container style="position: relative">
    <center><h1 class="mb-3 mt-2">Barcelona Convention</h1></center>
    <center><h5><small class="subtitle text-muted">Implementation of the Barcelona Convention for the Protection of the Marine Environment and the Coastal Region of the Mediterranean and its Protocols (Barcelona Convention)</small></h5></center>
      <b-card v-if="prefilled" no-body>
          
            <b-form validated novalidate @submit="onSubmit">
              <b-tabs card>
                <b-tab :title="doTitle(form.tab_1.label)" active>
                  <bilateralagreement tabId="1" :info.sync="form.tab_1"></bilateralagreement>
                </b-tab>
                <b-tab :title="doTitle(form.tab_2.label)" >
                  <lrmeasures tabId="2" :info.sync="form.tab_2"></lrmeasures>
                </b-tab>
                <b-tab :title="doTitle(form.tab_3.label)" >
                  <polmeasures tabId="3"  :info.sync="form.tab_3"></polmeasures>
                </b-tab>
                <b-tab :title="doTitle(form.tab_4.label)" >
                  <infoaccess tabId="4" :info.sync="form.tab_4"></infoaccess>
                </b-tab>
       
                <!-- <b-tab v-if="visibleTab" title="tabatabtab"></b-tab> -->
              </b-tabs>
              <formsubmit v-on:validationDone="getValidationData($event)" :info.sync="form"></formsubmit>
          </b-form>
<!--           <div  v-if="validation_data.length" ref="validationContainer" class="validation">
                  <b-btn @click="toggleValidationContainer" class="validation-toggle" variant="default">{{button_text}}</b-btn> 
                  <validation :validationData="validation_data"></validation>
          </div> -->
      </b-card>

    </b-container>
</template>

<script>

import {getCompanyData, getInstance} from '../api.js';
import BilateralAgreement from './BilateralAgreement.vue'
import LRMeasures from './LRMeasures.vue'
import PolMeasures from './PolMeasures.vue'
import InfoAccess from './InfoAccess.vue'
import FormSubmit from './FormSubmit.vue'
import Validation from './Validation.vue'
import {slugify} from '../utils.js';
// import instance from '../assets/empty-instance.js';

import form from '../assets/form.js'


export default {

  name: 'Webform',
  components: {
  	bilateralagreement: BilateralAgreement,
  	formsubmit: FormSubmit,
    lrmeasures: LRMeasures,
    polmeasures: PolMeasures,
    infoaccess: InfoAccess,
    validation: Validation
  },

  data () {
    return {
    	visibleTab: false,
      form: {},
      prefilled: false,
      validation_data: [],
      button_text: 'Hide list'
    }
  },

  created() {
    this.form = form;
    getInstance().then((response) => {
      this.prefill(response.data)
    })
  },

  methods: {
    slugifyTitle(text) {
      return slugify(text)
    },
    getValidationData(data) {
      // this.validation_data = data
    },
    prefill(data) {
      let agremeents = []; 
      
      if(data.BC_BCRS.bilateralmultilateralagreementsdata.length) {

        for(let agreement of data.BC_BCRS.bilateralmultilateralagreementsdata) {
          console.log(agreement)
          agremeents.push({
            name: agreement.Row.agreementname,
            reference: agreement.Row.website_other_reference
          })
        }

        this.form.tab_1.data.question.agreements = agremeents
      }


      if(data.BC_BCRS.measuresdata.length) {


        for(let agreement of data.BC_BCRS.measuresdata) {
          console.log(agreement)
          // console.log(agreement.Row.collection_id)
            let collection_id = agreement.Row.collection_id
            let parent_collection_id = agreement.Row.parent_collection_id
            for (let tab in this.form){
              // console.log(tab)
              if(tab != 'tab_1') {
                for(let article of this.form[tab].data.articles){
                  for(let article_item of article.article_items){
                    if(article_item.collection_id === collection_id) {
                      for(let item of article_item.items) {
                        if(item.type === 'changes') {
                          item.selected = agreement.Row.changes
                        } else if (item.type === 'status') {
                          item.selected = agreement.Row.status
                          item.comments = agreement.Row.status_comments
                        } else {
                          item.comments = agreement.Row.difficulties_comments;
                        }
                      }
                    }
                  }
                }
              }
            }
        }

      }

      if(data.BC_BCRS.measuredata_difficulty) {

          if(data.BC_BCRS.measuredata_difficulty.length) {
            for(let agreement of data.BC_BCRS.measuredata_difficulty) {
              console.log(agreement)

              // console.log(agreement.Row.collection_id)
                let collection_id = agreement.Row.collection_id
                let difficulty = agreement.Row.difficulty
                for (let tab in this.form){
                  // console.log(tab)
                  if(tab != 'tab_1') {
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

<style lang="css">
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