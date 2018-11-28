<template>
  <div>
    <b-btn variant="success" style="position: absolute;
    top: -3rem;
    right: 5px;" @click="doStuff">Save</b-btn>
    <b-btn variant="danger" style="position: absolute;
    top: -3rem;
    right: 85px;" @click="exitForm">Back to envelope</b-btn>

       <b-alert :show="dismissCountDown"
       variant="success"
       @dismissed="dismissCountDown=0"
       @dismiss-count-down="countDownChanged">
        <h3 style="color: black; font-weight: bold;">The report is saved</h3>
      </b-alert>
  </div>
</template>

<script>

import {saveInstance, envelope} from '../api.js';

import {slugify} from '../utils.js';

export default {

  name: 'FormSubmit',


  props: {
    info: null,
    country: null,
  },

  updated() {
  },

  created() {
    this.dataset = this.info
    this.validate()
  },

  data () {
    return {
      dataset: null,
      validation: [],
      jsonemptyinstance: {
          "BC_DMP": {
              "@xmlns": "https://dd.info-rac.org/namespaces/4",
              "@xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
              "@xsi:schemaLocation": "https://dd.info-rac.org/namespaces/4 https://dd.info-rac.org/v2/dataset/20/schema-dst-20.xsd",
              "country": null,
              "contacting_party":{
                "partyname":null,
                "rep_period_from":null,
                "rep_period_to":null,
                "institution_name":null,
                "officer_name":null,
                "mailing_address":null,
                "tel":null,
                "fax":null,
                "email":null,
                "contact_point":null,
                "instituion_full_name":null,
                "national_mailing_address":null,
                "national_tel":null,
                "national_fax":null,
                "national_email":null,
                "national_signature":null,
                "national_date":null,
                "org_name":null,
                "org_contact_point":null,
                "org_tel":null,
                "org_fax":null,
                "org_email":null,

              },
              "measuresdata": {Row:[]},
              "measuredata_difficulty": {Row:[]},
              "dumping_at_sea_permits_and_quantities": {Row:[]},
              "quantities_dry_weight_of_dredged_material": {Row:[]},
              "biennieal_summary_wastes": {Row:[]},
              "dump_sites_coordinates": {Row:[]},
              "monitoring": {Row:[]},
              "placement": {Row:[]},

          }
      },
      dismissSecs: 2,
      dismissCountDown: 0,
      showDismissibleAlert: false,
    }
  },

  methods: {
    exitForm(){
      window.location.replace(envelope)
    },
        showAlert () {
      console.log('showingalert')
      this.dismissCountDown = this.dismissSecs
    },

       countDownChanged (dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    doStuff(){
      this.jsonemptyinstance = {
          "BC_DMP": {
              "@xmlns": "https://dd.info-rac.org/namespaces/4",
              "@xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
              "@xsi:schemaLocation": "https://dd.info-rac.org/namespaces/4 https://dd.info-rac.org/v2/dataset/20/schema-dst-20.xsd",
              "country": null,
              "contacting_party":{
                "partyname":null,
                "rep_period_from":null,
                "rep_period_to":null,
                "institution_name":null,
                "officer_name":null,
                "mailing_address":null,
                "tel":null,
                "fax":null,
                "email":null,
                "contact_point":null,
                "instituion_full_name":null,
                "national_mailing_address":null,
                "national_tel":null,
                "national_fax":null,
                "national_email":null,
                "national_signature":null,
                "national_date":null,
                "org_name":null,
                "org_contact_point":null,
                "org_tel":null,
                "org_fax":null,
                "org_email":null,

              },
              "measuresdata": {Row:[]},
              "measuredata_difficulty": {Row:[]},
              "dumping_at_sea_permits": {Row:[]},
              "quantities_dry_weight_of_dredged_material": {Row:[]},
              "biennieal_summary_wastes": {Row:[]},
              "dump_sites_coordinates": {Row:[]},
              "monitoring": {Row:[]},
              "placement": {Row:[]},

          }
      }


      let country_tab = this.dataset.country.tables

      for(let table in country_tab) {
          for (let value of country_tab[table]) {
            this.jsonemptyinstance.BC_DMP.contacting_party[value.name] = value.selected
          }
      }


      let tab_1 = this.dataset.tab_1.data;
      for (let article of tab_1.articles) {
        for (let article_item of article.article_items){
          let collection_id = article_item.collection_id || null;
          let parent_collection_id = article_item.parent_collection_id || null
          let description = article_item.description
          let row =  {
                      "description": description,
                      "parent_collection_id": parent_collection_id,
                      "collection_id": collection_id,
                      "changes": null,
                      "difficulties": null,
                      "difficulties_comments": null,
                      "status":null,
                      "status_comments": null,
                  }
            for(let item of article_item.items) {
              if(item.type ==='changes') {
                row.changes = item.selected
              } else if (item.type === 'status') {
                row.status = item.selected;
                row.status_comments = item.comments
              } else {
                // row.difficulties = item.selected
                row.difficulties_comments = item.comments
                if(item.selected.length){
                  for(let difficulty of item.selected) {
                      this.jsonemptyinstance.BC_DMP.measuredata_difficulty.Row.push(
                          {
                                    "collection_id": collection_id || null,
                                    "difficulty": difficulty
                                }
                        )
                  }
                }

              }
            }
          this.jsonemptyinstance.BC_DMP.measuresdata.Row.push(row)
        }
      }




      let tab_2_1 = this.dataset.tab_2.data.table_1.articles;
      for (let article of tab_2_1) {
        let collection_id = article.collection_id || null;
        let parent_collection_id = article.parent_collection_id || null
        let row = {
          collection_id : collection_id,
          parent_collection_id: parent_collection_id,
          title: article.article_title,
          permit_type: null,
          waste_cateogry: null,
          permits_number_issued: null,
          waste_quantity_permited: null,
          waste_reporting_unit: null,
          waste_quanity_actual: null,
          waste_reporting_units: null,
          waste_reporting_units_2: null,
          dumping_regulated: null,
          notes: null,
        }
        for (let article_item of article.article_items){
          // let row = {};
          // console.log(article_item)
          for(let item of article_item.items) {
            row[item.name] = item.selected
          }

        }

        this.jsonemptyinstance.BC_DMP.dumping_at_sea_permits.Row.push(row);

      }



      let tab_2_2 = this.dataset.tab_2.data.table_2.articles;
      for (let article of tab_2_2) {
        let row = {}
        for (let item of article.items){
            row[slugify(item.label)] = item.selected

        }

        this.jsonemptyinstance.BC_DMP.quantities_dry_weight_of_dredged_material.Row.push(row);

      }





      let tab_3_1 = this.dataset.tab_3.data.table_1.articles;
      for (let article of tab_3_1) {
        let collection_id = article.collection_id || null;
        let parent_collection_id = article.parent_collection_id || null
        let row = {
          collection_id : collection_id,
          parent_collection_id: parent_collection_id,
          dump_site_code: article.article_title.selected,
          dumping_map: null,
          dumping_map_comments: null,
          dumping_sea_method: null,
          waste_type_sea: null,
          total_waste_dumped: null,
          waste_reporting_units: null,
          notes: null,
        }
        for (let article_item of article.article_items){
          if(article_item.name === 'dumping_map') {
            row[article_item.name + '_comments'] = article_item.comments 
          }
            row[article_item.name] = article_item.selected

        }

        this.jsonemptyinstance.BC_DMP.biennieal_summary_wastes.Row.push(row);

      }



      let tab_3_2 = this.dataset.tab_3.data.table_2.articles;
      for (let article of tab_3_2) {
        let collection_id = article.collection_id || null;
        let parent_collection_id = article.parent_collection_id || null
        let row = {
          collection_id : collection_id,
          parent_collection_id: parent_collection_id,
          dump_site_code: article.article_title.selected,
          geodetic_datum: null,
          radius_of_circle: null,
          coord_a_latitude: null,
          coord_a_longitude: null,
          coord_b_latitude: null,
          coord_b_longitude: null,
          coord_c_latitude: null,
          coord_c_longitude: null,
          coord_d_latitude: null,
          coord_d_longitude: null,
          notes: null,
        }
        for (let article_item of article.article_items){
            row[article_item.name] = article_item.selected

        }

        this.jsonemptyinstance.BC_DMP.dump_sites_coordinates.Row.push(row);

      }




      let tab_4 = this.dataset.tab_4.data.articles;
      for (let article of tab_4) {
        let collection_id = article.collection_id || null;
        let parent_collection_id = article.parent_collection_id || null
        let row = {
          collection_id : collection_id,
          parent_collection_id: parent_collection_id,
          dump_site_code_monitore_d: article.article_title.selected,
          monitoring_conducted_rep_period: null,
          field_monitoring_when: null,
          field_monitoring_when_comments: '',
          field_monitoring_survey_type: null,
          field_monitoring_survey_type_comments: '',
          adverse_impact_found: null,
          impact_description: null,
          compliance_monitoring_permit: null,
          operations_in_compliance_with_permit: null,
          is_follow_up_planned: null,
          is_follow_up_planned_comments: '',
        }
        for (let article_item of article.article_items){
            row[article_item.name] = article_item.selected
            if(article_item.name === 'field_monitoring_when' || article_item.name === 'is_follow_up_planned'){
              row[article_item.name + '_comments'] = article_item.comments
            }
        }

        this.jsonemptyinstance.BC_DMP.monitoring.Row.push(row);

      }
        
      console.log(this.jsonemptyinstance.BC_DMP.monitoring.Row)


      let tab_5 = this.dataset.tab_5.data.articles;
      for (let article of tab_5) {
        let collection_id = article.collection_id || null;
        let parent_collection_id = article.parent_collection_id || null
        let row = {
          collection_id : collection_id,
          parent_collection_id: parent_collection_id,
          placement_site_code: article.article_title.selected,
          placement_location: null,
          placement_location_comments: null,
          placement_purpose: null,
          material_characteristics_and_quantity: null,
          permitting_authority_name: null,
          plans_for_monitoring: null,
          plans_for_monitoring_comments: null,
          notes: null,
        }
        for (let article_item of article.article_items){
            row[article_item.name] = article_item.selected
            if(article_item.name === 'plans_for_monitoring' || article_item.name ==='placement_location'){
              row[article_item.name + '_comments'] = article_item.comments
            }
        }




        this.jsonemptyinstance.BC_DMP.placement.Row.push(row);

      }


      this.jsonemptyinstance.BC_DMP.country = this.country

      console.log(this.jsonemptyinstance)

      // console.log(info)
      saveInstance(this.jsonemptyinstance)
      this.showAlert();
    },

    validate() {

    }
  }

}
</script>

<style lang="css" scoped>
.alert.alert-success {
  position: fixed;
  top:3rem;
  left: 20%;
  right: 20%;
}
</style>
