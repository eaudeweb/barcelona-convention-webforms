import reference_years from './reference_years'
import collection_method from './collection_method'

const ind_6_3_2_records_structure = () => ({
  administrativeRegion: {
    name: 'administrativeRegion',
    label: 'Administrative regions',
    tooltip: 'Administrative regions located in drainage basins that outflow into the Mediterranean.',
    type: 'select',
    selected: null,
    options: [],
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
    label: 'Total quantity of generated industrial hazardous waste',
    tooltip: 'Total quantity of generated industrial hazardous waste (measured in metric tonnes per year)',
    get validation() {
      if (this.selected && (this.selected < 1 || this.selected > 1000000000))
        return `${this.label} ${this.type === 'number' ? 'can only contain numeric characters and must be between 1 and 1000000000' : ''}`
    }
  },
  importedHW: {
    name: 'importedHW',
    type: 'number',
    selected: null,
    label: 'Imported hazardous waste',
    tooltip: 'Total imported quantity of hazardous waste for environmentally sound disposal (measured in metric tonnes per year)',
    get validation() {
      if (this.selected && (this.selected < 1 || this.selected > 1000000000))
        return `${this.label} ${this.type === 'number' ? 'can only contain numeric characters and must be between 1 and 1000000000' : ''}`
    }
  },
  exportedHW: {
    name: 'exportedHW',
    type: 'number',
    selected: null,
    label: 'Exported hazardous waste',
    tooltip: 'Total exported quantity of hazardous waste for environmentally sound disposal (measured in metric tonnes per year)',
    get validation() {
      if (this.selected && (this.selected < 1 || this.selected > 1000000000))
        return `${this.label} ${this.type === 'number' ? 'can only contain numeric characters and must be between 1 and 1000000000' : ''}`
    }
  },
  stokpiledHW: {
    name: 'stokpiledHW',
    type: 'number',
    selected: null,
    label: 'Stockpiled hazardous waste',
    tooltip: 'Total stockpiled quantity of hazardous stored on site under controlled or uncontrolled conditions (measured in metric tonnes per year)',
    get validation() {
      if (this.selected && (this.selected < 1 || this.selected > 1000000000))
        return `${this.label} ${this.type === 'number' ? 'can only contain numeric characters and must be between 1 and 1000000000' : ''}`
    }
  },
  dipositedHW: {
    name: 'dipositedHW',
    type: 'number',
    selected: null,
    label: 'Disposed hazardous waste',
    tooltip: 'Total disposed quantity of industrial hazardous waste in environmentally sound manner (measured in metric tonnes per year)',
    get validation() {
      if (this.selected && (this.selected < 1 || this.selected > 1000000000))
        return `${this.label} ${this.type === 'number' ? 'can only contain numeric characters and must be between 1 and 1000000000' : ''}`
    }
  },
  dispVsGenHW: {
    name: 'dispVsGenHW',
    type: 'number',
    selected: null,
    label: 'Disposed hazardous waste divided by generated hazardous waste and illustrated in percentage',
    tooltip: 'The calculation of the indicator is based on the Disposed_HW in relevance to generated hazardous waste in percentage in the country (Unit: % W/W)',
    get validation() {
      if (this.selected && (this.selected < 1 || this.selected > 1000000000))
        return `${this.label} ${this.type === 'number' ? 'can only contain numeric characters and must be between 1 and 1000000000' : ''}`
    }
  },
  collection_method: {
    name: 'collection_method',
    label: 'Method of data collection',
    tooltip: 'Select a method of data collection from the list.',
    type: 'select',
    selected: null,
    options: collection_method.map(p => ({text: `${p.text}`, value: p.value})),
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

export default ind_6_3_2_records_structure
