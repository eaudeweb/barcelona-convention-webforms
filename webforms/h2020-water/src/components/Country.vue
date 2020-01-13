<template>
  <div v-if="data" class="question-wrapper">
    <h4 class="text-center"><i>{{data.description}}</i></h4>
    <br>
    <div class="table-body">
      <div style="width: 50%" class="container">
        <b-row class="mb-2" v-for="(field,index) in data.form_fields" :key="index">
          <b-col style="text-align: right">
            <label>{{field.label}}</label>
          </b-col>
          <b-col>
            <input class="form-control" v-model="field.selected" :disabled="field.disabled">
          </b-col>
        </b-row>
      </div>
    </div>
    <br>
    <div style="width: 50%" class="container">
      <table class="table table-bordered">
        <thead>
        <tr>
          <th scope="col" style="min-width: 100px;">No.</th>
          <th scope="col">Title of indicator</th>
          <th scope="col">Sub-indicators</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <th scope="row">IND 3</th>
          <td>Access to sanitation</td>
          <td>3.1 Share of total, urban and rural population with access to an Improved  Sanitation System (ISS)<br>
            3.2 Proportion of population using Safely Managed Sanitation Services (SMSS)</td>
        </tr>
        <tr>
          <th scope="row">IND 4</th>
          <td>Municipal Wastewater Management</td>
          <td>4.1 Municipal wastewater collected and wastewater treated<br>
            4.2 Direct use of treated municipal wastewater<br>
            4.3 Release of nutrients from municipal wastewater</td>
        </tr>
        <tr>
          <th scope="row">IND 5</th>
          <td>Coastal and Marine Water Quality</td>
          <td>5.1 Nutrient concentrations in transitional, coastal and marine waters<br>
            5.2 Bathing water quality</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      data: null,
    }
  }
</script>

<style lang="scss" scoped>
  .table-body {
    display: block;
    background: #fafafa;
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
    border: 1px solid rgba(0, 0, 0, 0.125);
    padding: 1rem;
  }
  label {
    font-weight: bold;
  }
</style>
