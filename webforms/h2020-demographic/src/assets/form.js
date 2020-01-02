var form = {
  country: {
    tables: {
      table_1: [{
          name: 'partyname',
          type: 'text',
          label: 'Reporting Country',
          selected: '',
        },
        {
          name: 'rep_period_from',
          type: 'number',
          label: 'Reporting year',
          selected: '',
        }
      ],

      table_2: [{
          name: 'contact_point',
          type: 'text',
          label: 'Contact point for the national report, if any',
          selected: '',
        },
        {
          name: 'instituion_full_name',
          type: 'text',
          label: 'Full name of the institution',
          selected: '',
        },
        {
          name: 'national_mailing_address',
          type: 'text',
          label: 'Mailing address',
          selected: '',
        },
        {
          name: 'national_tel',
          type: 'text',
          label: 'Tel.',
          selected: '',
        },
        {
          name: 'national_fax',
          type: 'text',
          label: 'Fax',
          selected: '',
        },
        {
          name: 'national_email',
          type: 'email',
          label: 'Email',
          selected: '',
        },
        {
          name: 'national_signature',
          type: 'text',
          label: 'Signature of the Protocol’s Focal Point',
          selected: '',
        },
        {
          name: 'national_date',
          type: 'date',
          label: 'Date of submission of the Report',
          selected: '',
        }
      ],

      table_3: [{
          name: 'org_name',
          type: 'text',
          label: 'Full name of the institution',
          selected: '',
        },
        {
          name: 'org_contact_point',
          type: 'text',
          label: 'Name of the contact point (optional)',
          selected: '',
        },

        {
          name: 'org_tel',
          type: 'text',
          label: 'Tel.',
          selected: '',
        },
        {
          name: 'org_fax',
          type: 'text',
          label: 'Fax',
          selected: '',
        },
        {
          name: 'org_email',
          type: 'email',
          label: 'Email',
          selected: '',
        }
      ]
    }

  },
  tab_1: {
    label: 'Part I: Dummy title',
    collection_id: 713,
    parent_collection_id: 7,
    data: {
      question: '',
      table_label: 'Table I – Dummy table',
      collection_id: 714,
      parent_collection_id: 713,
        articles: [{
          article_title: 'Requirements of Articles 5.5 and 9: Prevention and punishment of illegal traffic of hazardous wastes',
          article_items: [{
            label: 'Number of inspections',
            type: 'number',
            name: 'inspections_number',
            selected: '',
          }, {
            label: 'Number of contraventions',
            type: 'number',
            name: 'contraventions_number',
            selected: '',
          }, {
            label: 'Number of criminal sanctions applied',
            type: 'number',
            name: 'sanctions_number',
            selected: '',
          }, {
            label: 'Number of other enforcement measures applied',
            type: 'number',
            name: 'enf_measures_number',
            selected: '',
          }, {
            label: 'Number of clean measures implemented',
            type: 'text',
            name: 'clean_measures_number',
            selected: '',
          },
          {
            label: 'Remarks/Comments',
            type: 'textarea',
            name: 'remarks',
            selected: '',
          }]
        }]
    }
  }
}

export default form
