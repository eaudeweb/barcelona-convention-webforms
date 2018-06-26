<template>
	<b-container style="position: relative">
    <center><h1 class="mb-3 mt-2">Dumping Protocol</h1></center>
    <center><h5><small class="text-muted">IMPLEMENTATION OF THE PROTOCOL FOR THE PREVENTION AND ELIMINATION OF POLLUTION OF THE MEDITERRANEAN SEA BY
      DUMPING FROM SHIPS AND AIRCRAFTS OR INCINERATION AT SEA (DUMPING PROTOCOL)</small></h5></center>
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
              <dumpingatsea tabId="2" :info.sync="form.tab_2"></dumpingatsea>
            </b-tab>
          <b-tab :title="doTitle(form.tab_3.label)" >
              <wastequantity tabId="3"  :info.sync="form.tab_3"></wastequantity>
            </b-tab>
            <b-tab :title="doTitle(form.tab_4.label)" >
              <monitoring tabId="4" :info.sync="form.tab_4"></monitoring>
            </b-tab>
            <b-tab :title="doTitle(form.tab_5.label)" >
              <placement tabId="5" :info.sync="form.tab_5"></placement>
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

import {getInstance, getCountry} from '../api.js';


import Countrytab from './Country.vue'
import LRMeasures from './LRMeasures.vue'
import Dummy from './Dummy.vue'
import Validation from './Validation.vue'
import DumpingAtSea from './DumpingAtSea.vue'
import QuantitiesOfWaste from './QuantitiesOfWaste.vue'
import Monitoring from './Monitoring.vue'
import Placement from './Placement.vue'

import FormSubmit from './FormSubmit.vue'
import form from '../assets/form.js'


export default {

  name: 'Webform',
  components: {
    countrytab: Countrytab,
    lrmeasures: LRMeasures,
    dummy: Dummy,
    monitoring: Monitoring,
  	formsubmit: FormSubmit,
    validation: Validation,
    dumpingatsea: DumpingAtSea,
    wastequantity: QuantitiesOfWaste,
    monitoring: Monitoring,
    placement: Placement,
  },

  data () {
    return {
    	visibleTab: false,
      form: {},
      validation_data: [],
      button_text: 'Hide list',
      country: '',
      prefilled: false,
    }
  },

  created() {
    this.form = form;
      // getInstance().then((response) => {
      //   let instance_data = response.data
      //   getCountry().then((response) => {
      //       this.country = response.data
      //       this.prefill(instance_data)
      //     })
      // })
  },

  methods: {

    prefill(data) {
      for(let table in this.form.country.tables) {
          for (let value of this.form.country.tables[table]) {
            value.selected = data.BC_DMP.contacting_party[value.name]
            if(value.name === 'partyname') {
              value.selected = this.country;
            }
          }
      }

    },

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
