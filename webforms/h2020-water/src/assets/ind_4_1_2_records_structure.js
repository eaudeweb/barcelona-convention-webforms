import reference_years from './reference_years'
import water_collection_method_i from './water-collection-method-i'

const ind_4_1_2_records_structure = (data) => ({
  hydrologicalBasin: {
    name: 'hydrologicalBasin',
    label: 'Name of catchment/ hydrological basin at the coastal area',
    //tooltip: 'Name of catchment/ hydrological basin at the coastal area according to codelist',
    tooltip: 'Name of catchment/ hydrological basin at the coastal area',
    // type: 'select',
    type: 'text',
    selected: data && data.hydrologicalBasin || null,
    // options: reference_years.map(p => ({text: `${p.text}`, value: p.value})),
    get validation() {
      if (!this.selected)
        return `${this.label} is required`
    }
  },
  coastalAgglomeration: {
    name: 'coastalAgglomeration',
    label: 'Name of coastal city/agglomeration',
    tooltip: 'Name of coastal city/agglomeration',
    // type: 'select',
    type: 'text',
    selected: data && data.coastalAgglomeration || null,
    // options: reference_years.map(p => ({text: `${p.text}`, value: p.value})),
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
  Volume_MWW_Collected_Hydro_Coast: {
    name: 'Volume_MWW_Collected_Hydro_Coast',
    type: 'number',
    selected: data && data.Volume_MWW_Collected_Hydro_Coast || null,
    label: 'Volume of municipal wastewater collected by public sewage networks and from storage tanks in  the coastal hydrological basin',
    tooltip: 'Volume in million m3 of municipal wastewater collected per year',
    get validation() {
      if (this.selected && (this.selected < 0 || this.selected > 1000000000))
        return `${this.label} ${this.type === 'number' ? 'can only contain numeric characters and must be between 0 and 1000000000' : ''}`
    }
  },
  Volume_MWW_Collected_Coast: {
    name: 'Volume_MWW_Collected_Coast',
    type: 'number',
    selected: data && data.Volume_MWW_Collected_Coast || null,
    label: 'Volume of municipal wastewater collected by public sewage networks and from storage tanks in coastal  cities or coastal area',
    tooltip: 'Volume in million m3 of municipal wastewater collected per year',
    get validation() {
      if (this.selected && (this.selected < 0 || this.selected > 1000000000))
        return `${this.label} ${this.type === 'number' ? 'can only contain numeric characters and must be between 0 and 1000000000' : ''}`
    }
  },
  Volume_Treated_MWW_Hydro_Coast: {
    name: 'Volume_Treated_MWW_Hydro_Coast',
    type: 'number',
    selected: data && data.Volume_Treated_MWW_Hydro_Coast || null,
    label: 'Volume of of wastewater treated in wastewater treatment plants treated in the coastal hydrological basin',
    tooltip: 'Volume in million m3 of municipal wastewater treated per year',
    get validation() {
      if (this.selected && (this.selected < 0 || this.selected > 1000000000))
        return `${this.label} ${this.type === 'number' ? 'can only contain numeric characters and must be between 0 and 1000000000' : ''}`
    }
  },
  Volume_Treated_MWW_Coast: {
    name: 'Volume_Treated_MWW_Coast',
    type: 'number',
    selected: data && data.Volume_Treated_MWW_Coast || null,
    label: 'Volume of of wastewater treated in wastewater treatment plants treated in the coastal cities or coastal area',
    tooltip: 'Volume in million m3 of municipal wastewater treated per year',
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
    tooltip: 'Fraction of municipal wastewater discharge after primary treatment expressed as a fraction of volume [%] of treated municipal wastewater per year \n' +
      '\n' +
      'The sum of % of treated MWW receiving primary, secondary and tertiary must equal 100%',
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
    tooltip: 'Fraction of municipal wastewater discharged after secondary treatment expressed as a fraction of volume [%] of treated municipal wastewater per year \n' +
      '\n' +
      'The sum of % of treated MWW receiving primary, secondary and tertiary must equal 100%.',
    get validation() {
      if (this.selected && (this.selected < 0.00 || this.selected > 100.00))
        return `${this.label} ${this.type === 'number' ? 'can only contain numeric characters and must be between 0.00 and 100.00' : ''}`
    }
  },
  Volume_Tertiary_Treatment: {
    name: 'Volume_Tertiary_Treatment',
    type: 'number',
    selected: data && data.Volume_Tertiary_Treatment || null,
    label: 'Volume of municipal wastewater subject to tertiary treatment per year',
    tooltip: 'Volume of municipal wastewater discharged after tertiary treatment expressed as a fraction of volume [%] of treated municipal wastewater per year \n' +
      '\n' +
      'The sum of % of treated MWW receiving primary, secondary and tertiary must equal 100%',
    get validation() {
      if (this.selected && (this.selected < 0.00 || this.selected > 100.00))
        return `${this.label} ${this.type === 'number' ? 'can only contain numeric characters and must be between 0.00 and 100.00' : ''}`
    }
  },
  Design_Capacity_Coast1: {
    name: 'Design_Capacity_Coast1',
    type: 'number',
    selected: data && data.Design_Capacity_Coast1 || null,
    label: 'Total  annual design capacity of functional facilities in the coastal areas (Million m3/year)',
    tooltip: 'Volume in million m3 per year',
    get validation() {
      if (this.selected && (this.selected < 0 || this.selected > 1000000000))
        return `${this.label} ${this.type === 'number' ? 'can only contain numeric characters and must be between 0 and 1000000000' : ''}`
    }
  },
  Design_Capacity_Coast2: {
    name: 'Design_Capacity_Coast2',
    type: 'number',
    selected: data && data.Design_Capacity_Coast2 || null,
    label: 'Total  annual design capacity of functional facilities in P.E in the coastal (if volume not available)',
    tooltip: 'Population Equivalent (p.e.)',
    get validation() {
      if (this.selected && (this.selected < 0 || this.selected > 1000000000))
        return `${this.label} ${this.type === 'number' ? 'can only contain numeric characters and must be between 0 and 1000000000' : ''}`
    }
  },
  Number_Coast_MWWTPs: {
    name: 'Number_Coast_MWWTPs',
    type: 'number',
    selected: data && data.Number_Coast_MWWTPs || null,
    label: 'Total number of functional Municipal Wastewater Treatment Plants that discharge directly in the Mediterranean Sea or in hydrological basins that flow into the Mediterranean',
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

export default ind_4_1_2_records_structure
