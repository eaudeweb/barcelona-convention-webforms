<template>
	<b-container style="position: relative">
    <center><h1 class="mb-3 mt-2">Barcelona Convention</h1></center>
    <center><h5><small class="subtitle text-muted">Implementation of the Barcelona Convention for the Protection of the Marine Environment and the Coastal Region of the Mediterranean (Barcelona Convention)</small></h5></center>
    <b-card v-if="prefilled" no-body>
      <b-form validated novalidate @submit="onSubmit">
        <b-tabs card>
          <b-tab title="Reporting party" active>
            <countrytab tabId="0" :info.sync="form.country"></countrytab>
          </b-tab>
          <b-tab :title="doTitle(form.tab_1.label)">
            <bilateralagreement tabId="1" :info.sync="form.tab_1"></bilateralagreement>
          </b-tab>
          <b-tab :title="doTitle(form.tab_2.label)" >
            <lrmeasures tabId="2" :info.sync="form.tab_2"></lrmeasures>
          </b-tab>
          <b-tab :title="doTitle(form.tab_3.label)" >
            <polmeasures tabId="3"  :info.sync="form.tab_3"></polmeasures>
          </b-tab>
          <b-tab :title="doTitle(form.tab_4.label)" >
            <infoaccess tabId="4" :info.sync="form.tab_4"></infoaccess>
          </b-tab>
        </b-tabs>
        <formsubmit :country="country" :info.sync="form"></formsubmit>
      </b-form>
    </b-card>
    <div v-if="!prefilled" class="spinner">
      <div class="loader"></div>
    </div>

    </b-container>
</template>

<script>

import {getInstance, getCountry} from '../api.js';
import BilateralAgreement from './BilateralAgreement.vue'
import LRMeasures from './LRMeasures.vue'
import PolMeasures from './PolMeasures.vue'
import InfoAccess from './InfoAccess.vue'
import FormSubmit from './FormSubmit.vue'
import Countrytab from './Country.vue'
import {slugify} from '../utils.js';

import form from '../assets/form.js'


export default {

  name: 'Webform',
  components: {
  	bilateralagreement: BilateralAgreement,
  	formsubmit: FormSubmit,
    lrmeasures: LRMeasures,
    polmeasures: PolMeasures,
    infoaccess: InfoAccess,
    countrytab: Countrytab
  },

  data () {
    return {
      form: {},
      prefilled: false,
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
    slugifyTitle(text) {
      return slugify(text)
    },

    prefill(data) {
      let agremeents = [];

      for (let table in this.form.country.tables) {
        for (let value of this.form.country.tables[table]) {
          value.selected = data.BC_BCRS.contacting_party[value.name]
          if (value.name === 'partyname') {
            value.selected = this.country;
          }
        }
      }

      if (data.BC_BCRS.bilateralmultilateralagreementsdata) {
        if (data.BC_BCRS.bilateralmultilateralagreementsdata.Row.length === undefined) {
          agremeents.push({
            name: data.BC_BCRS.bilateralmultilateralagreementsdata.Row.agreementname,
            reference: data.BC_BCRS.bilateralmultilateralagreementsdata.Row.website_other_reference
          })
          this.form.tab_1.data.question.agreements = agremeents
        }
        else if (data.BC_BCRS.bilateralmultilateralagreementsdata.Row.length > 1) {
          for (let agreement of data.BC_BCRS.bilateralmultilateralagreementsdata.Row) {
            agremeents.push({
              name: agreement.agreementname,
              reference: agreement.website_other_reference
            })
          }
          this.form.tab_1.data.question.agreements = agremeents
        }
      }

      if (data.BC_BCRS.measuresdata.Row.length) {
        for (let agreement of data.BC_BCRS.measuresdata.Row) {
          let collection_id = agreement.collection_id
          let parent_collection_id = agreement.parent_collection_id
          for (let tab in this.form) {
            if (tab != 'tab_1' && tab != 'country') {
              for (let article of this.form[tab].data.articles) {
                for (let article_item of article.article_items) {
                  if (article_item.collection_id === collection_id) {
                    for (let item of article_item.items) {
                      if (item.type === 'changes') {
                        item.selected = agreement.changes
                      }
                      else if (item.type === 'status') {
                        item.selected = agreement.status
                        item.comments = agreement.status_comments
                      }
                      else {
                        item.comments = agreement.difficulties_comments;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }

      if (data.BC_BCRS.measuredata_difficulty) {
        if (data.BC_BCRS.measuredata_difficulty.Row.length) {
          for (let agreement of data.BC_BCRS.measuredata_difficulty.Row) {
            let collection_id = agreement.collection_id
            let difficulty = agreement.difficulty
            for (let tab in this.form) {
              if (tab != 'tab_1' && tab != 'country') {
                for (let article of this.form[tab].data.articles) {
                  for (let article_item of article.article_items) {
                    if (article_item.collection_id === collection_id) {
                      for (let item of article_item.items) {
                        if (item.type === 'difficulties') {
                          item.selected.push(difficulty)
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
        else {
          let agreement = data.BC_BCRS.measuredata_difficulty.Row
          let collection_id = agreement.collection_id
          let difficulty = agreement.difficulty
          for (let tab in this.form) {
            if (tab != 'tab_1' && tab != 'country') {
              for (let article of this.form[tab].data.articles) {
                for (let article_item of article.article_items) {
                  if (article_item.collection_id === collection_id) {
                    for (let item of article_item.items) {
                      if (item.type === 'difficulties') {
                        item.selected.push(difficulty)
                      }
                    }
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

<style lang="css">
.subtitle {
  max-width: 488px;
  margin: auto;
  display: block;
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
