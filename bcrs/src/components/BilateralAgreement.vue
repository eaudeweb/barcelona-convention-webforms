<template>
	<div>
		<div v-if="info">
      <div class="question-wrapper">
        <h3>{{info.label}}</h3>
        <div class="question">
          <p>
            {{info.data.question.label}}
          </p>
        </div>
        <div class="answer">
          <div class="table-head">
            {{info.data.table_label}}
          </div>
          <table class="table table-striped">
            <thead class="bg-primary" style="color: white">
              <th><span v-html="info.data.question.label_name"></span></th>
              <th><span v-html="info.data.question.label_url"></span></th>
              <th><span>Actions</span></th>
            </thead>
          <tbody>
          <tr v-for="(agreement,index) in info.data.question.agreements">
            <td><b-form-input required v-model="agreement.name"
                  type="text"
                  placeholder="Agremeent name"></b-form-input></td>
            <td><b-form-input required v-model="agreement.reference"
                  type="text"
                  placeholder="Agremeent reference"></b-form-input></td>
            <td><b-btn variant="danger" @click="removeAgreement(index, info.data.question.agreements)">X</b-btn></td>
          </tr>
          </tbody>
          </table>
          <b-btn style="    width: 100%;
    margin-top: -1.3rem;
    border-top-left-radius: 0;
    border-top-right-radius: 0;" variant="default" @click="addAgreement"> + Add another agreement</b-btn> 

        </div>
      </div>
		</div>
	</div>
</template>

<script>
export default {

  name: 'BilateralAgreement',

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

  methods: {

    addAgreement() {
      this.info.data.question.agreements.push({name:'',reference:''})
    },

    removeAgreement(index,data) {
      data.splice(index,1)
    },
  },
}
</script>

<style lang="css" scoped>
</style>