<template>
	<b-container style="position: relative">
    <center><h1 class="mb-3 mt-2">Hazardous Wastes Protocol</h1></center>
    <center><h5><small class="text-muted">IMPLEMENTATION OF THE PROTOCOL ON THE PREVENTION OF POLLUTION OF THE MEDITERRANEAN SEA BY
      TRANSBOUNDARY MOVEMENTS OF HAZARDOUS WASTES AND THEIR DISPOSAL (HAZARDOUS WASTES PROTOCOL)</small></h5></center>
      <br><br><br>
      <b-card no-body>
        <b-form validated novalidate @submit="onSubmit">
          <b-tabs v-if="prefilled" card>
            <b-tab title="Reporting party" active>
              <countrytab tabId="0" :info.sync="form.country"></countrytab>
            </b-tab>
            <b-tab :title="doTitle(form.tab_1.label)" >
              <tab1 tabId="1" :info.sync="form.tab_1"></tab1>
            </b-tab>
          </b-tabs>
        </b-form>
   			<formsubmit :country.sync="country" :info.sync="form"></formsubmit>
  
      </b-card>
      <div v-if="!prefilled" class="spinner">
        <div class="loader"></div>
      </div>

    </b-container>
</template>

<script>


import {getInstance, getCountry} from '../api.js';

import Countrytab from './Country.vue'
import Tab1 from './Tab1.vue'

import FormSubmit from './FormSubmit.vue'
import form from '../assets/form.js'


export default {

  name: 'Webform',
  components: {
    countrytab: Countrytab,
  	formsubmit: FormSubmit,
    tab1: Tab1
  },

  data () {
    return {
    	visibleTab: false,
      form: {},
      button_text: 'Hide list',
      country: '',
      prefilled: false,
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


    prefill(data) {
      for(let table in this.form.country.tables) {
          for (let value of this.form.country.tables[table]) {
            value.selected = data.BC_HWP.contacting_party[value.name]
            if(value.name === 'partyname') {
              value.selected = this.country;
            }
          }
      }



    if (data.BC_HWP.enf_measures) {
      if (data.BC_HWP.enf_measures.Row) {
          for (let article of this.form.tab_1.data.articles) {
            for(let article_items of article.article_items) {
              article_items.selected = data.BC_HWP.enf_measures.Row[article_items.name]
            }
          }
      }
    }



    this.prefilled = true;

    },

    doTitle(title) {
      return title.split(":")[0]
    },

    onSubmit (evt) {
       evt.preventDefault();
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
.spinner {
    z-index: 1;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0,0,0,0.2);
    display: flex;
    justify-content: center;
    align-items: center;
}

.loader {
  border: 16px solid #f3f3f3;
  border-radius: 50%;
   border-top: 16px solid blue;
   border-right: 16px solid green;
   border-bottom: 16px solid red;
   border-left: 16px solid pink;
  width: 120px;
  height: 120px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;
}

/* Safari */
@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

</style>
