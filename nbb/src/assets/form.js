var form = {

  country: {
    tables: [{
        name: 'partyname',
        type: 'text',
        label: 'Contracting Party',
        selected: '',
      },
      {
        name: 'rep_period_from',
        type: 'date',
        label: 'Reporting period from D/M/Y',
        selected: '',
      },
      {
        name: 'rep_period_to',
        type: 'date',
        label: 'Reporting period to D/M/Y',
        selected: '',
      },
      {
        name: 'region',
        type: 'select',
        label: 'Region',
        selected: '',
      },
    ]
  },

  content: {

    label: 'Baseline of region ',
    data: {
      table: {
        pollutants: [{
          pollutant_title: {
            name: 'pollutant',
            type: 'select',
            label: 'Pollutant',
            selected: '',
            options: [],
            required: true,
          },
          pollutant_items: [{
              label: 'Year',
              type: 'select',
              name: 'year',
              selected: '',
              options: [],
              required: true,

            }, {
              label: 'Sector',
              type: 'select',
              name: 'sector',
              selected: '',
              options: [],
              required: true,

            }, {
              label: 'Subsector',
              type: 'select',
              name: 'subsector',
              selected: '',
              options: [],
              required: true,

            }, {
              label: 'Process',
              type: 'select',
              name: 'process',
              selected: null,
              options: [],
            }, {
              label: 'Facility',
              type: 'select',
              name: 'facility',
              selected: '',
              options: [],
            }, {
              label: 'From PRTR',
              type: 'checkbox',
              name: 'from_prtr',
              selected: false,
              options: [{ value: false, text: '' }, { value: true, text: '' }]
            },
            {
              label: 'Estimated based on',
              type: 'select',
              name: 'estimated',
              selected: '',
              options: [],
              required: true,

            },
            {
              label: 'Emission factor',
              type: 'number',
              name: 'emission_factor',
              validation: 'double',
              selected: '',
              required: true,
            },
            {
              label: 'Emission factor unit',
              type: 'select',
              name: 'emission_factor_unit',
              selected: '',
              options: [],
            },
            {
              label: 'Production',
              type: 'number',
              name: 'production',
              validation: 'double',
              selected: '',
              required: true,
            },
            {
              label: 'Production unit',
              type: 'select',
              name: 'production_unit',
              selected: '',
              options: [],
              required: true,
            },
            {
              label: 'Total releases',
              type: 'number',
              name: 'total_releases',
              validation: 'double',
              selected: '',
              disabled: true,
            },
            {
              label: 'Total releases unit',
              type: 'select',
              name: 'total_releases_unit',
              selected: '',
              options: [],
              disabled: true,
            },
          ]
        }, ]
      },
    }

  }

}
export default form
