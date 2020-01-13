<template>
  <div class="sectionTab3" v-if="data">
    <h4 class="text-center"><i>{{data.description}}</i></h4>
    <br/>
<!--    <b-card>-->
<!--      <div v-for="(field, field_index) in data.form_fields" class="sectionTab3Fields" :id="field_index" :key="field_index">-->
<!--        <h6 class="text-center" v-if="field.description"><i>{{field.description + 'XXXXXX'}}</i></h6>-->
<!--&lt;!&ndash;        <h4>Measure(s) applied in the territory of the Member State in relation to the species</h4>&ndash;&gt;-->
<!--&lt;!&ndash;        <b-badge variant="danger" v-if=".validation">{{species.sectionBMeasures.validation}}</b-badge>&ndash;&gt;-->
<!--&lt;!&ndash;        <div class="q-wrapper" v-if="q_index != 'validation'" v-for="(q, q_index) in species.sectionBMeasures" :key="`${q_index}_${field}`">&ndash;&gt;-->
<!--&lt;!&ndash;          <label class="d-flex">&ndash;&gt;-->
<!--&lt;!&ndash;            <FieldGenerator :field="measure"></FieldGenerator>&ndash;&gt;-->
<!--&lt;!&ndash;            {{measure.label}}&ndash;&gt;-->
<!--&lt;!&ndash;          </label>&ndash;&gt;-->
<!--&lt;!&ndash;        </div>&ndash;&gt;-->
<!--        <br>-->
<!--      </div>-->
<!--    </b-card>-->
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
