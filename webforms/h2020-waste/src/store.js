import Vue from 'vue'
import Vuex from 'vuex'
import { getCountry, getFormData } from './api'
import getForm from '@/assets/form'
import ind_1_1_records_structure from '@/assets/ind_1_1_records_structure'
import ind_1_A_records_structure from '@/assets/ind_1_A_records_structure'
import ind_1_B_records_structure from '@/assets/ind_1_B_records_structure'
import ind_1_C_records_structure from '@/assets/ind_1_C_records_structure'
import ind_1_D_records_structure from '@/assets/ind_1_D_records_structure'
import ind_2_A_1_records_structure from '@/assets/ind_2_A_1_records_structure'
import ind_2_A_2_records_structure from '@/assets/ind_2_A_2_records_structure'
import ind_2_B_records_structure from '@/assets/ind_2_B_records_structure'
import ind_2_B_1_records_structure from '@/assets/ind_2_B_1_records_structure'
import ind_2_B_2_records_structure from '@/assets/ind_2_B_2_records_structure'
import ind_2_B_3_records_structure from '@/assets/ind_2_B_3_records_structure'
import ind_2_C_records_structure from '@/assets/ind_2_C_records_structure'

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
    remove_ind_1_1_records_DataRow(state, {row_index}){
      state.form.tabs.tab_1.form_fields.ind_1_1_records.fields.splice(row_index, 1)
    },
    add_ind_1_1_records_DataRow(state) {
      state.form.tabs.tab_1.form_fields.ind_1_1_records.fields.push(ind_1_1_records_structure())
    },
    remove_ind_1_A_records_DataRow(state, {row_index}){
      state.form.tabs.tab_1.form_fields.ind_1_A_records.fields.splice(row_index, 1)
    },
    add_ind_1_A_records_DataRow(state) {
      state.form.tabs.tab_1.form_fields.ind_1_A_records.fields.push(ind_1_A_records_structure())
    },
    remove_ind_1_B_records_DataRow(state, {row_index}){
      state.form.tabs.tab_1.form_fields.ind_1_B_records.fields.splice(row_index, 1)
    },
    add_ind_1_B_records_DataRow(state) {
      state.form.tabs.tab_1.form_fields.ind_1_B_records.fields.push(ind_1_B_records_structure())
    },
    remove_ind_1_C_records_DataRow(state, {row_index}){
      state.form.tabs.tab_1.form_fields.ind_1_C_records.fields.splice(row_index, 1)
    },
    add_ind_1_C_records_DataRow(state) {
      state.form.tabs.tab_1.form_fields.ind_1_C_records.fields.push(ind_1_C_records_structure())
    },
    remove_ind_1_D_records_DataRow(state, {row_index}){
      state.form.tabs.tab_1.form_fields.ind_1_D_records.fields.splice(row_index, 1)
    },
    add_ind_1_D_records_DataRow(state) {
      state.form.tabs.tab_1.form_fields.ind_1_D_records.fields.push(ind_1_D_records_structure())
    },
    remove_ind_2_A_1_records_DataRow(state, {row_index}){
      state.form.tabs.tab_2.form_fields.ind_2_A_1_records.fields.splice(row_index, 1)
    },
    add_ind_2_A_1_records_DataRow(state) {
      state.form.tabs.tab_2.form_fields.ind_2_A_1_records.fields.push(ind_2_A_1_records_structure())
    },
    remove_ind_2_A_2_records_DataRow(state, {row_index}){
      state.form.tabs.tab_2.form_fields.ind_2_A_2_records.fields.splice(row_index, 1)
    },
    add_ind_2_A_2_records_DataRow(state) {
      state.form.tabs.tab_2.form_fields.ind_2_A_2_records.fields.push(ind_2_A_2_records_structure())
    },
    remove_ind_2_B_records_DataRow(state, {row_index}){
      state.form.tabs.tab_2.form_fields.ind_2_B_records.fields.splice(row_index, 1)
    },
    add_ind_2_B_records_DataRow(state) {
      state.form.tabs.tab_2.form_fields.ind_2_B_records.fields.push(ind_2_B_records_structure())
    },
    remove_ind_2_B_1_records_DataRow(state, {row_index}){
      state.form.tabs.tab_2.form_fields.ind_2_B_1_records.fields.splice(row_index, 1)
    },
    add_ind_2_B_1_records_DataRow(state) {
      state.form.tabs.tab_2.form_fields.ind_2_B_1_records.fields.push(ind_2_B_1_records_structure())
    },
    remove_ind_2_B_2_records_DataRow(state, {row_index}){
      state.form.tabs.tab_2.form_fields.ind_2_B_2_records.fields.splice(row_index, 1)
    },
    add_ind_2_B_2_records_DataRow(state) {
      state.form.tabs.tab_2.form_fields.ind_2_B_2_records.fields.push(ind_2_B_2_records_structure())
    },
    remove_ind_2_B_3_records_DataRow(state, {row_index}){
      state.form.tabs.tab_2.form_fields.ind_2_B_3_records.fields.splice(row_index, 1)
    },
    add_ind_2_B_3_records_DataRow(state) {
      state.form.tabs.tab_2.form_fields.ind_2_B_3_records.fields.push(ind_2_B_3_records_structure())
    },
    remove_ind_2_C_records_DataRow(state, {row_index}){
      state.form.tabs.tab_2.form_fields.ind_2_C_records.fields.splice(row_index, 1)
    },
    add_ind_2_C_records_DataRow(state) {
      state.form.tabs.tab_2.form_fields.ind_2_C_records.fields.push(ind_2_C_records_structure())
    },

    setDataLoadingValue(state, {value}) {
      state.dataLoading = value;
    }
  }
})
