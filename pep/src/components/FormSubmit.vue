<template>
  <div>
    <b-btn variant="success" style="position: absolute;
    top: 5px;
    right: 5px;" @click="doStuff">Save</b-btn>
    <b-btn variant="danger" style="position: absolute;
    top: 5px;
    right: 85px;" @click="exitForm">Back to envelope</b-btn>
  </div>
</template>

<script>

import {saveInstance} from '../api.js';

export default {

  name: 'FormSubmit',


  props: {
    info: null,
  },

  updated() {
  },

  created() {
    this.dataset = this.info
    this.validate()
  },

  data () {
    return {
      dataset: null,
      validation: [],
    }
  },

  methods: {
    exitForm(){
      window.location.replace(envelope)
    },

    doStuff(){
      var info = this.info
      console.log(info)
      saveInstance(info)
    },

    validate() {
    }
  },
    watch: {
    info: {
      handler: function(old_val,new_val) {
        this.validate()
      },
      deep: true,
      immediate: true,
    }
  }
}
</script>

<style lang="css" scoped>
</style>
