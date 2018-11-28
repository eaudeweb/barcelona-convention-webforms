<template>
  <div>
    <b-btn variant="success" style="position: absolute;
    top: 5px;
    right: 5px;" @click="doStuff">Save</b-btn>
    <b-btn variant="danger" style="position: absolute;
    top: 5px;
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
          "BC_OP": {
              "@xmlns": "https://dd.info-rac.org/namespaces/4",
              "@xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
              "@xsi:schemaLocation": "https://dd.info-rac.org/namespaces/4 https://dd.info-rac.org/v2/dataset/21/schema-dst-21.xsd",
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
              "permits_and_quantities": {Row:[]},
              "inventory_offshore_installations": {Row:[]},
              "enf_measures": {Row:[]},
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
          "BC_OP": {
              "@xmlns": "https://dd.info-rac.org/namespaces/4",
              "@xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
              "@xsi:schemaLocation": "https://dd.info-rac.org/namespaces/4 https://dd.info-rac.org/v2/dataset/21/schema-dst-21.xsd",
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
              "permits_and_quantities": {Row:[]},
              "inventory_offshore_installations": {Row:[]},
              "enf_measures": {Row:[]},
          }
      }

      let country_tab = this.dataset.country.tables

      for(let table in country_tab) {
          for (let value of country_tab[table]) {
            this.jsonemptyinstance.BC_OP.contacting_party[value.name] = value.selected
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
                      this.jsonemptyinstance.BC_OP.measuredata_difficulty.Row.push(
                          {
                                    "collection_id": collection_id || null,
                                    "difficulty": difficulty
                                }
                        )
                  }
                }

              }
            }
          this.jsonemptyinstance.BC_OP.measuresdata.Row.push(row)
        }
      }


      let tab_2 = this.dataset.tab_2.data;
      for (let article of tab_2.articles) {
        let collection_id = this.dataset.tab_2.collection_id || null;
        let parent_collection_id = this.dataset.tab_2.parent_collection_id || null
        let title = article.article_title || null
        let row = {
          collection_id : collection_id,
          parent_collection_id: parent_collection_id,
          title: title,
          permit_type: null,
          waste_cateogry: null,
          permits_number_issued: null,
          waste_quantity_permited: null,
          waste_reporting_unit: null,
          waste_quanity_actual: null,
          waste_reporting_units: null,
          dumping_regulated: null,
          notes: null,
        }
        for (let article_item of article.article_items){
          for( let item of article_item.items) {
            row[item.name] = item.selected
          }
        }

        this.jsonemptyinstance.BC_OP.permits_and_quantities.Row.push(row);

      }





      let tab_4 = this.dataset.tab_4.data;
      for (let article of tab_4.articles) {
        let collection_id = article.collection_id || null;
        let parent_collection_id = article.parent_collection_id || null
        let title = article.article_title || null
        let row = {
          collection_id : collection_id,
          parent_collection_id: parent_collection_id,
          title: title,
          inspections: null,
          non_compliance: null,
          suspensions: null,
          shutdowns: null,
          enforcement: null,
          implemented: null,
          remarks: null,
        }
        for (let article_item of article.article_items){
            row[article_item.name] = article_item.value
        }

        this.jsonemptyinstance.BC_OP.enf_measures.Row.push(row);

      }





      let tab_3 = this.dataset.tab_3.data;
      console.log(tab_3)
      for (let article of tab_3.articles) {
        let collection_id = tab_3.collection_id || null;
        let parent_collection_id = tab_3.parent_collection_id || null
        let title = article.article_title.selected || null
        console.log(article.article_title)
        let row = {
          collection_id : collection_id,
          parent_collection_id: parent_collection_id,
          title: title,
          operator: title,
          production_start: null,
          current_status: null,
          primary_production: null,
          category: null,
          weight_substructure: null,
          weight_topside: null,
          remarks: null,
          category_comments: null,
        }
        for (let article_item of article.article_items){
          if(article_item.name === "category") {
            row.category_comments = article_item.comments 
          }
            row[article_item.name] = article_item.selected
        }

        this.jsonemptyinstance.BC_OP.inventory_offshore_installations.Row.push(row);

      }

      this.jsonemptyinstance.BC_OP.country = this.country

      console.log(this.jsonemptyinstance.BC_OP.inventory_offshore_installations);
         saveInstance(this.jsonemptyinstance)
      this.showAlert();

    },

    validate() {
    }
  },
    watch: {
    info: {
      handler: function(old_val,new_val) {
        this.validate()
      },
      deep: true,
      immediate: true,
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
