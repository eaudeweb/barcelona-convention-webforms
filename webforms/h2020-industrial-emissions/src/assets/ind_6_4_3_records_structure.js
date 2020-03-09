import reference_years from './reference_years'
import collection_method from './collection_method'

const ind_6_4_3_records_structure = (adminRegions, data) => {
  return {
    administrativeRegion: {
      name: 'administrativeRegion',
        label: 'Administrative regions',
        tooltip: 'Administrative regions located in drainage basins that outflow into the Mediterranean.',
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
    noEliminatedHotspots: {
      name: 'noEliminatedHotspots',
        type: 'number',
        selected: data && data.noEliminatedHotspots || null,
        label: 'No. of eliminated hotspots',
        tooltip: 'Number of eliminated hotspots from the list identified in the updated NAP of 2015',
        get validation() {
        if (this.selected && (this.selected < 0 || this.selected > 1000))
          return `${this.label} ${this.type === 'number' ? 'can only contain numeric characters and must be between 0 and 1000' : ''}`
      }
    },
    noHotspots2001: {
      name: 'noHotspots2001',
        type: 'number',
        selected: data && data.noHotspots2001 || null,
        label: 'Total no. of identified hotspots in 2001',
        tooltip: 'Total number of hotspots identified in 2001',
        get validation() {
        if (this.selected && (this.selected < 0 || this.selected > 1000))
          return `${this.label} ${this.type === 'number' ? 'can only contain numeric characters and must be between 0 and 1000' : ''}`
      }
    },
    noHotspots2015: {
      name: 'noHotspots2015',
        type: 'number',
        selected: data && data.noHotspots2015 || null,
        label: 'Total no. of identified hotspots in 2015',
        tooltip: 'Total number of hotspots identified in the 2015',
        get validation() {
        if (this.selected && (this.selected < 0 || this.selected > 1000))
          return `${this.label} ${this.type === 'number' ? 'can only contain numeric characters and must be between 0 and 1000' : ''}`
      }
    },
    collection_method: {
      name: 'collection_method',
        label: 'Method of data collection',
        tooltip: 'Select a method of data collection from the list.',
        type: 'select',
        selected: data && data.collection_method || null,
        options: collection_method.map(p => ({text: `${p.text}`, value: p.value})),
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
  }
}

export default ind_6_4_3_records_structure
