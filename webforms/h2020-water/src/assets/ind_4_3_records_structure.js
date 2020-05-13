import reference_years from './reference_years'
import water_collection_method_i from './water-collection-method-i'

const ind_4_3_records_structure = (data) => ({
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
  Total_Pop_Coast_Hydro_Basin: {
    name: 'Total_Pop_Coast_Hydro_Basin',
    type: 'number',
    selected: data && data.Total_Pop_Coast_Hydro_Basin || null,
    label: 'Total population living in the coastal area and in the hydrological basins (catchment) of coastal areas',
    tooltip: 'The population as of the reference year',
    get validation() {
      if (this.selected && (this.selected < 1 || this.selected > 1000000000))
        return `${this.label} ${this.type === 'number' ? 'can only contain numeric characters and must be between 1 and 1000000000' : ''}`
    }
  },
  Total_Pop_more_2000_Inhabitants_Hydro_Coast: {
    name: 'Total_Pop_more_2000_Inhabitants_Hydro_Coast',
    type: 'number',
    selected: data && data.Total_Pop_more_2000_Inhabitants_Hydro_Coast || null,
    label: 'Total population in agglomerations ≥ 2000 inhabitants located within the hydrological basin of coastal areas and within coastal areas that discharge directly in the Mediterranean (in case total population in coastal areas and coastal hydrological basins is not available)',
    tooltip: 'The population as of the reference year',
    get validation() {
      if (this.selected && (this.selected < 1 || this.selected > 1000000000))
        return `${this.label} ${this.type === 'number' ? 'can only contain numeric characters and must be between 1 and 1000000000' : ''}`
    }
  },
  Total_Pop_more_2000_Inhabitants_Coast: {
    name: 'Total_Pop_more_2000_Inhabitants_Coast',
    type: 'number',
    selected: data && data.Total_Pop_more_2000_Inhabitants_Coast || null,
    label: 'Total population living in coastal agglomerations ≥ 2000 inhabitants',
    tooltip: 'The population as of the reference year',
    get validation() {
      if (this.selected && (this.selected < 1 || this.selected > 1000000000))
        return `${this.label} ${this.type === 'number' ? 'can only contain numeric characters and must be between 1 and 1000000000' : ''}`
    }
  },
  Total_UWW_Generated_Hydro_Coast: {
    name: 'Total_UWW_Generated_Hydro_Coast',
    type: 'number',
    selected: data && data.Total_UWW_Generated_Hydro_Coast || null,
    label: 'Estimated urban wastewater generated annually in the coastal hydrological basin in p. e.',
    tooltip: 'Sum of generated urban wastewater (in population equivalent) in the hydrological basins (catchments) of coastal areas and in the coastal agglomerations directly discharging into the coastal areas',
    get validation() {
      if (this.selected && (this.selected < 0 || this.selected > 1000000000))
        return `${this.label} ${this.type === 'number' ? 'can only contain numeric characters and must be between 0 and 1000000000' : ''}`
    }
  },
  Total_UWW_Generated_Coast: {
    name: 'Total_UWW_Generated_Coast',
    type: 'number',
    selected: data && data.Total_UWW_Generated_Coast || null,
    label: 'Estimated urban wastewater generated annually in the coastal agglomerations in p. e.',
    tooltip: 'Generated urban wastewater (in population equivalent) in the coastal agglomerations directly discharging into the coastal areas',
    get validation() {
      if (this.selected && (this.selected < 0 || this.selected > 1000000000))
        return `${this.label} ${this.type === 'number' ? 'can only contain numeric characters and must be between 0 and 1000000000' : ''}`
    }
  },
  Total_Volume_Discharged_MWWTP_Hydro_Coast: {
    name: 'Total_Volume_Discharged_MWWTP_Hydro_Coast',
    type: 'number',
    selected: data && data.Total_Volume_Discharged_MWWTP_Hydro_Coast || null,
    label: 'Total volume of urban wastewater discharged annually by WWTPs in the hydrological basin (catchment) of coastal area and directly in the coastal areas',
    tooltip: 'Total treated and discharged volume of urban wastewater from existing Municipal WWTPs in the hydrological basin (catchments) of coastal areas and in the coastal agglomerations',
    get validation() {
      if (this.selected && (this.selected < 1 || this.selected > 1000000000))
        return `${this.label} ${this.type === 'number' ? 'can only contain numeric characters and must be between 1 and 1000000000' : ''}`
    }
  },
  Total_Volume_Discharged_MWWTP_Coast: {
    name: 'Total_Volume_Discharged_MWWTP_Coast',
    type: 'number',
    selected: data && data.Total_Volume_Discharged_MWWTP_Coast || null,
    label: 'Total volume of urban wastewater discharged annually by WWTPs directly in the coastal areas',
    tooltip: 'Total treated and discharged volume of urban wastewater from existing Municipal WWTPs in the coastal agglomerations',
    get validation() {
      if (this.selected && (this.selected < 1 || this.selected > 1000000000))
        return `${this.label} ${this.type === 'number' ? 'can only contain numeric characters and must be between 1 and 1000000000' : ''}`
    }
  },
  Estimated_BOD_Load_Treat: {
    name: 'Estimated_BOD_Load_Treat',
    type: 'number',
    selected: data && data.Estimated_BOD_Load_Treat || null,
    label: 'Estimated BOD load discharged annually from Municipal WWTPs',
    tooltip: 'BOD loads from treated WWTP after primary, secondary and tertiary treatment',
    get validation() {
      if (this.selected && (this.selected < 0 || this.selected > 1000000000))
        return `${this.label} ${this.type === 'number' ? 'can only contain numeric characters and must be between 0 and 1000000000' : ''}`
    }
  },
  Estimated_TN_Load_Treat: {
    name: 'Estimated_TN_Load_Treat',
    type: 'number',
    selected: data && data.Estimated_TN_Load_Treat || null,
    label: 'Estimated Total Nitrogen  load discharged annually from Municipal WWTPs',
    tooltip: 'TN loads from treated WWTP after primary, secondary and tertiary treatment',
    get validation() {
      if (this.selected && (this.selected < 0 || this.selected > 1000000000))
        return `${this.label} ${this.type === 'number' ? 'can only contain numeric characters and must be between 0 and 1000000000' : ''}`
    }
  },
  Estimated_TP_Load_Treat: {
    name: 'Estimated_TP_Load_Treat',
    type: 'number',
    selected: data && data.Estimated_TP_Load_Treat || null,
    label: 'Estimated Total Phosphorus load discharged annually from Municipal WWTPs',
    tooltip: 'TP loads from treated WWTP after primary, secondary and tertiary treatment',
    get validation() {
      if (this.selected && (this.selected < 0 || this.selected > 1000000000))
        return `${this.label} ${this.type === 'number' ? 'can only contain numeric characters and must be between 0 and 1000000000' : ''}`
    }
  },
  Total_Volume_Untreated_WW_Hydro_Coast: {
    name: 'Total_Volume_Untreated_WW_Hydro_Coast',
    type: 'number',
    selected: data && data.Total_Volume_Untreated_WW_Hydro_Coast || null,
    label: 'Total volume of wastewater discharged without treatment in the hydrological basin (catchment) of coastal area and directly in the coastal areas',
    tooltip: 'Total volume of wastewater discharged without treatment in the hydrological basin (catchment) of coastal area and directly in the coastal areas',
    get validation() {
      if (this.selected && (this.selected < 1 || this.selected > 1000000000))
        return `${this.label} ${this.type === 'number' ? 'can only contain numeric characters and must be between 1 and 1000000000' : ''}`
    }
  },
  BOD_Load_MWW_Untreated_Hydro_Coast: {
    name: 'BOD_Load_MWW_Untreated_Hydro_Coast',
    type: 'number',
    selected: data && data.BOD_Load_MWW_Untreated_Hydro_Coast || null,
    label: 'Estimated BOD load discharged annually from untreated MWW',
    tooltip: 'Estimated BOD loads for wastewater discharged without treatment in the hydrological basin (catchments) of coastal areas and in the coastal agglomeration.\n' +
      'Person load\n' +
      'BOD, g/person/d (15-80); COD, g/person/d (25-200)',
    get validation() {
      if (this.selected && (this.selected < 0 || this.selected > 1000000000))
        return `${this.label} ${this.type === 'number' ? 'can only contain numeric characters and must be between 0 and 1000000000' : ''}`
    }
  },
  TN_Load_MWW_Untreated_Hydro_Coast: {
    name: 'TN_Load_MWW_Untreated_Hydro_Coast',
    type: 'number',
    selected: data && data.TN_Load_MWW_Untreated_Hydro_Coast || null,
    label: 'Estimated TN load discharged annually from untreated MWW',
    tooltip: 'Estimated TN loads for wastewater discharged without treatment in the hydrological basin (catchments) of coastal areas and in the coastal agglomeration.\n' +
      'Person load\n' +
      'Nitrogen g/person/d (2-15)',
    get validation() {
      if (this.selected && (this.selected < 0 || this.selected > 1000000000))
        return `${this.label} ${this.type === 'number' ? 'can only contain numeric characters and must be between 0 and 1000000000' : ''}`
    }
  },
  TP_Load_MWW_Untreated_Hydro_Coast: {
    name: 'TP_Load_MWW_Untreated_Hydro_Coast',
    type: 'number',
    selected: data && data.TP_Load_MWW_Untreated_Hydro_Coast || null,
    label: 'Estimated TP load discharged annually from MWW collected without treatment',
    tooltip: 'Estimated TP loads for wastewater discharged without treatment in the hydrological basin (catchments) of coastal areas and in the coastal agglomeration.\n' +
      'Person load\n' +
      'Phosphorus, g/person/d (1-3)',
    get validation() {
      if (this.selected && (this.selected < 0 || this.selected > 1000000000))
        return `${this.label} ${this.type === 'number' ? 'can only contain numeric characters and must be between 0 and 1000000000' : ''}`
    }
  },
  Total_BOD_Load_Hydro_Coast: {
    name: 'Total_BOD_Load_Hydro_Coast',
    type: 'number',
    selected: data && data.Total_BOD_Load_Hydro_Coast || null,
    label: 'Total BOD load discharged annually from treated and untreated MWW',
    tooltip: 'Total discharged BOD loads from treated and untreated wastewater originating in agglomerations (of size ≥2000) located in the hydrological basin of coastal areas and those directly discharging into the Mediterranean, as defined by the LBS Protocol',
    get validation() {
      if (this.selected && (this.selected < 0 || this.selected > 1000000000))
        return `${this.label} ${this.type === 'number' ? 'can only contain numeric characters and must be between 0 and 1000000000' : ''}`
    }
  },
  TN_Load_Hydro_Coast: {
    name: 'TN_Load_Hydro_Coast',
    type: 'number',
    selected: data && data.TN_Load_Hydro_Coast || null,
    label: 'Total Nitrogen load discharged annually from treated and untreated MWW',
    tooltip: 'Total discharged Nitrogen loads from treated and untreated wastewater originating in agglomerations (of size ≥2000) located in the hydrological basin of coastal areas and those directly discharging into the Mediterranean, as defined by the LBS Protocol',
    get validation() {
      if (this.selected && (this.selected < 0 || this.selected > 1000000000))
        return `${this.label} ${this.type === 'number' ? 'can only contain numeric characters and must be between 0 and 1000000000' : ''}`
    }
  },
  TP_Load_Hydro_Coast: {
    name: 'TP_Load_Hydro_Coast',
    type: 'number',
    selected: data && data.TP_Load_Hydro_Coast || null,
    label: 'Total Phosphorus load discharged annually from treated and untreated MWW',
    tooltip: 'Total discharged Phosphorus loads from treated and untreated wastewater originating in agglomerations (of size ≥2000) located in the hydrological basin of coastal areas and those directly discharging into the Mediterranean, as defined by the LBS Protocol',
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

export default ind_4_3_records_structure
