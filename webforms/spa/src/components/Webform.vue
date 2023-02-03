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


    // prefill Part II, Table III - List of SPAs within the protocol's geographical coverage
    if (data.BC_SPA.spa) {
      if(data.BC_SPA.spa.Row){
      if (data.BC_SPA.spa.Row.length) {
        for (let inventory of data.BC_SPA.spa.Row) {
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
              label: 'Legal enactment (copy of the text should be attached)',
              type: 'file',
              name: 'legalEnactment',
              selected: ''
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
              label: 'Coordinates (If shapefile or geojson resources are available, please upload them directly in the envelope using "Add supporting file" button.)',
              type: 'text',
              name: 'coordinates',
              selected: '',
            }, {
              label: 'Link to a standard OGC service',
              type: 'text',
              name: 'WMSlink',
              selected: '',
            }, {
              label: 'Marine surface',
              type: 'text',
              name: 'marineSurface',
              selected: '',
            }, {
              label: 'Terrestrial surface',
              type: 'text',
              name: 'terrestrialSurface',
              selected: '',
            }, {
              label: 'Wetland surface',
              type: 'text',
              name: 'wetlandSurface',
              selected: '',
            }, {
              label: 'Total surface (marine, terrestrial, wetland)',
              type: 'text',
              name: 'surface',
              selected: '',
            }, {
              label: 'Main Species',
              type: 'select',
              name: 'species',
              selected: null,
              options: [
                {text: 'Please select one item', value: null},
                {text: '[Magnoliophyta] Cymodocea nodosa (Ucria) Ascherson', value: 1},
                {text: '[Magnoliophyta] Posidonia oceanica (Linnaeus) Delile', value: 2},
                {text: '[Magnoliophyta] Zostera marina Linnaeus', value: 3},
                {text: '[Magnoliophyta] Zostera noltii Hornemann', value: 4},
                {text: '[Chlorophyta] Caulerpa ollivieri Dostál', value: 5},
                {text: '[Heterokontophyta] Cystoseira genus (except Cystoseira compressa)', value: 6},
                {text: '[Heterokontophyta] Fucus virsoides J. Agardh', value: 7},
                {text: '[Heterokontophyta] Gymnogongrus crenulatus (Turner) J. Agardh', value: 8},
                {text: '[Heterokontophyta] Kallymenia spathulata (J. Agardh) P.G. Parkinson', value: 9},
                {text: '[Heterokontophyta] Laminaria rodriguezii Bornet', value: 10},
                {text: '[Heterokontophyta] Sargassum acinarium (Linnaeus) Setchell', value: 11},
                {text: '[Heterokontophyta] Sargassum flavifolium Kützing', value: 12},
                {text: '[Heterokontophyta] Sargassum hornschuchii C. Agardh', value: 13},
                {text: '[Heterokontophyta] Sargassum trichocarpum J. Agardh', value: 14},
                {text: '[Heterokontophyta] Sphaerococcus rhizophylloides J.J. Rodríguez', value: 15},
                {text: '[Rhodophyta] Lithophyllum byssoides (Lamarck) Foslie (Synon. Lithophyllum lichenoides)', value: 16},
                {text: '[Rhodophyta] Ptilophora mediterranea (H. Huvé) R.E. Norris', value: 17},
                {text: '[Rhodophyta] Schimmelmannia schousboei (J. Agardh) J. Agardh', value: 18},
                {text: '[Rhodophyta] Tenarea tortuosa (Esper) Lemoine', value: 19},
                {text: '[Rhodophyta] itanoderma ramosissimum (Heydrich) Bressan & Cabioch (Synon. Goniolithon byssoides)', value: 20},
                {text: '[Rhodophyta] Titanoderma trochanter (Bory) Benhissoune et al.', value: 21},
                {text: '[Porifera] Aplysina sp. plur.', value: 22},
                {text: '[Porifera] Asbestopluma hypogea Vacelet & Boury-Esnault, 1995 Axinella cannabina (Esper, 1794)', value: 23},
                {text: '[Porifera] Axinella polypoides Schmidt, 1862', value: 24},
                {text: '[Porifera] Geodia cydonium (Jameson, 1811)', value: 25},
                {text: '[Porifera] Petrobiona massiliana (Vacelet & Lévi, 1958)', value: 26},
                {text: '[Porifera] Sarcotragus foetidus Schmidt, 1862* (synon. Ircina foetida)', value: 27},
                {text: '[Porifera] Sarcotragus pipetta (Schmidt, 1868)* (synon. Ircinia pipetta) Tethya sp. plur.', value: 28},
                {text: '[Cnidaria] Astroides calycularis (Pallas, 1766)', value: 29},
                {text: '[Cnidaria] Errina aspera (Linnaeus, 1767)', value: 30},
                {text: '[Cnidaria] Savalia savaglia Nardo, 1844 (synon.Gerardia savaglia)', value: 31},
                {text: '[Bryozoa] Hornera lichenoides (Linnaeus, 1758)', value: 32},
                {text: '[Mollusca] Charonia lampas (Linnaeus, 1758) (= Ch. Rubicunda = Ch. Nodifera)', value: 33},
                {text: '[Mollusca] Charonia tritonis variegata Lamarck, 1816 (= Ch. Seguenziae)', value: 34},
                {text: '[Mollusca] Dendropoma petraeum (Monterosato, 1884)', value: 35},
                {text: '[Mollusca] Erosaria spurca (Linnaeus, 1758)', value: 36},
                {text: '[Mollusca] Gibbula nivosa A. Adams, 1851', value: 37},
                {text: '[Mollusca] Lithophaga lithophaga (Linnaeus, 1758)', value: 38},
                {text: '[Mollusca] Luria lurida (Linnaeus, 1758) (= Cypraea lurida) Mitra zonata Marryat, 1818', value: 39},
                {text: '[Mollusca] Patella ferruginea (Gmelin, 1791)', value: 40},
                {text: '[Mollusca] Patella nigra (Da Costa, 1771)', value: 41},
                {text: '[Mollusca] Pholas dactylus (Linnaeus, 1758)', value: 42},
                {text: '[Mollusca] Pinna nobilis (Linnaeus, 1758)', value: 43},
                {text: '[Mollusca] Pinna rudis (= P. pernula) (Linnaeus, 1758)', value: 44},
                {text: '[Mollusca] Ranella olearia (Linnaeus, 1758)', value: 45},
                {text: '[Mollusca] Schilderia achatidea (Gray in G.B. Sowerby II, 1837) Tonna galea (Linnaeus, 1758)', value: 46},
                {text: '[Mollusca] Zonaria pyrum (Gmelin, 1791)', value: 47},
                {text: '[Crustacea] Ocypode cursor (Linnaeus, 1758)', value: 48},
                {text: '[Crustacea] Pachylasma giganteum (Philippi, 1836)', value: 49},
                {text: '[Echinodermata] Asterina pancerii (Gasco, 1870)', value: 50},
                {text: '[Echinodermata] Centrostephanus longispinus (Philippi, 1845)', value: 51},
                {text: '[Echinodermata] Ophidiaster ophidianus (Lamarck, 1816)', value: 52}
              ]
            }, {
              label: 'Main ecosystems and species habits',
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
            },{
              label: 'Link to document (Date of adoption)',
              type: 'text',
              name: 'dateofadoption_link',
              selected: '',
            },{
              type: 'select',
              label: 'Protection objectives',
              name: 'protectionObjectives',
              selected: null,
              options: [
                { text: 'Please select one item', value: null },
                { text: '(a) representative types of coastal and marine ecosystems of adequate size to ensure their long-term viability and to maintain their biological diversity', value: 1 },
                { text: '(b) habitats which are in danger of disappearing in their natural area of distribution in the Mediterranean or which have a reduced natural area of distribution as a consequence of their regression or on account of their intrinsically restricted area', value: 2 },
                { text: '(c) habitats critical to the survival, reproduction and recovery of endangered, threatened or endemic species of flora or fauna', value: 3 },
                { text: '(d) sites of particular importance because of their scientific, aesthetic, cultural or educational interest', value: 4 }
              ]
            }, {
              type: 'select',
              label: 'Protection measures',
              name: 'protectionMeasures',
              selected: null,
              options: [
                { text: 'Please select one item', value: null },
                { text: '(a) the strengthening of the application of the other Protocols to the Convention and of other relevant treaties to which they are Parties', value: 1 },
                { text: '(b) the prohibition of the dumping or discharge of wastes and other substances likely directly or indirectly to impair the integrity of the specially protected area', value: 2 },
                { text: '(c) the regulation of the passage of ships and any stopping or anchoring', value: 3 },
                { text: '(d) the regulation of the introduction of any species not indigenous to the specially protected area in question, or of genetically modified species, as well as the introduction or reintroduction of species which are or have been present in the specially protected area', value: 4 },
                { text: '(e) the regulation or prohibition of any activity involving the exploration or modification of the soil or the exploitation of the subsoil of the land part, the seabed or its subsoil', value: 5 },
                { text: '(f) the regulation of any scientific research activity', value: 6 },
                { text: '(g) the regulation or prohibition of fishing, hunting, taking of animals and harvesting of plants or their destruction, as well as trade in animals, parts of animals, plants, parts of plants, which originate in specially protected areas', value: 7 },
                { text: '(h) the regulation and if necessary the prohibition of any other activity or act likely to harm or disturb the species or that might endanger the state of conservation of the ecosystems or species or might impair the natural or cultural characteristics of the specially protected area', value: 8 },
                { text: '(i) any other measure aimed at safeguarding ecological and biological processes and the landscape', value: 9 }
              ],
            },
            {
              type: 'textarea',
              label: 'Other measures',
              name: 'otherMeasures',
              selected: '',
            },
            {
              type: 'radio',
              label: 'Are the measures legally binding (e.g. included in an applicable regulation)?',
              name: 'measuresLegallyBinding',
              selected: null,
              options: [
                { text: 'Yes', value: 1 },
                { text: 'No', value: 2 },
              ],
              options_description: ['If yes, provide reference to relevant regulation Existence of NoTake Zone37 and the total extent of the NoTakeZone as officially declared (in km²).']
            }, {
              label: 'Provide reference to relevant regulation Existence of NoTake Zone37',
              type: 'text',
              name: 'relevantRegulation',
              selected: '',
            }, {
              label: 'Provide total extent of the NoTakeZone as officially declared (in km²)',
              type: 'text',
              name: 'totalExtent',
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
              label: 'Legal enactment (copy of the text should be attached)',
              type: 'file',
              name: 'legalEnactment',
              selected: ''
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
              label: 'Coordinates (If shapefile or geojson resources are available, please upload them directly in the envelope using "Add supporting file" button.)',
              type: 'text',
              name: 'coordinates',
              selected: '',
            }, {
              label: 'Link to a standard OGC service',
              type: 'text',
              name: 'WMSlink',
              selected: '',
            }, {
              label: 'Marine surface',
              type: 'text',
              name: 'marineSurface',
              selected: '',
            }, {
              label: 'Terrestrial surface',
              type: 'text',
              name: 'terrestrialSurface',
              selected: '',
            }, {
              label: 'Wetland surface',
              type: 'text',
              name: 'wetlandSurface',
              selected: '',
            }, {
              label: 'Total surface (marine, terrestrial, wetland)',
              type: 'text',
              name: 'surface',
              selected: '',
            }, {
              label: 'Main Species',
              type: 'select',
              name: 'species',
              selected: null,
              options: [
                {text: 'Please select one item', value: null},
                {text: '[Magnoliophyta] Cymodocea nodosa (Ucria) Ascherson', value: 1},
                {text: '[Magnoliophyta] Posidonia oceanica (Linnaeus) Delile', value: 2},
                {text: '[Magnoliophyta] Zostera marina Linnaeus', value: 3},
                {text: '[Magnoliophyta] Zostera noltii Hornemann', value: 4},
                {text: '[Chlorophyta] Caulerpa ollivieri Dostál', value: 5},
                {text: '[Heterokontophyta] Cystoseira genus (except Cystoseira compressa)', value: 6},
                {text: '[Heterokontophyta] Fucus virsoides J. Agardh', value: 7},
                {text: '[Heterokontophyta] Gymnogongrus crenulatus (Turner) J. Agardh', value: 8},
                {text: '[Heterokontophyta] Kallymenia spathulata (J. Agardh) P.G. Parkinson', value: 9},
                {text: '[Heterokontophyta] Laminaria rodriguezii Bornet', value: 10},
                {text: '[Heterokontophyta] Sargassum acinarium (Linnaeus) Setchell', value: 11},
                {text: '[Heterokontophyta] Sargassum flavifolium Kützing', value: 12},
                {text: '[Heterokontophyta] Sargassum hornschuchii C. Agardh', value: 13},
                {text: '[Heterokontophyta] Sargassum trichocarpum J. Agardh', value: 14},
                {text: '[Heterokontophyta] Sphaerococcus rhizophylloides J.J. Rodríguez', value: 15},
                {text: '[Rhodophyta] Lithophyllum byssoides (Lamarck) Foslie (Synon. Lithophyllum lichenoides)', value: 16},
                {text: '[Rhodophyta] Ptilophora mediterranea (H. Huvé) R.E. Norris', value: 17},
                {text: '[Rhodophyta] Schimmelmannia schousboei (J. Agardh) J. Agardh', value: 18},
                {text: '[Rhodophyta] Tenarea tortuosa (Esper) Lemoine', value: 19},
                {text: '[Rhodophyta] itanoderma ramosissimum (Heydrich) Bressan & Cabioch (Synon. Goniolithon byssoides)', value: 20},
                {text: '[Rhodophyta] Titanoderma trochanter (Bory) Benhissoune et al.', value: 21},
                {text: '[Porifera] Aplysina sp. plur.', value: 22},
                {text: '[Porifera] Asbestopluma hypogea Vacelet & Boury-Esnault, 1995 Axinella cannabina (Esper, 1794)', value: 23},
                {text: '[Porifera] Axinella polypoides Schmidt, 1862', value: 24},
                {text: '[Porifera] Geodia cydonium (Jameson, 1811)', value: 25},
                {text: '[Porifera] Petrobiona massiliana (Vacelet & Lévi, 1958)', value: 26},
                {text: '[Porifera] Sarcotragus foetidus Schmidt, 1862* (synon. Ircina foetida)', value: 27},
                {text: '[Porifera] Sarcotragus pipetta (Schmidt, 1868)* (synon. Ircinia pipetta) Tethya sp. plur.', value: 28},
                {text: '[Cnidaria] Astroides calycularis (Pallas, 1766)', value: 29},
                {text: '[Cnidaria] Errina aspera (Linnaeus, 1767)', value: 30},
                {text: '[Cnidaria] Savalia savaglia Nardo, 1844 (synon.Gerardia savaglia)', value: 31},
                {text: '[Bryozoa] Hornera lichenoides (Linnaeus, 1758)', value: 32},
                {text: '[Mollusca] Charonia lampas (Linnaeus, 1758) (= Ch. Rubicunda = Ch. Nodifera)', value: 33},
                {text: '[Mollusca] Charonia tritonis variegata Lamarck, 1816 (= Ch. Seguenziae)', value: 34},
                {text: '[Mollusca] Dendropoma petraeum (Monterosato, 1884)', value: 35},
                {text: '[Mollusca] Erosaria spurca (Linnaeus, 1758)', value: 36},
                {text: '[Mollusca] Gibbula nivosa A. Adams, 1851', value: 37},
                {text: '[Mollusca] Lithophaga lithophaga (Linnaeus, 1758)', value: 38},
                {text: '[Mollusca] Luria lurida (Linnaeus, 1758) (= Cypraea lurida) Mitra zonata Marryat, 1818', value: 39},
                {text: '[Mollusca] Patella ferruginea (Gmelin, 1791)', value: 40},
                {text: '[Mollusca] Patella nigra (Da Costa, 1771)', value: 41},
                {text: '[Mollusca] Pholas dactylus (Linnaeus, 1758)', value: 42},
                {text: '[Mollusca] Pinna nobilis (Linnaeus, 1758)', value: 43},
                {text: '[Mollusca] Pinna rudis (= P. pernula) (Linnaeus, 1758)', value: 44},
                {text: '[Mollusca] Ranella olearia (Linnaeus, 1758)', value: 45},
                {text: '[Mollusca] Schilderia achatidea (Gray in G.B. Sowerby II, 1837) Tonna galea (Linnaeus, 1758)', value: 46},
                {text: '[Mollusca] Zonaria pyrum (Gmelin, 1791)', value: 47},
                {text: '[Crustacea] Ocypode cursor (Linnaeus, 1758)', value: 48},
                {text: '[Crustacea] Pachylasma giganteum (Philippi, 1836)', value: 49},
                {text: '[Echinodermata] Asterina pancerii (Gasco, 1870)', value: 50},
                {text: '[Echinodermata] Centrostephanus longispinus (Philippi, 1845)', value: 51},
                {text: '[Echinodermata] Ophidiaster ophidianus (Lamarck, 1816)', value: 52}
              ]
            }, {
              label: 'Main ecosystems and species habits',
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
            }, {
              label: 'Link to document (Date of adoption)',
              type: 'text',
              name: 'dateofadoption_link',
              selected: '',
            },{
              type: 'select',
              label: 'Protection objectives',
              name: 'protectionObjectives',
              selected: null,
              options: [
                { text: 'Please select one item', value: null },
                { text: '(a) representative types of coastal and marine ecosystems of adequate size to ensure their long-term viability and to maintain their biological diversity', value: 1 },
                { text: '(b) habitats which are in danger of disappearing in their natural area of distribution in the Mediterranean or which have a reduced natural area of distribution as a consequence of their regression or on account of their intrinsically restricted area', value: 2 },
                { text: '(c) habitats critical to the survival, reproduction and recovery of endangered, threatened or endemic species of flora or fauna', value: 3 },
                { text: '(d) sites of particular importance because of their scientific, aesthetic, cultural or educational interest', value: 4 }
              ]
            },
            {
              type: 'select',
              label: 'Protection measures',
              name: 'protectionMeasures',
              selected: null,
              options: [
                { text: 'Please select one item', value: null },
                { text: '(a) the strengthening of the application of the other Protocols to the Convention and of other relevant treaties to which they are Parties', value: 1 },
                { text: '(b) the prohibition of the dumping or discharge of wastes and other substances likely directly or indirectly to impair the integrity of the specially protected area', value: 2 },
                { text: '(c) the regulation of the passage of ships and any stopping or anchoring', value: 3 },
                { text: '(d) the regulation of the introduction of any species not indigenous to the specially protected area in question, or of genetically modified species, as well as the introduction or reintroduction of species which are or have been present in the specially protected area', value: 4 },
                { text: '(e) the regulation or prohibition of any activity involving the exploration or modification of the soil or the exploitation of the subsoil of the land part, the seabed or its subsoil', value: 5 },
                { text: '(f) the regulation of any scientific research activity', value: 6 },
                { text: '(g) the regulation or prohibition of fishing, hunting, taking of animals and harvesting of plants or their destruction, as well as trade in animals, parts of animals, plants, parts of plants, which originate in specially protected areas', value: 7 },
                { text: '(h) the regulation and if necessary the prohibition of any other activity or act likely to harm or disturb the species or that might endanger the state of conservation of the ecosystems or species or might impair the natural or cultural characteristics of the specially protected area', value: 8 },
                { text: '(i) any other measure aimed at safeguarding ecological and biological processes and the landscape', value: 9 }
              ],
            },
            {
              type: 'textarea',
              label: 'Other measures',
              name: 'otherMeasures',
              selected: '',
            },
            {
              type: 'radio',
              label: 'Are the measures legally binding (e.g. included in an applicable regulation)?',
              name: 'measuresLegallyBinding',
              selected: null,
              options: [
                { text: 'Yes', value: 1 },
                { text: 'No', value: 2 },
              ],
              options_description: ['If yes, provide reference to relevant regulation Existence of NoTake Zone37 and the total extent of the NoTakeZone as officially declared (in km²).']
            }, {
              label: 'Provide reference to relevant regulation Existence of NoTake Zone37',
              type: 'text',
              name: 'relevantRegulation',
              selected: '',
            }, {
              label: 'Provide total extent of the NoTakeZone as officially declared (in km²)',
              type: 'text',
              name: 'totalExtent',
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
                      info: 'Please tick all that apply',
                      name: 'protection_measures',
                      selected: null,
                      options: [
                        { text: 'Dumping and releases of wastes/other substances likely to impair the integrity of the SPAMI', value: 1 },
                        { text: 'Monitoring programme implemented', value: 2 },
                        { text: 'Introduction and reintroduction of any species into the SPAMI', value: 3 },
                        { text: 'Any activity or act likely to harm or disturb the species/ecosyste ms/natural, cultural or aesthetics characteristics of the SPAMI', value: 4 },
                        { text: 'Activities in the zone surrounding the area', value: 5 },
                      ],
                      comments: inventory.protection_comments,
                    }, {
                      type: 'radio',
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
                      comments: inventory.difficulties_comments,

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
            type: 'checkbox',
            label: 'Implementation of Protection measures',
            info: 'Please tick all that apply',
            name: 'protection_measures',
            selected: null,
            options: [
              { text: 'Dumping and releases of wastes/other substances likely to impair the integrity of the SPAMI', value: 1 },
              { text: 'Monitoring programme implemented', value: 2 },
              { text: 'Introduction and reintroduction of any species into the SPAMI', value: 3 },
              { text: 'Any activity or act likely to harm or disturb the species/ecosyste ms/natural, cultural or aesthetics characteristics of the SPAMI', value: 4 },
              { text: 'Activities in the zone surrounding the area', value: 5 },
            ],
              comments: inventory.protection_comments

          }, {
            type: 'radio',
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
              comments: inventory.difficulties_comments,

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
                "name": "management",
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
