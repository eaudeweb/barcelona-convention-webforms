<template>
	<div v-if="validationDataHere">
		<h5>Incomplete Fields</h5>
		<div v-for="validationItem in validationDataHere">
			<b-badge  variant="danger" style="cursor: pointer" @click="openArtilce(titleSlugify(validationItem.article), validationItem.tab)">	{{validationItem.article}}
			</b-badge>
		</div>
	</div>
</template>

<script>

import {slugify} from '../utils.js';


export default {

  name: 'Validation',

  props: {
  	validationData: Array,
  },
  updated() {
  },

  data () {
    return {
    	validationDataHere: null,
    }
  },

  methods: {
  	mkdata(){
  		this.validationDataHere = this.validationData 
  	},
    titleSlugify(text) {
      return slugify(text)
    },
    openArtilce(article, tab) {

    	let tabIndex = 0;

    	switch (tab) {
    		case 'Part I: Bilateral and multilateral agreements':
    			tabIndex = 0;
    			break;
    		case 'Part II: Legal and regulatory measures':
    			tabIndex = 1;
    			break;
    		case 'Part III: Policy measures':
    			tabIndex = 2;
    			break;
    		case 'Part IV: Monitoring and public access to information':
    			tabIndex = 3;
    			break;
    		default:
    			// statements_def
    			break;
    	}

    	let tabs = document.querySelectorAll('.nav-item')

    	let toClick = tabs[tabIndex].querySelector('a')
	   	toClick.click();		


    	let article_target = document.getElementById(article)
    	if(article_target.classList.contains('collapsed')){
    		article_target.click()
    	 }
    }
  },
  watch: {
  	validationData: {
	  	handler: function(old_val,new_val) {
	  		this.mkdata()
	  	},
	  	deep: true,
	  	immediate: true,
  	} 
  }
}
</script>

<style lang="css" scoped>
</style>