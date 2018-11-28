<template>
  <div v-if="info">
    <div class="question-wrapper">
      <h3>{{info.label}}</h3>

      <div class="question">
        <p>{{info.data.question}}</p>
      </div>
      <div class="answer">
        <div class="table-head">

          <b>{{info.data.table_label}}</b>

        </div>

        <div role="tablist">
          <b-card v-for="(article,index) in info.data.articles" :key="article.article_title" class="mb-1">
            <h5 style="cursor: pointer" href="#" v-b-toggle="`article_${index}`" variant="info">{{article.article_title}} <span style="float:right">▼</span></h5>
            <b-collapse class="mt-3" visible :id="`article_${index}`" accordion="my-accordion" role="tabpanel">
              <div class="form-subsection" v-for="(item,item_index) in article.article_items">
                <div class="mt-2">{{item.label}}</div>
                <div class="form-fields">
                  <b-form-input v-if="item.type != 'textarea'" required :id="`${tabId}_${index}_${item_index}_${item.name}`" :type="item.type" :name="item.name" v-model="item.selected"></b-form-input>
                  <textarea class="form-control" v-else v-model="item.selected"></textarea>
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

  name: 'ENFMeasures',

  props: {
  	info: null,
    tabId:null

  },

  created() {
  },

  data () {
    return {
    }
  },
}
</script>

<style lang="css" scoped>
</style>
