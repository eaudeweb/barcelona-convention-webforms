var form = {
  country: {
    tables: {
      table_1: [{
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
          name: 'institution_name',
          type: 'text',
          label: 'Name of the institution/s responsible for the LBS Protocol',
          selected: '',
        },
        {
          name: 'officer_name',
          type: 'text',
          label: 'Name of the officer who is the focal point for the LBS Protocol',
          selected: '',
        },
        {
          name: 'mailing_address',
          type: 'text',
          label: 'Mailing address',
          selected: '',
        },
        {
          name: 'tel',
          type: 'text',
          label: 'Tel.',
          selected: '',
        },
        {
          name: 'fax',
          type: 'text',
          label: 'Fax',
          selected: '',
        },
        {
          name: 'email',
          type: 'email',
          label: 'Email',
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
    label: 'PART I: Legal and regulatory measures',
    collection_id: 701,
    parent_collection_id: 7,
    data: {
      question: 'Question 1: Has the Party, in accordance with Article 14 of the Barcelona Convention, adopted legislation implementing the provisions of the Hazardous Wastes Protocol as listed in Table I below?',
      table_label: 'Table I – Legal and regulatory measures',
      collection_id: 702,
      parent_collection_id: 701,
      articles: [{
          article_title: 'Article 4.1 Article 3.1(a) (b) Wastes Controlled for the Purpose of Transboundary Movement',
          article_items: [{
            description: 'National definition of waste used for the purpose of transboundary movements of waste',
            collection_id: 7001,
            parent_collection_id: 702,
            items: [{
                type: 'changes',
                label: 'Changes in the information provided in the previous report',
                info: 'Please tick the box that applies',
                selected: null,
                options: [
                  { text: 'Yes', value: true },
                  { text: 'No', value: false }
                ],
                options_description: ['If your answer is “Yes”, please update accordingly', 'If your answer is “No”, please go to next question']
              },
              {
                type: 'status',
                label: 'Status',
                info: 'Please tick the box that applies',
                selected: null,
                options: [
                  { text: 'Yes', value: 1 },
                  { text: 'No', value: 2 },
                  { text: 'Under development', value: 3 },
                  { text: 'Not applicable', value: 4 }
                ],
                options_description: ['If your answer is “Yes”, on a voluntary basis please provide title, date of enactment and a summary of the relevant provisions (Indicate website/URL link or other reference)', 'If your answer is “No”, please in the column difficulties/challenges, tick all that apply'],
                comments: ''
              },
              {
                type: 'difficulties',
                label: 'Difficulties/Challenges',
                info: 'Please tick all that apply',
                selected: [],
                options: [
                  { text: 'Policy framework', value: 1 },
                  { text: 'Regulatory framework', value: 2 },
                  { text: 'Financial resources', value: 3 },
                  { text: 'Administrative management', value: 4 },
                  { text: 'Technical Guidance Capabilities', value: 5 }
                ],
                options_description: ['On a voluntary basis, please briefly describe difficulties/challenges and the type of attention or assistance that is required'],
                comments: ''
              }
            ]
          }, {
            description: 'National definition of hazardous waste used for the purpose of transboundary movements of waste',
            collection_id: 7002,
            parent_collection_id: 702,
            items: [{
                type: 'changes',
                label: 'Changes in the information provided in the previous report',
                info: 'Please tick the box that applies',
                selected: null,
                options: [
                  { text: 'Yes', value: true },
                  { text: 'No', value: false }
                ],
                options_description: ['If your answer is “Yes”, please update accordingly', 'If your answer is “No”, please go to next question']
              },
              {
                type: 'status',
                label: 'Status',
                info: 'Please tick the box that applies',
                selected: null,
                options: [
                  { text: 'Yes', value: 1 },
                  { text: 'No', value: 2 },
                  { text: 'Under development', value: 3 },
                  { text: 'Not applicable', value: 4 }
                ],
                options_description: ['If your answer is “Yes”, on a voluntary basis please provide title, date of enactment and a summary of the relevant provisions (Indicate website/URL link or other reference)', 'If your answer is “No”, please in the column difficulties/challenges, tick all that apply'],
                comments: ''
              },
              {
                type: 'difficulties',
                label: 'Difficulties/Challenges',
                info: 'Please tick all that apply',
                selected: [],
                options: [
                  { text: 'Policy framework', value: 1 },
                  { text: 'Regulatory framework', value: 2 },
                  { text: 'Financial resources', value: 3 },
                  { text: 'Administrative management', value: 4 },
                  { text: 'Technical Guidance Capabilities', value: 5 }
                ],
                options_description: ['On a voluntary basis, please briefly describe difficulties/challenges and the type of attention or assistance that is required'],
                comments: ''
              }
            ]
          }, {
            description: 'National definition of hazardous wastes cover wastes other than those listed in Annex I to the Protocol',
            collection_id: 7003,
            parent_collection_id: 702,
            items: [{
                type: 'changes',
                label: 'Changes in the information provided in the previous report',
                info: 'Please tick the box that applies',
                selected: null,
                options: [
                  { text: 'Yes', value: true },
                  { text: 'No', value: false }
                ],
                options_description: ['If your answer is “Yes”, please update accordingly', 'If your answer is “No”, please go to next question']
              },
              {
                type: 'status',
                label: 'Status',
                info: 'Please tick the box that applies',
                selected: null,
                options: [
                  { text: 'Yes', value: 1 },
                  { text: 'No', value: 2 },
                  { text: 'Under development', value: 3 },
                  { text: 'Not applicable', value: 4 }
                ],
                options_description: ['If your answer is “Yes”, on a voluntary basis please provide title, date of enactment and a summary of the relevant provisions (Indicate website/URL link or other reference)', 'If your answer is “No”, please in the column difficulties/challenges, tick all that apply'],
                comments: ''
              },
              {
                type: 'difficulties',
                label: 'Difficulties/Challenges',
                info: 'Please tick all that apply',
                selected: [],
                options: [
                  { text: 'Policy framework', value: 1 },
                  { text: 'Regulatory framework', value: 2 },
                  { text: 'Financial resources', value: 3 },
                  { text: 'Administrative management', value: 4 },
                  { text: 'Technical Guidance Capabilities', value: 5 }
                ],
                options_description: ['On a voluntary basis, please briefly describe difficulties/challenges and the type of attention or assistance that is required'],
                comments: ''
              }
            ]
          }, {
            description: 'Regulation and control for the purpose of transboundary movements of any additional wastes as hazardous that are not included in Annex I to the Protocol',
            collection_id: 7004,
            parent_collection_id: 702,
            items: [{
                type: 'changes',
                label: 'Changes in the information provided in the previous report',
                info: 'Please tick the box that applies',
                selected: null,
                options: [
                  { text: 'Yes', value: true },
                  { text: 'No', value: false }
                ],
                options_description: ['If your answer is “Yes”, please update accordingly', 'If your answer is “No”, please go to next question']
              },
              {
                type: 'status',
                label: 'Status',
                info: 'Please tick the box that applies',
                selected: null,
                options: [
                  { text: 'Yes', value: 1 },
                  { text: 'No', value: 2 },
                  { text: 'Under development', value: 3 },
                  { text: 'Not applicable', value: 4 }
                ],
                options_description: ['If your answer is “Yes”, on a voluntary basis please provide title, date of enactment and a summary of the relevant provisions (Indicate website/URL link or other reference)', 'If your answer is “No”, please in the column difficulties/challenges, tick all that apply'],
                comments: ''
              },
              {
                type: 'difficulties',
                label: 'Difficulties/Challenges',
                info: 'Please tick all that apply',
                selected: [],
                options: [
                  { text: 'Policy framework', value: 1 },
                  { text: 'Regulatory framework', value: 2 },
                  { text: 'Financial resources', value: 3 },
                  { text: 'Administrative management', value: 4 },
                  { text: 'Technical Guidance Capabilities', value: 5 }
                ],
                options_description: ['On a voluntary basis, please briefly describe difficulties/challenges and the type of attention or assistance that is required'],
                comments: ''
              }
            ]
          }]
        },
        {
          article_title: 'Article 5.2 Reduction/elimination of the generation of hazardous wastes',
          article_items: [{
            description: 'Reduction to a minimum or where possible elimination of the generation of hazardous waste',
            collection_id: 7005,
            parent_collection_id: 702,
            items: [{
                type: 'changes',
                label: 'Changes in the information provided in the previous report',
                info: 'Please tick the box that applies',
                selected: null,
                options: [
                  { text: 'Yes', value: true },
                  { text: 'No', value: false }
                ],
                options_description: ['If your answer is “Yes”, please update accordingly', 'If your answer is “No”, please go to next question']
              },
              {
                type: 'status',
                label: 'Status',
                info: 'Please tick the box that applies',
                selected: null,
                options: [
                  { text: 'Yes', value: 1 },
                  { text: 'No', value: 2 },
                  { text: 'Under development', value: 3 },
                  { text: 'Not applicable', value: 4 }
                ],
                options_description: ['If your answer is “Yes”, on a voluntary basis please provide title, date of enactment and a summary of the relevant provisions (Indicate website/URL link or other reference)', 'If your answer is “No”, please in the column difficulties/challenges, tick all that apply'],
                comments: ''
              },
              {
                type: 'difficulties',
                label: 'Difficulties/Challenges',
                info: 'Please tick all that apply',
                selected: [],
                options: [
                  { text: 'Policy framework', value: 1 },
                  { text: 'Regulatory framework', value: 2 },
                  { text: 'Financial resources', value: 3 },
                  { text: 'Administrative management', value: 4 },
                  { text: 'Technical Guidance Capabilities', value: 5 }
                ],
                options_description: ['On a voluntary basis, please briefly describe difficulties/challenges and the type of attention or assistance that is required'],
                comments: ''
              }
            ]
          }]
        }, {
          article_title: 'Article 5.3 Reduction of the amount of hazardous wastes subject to transboundary movement',
          article_items: [{
            description: 'Reduction to a minimum and possibly elimination of the transboundary movement of hazardous waste through bans on the import of hazardous waste, and refusal of permits for export of hazardous waste to States which have prohibited their import',
            collection_id: 7006,
            parent_collection_id: 702,
            items: [{
                type: 'changes',
                label: 'Changes in the information provided in the previous report',
                info: 'Please tick the box that applies',
                selected: null,
                options: [
                  { text: 'Yes', value: true },
                  { text: 'No', value: false }
                ],
                options_description: ['If your answer is “Yes”, please update accordingly', 'If your answer is “No”, please go to next question']
              },
              {
                type: 'status',
                label: 'Status',
                info: 'Please tick the box that applies',
                selected: null,
                options: [
                  { text: 'Yes', value: 1 },
                  { text: 'No', value: 2 },
                  { text: 'Under development', value: 3 },
                  { text: 'Not applicable', value: 4 }
                ],
                options_description: ['If your answer is “Yes”, on a voluntary basis please provide title, date of enactment and a summary of the relevant provisions (Indicate website/URL link or other reference)', 'If your answer is “No”, please in the column difficulties/challenges, tick all that apply'],
                comments: ''
              },
              {
                type: 'difficulties',
                label: 'Difficulties/Challenges',
                info: 'Please tick all that apply',
                selected: [],
                options: [
                  { text: 'Policy framework', value: 1 },
                  { text: 'Regulatory framework', value: 2 },
                  { text: 'Financial resources', value: 3 },
                  { text: 'Administrative management', value: 4 },
                  { text: 'Technical Guidance Capabilities', value: 5 }
                ],
                options_description: ['On a voluntary basis, please briefly describe difficulties/challenges and the type of attention or assistance that is required'],
                comments: ''
              }
            ]
          }]
        }, {
          article_title: 'Article 5.4 Restrictions/prohibitions on the export and transit of hazardous wastes',
          article_items: [{
            description: 'Subject to the specific provisions referred to in Art. 6 para. 4 relating to the transboundary movement of hazardous waste through the territorial sea of the State of transit, prohibition of the export and transit of hazardous  aste, within the area under their jurisdiction, to developing countries',
            collection_id: 7007,
            parent_collection_id: 702,
            items: [{
                type: 'changes',
                label: 'Changes in the information provided in the previous report',
                info: 'Please tick the box that applies',
                selected: null,
                options: [
                  { text: 'Yes', value: true },
                  { text: 'No', value: false }
                ],
                options_description: ['If your answer is “Yes”, please update accordingly', 'If your answer is “No”, please go to next question']
              },
              {
                type: 'status',
                label: 'Status',
                info: 'Please tick the box that applies',
                selected: null,
                options: [
                  { text: 'Yes', value: 1 },
                  { text: 'No', value: 2 },
                  { text: 'Under development', value: 3 },
                  { text: 'Not applicable', value: 4 }
                ],
                options_description: ['If your answer is “Yes”, on a voluntary basis please provide title, date of enactment and a summary of the relevant provisions (Indicate website/URL link or other reference)', 'If your answer is “No”, please in the column difficulties/challenges, tick all that apply'],
                comments: ''
              },
              {
                type: 'difficulties',
                label: 'Difficulties/Challenges',
                info: 'Please tick all that apply',
                selected: [],
                options: [
                  { text: 'Policy framework', value: 1 },
                  { text: 'Regulatory framework', value: 2 },
                  { text: 'Financial resources', value: 3 },
                  { text: 'Administrative management', value: 4 },
                  { text: 'Technical Guidance Capabilities', value: 5 }
                ],
                options_description: ['On a voluntary basis, please briefly describe difficulties/challenges and the type of attention or assistance that is required'],
                comments: ''
              }
            ]
          }]
        }, {
          article_title: 'Article 5.4 Restrictions/prohibitions on the import and transit of hazardous wastes',
          article_items: [{
            description: 'Subject to the specific provisions referred to in Art. 6 para. 4 relating to the transboundary movement of hazardous waste through the territorial sea of the State of transit, prohibition, by the Parties which are not Member States of the European Community of all imports and transit of hazardous waste',
            collection_id: 7008,
            parent_collection_id: 702,
            items: [{
                type: 'changes',
                label: 'Changes in the information provided in the previous report',
                info: 'Please tick the box that applies',
                selected: null,
                options: [
                  { text: 'Yes', value: true },
                  { text: 'No', value: false }
                ],
                options_description: ['If your answer is “Yes”, please update accordingly', 'If your answer is “No”, please go to next question']
              },
              {
                type: 'status',
                label: 'Status',
                info: 'Please tick the box that applies',
                selected: null,
                options: [
                  { text: 'Yes', value: 1 },
                  { text: 'No', value: 2 },
                  { text: 'Under development', value: 3 },
                  { text: 'Not applicable', value: 4 }
                ],
                options_description: ['If your answer is “Yes”, on a voluntary basis please provide title, date of enactment and a summary of the relevant provisions (Indicate website/URL link or other reference)', 'If your answer is “No”, please in the column difficulties/challenges, tick all that apply'],
                comments: ''
              },
              {
                type: 'difficulties',
                label: 'Difficulties/Challenges',
                info: 'Please tick all that apply',
                selected: [],
                options: [
                  { text: 'Policy framework', value: 1 },
                  { text: 'Regulatory framework', value: 2 },
                  { text: 'Financial resources', value: 3 },
                  { text: 'Administrative management', value: 4 },
                  { text: 'Technical Guidance Capabilities', value: 5 }
                ],
                options_description: ['On a voluntary basis, please briefly describe difficulties/challenges and the type of attention or assistance that is required'],
                comments: ''
              }
            ]
          }]
        }, {
          article_title: 'Article. 6.3\nArticle 6.4\nNotification procedure of the transboundary movement of waste',
          article_items: [{
            description: 'The transboundary movements of hazardous waste only take place (within areas beyond the territorial sea waters) with the prior written notification of the State of export and consent of the State of import, as specified in Annex IV',
            collection_id: 7009,
            parent_collection_id: 702,
            items: [{
                type: 'changes',
                label: 'Changes in the information provided in the previous report',
                info: 'Please tick the box that applies',
                selected: null,
                options: [
                  { text: 'Yes', value: true },
                  { text: 'No', value: false }
                ],
                options_description: ['If your answer is “Yes”, please update accordingly', 'If your answer is “No”, please go to next question']
              },
              {
                type: 'status',
                label: 'Status',
                info: 'Please tick the box that applies',
                selected: null,
                options: [
                  { text: 'Yes', value: 1 },
                  { text: 'No', value: 2 },
                  { text: 'Under development', value: 3 },
                  { text: 'Not applicable', value: 4 }
                ],
                options_description: ['If your answer is “Yes”, on a voluntary basis please provide title, date of enactment and a summary of the relevant provisions (Indicate website/URL link or other reference)', 'If your answer is “No”, please in the column difficulties/challenges, tick all that apply'],
                comments: ''
              },
              {
                type: 'difficulties',
                label: 'Difficulties/Challenges',
                info: 'Please tick all that apply',
                selected: [],
                options: [
                  { text: 'Policy framework', value: 1 },
                  { text: 'Regulatory framework', value: 2 },
                  { text: 'Financial resources', value: 3 },
                  { text: 'Administrative management', value: 4 },
                  { text: 'Technical Guidance Capabilities', value: 5 }
                ],
                options_description: ['On a voluntary basis, please briefly describe difficulties/challenges and the type of attention or assistance that is required'],
                comments: ''
              }
            ]
          }, {
            description: 'The transboundary movements of hazardous waste through the territorial sea of the State of transit only takes place with the prior notification by the State of export to the State of transit as specified in Annex IV',
            collection_id: 7010,
            parent_collection_id: 702,
            items: [{
                type: 'changes',
                label: 'Changes in the information provided in the previous report',
                info: 'Please tick the box that applies',
                selected: null,
                options: [
                  { text: 'Yes', value: true },
                  { text: 'No', value: false }
                ],
                options_description: ['If your answer is “Yes”, please update accordingly', 'If your answer is “No”, please go to next question']
              },
              {
                type: 'status',
                label: 'Status',
                info: 'Please tick the box that applies',
                selected: null,
                options: [
                  { text: 'Yes', value: 1 },
                  { text: 'No', value: 2 },
                  { text: 'Under development', value: 3 },
                  { text: 'Not applicable', value: 4 }
                ],
                options_description: ['If your answer is “Yes”, on a voluntary basis please provide title, date of enactment and a summary of the relevant provisions (Indicate website/URL link or other reference)', 'If your answer is “No”, please in the column difficulties/challenges, tick all that apply'],
                comments: ''
              },
              {
                type: 'difficulties',
                label: 'Difficulties/Challenges',
                info: 'Please tick all that apply',
                selected: [],
                options: [
                  { text: 'Policy framework', value: 1 },
                  { text: 'Regulatory framework', value: 2 },
                  { text: 'Financial resources', value: 3 },
                  { text: 'Administrative management', value: 4 },
                  { text: 'Technical Guidance Capabilities', value: 5 }
                ],
                options_description: ['On a voluntary basis, please briefly describe difficulties/challenges and the type of attention or assistance that is required'],
                comments: ''
              }
            ]
          }]
        }, {
          article_title: 'Article 5.1 Restrictions on the export/import/transit/ of hazardous wastes',
          article_items: [{
            description: 'Restrictions on the export of hazardous wastes and other wastes for final disposal (Annex III. A) in your country',
            collection_id: 7011,
            parent_collection_id: 702,
            items: [{
                type: 'changes',
                label: 'Changes in the information provided in the previous report',
                info: 'Please tick the box that applies',
                selected: null,
                options: [
                  { text: 'Yes', value: true },
                  { text: 'No', value: false }
                ],
                options_description: ['If your answer is “Yes”, please update accordingly', 'If your answer is “No”, please go to next question']
              },
              {
                type: 'status',
                label: 'Status',
                info: 'Please tick the box that applies',
                selected: null,
                options: [
                  { text: 'Yes', value: 1 },
                  { text: 'No', value: 2 },
                  { text: 'Under development', value: 3 },
                  { text: 'Not applicable', value: 4 }
                ],
                options_description: ['If your answer is “Yes”, on a voluntary basis please provide title, date of enactment and a summary of the relevant provisions (Indicate website/URL link or other reference)', 'If your answer is “No”, please in the column difficulties/challenges, tick all that apply'],
                comments: ''
              },
              {
                type: 'difficulties',
                label: 'Difficulties/Challenges',
                info: 'Please tick all that apply',
                selected: [],
                options: [
                  { text: 'Policy framework', value: 1 },
                  { text: 'Regulatory framework', value: 2 },
                  { text: 'Financial resources', value: 3 },
                  { text: 'Administrative management', value: 4 },
                  { text: 'Technical Guidance Capabilities', value: 5 }
                ],
                options_description: ['On a voluntary basis, please briefly describe difficulties/challenges and the type of attention or assistance that is required'],
                comments: ''
              }
            ]
          }, {
            description: 'Restrictions on the export of hazardous wastes and other wastes for recovery (Annex III.B) in your country',
            collection_id: 7012,
            parent_collection_id: 702,
            items: [{
                type: 'changes',
                label: 'Changes in the information provided in the previous report',
                info: 'Please tick the box that applies',
                selected: null,
                options: [
                  { text: 'Yes', value: true },
                  { text: 'No', value: false }
                ],
                options_description: ['If your answer is “Yes”, please update accordingly', 'If your answer is “No”, please go to next question']
              },
              {
                type: 'status',
                label: 'Status',
                info: 'Please tick the box that applies',
                selected: null,
                options: [
                  { text: 'Yes', value: 1 },
                  { text: 'No', value: 2 },
                  { text: 'Under development', value: 3 },
                  { text: 'Not applicable', value: 4 }
                ],
                options_description: ['If your answer is “Yes”, on a voluntary basis please provide title, date of enactment and a summary of the relevant provisions (Indicate website/URL link or other reference)', 'If your answer is “No”, please in the column difficulties/challenges, tick all that apply'],
                comments: ''
              },
              {
                type: 'difficulties',
                label: 'Difficulties/Challenges',
                info: 'Please tick all that apply',
                selected: [],
                options: [
                  { text: 'Policy framework', value: 1 },
                  { text: 'Regulatory framework', value: 2 },
                  { text: 'Financial resources', value: 3 },
                  { text: 'Administrative management', value: 4 },
                  { text: 'Technical Guidance Capabilities', value: 5 }
                ],
                options_description: ['On a voluntary basis, please briefly describe difficulties/challenges and the type of attention or assistance that is required'],
                comments: ''
              }
            ]
          }, {
            description: 'Restrictions on the import of hazardous wastes and other wastes for final disposal (Annex III. A) in your country',
            collection_id: 7013,
            parent_collection_id: 702,
            items: [{
                type: 'changes',
                label: 'Changes in the information provided in the previous report',
                info: 'Please tick the box that applies',
                selected: null,
                options: [
                  { text: 'Yes', value: true },
                  { text: 'No', value: false }
                ],
                options_description: ['If your answer is “Yes”, please update accordingly', 'If your answer is “No”, please go to next question']
              },
              {
                type: 'status',
                label: 'Status',
                info: 'Please tick the box that applies',
                selected: null,
                options: [
                  { text: 'Yes', value: 1 },
                  { text: 'No', value: 2 },
                  { text: 'Under development', value: 3 },
                  { text: 'Not applicable', value: 4 }
                ],
                options_description: ['If your answer is “Yes”, on a voluntary basis please provide title, date of enactment and a summary of the relevant provisions (Indicate website/URL link or other reference)', 'If your answer is “No”, please in the column difficulties/challenges, tick all that apply'],
                comments: ''
              },
              {
                type: 'difficulties',
                label: 'Difficulties/Challenges',
                info: 'Please tick all that apply',
                selected: [],
                options: [
                  { text: 'Policy framework', value: 1 },
                  { text: 'Regulatory framework', value: 2 },
                  { text: 'Financial resources', value: 3 },
                  { text: 'Administrative management', value: 4 },
                  { text: 'Technical Guidance Capabilities', value: 5 }
                ],
                options_description: ['On a voluntary basis, please briefly describe difficulties/challenges and the type of attention or assistance that is required'],
                comments: ''
              }
            ]
          }, {
            description: 'Restrictions on the import of hazardous wastes and other wastes for recovery (Annex IV B) in your country',
            collection_id: 7014,
            parent_collection_id: 702,
            items: [{
                type: 'changes',
                label: 'Changes in the information provided in the previous report',
                info: 'Please tick the box that applies',
                selected: null,
                options: [
                  { text: 'Yes', value: true },
                  { text: 'No', value: false }
                ],
                options_description: ['If your answer is “Yes”, please update accordingly', 'If your answer is “No”, please go to next question']
              },
              {
                type: 'status',
                label: 'Status',
                info: 'Please tick the box that applies',
                selected: null,
                options: [
                  { text: 'Yes', value: 1 },
                  { text: 'No', value: 2 },
                  { text: 'Under development', value: 3 },
                  { text: 'Not applicable', value: 4 }
                ],
                options_description: ['If your answer is “Yes”, on a voluntary basis please provide title, date of enactment and a summary of the relevant provisions (Indicate website/URL link or other reference)', 'If your answer is “No”, please in the column difficulties/challenges, tick all that apply'],
                comments: ''
              },
              {
                type: 'difficulties',
                label: 'Difficulties/Challenges',
                info: 'Please tick all that apply',
                selected: [],
                options: [
                  { text: 'Policy framework', value: 1 },
                  { text: 'Regulatory framework', value: 2 },
                  { text: 'Financial resources', value: 3 },
                  { text: 'Administrative management', value: 4 },
                  { text: 'Technical Guidance Capabilities', value: 5 }
                ],
                options_description: ['On a voluntary basis, please briefly describe difficulties/challenges and the type of attention or assistance that is required'],
                comments: ''
              }
            ]
          }, {
            description: 'Restrictions on the transit of hazardous wastes and other wastes through your country',
            collection_id: 7015,
            parent_collection_id: 702,
            items: [{
                type: 'changes',
                label: 'Changes in the information provided in the previous report',
                info: 'Please tick the box that applies',
                selected: null,
                options: [
                  { text: 'Yes', value: true },
                  { text: 'No', value: false }
                ],
                options_description: ['If your answer is “Yes”, please update accordingly', 'If your answer is “No”, please go to next question']
              },
              {
                type: 'status',
                label: 'Status',
                info: 'Please tick the box that applies',
                selected: null,
                options: [
                  { text: 'Yes', value: 1 },
                  { text: 'No', value: 2 },
                  { text: 'Under development', value: 3 },
                  { text: 'Not applicable', value: 4 }
                ],
                options_description: ['If your answer is “Yes”, on a voluntary basis please provide title, date of enactment and a summary of the relevant provisions (Indicate website/URL link or other reference)', 'If your answer is “No”, please in the column difficulties/challenges, tick all that apply'],
                comments: ''
              },
              {
                type: 'difficulties',
                label: 'Difficulties/Challenges',
                info: 'Please tick all that apply',
                selected: [],
                options: [
                  { text: 'Policy framework', value: 1 },
                  { text: 'Regulatory framework', value: 2 },
                  { text: 'Financial resources', value: 3 },
                  { text: 'Administrative management', value: 4 },
                  { text: 'Technical Guidance Capabilities', value: 5 }
                ],
                options_description: ['On a voluntary basis, please briefly describe difficulties/challenges and the type of attention or assistance that is required'],
                comments: ''
              }
            ]
          }]
        }, {
          article_title: 'Article 5.5\nArticle 9',
          article_items: [{
            description: 'Prevention and punishment by the national competent authority or authorities of illegal traffic in hazardous wastes, including criminal penalties for all persons involved in such illegal activities',
            collection_id: 7016,
            parent_collection_id: 702,
            items: [{
                type: 'changes',
                label: 'Changes in the information provided in the previous report',
                info: 'Please tick the box that applies',
                selected: null,
                options: [
                  { text: 'Yes', value: true },
                  { text: 'No', value: false }
                ],
                options_description: ['If your answer is “Yes”, please update accordingly', 'If your answer is “No”, please go to next question']
              },
              {
                type: 'status',
                label: 'Status',
                info: 'Please tick the box that applies',
                selected: null,
                options: [
                  { text: 'Yes', value: 1 },
                  { text: 'No', value: 2 },
                  { text: 'Under development', value: 3 },
                  { text: 'Not applicable', value: 4 }
                ],
                options_description: ['If your answer is “Yes”, on a voluntary basis please provide title, date of enactment and a summary of the relevant provisions (Indicate website/URL link or other reference)', 'If your answer is “No”, please in the column difficulties/challenges, tick all that apply'],
                comments: ''
              },
              {
                type: 'difficulties',
                label: 'Difficulties/Challenges',
                info: 'Please tick all that apply',
                selected: [],
                options: [
                  { text: 'Policy framework', value: 1 },
                  { text: 'Regulatory framework', value: 2 },
                  { text: 'Financial resources', value: 3 },
                  { text: 'Administrative management', value: 4 },
                  { text: 'Technical Guidance Capabilities', value: 5 }
                ],
                options_description: ['On a voluntary basis, please briefly describe difficulties/challenges and the type of attention or assistance that is required'],
                comments: ''
              }
            ]
          }]
        }, {
          article_title: 'Article 12 Information to and Participation to the Public',
          article_items: [{
            description: 'Ensure that adequate information is made available to the public and the public , whenever possible and appropriate have an opportunity to participate',
            collection_id: 7017,
            parent_collection_id: 702,
            items: [{
                type: 'changes',
                label: 'Changes in the information provided in the previous report',
                info: 'Please tick the box that applies',
                selected: null,
                options: [
                  { text: 'Yes', value: true },
                  { text: 'No', value: false }
                ],
                options_description: ['If your answer is “Yes”, please update accordingly', 'If your answer is “No”, please go to next question']
              },
              {
                type: 'status',
                label: 'Status',
                info: 'Please tick the box that applies',
                selected: null,
                options: [
                  { text: 'Yes', value: 1 },
                  { text: 'No', value: 2 },
                  { text: 'Under development', value: 3 },
                  { text: 'Not applicable', value: 4 }
                ],
                options_description: ['If your answer is “Yes”, on a voluntary basis please provide title, date of enactment and a summary of the relevant provisions (Indicate website/URL link or other reference)', 'If your answer is “No”, please in the column difficulties/challenges, tick all that apply'],
                comments: ''
              },
              {
                type: 'difficulties',
                label: 'Difficulties/Challenges',
                info: 'Please tick all that apply',
                selected: [],
                options: [
                  { text: 'Policy framework', value: 1 },
                  { text: 'Regulatory framework', value: 2 },
                  { text: 'Financial resources', value: 3 },
                  { text: 'Administrative management', value: 4 },
                  { text: 'Technical Guidance Capabilities', value: 5 }
                ],
                options_description: ['On a voluntary basis, please briefly describe difficulties/challenges and the type of attention or assistance that is required'],
                comments: ''
              }
            ]
          }]
        }
      ]
    }
  },
  tab_2: {
    label: 'PART II: Generation of hazardous wastes and other wastes',
    collection_id: 703,
    parent_collection_id: 7,
    data: {
      table_1: {
        question: '',
        table_label: 'Table II – Wastes other than those listed in Annex I to the Protocol considered or defined as hazardous wastes under domestic legislation (Article 4 1)',
        collection_id: 704,
        parent_collection_id: 703,
        articles: [{
          article_title: 1,
          article_items: [{
            label: 'Waste description',
            type: 'text',
            name: 'wastedescription',
            selected: '',
          }, {
            label: 'Definition',
            type: 'text',
            name: 'definition',
            selected: '',
          }, {
            label: 'Main characteristics',
            type: 'text',
            name: 'main_characteristics',
            selected: '',
          }, {
            label: 'Transboundary movement procedure established',
            type: 'text',
            name: 'movement_procedure',
            selected: '',
          }]
        }]
      },
      table_2: {
        question: 'Total amount of hazardous wastes and other wastes generated (metric tonnes) ',
        table_label: 'Table III - Total amount of generation of hazardous wastes and other wastes (Article 8.2)',
        collection_id: 705,
        parent_collection_id: 703,
        articles: [{
            article_title: 'Total amount of hazardous wastes under Article 3.1.a (Annex IA: Y1- Y45) generated',
            collection_id: 7018,
            parent_collection_id: 705,
            article_items: [{
              label: '1995',
              type: 'text',
              name: '1995',
              selected: '',
            }, {
              label: '1996',
              type: 'text',
              name: '1996',
              selected: '',
            }, {
              label: '1997',
              type: 'text',
              name: '1997',
              selected: '',
            }, {
              label: '1998',
              type: 'text',
              name: '1998',
              selected: '',
            }, {
              label: '1999',
              type: 'text',
              name: '1999',
              selected: '',
            }, {
              label: '2000',
              type: 'text',
              name: '2000',
              selected: '',
            }, {
              label: '2001',
              type: 'text',
              name: '2001',
              selected: '',
            }, {
              label: '2002',
              type: 'text',
              name: '2002',
              selected: '',
            }, {
              label: '2003',
              type: 'text',
              name: '2003',
              selected: '',
            }, {
              label: '2004',
              type: 'text',
              name: '2004',
              selected: '',
            }]
          },
          {
            article_title: 'Total amount of other wastes under Article 3.1.a (Annex IB:Y46-Y47) generated',
            collection_id: 7019,
            parent_collection_id: 705,
            article_items: [{
              label: '1995',
              type: 'text',
              name: '1995',
              selected: '',
            }, {
              label: '1996',
              type: 'text',
              name: '1996',
              selected: '',
            }, {
              label: '1997',
              type: 'text',
              name: '1997`',
              selected: '',
            }, {
              label: '1998',
              type: 'text',
              name: '1998',
              selected: '',
            }, {
              label: '1999',
              type: 'text',
              name: '1999',
              selected: '',
            }, {
              label: '2000',
              type: 'text',
              name: '2000',
              selected: '',
            }, {
              label: '2001',
              type: 'text',
              name: '2001',
              selected: '',
            }, {
              label: '2002',
              type: 'text',
              name: '2002',
              selected: '',
            }, {
              label: '2003',
              type: 'text',
              name: '2003',
              selected: '',
            }, {
              label: '2004',
              type: 'text',
              name: '2004',
              selected: '',
            }]
          },
          {
            article_title: 'Total amount of hazardous wastes under Article 3.1.b generated',
            collection_id: 7020,
            parent_collection_id: 705,
            article_items: [{
              label: '1995',
              type: 'text',
              name: '1995',
              selected: '',
            }, {
              label: '1996',
              type: 'text',
              name: '1996',
              selected: '',
            }, {
              label: '1997',
              type: 'text',
              name: '1997`',
              selected: '',
            }, {
              label: '1998',
              type: 'text',
              name: '1998',
              selected: '',
            }, {
              label: '1999',
              type: 'text',
              name: '1999',
              selected: '',
            }, {
              label: '2000',
              type: 'text',
              name: '2000',
              selected: '',
            }, {
              label: '2001',
              type: 'text',
              name: '2001',
              selected: '',
            }, {
              label: '2002',
              type: 'text',
              name: '2002',
              selected: '',
            }, {
              label: '2003',
              type: 'text',
              name: '2003',
              selected: '',
            }, {
              label: '2004',
              type: 'text',
              name: '2004',
              selected: '',
            }]
          }
        ]
      },
      table_3: {
        question: '',
        table_label: 'Table IV: Generation of hazardous wastes and other wastes by Y-categories',
        collection_id: 706,
        parent_collection_id: 703,
        articles: [{
          article_title: {
            name: 'Y1',
            label: 'Clinical wastes from medical care in hospitals, medical centres and clinics',
          },
          article_label: {
            name: 'l1',
            label: 'Waste streams (Annex I to the Protocol)',
          },
          article_items: [{
            label: '2002',
            type: 'text',
            name: '2002',
            selected: '',
          }, {
            label: '2003',
            type: 'text',
            name: '2003',
            selected: '',
          }, {
            label: '2005',
            type: 'text',
            name: '2005',
            selected: '',
          }, {
            label: '2006',
            type: 'text',
            name: '2006',
            selected: '',
          }, {
            label: '2007',
            type: 'text',
            name: '2007',
            selected: '',
          }]
        }, {
          article_title: {
            name: 'Y2',
            label: 'Wastes from the production and preparation of pharmaceutical products',
          },
          article_label: {
            name: 'l1',
            label: 'Waste streams (Annex I to the Protocol)',
          },
          article_items: [{
            label: '2002',
            type: 'text',
            name: '2002',
            selected: '',
          }, {
            label: '2003',
            type: 'text',
            name: '2003',
            selected: '',
          }, {
            label: '2005',
            type: 'text',
            name: '2005',
            selected: '',
          }, {
            label: '2006',
            type: 'text',
            name: '2006',
            selected: '',
          }, {
            label: '2007',
            type: 'text',
            name: '2007',
            selected: '',
          }]
        }, {
          article_title: {
            name: 'Y3',
            label: 'Waste pharmaceuticals, drugs and medicines',
          },
          article_label: {
            name: 'l1',
            label: 'Waste streams (Annex I to the Protocol)',
          },
          article_items: [{
            label: '2002',
            type: 'text',
            name: '2002',
            selected: '',
          }, {
            label: '2003',
            type: 'text',
            name: '2003',
            selected: '',
          }, {
            label: '2005',
            type: 'text',
            name: '2005',
            selected: '',
          }, {
            label: '2006',
            type: 'text',
            name: '2006',
            selected: '',
          }, {
            label: '2007',
            type: 'text',
            name: '2007',
            selected: '',
          }]
        }, {
          article_title: {
            name: 'Y4',
            label: 'Wastes from the production of biocides and phytopharmaceuticals',
          },
          article_label: {
            name: 'l1',
            label: 'Waste streams (Annex I to the Protocol)',
          },
          article_items: [{
            label: '2002',
            type: 'text',
            name: '2002',
            selected: '',
          }, {
            label: '2003',
            type: 'text',
            name: '2003',
            selected: '',
          }, {
            label: '2005',
            type: 'text',
            name: '2005',
            selected: '',
          }, {
            label: '2006',
            type: 'text',
            name: '2006',
            selected: '',
          }, {
            label: '2007',
            type: 'text',
            name: '2007',
            selected: '',
          }]
        }, {
          article_title: {
            name: 'Y5',
            label: 'Wastes from the manufacture of wood preserving chemicals',
          },
          article_label: {
            name: 'l1',
            label: 'Waste streams (Annex I to the Protocol)',
          },
          article_items: [{
            label: '2002',
            type: 'text',
            name: '2002',
            selected: '',
          }, {
            label: '2003',
            type: 'text',
            name: '2003',
            selected: '',
          }, {
            label: '2005',
            type: 'text',
            name: '2005',
            selected: '',
          }, {
            label: '2006',
            type: 'text',
            name: '2006',
            selected: '',
          }, {
            label: '2007',
            type: 'text',
            name: '2007',
            selected: '',
          }]
        }, {
          article_title: {
            name: 'Y6',
            label: 'Wastes from the production, formulation and use of organic solvent',
          },
          article_label: {
            name: 'l1',
            label: 'Waste streams (Annex I to the Protocol)',
          },
          article_items: [{
            label: '2002',
            type: 'text',
            name: '2002',
            selected: '',
          }, {
            label: '2003',
            type: 'text',
            name: '2003',
            selected: '',
          }, {
            label: '2005',
            type: 'text',
            name: '2005',
            selected: '',
          }, {
            label: '2006',
            type: 'text',
            name: '2006',
            selected: '',
          }, {
            label: '2007',
            type: 'text',
            name: '2007',
            selected: '',
          }]
        }, {
          article_title: {
            name: 'Y7',
            label: 'Wastes from heat treatment and tempering operations containing cyanides',
          },
          article_label: {
            name: 'l1',
            label: 'Waste streams (Annex I to the Protocol)',
          },
          article_items: [{
            label: '2002',
            type: 'text',
            name: '2002',
            selected: '',
          }, {
            label: '2003',
            type: 'text',
            name: '2003',
            selected: '',
          }, {
            label: '2005',
            type: 'text',
            name: '2005',
            selected: '',
          }, {
            label: '2006',
            type: 'text',
            name: '2006',
            selected: '',
          }, {
            label: '2007',
            type: 'text',
            name: '2007',
            selected: '',
          }]
        }, {
          article_title: {
            name: 'Y8',
            label: 'Waste mineral oils unfit for their originally intended use',
          },
          article_label: {
            name: 'l1',
            label: 'Waste streams (Annex I to the Protocol)',
          },
          article_items: [{
            label: '2002',
            type: 'text',
            name: '2002',
            selected: '',
          }, {
            label: '2003',
            type: 'text',
            name: '2003',
            selected: '',
          }, {
            label: '2005',
            type: 'text',
            name: '2005',
            selected: '',
          }, {
            label: '2006',
            type: 'text',
            name: '2006',
            selected: '',
          }, {
            label: '2007',
            type: 'text',
            name: '2007',
            selected: '',
          }]
        }, {
          article_title: {
            name: 'Y9',
            label: 'Waste oils/water, hydrocarbons/water mixtures, emulsion',
          },
          article_label: {
            name: 'l1',
            label: 'Waste streams (Annex I to the Protocol)',
          },
          article_items: [{
            label: '2002',
            type: 'text',
            name: '2002',
            selected: '',
          }, {
            label: '2003',
            type: 'text',
            name: '2003',
            selected: '',
          }, {
            label: '2005',
            type: 'text',
            name: '2005',
            selected: '',
          }, {
            label: '2006',
            type: 'text',
            name: '2006',
            selected: '',
          }, {
            label: '2007',
            type: 'text',
            name: '2007',
            selected: '',
          }]
        }, {
          article_title: {
            name: 'Y10',
            label: 'Waste substances containing or contaminated with PCBs, PCTs, PBBs',
          },
          article_label: {
            name: 'l1',
            label: 'Waste streams (Annex I to the Protocol)',
          },
          article_items: [{
            label: '2002',
            type: 'text',
            name: '2002',
            selected: '',
          }, {
            label: '2003',
            type: 'text',
            name: '2003',
            selected: '',
          }, {
            label: '2005',
            type: 'text',
            name: '2005',
            selected: '',
          }, {
            label: '2006',
            type: 'text',
            name: '2006',
            selected: '',
          }, {
            label: '2007',
            type: 'text',
            name: '2007',
            selected: '',
          }]
        }, {
          article_title: {
            name: 'Y11',
            label: 'Waste tarry residues from refining, distillation and any pyrolytic treatment',
          },
          article_label: {
            name: 'l1',
            label: 'Waste streams (Annex I to the Protocol)',
          },
          article_items: [{
            label: '2002',
            type: 'text',
            name: '2002',
            selected: '',
          }, {
            label: '2003',
            type: 'text',
            name: '2003',
            selected: '',
          }, {
            label: '2005',
            type: 'text',
            name: '2005',
            selected: '',
          }, {
            label: '2006',
            type: 'text',
            name: '2006',
            selected: '',
          }, {
            label: '2007',
            type: 'text',
            name: '2007',
            selected: '',
          }]
        }, {
          article_title: {
            name: 'Y12',
            label: 'Wastes from production of inks, dyes, pigments, paints, etc.',
          },
          article_label: {
            name: 'l1',
            label: 'Waste streams (Annex I to the Protocol)',
          },
          article_items: [{
            label: '2002',
            type: 'text',
            name: '2002',
            selected: '',
          }, {
            label: '2003',
            type: 'text',
            name: '2003',
            selected: '',
          }, {
            label: '2005',
            type: 'text',
            name: '2005',
            selected: '',
          }, {
            label: '2006',
            type: 'text',
            name: '2006',
            selected: '',
          }, {
            label: '2007',
            type: 'text',
            name: '2007',
            selected: '',
          }]
        }, {
          article_title: {
            name: 'Y13',
            label: 'Wastes from production resins, latex, plasticizers, glues, etc. ',
          },
          article_label: {
            name: 'l1',
            label: 'Waste streams (Annex I to the Protocol)',
          },
          article_items: [{
            label: '2002',
            type: 'text',
            name: '2002',
            selected: '',
          }, {
            label: '2003',
            type: 'text',
            name: '2003',
            selected: '',
          }, {
            label: '2005',
            type: 'text',
            name: '2005',
            selected: '',
          }, {
            label: '2006',
            type: 'text',
            name: '2006',
            selected: '',
          }, {
            label: '2007',
            type: 'text',
            name: '2007',
            selected: '',
          }]
        }, {
          article_title: {
            name: 'Y14',
            label: 'Waste chemical substances whose effects on the environment are not known',
          },
          article_label: {
            name: 'l1',
            label: 'Waste streams (Annex I to the Protocol)',
          },
          article_items: [{
            label: '2002',
            type: 'text',
            name: '2002',
            selected: '',
          }, {
            label: '2003',
            type: 'text',
            name: '2003',
            selected: '',
          }, {
            label: '2005',
            type: 'text',
            name: '2005',
            selected: '',
          }, {
            label: '2006',
            type: 'text',
            name: '2006',
            selected: '',
          }, {
            label: '2007',
            type: 'text',
            name: '2007',
            selected: '',
          }]
        }, {
          article_title: {
            name: 'Y15',
            label: 'Wastes of an explosive nature not subject to other legislation',
          },
          article_label: {
            name: 'l1',
            label: 'Waste streams (Annex I to the Protocol)',
          },
          article_items: [{
            label: '2002',
            type: 'text',
            name: '2002',
            selected: '',
          }, {
            label: '2003',
            type: 'text',
            name: '2003',
            selected: '',
          }, {
            label: '2005',
            type: 'text',
            name: '2005',
            selected: '',
          }, {
            label: '2006',
            type: 'text',
            name: '2006',
            selected: '',
          }, {
            label: '2007',
            type: 'text',
            name: '2007',
            selected: '',
          }]
        }, {
          article_title: {
            name: 'Y16',
            label: 'Wastes from production, formulation and use of photographic chemicals…',
          },
          article_label: {
            name: 'l1',
            label: 'Waste streams (Annex I to the Protocol)',
          },
          article_items: [{
            label: '2002',
            type: 'text',
            name: '2002',
            selected: '',
          }, {
            label: '2003',
            type: 'text',
            name: '2003',
            selected: '',
          }, {
            label: '2005',
            type: 'text',
            name: '2005',
            selected: '',
          }, {
            label: '2006',
            type: 'text',
            name: '2006',
            selected: '',
          }, {
            label: '2007',
            type: 'text',
            name: '2007',
            selected: '',
          }]
        }, {
          article_title: {
            name: 'Y17',
            label: 'Wastes resulting from surface treatment of metals and plastics  ',
          },
          article_label: {
            name: 'l1',
            label: 'Waste streams (Annex I to the Protocol)',
          },
          article_items: [{
            label: '2002',
            type: 'text',
            name: '2002',
            selected: '',
          }, {
            label: '2003',
            type: 'text',
            name: '2003',
            selected: '',
          }, {
            label: '2005',
            type: 'text',
            name: '2005',
            selected: '',
          }, {
            label: '2006',
            type: 'text',
            name: '2006',
            selected: '',
          }, {
            label: '2007',
            type: 'text',
            name: '2007',
            selected: '',
          }]
        }, {
          article_title: {
            name: 'Y18',
            label: 'Residues arising from industrial waste disposal operations',
          },
          article_label: {
            name: 'l1',
            label: 'Waste streams (Annex I to the Protocol)',
          },
          article_items: [{
            label: '2002',
            type: 'text',
            name: '2002',
            selected: '',
          }, {
            label: '2003',
            type: 'text',
            name: '2003',
            selected: '',
          }, {
            label: '2005',
            type: 'text',
            name: '2005',
            selected: '',
          }, {
            label: '2006',
            type: 'text',
            name: '2006',
            selected: '',
          }, {
            label: '2007',
            type: 'text',
            name: '2007',
            selected: '',
          }]
        }, {
          article_title: {
            name: 'Y19',
            label: 'Metal carbonyls',
          },
          article_label: {
            name: 'l2',
            label: 'Wastes having as constituents (Annex I to the Protocol) ',
          },
          article_items: [{
            label: '2002',
            type: 'text',
            name: '2002',
            selected: '',
          }, {
            label: '2003',
            type: 'text',
            name: '2003',
            selected: '',
          }, {
            label: '2005',
            type: 'text',
            name: '2005',
            selected: '',
          }, {
            label: '2006',
            type: 'text',
            name: '2006',
            selected: '',
          }, {
            label: '2007',
            type: 'text',
            name: '2007',
            selected: '',
          }]
        }, {
          article_title: {
            name: 'Y20',
            label: 'Beryllium;berylliumcompounds',
          },
          article_label: {
            name: 'l2',
            label: 'Wastes having as constituents (Annex I to the Protocol) ',
          },
          article_items: [{
            label: '2002',
            type: 'text',
            name: '2002',
            selected: '',
          }, {
            label: '2003',
            type: 'text',
            name: '2003',
            selected: '',
          }, {
            label: '2005',
            type: 'text',
            name: '2005',
            selected: '',
          }, {
            label: '2006',
            type: 'text',
            name: '2006',
            selected: '',
          }, {
            label: '2007',
            type: 'text',
            name: '2007',
            selected: '',
          }]
        }, {
          article_title: {
            name: 'Y21',
            label: 'Hexavalentchromiumcompounds',
          },
          article_label: {
            name: 'l2',
            label: 'Wastes having as constituents (Annex I to the Protocol) ',
          },
          article_items: [{
            label: '2002',
            type: 'text',
            name: '2002',
            selected: '',
          }, {
            label: '2003',
            type: 'text',
            name: '2003',
            selected: '',
          }, {
            label: '2005',
            type: 'text',
            name: '2005',
            selected: '',
          }, {
            label: '2006',
            type: 'text',
            name: '2006',
            selected: '',
          }, {
            label: '2007',
            type: 'text',
            name: '2007',
            selected: '',
          }]
        }, {
          article_title: {
            name: 'Y22',
            label: 'Coppercompounds',
          },
          article_label: {
            name: 'l2',
            label: 'Wastes having as constituents (Annex I to the Protocol) ',
          },
          article_items: [{
            label: '2002',
            type: 'text',
            name: '2002',
            selected: '',
          }, {
            label: '2003',
            type: 'text',
            name: '2003',
            selected: '',
          }, {
            label: '2005',
            type: 'text',
            name: '2005',
            selected: '',
          }, {
            label: '2006',
            type: 'text',
            name: '2006',
            selected: '',
          }, {
            label: '2007',
            type: 'text',
            name: '2007',
            selected: '',
          }]
        }, {
          article_title: {
            name: 'Y23',
            label: 'Zinccompounds',
          },
          article_label: {
            name: 'l2',
            label: 'Wastes having as constituents (Annex I to the Protocol) ',
          },
          article_items: [{
            label: '2002',
            type: 'text',
            name: '2002',
            selected: '',
          }, {
            label: '2003',
            type: 'text',
            name: '2003',
            selected: '',
          }, {
            label: '2005',
            type: 'text',
            name: '2005',
            selected: '',
          }, {
            label: '2006',
            type: 'text',
            name: '2006',
            selected: '',
          }, {
            label: '2007',
            type: 'text',
            name: '2007',
            selected: '',
          }]
        }, {
          article_title: {
            name: 'Y24',
            label: 'Arsenic; arseniccompounds',
          },
          article_label: {
            name: 'l2',
            label: 'Wastes having as constituents (Annex I to the Protocol) ',
          },
          article_items: [{
            label: '2002',
            type: 'text',
            name: '2002',
            selected: '',
          }, {
            label: '2003',
            type: 'text',
            name: '2003',
            selected: '',
          }, {
            label: '2005',
            type: 'text',
            name: '2005',
            selected: '',
          }, {
            label: '2006',
            type: 'text',
            name: '2006',
            selected: '',
          }, {
            label: '2007',
            type: 'text',
            name: '2007',
            selected: '',
          }]
        }, {
          article_title: {
            name: 'Y25',
            label: 'Selenium;seleniumcompounds',
          },
          article_label: {
            name: 'l2',
            label: 'Wastes having as constituents (Annex I to the Protocol) ',
          },
          article_items: [{
            label: '2002',
            type: 'text',
            name: '2002',
            selected: '',
          }, {
            label: '2003',
            type: 'text',
            name: '2003',
            selected: '',
          }, {
            label: '2005',
            type: 'text',
            name: '2005',
            selected: '',
          }, {
            label: '2006',
            type: 'text',
            name: '2006',
            selected: '',
          }, {
            label: '2007',
            type: 'text',
            name: '2007',
            selected: '',
          }]
        }, {
          article_title: {
            name: 'Y26',
            label: 'Cadmium; cadmiumcompounds',
          },
          article_label: {
            name: 'l2',
            label: 'Wastes having as constituents (Annex I to the Protocol) ',
          },
          article_items: [{
            label: '2002',
            type: 'text',
            name: '2002',
            selected: '',
          }, {
            label: '2003',
            type: 'text',
            name: '2003',
            selected: '',
          }, {
            label: '2005',
            type: 'text',
            name: '2005',
            selected: '',
          }, {
            label: '2006',
            type: 'text',
            name: '2006',
            selected: '',
          }, {
            label: '2007',
            type: 'text',
            name: '2007',
            selected: '',
          }]
        }, {
          article_title: {
            name: 'Y27',
            label: 'Antimony; antimonycompounds',
          },
          article_label: {
            name: 'l2',
            label: 'Wastes having as constituents (Annex I to the Protocol) ',
          },
          article_items: [{
            label: '2002',
            type: 'text',
            name: '2002',
            selected: '',
          }, {
            label: '2003',
            type: 'text',
            name: '2003',
            selected: '',
          }, {
            label: '2005',
            type: 'text',
            name: '2005',
            selected: '',
          }, {
            label: '2006',
            type: 'text',
            name: '2006',
            selected: '',
          }, {
            label: '2007',
            type: 'text',
            name: '2007',
            selected: '',
          }]
        }, {
          article_title: {
            name: 'Y28',
            label: 'Tellurium;telluriumcompounds',
          },
          article_label: {
            name: 'l2',
            label: 'Wastes having as constituents (Annex I to the Protocol) ',
          },
          article_items: [{
            label: '2002',
            type: 'text',
            name: '2002',
            selected: '',
          }, {
            label: '2003',
            type: 'text',
            name: '2003',
            selected: '',
          }, {
            label: '2005',
            type: 'text',
            name: '2005',
            selected: '',
          }, {
            label: '2006',
            type: 'text',
            name: '2006',
            selected: '',
          }, {
            label: '2007',
            type: 'text',
            name: '2007',
            selected: '',
          }]
        }, {
          article_title: {
            name: 'Y29',
            label: 'Mercury; mercurycompounds',
          },
          article_label: {
            name: 'l2',
            label: 'Wastes having as constituents (Annex I to the Protocol) ',
          },
          article_items: [{
            label: '2002',
            type: 'text',
            name: '2002',
            selected: '',
          }, {
            label: '2003',
            type: 'text',
            name: '2003',
            selected: '',
          }, {
            label: '2005',
            type: 'text',
            name: '2005',
            selected: '',
          }, {
            label: '2006',
            type: 'text',
            name: '2006',
            selected: '',
          }, {
            label: '2007',
            type: 'text',
            name: '2007',
            selected: '',
          }]
        }, {
          article_title: {
            name: 'Y30',
            label: 'Thallium; thalliumcompounds',
          },
          article_label: {
            name: 'l2',
            label: 'Wastes having as constituents (Annex I to the Protocol) ',
          },
          article_items: [{
            label: '2002',
            type: 'text',
            name: '2002',
            selected: '',
          }, {
            label: '2003',
            type: 'text',
            name: '2003',
            selected: '',
          }, {
            label: '2005',
            type: 'text',
            name: '2005',
            selected: '',
          }, {
            label: '2006',
            type: 'text',
            name: '2006',
            selected: '',
          }, {
            label: '2007',
            type: 'text',
            name: '2007',
            selected: '',
          }]
        }, {
          article_title: {
            name: 'Y31',
            label: 'Lead; lead compound',
          },
          article_label: {
            name: 'l2',
            label: 'Wastes having as constituents (Annex I to the Protocol) ',
          },
          article_items: [{
            label: '2002',
            type: 'text',
            name: '2002',
            selected: '',
          }, {
            label: '2003',
            type: 'text',
            name: '2003',
            selected: '',
          }, {
            label: '2005',
            type: 'text',
            name: '2005',
            selected: '',
          }, {
            label: '2006',
            type: 'text',
            name: '2006',
            selected: '',
          }, {
            label: '2007',
            type: 'text',
            name: '2007',
            selected: '',
          }]
        }, {
          article_title: {
            name: 'Y32',
            label: 'Inorganic fluorine compounds excluding calciumfluoride  ',
          },
          article_label: {
            name: 'l2',
            label: 'Wastes having as constituents (Annex I to the Protocol) ',
          },
          article_items: [{
            label: '2002',
            type: 'text',
            name: '2002',
            selected: '',
          }, {
            label: '2003',
            type: 'text',
            name: '2003',
            selected: '',
          }, {
            label: '2005',
            type: 'text',
            name: '2005',
            selected: '',
          }, {
            label: '2006',
            type: 'text',
            name: '2006',
            selected: '',
          }, {
            label: '2007',
            type: 'text',
            name: '2007',
            selected: '',
          }]
        }, {
          article_title: {
            name: 'Y33',
            label: 'Inorganiccyanides',
          },
          article_label: {
            name: 'l2',
            label: 'Wastes having as constituents (Annex I to the Protocol) ',
          },
          article_items: [{
            label: '2002',
            type: 'text',
            name: '2002',
            selected: '',
          }, {
            label: '2003',
            type: 'text',
            name: '2003',
            selected: '',
          }, {
            label: '2005',
            type: 'text',
            name: '2005',
            selected: '',
          }, {
            label: '2006',
            type: 'text',
            name: '2006',
            selected: '',
          }, {
            label: '2007',
            type: 'text',
            name: '2007',
            selected: '',
          }]
        }, {
          article_title: {
            name: 'Y34',
            label: 'Acidic solutions or acids in solid form',
          },
          article_label: {
            name: 'l2',
            label: 'Wastes having as constituents (Annex I to the Protocol) ',
          },
          article_items: [{
            label: '2002',
            type: 'text',
            name: '2002',
            selected: '',
          }, {
            label: '2003',
            type: 'text',
            name: '2003',
            selected: '',
          }, {
            label: '2005',
            type: 'text',
            name: '2005',
            selected: '',
          }, {
            label: '2006',
            type: 'text',
            name: '2006',
            selected: '',
          }, {
            label: '2007',
            type: 'text',
            name: '2007',
            selected: '',
          }]
        }, {
          article_title: {
            name: 'Y35',
            label: 'Basic solutions or bases in solid form  ',
          },
          article_label: {
            name: 'l2',
            label: 'Wastes having as constituents (Annex I to the Protocol) ',
          },
          article_items: [{
            label: '2002',
            type: 'text',
            name: '2002',
            selected: '',
          }, {
            label: '2003',
            type: 'text',
            name: '2003',
            selected: '',
          }, {
            label: '2005',
            type: 'text',
            name: '2005',
            selected: '',
          }, {
            label: '2006',
            type: 'text',
            name: '2006',
            selected: '',
          }, {
            label: '2007',
            type: 'text',
            name: '2007',
            selected: '',
          }]
        }, {
          article_title: {
            name: 'Y36',
            label: 'Asbestos (dust and fibres)  ',
          },
          article_label: {
            name: 'l2',
            label: 'Wastes having as constituents (Annex I to the Protocol) ',
          },
          article_items: [{
            label: '2002',
            type: 'text',
            name: '2002',
            selected: '',
          }, {
            label: '2003',
            type: 'text',
            name: '2003',
            selected: '',
          }, {
            label: '2005',
            type: 'text',
            name: '2005',
            selected: '',
          }, {
            label: '2006',
            type: 'text',
            name: '2006',
            selected: '',
          }, {
            label: '2007',
            type: 'text',
            name: '2007',
            selected: '',
          }]
        }, {
          article_title: {
            name: 'Y37',
            label: 'Organic phosphorus compounds',
          },
          article_label: {
            name: 'l2',
            label: 'Wastes having as constituents (Annex I to the Protocol) ',
          },
          article_items: [{
            label: '2002',
            type: 'text',
            name: '2002',
            selected: '',
          }, {
            label: '2003',
            type: 'text',
            name: '2003',
            selected: '',
          }, {
            label: '2005',
            type: 'text',
            name: '2005',
            selected: '',
          }, {
            label: '2006',
            type: 'text',
            name: '2006',
            selected: '',
          }, {
            label: '2007',
            type: 'text',
            name: '2007',
            selected: '',
          }]
        }, {
          article_title: {
            name: 'Y38',
            label: 'Organic cyanides',
          },
          article_label: {
            name: 'l2',
            label: 'Wastes having as constituents (Annex I to the Protocol) ',
          },
          article_items: [{
            label: '2002',
            type: 'text',
            name: '2002',
            selected: '',
          }, {
            label: '2003',
            type: 'text',
            name: '2003',
            selected: '',
          }, {
            label: '2005',
            type: 'text',
            name: '2005',
            selected: '',
          }, {
            label: '2006',
            type: 'text',
            name: '2006',
            selected: '',
          }, {
            label: '2007',
            type: 'text',
            name: '2007',
            selected: '',
          }]
        }, {
          article_title: {
            name: 'Y39',
            label: 'Phenols; phenolcompounds including chlorophenols',
          },
          article_label: {
            name: 'l2',
            label: 'Wastes having as constituents (Annex I to the Protocol) ',
          },
          article_items: [{
            label: '2002',
            type: 'text',
            name: '2002',
            selected: '',
          }, {
            label: '2003',
            type: 'text',
            name: '2003',
            selected: '',
          }, {
            label: '2005',
            type: 'text',
            name: '2005',
            selected: '',
          }, {
            label: '2006',
            type: 'text',
            name: '2006',
            selected: '',
          }, {
            label: '2007',
            type: 'text',
            name: '2007',
            selected: '',
          }]
        }, {
          article_title: {
            name: 'Y40',
            label: 'Ethers',
          },
          article_label: {
            name: 'l2',
            label: 'Wastes having as constituents (Annex I to the Protocol) ',
          },
          article_items: [{
            label: '2002',
            type: 'text',
            name: '2002',
            selected: '',
          }, {
            label: '2003',
            type: 'text',
            name: '2003',
            selected: '',
          }, {
            label: '2005',
            type: 'text',
            name: '2005',
            selected: '',
          }, {
            label: '2006',
            type: 'text',
            name: '2006',
            selected: '',
          }, {
            label: '2007',
            type: 'text',
            name: '2007',
            selected: '',
          }]
        }, {
          article_title: {
            name: 'Y41',
            label: 'Halogenated organic solvents',
          },
          article_label: {
            name: 'l2',
            label: 'Wastes having as constituents (Annex I to the Protocol) ',
          },
          article_items: [{
            label: '2002',
            type: 'text',
            name: '2002',
            selected: '',
          }, {
            label: '2003',
            type: 'text',
            name: '2003',
            selected: '',
          }, {
            label: '2005',
            type: 'text',
            name: '2005',
            selected: '',
          }, {
            label: '2006',
            type: 'text',
            name: '2006',
            selected: '',
          }, {
            label: '2007',
            type: 'text',
            name: '2007',
            selected: '',
          }]
        }, {
          article_title: {
            name: 'Y42',
            label: 'Organic solvents excluding halogenated solvents',
          },
          article_label: {
            name: 'l2',
            label: 'Wastes having as constituents (Annex I to the Protocol) ',
          },
          article_items: [{
            label: '2002',
            type: 'text',
            name: '2002',
            selected: '',
          }, {
            label: '2003',
            type: 'text',
            name: '2003',
            selected: '',
          }, {
            label: '2005',
            type: 'text',
            name: '2005',
            selected: '',
          }, {
            label: '2006',
            type: 'text',
            name: '2006',
            selected: '',
          }, {
            label: '2007',
            type: 'text',
            name: '2007',
            selected: '',
          }]
        }, {
          article_title: {
            name: 'Y43',
            label: 'Any congenor of polychlorinated dibenzo-furan',
          },
          article_label: {
            name: 'l2',
            label: 'Wastes having as constituents (Annex I to the Protocol) ',
          },
          article_items: [{
            label: '2002',
            type: 'text',
            name: '2002',
            selected: '',
          }, {
            label: '2003',
            type: 'text',
            name: '2003',
            selected: '',
          }, {
            label: '2005',
            type: 'text',
            name: '2005',
            selected: '',
          }, {
            label: '2006',
            type: 'text',
            name: '2006',
            selected: '',
          }, {
            label: '2007',
            type: 'text',
            name: '2007',
            selected: '',
          }]
        }, {
          article_title: {
            name: 'Y44',
            label: 'Any congenor of polychlorinated dibenzo-p-dioxin',
          },
          article_label: {
            name: 'l2',
            label: 'Wastes having as constituents (Annex I to the Protocol) ',
          },
          article_items: [{
            label: '2002',
            type: 'text',
            name: '2002',
            selected: '',
          }, {
            label: '2003',
            type: 'text',
            name: '2003',
            selected: '',
          }, {
            label: '2005',
            type: 'text',
            name: '2005',
            selected: '',
          }, {
            label: '2006',
            type: 'text',
            name: '2006',
            selected: '',
          }, {
            label: '2007',
            type: 'text',
            name: '2007',
            selected: '',
          }]
        }, {
          article_title: {
            name: 'Y45',
            label: 'Organohalogen compounds other than … (e.g. Y39, Y41, Y42, Y43, Y44)',
          },
          article_label: {
            name: 'l2',
            label: 'Wastes having as constituents (Annex I to the Protocol) ',
          },
          article_items: [{
            label: '2002',
            type: 'text',
            name: '2002',
            selected: '',
          }, {
            label: '2003',
            type: 'text',
            name: '2003',
            selected: '',
          }, {
            label: '2005',
            type: 'text',
            name: '2005',
            selected: '',
          }, {
            label: '2006',
            type: 'text',
            name: '2006',
            selected: '',
          }, {
            label: '2007',
            type: 'text',
            name: '2007',
            selected: '',
          }]
        }, {
          article_title: {
            name: 'Y46',
            label: 'Wastes collected from households',
          },
          article_label: {
            name: 'l3',
            label: 'Household wastes (Annex I to the Protocol)',
          },
          article_items: [{
            label: '2002',
            type: 'text',
            name: '2002',
            selected: '',
          }, {
            label: '2003',
            type: 'text',
            name: '2003',
            selected: '',
          }, {
            label: '2005',
            type: 'text',
            name: '2005',
            selected: '',
          }, {
            label: '2006',
            type: 'text',
            name: '2006',
            selected: '',
          }, {
            label: '2007',
            type: 'text',
            name: '2007',
            selected: '',
          }]
        }, {
          article_title: {
            name: 'Y47',
            label: 'Residues arising from the incineration of household wastes',
          },
          article_label: {
            name: 'l3',
            label: 'Household wastes (Annex I to the Protocol)',
          },
          article_items: [{
            label: '2002',
            type: 'text',
            name: '2002',
            selected: '',
          }, {
            label: '2003',
            type: 'text',
            name: '2003',
            selected: '',
          }, {
            label: '2005',
            type: 'text',
            name: '2005',
            selected: '',
          }, {
            label: '2006',
            type: 'text',
            name: '2006',
            selected: '',
          }, {
            label: '2007',
            type: 'text',
            name: '2007',
            selected: '',
          }]
        }, ]
      },

    }
  },
  tab_3: {
    label: 'PART III: Transboundary movements of hazardous wastes or other wastes',
    collection_id: 707,
    parent_collection_id: 7,
    data: {
      question: '',
      table_1: {
        table_label: 'Table V - Export of hazardous wastes and other wastes',
        collection_id: 708,
        parent_collection_id: 707,
        questions: [{
            name: 'amounts_exported',
            label: 'Total amounts exported',
            type: 'text',
            selected: '',
          },
          {
            name: 'Y0-Y45',
            label: 'Total amount of hazardous wastes under Article 3.1.a Annex IA(Y0-Y45) exported in metric tons',
            type: 'number',
            selected: '',
          },
          {
            name: 'Y46-Y47',
            label: 'Total amount of hazardous wastes under Article 3.1.a Annex IA(Y0-Y45) exported in metric tons',
            type: 'number',
            selected: '',
          },
          {
            name: 'total_amount',
            label: 'Total amount of hazardous wastes or other wastes exported in metric tons',
            type: 'number',
            selected: '',
          },
        ],
        articles: [{
          article_title: {
            label: 'Y code',
            type: 'text',
            name: 'y_code',
            category_label: 'Category of waste',
            note: 'The Y code must be specified or, if none is applicable, the waste streams/having wastes as constituents',
            selected: '',
          },
          article_items: [ {
            label: 'Waste streams/ having wastes as constituents',
            type: 'text',
            name: 'waste_streams',
            category_label: 'Category of waste',
            note: 'Not required to fill in if the Y-code has been specified.',
            selected: '',
          }, {
            label: 'UN class',
            type: 'text',
            name: 'un_class',
            category_label: 'Hazardous characteristics (Annex II)',
            note: 'Optional to fill in.',
            selected: '',
          }, {
            label: 'H\' class',
            type: 'text',
            name: 'h_class',
            category_label: 'Hazardous characteristics (Annex II)',
            note: 'Optional to fill in.',
            selected: '',
          }, {
            label: 'Characteristics',
            type: 'text',
            name: 'characteristics',
            category_label: 'Hazardous characteristics (Annex II)',
            note: 'Optional to fill in.',
            selected: '',
          }, {
            label: 'Amount exported (metric tons)',
            type: 'number',
            category_label: 'Other information',
            name: 'amount_exported',
            note: '',
            selected: '',
          }, {
            label: 'Country/countries of transit',
            type: 'select',
            category_label: 'Other information',
            name: 'country_of_transit',
            selected: '',
            options: [{
                "value": "AF",
                "text": "Afghanistan"
              },
              {
                "value": "AX",
                "text": "Åland Islands"
              },
              {
                "value": "AL",
                "text": "Albania"
              },
              {
                "value": "DZ",
                "text": "Algeria"
              },
              {
                "value": "AS",
                "text": "American Samoa"
              },
              {
                "value": "AD",
                "text": "Andorra"
              },
              {
                "value": "AO",
                "text": "Angola"
              },
              {
                "value": "AI",
                "text": "Anguilla"
              },
              {
                "value": "AQ",
                "text": "Antarctica"
              },
              {
                "value": "AG",
                "text": "Antigua and Barbuda"
              },
              {
                "value": "AR",
                "text": "Argentina"
              },
              {
                "value": "AM",
                "text": "Armenia"
              },
              {
                "value": "AW",
                "text": "Aruba"
              },
              {
                "value": "AU",
                "text": "Australia"
              },
              {
                "value": "AT",
                "text": "Austria"
              },
              {
                "value": "AZ",
                "text": "Azerbaijan"
              },
              {
                "value": "BS",
                "text": "Bahamas"
              },
              {
                "value": "BH",
                "text": "Bahrain"
              },
              {
                "value": "BD",
                "text": "Bangladesh"
              },
              {
                "value": "BB",
                "text": "Barbados"
              },
              {
                "value": "BY",
                "text": "Belarus"
              },
              {
                "value": "BE",
                "text": "Belgium"
              },
              {
                "value": "BZ",
                "text": "Belize"
              },
              {
                "value": "BJ",
                "text": "Benin"
              },
              {
                "value": "BM",
                "text": "Bermuda"
              },
              {
                "value": "BT",
                "text": "Bhutan"
              },
              {
                "value": "BO",
                "text": "Bolivia, Plurinational State of"
              },
              {
                "value": "BQ",
                "text": "Bonaire, Sint Eustatius and Saba"
              },
              {
                "value": "BA",
                "text": "Bosnia and Herzegovina"
              },
              {
                "value": "BW",
                "text": "Botswana"
              },
              {
                "value": "BV",
                "text": "Bouvet Island"
              },
              {
                "value": "BR",
                "text": "Brazil"
              },
              {
                "value": "IO",
                "text": "British Indian Ocean Territory"
              },
              {
                "value": "BN",
                "text": "Brunei Darussalam"
              },
              {
                "value": "BG",
                "text": "Bulgaria"
              },
              {
                "value": "BF",
                "text": "Burkina Faso"
              },
              {
                "value": "BI",
                "text": "Burundi"
              },
              {
                "value": "KH",
                "text": "Cambodia"
              },
              {
                "value": "CM",
                "text": "Cameroon"
              },
              {
                "value": "CA",
                "text": "Canada"
              },
              {
                "value": "CV",
                "text": "Cape Verde"
              },
              {
                "value": "KY",
                "text": "Cayman Islands"
              },
              {
                "value": "CF",
                "text": "Central African Republic"
              },
              {
                "value": "TD",
                "text": "Chad"
              },
              {
                "value": "CL",
                "text": "Chile"
              },
              {
                "value": "CN",
                "text": "China"
              },
              {
                "value": "CX",
                "text": "Christmas Island"
              },
              {
                "value": "CC",
                "text": "Cocos (Keeling) Islands"
              },
              {
                "value": "CO",
                "text": "Colombia"
              },
              {
                "value": "KM",
                "text": "Comoros"
              },
              {
                "value": "CG",
                "text": "Congo"
              },
              {
                "value": "CD",
                "text": "Congo, the Democratic Republic of the"
              },
              {
                "value": "CK",
                "text": "Cook Islands"
              },
              {
                "value": "CR",
                "text": "Costa Rica"
              },
              {
                "value": "CI",
                "text": "Côte d'Ivoire"
              },
              {
                "value": "HR",
                "text": "Croatia"
              },
              {
                "value": "CU",
                "text": "Cuba"
              },
              {
                "value": "CW",
                "text": "Curaçao"
              },
              {
                "value": "CY",
                "text": "Cyprus"
              },
              {
                "value": "CZ",
                "text": "Czech Republic"
              },
              {
                "value": "DK",
                "text": "Denmark"
              },
              {
                "value": "DJ",
                "text": "Djibouti"
              },
              {
                "value": "DM",
                "text": "Dominica"
              },
              {
                "value": "DO",
                "text": "Dominican Republic"
              },
              {
                "value": "EC",
                "text": "Ecuador"
              },
              {
                "value": "EG",
                "text": "Egypt"
              },
              {
                "value": "SV",
                "text": "El Salvador"
              },
              {
                "value": "GQ",
                "text": "Equatorial Guinea"
              },
              {
                "value": "ER",
                "text": "Eritrea"
              },
              {
                "value": "EE",
                "text": "Estonia"
              },
              {
                "value": "ET",
                "text": "Ethiopia"
              },
              {
                "value": "FK",
                "text": "Falkland Islands (Malvinas)"
              },
              {
                "value": "FO",
                "text": "Faroe Islands"
              },
              {
                "value": "FJ",
                "text": "Fiji"
              },
              {
                "value": "FI",
                "text": "Finland"
              },
              {
                "value": "FR",
                "text": "France"
              },
              {
                "value": "GF",
                "text": "French Guiana"
              },
              {
                "value": "PF",
                "text": "French Polynesia"
              },
              {
                "value": "TF",
                "text": "French Southern Territories"
              },
              {
                "value": "GA",
                "text": "Gabon"
              },
              {
                "value": "GM",
                "text": "Gambia"
              },
              {
                "value": "GE",
                "text": "Georgia"
              },
              {
                "value": "DE",
                "text": "Germany"
              },
              {
                "value": "GH",
                "text": "Ghana"
              },
              {
                "value": "GI",
                "text": "Gibraltar"
              },
              {
                "value": "GR",
                "text": "Greece"
              },
              {
                "value": "GL",
                "text": "Greenland"
              },
              {
                "value": "GD",
                "text": "Grenada"
              },
              {
                "value": "GP",
                "text": "Guadeloupe"
              },
              {
                "value": "GU",
                "text": "Guam"
              },
              {
                "value": "GT",
                "text": "Guatemala"
              },
              {
                "value": "GG",
                "text": "Guernsey"
              },
              {
                "value": "GN",
                "text": "Guinea"
              },
              {
                "value": "GW",
                "text": "Guinea-Bissau"
              },
              {
                "value": "GY",
                "text": "Guyana"
              },
              {
                "value": "HT",
                "text": "Haiti"
              },
              {
                "value": "HM",
                "text": "Heard Island and McDonald Islands"
              },
              {
                "value": "VA",
                "text": "Holy See (Vatican City State)"
              },
              {
                "value": "HN",
                "text": "Honduras"
              },
              {
                "value": "HK",
                "text": "Hong Kong"
              },
              {
                "value": "HU",
                "text": "Hungary"
              },
              {
                "value": "IS",
                "text": "Iceland"
              },
              {
                "value": "IN",
                "text": "India"
              },
              {
                "value": "ID",
                "text": "Indonesia"
              },
              {
                "value": "IR",
                "text": "Iran, Islamic Republic of"
              },
              {
                "value": "IQ",
                "text": "Iraq"
              },
              {
                "value": "IE",
                "text": "Ireland"
              },
              {
                "value": "IM",
                "text": "Isle of Man"
              },
              {
                "value": "IL",
                "text": "Israel"
              },
              {
                "value": "IT",
                "text": "Italy"
              },
              {
                "value": "JM",
                "text": "Jamaica"
              },
              {
                "value": "JP",
                "text": "Japan"
              },
              {
                "value": "JE",
                "text": "Jersey"
              },
              {
                "value": "JO",
                "text": "Jordan"
              },
              {
                "value": "KZ",
                "text": "Kazakhstan"
              },
              {
                "value": "KE",
                "text": "Kenya"
              },
              {
                "value": "KI",
                "text": "Kiribati"
              },
              {
                "value": "KP",
                "text": "Korea, Democratic People's Republic of"
              },
              {
                "value": "KR",
                "text": "Korea, Republic of"
              },
              {
                "value": "KW",
                "text": "Kuwait"
              },
              {
                "value": "KG",
                "text": "Kyrgyzstan"
              },
              {
                "value": "LA",
                "text": "Lao People's Democratic Republic"
              },
              {
                "value": "LV",
                "text": "Latvia"
              },
              {
                "value": "LB",
                "text": "Lebanon"
              },
              {
                "value": "LS",
                "text": "Lesotho"
              },
              {
                "value": "LR",
                "text": "Liberia"
              },
              {
                "value": "LY",
                "text": "Libya"
              },
              {
                "value": "LI",
                "text": "Liechtenstein"
              },
              {
                "value": "LT",
                "text": "Lithuania"
              },
              {
                "value": "LU",
                "text": "Luxembourg"
              },
              {
                "value": "MO",
                "text": "Macao"
              },
              {
                "value": "MK",
                "text": "Macedonia, the Former Yugoslav Republic of"
              },
              {
                "value": "MG",
                "text": "Madagascar"
              },
              {
                "value": "MW",
                "text": "Malawi"
              },
              {
                "value": "MY",
                "text": "Malaysia"
              },
              {
                "value": "MV",
                "text": "Maldives"
              },
              {
                "value": "ML",
                "text": "Mali"
              },
              {
                "value": "MT",
                "text": "Malta"
              },
              {
                "value": "MH",
                "text": "Marshall Islands"
              },
              {
                "value": "MQ",
                "text": "Martinique"
              },
              {
                "value": "MR",
                "text": "Mauritania"
              },
              {
                "value": "MU",
                "text": "Mauritius"
              },
              {
                "value": "YT",
                "text": "Mayotte"
              },
              {
                "value": "MX",
                "text": "Mexico"
              },
              {
                "value": "FM",
                "text": "Micronesia, Federated States of"
              },
              {
                "value": "MD",
                "text": "Moldova, Republic of"
              },
              {
                "value": "MC",
                "text": "Monaco"
              },
              {
                "value": "MN",
                "text": "Mongolia"
              },
              {
                "value": "ME",
                "text": "Montenegro"
              },
              {
                "value": "MS",
                "text": "Montserrat"
              },
              {
                "value": "MA",
                "text": "Morocco"
              },
              {
                "value": "MZ",
                "text": "Mozambique"
              },
              {
                "value": "MM",
                "text": "Myanmar"
              },
              {
                "value": "NA",
                "text": "Namibia"
              },
              {
                "value": "NR",
                "text": "Nauru"
              },
              {
                "value": "NP",
                "text": "Nepal"
              },
              {
                "value": "NL",
                "text": "Netherlands"
              },
              {
                "value": "NC",
                "text": "New Caledonia"
              },
              {
                "value": "NZ",
                "text": "New Zealand"
              },
              {
                "value": "NI",
                "text": "Nicaragua"
              },
              {
                "value": "NE",
                "text": "Niger"
              },
              {
                "value": "NG",
                "text": "Nigeria"
              },
              {
                "value": "NU",
                "text": "Niue"
              },
              {
                "value": "NF",
                "text": "Norfolk Island"
              },
              {
                "value": "MP",
                "text": "Northern Mariana Islands"
              },
              {
                "value": "NO",
                "text": "Norway"
              },
              {
                "value": "OM",
                "text": "Oman"
              },
              {
                "value": "PK",
                "text": "Pakistan"
              },
              {
                "value": "PW",
                "text": "Palau"
              },
              {
                "value": "PS",
                "text": "Palestine, State of"
              },
              {
                "value": "PA",
                "text": "Panama"
              },
              {
                "value": "PG",
                "text": "Papua New Guinea"
              },
              {
                "value": "PY",
                "text": "Paraguay"
              },
              {
                "value": "PE",
                "text": "Peru"
              },
              {
                "value": "PH",
                "text": "Philippines"
              },
              {
                "value": "PN",
                "text": "Pitcairn"
              },
              {
                "value": "PL",
                "text": "Poland"
              },
              {
                "value": "PT",
                "text": "Portugal"
              },
              {
                "value": "PR",
                "text": "Puerto Rico"
              },
              {
                "value": "QA",
                "text": "Qatar"
              },
              {
                "value": "RE",
                "text": "Réunion"
              },
              {
                "value": "RO",
                "text": "Romania"
              },
              {
                "value": "RU",
                "text": "Russian Federation"
              },
              {
                "value": "RW",
                "text": "Rwanda"
              },
              {
                "value": "BL",
                "text": "Saint Barthélemy"
              },
              {
                "value": "SH",
                "text": "Saint Helena, Ascension and Tristan da Cunha"
              },
              {
                "value": "KN",
                "text": "Saint Kitts and Nevis"
              },
              {
                "value": "LC",
                "text": "Saint Lucia"
              },
              {
                "value": "MF",
                "text": "Saint Martin (French part)"
              },
              {
                "value": "PM",
                "text": "Saint Pierre and Miquelon"
              },
              {
                "value": "VC",
                "text": "Saint Vincent and the Grenadines"
              },
              {
                "value": "WS",
                "text": "Samoa"
              },
              {
                "value": "SM",
                "text": "San Marino"
              },
              {
                "value": "ST",
                "text": "Sao Tome and Principe"
              },
              {
                "value": "SA",
                "text": "Saudi Arabia"
              },
              {
                "value": "SN",
                "text": "Senegal"
              },
              {
                "value": "RS",
                "text": "Serbia"
              },
              {
                "value": "SC",
                "text": "Seychelles"
              },
              {
                "value": "SL",
                "text": "Sierra Leone"
              },
              {
                "value": "SG",
                "text": "Singapore"
              },
              {
                "value": "SX",
                "text": "Sint Maarten (Dutch part)"
              },
              {
                "value": "SK",
                "text": "Slovakia"
              },
              {
                "value": "SI",
                "text": "Slovenia"
              },
              {
                "value": "SB",
                "text": "Solomon Islands"
              },
              {
                "value": "SO",
                "text": "Somalia"
              },
              {
                "value": "ZA",
                "text": "South Africa"
              },
              {
                "value": "GS",
                "text": "South Georgia and the South Sandwich Islands"
              },
              {
                "value": "SS",
                "text": "South Sudan"
              },
              {
                "value": "ES",
                "text": "Spain"
              },
              {
                "value": "LK",
                "text": "Sri Lanka"
              },
              {
                "value": "SD",
                "text": "Sudan"
              },
              {
                "value": "SR",
                "text": "Suriname"
              },
              {
                "value": "SJ",
                "text": "Svalbard and Jan Mayen"
              },
              {
                "value": "SZ",
                "text": "Swaziland"
              },
              {
                "value": "SE",
                "text": "Sweden"
              },
              {
                "value": "CH",
                "text": "Switzerland"
              },
              {
                "value": "SY",
                "text": "Syrian Arab Republic"
              },
              {
                "value": "TW",
                "text": "Taiwan, Province of China"
              },
              {
                "value": "TJ",
                "text": "Tajikistan"
              },
              {
                "value": "TZ",
                "text": "Tanzania, United Republic of"
              },
              {
                "value": "TH",
                "text": "Thailand"
              },
              {
                "value": "TL",
                "text": "Timor-Leste"
              },
              {
                "value": "TG",
                "text": "Togo"
              },
              {
                "value": "TK",
                "text": "Tokelau"
              },
              {
                "value": "TO",
                "text": "Tonga"
              },
              {
                "value": "TT",
                "text": "Trinidad and Tobago"
              },
              {
                "value": "TN",
                "text": "Tunisia"
              },
              {
                "value": "TR",
                "text": "Turkey"
              },
              {
                "value": "TM",
                "text": "Turkmenistan"
              },
              {
                "value": "TC",
                "text": "Turks and Caicos Islands"
              },
              {
                "value": "TV",
                "text": "Tuvalu"
              },
              {
                "value": "UG",
                "text": "Uganda"
              },
              {
                "value": "UA",
                "text": "Ukraine"
              },
              {
                "value": "AE",
                "text": "United Arab Emirates"
              },
              {
                "value": "GB",
                "text": "United Kingdom"
              },
              {
                "value": "US",
                "text": "United States"
              },
              {
                "value": "UM",
                "text": "United States Minor Outlying Islands"
              },
              {
                "value": "UY",
                "text": "Uruguay"
              },
              {
                "value": "UZ",
                "text": "Uzbekistan"
              },
              {
                "value": "VU",
                "text": "Vanuatu"
              },
              {
                "value": "VE",
                "text": "Venezuela, Bolivarian Republic of"
              },
              {
                "value": "VN",
                "text": "Viet Nam"
              },
              {
                "value": "VG",
                "text": "Virgin Islands, British"
              },
              {
                "value": "VI",
                "text": "Virgin Islands, U.S."
              },
              {
                "value": "WF",
                "text": "Wallis and Futuna"
              },
              {
                "value": "EH",
                "text": "Western Sahara"
              },
              {
                "value": "YE",
                "text": "Yemen"
              },
              {
                "value": "ZM",
                "text": "Zambia"
              },
              {
                "value": "ZW",
                "text": "Zimbabwe"
              }
            ]
          }, {
            label: 'Country of destination',
            type: 'select',
            category_label: 'Other information',
            name: 'country_of_destionation',
            note: '',
            options: [{
                "value": "AF",
                "text": "Afghanistan"
              },
              {
                "value": "AX",
                "text": "Åland Islands"
              },
              {
                "value": "AL",
                "text": "Albania"
              },
              {
                "value": "DZ",
                "text": "Algeria"
              },
              {
                "value": "AS",
                "text": "American Samoa"
              },
              {
                "value": "AD",
                "text": "Andorra"
              },
              {
                "value": "AO",
                "text": "Angola"
              },
              {
                "value": "AI",
                "text": "Anguilla"
              },
              {
                "value": "AQ",
                "text": "Antarctica"
              },
              {
                "value": "AG",
                "text": "Antigua and Barbuda"
              },
              {
                "value": "AR",
                "text": "Argentina"
              },
              {
                "value": "AM",
                "text": "Armenia"
              },
              {
                "value": "AW",
                "text": "Aruba"
              },
              {
                "value": "AU",
                "text": "Australia"
              },
              {
                "value": "AT",
                "text": "Austria"
              },
              {
                "value": "AZ",
                "text": "Azerbaijan"
              },
              {
                "value": "BS",
                "text": "Bahamas"
              },
              {
                "value": "BH",
                "text": "Bahrain"
              },
              {
                "value": "BD",
                "text": "Bangladesh"
              },
              {
                "value": "BB",
                "text": "Barbados"
              },
              {
                "value": "BY",
                "text": "Belarus"
              },
              {
                "value": "BE",
                "text": "Belgium"
              },
              {
                "value": "BZ",
                "text": "Belize"
              },
              {
                "value": "BJ",
                "text": "Benin"
              },
              {
                "value": "BM",
                "text": "Bermuda"
              },
              {
                "value": "BT",
                "text": "Bhutan"
              },
              {
                "value": "BO",
                "text": "Bolivia, Plurinational State of"
              },
              {
                "value": "BQ",
                "text": "Bonaire, Sint Eustatius and Saba"
              },
              {
                "value": "BA",
                "text": "Bosnia and Herzegovina"
              },
              {
                "value": "BW",
                "text": "Botswana"
              },
              {
                "value": "BV",
                "text": "Bouvet Island"
              },
              {
                "value": "BR",
                "text": "Brazil"
              },
              {
                "value": "IO",
                "text": "British Indian Ocean Territory"
              },
              {
                "value": "BN",
                "text": "Brunei Darussalam"
              },
              {
                "value": "BG",
                "text": "Bulgaria"
              },
              {
                "value": "BF",
                "text": "Burkina Faso"
              },
              {
                "value": "BI",
                "text": "Burundi"
              },
              {
                "value": "KH",
                "text": "Cambodia"
              },
              {
                "value": "CM",
                "text": "Cameroon"
              },
              {
                "value": "CA",
                "text": "Canada"
              },
              {
                "value": "CV",
                "text": "Cape Verde"
              },
              {
                "value": "KY",
                "text": "Cayman Islands"
              },
              {
                "value": "CF",
                "text": "Central African Republic"
              },
              {
                "value": "TD",
                "text": "Chad"
              },
              {
                "value": "CL",
                "text": "Chile"
              },
              {
                "value": "CN",
                "text": "China"
              },
              {
                "value": "CX",
                "text": "Christmas Island"
              },
              {
                "value": "CC",
                "text": "Cocos (Keeling) Islands"
              },
              {
                "value": "CO",
                "text": "Colombia"
              },
              {
                "value": "KM",
                "text": "Comoros"
              },
              {
                "value": "CG",
                "text": "Congo"
              },
              {
                "value": "CD",
                "text": "Congo, the Democratic Republic of the"
              },
              {
                "value": "CK",
                "text": "Cook Islands"
              },
              {
                "value": "CR",
                "text": "Costa Rica"
              },
              {
                "value": "CI",
                "text": "Côte d'Ivoire"
              },
              {
                "value": "HR",
                "text": "Croatia"
              },
              {
                "value": "CU",
                "text": "Cuba"
              },
              {
                "value": "CW",
                "text": "Curaçao"
              },
              {
                "value": "CY",
                "text": "Cyprus"
              },
              {
                "value": "CZ",
                "text": "Czech Republic"
              },
              {
                "value": "DK",
                "text": "Denmark"
              },
              {
                "value": "DJ",
                "text": "Djibouti"
              },
              {
                "value": "DM",
                "text": "Dominica"
              },
              {
                "value": "DO",
                "text": "Dominican Republic"
              },
              {
                "value": "EC",
                "text": "Ecuador"
              },
              {
                "value": "EG",
                "text": "Egypt"
              },
              {
                "value": "SV",
                "text": "El Salvador"
              },
              {
                "value": "GQ",
                "text": "Equatorial Guinea"
              },
              {
                "value": "ER",
                "text": "Eritrea"
              },
              {
                "value": "EE",
                "text": "Estonia"
              },
              {
                "value": "ET",
                "text": "Ethiopia"
              },
              {
                "value": "FK",
                "text": "Falkland Islands (Malvinas)"
              },
              {
                "value": "FO",
                "text": "Faroe Islands"
              },
              {
                "value": "FJ",
                "text": "Fiji"
              },
              {
                "value": "FI",
                "text": "Finland"
              },
              {
                "value": "FR",
                "text": "France"
              },
              {
                "value": "GF",
                "text": "French Guiana"
              },
              {
                "value": "PF",
                "text": "French Polynesia"
              },
              {
                "value": "TF",
                "text": "French Southern Territories"
              },
              {
                "value": "GA",
                "text": "Gabon"
              },
              {
                "value": "GM",
                "text": "Gambia"
              },
              {
                "value": "GE",
                "text": "Georgia"
              },
              {
                "value": "DE",
                "text": "Germany"
              },
              {
                "value": "GH",
                "text": "Ghana"
              },
              {
                "value": "GI",
                "text": "Gibraltar"
              },
              {
                "value": "GR",
                "text": "Greece"
              },
              {
                "value": "GL",
                "text": "Greenland"
              },
              {
                "value": "GD",
                "text": "Grenada"
              },
              {
                "value": "GP",
                "text": "Guadeloupe"
              },
              {
                "value": "GU",
                "text": "Guam"
              },
              {
                "value": "GT",
                "text": "Guatemala"
              },
              {
                "value": "GG",
                "text": "Guernsey"
              },
              {
                "value": "GN",
                "text": "Guinea"
              },
              {
                "value": "GW",
                "text": "Guinea-Bissau"
              },
              {
                "value": "GY",
                "text": "Guyana"
              },
              {
                "value": "HT",
                "text": "Haiti"
              },
              {
                "value": "HM",
                "text": "Heard Island and McDonald Islands"
              },
              {
                "value": "VA",
                "text": "Holy See (Vatican City State)"
              },
              {
                "value": "HN",
                "text": "Honduras"
              },
              {
                "value": "HK",
                "text": "Hong Kong"
              },
              {
                "value": "HU",
                "text": "Hungary"
              },
              {
                "value": "IS",
                "text": "Iceland"
              },
              {
                "value": "IN",
                "text": "India"
              },
              {
                "value": "ID",
                "text": "Indonesia"
              },
              {
                "value": "IR",
                "text": "Iran, Islamic Republic of"
              },
              {
                "value": "IQ",
                "text": "Iraq"
              },
              {
                "value": "IE",
                "text": "Ireland"
              },
              {
                "value": "IM",
                "text": "Isle of Man"
              },
              {
                "value": "IL",
                "text": "Israel"
              },
              {
                "value": "IT",
                "text": "Italy"
              },
              {
                "value": "JM",
                "text": "Jamaica"
              },
              {
                "value": "JP",
                "text": "Japan"
              },
              {
                "value": "JE",
                "text": "Jersey"
              },
              {
                "value": "JO",
                "text": "Jordan"
              },
              {
                "value": "KZ",
                "text": "Kazakhstan"
              },
              {
                "value": "KE",
                "text": "Kenya"
              },
              {
                "value": "KI",
                "text": "Kiribati"
              },
              {
                "value": "KP",
                "text": "Korea, Democratic People's Republic of"
              },
              {
                "value": "KR",
                "text": "Korea, Republic of"
              },
              {
                "value": "KW",
                "text": "Kuwait"
              },
              {
                "value": "KG",
                "text": "Kyrgyzstan"
              },
              {
                "value": "LA",
                "text": "Lao People's Democratic Republic"
              },
              {
                "value": "LV",
                "text": "Latvia"
              },
              {
                "value": "LB",
                "text": "Lebanon"
              },
              {
                "value": "LS",
                "text": "Lesotho"
              },
              {
                "value": "LR",
                "text": "Liberia"
              },
              {
                "value": "LY",
                "text": "Libya"
              },
              {
                "value": "LI",
                "text": "Liechtenstein"
              },
              {
                "value": "LT",
                "text": "Lithuania"
              },
              {
                "value": "LU",
                "text": "Luxembourg"
              },
              {
                "value": "MO",
                "text": "Macao"
              },
              {
                "value": "MK",
                "text": "Macedonia, the Former Yugoslav Republic of"
              },
              {
                "value": "MG",
                "text": "Madagascar"
              },
              {
                "value": "MW",
                "text": "Malawi"
              },
              {
                "value": "MY",
                "text": "Malaysia"
              },
              {
                "value": "MV",
                "text": "Maldives"
              },
              {
                "value": "ML",
                "text": "Mali"
              },
              {
                "value": "MT",
                "text": "Malta"
              },
              {
                "value": "MH",
                "text": "Marshall Islands"
              },
              {
                "value": "MQ",
                "text": "Martinique"
              },
              {
                "value": "MR",
                "text": "Mauritania"
              },
              {
                "value": "MU",
                "text": "Mauritius"
              },
              {
                "value": "YT",
                "text": "Mayotte"
              },
              {
                "value": "MX",
                "text": "Mexico"
              },
              {
                "value": "FM",
                "text": "Micronesia, Federated States of"
              },
              {
                "value": "MD",
                "text": "Moldova, Republic of"
              },
              {
                "value": "MC",
                "text": "Monaco"
              },
              {
                "value": "MN",
                "text": "Mongolia"
              },
              {
                "value": "ME",
                "text": "Montenegro"
              },
              {
                "value": "MS",
                "text": "Montserrat"
              },
              {
                "value": "MA",
                "text": "Morocco"
              },
              {
                "value": "MZ",
                "text": "Mozambique"
              },
              {
                "value": "MM",
                "text": "Myanmar"
              },
              {
                "value": "NA",
                "text": "Namibia"
              },
              {
                "value": "NR",
                "text": "Nauru"
              },
              {
                "value": "NP",
                "text": "Nepal"
              },
              {
                "value": "NL",
                "text": "Netherlands"
              },
              {
                "value": "NC",
                "text": "New Caledonia"
              },
              {
                "value": "NZ",
                "text": "New Zealand"
              },
              {
                "value": "NI",
                "text": "Nicaragua"
              },
              {
                "value": "NE",
                "text": "Niger"
              },
              {
                "value": "NG",
                "text": "Nigeria"
              },
              {
                "value": "NU",
                "text": "Niue"
              },
              {
                "value": "NF",
                "text": "Norfolk Island"
              },
              {
                "value": "MP",
                "text": "Northern Mariana Islands"
              },
              {
                "value": "NO",
                "text": "Norway"
              },
              {
                "value": "OM",
                "text": "Oman"
              },
              {
                "value": "PK",
                "text": "Pakistan"
              },
              {
                "value": "PW",
                "text": "Palau"
              },
              {
                "value": "PS",
                "text": "Palestine, State of"
              },
              {
                "value": "PA",
                "text": "Panama"
              },
              {
                "value": "PG",
                "text": "Papua New Guinea"
              },
              {
                "value": "PY",
                "text": "Paraguay"
              },
              {
                "value": "PE",
                "text": "Peru"
              },
              {
                "value": "PH",
                "text": "Philippines"
              },
              {
                "value": "PN",
                "text": "Pitcairn"
              },
              {
                "value": "PL",
                "text": "Poland"
              },
              {
                "value": "PT",
                "text": "Portugal"
              },
              {
                "value": "PR",
                "text": "Puerto Rico"
              },
              {
                "value": "QA",
                "text": "Qatar"
              },
              {
                "value": "RE",
                "text": "Réunion"
              },
              {
                "value": "RO",
                "text": "Romania"
              },
              {
                "value": "RU",
                "text": "Russian Federation"
              },
              {
                "value": "RW",
                "text": "Rwanda"
              },
              {
                "value": "BL",
                "text": "Saint Barthélemy"
              },
              {
                "value": "SH",
                "text": "Saint Helena, Ascension and Tristan da Cunha"
              },
              {
                "value": "KN",
                "text": "Saint Kitts and Nevis"
              },
              {
                "value": "LC",
                "text": "Saint Lucia"
              },
              {
                "value": "MF",
                "text": "Saint Martin (French part)"
              },
              {
                "value": "PM",
                "text": "Saint Pierre and Miquelon"
              },
              {
                "value": "VC",
                "text": "Saint Vincent and the Grenadines"
              },
              {
                "value": "WS",
                "text": "Samoa"
              },
              {
                "value": "SM",
                "text": "San Marino"
              },
              {
                "value": "ST",
                "text": "Sao Tome and Principe"
              },
              {
                "value": "SA",
                "text": "Saudi Arabia"
              },
              {
                "value": "SN",
                "text": "Senegal"
              },
              {
                "value": "RS",
                "text": "Serbia"
              },
              {
                "value": "SC",
                "text": "Seychelles"
              },
              {
                "value": "SL",
                "text": "Sierra Leone"
              },
              {
                "value": "SG",
                "text": "Singapore"
              },
              {
                "value": "SX",
                "text": "Sint Maarten (Dutch part)"
              },
              {
                "value": "SK",
                "text": "Slovakia"
              },
              {
                "value": "SI",
                "text": "Slovenia"
              },
              {
                "value": "SB",
                "text": "Solomon Islands"
              },
              {
                "value": "SO",
                "text": "Somalia"
              },
              {
                "value": "ZA",
                "text": "South Africa"
              },
              {
                "value": "GS",
                "text": "South Georgia and the South Sandwich Islands"
              },
              {
                "value": "SS",
                "text": "South Sudan"
              },
              {
                "value": "ES",
                "text": "Spain"
              },
              {
                "value": "LK",
                "text": "Sri Lanka"
              },
              {
                "value": "SD",
                "text": "Sudan"
              },
              {
                "value": "SR",
                "text": "Suriname"
              },
              {
                "value": "SJ",
                "text": "Svalbard and Jan Mayen"
              },
              {
                "value": "SZ",
                "text": "Swaziland"
              },
              {
                "value": "SE",
                "text": "Sweden"
              },
              {
                "value": "CH",
                "text": "Switzerland"
              },
              {
                "value": "SY",
                "text": "Syrian Arab Republic"
              },
              {
                "value": "TW",
                "text": "Taiwan, Province of China"
              },
              {
                "value": "TJ",
                "text": "Tajikistan"
              },
              {
                "value": "TZ",
                "text": "Tanzania, United Republic of"
              },
              {
                "value": "TH",
                "text": "Thailand"
              },
              {
                "value": "TL",
                "text": "Timor-Leste"
              },
              {
                "value": "TG",
                "text": "Togo"
              },
              {
                "value": "TK",
                "text": "Tokelau"
              },
              {
                "value": "TO",
                "text": "Tonga"
              },
              {
                "value": "TT",
                "text": "Trinidad and Tobago"
              },
              {
                "value": "TN",
                "text": "Tunisia"
              },
              {
                "value": "TR",
                "text": "Turkey"
              },
              {
                "value": "TM",
                "text": "Turkmenistan"
              },
              {
                "value": "TC",
                "text": "Turks and Caicos Islands"
              },
              {
                "value": "TV",
                "text": "Tuvalu"
              },
              {
                "value": "UG",
                "text": "Uganda"
              },
              {
                "value": "UA",
                "text": "Ukraine"
              },
              {
                "value": "AE",
                "text": "United Arab Emirates"
              },
              {
                "value": "GB",
                "text": "United Kingdom"
              },
              {
                "value": "US",
                "text": "United States"
              },
              {
                "value": "UM",
                "text": "United States Minor Outlying Islands"
              },
              {
                "value": "UY",
                "text": "Uruguay"
              },
              {
                "value": "UZ",
                "text": "Uzbekistan"
              },
              {
                "value": "VU",
                "text": "Vanuatu"
              },
              {
                "value": "VE",
                "text": "Venezuela, Bolivarian Republic of"
              },
              {
                "value": "VN",
                "text": "Viet Nam"
              },
              {
                "value": "VG",
                "text": "Virgin Islands, British"
              },
              {
                "value": "VI",
                "text": "Virgin Islands, U.S."
              },
              {
                "value": "WF",
                "text": "Wallis and Futuna"
              },
              {
                "value": "EH",
                "text": "Western Sahara"
              },
              {
                "value": "YE",
                "text": "Yemen"
              },
              {
                "value": "ZM",
                "text": "Zambia"
              },
              {
                "value": "ZW",
                "text": "Zimbabwe"
              }
            ],
            selected: '',
          }, {
            label: 'Final disposal operation (Annex IIIA D Code)',
            type: 'text',
            category_label: 'Other information',
            name: 'final_disposal',
            note: '',
            selected: '',
          }, {
            label: 'Recovery operation (Annex IIIB R Code)',
            type: 'text',
            category_label: 'Other information',
            name: 'recovery_operation',
            note: '',
            selected: '',
          }]
        }]
      },

      table_2: {
        table_label:'Table VI - Import of hazardous wastes and other wastes',
        collection_id: 709,
        parent_collection_id: 707,
        questions: [{
            name: 'amounts_imported',
            label: 'Total amounts imported',
            type: 'text',
            selected: '',
          },
          {
            name: 'Y0-Y45_imported',
            label: 'Total amount of hazardous wastes under Article 3.1.a Annex IA(Y0-Y45) imported in metric tons',
            type: 'number',
            selected: '',
          },
          {
            name: 'Y46-Y47_imported',
            label: 'Total amount of hazardous wastes under Article 3.1.a Annex IA(Y0-Y45) imported in metric tons',
            type: 'number',
            selected: '',
          },
          {
            name: 'total_amount_imported',
            label: 'Total amount of hazardous wastes or other wastes imported in metric tons',
            type: 'number',
            selected: '',
          },
        ],
        articles: [{
        article_title: {
            label: 'Y code',
            type: 'text',
            name: 'y_code_imported',
            category_label: 'Category of waste',
            note: 'The Y code must be specified or, if none is applicable, the waste streams/having wastes as constituents',
            selected: '',
          },
          article_items: [ {
            label: 'Waste streams/ having wastes as constituents',
            type: 'text',
            name: 'waste_streams_imported',
            category_label: 'Category of waste',
            note: 'Not required to fill in if the Y-code has been specified.',
            selected: '',
          }, {
            label: 'UN class',
            type: 'text',
            name: 'un_class_imported',
            category_label: 'Hazardous characteristics (Annex II)',
            note: 'Optional to fill in.',
            selected: '',
          }, {
            label: 'H\' class',
            type: 'text',
            name: 'h_class_imported',
            category_label: 'Hazardous characteristics (Annex II)',
            note: 'Optional to fill in.',
            selected: '',
          }, {
            label: 'Characteristics',
            type: 'text',
            name: 'characteristics_imported',
            category_label: 'Hazardous characteristics (Annex II)',
            note: 'Optional to fill in.',
            selected: '',
          }, {
            label: 'Amount imported (metric tons)',
            type: 'number',
            category_label: 'Other information',
            name: 'amount_imported',
            note: '',
            selected: '',
          }, {
            label: 'Country/countries of transit',
            type: 'select',
            category_label: 'Other information',
            name: 'country_of_transit_imported',
            selected: '',
            options: [{
                "value": "AF",
                "text": "Afghanistan"
              },
              {
                "value": "AX",
                "text": "Åland Islands"
              },
              {
                "value": "AL",
                "text": "Albania"
              },
              {
                "value": "DZ",
                "text": "Algeria"
              },
              {
                "value": "AS",
                "text": "American Samoa"
              },
              {
                "value": "AD",
                "text": "Andorra"
              },
              {
                "value": "AO",
                "text": "Angola"
              },
              {
                "value": "AI",
                "text": "Anguilla"
              },
              {
                "value": "AQ",
                "text": "Antarctica"
              },
              {
                "value": "AG",
                "text": "Antigua and Barbuda"
              },
              {
                "value": "AR",
                "text": "Argentina"
              },
              {
                "value": "AM",
                "text": "Armenia"
              },
              {
                "value": "AW",
                "text": "Aruba"
              },
              {
                "value": "AU",
                "text": "Australia"
              },
              {
                "value": "AT",
                "text": "Austria"
              },
              {
                "value": "AZ",
                "text": "Azerbaijan"
              },
              {
                "value": "BS",
                "text": "Bahamas"
              },
              {
                "value": "BH",
                "text": "Bahrain"
              },
              {
                "value": "BD",
                "text": "Bangladesh"
              },
              {
                "value": "BB",
                "text": "Barbados"
              },
              {
                "value": "BY",
                "text": "Belarus"
              },
              {
                "value": "BE",
                "text": "Belgium"
              },
              {
                "value": "BZ",
                "text": "Belize"
              },
              {
                "value": "BJ",
                "text": "Benin"
              },
              {
                "value": "BM",
                "text": "Bermuda"
              },
              {
                "value": "BT",
                "text": "Bhutan"
              },
              {
                "value": "BO",
                "text": "Bolivia, Plurinational State of"
              },
              {
                "value": "BQ",
                "text": "Bonaire, Sint Eustatius and Saba"
              },
              {
                "value": "BA",
                "text": "Bosnia and Herzegovina"
              },
              {
                "value": "BW",
                "text": "Botswana"
              },
              {
                "value": "BV",
                "text": "Bouvet Island"
              },
              {
                "value": "BR",
                "text": "Brazil"
              },
              {
                "value": "IO",
                "text": "British Indian Ocean Territory"
              },
              {
                "value": "BN",
                "text": "Brunei Darussalam"
              },
              {
                "value": "BG",
                "text": "Bulgaria"
              },
              {
                "value": "BF",
                "text": "Burkina Faso"
              },
              {
                "value": "BI",
                "text": "Burundi"
              },
              {
                "value": "KH",
                "text": "Cambodia"
              },
              {
                "value": "CM",
                "text": "Cameroon"
              },
              {
                "value": "CA",
                "text": "Canada"
              },
              {
                "value": "CV",
                "text": "Cape Verde"
              },
              {
                "value": "KY",
                "text": "Cayman Islands"
              },
              {
                "value": "CF",
                "text": "Central African Republic"
              },
              {
                "value": "TD",
                "text": "Chad"
              },
              {
                "value": "CL",
                "text": "Chile"
              },
              {
                "value": "CN",
                "text": "China"
              },
              {
                "value": "CX",
                "text": "Christmas Island"
              },
              {
                "value": "CC",
                "text": "Cocos (Keeling) Islands"
              },
              {
                "value": "CO",
                "text": "Colombia"
              },
              {
                "value": "KM",
                "text": "Comoros"
              },
              {
                "value": "CG",
                "text": "Congo"
              },
              {
                "value": "CD",
                "text": "Congo, the Democratic Republic of the"
              },
              {
                "value": "CK",
                "text": "Cook Islands"
              },
              {
                "value": "CR",
                "text": "Costa Rica"
              },
              {
                "value": "CI",
                "text": "Côte d'Ivoire"
              },
              {
                "value": "HR",
                "text": "Croatia"
              },
              {
                "value": "CU",
                "text": "Cuba"
              },
              {
                "value": "CW",
                "text": "Curaçao"
              },
              {
                "value": "CY",
                "text": "Cyprus"
              },
              {
                "value": "CZ",
                "text": "Czech Republic"
              },
              {
                "value": "DK",
                "text": "Denmark"
              },
              {
                "value": "DJ",
                "text": "Djibouti"
              },
              {
                "value": "DM",
                "text": "Dominica"
              },
              {
                "value": "DO",
                "text": "Dominican Republic"
              },
              {
                "value": "EC",
                "text": "Ecuador"
              },
              {
                "value": "EG",
                "text": "Egypt"
              },
              {
                "value": "SV",
                "text": "El Salvador"
              },
              {
                "value": "GQ",
                "text": "Equatorial Guinea"
              },
              {
                "value": "ER",
                "text": "Eritrea"
              },
              {
                "value": "EE",
                "text": "Estonia"
              },
              {
                "value": "ET",
                "text": "Ethiopia"
              },
              {
                "value": "FK",
                "text": "Falkland Islands (Malvinas)"
              },
              {
                "value": "FO",
                "text": "Faroe Islands"
              },
              {
                "value": "FJ",
                "text": "Fiji"
              },
              {
                "value": "FI",
                "text": "Finland"
              },
              {
                "value": "FR",
                "text": "France"
              },
              {
                "value": "GF",
                "text": "French Guiana"
              },
              {
                "value": "PF",
                "text": "French Polynesia"
              },
              {
                "value": "TF",
                "text": "French Southern Territories"
              },
              {
                "value": "GA",
                "text": "Gabon"
              },
              {
                "value": "GM",
                "text": "Gambia"
              },
              {
                "value": "GE",
                "text": "Georgia"
              },
              {
                "value": "DE",
                "text": "Germany"
              },
              {
                "value": "GH",
                "text": "Ghana"
              },
              {
                "value": "GI",
                "text": "Gibraltar"
              },
              {
                "value": "GR",
                "text": "Greece"
              },
              {
                "value": "GL",
                "text": "Greenland"
              },
              {
                "value": "GD",
                "text": "Grenada"
              },
              {
                "value": "GP",
                "text": "Guadeloupe"
              },
              {
                "value": "GU",
                "text": "Guam"
              },
              {
                "value": "GT",
                "text": "Guatemala"
              },
              {
                "value": "GG",
                "text": "Guernsey"
              },
              {
                "value": "GN",
                "text": "Guinea"
              },
              {
                "value": "GW",
                "text": "Guinea-Bissau"
              },
              {
                "value": "GY",
                "text": "Guyana"
              },
              {
                "value": "HT",
                "text": "Haiti"
              },
              {
                "value": "HM",
                "text": "Heard Island and McDonald Islands"
              },
              {
                "value": "VA",
                "text": "Holy See (Vatican City State)"
              },
              {
                "value": "HN",
                "text": "Honduras"
              },
              {
                "value": "HK",
                "text": "Hong Kong"
              },
              {
                "value": "HU",
                "text": "Hungary"
              },
              {
                "value": "IS",
                "text": "Iceland"
              },
              {
                "value": "IN",
                "text": "India"
              },
              {
                "value": "ID",
                "text": "Indonesia"
              },
              {
                "value": "IR",
                "text": "Iran, Islamic Republic of"
              },
              {
                "value": "IQ",
                "text": "Iraq"
              },
              {
                "value": "IE",
                "text": "Ireland"
              },
              {
                "value": "IM",
                "text": "Isle of Man"
              },
              {
                "value": "IL",
                "text": "Israel"
              },
              {
                "value": "IT",
                "text": "Italy"
              },
              {
                "value": "JM",
                "text": "Jamaica"
              },
              {
                "value": "JP",
                "text": "Japan"
              },
              {
                "value": "JE",
                "text": "Jersey"
              },
              {
                "value": "JO",
                "text": "Jordan"
              },
              {
                "value": "KZ",
                "text": "Kazakhstan"
              },
              {
                "value": "KE",
                "text": "Kenya"
              },
              {
                "value": "KI",
                "text": "Kiribati"
              },
              {
                "value": "KP",
                "text": "Korea, Democratic People's Republic of"
              },
              {
                "value": "KR",
                "text": "Korea, Republic of"
              },
              {
                "value": "KW",
                "text": "Kuwait"
              },
              {
                "value": "KG",
                "text": "Kyrgyzstan"
              },
              {
                "value": "LA",
                "text": "Lao People's Democratic Republic"
              },
              {
                "value": "LV",
                "text": "Latvia"
              },
              {
                "value": "LB",
                "text": "Lebanon"
              },
              {
                "value": "LS",
                "text": "Lesotho"
              },
              {
                "value": "LR",
                "text": "Liberia"
              },
              {
                "value": "LY",
                "text": "Libya"
              },
              {
                "value": "LI",
                "text": "Liechtenstein"
              },
              {
                "value": "LT",
                "text": "Lithuania"
              },
              {
                "value": "LU",
                "text": "Luxembourg"
              },
              {
                "value": "MO",
                "text": "Macao"
              },
              {
                "value": "MK",
                "text": "Macedonia, the Former Yugoslav Republic of"
              },
              {
                "value": "MG",
                "text": "Madagascar"
              },
              {
                "value": "MW",
                "text": "Malawi"
              },
              {
                "value": "MY",
                "text": "Malaysia"
              },
              {
                "value": "MV",
                "text": "Maldives"
              },
              {
                "value": "ML",
                "text": "Mali"
              },
              {
                "value": "MT",
                "text": "Malta"
              },
              {
                "value": "MH",
                "text": "Marshall Islands"
              },
              {
                "value": "MQ",
                "text": "Martinique"
              },
              {
                "value": "MR",
                "text": "Mauritania"
              },
              {
                "value": "MU",
                "text": "Mauritius"
              },
              {
                "value": "YT",
                "text": "Mayotte"
              },
              {
                "value": "MX",
                "text": "Mexico"
              },
              {
                "value": "FM",
                "text": "Micronesia, Federated States of"
              },
              {
                "value": "MD",
                "text": "Moldova, Republic of"
              },
              {
                "value": "MC",
                "text": "Monaco"
              },
              {
                "value": "MN",
                "text": "Mongolia"
              },
              {
                "value": "ME",
                "text": "Montenegro"
              },
              {
                "value": "MS",
                "text": "Montserrat"
              },
              {
                "value": "MA",
                "text": "Morocco"
              },
              {
                "value": "MZ",
                "text": "Mozambique"
              },
              {
                "value": "MM",
                "text": "Myanmar"
              },
              {
                "value": "NA",
                "text": "Namibia"
              },
              {
                "value": "NR",
                "text": "Nauru"
              },
              {
                "value": "NP",
                "text": "Nepal"
              },
              {
                "value": "NL",
                "text": "Netherlands"
              },
              {
                "value": "NC",
                "text": "New Caledonia"
              },
              {
                "value": "NZ",
                "text": "New Zealand"
              },
              {
                "value": "NI",
                "text": "Nicaragua"
              },
              {
                "value": "NE",
                "text": "Niger"
              },
              {
                "value": "NG",
                "text": "Nigeria"
              },
              {
                "value": "NU",
                "text": "Niue"
              },
              {
                "value": "NF",
                "text": "Norfolk Island"
              },
              {
                "value": "MP",
                "text": "Northern Mariana Islands"
              },
              {
                "value": "NO",
                "text": "Norway"
              },
              {
                "value": "OM",
                "text": "Oman"
              },
              {
                "value": "PK",
                "text": "Pakistan"
              },
              {
                "value": "PW",
                "text": "Palau"
              },
              {
                "value": "PS",
                "text": "Palestine, State of"
              },
              {
                "value": "PA",
                "text": "Panama"
              },
              {
                "value": "PG",
                "text": "Papua New Guinea"
              },
              {
                "value": "PY",
                "text": "Paraguay"
              },
              {
                "value": "PE",
                "text": "Peru"
              },
              {
                "value": "PH",
                "text": "Philippines"
              },
              {
                "value": "PN",
                "text": "Pitcairn"
              },
              {
                "value": "PL",
                "text": "Poland"
              },
              {
                "value": "PT",
                "text": "Portugal"
              },
              {
                "value": "PR",
                "text": "Puerto Rico"
              },
              {
                "value": "QA",
                "text": "Qatar"
              },
              {
                "value": "RE",
                "text": "Réunion"
              },
              {
                "value": "RO",
                "text": "Romania"
              },
              {
                "value": "RU",
                "text": "Russian Federation"
              },
              {
                "value": "RW",
                "text": "Rwanda"
              },
              {
                "value": "BL",
                "text": "Saint Barthélemy"
              },
              {
                "value": "SH",
                "text": "Saint Helena, Ascension and Tristan da Cunha"
              },
              {
                "value": "KN",
                "text": "Saint Kitts and Nevis"
              },
              {
                "value": "LC",
                "text": "Saint Lucia"
              },
              {
                "value": "MF",
                "text": "Saint Martin (French part)"
              },
              {
                "value": "PM",
                "text": "Saint Pierre and Miquelon"
              },
              {
                "value": "VC",
                "text": "Saint Vincent and the Grenadines"
              },
              {
                "value": "WS",
                "text": "Samoa"
              },
              {
                "value": "SM",
                "text": "San Marino"
              },
              {
                "value": "ST",
                "text": "Sao Tome and Principe"
              },
              {
                "value": "SA",
                "text": "Saudi Arabia"
              },
              {
                "value": "SN",
                "text": "Senegal"
              },
              {
                "value": "RS",
                "text": "Serbia"
              },
              {
                "value": "SC",
                "text": "Seychelles"
              },
              {
                "value": "SL",
                "text": "Sierra Leone"
              },
              {
                "value": "SG",
                "text": "Singapore"
              },
              {
                "value": "SX",
                "text": "Sint Maarten (Dutch part)"
              },
              {
                "value": "SK",
                "text": "Slovakia"
              },
              {
                "value": "SI",
                "text": "Slovenia"
              },
              {
                "value": "SB",
                "text": "Solomon Islands"
              },
              {
                "value": "SO",
                "text": "Somalia"
              },
              {
                "value": "ZA",
                "text": "South Africa"
              },
              {
                "value": "GS",
                "text": "South Georgia and the South Sandwich Islands"
              },
              {
                "value": "SS",
                "text": "South Sudan"
              },
              {
                "value": "ES",
                "text": "Spain"
              },
              {
                "value": "LK",
                "text": "Sri Lanka"
              },
              {
                "value": "SD",
                "text": "Sudan"
              },
              {
                "value": "SR",
                "text": "Suriname"
              },
              {
                "value": "SJ",
                "text": "Svalbard and Jan Mayen"
              },
              {
                "value": "SZ",
                "text": "Swaziland"
              },
              {
                "value": "SE",
                "text": "Sweden"
              },
              {
                "value": "CH",
                "text": "Switzerland"
              },
              {
                "value": "SY",
                "text": "Syrian Arab Republic"
              },
              {
                "value": "TW",
                "text": "Taiwan, Province of China"
              },
              {
                "value": "TJ",
                "text": "Tajikistan"
              },
              {
                "value": "TZ",
                "text": "Tanzania, United Republic of"
              },
              {
                "value": "TH",
                "text": "Thailand"
              },
              {
                "value": "TL",
                "text": "Timor-Leste"
              },
              {
                "value": "TG",
                "text": "Togo"
              },
              {
                "value": "TK",
                "text": "Tokelau"
              },
              {
                "value": "TO",
                "text": "Tonga"
              },
              {
                "value": "TT",
                "text": "Trinidad and Tobago"
              },
              {
                "value": "TN",
                "text": "Tunisia"
              },
              {
                "value": "TR",
                "text": "Turkey"
              },
              {
                "value": "TM",
                "text": "Turkmenistan"
              },
              {
                "value": "TC",
                "text": "Turks and Caicos Islands"
              },
              {
                "value": "TV",
                "text": "Tuvalu"
              },
              {
                "value": "UG",
                "text": "Uganda"
              },
              {
                "value": "UA",
                "text": "Ukraine"
              },
              {
                "value": "AE",
                "text": "United Arab Emirates"
              },
              {
                "value": "GB",
                "text": "United Kingdom"
              },
              {
                "value": "US",
                "text": "United States"
              },
              {
                "value": "UM",
                "text": "United States Minor Outlying Islands"
              },
              {
                "value": "UY",
                "text": "Uruguay"
              },
              {
                "value": "UZ",
                "text": "Uzbekistan"
              },
              {
                "value": "VU",
                "text": "Vanuatu"
              },
              {
                "value": "VE",
                "text": "Venezuela, Bolivarian Republic of"
              },
              {
                "value": "VN",
                "text": "Viet Nam"
              },
              {
                "value": "VG",
                "text": "Virgin Islands, British"
              },
              {
                "value": "VI",
                "text": "Virgin Islands, U.S."
              },
              {
                "value": "WF",
                "text": "Wallis and Futuna"
              },
              {
                "value": "EH",
                "text": "Western Sahara"
              },
              {
                "value": "YE",
                "text": "Yemen"
              },
              {
                "value": "ZM",
                "text": "Zambia"
              },
              {
                "value": "ZW",
                "text": "Zimbabwe"
              }
            ]
          }, {
            label: 'Country of origin',
            type: 'select',
            category_label: 'Other information',
            name: 'country_of_origin',
            note: '',
            options: [{
                "value": "AF",
                "text": "Afghanistan"
              },
              {
                "value": "AX",
                "text": "Åland Islands"
              },
              {
                "value": "AL",
                "text": "Albania"
              },
              {
                "value": "DZ",
                "text": "Algeria"
              },
              {
                "value": "AS",
                "text": "American Samoa"
              },
              {
                "value": "AD",
                "text": "Andorra"
              },
              {
                "value": "AO",
                "text": "Angola"
              },
              {
                "value": "AI",
                "text": "Anguilla"
              },
              {
                "value": "AQ",
                "text": "Antarctica"
              },
              {
                "value": "AG",
                "text": "Antigua and Barbuda"
              },
              {
                "value": "AR",
                "text": "Argentina"
              },
              {
                "value": "AM",
                "text": "Armenia"
              },
              {
                "value": "AW",
                "text": "Aruba"
              },
              {
                "value": "AU",
                "text": "Australia"
              },
              {
                "value": "AT",
                "text": "Austria"
              },
              {
                "value": "AZ",
                "text": "Azerbaijan"
              },
              {
                "value": "BS",
                "text": "Bahamas"
              },
              {
                "value": "BH",
                "text": "Bahrain"
              },
              {
                "value": "BD",
                "text": "Bangladesh"
              },
              {
                "value": "BB",
                "text": "Barbados"
              },
              {
                "value": "BY",
                "text": "Belarus"
              },
              {
                "value": "BE",
                "text": "Belgium"
              },
              {
                "value": "BZ",
                "text": "Belize"
              },
              {
                "value": "BJ",
                "text": "Benin"
              },
              {
                "value": "BM",
                "text": "Bermuda"
              },
              {
                "value": "BT",
                "text": "Bhutan"
              },
              {
                "value": "BO",
                "text": "Bolivia, Plurinational State of"
              },
              {
                "value": "BQ",
                "text": "Bonaire, Sint Eustatius and Saba"
              },
              {
                "value": "BA",
                "text": "Bosnia and Herzegovina"
              },
              {
                "value": "BW",
                "text": "Botswana"
              },
              {
                "value": "BV",
                "text": "Bouvet Island"
              },
              {
                "value": "BR",
                "text": "Brazil"
              },
              {
                "value": "IO",
                "text": "British Indian Ocean Territory"
              },
              {
                "value": "BN",
                "text": "Brunei Darussalam"
              },
              {
                "value": "BG",
                "text": "Bulgaria"
              },
              {
                "value": "BF",
                "text": "Burkina Faso"
              },
              {
                "value": "BI",
                "text": "Burundi"
              },
              {
                "value": "KH",
                "text": "Cambodia"
              },
              {
                "value": "CM",
                "text": "Cameroon"
              },
              {
                "value": "CA",
                "text": "Canada"
              },
              {
                "value": "CV",
                "text": "Cape Verde"
              },
              {
                "value": "KY",
                "text": "Cayman Islands"
              },
              {
                "value": "CF",
                "text": "Central African Republic"
              },
              {
                "value": "TD",
                "text": "Chad"
              },
              {
                "value": "CL",
                "text": "Chile"
              },
              {
                "value": "CN",
                "text": "China"
              },
              {
                "value": "CX",
                "text": "Christmas Island"
              },
              {
                "value": "CC",
                "text": "Cocos (Keeling) Islands"
              },
              {
                "value": "CO",
                "text": "Colombia"
              },
              {
                "value": "KM",
                "text": "Comoros"
              },
              {
                "value": "CG",
                "text": "Congo"
              },
              {
                "value": "CD",
                "text": "Congo, the Democratic Republic of the"
              },
              {
                "value": "CK",
                "text": "Cook Islands"
              },
              {
                "value": "CR",
                "text": "Costa Rica"
              },
              {
                "value": "CI",
                "text": "Côte d'Ivoire"
              },
              {
                "value": "HR",
                "text": "Croatia"
              },
              {
                "value": "CU",
                "text": "Cuba"
              },
              {
                "value": "CW",
                "text": "Curaçao"
              },
              {
                "value": "CY",
                "text": "Cyprus"
              },
              {
                "value": "CZ",
                "text": "Czech Republic"
              },
              {
                "value": "DK",
                "text": "Denmark"
              },
              {
                "value": "DJ",
                "text": "Djibouti"
              },
              {
                "value": "DM",
                "text": "Dominica"
              },
              {
                "value": "DO",
                "text": "Dominican Republic"
              },
              {
                "value": "EC",
                "text": "Ecuador"
              },
              {
                "value": "EG",
                "text": "Egypt"
              },
              {
                "value": "SV",
                "text": "El Salvador"
              },
              {
                "value": "GQ",
                "text": "Equatorial Guinea"
              },
              {
                "value": "ER",
                "text": "Eritrea"
              },
              {
                "value": "EE",
                "text": "Estonia"
              },
              {
                "value": "ET",
                "text": "Ethiopia"
              },
              {
                "value": "FK",
                "text": "Falkland Islands (Malvinas)"
              },
              {
                "value": "FO",
                "text": "Faroe Islands"
              },
              {
                "value": "FJ",
                "text": "Fiji"
              },
              {
                "value": "FI",
                "text": "Finland"
              },
              {
                "value": "FR",
                "text": "France"
              },
              {
                "value": "GF",
                "text": "French Guiana"
              },
              {
                "value": "PF",
                "text": "French Polynesia"
              },
              {
                "value": "TF",
                "text": "French Southern Territories"
              },
              {
                "value": "GA",
                "text": "Gabon"
              },
              {
                "value": "GM",
                "text": "Gambia"
              },
              {
                "value": "GE",
                "text": "Georgia"
              },
              {
                "value": "DE",
                "text": "Germany"
              },
              {
                "value": "GH",
                "text": "Ghana"
              },
              {
                "value": "GI",
                "text": "Gibraltar"
              },
              {
                "value": "GR",
                "text": "Greece"
              },
              {
                "value": "GL",
                "text": "Greenland"
              },
              {
                "value": "GD",
                "text": "Grenada"
              },
              {
                "value": "GP",
                "text": "Guadeloupe"
              },
              {
                "value": "GU",
                "text": "Guam"
              },
              {
                "value": "GT",
                "text": "Guatemala"
              },
              {
                "value": "GG",
                "text": "Guernsey"
              },
              {
                "value": "GN",
                "text": "Guinea"
              },
              {
                "value": "GW",
                "text": "Guinea-Bissau"
              },
              {
                "value": "GY",
                "text": "Guyana"
              },
              {
                "value": "HT",
                "text": "Haiti"
              },
              {
                "value": "HM",
                "text": "Heard Island and McDonald Islands"
              },
              {
                "value": "VA",
                "text": "Holy See (Vatican City State)"
              },
              {
                "value": "HN",
                "text": "Honduras"
              },
              {
                "value": "HK",
                "text": "Hong Kong"
              },
              {
                "value": "HU",
                "text": "Hungary"
              },
              {
                "value": "IS",
                "text": "Iceland"
              },
              {
                "value": "IN",
                "text": "India"
              },
              {
                "value": "ID",
                "text": "Indonesia"
              },
              {
                "value": "IR",
                "text": "Iran, Islamic Republic of"
              },
              {
                "value": "IQ",
                "text": "Iraq"
              },
              {
                "value": "IE",
                "text": "Ireland"
              },
              {
                "value": "IM",
                "text": "Isle of Man"
              },
              {
                "value": "IL",
                "text": "Israel"
              },
              {
                "value": "IT",
                "text": "Italy"
              },
              {
                "value": "JM",
                "text": "Jamaica"
              },
              {
                "value": "JP",
                "text": "Japan"
              },
              {
                "value": "JE",
                "text": "Jersey"
              },
              {
                "value": "JO",
                "text": "Jordan"
              },
              {
                "value": "KZ",
                "text": "Kazakhstan"
              },
              {
                "value": "KE",
                "text": "Kenya"
              },
              {
                "value": "KI",
                "text": "Kiribati"
              },
              {
                "value": "KP",
                "text": "Korea, Democratic People's Republic of"
              },
              {
                "value": "KR",
                "text": "Korea, Republic of"
              },
              {
                "value": "KW",
                "text": "Kuwait"
              },
              {
                "value": "KG",
                "text": "Kyrgyzstan"
              },
              {
                "value": "LA",
                "text": "Lao People's Democratic Republic"
              },
              {
                "value": "LV",
                "text": "Latvia"
              },
              {
                "value": "LB",
                "text": "Lebanon"
              },
              {
                "value": "LS",
                "text": "Lesotho"
              },
              {
                "value": "LR",
                "text": "Liberia"
              },
              {
                "value": "LY",
                "text": "Libya"
              },
              {
                "value": "LI",
                "text": "Liechtenstein"
              },
              {
                "value": "LT",
                "text": "Lithuania"
              },
              {
                "value": "LU",
                "text": "Luxembourg"
              },
              {
                "value": "MO",
                "text": "Macao"
              },
              {
                "value": "MK",
                "text": "Macedonia, the Former Yugoslav Republic of"
              },
              {
                "value": "MG",
                "text": "Madagascar"
              },
              {
                "value": "MW",
                "text": "Malawi"
              },
              {
                "value": "MY",
                "text": "Malaysia"
              },
              {
                "value": "MV",
                "text": "Maldives"
              },
              {
                "value": "ML",
                "text": "Mali"
              },
              {
                "value": "MT",
                "text": "Malta"
              },
              {
                "value": "MH",
                "text": "Marshall Islands"
              },
              {
                "value": "MQ",
                "text": "Martinique"
              },
              {
                "value": "MR",
                "text": "Mauritania"
              },
              {
                "value": "MU",
                "text": "Mauritius"
              },
              {
                "value": "YT",
                "text": "Mayotte"
              },
              {
                "value": "MX",
                "text": "Mexico"
              },
              {
                "value": "FM",
                "text": "Micronesia, Federated States of"
              },
              {
                "value": "MD",
                "text": "Moldova, Republic of"
              },
              {
                "value": "MC",
                "text": "Monaco"
              },
              {
                "value": "MN",
                "text": "Mongolia"
              },
              {
                "value": "ME",
                "text": "Montenegro"
              },
              {
                "value": "MS",
                "text": "Montserrat"
              },
              {
                "value": "MA",
                "text": "Morocco"
              },
              {
                "value": "MZ",
                "text": "Mozambique"
              },
              {
                "value": "MM",
                "text": "Myanmar"
              },
              {
                "value": "NA",
                "text": "Namibia"
              },
              {
                "value": "NR",
                "text": "Nauru"
              },
              {
                "value": "NP",
                "text": "Nepal"
              },
              {
                "value": "NL",
                "text": "Netherlands"
              },
              {
                "value": "NC",
                "text": "New Caledonia"
              },
              {
                "value": "NZ",
                "text": "New Zealand"
              },
              {
                "value": "NI",
                "text": "Nicaragua"
              },
              {
                "value": "NE",
                "text": "Niger"
              },
              {
                "value": "NG",
                "text": "Nigeria"
              },
              {
                "value": "NU",
                "text": "Niue"
              },
              {
                "value": "NF",
                "text": "Norfolk Island"
              },
              {
                "value": "MP",
                "text": "Northern Mariana Islands"
              },
              {
                "value": "NO",
                "text": "Norway"
              },
              {
                "value": "OM",
                "text": "Oman"
              },
              {
                "value": "PK",
                "text": "Pakistan"
              },
              {
                "value": "PW",
                "text": "Palau"
              },
              {
                "value": "PS",
                "text": "Palestine, State of"
              },
              {
                "value": "PA",
                "text": "Panama"
              },
              {
                "value": "PG",
                "text": "Papua New Guinea"
              },
              {
                "value": "PY",
                "text": "Paraguay"
              },
              {
                "value": "PE",
                "text": "Peru"
              },
              {
                "value": "PH",
                "text": "Philippines"
              },
              {
                "value": "PN",
                "text": "Pitcairn"
              },
              {
                "value": "PL",
                "text": "Poland"
              },
              {
                "value": "PT",
                "text": "Portugal"
              },
              {
                "value": "PR",
                "text": "Puerto Rico"
              },
              {
                "value": "QA",
                "text": "Qatar"
              },
              {
                "value": "RE",
                "text": "Réunion"
              },
              {
                "value": "RO",
                "text": "Romania"
              },
              {
                "value": "RU",
                "text": "Russian Federation"
              },
              {
                "value": "RW",
                "text": "Rwanda"
              },
              {
                "value": "BL",
                "text": "Saint Barthélemy"
              },
              {
                "value": "SH",
                "text": "Saint Helena, Ascension and Tristan da Cunha"
              },
              {
                "value": "KN",
                "text": "Saint Kitts and Nevis"
              },
              {
                "value": "LC",
                "text": "Saint Lucia"
              },
              {
                "value": "MF",
                "text": "Saint Martin (French part)"
              },
              {
                "value": "PM",
                "text": "Saint Pierre and Miquelon"
              },
              {
                "value": "VC",
                "text": "Saint Vincent and the Grenadines"
              },
              {
                "value": "WS",
                "text": "Samoa"
              },
              {
                "value": "SM",
                "text": "San Marino"
              },
              {
                "value": "ST",
                "text": "Sao Tome and Principe"
              },
              {
                "value": "SA",
                "text": "Saudi Arabia"
              },
              {
                "value": "SN",
                "text": "Senegal"
              },
              {
                "value": "RS",
                "text": "Serbia"
              },
              {
                "value": "SC",
                "text": "Seychelles"
              },
              {
                "value": "SL",
                "text": "Sierra Leone"
              },
              {
                "value": "SG",
                "text": "Singapore"
              },
              {
                "value": "SX",
                "text": "Sint Maarten (Dutch part)"
              },
              {
                "value": "SK",
                "text": "Slovakia"
              },
              {
                "value": "SI",
                "text": "Slovenia"
              },
              {
                "value": "SB",
                "text": "Solomon Islands"
              },
              {
                "value": "SO",
                "text": "Somalia"
              },
              {
                "value": "ZA",
                "text": "South Africa"
              },
              {
                "value": "GS",
                "text": "South Georgia and the South Sandwich Islands"
              },
              {
                "value": "SS",
                "text": "South Sudan"
              },
              {
                "value": "ES",
                "text": "Spain"
              },
              {
                "value": "LK",
                "text": "Sri Lanka"
              },
              {
                "value": "SD",
                "text": "Sudan"
              },
              {
                "value": "SR",
                "text": "Suriname"
              },
              {
                "value": "SJ",
                "text": "Svalbard and Jan Mayen"
              },
              {
                "value": "SZ",
                "text": "Swaziland"
              },
              {
                "value": "SE",
                "text": "Sweden"
              },
              {
                "value": "CH",
                "text": "Switzerland"
              },
              {
                "value": "SY",
                "text": "Syrian Arab Republic"
              },
              {
                "value": "TW",
                "text": "Taiwan, Province of China"
              },
              {
                "value": "TJ",
                "text": "Tajikistan"
              },
              {
                "value": "TZ",
                "text": "Tanzania, United Republic of"
              },
              {
                "value": "TH",
                "text": "Thailand"
              },
              {
                "value": "TL",
                "text": "Timor-Leste"
              },
              {
                "value": "TG",
                "text": "Togo"
              },
              {
                "value": "TK",
                "text": "Tokelau"
              },
              {
                "value": "TO",
                "text": "Tonga"
              },
              {
                "value": "TT",
                "text": "Trinidad and Tobago"
              },
              {
                "value": "TN",
                "text": "Tunisia"
              },
              {
                "value": "TR",
                "text": "Turkey"
              },
              {
                "value": "TM",
                "text": "Turkmenistan"
              },
              {
                "value": "TC",
                "text": "Turks and Caicos Islands"
              },
              {
                "value": "TV",
                "text": "Tuvalu"
              },
              {
                "value": "UG",
                "text": "Uganda"
              },
              {
                "value": "UA",
                "text": "Ukraine"
              },
              {
                "value": "AE",
                "text": "United Arab Emirates"
              },
              {
                "value": "GB",
                "text": "United Kingdom"
              },
              {
                "value": "US",
                "text": "United States"
              },
              {
                "value": "UM",
                "text": "United States Minor Outlying Islands"
              },
              {
                "value": "UY",
                "text": "Uruguay"
              },
              {
                "value": "UZ",
                "text": "Uzbekistan"
              },
              {
                "value": "VU",
                "text": "Vanuatu"
              },
              {
                "value": "VE",
                "text": "Venezuela, Bolivarian Republic of"
              },
              {
                "value": "VN",
                "text": "Viet Nam"
              },
              {
                "value": "VG",
                "text": "Virgin Islands, British"
              },
              {
                "value": "VI",
                "text": "Virgin Islands, U.S."
              },
              {
                "value": "WF",
                "text": "Wallis and Futuna"
              },
              {
                "value": "EH",
                "text": "Western Sahara"
              },
              {
                "value": "YE",
                "text": "Yemen"
              },
              {
                "value": "ZM",
                "text": "Zambia"
              },
              {
                "value": "ZW",
                "text": "Zimbabwe"
              }
            ],
            selected: '',
          }, {
            label: 'Final disposal operation (Annex IIIA D Code)',
            type: 'text',
            category_label: 'Other information',
            name: 'final_disposal_imported',
            note: '',
            selected: '',
          }, {
            label: 'Recovery operation (Annex IIIB R Code)',
            type: 'text',
            category_label: 'Other information',
            name: 'recovery_operation_imported',
            note: '',
            selected: '',
          }]
        }]
      },
    }
  },
  tab_4: {
    label: 'Part IV: Disposals which did not proceed as intended and accidents',
    collection_id: 710,
    parent_collection_id: 7,
    data: {
      question: '',
        table_1: {
        table_label: 'Table VII - Disposals which did not proceed as intended',
         collection_id: 711,
         parent_collection_id: 710,
          articles: [{
          article_title: {
            name: 'incident_date',
            type: 'date',
            label: 'Date of the incident',
            selected: '',
          },
          article_items: [{
            label: 'Countries involved',
            type: 'text',
            name: 'countries_involved',
            selected: '',
          }, {
            label: 'Type of wastes',
            type: 'text',
            name: 'wastes_type',
            selected: '',
          }, {
            label: 'Amount(in metric tonnes)',
            type: 'number',
            name: 'wastes_amount',
            selected: '',
          }, {
            label: 'Reason for the incident',
            type: 'text',
            name: 'incident_reason',
            selected: '',
          }, {
            label: 'Measures taken to deal with the incident',
            type: 'text',
            name: 'measures_taken',
            selected: '',
          }, {
            label: 'Effectiveness of the measures taken',
            type: 'text',
            name: 'measures_effectiveness',
            selected: '',
          },
          {
            label: 'Remarks',
            type: 'text',
            name: 'remarks',
            selected: '',
          }]
        }]
      },
      table_2: {
        table_label: 'Table VIII. Accidents occurring during the transboundary movement and disposal of hazardous wastes and other wastes ',
        collection_id: 712,
        parent_collection_id: 710,
        articles: [{
          article_title: {
            name: 'incident_date_place',
            type: 'date',
            label: 'Date and place of the accident',
            selected: '',
          },
          article_items: [{
            label: 'Countries involved',
            type: 'text',
            name: 'countries_involved_movement',
            selected: '',
          }, {
            label: 'Type of wastes',
            type: 'text',
            name: 'wastes_type_movement',
            selected: '',
          }, {
            label: 'Amount(in metric tonnes)',
            type: 'number',
            name: 'wastes_amount_movement',
            selected: '',
          }, {
            label: 'Type of accident',
            type: 'text',
            name: 'accident_type_movement',
            selected: '',
          }, {
            label: 'Measures taken to deal with the incident',
            type: 'text',
            name: 'measures_taken_movement',
            selected: '',
          }, {
            label: 'Effectiveness of the measures taken',
            type: 'text',
            name: 'measures_effectiveness_movement',
            selected: '',
          },
          {
            label: 'Remarks',
            type: 'text',
            name: 'remarks_movement',
            selected: '',
          }]
        }]
      },
    }
  },
  tab_5: {
    label: 'Part V: Enforcement measures',
    collection_id: 713,
    parent_collection_id: 7,
    data: {
      question: '',
      table_label: 'Table VI – Enforcement measures',
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
            type: 'text',
            name: 'remarks',
            selected: '',
          }]
        }]
    }
  }
}

export default form
