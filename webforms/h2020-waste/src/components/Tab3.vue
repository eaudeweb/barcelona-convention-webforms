<template>
  <div class="sectionTab3" v-if="data">
    <h4 class="text-center"><i>{{data.description}}</i></h4>
    <br/>
    <b-card>
      <div v-for="(field, field_index) in data.form_fields" class="sectionTab3Fields" :id="field_index" :key="field_index">
        <h6 class="text-center" v-if="field.description"><i>{{field.description}}</i></h6>
        <div class="table-wrapper">
          <table class="table table-striped">
            <thead>
            <tr>
              <th v-for="(header,header_index) in field.fields[0]" :key="header_index">
                {{header.label}}
              </th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(row, row_index) in field.fields" :key="row_index">
              <td style="max-width: 250px; min-width: 40%;" v-for="(cell, cell_index) in row" :key="`${row_index}_${cell_index}`">
                <FieldGenerator :field="cell"></FieldGenerator>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
        <br>
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
    methods: {
      slugify(text){
        if(!text) return
        return text.toString().toLowerCase()
          .replace(/\s+/g, '-')           // Replace spaces with -
          .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
          .replace(/\-\-+/g, '-')         // Replace multiple - with single -
          .replace(/^-+/, '')             // Trim - from start of text
          .replace(/-+$/, '');            // Trim - from end of text
      }
    }
  }
</script>

<style lang="css" scoped>
</style>
