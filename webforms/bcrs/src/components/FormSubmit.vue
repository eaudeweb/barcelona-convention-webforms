<template>
  <div>
    <b-btn variant="success" 
            style="position: absolute;
                   top: 5px;
                   right: 5px;" 
            @click="doStuff">
      Save
    </b-btn>
    <b-btn variant="danger" 
            style="position: absolute;
                   top: 5px;
                   right: 85px;"
             @click="exitForm">
      Back to envelope
    </b-btn>
    <b-alert 
        :show="dismissCountDown"
         variant="success"
         @dismissed="dismissCountDown=0"
         @dismiss-count-down="countDownChanged">
        <h3 style="color: black; font-weight: bold;">The report is saved</h3>
    </b-alert>
  </div>
</template>
<script>

import {envelope, saveInstance} from '../api.js';


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
    this.jsonemptyinstance.BC_BCRS.country = this.country
  },

  data () {
    return {
      dataset: null,
      validation: [],
      jsonemptyinstance: {
          "BC_BCRS": {
              "@xmlns": "https://dd.info-rac.org/namespaces/4",
              "@xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
              "@xsi:schemaLocation": "https://dd.info-rac.org/namespaces/4 https://dd.info-rac.org/v2/dataset/1/schema-dst-1.xsd",
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
              "bilateralmultilateralagreementsdata": {Row: []},
              "measuresdata": {Row:[]},
              "measuredata_difficulty": {Row:[]}
          }
      },
     converted_xml: null,
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
        "BC_BCRS": {
          "@xmlns": "https://dd.info-rac.org/namespaces/4",
          "@xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
          "@xsi:schemaLocation": "https://dd.info-rac.org/namespaces/4 https://dd.info-rac.org/v2/dataset/1/schema-dst-1.xsd",
          "country": null,
          "contacting_party": {
            "partyname": null,
            "rep_period_from": null,
            "rep_period_to": null,
            "institution_name": null,
            "officer_name": null,
            "mailing_address": null,
            "tel": null,
            "fax": null,
            "email": null,
            "contact_point": null,
            "instituion_full_name": null,
            "national_mailing_address": null,
            "national_tel": null,
            "national_fax": null,
            "national_email": null,
            "national_signature": null,
            "national_date": null,
            "org_name": null,
            "org_contact_point": null,
            "org_tel": null,
            "org_fax": null,
            "org_email": null,
          },
          "bilateralmultilateralagreementsdata": {
            Row: []
          },
          "measuresdata": {
            Row: []
          },
          "measuredata_difficulty": {
            Row: []
          }
        }
      }
      let tab_1_collection_id = this.dataset.tab_1.data.collection_id;
      let tab_1 = this.dataset.tab_1.data.question.agreements;
      let country_tab = this.dataset.country.tables
      for (let table in country_tab) {
        for (let value of country_tab[table]) {
          this.jsonemptyinstance.BC_BCRS.contacting_party[value.name] = value.selected
        }
      }
      console.log(this.jsonemptyinstance.BC_BCRS.contacting_party)
      for (let collection of tab_1) {
        this.jsonemptyinstance.BC_BCRS.bilateralmultilateralagreementsdata.Row.push({
          "agreementname": collection.name,
          "website_other_reference": collection.reference,
          "collection_id": tab_1_collection_id
        })
      }
      let tab_2 = this.dataset.tab_2.data;
      for (let article of tab_2.articles) {
        for (let article_item of article.article_items) {
          let collection_id = article_item.collection_id;
          let parent_collection_id = article_item.parent_collection_id
          let description = article_item.description
          let row = {
            "description": description,
            "parent_collection_id": parent_collection_id,
            "collection_id": collection_id,
            "changes": null,
            "difficulties": null,
            "difficulties_comments": null,
            "status": null,
            "status_comments": null,
          }
          for (let item of article_item.items) {
            if (item.type === 'changes') {
              row.changes = item.selected
            }
            else if (item.type === 'status') {
              row.status = item.selected;
              row.status_comments = item.comments
            }
            else {
              row.difficulties_comments = item.comments
              if (item.selected.length) {
                for (let difficulty of item.selected) {
                  this.jsonemptyinstance.BC_BCRS.measuredata_difficulty.Row.push({
                    "collection_id": collection_id,
                    "difficulty": difficulty
                  })
                }
              }
            }
          }
          this.jsonemptyinstance.BC_BCRS.measuresdata.Row.push(row)
        }
      }
      let tab_3 = this.dataset.tab_3.data;
      for (let article of tab_3.articles) {
        for (let article_item of article.article_items) {
          let collection_id = article_item.collection_id;
          let parent_collection_id = article_item.parent_collection_id
          let description = article_item.description
          let row = {
            "description": description,
            "parent_collection_id": parent_collection_id,
            "collection_id": collection_id,
            "changes": null,
            "difficulties": null,
            "difficulties_comments": null,
            "status": null,
            "status_comments": null,
          }
          for (let item of article_item.items) {
            if (item.type === 'changes') {
              row.changes = item.selected
            }
            else if (item.type === 'status') {
              row.status = item.selected;
              row.status_comments = item.comments
            }
            else {
              // row.difficulties = item.selected
              row.difficulties_comments = item.comments
              if (item.selected.length) {
                for (let difficulty of item.selected) {
                  this.jsonemptyinstance.BC_BCRS.measuredata_difficulty.Row.push({
                    "collection_id": collection_id,
                    "difficulty": difficulty
                  })
                }
              }
            }
          }
          this.jsonemptyinstance.BC_BCRS.measuresdata.Row.push(row)
        }
      }
      let tab_4 = this.dataset.tab_4.data;
      for (let article of tab_4.articles) {
        for (let article_item of article.article_items) {
          let collection_id = article_item.collection_id;
          let parent_collection_id = article_item.parent_collection_id
          let description = article_item.description
          let row = {
            "description": description,
            "parent_collection_id": parent_collection_id,
            "collection_id": collection_id,
            "changes": null,
            "difficulties": null,
            "difficulties_comments": null,
            "status": null,
            "status_comments": null,
          }
          for (let item of article_item.items) {
            if (item.type === 'changes') {
              row.changes = item.selected
            }
            else if (item.type === 'status') {
              row.status = item.selected;
              row.status_comments = item.comments
            }
            else {
              row.difficulties_comments = item.comments
              if (item.selected.length) {
                for (let difficulty of item.selected) {
                  this.jsonemptyinstance.BC_BCRS.measuredata_difficulty.Row.push({
                    "collection_id": collection_id,
                    "difficulty": difficulty
                  })
                }
              }
            }
          }
          this.jsonemptyinstance.BC_BCRS.measuresdata.Row.push(row)
        }
      }
      this.jsonemptyinstance.BC_BCRS.country = this.country
      saveInstance(this.jsonemptyinstance)
      this.showAlert();
  	},
  },
    watch: {
   country: {
      handler: function(old_val,new_val) {
        this.jsonemptyinstance.BC_BCRS.country = new_val
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
