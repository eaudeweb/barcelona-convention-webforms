import reference_years from './reference_years'

const ind_2_B_3_records_structure = () => ({
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
  wasteUncontrolledWdC: {
    name: 'wasteUncontrolledWdC',
    type: 'number',
    selected: null,
    label: 'Percentage of waste that is going to uncontrolled dumpsites in the coastal administrative region. (w/w %)',
    tooltip: 'This indicator provides the % of the waste that goes to the dumpsites located in the coastal administrative regions. (This indictor is the same indicators 2.B.1 in coastal geographical scale).',
    get validation() {
      if (this.selected && (this.selected < 0.01 || this.selected > 100.00))
        return `${this.label} ${this.type === 'number' ? 'can only contain numeric characters and must be between 0.011 and 100.00' : ''}`
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

export default ind_2_B_3_records_structure
