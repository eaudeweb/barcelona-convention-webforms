const ind_Q_A_records_structure = (data) => ({
  QA1: {
    name: 'QA1',
    type: 'select',
    selected: data && data.QA1 || null,
    label: 'Is there a National Assessment for ML and its impacts?',
    options: [
      {text: 'Yes', value: 1},
      {text: 'No', value: 2}
    ],
    get validation() {
      if (this.selected === null) {
        return `${this.label} is required`
      }
    }
  },
  QA2: {
    name: 'QA2',
    type: 'select',
    selected: data && data.QA2 || null,
    label: 'Is there a National Plan or Strategy for ML?',
    options: [
      {text: 'Yes', value: 1},
      {text: 'No', value: 2}
    ],
    get validation() {
      if (this.selected === null) {
        return `${this.label} is required`
      }
    }
  },
  QA3: {
    name: 'QA3',
    type: 'select',
    selected: data && data.QA3 || null,
    label: 'Is there a National Plan or Strategy for Waste Management?',
    options: [
      {text: 'Yes', value: 1},
      {text: 'No', value: 2}
    ],
    get validation() {
      if (this.selected === null) {
        return `${this.label} is required`
      }
    }
  },
  QA4: {
    name: 'QA4',
    type: 'select',
    selected: data && data.QA4 || null,
    label: 'Is there a National Law on Waste?',
    options: [
      {text: 'Yes', value: 1},
      {text: 'No', value: 2}
    ],
    get validation() {
      if (this.selected === null) {
        return `${this.label} is required`
      }
    }
  },
  QA5: {
    name: 'QA5',
    type: 'select',
    selected: data && data.QA5 || null,
    label: 'Is there a specific plan or a specific target to close the dumpsites before 2030?',
    options: [
      {text: 'Yes', value: 1},
      {text: 'No', value: 2}
    ],
    get validation() {
      if (this.selected === null) {
        return `${this.label} is required`
      }
    }
  },
  QA6: {
    name: 'QA6',
    type: 'select',
    selected: data && data.QA6 || null,
    label: 'Is there a National Information System for waste management in place?',
    options: [
      {text: 'Yes', value: 1},
      {text: 'No', value: 2}
    ],
    get validation() {
      if (this.selected === null) {
        return `${this.label} is required`
      }
    }
  }
})

export default ind_Q_A_records_structure
