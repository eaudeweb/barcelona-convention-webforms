import reference_years from './reference_years'
import waste_collection_method from './waste-collection-method'

const ind_2_C_records_structure = (adminRegions) => ({
  administrativeRegion: {
    name: 'administrativeRegion',
    label: 'Administrative regions',
    tooltip: 'The indicator will be reported at national level (optionally all administrative regions).',
    type: 'select',
    selected: null,
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
    selected: null,
    tooltip: 'Year for which data is available. Select an option from the list.',
    options: reference_years.map(p => ({text: `${p.text}`, value: p.value})),
    get validation() {
      if (!this.selected)
        return `${this.label} is required`
    }
  },
  resourceRecoveryRR: {
    name: 'resourceRecoveryRR',
    type: 'number',
    selected: null,
    label: 'Percentage of the total waste recycled and reused',
    tooltip: 'Percentage of the waste that is recycled or reused out of the waste generated.',
    get validation() {
      if (this.selected && (this.selected < 0.01 || this.selected > 100.00))
        return `${this.label} ${this.type === 'number' ? 'can only contain numeric characters and must be between 0.01 and 100.00' : ''}`
    }
  },
  amountRecycledPlastics: {
    name: 'amountRecycledPlastics',
    type: 'number',
    selected: null,
    label: 'The amount of plastics which is recycled, reused (kg/year)',
    tooltip: 'The quantity of waste which is recycled and reused (compost)(if any) (measured in kg per year)',
    get validation() {
      if (this.selected && (this.selected < 1.00 || this.selected > 1000000.00))
        return `${this.label} ${this.type === 'number' ? 'can only contain numeric characters and must be between 1.00 and 1000000.00' : ''}`
    }
  },
  percentageRecycledPlastics: {
    name: 'percentageRecycledPlastics',
    type: 'number',
    selected: null,
    label: 'Percentage of total plastic municipal solid waste generated that is recycled (tonnes/year)',
    tooltip: 'The indicator shows the percentage of total plastic municipal solid waste generated that is recycled. It includes materials recycling only. The amount of recycled plastic divided by total plastic waste generated. Which is calculated in percentage (metric tonnes per year)',
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

export default ind_2_C_records_structure
