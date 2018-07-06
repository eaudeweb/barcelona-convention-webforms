<template>
  <div v-if="info">
  <div class="question-wrapper">
        <h3>{{info.label}}</h3>
        



  <div class="answer" style="position: relative;">
        <div class="table-head">
            <b>{{info.data.table_1.table_label}}</b>
          </div>
   
          <div role="tablist">

            <div role="tablist">

            <div class="questions">

              <b-row v-for="question in info.data.table_1.questions">
                <b-col>{{question.label}}</b-col>
                <b-col>
                <b-form-input required :id="`${tabId}_${question.name}_${question.type}`" :type="question.type" :name="question.name" v-model="question.selected"></b-form-input>
                </b-col>
              </b-row>


            </div>
              <b-card style="background: #eee" v-for="(article,index) in info.data.table_1.articles" :key="index" class="mb-1">
                <h5 style="cursor: pointer" href="#" v-b-toggle="`article_${index}`" variant="info">
                   {{article.article_title.label}} : {{article.article_title.selected}}
                  <span style="float:right">▼</span>
                </h5>

               <label>
                    {{article.article_title.selected}}
               </label>

              <b-form-input required :id="`${tabId}_${index}_${article.article_title.name}_${article.article_title.type}`" :type="article.article_title.type" :name="article.article_title.name" v-model="article.article_title.selected"></b-form-input>

              <b-btn variant="danger" @click="removeSpa(index)"> X</b-btn> 

                <b-collapse class="mt-3" visible :id="`article_${index}`" accordion="my-accordion" role="tabpanel">
                  <div class="form-subsection" v-for="(item,item_index) in article.article_items">
               
                      <div class="form-fields">
                        <div class="mt-2"><small>({{item.category_label}})</small>  {{item.label}}</div>
                            <!-- {{field}} -->
                          <b-form-input required v-if="item.type != 'select'" :id="`${tabId}_${index}_${item_index}_${item.name}_${item.name}`" :type="item.type" :name="item.name" v-model="item.selected"></b-form-input>
                          <b-form-select  v-else :id="`${tabId}_${index}_${item_index}_${item.name}_${item.name}`" :type="item.type" :name="item.name" v-model="item.selected" :options="item.options">
                          </b-form-select>
                          <small>{{item.note}}</small>
                      </div>
                  </div>
                </b-collapse>
              </b-card>
               <b-btn style="    
                  position: absolute;
                  top: 9px;
                  right: 13px;" 
                  variant="primary" @click="addY"> + Add</b-btn> 
            </div>
          </div>
        </div>
        <br><br>


  <div class="answer" style="position: relative;">
        <div class="table-head">
            <b>{{info.data.table_2.table_label}}</b>
          </div>
   
          <div role="tablist">

            <div role="tablist">

            <div class="questions">

              <b-row v-for="question in info.data.table_2.questions">
                <b-col>{{question.label}}</b-col>
                <b-col>
                <b-form-input required :id="`${tabId}_${question.name}_${question.type}`" :type="question.type" :name="question.name" v-model="question.selected"></b-form-input>
                </b-col>
              </b-row>


            </div>
              <b-card style="background: #eee" v-for="(article,index) in info.data.table_2.articles" :key="index" class="mb-1">
                <h5 style="cursor: pointer" href="#" v-b-toggle="`article_table_2_${index}`" variant="info">
                   {{article.article_title.label}} : {{article.article_title.selected}}
                  <span style="float:right">▼</span>
                </h5>

               <label>
                    {{article.article_title.selected}}
               </label>

              <b-form-input required :id="`${tabId}_${index}_${article.article_title.name}_${article.article_title.type}`" :type="article.article_title.type" :name="article.article_title.name" v-model="article.article_title.selected"></b-form-input>

              <b-btn variant="danger" @click="addYimport(index)"> X</b-btn> 

                <b-collapse class="mt-3" visible :id="`article_table_2_${index}`" accordion="my-accordion" role="tabpanel">
                  <div class="form-subsection" v-for="(item,item_index) in article.article_items">
               
                      <div class="form-fields">
                        <div class="mt-2"><small>({{item.category_label}})</small>  {{item.label}}</div>
                            <!-- {{field}} -->
                          <b-form-input required v-if="item.type != 'select'" :id="`${tabId}_${index}_${item_index}_${item.name}_${item.name}`" :type="item.type" :name="item.name" v-model="item.selected"></b-form-input>
                          <b-form-select required  v-else :id="`${tabId}_${index}_${item_index}_${item.name}_${item.name}`" :type="item.type" :name="item.name" v-model="item.selected" :options="item.options">
                          </b-form-select>
                          <small>{{item.note}}</small>
                      </div>
                  </div>
                </b-collapse>
              </b-card>
               <b-btn style="    
                  position: absolute;
                  top: 9px;
                  right: 13px;" 
                  variant="primary" @click="addYimport"> + Add</b-btn> 
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
      this.addY();
    }
    if(this.info.data.table_2.articles.length === 0) {
      this.addYimport();
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

  addY(){
      let Y ={
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
      this.info.data.table_1.articles.push(Y)
    },


    removeSpa(index) {

      this.info.data.table_1.articles.splice(index, 1)
    },


    addYimport(){

      let Y = {
        article_title: {
            label: 'Y code',
            type: 'text',
            name: 'y_code_imported',
            category_label: 'Category of waste',
            note: 'The Y code must be specified or, if none is applicable, the waste streams/having wastes as constituents',
            selected: '',
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
          }]}

      this.info.data.table_2.articles.push(Y)



    },

    removeYimport(index){
      this.info.data.table_1.articles.splice(index, 1)

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

.questions {
}

</style>