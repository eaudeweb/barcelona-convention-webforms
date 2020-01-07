// import dem_entry from './demographicData'

const form = (country, formData) => ({
  tabs: {
    tab_0: {
      description: 'Information on the reporting Party.',
      form_fields: {
        countryCode: {
          name: 'countryCode',
          type: 'text',
          label: 'Reporting Country',
          selected: country,
          disabled: true,
        },
        reportingYear: {
          name: 'reportingYear',
          type: 'number',
          label: 'Reporting year',
          selected: '2020',
          disabled: true,
        }
      }
    },
    tab_1: {
      description: 'Municipal Waste Generation',
      form_fields: {
        ind_1_1_records: {
          fields: []
        },
        ind_1_A_records: {
          fields: []
        },
        ind_1_B_records: {
          fields: []
        },
        ind_1_C_records: {
          fields: []
        },
        ind_1_D_records: {
          fields: []
        }
      }
    },
    tab_2: {
      description: '"Hardware" of waste management',
      form_fields: {
        ind_2_A_1_records: {
          fields: []
        },
        ind_2_A_2_records: {
          fields: []
        },
        ind_2_B_records: {
          fields: []
        },
        ind_2_B_1_records: {
          fields: []
        },
        ind_2_B_2_records: {
          fields: []
        },
        ind_2_B_3_records: {
          fields: []
        },
        ind_2_C_records: {
          fields: []
        }
      }
    },
    tab_3: {
      description: '"Software" of waste management',
      form_fields: {
        ind_Q_A_records: {
          fields: []
        },
        ind_Q_B_records: {
          fields: []
        },
        ind_Q_C_records: {
          fields: []
        }
      }
    }
  }
})

export default form
