import reference_years from './reference_years'
import waste_collection_method from './waste-collection-method'

const ind_2_A_2_records_structure = (adminRegions, data) => ({
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
  wasteCapturedWs: {
    name: 'wasteCapturedWs',
    type: 'number',
    selected: data && data.wasteCapturedWs || null,
    label: 'The percentage of waste captured by formal system, including landfills, recycling and compost (w/w % on total waste generated)',
    tooltip: 'Formal Waste Sector: Solid waste system, solid waste authorities, government, materials recovery facility; Solid waste management activities planned, sponsored, financed, carried out or, regulated and/or recognized by the formal local authorities or their agents, usually through contracts, licenses or concessions.',
    get validation() {
      if (this.selected && (this.selected < 0.01 || this.selected > 100.00))
        return `${this.label} ${this.type === 'number' ? 'can only contain numeric characters and must be between 0.01 and 100.00' : ''}`
    }
  },
  wasteCapturedWf: {
    name: 'wasteCapturedWf',
    type: 'number',
    selected: data && data.wasteCapturedWf || null,
    label: 'The amount of waste captured by formal system per reference year (tonnes/year)',
    tooltip: 'Formal Waste Sector: Solid waste system, solid waste authorities, government, materials recovery facility; Solid waste management activities planned, sponsored, financed, carried out or, regulated and/or recognized by the formal local authorities or their agents, usually through contracts, licenses or concessions.',
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

export default ind_2_A_2_records_structure
