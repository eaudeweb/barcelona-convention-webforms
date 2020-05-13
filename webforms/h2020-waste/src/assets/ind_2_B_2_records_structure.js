import reference_years from './reference_years'

const ind_2_B_2_records_structure = (adminRegions, data) => ({
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
    tooltip: 'Year for which data is available. Select an option from the list.',
    options: reference_years.map(p => ({text: `${p.text}`, value: p.value})),
    get validation() {
      if (!this.selected)
        return `${this.label} is required`
    }
  },
  noDumpsitesCoastalAdminRegions: {
    name: 'noDumpsitesCoastalAdminRegions',
    type: 'number',
    selected: data && data.noDumpsitesCoastalAdminRegions || null,
    label: 'Dumpsite located in coastal administrative regions',
    tooltip: 'Number of dumpsites which are in Administrative regions within 100 km zone of the coast.',
    get validation() {
      if (this.selected && (this.selected < 1 || this.selected > 100))
        return `${this.label} ${this.type === 'number' ? 'can only contain numeric characters and must be between 1 and 100' : ''}`
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

export default ind_2_B_2_records_structure
