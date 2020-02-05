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
          ind_3_1_1_records: {
            reportID: null,
            rowID: null,
            year: null,
            totalPopulation: null,
            urbanPopulation: null,
            ruralPopulation: null,
            Total_Population_ISS: null,
            Urban_Population_ISS: null,
            Rural_Population_ISS: null,
            water_collection_method: null,
            remarks: null
          },
          ind_3_1_2_records: {
            reportID: null,
            rowID: null,
            hydrologicalBasin: null,
            year: null,
            Total_Pop_Coast_Hydro_Basin: null,
            Urban_Pop_Coast_Hydro_Basin: null,
            Rural_Pop_Coast_Hydro_Basin: null,
            Total_Pop_Coast_ISS: null,
            Urban_Pop_Coast_ISS: null,
            Rural_Pop_Coast_ISS: null,
            water_collection_method: null,
            remarks: null
          },
          ind_3_2_1_records: {
            reportID: null,
            rowID: null,
            year: null,
            totalPopulation: null,
            urbanPopulation: null,
            ruralPopulation: null,
            Urban_Population_SMSS: null,
            Rural_Population_SMSS: null,
            water_collection_method: null,
            remarks: null
          },
          ind_3_2_2_records: {
            reportID: null,
            rowID: null,
            hydrologicalBasin: null,
            year: null,
            Total_Pop_Coast_Hydro_Basin: null,
            Urban_Pop_Coast_Hydro_Basin: null,
            Rural_Pop_Coast_Hydro_Basin: null,
            Total_Pop_Coast_SMSS: null,
            Urban_Pop_Coast_SMSS: null,
            Rural_Pop_Coast_SMSS: null,
            water_collection_method: null,
            remarks: null
          },
          ind_4_1_1_records: {
            reportID: null,
            rowID: null,
            year: null,
            Volume_Collected_MWW: null,
            Volume_Treated_MWW: null,
            Fraction_Primary_Treatment: null,
            Fraction_Secondary_Treatment: null,
            Fraction_Tertiary_Treatment: null,
            Design_Capacity1: null,
            Design_Capacity2: null,
            Number_MWWTPs: null,
            water_collection_method: null,
            remarks: null
          },
          ind_4_1_2_records: {
            reportID: null,
            rowID: null,
            hydrologicalBasin: null,
            coastalAgglomeration: null,
            year: null,
            Volume_MWW_Collected_Hydro_Coast: null,
            Volume_MWW_Collected_Coast: null,
            Volume_Treated_MWW_Hydro_Coast: null,
            Volume_Treated_MWW_Coast: null,
            Fraction_Primary_Treatment: null,
            Fraction_Secondary_Treatment: null,
            Volume_Tertiary_Treatment: null,
            Design_Capacity_Coast1: null,
            Design_Capacity_Coast2: null,
            Number_Coast_MWWTPs: null,
            water_collection_method: null,
            remarks: null
          },
          ind_4_2_records: {
            reportID: null,
            rowID: null,
            year: null,
            Total_Volume_Direct_Reuse: null,
            Fraction_Primary_Treatment_Reuse: null,
            Fraction_Secondary_Treatment_Reuse: null,
            Fraction_Tertiary_Treatment_Reuse: null,
            activityName: null,
            Total_Volume_Direct_Reuse_Activity: null,
            water_collection_method: null,
            remarks: null
          },
          ind_4_3_records: {
            reportID: null,
            rowID: null,
            hydrologicalBasin: null,
            coastalAgglomeration: null,
            year: null,
            Total_Pop_Coast_Hydro_Basin: null,
            Total_Pop_more_2000_Inhabitants_Hydro_Coast: null,
            Total_Pop_more_2000_Inhabitants_Coast: null,
            Total_UWW_Generated_Hydro_Coast: null,
            Total_UWW_Generated_Coast: null,
            Total_Volume_Discharged_MWWTP_Hydro_Coast: null,
            Total_Volume_Discharged_MWWTP_Coast: null,
            Estimated_BOD_Load_Treat: null,
            Estimated_TN_Load_Treat: null,
            Estimated_TP_Load_Treat: null,
            Total_Volume_Untreated_WW_Hydro_Coast: null,
            BOD_Load_MWW_Untreated_Hydro_Coast: null,
            TN_Load_MWW_Untreated_Hydro_Coast: null,
            TP_Load_MWW_Untreated_Hydro_Coast: null,
            Total_BOD_Load_Hydro_Coast: null,
            TN_Load_Hydro_Coast: null,
            TP_Load_Hydro_Coast: null,
            water_collection_method: null,
            remarks: null
          },
          ind_5_1_1_records: {
            reportID: null,
            rowID: null,
            nationalStationID: null,
            nationalStationName: null,
            longitude: null,
            latitude: null,
            closestCoast: null,
            seaDepth: null,
            mixing: null,
            areaType: null,
            remarks: null
          },
          ind_5_1_2_records: {
            reportID: null,
            rowID: null,
            nationalStationID: null,
            samplingTime: null,
            sampleID: null,
            determinantNutrients: null,
            unitNutrientsSeawater: null,
            concentrationFlag: null,
            concentration: null,
            concentrationStatusUnit: null,
            sampleDepth: null,
            water_collection_method: null,
            remarks: null
          },
          ind_5_2_records: {
            reportID: null,
            rowID: null,
            bathingWaterName: null,
            shortBathingWaterName: null,
            bathingWaterID: null,
            Longitude_BW: null,
            Latitude_BW: null,
            startDate: null,
            endDate: null,
            bathingSamplingTime: null,
            bathingClassificationUNEPMAPCriteria: null,
            otherBathingClassificationUsed: null,
            oncentrationIE: null,
            concentrationEC: null,
            remarks: null
          }
        },
        currentCountry: null,
        jsonemptyinstance: {
          "H2020_WATER": {
            "@xmlns": "https://dd.info-rac.org/namespaces/29",
            "@xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
            "@xsi:schemaLocation": "https://dd.info-rac.org/namespaces/26  https://dd.info-rac.org/v2/dataset/29/schema-dst-29.xsd",
            "waterindicators": {
              "@xmlns": "https://dd.info-rac.org/namespaces/31",
              "Row": {
                reportID: null,
                countryCode: null,
                reportingYear: null,
              }
            },
            "ind_3_1_1_records": {
              "@xmlns": "https://dd.info-rac.org/namespaces/59",
              "Row": []
            },
            "ind_3_1_2_records": {
              "@xmlns": "https://dd.info-rac.org/namespaces/60",
              "Row": []
            },
            "ind_3_2_1_records": {
              "@xmlns": "https://dd.info-rac.org/namespaces/61",
              "Row": []
            },
            "ind_3_2_2_records": {
              "@xmlns": "https://dd.info-rac.org/namespaces/62",
              "Row": []
            },
            "ind_4_1_1_records": {
              "@xmlns": "https://dd.info-rac.org/namespaces/63",
              "Row": []
            },
            "ind_4_1_2_records": {
              "@xmlns": "https://dd.info-rac.org/namespaces/64",
              "Row": []
            },
            "ind_4_2_records": {
              "@xmlns": "https://dd.info-rac.org/namespaces/65",
              "Row": []
            },
            "ind_4_3_records": {
              "@xmlns": "https://dd.info-rac.org/namespaces/66",
              "Row": []
            },
            "ind_5_1_1_records": {
              "@xmlns": "https://dd.info-rac.org/namespaces/67",
              "Row": []
            },
            "ind_5_1_2_records": {
              "@xmlns": "https://dd.info-rac.org/namespaces/68",
              "Row": []
            },
            "ind_5_2_records": {
              "@xmlns": "https://dd.info-rac.org/namespaces/69",
              "Row": []
            }
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

        emptyInstance.H2020_WATER.waterindicators.Row.reportID = reportID
        emptyInstance.H2020_WATER.waterindicators.Row.countryCode = this.currentCountry
        emptyInstance.H2020_WATER.waterindicators.Row.reportingYear = 2020

        this.$store.dispatch('setDataLoading', true)

        this.storeTab1(data, emptyInstance, reportID)
        this.storeTab2(data, emptyInstance, reportID)
        this.storeTab3(data, emptyInstance, reportID)

        saveInstance(emptyInstance).then(r => {
          this.showAlert()
          this.$store.dispatch('setDataLoading', false)
        }).catch(error => {
          console.log(error)
          this.$store.dispatch('setDataLoading', false)
        })
      },

      storeTab1(data, emptyInstance, reportID) {
        const section = data.tabs.tab_1.form_fields

        section.ind_3_1_1_records.fields.forEach((row, row_index) => {
          const record = JSON.parse(JSON.stringify(this.structure.ind_3_1_1_records))
          record.reportID = reportID
          record.rowID = row_index
          record.year = row.year.selected
          record.totalPopulation = row.totalPopulation.selected
          record.urbanPopulation = row.urbanPopulation.selected
          record.ruralPopulation = row.ruralPopulation.selected
          record.Total_Population_ISS = row.Total_Population_ISS.selected
          record.Urban_Population_ISS = row.Urban_Population_ISS.selected
          record.Rural_Population_ISS = row.Rural_Population_ISS.selected
          record.water_collection_method = row.water_collection_method.selected
          record.remarks = row.remarks.selected
          emptyInstance.H2020_WATER.ind_3_1_1_records.Row.push(record)
        })

        section.ind_3_1_2_records.fields.forEach((row, row_index) => {
          const record = JSON.parse(JSON.stringify(this.structure.ind_3_1_2_records))
          record.reportID = reportID
          record.rowID = row_index
          record.hydrologicalBasin = row.hydrologicalBasin.selected
          record.year = row.year.selected
          record.Total_Pop_Coast_Hydro_Basin = row.Total_Pop_Coast_Hydro_Basin.selected
          record.Urban_Pop_Coast_Hydro_Basin = row.Urban_Pop_Coast_Hydro_Basin.selected
          record.Rural_Pop_Coast_Hydro_Basin = row.Rural_Pop_Coast_Hydro_Basin.selected
          record.Total_Pop_Coast_ISS = row.Total_Pop_Coast_ISS.selected
          record.Urban_Pop_Coast_ISS = row.Urban_Pop_Coast_ISS.selected
          record.Rural_Pop_Coast_ISS = row.Rural_Pop_Coast_ISS.selected
          record.water_collection_method = row.water_collection_method.selected
          record.remarks = row.remarks.selected
          emptyInstance.H2020_WATER.ind_3_1_2_records.Row.push(record)
        })

        section.ind_3_2_1_records.fields.forEach((row, row_index) => {
          const record = JSON.parse(JSON.stringify(this.structure.ind_3_2_1_records))
          record.reportID = reportID
          record.rowID = row_index
          record.year = row.year.selected
          record.totalPopulation = row.totalPopulation.selected
          record.urbanPopulation = row.urbanPopulation.selected
          record.ruralPopulation = row.ruralPopulation.selected
          record.Total_Population_SMSS = row.Total_Population_SMSS.selected
          record.Urban_Population_SMSS = row.Urban_Population_SMSS.selected
          record.Rural_Population_SMSS = row.Rural_Population_SMSS.selected
          record.water_collection_method = row.water_collection_method.selected
          record.remarks = row.remarks.selected
          emptyInstance.H2020_WATER.ind_3_2_1_records.Row.push(record)
        })

        section.ind_3_2_2_records.fields.forEach((row, row_index) => {
          const record = JSON.parse(JSON.stringify(this.structure.ind_3_2_2_records))
          record.reportID = reportID
          record.rowID = row_index
          record.hydrologicalBasin = row.hydrologicalBasin.selected
          record.year = row.year.selected
          record.Total_Pop_Coast_Hydro_Basin = row.Total_Pop_Coast_Hydro_Basin.selected
          record.Urban_Pop_Coast_Hydro_Basin = row.Urban_Pop_Coast_Hydro_Basin.selected
          record.Rural_Pop_Coast_Hydro_Basin = row.Rural_Pop_Coast_Hydro_Basin.selected
          record.Total_Pop_Coast_SMSS = row.Total_Pop_Coast_SMSS.selected
          record.Urban_Pop_Coast_SMSS = row.Urban_Pop_Coast_SMSS.selected
          record.Rural_Pop_Coast_SMSS = row.Rural_Pop_Coast_SMSS.selected
          record.water_collection_method = row.water_collection_method.selected
          record.remarks = row.remarks.selected
          emptyInstance.H2020_WATER.ind_3_2_2_records.Row.push(record)
        })
      },

      storeTab2(data, emptyInstance, reportID) {
        const section = data.tabs.tab_2.form_fields

        section.ind_4_1_1_records.fields.forEach((row, row_index) => {
          const record = JSON.parse(JSON.stringify(this.structure.ind_4_1_1_records))
          record.reportID = reportID
          record.rowID = row_index
          record.year = row.year.selected
          record.Volume_Collected_MWW = row.Volume_Collected_MWW.selected
          record.Volume_Treated_MWW = row.Volume_Treated_MWW.selected
          record.Fraction_Primary_Treatment = row.Fraction_Primary_Treatment.selected
          record.Fraction_Secondary_Treatment = row.Fraction_Secondary_Treatment.selected
          record.Fraction_Tertiary_Treatment = row.Fraction_Tertiary_Treatment.selected
          record.Design_Capacity1 = row.Design_Capacity1.selected
          record.Design_Capacity2 = row.Design_Capacity2.selected
          record.Number_MWWTPs = row.Number_MWWTPs.selected
          record.water_collection_method = row.water_collection_method.selected
          record.remarks = row.remarks.selected
          emptyInstance.H2020_WATER.ind_4_1_1_records.Row.push(record)
        })

        section.ind_4_1_2_records.fields.forEach((row, row_index) => {
          const record = JSON.parse(JSON.stringify(this.structure.ind_4_1_2_records))
          record.reportID = reportID
          record.rowID = row_index
          record.hydrologicalBasin = row.hydrologicalBasin.selected
          record.coastalAgglomeration = row.coastalAgglomeration.selected
          record.year = row.year.selected
          record.Volume_MWW_Collected_Hydro_Coast = row.Volume_MWW_Collected_Hydro_Coast.selected
          record.Volume_MWW_Collected_Coast = row.Volume_MWW_Collected_Coast.selected
          record.Volume_Treated_MWW_Hydro_Coast = row.Volume_Treated_MWW_Hydro_Coast.selected
          record.Volume_Treated_MWW_Coast = row.Volume_Treated_MWW_Coast.selected
          record.Fraction_Primary_Treatment = row.Fraction_Primary_Treatment.selected
          record.Fraction_Secondary_Treatment = row.Fraction_Secondary_Treatment.selected
          record.Volume_Tertiary_Treatment = row.Volume_Tertiary_Treatment.selected
          record.Design_Capacity_Coast1 = row.Design_Capacity_Coast1.selected
          record.Design_Capacity_Coast2 = row.Design_Capacity_Coast2.selected
          record.Number_Coast_MWWTPs = row.Number_Coast_MWWTPs.selected
          record.water_collection_method = row.water_collection_method.selected
          record.remarks = row.remarks.selected
          emptyInstance.H2020_WATER.ind_4_1_2_records.Row.push(record)
        })

        section.ind_4_2_records.fields.forEach((row, row_index) => {
          const record = JSON.parse(JSON.stringify(this.structure.ind_4_2_records))
          record.reportID = reportID
          record.rowID = row_index
          record.year = row.year.selected
          record.Total_Volume_Direct_Reuse = row.Total_Volume_Direct_Reuse.selected
          record.Fraction_Primary_Treatment_Reuse = row.Fraction_Primary_Treatment_Reuse.selected
          record.Fraction_Secondary_Treatment_Reuse = row.Fraction_Secondary_Treatment_Reuse.selected
          record.Fraction_Tertiary_Treatment_Reuse = row.Fraction_Tertiary_Treatment_Reuse.selected
          record.activityName = row.activityName.selected
          record.Total_Volume_Direct_Reuse_Activity = row.Total_Volume_Direct_Reuse_Activity.selected
          record.water_collection_method = row.water_collection_method.selected
          record.remarks = row.remarks.selected
          emptyInstance.H2020_WATER.ind_4_2_records.Row.push(record)
        })

        section.ind_4_3_records.fields.forEach((row, row_index) => {
          const record = JSON.parse(JSON.stringify(this.structure.ind_4_3_records))
          record.reportID = reportID
          record.rowID = row_index
          record.hydrologicalBasin = row.hydrologicalBasin.selected
          record.coastalAgglomeration = row.coastalAgglomeration.selected
          record.year = row.year.selected
          record.Total_Pop_Coast_Hydro_Basin = row.Total_Pop_Coast_Hydro_Basin.selected
          record.Total_Pop_more_2000_Inhabitants_Hydro_Coast = row.Total_Pop_more_2000_Inhabitants_Hydro_Coast.selected
          record.Total_Pop_more_2000_Inhabitants_Coast = row.Total_Pop_more_2000_Inhabitants_Coast.selected
          record.Total_UWW_Generated_Hydro_Coast = row.Total_UWW_Generated_Hydro_Coast.selected
          record.Total_UWW_Generated_Coast = row.Total_UWW_Generated_Coast.selected
          record.Total_Volume_Discharged_MWWTP_Hydro_Coast = row.Total_Volume_Discharged_MWWTP_Hydro_Coast.selected
          record.Total_Volume_Discharged_MWWTP_Coast = row.Total_Volume_Discharged_MWWTP_Coast.selected
          record.Estimated_BOD_Load_Treat = row.Estimated_BOD_Load_Treat.selected
          record.Estimated_TN_Load_Treat = row.Estimated_TN_Load_Treat.selected
          record.Estimated_TP_Load_Treat = row.Estimated_TP_Load_Treat.selected
          record.Total_Volume_Untreated_WW_Hydro_Coast = row.Total_Volume_Untreated_WW_Hydro_Coast.selected
          record.BOD_Load_MWW_Untreated_Hydro_Coast = row.BOD_Load_MWW_Untreated_Hydro_Coast.selected
          record.TN_Load_MWW_Untreated_Hydro_Coast = row.TN_Load_MWW_Untreated_Hydro_Coast.selected
          record.TP_Load_MWW_Untreated_Hydro_Coast = row.TP_Load_MWW_Untreated_Hydro_Coast.selected
          record.Total_BOD_Load_Hydro_Coast = row.Total_BOD_Load_Hydro_Coast.selected
          record.TN_Load_Hydro_Coast = row.TN_Load_Hydro_Coast.selected
          record.TP_Load_Hydro_Coast = row.TP_Load_Hydro_Coast.selected
          record.water_collection_method = row.water_collection_method.selected
          record.remarks = row.remarks.selected
          emptyInstance.H2020_WATER.ind_4_3_records.Row.push(record)
        })
      },

      storeTab3(data, emptyInstance, reportID) {
        const section = data.tabs.tab_3.form_fields

        section.ind_5_1_1_records.fields.forEach((row, row_index) => {
          const record = JSON.parse(JSON.stringify(this.structure.ind_5_1_1_records))
          record.reportID = reportID
          record.rowID = row_index
          record.nationalStationID = row.nationalStationID.selected
          record.nationalStationName = row.nationalStationName.selected
          record.longitude = row.longitude.selected
          record.latitude = row.latitude.selected
          record.closestCoast = row.closestCoast.selected
          record.seaDepth = row.seaDepth.selected
          record.mixing = row.mixing.selected
          record.areaType = row.areaType.selected
          record.remarks = row.remarks.selected
          emptyInstance.H2020_WATER.ind_5_1_1_records.Row.push(record)
        })

        section.ind_5_1_2_records.fields.forEach((row, row_index) => {
          const record = JSON.parse(JSON.stringify(this.structure.ind_5_1_2_records))
          record.reportID = reportID
          record.rowID = row_index
          record.nationalStationID = row.nationalStationID.selected
          record.samplingTime = row.samplingTime.selected
          record.sampleID = row.sampleID.selected
          record.determinantNutrients = row.determinantNutrients.selected
          record.unitNutrientsSeawater = row.unitNutrientsSeawater.selected
          record.concentrationFlag = row.concentrationFlag.selected
          record.concentration = row.concentration.selected
          record.concentrationStatusUnit = row.concentrationStatusUnit.selected
          record.sampleDepth = row.sampleDepth.selected
          record.water_collection_method = row.water_collection_method.selected
          record.remarks = row.remarks.selected
          emptyInstance.H2020_WATER.ind_5_1_2_records.Row.push(record)
        })

      section.ind_5_2_records.fields.forEach((row, row_index) => {
          const record = JSON.parse(JSON.stringify(this.structure.ind_5_2_records))
          record.reportID = reportID
          record.rowID = row_index
          record.bathingWaterName = row.bathingWaterName.selected
          record.shortBathingWaterName = row.shortBathingWaterName.selected
          record.bathingWaterID = row.bathingWaterID.selected
          record.Longitude_BW = row.Longitude_BW.selected
          record.Latitude_BW = row.Latitude_BW.selected
          record.startDate = row.startDate.selected
          record.endDate = row.endDate.selected
          record.bathingSamplingTime = row.bathingSamplingTime.selected
          record.bathingClassificationUNEPMAPCriteria = row.bathingClassificationUNEPMAPCriteria.selected
          record.otherBathingClassificationUsed = row.otherBathingClassificationUsed.selected
          record.concentrationIE = row.concentrationIE.selected
          record.concentrationEC = row.concentrationEC.selected
          record.remarks = row.remarks.selected
          emptyInstance.H2020_WATER.ind_5_2_records.Row.push(record)
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
