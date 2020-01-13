import water_collection_method_i from "./water-collection-method-i";

const ind_5_1_2_records_structure = () => ({
  nationalStationID: {
    name: 'nationalStationID',
    label: 'Station code',
    tooltip: 'Use the former sampling guidelines provided by UNEP-MAP',
    type: 'text',
    selected: null,
    get validation() {
      if (!this.selected)
        return `${this.label} is required`
    }
  },
  samplingTime: {
    name: 'samplingTime',
    label: 'Date and time of sampling',
    tooltip: 'Use the format YYYY-MM-DD HH:MM',
    type: 'text',
    selected: null,
    get validation() {
      if (!this.selected)
        return `${this.label} is required`
    }
  },
  sampleID: {
    name: 'sampleID',
    label: 'Sample code in case multiple replicas are made with the same value of Year, Month, Day and Time',
    tooltip: 'Use the former sampling guidelines provided by UNEP-MAP',
    type: 'text',
    selected: null,
    get validation() {
      if (!this.selected)
        return `${this.label} is required`
    }
  },
  determinantNutrients: {
    name: 'determinantNutrients',
    label: 'Name of the chemical-physical or nutrient parameter',
    tooltip: 'Select a value form the list',
    type: 'select',
    selected: null,
    options: water_collection_method_i.map(p => ({text: `${p.text}`, value: p.value})),
    get validation() {
      return true
    }
  },
  unitNutrientsSeawater: {
    name: 'unitNutrientsSeawater',
    label: 'Unit of parameters',
    tooltip: 'Select a value from the list',
    type: 'select',
    selected: null,
    options: water_collection_method_i.map(p => ({text: `${p.text}`, value: p.value})),
    get validation() {
      return true
    }
  },
  concentrationFlag: {
    name: 'concentrationFlag',
    label: 'Concentration status',
    tooltip: 'Enter the value \'<\' if the concentration value is lower than the limit of quantification or the value \'[\' if the concentration value is lower than the limit of detection. In other cases leave the field empty',
    type: 'text',
    selected: null,
    get validation() {
      return true
    }
  },
  concentration: {
    name: 'concentration',
    label: 'Concentration value',
    tooltip: 'Concentration value',
    type: 'number',
    selected: null,
    get validation() {
      if (this.selected && (this.selected < 0 || this.selected > 1000))
        return `${this.label} ${this.type === 'number' ? 'can only contain numeric characters and must be between 0 and 1000' : ''}`
    }
  },
  concentrationStatusUnit: {
    name: 'concentrationStatusUnit',
    label: 'Concentration unit',
    tooltip: 'Use the former sampling guidelines provided by UNEP-MAP',
    type: 'text',
    selected: null,
    get validation() {
      return true
    }
  },
  sampleDepth: {
    name: 'sampleDepth',
    type: 'number',
    selected: null,
    label: 'Depth of Sample collection (m)',
    tooltip: 'Measured distance between the Sea depth and the station point location',
    get validation() {
      if (this.selected && (this.selected < 0 || this.selected > 1000))
        return `${this.label} ${this.type === 'number' ? 'can only contain numeric characters and must be between 0 and 1000' : ''}`
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

export default ind_5_1_2_records_structure
