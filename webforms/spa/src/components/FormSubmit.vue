<template>
  <div>
    <b-btn variant="success" style="position: absolute;
    top: -45px;
    right: 5px;" @click="saveReport">Save</b-btn>
    <b-btn variant="danger" style="position: absolute;
    top: -45px;
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

  created() {
    this.dataset = this.info
  },

  data () {
    return {
      dataset: null,
      validation: [],
      jsonemptyinstance: {
          "BC_SPA": {
              "@xmlns": "https://dd.info-rac.org/namespaces/4",
              "@xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
              "@xsi:schemaLocation": "https://dd.info-rac.org/namespaces/4 https://dd.info-rac.org/v2/dataset/17/schema-dst-17.xsd",
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
              "management_plans_imp": {Row:[]},
              "spa": {Row:[]},
              "spamis": {Row:[]},
              "measures_to_protect_species":{Row:[]},
              "enf_measures":{Row:[]}

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


    saveReport(){

        this.jsonemptyinstance = {
          "BC_SPA": {
              "@xmlns": "https://dd.info-rac.org/namespaces/4",
              "@xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
              "@xsi:schemaLocation": "https://dd.info-rac.org/namespaces/4 https://dd.info-rac.org/v2/dataset/17/schema-dst-17.xsd",
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
              "management_plans_imp": {Row:[]},
              "spa": {Row:[]},
              "spamis": {Row:[]},
              "measures_to_protect_species":{Row:[]},
              "enf_measures":{Row:[]}

          }
      }

    let country_tab = this.dataset.country.tables

      for(let table in country_tab) {
          for (let value of country_tab[table]) {
            this.jsonemptyinstance.BC_SPA.contacting_party[value.name] = value.selected
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
                      this.jsonemptyinstance.BC_SPA.measuredata_difficulty.Row.push(
                          {
                                    "collection_id": collection_id || null,
                                    "difficulty": difficulty
                                }
                        )
                  }
                }

              }
            }
          this.jsonemptyinstance.BC_SPA.measuresdata.Row.push(row)
        }
      }




      let tab_2_1 = this.dataset.tab_2.data.table_1;
      for (let article of tab_2_1.articles) {
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
                      this.jsonemptyinstance.BC_SPA.measuredata_difficulty.Row.push(
                          {
                                    "collection_id": collection_id || null,
                                    "difficulty": difficulty
                                }
                        )
                  }
                }

              }
            }
          this.jsonemptyinstance.BC_SPA.measuresdata.Row.push(row)
        }
      }



      let tab_2_3 = this.dataset.tab_2.data.table_3;
      for (let article of tab_2_3.articles) {
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
                      this.jsonemptyinstance.BC_SPA.measuredata_difficulty.Row.push(
                          {
                                    "collection_id": collection_id || null,
                                    "difficulty": difficulty
                                }
                        )
                  }
                }

              }
            }
          this.jsonemptyinstance.BC_SPA.measuresdata.Row.push(row)
        }
      }



      let tab_3_1 = this.dataset.tab_3.data.table_1;
      for (let article of tab_3_1.articles) {
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
                      this.jsonemptyinstance.BC_SPA.measuredata_difficulty.Row.push(
                          {
                                    "collection_id": collection_id || null,
                                    "difficulty": difficulty
                                }
                        )
                  }
                }

              }
            }
          this.jsonemptyinstance.BC_SPA.measuresdata.Row.push(row)
        }
      }




      let tab_3_2 = this.dataset.tab_3.data.table_2;
      for (let article of tab_3_2.articles) {
          let collection_id = article.collection_id || null;
          let parent_collection_id = article.parent_collection_id || null
          let spami_name = article.article_title
          let custom_spami = article.custom
          let row =  {
                      "spami_name": spami_name,
                      "parent_collection_id": parent_collection_id,
                      "collection_id": collection_id,
                      "date_of_establishment": null,
                      "surface": null,
                      "coordinates": null,
                      "jurisdiction":null,
                      "management": null,
                      "date_of_adoption": null,
                      "delimitation_change": null,
                      "legal_status_change": null,
                      "changes_reasons": null,
                      "custom_spami": custom_spami || null,
                      "iso": article.iso
                  }
        for (let article_item of article.article_items){
          row[article_item.name] = article_item.selected
        }
          this.jsonemptyinstance.BC_SPA.spamis.Row.push(row)
      }







      let tab_4_1 = this.dataset.tab_4.data.table_1;
      for (let article of tab_4_1.articles) {
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
                      this.jsonemptyinstance.BC_SPA.measuredata_difficulty.Row.push(
                          {
                                    "collection_id": collection_id || null,
                                    "difficulty": difficulty
                                }
                        )
                  }
                }

              }
            }
          this.jsonemptyinstance.BC_SPA.measuresdata.Row.push(row)
        }
      }

      let tab_5 = this.dataset.tab_5.data;
      for (let article of tab_5.articles) {
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
                      this.jsonemptyinstance.BC_SPA.measuredata_difficulty.Row.push(
                          {
                                    "collection_id": collection_id || null,
                                    "difficulty": difficulty
                                }
                        )
                  }
                }

              }
            }
          this.jsonemptyinstance.BC_SPA.measuresdata.Row.push(row)
        }
      }

      let tab_7 = this.dataset.tab_7.data;
      for (let article of tab_7.articles) {
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
                      this.jsonemptyinstance.BC_SPA.measuredata_difficulty.Row.push(
                          {
                                    "collection_id": collection_id || null,
                                    "difficulty": difficulty
                                }
                        )
                  }
                }

              }
            }
          this.jsonemptyinstance.BC_SPA.measuresdata.Row.push(row)
        }
      }

      let tab_2_2 = this.dataset.tab_2.data.table_2;
      let idx = 0;

      for (let article of tab_2_2.articles) {
        let collection_id = article.collection_id || null;
        let parent_collection_id = article.parent_collection_id || null
        let description = article.description || null
        let spa_name = article.article_title.selected || null
        idx = idx + 1;

        let row = {
          "id": null,
          "collection_id" : collection_id,
          "parent_collection_id": parent_collection_id,
          "description": description,
          "spa_name": spa_name,
          "date": null,
          "legalEnactmentText": null,
          "category": null,
          "jurisdiction": null,
          "coordinates": null,
          "WMSlink": null,
          "marineSurface": null,
          "terrestrialSurface": null,
          "wetlandSurface": null,
          "surface": null,
          "species": null,
          "ecosystems": null,
          "management": null,
          "dateofadoption": null,
          "protectionObjectives": null,
          "protectionMeasures": null,
          "otherMeasures": null,
          "measuresLegallyBinding": null,
          "relevantRegulation": null,
          "noTakeZones": null,
          "totalExtent": null
        };

        row["id"] = this.country + idx;
        
        for (let article_item of article.article_items){
          row[article_item.name] = article_item.selected;
        }

        this.jsonemptyinstance.BC_SPA.spa.Row.push(row);
      }

      idx = 0;

      let tab_3_3 = this.dataset.tab_3.data.table_3;
      for (let article of tab_3_3.articles) {
        let collection_id = article.collection_id || null;
        let parent_collection_id = article.parent_collection_id || null
        let description = article.description || null
        let spa_name = article.article_title.selected || null
        let row = {
          collection_id : collection_id,
          parent_collection_id: parent_collection_id,
          description: description,
          name: spa_name,
          protection_measures: null,
          difficulties: null,
          protection_comments: null,
          difficulties_comments: null,
        }
        for (let article_item of article.article_items){
          // let row = {};
          // console.log(article_item)
          if(article_item.name === "protection_measures") {
            row.protection_comments = article_item.comments
          } else if (article_item.name === "difficulties") {
            row.difficulties_comments = article_item.comments
          }

          row[article_item.name] = article_item.selected

        }

        this.jsonemptyinstance.BC_SPA.management_plans_imp.Row.push(row);

      }
      




      let tab_4_2 = this.dataset.tab_4.data.table_2;
      for (let article of tab_4_2.articles) {
        let collection_id = article.collection_id || null;
        let parent_collection_id = article.parent_collection_id || null
        for (let article_item of article.article_items){

          // console.log(article_item)
          for(let item of article_item.items){
             let row = {
              collection_id : collection_id,
              parent_collection_id: parent_collection_id,
              comments: null,
              name: null,
              value: null,
            }
            row.name = item.name
            row.value = item.selected
            row.comments = item.comments
            this.jsonemptyinstance.BC_SPA.measures_to_protect_species.Row.push(row);
          }

        }
      }
      

      console.log(this.jsonemptyinstance.BC_SPA.measures_to_protect_species)

      let tab_6 = this.dataset.tab_6.data;
      for (let article of tab_6.articles) {
        let collection_id = article.collection_id || null;
        let parent_collection_id = article.parent_collection_id || null
        let description = article.description || null
        let row = {
          collection_id : collection_id,
          parent_collection_id: parent_collection_id,
          description: description,
          inspections: null,
          non_compliance: null,
          total_fines: null,
          total_amount: null,
          remarks: null,

        }
        for (let article_item of article.article_items){
          // let row = {};
          // console.log(article_item)
          row[article_item.name] = article_item.selected

        }

        this.jsonemptyinstance.BC_SPA.enf_measures.Row.push(row);

      }
      
      this.jsonemptyinstance.BC_SPA.country = this.country


      console.log(this.jsonemptyinstance)

      this.showAlert();
      saveInstance(this.jsonemptyinstance)

    },
    
    validate() {
   
    }
  },
    watch: {
    info: {
      handler: function(old_val,new_val) {
        // this.validate()
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
