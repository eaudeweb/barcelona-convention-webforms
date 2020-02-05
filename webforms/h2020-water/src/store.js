import Vue from 'vue'
import Vuex from 'vuex'
import {getCountry, getFormData} from './api'
import getForm from '@/assets/form'
import ind_3_1_1_records_structure from '@/assets/ind_3_1_1_records_structure'
import ind_3_1_2_records_structure from '@/assets/ind_3_1_2_records_structure'
import ind_3_2_1_records_structure from '@/assets/ind_3_2_1_records_structure'
import ind_3_2_2_records_structure from '@/assets/ind_3_2_2_records_structure'
import ind_4_1_1_records_structure from '@/assets/ind_4_1_1_records_structure'
import ind_4_1_2_records_structure from '@/assets/ind_4_1_2_records_structure'
import ind_4_2_records_structure from '@/assets/ind_4_2_records_structure'
import ind_4_3_records_structure from '@/assets/ind_4_3_records_structure'
import ind_5_1_1_records_structure from '@/assets/ind_5_1_1_records_structure'
import ind_5_1_2_records_structure from '@/assets/ind_5_1_2_records_structure'
import ind_5_2_records_structure from '@/assets/ind_5_2_records_structure'

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
        context.dispatch('getCurrentFormData', {country: r.data}).then((formData) => {
          context.commit('initiateForm', formData)
        })
      })
    },

    getCurrentFormData(context, {country}) {
      return new Promise((resolve, reject) => {
        const fieldsArray = ['adminRegions']

        const promiseList = fieldsArray.map((field, index) => {
          const url = `${country}_${field}.json`
          return getFormData(url).catch(error => {
            if (field === 'adminRegions') {
              const new_url = 'allAdministrativeRegions.json'
              return getFormData(new_url)
            } else {
              return []
            }
          });
        })

        return Promise.all(promiseList).then(function (values) {
          fieldsArray.forEach((field, index) => {
            console.log(context.state.formData)
            context.state.formData[field] = values[index].data || []
          })
          resolve(context.state.formData)
        });
      });
    },

    setDataLoading({commit}, value) {
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
    addFormData(state, {field, data}) {
      state.formData[field] = data
    },
    remove_ind_3_1_1_records_DataRow(state, {row_index}) {
      state.form.tabs.tab_1.form_fields.ind_3_1_1_records.fields.splice(row_index, 1)
    },
    add_ind_3_1_1_records_DataRow(state) {
      state.form.tabs.tab_1.form_fields.ind_3_1_1_records.fields.push(ind_3_1_1_records_structure())
    },
    remove_ind_3_1_2_records_DataRow(state, {row_index}) {
      state.form.tabs.tab_1.form_fields.ind_3_1_2_records.fields.splice(row_index, 1)
    },
    add_ind_3_1_2_records_DataRow(state) {
      state.form.tabs.tab_1.form_fields.ind_3_1_2_records.fields.push(ind_3_1_2_records_structure())
    },
    remove_ind_3_2_1_records_DataRow(state, {row_index}) {
      state.form.tabs.tab_1.form_fields.ind_3_2_1_records.fields.splice(row_index, 1)
    },
    add_ind_3_2_1_records_DataRow(state) {
      state.form.tabs.tab_1.form_fields.ind_3_2_1_records.fields.push(ind_3_2_1_records_structure())
    },
    remove_ind_3_2_2_records_DataRow(state, {row_index}) {
      state.form.tabs.tab_1.form_fields.ind_3_2_2_records.fields.splice(row_index, 1)
    },
    add_ind_3_2_2_records_DataRow(state) {
      state.form.tabs.tab_1.form_fields.ind_3_2_2_records.fields.push(ind_3_2_2_records_structure())
    },
    remove_ind_4_1_1_records_DataRow(state, {row_index}) {
      state.form.tabs.tab_2.form_fields.ind_4_1_1_records.fields.splice(row_index, 1)
    },
    add_ind_4_1_1_records_DataRow(state) {
      state.form.tabs.tab_2.form_fields.ind_4_1_1_records.fields.push(ind_4_1_1_records_structure())
    },
    remove_ind_4_1_2_records_DataRow(state, {row_index}) {
      state.form.tabs.tab_2.form_fields.ind_4_1_2_records.fields.splice(row_index, 1)
    },
    add_ind_4_1_2_records_DataRow(state) {
      state.form.tabs.tab_2.form_fields.ind_4_1_2_records.fields.push(ind_4_1_2_records_structure())
    },
    remove_ind_4_2_records_DataRow(state, {row_index}) {
      state.form.tabs.tab_2.form_fields.ind_4_2_records.fields.splice(row_index, 1)
    },
    add_ind_4_2_records_DataRow(state) {
      state.form.tabs.tab_2.form_fields.ind_4_2_records.fields.push(ind_4_2_records_structure())
    },
    remove_ind_4_3_records_DataRow(state, {row_index}) {
      state.form.tabs.tab_2.form_fields.ind_4_3_records.fields.splice(row_index, 1)
    },
    add_ind_4_3_records_DataRow(state) {
      state.form.tabs.tab_2.form_fields.ind_4_3_records.fields.push(ind_4_3_records_structure())
    },
    remove_ind_5_1_1_records_DataRow(state, {row_index}) {
      state.form.tabs.tab_3.form_fields.ind_5_1_1_records.fields.splice(row_index, 1)
    },
    add_ind_5_1_1_records_DataRow(state) {
      state.form.tabs.tab_3.form_fields.ind_5_1_1_records.fields.push(ind_5_1_1_records_structure())
    },
    remove_ind_5_1_2_records_DataRow(state, {row_index}) {
      state.form.tabs.tab_3.form_fields.ind_5_1_2_records.fields.splice(row_index, 1)
    },
    add_ind_5_1_2_records_DataRow(state) {
      state.form.tabs.tab_3.form_fields.ind_5_1_2_records.fields.push(ind_5_1_2_records_structure())
    },
    remove_ind_5_2_records_DataRow(state, {row_index}) {
      state.form.tabs.tab_3.form_fields.ind_5_2_records.fields.splice(row_index, 1)
    },
    add_ind_5_2_records_DataRow(state) {
      state.form.tabs.tab_3.form_fields.ind_5_2_records.fields.push(ind_5_2_records_structure())
    },
    setDataLoadingValue(state, {value}) {
      state.dataLoading = value;
    }
  }
})
