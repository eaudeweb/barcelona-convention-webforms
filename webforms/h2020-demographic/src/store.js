import Vue from 'vue'
import Vuex from 'vuex'
import { getCountry, getFormData } from './api'
import getForm from '@/assets/form'
import demographicData from '@/assets/demographicData'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
      country: null,
      form: null,
      formData: {},
      dataLoading: false
    },

    getters: {
      getCurrentCountryState: state => {
      return state.country
    }
  },

  actions: {
    getCurrentCountry(context) {
      getCountry().then(r => {
        console.log('got Country', r.data)
        context.commit('addCurrentCountry', r.data)
        context.dispatch('getCurrentFormData', { country: r.data }).then((formData) => {
          context.commit('initiateForm', formData)
        })
    })
  },

  getCurrentFormData(context, { country }) {
    return new Promise((resolve, reject) => {
      const fieldsArray = []


      const promiseList = fieldsArray.map((field, index) => {
        const url = process.env.NODE_ENV === 'production' ? `${country}_${field}.json` : `${field}/${country}_${field}.json`
        return getFormData(url).catch(error => {
          if(field === 'speciesB') {
            const new_url = process.env.NODE_ENV === 'production' ? 'speciesBall.json' : `${field}/speciesBall.json`
            return getFormData(new_url)
          } else {
            return []
          }
      });
  })

    return Promise.all(promiseList).then(function (values) {
      fieldsArray.forEach((field, index) => {
        context.state.formData[field] = values[index].data || []
      })
      resolve(context.state.formData)
    });
  });
  },

  setDataLoading({ commit }, value) {
    commit('setDataLoadingValue', {value})
  }
},

  mutations: {
    addCurrentCountry(state, data) {
      state.country = data
    },
    initiateForm(state, data) {
      state.form = getForm(state.country, data)
    },
    addFormData(state, { field, data }) {
      state.formData[field] = data
    },
    removeDemographicDataRow(state, {row_index}){
      state.form.tabs.tab_1.form_fields.demographicdataset_records.fields.splice(row_index, 1)
    },
    addDemographicDataRow(state) {
      state.form.tabs.tab_1.form_fields.demographicdataset_records.fields.push(demographicData())
    },

    setDataLoadingValue(state, {value}) {
      state.dataLoading = value;
    }
  }
})
