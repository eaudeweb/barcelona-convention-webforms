const ind_Q_C_records_structure = () => ({
  QC1: {
    name: 'QC1',
    type: 'select',
    selected: null,
    label: 'Are there Sustainable Consumption and Production plans or strategies?',
    options: [
      {text: 'Yes', value: true},
      {text: 'No', value: false}
    ],
    get validation() {
      if (this.selected === null) {
        return `${this.label} is required`
      }
    }
  },
  QC2: {
    name: 'QC2',
    type: 'select',
    selected: null,
    label: 'Are there green procurement rules for the public sector in place?',
    options: [
      {text: 'Yes', value: true},
      {text: 'No', value: false}
    ],
    get validation() {
      if (this.selected === null) {
        return `${this.label} is required`
      }
    }
  },
  QC3: {
    name: 'QC3',
    type: 'select',
    selected: null,
    label: 'Are there policies to support sustainable tourism?',
    options: [
      {text: 'Yes', value: true},
      {text: 'No', value: false}
    ],
    get validation() {
      if (this.selected === null) {
        return `${this.label} is required`
      }
    }
  },
  QC4: {
    name: 'QC4',
    type: 'select',
    selected: null,
    label: 'Are there policies to support eco-labelling and eco-design?',
    options: [
      {text: 'Yes', value: true},
      {text: 'No', value: false}
    ],
    get validation() {
      if (this.selected === null) {
        return `${this.label} is required`
      }
    }
  }
})

export default ind_Q_C_records_structure
