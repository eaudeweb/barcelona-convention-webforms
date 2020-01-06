<template>
  <div>
    <b-btn variant="success" style="position: absolute;
    top: -3rem;
    right: 5px;" @click="saveForm">Save</b-btn>
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

export default {
  name: 'FormSubmit',
  props: ['form', 'country'],

  created() {
    this.dataset = this.form;
    this.currentCountry = this.country;
    // this.validate()
  },

  data () {
    return {
      dataset: null,
      structure:{
        demographicdataset_records: {
          reportID: null,
          rowID: null,
          year: null,
          totalPopulation: null,
          urbanPopulation: null,
          ruralPopulation: null,
          Total_Pop_Coast_Hydro_Basin: null,
          Urban_Pop_Coast_Hydro_Basin: null,
          Rural_Pop_Coast_Hydro_Basin: null,
          Total_Pop_more_2000_Inhabitants_Hydro_Coast: null,
          Total_Pop_more_2000_Inhabitants_Coast: null,
          Total_Pop_Coast: null
        }
      },
      currentCountry: null,
      jsonemptyinstance: {
          "H2020_DEM": {
              "@xmlns": "https://dd.info-rac.org/namespaces/23",
              "@xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
              "@xsi:schemaLocation": "https://dd.info-rac.org/namespaces/23  https://dd.info-rac.org/v2/dataset/25/schema-dst-25.xsd",
              "demographicdataset": {
                "@xmlns": "https://dd.info-rac.org/namespaces/24",
                "Row": {
                  reportID: null,
                  countryCode: null,
                  reportingYear: null,
                }
              },
            "demographicdataset_records": {
              "@xmlns": "https://dd.info-rac.org/namespaces/25",
              "Row": []
            },
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
      this.dismissCountDown = this.dismissSecs
    },

    countDownChanged (dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },

    saveForm(){
      let emptyInstance = JSON.parse(JSON.stringify(this.jsonemptyinstance))
      let data = JSON.parse(JSON.stringify(this.dataset))
      let reportID = `${this.currentCountry}-2020`

      emptyInstance.H2020_DEM.demographicdataset.Row.reportID = reportID
      emptyInstance.H2020_DEM.demographicdataset.Row.countryCode = this.currentCountry
      emptyInstance.H2020_DEM.demographicdataset.Row.reportingYear = 2020

      this.$store.dispatch('setDataLoading', true)

      this.storeTab1(data, emptyInstance, reportID)

      saveInstance(emptyInstance).then(r => {
        this.showAlert()
        this.$store.dispatch('setDataLoading', false)
      }).catch(error => {
        console.log(error)
        this.$store.dispatch('setDataLoading', false)
      })
    },

    storeTab1(data, emptyInstance, reportID) {
      const structure = JSON.parse(JSON.stringify(this.structure.demographicdataset_records))
      const section = data.tabs.tab_1.form_fields
      structure.reportID = reportID

      Object.keys(section).forEach(field => {
        if (structure.hasOwnProperty(field)) structure[field] = section[field].selected
      })
      section.demographicdataset_records.fields.forEach((row, row_index) => {
        console.dir(row)
      //   pathway.EASINCode.selected.forEach((species, species_index) => {
        const record = JSON.parse(JSON.stringify(this.structure.demographicdataset_records))
        record.reportID = reportID
        record.rowID = row_index
        record.year = row.year.selected
        record.totalPopulation = row.totalPopulation.selected
        record.urbanPopulation = row.urbanPopulation.selected
        record.ruralPopulation = row.ruralPopulation.selected
        record.Total_Pop_Coast_Hydro_Basin = row.Total_Pop_Coast_Hydro_Basin.selected
        record.Urban_Pop_Coast_Hydro_Basin = row.Urban_Pop_Coast_Hydro_Basin.selected
        record.Rural_Pop_Coast_Hydro_Basin = row.Rural_Pop_Coast_Hydro_Basin.selected
        record.Total_Pop_more_2000_Inhabitants_Hydro_Coast = row.Total_Pop_more_2000_Inhabitants_Hydro_Coast.selected
        record.Total_Pop_more_2000_Inhabitants_Coast = row.Total_Pop_more_2000_Inhabitants_Coast.selected
        record.Total_Pop_Coast = row.Total_Pop_Coast.selected;
        emptyInstance.H2020_DEM.demographicdataset_records.Row.push(record)
      //   })
      })
      emptyInstance.H2020_DEM.demographicdataset_records.Row.push(structure)
    }
  },
  watch: {
    country: {
      handler: function (old_val, new_val) {
        this.currentCountry = new_val
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
