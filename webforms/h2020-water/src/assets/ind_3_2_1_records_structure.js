import reference_years from './reference_years'
import water_collection_method_i from './water-collection-method-i'

const ind_3_2_1_records_structure = (data) => ({
  year: {
    name: 'year',
    label: 'Reference year',
    type: 'select',
    selected: data && data.year || null,
    tooltip: 'Select an option from the list.',
    options: reference_years.map(p => ({text: `${p.text}`, value: p.value})),
    get validation() {
      if (!this.selected)
        return `${this.label} is required`
    }
  },
  totalPopulation: {
    name: 'totalPopulation',
    type: 'number',
    selected: data && data.totalPopulation || null,
    label: 'Total population',
    tooltip: 'The population as of the reference year',
    get validation() {
      if (this.selected && (this.selected < 1 || this.selected > 1000000000))
        return `${this.label} ${this.type === 'number' ? 'can only contain numeric characters and must be between 1 and 1000000000' : ''}`
    }
  },
  urbanPopulation: {
    name: 'urbanPopulation',
    type: 'number',
    selected: data && data.urbanPopulation || null,
    label: 'Urban population',
    tooltip: 'The population as of the reference year',
    get validation() {
      if (this.selected && (this.selected < 1 || this.selected > 1000000000))
        return `${this.label} ${this.type === 'number' ? 'can only contain numeric characters and must be between 1 and 1000000000' : ''}`
    }
  },
  ruralPopulation: {
    name: 'ruralPopulation',
    type: 'number',
    selected: data && data.ruralPopulation || null,
    label: 'Rural population',
    tooltip: 'The population as of the reference year',
    get validation() {
      if (this.selected && (this.selected < 1 || this.selected > 1000000000))
        return `${this.label} ${this.type === 'number' ? 'can only contain numeric characters and must be between 1 and 1000000000' : ''}`
    }
  },
  Total_Population_SMSS: {
    name: 'Total_Population_SMSS',
    type: 'number',
    selected: data && data.Total_Population_SMSS || null,
    label: 'Total national population with access to Safely Managed Sanitation Systems (SMSS)',
    tooltip: '"Safely managed sanitation services" is defined as an improved sanitation facility considering:  \n' +
      'a) that is not shared with other households,\n' +
      'b) and where excreta is safely disposed of in situ or treated off site.',
    get validation() {
      if (this.selected && (this.selected < 1 || this.selected > 1000000000))
        return `${this.label} ${this.type === 'number' ? 'can only contain numeric characters and must be between 1 and 1000000000' : ''}`
    }
  },
  Urban_Population_SMSS: {
    name: 'Urban_Population_SMSS',
    type: 'number',
    selected: data && data.Urban_Population_SMSS || null,
    label: 'National population living in urban areas with access to Safely Managed Sanitation Systems (SMSS)',
    tooltip: '"Safely managed sanitation services" is defined as an improved sanitation facility considering:  \n' +
      'a) that is not shared with other households,\n' +
      'b) and where excreta is safely disposed of in situ or treated off site.',
    get validation() {
      if (this.selected && (this.selected < 1 || this.selected > 1000000000))
        return `${this.label} ${this.type === 'number' ? 'can only contain numeric characters and must be between 1 and 1000000000' : ''}`
    }
  },
  Rural_Population_SMSS: {
    name: 'Rural_Population_SMSS',
    type: 'number',
    selected: data && data.Rural_Population_SMSS || null,
    label: 'National population living in rural areas with access to  safely managed sanitation systems (SMSS)',
    tooltip: '"Safely managed sanitation services" is defined as an improved sanitation facility considering:  \n' +
      'a) that is not shared with other households,\n' +
      'b) and where excreta is safely disposed of in situ or treated off site.',
    get validation() {
      if (this.selected && (this.selected < 1 || this.selected > 1000000000))
        return `${this.label} ${this.type === 'number' ? 'can only contain numeric characters and must be between 1 and 1000000000' : ''}`
    }
  },
  water_collection_method: {
    name: 'water_collection_method',
    label: 'Method of data collection',
    tooltip: 'Select a method of data collection from the list.',
    type: 'select',
    selected: data && data.water_collection_method || null,
    options: water_collection_method_i.map(p => ({text: `${p.text}`, value: p.value})),
    get validation() {
      return true
    }
  },
  remarks: {
    name: 'remarks',
    type: 'textarea',
    selected: data && data.remarks || null,
    label: 'Remarks',
    tooltip: 'Remarks, comments or explanatory notes (free text)',
    get validation() {
      return true
    }
  }
})

export default ind_3_2_1_records_structure
