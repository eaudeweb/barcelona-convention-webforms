<template>
  <div v-if="data">
    <h4 class="text-center"><i>{{data.description}}</i></h4>
    <br/>
    <b-card>
      <div v-for="(field, field_index) in data.form_fields" :id="field_index" :key="field_index">
        <div class="table-wrapper">
          <table class="table table-striped">
            <thead>
            <tr>
              <th v-for="(header,header_index) in field.fields[0]" :key="header_index">
                {{header.label}}
              </th>
              <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(row, row_index) in field.fields" :key="row_index">
              <td style="max-width: 250px; min-width: 40%;" v-for="(cell, cell_index) in row" :key="`${row_index}_${cell_index}`">
                <FieldGenerator :field="cell"></FieldGenerator>
              </td>
              <td style="width: 50px"><b-btn  v-if="field.fields.length > 1"  variant="danger" @click="$store.commit('removeDemographicDataRow', {row_index})">X</b-btn></td>
            </tr>
            </tbody>
          </table>
          <b-btn class="btn-big" variant="primary" @click="$store.commit('addDemographicDataRow')">Add</b-btn>
        </div>

      </div>
    </b-card>
  </div>
</template>

<script>
  import FieldGenerator from '@/components/FieldGenerator'

  export default {
    props: {
      data: null
    },
    components: {
      FieldGenerator
    },
    methods: {}
  }
</script>

<style lang="css" scoped>
</style>
