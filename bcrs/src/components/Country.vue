<template>
  <div v-if="info">
      <div class="question-wrapper">
        <h3>INFORMATION ON THE REPORTING PARTY</h3>
        <div class="question">
          
        </div>
        <div v-for="(tables,index) in info.tables" class="table table-striped answer">
          <div class="table-head">
            <div v-if="index === 'table_1'">
              <p>
                Please provide information on the reporting Party by completing the following table.
              </p>
            </div>
             <div v-else-if="index === 'table_2'">
              <p>
                Contact point for the national report, if any
              </p>
            </div>
             <div v-else>
              <p style="text-decoration: underline">Organizations/bodies/agencies providing information for the compilation of the report</p>
              <p>
                Please provide information on the preparation of this report, including, where appropriate, stakeholders involved and material used, by completing the following Table.
              </p>
            </div>
          </div>
          <div class="table-body">
            <div v-for="table in tables">
              
              <b-col lg="5">
                <label>
                  {{table.label}}
                  
                </label>
              </b-col>
              <b-col lg="5">
                <b-input :type="table.type" v-model="table.selected"></b-input>
              </b-col>
            </div>

          </div>

        </div>
      </div>


  </div>
</template>

<script>
export default {

  props: {
    info: null,
    tabId:null
  },

  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>
.table-body {
  display: block;
    background: #fafafa;
    padding-top: 1rem;
    padding-bottom: 1rem;
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
    border: 1px solid rgba(0, 0, 0, 0.125);
}
</style>