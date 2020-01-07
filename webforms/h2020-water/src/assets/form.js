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
      description: 'Access to sanitation',
      form_fields: {
        ind_3_1_1_records: {
          fields: []
        },
        ind_3_1_2_records: {
          fields: []
        },
        ind_3_2_1_records: {
          fields: []
        },
        ind_3_2_2_records: {
          fields: []
        }
      }
    },
    tab_2: {
      description: 'Municipal Wastewater Management',
      form_fields: {
        ind_4_1_1_records: {
          fields: []
        },
        ind_4_1_2_records: {
          fields: []
        },
        ind_4_2_records: {
          fields: []
        },
        ind_4_3_records: {
          fields: []
        }
      }
    },
    tab_3: {
      description: 'Coastal and Marine Water Quality',
      form_fields: {
        ind_5_1_1_records: {
          fields: []
        },
        ind_5_1_2_records: {
          fields: []
        },
        ind_5_2_records: {
          fields: []
        }
      }
    }
  }
})

export default form
