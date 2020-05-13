import reference_years from './reference_years'
import msw_fractions from './msw-fractions'
import waste_collection_method from './waste-collection-method'

const ind_1_A_records_structure = (adminRegions, data) => ({
  administrativeRegion: {
    name: 'administrativeRegion',
    label: 'Administrative regions',
    tooltip: 'The indicator will be reported at national level (optionally all administrative regions).',
    type: 'select',
    selected: data && data.administrativeRegion || null,
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
    selected: data && data.year || null,
    tooltip: 'Select an option from the list.',
    options: reference_years.map(p => ({text: `${p.text}`, value: p.value})),
    get validation() {
      if (!this.selected)
        return `${this.label} is required`
    }
  },
  frcID: {
    name: 'frcID',
    label: 'Fraction of MSW',
    type: 'select',
    selected: data && data.frcID || null,
    tooltip: 'Select an option from the list.',
    options: msw_fractions.map(p => ({text: `${p.text}`, value: p.value})),
    get validation() {
      return true
    }
  },
  frcMSWComposition: {
    name: 'frcMSWComposition',
    type: 'number',
    selected: data && data.frcMSWComposition || null,
    label: 'Summery composition of MSW as generated',
    tooltip: 'Municipal waste composition fractions in percentage (w/w % on wet basis) according to Codelist iii. Calculated at national level',
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
    selected: data && data.waste_collection_method || null,
    options: waste_collection_method.map(p => ({text: `${p.text}`, value: p.value})),
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

export default ind_1_A_records_structure
