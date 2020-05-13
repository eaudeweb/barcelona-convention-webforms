<template>
  <b-container fluid class="main-layout">
    <center><h1 class="mb-3 mt-2">H2020 - Demographic dataset</h1></center>
    <center><h5><small class="text-muted">Indicators relevant for demographic dataset</small></h5></center>
    <h5 class="text-center" v-if="isie" style="color:red"><small>Please do not use Internet Explorer for this application unless there is no alternative. We recommend any other browser.</small></h5>
      <br><br>
    <div v-if="prefilled && $store.state.form">
      <FormSubmit :form="$store.state.form" :country="$store.state.country"></FormSubmit>
      <b-card no-body>
          <b-tabs card>
            <b-tab title="Reporting party" active>
              <countrytab :data="$store.state.form.tabs.tab_0"></countrytab>
            </b-tab>
            <b-tab title="Demographic dataset" >
              <tab1 :data="$store.state.form.tabs.tab_1"></tab1>
            </b-tab>
          </b-tabs>
      </b-card>
    </div>
    <div v-if="!prefilled || $store.state.dataLoading" class="spinner-modal">
      <div class="spinner-modal-content">
        <div class="triple-spinner" />
      </div>
    </div>

    </b-container>
</template>

<script>

import Countrytab from './Country.vue'
import Tab1 from './Tab1.vue'
import demographicDataStructure from '@/assets/demographicData'

import FormSubmit from './FormSubmit.vue'
import {getInstance, getCountry} from '../api.js';

export default {
  components: {
    Countrytab,
    Tab1,
    FormSubmit
  },

  props: {

  },

  data() {
    return {
      prefilled: false,
      isie: false
    }
  },

  beforeCreate() {
    this.$store.dispatch('getCurrentCountry')
  },

  created() {
    if(navigator.userAgent.indexOf('MSIE')!==-1
      || navigator.appVersion.indexOf('Trident/') > -1){
      this.isie=true
    }
  },

  computed: {
    country() {
      return this.$store.getters.getCurrentCountryState
    },
  },

  methods: {

    sanitizeSection(data, prefillData) {
      let section = data.H2020_DEM[prefillData].Row
      if(!section)
        section = []
      if(section && !Array.isArray(section))
        section = [section]
      return section
    },

    getPrefillData(){
      getInstance().then((response) => {
        // console.log(JSON.stringify(response.data))
        this.prefill(response.data);
      })
    },

    prefill(data) {
      if(data.H2020_DEM.noPrefillData) {
        this.prefilled = true
        return
      }
      const form = this.$store.state.form
      this.prefillTab1(data, form)
      this.prefilled = true
    },

    prefillTab1(data, form) {
      const section = form.tabs.tab_1.form_fields

      const demographicData = this.sanitizeSection(data, 'demographicdataset_records')
      const demographicDestination = section.demographicdataset_records.fields

      demographicData.forEach((record, index) => {
        const recordEmpty = demographicDataStructure(record)

        if(index === 0) {
          demographicDestination.splice(0,1)
        }
        demographicDestination.push(recordEmpty)
      })

    }
  },
  watch: {
    '$store.state.form': {
      handler(new_val, old_val) {
        if (old_val === null && new_val != old_val) {
          this.getPrefillData()
        }
      },
    }
  }
}
</script>

<style lang="css" scoped>
.spinner-modal {
  position: fixed;
  z-index: 10;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.7);
}

.spinner-modal-content {
  position: relative;
  top: 50%;
  left: 50%;
  width: 50%;
  transform: translate(-50%, -50%);
}

.triple-spinner {
  display: block;
  position: relative;
  top: 0;
  left: 0;
  width: 125px;
  height: 125px;
  margin: 0 auto;
  border-radius: 50%;
  border: 4px solid transparent;
  border-top: 4px solid #FF5722;
  -webkit-animation: spin 2s linear infinite;
  animation: spin 2s linear infinite;
}

.triple-spinner::before,
.triple-spinner::after {
  content: "";
  position: absolute;
  border-radius: 50%;
  border: 4px solid transparent;
}
.triple-spinner::before {
  top: 5px;
  left: 5px;
  right: 5px;
  bottom: 5px;
  border-top-color: #FF9800;
  -webkit-animation: spin 3s linear infinite;
  animation: spin 3.5s linear infinite;
}
.triple-spinner::after {
  top: 15px;
  left: 15px;
  right: 15px;
  bottom: 15px;
  border-top-color: #FFC107;
  -webkit-animation: spin 1.5s linear infinite;
  animation: spin 1.75s linear infinite;
}

@-webkit-keyframes spin {
  from {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}


@keyframes spin {
  from {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>
