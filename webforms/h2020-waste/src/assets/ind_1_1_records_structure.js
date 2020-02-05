import reference_years from './reference_years'
import waste_collection_method from './waste-collection-method'

const ind_1_1_records_structure = (adminRegions) => ({
  administrativeRegion: {
    name: 'administrativeRegion',
    label: 'Administrative regions',
    tooltip: 'The indicator will be reported at national level (optionally all administrative regions).',
    type: 'select',
    selected: null,
    options: adminRegions || [],
    get validation() {
      if (!this.selected)
        return `${this.label} is required`
    }
  },
  year: {
    name: 'year',
    label: 'Reference year',
    type: 'select',
    selected: null,
    tooltip: 'Year for which data is available. Select an option from the list.',
    options: reference_years.map(p => ({text: `${p.text}`, value: p.value})),
    get validation() {
      if (!this.selected)
        return `${this.label} is required`
    }
  },
  MSW_gen_calculated: {
    name: 'MSW_gen_calculated',
    type: 'number',
    selected: null,
    label: 'Calculated quantity of municipal solid waste generated (tonnes/year)',
    tooltip: 'Calculated by aggregating the waste generated in Administrative Regions. Calculated in national level (measured in metric tonnes per year)',
    get validation() {
      if (this.selected && (this.selected < 1 || this.selected > 1000000000))
        return `${this.label} ${this.type === 'number' ? 'can only contain numeric characters and must be between 1 and 1000000000' : ''}`
    }
  },
  MSW_gen_estimated: {
    name: 'MSW_gen_estimated',
    type: 'number',
    selected: null,
    label: 'Estimated quantity of municipal solid waste generated (tonnes/year)',
    tooltip: 'Estimated by kg per capita per reference year optionally per reference Administrative Regions. Calculated in national level (measured in metric tonnes per year)',
    get validation() {
      if (this.selected && (this.selected < 1 || this.selected > 1000000000))
        return `${this.label} ${this.type === 'number' ? 'can only contain numeric characters and must be between 1 and 1000000000' : ''}`
    }
  },
  waste_collection_method: {
    name: 'waste_collection_method',
    label: 'Method of data collection',
    tooltip: 'Select a method of data collection from the list.',
    type: 'select',
    selected: null,
    options: waste_collection_method.map(p => ({text: `${p.text}`, value: p.value})),
    get validation() {
      return true
    }
  },
  remarks: {
    name: 'remarks',
    type: 'textarea',
    selected: null,
    label: 'Remarks',
    tooltip: 'Remarks, comments or explanatory notes (free text)',
    get validation() {
      return true
    }
  }
})

export default ind_1_1_records_structure
