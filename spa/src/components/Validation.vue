<template>
	<div v-if="validationDataHere">
		<h5>Incomplete Fields</h5>
		<div v-for="validationItem in validationDataHere">
			<b-badge  variant="danger" style="cursor: pointer; white-space: normal; text-align: left;line-height: 1.3;margin-bottom: 5px;" @click="openArtilce(titleSlugify(validationItem.article), validationItem.tab)">	{{validationItem.article}}
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
    		case 'Part I: Legal and Regulatory measures':
    			tabIndex = 0;
    			break;
    		case 'Part II: Specially protected areas':
    			tabIndex = 1;
    			break;
    		case 'Part III: Implementation of Regional Actions Plans (RAPs) and their effectiveness':
    			tabIndex = 2;
    			break;
    		case 'Part IV: Implementation of National Actions Plans (NAPs) and their effectiveness':
    			tabIndex = 3;
    			break;
        case 'Part V: Monitoring':
          tabIndex = 4;
          break;
        case 'Part VI: Enforcements measures':
          tabIndex = 5;
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