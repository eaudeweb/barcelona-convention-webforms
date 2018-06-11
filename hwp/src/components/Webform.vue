<template>
	<b-container style="position: relative">
    <center><h1 class="mb-3 mt-2">Hazardous Wastes Protocol</h1></center>
    <center><h5><small class="text-muted">IMPLEMENTATION OF THE PROTOCOL ON THE PREVENTION OF POLLUTION OF THE MEDITERRANEAN SEA BY
      TRANSBOUNDARY MOVEMENTS OF HAZARDOUS WASTES AND THEIR DISPOSAL (HAZARDOUS WASTES PROTOCOL)</small></h5></center>
      <br><br><br>
      <b-card no-body>
        <b-form validated novalidate @submit="onSubmit">
          <b-tabs card>
            <b-tab title="Reporting party" active>
              <countrytab tabId="0" :info.sync="form.country"></countrytab>
            </b-tab>
            <b-tab :title="doTitle(form.tab_1.label)">
     			    <lrmeasures tabId="1" :info.sync="form.tab_1"></lrmeasures>
            </b-tab>
            <b-tab :title="doTitle(form.tab_2.label)" >
              <waste tabId="2" :info.sync="form.tab_2"></waste>
            </b-tab>
            <b-tab :title="doTitle(form.tab_3.label)" >
              <trwastes tabId="3"  :info.sync="form.tab_3"></trwastes>
            </b-tab>
            <b-tab :title="doTitle(form.tab_4.label)" >
              <accidents tabId="2" :info.sync="form.tab_4"></accidents>
            </b-tab>
            <b-tab :title="doTitle(form.tab_5.label)" >
              <enfmeasures tabId="2" :info.sync="form.tab_5"></enfmeasures>
            </b-tab>
          </b-tabs>
        </b-form>
   			<formsubmit v-on:validationDone="getValidationData($event)" :info.sync="form"></formsubmit>
        <div  v-if="validation_data.length" ref="validationContainer" class="validation">
                  <b-btn @click="toggleValidationContainer" class="validation-toggle" variant="default">{{button_text}}</b-btn>
                  <validation :validationData="validation_data"></validation>
          </div>
      </b-card>

    </b-container>
</template>

<script>

import {getCompanyData} from '../api.js';

import Countrytab from './Country.vue'
import LRMeasures from './LRMeasures.vue'
import Dummy from './Dummy.vue'
import Validation from './Validation.vue'
import Wastes from './HazardousWastesGeneration.vue'
import TransWastes from './TransboundaryWastesMovements.vue'
import Accidents from './Accidents.vue'
import ENFMeasures from './ENFMeasures.vue'



import FormSubmit from './FormSubmit.vue'
import form from '../assets/form.js'


export default {

  name: 'Webform',
  components: {
    countrytab: Countrytab,
    lrmeasures: LRMeasures,
    dummy: Dummy,
  	formsubmit: FormSubmit,
    validation: Validation,
    waste: Wastes,
    trwastes: TransWastes,
    accidents: Accidents,
    enfmeasures: ENFMeasures
  },

  data () {
    return {
    	visibleTab: false,
      form: {},
      validation_data: [],
      button_text: 'Hide list',
      country: '',
    }
  },

  created() {
    this.form = form;
  	// getCompanyData().then(response => {
   //    console.log(response.data)
   //    this.form.organization = response.data
  	// })
  },

  methods: {
    getValidationData(data) {
      this.validation_data = data
    },

    doTitle(title) {
      return title.split(":")[0]
    },

    onSubmit (evt) {
       evt.preventDefault();
    },
    toggleValidationContainer(){
      if(this.button_text === 'Hide list') this.button_text = 'Show List'
        else this.button_text = 'Hide list'
      this.$refs.validationContainer.classList.toggle('closed')
    },
  },

}
</script>

<style lang="css" scoped>
.subtitle {
  max-width: 488px;margin: auto;display: block;
}

.container {
  max-width: 700px;
}

.validation {
  position: fixed;
  right: 0;
  transform:translateX(0);
  width: 300px;
  top: 0;
  background: white;
  border: 1px solid #aaa;
      padding: 1rem;
    box-shadow: 1px 1px 3px #aaa;
    z-index: 1;
  transition: all 300ms;
}

.validation.closed {
  transform: translateX(100%);
}

.validation-toggle {
      position: absolute;
    right: 100%;
    top: -1px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}
</style>
