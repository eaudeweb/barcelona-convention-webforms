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
    label: 'Part I: LEGAL AND REGULATORY MEASURES',
    data: {
      question: 'Question 1: Has the Party, in accordance with Article 14 of the Barcelona Convention, adopted legislation implementing the provisions of the Hazardous Wastes Protocol as listed in Table I below?',
      table_label: 'Table I – LEGAL AND REGULATORY MEASURES',
      articles: [{
          article_title: 'Article 4.1 Article 3.1(a) (b) Wastes Controlled for the Purpose of Transboundary Movement',
          article_items: [{
            description: 'National definition of waste used for the purpose of transboundary movements of waste',
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
          },{
            description: 'National definition of hazardous waste used for the purpose of transboundary movements of waste',
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
          },{
            description: 'National definition of hazardous wastes cover wastes other than those listed in Annex I to the Protocol',
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
          },{
            description: 'Regulation and control for the purpose of transboundary movements of any additional wastes as hazardous that are not included in Annex I to the Protocol',
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
        },{
          article_title: 'Article 5.3 Reduction of the amount of hazardous wastes subject to transboundary movement',
          article_items: [{
            description: 'Reduction to a minimum and possibly elimination of the transboundary movement of hazardous waste through bans on the import of hazardous waste, and refusal of permits for export of hazardous waste to States which have prohibited their import',
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
        },{
          article_title: 'Article 5.4 Restrictions/prohibitions on the export and transit of hazardous wastes',
          article_items: [{
            description: 'Subject to the specific provisions referred to in Art. 6 para. 4 relating to the transboundary movement of hazardous waste through the territorial sea of the State of transit, prohibition of the export and transit of hazardous  aste, within the area under their jurisdiction, to developing countries',
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
        },{
          article_title: 'Article 5.4 Restrictions/prohibitions on the import and transit of hazardous wastes',
          article_items: [{
            description: 'Subject to the specific provisions referred to in Art. 6 para. 4 relating to the transboundary movement of hazardous waste through the territorial sea of the State of transit, prohibition, by the Parties which are not Member States of the European Community of all imports and transit of hazardous waste',
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
        },{
          article_title: 'Article. 6.3\nArticle 6.4\nNotification procedure of the transboundary movement of waste',
          article_items: [{
            description: 'The transboundary movements of hazardous waste only take place (within areas beyond the territorial sea waters) with the prior written notification of the State of export and consent of the State of import, as specified in Annex IV',
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
          },{
            description: 'The transboundary movements of hazardous waste through the territorial sea of the State of transit only takes place with the prior notification by the State of export to the State of transit as specified in Annex IV',
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
        },{
          article_title: 'Article 5.1 Restrictions on the export/import/transit/ of hazardous wastes',
          article_items: [{
            description: 'Restrictions on the export of hazardous wastes and other wastes for final disposal (Annex III. A) in your country',
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
          },{
            description: 'Restrictions on the export of hazardous wastes and other wastes for recovery (Annex III.B) in your country',
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
          },{
            description: 'Restrictions on the import of hazardous wastes and other wastes for final disposal (Annex III. A) in your country',
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
          },{
            description: 'Restrictions on the import of hazardous wastes and other wastes for recovery (Annex IV B) in your country',
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
          },{
            description: 'Restrictions on the transit of hazardous wastes and other wastes through your country',
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
        },{
          article_title: 'Article 5.5\nArticle 9',
          article_items: [{
            description: 'Prevention and punishment by the national competent authority or authorities of illegal traffic in hazardous wastes, including criminal penalties for all persons involved in such illegal activities',
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
        },{
          article_title: 'Article 12 Information to and Participation to the Public',
          article_items: [{
            description: 'Ensure that adequate information is made available to the public and the public , whenever possible and appropriate have an opportunity to participate',
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
    label: 'Part II: GENERATION OF HAZARDOUS WASTES AND OTHER WASTES',
    data: {
      table_1: {

      question: '',
      table_label: 'Table II – Wastes other than those listed in Annex I to the Protocol considered or defined as hazardous wastes under domestic legislation (Article 4 1)',
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
        }
      ]
      },
    table_2: {
      question: 'Total amount of hazardous wastes and other wastes generated (metric tonnes) ',
      table_label: 'Table III - Total amount of generation of hazardous wastes and other wastes (Article 8.2)',
         articles: [{
          article_title: 'Total amount of hazardous wastes under Article 3.1.a (Annex IA: Y1- Y45) generated',
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
          article_title: 'Total amount of other wastes under Article 3.1.a (Annex IB:Y46-Y47) generated',
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
         articles: [
          {
          article_title: {
            name: 'Y1',
            label: 'Clinical wastes from medical care in hospitals, medical centres and clinics',
          },
          article_label:{
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
        },    {
          article_title: {
            name: 'Y2',
            label: 'Wastes from the production and preparation of pharmaceutical products',
          },
          article_label:{
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
        },    {
          article_title: {
            name: 'Y3',
            label: 'Waste pharmaceuticals, drugs and medicines',
          },
          article_label:{
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
        },    {
          article_title: {
            name: 'Y4',
            label: 'Wastes from the production of biocides and phytopharmaceuticals',
          },
          article_label:{
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
        },    {
          article_title: {
            name: 'Y5',
            label: 'Wastes from the manufacture of wood preserving chemicals',
          },
          article_label:{
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
        },    {
          article_title: {
            name: 'Y6',
            label: 'Wastes from the production, formulation and use of organic solvent',
          },
          article_label:{
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
        },    {
          article_title: {
            name: 'Y7',
            label: 'Wastes from heat treatment and tempering operations containing cyanides',
          },
          article_label:{
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
        },    {
          article_title: {
            name: 'Y8',
            label: 'Waste mineral oils unfit for their originally intended use',
          },
          article_label:{
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
        },    {
          article_title: {
            name: 'Y9',
            label: 'Waste oils/water, hydrocarbons/water mixtures, emulsion',
          },
          article_label:{
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
        },    {
          article_title: {
            name: 'Y10',
            label: 'Waste substances containing or contaminated with PCBs, PCTs, PBBs',
          },
          article_label:{
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
        },    {
          article_title: {
            name: 'Y11',
            label: 'Waste tarry residues from refining, distillation and any pyrolytic treatment',
          },
          article_label:{
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
        },    {
          article_title: {
            name: 'Y12',
            label: 'Wastes from production of inks, dyes, pigments, paints, etc.',
          },
          article_label:{
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
        },    {
          article_title: {
            name: 'Y13',
            label: 'Wastes from production resins, latex, plasticizers, glues, etc. ',
          },
          article_label:{
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
          article_label:{
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
          article_label:{
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
          article_label:{
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
          article_label:{
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
          article_label:{
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
          article_label:{
            name: 'l2',
            label: 'Wastes having as constituents (Annex I to the Protocol)	',
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
          article_label:{
            name: 'l2',
            label: 'Wastes having as constituents (Annex I to the Protocol)	',
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
          article_label:{
            name: 'l2',
            label: 'Wastes having as constituents (Annex I to the Protocol)	',
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
          article_label:{
            name: 'l2',
            label: 'Wastes having as constituents (Annex I to the Protocol)	',
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
          article_label:{
            name: 'l2',
            label: 'Wastes having as constituents (Annex I to the Protocol)	',
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
          article_label:{
            name: 'l2',
            label: 'Wastes having as constituents (Annex I to the Protocol)	',
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
          article_label:{
            name: 'l2',
            label: 'Wastes having as constituents (Annex I to the Protocol)	',
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
          article_label:{
            name: 'l2',
            label: 'Wastes having as constituents (Annex I to the Protocol)	',
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
          article_label:{
            name: 'l2',
            label: 'Wastes having as constituents (Annex I to the Protocol)	',
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
          article_label:{
            name: 'l2',
            label: 'Wastes having as constituents (Annex I to the Protocol)	',
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
          article_label:{
            name: 'l2',
            label: 'Wastes having as constituents (Annex I to the Protocol)	',
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
          article_label:{
            name: 'l2',
            label: 'Wastes having as constituents (Annex I to the Protocol)	',
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
          article_label:{
            name: 'l2',
            label: 'Wastes having as constituents (Annex I to the Protocol)	',
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
          article_label:{
            name: 'l2',
            label: 'Wastes having as constituents (Annex I to the Protocol)	',
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
          article_label:{
            name: 'l2',
            label: 'Wastes having as constituents (Annex I to the Protocol)	',
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
          article_label:{
            name: 'l2',
            label: 'Wastes having as constituents (Annex I to the Protocol)	',
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
          article_label:{
            name: 'l2',
            label: 'Wastes having as constituents (Annex I to the Protocol)	',
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
          article_label:{
            name: 'l2',
            label: 'Wastes having as constituents (Annex I to the Protocol)	',
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
          article_label:{
            name: 'l2',
            label: 'Wastes having as constituents (Annex I to the Protocol)	',
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
          article_label:{
            name: 'l2',
            label: 'Wastes having as constituents (Annex I to the Protocol)	',
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
          article_label:{
            name: 'l2',
            label: 'Wastes having as constituents (Annex I to the Protocol)	',
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
          article_label:{
            name: 'l2',
            label: 'Wastes having as constituents (Annex I to the Protocol)	',
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
          article_label:{
            name: 'l2',
            label: 'Wastes having as constituents (Annex I to the Protocol)	',
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
          article_label:{
            name: 'l2',
            label: 'Wastes having as constituents (Annex I to the Protocol)	',
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
          article_label:{
            name: 'l2',
            label: 'Wastes having as constituents (Annex I to the Protocol)	',
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
          article_label:{
            name: 'l2',
            label: 'Wastes having as constituents (Annex I to the Protocol)	',
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
          article_label:{
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
          article_label:{
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
          article_label:{
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
        },
          ]
      },









    }
  },
  tab_3: {
    label: 'Part III: TRANSBOUNDARY MOVEMENTS OF HAZARDOUS WASTES OR OTHER WASTES',
    data: {
      question: '',
      table_label: 'Table V - Export of hazardous wastes and other wastes',
    }
  },
  tab_4: {
    label: 'Part IV: DISPOSALS WHICH DID NOT PROCEED AS INTENDED AND ACCIDENTS',
    data: {
      question: '',
      table_label: 'Table VII - Disposals which did not proceed as intended',
    }
  },
  tab_5: {
    label: 'Part V: ENFORCEMENT MEASURES',
    data: {
      question: '',
      table_label: 'Table VI – Enforcement measures',
    }
  }
}

export default form
