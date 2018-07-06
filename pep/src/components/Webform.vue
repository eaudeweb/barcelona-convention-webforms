<template>
	<b-container style="position: relative">
    <center><h1 class="mb-3 mt-2">Prevention and Emergency Protocol</h1></center>
    <center><h5><small class="text-muted">IMPLEMENTATION OF THE PROTOCOL CONCERNING COOPERATION IN PREVENTING POLLUTION FROM SHIPS AND, IN CASES OF EMERGENCY,
      COMBATING POLLUTION OF THE MEDITERRANEAN SEA (PREVENTION AND EMERGENCY PROTOCOL)</small></h5></center>
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
              <opmeasures tabId="2" :info.sync="form.tab_2"></opmeasures>
            </b-tab>
            <b-tab :title="doTitle(form.tab_3.label)" >
              <polincidents tabId="3" :info.sync="form.tab_3"></polincidents>
            </b-tab>
          </b-tabs>
        </b-form>
   			<formsubmit :country.sync="country" :info.sync="form"></formsubmit>
        <div  v-if="validation_data.length" ref="validationContainer" class="validation">
            <b-btn @click="toggleValidationContainer" class="validation-toggle" variant="default">{{button_text}}</b-btn>
            <validation :validationData="validation_data"></validation>
        </div>
      </b-card>

    </b-container>
</template>

<script>

import {getInstance, getCountry} from '../api.js';

import LRMeasures from './LRMeasures.vue'
import OpMeasures from './OpMeasures.vue'
import PolIncidents from './PolIncidents.vue'
import Validation from './Validation.vue'
import Countrytab from './Country.vue'
// import incidentJson from '../assets/incident.js';


import FormSubmit from './FormSubmit.vue'
import form from '../assets/form.js'


export default {

  name: 'Webform',
  components: {
    lrmeasures: LRMeasures,
    opmeasures: OpMeasures,
    polincidents: PolIncidents,
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

    prefill(data){

      let agreements = [];

      for(let table in this.form.country.tables) {
          for (let value of this.form.country.tables[table]) {
            value.selected = data.BC_PEP.contacting_party[value.name]
            if(value.name === 'partyname') {
              value.selected = this.country;
            }
          }
      }

     if(data.BC_PEP.measuresdata.Row.length) {
            for(let agreement of data.BC_PEP.measuresdata.Row) {
              // console.log(agreement.collection_id)
                let collection_id = agreement.collection_id
                let parent_collection_id = agreement.parent_collection_id
                for (let tab in this.form){
                  // console.log(tab)
                  if(tab != 'tab_3' && tab != 'country') {
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


      if(data.BC_PEP.measuredata_difficulty) {

          if(data.BC_PEP.measuredata_difficulty.Row.length) {
            for(let agreement of data.BC_PEP.measuredata_difficulty.Row) {

              // console.log(agreement.collection_id)
                let collection_id = agreement.collection_id
                let difficulty = agreement.difficulty
                for (let tab in this.form){
                  // console.log(tab)
                  if(tab != 'tab_3' && tab != 'country') {
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

      var question = data.BC_PEP.pollincidentsInfo
      this.form.tab_3.data.question.selected = question;

          if(data.BC_PEP.pollincidents) {
            if(data.BC_PEP.pollincidents.Row) {
              if(data.BC_PEP.pollincidents.Row.length) {
                for(let incident of data.BC_PEP.pollincidents.Row) {

                  // console.log(incident)
                    // let collection_id = agreement.collection_id
                    // let difficulty = agreement.difficulty
                    

                    var incidentJson = {
                            article_title: {
                              label: "Ship name or IMO number",
                              value: 'Ship name or IMO number',
                              name: 'name',
                              type: 'text'
                            },
                            article_items: [{
                                type: 'text',
                                name: 'latitude',
                                label: 'Latitude: decimal (36.406944) or DMS (36°24\'25”N)',
                                selected: '',
                              },
                              {
                                type: 'text',
                                name: 'longitude',
                                label: 'Longitude: decimal (4.646111) or DMS(4°38\'46”)',
                                selected: '',
                              },
                              {
                                type: 'text',
                                name: 'geo_info',
                                label: 'Alternative geographical information',
                                selected: '',
                                placeholder: 'e.g. closest shore location'
                              },
                              {
                                type: 'text',
                                name: 'country',
                                label: 'Country',
                                selected: '',
                              },
                              {
                                type: 'select',
                                label: 'Accident Type',
                                name: 'accident',
                                selected: null,
                                options: [
                                  { text: 'Please select one item', value: null },
                                  { text: 'Blow-out', value: 1 },
                                  { text: 'cargo transfer failure', value: 2 },
                                  { text: 'contact', value: 3 },
                                  { text: 'collision', value: 4 },
                                  { text: 'engine or machine breakdown', value: 5 },
                                  { text: 'fire or explosion', value: 6 },
                                  { text: 'grounding', value: 7 },
                                  { text: 'foundering', value: 8 },
                                  { text: 'hull structural failure', value: 9 },
                                  { text: 'installation structural failure', value: 10 },
                                  { text: 'oil and gas leak', value: 11 },
                                  { text: 'other', value: 12 }
                                ]
                              },
                              {
                                type: 'date',
                                name: 'date',
                                label: 'Date',
                                selected: '',
                              },
                              {
                                label: 'Pollution',
                                type: 'radio',
                                name: 'pollution',
                                selected: null,
                                options: [
                                  { text: 'Yes', value: true },
                                  { text: 'No', value: false }
                                ]
                              },
                              {
                                label: 'Pollution type',
                                type: 'radio',
                                name: 'pollution_type',
                                selected: null,
                                options: [
                                  { text: 'MARPOL Annex I', value: 1 },
                                  { text: 'MARPOL Annex II ', value: 2 },
                                  { text: 'MARPOL Annex III ', value: 3 }

                                ]
                              },
                              {
                                type: 'select',
                                label: 'Ship Category',
                                name: 'ship_category',
                                selected: null,
                                options: [
                                  { text: 'Please select one item', value: null },
                                  { text: 'passenger ship', value: 1 },
                                  { text: 'fishing vessel', value: 2 },
                                  { text: 'bulk carrier', value: 3 },
                                  { text: 'oil tanker', value: 4 },
                                  { text: 'general cargo ship', value: 5 },
                                  { text: 'ro-ro cargo ship', value: 6 },
                                  { text: 'container', value: 7 },
                                  { text: 'chemical tanker', value: 8 },
                                  { text: 'other', value: 9 }
                                ]
                              },
                              {
                                type: 'text',
                                name: 'ship_flag',
                                label: 'Ship flag',
                                selected: '',
                              },
                              {
                                type: 'text',
                                name: 'offshore_name_id',
                                label: 'Offshore installation name or ID number',
                                selected: '',
                              },
                              {
                                type: 'select',
                                label: 'Offshore installation type',
                                name: 'installation_type',
                                selected: null,
                                options: [
                                  { text: 'Please select one item', value: null },
                                  { text: 'floating concrete', value: 1 },
                                  { text: 'gravity-based concrete', value: 2 },
                                  { text: 'floating steel', value: 3 },
                                  { text: 'fixed steel', value: 4 },
                                  { text: 'subsea steel ', value: 5 },
                                  { text: 'other', value: 6 }
                                ]
                              },
                              {
                                type: 'text',
                                name: 'oil_name_id',
                                label: 'Oil handling facility name or ID number',
                                selected: '',
                              },
                              {
                                type: 'select',
                                label: 'Oil handling facility type',
                                name: 'oil_type',
                                selected: null,
                                options: [
                                  { text: 'Please select one item', value: null },
                                  { text: 'Oil terminal', value: 1 },
                                  { text: 'port', value: 2 },
                                  { text: 'power station refinery', value: 3 }
                                ]
                              },
                              {
                                label: 'Have any actions been taken?',
                                type: 'radio',
                                name: 'actions',
                                selected: null,
                                options: [
                                  { text: 'Yes', value: true },
                                  { text: 'No', value: false }
                                ]
                              },

                              {
                                type: 'text',
                                name: 'actions_taken',
                                label: 'If yes, specify the actions taken',
                                selected: ''
                              }

                            ]
                          }

                    let incidentobj = incidentJson


                    incidentobj.article_title.value = incident.ship_name;
                  for(let article of incidentobj.article_items){
                      article.selected = incident[article.name]
                      console.log(article.name)
                      console.log(incident[article.name])
                  }
                  this.form.tab_3.data.articles.push(incidentobj)
              }
          } else  {
                    let incident = data.BC_PEP.pollincidents.Row;


                                 var incidentJson = {
                            article_title: {
                              label: "Ship name or IMO number",
                              value: 'Ship name or IMO number',
                              name: 'name',
                              type: 'text'
                            },
                            article_items: [{
                                type: 'text',
                                name: 'latitude',
                                label: 'Latitude: decimal (36.406944) or DMS (36°24\'25”N)',
                                selected: '',
                              },
                              {
                                type: 'text',
                                name: 'longitude',
                                label: 'Longitude: decimal (4.646111) or DMS(4°38\'46”)',
                                selected: '',
                              },
                              {
                                type: 'text',
                                name: 'geo_info',
                                label: 'Alternative geographical information',
                                selected: '',
                                placeholder: 'e.g. closest shore location'
                              },
                              {
                                type: 'text',
                                name: 'country',
                                label: 'Country',
                                selected: '',
                              },
                              {
                                type: 'select',
                                label: 'Accident Type',
                                name: 'accident',
                                selected: null,
                                options: [
                                  { text: 'Please select one item', value: null },
                                  { text: 'Blow-out', value: 1 },
                                  { text: 'cargo transfer failure', value: 2 },
                                  { text: 'contact', value: 3 },
                                  { text: 'collision', value: 4 },
                                  { text: 'engine or machine breakdown', value: 5 },
                                  { text: 'fire or explosion', value: 6 },
                                  { text: 'grounding', value: 7 },
                                  { text: 'foundering', value: 8 },
                                  { text: 'hull structural failure', value: 9 },
                                  { text: 'installation structural failure', value: 10 },
                                  { text: 'oil and gas leak', value: 11 },
                                  { text: 'other', value: 12 }
                                ]
                              },
                              {
                                type: 'date',
                                name: 'date',
                                label: 'Date',
                                selected: '',
                              },
                              {
                                label: 'Pollution',
                                type: 'radio',
                                name: 'pollution',
                                selected: null,
                                options: [
                                  { text: 'Yes', value: true },
                                  { text: 'No', value: false }
                                ]
                              },
                              {
                                label: 'Pollution type',
                                type: 'radio',
                                name: 'pollution_type',
                                selected: null,
                                options: [
                                  { text: 'MARPOL Annex I', value: 1 },
                                  { text: 'MARPOL Annex II ', value: 2 },
                                  { text: 'MARPOL Annex III ', value: 3 }

                                ]
                              },
                              {
                                type: 'select',
                                label: 'Ship Category',
                                name: 'ship_category',
                                selected: null,
                                options: [
                                  { text: 'Please select one item', value: null },
                                  { text: 'passenger ship', value: 1 },
                                  { text: 'fishing vessel', value: 2 },
                                  { text: 'bulk carrier', value: 3 },
                                  { text: 'oil tanker', value: 4 },
                                  { text: 'general cargo ship', value: 5 },
                                  { text: 'ro-ro cargo ship', value: 6 },
                                  { text: 'container', value: 7 },
                                  { text: 'chemical tanker', value: 8 },
                                  { text: 'other', value: 9 }
                                ]
                              },
                              {
                                type: 'text',
                                name: 'ship_flag',
                                label: 'Ship flag',
                                selected: '',
                              },
                              {
                                type: 'text',
                                name: 'offshore_name_id',
                                label: 'Offshore installation name or ID number',
                                selected: '',
                              },
                              {
                                type: 'select',
                                label: 'Offshore installation type',
                                name: 'installation_type',
                                selected: null,
                                options: [
                                  { text: 'Please select one item', value: null },
                                  { text: 'floating concrete', value: 1 },
                                  { text: 'gravity-based concrete', value: 2 },
                                  { text: 'floating steel', value: 3 },
                                  { text: 'fixed steel', value: 4 },
                                  { text: 'subsea steel ', value: 5 },
                                  { text: 'other', value: 6 }
                                ]
                              },
                              {
                                type: 'text',
                                name: 'oil_name_id',
                                label: 'Oil handling facility name or ID number',
                                selected: '',
                              },
                              {
                                type: 'select',
                                label: 'Oil handling facility type',
                                name: 'oil_type',
                                selected: null,
                                options: [
                                  { text: 'Please select one item', value: null },
                                  { text: 'Oil terminal', value: 1 },
                                  { text: 'port', value: 2 },
                                  { text: 'power station refinery', value: 3 }
                                ]
                              },
                              {
                                label: 'Have any actions been taken?',
                                type: 'radio',
                                name: 'actions',
                                selected: null,
                                options: [
                                  { text: 'Yes', value: true },
                                  { text: 'No', value: false }
                                ]
                              },

                              {
                                type: 'text',
                                name: 'actions_taken',
                                label: 'If yes, specify the actions taken',
                                selected: ''
                              }

                            ]
                          }
                    let incidentobj = incidentJson
                    incidentobj.article_title.value = incident.ship_name;
                  for(let article of incidentobj.article_items){
                      article.selected = incident[article.name]
                  }
                  this.form.tab_3.data.articles.push(incidentobj)
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
