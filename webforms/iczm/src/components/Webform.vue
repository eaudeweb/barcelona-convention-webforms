<template>
	<b-container style="position: relative">
    <center><h1 class="mb-3 mt-2">ICZM Questionnaire</h1></center>
    <center><h5><small class="text-muted">Integrated Coastal Zone Management in the Mediterranean</small></h5></center>
      <br><br><br>
      <b-card no-body>
        <b-form validated novalidate @submit="onSubmit">
          <b-tabs v-if="prefilled" card>
            <b-tab title="I - Reporting party" active>
              <countrytab tabId="0" :info.sync="form.country"></countrytab>
            </b-tab>
            <b-tab :title="doTitle(form.tab_2.label)" >
              <tab2 tabId="1" :info.sync="form.tab_2"></tab2>
            </b-tab>
            <b-tab :title="doTitle(form.tab_3.label)" >
              <tab3 tabId="2" :info.sync="form.tab_3"></tab3>
            </b-tab>
            <b-tab :title="doTitle(form.tab_4.label)" >
              <tab4 tabId="3" :info.sync="form.tab_4"></tab4>
            </b-tab>
            <b-tab :title="doTitle(form.tab_5.label)" >
              <tab5 tabId="4" :info.sync="form.tab_5"></tab5>
            </b-tab>
            <b-tab :title="doTitle(form.tab_6.label)" >
              <tab6 tabId="5" :info.sync="form.tab_6"></tab6>
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
import Tab2 from './Tab2.vue'
import Tab3 from './Tab3.vue'
import Tab4 from './Tab4.vue'
import Tab5 from './Tab5.vue'
import Tab6 from './Tab6.vue'

import FormSubmit from './FormSubmit.vue'
import form from '../assets/form.js'


export default {

  name: 'Webform',
  components: {
    countrytab: Countrytab,
  	formsubmit: FormSubmit,
    tab2: Tab2,
    tab3: Tab3,
    tab4: Tab4,
    tab5: Tab5,
    tab6: Tab6,
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
            value.selected = data.BC_ICZM.contacting_party[value.name];
            if(value.name === 'partyname') {
              value.selected = this.country;
            }
          }
      }

      for(let tab in this.form) {
        if(tab != 'country') {
          if (data.BC_ICZM.data) {
            if (data.BC_ICZM.data.Row) {
              for(let article of this.form[tab].data.articles) {
                for(let article_item of article.article_items) {
                  for(let prefill_item in data.BC_ICZM.data.Row)
                  if(article_item.name === prefill_item) {
                    article_item.selected = data.BC_ICZM.data.Row[article_item.name]
                  }
                }
              }
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
