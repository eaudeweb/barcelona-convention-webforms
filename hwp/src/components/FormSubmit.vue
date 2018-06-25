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

import {saveInstance} from '../api.js';

export default {

  name: 'FormSubmit',


  props: {
    info: null,
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
          "BC_HWP": {
              "@xmlns": "https://dd.info-rac.org/namespaces/4",
              "@xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
              "@xsi:schemaLocation": "https://dd.info-rac.org/namespaces/4 https://dd.info-rac.org/v2/dataset/19/schema-dst-19.xsd",
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
              "hazardous_wastes_domestic_legislation": {Row:[]},
              "total_hazardous_wastes": {Row:[]},
              "wastes_y": {Row:[]},
              "export_hazardous_wastes_total": {Row:[]},
              "export_hazardous_wastes_y": {Row:[]},

              "import_hazardous_wastes_total": {Row:[]},
              "import_hazardous_wastes_y": {Row:[]},

              "disposals_incidents": {Row:[]},
              "accidents_during_disposal": {Row:[]},
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
          "BC_HWP": {
              "@xmlns": "https://dd.info-rac.org/namespaces/4",
              "@xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
              "@xsi:schemaLocation": "https://dd.info-rac.org/namespaces/4 https://dd.info-rac.org/v2/dataset/19/schema-dst-19.xsd",
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
              "hazardous_wastes_domestic_legislation": {Row:[]},
              "total_hazardous_wastes": {Row:[]},
              "wastes_y": {Row:[]},
              "export_hazardous_wastes_total": {Row:[]},
              "export_hazardous_wastes_y": {Row:[]},

              "import_hazardous_wastes_total": {Row:[]},
              "import_hazardous_wastes_y": {Row:[]},

              "disposals_incidents": {Row:[]},
              "accidents_during_disposal": {Row:[]},
              "enf_measures": {Row:[]},
          }
      }


   let country_tab = this.dataset.country.tables

      for(let table in country_tab) {
          for (let value of country_tab[table]) {
            this.jsonemptyinstance.BC_HWP.contacting_party[value.name] = value.selected
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
                      this.jsonemptyinstance.BC_HWP.measuredata_difficulty.Row.push(
                          {
                                    "collection_id": collection_id || null,
                                    "difficulty": difficulty
                                }
                        )
                  }
                }

              }
            }
          this.jsonemptyinstance.BC_HWP.measuresdata.Row.push(row)
        }
      }




      let tab_2_1 = this.dataset.tab_2.data.table_1;
      for (let article of tab_2_1.articles) {
        let collection_id = this.dataset.tab_2.data.table_1.collection_id || null;
        let parent_collection_id = this.dataset.tab_2.data.table_1.parent_collection_id || null
        let title = article.article_title || null
        let row = {
          collection_id : collection_id,
          parent_collection_id: parent_collection_id,
          title: title,
          wastedescription: null,
          definition: null,
          main_characteristics: null,
          movement_procedure: null,
        }
        for (let article_item of article.article_items){
            row[article_item.name] = article_item.selected
        }

        this.jsonemptyinstance.BC_HWP.hazardous_wastes_domestic_legislation.Row.push(row);

      }







      let tab_2_2 = this.dataset.tab_2.data.table_2;
      for (let article of tab_2_2.articles) {
        let collection_id = article.collection_id || null;
        let parent_collection_id = article.parent_collection_id || null
        let title = article.article_title || null
        
        for (let article_item of article.article_items){
          if(article_item.selected){
              let row = {
                collection_id : collection_id,
                parent_collection_id: parent_collection_id,
                // title: title,
                year: null,
                hazardous_waste_value: null,
              }
                row.year = article_item.name
                row.hazardous_waste_value = article_item.selected

              this.jsonemptyinstance.BC_HWP.total_hazardous_wastes.Row.push(row);
          }
        }


      }


      let tab_2_3 = this.dataset.tab_2.data.table_3;
      for (let article of tab_2_3.articles) {
        let collection_id = article.collection_id || null;
        let parent_collection_id = this.dataset.tab_2.data.table_3.parent_collection_id || null
        // let title = article.article_title || null
        
        for (let article_item of article.article_items){
          if(article_item.selected){
            let row = {
              collection_id : collection_id,
              parent_collection_id: parent_collection_id,
              // title: title,
              year: null,
              hazardous_waste_value: null,
            }
              row.year = article_item.name
              row.hazardous_waste_value = article_item.selected

            this.jsonemptyinstance.BC_HWP.wastes_y.Row.push(row);
          }

        }


      }





        let question_collection_id = this.dataset.tab_3.data.table_1.collection_id || null;
        let question_parent_collection_id = this.dataset.tab_3.data.table_1.parent_collection_id || null
        let row_question = {
          collection_id: question_collection_id,
          parent_collection_id: question_parent_collection_id,
          amounts_exported: null,
          "Y0-Y45": null,
          "Y46-Y47": null,
          total_amount: null,
        }


        for(let question of this.dataset.tab_3.data.table_1.questions) {
          row_question[question.name] = question.selected
        }

        this.jsonemptyinstance.BC_HWP.export_hazardous_wastes_total.Row.push(row_question);

      let tab_3_1 = this.dataset.tab_3.data.table_1;
      for (let article of tab_3_1.articles) {
        let collection_id = this.dataset.tab_3.data.table_1.collection_id || null;
        let parent_collection_id = this.dataset.tab_3.data.table_1.parent_collection_id || null
        let title = article.article_title.selected || null

        let row = {
              collection_id : collection_id,
              parent_collection_id: parent_collection_id,
              title: title,
              waste_streams: null,
              un_class: null,
              h_class: null,
              characteristics: null,
              amount_exported: null,
              country_of_transit: null,
              country_of_destionation: null,
              final_disposal: null,
              recovery_operation: null,
        }

        
        for (let article_item of article.article_items){
              row[article_item.name] = article_item.selected
        }

        this.jsonemptyinstance.BC_HWP.export_hazardous_wastes_y.Row.push(row);


      }







        let question_collection_id_imported = this.dataset.tab_3.data.table_2.collection_id || null;
        let question_parent_collection_id_imported = this.dataset.tab_3.data.table_2.parent_collection_id || null
        let row_question_imported = {
          collection_id: question_collection_id_imported,
          parent_collection_id: question_parent_collection_id_imported,
          amounts_imported: null,
          "Y0-Y45_imported": null,
          "Y46-Y47_imported": null,
          total_amount_imported: null,
        }


        for(let question of this.dataset.tab_3.data.table_2.questions) {
          row_question_imported[question.name] = question.selected
        }

        this.jsonemptyinstance.BC_HWP.import_hazardous_wastes_total.Row.push(row_question_imported);

      let tab_3_2 = this.dataset.tab_3.data.table_2;
      for (let article of tab_3_2.articles) {
        let collection_id = this.dataset.tab_3.data.table_2.collection_id || null;
        let parent_collection_id = this.dataset.tab_3.data.table_2.parent_collection_id || null
        let title = article.article_title.selected || null

        let row = {
              collection_id : collection_id,
              parent_collection_id: parent_collection_id,
              title: title,
              waste_streams_imported: null,
              un_class_imported: null,
              h_class_imported: null,
              characteristics_imported: null,
              amount_imported: null,
              country_of_transit_imported: null,
              country_of_origin: null,
              final_disposal_imported: null,
              recovery_operation_imported: null,
        }

        
        for (let article_item of article.article_items){
              row[article_item.name] = article_item.selected
        }

        this.jsonemptyinstance.BC_HWP.import_hazardous_wastes_y.Row.push(row);


      }




      let tab_4_1 = this.dataset.tab_4.data.table_1;
      for (let article of tab_4_1.articles) {
        let collection_id = this.dataset.tab_4.data.table_1.collection_id || null;
        let parent_collection_id = this.dataset.tab_4.data.table_1.parent_collection_id || null
        let title = article.article_title.selected || null

        let row = {
              collection_id : collection_id,
              parent_collection_id: parent_collection_id,
              title: title,
              incident_date: title,
              countries_involved: null,
              wastes_type: null,
              wastes_amount: null,
              incident_reason: null,
              measures_taken: null,
              measures_effectiveness: null,
              remarks: null,
        }

        
        for (let article_item of article.article_items){
              row[article_item.name] = article_item.selected
        }

        this.jsonemptyinstance.BC_HWP.disposals_incidents.Row.push(row);


      }


      let tab_4_2 = this.dataset.tab_4.data.table_2;
      for (let article of tab_4_2.articles) {
        let collection_id = this.dataset.tab_4.data.table_2.collection_id || null;
        let parent_collection_id = this.dataset.tab_4.data.table_2.parent_collection_id || null
        let title = article.article_title.selected || null

        let row = {
              collection_id : collection_id,
              parent_collection_id: parent_collection_id,
              title: title,
              incident_date_place: title,
              wastes_type_movement: null,
              wastes_amount_movement: null,
              accident_type_movement: null,
              measures_taken_movement: null,
              measures_effectiveness_movement: null,
              remarks_movement: null,
        }

        
        for (let article_item of article.article_items){
              row[article_item.name] = article_item.selected
        }

        this.jsonemptyinstance.BC_HWP.accidents_during_disposal.Row.push(row);


      }





      let tab_5 = this.dataset.tab_5.data;
      for (let article of tab_5.articles) {
        let collection_id = this.dataset.tab_5.data.collection_id || null;
        let parent_collection_id = this.dataset.tab_5.data.parent_collection_id || null
        let title = article.article_title || null
        let row = {
          collection_id : collection_id,
          parent_collection_id: parent_collection_id,
          title: title,
          inspections_number: null,
          contraventions_number: null,
          sanctions_number: null,
          enf_measures_number: null,
          clean_measures_number: null,
          remarks: null,
        }
        for (let article_item of article.article_items){
            row[article_item.name] = article_item.selected
        }

        this.jsonemptyinstance.BC_HWP.enf_measures.Row.push(row);

      }






      
      this.showAlert();
      saveInstance(this.jsonemptyinstance);
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
