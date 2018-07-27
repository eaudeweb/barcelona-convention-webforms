var incident = {
  article_title: {
    label: "Ship name or IMO number",
    value: 'Ship name or IMO number',
    name: 'name',
    type: 'text'
  },
  article_items: [{
      type: 'text',
      name: 'latitude',
      label: 'Latitude: decimal (36.406944) or DMS (36°24\'25”N)',
      selected: '',
    },
    {
      type: 'text',
      name: 'longitude',
      label: 'Longitude: decimal (4.646111) or DMS(4°38\'46”)',
      selected: '',
    },
    {
      type: 'text',
      name: 'geo_info',
      label: 'Alternative geographical information',
      selected: '',
      placeholder: 'e.g. closest shore location'
    },
    {
      type: 'text',
      name: 'country',
      label: 'Country',
      selected: '',
    },
    {
      type: 'select',
      label: 'Accident Type',
      name: 'accident',
      selected: null,
      options: [
        { text: 'Please select one item', value: null },
        { text: 'Blow-out', value: 1 },
        { text: 'cargo transfer failure', value: 2 },
        { text: 'contact', value: 3 },
        { text: 'collision', value: 4 },
        { text: 'engine or machine breakdown', value: 5 },
        { text: 'fire or explosion', value: 6 },
        { text: 'grounding', value: 7 },
        { text: 'foundering', value: 8 },
        { text: 'hull structural failure', value: 9 },
        { text: 'installation structural failure', value: 10 },
        { text: 'oil and gas leak', value: 11 },
        { text: 'other', value: 12 }
      ]
    },
    {
      type: 'date',
      name: 'date',
      label: 'Date',
      selected: '',
    },
    {
      label: 'Pollution',
      type: 'radio',
      name: 'pollution',
      selected: null,
      options: [
        { text: 'Yes', value: true },
        { text: 'No', value: false }
      ]
    },
    {
      label: 'Pollution type',
      type: 'radio',
      name: 'pollution_type',
      selected: null,
      options: [
        { text: 'MARPOL Annex I', value: 1 },
        { text: 'MARPOL Annex II ', value: 2 },
        { text: 'MARPOL Annex III ', value: 3 }

      ]
    },
    {
      type: 'select',
      label: 'Ship Category',
      name: 'ship_category',
      selected: null,
      options: [
        { text: 'Please select one item', value: null },
        { text: 'passenger ship', value: 1 },
        { text: 'fishing vessel', value: 2 },
        { text: 'bulk carrier', value: 3 },
        { text: 'oil tanker', value: 4 },
        { text: 'general cargo ship', value: 5 },
        { text: 'ro-ro cargo ship', value: 6 },
        { text: 'container', value: 7 },
        { text: 'chemical tanker', value: 8 },
        { text: 'other', value: 9 }
      ]
    },
    {
      type: 'text',
      name: 'ship_flag',
      label: 'Ship flag',
      selected: '',
    },
    {
      type: 'text',
      name: 'offshore_name_id',
      label: 'Offshore installation name or ID number',
      selected: '',
    },
    {
      type: 'select',
      label: 'Offshore installation type',
      name: 'installation_type',
      selected: null,
      options: [
        { text: 'Please select one item', value: null },
        { text: 'floating concrete', value: 1 },
        { text: 'gravity-based concrete', value: 2 },
        { text: 'floating steel', value: 3 },
        { text: 'fixed steel', value: 4 },
        { text: 'subsea steel ', value: 5 },
        { text: 'other', value: 6 }
      ]
    },
    {
      type: 'text',
      name: 'oil_name_id',
      label: 'Oil handling facility name or ID number',
      selected: '',
    },
    {
      type: 'select',
      label: 'Oil handling facility type',
      name: 'oil_type',
      selected: null,
      options: [
        { text: 'Please select one item', value: null },
        { text: 'Oil terminal', value: 1 },
        { text: 'port', value: 2 },
        { text: 'power station refinery', value: 3 }
      ]
    },
    {
      label: 'Have any actions been taken?',
      type: 'radio',
      name: 'actions',
      selected: null,
      options: [
        { text: 'Yes', value: true },
        { text: 'No', value: false }
      ]
    },

    {
      type: 'text',
      name: 'actions_taken',
      label: 'If yes, specify the actions taken',
      selected: ''
    }

  ]
}

export default incident