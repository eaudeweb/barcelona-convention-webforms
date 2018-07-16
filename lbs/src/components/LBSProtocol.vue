<template>
  <div v-if="info">
    <div class="question-wrapper">
      <h3>{{info.label}}</h3>

      <div class="question">
        <div class="mt-2">{{info.data.question.label}} <small class="muted">({{info.data.question.info}})</small></div>
        <b-form-group>
          <b-form-radio-group stacked id="radio_MEDPOL_option" v-model="info.data.question.selected" :options="info.data.question.options" name="radio_MEDPOL_option">
          </b-form-radio-group>
        </b-form-group>
        <small style="font-style:italic; font-size: .6rem">
          <p class="mb-0" v-for="option of info.data.question.options_description">
            {{option}}
          </p>
        </small>
      </div>
      <div class="answer">
        <div class="table-head">

          <b>{{info.data.table_label}}</b>


        </div>

        <div v-if="info.data.question.selected == false" role="tablist">
          <b-card v-for="(article,index) in info.data.articles" :key="article.article_title" class="mb-1">
            <h5 style="cursor: pointer" href="#" v-b-toggle="`article_${index}`" variant="info">{{article.article_title}} <span style="float:right">▼</span></h5>
            <b-collapse class="mt-3" visible :id="`article_${index}`" accordion="my-accordion" role="tabpanel">
              <div class="form-section" v-for="(item_array,array_index) in article.article_items">
                <h6><b v-html="item_array.description"></b></h6>
                <div class="form-subsection" v-for="item in item_array.items">
                  <div class="mt-2">{{item.label}} <small class="muted">({{item.info}})</small></div>
                  <div class="form-fields">
                    <div v-if="item.type === 'select'">
                      <b-form-select v-if="item.name != 'sector'" required v-model="item.selected" :options="item.options" class="mb-3">
                      </b-form-select>
                      <b-form-select v-else required v-model="item.selected" @change="fillSubsectors(item_array, $event)" :options="item.options" class="mb-3">
                      </b-form-select>

                    </div>
                    <div v-else-if="item.type === 'number'">
                      <b-form-input required :id="`${tabId}_${index}_${array_index}_${item.name}`" :type="`${item.type}`" :name="`${item.name}`" v-model="item.value"></b-form-input>
                    </div>
                    <div v-else>
                      <b-form-group>
                        <b-form-radio-group required stacked :id="`${tabId}_${index}_${array_index}_${item.type}`" v-model="item.selected" :options="item.options" :name="`radio_${tabId}_${index}_${array_index}_${item.type}`">
                        </b-form-radio-group>
                      </b-form-group>
                    </div>
                  </div>
                </div>
              </div>
            </b-collapse>
          </b-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

  name: 'LBSProtocol',

  props: {
  	info: null,
    tabId:null,
    prefillData: null,
  },

  mounted() {
    for (let article of this.info.data.articles) {
      for(let article_item of article.article_items){
        for(let item of article_item.items) {
          if(item.name === 'sector' && item.selected != null){
            // console.log(item.selected)
            this.fillSubsectors(article_item, item.selected, true)
          }
        }
      }
    }
  },

  methods: {
    fillSubsectors(items, index, prefill) {
      for (let item of items.items) {
        if(item.name === 'sub_sector'){
          item.options = this.info.data.sub_sectors[index - 1]
          if(prefill === true && this.prefillData != null) {
            for(let prefillItem of this.prefillData){
              if(items.description === prefillItem.description) {
                  item.selected = prefillItem.activitysubsector
              }
            }
          }
        }


      }


    }
  },

  data () {
    return {
    }
  },
}
</script>

<style lang="css" scoped>
</style>
