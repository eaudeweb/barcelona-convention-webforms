import reference_years from './reference_years'
import waste_collection_method from './waste-collection-method'

const ind_2_B_records_structure = (adminRegions, data) => ({
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
    label: 'Administrative regions located in coastal administrative regions',
    tooltip: 'Number of dumpsites which are Administrative regions within 100 km zone of the coast.',
    get validation() {
      if (this.selected && (this.selected < 1 || this.selected > 100))
        return `${this.label} ${this.type === 'number' ? 'can only contain numeric characters and must be between 1 and 100' : ''}`
    }
  },
  wasteRecycledAndReusedWr: {
    name: 'wasteRecycledAndReusedWr',
    type: 'number',
    selected: data && data.wasteRecycledAndReusedWr || null,
    label: 'The amount of waste which is recycled, reused (incl.compost) (kg per year)',
    tooltip: 'The quantity of waste which is recycled, sent for compost and are incinerated (if any)',
    get validation() {
      if (this.selected && (this.selected < 1.00 || this.selected > 1000000.00))
        return `${this.label} ${this.type === 'number' ? 'can only contain numeric characters and must be between 1.00 and 1000000.00' : ''}`
    }
  },
  wasteRecycledAndReusedWe: {
    name: 'wasteRecycledAndReusedWe',
    type: 'number',
    selected: data && data.wasteRecycledAndReusedWe || null,
    label: 'This indicator provides the % of waste generated that is actually handled completely by the formal waste management and recycling system',
    tooltip: 'This indicator provides the % of waste generated that is actually handled completely by the formal waste management and recycling system, thus the waste that is not lost through illegal burning, burying or dumping in unofficial areas. (w/w %) We%=Wf/(W-Wr) (metric tonnes per year)',
    get validation() {
      if (this.selected && (this.selected < 0.01 || this.selected > 100.00))
        return `${this.label} ${this.type === 'number' ? 'can only contain numeric characters and must be between 0.01 and 100.00' : ''}`
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

export default ind_2_B_records_structure
