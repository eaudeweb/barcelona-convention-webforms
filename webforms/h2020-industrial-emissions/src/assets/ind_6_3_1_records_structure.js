import reference_years from './reference_years'

const ind_6_3_1_records_structure = () => ({
  administrativeRegion: {
    name: 'administrativeRegion',
    label: 'Administrative regions',
    tooltip: 'Administrative regions located in drainage basins that outflow into the Mediterranean.',
    type: 'select',
    selected: null,
    options: reference_years.map(p => ({text: `${p.text}`, value: p.value})),
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
    tooltip: 'Select an option from the list.',
    options: reference_years.map(p => ({text: `${p.text}`, value: p.value})),
    get validation() {
      if (!this.selected)
        return `${this.label} is required`
    }
  },
  generatedHW: {
    name: 'generatedHW',
    type: 'number',
    selected: null,
    label: 'Generated industrial hazardous waste at national level ',
    tooltip: 'Total quantity of generated hazardous waste from individual industrial installations as of the reference year (measured in metric tonnes per year)',
    get validation() {
      if (this.selected && (this.selected < 1 || this.selected > 1000000000))
        return `${this.label} ${this.type === 'number' ? 'can only contain numeric characters and must be between 1 and 1000000000' : ''}`
    }
  },
  sector_id: {
    name: 'sector_id',
    label: 'Industrial Sector',
    tooltip: 'Sectors according to LBS Protocol 30 categories. Select an option from the list.',
    type: 'select',
    selected: null,
    options: reference_years.map(p => ({text: `${p.text}`, value: p.value})),
    get validation() {
      return true
    }
  },
  subsector_id: {
    name: 'subsector_id',
    label: 'Subsectors Sector',
    tooltip: 'Select an option from the list.',
    type: 'select',
    selected: null,
    options: reference_years.map(p => ({text: `${p.text}`, value: p.value})),
    get validation() {
      return true
    }
  },
  collection_method: {
    name: 'collection_method',
    label: 'Method of data collection',
    tooltip: 'Select a method of data collection from the list.',
    type: 'select',
    selected: null,
    options: reference_years.map(p => ({text: `${p.text}`, value: p.value})),
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

export default ind_6_3_1_records_structure
