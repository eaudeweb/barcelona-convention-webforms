import reference_years from './reference_years'
import water_collection_method_i from './water-collection-method-i'

const ind_4_1_1_records_structure = (data) => ({
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
  Volume_Collected_MWW: {
    name: 'Volume_Collected_MWW',
    type: 'number',
    selected: data && data.Volume_Collected_MWW || null,
    label: 'Volume of municipal wastewater collected by public sewage networks and from storage tanks per year',
    tooltip: 'Volume in million m3 (Mm3) of municipal wastewater collected, which is estimated based on the volume of wastewater entering the WWTPs, per year',
    get validation() {
      if (this.selected && (this.selected < 0 || this.selected > 1000000000))
        return `${this.label} ${this.type === 'number' ? 'can only contain numeric characters and must be between 0 and 1000000000' : ''}`
    }
  },
  Volume_Treated_MWW: {
    name: 'Volume_Treated_MWW',
    type: 'number',
    selected: data && data.Volume_Treated_MWW || null,
    label: 'Volume of municipal wastewater treated in wastewater treatment plants per year',
    tooltip: 'Volume in million m3 of municipal wastewater treated, which is estimated on wastewater leaving the WWTPs per year',
    get validation() {
      if (this.selected && (this.selected < 0 || this.selected > 1000000000))
        return `${this.label} ${this.type === 'number' ? 'can only contain numeric characters and must be between 0 and 1000000000' : ''}`
    }
  },
  Fraction_Primary_Treatment: {
    name: 'Fraction_Primary_Treatment',
    type: 'number',
    selected: data && data.Fraction_Primary_Treatment || null,
    label: 'Fraction of municipal wastewater subject to primary treatment per year',
    tooltip: 'Percentage of municipal wastewater discharged after primary treatment expressed as a fraction of volume [%] of treated municipal wastewater per year',
    get validation() {
      if (this.selected && (this.selected < 0.00 || this.selected > 100.00))
        return `${this.label} ${this.type === 'number' ? 'can only contain numeric characters and must be between 0.00 and 100.00' : ''}`
    }
  },
  Fraction_Secondary_Treatment: {
    name: 'Fraction_Secondary_Treatment',
    type: 'number',
    selected: data && data.Fraction_Secondary_Treatment || null,
    label: 'Fraction of municipal wastewater subject to secondary treatment per year',
    tooltip: 'Percentage of municipal wastewater discharged after secondary treatment expressed as a fraction of volume [%] of treated municipal wastewater per year',
    get validation() {
      if (this.selected && (this.selected < 0.00 || this.selected > 100.00))
        return `${this.label} ${this.type === 'number' ? 'can only contain numeric characters and must be between 0.00 and 100.00' : ''}`
    }
  },
  Fraction_Tertiary_Treatment: {
    name: 'Fraction_Tertiary_Treatment',
    type: 'number',
    selected: data && data.Fraction_Tertiary_Treatment || null,
    label: 'Fraction of municipal wastewater subject to tertiary treatment per year',
    tooltip: 'Percentage of municipal wastewater discharged after tertiary treatment expressed as a fraction of volume [%] of treated municipal wastewater per year \n' +
      '\n' +
      'The sum of % of MWW receiving primary, secondary and tertiary must equal 100%',
    get validation() {
      if (this.selected && (this.selected < 0.00 || this.selected > 100.00))
        return `${this.label} ${this.type === 'number' ? 'can only contain numeric characters and must be between 0.00 and 100.00' : ''}`
    }
  },
  Design_Capacity1: {
    name: 'Design_Capacity1',
    type: 'number',
    selected: data && data.Design_Capacity1 || null,
    label: 'Total  annual design capacity of functional facilities (Million m3/year)',
    tooltip: 'Volume in million m3 per year',
    get validation() {
      if (this.selected && (this.selected < 0 || this.selected > 1000000000))
        return `${this.label} ${this.type === 'number' ? 'can only contain numeric characters and must be between 0 and 1000000000' : ''}`
    }
  },
  Design_Capacity2: {
    name: 'Design_Capacity2',
    type: 'number',
    selected: data && data.Design_Capacity2 || null,
    label: 'Total  annual design capacity of functional facilities in p.e. (if volume not available)',
    tooltip: 'Population Equivalent (p.e.)',
    get validation() {
      if (this.selected && (this.selected < 0 || this.selected > 1000000000))
        return `${this.label} ${this.type === 'number' ? 'can only contain numeric characters and must be between 0 and 1000000000' : ''}`
    }
  },
  Number_MWWTPs: {
    name: 'Number_MWWTPs',
    type: 'number',
    selected: data && data.Number_MWWTPs || null,
    label: 'Total number of functional Municipal Wastewater Treatment Plants',
    tooltip: 'Number',
    get validation() {
      if (this.selected && (this.selected < 0 || this.selected > 100000))
        return `${this.label} ${this.type === 'number' ? 'can only contain numeric characters and must be between 0 and 100000' : ''}`
    }
  },
  water_collection_method: {
    name: 'water_collection_method',
    label: 'Method of data collection',
    tooltip: 'Select a method of data collection from the list.',
    type: 'select',
    selected: data && data.water_collection_method || null,
    options: water_collection_method_i.map(p => ({text: `${p.text}`, value: p.value})),
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

export default ind_4_1_1_records_structure
