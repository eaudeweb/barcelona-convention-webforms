<template>
  <div v-if="info">
    <div class="question-wrapper">
        <h3>{{info.label}}</h3>
      <p>TODO</p>
    </div>
  </div>
</template>

<script>

import {slugify} from '../utils.js';

export default {

  name: 'Dummy',

  props: {
    info: null,
    tabId:null

  },

  data () {
    return {

    }
  },

  methods: {
    titleSlugify(text) {
      return slugify(text)
    }
  },
}
</script>

<style lang="css" scoped>

</style>
