<template>
  <div v-if="info">
  <div class="question-wrapper">
        <h3>{{info.label}}</h3>

        <div class="question">
            <p>{{info.data.question}}</p>
        </div>

        <div class="answer">
          <div class="table-head">
            <b>{{info.data.table_1.table_label}}</b>
          </div>
          <div role="tablist">
          <b-card v-for="(article,index) in info.data.table_1.articles" :key="article.article_title" class="mb-1">
            <h5 :id="titleSlugify(article.article_title)" style="cursor: pointer" href="#" v-b-toggle="`article_${index}`" variant="info">
              <span class="text-muted" v-if="article.optional">Optional: </span>
              {{article.article_title}} <span style="float:right">▼</span>
            </h5>
            <b-collapse class="mt-3"  :id="`article_${index}`" accordion="my-accordion" role="tabpanel">
              <div class="form-section" v-for="(item_array,array_index) in article.article_items">
                <h6><b>{{item_array.description}}</b></h6>
                <div class="form-subsection" v-for="item in item_array.items">
                <div class="mt-2">{{item.label}} <small class="muted">({{item.info}})</small></div>
                <div class="form-fields">
                  <div v-if="item.type === 'difficulties'">
                    <b-form-group>
                      <b-form-checkbox-group stacked :id="`checkbox_${tabId}_${index}_${array_index}_${item.type}`" :name="`radio_${tabId}_${index}_${array_index}_${item.type}`" v-model="item.selected" :options="item.options">
                      </b-form-checkbox-group>

                      </b-form-group>
                  </div>
                  <div v-else>
                   <b-form-group>
                      <b-form-radio-group stacked :required="!article.optional" :id="`radio_${tabId}_${index}_${array_index}_${item.type}`" v-model="item.selected" :options="item.options" :name="`radio_${tabId}_${index}_${array_index}_${item.type}`">
                      </b-form-radio-group>
                    </b-form-group>
                  </div>
                </div>
                
                <b-row>
                 <b-col lg="12" v-if="item.type === 'status' || item.type === 'difficulties'">
                   <textarea 
                      class="form-control"
                      v-model="item.comments"
                      placeholder="additional comments"></textarea>
                  </b-col>
                </b-row>


                <small style="font-style:italic; font-size: .6rem">
                  <p class="mb-0" v-for="option of item.options_description">
                    {{option}}
                  </p>
                </small>
              </div>
              </div>
            </b-collapse>
            </b-card>
          </div>
        </div>

        <div class="answer" style="position: relative;">
          <div class="table-head">
            <b>{{info.data.table_2.table_label}}</b>
          </div>
          <div role="tablist">
            <div role="tablist">
              <b-card style="background: #eee" v-for="(article,index) in info.data.table_2.articles" :key="index" class="mb-1">
                <h5 style="cursor: pointer" href="#" v-b-toggle="`article_${index}`" variant="info">
                  {{article.article_title.selected}}

                  <span style="float:right">▼</span>
                </h5>
               <label>
                  {{article.article_title.label}}
               </label>

               <b-input-group>
                <b-form-input required :type="article.article_title.type" :name="article.article_title.name" v-model="article.article_title.selected"></b-form-input>
                <b-input-group-append>
                  <b-btn variant="danger" @click="removeSpa(index)"> X Remove spa</b-btn> 
                </b-input-group-append>
               </b-input-group>

                <b-collapse class="mt-3" visible :id="`article_${index}`" accordion="my-accordion" role="tabpanel">
                  <div class="form-subsection" v-for="(item,item_index) in article.article_items">
                    <div v-if="item.type === 'text' || item.type === 'date'">
                      <div class="mt-2">{{item.label}}</div>
                      <div class="form-fields">
                        <b-form-input required :id="`${tabId}_${index}_${item_index}_${item.name}`" :type="item.type" :name="item.name" v-model="item.selected"></b-form-input>
                      </div>
                    </div>
                    <div v-else-if="item.type === 'file'">
                      <div class="mt-2">{{item.label}}</div>
                      <b-input-group>
                        <b-input-group-prepend>
                          <b-badge class="upload-badge" variant="success" v-show="item.selected && fileIsUploading === false && doneUpload">✓ Uploaded</b-badge>
                          <b-badge class="upload-badge" variant="info" v-show="fileIsUploading === true && doneUpload === false">Uploading</b-badge>
                      </b-input-group-prepend>
                        <b-form-file v-model="file" :state="Boolean(file)" placeholder="Upload a file..."></b-form-file>
                        <b-input-group-append>
                          <b-btn @click="uploadFormFile(file,item)" variant="primary">Upload</b-btn>
                        </b-input-group-append>
                      </b-input-group>

                      <p v-if="item.selected">File uploaded: <a :href="item.selected" blank="_true">{{item.selected}}</a>
                        <b-badge style="cursor: pointer" variant="danger" @click="deleteFormFile(item.selected, item)">Delete file</b-badge>
                      </p>
                    </div>
                    <div lg="12" v-else-if="item.type === 'textarea'">
                      <div class="mt-2">{{item.label}}</div>
                      <textarea
                        :id="`${tabId}_${index}_${item_index}_${item.name}`"
                        :name="item.name"
                        class="form-control"
                        v-model="item.selected">
                      </textarea>
                    </div>
                     <div v-else-if="item.type === 'radio'">
                      <div class="mt-2">{{item.label}}</div>
                      <div class="form-fields">
                        <b-form-radio-group required stacked :id="`radio_${tabId}_${index}_${item_index}_${item.type}`" :name="`radio_${tabId}_${index}_${item_index}_${item.type}`" :options="item.options" v-model="item.selected"></b-form-radio-group>
                      </div>
                    </div>
                    <div v-else-if="item.type === 'select'">
                      <div class="mt-2">{{item.label}}</div>
                      <div class="form-fields">
                        <b-form-select required :id="`${tabId}_${index}_${item_index}_${item.name}`" :name="item.name" :options="item.options" v-model="item.selected"></b-form-select>
                      </div>
                    </div>
                    <div v-else-if="item.type === 'checkbox'">
                      <div class="mt-2">{{item.label}} <small class="muted">({{item.info}})</small></div>
                      <div class="form-fields">
                        <b-form-checkbox-group stacked :id="`checkbox_table_spa_${tabId}_${index}_${item_index}_${item.name}`" :name="`checkbox_table_spa_${tabId}_${index}_${item_index}_${item.name}`" :options="item.options" v-model="item.selected"></b-form-checkbox-group>
                      </div>
                    </div>

                    <small style="font-style:italic; font-size: .6rem">
                      <p class="mb-0" v-for="option of item.options_description">
                        {{option}}
                      </p>
                    </small>

                  </div>
                </b-collapse>
              </b-card>
               <b-btn style="    
                  position: absolute;
                  top: 9px;
                  right: 13px;" 
                  variant="primary" @click="addSpa"> + Add</b-btn> 
            </div>
          </div>
        </div>


          <div class="answer">
          <div class="table-head">
            <b>{{info.data.table_3.table_label}}</b>
          </div>
          <div role="tablist">
          <b-card v-for="(article,index) in info.data.table_3.articles" :key="article.article_title" class="mb-1">
            <h5 :id="titleSlugify(article.article_title)" style="cursor: pointer" href="#" v-b-toggle="`article_table_3_${index}`" variant="info">
              <span class="text-muted" v-if="article.optional">Optional: </span>
              {{article.article_title}} <span style="float:right">▼</span>
            </h5>
            <b-collapse class="mt-3"  :id="`article_table_3_${index}`" accordion="my-accordion" role="tabpanel">
              <div class="form-section" v-for="(item_array,array_index) in article.article_items">
                <h6><b>{{item_array.description}}</b></h6>
                <div class="form-subsection" v-for="item in item_array.items">
                <div class="mt-2">{{item.label}} <small class="muted">({{item.info}})</small></div>
                <div class="form-fields">
                  <div v-if="item.type === 'difficulties'">
                    <b-form-group>
                      <b-form-checkbox-group stacked :id="`checkbox_table_3_${tabId}_${index}_${array_index}_${item.type}`" :name="`checkbox_table_3_${tabId}_${index}_${array_index}_${item.type}`" v-model="item.selected" :options="item.options">
                      </b-form-checkbox-group>

                      </b-form-group>
                  </div>
                  <div v-else>
                   <b-form-group>
                      <b-form-radio-group stacked :required="!article.optional" :id="`radio_table_3_${tabId}_${index}_${array_index}_${item.type}`" v-model="item.selected" :options="item.options" :name="`radio_table_3_${tabId}_${index}_${array_index}_${item.type}`">
                      </b-form-radio-group>
                    </b-form-group>
                  </div>
                </div>
                
             
                <b-row>
                 <b-col lg="12" v-if="item.type === 'status' || item.type === 'difficulties'">
                   <textarea 
                      class="form-control"
                      v-model="item.comments"
                      placeholder="additional comments"></textarea>
                  </b-col>
                </b-row>


                <small style="font-style:italic; font-size: .6rem">
                  <p class="mb-0" v-for="option of item.options_description">
                    {{option}}
                  </p>
                </small>
              </div>
              </div>
            </b-collapse>
            </b-card>
          </div>
        </div>


      </div>
  </div>
</template>

<script>

import {slugify} from '../utils.js';
import {deleteFile, uploadFile, getSupportingFiles, envelope} from '../api.js';

export default {


  props: {
    info: null,
    tabId:null
    
  },

  created() {

    if(this.info.data.table_2.articles.length < 1){
      this.addSpa()
    }
  },

  data () {
    return {
      file: null,
      fileIsUploading: false,
      doneUpload: false,
    }
  },

  methods: {
    titleSlugify(text) {
      return slugify(text)
    },

    uploadFormFile(userfile, formfield){

      console.log(userfile)
      console.log(formfield)      

      this.fileIsUploading = true;

      let file = new FormData()

      file.append('userfile', userfile)

      uploadFile(file).then((response) => {
        this.doneUpload = false;
        getSupportingFiles().then((response) => {
          this.file = null;
          formfield.selected = envelope + '/' + response.data[response.data.length - 1]
          this.fileIsUploading = false
          this.doneUpload = true  
        })
      }).catch((error) => {
        console.log(error)
      })
    },

    deleteFormFile(fileId, field) {
      let id = fileId.split('/')
      let finalId = id[id.length - 1]
      deleteFile(finalId).then((response) => {
        field.selected = null
      }).catch((error) => {
        console.log(error)
      })
    },

    addSpa(){
      let spa = {
          article_title: {
            label: "Name of the SPA",
            selected: 'please specify a name',
            name: 'name',
            type: 'text'
          },
          article_items: [{
              label: 'Date of establishment',
              type: 'date',
              name: 'date',
              selected: '',
            }, {
              label: 'Legal enactment',
              type: 'text',
              name: 'legalEnactmentText',
              selected: ''
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
            }, {
              label: 'Coordinates (Please upload the polygon(s) in shapefile, using the World Geodetic System 1984 (WGS 84) coordinate system)',
              type: 'file',
              name: 'coordinates_file',
              selected: '',
            }, {
              label: 'Coordinates (comments)',
              type: 'text',
              name: 'coordinates',
              selected: '',
            },{
              label: 'Link to a standard OGC service',
              type: 'text',
              name: 'WMSlink',
              selected: '',
            }, {
              label: 'Total surface (in km²)',
              type: 'text',
              name: 'surface',
              selected: '',
              options_description: ['Please provide the total surface, then distinguish it into marine, terrestrial and wetland surfaces as relevant.'],
            }, {
              label: 'Marine surface (in km²)',
              type: 'text',
              name: 'marineSurface',
              selected: '',
            }, {
              label: 'Terrestrial surface (in km²)',
              type: 'text',
              name: 'terrestrialSurface',
              selected: '',
            }, {
              label: 'Wetland surface (in km²)',
              type: 'text',
              name: 'wetlandSurface',
              selected: '',
            }, {
              label: 'Main ecosystems and species habits',
              type: 'text',
              name: 'ecosystems',
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
            },
            {
              label: 'Upload proof document (Date of adoption)',
              type: 'file',
              name: 'dateofadoption_doc',
              selected: '',
            },
            {
              type: 'checkbox',
              label: 'Protection objectives',
              info: 'Please select among the objectives set out in Article 4.',
              name: 'protectionObjectives',
              selected: [],
              options: [
                { text: '(a) representative types of coastal and marine ecosystems of adequate size to ensure their long-term viability and to maintain their biological diversity', value: 1 },
                { text: '(b) habitats which are in danger of disappearing in their natural area of distribution in the Mediterranean or which have a reduced natural area of distribution as a consequence of their regression or on account of their intrinsically restricted area', value: 2 },
                { text: '(c) habitats critical to the survival, reproduction and recovery of endangered, threatened or endemic species of flora or fauna', value: 3 },
                { text: '(d) sites of particular importance because of their scientific, aesthetic, cultural or educational interest', value: 4 }
              ],
            },
            {
              type: 'checkbox',
              label: 'Protection measures',
              info: 'Please select among the protection measures set out in Article 6.',
              name: 'protectionMeasures',
              selected: [],
              options: [
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
            }, {
              type: 'textarea',
              label: 'In case other protection measures are applicable, please specify',
              name: 'otherMeasures',
              selected: '',
            }, {
              label: 'If yes, provide reference to relevant regulation',
              type: 'textarea',
              name: 'relevantRegulation',
              selected: '',
             }, {
              type: 'radio',
              label: 'Existence of a No-Take Zone',
              name: 'measuresLegallyBinding',
              selected: null,
              options: [
                { text: 'Yes', value: 1 },
                { text: 'No', value: 2 },
              ],
              options_description: ['No-Take Zones are geographically defined zones within marine protected areas that do not allow any fishing, mining, drilling, or other extractive activities.'],
            }, {
              label: 'If yes, provide the total extent of the No-Take Zone as officially declared (in km²)',
              type: 'text',
              name: 'totalExtent',
              selected: '',
            }
          ]
        }

      this.info.data.table_2.articles.push(spa)
    },

    removeSpa(index) {
      // console.log(this.info.data.table_2.articles[index])
      console.log(index)
      this.info.data.table_2.articles.splice(index, 1)
    },
  },
}
</script>

<style lang="css" scoped>

</style>
