const ind_Q_B_records_structure = () => ({
  QB1: {
    name: 'QB1',
    type: 'select',
    selected: null,
    label: 'Is there a National Plan or Strategy for Waste Prevention?',
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
  QB2: {
    name: 'QB2',
    type: 'select',
    selected: null,
    label: 'Are there mandatory targets for recycling - recovery of packaging waste?',
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
  QB3: {
    name: 'QB3',
    type: 'select',
    selected: null,
    label: 'Are there EPR or Deposit- Return schemes for packaging waste?',
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
  QB4: {
    name: 'QB4',
    type: 'select',
    selected: null,
    label: 'Are there national policies to eliminate or reduce single-use plastics?',
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
  QB5: {
    name: 'QB5',
    type: 'select',
    selected: null,
    label: 'Are there financial incentives for reuse – resource recovery activities?',
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
})

export default ind_Q_B_records_structure
