import reference_years from './reference_years'
import activities from './activities'
import water_collection_method_i from './water-collection-method-i'

const ind_4_2_records_structure = () => ({
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
  Total_Volume_Direct_Reuse: {
    name: 'Total_Volume_Direct_Reuse',
    type: 'number',
    selected: null,
    label: 'Total volume of direct reuse of municipal wastewater',
    tooltip: 'Real measurement of treated wastewater intended to be reused',
    get validation() {
      if (this.selected && (this.selected < 0 || this.selected > 1000000000))
        return `${this.label} ${this.type === 'number' ? 'can only contain numeric characters and must be between 0 and 1000000000' : ''}`
    }
  },
  Fraction_Primary_Treatment_Reuse: {
    name: 'Fraction_Primary_Treatment_Reuse',
    type: 'number',
    selected: null,
    label: 'Fraction of used municipal wastewater subject to primary treatment per year',
    tooltip: 'Fraction of used municipal wastewater after primary treatment expressed as a fraction of volume [%] of treated municipal wastewater per year',
    get validation() {
      if (this.selected && (this.selected < 0.00 || this.selected > 100.00))
        return `${this.label} ${this.type === 'number' ? 'can only contain numeric characters and must be between 0.00 and 100.00' : ''}`
    }
  },
  Fraction_Secondary_Treatment_Reuse: {
    name: 'Fraction_Secondary_Treatment_Reuse',
    type: 'number',
    selected: null,
    label: 'Fraction of used municipal wastewater subject to secondary treatment per year',
    tooltip: 'Fraction of used municipal wastewater after secondary treatment expressed as a fraction of volume [%] of treated municipal wastewater per year',
    get validation() {
      if (this.selected && (this.selected < 0.00 || this.selected > 100.00))
        return `${this.label} ${this.type === 'number' ? 'can only contain numeric characters and must be between 0.00 and 100.00' : ''}`
    }
  },
  Fraction_Tertiary_Treatment_Reuse: {
    name: 'Fraction_Tertiary_Treatment_Reuse',
    type: 'number',
    selected: null,
    label: 'Fraction of used municipal wastewater subject to tertiary treatment per year',
    tooltip: 'Fraction of used  municipal wastewater after tertiary treatment expressed as a fraction of volume [%] of treated municipal wastewater per year',
    get validation() {
      if (this.selected && (this.selected < 0.00 || this.selected > 100.00))
        return `${this.label} ${this.type === 'number' ? 'can only contain numeric characters and must be between 0.00 and 100.00' : ''}`
    }
  },
  activityName: {
    name: 'activityName',
    label: 'Name of activity/sector for which municipal wastewater is used',
    tooltip: 'Select value from the list.',
    type: 'select',
    selected: null,
    options: activities.map(p => ({text: `${p.text}`, value: p.value})),
    get validation() {
      return true
    }
  },
  Total_Volume_Direct_Reuse_Activity: {
    name: 'Total_Volume_Direct_Reuse_Activity',
    type: 'number',
    selected: null,
    label: 'Volume of direct reuse of municipal wastewater per type of activity',
    tooltip: 'Volume of direct reuse of municipal wastewater per type of activity',
    get validation() {
      if (this.selected && (this.selected < 0 || this.selected > 1000000000))
        return `${this.label} ${this.type === 'number' ? 'can only contain numeric characters and must be between 0 and 1000000000' : ''}`
    }
  },
  water_collection_method: {
    name: 'water_collection_method',
    label: 'Method of data collection',
    tooltip: 'Select a method of data collection from the list.',
    type: 'select',
    selected: null,
    options: water_collection_method_i.map(p => ({text: `${p.text}`, value: p.value})),
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

export default ind_4_2_records_structure
