<template>
	<b-container style="position: relative">
    <center><h1 class="mb-3 mt-2">Dumping Protocol</h1></center>
    <center><h5><small class="text-muted">IMPLEMENTATION OF THE PROTOCOL FOR THE PREVENTION AND ELIMINATION OF POLLUTION OF THE MEDITERRANEAN SEA BY
      DUMPING FROM SHIPS AND AIRCRAFTS OR INCINERATION AT SEA (DUMPING PROTOCOL)</small></h5></center>
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
              <dumpingatsea tabId="2" :info.sync="form.tab_2"></dumpingatsea>
            </b-tab>
          <b-tab :title="doTitle(form.tab_3.label)" >
              <wastequantity tabId="3"  :info.sync="form.tab_3"></wastequantity>
            </b-tab>
            <b-tab :title="doTitle(form.tab_4.label)" >
              <monitoring tabId="4" :info.sync="form.tab_4"></monitoring>
            </b-tab>
            <b-tab :title="doTitle(form.tab_5.label)" >
              <placement tabId="5" :info.sync="form.tab_5"></placement>
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
import Dummy from './Dummy.vue'
import Validation from './Validation.vue'
import DumpingAtSea from './DumpingAtSea.vue'
import QuantitiesOfWaste from './QuantitiesOfWaste.vue'
import Monitoring from './Monitoring.vue'
import Placement from './Placement.vue'

import FormSubmit from './FormSubmit.vue'
import form from '../assets/form.js'


export default {

  name: 'Webform',
  components: {
    countrytab: Countrytab,
    lrmeasures: LRMeasures,
    dummy: Dummy,
    monitoring: Monitoring,
  	formsubmit: FormSubmit,
    validation: Validation,
    dumpingatsea: DumpingAtSea,
    wastequantity: QuantitiesOfWaste,
    monitoring: Monitoring,
    placement: Placement,
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

    prefill(data) {
      for(let table in this.form.country.tables) {
          for (let value of this.form.country.tables[table]) {
            value.selected = data.BC_DMP.contacting_party[value.name]
            if(value.name === 'partyname') {
              value.selected = this.country;
            }
          }
      }






           if(data.BC_DMP.measuresdata.Row.length) {
            for(let agreement of data.BC_DMP.measuresdata.Row) {
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




      if(data.BC_DMP.measuredata_difficulty) {

          if(data.BC_DMP.measuredata_difficulty.Row.length) {
            for(let agreement of data.BC_DMP.measuredata_difficulty.Row) {

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




      if (data.BC_DMP.dumping_at_sea_permits) {
      if (data.BC_DMP.dumping_at_sea_permits.Row && data.BC_DMP.dumping_at_sea_permits.Row.length && data.BC_DMP.dumping_at_sea_permits.Row.length > 1) {
        for (let data_item of data.BC_DMP.dumping_at_sea_permits.Row) {
          let collection_id = data_item.collection_id
          let title = data_item.title
          // TODO: Change this to collection id
          for (let article of this.form.tab_2.data.table_1.articles) {
            if (article.article_title === title) {
              for (let article_items of article.article_items) {
                  for(let item of article_items.items){
                    item.selected = data_item[item.name]
                  }

              }
            }
          }
        }
      }
    }






    if (data.BC_DMP.quantities_dry_weight_of_dredged_material) {
      if (data.BC_DMP.quantities_dry_weight_of_dredged_material.Row.length) {
        for (let inventory of data.BC_DMP.quantities_dry_weight_of_dredged_material.Row) {
      let inventoryJson = {
        items: [{
          label: 'Cr (tons)',
          selected: '',
        },
        {
          label: 'Cu (tons)',
          selected: '',
        },{
          label: 'Pb (tons)',
          selected: '',
        },{
          label: 'Ni (tons)',
          selected: '',
        },{
          label: 'Zn (tons)',
          selected: '',
        },{
          label: 'Oil (tons)',
          selected: '',
        },{
          label: 'ΣPAH9 (tons)',
          selected: '',
        },{
          label: 'ΣPAH16 (tons)',
          selected: '',
        },{
          label: 'ΣPCB7 (tons)',
          selected: '',
        },{
          label: 'HCB (kg)',
          selected: '',
        },{
          label: 'g-HCH (kg)',
          selected: '',
        },{
          label: 'p,p\' DDT (kg)',
          selected: '',
        },{
          label: 'p,p\' DDE (kg)',
          selected: '',
        },{
          label: 'p,p\' DDD (kg)',
          selected: '',
        },{
          label: 'ΣDDX (kg)',
          selected: '',
        },{
          label: 'TBT (kg)',
          selected: '',
        },{
          label: 'DBT (kg)',
          selected: '',
        },{
          label: 'Notes',
          selected: '',
        },]
      }
          let inventoryobj = inventoryJson;
          for (let article of inventoryobj.items) {
            for(let label in inventory){

            if(article.label === this.UnslugifyQuantities(label)) {
              article.selected = inventory[label]
            }
            }

          }
          this.form.tab_2.data.table_2.articles.push(inventoryobj)
        }
      }
      else if (data.BC_DMP.quantities_dry_weight_of_dredged_material.Row) {
        let inventory = data.BC_DMP.quantities_dry_weight_of_dredged_material.Row;
      let inventoryJson = {
        items: [{
          label: 'Cr (tons)',
          selected: '',
        },
        {
          label: 'Cu (tons)',
          selected: '',
        },{
          label: 'Pb (tons)',
          selected: '',
        },{
          label: 'Ni (tons)',
          selected: '',
        },{
          label: 'Zn (tons)',
          selected: '',
        },{
          label: 'Oil (tons)',
          selected: '',
        },{
          label: 'ΣPAH9 (tons)',
          selected: '',
        },{
          label: 'ΣPAH16 (tons)',
          selected: '',
        },{
          label: 'ΣPCB7 (tons)',
          selected: '',
        },{
          label: 'HCB (kg)',
          selected: '',
        },{
          label: 'g-HCH (kg)',
          selected: '',
        },{
          label: 'p,p\' DDT (kg)',
          selected: '',
        },{
          label: 'p,p\' DDE (kg)',
          selected: '',
        },{
          label: 'p,p\' DDD (kg)',
          selected: '',
        },{
          label: 'ΣDDX (kg)',
          selected: '',
        },{
          label: 'TBT (kg)',
          selected: '',
        },{
          label: 'DBT (kg)',
          selected: '',
        },{
          label: 'Notes',
          selected: '',
        },]
      }
      let inventoryobj = inventoryJson;
          for (let article of inventoryobj.items) {
            for(let label in inventory){

            if(article.label === this.UnslugifyQuantities(label)) {
              article.selected = inventory[label]
            }
            }

          }
        this.form.tab_2.data.table_2.articles.push(inventoryobj)
      }
    }





    if (data.BC_DMP.biennieal_summary_wastes) {
      if (data.BC_DMP.biennieal_summary_wastes.Row.length) {
        for (let inventory of data.BC_DMP.biennieal_summary_wastes.Row) {
      let inventoryJson = {
          article_title: {
            label: '3.1 Dump Site Code ',
            name: 'dump_site_code',
            type: 'text',
            info: 'Two-letter prefix for country code and the Contracting Party\'s own alphanumeric dump site code',
            selected: inventory.dump_site_code,
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
          let inventoryobj = inventoryJson
          for (let article of inventoryobj.article_items) {
            article.selected = inventory[article.name]
          }
          this.form.tab_3.data.table_1.articles.push(inventoryobj)
        }
      }
      else if (data.BC_DMP.biennieal_summary_wastes.Row) {
        let inventory = data.BC_DMP.biennieal_summary_wastes.Row;
      let inventoryJson = {
          article_title: {
            label: '3.1 Dump Site Code ',
            name: 'dump_site_code',
            type: 'text',
            info: 'Two-letter prefix for country code and the Contracting Party\'s own alphanumeric dump site code',
            selected: invenotry.dump_site_code,
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
        let inventoryobj = inventoryJson
        for (let article of inventoryobj.article_items) {
          article.selected = inventory[article.name]
        }
        this.form.tab_3.data.table_1.articles.push(inventoryobj)
      }
    }



    if (data.BC_DMP.dump_sites_coordinates) {
      if (data.BC_DMP.dump_sites_coordinates.Row.length) {
        for (let inventory of data.BC_DMP.dump_sites_coordinates.Row) {
      let inventoryJson = {
          article_title: {
            label: '4.1 Dump Site Code',
            name: 'dump_site_code',
            type: 'text',
            info: 'Two-letter prefix for country code and the Contracting Party\'s own alphanumeric dump site code (copied from 3.1)',
            selected: inventory.dump_site_code,
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
          let inventoryobj = inventoryJson
          for (let article of inventoryobj.article_items) {
            article.selected = inventory[article.name]
          }
          this.form.tab_3.data.table_2.articles.push(inventoryobj)
        }
      }
      else if (data.BC_DMP.dump_sites_coordinates.Row) {
        let inventory = data.BC_DMP.dump_sites_coordinates.Row;
      let inventoryJson = {
          article_title: {
            label: '4.1 Dump Site Code',
            name: 'dump_site_code',
            type: 'text',
            info: 'Two-letter prefix for country code and the Contracting Party\'s own alphanumeric dump site code (copied from 3.1)',
            selected: inventory.dump_site_code,
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
        let inventoryobj = inventoryJson
        for (let article of inventoryobj.article_items) {
          article.selected = inventory[article.name]
        }
        this.form.tab_3.data.table_2.articles.push(inventoryobj)
      }
    }






    if (data.BC_DMP.monitoring) {
      if (data.BC_DMP.monitoring.Row.length) {
        for (let inventory of data.BC_DMP.monitoring.Row) {
      let inventoryJson = {
          article_title: {
            label: '5.1 Dump Site Code for Sites Monitore d during Reporting Period',
            name: 'dump_site_code_monitore_d',
            type: 'text',
            info: 'Two-letter prefix for country code and the Contracting Party\'s own alphanumeric dump site code (copied from 3.1)',
            selected: inventory.dump_site_code_monitore_d,
          },
          article_items: [{
            label: '5.2 Was Monitoring Conducted during the Reporting Period?',
            type: 'radio',
            name: 'monitoring_conducted_rep_period',
            selected: '',
            info: '',
            options: [{text:'yes', value: true}, {text:'no', value:false}]
          }, {
            label: '5.3.1 If Field Monitoring was Conducted, when was it done?',
            type: 'checkbox',
            name: 'field_monitoring_when',
            selected: '',
            info: 'In case of other, explain',
            options:[
            {text: 'before dumping at sea', value: 1},
            {text: 'during dumping at sea', value: 2},
            {text: 'after dumping at sea', value: 3},
            {text: 'other', value: 4}
            ],
            comments: '',
          }, {
            label: '5.3.2 If Field Monitoring was Conducted, what type of survey was completed?',
            type: 'checkbox',
            name: 'field_monitoring_survey_type',
            selected: '',
            info: 'In case of other, explain',
            options:[
            {text: 'biological', value: 1},
            {text: 'geological', value: 2},
            {text: 'chemical', value: 3},
            {text: 'physical', value: 4},
            {text: 'other', value: 5}

            ],
          }, {
            label: '5.3.3 If Field Monitoring was Conducted, has an Adverse Impact(s) been found beyond that predicted?',
            type: 'radio',
            name: 'adverse_impact_found',
            selected: '',
            info: '',
            options: [{text:'yes', value: true}, {text:'no', value:false}],
          }, {
            label: '5.3.4 If an adverse impacts(s) was noted in 5.3.3 describe briefly',
            type: 'text',
            name: 'impact_description',
            selected: '',
            info: 'Brief information on: impacts (e.g. physical, chemical or biological) and their spatial or temporal variation'
          }, 
          {
            label: '5.4.1 Was Compliance Monitoring Conducted for a Permit(s) Issued to Use the Dump Site?',
            type: 'radio',
            name: 'compliance_monitoring_permit',
            selected: '',
            info: '',
            options: [{text:'yes', value: true}, {text:'no', value:false}],

          }, 
          {
            label: '5.4.2 If Compliance Monitoring was Conducted, were the dumping at sea operations found to be in compliance with the permit(s)?',
            type: 'radio',
            name: 'operations_in_compliance_with_permit',
            selected: '',
            info: '',
            options: [{text:'yes', value: true}, {text:'no', value:false}],

          }, 
          {
            label: '5.4.3 If dumping at sea operations were not in compliance, is follow-up action planned?',
            type: 'radio',
            name: 'is_follow_up_planned',
            selected: '',
            info: 'If Yes explain e.g. amendment of or revoking of the dumping permit, redefinition or closing of the dumping site',
            options: [{text:'yes', value: true}, {text:'no', value:false}],
            comments: '',
          }]
        }
          let inventoryobj = inventoryJson
          for (let article of inventoryobj.article_items) {
            article.selected = inventory[article.name]
          }
          this.form.tab_4.data.articles.push(inventoryobj)
        }
      }
      else if (data.BC_DMP.monitoring.Row) {
        let inventory = data.BC_DMP.monitoring.Row;
      let inventoryJson = {
          article_title: {
            label: '5.1 Dump Site Code for Sites Monitore d during Reporting Period',
            name: 'dump_site_code_monitore_d',
            type: 'text',
            info: 'Two-letter prefix for country code and the Contracting Party\'s own alphanumeric dump site code (copied from 3.1)',
            selected: inventory.dump_site_code_monitore_d,
          },
          article_items: [{
            label: '5.2 Was Monitoring Conducted during the Reporting Period?',
            type: 'radio',
            name: 'monitoring_conducted_rep_period',
            selected: '',
            info: '',
            options: [{text:'yes', value: true}, {text:'no', value:false}]
          }, {
            label: '5.3.1 If Field Monitoring was Conducted, when was it done?',
            type: 'checkbox',
            name: 'field_monitoring_when',
            selected: '',
            info: 'In case of other, explain',
            options:[
            {text: 'before dumping at sea', value: 1},
            {text: 'during dumping at sea', value: 2},
            {text: 'after dumping at sea', value: 3},
            {text: 'other', value: 4}
            ],
            comments: '',
          }, {
            label: '5.3.2 If Field Monitoring was Conducted, what type of survey was completed?',
            type: 'checkbox',
            name: 'field_monitoring_survey_type',
            selected: '',
            info: 'In case of other, explain',
            options:[
            {text: 'biological', value: 1},
            {text: 'geological', value: 2},
            {text: 'chemical', value: 3},
            {text: 'physical', value: 4},
            {text: 'other', value: 5}

            ],
          }, {
            label: '5.3.3 If Field Monitoring was Conducted, has an Adverse Impact(s) been found beyond that predicted?',
            type: 'radio',
            name: 'adverse_impact_found',
            selected: '',
            info: '',
            options: [{text:'yes', value: true}, {text:'no', value:false}],
          }, {
            label: '5.3.4 If an adverse impacts(s) was noted in 5.3.3 describe briefly',
            type: 'text',
            name: 'impact_description',
            selected: '',
            info: 'Brief information on: impacts (e.g. physical, chemical or biological) and their spatial or temporal variation'
          }, 
          {
            label: '5.4.1 Was Compliance Monitoring Conducted for a Permit(s) Issued to Use the Dump Site?',
            type: 'radio',
            name: 'compliance_monitoring_permit',
            selected: '',
            info: '',
            options: [{text:'yes', value: true}, {text:'no', value:false}],

          }, 
          {
            label: '5.4.2 If Compliance Monitoring was Conducted, were the dumping at sea operations found to be in compliance with the permit(s)?',
            type: 'radio',
            name: 'operations_in_compliance_with_permit',
            selected: '',
            info: '',
            options: [{text:'yes', value: true}, {text:'no', value:false}],

          }, 
          {
            label: '5.4.3 If dumping at sea operations were not in compliance, is follow-up action planned?',
            type: 'radio',
            name: 'is_follow_up_planned',
            selected: '',
            info: 'If Yes explain e.g. amendment of or revoking of the dumping permit, redefinition or closing of the dumping site',
            options: [{text:'yes', value: true}, {text:'no', value:false}],
            comments: '',
          }]
        }
        let inventoryobj = inventoryJson
        for (let article of inventoryobj.article_items) {
          article.selected = inventory[article.name]
        }
        this.form.tab_4.data.articles.push(inventoryobj)
      }
    }






    if (data.BC_DMP.placement) {
      if (data.BC_DMP.placement.Row.length) {
        for (let inventory of data.BC_DMP.placement.Row) {
      let inventoryJson = {
          article_title: {
            label: 'Placement Site Code',
            name: 'placement_site_code',
            type: 'text',
            info: 'National Code given',
            selected: inventory.placement_site_code,
          },
          article_items: [{
            label: 'Locations of the placement',
            additional_info: 'As defined in the Updated Guidelines on artificial reefs ',
            type: 'text',
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
            label: 'Is Impact Hypothesis conducted and when by who (yes/no; date; name)',
            type: 'text',
            name: 'impact_hypothesis_status',
            selected: '',
            info: '',
          }, {
            label: 'The name of the permitting authority and the name of national legislation',
            type: 'text',
            name: 'permitting_authority_name',
            selected: '',
            info: 'Name of the authority; legislation name and number as official gazette'
          }, 
          {
            label: 'Plans for Monitoring activities are in place (3) (YES/NO)',
            type: 'text',
            name: 'plans_for_monitoring',
            selected: '',
            info: 'Explain the monitoring and modalities including a plan for pre-placement and post- placement monitoring and evaluation.',
            additional_info: 'Pre-placement monitoring plans should set a reference baseline. Post-Placement monitoring plans should aim to produce scientific evidence to impact hypothesis',
          }, 
          {
            label: 'Notes',
            type: 'text',
            name: 'notes',
            selected: '',
            info: 'Other relevant information in details',
          }]
        }
          let inventoryobj = inventoryJson
          for (let article of inventoryobj.article_items) {
            article.selected = inventory[article.name]
          }
          this.form.tab_5.data.articles.push(inventoryobj)
        }
      }
      else if (data.BC_DMP.placement.Row) {
        let inventory = data.BC_DMP.placement.Row;
      let inventoryJson = {
          article_title: {
            label: 'Placement Site Code',
            name: 'placement_site_code',
            type: 'text',
            info: 'National Code given',
            selected: inventory.placement_site_code,
          },
          article_items: [{
            label: 'Locations of the placement',
            additional_info: 'As defined in the Updated Guidelines on artificial reefs ',
            type: 'text',
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
            label: 'Is Impact Hypothesis conducted and when by who (yes/no; date; name)',
            type: 'text',
            name: 'impact_hypothesis_status',
            selected: '',
            info: '',
          }, {
            label: 'The name of the permitting authority and the name of national legislation',
            type: 'text',
            name: 'permitting_authority_name',
            selected: '',
            info: 'Name of the authority; legislation name and number as official gazette'
          }, 
          {
            label: 'Plans for Monitoring activities are in place (3) (YES/NO)',
            type: 'text',
            name: 'plans_for_monitoring',
            selected: '',
            info: 'Explain the monitoring and modalities including a plan for pre-placement and post- placement monitoring and evaluation.',
            additional_info: 'Pre-placement monitoring plans should set a reference baseline. Post-Placement monitoring plans should aim to produce scientific evidence to impact hypothesis',
          }, 
          {
            label: 'Notes',
            type: 'text',
            name: 'notes',
            selected: '',
            info: 'Other relevant information in details',
          }]
        }
        let inventoryobj = inventoryJson
        for (let article of inventoryobj.article_items) {
          article.selected = inventory[article.name]
        }
        this.form.tab_5.data.articles.push(inventoryobj)
      }
    }






    this.prefilled = true;

    },

    getValidationData(data) {
      this.validation_data = data
    },

    UnslugifyQuantities(quantity) {
          let quantities = {
               'cr-tons': 'Cr (tons)',
               'cu-tons': 'Cu (tons)',
               'pb-tons': 'Pb (tons)',
               'ni-tons': 'Ni (tons)',
               'zn-tons': 'Zn (tons)',
               'oil-tons': 'Oil (tons)',
               'pah9-tons': 'ΣPAH9 (tons)',
               'pah16-tons': 'ΣPAH16 (tons)',
               'pcb7-tons': 'ΣPCB7 (tons)',
               'hcb-kg': 'HCB (kg)',
               'g-hch-kg': 'g-HCH (kg)',
               'pp-ddt-kg': 'p,p\' DDT (kg)',
               'pp-dde-kg': 'p,p\' DDE (kg)',
               'pp-ddd-kg': 'p,p\' DDD (kg)',
               'ddx-kg': 'ΣDDX (kg)',
               'tbt-kg': 'TBT (kg)',
               'dbt-kg': 'DBT (kg)',
               'notes': 'Notes'
             }
        return quantities[quantity]
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
