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
          <th scope="row">IND 6.1</th>
          <td>Release of nutrients from industrial sectors</td>
          <td>6.1.1)	Total BOD load discharged from industrial installations to the Mediterranean marine environment.<br>
            6.1.2)	Total Nitrogen load discharged from industrial installations to the Mediterranean marine environment.<br>
            6.1.3)	Total Phosphorus load discharged from industrial installations to the Mediterranean marine environment.</td>
        </tr>
        <tr>
          <th scope="row">IND 6.2</th>
          <td>Release of toxic substances from industrial sectors</td>
          <td>6.2.1)	Total heavy metals load discharged from industrial installations to the Mediterranean marine environment.<br>
            6.2.2)	Furans and dioxins load discharged from industrial installations to the Mediterranean marine environment.<br>
            6.2.3)	Polycyclic aromatic hydrocarbons (PAH) load discharged from industrial installations to the Mediterranean marine environment.<br>
            6.2.4)	Volatile organic compounds (VOC) load discharged from industrial installations to the Mediterranean marine environment.</td>
        </tr>
        <tr>
          <th scope="row">IND 6.3</th>
          <td>Industrial hazardous waste disposed in environmentally sound manner</td>
          <td>6.3.1)	Total quantity of generated hazardous waste from industrial installations.<br>
            6.3.2)	Quantity of industrial hazardous waste disposed in environmentally sound manner relative to total quantity of generated hazardous waste from industrial installations.</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      data: null
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
