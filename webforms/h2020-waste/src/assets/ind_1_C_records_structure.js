import reference_years from './reference_years'
import waste_collection_method from './waste-collection-method'

const ind_1_C_records_structure = (data) => ({
  administrativeRegionCostal: {
    name: 'administrativeRegionCostal',
    label: 'Administrative regions (adiacent to coastline)',
    tooltip: 'Administrative regions which are adiacent to coastline.',
    type: 'text',
    selected: data && data.administrativeRegionCostal || null,
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
  totalPopCoastBufferZone: {
    name: 'totalPopCoastBufferZone',
    type: 'number',
    selected: data && data.totalPopCoastBufferZone || null,
    label: 'Population in coastal areas',
    tooltip: 'Select the urban and rural populations, which are within 100 km buffer zone in the coastal region in Codelist iv (inhabitants)',
    get validation() {
      if (this.selected && (this.selected < 1 || this.selected > 1000000000))
        return `${this.label} ${this.type === 'number' ? 'can only contain numeric characters and must be between 1 and 1000000000' : ''}`
    }
  },
  totalPopulation: {
    name: 'totalPopulation',
    type: 'number',
    selected: data && data.totalPopulation || null,
    label: 'Total population',
    tooltip: 'The population as of the reference year (inhabitants)',
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

export default ind_1_C_records_structure
