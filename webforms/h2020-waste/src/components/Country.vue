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
          <th scope="row">IND 1</th>
          <td>Municipal Waste Generation</td>
          <td>IND 1.A Municipal waste composition.<br>
            IND 1.B Plastic waste generation per capita.<br>
            IND 1.C % of population living in Coastal Areas.<br>
            IND 1.D % of Time of Tourist visitors in Coastal Areas / Population in Coastal Areas.</td>
        </tr>
        <tr>
          <th scope="row">IND 2</th>
          <td>"Hardware" of waste management</td>
          <td>IND 2.A Waste Collection<br>
            &nbsp;&nbsp;IND 2.A.1 Waste Collection Coverage<br>
            &nbsp;&nbsp;IND 2.A.2 Waste Captured by the formal waste sector.<br>
            IND 2.B Environmental Control<br>
            &nbsp;&nbsp;IND 2.B.1 % of waste to uncontrolled dumpsites<br>
            &nbsp;&nbsp;IND 2.B.2 Uncontrolled dumpsites in Coastal Areas<br>
            &nbsp;&nbsp;IND 2.B.3 Waste going to dumpsites in Coastal Areas<br>
            IND 2.C Resource Recovery<br>
            &nbsp;&nbsp;IND 2.C.1 % of plastic waste generated that is recycled.</td>
        </tr>
        <tr>
          <th scope="row">IND Q</th>
          <td>"Software" of waste management</td>
          <td>Q.A MARINE LITTER & WASTE MANAGEMENT FRAMEWORK<br>
            &nbsp;&nbsp;IND Q.A.1 Is there a National Assessment for ML and its impacts?<br>
            &nbsp;&nbsp;IND Q.A.2 Is there a National Plan or Strategy for ML?<br>
            &nbsp;&nbsp;IND Q.A.3 Is there a National Plan or Strategy for Waste Management?<br>
            &nbsp;&nbsp;IND Q.A.4 Is there a National Law on Waste?<br>
            &nbsp;&nbsp;IND Q.A.5 Is there a national plan or target to close the dumpsites before 2030?<br>
            &nbsp;&nbsp;IND Q.A.6 Is there a National Information system for waste management in place?<br>
            Q.B RESOURCE RECOVERY<br>
            &nbsp;&nbsp;IND Q.B.1 Is there a National Plan or Strategy for Waste Prevention?<br>
            &nbsp;&nbsp;IND Q.B.2 Are there mandatory targets for recycling - recovery of packaging waste?<br>
            &nbsp;&nbsp;IND Q.B.3 Are there EPR or Deposit- Return schemes for packaging waste?<br>
            &nbsp;&nbsp;IND Q.B.4 Are there national policies to eliminate or reduce single-use plastics?<br>
            &nbsp;&nbsp;IND Q.B.5 Are there financial incentives for reuse – resource recovery activities?<br>
            Q.C SUSTAINABLE CONSUMPTION AND PRODUCTION<br>
            &nbsp;&nbsp;IND Q.C.1 Are there Sustainable Consumption and Production plans or strategies?<br>
            &nbsp;&nbsp;IND Q.C.2 Are there green procurement rules for the public sector in place?<br>
            &nbsp;&nbsp;IND Q.C.3 Are there policies to support sustainable tourism?<br>
            &nbsp;&nbsp;IND Q.C.4 Are there policies to support eco-labelling and eco-design?</td>
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
