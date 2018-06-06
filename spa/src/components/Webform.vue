<template>
	<b-container style="position: relative">
    <center><h1 class="mb-3 mt-2">SPA and BD Protocol</h1></center>
    <center><h5 style="margin-bottom:3rem;" ><small class="text-muted">IMPLEMENTATION OF THE PROTOCOL FOR THE SPECIALLY PROTECTED AREAS AND BIODIVERSITY </small></h5></center>
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
              <spa tabId="2" :info.sync="form.tab_2"></spa>
            </b-tab>
             <b-tab :title="doTitle(form.tab_3.label)" >
              <spamis tabId="3" :info.sync="form.tab_3"></spamis>
            </b-tab>
            <b-tab :title="doTitle(form.tab_4.label)" >
              <endangered tabId="4"  :info.sync="form.tab_4"></endangered>
            </b-tab>
            <b-tab :title="doTitle(form.tab_5.label)" >
              <monitoring tabId="5" :info.sync="form.tab_5"></monitoring>
            </b-tab>
            <b-tab :title="doTitle(form.tab_6.label)" >
              <enfmeasures tabId="6" :info.sync="form.tab_6"></enfmeasures>
            </b-tab>
            <b-tab :title="doTitle(form.tab_7.label)" >
              <raps tabId="7" :info.sync="form.tab_7"></raps>
            </b-tab>
          </b-tabs>
        </b-form>
        <formsubmit :country.sync="country" :info.sync="form"></formsubmit>

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
import Spa from './Spa.vue'
import EndAndThSp from './EndAndThSp.vue'

import RAPs from './RAPs.vue'
import SPAMIs from './SPAMIs.vue'
import Monitoring from './Monitoring.vue'
import ENFMeasures from './ENFMeasures.vue'
import Validation from './Validation.vue'


import FormSubmit from './FormSubmit.vue'
import form from '../assets/form.js'


export default {

  name: 'Webform',
  components: {
    countrytab: Countrytab,
    lrmeasures: LRMeasures,
    enfmeasures: ENFMeasures,
    spa: Spa,
    spamis: SPAMIs,
    raps: RAPs,
    monitoring: Monitoring,
    endangered: EndAndThSp,
  	formsubmit: FormSubmit,
    validation: Validation
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
    getInstance().then((response) => {
      let instance_data = response.data
      getCountry().then((response) => {
          this.country = response.data
          this.prefill(instance_data)
        })
    })

  },

  methods: {
    getValidationData(data) {
      this.validation_data = data
    },

    prefill(data) {
     for(let table in this.form.country.tables) {
          for (let value of this.form.country.tables[table]) {
            value.selected = data.BC_SPA.contacting_party[value.name]
            if(value.name === 'partyname') {
              value.selected = this.country;
            }
          }
      }
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
