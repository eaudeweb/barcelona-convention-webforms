const ind_5_2_records_structure = (data) => ({
  bathingWaterName: {
    name: 'bathingWaterName',
    label: 'Name of bathing water',
    tooltip: 'Use the former sampling guidelines provided by UNEP-MAP',
    type: 'text',
    selected: data && data.bathingWaterName || null,
    get validation() {
      if (this.selected && (this.selected.length < 1 || this.selected.length  > 100))
        return `${this.label} ${this.type === 'text' ? 'the length must be between 1 and 100' : ''}`
    }
  },
  shortBathingWaterName: {
    name: 'shortBathingWaterName',
    label: 'Short name of bathing water',
    tooltip: 'Must be ≤ 20 characters.\n' +
      'If Bathing Water Name ≤ 20 characters it can be used for ShortBathingWaterName as well.',
    type: 'text',
    selected: data && data.shortBathingWaterName || null,
    get validation() {
      if (this.selected && (this.selected.length < 1 || this.selected.length  > 20))
        return `${this.label} ${this.type === 'text' ? 'the length must be between 1 and 20' : ''}`
    }
  },
  bathingWaterID: {
    name: 'bathingWaterID',
    label: 'Unique identification code of bathing water',
    tooltip: 'This is a required, not null field. Must be unique according to each country guidance',
    type: 'text',
    selected: data && data.bathingWaterID || null,
    get validation() {
      if (!this.selected)
        return `${this.label} is required`
    }
  },
  Longitude_BW: {
    name: 'Longitude_BW',
    type: 'number',
    selected: data && data.Longitude_BW || null,
    label: 'Longitude in the reference system WGS84 decimal degrees',
    tooltip: 'This is a required, not null field. Use the common geodetic datum WGS84. The bathing water must be located within country border.',
    get validation() {
      if (!this.selected)
        return `${this.label} is required`
      if (this.selected && (this.selected < -180 || this.selected > 180))
        return `${this.label} ${this.type === 'number' ? 'can only contain numeric characters and must be between -180 and 180' : ''}`
    }
  },
  Latitude_BW: {
    name: 'Latitude_BW',
    type: 'number',
    selected: data && data.Latitude_BW || null,
    label: 'Latitude in the reference system WGS84 decimal degrees',
    tooltip: 'This is a required, not null field. Use the common geodetic datum WGS84. The bathing water must be located within country border.',
    get validation() {
      if (!this.selected)
        return `${this.label} is required`
      if (this.selected && (this.selected < -90 || this.selected > 90))
        return `${this.label} ${this.type === 'number' ? 'can only contain numeric characters and must be between -90 and 90' : ''}`
    }
  },
  startDate: {
    name: 'startDate',
    label: 'Start date of the bathing season',
    tooltip: 'This is a required, not null field.\n' +
      'Format: YYYY-MM-DD (year-month -day);\n' +
      'YYYY must be the same as attribute of Bathing_Sampling_Year  (YYYY)\n' +
      'Must be < End_Date',
    type: 'text',
    selected: data && data.startDate || null,
    get validation() {
      if (!this.selected)
        return `${this.label} is required`
    }
  },
  endDate: {
    name: 'endDate',
    label: 'End date of the bathing season',
    tooltip: 'This is a required, not null field.\n' +
      'Format: YYYY-MM-DD (year-month -day);\n' +
      'YYYY must be the same as attribute of Bathing_Sampling_Year  (YYYY)\n' +
      'Must be > Start_Date',
    type: 'text',
    selected: data && data.endDate || null,
    get validation() {
      if (!this.selected)
        return `${this.label} is required`
    }
  },
  bathingSamplingTime: {
    name: 'bathingSamplingTime',
    label: 'Date and time of sampling',
    tooltip: 'his is a required, not null field.\n' +
      'Format: YYYY-MM-DD (year-month -day).',
    type: 'text',
    selected: data && data.bathingSamplingTime || null,
    get validation() {
      if (!this.selected)
        return `${this.label} is required`
    }
  },
  bathingClassificationUNEPMAPCriteria: {
    name: 'bathingClassificationUNEPMAPCriteria',
    label: 'Classification of the bathing site according to the criteria and standards agreed for the Mediterranean',
    tooltip: '% of samples < 100 CFU : Excellent water\n' +
      '101 – 200 CFU1: Good \n' +
      '185 CFU: Sufficient\n' +
      '> 185: Poor',
    type: 'text',
    selected: data && data.bathingClassificationUNEPMAPCriteria || null,
    get validation() {
      if (this.selected && (this.selected.length < 4 || this.selected.length  > 100))
        return `${this.label} ${this.type === 'text' ? 'the length must be between 4 and 100' : ''}`
    }
  },
  otherBathingClassificationUsed: {
    name: 'otherBathingClassificationUsed',
    label: 'Classification of the bathing site when it differs from UNEP-MAP classification',
    tooltip: 'Provide the used Criteria and Standards (please provide the reference document)',
    type: 'text',
    selected: data && data.otherBathingClassificationUsed || null,
    get validation() {
      if (this.selected && (this.selected.length < 4 || this.selected.length  > 100))
        return `${this.label} ${this.type === 'text' ? 'the length must be between 4 and 100' : ''}`
    }
  },
  concentrationIE: {
    name: 'concentrationIE',
    type: 'number',
    selected: data && data.concentrationIE || null,
    label: 'Measured concentration of intestinal enterococci per sample in "colony forming unit" per 100 ml (cfu/100ml)',
    tooltip: 'This is a required, not null field.\n' +
      'Minimum value is minimal detection limit. Zero value is replaced by minimal detection limit. Upper detection limit: 35000 with 2 dilutions for all methods.',
    get validation() {
      if (!this.selected)
        return `${this.label} is required`
      if (this.selected && (this.selected < 0 || this.selected > 35000))
        return `${this.label} ${this.type === 'number' ? 'can only contain numeric characters and must be between 0 and 35000' : ''}`
    }
  },
  concentrationEC: {
    name: 'concentrationEC',
    type: 'number',
    selected: data && data.concentrationEC || null,
    label: 'Measured concentration of Escherichia coli per sample in "colony forming unit" per 100 ml (cfu/100ml)',
    tooltip: 'This is a required, not null field.\n' +
      'Minimum value is minimal detection limit. Zero value is replaced by minimal detection limit. Upper detection limit: 35.000 with 2 dilutions for all methods.',
    get validation() {
      if (!this.selected)
        return `${this.label} is required`
      if (this.selected && (this.selected < 0 || this.selected > 35000))
        return `${this.label} ${this.type === 'number' ? 'can only contain numeric characters and must be between 0 and 35000' : ''}`
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

export default ind_5_2_records_structure
