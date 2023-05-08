<template>
  <div v-if="info && country && ((reported_prtr === 'no') || (reported_prtr === 'yes' && complementary_prtr === 'yes')) && region && regionName && region">

  <div class="question-wrapper">
        <h3>{{info.label}} {{regionName}} </h3>

        <div class="question">
            <p>{{info.data.question}}</p>
        </div>

  <div class="answer" style="position: relative;">
        <!-- <div class="table-head">
          </div> -->



    <div  class="mb-5" role="tablist">
              <b-card class="mb-1">
                <h5 style="cursor: pointer"  variant="info">
                   Hydrological basins
                  <br>
                  <small class="muted">Please specify which hydrological basins fall in this region</small>
                </h5>

              <br>


                 <b-btn variant="primary" @click="addBasin">Add Basin</b-btn>

                <div visible id="basin_table" accordion="my-accordion" role="tabpanel">
                  <div  v-if="item.region === region" class="form-subsection" v-for="(item,item_index) in info.data.table.basins">
                    
                    <b-btn style="float: right" variant="danger" @click="removeBasin(item_index)"> X</b-btn> 

                      <div class="form-fields">
                        <div class="mt-2">Basin:</div>
                            <!-- {{field}} -->
                          <textarea class="form-control" v-model="item.selected"></textarea> 
                      </div>
                  </div>
                </div>
              </b-card>
              
            </div>


          <div role="tablist">
              <b-btn 
                  variant="primary" @click="addPollutant">Add pollutant</b-btn>
              <b-card v-if="pollutant.region === region" style="background: #eee" v-for="(pollutant,index) in info.data.table.pollutants" :key="index" class="mb-1">
                <h5 style="cursor: pointer" href="#" v-b-toggle="`pollutant_table_${index}`" variant="info">
                   {{pollutant.pollutant_title.label}} : {{getPollutantTitle(pollutant.pollutant_title.selected)}}
                  <span style="float:right">▼</span>
                </h5>
              <br>

              <b-input-group>
                     <b-form-select required :id="`${tabId}_${index}_${pollutant.pollutant_title.name}_${pollutant.pollutant_title.type}`" :options="pollutant.pollutant_title.options" :name="pollutant.pollutant_title.name" @change="current_selections.pollutant = $event" v-model="pollutant.pollutant_title.selected"></b-form-select>
                <b-input-group-append>
                  <b-btn variant="danger" @click="removePollutant(index)"> X</b-btn> 
                </b-input-group-append>
              </b-input-group>

         


                <b-collapse class="mt-3" visible :id="`pollutant_table_${index}`" accordion="my-accordion" role="tabpanel">
                  <div class="form-subsection" v-for="(item,item_index) in pollutant.pollutant_items">

                      <div class="form-fields">
                        <div class="mt-2">{{item.label}}</div>
                            <!-- {{field}} -->
                          <b-form-input v-if="item.type !='select' && item.type != 'checkbox'" required :id="`${tabId}_${index}_${item_index}_${item.name}_${item.name}`" :type="item.type" :name="item.name" v-model="item.selected"></b-form-input>
                          <b-form-checkbox v-else-if="item.type === 'checkbox'" :options="item.options" v-model="item.selected"></b-form-checkbox>
                          <b-form-select v-else-if="item.type ==='select' && item.name != 'facility'" @change="makeOtherFields($event, item, pollutant.pollutant_items)"  :options="item.options" v-model="item.selected"></b-form-select>
                          <ModifiedMultiselect 
                            v-else-if="item.type ==='select' && item.name === 'facility'" 
                            @change="makeOtherFields($event, item, pollutant.pollutant_items)"  
                            :options="item.options" 
                            v-model="item.selected"
                            trackBy="value"
                            label="text"
                            placeholder="Select or add a facility"
                            taggable
                            tag-placeholder="Add this facility"
                            :taggable="true"
                            @tag="addTag($event, item)"
                            >
                          </ModifiedMultiselect>

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

import {slugify} from '../utils.js';
import pollutantsJson from '../assets/pollutants.json';
import sectorsJson from '../assets/sectors.json';
import estimationtypeJson from '../assets/estimationtype.json'
import emissionfactorunitJson from "../assets/emissionfactorunit.json"
import defaultValues from '../assets/defaultemissionfactor.json'
import ModifiedMultiselect from "./ModifiedMultiselect"

export default {
  props: {
    info: null,
    tabId:null,
    country: null,
    region: null,
    regionName: null,
    reported_prtr: null,
    complementary_prtr: null
  },

  components: {
    ModifiedMultiselect
  },

  data () {
    return {
      current_selections: {
        pollutant: null,
        process: null,
        sector: null,
        subsector: null,
      },
      selectsOptions: {
        pollutant: [],
        year: [],
        sector: [],
        subsector: [],
        process: [],
        estimated: [],
        emission_factor_unit: [],
      }
    }
  },


  created() {
    if(this.info.data.table.pollutants.length === 0) {
      this.addPollutant()
    }
    this.makeFormData()

    for(let field of this.info.data.table.pollutants) {
      for(let item of field.pollutant_items) {
        this.makeOtherFields(item.selected, item, field.pollutant_items)
      }
    }

  },

  methods: {
    makeFormData() {

      for(let pollutantData of this.info.data.table.pollutants) {

        for(let pollutant of pollutantsJson) {
          pollutantData.pollutant_title.options.push({value: pollutant.pollutant_id, text: pollutant.pollutant_name})
        }

        for(let item of pollutantData.pollutant_items) {

          if(item.name === 'sector') {
            for(let sector of sectorsJson) {
              item.options.push({value: sector.sector_id, text: sector.sector_name})
            }
          }

          if(item.name === 'facility') {
            if(!item.options.some(i => i.value === item.selected)) {
              item.options.push({
                text: item.selected,
                value: item.selected
              })
            }
          }


          if(item.name === 'estimated') {
            for (let estimation of estimationtypeJson) {
             item.options.push({value: estimation.estimation_type_id, text: estimation.name})
            }
          }

          if(item.name === 'emission_factor_unit') {
            for(let emission of emissionfactorunitJson) {
              item.options.push({value: emission.emission_factor_unit_id, text: emission.name})
            }
          }

          if(item.name === 'year')  {
            item.options = this.generateYears(1998)
          }
        }

      }

    },


    makeOtherFields(selected, item, parent){
      if(item.name === 'sector') {
        for (let sector of sectorsJson) {
          if(sector.sector_id === selected) {
            for(let field of parent) {
              if(field.name ==='subsector') {
                field.options = []
                for(let subsector of sector.subsectors) {
                  field.options.push({value:subsector.subsector_id, text: subsector.subsector_name})
                }
              }
            }
            break;
          }
        }
      } else if (item.name === 'subsector') {
        for (let sector of sectorsJson) {
            for(let subsector of sector.subsectors) {
              if(subsector.subsector_id === selected) {
               for(let field of parent) {
                  if(field.name === 'process'){
                    field.options = []
                    for (let process of subsector.processes) {
                      field.options.push({value:process.process_id, text:process.process_name})
                    }
                  }
                }
                break;
              }
            }
        }
      }

      // console.log()


      let efv = null
      let efu = null


      for(let field of parent) {
        if(field.name === 'emission_factor')
          efv = field

        if(field.name === 'emission_factor_unit')
          efu = field
      }


      if(item.name === 'process')
        this.current_selections.process = selected

      if(item.name === 'sector')
        this.current_selections.sector = selected

      if(item.name === 'subsector')
        this.current_selections.subsector = selected

      if(item.name === 'process' || item.name === 'sector' || item.name === 'subsector') {

        for(let defaultValue of defaultValues) {

          if(defaultValue.pollutant_pollutant_id === this.current_selections.pollutant && defaultValue.process_process_id === this.current_selections.process && defaultValue.sector_sector_id === this.current_selections.sector && defaultValue.subsector_subsector_id === this.current_selections.subsector) {
            efv.selected = defaultValue.default_value
            efu.selected = defaultValue.emission_factor_unit_emission_factor_unit_id
          } else {
            efv.selected = null
            efu.selected = null
          }
        }

      }

    },


    getPollutantTitle(selected) {
      for(let pollutant of pollutantsJson) {
        if(pollutant.pollutant_id === selected)
          return pollutant.pollutant_name
      }
    },

    generateYears(startYear) {
        var currentYear = new Date().getFullYear(), years = [];
        startYear = startYear;

        while ( startYear <= currentYear ) {
          years.push({text:startYear , value: startYear});
          startYear++;
        }

        return years;
    },

    getSelectItems(name) {
      return this.selectsOptions[name]
    },


    addPollutant() {
      const pollutant = {
          region: this.region,
          pollutant_title: {
            name: 'pollutant',
            type: 'select',
            label: 'Pollutant',
            selected: '',
            options: [],
            required: true,
          },
          pollutant_items: [{
              label: 'Year',
              type: 'select',
              name: 'year',
              selected: '',
              options: [],
              required: true,

            }, {
              label: 'Sector',
              type: 'select',
              name: 'sector',
              selected: '',
              options: [],
              required: true,

            }, {
              label: 'Subsector',
              type: 'select',
              name: 'subsector',
              selected: '',
              options: [],
              required: true,

            }, {
              label: 'Process',
              type: 'select',
              name: 'process',
              selected: '',
              options: [],
            }, {
              label: 'Facility',
              type: 'select',
              name: 'facility',
              selected: '',
              options: [],
            },
            {
              label: 'Estimated based on',
              type: 'select',
              name: 'estimated',
              selected: '',
              options: [],
              required: true,

            },
            {
              label: 'Emission factor',
              type: 'number',
              name: 'emission_factor',
              validation: 'double',
              selected: '',
              required: true,
            },
            {
              label: 'Emission factor unit',
              type: 'select',
              name: 'emission_factor_unit',
              selected: '',
              options: [],
            },
            {
              label: 'Production',
              type: 'number',
              name: 'production',
              validation: 'double',
              selected: '',
              required: true,
            },
            {
              label: 'Production unit',
              type: 'select',
              name: 'production_unit',
              selected: '',
              options: [
                {value: 0, text: 'mg/y'},
                {value: 1, text: 'kg/y'},
                {value: 2, text: 'Tons/y'},
                {value: 3, text: '1000L/y'},
                {value: 4, text: '1000m²/y'}
              ],
              required: true,
            },
            {
              label: 'Total releases',
              type: 'number',
              name: 'total_releases',
              validation: 'double',
              selected: '',
              disabled: true,
            },
            {
              label: 'Total releases unit',
              type: 'select',
              name: 'total_releases_unit',
              selected: '',
              options: [
                {value: 0, text: 'mg/y'},
                {value: 1, text: 'kg/y'},
                {value: 2, text: 'Tons/y'},
                {value: 3, text: '1000L/y'},
                {value: 4, text: '1000m²/y'}
              ],
              disabled: true,
            },
          ]
        }

      this.info.data.table.pollutants.push(pollutant)
      this.makeFormData()
    },


    addTag(newTag, item) {
        const tag = {
        text: newTag,
        value: newTag
      }
      item.options.push(tag)
      item.selected = tag.value
    },

    addBasin() {
      const basin = {
            name: 'hydrological_basin',
            type: 'textarea',
            region: this.region,
            label: 'Hydrological basin',
            selected: '',
            required: true,
        }

      this.info.data.table.basins.push(basin)
    },

    removeBasin(index) {
      this.info.data.table.basins.splice(index, 1)
    },


    removePollutant(index) {
      this.info.data.table.pollutants.splice(index, 1)
    },


    titleSlugify(text) {
      return slugify(text)
    },
  },
}
</script>

<style lang="css" scoped>

</style>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style