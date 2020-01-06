import dem_entry from './demographicData'

const form = (country, formData) => ({
  tabs: {
    tab_0: {
      description: 'Information on the reporting Party.',
      form_fields: {
        countryCode: {
          name: 'countryCode',
          type: 'text',
          label: 'Reporting Country',
          selected: '',
          disabled: true,
        },
        reportiogYear: {
          name: 'reportiogYear',
          type: 'number',
          label: 'Reporting year',
          selected: '',
          disabled: true,
        }
      }
    },
    tab_1: {
      description: 'Demographic dataset',
      form_fields: {
        demographic_row: {
          fields: [dem_entry()]
        }
      }
    }
  }
})

export default form
