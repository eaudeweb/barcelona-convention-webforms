import reference_years from './reference_years'
import waste_collection_method from './waste-collection-method'

const ind_2_B_1_records_structure = () => ({
  administrativeRegion: {
    name: 'administrativeRegion',
    label: 'Administrative regions',
    tooltip: 'The indicator will be reported at national level (optionally all administrative regions).',
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
    tooltip: 'Year for which data is available. Select an option from the list.',
    options: reference_years.map(p => ({text: `${p.text}`, value: p.value})),
    get validation() {
      if (!this.selected)
        return `${this.label} is required`
    }
  },
  wasteUncontrolledWd: {
    name: 'wasteUncontrolledWd',
    type: 'number',
    selected: null,
    label: 'Percentage of waste that is going to uncontrolled. (w/w % )',
    tooltip: 'This indicator provides the % of the waste that goes to the dumpsites, thus it is a measure of the pressure for leakages related to ML and water pollution. In addition, it shows the maturity of the national waste management system. (%Wd=100%-We%), where We% is Indicator 2B.',
    get validation() {
      if (this.selected && (this.selected < 0.01 || this.selected > 100.00))
        return `${this.label} ${this.type === 'number' ? 'can only contain numeric characters and must be between 0.01 and 100.00' : ''}`
    }
  },
  wasteDumpsiteWu: {
    name: 'wasteDumpsiteWu',
    type: 'number',
    selected: null,
    label: 'The amount of waste which is send to uncontrolled dumpsites',
    tooltip: 'Dumpsite: Dump, open dump, uncontrolled waste disposal site; A designated or undesignated site where any kinds of wastes are deposited on land, or burned, or buried, without supervision ad without precautions regarding human health or environment.',
    get validation() {
      if (this.selected && (this.selected < 1.00 || this.selected > 1000000.00))
        return `${this.label} ${this.type === 'number' ? 'can only contain numeric characters and must be between 1.00 and 1000000.00' : ''}`
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

export default ind_2_B_1_records_structure
