<template>
  <div class="wrapper">
    <div class="buttons-wrapper">
      <b-btn variant="success" id="save_button" @click="saveForm">Save</b-btn>
      <!--      <b-btn variant="primary" @click="validateSections" style="">Validate</b-btn>-->
      <!--      <b-btn variant="danger" @click="openErrorModal">Errors</b-btn>-->
      <b-btn variant="danger" @click="exitForm">Back to envelope</b-btn>
    </div>

    <b-alert :show="dismissCountDown"
             variant="success"
             @dismissed="dismissCountDown=0"
             @dismiss-count-down="countDownChanged">
      <h3 style="color: black; font-weight: bold; text-align: center">The report is saved</h3>
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

    data() {
      return {
        dataset: null,
        structure: {
          ind_6_1_1_records: {
            reportID: null,
            rowID: null,
            administrativeRegion: null,
            year: null,
            BOD: null,
            sector_id: null,
            subsector_id: null,
            collection_method: null,
            remarks: null
          },
          ind_6_1_2_records: {
            reportID: null,
            rowID: null,
            administrativeRegion: null,
            year: null,
            TN: null,
            sector_id: null,
            subsector_id: null,
            collection_method: null,
            remarks: null
          },
          ind_6_1_3_records: {
            reportID: null,
            rowID: null,
            administrativeRegion: null,
            year: null,
            TP: null,
            sector_id: null,
            subsector_id: null,
            collection_method: null,
            remarks: null
          },
          ind_6_2_1_records: {
            reportID: null,
            rowID: null,
            administrativeRegion: null,
            year: null,
            heavyMetal_ID: null,
            totalQHeavyMetal: null,
            sector_id: null,
            subsector_id: null,
            collection_method: null,
            remarks: null
          },
          ind_6_2_2_records: {
            reportID: null,
            rowID: null,
            administrativeRegion: null,
            year: null,
            PCDF_PCDD: null,
            sector_id: null,
            subsector_id: null,
            collection_method: null,
            remarks: null
          },
          ind_6_2_3_records: {
            reportID: null,
            rowID: null,
            administrativeRegion: null,
            year: null,
            PAH: null,
            sector_id: null,
            subsector_id: null,
            collection_method: null,
            remarks: null
          },
          ind_6_2_4_records: {
            reportID: null,
            rowID: null,
            administrativeRegion: null,
            year: null,
            VOC: null,
            sector_id: null,
            subsector_id: null,
            collection_method: null,
            remarks: null
          },
          ind_6_3_1_records: {
            reportID: null,
            rowID: null,
            administrativeRegion: null,
            year: null,
            generatedHW: null,
            sector_id: null,
            subsector_id: null,
            collection_method: null,
            remarks: null
          },
          ind_6_3_2_records: {
            reportID: null,
            rowID: null,
            administrativeRegion: null,
            year: null,
            generatedHW: null,
            importedHW: null,
            exportedHW: null,
            stokpiledHW: null,
            dipositedHW: null,
            dispVsGenHW: null,
            collection_method: null,
            remarks: null
          },
          ind_6_4_1_records: {
            reportID: null,
            rowID: null,
            administrativeRegion: null,
            year: null,
            noReportionIndustrialInstallations: null,
            noTotalInstallationsRequired: null,
            sector_id: null,
            subsector_id: null,
            collection_method: null,
            remarks: null
          },
          ind_6_4_2_records: {
            reportID: null,
            rowID: null,
            administrativeRegion: null,
            year: null,
            noInspectionsBreach: null,
            noTotalInspections: null,
            sector_id: null,
            subsector_id: null,
            collection_method: null,
            remarks: null
          },
          ind_6_4_3_records: {
            reportID: null,
            rowID: null,
            year: null,
            noEliminatedHotspots: null,
            noHotspots2001: null,
            noHotspots2015: null,
            collection_method: null,
            remarks: null
          }
        },
        currentCountry: null,
        jsonemptyinstance: {
          "H2020_IND_EMISSIONS": {
            "@xmlns": "https://dd.info-rac.org/namespaces/26",
            "@xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
            "@xsi:schemaLocation": "https://dd.info-rac.org/namespaces/26  https://dd.info-rac.org/v2/dataset/27/schema-dst-27.xsd",
            "industrialemissions": {
              "@xmlns": "https://dd.info-rac.org/namespaces/27",
              "Row": {
                reportID: null,
                countryCode: null,
                reportingYear: null,
              }
            },
            "ind_6_1_1_records": {
              "@xmlns": "https://dd.info-rac.org/namespaces/32",
              "Row": []
            },
            "ind_6_1_2_records": {
              "@xmlns": "https://dd.info-rac.org/namespaces/33",
              "Row": []
            },
            "ind_6_1_3_records": {
              "@xmlns": "https://dd.info-rac.org/namespaces/34",
              "Row": []
            },
            "ind_6_2_1_records": {
              "@xmlns": "https://dd.info-rac.org/namespaces/35",
              "Row": []
            },
            "ind_6_2_2_records": {
              "@xmlns": "https://dd.info-rac.org/namespaces/36",
              "Row": []
            },
            "ind_6_2_3_records": {
              "@xmlns": "https://dd.info-rac.org/namespaces/37",
              "Row": []
            },
            "ind_6_2_4_records": {
              "@xmlns": "https://dd.info-rac.org/namespaces/38",
              "Row": []
            },
            "ind_6_3_1_records": {
              "@xmlns": "https://dd.info-rac.org/namespaces/39",
              "Row": []
            },
            "ind_6_3_2_records": {
              "@xmlns": "https://dd.info-rac.org/namespaces/40",
              "Row": []
            },
            "ind_6_4_1_records": {
              "@xmlns": "https://dd.info-rac.org/namespaces/41",
              "Row": []
            },
            "ind_6_4_2_records": {
              "@xmlns": "https://dd.info-rac.org/namespaces/42",
              "Row": []
            },
            "ind_6_4_3_records": {
              "@xmlns": "https://dd.info-rac.org/namespaces/43",
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

      exitForm() {
        window.location.replace(envelope)
      },

      showAlert() {
        this.dismissCountDown = this.dismissSecs
      },

      countDownChanged(dismissCountDown) {
        this.dismissCountDown = dismissCountDown
      },

      saveForm() {
        let emptyInstance = JSON.parse(JSON.stringify(this.jsonemptyinstance))
        let data = JSON.parse(JSON.stringify(this.dataset))
        let reportID = `${this.currentCountry}-2020`

        emptyInstance.H2020_IND_EMISSIONS.industrialemissions.Row.reportID = reportID
        emptyInstance.H2020_IND_EMISSIONS.industrialemissions.Row.countryCode = this.currentCountry
        emptyInstance.H2020_IND_EMISSIONS.industrialemissions.Row.reportingYear = 2020

        this.$store.dispatch('setDataLoading', true)

        this.storeTab1(data, emptyInstance, reportID)
        this.storeTab2(data, emptyInstance, reportID)
        this.storeTab3(data, emptyInstance, reportID)
        this.storeTab4(data, emptyInstance, reportID)

        saveInstance(emptyInstance).then(r => {
          this.showAlert()
          this.$store.dispatch('setDataLoading', false)
        }).catch(error => {
          console.log(error)
          this.$store.dispatch('setDataLoading', false)
        })
      },

      storeTab1(data, emptyInstance, reportID) {
        // const ind_6_1_1_records = JSON.parse(JSON.stringify(this.structure.ind_6_1_1_records))
        // const ind_6_1_2_records = JSON.parse(JSON.stringify(this.structure.ind_6_1_2_records))
        // const ind_6_1_3_records = JSON.parse(JSON.stringify(this.structure.ind_6_1_3_records))
        const section = data.tabs.tab_1.form_fields
        //
        // Object.keys(section).forEach(field => {
        //   if (ind_6_1_1_records.hasOwnProperty(field)) ind_6_1_1_records[field] = section[field].selected
        // })
        section.ind_6_1_1_records.fields.forEach((row, row_index) => {
          const record = JSON.parse(JSON.stringify(this.structure.ind_6_1_1_records))
          record.reportID = reportID
          record.rowID = row_index
          record.administrativeRegion = row.administrativeRegion.selected
          record.year = row.year.selected
          record.BOD = row.BOD.selected
          record.sector_id = row.sector_id.selected
          record.subsector_id = row.subsector_id.selected
          record.collection_method = row.collection_method.selected
          record.remarks = row.remarks.selected
          emptyInstance.H2020_IND_EMISSIONS.ind_6_1_1_records.Row.push(record)
        })

        section.ind_6_1_2_records.fields.forEach((row, row_index) => {
          const record = JSON.parse(JSON.stringify(this.structure.ind_6_1_2_records))
          record.reportID = reportID
          record.rowID = row_index
          record.administrativeRegion = row.administrativeRegion.selected
          record.year = row.year.selected
          record.TN = row.TN.selected
          record.sector_id = row.sector_id.selected
          record.subsector_id = row.subsector_id.selected
          record.collection_method = row.collection_method.selected
          record.remarks = row.remarks.selected
          emptyInstance.H2020_IND_EMISSIONS.ind_6_1_2_records.Row.push(record)
        })

        section.ind_6_1_3_records.fields.forEach((row, row_index) => {
          const record = JSON.parse(JSON.stringify(this.structure.ind_6_1_3_records))
          record.reportID = reportID
          record.rowID = row_index
          record.administrativeRegion = row.administrativeRegion.selected
          record.year = row.year.selected
          record.TP = row.TP.selected
          record.sector_id = row.sector_id.selected
          record.subsector_id = row.subsector_id.selected
          record.collection_method = row.collection_method.selected
          record.remarks = row.remarks.selected
          emptyInstance.H2020_IND_EMISSIONS.ind_6_1_3_records.Row.push(record)
        })
      },

      storeTab2(data, emptyInstance, reportID) {
        // const ind_6_1_1_records = JSON.parse(JSON.stringify(this.structure.ind_6_1_1_records))
        // const ind_6_1_2_records = JSON.parse(JSON.stringify(this.structure.ind_6_1_2_records))
        // const ind_6_1_3_records = JSON.parse(JSON.stringify(this.structure.ind_6_1_3_records))
        const section = data.tabs.tab_2.form_fields
        //
        // Object.keys(section).forEach(field => {
        //   if (ind_6_1_1_records.hasOwnProperty(field)) ind_6_1_1_records[field] = section[field].selected
        // })
        section.ind_6_2_1_records.fields.forEach((row, row_index) => {
          const record = JSON.parse(JSON.stringify(this.structure.ind_6_2_1_records))
          record.reportID = reportID
          record.rowID = row_index
          record.administrativeRegion = row.administrativeRegion.selected
          record.year = row.year.selected
          record.heavyMetal_ID = row.heavyMetal_ID.selected
          record.totalQHeavyMetal = row.totalQHeavyMetal.selected
          record.sector_id = row.sector_id.selected
          record.subsector_id = row.subsector_id.selected
          record.collection_method = row.collection_method.selected
          record.remarks = row.remarks.selected
          emptyInstance.H2020_IND_EMISSIONS.ind_6_2_1_records.Row.push(record)
        })

        section.ind_6_2_2_records.fields.forEach((row, row_index) => {
          const record = JSON.parse(JSON.stringify(this.structure.ind_6_2_2_records))
          record.reportID = reportID
          record.rowID = row_index
          record.administrativeRegion = row.administrativeRegion.selected
          record.year = row.year.selected
          record.PCDF_PCDD = row.PCDF_PCDD.selected
          record.sector_id = row.sector_id.selected
          record.subsector_id = row.subsector_id.selected
          record.collection_method = row.collection_method.selected
          record.remarks = row.remarks.selected
          emptyInstance.H2020_IND_EMISSIONS.ind_6_2_2_records.Row.push(record)
        })

        section.ind_6_2_3_records.fields.forEach((row, row_index) => {
          const record = JSON.parse(JSON.stringify(this.structure.ind_6_2_3_records))
          record.reportID = reportID
          record.rowID = row_index
          record.administrativeRegion = row.administrativeRegion.selected
          record.year = row.year.selected
          record.PAH = row.PAH.selected
          record.sector_id = row.sector_id.selected
          record.subsector_id = row.subsector_id.selected
          record.collection_method = row.collection_method.selected
          record.remarks = row.remarks.selected
          emptyInstance.H2020_IND_EMISSIONS.ind_6_2_3_records.Row.push(record)
        })

        section.ind_6_2_4_records.fields.forEach((row, row_index) => {
          const record = JSON.parse(JSON.stringify(this.structure.ind_6_2_4_records))
          record.reportID = reportID
          record.rowID = row_index
          record.administrativeRegion = row.administrativeRegion.selected
          record.year = row.year.selected
          record.VOC = row.VOC.selected
          record.sector_id = row.sector_id.selected
          record.subsector_id = row.subsector_id.selected
          record.collection_method = row.collection_method.selected
          record.remarks = row.remarks.selected
          emptyInstance.H2020_IND_EMISSIONS.ind_6_2_4_records.Row.push(record)
        })
      },

      storeTab3(data, emptyInstance, reportID) {
        // const ind_6_1_1_records = JSON.parse(JSON.stringify(this.structure.ind_6_1_1_records))
        // const ind_6_1_2_records = JSON.parse(JSON.stringify(this.structure.ind_6_1_2_records))
        // const ind_6_1_3_records = JSON.parse(JSON.stringify(this.structure.ind_6_1_3_records))
        const section = data.tabs.tab_3.form_fields
        //
        // Object.keys(section).forEach(field => {
        //   if (ind_6_1_1_records.hasOwnProperty(field)) ind_6_1_1_records[field] = section[field].selected
        // })
        section.ind_6_3_1_records.fields.forEach((row, row_index) => {
          const record = JSON.parse(JSON.stringify(this.structure.ind_6_3_1_records))
          record.reportID = reportID
          record.rowID = row_index
          record.administrativeRegion = row.administrativeRegion.selected
          record.year = row.year.selected
          record.generatedHW = row.generatedHW.selected
          record.sector_id = row.sector_id.selected
          record.subsector_id = row.subsector_id.selected
          record.collection_method = row.collection_method.selected
          record.remarks = row.remarks.selected
          emptyInstance.H2020_IND_EMISSIONS.ind_6_3_1_records.Row.push(record)
        })

        section.ind_6_3_2_records.fields.forEach((row, row_index) => {
          const record = JSON.parse(JSON.stringify(this.structure.ind_6_3_2_records))
          record.reportID = reportID
          record.rowID = row_index
          record.administrativeRegion = row.administrativeRegion.selected
          record.year = row.year.selected
          record.generatedHW = row.generatedHW.selected
          record.importedHW = row.importedHW.selected
          record.exportedHW = row.exportedHW.selected
          record.stokpiledHW = row.stokpiledHW.selected
          record.dipositedHW = row.dipositedHW.selected
          record.dispVsGenHW = row.dispVsGenHW.selected
          record.sector_id = row.sector_id.selected
          record.subsector_id = row.subsector_id.selected
          record.collection_method = row.collection_method.selected
          record.remarks = row.remarks.selected
          emptyInstance.H2020_IND_EMISSIONS.ind_6_3_2_records.Row.push(record)
        })
      },

      storeTab4(data, emptyInstance, reportID) {
        // const ind_6_1_1_records = JSON.parse(JSON.stringify(this.structure.ind_6_1_1_records))
        // const ind_6_1_2_records = JSON.parse(JSON.stringify(this.structure.ind_6_1_2_records))
        // const ind_6_1_3_records = JSON.parse(JSON.stringify(this.structure.ind_6_1_3_records))
        const section = data.tabs.tab_4.form_fields
        //
        // Object.keys(section).forEach(field => {
        //   if (ind_6_1_1_records.hasOwnProperty(field)) ind_6_1_1_records[field] = section[field].selected
        // })
        section.ind_6_4_1_records.fields.forEach((row, row_index) => {
          const record = JSON.parse(JSON.stringify(this.structure.ind_6_4_1_records))
          record.reportID = reportID
          record.rowID = row_index
          record.administrativeRegion = row.administrativeRegion.selected
          record.year = row.year.selected
          record.noReportionIndustrialInstallations = row.noReportionIndustrialInstallations.selected
          record.noTotalInstallationsRequired = row.noTotalInstallationsRequired.selected
          record.sector_id = row.sector_id.selected
          record.subsector_id = row.subsector_id.selected
          record.collection_method = row.collection_method.selected
          record.remarks = row.remarks.selected
          emptyInstance.H2020_IND_EMISSIONS.ind_6_4_1_records.Row.push(record)
        })

        section.ind_6_4_2_records.fields.forEach((row, row_index) => {
          const record = JSON.parse(JSON.stringify(this.structure.ind_6_4_2_records))
          record.reportID = reportID
          record.rowID = row_index
          record.administrativeRegion = row.administrativeRegion.selected
          record.year = row.year.selected
          record.noInspectionsBreach = row.noInspectionsBreach.selected
          record.noTotalInspections = row.noTotalInspections.selected
          record.sector_id = row.sector_id.selected
          record.subsector_id = row.subsector_id.selected
          record.collection_method = row.collection_method.selected
          record.remarks = row.remarks.selected
          emptyInstance.H2020_IND_EMISSIONS.ind_6_4_2_records.Row.push(record)
        })

        section.ind_6_4_3_records.fields.forEach((row, row_index) => {
          const record = JSON.parse(JSON.stringify(this.structure.ind_6_4_3_records))
          record.reportID = reportID
          record.rowID = row_index
          record.year = row.year.selected
          record.noEliminatedHotspots = row.noEliminatedHotspots.selected
          record.noHotspots2001 = row.noHotspots2001.selected
          record.noHotspots2015 = row.noHotspots2015.selected
          record.collection_method = row.collection_method.selected
          record.remarks = row.remarks.selected
          emptyInstance.H2020_IND_EMISSIONS.ind_6_4_3_records.Row.push(record)
        })
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
    top: 3rem;
    left: 20%;
    right: 20%;
  }

  .wrapper {
    text-align: right;
    position: sticky;
    top: 0;
    z-index: 10;
    margin-bottom: .5rem;

  .buttons-wrapper {
    display: inline-block;
    padding: .5rem;
    background: white;
    border: 1px solid #eee;
  }

  }

  .errorSectionTitle {
    color: #dc3545;
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    .wrapper {
      position: relative;
      background-color: rgba(0, 0, 0, 0.03);
      height: 3rem;
    }
  }
</style>
