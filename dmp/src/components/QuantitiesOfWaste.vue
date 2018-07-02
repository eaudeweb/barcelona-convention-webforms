<template>
  <div v-if="info">
    <div class="question-wrapper">
      <h3>{{info.label}}</h3>






        <div class="answer">
          <div class="table-head">
            
            <b>{{info.data.table_1.table_label}}</b>

          </div>

          <div style="position:relative" role="tablist">
          <b-card v-for="(article,index) in info.data.table_1.articles"  class="mb-1">
            <h5 :id="`titleSlugify(${article.article_title.label}_${index})`" style="cursor: pointer" href="#" v-b-toggle="`article_${index}`" variant="info">
            {{article.article_title.label}} : {{article.article_title.selected}} <span style="float:right">▼</span>
            </h5>

              <b-btn variant="danger" @click="removeDump1(index)"> X</b-btn> 

            <b-form-input :id="`${tabId}_${index}_${article.article_title.name}_${article.article_title.type}`" :type="article.article_title.type" :name="article.article_title.name" v-model="article.article_title.selected"></b-form-input>


            <b-collapse class="mt-3"  :id="`article_${index}`" accordion="my-accordion" role="tabpanel">

              <div class="form-fields mb-3" v-for="(item, array_index) in article.article_items">

                <div><b>{{item.label}}</b> <small class="muted" v-if="item.info">({{item.info}})</small></div>
                
                  <b-form-input  :id="`${tabId}_${index}_${array_index}_${item.name}_${item.type}`" :type="item.type" :name="item.name" v-model="item.selected"></b-form-input>
                </div>



            </b-collapse>
            </b-card>
             <b-btn style="    
                  position: absolute;
                  top: -4rem;
                  right: 13px;" 
                  variant="primary" @click="addDump1"> + Add</b-btn> 
          </div>
        </div>

        <br><br>



        <div class="answer">
          <div class="table-head">
            
            <b>{{info.data.table_2.table_label}}</b>

          </div>

          <div style="position: relative" role="tablist">
          <b-card v-for="(article,index) in info.data.table_2.articles" class="mb-1">
            <h5  :id="`titleSlugify(${article.article_title.label}_${index})`" style="cursor: pointer" href="#" v-b-toggle="`article_table_2_${index}`" variant="info">
            {{article.article_title.label}} : {{article.article_title.selected}} <span style="float:right">▼</span>
            </h5>

              <b-btn variant="danger" @click="removeDump2(index)"> X</b-btn> 

            <b-form-input :id="`${tabId}_${index}_${article.article_title.name}_${article.article_title.type}`" :type="article.article_title.type" :name="article.article_title.name" v-model="article.article_title.selected"></b-form-input>


            <b-collapse class="mt-3"  :id="`article_table_2_${index}`" accordion="my-accordion" role="tabpanel">

              <div class="form-fields mb-3" v-for="(item, array_index) in article.article_items">

                <div><b>{{item.label}}</b> <small class="muted" v-if="item.info">({{item.info}})</small></div>
                
                  <b-form-input  :id="`${tabId}_${index}_${array_index}_${item.name}_${item.type}`" :type="item.type" :name="item.name" v-model="item.selected"></b-form-input>
                </div>



            </b-collapse>
            </b-card>
                    <b-btn style="    
                  position: absolute;
                  top: -3rem;
                  right: 13px;" 
                  variant="primary" @click="addDump2"> + Add</b-btn> 
          </div>
        </div>




    </div>
  </div>
</template>
<script>

import {slugify} from '../utils.js';


export default {

  name: 'ENFMeasures',

  props: {
  	info: null,
    tabId:null

  },

  created() {
    if(this.info.data.table_1.articles.length === 0) {
      this.addDump1();
    }
    if(this.info.data.table_2.articles.length === 0) {
      this.addDump2();
    }
  },


  methods :{

    titleSlugify(text) {
      return slugify(text)
    },


    addDump1() {
      let dump = {
          article_title: {
            label: '3.1 Dump Site Code ',
            name: 'dump_site_code',
            type: 'text',
            info: 'Two-letter prefix for country code and the Contracting Party\'s own alphanumeric dump site code',
            selected: '',
          },
          article_items: [{
            label: '3.2 Map of Dumping Site',
            type: 'text',
            name: 'dumping_map',
            selected: '',
            info: 'Confirm that a small scale map showing the dump site location has been "Provided" or "Not Provided" to UNEP/MA Secretariat'
          }, {
            label: '3.3 Method of Dumping at Sea',
            type: 'text',
            name: 'dumping_sea_method',
            selected: '',
            info: 'Dumping at sea operations conducted via: ship, vessel, barge, aircraft, or other [explain]',
          }, {
            label: '3.4 Type of Waste Dumped at the Sea',
            type: 'text',
            name: 'waste_type_sea',
            selected: '',
            info: '[Select from the list of waste categories provided in Table 2a]',
          }, {
            label: '3.5 Total Quantity of a Waste Actually Dumped at the Site',
            type: 'text',
            name: 'total_waste_dumped',
            selected: '',
            info: 'Total dumped at a specific site',
          }, {
            label: '3.5.1 Waste Reporting Units',
            type: 'text',
            name: 'waste_reporting_units',
            selected: '',
            info: '[Depends on waste dumped]'
          }, 
          {
            label: '3.6 Notes',
            type: 'text',
            name: 'notes',
            selected: '',
            info: 'Brief notes on any entry in Table 3',
          }]
        }

        this.info.data.table_1.articles.push(dump)
    },

    removeDump1(index){
      this.info.data.table_1.articles.splice(index, 1)
    },
    addDump2() {
      let dump = {
          article_title: {
            label: '4.1 Dump Site Code',
            name: 'dump_site_code',
            type: 'text',
            info: 'Two-letter prefix for country code and the Contracting Party\'s own alphanumeric dump site code (copied from 3.1)',
            selected: '',
          },
          article_items: [{
            label: '4.2 Geodetic Datum for Coordinates',
            type: 'text',
            name: 'geodetic_datum',
            selected: '',
            info: 'Geodetic Datum defines the size and shape of the earth and the origin and orientation of the coordinate systems used to map the earth'
          }, {
            label: '4.3 Shape of Dump Site',
            type: 'text',
            name: 'dump_site_shape',
            selected: '',
            info: 'Select from: point, line, circle, segment of a circle, or polygon (Geodetic datum for coordinates to be included in the online version)',
          }, {
            label: '4.4 Radius of Circle',
            type: 'text',
            name: 'radius_of_circle',
            selected: '',
            info: 'Nautical miles (2 significant figures)',
          }, {
            label: '4.5.1 Coordinate A - Latitude',
            type: 'text',
            name: 'coord_a_latitude',
            selected: '',
            info: 'North/South decimal degrees (4 significant figures), or North/South degrees, minutes, seconds',
          }, {
            label: '4.5.2 Coordinate A - Longitude',
            type: 'text',
            name: 'coord_a_longitude',
            selected: '',
            info: 'East/West decimal degrees (4 significant figures), or East/West degrees, minutes, seconds'
          }, 
          {
            label: '4.6.1 Coordinate B - Latitude',
            type: 'text',
            name: 'coord_b_latitude',
            selected: '',
            info: 'North/South decimal degrees (4 significant figures), or North/South degrees, minutes, seconds',
          }, 
          {
            label: '4.6.2 Coordinate B -Longitude',
            type: 'text',
            name: 'coord_b_longitude',
            selected: '',
            info: 'East/West decimal degrees (4 significant figures), or  East/West degrees, minutes, seconds',
          }, 
          {
            label: '4.7.1 Coordinate C - Latitude',
            type: 'text',
            name: 'coord_c_latitude',
            selected: '',
            info: 'North/South decimal degrees (4 significant figures), or North/South degrees, minutes, seconds',
          }, 
          {
            label: '4.7.2 Coordinate C - Longitude',
            type: 'text',
            name: 'coord_c_longitude',
            selected: '',
            info: 'East/West decimal degrees (4 significant figures), or East/West degrees, minutes, seconds',
          }, 
          {
            label: '4.8.1 Coordinate D - Latitude',
            type: 'text',
            name: 'coord_d_latitude',
            selected: '',
            info: 'North/South decimal degrees (4 significant figures), or North/South degrees, minutes, seconds',
          }, 
          {
            label: '4.8.2 Coordinate D - Longitude',
            type: 'text',
            name: 'coord_d_longitude',
            selected: '',
            info: 'East/West decimal degrees (4 significant figures), or    East/West degrees, minutes, seconds',
          }, 
          {
            label: '4.9 Notes',
            type: 'text',
            name: 'notes',
            selected: '',
            info: 'Brief notes on any entry in Table 4,',
          }]
        }

        this.info.data.table_2.articles.push(dump)
    },

    removeDump2(index){
      this.info.data.table_2.articles.splice(index, 1)
    },
  },

  data () {
    return {
    }
  },
}
</script>

<style lang="css" scoped>

.btn-danger {
      position: absolute;
    top: .5rem;
    right: 3rem;
}

.card {
  position: relative;
}


</style>
