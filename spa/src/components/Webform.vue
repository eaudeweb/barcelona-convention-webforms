<template>
	<b-container style="position: relative">
    <center><h1 class="mb-3 mt-2">SPA and BD Protocol</h1></center>
    <center><h5 style="margin-bottom:3rem;" ><small class="text-muted">IMPLEMENTATION OF THE PROTOCOL FOR THE SPECIALLY PROTECTED AREAS AND BIODIVERSITY </small></h5></center>
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
              <spa tabId="2" :info.sync="form.tab_2"></spa>
            </b-tab>
             <b-tab :title="doTitle(form.tab_3.label)" >
              <spamis tabId="3" :country="country" :info.sync="form.tab_3"></spamis>
            </b-tab>
            <b-tab :title="doTitle(form.tab_4.label)" >
              <endangered tabId="4"  :info.sync="form.tab_4"></endangered>
            </b-tab>
            <b-tab :title="doTitle(form.tab_5.label)" >
              <monitoring tabId="5" :info.sync="form.tab_5"></monitoring>
            </b-tab>
            <b-tab :title="doTitle(form.tab_6.label)" >
              <enfmeasures tabId="6" :info.sync="form.tab_6"></enfmeasures>
            </b-tab>
            <b-tab :title="doTitle(form.tab_7.label)" >
              <raps tabId="7" :info.sync="form.tab_7"></raps>
            </b-tab>
          </b-tabs>
        </b-form>
        <formsubmit :country.sync="country" :info.sync="form"></formsubmit>

      </b-card>
      <div v-if="!prefilled" class="spinner">
        <div class="loader"></div>
      </div>

    </b-container>
</template>

<script>

import {getInstance, getCountry} from '../api.js';


import Countrytab from './Country.vue'
import LRMeasures from './LRMeasures.vue'
import Spa from './Spa.vue'
import EndAndThSp from './EndAndThSp.vue'

import RAPs from './RAPs.vue'
import SPAMIs from './SPAMIs.vue'
import Monitoring from './Monitoring.vue'
import ENFMeasures from './ENFMeasures.vue'


import FormSubmit from './FormSubmit.vue'
import form from '../assets/form.js'


export default {

  name: 'Webform',
  components: {
    countrytab: Countrytab,
    lrmeasures: LRMeasures,
    enfmeasures: ENFMeasures,
    spa: Spa,
    spamis: SPAMIs,
    raps: RAPs,
    monitoring: Monitoring,
    endangered: EndAndThSp,
  	formsubmit: FormSubmit,
  },

  data () {
    return {
    	visibleTab: false,
      form: {},
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


    prefill(data) {
     for (let table in this.form.country.tables) {
       for (let value of this.form.country.tables[table]) {
         value.selected = data.BC_SPA.contacting_party[value.name]
         if (value.name === 'partyname') {
           value.selected = this.country;
         }
       }
     }
     let classic_tabs = {
       tab_2: ['table_1', 'table_3'],
       tab_3: ['table_1'],
       tab_4: ['table_1']
     }
     if (data.BC_SPA.measuresdata.Row.length) {
       for (let agreement of data.BC_SPA.measuresdata.Row) {
         let collection_id = agreement.collection_id
         let parent_collection_id = agreement.parent_collection_id
         for (let tab in this.form) {
           if (tab === 'tab_1' || tab === 'tab_5' || tab === 'tab_7') {
             for (let article of this.form[tab].data.articles) {
               for (let article_item of article.article_items) {
                 if (article_item.collection_id === collection_id) {
                   for (let item of article_item.items) {
                     if (item.type === 'changes') {
                      if(agreement.changes != null) {
                       item.selected = agreement.changes
                      }
                     }
                     else if (item.type === 'status') {
                       item.selected = agreement.status
                       item.comments = agreement.status_comments
                     }
                     else {
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
     if (data.BC_SPA.measuredata_difficulty) {
       if (data.BC_SPA.measuredata_difficulty.Row.length) {
         for (let agreement of data.BC_SPA.measuredata_difficulty.Row) {
           // console.log(agreement.collection_id)
           let collection_id = agreement.collection_id
           let difficulty = agreement.difficulty
           for (let tab in this.form) {
             // console.log(tab)
             if (tab === 'tab_1' || tab === 'tab_5' || tab === 'tab_7') {
               for (let article of this.form[tab].data.articles) {
                 for (let article_item of article.article_items) {
                   if (article_item.collection_id === collection_id) {
                     for (let item of article_item.items) {
                       if (item.type === 'difficulties') {
                         item.selected.push(difficulty)
                       }
                     }
                   }
                 }
               }
             }
           }
         }
       } else {
            let agreement = data.BC_SPA.measuredata_difficulty.Row
           // console.log(agreement.collection_id)
           let collection_id = agreement.collection_id
           let difficulty = agreement.difficulty
           for (let tab in this.form) {
             // console.log(tab)
             if (tab === 'tab_1' || tab === 'tab_5' || tab === 'tab_7') {
               for (let article of this.form[tab].data.articles) {
                 for (let article_item of article.article_items) {
                   if (article_item.collection_id === collection_id) {
                     for (let item of article_item.items) {
                       if (item.type === 'difficulties') {
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



     if (data.BC_SPA.measuresdata.Row.length) {
       for (let agreement of data.BC_SPA.measuresdata.Row) {
         let collection_id = agreement.collection_id
         let parent_collection_id = agreement.parent_collection_id
         for (let tab in this.form) {
           if (tab != 'tab_1' && tab != 'tab_6' && tab != 'country' && tab != 'tab_5' && tab != 'tab_7') {
             for (let table of classic_tabs[tab]) {
               for (let article of this.form[tab].data[table].articles) {
                 for (let article_item of article.article_items) {
                   if (article_item.collection_id === collection_id) {
                     for (let item of article_item.items) {
                       if (item.type === 'changes') {
                         item.selected = agreement.changes
                       }
                       else if (item.type === 'status') {
                         item.selected = agreement.status
                         item.comments = agreement.status_comments
                       }
                       else {
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
     }
     if (data.BC_SPA.measuredata_difficulty) {
       if (data.BC_SPA.measuredata_difficulty.Row.length) {
         for (let agreement of data.BC_SPA.measuredata_difficulty.Row) {
           // console.log(agreement.collection_id)
           let collection_id = agreement.collection_id
           let difficulty = agreement.difficulty
           for (let tab in this.form) {
             // console.log(tab)
             if (tab != 'tab_1' && tab != 'tab_6' && tab != 'country' && tab != 'tab_5' && tab != 'tab_7') {
               for (let table of classic_tabs[tab]) {
                 for (let article of this.form[tab].data[table].articles) {
                   for (let article_item of article.article_items) {
                     if (article_item.collection_id === collection_id) {
                       for (let item of article_item.items) {
                         if (item.type === 'difficulties') {
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
       } else {
          let agreement = data.BC_SPA.measuredata_difficulty.Row 
           // console.log(agreement.collection_id)
           let collection_id = agreement.collection_id
           let difficulty = agreement.difficulty
           for (let tab in this.form) {
             // console.log(tab)
             if (tab != 'tab_1' && tab != 'tab_6' && tab != 'country' && tab != 'tab_5' && tab != 'tab_7') {
               for (let table of classic_tabs[tab]) {
                 for (let article of this.form[tab].data[table].articles) {
                   for (let article_item of article.article_items) {
                     if (article_item.collection_id === collection_id) {
                       for (let item of article_item.items) {
                         if (item.type === 'difficulties') {
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



    if (data.BC_SPA.spa) {
      if(data.BC_SPA.spa.Row){
      if (data.BC_SPA.spa.Row.length) {
        for (let inventory of data.BC_SPA.spa.Row) {
          // console.log(inventory)
          // let collection_id = agreement.collection_id
          // let difficulty = agreement.difficulty
          let inventoryJson = {
          article_title: {
            label: "Name of the SPA",
            selected: inventory.spa_name,
            name: 'name',
            type: 'text'
          },
          article_items: [{
              label: 'Date of establishment',
              type: 'date',
              name: 'date',
              selected: '',
            }, {
              label: 'Category',
              type: 'text',
              name: 'category',
              selected: '',
            }, 
            {
                  type: 'select',
                  label: 'Jurisdiction',
                  name: 'jurisdiction',
                  selected: null,
                  options: [
                    { text: 'Please select one item', value: null },
                    { text: 'National', value: 1 },
                    { text: 'Adiacent', value: 2 },
                    { text: 'High seas', value: 3 }
                  ]
                },
            {
              label: 'Coordinates',
              type: 'text',
              name: 'coordinates',
              selected: '',
            }, {
              label: 'Surface (marine, terrestrial, wetland)',
              type: 'text',
              name: 'surface',
              selected: '',
            }, {
              label: 'Main ecosystems, species and their habits',
              type: 'text',
              name: 'ecosystems',
              selected: '',
            },
             {
              type: 'radio',
              label: 'Management plan',
              name: 'management',
              selected: null,
              options: [
                { text: 'Yes', value: 1 },
                { text: 'No', value: 2 },
                { text: 'Under Development', value: 3 }
              ]
            },
            {
              label: 'Date of adoption',
              type: 'date',
              name: 'dateofadoption',
              selected: '',
            } 
          ]
        }
          let inventoryobj = inventoryJson
          for (let article of inventoryobj.article_items) {
            article.selected = inventory[article.name]
          }
          this.form.tab_2.data.table_2.articles.push(inventoryobj)
        }
      }
      else  {
        let inventory = data.BC_SPA.spa.Row;
        let inventoryJson = {
          article_title: {
            label: "Name of the SPA",
            selected: inventory.spa_name,
            name: 'name',
            type: 'text'
          },
          article_items: [{
              label: 'Date of establishment',
              type: 'date',
              name: 'date',
              selected: '',
            }, {
              label: 'Category',
              type: 'text',
              name: 'category',
              selected: '',
            }, 
            {
                  type: 'select',
                  label: 'Jurisdiction',
                  name: 'jurisdiction',
                  selected: null,
                  options: [
                    { text: 'Please select one item', value: null },
                    { text: 'National', value: 1 },
                    { text: 'Adiacent', value: 2 },
                    { text: 'High seas', value: 3 }
                  ]
                },
            {
              label: 'Coordinates',
              type: 'text',
              name: 'coordinates',
              selected: '',
            }, {
              label: 'Surface (marine, terrestrial, wetland)',
              type: 'text',
              name: 'surface',
              selected: '',
            }, {
              label: 'Main ecosystems, species and their habits',
              type: 'text',
              name: 'ecosystems',
              selected: '',
            },
             {
              type: 'radio',
              label: 'Management plan',
              name: 'management',
              selected: null,
              options: [
                { text: 'Yes', value: 1 },
                { text: 'No', value: 2 },
                { text: 'Under Development', value: 3 }
              ]
            },
            {
              label: 'Date of adoption',
              type: 'date',
              name: 'dateofadoption',
              selected: '',
            } 
          ]
        }
        let inventoryobj = inventoryJson
        for (let article of inventoryobj.article_items) {
          article.selected = inventory[article.name]
        }
        this.form.tab_2.data.table_2.articles.push(inventoryobj)
      }
    }
  }























    if (data.BC_SPA.management_plans_imp) {
      if(data.BC_SPA.management_plans_imp.Row) {
      if (data.BC_SPA.management_plans_imp.Row.length) {
        for (let inventory of data.BC_SPA.management_plans_imp.Row) {
          // console.log(inventory)
          // let collection_id = agreement.collection_id
          // let difficulty = agreement.difficulty
          let inventoryJson = {
                    article_title: {
                      label: "Name of the SPA",
                      selected: inventory.name,
                      name: 'name',
                      type: 'text'
                    },
                    article_items: [{
                      type: 'select',
                      label: 'Implementation of Protection measures',
                      info: 'Please select an option',
                      name: 'protection_measures',
                      selected: null,
                      options: [
                        { text: 'Dumping and releases of wastes/other substances likely to impair the integrity of the SPAMI', value: 1 },
                        { text: 'Monitoring programme implemented', value: 2 },
                        { text: 'Introduction and reintroduction of any species into the SPAMI', value: 3 },
                        { text: 'Any activity or act likely to harm or disturb the species/ecosyste ms/natural, cultural or aesthetics characteristics of the SPAMI', value: 4 },
                        { text: 'Activities in the zone surrounding the area', value: 5 },

                      ]
                    }, {
                      type: 'checkbox',
                      label: 'Difficulties/Challenges',
                      info: 'Please tick all that apply',
                      name: 'difficulties',

                      selected: [],
                      options: [
                        { text: 'Policy framework', value: 1 },
                        { text: 'Regulatory framework', value: 2 },
                        { text: 'Financial resources', value: 3 },
                        { text: 'Administrative management', value: 4 },
                        { text: 'Technical Guidance Capabilities', value: 5 }
                      ],
                    }]
                  }
          let inventoryobj = inventoryJson
          for (let article of inventoryobj.article_items) {
            article.selected = inventory[article.name]
          }
          this.form.tab_3.data.table_3.articles.push(inventoryobj)
        }
      }
      else {
        let inventory = data.BC_SPA.management_plans_imp.Row;
        let inventoryJson = {
          article_title: {
            label: "Name of the SPA",
            selected: inventory.name,
            name: 'name',
            type: 'text'
          },
          article_items: [{
            type: 'select',
            label: 'Implementation of Protection measures',
            info: 'Please select an option',
            name: 'protection_measures',
            selected: null,
            options: [
              { text: 'Dumping and releases of wastes/other substances likely to impair the integrity of the SPAMI', value: 1 },
              { text: 'Monitoring programme implemented', value: 2 },
              { text: 'Introduction and reintroduction of any species into the SPAMI', value: 3 },
              { text: 'Any activity or act likely to harm or disturb the species/ecosyste ms/natural, cultural or aesthetics characteristics of the SPAMI', value: 4 },
              { text: 'Activities in the zone surrounding the area', value: 5 },

            ]
          }, {
            type: 'checkbox',
            label: 'Difficulties/Challenges',
            info: 'Please tick all that apply',
            name: 'difficulties',

            selected: [],
            options: [
              { text: 'Policy framework', value: 1 },
              { text: 'Regulatory framework', value: 2 },
              { text: 'Financial resources', value: 3 },
              { text: 'Administrative management', value: 4 },
              { text: 'Technical Guidance Capabilities', value: 5 }
            ],
          }]
        }
        let inventoryobj = inventoryJson
        for (let article of inventoryobj.article_items) {
          article.selected = inventory[article.name]
        }
        this.form.tab_3.data.table_3.articles.push(inventoryobj)
      }
    }
  }












    if (data.BC_SPA.measures_to_protect_species) {
      if (data.BC_SPA.measures_to_protect_species.Row && data.BC_SPA.measures_to_protect_species.Row.length && data.BC_SPA.measures_to_protect_species.Row.length > 1) {
        for (let perm of data.BC_SPA.measures_to_protect_species.Row) {
          // TODO: change this to colleciton collection id
         for (let article of this.form.tab_4.data.table_2.articles) {

              for (let article_items of article.article_items) {
                for(let items of article_items.items) {
                  if(items.name === perm.name){
                    items.selected = perm.value
                    items.comments = perm.comments
                  }
                }
              }
          }
        }
      } else {
          for (let item in data.BC_SPA.measures_to_protect_species.Row) {
          // TODO: change this to colleciton collection id
          let perm = data.BC_SPA.measures_to_protect_species.Row
          for (let article of this.form.tab_4.data.table_2.articles) {
              for (let article_items of article.article_items) {
                for(let items of article_items.items) {
                  if(items.name === perm.name){
                    items.selected = perm.value
                    items.comments = perm.comments
                  }
                }
              }
          }
        }
      }
    }







    if (data.BC_SPA.enf_measures) {
      if (data.BC_SPA.enf_measures.Row && data.BC_SPA.enf_measures.Row.length && data.BC_SPA.enf_measures.Row.length > 1) {
        for (let perm of data.BC_SPA.enf_measures.Row) {
          // TODO: change this to colleciton collection id
          let collection_id = perm.collection_id
          for (let article of this.form.tab_6.data.articles) {
            console.log(article)
            if (article.collection_id === collection_id) {
              for (let article_items of article.article_items) {
                  article_items.selected = perm[article_items.name]
              }
            }
          }
        }
      }
    }





    if (data.BC_SPA.spamis) {
      if (data.BC_SPA.spamis.Row && data.BC_SPA.spamis.Row.length && data.BC_SPA.spamis.Row.length > 1) {
        for (let perm of data.BC_SPA.spamis.Row) {

          if(perm.custom) {

            let spami = {
            "article_title": perm.spami_name,
            "parent_collection_id": 509,
            "iso": perm.iso,
            "custom": perm.custom,
            "article_items": [{
                "type": "date",
                "label": "Dates of establishment and inclusion",
                "name": "date_of_establishment",
                "selected": null
              },
              {
                "type": "text",
                "label": "Surface",
                "name": "surface",
                "selected": null
              },
              {
                "type": "text",
                "label": "Coordinates",
                "name": "coordinates",
                "selected": null
              },
              {
                "type": "checkbox",
                "label": "Jurisdiction",
                "name": "jurisdiction",
                "selected": null,
                "options": [{
                    "text": "National",
                    "value": 1
                  },
                  {
                    "text": "Adjacent water",
                    "value": 2
                  },
                  {
                    "text": "High seas",
                    "value": 3
                  }
                ]
              },
              {
                "type": "radio",
                "label": "Management plan",
                "name": "management_plan",
                "selected": null,
                "options": [{
                    "text": "Yes",
                    "value": 1
                  },
                  {
                    "text": "No",
                    "value": 2
                  },
                  {
                    "text": "In process",
                    "value": 3
                  }
                ]
              },
              {
                "type": "date",
                "label": "Date of adoption",
                "name": "date_of_adoption",
                "selected": null
              },
              {
                "type": "text",
                "label": "Change of delimitation",
                "name": "delimitation_change",
                "selected": null
              },
              {
                "type": "text",
                "label": "Change of legal status",
                "name": "legal_status_change",
                "selected": null
              },
              {
                "type": "text",
                "label": "Reasons for changes",
                "name": "changes_reasons",
                "selected": null
              }
            ]
          }

          for(let field of spami.article_items) {
            field.selected = perm[field.name]
          }
          this.form.tab_3.data.table_2.articles.push(spami)


          } else {

            let collection_id = perm.collection_id
            for (let article of this.form.tab_3.data.table_2.articles) {
              if (article.collection_id === collection_id) {
                for (let article_items of article.article_items) {
                    article_items.selected = perm[article_items.name]
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
.spinner {
    z-index: 1;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0,0,0,0.2);
    display: flex;
    justify-content: center;
    align-items: center;
}

.loader {
  border: 16px solid #f3f3f3;
  border-radius: 50%;
   border-top: 16px solid blue;
   border-right: 16px solid green;
   border-bottom: 16px solid red;
   border-left: 16px solid pink;
  width: 120px;
  height: 120px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;
}

/* Safari */
@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
