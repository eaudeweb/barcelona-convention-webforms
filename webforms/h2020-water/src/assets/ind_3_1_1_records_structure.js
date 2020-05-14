import reference_years from './reference_years'
import water_collection_method_i from './water-collection-method-i'

const ind_3_1_1_records_structure = (data) => ({
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
  Total_Population_ISS: {
    name: 'Total_Population_ISS',
    type: 'number',
    selected: data && data.Total_Population_ISS || null,
    label: 'Total national population with access to Improved Sanitation Systems (ISS)',
    tooltip: 'Total population with access to improved sanitation system refers to the population with access to facilities which hygienically separate human excreta from human, animal and insect contact.',
    get validation() {
      if (this.selected && (this.selected < 1 || this.selected > 1000000000))
        return `${this.label} ${this.type === 'number' ? 'can only contain numeric characters and must be between 1 and 1000000000' : ''}`
    }
  },
  Urban_Population_ISS: {
    name: 'Urban_Population_ISS',
    type: 'number',
    selected: data && data.Urban_Population_ISS || null,
    label: 'National population living in urban areas with access to Improved Sanitation Systems (ISS)',
    tooltip: 'Urban population with access to improved sanitation system refers to the population with access to facilities which hygienically separate human excreta from human, animal and insect contact.',
    get validation() {
      if (this.selected && (this.selected < 1 || this.selected > 1000000000))
        return `${this.label} ${this.type === 'number' ? 'can only contain numeric characters and must be between 1 and 1000000000' : ''}`
    }
  },
  Rural_Population_ISS: {
    name: 'Rural_Population_ISS',
    type: 'number',
    selected: data && data.Rural_Population_ISS || null,
    label: 'National population living in rural areas with access to Improved Sanitation Systems (ISS)',
    tooltip: 'Rural population with access to improved sanitation refers to the population with access to facilities which hygienically separate human excreta from human, animal and insect contact.',
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

export default ind_3_1_1_records_structure
