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
        name: 'reported_prtr',
        type: 'select',
        label: 'Monitoring data on pollutants release has already been reported in PRTR system?',
        selected: null,
        options: [
          { text: 'Yes', value: 'yes' },
          { text: 'No', value: 'no' }
        ],
      },
      {
        name: 'complementary_prtr',
        type: 'select',
        label: 'Is there any other data complementary to the PRTR that you can upload to NBB?',
        selected: null,
        options: [
          { text: 'Yes', value: 'yes' },
          { text: 'No', value: 'no' }
        ],
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
        pollutants: [],
        basins: [],
      },
    }

  }

}
export default form
