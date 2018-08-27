<template>
  <div v-if="info">
    <div class="question-wrapper">
      <h3>{{info.label}}</h3>






        <div class="answer">
          <div class="table-head">

            <b>{{info.data.table_label}}</b>

          </div>

          <div style="position: relative" role="tablist">
          <b-card v-for="(article,index) in info.data.articles" class="mb-1">
            <h5 :id="`titleSlugify(${article.article_title.label}_${index})`" style="cursor: pointer" href="#" v-b-toggle="`article_${index}`" variant="info">
            {{article.article_title.label}} : {{article.article_title.selected}} <span style="float:right">▼</span>
            </h5>
            <b-btn variant="danger" @click="removeDump(index)"> X</b-btn>

            <b-form-input required :id="`${tabId}_${index}_${article.article_title.name}_${article.article_title.type}`" :type="article.article_title.type" :name="article.article_title.name" v-model="article.article_title.selected"></b-form-input>


            <b-collapse class="mt-3"  :id="`article_${index}`" accordion="my-accordion" role="tabpanel">

              <div class="form-fields mb-3" v-for="(item, array_index) in article.article_items">

                <div><b>{{item.label}}</b> <small class="muted" v-if="item.info">({{item.info}})</small></div>

                  <b-form-input v-if="item.type != 'textarea' && item.type != 'file' && item.type != 'radio'" required :id="`${tabId}_${index}_${array_index}_${item.name}_${item.type}`" :type="item.type" :name="item.name" v-model="item.selected"></b-form-input>


                  <div v-else-if="item.type === 'file'">
                    <b-input-group>
                      <b-input-group-prepend>
                        <b-badge class="upload-badge" variant="success" v-show="item.selected && fileIsUploading === false && doneUpload">✓ Uploaded</b-badge>
                        <b-badge class="upload-badge" variant="info" v-show="fileIsUploading === true && doneUpload === false">Uploading</b-badge>
                     </b-input-group-prepend>
                      <b-form-file v-model="file" :state="Boolean(file)" placeholder="Upload a map..."></b-form-file>
                      <b-input-group-append>
                        <b-btn @click="uploadFormFile(file,item)" variant="primary">Upload</b-btn>
                      </b-input-group-append>
                    </b-input-group>

                    <p v-if="item.selected">File uploaded: <a :href="item.selected" blank="_true">{{item.selected}}</a>
                      <b-badge style="cursor: pointer" variant="danger" @click="deleteFormFile(item.selected, item)">Delete file</b-badge>
                    </p>


                  </div>

                  <b-form-group v-else-if="item.type === 'radio'">
                      <b-form-radio-group stacked required :id="`radio_${tabId}_${index}_${array_index}_${item.type}`" v-model="item.selected" :options="item.options" :name="`radio_${tabId}_${index}_${array_index}_${item.type}`">
                      </b-form-radio-group>
                  </b-form-group>

                  <textarea v-else v-model="item.selected" class="form-control"></textarea>

                  <div v-if="checkForCommentsField(item)">
                    Comments
                    <textarea class="form-control"  v-model="item.comments"></textarea>
                  </div>

                </div>
            </b-collapse>
            </b-card>

            <b-btn style="
                  position: absolute;
                  top: -3rem;
                  right: 13px;"
                  variant="primary" @click="addDump"> + Add</b-btn>
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
    if(this.info.data.articles.length === 0) {
      this.addDump();
    }
  },

  data () {
    return {
      file: null,
      fileIsUploading: false,
      doneUpload: false,
    }
  },


  methods :{

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


    pushUnique(array, item) {
      if (array.indexOf(item) === -1) {
        array.push(item);
      }
    },

    checkForCommentsField(item){
      if(item.hasOwnProperty('comments')) {
        console.log(item)
        return true
      } else {
        return false
      }
    },



    addDump() {
      let dump = {
          article_title: {
            label: 'Placement Site Code',
            name: 'placement_site_code',
            type: 'text',
            info: 'National Code given',
            selected: '',
          },
          article_items: [{
            label: 'Locations of the placement',
            additional_info: 'As defined in the Updated Guidelines on artificial reefs ',
            type: 'file',
            name: 'placement_location',
            selected: '',
            info: 'A Map showing the placement site location with coordinates including depth and distance to shore and distance to the other reefs marked (YES/NO)',
          }, {
            label: 'Purpose of Placement',
            type: 'text',
            name: 'placement_purpose',
            selected: '',
            info: '(a) Environmental purposes including restoration of habitat, ecosystem management and biodiversity (b) Living marine resources (c ) Tourism etc',
          }, {
            label: 'Material Characteristics and Quantity',
            type: 'text',
            additional_info: 'Inert materials which do not cause pollution through leaching, physical or chemical weathering and/or biological activity',
            name: 'material_characteristics_and_quantity',
            selected: '',
            info: 'Detailed explanation of the composition of the material and their quantity (in tons)',
          }, {
            label: 'The name of the permitting authority and the name of national legislation',
            type: 'text',
            name: 'permitting_authority_name',
            selected: '',
            info: 'Name of the authority; legislation name and number as official gazette'
          },
          {
            label: 'Plans for Monitoring activities are in place (YES/NO)',
            type: 'radio',
            name: 'plans_for_monitoring',
            options:[{text:"Yes", value: true}, {text: "No", value: false}],
            selected: '',
            info: 'If yes, explain the monitoring and modalities including a plan for pre-placement and post-placement monitoring and evaluation.',
            additional_info: 'Pre-placement monitoring plans should set a reference baseline. Post-Placement monitoring plans should aim to produce scientific evidence to impact hypothesis',
            comments: ''
          },
          {
            label: 'Notes',
            type: 'textarea',
            name: 'notes',
            selected: '',
            info: 'Other relevant information in details',
          }]
        }
        this.info.data.articles.push(dump)
    },

    removeDump(index){
      this.info.data.articles.splice(index, 1)
    },

  },

}
</script>

<style lang="css" scoped>


.btn-danger {
      position: absolute;
    top: .5rem;
    right:3rem;
}
</style>
