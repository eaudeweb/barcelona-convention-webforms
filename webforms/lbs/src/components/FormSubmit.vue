<template>
  <div>
    <b-btn variant="success" style="position: absolute;
    top: 5px;
    right: 5px;" @click="doStuff">Save</b-btn>

    <b-btn variant="danger" style="position: absolute;
    top: 5px;
    right: -157px;" @click="exitForm">Back to envelope</b-btn>

    <b-alert :show="dismissCountDown"
       variant="success"
       @dismissed="dismissCountDown=0"
       @dismiss-count-down="countDownChanged">
        <h3 style="color: black; font-weight: bold;">The report is saved</h3>
      </b-alert>



  <!--   <b-btn @click="validate" variant="primary" type="submit" style="position: absolute;
    top: 5px;
    right: 85px;">Validate</b-btn> -->
<!--     <div style="position: fixed;left:0;right:50%;top:0;bottom:0; background: white">
     <pre>

      {{converted_xml}}
     </pre>
    </div> -->
  </div>
</template>

<script>

import {saveInstance,envelope} from '../api.js';


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
    this.jsonemptyinstance.BC_LBS.country = this.country
    // this.validate()
  },

  data () {
    return {
      dataset: null,
      validation: [],
      jsonemptyinstance: {
          "BC_LBS": {
              "@xmlns": "https://dd.info-rac.org/namespaces/9",
              "@xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
              "@xsi:schemaLocation": "https://dd.info-rac.org/namespaces/9 https://dd.info-rac.org/v2/dataset/8/schema-dst-8.xsd",
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
              "enforcementmeasuresdata": {Row:[]},
              "lbsinventorydata": {Row:[]}
          }
      },
     converted_xml: null,
      dismissSecs: 2,
      dismissCountDown: 0,
      showDismissibleAlert: false,
    }
  },

  methods: {

    matchEnfField(name){
      switch (name) {
        case 'inspections':
          return 'inspectionnumber'
          break;
        case 'non_compliance':
          return 'casesnumber'
          break;
        case 'total_amount':
          return 'fineissuesnumber'
          break;
        case 'suspensions':
          return 'suspensionsnumber'
          break;
        case 'shutdowns':
          return 'shutdownsnumber'
          break;
        case 'enforcement':
          return 'othernumber'
          break;
        case 'implemented':
          return 'cleannumber'
          break;
        case 'remarks':
          return 'comment'
          break;
        default:
          // statements_def
          break;
      }
    },

    showAlert () {
      console.log('showingalert')
      this.dismissCountDown = this.dismissSecs
    },

       countDownChanged (dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },

    matchInvField(label){
      switch (label) {
        case 'Pollutant name':
          return 'pollutantgroup'
          break;
        case 'Sector of Activity':
          return 'activitysector'
          break;
        case 'Sub-sector':
          return 'activitysubsector'
          break;
        case 'Release to Air - Information based on':
          return 'reportedinfotypeair'
          break;
        case 'Release to Air - Quantities Kg/year':
          return 'airquantity'
          break;
        case 'Release to Water - Information based on':
          return 'reportedinfotypewater'
          break;
        case 'Release to Water - Quantities Kg/year':
          return 'waterquantity'
          break;
        case 'Release to Soil - Information based on':
          return 'reportedinfotypesoil'
          break;
        case 'Release to Soil - Quantities Kg/year':
          return 'soilquantity'
          break;
        default:
          // statements_def
          break;
      }
    },

    exitForm(){
      window.location.replace(envelope)
    },

    doStuff(){

      this.jsonemptyinstance = {
         "BC_LBS": {
              "@xmlns": "https://dd.info-rac.org/namespaces/9",
              "@xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
              "@xsi:schemaLocation": "https://dd.info-rac.org/namespaces/9 https://dd.info-rac.org/v2/dataset/8/schema-dst-8.xsd",
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
              "enforcementmeasuresdata": {Row:[]},
              "lbsinventorydata": {Row:[]}
          }
      }



      let country_tab = this.dataset.country.tables

      for(let table in country_tab) {
          for (let value of country_tab[table]) {
            this.jsonemptyinstance.BC_LBS.contacting_party[value.name] = value.selected
          }
      }


      let tab_3 = this.dataset.tab_3.data;
      for (let article of tab_3.articles) {
        for (let article_item of article.article_items){
          let collection_id = article_item.collection_id;
          let parent_collection_id = article_item.parent_collection_id
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
                      this.jsonemptyinstance.BC_LBS.measuredata_difficulty.Row.push(
                          {
                                    "collection_id": collection_id,
                                    "difficulty": difficulty
                             }
                        )
                  }
                }

              }
            }
          this.jsonemptyinstance.BC_LBS.measuresdata.Row.push(row)
        }
      }


      let tab_1 = this.dataset.tab_1.data;
      for (let article of tab_1.articles) {
        for (let article_item of article.article_items){
          let collection_id = article_item.collection_id;
          let parent_collection_id = article_item.parent_collection_id
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
                      this.jsonemptyinstance.BC_LBS.measuredata_difficulty.Row.push(
                          {
                                    "collection_id": collection_id,
                                    "difficulty": difficulty
                                }
                        )
                  }
                }

              }
            }
          this.jsonemptyinstance.BC_LBS.measuresdata.Row.push(row)
        }
      }


      let tab_4 = this.dataset.tab_4.data;
      for (let article of tab_4.articles) {
        for (let article_item of article.article_items){
          let collection_id = article_item.collection_id;
          let parent_collection_id = article_item.parent_collection_id
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
                      this.jsonemptyinstance.BC_LBS.measuredata_difficulty.Row.push(
                          {
                                    "collection_id": collection_id,
                                    "difficulty": difficulty
                             }
                        )
                  }
                }

              }
            }
          this.jsonemptyinstance.BC_LBS.measuresdata.Row.push(row)
        }
      }
      let tab_5 = this.dataset.tab_5.data;
      for (let article of tab_5.articles) {
        for (let article_item of article.article_items){
          let collection_id = article_item.collection_id;
          let parent_collection_id = article_item.parent_collection_id
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
                      this.jsonemptyinstance.BC_LBS.measuredata_difficulty.Row.push(
                          {
                                    "collection_id": collection_id,
                                    "difficulty": difficulty
                             }
                        )
                  }
                }

              }
            }
          this.jsonemptyinstance.BC_LBS.measuresdata.Row.push(row)
        }
      }

      let tab_6 = this.dataset.tab_6.data;
      for (let article of tab_6.articles) {
          let collection_id = article.collection_id;
          let parent_collection_id = article.parent_collection_id
          let description = article.article_title
          let row =  {
                      "description": description,
                      "parent_collection_id": parent_collection_id,
                      "collection_id": collection_id,
                      "inspectionnumber": null,
                      "casesnumber":null,
                      "fineissuesnumber": null,
                      "suspensionsnumber": null,
                      "shutdownsnumber":null,
                      "othernumber": 'asd',
                      "cleannumber": null,
                      "comment": null
                  }
        for (let article_item of article.article_items){
          row[this.matchEnfField(article_item.name)] =  article_item.value
        }
        this.jsonemptyinstance.BC_LBS.enforcementmeasuresdata.Row.push(row)
      }

      let tab_2 = this.dataset.tab_2.data;
      for (let article of tab_2.articles) {
          let collection_id = tab_2.collection_id;
          let parent_collection_id = tab_2.parent_collection_id
          let check_value = tab_2.question.selected;
          let check_eprtr = null;
          let eprtr_envelope_link = null;
          let nbb_envelope_link = null;
          if (tab_2.eprtr_question) {
            check_eprtr = tab_2.eprtr_question.selected;
          }
          if (tab_2.eprtr_envelope_link) {
            eprtr_envelope_link = tab_2.eprtr_envelope_link.value;
          }

          if (tab_2.nbb_envelope_link) {
            nbb_envelope_link = tab_2.nbb_envelope_link.value;
          }

        for (let article_item of article.article_items){
          let row =  {
                      "parent_collection_id": parent_collection_id,
                      "collection_id": collection_id,
                      "pollutantgroup": null,
                      "reportednbb": check_value,
                      "eprtr_question": check_eprtr,
                      "eprtr_envelope_link": eprtr_envelope_link,
                      "nbb_envelope_link": nbb_envelope_link,
                      "description": article_item.description,
                      "activitysector":null,
                      "activitysubsector": null,
                      "reportedinfotypeair": null,
                      "airquantity":null,
                      "reportedinfotypewater": null,
                      "waterquantity": null,
                      "reportedinfotypesoil": null,
                      "soilquantity": null
                  }

          for(let item of article_item.items){
            row[this.matchInvField(item.label)] =  item.selected || item.value
          }
        this.jsonemptyinstance.BC_LBS.lbsinventorydata.Row.push(row)
        }
      }

      this.jsonemptyinstance.BC_LBS.country = this.country
      console.log(this.jsonemptyinstance)

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
    },
    country: {
      handler: function(old_val,new_val) {
        this.jsonemptyinstance.BC_LBS.country = new_val
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
