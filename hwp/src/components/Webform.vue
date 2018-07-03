<template>
	<b-container style="position: relative">
    <center><h1 class="mb-3 mt-2">Hazardous Wastes Protocol</h1></center>
    <center><h5><small class="text-muted">IMPLEMENTATION OF THE PROTOCOL ON THE PREVENTION OF POLLUTION OF THE MEDITERRANEAN SEA BY
      TRANSBOUNDARY MOVEMENTS OF HAZARDOUS WASTES AND THEIR DISPOSAL (HAZARDOUS WASTES PROTOCOL)</small></h5></center>
      <br><br><br>
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
              <waste tabId="2" :info.sync="form.tab_2"></waste>
            </b-tab>
            <b-tab :title="doTitle(form.tab_3.label)" >
              <trwastes tabId="3"  :info.sync="form.tab_3"></trwastes>
            </b-tab>
            <b-tab :title="doTitle(form.tab_4.label)" >
              <accidents tabId="2" :info.sync="form.tab_4"></accidents>
            </b-tab>
            <b-tab :title="doTitle(form.tab_5.label)" >
              <enfmeasures tabId="2" :info.sync="form.tab_5"></enfmeasures>
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
import Validation from './Validation.vue'
import Wastes from './HazardousWastesGeneration.vue'
import TransWastes from './TransboundaryWastesMovements.vue'
import Accidents from './Accidents.vue'
import ENFMeasures from './ENFMeasures.vue'



import FormSubmit from './FormSubmit.vue'
import form from '../assets/form.js'


export default {

  name: 'Webform',
  components: {
    countrytab: Countrytab,
    lrmeasures: LRMeasures,
  	formsubmit: FormSubmit,
    validation: Validation,
    waste: Wastes,
    trwastes: TransWastes,
    accidents: Accidents,
    enfmeasures: ENFMeasures
  },

  data () {
    return {
    	visibleTab: false,
      form: {},
      validation_data: [],
      button_text: 'Hide list',
      country: '',
      prefilled: false,
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
            value.selected = data.BC_HWP.contacting_party[value.name]
            if(value.name === 'partyname') {
              value.selected = this.country;
            }
          }
      }





           if(data.BC_HWP.measuresdata.Row.length) {
            for(let agreement of data.BC_HWP.measuresdata.Row) {
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




      if(data.BC_HWP.measuredata_difficulty) {

          if(data.BC_HWP.measuredata_difficulty.Row.length) {
            for(let agreement of data.BC_HWP.measuredata_difficulty.Row) {

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







    if (data.BC_HWP.hazardous_wastes_domestic_legislation) {
    if (data.BC_HWP.hazardous_wastes_domestic_legislation.Row) {

      if (data.BC_HWP.hazardous_wastes_domestic_legislation.Row.length) {
        for (let inventory of data.BC_HWP.hazardous_wastes_domestic_legislation.Row) {
          // console.log(inventory)
          // let collection_id = agreement.collection_id
          // let difficulty = agreement.difficulty

          let inventoryJson = {
              article_title: inventory.title,
              article_items: [{
                label: 'Waste description',
                type: 'text',
                name: 'wastedescription',
                selected: '',
              }, {
                label: 'Definition',
                type: 'text',
                name: 'definition',
                selected: '',
              }, {
                label: 'Main characteristics',
                type: 'text',
                name: 'main_characteristics',
                selected: '',
              }, {
                label: 'Transboundary movement procedure established',
                type: 'text',
                name: 'movement_procedure',
                selected: '',
              }]
            }
          let inventoryobj = inventoryJson
          for (let article of inventoryobj.article_items) {
            article.selected = inventory[article.name]
          }
          this.form.tab_2.data.table_1.articles.push(inventoryobj)
        }
      }
      else {
        let inventory = data.BC_HWP.hazardous_wastes_domestic_legislation.Row;
        let inventoryJson = {
              article_title: inventory.title,
              article_items: [{
                label: 'Waste description',
                type: 'text',
                name: 'wastedescription',
                selected: '',
              }, {
                label: 'Definition',
                type: 'text',
                name: 'definition',
                selected: '',
              }, {
                label: 'Main characteristics',
                type: 'text',
                name: 'main_characteristics',
                selected: '',
              }, {
                label: 'Transboundary movement procedure established',
                type: 'text',
                name: 'movement_procedure',
                selected: '',
              }]
            }
        let inventoryobj = inventoryJson
        for (let article of inventoryobj.article_items) {
          article.selected = inventory[article.name]
        }
        this.form.tab_2.data.table_1.articles.push(inventoryobj)
      }
      }
    }











    if (data.BC_HWP.total_hazardous_wastes) {
      if (data.BC_HWP.total_hazardous_wastes.Row && data.BC_HWP.total_hazardous_wastes.Row.length && data.BC_HWP.total_hazardous_wastes.Row.length > 1) {
        for (let year of data.BC_HWP.total_hazardous_wastes.Row) {
          let collection_id = year.collection_id
          for (let article of this.form.tab_2.data.table_2.articles) {
            if (article.collection_id === collection_id) {
              for (let article_items of article.article_items) {
                  if(article_items.name == year.year) {
                     article_items.selected = year.hazardous_waste_value
                  }
              }
            }
          }
        }
      }
    }



    if (data.BC_HWP.wastes_y) {
      if (data.BC_HWP.wastes_y.Row && data.BC_HWP.wastes_y.Row.length && data.BC_HWP.wastes_y.Row.length > 1) {
        for (let year of data.BC_HWP.wastes_y.Row) {
          let collection_id = year.collection_id
          for (let article of this.form.tab_2.data.table_3.articles) {
            if (article.collection_id === collection_id) {
              for (let article_items of article.article_items) {
                  if(article_items.name == year.year) {
                     article_items.selected = year.hazardous_waste_value
                  }
              }
            }
          }
        }
      }
    }






    if (data.BC_HWP.export_hazardous_wastes_total) {
      if (data.BC_HWP.export_hazardous_wastes_total.Row) {
        for (let total in data.BC_HWP.export_hazardous_wastes_total.Row) {
          for (let article of this.form.tab_3.data.table_1.questions) {
                     article.selected = data.BC_HWP.export_hazardous_wastes_total.Row[article.name]
          }

        }
      }
    }


    if (data.BC_HWP.import_hazardous_wastes_total) {
      if (data.BC_HWP.import_hazardous_wastes_total.Row) {
        for (let total in data.BC_HWP.import_hazardous_wastes_total.Row) {
          for (let article of this.form.tab_3.data.table_2.questions) {
                     article.selected = data.BC_HWP.import_hazardous_wastes_total.Row[article.name]
          }

        }
      }
    }









    if (data.BC_HWP.export_hazardous_wastes_y) {
    if (data.BC_HWP.export_hazardous_wastes_y.Row) {

      if (data.BC_HWP.export_hazardous_wastes_y.Row.length) {
        for (let inventory of data.BC_HWP.export_hazardous_wastes_y.Row) {
        let inventoryJson = {
          article_title: {
            label: 'Y code',
            type: 'text',
            name: 'y_code',
            category_label: 'Category of waste',
            note: 'The Y code must be specified or, if none is applicable, the waste streams/having wastes as constituents',
            selected: inventory.title,
          },
          article_items: [ {
            label: 'Waste streams/ having wastes as constituents',
            type: 'text',
            name: 'waste_streams',
            category_label: 'Category of waste',
            note: 'Not required to fill in if the Y-code has been specified.',
            selected: '',
          }, {
            label: 'UN class',
            type: 'text',
            name: 'un_class',
            category_label: 'Hazardous characteristics (Annex II)',
            note: 'Optional to fill in.',
            selected: '',
          }, {
            label: 'H\' class',
            type: 'text',
            name: 'h_class',
            category_label: 'Hazardous characteristics (Annex II)',
            note: 'Optional to fill in.',
            selected: '',
          }, {
            label: 'Characteristics',
            type: 'text',
            name: 'characteristics',
            category_label: 'Hazardous characteristics (Annex II)',
            note: 'Optional to fill in.',
            selected: '',
          }, {
            label: 'Amount exported (metric tons)',
            type: 'number',
            category_label: 'Other information',
            name: 'amount_exported',
            note: '',
            selected: '',
          }, {
            label: 'Country/countries of transit',
            type: 'select',
            category_label: 'Other information',
            name: 'country_of_transit',
            selected: '',
            options: [{
                "value": "AF",
                "text": "Afghanistan"
              },
              {
                "value": "AX",
                "text": "Åland Islands"
              },
              {
                "value": "AL",
                "text": "Albania"
              },
              {
                "value": "DZ",
                "text": "Algeria"
              },
              {
                "value": "AS",
                "text": "American Samoa"
              },
              {
                "value": "AD",
                "text": "Andorra"
              },
              {
                "value": "AO",
                "text": "Angola"
              },
              {
                "value": "AI",
                "text": "Anguilla"
              },
              {
                "value": "AQ",
                "text": "Antarctica"
              },
              {
                "value": "AG",
                "text": "Antigua and Barbuda"
              },
              {
                "value": "AR",
                "text": "Argentina"
              },
              {
                "value": "AM",
                "text": "Armenia"
              },
              {
                "value": "AW",
                "text": "Aruba"
              },
              {
                "value": "AU",
                "text": "Australia"
              },
              {
                "value": "AT",
                "text": "Austria"
              },
              {
                "value": "AZ",
                "text": "Azerbaijan"
              },
              {
                "value": "BS",
                "text": "Bahamas"
              },
              {
                "value": "BH",
                "text": "Bahrain"
              },
              {
                "value": "BD",
                "text": "Bangladesh"
              },
              {
                "value": "BB",
                "text": "Barbados"
              },
              {
                "value": "BY",
                "text": "Belarus"
              },
              {
                "value": "BE",
                "text": "Belgium"
              },
              {
                "value": "BZ",
                "text": "Belize"
              },
              {
                "value": "BJ",
                "text": "Benin"
              },
              {
                "value": "BM",
                "text": "Bermuda"
              },
              {
                "value": "BT",
                "text": "Bhutan"
              },
              {
                "value": "BO",
                "text": "Bolivia, Plurinational State of"
              },
              {
                "value": "BQ",
                "text": "Bonaire, Sint Eustatius and Saba"
              },
              {
                "value": "BA",
                "text": "Bosnia and Herzegovina"
              },
              {
                "value": "BW",
                "text": "Botswana"
              },
              {
                "value": "BV",
                "text": "Bouvet Island"
              },
              {
                "value": "BR",
                "text": "Brazil"
              },
              {
                "value": "IO",
                "text": "British Indian Ocean Territory"
              },
              {
                "value": "BN",
                "text": "Brunei Darussalam"
              },
              {
                "value": "BG",
                "text": "Bulgaria"
              },
              {
                "value": "BF",
                "text": "Burkina Faso"
              },
              {
                "value": "BI",
                "text": "Burundi"
              },
              {
                "value": "KH",
                "text": "Cambodia"
              },
              {
                "value": "CM",
                "text": "Cameroon"
              },
              {
                "value": "CA",
                "text": "Canada"
              },
              {
                "value": "CV",
                "text": "Cape Verde"
              },
              {
                "value": "KY",
                "text": "Cayman Islands"
              },
              {
                "value": "CF",
                "text": "Central African Republic"
              },
              {
                "value": "TD",
                "text": "Chad"
              },
              {
                "value": "CL",
                "text": "Chile"
              },
              {
                "value": "CN",
                "text": "China"
              },
              {
                "value": "CX",
                "text": "Christmas Island"
              },
              {
                "value": "CC",
                "text": "Cocos (Keeling) Islands"
              },
              {
                "value": "CO",
                "text": "Colombia"
              },
              {
                "value": "KM",
                "text": "Comoros"
              },
              {
                "value": "CG",
                "text": "Congo"
              },
              {
                "value": "CD",
                "text": "Congo, the Democratic Republic of the"
              },
              {
                "value": "CK",
                "text": "Cook Islands"
              },
              {
                "value": "CR",
                "text": "Costa Rica"
              },
              {
                "value": "CI",
                "text": "Côte d'Ivoire"
              },
              {
                "value": "HR",
                "text": "Croatia"
              },
              {
                "value": "CU",
                "text": "Cuba"
              },
              {
                "value": "CW",
                "text": "Curaçao"
              },
              {
                "value": "CY",
                "text": "Cyprus"
              },
              {
                "value": "CZ",
                "text": "Czech Republic"
              },
              {
                "value": "DK",
                "text": "Denmark"
              },
              {
                "value": "DJ",
                "text": "Djibouti"
              },
              {
                "value": "DM",
                "text": "Dominica"
              },
              {
                "value": "DO",
                "text": "Dominican Republic"
              },
              {
                "value": "EC",
                "text": "Ecuador"
              },
              {
                "value": "EG",
                "text": "Egypt"
              },
              {
                "value": "SV",
                "text": "El Salvador"
              },
              {
                "value": "GQ",
                "text": "Equatorial Guinea"
              },
              {
                "value": "ER",
                "text": "Eritrea"
              },
              {
                "value": "EE",
                "text": "Estonia"
              },
              {
                "value": "ET",
                "text": "Ethiopia"
              },
              {
                "value": "FK",
                "text": "Falkland Islands (Malvinas)"
              },
              {
                "value": "FO",
                "text": "Faroe Islands"
              },
              {
                "value": "FJ",
                "text": "Fiji"
              },
              {
                "value": "FI",
                "text": "Finland"
              },
              {
                "value": "FR",
                "text": "France"
              },
              {
                "value": "GF",
                "text": "French Guiana"
              },
              {
                "value": "PF",
                "text": "French Polynesia"
              },
              {
                "value": "TF",
                "text": "French Southern Territories"
              },
              {
                "value": "GA",
                "text": "Gabon"
              },
              {
                "value": "GM",
                "text": "Gambia"
              },
              {
                "value": "GE",
                "text": "Georgia"
              },
              {
                "value": "DE",
                "text": "Germany"
              },
              {
                "value": "GH",
                "text": "Ghana"
              },
              {
                "value": "GI",
                "text": "Gibraltar"
              },
              {
                "value": "GR",
                "text": "Greece"
              },
              {
                "value": "GL",
                "text": "Greenland"
              },
              {
                "value": "GD",
                "text": "Grenada"
              },
              {
                "value": "GP",
                "text": "Guadeloupe"
              },
              {
                "value": "GU",
                "text": "Guam"
              },
              {
                "value": "GT",
                "text": "Guatemala"
              },
              {
                "value": "GG",
                "text": "Guernsey"
              },
              {
                "value": "GN",
                "text": "Guinea"
              },
              {
                "value": "GW",
                "text": "Guinea-Bissau"
              },
              {
                "value": "GY",
                "text": "Guyana"
              },
              {
                "value": "HT",
                "text": "Haiti"
              },
              {
                "value": "HM",
                "text": "Heard Island and McDonald Islands"
              },
              {
                "value": "VA",
                "text": "Holy See (Vatican City State)"
              },
              {
                "value": "HN",
                "text": "Honduras"
              },
              {
                "value": "HK",
                "text": "Hong Kong"
              },
              {
                "value": "HU",
                "text": "Hungary"
              },
              {
                "value": "IS",
                "text": "Iceland"
              },
              {
                "value": "IN",
                "text": "India"
              },
              {
                "value": "ID",
                "text": "Indonesia"
              },
              {
                "value": "IR",
                "text": "Iran, Islamic Republic of"
              },
              {
                "value": "IQ",
                "text": "Iraq"
              },
              {
                "value": "IE",
                "text": "Ireland"
              },
              {
                "value": "IM",
                "text": "Isle of Man"
              },
              {
                "value": "IL",
                "text": "Israel"
              },
              {
                "value": "IT",
                "text": "Italy"
              },
              {
                "value": "JM",
                "text": "Jamaica"
              },
              {
                "value": "JP",
                "text": "Japan"
              },
              {
                "value": "JE",
                "text": "Jersey"
              },
              {
                "value": "JO",
                "text": "Jordan"
              },
              {
                "value": "KZ",
                "text": "Kazakhstan"
              },
              {
                "value": "KE",
                "text": "Kenya"
              },
              {
                "value": "KI",
                "text": "Kiribati"
              },
              {
                "value": "KP",
                "text": "Korea, Democratic People's Republic of"
              },
              {
                "value": "KR",
                "text": "Korea, Republic of"
              },
              {
                "value": "KW",
                "text": "Kuwait"
              },
              {
                "value": "KG",
                "text": "Kyrgyzstan"
              },
              {
                "value": "LA",
                "text": "Lao People's Democratic Republic"
              },
              {
                "value": "LV",
                "text": "Latvia"
              },
              {
                "value": "LB",
                "text": "Lebanon"
              },
              {
                "value": "LS",
                "text": "Lesotho"
              },
              {
                "value": "LR",
                "text": "Liberia"
              },
              {
                "value": "LY",
                "text": "Libya"
              },
              {
                "value": "LI",
                "text": "Liechtenstein"
              },
              {
                "value": "LT",
                "text": "Lithuania"
              },
              {
                "value": "LU",
                "text": "Luxembourg"
              },
              {
                "value": "MO",
                "text": "Macao"
              },
              {
                "value": "MK",
                "text": "Macedonia, the Former Yugoslav Republic of"
              },
              {
                "value": "MG",
                "text": "Madagascar"
              },
              {
                "value": "MW",
                "text": "Malawi"
              },
              {
                "value": "MY",
                "text": "Malaysia"
              },
              {
                "value": "MV",
                "text": "Maldives"
              },
              {
                "value": "ML",
                "text": "Mali"
              },
              {
                "value": "MT",
                "text": "Malta"
              },
              {
                "value": "MH",
                "text": "Marshall Islands"
              },
              {
                "value": "MQ",
                "text": "Martinique"
              },
              {
                "value": "MR",
                "text": "Mauritania"
              },
              {
                "value": "MU",
                "text": "Mauritius"
              },
              {
                "value": "YT",
                "text": "Mayotte"
              },
              {
                "value": "MX",
                "text": "Mexico"
              },
              {
                "value": "FM",
                "text": "Micronesia, Federated States of"
              },
              {
                "value": "MD",
                "text": "Moldova, Republic of"
              },
              {
                "value": "MC",
                "text": "Monaco"
              },
              {
                "value": "MN",
                "text": "Mongolia"
              },
              {
                "value": "ME",
                "text": "Montenegro"
              },
              {
                "value": "MS",
                "text": "Montserrat"
              },
              {
                "value": "MA",
                "text": "Morocco"
              },
              {
                "value": "MZ",
                "text": "Mozambique"
              },
              {
                "value": "MM",
                "text": "Myanmar"
              },
              {
                "value": "NA",
                "text": "Namibia"
              },
              {
                "value": "NR",
                "text": "Nauru"
              },
              {
                "value": "NP",
                "text": "Nepal"
              },
              {
                "value": "NL",
                "text": "Netherlands"
              },
              {
                "value": "NC",
                "text": "New Caledonia"
              },
              {
                "value": "NZ",
                "text": "New Zealand"
              },
              {
                "value": "NI",
                "text": "Nicaragua"
              },
              {
                "value": "NE",
                "text": "Niger"
              },
              {
                "value": "NG",
                "text": "Nigeria"
              },
              {
                "value": "NU",
                "text": "Niue"
              },
              {
                "value": "NF",
                "text": "Norfolk Island"
              },
              {
                "value": "MP",
                "text": "Northern Mariana Islands"
              },
              {
                "value": "NO",
                "text": "Norway"
              },
              {
                "value": "OM",
                "text": "Oman"
              },
              {
                "value": "PK",
                "text": "Pakistan"
              },
              {
                "value": "PW",
                "text": "Palau"
              },
              {
                "value": "PS",
                "text": "Palestine, State of"
              },
              {
                "value": "PA",
                "text": "Panama"
              },
              {
                "value": "PG",
                "text": "Papua New Guinea"
              },
              {
                "value": "PY",
                "text": "Paraguay"
              },
              {
                "value": "PE",
                "text": "Peru"
              },
              {
                "value": "PH",
                "text": "Philippines"
              },
              {
                "value": "PN",
                "text": "Pitcairn"
              },
              {
                "value": "PL",
                "text": "Poland"
              },
              {
                "value": "PT",
                "text": "Portugal"
              },
              {
                "value": "PR",
                "text": "Puerto Rico"
              },
              {
                "value": "QA",
                "text": "Qatar"
              },
              {
                "value": "RE",
                "text": "Réunion"
              },
              {
                "value": "RO",
                "text": "Romania"
              },
              {
                "value": "RU",
                "text": "Russian Federation"
              },
              {
                "value": "RW",
                "text": "Rwanda"
              },
              {
                "value": "BL",
                "text": "Saint Barthélemy"
              },
              {
                "value": "SH",
                "text": "Saint Helena, Ascension and Tristan da Cunha"
              },
              {
                "value": "KN",
                "text": "Saint Kitts and Nevis"
              },
              {
                "value": "LC",
                "text": "Saint Lucia"
              },
              {
                "value": "MF",
                "text": "Saint Martin (French part)"
              },
              {
                "value": "PM",
                "text": "Saint Pierre and Miquelon"
              },
              {
                "value": "VC",
                "text": "Saint Vincent and the Grenadines"
              },
              {
                "value": "WS",
                "text": "Samoa"
              },
              {
                "value": "SM",
                "text": "San Marino"
              },
              {
                "value": "ST",
                "text": "Sao Tome and Principe"
              },
              {
                "value": "SA",
                "text": "Saudi Arabia"
              },
              {
                "value": "SN",
                "text": "Senegal"
              },
              {
                "value": "RS",
                "text": "Serbia"
              },
              {
                "value": "SC",
                "text": "Seychelles"
              },
              {
                "value": "SL",
                "text": "Sierra Leone"
              },
              {
                "value": "SG",
                "text": "Singapore"
              },
              {
                "value": "SX",
                "text": "Sint Maarten (Dutch part)"
              },
              {
                "value": "SK",
                "text": "Slovakia"
              },
              {
                "value": "SI",
                "text": "Slovenia"
              },
              {
                "value": "SB",
                "text": "Solomon Islands"
              },
              {
                "value": "SO",
                "text": "Somalia"
              },
              {
                "value": "ZA",
                "text": "South Africa"
              },
              {
                "value": "GS",
                "text": "South Georgia and the South Sandwich Islands"
              },
              {
                "value": "SS",
                "text": "South Sudan"
              },
              {
                "value": "ES",
                "text": "Spain"
              },
              {
                "value": "LK",
                "text": "Sri Lanka"
              },
              {
                "value": "SD",
                "text": "Sudan"
              },
              {
                "value": "SR",
                "text": "Suriname"
              },
              {
                "value": "SJ",
                "text": "Svalbard and Jan Mayen"
              },
              {
                "value": "SZ",
                "text": "Swaziland"
              },
              {
                "value": "SE",
                "text": "Sweden"
              },
              {
                "value": "CH",
                "text": "Switzerland"
              },
              {
                "value": "SY",
                "text": "Syrian Arab Republic"
              },
              {
                "value": "TW",
                "text": "Taiwan, Province of China"
              },
              {
                "value": "TJ",
                "text": "Tajikistan"
              },
              {
                "value": "TZ",
                "text": "Tanzania, United Republic of"
              },
              {
                "value": "TH",
                "text": "Thailand"
              },
              {
                "value": "TL",
                "text": "Timor-Leste"
              },
              {
                "value": "TG",
                "text": "Togo"
              },
              {
                "value": "TK",
                "text": "Tokelau"
              },
              {
                "value": "TO",
                "text": "Tonga"
              },
              {
                "value": "TT",
                "text": "Trinidad and Tobago"
              },
              {
                "value": "TN",
                "text": "Tunisia"
              },
              {
                "value": "TR",
                "text": "Turkey"
              },
              {
                "value": "TM",
                "text": "Turkmenistan"
              },
              {
                "value": "TC",
                "text": "Turks and Caicos Islands"
              },
              {
                "value": "TV",
                "text": "Tuvalu"
              },
              {
                "value": "UG",
                "text": "Uganda"
              },
              {
                "value": "UA",
                "text": "Ukraine"
              },
              {
                "value": "AE",
                "text": "United Arab Emirates"
              },
              {
                "value": "GB",
                "text": "United Kingdom"
              },
              {
                "value": "US",
                "text": "United States"
              },
              {
                "value": "UM",
                "text": "United States Minor Outlying Islands"
              },
              {
                "value": "UY",
                "text": "Uruguay"
              },
              {
                "value": "UZ",
                "text": "Uzbekistan"
              },
              {
                "value": "VU",
                "text": "Vanuatu"
              },
              {
                "value": "VE",
                "text": "Venezuela, Bolivarian Republic of"
              },
              {
                "value": "VN",
                "text": "Viet Nam"
              },
              {
                "value": "VG",
                "text": "Virgin Islands, British"
              },
              {
                "value": "VI",
                "text": "Virgin Islands, U.S."
              },
              {
                "value": "WF",
                "text": "Wallis and Futuna"
              },
              {
                "value": "EH",
                "text": "Western Sahara"
              },
              {
                "value": "YE",
                "text": "Yemen"
              },
              {
                "value": "ZM",
                "text": "Zambia"
              },
              {
                "value": "ZW",
                "text": "Zimbabwe"
              }
            ]
          }, {
            label: 'Country of destination',
            type: 'select',
            category_label: 'Other information',
            name: 'country_of_destionation',
            note: '',
            options: [{
                "value": "AF",
                "text": "Afghanistan"
              },
              {
                "value": "AX",
                "text": "Åland Islands"
              },
              {
                "value": "AL",
                "text": "Albania"
              },
              {
                "value": "DZ",
                "text": "Algeria"
              },
              {
                "value": "AS",
                "text": "American Samoa"
              },
              {
                "value": "AD",
                "text": "Andorra"
              },
              {
                "value": "AO",
                "text": "Angola"
              },
              {
                "value": "AI",
                "text": "Anguilla"
              },
              {
                "value": "AQ",
                "text": "Antarctica"
              },
              {
                "value": "AG",
                "text": "Antigua and Barbuda"
              },
              {
                "value": "AR",
                "text": "Argentina"
              },
              {
                "value": "AM",
                "text": "Armenia"
              },
              {
                "value": "AW",
                "text": "Aruba"
              },
              {
                "value": "AU",
                "text": "Australia"
              },
              {
                "value": "AT",
                "text": "Austria"
              },
              {
                "value": "AZ",
                "text": "Azerbaijan"
              },
              {
                "value": "BS",
                "text": "Bahamas"
              },
              {
                "value": "BH",
                "text": "Bahrain"
              },
              {
                "value": "BD",
                "text": "Bangladesh"
              },
              {
                "value": "BB",
                "text": "Barbados"
              },
              {
                "value": "BY",
                "text": "Belarus"
              },
              {
                "value": "BE",
                "text": "Belgium"
              },
              {
                "value": "BZ",
                "text": "Belize"
              },
              {
                "value": "BJ",
                "text": "Benin"
              },
              {
                "value": "BM",
                "text": "Bermuda"
              },
              {
                "value": "BT",
                "text": "Bhutan"
              },
              {
                "value": "BO",
                "text": "Bolivia, Plurinational State of"
              },
              {
                "value": "BQ",
                "text": "Bonaire, Sint Eustatius and Saba"
              },
              {
                "value": "BA",
                "text": "Bosnia and Herzegovina"
              },
              {
                "value": "BW",
                "text": "Botswana"
              },
              {
                "value": "BV",
                "text": "Bouvet Island"
              },
              {
                "value": "BR",
                "text": "Brazil"
              },
              {
                "value": "IO",
                "text": "British Indian Ocean Territory"
              },
              {
                "value": "BN",
                "text": "Brunei Darussalam"
              },
              {
                "value": "BG",
                "text": "Bulgaria"
              },
              {
                "value": "BF",
                "text": "Burkina Faso"
              },
              {
                "value": "BI",
                "text": "Burundi"
              },
              {
                "value": "KH",
                "text": "Cambodia"
              },
              {
                "value": "CM",
                "text": "Cameroon"
              },
              {
                "value": "CA",
                "text": "Canada"
              },
              {
                "value": "CV",
                "text": "Cape Verde"
              },
              {
                "value": "KY",
                "text": "Cayman Islands"
              },
              {
                "value": "CF",
                "text": "Central African Republic"
              },
              {
                "value": "TD",
                "text": "Chad"
              },
              {
                "value": "CL",
                "text": "Chile"
              },
              {
                "value": "CN",
                "text": "China"
              },
              {
                "value": "CX",
                "text": "Christmas Island"
              },
              {
                "value": "CC",
                "text": "Cocos (Keeling) Islands"
              },
              {
                "value": "CO",
                "text": "Colombia"
              },
              {
                "value": "KM",
                "text": "Comoros"
              },
              {
                "value": "CG",
                "text": "Congo"
              },
              {
                "value": "CD",
                "text": "Congo, the Democratic Republic of the"
              },
              {
                "value": "CK",
                "text": "Cook Islands"
              },
              {
                "value": "CR",
                "text": "Costa Rica"
              },
              {
                "value": "CI",
                "text": "Côte d'Ivoire"
              },
              {
                "value": "HR",
                "text": "Croatia"
              },
              {
                "value": "CU",
                "text": "Cuba"
              },
              {
                "value": "CW",
                "text": "Curaçao"
              },
              {
                "value": "CY",
                "text": "Cyprus"
              },
              {
                "value": "CZ",
                "text": "Czech Republic"
              },
              {
                "value": "DK",
                "text": "Denmark"
              },
              {
                "value": "DJ",
                "text": "Djibouti"
              },
              {
                "value": "DM",
                "text": "Dominica"
              },
              {
                "value": "DO",
                "text": "Dominican Republic"
              },
              {
                "value": "EC",
                "text": "Ecuador"
              },
              {
                "value": "EG",
                "text": "Egypt"
              },
              {
                "value": "SV",
                "text": "El Salvador"
              },
              {
                "value": "GQ",
                "text": "Equatorial Guinea"
              },
              {
                "value": "ER",
                "text": "Eritrea"
              },
              {
                "value": "EE",
                "text": "Estonia"
              },
              {
                "value": "ET",
                "text": "Ethiopia"
              },
              {
                "value": "FK",
                "text": "Falkland Islands (Malvinas)"
              },
              {
                "value": "FO",
                "text": "Faroe Islands"
              },
              {
                "value": "FJ",
                "text": "Fiji"
              },
              {
                "value": "FI",
                "text": "Finland"
              },
              {
                "value": "FR",
                "text": "France"
              },
              {
                "value": "GF",
                "text": "French Guiana"
              },
              {
                "value": "PF",
                "text": "French Polynesia"
              },
              {
                "value": "TF",
                "text": "French Southern Territories"
              },
              {
                "value": "GA",
                "text": "Gabon"
              },
              {
                "value": "GM",
                "text": "Gambia"
              },
              {
                "value": "GE",
                "text": "Georgia"
              },
              {
                "value": "DE",
                "text": "Germany"
              },
              {
                "value": "GH",
                "text": "Ghana"
              },
              {
                "value": "GI",
                "text": "Gibraltar"
              },
              {
                "value": "GR",
                "text": "Greece"
              },
              {
                "value": "GL",
                "text": "Greenland"
              },
              {
                "value": "GD",
                "text": "Grenada"
              },
              {
                "value": "GP",
                "text": "Guadeloupe"
              },
              {
                "value": "GU",
                "text": "Guam"
              },
              {
                "value": "GT",
                "text": "Guatemala"
              },
              {
                "value": "GG",
                "text": "Guernsey"
              },
              {
                "value": "GN",
                "text": "Guinea"
              },
              {
                "value": "GW",
                "text": "Guinea-Bissau"
              },
              {
                "value": "GY",
                "text": "Guyana"
              },
              {
                "value": "HT",
                "text": "Haiti"
              },
              {
                "value": "HM",
                "text": "Heard Island and McDonald Islands"
              },
              {
                "value": "VA",
                "text": "Holy See (Vatican City State)"
              },
              {
                "value": "HN",
                "text": "Honduras"
              },
              {
                "value": "HK",
                "text": "Hong Kong"
              },
              {
                "value": "HU",
                "text": "Hungary"
              },
              {
                "value": "IS",
                "text": "Iceland"
              },
              {
                "value": "IN",
                "text": "India"
              },
              {
                "value": "ID",
                "text": "Indonesia"
              },
              {
                "value": "IR",
                "text": "Iran, Islamic Republic of"
              },
              {
                "value": "IQ",
                "text": "Iraq"
              },
              {
                "value": "IE",
                "text": "Ireland"
              },
              {
                "value": "IM",
                "text": "Isle of Man"
              },
              {
                "value": "IL",
                "text": "Israel"
              },
              {
                "value": "IT",
                "text": "Italy"
              },
              {
                "value": "JM",
                "text": "Jamaica"
              },
              {
                "value": "JP",
                "text": "Japan"
              },
              {
                "value": "JE",
                "text": "Jersey"
              },
              {
                "value": "JO",
                "text": "Jordan"
              },
              {
                "value": "KZ",
                "text": "Kazakhstan"
              },
              {
                "value": "KE",
                "text": "Kenya"
              },
              {
                "value": "KI",
                "text": "Kiribati"
              },
              {
                "value": "KP",
                "text": "Korea, Democratic People's Republic of"
              },
              {
                "value": "KR",
                "text": "Korea, Republic of"
              },
              {
                "value": "KW",
                "text": "Kuwait"
              },
              {
                "value": "KG",
                "text": "Kyrgyzstan"
              },
              {
                "value": "LA",
                "text": "Lao People's Democratic Republic"
              },
              {
                "value": "LV",
                "text": "Latvia"
              },
              {
                "value": "LB",
                "text": "Lebanon"
              },
              {
                "value": "LS",
                "text": "Lesotho"
              },
              {
                "value": "LR",
                "text": "Liberia"
              },
              {
                "value": "LY",
                "text": "Libya"
              },
              {
                "value": "LI",
                "text": "Liechtenstein"
              },
              {
                "value": "LT",
                "text": "Lithuania"
              },
              {
                "value": "LU",
                "text": "Luxembourg"
              },
              {
                "value": "MO",
                "text": "Macao"
              },
              {
                "value": "MK",
                "text": "Macedonia, the Former Yugoslav Republic of"
              },
              {
                "value": "MG",
                "text": "Madagascar"
              },
              {
                "value": "MW",
                "text": "Malawi"
              },
              {
                "value": "MY",
                "text": "Malaysia"
              },
              {
                "value": "MV",
                "text": "Maldives"
              },
              {
                "value": "ML",
                "text": "Mali"
              },
              {
                "value": "MT",
                "text": "Malta"
              },
              {
                "value": "MH",
                "text": "Marshall Islands"
              },
              {
                "value": "MQ",
                "text": "Martinique"
              },
              {
                "value": "MR",
                "text": "Mauritania"
              },
              {
                "value": "MU",
                "text": "Mauritius"
              },
              {
                "value": "YT",
                "text": "Mayotte"
              },
              {
                "value": "MX",
                "text": "Mexico"
              },
              {
                "value": "FM",
                "text": "Micronesia, Federated States of"
              },
              {
                "value": "MD",
                "text": "Moldova, Republic of"
              },
              {
                "value": "MC",
                "text": "Monaco"
              },
              {
                "value": "MN",
                "text": "Mongolia"
              },
              {
                "value": "ME",
                "text": "Montenegro"
              },
              {
                "value": "MS",
                "text": "Montserrat"
              },
              {
                "value": "MA",
                "text": "Morocco"
              },
              {
                "value": "MZ",
                "text": "Mozambique"
              },
              {
                "value": "MM",
                "text": "Myanmar"
              },
              {
                "value": "NA",
                "text": "Namibia"
              },
              {
                "value": "NR",
                "text": "Nauru"
              },
              {
                "value": "NP",
                "text": "Nepal"
              },
              {
                "value": "NL",
                "text": "Netherlands"
              },
              {
                "value": "NC",
                "text": "New Caledonia"
              },
              {
                "value": "NZ",
                "text": "New Zealand"
              },
              {
                "value": "NI",
                "text": "Nicaragua"
              },
              {
                "value": "NE",
                "text": "Niger"
              },
              {
                "value": "NG",
                "text": "Nigeria"
              },
              {
                "value": "NU",
                "text": "Niue"
              },
              {
                "value": "NF",
                "text": "Norfolk Island"
              },
              {
                "value": "MP",
                "text": "Northern Mariana Islands"
              },
              {
                "value": "NO",
                "text": "Norway"
              },
              {
                "value": "OM",
                "text": "Oman"
              },
              {
                "value": "PK",
                "text": "Pakistan"
              },
              {
                "value": "PW",
                "text": "Palau"
              },
              {
                "value": "PS",
                "text": "Palestine, State of"
              },
              {
                "value": "PA",
                "text": "Panama"
              },
              {
                "value": "PG",
                "text": "Papua New Guinea"
              },
              {
                "value": "PY",
                "text": "Paraguay"
              },
              {
                "value": "PE",
                "text": "Peru"
              },
              {
                "value": "PH",
                "text": "Philippines"
              },
              {
                "value": "PN",
                "text": "Pitcairn"
              },
              {
                "value": "PL",
                "text": "Poland"
              },
              {
                "value": "PT",
                "text": "Portugal"
              },
              {
                "value": "PR",
                "text": "Puerto Rico"
              },
              {
                "value": "QA",
                "text": "Qatar"
              },
              {
                "value": "RE",
                "text": "Réunion"
              },
              {
                "value": "RO",
                "text": "Romania"
              },
              {
                "value": "RU",
                "text": "Russian Federation"
              },
              {
                "value": "RW",
                "text": "Rwanda"
              },
              {
                "value": "BL",
                "text": "Saint Barthélemy"
              },
              {
                "value": "SH",
                "text": "Saint Helena, Ascension and Tristan da Cunha"
              },
              {
                "value": "KN",
                "text": "Saint Kitts and Nevis"
              },
              {
                "value": "LC",
                "text": "Saint Lucia"
              },
              {
                "value": "MF",
                "text": "Saint Martin (French part)"
              },
              {
                "value": "PM",
                "text": "Saint Pierre and Miquelon"
              },
              {
                "value": "VC",
                "text": "Saint Vincent and the Grenadines"
              },
              {
                "value": "WS",
                "text": "Samoa"
              },
              {
                "value": "SM",
                "text": "San Marino"
              },
              {
                "value": "ST",
                "text": "Sao Tome and Principe"
              },
              {
                "value": "SA",
                "text": "Saudi Arabia"
              },
              {
                "value": "SN",
                "text": "Senegal"
              },
              {
                "value": "RS",
                "text": "Serbia"
              },
              {
                "value": "SC",
                "text": "Seychelles"
              },
              {
                "value": "SL",
                "text": "Sierra Leone"
              },
              {
                "value": "SG",
                "text": "Singapore"
              },
              {
                "value": "SX",
                "text": "Sint Maarten (Dutch part)"
              },
              {
                "value": "SK",
                "text": "Slovakia"
              },
              {
                "value": "SI",
                "text": "Slovenia"
              },
              {
                "value": "SB",
                "text": "Solomon Islands"
              },
              {
                "value": "SO",
                "text": "Somalia"
              },
              {
                "value": "ZA",
                "text": "South Africa"
              },
              {
                "value": "GS",
                "text": "South Georgia and the South Sandwich Islands"
              },
              {
                "value": "SS",
                "text": "South Sudan"
              },
              {
                "value": "ES",
                "text": "Spain"
              },
              {
                "value": "LK",
                "text": "Sri Lanka"
              },
              {
                "value": "SD",
                "text": "Sudan"
              },
              {
                "value": "SR",
                "text": "Suriname"
              },
              {
                "value": "SJ",
                "text": "Svalbard and Jan Mayen"
              },
              {
                "value": "SZ",
                "text": "Swaziland"
              },
              {
                "value": "SE",
                "text": "Sweden"
              },
              {
                "value": "CH",
                "text": "Switzerland"
              },
              {
                "value": "SY",
                "text": "Syrian Arab Republic"
              },
              {
                "value": "TW",
                "text": "Taiwan, Province of China"
              },
              {
                "value": "TJ",
                "text": "Tajikistan"
              },
              {
                "value": "TZ",
                "text": "Tanzania, United Republic of"
              },
              {
                "value": "TH",
                "text": "Thailand"
              },
              {
                "value": "TL",
                "text": "Timor-Leste"
              },
              {
                "value": "TG",
                "text": "Togo"
              },
              {
                "value": "TK",
                "text": "Tokelau"
              },
              {
                "value": "TO",
                "text": "Tonga"
              },
              {
                "value": "TT",
                "text": "Trinidad and Tobago"
              },
              {
                "value": "TN",
                "text": "Tunisia"
              },
              {
                "value": "TR",
                "text": "Turkey"
              },
              {
                "value": "TM",
                "text": "Turkmenistan"
              },
              {
                "value": "TC",
                "text": "Turks and Caicos Islands"
              },
              {
                "value": "TV",
                "text": "Tuvalu"
              },
              {
                "value": "UG",
                "text": "Uganda"
              },
              {
                "value": "UA",
                "text": "Ukraine"
              },
              {
                "value": "AE",
                "text": "United Arab Emirates"
              },
              {
                "value": "GB",
                "text": "United Kingdom"
              },
              {
                "value": "US",
                "text": "United States"
              },
              {
                "value": "UM",
                "text": "United States Minor Outlying Islands"
              },
              {
                "value": "UY",
                "text": "Uruguay"
              },
              {
                "value": "UZ",
                "text": "Uzbekistan"
              },
              {
                "value": "VU",
                "text": "Vanuatu"
              },
              {
                "value": "VE",
                "text": "Venezuela, Bolivarian Republic of"
              },
              {
                "value": "VN",
                "text": "Viet Nam"
              },
              {
                "value": "VG",
                "text": "Virgin Islands, British"
              },
              {
                "value": "VI",
                "text": "Virgin Islands, U.S."
              },
              {
                "value": "WF",
                "text": "Wallis and Futuna"
              },
              {
                "value": "EH",
                "text": "Western Sahara"
              },
              {
                "value": "YE",
                "text": "Yemen"
              },
              {
                "value": "ZM",
                "text": "Zambia"
              },
              {
                "value": "ZW",
                "text": "Zimbabwe"
              }
            ],
            selected: '',
          }, {
            label: 'Final disposal operation (Annex IIIA D Code)',
            type: 'text',
            category_label: 'Other information',
            name: 'final_disposal',
            note: '',
            selected: '',
          }, {
            label: 'Recovery operation (Annex IIIB R Code)',
            type: 'text',
            category_label: 'Other information',
            name: 'recovery_operation',
            note: '',
            selected: '',
          }]
        }
          let inventoryobj = inventoryJson
          for (let article of inventoryobj.article_items) {
            article.selected = inventory[article.name]
          }
          this.form.tab_3.data.table_1.articles.push(inventoryobj)
        }
      }
      else  {
        let inventory = data.BC_HWP.export_hazardous_wastes_y.Row;
        let inventoryJson = {
          article_title: {
            label: 'Y code',
            type: 'text',
            name: 'y_code',
            category_label: 'Category of waste',
            note: 'The Y code must be specified or, if none is applicable, the waste streams/having wastes as constituents',
            selected: '',
          },
          article_items: [ {
            label: 'Waste streams/ having wastes as constituents',
            type: 'text',
            name: 'waste_streams',
            category_label: 'Category of waste',
            note: 'Not required to fill in if the Y-code has been specified.',
            selected: '',
          }, {
            label: 'UN class',
            type: 'text',
            name: 'un_class',
            category_label: 'Hazardous characteristics (Annex II)',
            note: 'Optional to fill in.',
            selected: '',
          }, {
            label: 'H\' class',
            type: 'text',
            name: 'h_class',
            category_label: 'Hazardous characteristics (Annex II)',
            note: 'Optional to fill in.',
            selected: '',
          }, {
            label: 'Characteristics',
            type: 'text',
            name: 'characteristics',
            category_label: 'Hazardous characteristics (Annex II)',
            note: 'Optional to fill in.',
            selected: '',
          }, {
            label: 'Amount exported (metric tons)',
            type: 'number',
            category_label: 'Other information',
            name: 'amount_exported',
            note: '',
            selected: '',
          }, {
            label: 'Country/countries of transit',
            type: 'select',
            category_label: 'Other information',
            name: 'country_of_transit',
            selected: '',
            options: [{
                "value": "AF",
                "text": "Afghanistan"
              },
              {
                "value": "AX",
                "text": "Åland Islands"
              },
              {
                "value": "AL",
                "text": "Albania"
              },
              {
                "value": "DZ",
                "text": "Algeria"
              },
              {
                "value": "AS",
                "text": "American Samoa"
              },
              {
                "value": "AD",
                "text": "Andorra"
              },
              {
                "value": "AO",
                "text": "Angola"
              },
              {
                "value": "AI",
                "text": "Anguilla"
              },
              {
                "value": "AQ",
                "text": "Antarctica"
              },
              {
                "value": "AG",
                "text": "Antigua and Barbuda"
              },
              {
                "value": "AR",
                "text": "Argentina"
              },
              {
                "value": "AM",
                "text": "Armenia"
              },
              {
                "value": "AW",
                "text": "Aruba"
              },
              {
                "value": "AU",
                "text": "Australia"
              },
              {
                "value": "AT",
                "text": "Austria"
              },
              {
                "value": "AZ",
                "text": "Azerbaijan"
              },
              {
                "value": "BS",
                "text": "Bahamas"
              },
              {
                "value": "BH",
                "text": "Bahrain"
              },
              {
                "value": "BD",
                "text": "Bangladesh"
              },
              {
                "value": "BB",
                "text": "Barbados"
              },
              {
                "value": "BY",
                "text": "Belarus"
              },
              {
                "value": "BE",
                "text": "Belgium"
              },
              {
                "value": "BZ",
                "text": "Belize"
              },
              {
                "value": "BJ",
                "text": "Benin"
              },
              {
                "value": "BM",
                "text": "Bermuda"
              },
              {
                "value": "BT",
                "text": "Bhutan"
              },
              {
                "value": "BO",
                "text": "Bolivia, Plurinational State of"
              },
              {
                "value": "BQ",
                "text": "Bonaire, Sint Eustatius and Saba"
              },
              {
                "value": "BA",
                "text": "Bosnia and Herzegovina"
              },
              {
                "value": "BW",
                "text": "Botswana"
              },
              {
                "value": "BV",
                "text": "Bouvet Island"
              },
              {
                "value": "BR",
                "text": "Brazil"
              },
              {
                "value": "IO",
                "text": "British Indian Ocean Territory"
              },
              {
                "value": "BN",
                "text": "Brunei Darussalam"
              },
              {
                "value": "BG",
                "text": "Bulgaria"
              },
              {
                "value": "BF",
                "text": "Burkina Faso"
              },
              {
                "value": "BI",
                "text": "Burundi"
              },
              {
                "value": "KH",
                "text": "Cambodia"
              },
              {
                "value": "CM",
                "text": "Cameroon"
              },
              {
                "value": "CA",
                "text": "Canada"
              },
              {
                "value": "CV",
                "text": "Cape Verde"
              },
              {
                "value": "KY",
                "text": "Cayman Islands"
              },
              {
                "value": "CF",
                "text": "Central African Republic"
              },
              {
                "value": "TD",
                "text": "Chad"
              },
              {
                "value": "CL",
                "text": "Chile"
              },
              {
                "value": "CN",
                "text": "China"
              },
              {
                "value": "CX",
                "text": "Christmas Island"
              },
              {
                "value": "CC",
                "text": "Cocos (Keeling) Islands"
              },
              {
                "value": "CO",
                "text": "Colombia"
              },
              {
                "value": "KM",
                "text": "Comoros"
              },
              {
                "value": "CG",
                "text": "Congo"
              },
              {
                "value": "CD",
                "text": "Congo, the Democratic Republic of the"
              },
              {
                "value": "CK",
                "text": "Cook Islands"
              },
              {
                "value": "CR",
                "text": "Costa Rica"
              },
              {
                "value": "CI",
                "text": "Côte d'Ivoire"
              },
              {
                "value": "HR",
                "text": "Croatia"
              },
              {
                "value": "CU",
                "text": "Cuba"
              },
              {
                "value": "CW",
                "text": "Curaçao"
              },
              {
                "value": "CY",
                "text": "Cyprus"
              },
              {
                "value": "CZ",
                "text": "Czech Republic"
              },
              {
                "value": "DK",
                "text": "Denmark"
              },
              {
                "value": "DJ",
                "text": "Djibouti"
              },
              {
                "value": "DM",
                "text": "Dominica"
              },
              {
                "value": "DO",
                "text": "Dominican Republic"
              },
              {
                "value": "EC",
                "text": "Ecuador"
              },
              {
                "value": "EG",
                "text": "Egypt"
              },
              {
                "value": "SV",
                "text": "El Salvador"
              },
              {
                "value": "GQ",
                "text": "Equatorial Guinea"
              },
              {
                "value": "ER",
                "text": "Eritrea"
              },
              {
                "value": "EE",
                "text": "Estonia"
              },
              {
                "value": "ET",
                "text": "Ethiopia"
              },
              {
                "value": "FK",
                "text": "Falkland Islands (Malvinas)"
              },
              {
                "value": "FO",
                "text": "Faroe Islands"
              },
              {
                "value": "FJ",
                "text": "Fiji"
              },
              {
                "value": "FI",
                "text": "Finland"
              },
              {
                "value": "FR",
                "text": "France"
              },
              {
                "value": "GF",
                "text": "French Guiana"
              },
              {
                "value": "PF",
                "text": "French Polynesia"
              },
              {
                "value": "TF",
                "text": "French Southern Territories"
              },
              {
                "value": "GA",
                "text": "Gabon"
              },
              {
                "value": "GM",
                "text": "Gambia"
              },
              {
                "value": "GE",
                "text": "Georgia"
              },
              {
                "value": "DE",
                "text": "Germany"
              },
              {
                "value": "GH",
                "text": "Ghana"
              },
              {
                "value": "GI",
                "text": "Gibraltar"
              },
              {
                "value": "GR",
                "text": "Greece"
              },
              {
                "value": "GL",
                "text": "Greenland"
              },
              {
                "value": "GD",
                "text": "Grenada"
              },
              {
                "value": "GP",
                "text": "Guadeloupe"
              },
              {
                "value": "GU",
                "text": "Guam"
              },
              {
                "value": "GT",
                "text": "Guatemala"
              },
              {
                "value": "GG",
                "text": "Guernsey"
              },
              {
                "value": "GN",
                "text": "Guinea"
              },
              {
                "value": "GW",
                "text": "Guinea-Bissau"
              },
              {
                "value": "GY",
                "text": "Guyana"
              },
              {
                "value": "HT",
                "text": "Haiti"
              },
              {
                "value": "HM",
                "text": "Heard Island and McDonald Islands"
              },
              {
                "value": "VA",
                "text": "Holy See (Vatican City State)"
              },
              {
                "value": "HN",
                "text": "Honduras"
              },
              {
                "value": "HK",
                "text": "Hong Kong"
              },
              {
                "value": "HU",
                "text": "Hungary"
              },
              {
                "value": "IS",
                "text": "Iceland"
              },
              {
                "value": "IN",
                "text": "India"
              },
              {
                "value": "ID",
                "text": "Indonesia"
              },
              {
                "value": "IR",
                "text": "Iran, Islamic Republic of"
              },
              {
                "value": "IQ",
                "text": "Iraq"
              },
              {
                "value": "IE",
                "text": "Ireland"
              },
              {
                "value": "IM",
                "text": "Isle of Man"
              },
              {
                "value": "IL",
                "text": "Israel"
              },
              {
                "value": "IT",
                "text": "Italy"
              },
              {
                "value": "JM",
                "text": "Jamaica"
              },
              {
                "value": "JP",
                "text": "Japan"
              },
              {
                "value": "JE",
                "text": "Jersey"
              },
              {
                "value": "JO",
                "text": "Jordan"
              },
              {
                "value": "KZ",
                "text": "Kazakhstan"
              },
              {
                "value": "KE",
                "text": "Kenya"
              },
              {
                "value": "KI",
                "text": "Kiribati"
              },
              {
                "value": "KP",
                "text": "Korea, Democratic People's Republic of"
              },
              {
                "value": "KR",
                "text": "Korea, Republic of"
              },
              {
                "value": "KW",
                "text": "Kuwait"
              },
              {
                "value": "KG",
                "text": "Kyrgyzstan"
              },
              {
                "value": "LA",
                "text": "Lao People's Democratic Republic"
              },
              {
                "value": "LV",
                "text": "Latvia"
              },
              {
                "value": "LB",
                "text": "Lebanon"
              },
              {
                "value": "LS",
                "text": "Lesotho"
              },
              {
                "value": "LR",
                "text": "Liberia"
              },
              {
                "value": "LY",
                "text": "Libya"
              },
              {
                "value": "LI",
                "text": "Liechtenstein"
              },
              {
                "value": "LT",
                "text": "Lithuania"
              },
              {
                "value": "LU",
                "text": "Luxembourg"
              },
              {
                "value": "MO",
                "text": "Macao"
              },
              {
                "value": "MK",
                "text": "Macedonia, the Former Yugoslav Republic of"
              },
              {
                "value": "MG",
                "text": "Madagascar"
              },
              {
                "value": "MW",
                "text": "Malawi"
              },
              {
                "value": "MY",
                "text": "Malaysia"
              },
              {
                "value": "MV",
                "text": "Maldives"
              },
              {
                "value": "ML",
                "text": "Mali"
              },
              {
                "value": "MT",
                "text": "Malta"
              },
              {
                "value": "MH",
                "text": "Marshall Islands"
              },
              {
                "value": "MQ",
                "text": "Martinique"
              },
              {
                "value": "MR",
                "text": "Mauritania"
              },
              {
                "value": "MU",
                "text": "Mauritius"
              },
              {
                "value": "YT",
                "text": "Mayotte"
              },
              {
                "value": "MX",
                "text": "Mexico"
              },
              {
                "value": "FM",
                "text": "Micronesia, Federated States of"
              },
              {
                "value": "MD",
                "text": "Moldova, Republic of"
              },
              {
                "value": "MC",
                "text": "Monaco"
              },
              {
                "value": "MN",
                "text": "Mongolia"
              },
              {
                "value": "ME",
                "text": "Montenegro"
              },
              {
                "value": "MS",
                "text": "Montserrat"
              },
              {
                "value": "MA",
                "text": "Morocco"
              },
              {
                "value": "MZ",
                "text": "Mozambique"
              },
              {
                "value": "MM",
                "text": "Myanmar"
              },
              {
                "value": "NA",
                "text": "Namibia"
              },
              {
                "value": "NR",
                "text": "Nauru"
              },
              {
                "value": "NP",
                "text": "Nepal"
              },
              {
                "value": "NL",
                "text": "Netherlands"
              },
              {
                "value": "NC",
                "text": "New Caledonia"
              },
              {
                "value": "NZ",
                "text": "New Zealand"
              },
              {
                "value": "NI",
                "text": "Nicaragua"
              },
              {
                "value": "NE",
                "text": "Niger"
              },
              {
                "value": "NG",
                "text": "Nigeria"
              },
              {
                "value": "NU",
                "text": "Niue"
              },
              {
                "value": "NF",
                "text": "Norfolk Island"
              },
              {
                "value": "MP",
                "text": "Northern Mariana Islands"
              },
              {
                "value": "NO",
                "text": "Norway"
              },
              {
                "value": "OM",
                "text": "Oman"
              },
              {
                "value": "PK",
                "text": "Pakistan"
              },
              {
                "value": "PW",
                "text": "Palau"
              },
              {
                "value": "PS",
                "text": "Palestine, State of"
              },
              {
                "value": "PA",
                "text": "Panama"
              },
              {
                "value": "PG",
                "text": "Papua New Guinea"
              },
              {
                "value": "PY",
                "text": "Paraguay"
              },
              {
                "value": "PE",
                "text": "Peru"
              },
              {
                "value": "PH",
                "text": "Philippines"
              },
              {
                "value": "PN",
                "text": "Pitcairn"
              },
              {
                "value": "PL",
                "text": "Poland"
              },
              {
                "value": "PT",
                "text": "Portugal"
              },
              {
                "value": "PR",
                "text": "Puerto Rico"
              },
              {
                "value": "QA",
                "text": "Qatar"
              },
              {
                "value": "RE",
                "text": "Réunion"
              },
              {
                "value": "RO",
                "text": "Romania"
              },
              {
                "value": "RU",
                "text": "Russian Federation"
              },
              {
                "value": "RW",
                "text": "Rwanda"
              },
              {
                "value": "BL",
                "text": "Saint Barthélemy"
              },
              {
                "value": "SH",
                "text": "Saint Helena, Ascension and Tristan da Cunha"
              },
              {
                "value": "KN",
                "text": "Saint Kitts and Nevis"
              },
              {
                "value": "LC",
                "text": "Saint Lucia"
              },
              {
                "value": "MF",
                "text": "Saint Martin (French part)"
              },
              {
                "value": "PM",
                "text": "Saint Pierre and Miquelon"
              },
              {
                "value": "VC",
                "text": "Saint Vincent and the Grenadines"
              },
              {
                "value": "WS",
                "text": "Samoa"
              },
              {
                "value": "SM",
                "text": "San Marino"
              },
              {
                "value": "ST",
                "text": "Sao Tome and Principe"
              },
              {
                "value": "SA",
                "text": "Saudi Arabia"
              },
              {
                "value": "SN",
                "text": "Senegal"
              },
              {
                "value": "RS",
                "text": "Serbia"
              },
              {
                "value": "SC",
                "text": "Seychelles"
              },
              {
                "value": "SL",
                "text": "Sierra Leone"
              },
              {
                "value": "SG",
                "text": "Singapore"
              },
              {
                "value": "SX",
                "text": "Sint Maarten (Dutch part)"
              },
              {
                "value": "SK",
                "text": "Slovakia"
              },
              {
                "value": "SI",
                "text": "Slovenia"
              },
              {
                "value": "SB",
                "text": "Solomon Islands"
              },
              {
                "value": "SO",
                "text": "Somalia"
              },
              {
                "value": "ZA",
                "text": "South Africa"
              },
              {
                "value": "GS",
                "text": "South Georgia and the South Sandwich Islands"
              },
              {
                "value": "SS",
                "text": "South Sudan"
              },
              {
                "value": "ES",
                "text": "Spain"
              },
              {
                "value": "LK",
                "text": "Sri Lanka"
              },
              {
                "value": "SD",
                "text": "Sudan"
              },
              {
                "value": "SR",
                "text": "Suriname"
              },
              {
                "value": "SJ",
                "text": "Svalbard and Jan Mayen"
              },
              {
                "value": "SZ",
                "text": "Swaziland"
              },
              {
                "value": "SE",
                "text": "Sweden"
              },
              {
                "value": "CH",
                "text": "Switzerland"
              },
              {
                "value": "SY",
                "text": "Syrian Arab Republic"
              },
              {
                "value": "TW",
                "text": "Taiwan, Province of China"
              },
              {
                "value": "TJ",
                "text": "Tajikistan"
              },
              {
                "value": "TZ",
                "text": "Tanzania, United Republic of"
              },
              {
                "value": "TH",
                "text": "Thailand"
              },
              {
                "value": "TL",
                "text": "Timor-Leste"
              },
              {
                "value": "TG",
                "text": "Togo"
              },
              {
                "value": "TK",
                "text": "Tokelau"
              },
              {
                "value": "TO",
                "text": "Tonga"
              },
              {
                "value": "TT",
                "text": "Trinidad and Tobago"
              },
              {
                "value": "TN",
                "text": "Tunisia"
              },
              {
                "value": "TR",
                "text": "Turkey"
              },
              {
                "value": "TM",
                "text": "Turkmenistan"
              },
              {
                "value": "TC",
                "text": "Turks and Caicos Islands"
              },
              {
                "value": "TV",
                "text": "Tuvalu"
              },
              {
                "value": "UG",
                "text": "Uganda"
              },
              {
                "value": "UA",
                "text": "Ukraine"
              },
              {
                "value": "AE",
                "text": "United Arab Emirates"
              },
              {
                "value": "GB",
                "text": "United Kingdom"
              },
              {
                "value": "US",
                "text": "United States"
              },
              {
                "value": "UM",
                "text": "United States Minor Outlying Islands"
              },
              {
                "value": "UY",
                "text": "Uruguay"
              },
              {
                "value": "UZ",
                "text": "Uzbekistan"
              },
              {
                "value": "VU",
                "text": "Vanuatu"
              },
              {
                "value": "VE",
                "text": "Venezuela, Bolivarian Republic of"
              },
              {
                "value": "VN",
                "text": "Viet Nam"
              },
              {
                "value": "VG",
                "text": "Virgin Islands, British"
              },
              {
                "value": "VI",
                "text": "Virgin Islands, U.S."
              },
              {
                "value": "WF",
                "text": "Wallis and Futuna"
              },
              {
                "value": "EH",
                "text": "Western Sahara"
              },
              {
                "value": "YE",
                "text": "Yemen"
              },
              {
                "value": "ZM",
                "text": "Zambia"
              },
              {
                "value": "ZW",
                "text": "Zimbabwe"
              }
            ]
          }, {
            label: 'Country of destination',
            type: 'select',
            category_label: 'Other information',
            name: 'country_of_destionation',
            note: '',
            options: [{
                "value": "AF",
                "text": "Afghanistan"
              },
              {
                "value": "AX",
                "text": "Åland Islands"
              },
              {
                "value": "AL",
                "text": "Albania"
              },
              {
                "value": "DZ",
                "text": "Algeria"
              },
              {
                "value": "AS",
                "text": "American Samoa"
              },
              {
                "value": "AD",
                "text": "Andorra"
              },
              {
                "value": "AO",
                "text": "Angola"
              },
              {
                "value": "AI",
                "text": "Anguilla"
              },
              {
                "value": "AQ",
                "text": "Antarctica"
              },
              {
                "value": "AG",
                "text": "Antigua and Barbuda"
              },
              {
                "value": "AR",
                "text": "Argentina"
              },
              {
                "value": "AM",
                "text": "Armenia"
              },
              {
                "value": "AW",
                "text": "Aruba"
              },
              {
                "value": "AU",
                "text": "Australia"
              },
              {
                "value": "AT",
                "text": "Austria"
              },
              {
                "value": "AZ",
                "text": "Azerbaijan"
              },
              {
                "value": "BS",
                "text": "Bahamas"
              },
              {
                "value": "BH",
                "text": "Bahrain"
              },
              {
                "value": "BD",
                "text": "Bangladesh"
              },
              {
                "value": "BB",
                "text": "Barbados"
              },
              {
                "value": "BY",
                "text": "Belarus"
              },
              {
                "value": "BE",
                "text": "Belgium"
              },
              {
                "value": "BZ",
                "text": "Belize"
              },
              {
                "value": "BJ",
                "text": "Benin"
              },
              {
                "value": "BM",
                "text": "Bermuda"
              },
              {
                "value": "BT",
                "text": "Bhutan"
              },
              {
                "value": "BO",
                "text": "Bolivia, Plurinational State of"
              },
              {
                "value": "BQ",
                "text": "Bonaire, Sint Eustatius and Saba"
              },
              {
                "value": "BA",
                "text": "Bosnia and Herzegovina"
              },
              {
                "value": "BW",
                "text": "Botswana"
              },
              {
                "value": "BV",
                "text": "Bouvet Island"
              },
              {
                "value": "BR",
                "text": "Brazil"
              },
              {
                "value": "IO",
                "text": "British Indian Ocean Territory"
              },
              {
                "value": "BN",
                "text": "Brunei Darussalam"
              },
              {
                "value": "BG",
                "text": "Bulgaria"
              },
              {
                "value": "BF",
                "text": "Burkina Faso"
              },
              {
                "value": "BI",
                "text": "Burundi"
              },
              {
                "value": "KH",
                "text": "Cambodia"
              },
              {
                "value": "CM",
                "text": "Cameroon"
              },
              {
                "value": "CA",
                "text": "Canada"
              },
              {
                "value": "CV",
                "text": "Cape Verde"
              },
              {
                "value": "KY",
                "text": "Cayman Islands"
              },
              {
                "value": "CF",
                "text": "Central African Republic"
              },
              {
                "value": "TD",
                "text": "Chad"
              },
              {
                "value": "CL",
                "text": "Chile"
              },
              {
                "value": "CN",
                "text": "China"
              },
              {
                "value": "CX",
                "text": "Christmas Island"
              },
              {
                "value": "CC",
                "text": "Cocos (Keeling) Islands"
              },
              {
                "value": "CO",
                "text": "Colombia"
              },
              {
                "value": "KM",
                "text": "Comoros"
              },
              {
                "value": "CG",
                "text": "Congo"
              },
              {
                "value": "CD",
                "text": "Congo, the Democratic Republic of the"
              },
              {
                "value": "CK",
                "text": "Cook Islands"
              },
              {
                "value": "CR",
                "text": "Costa Rica"
              },
              {
                "value": "CI",
                "text": "Côte d'Ivoire"
              },
              {
                "value": "HR",
                "text": "Croatia"
              },
              {
                "value": "CU",
                "text": "Cuba"
              },
              {
                "value": "CW",
                "text": "Curaçao"
              },
              {
                "value": "CY",
                "text": "Cyprus"
              },
              {
                "value": "CZ",
                "text": "Czech Republic"
              },
              {
                "value": "DK",
                "text": "Denmark"
              },
              {
                "value": "DJ",
                "text": "Djibouti"
              },
              {
                "value": "DM",
                "text": "Dominica"
              },
              {
                "value": "DO",
                "text": "Dominican Republic"
              },
              {
                "value": "EC",
                "text": "Ecuador"
              },
              {
                "value": "EG",
                "text": "Egypt"
              },
              {
                "value": "SV",
                "text": "El Salvador"
              },
              {
                "value": "GQ",
                "text": "Equatorial Guinea"
              },
              {
                "value": "ER",
                "text": "Eritrea"
              },
              {
                "value": "EE",
                "text": "Estonia"
              },
              {
                "value": "ET",
                "text": "Ethiopia"
              },
              {
                "value": "FK",
                "text": "Falkland Islands (Malvinas)"
              },
              {
                "value": "FO",
                "text": "Faroe Islands"
              },
              {
                "value": "FJ",
                "text": "Fiji"
              },
              {
                "value": "FI",
                "text": "Finland"
              },
              {
                "value": "FR",
                "text": "France"
              },
              {
                "value": "GF",
                "text": "French Guiana"
              },
              {
                "value": "PF",
                "text": "French Polynesia"
              },
              {
                "value": "TF",
                "text": "French Southern Territories"
              },
              {
                "value": "GA",
                "text": "Gabon"
              },
              {
                "value": "GM",
                "text": "Gambia"
              },
              {
                "value": "GE",
                "text": "Georgia"
              },
              {
                "value": "DE",
                "text": "Germany"
              },
              {
                "value": "GH",
                "text": "Ghana"
              },
              {
                "value": "GI",
                "text": "Gibraltar"
              },
              {
                "value": "GR",
                "text": "Greece"
              },
              {
                "value": "GL",
                "text": "Greenland"
              },
              {
                "value": "GD",
                "text": "Grenada"
              },
              {
                "value": "GP",
                "text": "Guadeloupe"
              },
              {
                "value": "GU",
                "text": "Guam"
              },
              {
                "value": "GT",
                "text": "Guatemala"
              },
              {
                "value": "GG",
                "text": "Guernsey"
              },
              {
                "value": "GN",
                "text": "Guinea"
              },
              {
                "value": "GW",
                "text": "Guinea-Bissau"
              },
              {
                "value": "GY",
                "text": "Guyana"
              },
              {
                "value": "HT",
                "text": "Haiti"
              },
              {
                "value": "HM",
                "text": "Heard Island and McDonald Islands"
              },
              {
                "value": "VA",
                "text": "Holy See (Vatican City State)"
              },
              {
                "value": "HN",
                "text": "Honduras"
              },
              {
                "value": "HK",
                "text": "Hong Kong"
              },
              {
                "value": "HU",
                "text": "Hungary"
              },
              {
                "value": "IS",
                "text": "Iceland"
              },
              {
                "value": "IN",
                "text": "India"
              },
              {
                "value": "ID",
                "text": "Indonesia"
              },
              {
                "value": "IR",
                "text": "Iran, Islamic Republic of"
              },
              {
                "value": "IQ",
                "text": "Iraq"
              },
              {
                "value": "IE",
                "text": "Ireland"
              },
              {
                "value": "IM",
                "text": "Isle of Man"
              },
              {
                "value": "IL",
                "text": "Israel"
              },
              {
                "value": "IT",
                "text": "Italy"
              },
              {
                "value": "JM",
                "text": "Jamaica"
              },
              {
                "value": "JP",
                "text": "Japan"
              },
              {
                "value": "JE",
                "text": "Jersey"
              },
              {
                "value": "JO",
                "text": "Jordan"
              },
              {
                "value": "KZ",
                "text": "Kazakhstan"
              },
              {
                "value": "KE",
                "text": "Kenya"
              },
              {
                "value": "KI",
                "text": "Kiribati"
              },
              {
                "value": "KP",
                "text": "Korea, Democratic People's Republic of"
              },
              {
                "value": "KR",
                "text": "Korea, Republic of"
              },
              {
                "value": "KW",
                "text": "Kuwait"
              },
              {
                "value": "KG",
                "text": "Kyrgyzstan"
              },
              {
                "value": "LA",
                "text": "Lao People's Democratic Republic"
              },
              {
                "value": "LV",
                "text": "Latvia"
              },
              {
                "value": "LB",
                "text": "Lebanon"
              },
              {
                "value": "LS",
                "text": "Lesotho"
              },
              {
                "value": "LR",
                "text": "Liberia"
              },
              {
                "value": "LY",
                "text": "Libya"
              },
              {
                "value": "LI",
                "text": "Liechtenstein"
              },
              {
                "value": "LT",
                "text": "Lithuania"
              },
              {
                "value": "LU",
                "text": "Luxembourg"
              },
              {
                "value": "MO",
                "text": "Macao"
              },
              {
                "value": "MK",
                "text": "Macedonia, the Former Yugoslav Republic of"
              },
              {
                "value": "MG",
                "text": "Madagascar"
              },
              {
                "value": "MW",
                "text": "Malawi"
              },
              {
                "value": "MY",
                "text": "Malaysia"
              },
              {
                "value": "MV",
                "text": "Maldives"
              },
              {
                "value": "ML",
                "text": "Mali"
              },
              {
                "value": "MT",
                "text": "Malta"
              },
              {
                "value": "MH",
                "text": "Marshall Islands"
              },
              {
                "value": "MQ",
                "text": "Martinique"
              },
              {
                "value": "MR",
                "text": "Mauritania"
              },
              {
                "value": "MU",
                "text": "Mauritius"
              },
              {
                "value": "YT",
                "text": "Mayotte"
              },
              {
                "value": "MX",
                "text": "Mexico"
              },
              {
                "value": "FM",
                "text": "Micronesia, Federated States of"
              },
              {
                "value": "MD",
                "text": "Moldova, Republic of"
              },
              {
                "value": "MC",
                "text": "Monaco"
              },
              {
                "value": "MN",
                "text": "Mongolia"
              },
              {
                "value": "ME",
                "text": "Montenegro"
              },
              {
                "value": "MS",
                "text": "Montserrat"
              },
              {
                "value": "MA",
                "text": "Morocco"
              },
              {
                "value": "MZ",
                "text": "Mozambique"
              },
              {
                "value": "MM",
                "text": "Myanmar"
              },
              {
                "value": "NA",
                "text": "Namibia"
              },
              {
                "value": "NR",
                "text": "Nauru"
              },
              {
                "value": "NP",
                "text": "Nepal"
              },
              {
                "value": "NL",
                "text": "Netherlands"
              },
              {
                "value": "NC",
                "text": "New Caledonia"
              },
              {
                "value": "NZ",
                "text": "New Zealand"
              },
              {
                "value": "NI",
                "text": "Nicaragua"
              },
              {
                "value": "NE",
                "text": "Niger"
              },
              {
                "value": "NG",
                "text": "Nigeria"
              },
              {
                "value": "NU",
                "text": "Niue"
              },
              {
                "value": "NF",
                "text": "Norfolk Island"
              },
              {
                "value": "MP",
                "text": "Northern Mariana Islands"
              },
              {
                "value": "NO",
                "text": "Norway"
              },
              {
                "value": "OM",
                "text": "Oman"
              },
              {
                "value": "PK",
                "text": "Pakistan"
              },
              {
                "value": "PW",
                "text": "Palau"
              },
              {
                "value": "PS",
                "text": "Palestine, State of"
              },
              {
                "value": "PA",
                "text": "Panama"
              },
              {
                "value": "PG",
                "text": "Papua New Guinea"
              },
              {
                "value": "PY",
                "text": "Paraguay"
              },
              {
                "value": "PE",
                "text": "Peru"
              },
              {
                "value": "PH",
                "text": "Philippines"
              },
              {
                "value": "PN",
                "text": "Pitcairn"
              },
              {
                "value": "PL",
                "text": "Poland"
              },
              {
                "value": "PT",
                "text": "Portugal"
              },
              {
                "value": "PR",
                "text": "Puerto Rico"
              },
              {
                "value": "QA",
                "text": "Qatar"
              },
              {
                "value": "RE",
                "text": "Réunion"
              },
              {
                "value": "RO",
                "text": "Romania"
              },
              {
                "value": "RU",
                "text": "Russian Federation"
              },
              {
                "value": "RW",
                "text": "Rwanda"
              },
              {
                "value": "BL",
                "text": "Saint Barthélemy"
              },
              {
                "value": "SH",
                "text": "Saint Helena, Ascension and Tristan da Cunha"
              },
              {
                "value": "KN",
                "text": "Saint Kitts and Nevis"
              },
              {
                "value": "LC",
                "text": "Saint Lucia"
              },
              {
                "value": "MF",
                "text": "Saint Martin (French part)"
              },
              {
                "value": "PM",
                "text": "Saint Pierre and Miquelon"
              },
              {
                "value": "VC",
                "text": "Saint Vincent and the Grenadines"
              },
              {
                "value": "WS",
                "text": "Samoa"
              },
              {
                "value": "SM",
                "text": "San Marino"
              },
              {
                "value": "ST",
                "text": "Sao Tome and Principe"
              },
              {
                "value": "SA",
                "text": "Saudi Arabia"
              },
              {
                "value": "SN",
                "text": "Senegal"
              },
              {
                "value": "RS",
                "text": "Serbia"
              },
              {
                "value": "SC",
                "text": "Seychelles"
              },
              {
                "value": "SL",
                "text": "Sierra Leone"
              },
              {
                "value": "SG",
                "text": "Singapore"
              },
              {
                "value": "SX",
                "text": "Sint Maarten (Dutch part)"
              },
              {
                "value": "SK",
                "text": "Slovakia"
              },
              {
                "value": "SI",
                "text": "Slovenia"
              },
              {
                "value": "SB",
                "text": "Solomon Islands"
              },
              {
                "value": "SO",
                "text": "Somalia"
              },
              {
                "value": "ZA",
                "text": "South Africa"
              },
              {
                "value": "GS",
                "text": "South Georgia and the South Sandwich Islands"
              },
              {
                "value": "SS",
                "text": "South Sudan"
              },
              {
                "value": "ES",
                "text": "Spain"
              },
              {
                "value": "LK",
                "text": "Sri Lanka"
              },
              {
                "value": "SD",
                "text": "Sudan"
              },
              {
                "value": "SR",
                "text": "Suriname"
              },
              {
                "value": "SJ",
                "text": "Svalbard and Jan Mayen"
              },
              {
                "value": "SZ",
                "text": "Swaziland"
              },
              {
                "value": "SE",
                "text": "Sweden"
              },
              {
                "value": "CH",
                "text": "Switzerland"
              },
              {
                "value": "SY",
                "text": "Syrian Arab Republic"
              },
              {
                "value": "TW",
                "text": "Taiwan, Province of China"
              },
              {
                "value": "TJ",
                "text": "Tajikistan"
              },
              {
                "value": "TZ",
                "text": "Tanzania, United Republic of"
              },
              {
                "value": "TH",
                "text": "Thailand"
              },
              {
                "value": "TL",
                "text": "Timor-Leste"
              },
              {
                "value": "TG",
                "text": "Togo"
              },
              {
                "value": "TK",
                "text": "Tokelau"
              },
              {
                "value": "TO",
                "text": "Tonga"
              },
              {
                "value": "TT",
                "text": "Trinidad and Tobago"
              },
              {
                "value": "TN",
                "text": "Tunisia"
              },
              {
                "value": "TR",
                "text": "Turkey"
              },
              {
                "value": "TM",
                "text": "Turkmenistan"
              },
              {
                "value": "TC",
                "text": "Turks and Caicos Islands"
              },
              {
                "value": "TV",
                "text": "Tuvalu"
              },
              {
                "value": "UG",
                "text": "Uganda"
              },
              {
                "value": "UA",
                "text": "Ukraine"
              },
              {
                "value": "AE",
                "text": "United Arab Emirates"
              },
              {
                "value": "GB",
                "text": "United Kingdom"
              },
              {
                "value": "US",
                "text": "United States"
              },
              {
                "value": "UM",
                "text": "United States Minor Outlying Islands"
              },
              {
                "value": "UY",
                "text": "Uruguay"
              },
              {
                "value": "UZ",
                "text": "Uzbekistan"
              },
              {
                "value": "VU",
                "text": "Vanuatu"
              },
              {
                "value": "VE",
                "text": "Venezuela, Bolivarian Republic of"
              },
              {
                "value": "VN",
                "text": "Viet Nam"
              },
              {
                "value": "VG",
                "text": "Virgin Islands, British"
              },
              {
                "value": "VI",
                "text": "Virgin Islands, U.S."
              },
              {
                "value": "WF",
                "text": "Wallis and Futuna"
              },
              {
                "value": "EH",
                "text": "Western Sahara"
              },
              {
                "value": "YE",
                "text": "Yemen"
              },
              {
                "value": "ZM",
                "text": "Zambia"
              },
              {
                "value": "ZW",
                "text": "Zimbabwe"
              }
            ],
            selected: '',
          }, {
            label: 'Final disposal operation (Annex IIIA D Code)',
            type: 'text',
            category_label: 'Other information',
            name: 'final_disposal',
            note: '',
            selected: '',
          }, {
            label: 'Recovery operation (Annex IIIB R Code)',
            type: 'text',
            category_label: 'Other information',
            name: 'recovery_operation',
            note: '',
            selected: '',
          }]
        }
        let inventoryobj = inventoryJson
        for (let article of inventoryobj.article_items) {
          article.selected = inventory[article.name]
        }
        this.form.tab_3.data.table_1.articles.push(inventoryobj)
      }
    }
    }





    if (data.BC_HWP.import_hazardous_wastes_y) {
      if (data.BC_HWP.import_hazardous_wastes_y.Row.length) {
        for (let inventory of data.BC_HWP.import_hazardous_wastes_y.Row) {
      let inventoryJson = {
        article_title: {
            label: 'Y code',
            type: 'text',
            name: 'y_code_imported',
            category_label: 'Category of waste',
            note: 'The Y code must be specified or, if none is applicable, the waste streams/having wastes as constituents',
            selected: inventory.title,
          },
          article_items: [ {
            label: 'Waste streams/ having wastes as constituents',
            type: 'text',
            name: 'waste_streams_imported',
            category_label: 'Category of waste',
            note: 'Not required to fill in if the Y-code has been specified.',
            selected: '',
          }, {
            label: 'UN class',
            type: 'text',
            name: 'un_class_imported',
            category_label: 'Hazardous characteristics (Annex II)',
            note: 'Optional to fill in.',
            selected: '',
          }, {
            label: 'H\' class',
            type: 'text',
            name: 'h_class_imported',
            category_label: 'Hazardous characteristics (Annex II)',
            note: 'Optional to fill in.',
            selected: '',
          }, {
            label: 'Characteristics',
            type: 'text',
            name: 'characteristics_imported',
            category_label: 'Hazardous characteristics (Annex II)',
            note: 'Optional to fill in.',
            selected: '',
          }, {
            label: 'Amount imported (metric tons)',
            type: 'number',
            category_label: 'Other information',
            name: 'amount_imported',
            note: '',
            selected: '',
          }, {
            label: 'Country/countries of transit',
            type: 'select',
            category_label: 'Other information',
            name: 'country_of_transit_imported',
            selected: '',
            options: [{
                "value": "AF",
                "text": "Afghanistan"
              },
              {
                "value": "AX",
                "text": "Åland Islands"
              },
              {
                "value": "AL",
                "text": "Albania"
              },
              {
                "value": "DZ",
                "text": "Algeria"
              },
              {
                "value": "AS",
                "text": "American Samoa"
              },
              {
                "value": "AD",
                "text": "Andorra"
              },
              {
                "value": "AO",
                "text": "Angola"
              },
              {
                "value": "AI",
                "text": "Anguilla"
              },
              {
                "value": "AQ",
                "text": "Antarctica"
              },
              {
                "value": "AG",
                "text": "Antigua and Barbuda"
              },
              {
                "value": "AR",
                "text": "Argentina"
              },
              {
                "value": "AM",
                "text": "Armenia"
              },
              {
                "value": "AW",
                "text": "Aruba"
              },
              {
                "value": "AU",
                "text": "Australia"
              },
              {
                "value": "AT",
                "text": "Austria"
              },
              {
                "value": "AZ",
                "text": "Azerbaijan"
              },
              {
                "value": "BS",
                "text": "Bahamas"
              },
              {
                "value": "BH",
                "text": "Bahrain"
              },
              {
                "value": "BD",
                "text": "Bangladesh"
              },
              {
                "value": "BB",
                "text": "Barbados"
              },
              {
                "value": "BY",
                "text": "Belarus"
              },
              {
                "value": "BE",
                "text": "Belgium"
              },
              {
                "value": "BZ",
                "text": "Belize"
              },
              {
                "value": "BJ",
                "text": "Benin"
              },
              {
                "value": "BM",
                "text": "Bermuda"
              },
              {
                "value": "BT",
                "text": "Bhutan"
              },
              {
                "value": "BO",
                "text": "Bolivia, Plurinational State of"
              },
              {
                "value": "BQ",
                "text": "Bonaire, Sint Eustatius and Saba"
              },
              {
                "value": "BA",
                "text": "Bosnia and Herzegovina"
              },
              {
                "value": "BW",
                "text": "Botswana"
              },
              {
                "value": "BV",
                "text": "Bouvet Island"
              },
              {
                "value": "BR",
                "text": "Brazil"
              },
              {
                "value": "IO",
                "text": "British Indian Ocean Territory"
              },
              {
                "value": "BN",
                "text": "Brunei Darussalam"
              },
              {
                "value": "BG",
                "text": "Bulgaria"
              },
              {
                "value": "BF",
                "text": "Burkina Faso"
              },
              {
                "value": "BI",
                "text": "Burundi"
              },
              {
                "value": "KH",
                "text": "Cambodia"
              },
              {
                "value": "CM",
                "text": "Cameroon"
              },
              {
                "value": "CA",
                "text": "Canada"
              },
              {
                "value": "CV",
                "text": "Cape Verde"
              },
              {
                "value": "KY",
                "text": "Cayman Islands"
              },
              {
                "value": "CF",
                "text": "Central African Republic"
              },
              {
                "value": "TD",
                "text": "Chad"
              },
              {
                "value": "CL",
                "text": "Chile"
              },
              {
                "value": "CN",
                "text": "China"
              },
              {
                "value": "CX",
                "text": "Christmas Island"
              },
              {
                "value": "CC",
                "text": "Cocos (Keeling) Islands"
              },
              {
                "value": "CO",
                "text": "Colombia"
              },
              {
                "value": "KM",
                "text": "Comoros"
              },
              {
                "value": "CG",
                "text": "Congo"
              },
              {
                "value": "CD",
                "text": "Congo, the Democratic Republic of the"
              },
              {
                "value": "CK",
                "text": "Cook Islands"
              },
              {
                "value": "CR",
                "text": "Costa Rica"
              },
              {
                "value": "CI",
                "text": "Côte d'Ivoire"
              },
              {
                "value": "HR",
                "text": "Croatia"
              },
              {
                "value": "CU",
                "text": "Cuba"
              },
              {
                "value": "CW",
                "text": "Curaçao"
              },
              {
                "value": "CY",
                "text": "Cyprus"
              },
              {
                "value": "CZ",
                "text": "Czech Republic"
              },
              {
                "value": "DK",
                "text": "Denmark"
              },
              {
                "value": "DJ",
                "text": "Djibouti"
              },
              {
                "value": "DM",
                "text": "Dominica"
              },
              {
                "value": "DO",
                "text": "Dominican Republic"
              },
              {
                "value": "EC",
                "text": "Ecuador"
              },
              {
                "value": "EG",
                "text": "Egypt"
              },
              {
                "value": "SV",
                "text": "El Salvador"
              },
              {
                "value": "GQ",
                "text": "Equatorial Guinea"
              },
              {
                "value": "ER",
                "text": "Eritrea"
              },
              {
                "value": "EE",
                "text": "Estonia"
              },
              {
                "value": "ET",
                "text": "Ethiopia"
              },
              {
                "value": "FK",
                "text": "Falkland Islands (Malvinas)"
              },
              {
                "value": "FO",
                "text": "Faroe Islands"
              },
              {
                "value": "FJ",
                "text": "Fiji"
              },
              {
                "value": "FI",
                "text": "Finland"
              },
              {
                "value": "FR",
                "text": "France"
              },
              {
                "value": "GF",
                "text": "French Guiana"
              },
              {
                "value": "PF",
                "text": "French Polynesia"
              },
              {
                "value": "TF",
                "text": "French Southern Territories"
              },
              {
                "value": "GA",
                "text": "Gabon"
              },
              {
                "value": "GM",
                "text": "Gambia"
              },
              {
                "value": "GE",
                "text": "Georgia"
              },
              {
                "value": "DE",
                "text": "Germany"
              },
              {
                "value": "GH",
                "text": "Ghana"
              },
              {
                "value": "GI",
                "text": "Gibraltar"
              },
              {
                "value": "GR",
                "text": "Greece"
              },
              {
                "value": "GL",
                "text": "Greenland"
              },
              {
                "value": "GD",
                "text": "Grenada"
              },
              {
                "value": "GP",
                "text": "Guadeloupe"
              },
              {
                "value": "GU",
                "text": "Guam"
              },
              {
                "value": "GT",
                "text": "Guatemala"
              },
              {
                "value": "GG",
                "text": "Guernsey"
              },
              {
                "value": "GN",
                "text": "Guinea"
              },
              {
                "value": "GW",
                "text": "Guinea-Bissau"
              },
              {
                "value": "GY",
                "text": "Guyana"
              },
              {
                "value": "HT",
                "text": "Haiti"
              },
              {
                "value": "HM",
                "text": "Heard Island and McDonald Islands"
              },
              {
                "value": "VA",
                "text": "Holy See (Vatican City State)"
              },
              {
                "value": "HN",
                "text": "Honduras"
              },
              {
                "value": "HK",
                "text": "Hong Kong"
              },
              {
                "value": "HU",
                "text": "Hungary"
              },
              {
                "value": "IS",
                "text": "Iceland"
              },
              {
                "value": "IN",
                "text": "India"
              },
              {
                "value": "ID",
                "text": "Indonesia"
              },
              {
                "value": "IR",
                "text": "Iran, Islamic Republic of"
              },
              {
                "value": "IQ",
                "text": "Iraq"
              },
              {
                "value": "IE",
                "text": "Ireland"
              },
              {
                "value": "IM",
                "text": "Isle of Man"
              },
              {
                "value": "IL",
                "text": "Israel"
              },
              {
                "value": "IT",
                "text": "Italy"
              },
              {
                "value": "JM",
                "text": "Jamaica"
              },
              {
                "value": "JP",
                "text": "Japan"
              },
              {
                "value": "JE",
                "text": "Jersey"
              },
              {
                "value": "JO",
                "text": "Jordan"
              },
              {
                "value": "KZ",
                "text": "Kazakhstan"
              },
              {
                "value": "KE",
                "text": "Kenya"
              },
              {
                "value": "KI",
                "text": "Kiribati"
              },
              {
                "value": "KP",
                "text": "Korea, Democratic People's Republic of"
              },
              {
                "value": "KR",
                "text": "Korea, Republic of"
              },
              {
                "value": "KW",
                "text": "Kuwait"
              },
              {
                "value": "KG",
                "text": "Kyrgyzstan"
              },
              {
                "value": "LA",
                "text": "Lao People's Democratic Republic"
              },
              {
                "value": "LV",
                "text": "Latvia"
              },
              {
                "value": "LB",
                "text": "Lebanon"
              },
              {
                "value": "LS",
                "text": "Lesotho"
              },
              {
                "value": "LR",
                "text": "Liberia"
              },
              {
                "value": "LY",
                "text": "Libya"
              },
              {
                "value": "LI",
                "text": "Liechtenstein"
              },
              {
                "value": "LT",
                "text": "Lithuania"
              },
              {
                "value": "LU",
                "text": "Luxembourg"
              },
              {
                "value": "MO",
                "text": "Macao"
              },
              {
                "value": "MK",
                "text": "Macedonia, the Former Yugoslav Republic of"
              },
              {
                "value": "MG",
                "text": "Madagascar"
              },
              {
                "value": "MW",
                "text": "Malawi"
              },
              {
                "value": "MY",
                "text": "Malaysia"
              },
              {
                "value": "MV",
                "text": "Maldives"
              },
              {
                "value": "ML",
                "text": "Mali"
              },
              {
                "value": "MT",
                "text": "Malta"
              },
              {
                "value": "MH",
                "text": "Marshall Islands"
              },
              {
                "value": "MQ",
                "text": "Martinique"
              },
              {
                "value": "MR",
                "text": "Mauritania"
              },
              {
                "value": "MU",
                "text": "Mauritius"
              },
              {
                "value": "YT",
                "text": "Mayotte"
              },
              {
                "value": "MX",
                "text": "Mexico"
              },
              {
                "value": "FM",
                "text": "Micronesia, Federated States of"
              },
              {
                "value": "MD",
                "text": "Moldova, Republic of"
              },
              {
                "value": "MC",
                "text": "Monaco"
              },
              {
                "value": "MN",
                "text": "Mongolia"
              },
              {
                "value": "ME",
                "text": "Montenegro"
              },
              {
                "value": "MS",
                "text": "Montserrat"
              },
              {
                "value": "MA",
                "text": "Morocco"
              },
              {
                "value": "MZ",
                "text": "Mozambique"
              },
              {
                "value": "MM",
                "text": "Myanmar"
              },
              {
                "value": "NA",
                "text": "Namibia"
              },
              {
                "value": "NR",
                "text": "Nauru"
              },
              {
                "value": "NP",
                "text": "Nepal"
              },
              {
                "value": "NL",
                "text": "Netherlands"
              },
              {
                "value": "NC",
                "text": "New Caledonia"
              },
              {
                "value": "NZ",
                "text": "New Zealand"
              },
              {
                "value": "NI",
                "text": "Nicaragua"
              },
              {
                "value": "NE",
                "text": "Niger"
              },
              {
                "value": "NG",
                "text": "Nigeria"
              },
              {
                "value": "NU",
                "text": "Niue"
              },
              {
                "value": "NF",
                "text": "Norfolk Island"
              },
              {
                "value": "MP",
                "text": "Northern Mariana Islands"
              },
              {
                "value": "NO",
                "text": "Norway"
              },
              {
                "value": "OM",
                "text": "Oman"
              },
              {
                "value": "PK",
                "text": "Pakistan"
              },
              {
                "value": "PW",
                "text": "Palau"
              },
              {
                "value": "PS",
                "text": "Palestine, State of"
              },
              {
                "value": "PA",
                "text": "Panama"
              },
              {
                "value": "PG",
                "text": "Papua New Guinea"
              },
              {
                "value": "PY",
                "text": "Paraguay"
              },
              {
                "value": "PE",
                "text": "Peru"
              },
              {
                "value": "PH",
                "text": "Philippines"
              },
              {
                "value": "PN",
                "text": "Pitcairn"
              },
              {
                "value": "PL",
                "text": "Poland"
              },
              {
                "value": "PT",
                "text": "Portugal"
              },
              {
                "value": "PR",
                "text": "Puerto Rico"
              },
              {
                "value": "QA",
                "text": "Qatar"
              },
              {
                "value": "RE",
                "text": "Réunion"
              },
              {
                "value": "RO",
                "text": "Romania"
              },
              {
                "value": "RU",
                "text": "Russian Federation"
              },
              {
                "value": "RW",
                "text": "Rwanda"
              },
              {
                "value": "BL",
                "text": "Saint Barthélemy"
              },
              {
                "value": "SH",
                "text": "Saint Helena, Ascension and Tristan da Cunha"
              },
              {
                "value": "KN",
                "text": "Saint Kitts and Nevis"
              },
              {
                "value": "LC",
                "text": "Saint Lucia"
              },
              {
                "value": "MF",
                "text": "Saint Martin (French part)"
              },
              {
                "value": "PM",
                "text": "Saint Pierre and Miquelon"
              },
              {
                "value": "VC",
                "text": "Saint Vincent and the Grenadines"
              },
              {
                "value": "WS",
                "text": "Samoa"
              },
              {
                "value": "SM",
                "text": "San Marino"
              },
              {
                "value": "ST",
                "text": "Sao Tome and Principe"
              },
              {
                "value": "SA",
                "text": "Saudi Arabia"
              },
              {
                "value": "SN",
                "text": "Senegal"
              },
              {
                "value": "RS",
                "text": "Serbia"
              },
              {
                "value": "SC",
                "text": "Seychelles"
              },
              {
                "value": "SL",
                "text": "Sierra Leone"
              },
              {
                "value": "SG",
                "text": "Singapore"
              },
              {
                "value": "SX",
                "text": "Sint Maarten (Dutch part)"
              },
              {
                "value": "SK",
                "text": "Slovakia"
              },
              {
                "value": "SI",
                "text": "Slovenia"
              },
              {
                "value": "SB",
                "text": "Solomon Islands"
              },
              {
                "value": "SO",
                "text": "Somalia"
              },
              {
                "value": "ZA",
                "text": "South Africa"
              },
              {
                "value": "GS",
                "text": "South Georgia and the South Sandwich Islands"
              },
              {
                "value": "SS",
                "text": "South Sudan"
              },
              {
                "value": "ES",
                "text": "Spain"
              },
              {
                "value": "LK",
                "text": "Sri Lanka"
              },
              {
                "value": "SD",
                "text": "Sudan"
              },
              {
                "value": "SR",
                "text": "Suriname"
              },
              {
                "value": "SJ",
                "text": "Svalbard and Jan Mayen"
              },
              {
                "value": "SZ",
                "text": "Swaziland"
              },
              {
                "value": "SE",
                "text": "Sweden"
              },
              {
                "value": "CH",
                "text": "Switzerland"
              },
              {
                "value": "SY",
                "text": "Syrian Arab Republic"
              },
              {
                "value": "TW",
                "text": "Taiwan, Province of China"
              },
              {
                "value": "TJ",
                "text": "Tajikistan"
              },
              {
                "value": "TZ",
                "text": "Tanzania, United Republic of"
              },
              {
                "value": "TH",
                "text": "Thailand"
              },
              {
                "value": "TL",
                "text": "Timor-Leste"
              },
              {
                "value": "TG",
                "text": "Togo"
              },
              {
                "value": "TK",
                "text": "Tokelau"
              },
              {
                "value": "TO",
                "text": "Tonga"
              },
              {
                "value": "TT",
                "text": "Trinidad and Tobago"
              },
              {
                "value": "TN",
                "text": "Tunisia"
              },
              {
                "value": "TR",
                "text": "Turkey"
              },
              {
                "value": "TM",
                "text": "Turkmenistan"
              },
              {
                "value": "TC",
                "text": "Turks and Caicos Islands"
              },
              {
                "value": "TV",
                "text": "Tuvalu"
              },
              {
                "value": "UG",
                "text": "Uganda"
              },
              {
                "value": "UA",
                "text": "Ukraine"
              },
              {
                "value": "AE",
                "text": "United Arab Emirates"
              },
              {
                "value": "GB",
                "text": "United Kingdom"
              },
              {
                "value": "US",
                "text": "United States"
              },
              {
                "value": "UM",
                "text": "United States Minor Outlying Islands"
              },
              {
                "value": "UY",
                "text": "Uruguay"
              },
              {
                "value": "UZ",
                "text": "Uzbekistan"
              },
              {
                "value": "VU",
                "text": "Vanuatu"
              },
              {
                "value": "VE",
                "text": "Venezuela, Bolivarian Republic of"
              },
              {
                "value": "VN",
                "text": "Viet Nam"
              },
              {
                "value": "VG",
                "text": "Virgin Islands, British"
              },
              {
                "value": "VI",
                "text": "Virgin Islands, U.S."
              },
              {
                "value": "WF",
                "text": "Wallis and Futuna"
              },
              {
                "value": "EH",
                "text": "Western Sahara"
              },
              {
                "value": "YE",
                "text": "Yemen"
              },
              {
                "value": "ZM",
                "text": "Zambia"
              },
              {
                "value": "ZW",
                "text": "Zimbabwe"
              }
            ]
          }, {
            label: 'Country of origin',
            type: 'select',
            category_label: 'Other information',
            name: 'country_of_origin',
            note: '',
            options: [{
                "value": "AF",
                "text": "Afghanistan"
              },
              {
                "value": "AX",
                "text": "Åland Islands"
              },
              {
                "value": "AL",
                "text": "Albania"
              },
              {
                "value": "DZ",
                "text": "Algeria"
              },
              {
                "value": "AS",
                "text": "American Samoa"
              },
              {
                "value": "AD",
                "text": "Andorra"
              },
              {
                "value": "AO",
                "text": "Angola"
              },
              {
                "value": "AI",
                "text": "Anguilla"
              },
              {
                "value": "AQ",
                "text": "Antarctica"
              },
              {
                "value": "AG",
                "text": "Antigua and Barbuda"
              },
              {
                "value": "AR",
                "text": "Argentina"
              },
              {
                "value": "AM",
                "text": "Armenia"
              },
              {
                "value": "AW",
                "text": "Aruba"
              },
              {
                "value": "AU",
                "text": "Australia"
              },
              {
                "value": "AT",
                "text": "Austria"
              },
              {
                "value": "AZ",
                "text": "Azerbaijan"
              },
              {
                "value": "BS",
                "text": "Bahamas"
              },
              {
                "value": "BH",
                "text": "Bahrain"
              },
              {
                "value": "BD",
                "text": "Bangladesh"
              },
              {
                "value": "BB",
                "text": "Barbados"
              },
              {
                "value": "BY",
                "text": "Belarus"
              },
              {
                "value": "BE",
                "text": "Belgium"
              },
              {
                "value": "BZ",
                "text": "Belize"
              },
              {
                "value": "BJ",
                "text": "Benin"
              },
              {
                "value": "BM",
                "text": "Bermuda"
              },
              {
                "value": "BT",
                "text": "Bhutan"
              },
              {
                "value": "BO",
                "text": "Bolivia, Plurinational State of"
              },
              {
                "value": "BQ",
                "text": "Bonaire, Sint Eustatius and Saba"
              },
              {
                "value": "BA",
                "text": "Bosnia and Herzegovina"
              },
              {
                "value": "BW",
                "text": "Botswana"
              },
              {
                "value": "BV",
                "text": "Bouvet Island"
              },
              {
                "value": "BR",
                "text": "Brazil"
              },
              {
                "value": "IO",
                "text": "British Indian Ocean Territory"
              },
              {
                "value": "BN",
                "text": "Brunei Darussalam"
              },
              {
                "value": "BG",
                "text": "Bulgaria"
              },
              {
                "value": "BF",
                "text": "Burkina Faso"
              },
              {
                "value": "BI",
                "text": "Burundi"
              },
              {
                "value": "KH",
                "text": "Cambodia"
              },
              {
                "value": "CM",
                "text": "Cameroon"
              },
              {
                "value": "CA",
                "text": "Canada"
              },
              {
                "value": "CV",
                "text": "Cape Verde"
              },
              {
                "value": "KY",
                "text": "Cayman Islands"
              },
              {
                "value": "CF",
                "text": "Central African Republic"
              },
              {
                "value": "TD",
                "text": "Chad"
              },
              {
                "value": "CL",
                "text": "Chile"
              },
              {
                "value": "CN",
                "text": "China"
              },
              {
                "value": "CX",
                "text": "Christmas Island"
              },
              {
                "value": "CC",
                "text": "Cocos (Keeling) Islands"
              },
              {
                "value": "CO",
                "text": "Colombia"
              },
              {
                "value": "KM",
                "text": "Comoros"
              },
              {
                "value": "CG",
                "text": "Congo"
              },
              {
                "value": "CD",
                "text": "Congo, the Democratic Republic of the"
              },
              {
                "value": "CK",
                "text": "Cook Islands"
              },
              {
                "value": "CR",
                "text": "Costa Rica"
              },
              {
                "value": "CI",
                "text": "Côte d'Ivoire"
              },
              {
                "value": "HR",
                "text": "Croatia"
              },
              {
                "value": "CU",
                "text": "Cuba"
              },
              {
                "value": "CW",
                "text": "Curaçao"
              },
              {
                "value": "CY",
                "text": "Cyprus"
              },
              {
                "value": "CZ",
                "text": "Czech Republic"
              },
              {
                "value": "DK",
                "text": "Denmark"
              },
              {
                "value": "DJ",
                "text": "Djibouti"
              },
              {
                "value": "DM",
                "text": "Dominica"
              },
              {
                "value": "DO",
                "text": "Dominican Republic"
              },
              {
                "value": "EC",
                "text": "Ecuador"
              },
              {
                "value": "EG",
                "text": "Egypt"
              },
              {
                "value": "SV",
                "text": "El Salvador"
              },
              {
                "value": "GQ",
                "text": "Equatorial Guinea"
              },
              {
                "value": "ER",
                "text": "Eritrea"
              },
              {
                "value": "EE",
                "text": "Estonia"
              },
              {
                "value": "ET",
                "text": "Ethiopia"
              },
              {
                "value": "FK",
                "text": "Falkland Islands (Malvinas)"
              },
              {
                "value": "FO",
                "text": "Faroe Islands"
              },
              {
                "value": "FJ",
                "text": "Fiji"
              },
              {
                "value": "FI",
                "text": "Finland"
              },
              {
                "value": "FR",
                "text": "France"
              },
              {
                "value": "GF",
                "text": "French Guiana"
              },
              {
                "value": "PF",
                "text": "French Polynesia"
              },
              {
                "value": "TF",
                "text": "French Southern Territories"
              },
              {
                "value": "GA",
                "text": "Gabon"
              },
              {
                "value": "GM",
                "text": "Gambia"
              },
              {
                "value": "GE",
                "text": "Georgia"
              },
              {
                "value": "DE",
                "text": "Germany"
              },
              {
                "value": "GH",
                "text": "Ghana"
              },
              {
                "value": "GI",
                "text": "Gibraltar"
              },
              {
                "value": "GR",
                "text": "Greece"
              },
              {
                "value": "GL",
                "text": "Greenland"
              },
              {
                "value": "GD",
                "text": "Grenada"
              },
              {
                "value": "GP",
                "text": "Guadeloupe"
              },
              {
                "value": "GU",
                "text": "Guam"
              },
              {
                "value": "GT",
                "text": "Guatemala"
              },
              {
                "value": "GG",
                "text": "Guernsey"
              },
              {
                "value": "GN",
                "text": "Guinea"
              },
              {
                "value": "GW",
                "text": "Guinea-Bissau"
              },
              {
                "value": "GY",
                "text": "Guyana"
              },
              {
                "value": "HT",
                "text": "Haiti"
              },
              {
                "value": "HM",
                "text": "Heard Island and McDonald Islands"
              },
              {
                "value": "VA",
                "text": "Holy See (Vatican City State)"
              },
              {
                "value": "HN",
                "text": "Honduras"
              },
              {
                "value": "HK",
                "text": "Hong Kong"
              },
              {
                "value": "HU",
                "text": "Hungary"
              },
              {
                "value": "IS",
                "text": "Iceland"
              },
              {
                "value": "IN",
                "text": "India"
              },
              {
                "value": "ID",
                "text": "Indonesia"
              },
              {
                "value": "IR",
                "text": "Iran, Islamic Republic of"
              },
              {
                "value": "IQ",
                "text": "Iraq"
              },
              {
                "value": "IE",
                "text": "Ireland"
              },
              {
                "value": "IM",
                "text": "Isle of Man"
              },
              {
                "value": "IL",
                "text": "Israel"
              },
              {
                "value": "IT",
                "text": "Italy"
              },
              {
                "value": "JM",
                "text": "Jamaica"
              },
              {
                "value": "JP",
                "text": "Japan"
              },
              {
                "value": "JE",
                "text": "Jersey"
              },
              {
                "value": "JO",
                "text": "Jordan"
              },
              {
                "value": "KZ",
                "text": "Kazakhstan"
              },
              {
                "value": "KE",
                "text": "Kenya"
              },
              {
                "value": "KI",
                "text": "Kiribati"
              },
              {
                "value": "KP",
                "text": "Korea, Democratic People's Republic of"
              },
              {
                "value": "KR",
                "text": "Korea, Republic of"
              },
              {
                "value": "KW",
                "text": "Kuwait"
              },
              {
                "value": "KG",
                "text": "Kyrgyzstan"
              },
              {
                "value": "LA",
                "text": "Lao People's Democratic Republic"
              },
              {
                "value": "LV",
                "text": "Latvia"
              },
              {
                "value": "LB",
                "text": "Lebanon"
              },
              {
                "value": "LS",
                "text": "Lesotho"
              },
              {
                "value": "LR",
                "text": "Liberia"
              },
              {
                "value": "LY",
                "text": "Libya"
              },
              {
                "value": "LI",
                "text": "Liechtenstein"
              },
              {
                "value": "LT",
                "text": "Lithuania"
              },
              {
                "value": "LU",
                "text": "Luxembourg"
              },
              {
                "value": "MO",
                "text": "Macao"
              },
              {
                "value": "MK",
                "text": "Macedonia, the Former Yugoslav Republic of"
              },
              {
                "value": "MG",
                "text": "Madagascar"
              },
              {
                "value": "MW",
                "text": "Malawi"
              },
              {
                "value": "MY",
                "text": "Malaysia"
              },
              {
                "value": "MV",
                "text": "Maldives"
              },
              {
                "value": "ML",
                "text": "Mali"
              },
              {
                "value": "MT",
                "text": "Malta"
              },
              {
                "value": "MH",
                "text": "Marshall Islands"
              },
              {
                "value": "MQ",
                "text": "Martinique"
              },
              {
                "value": "MR",
                "text": "Mauritania"
              },
              {
                "value": "MU",
                "text": "Mauritius"
              },
              {
                "value": "YT",
                "text": "Mayotte"
              },
              {
                "value": "MX",
                "text": "Mexico"
              },
              {
                "value": "FM",
                "text": "Micronesia, Federated States of"
              },
              {
                "value": "MD",
                "text": "Moldova, Republic of"
              },
              {
                "value": "MC",
                "text": "Monaco"
              },
              {
                "value": "MN",
                "text": "Mongolia"
              },
              {
                "value": "ME",
                "text": "Montenegro"
              },
              {
                "value": "MS",
                "text": "Montserrat"
              },
              {
                "value": "MA",
                "text": "Morocco"
              },
              {
                "value": "MZ",
                "text": "Mozambique"
              },
              {
                "value": "MM",
                "text": "Myanmar"
              },
              {
                "value": "NA",
                "text": "Namibia"
              },
              {
                "value": "NR",
                "text": "Nauru"
              },
              {
                "value": "NP",
                "text": "Nepal"
              },
              {
                "value": "NL",
                "text": "Netherlands"
              },
              {
                "value": "NC",
                "text": "New Caledonia"
              },
              {
                "value": "NZ",
                "text": "New Zealand"
              },
              {
                "value": "NI",
                "text": "Nicaragua"
              },
              {
                "value": "NE",
                "text": "Niger"
              },
              {
                "value": "NG",
                "text": "Nigeria"
              },
              {
                "value": "NU",
                "text": "Niue"
              },
              {
                "value": "NF",
                "text": "Norfolk Island"
              },
              {
                "value": "MP",
                "text": "Northern Mariana Islands"
              },
              {
                "value": "NO",
                "text": "Norway"
              },
              {
                "value": "OM",
                "text": "Oman"
              },
              {
                "value": "PK",
                "text": "Pakistan"
              },
              {
                "value": "PW",
                "text": "Palau"
              },
              {
                "value": "PS",
                "text": "Palestine, State of"
              },
              {
                "value": "PA",
                "text": "Panama"
              },
              {
                "value": "PG",
                "text": "Papua New Guinea"
              },
              {
                "value": "PY",
                "text": "Paraguay"
              },
              {
                "value": "PE",
                "text": "Peru"
              },
              {
                "value": "PH",
                "text": "Philippines"
              },
              {
                "value": "PN",
                "text": "Pitcairn"
              },
              {
                "value": "PL",
                "text": "Poland"
              },
              {
                "value": "PT",
                "text": "Portugal"
              },
              {
                "value": "PR",
                "text": "Puerto Rico"
              },
              {
                "value": "QA",
                "text": "Qatar"
              },
              {
                "value": "RE",
                "text": "Réunion"
              },
              {
                "value": "RO",
                "text": "Romania"
              },
              {
                "value": "RU",
                "text": "Russian Federation"
              },
              {
                "value": "RW",
                "text": "Rwanda"
              },
              {
                "value": "BL",
                "text": "Saint Barthélemy"
              },
              {
                "value": "SH",
                "text": "Saint Helena, Ascension and Tristan da Cunha"
              },
              {
                "value": "KN",
                "text": "Saint Kitts and Nevis"
              },
              {
                "value": "LC",
                "text": "Saint Lucia"
              },
              {
                "value": "MF",
                "text": "Saint Martin (French part)"
              },
              {
                "value": "PM",
                "text": "Saint Pierre and Miquelon"
              },
              {
                "value": "VC",
                "text": "Saint Vincent and the Grenadines"
              },
              {
                "value": "WS",
                "text": "Samoa"
              },
              {
                "value": "SM",
                "text": "San Marino"
              },
              {
                "value": "ST",
                "text": "Sao Tome and Principe"
              },
              {
                "value": "SA",
                "text": "Saudi Arabia"
              },
              {
                "value": "SN",
                "text": "Senegal"
              },
              {
                "value": "RS",
                "text": "Serbia"
              },
              {
                "value": "SC",
                "text": "Seychelles"
              },
              {
                "value": "SL",
                "text": "Sierra Leone"
              },
              {
                "value": "SG",
                "text": "Singapore"
              },
              {
                "value": "SX",
                "text": "Sint Maarten (Dutch part)"
              },
              {
                "value": "SK",
                "text": "Slovakia"
              },
              {
                "value": "SI",
                "text": "Slovenia"
              },
              {
                "value": "SB",
                "text": "Solomon Islands"
              },
              {
                "value": "SO",
                "text": "Somalia"
              },
              {
                "value": "ZA",
                "text": "South Africa"
              },
              {
                "value": "GS",
                "text": "South Georgia and the South Sandwich Islands"
              },
              {
                "value": "SS",
                "text": "South Sudan"
              },
              {
                "value": "ES",
                "text": "Spain"
              },
              {
                "value": "LK",
                "text": "Sri Lanka"
              },
              {
                "value": "SD",
                "text": "Sudan"
              },
              {
                "value": "SR",
                "text": "Suriname"
              },
              {
                "value": "SJ",
                "text": "Svalbard and Jan Mayen"
              },
              {
                "value": "SZ",
                "text": "Swaziland"
              },
              {
                "value": "SE",
                "text": "Sweden"
              },
              {
                "value": "CH",
                "text": "Switzerland"
              },
              {
                "value": "SY",
                "text": "Syrian Arab Republic"
              },
              {
                "value": "TW",
                "text": "Taiwan, Province of China"
              },
              {
                "value": "TJ",
                "text": "Tajikistan"
              },
              {
                "value": "TZ",
                "text": "Tanzania, United Republic of"
              },
              {
                "value": "TH",
                "text": "Thailand"
              },
              {
                "value": "TL",
                "text": "Timor-Leste"
              },
              {
                "value": "TG",
                "text": "Togo"
              },
              {
                "value": "TK",
                "text": "Tokelau"
              },
              {
                "value": "TO",
                "text": "Tonga"
              },
              {
                "value": "TT",
                "text": "Trinidad and Tobago"
              },
              {
                "value": "TN",
                "text": "Tunisia"
              },
              {
                "value": "TR",
                "text": "Turkey"
              },
              {
                "value": "TM",
                "text": "Turkmenistan"
              },
              {
                "value": "TC",
                "text": "Turks and Caicos Islands"
              },
              {
                "value": "TV",
                "text": "Tuvalu"
              },
              {
                "value": "UG",
                "text": "Uganda"
              },
              {
                "value": "UA",
                "text": "Ukraine"
              },
              {
                "value": "AE",
                "text": "United Arab Emirates"
              },
              {
                "value": "GB",
                "text": "United Kingdom"
              },
              {
                "value": "US",
                "text": "United States"
              },
              {
                "value": "UM",
                "text": "United States Minor Outlying Islands"
              },
              {
                "value": "UY",
                "text": "Uruguay"
              },
              {
                "value": "UZ",
                "text": "Uzbekistan"
              },
              {
                "value": "VU",
                "text": "Vanuatu"
              },
              {
                "value": "VE",
                "text": "Venezuela, Bolivarian Republic of"
              },
              {
                "value": "VN",
                "text": "Viet Nam"
              },
              {
                "value": "VG",
                "text": "Virgin Islands, British"
              },
              {
                "value": "VI",
                "text": "Virgin Islands, U.S."
              },
              {
                "value": "WF",
                "text": "Wallis and Futuna"
              },
              {
                "value": "EH",
                "text": "Western Sahara"
              },
              {
                "value": "YE",
                "text": "Yemen"
              },
              {
                "value": "ZM",
                "text": "Zambia"
              },
              {
                "value": "ZW",
                "text": "Zimbabwe"
              }
            ],
            selected: '',
          }, {
            label: 'Final disposal operation (Annex IIIA D Code)',
            type: 'text',
            category_label: 'Other information',
            name: 'final_disposal_imported',
            note: '',
            selected: '',
          }, {
            label: 'Recovery operation (Annex IIIB R Code)',
            type: 'text',
            category_label: 'Other information',
            name: 'recovery_operation_imported',
            note: '',
            selected: '',
          }]
        }
          let inventoryobj = inventoryJson
          for (let article of inventoryobj.article_items) {
            article.selected = inventory[article.name]
          }
          this.form.tab_3.data.table_2.articles.push(inventoryobj)
        }
      }
      else if (data.BC_HWP.import_hazardous_wastes_y.Row) {
        let inventory = data.BC_HWP.import_hazardous_wastes_y.Row;
      let inventoryJson = {
        article_title: {
            label: 'Y code',
            type: 'text',
            name: 'y_code_imported',
            category_label: 'Category of waste',
            note: 'The Y code must be specified or, if none is applicable, the waste streams/having wastes as constituents',
            selected: inventory.title,
          },
          article_items: [ {
            label: 'Waste streams/ having wastes as constituents',
            type: 'text',
            name: 'waste_streams_imported',
            category_label: 'Category of waste',
            note: 'Not required to fill in if the Y-code has been specified.',
            selected: '',
          }, {
            label: 'UN class',
            type: 'text',
            name: 'un_class_imported',
            category_label: 'Hazardous characteristics (Annex II)',
            note: 'Optional to fill in.',
            selected: '',
          }, {
            label: 'H\' class',
            type: 'text',
            name: 'h_class_imported',
            category_label: 'Hazardous characteristics (Annex II)',
            note: 'Optional to fill in.',
            selected: '',
          }, {
            label: 'Characteristics',
            type: 'text',
            name: 'characteristics_imported',
            category_label: 'Hazardous characteristics (Annex II)',
            note: 'Optional to fill in.',
            selected: '',
          }, {
            label: 'Amount imported (metric tons)',
            type: 'number',
            category_label: 'Other information',
            name: 'amount_imported',
            note: '',
            selected: '',
          }, {
            label: 'Country/countries of transit',
            type: 'select',
            category_label: 'Other information',
            name: 'country_of_transit_imported',
            selected: '',
            options: [{
                "value": "AF",
                "text": "Afghanistan"
              },
              {
                "value": "AX",
                "text": "Åland Islands"
              },
              {
                "value": "AL",
                "text": "Albania"
              },
              {
                "value": "DZ",
                "text": "Algeria"
              },
              {
                "value": "AS",
                "text": "American Samoa"
              },
              {
                "value": "AD",
                "text": "Andorra"
              },
              {
                "value": "AO",
                "text": "Angola"
              },
              {
                "value": "AI",
                "text": "Anguilla"
              },
              {
                "value": "AQ",
                "text": "Antarctica"
              },
              {
                "value": "AG",
                "text": "Antigua and Barbuda"
              },
              {
                "value": "AR",
                "text": "Argentina"
              },
              {
                "value": "AM",
                "text": "Armenia"
              },
              {
                "value": "AW",
                "text": "Aruba"
              },
              {
                "value": "AU",
                "text": "Australia"
              },
              {
                "value": "AT",
                "text": "Austria"
              },
              {
                "value": "AZ",
                "text": "Azerbaijan"
              },
              {
                "value": "BS",
                "text": "Bahamas"
              },
              {
                "value": "BH",
                "text": "Bahrain"
              },
              {
                "value": "BD",
                "text": "Bangladesh"
              },
              {
                "value": "BB",
                "text": "Barbados"
              },
              {
                "value": "BY",
                "text": "Belarus"
              },
              {
                "value": "BE",
                "text": "Belgium"
              },
              {
                "value": "BZ",
                "text": "Belize"
              },
              {
                "value": "BJ",
                "text": "Benin"
              },
              {
                "value": "BM",
                "text": "Bermuda"
              },
              {
                "value": "BT",
                "text": "Bhutan"
              },
              {
                "value": "BO",
                "text": "Bolivia, Plurinational State of"
              },
              {
                "value": "BQ",
                "text": "Bonaire, Sint Eustatius and Saba"
              },
              {
                "value": "BA",
                "text": "Bosnia and Herzegovina"
              },
              {
                "value": "BW",
                "text": "Botswana"
              },
              {
                "value": "BV",
                "text": "Bouvet Island"
              },
              {
                "value": "BR",
                "text": "Brazil"
              },
              {
                "value": "IO",
                "text": "British Indian Ocean Territory"
              },
              {
                "value": "BN",
                "text": "Brunei Darussalam"
              },
              {
                "value": "BG",
                "text": "Bulgaria"
              },
              {
                "value": "BF",
                "text": "Burkina Faso"
              },
              {
                "value": "BI",
                "text": "Burundi"
              },
              {
                "value": "KH",
                "text": "Cambodia"
              },
              {
                "value": "CM",
                "text": "Cameroon"
              },
              {
                "value": "CA",
                "text": "Canada"
              },
              {
                "value": "CV",
                "text": "Cape Verde"
              },
              {
                "value": "KY",
                "text": "Cayman Islands"
              },
              {
                "value": "CF",
                "text": "Central African Republic"
              },
              {
                "value": "TD",
                "text": "Chad"
              },
              {
                "value": "CL",
                "text": "Chile"
              },
              {
                "value": "CN",
                "text": "China"
              },
              {
                "value": "CX",
                "text": "Christmas Island"
              },
              {
                "value": "CC",
                "text": "Cocos (Keeling) Islands"
              },
              {
                "value": "CO",
                "text": "Colombia"
              },
              {
                "value": "KM",
                "text": "Comoros"
              },
              {
                "value": "CG",
                "text": "Congo"
              },
              {
                "value": "CD",
                "text": "Congo, the Democratic Republic of the"
              },
              {
                "value": "CK",
                "text": "Cook Islands"
              },
              {
                "value": "CR",
                "text": "Costa Rica"
              },
              {
                "value": "CI",
                "text": "Côte d'Ivoire"
              },
              {
                "value": "HR",
                "text": "Croatia"
              },
              {
                "value": "CU",
                "text": "Cuba"
              },
              {
                "value": "CW",
                "text": "Curaçao"
              },
              {
                "value": "CY",
                "text": "Cyprus"
              },
              {
                "value": "CZ",
                "text": "Czech Republic"
              },
              {
                "value": "DK",
                "text": "Denmark"
              },
              {
                "value": "DJ",
                "text": "Djibouti"
              },
              {
                "value": "DM",
                "text": "Dominica"
              },
              {
                "value": "DO",
                "text": "Dominican Republic"
              },
              {
                "value": "EC",
                "text": "Ecuador"
              },
              {
                "value": "EG",
                "text": "Egypt"
              },
              {
                "value": "SV",
                "text": "El Salvador"
              },
              {
                "value": "GQ",
                "text": "Equatorial Guinea"
              },
              {
                "value": "ER",
                "text": "Eritrea"
              },
              {
                "value": "EE",
                "text": "Estonia"
              },
              {
                "value": "ET",
                "text": "Ethiopia"
              },
              {
                "value": "FK",
                "text": "Falkland Islands (Malvinas)"
              },
              {
                "value": "FO",
                "text": "Faroe Islands"
              },
              {
                "value": "FJ",
                "text": "Fiji"
              },
              {
                "value": "FI",
                "text": "Finland"
              },
              {
                "value": "FR",
                "text": "France"
              },
              {
                "value": "GF",
                "text": "French Guiana"
              },
              {
                "value": "PF",
                "text": "French Polynesia"
              },
              {
                "value": "TF",
                "text": "French Southern Territories"
              },
              {
                "value": "GA",
                "text": "Gabon"
              },
              {
                "value": "GM",
                "text": "Gambia"
              },
              {
                "value": "GE",
                "text": "Georgia"
              },
              {
                "value": "DE",
                "text": "Germany"
              },
              {
                "value": "GH",
                "text": "Ghana"
              },
              {
                "value": "GI",
                "text": "Gibraltar"
              },
              {
                "value": "GR",
                "text": "Greece"
              },
              {
                "value": "GL",
                "text": "Greenland"
              },
              {
                "value": "GD",
                "text": "Grenada"
              },
              {
                "value": "GP",
                "text": "Guadeloupe"
              },
              {
                "value": "GU",
                "text": "Guam"
              },
              {
                "value": "GT",
                "text": "Guatemala"
              },
              {
                "value": "GG",
                "text": "Guernsey"
              },
              {
                "value": "GN",
                "text": "Guinea"
              },
              {
                "value": "GW",
                "text": "Guinea-Bissau"
              },
              {
                "value": "GY",
                "text": "Guyana"
              },
              {
                "value": "HT",
                "text": "Haiti"
              },
              {
                "value": "HM",
                "text": "Heard Island and McDonald Islands"
              },
              {
                "value": "VA",
                "text": "Holy See (Vatican City State)"
              },
              {
                "value": "HN",
                "text": "Honduras"
              },
              {
                "value": "HK",
                "text": "Hong Kong"
              },
              {
                "value": "HU",
                "text": "Hungary"
              },
              {
                "value": "IS",
                "text": "Iceland"
              },
              {
                "value": "IN",
                "text": "India"
              },
              {
                "value": "ID",
                "text": "Indonesia"
              },
              {
                "value": "IR",
                "text": "Iran, Islamic Republic of"
              },
              {
                "value": "IQ",
                "text": "Iraq"
              },
              {
                "value": "IE",
                "text": "Ireland"
              },
              {
                "value": "IM",
                "text": "Isle of Man"
              },
              {
                "value": "IL",
                "text": "Israel"
              },
              {
                "value": "IT",
                "text": "Italy"
              },
              {
                "value": "JM",
                "text": "Jamaica"
              },
              {
                "value": "JP",
                "text": "Japan"
              },
              {
                "value": "JE",
                "text": "Jersey"
              },
              {
                "value": "JO",
                "text": "Jordan"
              },
              {
                "value": "KZ",
                "text": "Kazakhstan"
              },
              {
                "value": "KE",
                "text": "Kenya"
              },
              {
                "value": "KI",
                "text": "Kiribati"
              },
              {
                "value": "KP",
                "text": "Korea, Democratic People's Republic of"
              },
              {
                "value": "KR",
                "text": "Korea, Republic of"
              },
              {
                "value": "KW",
                "text": "Kuwait"
              },
              {
                "value": "KG",
                "text": "Kyrgyzstan"
              },
              {
                "value": "LA",
                "text": "Lao People's Democratic Republic"
              },
              {
                "value": "LV",
                "text": "Latvia"
              },
              {
                "value": "LB",
                "text": "Lebanon"
              },
              {
                "value": "LS",
                "text": "Lesotho"
              },
              {
                "value": "LR",
                "text": "Liberia"
              },
              {
                "value": "LY",
                "text": "Libya"
              },
              {
                "value": "LI",
                "text": "Liechtenstein"
              },
              {
                "value": "LT",
                "text": "Lithuania"
              },
              {
                "value": "LU",
                "text": "Luxembourg"
              },
              {
                "value": "MO",
                "text": "Macao"
              },
              {
                "value": "MK",
                "text": "Macedonia, the Former Yugoslav Republic of"
              },
              {
                "value": "MG",
                "text": "Madagascar"
              },
              {
                "value": "MW",
                "text": "Malawi"
              },
              {
                "value": "MY",
                "text": "Malaysia"
              },
              {
                "value": "MV",
                "text": "Maldives"
              },
              {
                "value": "ML",
                "text": "Mali"
              },
              {
                "value": "MT",
                "text": "Malta"
              },
              {
                "value": "MH",
                "text": "Marshall Islands"
              },
              {
                "value": "MQ",
                "text": "Martinique"
              },
              {
                "value": "MR",
                "text": "Mauritania"
              },
              {
                "value": "MU",
                "text": "Mauritius"
              },
              {
                "value": "YT",
                "text": "Mayotte"
              },
              {
                "value": "MX",
                "text": "Mexico"
              },
              {
                "value": "FM",
                "text": "Micronesia, Federated States of"
              },
              {
                "value": "MD",
                "text": "Moldova, Republic of"
              },
              {
                "value": "MC",
                "text": "Monaco"
              },
              {
                "value": "MN",
                "text": "Mongolia"
              },
              {
                "value": "ME",
                "text": "Montenegro"
              },
              {
                "value": "MS",
                "text": "Montserrat"
              },
              {
                "value": "MA",
                "text": "Morocco"
              },
              {
                "value": "MZ",
                "text": "Mozambique"
              },
              {
                "value": "MM",
                "text": "Myanmar"
              },
              {
                "value": "NA",
                "text": "Namibia"
              },
              {
                "value": "NR",
                "text": "Nauru"
              },
              {
                "value": "NP",
                "text": "Nepal"
              },
              {
                "value": "NL",
                "text": "Netherlands"
              },
              {
                "value": "NC",
                "text": "New Caledonia"
              },
              {
                "value": "NZ",
                "text": "New Zealand"
              },
              {
                "value": "NI",
                "text": "Nicaragua"
              },
              {
                "value": "NE",
                "text": "Niger"
              },
              {
                "value": "NG",
                "text": "Nigeria"
              },
              {
                "value": "NU",
                "text": "Niue"
              },
              {
                "value": "NF",
                "text": "Norfolk Island"
              },
              {
                "value": "MP",
                "text": "Northern Mariana Islands"
              },
              {
                "value": "NO",
                "text": "Norway"
              },
              {
                "value": "OM",
                "text": "Oman"
              },
              {
                "value": "PK",
                "text": "Pakistan"
              },
              {
                "value": "PW",
                "text": "Palau"
              },
              {
                "value": "PS",
                "text": "Palestine, State of"
              },
              {
                "value": "PA",
                "text": "Panama"
              },
              {
                "value": "PG",
                "text": "Papua New Guinea"
              },
              {
                "value": "PY",
                "text": "Paraguay"
              },
              {
                "value": "PE",
                "text": "Peru"
              },
              {
                "value": "PH",
                "text": "Philippines"
              },
              {
                "value": "PN",
                "text": "Pitcairn"
              },
              {
                "value": "PL",
                "text": "Poland"
              },
              {
                "value": "PT",
                "text": "Portugal"
              },
              {
                "value": "PR",
                "text": "Puerto Rico"
              },
              {
                "value": "QA",
                "text": "Qatar"
              },
              {
                "value": "RE",
                "text": "Réunion"
              },
              {
                "value": "RO",
                "text": "Romania"
              },
              {
                "value": "RU",
                "text": "Russian Federation"
              },
              {
                "value": "RW",
                "text": "Rwanda"
              },
              {
                "value": "BL",
                "text": "Saint Barthélemy"
              },
              {
                "value": "SH",
                "text": "Saint Helena, Ascension and Tristan da Cunha"
              },
              {
                "value": "KN",
                "text": "Saint Kitts and Nevis"
              },
              {
                "value": "LC",
                "text": "Saint Lucia"
              },
              {
                "value": "MF",
                "text": "Saint Martin (French part)"
              },
              {
                "value": "PM",
                "text": "Saint Pierre and Miquelon"
              },
              {
                "value": "VC",
                "text": "Saint Vincent and the Grenadines"
              },
              {
                "value": "WS",
                "text": "Samoa"
              },
              {
                "value": "SM",
                "text": "San Marino"
              },
              {
                "value": "ST",
                "text": "Sao Tome and Principe"
              },
              {
                "value": "SA",
                "text": "Saudi Arabia"
              },
              {
                "value": "SN",
                "text": "Senegal"
              },
              {
                "value": "RS",
                "text": "Serbia"
              },
              {
                "value": "SC",
                "text": "Seychelles"
              },
              {
                "value": "SL",
                "text": "Sierra Leone"
              },
              {
                "value": "SG",
                "text": "Singapore"
              },
              {
                "value": "SX",
                "text": "Sint Maarten (Dutch part)"
              },
              {
                "value": "SK",
                "text": "Slovakia"
              },
              {
                "value": "SI",
                "text": "Slovenia"
              },
              {
                "value": "SB",
                "text": "Solomon Islands"
              },
              {
                "value": "SO",
                "text": "Somalia"
              },
              {
                "value": "ZA",
                "text": "South Africa"
              },
              {
                "value": "GS",
                "text": "South Georgia and the South Sandwich Islands"
              },
              {
                "value": "SS",
                "text": "South Sudan"
              },
              {
                "value": "ES",
                "text": "Spain"
              },
              {
                "value": "LK",
                "text": "Sri Lanka"
              },
              {
                "value": "SD",
                "text": "Sudan"
              },
              {
                "value": "SR",
                "text": "Suriname"
              },
              {
                "value": "SJ",
                "text": "Svalbard and Jan Mayen"
              },
              {
                "value": "SZ",
                "text": "Swaziland"
              },
              {
                "value": "SE",
                "text": "Sweden"
              },
              {
                "value": "CH",
                "text": "Switzerland"
              },
              {
                "value": "SY",
                "text": "Syrian Arab Republic"
              },
              {
                "value": "TW",
                "text": "Taiwan, Province of China"
              },
              {
                "value": "TJ",
                "text": "Tajikistan"
              },
              {
                "value": "TZ",
                "text": "Tanzania, United Republic of"
              },
              {
                "value": "TH",
                "text": "Thailand"
              },
              {
                "value": "TL",
                "text": "Timor-Leste"
              },
              {
                "value": "TG",
                "text": "Togo"
              },
              {
                "value": "TK",
                "text": "Tokelau"
              },
              {
                "value": "TO",
                "text": "Tonga"
              },
              {
                "value": "TT",
                "text": "Trinidad and Tobago"
              },
              {
                "value": "TN",
                "text": "Tunisia"
              },
              {
                "value": "TR",
                "text": "Turkey"
              },
              {
                "value": "TM",
                "text": "Turkmenistan"
              },
              {
                "value": "TC",
                "text": "Turks and Caicos Islands"
              },
              {
                "value": "TV",
                "text": "Tuvalu"
              },
              {
                "value": "UG",
                "text": "Uganda"
              },
              {
                "value": "UA",
                "text": "Ukraine"
              },
              {
                "value": "AE",
                "text": "United Arab Emirates"
              },
              {
                "value": "GB",
                "text": "United Kingdom"
              },
              {
                "value": "US",
                "text": "United States"
              },
              {
                "value": "UM",
                "text": "United States Minor Outlying Islands"
              },
              {
                "value": "UY",
                "text": "Uruguay"
              },
              {
                "value": "UZ",
                "text": "Uzbekistan"
              },
              {
                "value": "VU",
                "text": "Vanuatu"
              },
              {
                "value": "VE",
                "text": "Venezuela, Bolivarian Republic of"
              },
              {
                "value": "VN",
                "text": "Viet Nam"
              },
              {
                "value": "VG",
                "text": "Virgin Islands, British"
              },
              {
                "value": "VI",
                "text": "Virgin Islands, U.S."
              },
              {
                "value": "WF",
                "text": "Wallis and Futuna"
              },
              {
                "value": "EH",
                "text": "Western Sahara"
              },
              {
                "value": "YE",
                "text": "Yemen"
              },
              {
                "value": "ZM",
                "text": "Zambia"
              },
              {
                "value": "ZW",
                "text": "Zimbabwe"
              }
            ]
          }, {
            label: 'Country of origin',
            type: 'select',
            category_label: 'Other information',
            name: 'country_of_origin',
            note: '',
            options: [{
                "value": "AF",
                "text": "Afghanistan"
              },
              {
                "value": "AX",
                "text": "Åland Islands"
              },
              {
                "value": "AL",
                "text": "Albania"
              },
              {
                "value": "DZ",
                "text": "Algeria"
              },
              {
                "value": "AS",
                "text": "American Samoa"
              },
              {
                "value": "AD",
                "text": "Andorra"
              },
              {
                "value": "AO",
                "text": "Angola"
              },
              {
                "value": "AI",
                "text": "Anguilla"
              },
              {
                "value": "AQ",
                "text": "Antarctica"
              },
              {
                "value": "AG",
                "text": "Antigua and Barbuda"
              },
              {
                "value": "AR",
                "text": "Argentina"
              },
              {
                "value": "AM",
                "text": "Armenia"
              },
              {
                "value": "AW",
                "text": "Aruba"
              },
              {
                "value": "AU",
                "text": "Australia"
              },
              {
                "value": "AT",
                "text": "Austria"
              },
              {
                "value": "AZ",
                "text": "Azerbaijan"
              },
              {
                "value": "BS",
                "text": "Bahamas"
              },
              {
                "value": "BH",
                "text": "Bahrain"
              },
              {
                "value": "BD",
                "text": "Bangladesh"
              },
              {
                "value": "BB",
                "text": "Barbados"
              },
              {
                "value": "BY",
                "text": "Belarus"
              },
              {
                "value": "BE",
                "text": "Belgium"
              },
              {
                "value": "BZ",
                "text": "Belize"
              },
              {
                "value": "BJ",
                "text": "Benin"
              },
              {
                "value": "BM",
                "text": "Bermuda"
              },
              {
                "value": "BT",
                "text": "Bhutan"
              },
              {
                "value": "BO",
                "text": "Bolivia, Plurinational State of"
              },
              {
                "value": "BQ",
                "text": "Bonaire, Sint Eustatius and Saba"
              },
              {
                "value": "BA",
                "text": "Bosnia and Herzegovina"
              },
              {
                "value": "BW",
                "text": "Botswana"
              },
              {
                "value": "BV",
                "text": "Bouvet Island"
              },
              {
                "value": "BR",
                "text": "Brazil"
              },
              {
                "value": "IO",
                "text": "British Indian Ocean Territory"
              },
              {
                "value": "BN",
                "text": "Brunei Darussalam"
              },
              {
                "value": "BG",
                "text": "Bulgaria"
              },
              {
                "value": "BF",
                "text": "Burkina Faso"
              },
              {
                "value": "BI",
                "text": "Burundi"
              },
              {
                "value": "KH",
                "text": "Cambodia"
              },
              {
                "value": "CM",
                "text": "Cameroon"
              },
              {
                "value": "CA",
                "text": "Canada"
              },
              {
                "value": "CV",
                "text": "Cape Verde"
              },
              {
                "value": "KY",
                "text": "Cayman Islands"
              },
              {
                "value": "CF",
                "text": "Central African Republic"
              },
              {
                "value": "TD",
                "text": "Chad"
              },
              {
                "value": "CL",
                "text": "Chile"
              },
              {
                "value": "CN",
                "text": "China"
              },
              {
                "value": "CX",
                "text": "Christmas Island"
              },
              {
                "value": "CC",
                "text": "Cocos (Keeling) Islands"
              },
              {
                "value": "CO",
                "text": "Colombia"
              },
              {
                "value": "KM",
                "text": "Comoros"
              },
              {
                "value": "CG",
                "text": "Congo"
              },
              {
                "value": "CD",
                "text": "Congo, the Democratic Republic of the"
              },
              {
                "value": "CK",
                "text": "Cook Islands"
              },
              {
                "value": "CR",
                "text": "Costa Rica"
              },
              {
                "value": "CI",
                "text": "Côte d'Ivoire"
              },
              {
                "value": "HR",
                "text": "Croatia"
              },
              {
                "value": "CU",
                "text": "Cuba"
              },
              {
                "value": "CW",
                "text": "Curaçao"
              },
              {
                "value": "CY",
                "text": "Cyprus"
              },
              {
                "value": "CZ",
                "text": "Czech Republic"
              },
              {
                "value": "DK",
                "text": "Denmark"
              },
              {
                "value": "DJ",
                "text": "Djibouti"
              },
              {
                "value": "DM",
                "text": "Dominica"
              },
              {
                "value": "DO",
                "text": "Dominican Republic"
              },
              {
                "value": "EC",
                "text": "Ecuador"
              },
              {
                "value": "EG",
                "text": "Egypt"
              },
              {
                "value": "SV",
                "text": "El Salvador"
              },
              {
                "value": "GQ",
                "text": "Equatorial Guinea"
              },
              {
                "value": "ER",
                "text": "Eritrea"
              },
              {
                "value": "EE",
                "text": "Estonia"
              },
              {
                "value": "ET",
                "text": "Ethiopia"
              },
              {
                "value": "FK",
                "text": "Falkland Islands (Malvinas)"
              },
              {
                "value": "FO",
                "text": "Faroe Islands"
              },
              {
                "value": "FJ",
                "text": "Fiji"
              },
              {
                "value": "FI",
                "text": "Finland"
              },
              {
                "value": "FR",
                "text": "France"
              },
              {
                "value": "GF",
                "text": "French Guiana"
              },
              {
                "value": "PF",
                "text": "French Polynesia"
              },
              {
                "value": "TF",
                "text": "French Southern Territories"
              },
              {
                "value": "GA",
                "text": "Gabon"
              },
              {
                "value": "GM",
                "text": "Gambia"
              },
              {
                "value": "GE",
                "text": "Georgia"
              },
              {
                "value": "DE",
                "text": "Germany"
              },
              {
                "value": "GH",
                "text": "Ghana"
              },
              {
                "value": "GI",
                "text": "Gibraltar"
              },
              {
                "value": "GR",
                "text": "Greece"
              },
              {
                "value": "GL",
                "text": "Greenland"
              },
              {
                "value": "GD",
                "text": "Grenada"
              },
              {
                "value": "GP",
                "text": "Guadeloupe"
              },
              {
                "value": "GU",
                "text": "Guam"
              },
              {
                "value": "GT",
                "text": "Guatemala"
              },
              {
                "value": "GG",
                "text": "Guernsey"
              },
              {
                "value": "GN",
                "text": "Guinea"
              },
              {
                "value": "GW",
                "text": "Guinea-Bissau"
              },
              {
                "value": "GY",
                "text": "Guyana"
              },
              {
                "value": "HT",
                "text": "Haiti"
              },
              {
                "value": "HM",
                "text": "Heard Island and McDonald Islands"
              },
              {
                "value": "VA",
                "text": "Holy See (Vatican City State)"
              },
              {
                "value": "HN",
                "text": "Honduras"
              },
              {
                "value": "HK",
                "text": "Hong Kong"
              },
              {
                "value": "HU",
                "text": "Hungary"
              },
              {
                "value": "IS",
                "text": "Iceland"
              },
              {
                "value": "IN",
                "text": "India"
              },
              {
                "value": "ID",
                "text": "Indonesia"
              },
              {
                "value": "IR",
                "text": "Iran, Islamic Republic of"
              },
              {
                "value": "IQ",
                "text": "Iraq"
              },
              {
                "value": "IE",
                "text": "Ireland"
              },
              {
                "value": "IM",
                "text": "Isle of Man"
              },
              {
                "value": "IL",
                "text": "Israel"
              },
              {
                "value": "IT",
                "text": "Italy"
              },
              {
                "value": "JM",
                "text": "Jamaica"
              },
              {
                "value": "JP",
                "text": "Japan"
              },
              {
                "value": "JE",
                "text": "Jersey"
              },
              {
                "value": "JO",
                "text": "Jordan"
              },
              {
                "value": "KZ",
                "text": "Kazakhstan"
              },
              {
                "value": "KE",
                "text": "Kenya"
              },
              {
                "value": "KI",
                "text": "Kiribati"
              },
              {
                "value": "KP",
                "text": "Korea, Democratic People's Republic of"
              },
              {
                "value": "KR",
                "text": "Korea, Republic of"
              },
              {
                "value": "KW",
                "text": "Kuwait"
              },
              {
                "value": "KG",
                "text": "Kyrgyzstan"
              },
              {
                "value": "LA",
                "text": "Lao People's Democratic Republic"
              },
              {
                "value": "LV",
                "text": "Latvia"
              },
              {
                "value": "LB",
                "text": "Lebanon"
              },
              {
                "value": "LS",
                "text": "Lesotho"
              },
              {
                "value": "LR",
                "text": "Liberia"
              },
              {
                "value": "LY",
                "text": "Libya"
              },
              {
                "value": "LI",
                "text": "Liechtenstein"
              },
              {
                "value": "LT",
                "text": "Lithuania"
              },
              {
                "value": "LU",
                "text": "Luxembourg"
              },
              {
                "value": "MO",
                "text": "Macao"
              },
              {
                "value": "MK",
                "text": "Macedonia, the Former Yugoslav Republic of"
              },
              {
                "value": "MG",
                "text": "Madagascar"
              },
              {
                "value": "MW",
                "text": "Malawi"
              },
              {
                "value": "MY",
                "text": "Malaysia"
              },
              {
                "value": "MV",
                "text": "Maldives"
              },
              {
                "value": "ML",
                "text": "Mali"
              },
              {
                "value": "MT",
                "text": "Malta"
              },
              {
                "value": "MH",
                "text": "Marshall Islands"
              },
              {
                "value": "MQ",
                "text": "Martinique"
              },
              {
                "value": "MR",
                "text": "Mauritania"
              },
              {
                "value": "MU",
                "text": "Mauritius"
              },
              {
                "value": "YT",
                "text": "Mayotte"
              },
              {
                "value": "MX",
                "text": "Mexico"
              },
              {
                "value": "FM",
                "text": "Micronesia, Federated States of"
              },
              {
                "value": "MD",
                "text": "Moldova, Republic of"
              },
              {
                "value": "MC",
                "text": "Monaco"
              },
              {
                "value": "MN",
                "text": "Mongolia"
              },
              {
                "value": "ME",
                "text": "Montenegro"
              },
              {
                "value": "MS",
                "text": "Montserrat"
              },
              {
                "value": "MA",
                "text": "Morocco"
              },
              {
                "value": "MZ",
                "text": "Mozambique"
              },
              {
                "value": "MM",
                "text": "Myanmar"
              },
              {
                "value": "NA",
                "text": "Namibia"
              },
              {
                "value": "NR",
                "text": "Nauru"
              },
              {
                "value": "NP",
                "text": "Nepal"
              },
              {
                "value": "NL",
                "text": "Netherlands"
              },
              {
                "value": "NC",
                "text": "New Caledonia"
              },
              {
                "value": "NZ",
                "text": "New Zealand"
              },
              {
                "value": "NI",
                "text": "Nicaragua"
              },
              {
                "value": "NE",
                "text": "Niger"
              },
              {
                "value": "NG",
                "text": "Nigeria"
              },
              {
                "value": "NU",
                "text": "Niue"
              },
              {
                "value": "NF",
                "text": "Norfolk Island"
              },
              {
                "value": "MP",
                "text": "Northern Mariana Islands"
              },
              {
                "value": "NO",
                "text": "Norway"
              },
              {
                "value": "OM",
                "text": "Oman"
              },
              {
                "value": "PK",
                "text": "Pakistan"
              },
              {
                "value": "PW",
                "text": "Palau"
              },
              {
                "value": "PS",
                "text": "Palestine, State of"
              },
              {
                "value": "PA",
                "text": "Panama"
              },
              {
                "value": "PG",
                "text": "Papua New Guinea"
              },
              {
                "value": "PY",
                "text": "Paraguay"
              },
              {
                "value": "PE",
                "text": "Peru"
              },
              {
                "value": "PH",
                "text": "Philippines"
              },
              {
                "value": "PN",
                "text": "Pitcairn"
              },
              {
                "value": "PL",
                "text": "Poland"
              },
              {
                "value": "PT",
                "text": "Portugal"
              },
              {
                "value": "PR",
                "text": "Puerto Rico"
              },
              {
                "value": "QA",
                "text": "Qatar"
              },
              {
                "value": "RE",
                "text": "Réunion"
              },
              {
                "value": "RO",
                "text": "Romania"
              },
              {
                "value": "RU",
                "text": "Russian Federation"
              },
              {
                "value": "RW",
                "text": "Rwanda"
              },
              {
                "value": "BL",
                "text": "Saint Barthélemy"
              },
              {
                "value": "SH",
                "text": "Saint Helena, Ascension and Tristan da Cunha"
              },
              {
                "value": "KN",
                "text": "Saint Kitts and Nevis"
              },
              {
                "value": "LC",
                "text": "Saint Lucia"
              },
              {
                "value": "MF",
                "text": "Saint Martin (French part)"
              },
              {
                "value": "PM",
                "text": "Saint Pierre and Miquelon"
              },
              {
                "value": "VC",
                "text": "Saint Vincent and the Grenadines"
              },
              {
                "value": "WS",
                "text": "Samoa"
              },
              {
                "value": "SM",
                "text": "San Marino"
              },
              {
                "value": "ST",
                "text": "Sao Tome and Principe"
              },
              {
                "value": "SA",
                "text": "Saudi Arabia"
              },
              {
                "value": "SN",
                "text": "Senegal"
              },
              {
                "value": "RS",
                "text": "Serbia"
              },
              {
                "value": "SC",
                "text": "Seychelles"
              },
              {
                "value": "SL",
                "text": "Sierra Leone"
              },
              {
                "value": "SG",
                "text": "Singapore"
              },
              {
                "value": "SX",
                "text": "Sint Maarten (Dutch part)"
              },
              {
                "value": "SK",
                "text": "Slovakia"
              },
              {
                "value": "SI",
                "text": "Slovenia"
              },
              {
                "value": "SB",
                "text": "Solomon Islands"
              },
              {
                "value": "SO",
                "text": "Somalia"
              },
              {
                "value": "ZA",
                "text": "South Africa"
              },
              {
                "value": "GS",
                "text": "South Georgia and the South Sandwich Islands"
              },
              {
                "value": "SS",
                "text": "South Sudan"
              },
              {
                "value": "ES",
                "text": "Spain"
              },
              {
                "value": "LK",
                "text": "Sri Lanka"
              },
              {
                "value": "SD",
                "text": "Sudan"
              },
              {
                "value": "SR",
                "text": "Suriname"
              },
              {
                "value": "SJ",
                "text": "Svalbard and Jan Mayen"
              },
              {
                "value": "SZ",
                "text": "Swaziland"
              },
              {
                "value": "SE",
                "text": "Sweden"
              },
              {
                "value": "CH",
                "text": "Switzerland"
              },
              {
                "value": "SY",
                "text": "Syrian Arab Republic"
              },
              {
                "value": "TW",
                "text": "Taiwan, Province of China"
              },
              {
                "value": "TJ",
                "text": "Tajikistan"
              },
              {
                "value": "TZ",
                "text": "Tanzania, United Republic of"
              },
              {
                "value": "TH",
                "text": "Thailand"
              },
              {
                "value": "TL",
                "text": "Timor-Leste"
              },
              {
                "value": "TG",
                "text": "Togo"
              },
              {
                "value": "TK",
                "text": "Tokelau"
              },
              {
                "value": "TO",
                "text": "Tonga"
              },
              {
                "value": "TT",
                "text": "Trinidad and Tobago"
              },
              {
                "value": "TN",
                "text": "Tunisia"
              },
              {
                "value": "TR",
                "text": "Turkey"
              },
              {
                "value": "TM",
                "text": "Turkmenistan"
              },
              {
                "value": "TC",
                "text": "Turks and Caicos Islands"
              },
              {
                "value": "TV",
                "text": "Tuvalu"
              },
              {
                "value": "UG",
                "text": "Uganda"
              },
              {
                "value": "UA",
                "text": "Ukraine"
              },
              {
                "value": "AE",
                "text": "United Arab Emirates"
              },
              {
                "value": "GB",
                "text": "United Kingdom"
              },
              {
                "value": "US",
                "text": "United States"
              },
              {
                "value": "UM",
                "text": "United States Minor Outlying Islands"
              },
              {
                "value": "UY",
                "text": "Uruguay"
              },
              {
                "value": "UZ",
                "text": "Uzbekistan"
              },
              {
                "value": "VU",
                "text": "Vanuatu"
              },
              {
                "value": "VE",
                "text": "Venezuela, Bolivarian Republic of"
              },
              {
                "value": "VN",
                "text": "Viet Nam"
              },
              {
                "value": "VG",
                "text": "Virgin Islands, British"
              },
              {
                "value": "VI",
                "text": "Virgin Islands, U.S."
              },
              {
                "value": "WF",
                "text": "Wallis and Futuna"
              },
              {
                "value": "EH",
                "text": "Western Sahara"
              },
              {
                "value": "YE",
                "text": "Yemen"
              },
              {
                "value": "ZM",
                "text": "Zambia"
              },
              {
                "value": "ZW",
                "text": "Zimbabwe"
              }
            ],
            selected: '',
          }, {
            label: 'Final disposal operation (Annex IIIA D Code)',
            type: 'text',
            category_label: 'Other information',
            name: 'final_disposal_imported',
            note: '',
            selected: '',
          }, {
            label: 'Recovery operation (Annex IIIB R Code)',
            type: 'text',
            category_label: 'Other information',
            name: 'recovery_operation_imported',
            note: '',
            selected: '',
          }]
        }
        let inventoryobj = inventoryJson
        for (let article of inventoryobj.article_items) {
          article.selected = inventory[article.name]
        }
        this.form.tab_3.data.table_2.articles.push(inventoryobj)
      }
    }










    if (data.BC_HWP.disposals_incidents) {
      if (data.BC_HWP.disposals_incidents.Row.length) {
        for (let inventory of data.BC_HWP.disposals_incidents.Row) {
      let inventoryJson = {
          article_title: {
            name: 'incident_date',
            type: 'date',
            label: 'Date of the incident',
            selected: inventory.title,
          },
          article_items: [{
            label: 'Countries involved',
            type: 'text',
            name: 'countries_involved',
            selected: '',
          }, {
            label: 'Type of wastes',
            type: 'text',
            name: 'wastes_type',
            selected: '',
          }, {
            label: 'Amount(in metric tonnes)',
            type: 'number',
            name: 'wastes_amount',
            selected: '',
          }, {
            label: 'Reason for the incident',
            type: 'text',
            name: 'incident_reason',
            selected: '',
          }, {
            label: 'Measures taken to deal with the incident',
            type: 'text',
            name: 'measures_taken',
            selected: '',
          }, {
            label: 'Effectiveness of the measures taken',
            type: 'text',
            name: 'measures_effectiveness',
            selected: '',
          },
          {
            label: 'Remarks',
            type: 'text',
            name: 'remarks',
            selected: '',
          }]
        }
          let inventoryobj = inventoryJson
          for (let article of inventoryobj.article_items) {
            article.selected = inventory[article.name]
          }
          this.form.tab_4.data.table_1.articles.push(inventoryobj)
        }
      }
      else if (data.BC_HWP.disposals_incidents.Row) {
        let inventory = data.BC_HWP.disposals_incidents.Row;
      let inventoryJson = {
          article_title: {
            name: 'incident_date',
            type: 'date',
            label: 'Date of the incident',
            selected: inventory.title,
          },
          article_items: [{
            label: 'Countries involved',
            type: 'text',
            name: 'countries_involved',
            selected: '',
          }, {
            label: 'Type of wastes',
            type: 'text',
            name: 'wastes_type',
            selected: '',
          }, {
            label: 'Amount(in metric tonnes)',
            type: 'number',
            name: 'wastes_amount',
            selected: '',
          }, {
            label: 'Reason for the incident',
            type: 'text',
            name: 'incident_reason',
            selected: '',
          }, {
            label: 'Measures taken to deal with the incident',
            type: 'text',
            name: 'measures_taken',
            selected: '',
          }, {
            label: 'Effectiveness of the measures taken',
            type: 'text',
            name: 'measures_effectiveness',
            selected: '',
          },
          {
            label: 'Remarks',
            type: 'text',
            name: 'remarks',
            selected: '',
          }]
        }
        let inventoryobj = inventoryJson
        for (let article of inventoryobj.article_items) {
          article.selected = inventory[article.name]
        }
        this.form.tab_4.data.table_1.articles.push(inventoryobj)
      }
    }






    if (data.BC_HWP.accidents_during_disposal) {
      if (data.BC_HWP.accidents_during_disposal.Row.length) {
        for (let inventory of data.BC_HWP.accidents_during_disposal.Row) {
      let inventoryJson = {
          article_title: {
            name: 'incident_date_place',
            type: 'date',
            label: 'Date and place of the accident',
            selected: inventory.title,
          },
          article_items: [{
            label: 'Countries involved',
            type: 'text',
            name: 'countries_involved_movement',
            selected: '',
          }, {
            label: 'Type of wastes',
            type: 'text',
            name: 'wastes_type_movement',
            selected: '',
          }, {
            label: 'Amount(in metric tonnes)',
            type: 'number',
            name: 'wastes_amount_movement',
            selected: '',
          }, {
            label: 'Type of accident',
            type: 'text',
            name: 'accident_type_movement',
            selected: '',
          }, {
            label: 'Measures taken to deal with the incident',
            type: 'text',
            name: 'measures_taken_movement',
            selected: '',
          }, {
            label: 'Effectiveness of the measures taken',
            type: 'text',
            name: 'measures_effectiveness_movement',
            selected: '',
          },
          {
            label: 'Remarks',
            type: 'text',
            name: 'remarks_movement',
            selected: '',
          }]
        }
          let inventoryobj = inventoryJson
          for (let article of inventoryobj.article_items) {
            article.selected = inventory[article.name]
          }
          this.form.tab_4.data.table_2.articles.push(inventoryobj)
        }
      }
      else if (data.BC_HWP.accidents_during_disposal.Row) {
        let inventory = data.BC_HWP.accidents_during_disposal.Row;
      let inventoryJson = {
          article_title: {
            name: 'incident_date_place',
            type: 'date',
            label: 'Date and place of the accident',
            selected: inventory.title,
          },
          article_items: [{
            label: 'Countries involved',
            type: 'text',
            name: 'countries_involved_movement',
            selected: '',
          }, {
            label: 'Type of wastes',
            type: 'text',
            name: 'wastes_type_movement',
            selected: '',
          }, {
            label: 'Amount(in metric tonnes)',
            type: 'number',
            name: 'wastes_amount_movement',
            selected: '',
          }, {
            label: 'Type of accident',
            type: 'text',
            name: 'accident_type_movement',
            selected: '',
          }, {
            label: 'Measures taken to deal with the incident',
            type: 'text',
            name: 'measures_taken_movement',
            selected: '',
          }, {
            label: 'Effectiveness of the measures taken',
            type: 'text',
            name: 'measures_effectiveness_movement',
            selected: '',
          },
          {
            label: 'Remarks',
            type: 'text',
            name: 'remarks_movement',
            selected: '',
          }]
        }
        let inventoryobj = inventoryJson
        for (let article of inventoryobj.article_items) {
          article.selected = inventory[article.name]
        }
        this.form.tab_4.data.table_2.articles.push(inventoryobj)
      }
    }


    if (data.BC_HWP.enf_measures) {
      if (data.BC_HWP.enf_measures.Row) {
          for (let article of this.form.tab_5.data.articles) {
            for(let article_items of article.article_items) {
              article_items.selected = data.BC_HWP.enf_measures.Row[article_items.name]
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
      // if(this.button_text === 'Hide list') this.button_text = 'Show List'
        // else this.button_text = 'Hide list'
      // this.$refs.validationContainer.classList.toggle('closed')
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


</style>
