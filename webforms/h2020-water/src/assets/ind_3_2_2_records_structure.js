import reference_years from './reference_years'
import water_collection_method_i from './water-collection-method-i'

const ind_3_2_2_records_structure = (data) => ({
  hydrologicalBasin: {
    name: 'hydrologicalBasin',
    label: 'Name of catchment/ hydrological basin at the coastal area',
    //tooltip: 'Name of catchment/ hydrological basin at the coastal area according to codelist',
    // type: 'select',
    type: 'text',
    selected: data && data.hydrologicalBasin || null,
    // options: reference_years.map(p => ({text: `${p.text}`, value: p.value})),
    get validation() {
      if (!this.selected)
        return `${this.label} is required`
    }
  },
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
  Total_Pop_Coast_SMSS: {
    name: 'Total_Pop_Coast_SMSS',
    type: 'number',
    selected: data && data.Total_Pop_Coast_SMSS || null,
    label: 'Population in coastal areas and catchment/ hydrological basin at the coastal area with access to Safely Managed Sanitation Systems (SMSS)',
    tooltip: 'The total population as of the reference year',
    get validation() {
      if (this.selected && (this.selected < 1 || this.selected > 1000000000))
        return `${this.label} ${this.type === 'number' ? 'can only contain numeric characters and must be between 1 and 1000000000' : ''}`
    }
  },
  Urban_Pop_Coast_SMSS: {
    name: 'Urban_Pop_Coast_SMSS',
    type: 'number',
    selected: data && data.Urban_Pop_Coast_SMSS || null,
    label: 'Population living in urban coastal areas and hydrological basin at coastal areas with access Safely Managed Sanitation Systems (SMSS)',
    tooltip: 'The urban population as of the reference year',
    get validation() {
      if (this.selected && (this.selected < 1 || this.selected > 1000000000))
        return `${this.label} ${this.type === 'number' ? 'can only contain numeric characters and must be between 1 and 1000000000' : ''}`
    }
  },
  Rural_Pop_Coast_SMSS: {
    name: 'Rural_Pop_Coast_SMSS',
    type: 'number',
    selected: data && data.Rural_Pop_Coast_SMSS || null,
    label: 'Population living in rural coastal areas and hydrological basin at coastal areas with access to Safely Managed Sanitation Systems (SMSS)',
    tooltip: 'The rural population as of the reference year',
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

export default ind_3_2_2_records_structure
