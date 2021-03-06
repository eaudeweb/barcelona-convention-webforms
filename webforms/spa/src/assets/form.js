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
          type: 'number',
          label: 'Reporting period from (year)',
          selected: '',
        },
        {
          name: 'rep_period_to',
          type: 'number',
          label: 'Reporting period to (year)',
          selected: '',
        },
        {
          name: 'institution_name',
          type: 'text',
          label: 'Name of the institution/s responsible for the SPA/BD Protocol',
          selected: '',
        },
        {
          name: 'officer_name',
          type: 'text',
          label: 'Name of the officer who is the focal point for the SPA/BD Protocol',
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
    label: 'Part I: Legal and Regulatory measures',
    collection_id: 501,
    parent_collection_id: 5,
    data: {
      question: 'Question 1: Has the Party, in accordance with Article 14 of the Barcelona Convention, adopted legislation implementing the provisions of the SPA and Biodiversity Protocol listed in Table I below?',
      table_label: 'Table I: Legal and regulatory measures',
      collection_id: 502,
      parent_collection_id: 501,
      articles: [{
          article_title: 'Article 2.1',
          article_items: [{
            description: 'Designation of the terrestrial areas (including wetlands) under their jurisdiction that are included in the area to which the SPA and Biological Diversity Protocol applies',
            collection_id: 5001,
            parent_collection_id: 502,
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
          article_title: 'Article 3.1.a',
          article_items: [{
            description: 'Protection, preservation and management in a sustainable and environmentally sound way of areas of particular natural or cultural value, notably by the establishment of specially protected areas',
            collection_id: 5002,
            parent_collection_id: 502,
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
          article_title: 'Article 3.1.b',
          article_items: [{
            description: 'Protection, preservation and management of endangered or threatened flora and fauna species',
            collection_id: 5003,
            parent_collection_id: 502,
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
          article_title: 'Article 3.3',
          article_items: [{
            description: 'Compilation of an inventory of the components of marine and coastal biodiversity',
            collection_id: 5004,
            parent_collection_id: 502,
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
          article_title: 'Article 3.4',
          article_items: [{
            description: 'Formulation of a national strategy and action plan to protect the components of marine and coastal biodiversity',
            collection_id: 5005,
            parent_collection_id: 502,
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
          article_title: 'Article 3.5',
          article_items: [{
            description: 'Monitoring the components of marine and coastal biodiversity and those processes and categories of activities which have or are likely to have a significant adverse impact on them',
            collection_id: 5006,
            parent_collection_id: 502,
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
          article_title: 'Article 17',
          article_items: [{
            description: 'Taking into consideration, in the planning process leading to decisions on projects and activities that could significantly affect protected areas, species and their habitats, of possible direct or indirect, immediate or long- term, impact, including the cumulative impact of projects and activities on habitats',
            collection_id: 5007,
            parent_collection_id: 502,
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
    label: 'Part II: Specially protected areas',
    collection_id: 503,
    parent_collection_id: 5,
    data: {
      question: 'Question 2: Has the Party established specially protected areas and taken necessary measures for their protection and the implementation of their management plans?',
      table_1: {
        collection_id: 504,
        parent_collection_id: 503,
        table_label: 'Table II – Measures to protect SPAs',
        articles: [{
            article_title: 'Article 3.1.a',
            article_items: [{
              description: 'Setting up of protected areas that come within the Protocol’s geographical coverage',
              collection_id: 5008,
              parent_collection_id: 504,
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
            article_title: 'Article 6.b',
            article_items: [{
              description: 'Prohibition of the dumping and any discharge likely to directly or indirectly harm the integrity of specially protected areas',
              collection_id: 5009,
              parent_collection_id: 504,
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
            article_title: 'Article 6.c',
            article_items: [{
              description: 'Regulation of the passage of ships and all stopping or anchoring in the specially protected areas’ extension zone',
              collection_id: 5010,
              parent_collection_id: 504,
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
            article_title: 'Article 6.d',
            article_items: [{
              description: 'Regulation of the introduction of any species not indigenous to the specially protected area or of genetically modified species',
              collection_id: 5011,
              parent_collection_id: 504,
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
            article_title: 'Article 6.e',
            article_items: [{
              description: 'Regulation or prohibition of all exploration activities or activities that involve modifying the soil or subsoil of the land part, of the seabed or of its subsoil in the specially protected areas',
              collection_id: 5012,
              parent_collection_id: 504,
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
            article_title: 'Article 6.f',
            article_items: [{
              description: 'Regulation of scientific research in the specific protected area',
              collection_id: 5013,
              parent_collection_id: 504,
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
            article_title: 'Article 6.g',
            article_items: [{
              description: 'Prohibition and regulation of all activities involving taking of species. (i.e. fishing, hunting, taking of animals and harvesting of plants and their destruction, as well as trade in animals, parts of animals, plants and parts of plants)which originate in specially protected areas',
              collection_id: 5014,
              parent_collection_id: 504,
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
            article_title: 'Article 6.h',
            article_items: [{
              description: 'Regulation and if necessary prohibition of any other activity likely to have an adverse impact on the specially protected areas. These include activities that may harm or disturb the species or that might endanger the state of conservation of the ecosystems or species or might impair the natural or cultural characteristics of the Specially Protected Area',
              collection_id: 5015,
              parent_collection_id: 504,
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
            article_title: 'Article 18',
            article_items: [{
              description: 'Traditional subsistence and cultural activities of local populations taken into account when formulating protective measures for Specially Protected Areas',
              collection_id: 5016,
              parent_collection_id: 504,
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
      },

      table_2: {
        table_label: 'Table III - List of SPAs within the protocol\'s geographical coverage',
        collection_id: 505,
        parent_collection_id: 503,
        articles: []
      },


      table_3: {
        table_label: 'Table IV - Management of SPAs',
        collection_id: 506,
        parent_collection_id: 503,
        articles: [{
          article_title: 'Article 7.1',
          article_items: [{
            description: 'Adoption of planning, management, supervision and monitoring  measures for Specially Protected Areas',
            collection_id: 5017,
            parent_collection_id: 506,
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
          article_title: 'Article 7.2.a',
          article_items: [{
            description: 'Elaboration and implementation of a management plan for each Specially Protected Area',
            collection_id: 5018,
            parent_collection_id: 506,
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
          article_title: 'Article 7.2.b',
          article_items: [{
            description: 'Programmes for  the  observation and scientific monitoring of changes in the Protocol Areas\' ecosystems and of the impact of human activities',
            collection_id: 5019,
            parent_collection_id: 506,
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
          article_title: 'Article 7.2.c',
          article_items: [{
              description: 'Measures for the involvement of local communities in the process of managing the protected areas',
              collection_id: 5020,
              parent_collection_id: 506,
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
            },
            {
              description: 'Providing assistance to local inhabitants to compensate for the possible adverse impact which the protection measures introduced in the SPA might have on their income',
              collection_id: 5021,
              parent_collection_id: 506,
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
            }
          ]
        }, {
          article_title: 'Article 7.2.d',
          article_items: [{
            description: 'Funding mechanisms for managing and promoting the protected areas or income- generating activities that are compatible with the protection measures',
            collection_id: 5022,
            parent_collection_id: 506,
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
          article_title: 'Article 7.2.f',
          article_items: [{
            description: 'Appropriate training for the technical managers and other qualified staff of SPAs',
            collection_id: 5023,
            parent_collection_id: 506,
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
        }]
      },


    }
  },

  tab_3: {
    label: 'PART III: Specially protected areas of mediterranean importance (SPAMIs)',
    collection_id: 507,
    parent_collection_id: 5,
    data: {
      table_1: {
        table_label: 'Table V – Establishment of SPAMIs',
        collection_id: 508,
        parent_collection_id: 507,
        table_question: 'Question 3:  Has the Party established SPAMIs and taken necessary measures to implement management plans for such areas?',
        articles: [{
          article_title: 'Article 3.1.a',
          article_items: [{
            description: 'Setting up of Specially Protected Areas of Mediterranean Importance (SPAMIs)',
            collection_id: 5024,
            parent_collection_id: 508,
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
          article_title: 'Article 7.2.a',
          article_items: [{
            description: 'Elaboration and implementation of a management plan for each SPAMI',
            collection_id: 5025,
            parent_collection_id: 508,
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
        }]
      },

      table_2: {
        table_label: 'Table VI – LIST OF SPAMIs AND RELATED DATA',
        collection_id: 509,
        parent_collection_id: 5,
        table_question: 'Question 4:  Are there changes in the status of SPAMIs?',
        articles: [{
            "article_title": "Albania AL1. Karaburun Sazan National Marine Park",
            "collection_id": 5026,
            "parent_collection_id": 509,
            "iso": "AL",
            "article_items": [{
                "type": "date",
                "label": "Dates of establishment and inclusion",
                "name": "date_of_establishment",
                "selected": null
              },
              {
                "type": "text",
                "label": "Surface",
                "name": "surface",
                "selected": null
              },
              {
                "type": "text",
                "label": "Coordinates",
                "name": "coordinates",
                "selected": null
              },
              {
                "type": "checkbox",
                "label": "Jurisdiction",
                "name": "jurisdiction",
                "selected": null,
                "options": [{
                    "text": "National",
                    "value": 1
                  },
                  {
                    "text": "Adjacent water",
                    "value": 2
                  },
                  {
                    "text": "High seas",
                    "value": 3
                  }
                ]
              },
              {
                "type": "radio",
                "label": "Management plan",
                "name": "management",
                "selected": null,
                "options": [{
                    "text": "Yes",
                    "value": 1
                  },
                  {
                    "text": "No",
                    "value": 2
                  },
                  {
                    "text": "In process",
                    "value": 3
                  }
                ]
              },
              {
                "type": "date",
                "label": "Date of adoption",
                "name": "date_of_adoption",
                "selected": null
              },
              {
                "type": "text",
                "label": "Change of delimitation",
                "name": "delimitation_change",
                "selected": null
              },
              {
                "type": "text",
                "label": "Change of legal status",
                "name": "legal_status_change",
                "selected": null
              },
              {
                "type": "text",
                "label": "Reasons for changes",
                "name": "changes_reasons",
                "selected": null
              }
            ]
          },
          {
            "article_title": "Algeria DZ1.Banc des Kabyles Marine Reserve",
            "collection_id": 5027,
            "parent_collection_id": 509,
            "iso": "DZ",
            "article_items": [{
                "type": "date",
                "label": "Dates of establishment and inclusion",
                "name": "date_of_establishment",
                "selected": null
              },
              {
                "type": "text",
                "label": "Surface",
                "name": "surface",
                "selected": null
              },
              {
                "type": "text",
                "label": "Coordinates",
                "name": "coordinates",
                "selected": null
              },
              {
                "type": "checkbox",
                "label": "Jurisdiction",
                "name": "jurisdiction",
                "selected": null,
                "options": [{
                    "text": "National",
                    "value": 1
                  },
                  {
                    "text": "Adjacent water",
                    "value": 2
                  },
                  {
                    "text": "High seas",
                    "value": 3
                  }
                ]
              },
              {
                "type": "radio",
                "label": "Management plan",
                "name": "management",
                "selected": null,
                "options": [{
                    "text": "Yes",
                    "value": 1
                  },
                  {
                    "text": "No",
                    "value": 2
                  },
                  {
                    "text": "In process",
                    "value": 3
                  }
                ]
              },
              {
                "type": "date",
                "label": "Date of adoption",
                "name": "date_of_adoption",
                "selected": null
              },
              {
                "type": "text",
                "label": "Change of delimitation",
                "name": "delimitation_change",
                "selected": null
              },
              {
                "type": "text",
                "label": "Change of legal status",
                "name": "legal_status_change",
                "selected": null
              },
              {
                "type": "text",
                "label": "Reasons for changes",
                "name": "changes_reasons",
                "selected": null
              }
            ]
          },
          {
            "article_title": "Algeria DZ2.Habibas Islands",
            "collection_id": 5028,
            "parent_collection_id": 509,
            "iso": "DZ",
            "article_items": [{
                "type": "date",
                "label": "Dates of establishment and inclusion",
                "name": "date_of_establishment",
                "selected": null
              },
              {
                "type": "text",
                "label": "Surface",
                "name": "surface",
                "selected": null
              },
              {
                "type": "text",
                "label": "Coordinates",
                "name": "coordinates",
                "selected": null
              },
              {
                "type": "checkbox",
                "label": "Jurisdiction",
                "name": "jurisdiction",
                "selected": null,
                "options": [{
                    "text": "National",
                    "value": 1
                  },
                  {
                    "text": "Adjacent water",
                    "value": 2
                  },
                  {
                    "text": "High seas",
                    "value": 3
                  }
                ]
              },
              {
                "type": "radio",
                "label": "Management plan",
                "name": "management",
                "selected": null,
                "options": [{
                    "text": "Yes",
                    "value": 1
                  },
                  {
                    "text": "No",
                    "value": 2
                  },
                  {
                    "text": "In process",
                    "value": 3
                  }
                ]
              },
              {
                "type": "date",
                "label": "Date of adoption",
                "name": "date_of_adoption",
                "selected": null
              },
              {
                "type": "text",
                "label": "Change of delimitation",
                "name": "delimitation_change",
                "selected": null
              },
              {
                "type": "text",
                "label": "Change of legal status",
                "name": "legal_status_change",
                "selected": null
              },
              {
                "type": "text",
                "label": "Reasons for changes",
                "name": "changes_reasons",
                "selected": null
              }
            ]
          },
          {
            "article_title": "Cyprus CY1. Lara- Toxeftra Turtle Reserve",
            "collection_id": 5029,
            "parent_collection_id": 509,
            "iso": "CY",
            "article_items": [{
                "type": "date",
                "label": "Dates of establishment and inclusion",
                "name": "date_of_establishment",
                "selected": null
              },
              {
                "type": "text",
                "label": "Surface",
                "name": "surface",
                "selected": null
              },
              {
                "type": "text",
                "label": "Coordinates",
                "name": "coordinates",
                "selected": null
              },
              {
                "type": "checkbox",
                "label": "Jurisdiction",
                "name": "jurisdiction",
                "selected": null,
                "options": [{
                    "text": "National",
                    "value": 1
                  },
                  {
                    "text": "Adjacent water",
                    "value": 2
                  },
                  {
                    "text": "High seas",
                    "value": 3
                  }
                ]
              },
              {
                "type": "radio",
                "label": "Management plan",
                "name": "management",
                "selected": null,
                "options": [{
                    "text": "Yes",
                    "value": 1
                  },
                  {
                    "text": "No",
                    "value": 2
                  },
                  {
                    "text": "In process",
                    "value": 3
                  }
                ]
              },
              {
                "type": "date",
                "label": "Date of adoption",
                "name": "date_of_adoption",
                "selected": null
              },
              {
                "type": "text",
                "label": "Change of delimitation",
                "name": "delimitation_change",
                "selected": null
              },
              {
                "type": "text",
                "label": "Change of legal status",
                "name": "legal_status_change",
                "selected": null
              },
              {
                "type": "text",
                "label": "Reasons for changes",
                "name": "changes_reasons",
                "selected": null
              }
            ]
          },
          {
            "article_title": "France FR1 Port Cross National Park",
            "collection_id": 5030,
            "parent_collection_id": 509,
            "iso": "FR",
            "article_items": [{
                "type": "date",
                "label": "Dates of establishment and inclusion",
                "name": "date_of_establishment",
                "selected": null
              },
              {
                "type": "text",
                "label": "Surface",
                "name": "surface",
                "selected": null
              },
              {
                "type": "text",
                "label": "Coordinates",
                "name": "coordinates",
                "selected": null
              },
              {
                "type": "checkbox",
                "label": "Jurisdiction",
                "name": "jurisdiction",
                "selected": null,
                "options": [{
                    "text": "National",
                    "value": 1
                  },
                  {
                    "text": "Adjacent water",
                    "value": 2
                  },
                  {
                    "text": "High seas",
                    "value": 3
                  }
                ]
              },
              {
                "type": "radio",
                "label": "Management plan",
                "name": "management",
                "selected": null,
                "options": [{
                    "text": "Yes",
                    "value": 1
                  },
                  {
                    "text": "No",
                    "value": 2
                  },
                  {
                    "text": "In process",
                    "value": 3
                  }
                ]
              },
              {
                "type": "date",
                "label": "Date of adoption",
                "name": "date_of_adoption",
                "selected": null
              },
              {
                "type": "text",
                "label": "Change of delimitation",
                "name": "delimitation_change",
                "selected": null
              },
              {
                "type": "text",
                "label": "Change of legal status",
                "name": "legal_status_change",
                "selected": null
              },
              {
                "type": "text",
                "label": "Reasons for changes",
                "name": "changes_reasons",
                "selected": null
              }
            ]
          },
          {
            "article_title": "France FR2 Natural Reserve of Bouches of Bonifacio",
            "collection_id": 5031,
            "parent_collection_id": 509,
            "iso": "FR",
            "article_items": [{
                "type": "date",
                "label": "Dates of establishment and inclusion",
                "name": "date_of_establishment",
                "selected": null
              },
              {
                "type": "text",
                "label": "Surface",
                "name": "surface",
                "selected": null
              },
              {
                "type": "text",
                "label": "Coordinates",
                "name": "coordinates",
                "selected": null
              },
              {
                "type": "checkbox",
                "label": "Jurisdiction",
                "name": "jurisdiction",
                "selected": null,
                "options": [{
                    "text": "National",
                    "value": 1
                  },
                  {
                    "text": "Adjacent water",
                    "value": 2
                  },
                  {
                    "text": "High seas",
                    "value": 3
                  }
                ]
              },
              {
                "type": "radio",
                "label": "Management plan",
                "name": "management",
                "selected": null,
                "options": [{
                    "text": "Yes",
                    "value": 1
                  },
                  {
                    "text": "No",
                    "value": 2
                  },
                  {
                    "text": "In process",
                    "value": 3
                  }
                ]
              },
              {
                "type": "date",
                "label": "Date of adoption",
                "name": "date_of_adoption",
                "selected": null
              },
              {
                "type": "text",
                "label": "Change of delimitation",
                "name": "delimitation_change",
                "selected": null
              },
              {
                "type": "text",
                "label": "Change of legal status",
                "name": "legal_status_change",
                "selected": null
              },
              {
                "type": "text",
                "label": "Reasons for changes",
                "name": "changes_reasons",
                "selected": null
              }
            ]
          },
          {
            "article_title": "France FR3 The Blue Coast Marine Park",
            "collection_id": 5032,
            "parent_collection_id": 509,
            "iso": "FR",
            "article_items": [{
                "type": "date",
                "label": "Dates of establishment and inclusion",
                "name": "date_of_establishment",
                "selected": null
              },
              {
                "type": "text",
                "label": "Surface",
                "name": "surface",
                "selected": null
              },
              {
                "type": "text",
                "label": "Coordinates",
                "name": "coordinates",
                "selected": null
              },
              {
                "type": "checkbox",
                "label": "Jurisdiction",
                "name": "jurisdiction",
                "selected": null,
                "options": [{
                    "text": "National",
                    "value": 1
                  },
                  {
                    "text": "Adjacent water",
                    "value": 2
                  },
                  {
                    "text": "High seas",
                    "value": 3
                  }
                ]
              },
              {
                "type": "radio",
                "label": "Management plan",
                "name": "management",
                "selected": null,
                "options": [{
                    "text": "Yes",
                    "value": 1
                  },
                  {
                    "text": "No",
                    "value": 2
                  },
                  {
                    "text": "In process",
                    "value": 3
                  }
                ]
              },
              {
                "type": "date",
                "label": "Date of adoption",
                "name": "date_of_adoption",
                "selected": null
              },
              {
                "type": "text",
                "label": "Change of delimitation",
                "name": "delimitation_change",
                "selected": null
              },
              {
                "type": "text",
                "label": "Change of legal status",
                "name": "legal_status_change",
                "selected": null
              },
              {
                "type": "text",
                "label": "Reasons for changes",
                "name": "changes_reasons",
                "selected": null
              }
            ]
          },
          {
            "article_title": "France FR4 The Embiez Archipelago-Six Fours",
            "collection_id": 5033,
            "parent_collection_id": 509,
            "iso": "FR",
            "article_items": [{
                "type": "date",
                "label": "Dates of establishment and inclusion",
                "name": "date_of_establishment",
                "selected": null
              },
              {
                "type": "text",
                "label": "Surface",
                "name": "surface",
                "selected": null
              },
              {
                "type": "text",
                "label": "Coordinates",
                "name": "coordinates",
                "selected": null
              },
              {
                "type": "checkbox",
                "label": "Jurisdiction",
                "name": "jurisdiction",
                "selected": null,
                "options": [{
                    "text": "National",
                    "value": 1
                  },
                  {
                    "text": "Adjacent water",
                    "value": 2
                  },
                  {
                    "text": "High seas",
                    "value": 3
                  }
                ]
              },
              {
                "type": "radio",
                "label": "Management plan",
                "name": "management",
                "selected": null,
                "options": [{
                    "text": "Yes",
                    "value": 1
                  },
                  {
                    "text": "No",
                    "value": 2
                  },
                  {
                    "text": "In process",
                    "value": 3
                  }
                ]
              },
              {
                "type": "date",
                "label": "Date of adoption",
                "name": "date_of_adoption",
                "selected": null
              },
              {
                "type": "text",
                "label": "Change of delimitation",
                "name": "delimitation_change",
                "selected": null
              },
              {
                "type": "text",
                "label": "Change of legal status",
                "name": "legal_status_change",
                "selected": null
              },
              {
                "type": "text",
                "label": "Reasons for changes",
                "name": "changes_reasons",
                "selected": null
              }
            ]
          },
          {
            "article_title": "Italy IT1 Plemmirio Protected Areas",
            "collection_id": 5034,
            "parent_collection_id": 509,
            "iso": "IT",
            "article_items": [{
                "type": "date",
                "label": "Dates of establishment and inclusion",
                "name": "date_of_establishment",
                "selected": null
              },
              {
                "type": "text",
                "label": "Surface",
                "name": "surface",
                "selected": null
              },
              {
                "type": "text",
                "label": "Coordinates",
                "name": "coordinates",
                "selected": null
              },
              {
                "type": "checkbox",
                "label": "Jurisdiction",
                "name": "jurisdiction",
                "selected": null,
                "options": [{
                    "text": "National",
                    "value": 1
                  },
                  {
                    "text": "Adjacent water",
                    "value": 2
                  },
                  {
                    "text": "High seas",
                    "value": 3
                  }
                ]
              },
              {
                "type": "radio",
                "label": "Management plan",
                "name": "management",
                "selected": null,
                "options": [{
                    "text": "Yes",
                    "value": 1
                  },
                  {
                    "text": "No",
                    "value": 2
                  },
                  {
                    "text": "In process",
                    "value": 3
                  }
                ]
              },
              {
                "type": "date",
                "label": "Date of adoption",
                "name": "date_of_adoption",
                "selected": null
              },
              {
                "type": "text",
                "label": "Change of delimitation",
                "name": "delimitation_change",
                "selected": null
              },
              {
                "type": "text",
                "label": "Change of legal status",
                "name": "legal_status_change",
                "selected": null
              },
              {
                "type": "text",
                "label": "Reasons for changes",
                "name": "changes_reasons",
                "selected": null
              }
            ]
          },
          {
            "article_title": "Italy IT2 Marine Protected Area of Portofino",
            "collection_id": 5035,
            "parent_collection_id": 509,
            "iso": "IT",
            "article_items": [{
                "type": "date",
                "label": "Dates of establishment and inclusion",
                "name": "date_of_establishment",
                "selected": null
              },
              {
                "type": "text",
                "label": "Surface",
                "name": "surface",
                "selected": null
              },
              {
                "type": "text",
                "label": "Coordinates",
                "name": "coordinates",
                "selected": null
              },
              {
                "type": "checkbox",
                "label": "Jurisdiction",
                "name": "jurisdiction",
                "selected": null,
                "options": [{
                    "text": "National",
                    "value": 1
                  },
                  {
                    "text": "Adjacent water",
                    "value": 2
                  },
                  {
                    "text": "High seas",
                    "value": 3
                  }
                ]
              },
              {
                "type": "radio",
                "label": "Management plan",
                "name": "management",
                "selected": null,
                "options": [{
                    "text": "Yes",
                    "value": 1
                  },
                  {
                    "text": "No",
                    "value": 2
                  },
                  {
                    "text": "In process",
                    "value": 3
                  }
                ]
              },
              {
                "type": "date",
                "label": "Date of adoption",
                "name": "date_of_adoption",
                "selected": null
              },
              {
                "type": "text",
                "label": "Change of delimitation",
                "name": "delimitation_change",
                "selected": null
              },
              {
                "type": "text",
                "label": "Change of legal status",
                "name": "legal_status_change",
                "selected": null
              },
              {
                "type": "text",
                "label": "Reasons for changes",
                "name": "changes_reasons",
                "selected": null
              }
            ]
          },
          {
            "article_title": "Italy IT3 Miramare Marine Protected Area",
            "collection_id": 5036,
            "parent_collection_id": 509,
            "iso": "IT",
            "article_items": [{
                "type": "date",
                "label": "Dates of establishment and inclusion",
                "name": "date_of_establishment",
                "selected": null
              },
              {
                "type": "text",
                "label": "Surface",
                "name": "surface",
                "selected": null
              },
              {
                "type": "text",
                "label": "Coordinates",
                "name": "coordinates",
                "selected": null
              },
              {
                "type": "checkbox",
                "label": "Jurisdiction",
                "name": "jurisdiction",
                "selected": null,
                "options": [{
                    "text": "National",
                    "value": 1
                  },
                  {
                    "text": "Adjacent water",
                    "value": 2
                  },
                  {
                    "text": "High seas",
                    "value": 3
                  }
                ]
              },
              {
                "type": "radio",
                "label": "Management plan",
                "name": "management",
                "selected": null,
                "options": [{
                    "text": "Yes",
                    "value": 1
                  },
                  {
                    "text": "No",
                    "value": 2
                  },
                  {
                    "text": "In process",
                    "value": 3
                  }
                ]
              },
              {
                "type": "date",
                "label": "Date of adoption",
                "name": "date_of_adoption",
                "selected": null
              },
              {
                "type": "text",
                "label": "Change of delimitation",
                "name": "delimitation_change",
                "selected": null
              },
              {
                "type": "text",
                "label": "Change of legal status",
                "name": "legal_status_change",
                "selected": null
              },
              {
                "type": "text",
                "label": "Reasons for changes",
                "name": "changes_reasons",
                "selected": null
              }
            ]
          },
          {
            "article_title": "Italy IT4 Tavolara-Punta Coda Cavallo Marine Protected Area",
            "collection_id": 5037,
            "parent_collection_id": 509,
            "iso": "IT",
            "article_items": [{
                "type": "date",
                "label": "Dates of establishment and inclusion",
                "name": "date_of_establishment",
                "selected": null
              },
              {
                "type": "text",
                "label": "Surface",
                "name": "surface",
                "selected": null
              },
              {
                "type": "text",
                "label": "Coordinates",
                "name": "coordinates",
                "selected": null
              },
              {
                "type": "checkbox",
                "label": "Jurisdiction",
                "name": "jurisdiction",
                "selected": null,
                "options": [{
                    "text": "National",
                    "value": 1
                  },
                  {
                    "text": "Adjacent water",
                    "value": 2
                  },
                  {
                    "text": "High seas",
                    "value": 3
                  }
                ]
              },
              {
                "type": "radio",
                "label": "Management plan",
                "name": "management",
                "selected": null,
                "options": [{
                    "text": "Yes",
                    "value": 1
                  },
                  {
                    "text": "No",
                    "value": 2
                  },
                  {
                    "text": "In process",
                    "value": 3
                  }
                ]
              },
              {
                "type": "date",
                "label": "Date of adoption",
                "name": "date_of_adoption",
                "selected": null
              },
              {
                "type": "text",
                "label": "Change of delimitation",
                "name": "delimitation_change",
                "selected": null
              },
              {
                "type": "text",
                "label": "Change of legal status",
                "name": "legal_status_change",
                "selected": null
              },
              {
                "type": "text",
                "label": "Reasons for changes",
                "name": "changes_reasons",
                "selected": null
              }
            ]
          },
          {
            "article_title": "Italy IT5 Marine Protected Area of Torre Guaceto",
            "collection_id": 5038,
            "parent_collection_id": 509,
            "iso": "IT",
            "article_items": [{
                "type": "date",
                "label": "Dates of establishment and inclusion",
                "name": "date_of_establishment",
                "selected": null
              },
              {
                "type": "text",
                "label": "Surface",
                "name": "surface",
                "selected": null
              },
              {
                "type": "text",
                "label": "Coordinates",
                "name": "coordinates",
                "selected": null
              },
              {
                "type": "checkbox",
                "label": "Jurisdiction",
                "name": "jurisdiction",
                "selected": null,
                "options": [{
                    "text": "National",
                    "value": 1
                  },
                  {
                    "text": "Adjacent water",
                    "value": 2
                  },
                  {
                    "text": "High seas",
                    "value": 3
                  }
                ]
              },
              {
                "type": "radio",
                "label": "Management plan",
                "name": "management",
                "selected": null,
                "options": [{
                    "text": "Yes",
                    "value": 1
                  },
                  {
                    "text": "No",
                    "value": 2
                  },
                  {
                    "text": "In process",
                    "value": 3
                  }
                ]
              },
              {
                "type": "date",
                "label": "Date of adoption",
                "name": "date_of_adoption",
                "selected": null
              },
              {
                "type": "text",
                "label": "Change of delimitation",
                "name": "delimitation_change",
                "selected": null
              },
              {
                "type": "text",
                "label": "Change of legal status",
                "name": "legal_status_change",
                "selected": null
              },
              {
                "type": "text",
                "label": "Reasons for changes",
                "name": "changes_reasons",
                "selected": null
              }
            ]
          },
          {
            "article_title": "Italy IT6 Marine Protected Area Punta Campanella",
            "collection_id": 5039,
            "parent_collection_id": 509,
            "iso": "IT",
            "article_items": [{
                "type": "date",
                "label": "Dates of establishment and inclusion",
                "name": "date_of_establishment",
                "selected": null
              },
              {
                "type": "text",
                "label": "Surface",
                "name": "surface",
                "selected": null
              },
              {
                "type": "text",
                "label": "Coordinates",
                "name": "coordinates",
                "selected": null
              },
              {
                "type": "checkbox",
                "label": "Jurisdiction",
                "name": "jurisdiction",
                "selected": null,
                "options": [{
                    "text": "National",
                    "value": 1
                  },
                  {
                    "text": "Adjacent water",
                    "value": 2
                  },
                  {
                    "text": "High seas",
                    "value": 3
                  }
                ]
              },
              {
                "type": "radio",
                "label": "Management plan",
                "name": "management",
                "selected": null,
                "options": [{
                    "text": "Yes",
                    "value": 1
                  },
                  {
                    "text": "No",
                    "value": 2
                  },
                  {
                    "text": "In process",
                    "value": 3
                  }
                ]
              },
              {
                "type": "date",
                "label": "Date of adoption",
                "name": "date_of_adoption",
                "selected": null
              },
              {
                "type": "text",
                "label": "Change of delimitation",
                "name": "delimitation_change",
                "selected": null
              },
              {
                "type": "text",
                "label": "Change of legal status",
                "name": "legal_status_change",
                "selected": null
              },
              {
                "type": "text",
                "label": "Reasons for changes",
                "name": "changes_reasons",
                "selected": null
              }
            ]
          },
          {
            "article_title": "Italy IT7 Marine Protected Area of Capo Caccia-Isola Piana",
            "collection_id": 5040,
            "parent_collection_id": 509,
            "iso": "IT",
            "article_items": [{
                "type": "date",
                "label": "Dates of establishment and inclusion",
                "name": "date_of_establishment",
                "selected": null
              },
              {
                "type": "text",
                "label": "Surface",
                "name": "surface",
                "selected": null
              },
              {
                "type": "text",
                "label": "Coordinates",
                "name": "coordinates",
                "selected": null
              },
              {
                "type": "checkbox",
                "label": "Jurisdiction",
                "name": "jurisdiction",
                "selected": null,
                "options": [{
                    "text": "National",
                    "value": 1
                  },
                  {
                    "text": "Adjacent water",
                    "value": 2
                  },
                  {
                    "text": "High seas",
                    "value": 3
                  }
                ]
              },
              {
                "type": "radio",
                "label": "Management plan",
                "name": "management",
                "selected": null,
                "options": [{
                    "text": "Yes",
                    "value": 1
                  },
                  {
                    "text": "No",
                    "value": 2
                  },
                  {
                    "text": "In process",
                    "value": 3
                  }
                ]
              },
              {
                "type": "date",
                "label": "Date of adoption",
                "name": "date_of_adoption",
                "selected": null
              },
              {
                "type": "text",
                "label": "Change of delimitation",
                "name": "delimitation_change",
                "selected": null
              },
              {
                "type": "text",
                "label": "Change of legal status",
                "name": "legal_status_change",
                "selected": null
              },
              {
                "type": "text",
                "label": "Reasons for changes",
                "name": "changes_reasons",
                "selected": null
              }
            ]
          },
          {
            "article_title": "Italy IT8 Porto Cesareo Marine Protected Area",
            "collection_id": 5041,
            "parent_collection_id": 509,
            "iso": "IT",
            "article_items": [{
                "type": "date",
                "label": "Dates of establishment and inclusion",
                "name": "date_of_establishment",
                "selected": null
              },
              {
                "type": "text",
                "label": "Surface",
                "name": "surface",
                "selected": null
              },
              {
                "type": "text",
                "label": "Coordinates",
                "name": "coordinates",
                "selected": null
              },
              {
                "type": "checkbox",
                "label": "Jurisdiction",
                "name": "jurisdiction",
                "selected": null,
                "options": [{
                    "text": "National",
                    "value": 1
                  },
                  {
                    "text": "Adjacent water",
                    "value": 2
                  },
                  {
                    "text": "High seas",
                    "value": 3
                  }
                ]
              },
              {
                "type": "radio",
                "label": "Management plan",
                "name": "management",
                "selected": null,
                "options": [{
                    "text": "Yes",
                    "value": 1
                  },
                  {
                    "text": "No",
                    "value": 2
                  },
                  {
                    "text": "In process",
                    "value": 3
                  }
                ]
              },
              {
                "type": "date",
                "label": "Date of adoption",
                "name": "date_of_adoption",
                "selected": null
              },
              {
                "type": "text",
                "label": "Change of delimitation",
                "name": "delimitation_change",
                "selected": null
              },
              {
                "type": "text",
                "label": "Change of legal status",
                "name": "legal_status_change",
                "selected": null
              },
              {
                "type": "text",
                "label": "Reasons for changes",
                "name": "changes_reasons",
                "selected": null
              }
            ]
          },
          {
            "article_title": "Italy IT9 Capo Carbonara Marine Protected Area",
            "collection_id": 5042,
            "parent_collection_id": 509,
            "iso": "IT",
            "article_items": [{
                "type": "date",
                "label": "Dates of establishment and inclusion",
                "name": "date_of_establishment",
                "selected": null
              },
              {
                "type": "text",
                "label": "Surface",
                "name": "surface",
                "selected": null
              },
              {
                "type": "text",
                "label": "Coordinates",
                "name": "coordinates",
                "selected": null
              },
              {
                "type": "checkbox",
                "label": "Jurisdiction",
                "name": "jurisdiction",
                "selected": null,
                "options": [{
                    "text": "National",
                    "value": 1
                  },
                  {
                    "text": "Adjacent water",
                    "value": 2
                  },
                  {
                    "text": "High seas",
                    "value": 3
                  }
                ]
              },
              {
                "type": "radio",
                "label": "Management plan",
                "name": "management",
                "selected": null,
                "options": [{
                    "text": "Yes",
                    "value": 1
                  },
                  {
                    "text": "No",
                    "value": 2
                  },
                  {
                    "text": "In process",
                    "value": 3
                  }
                ]
              },
              {
                "type": "date",
                "label": "Date of adoption",
                "name": "date_of_adoption",
                "selected": null
              },
              {
                "type": "text",
                "label": "Change of delimitation",
                "name": "delimitation_change",
                "selected": null
              },
              {
                "type": "text",
                "label": "Change of legal status",
                "name": "legal_status_change",
                "selected": null
              },
              {
                "type": "text",
                "label": "Reasons for changes",
                "name": "changes_reasons",
                "selected": null
              }
            ]
          },
          {
            "article_title": "Italy IT10 Marine Protected Area of Penisola del Sinis",
            "collection_id": 5043,
            "parent_collection_id": 509,
            "iso": "IT",
            "article_items": [{
                "type": "date",
                "label": "Dates of establishment and inclusion",
                "name": "date_of_establishment",
                "selected": null
              },
              {
                "type": "text",
                "label": "Surface",
                "name": "surface",
                "selected": null
              },
              {
                "type": "text",
                "label": "Coordinates",
                "name": "coordinates",
                "selected": null
              },
              {
                "type": "checkbox",
                "label": "Jurisdiction",
                "name": "jurisdiction",
                "selected": null,
                "options": [{
                    "text": "National",
                    "value": 1
                  },
                  {
                    "text": "Adjacent water",
                    "value": 2
                  },
                  {
                    "text": "High seas",
                    "value": 3
                  }
                ]
              },
              {
                "type": "radio",
                "label": "Management plan",
                "name": "management",
                "selected": null,
                "options": [{
                    "text": "Yes",
                    "value": 1
                  },
                  {
                    "text": "No",
                    "value": 2
                  },
                  {
                    "text": "In process",
                    "value": 3
                  }
                ]
              },
              {
                "type": "date",
                "label": "Date of adoption",
                "name": "date_of_adoption",
                "selected": null
              },
              {
                "type": "text",
                "label": "Change of delimitation",
                "name": "delimitation_change",
                "selected": null
              },
              {
                "type": "text",
                "label": "Change of legal status",
                "name": "legal_status_change",
                "selected": null
              },
              {
                "type": "text",
                "label": "Reasons for changes",
                "name": "changes_reasons",
                "selected": null
              }
            ]
          },
          {
            "article_title": "Lebanon LB1 Palm Islands Nature Reserve",
            "collection_id": 5044,
            "parent_collection_id": 509,
            "iso": "LB",
            "article_items": [{
                "type": "date",
                "label": "Dates of establishment and inclusion",
                "name": "date_of_establishment",
                "selected": null
              },
              {
                "type": "text",
                "label": "Surface",
                "name": "surface",
                "selected": null
              },
              {
                "type": "text",
                "label": "Coordinates",
                "name": "coordinates",
                "selected": null
              },
              {
                "type": "checkbox",
                "label": "Jurisdiction",
                "name": "jurisdiction",
                "selected": null,
                "options": [{
                    "text": "National",
                    "value": 1
                  },
                  {
                    "text": "Adjacent water",
                    "value": 2
                  },
                  {
                    "text": "High seas",
                    "value": 3
                  }
                ]
              },
              {
                "type": "radio",
                "label": "Management plan",
                "name": "management",
                "selected": null,
                "options": [{
                    "text": "Yes",
                    "value": 1
                  },
                  {
                    "text": "No",
                    "value": 2
                  },
                  {
                    "text": "In process",
                    "value": 3
                  }
                ]
              },
              {
                "type": "date",
                "label": "Date of adoption",
                "name": "date_of_adoption",
                "selected": null
              },
              {
                "type": "text",
                "label": "Change of delimitation",
                "name": "delimitation_change",
                "selected": null
              },
              {
                "type": "text",
                "label": "Change of legal status",
                "name": "legal_status_change",
                "selected": null
              },
              {
                "type": "text",
                "label": "Reasons for changes",
                "name": "changes_reasons",
                "selected": null
              }
            ]
          },
          {
            "article_title": "Lebanon LB2 Tyre Coast Nature Reserve",
            "collection_id": 5045,
            "parent_collection_id": 509,
            "iso": "LB2",
            "article_items": [{
                "type": "date",
                "label": "Dates of establishment and inclusion",
                "name": "date_of_establishment",
                "selected": null
              },
              {
                "type": "text",
                "label": "Surface",
                "name": "surface",
                "selected": null
              },
              {
                "type": "text",
                "label": "Coordinates",
                "name": "coordinates",
                "selected": null
              },
              {
                "type": "checkbox",
                "label": "Jurisdiction",
                "name": "jurisdiction",
                "selected": null,
                "options": [{
                    "text": "National",
                    "value": 1
                  },
                  {
                    "text": "Adjacent water",
                    "value": 2
                  },
                  {
                    "text": "High seas",
                    "value": 3
                  }
                ]
              },
              {
                "type": "radio",
                "label": "Management plan",
                "name": "management",
                "selected": null,
                "options": [{
                    "text": "Yes",
                    "value": 1
                  },
                  {
                    "text": "No",
                    "value": 2
                  },
                  {
                    "text": "In process",
                    "value": 3
                  }
                ]
              },
              {
                "type": "date",
                "label": "Date of adoption",
                "name": "date_of_adoption",
                "selected": null
              },
              {
                "type": "text",
                "label": "Change of delimitation",
                "name": "delimitation_change",
                "selected": null
              },
              {
                "type": "text",
                "label": "Change of legal status",
                "name": "legal_status_change",
                "selected": null
              },
              {
                "type": "text",
                "label": "Reasons for changes",
                "name": "changes_reasons",
                "selected": null
              }
            ]
          },
          {
            "article_title": "Morocco MA1 Al- Hoceima National Park",
            "collection_id": 5046,
            "parent_collection_id": 509,
            "iso": "MA",
            "article_items": [{
                "type": "date",
                "label": "Dates of establishment and inclusion",
                "name": "date_of_establishment",
                "selected": null
              },
              {
                "type": "text",
                "label": "Surface",
                "name": "surface",
                "selected": null
              },
              {
                "type": "text",
                "label": "Coordinates",
                "name": "coordinates",
                "selected": null
              },
              {
                "type": "checkbox",
                "label": "Jurisdiction",
                "name": "jurisdiction",
                "selected": null,
                "options": [{
                    "text": "National",
                    "value": 1
                  },
                  {
                    "text": "Adjacent water",
                    "value": 2
                  },
                  {
                    "text": "High seas",
                    "value": 3
                  }
                ]
              },
              {
                "type": "radio",
                "label": "Management plan",
                "name": "management",
                "selected": null,
                "options": [{
                    "text": "Yes",
                    "value": 1
                  },
                  {
                    "text": "No",
                    "value": 2
                  },
                  {
                    "text": "In process",
                    "value": 3
                  }
                ]
              },
              {
                "type": "date",
                "label": "Date of adoption",
                "name": "date_of_adoption",
                "selected": null
              },
              {
                "type": "text",
                "label": "Change of delimitation",
                "name": "delimitation_change",
                "selected": null
              },
              {
                "type": "text",
                "label": "Change of legal status",
                "name": "legal_status_change",
                "selected": null
              },
              {
                "type": "text",
                "label": "Reasons for changes",
                "name": "changes_reasons",
                "selected": null
              }
            ]
          },
          {
            "article_title": "Spain ES1 Maro-Cerro Gordo Cliffs",
            "collection_id": 5047,
            "parent_collection_id": 509,
            "iso": "ES",
            "article_items": [{
                "type": "date",
                "label": "Dates of establishment and inclusion",
                "name": "date_of_establishment",
                "selected": null
              },
              {
                "type": "text",
                "label": "Surface",
                "name": "surface",
                "selected": null
              },
              {
                "type": "text",
                "label": "Coordinates",
                "name": "coordinates",
                "selected": null
              },
              {
                "type": "checkbox",
                "label": "Jurisdiction",
                "name": "jurisdiction",
                "selected": null,
                "options": [{
                    "text": "National",
                    "value": 1
                  },
                  {
                    "text": "Adjacent water",
                    "value": 2
                  },
                  {
                    "text": "High seas",
                    "value": 3
                  }
                ]
              },
              {
                "type": "radio",
                "label": "Management plan",
                "name": "management",
                "selected": null,
                "options": [{
                    "text": "Yes",
                    "value": 1
                  },
                  {
                    "text": "No",
                    "value": 2
                  },
                  {
                    "text": "In process",
                    "value": 3
                  }
                ]
              },
              {
                "type": "date",
                "label": "Date of adoption",
                "name": "date_of_adoption",
                "selected": null
              },
              {
                "type": "text",
                "label": "Change of delimitation",
                "name": "delimitation_change",
                "selected": null
              },
              {
                "type": "text",
                "label": "Change of legal status",
                "name": "legal_status_change",
                "selected": null
              },
              {
                "type": "text",
                "label": "Reasons for changes",
                "name": "changes_reasons",
                "selected": null
              }
            ]
          },
          {
            "article_title": "Spain ES2 Archipielago of Cabrera National Park",
            "collection_id": 5048,
            "parent_collection_id": 509,
            "iso": "ES",
            "article_items": [{
                "type": "date",
                "label": "Dates of establishment and inclusion",
                "name": "date_of_establishment",
                "selected": null
              },
              {
                "type": "text",
                "label": "Surface",
                "name": "surface",
                "selected": null
              },
              {
                "type": "text",
                "label": "Coordinates",
                "name": "coordinates",
                "selected": null
              },
              {
                "type": "checkbox",
                "label": "Jurisdiction",
                "name": "jurisdiction",
                "selected": null,
                "options": [{
                    "text": "National",
                    "value": 1
                  },
                  {
                    "text": "Adjacent water",
                    "value": 2
                  },
                  {
                    "text": "High seas",
                    "value": 3
                  }
                ]
              },
              {
                "type": "radio",
                "label": "Management plan",
                "name": "management",
                "selected": null,
                "options": [{
                    "text": "Yes",
                    "value": 1
                  },
                  {
                    "text": "No",
                    "value": 2
                  },
                  {
                    "text": "In process",
                    "value": 3
                  }
                ]
              },
              {
                "type": "date",
                "label": "Date of adoption",
                "name": "date_of_adoption",
                "selected": null
              },
              {
                "type": "text",
                "label": "Change of delimitation",
                "name": "delimitation_change",
                "selected": null
              },
              {
                "type": "text",
                "label": "Change of legal status",
                "name": "legal_status_change",
                "selected": null
              },
              {
                "type": "text",
                "label": "Reasons for changes",
                "name": "changes_reasons",
                "selected": null
              }
            ]
          },
          {
            "article_title": "Spain ES3 Natural Park of Cabo de Gata-Nijar",
            "collection_id": 5049,
            "parent_collection_id": 509,
            "iso": "ES",
            "article_items": [{
                "type": "date",
                "label": "Dates of establishment and inclusion",
                "name": "date_of_establishment",
                "selected": null
              },
              {
                "type": "text",
                "label": "Surface",
                "name": "surface",
                "selected": null
              },
              {
                "type": "text",
                "label": "Coordinates",
                "name": "coordinates",
                "selected": null
              },
              {
                "type": "checkbox",
                "label": "Jurisdiction",
                "name": "jurisdiction",
                "selected": null,
                "options": [{
                    "text": "National",
                    "value": 1
                  },
                  {
                    "text": "Adjacent water",
                    "value": 2
                  },
                  {
                    "text": "High seas",
                    "value": 3
                  }
                ]
              },
              {
                "type": "radio",
                "label": "Management plan",
                "name": "management",
                "selected": null,
                "options": [{
                    "text": "Yes",
                    "value": 1
                  },
                  {
                    "text": "No",
                    "value": 2
                  },
                  {
                    "text": "In process",
                    "value": 3
                  }
                ]
              },
              {
                "type": "date",
                "label": "Date of adoption",
                "name": "date_of_adoption",
                "selected": null
              },
              {
                "type": "text",
                "label": "Change of delimitation",
                "name": "delimitation_change",
                "selected": null
              },
              {
                "type": "text",
                "label": "Change of legal status",
                "name": "legal_status_change",
                "selected": null
              },
              {
                "type": "text",
                "label": "Reasons for changes",
                "name": "changes_reasons",
                "selected": null
              }
            ]
          },
          {
            "article_title": "Spain ES4 Natural Park of Cap de Creus",
            "collection_id": 5050,
            "parent_collection_id": 509,
            "iso": "ES",
            "article_items": [{
                "type": "date",
                "label": "Dates of establishment and inclusion",
                "name": "date_of_establishment",
                "selected": null
              },
              {
                "type": "text",
                "label": "Surface",
                "name": "surface",
                "selected": null
              },
              {
                "type": "text",
                "label": "Coordinates",
                "name": "coordinates",
                "selected": null
              },
              {
                "type": "checkbox",
                "label": "Jurisdiction",
                "name": "jurisdiction",
                "selected": null,
                "options": [{
                    "text": "National",
                    "value": 1
                  },
                  {
                    "text": "Adjacent water",
                    "value": 2
                  },
                  {
                    "text": "High seas",
                    "value": 3
                  }
                ]
              },
              {
                "type": "radio",
                "label": "Management plan",
                "name": "management",
                "selected": null,
                "options": [{
                    "text": "Yes",
                    "value": 1
                  },
                  {
                    "text": "No",
                    "value": 2
                  },
                  {
                    "text": "In process",
                    "value": 3
                  }
                ]
              },
              {
                "type": "date",
                "label": "Date of adoption",
                "name": "date_of_adoption",
                "selected": null
              },
              {
                "type": "text",
                "label": "Change of delimitation",
                "name": "delimitation_change",
                "selected": null
              },
              {
                "type": "text",
                "label": "Change of legal status",
                "name": "legal_status_change",
                "selected": null
              },
              {
                "type": "text",
                "label": "Reasons for changes",
                "name": "changes_reasons",
                "selected": null
              }
            ]
          },
          {
            "article_title": "Spain ES5 Sea Bottom of the Levante of Almeria",
            "collection_id": 5051,
            "parent_collection_id": 509,
            "iso": "ES",
            "article_items": [{
                "type": "date",
                "label": "Dates of establishment and inclusion",
                "name": "date_of_establishment",
                "selected": null
              },
              {
                "type": "text",
                "label": "Surface",
                "name": "surface",
                "selected": null
              },
              {
                "type": "text",
                "label": "Coordinates",
                "name": "coordinates",
                "selected": null
              },
              {
                "type": "checkbox",
                "label": "Jurisdiction",
                "name": "jurisdiction",
                "selected": null,
                "options": [{
                    "text": "National",
                    "value": 1
                  },
                  {
                    "text": "Adjacent water",
                    "value": 2
                  },
                  {
                    "text": "High seas",
                    "value": 3
                  }
                ]
              },
              {
                "type": "radio",
                "label": "Management plan",
                "name": "management",
                "selected": null,
                "options": [{
                    "text": "Yes",
                    "value": 1
                  },
                  {
                    "text": "No",
                    "value": 2
                  },
                  {
                    "text": "In process",
                    "value": 3
                  }
                ]
              },
              {
                "type": "date",
                "label": "Date of adoption",
                "name": "date_of_adoption",
                "selected": null
              },
              {
                "type": "text",
                "label": "Change of delimitation",
                "name": "delimitation_change",
                "selected": null
              },
              {
                "type": "text",
                "label": "Change of legal status",
                "name": "legal_status_change",
                "selected": null
              },
              {
                "type": "text",
                "label": "Reasons for changes",
                "name": "changes_reasons",
                "selected": null
              }
            ]
          },
          {
            "article_title": "Spain ES6 Alboran Island",
            "collection_id": 5052,
            "parent_collection_id": 509,
            "iso": "ES",
            "article_items": [{
                "type": "date",
                "label": "Dates of establishment and inclusion",
                "name": "date_of_establishment",
                "selected": null
              },
              {
                "type": "text",
                "label": "Surface",
                "name": "surface",
                "selected": null
              },
              {
                "type": "text",
                "label": "Coordinates",
                "name": "coordinates",
                "selected": null
              },
              {
                "type": "checkbox",
                "label": "Jurisdiction",
                "name": "jurisdiction",
                "selected": null,
                "options": [{
                    "text": "National",
                    "value": 1
                  },
                  {
                    "text": "Adjacent water",
                    "value": 2
                  },
                  {
                    "text": "High seas",
                    "value": 3
                  }
                ]
              },
              {
                "type": "radio",
                "label": "Management plan",
                "name": "management",
                "selected": null,
                "options": [{
                    "text": "Yes",
                    "value": 1
                  },
                  {
                    "text": "No",
                    "value": 2
                  },
                  {
                    "text": "In process",
                    "value": 3
                  }
                ]
              },
              {
                "type": "date",
                "label": "Date of adoption",
                "name": "date_of_adoption",
                "selected": null
              },
              {
                "type": "text",
                "label": "Change of delimitation",
                "name": "delimitation_change",
                "selected": null
              },
              {
                "type": "text",
                "label": "Change of legal status",
                "name": "legal_status_change",
                "selected": null
              },
              {
                "type": "text",
                "label": "Reasons for changes",
                "name": "changes_reasons",
                "selected": null
              }
            ]
          },
          {
            "article_title": "Spain ES7 Columbretes Islands",
            "collection_id": 5053,
            "parent_collection_id": 509,
            "iso": "ES",
            "article_items": [{
                "type": "date",
                "label": "Dates of establishment and inclusion",
                "name": "date_of_establishment",
                "selected": null
              },
              {
                "type": "text",
                "label": "Surface",
                "name": "surface",
                "selected": null
              },
              {
                "type": "text",
                "label": "Coordinates",
                "name": "coordinates",
                "selected": null
              },
              {
                "type": "checkbox",
                "label": "Jurisdiction",
                "name": "jurisdiction",
                "selected": null,
                "options": [{
                    "text": "National",
                    "value": 1
                  },
                  {
                    "text": "Adjacent water",
                    "value": 2
                  },
                  {
                    "text": "High seas",
                    "value": 3
                  }
                ]
              },
              {
                "type": "radio",
                "label": "Management plan",
                "name": "management",
                "selected": null,
                "options": [{
                    "text": "Yes",
                    "value": 1
                  },
                  {
                    "text": "No",
                    "value": 2
                  },
                  {
                    "text": "In process",
                    "value": 3
                  }
                ]
              },
              {
                "type": "date",
                "label": "Date of adoption",
                "name": "date_of_adoption",
                "selected": null
              },
              {
                "type": "text",
                "label": "Change of delimitation",
                "name": "delimitation_change",
                "selected": null
              },
              {
                "type": "text",
                "label": "Change of legal status",
                "name": "legal_status_change",
                "selected": null
              },
              {
                "type": "text",
                "label": "Reasons for changes",
                "name": "changes_reasons",
                "selected": null
              }
            ]
          },
          {
            "article_title": "Spain ES8 Medes Islands",
            "collection_id": 5054,
            "parent_collection_id": 509,
            "iso": "ES",
            "article_items": [{
                "type": "date",
                "label": "Dates of establishment and inclusion",
                "name": "date_of_establishment",
                "selected": null
              },
              {
                "type": "text",
                "label": "Surface",
                "name": "surface",
                "selected": null
              },
              {
                "type": "text",
                "label": "Coordinates",
                "name": "coordinates",
                "selected": null
              },
              {
                "type": "checkbox",
                "label": "Jurisdiction",
                "name": "jurisdiction",
                "selected": null,
                "options": [{
                    "text": "National",
                    "value": 1
                  },
                  {
                    "text": "Adjacent water",
                    "value": 2
                  },
                  {
                    "text": "High seas",
                    "value": 3
                  }
                ]
              },
              {
                "type": "radio",
                "label": "Management plan",
                "name": "management",
                "selected": null,
                "options": [{
                    "text": "Yes",
                    "value": 1
                  },
                  {
                    "text": "No",
                    "value": 2
                  },
                  {
                    "text": "In process",
                    "value": 3
                  }
                ]
              },
              {
                "type": "date",
                "label": "Date of adoption",
                "name": "date_of_adoption",
                "selected": null
              },
              {
                "type": "text",
                "label": "Change of delimitation",
                "name": "delimitation_change",
                "selected": null
              },
              {
                "type": "text",
                "label": "Change of legal status",
                "name": "legal_status_change",
                "selected": null
              },
              {
                "type": "text",
                "label": "Reasons for changes",
                "name": "changes_reasons",
                "selected": null
              }
            ]
          },
          {
            "article_title": "Spain ES9 Mar Menor",
            "collection_id": 5055,
            "parent_collection_id": 509,
            "iso": "ES",
            "article_items": [{
                "type": "date",
                "label": "Dates of establishment and inclusion",
                "name": "date_of_establishment",
                "selected": null
              },
              {
                "type": "text",
                "label": "Surface",
                "name": "surface",
                "selected": null
              },
              {
                "type": "text",
                "label": "Coordinates",
                "name": "coordinates",
                "selected": null
              },
              {
                "type": "checkbox",
                "label": "Jurisdiction",
                "name": "jurisdiction",
                "selected": null,
                "options": [{
                    "text": "National",
                    "value": 1
                  },
                  {
                    "text": "Adjacent water",
                    "value": 2
                  },
                  {
                    "text": "High seas",
                    "value": 3
                  }
                ]
              },
              {
                "type": "radio",
                "label": "Management plan",
                "name": "management",
                "selected": null,
                "options": [{
                    "text": "Yes",
                    "value": 1
                  },
                  {
                    "text": "No",
                    "value": 2
                  },
                  {
                    "text": "In process",
                    "value": 3
                  }
                ]
              },
              {
                "type": "date",
                "label": "Date of adoption",
                "name": "date_of_adoption",
                "selected": null
              },
              {
                "type": "text",
                "label": "Change of delimitation",
                "name": "delimitation_change",
                "selected": null
              },
              {
                "type": "text",
                "label": "Change of legal status",
                "name": "legal_status_change",
                "selected": null
              },
              {
                "type": "text",
                "label": "Reasons for changes",
                "name": "changes_reasons",
                "selected": null
              }
            ]
          },
          {
            "article_title": "Tunisia TN1 La Galite Archipelago",
            "collection_id": 5056,
            "parent_collection_id": 509,
            "iso": "TN",
            "article_items": [{
                "type": "date",
                "label": "Dates of establishment and inclusion",
                "name": "date_of_establishment",
                "selected": null
              },
              {
                "type": "text",
                "label": "Surface",
                "name": "surface",
                "selected": null
              },
              {
                "type": "text",
                "label": "Coordinates",
                "name": "coordinates",
                "selected": null
              },
              {
                "type": "checkbox",
                "label": "Jurisdiction",
                "name": "jurisdiction",
                "selected": null,
                "options": [{
                    "text": "National",
                    "value": 1
                  },
                  {
                    "text": "Adjacent water",
                    "value": 2
                  },
                  {
                    "text": "High seas",
                    "value": 3
                  }
                ]
              },
              {
                "type": "radio",
                "label": "Management plan",
                "name": "management",
                "selected": null,
                "options": [{
                    "text": "Yes",
                    "value": 1
                  },
                  {
                    "text": "No",
                    "value": 2
                  },
                  {
                    "text": "In process",
                    "value": 3
                  }
                ]
              },
              {
                "type": "date",
                "label": "Date of adoption",
                "name": "date_of_adoption",
                "selected": null
              },
              {
                "type": "text",
                "label": "Change of delimitation",
                "name": "delimitation_change",
                "selected": null
              },
              {
                "type": "text",
                "label": "Change of legal status",
                "name": "legal_status_change",
                "selected": null
              },
              {
                "type": "text",
                "label": "Reasons for changes",
                "name": "changes_reasons",
                "selected": null
              }
            ]
          },
          {
            "article_title": "Tunisia TN2 Kneiss Islands",
            "collection_id": 5057,
            "parent_collection_id": 509,
            "iso": "TN",
            "article_items": [{
                "type": "date",
                "label": "Dates of establishment and inclusion",
                "name": "date_of_establishment",
                "selected": null
              },
              {
                "type": "text",
                "label": "Surface",
                "name": "surface",
                "selected": null
              },
              {
                "type": "text",
                "label": "Coordinates",
                "name": "coordinates",
                "selected": null
              },
              {
                "type": "checkbox",
                "label": "Jurisdiction",
                "name": "jurisdiction",
                "selected": null,
                "options": [{
                    "text": "National",
                    "value": 1
                  },
                  {
                    "text": "Adjacent water",
                    "value": 2
                  },
                  {
                    "text": "High seas",
                    "value": 3
                  }
                ]
              },
              {
                "type": "radio",
                "label": "Management plan",
                "name": "management",
                "selected": null,
                "options": [{
                    "text": "Yes",
                    "value": 1
                  },
                  {
                    "text": "No",
                    "value": 2
                  },
                  {
                    "text": "In process",
                    "value": 3
                  }
                ]
              },
              {
                "type": "date",
                "label": "Date of adoption",
                "name": "date_of_adoption",
                "selected": null
              },
              {
                "type": "text",
                "label": "Change of delimitation",
                "name": "delimitation_change",
                "selected": null
              },
              {
                "type": "text",
                "label": "Change of legal status",
                "name": "legal_status_change",
                "selected": null
              },
              {
                "type": "text",
                "label": "Reasons for changes",
                "name": "changes_reasons",
                "selected": null
              }
            ]
          },
          {
            "article_title": "Tunisa TN3 Zembra and Zembretta National Park",
            "collection_id": 5058,
            "parent_collection_id": 509,
            "iso": "TN",
            "article_items": [{
                "type": "date",
                "label": "Dates of establishment and inclusion",
                "name": "date_of_establishment",
                "selected": null
              },
              {
                "type": "text",
                "label": "Surface",
                "name": "surface",
                "selected": null
              },
              {
                "type": "text",
                "label": "Coordinates",
                "name": "coordinates",
                "selected": null
              },
              {
                "type": "checkbox",
                "label": "Jurisdiction",
                "name": "jurisdiction",
                "selected": null,
                "options": [{
                    "text": "National",
                    "value": 1
                  },
                  {
                    "text": "Adjacent water",
                    "value": 2
                  },
                  {
                    "text": "High seas",
                    "value": 3
                  }
                ]
              },
              {
                "type": "radio",
                "label": "Management plan",
                "name": "management",
                "selected": null,
                "options": [{
                    "text": "Yes",
                    "value": 1
                  },
                  {
                    "text": "No",
                    "value": 2
                  },
                  {
                    "text": "In process",
                    "value": 3
                  }
                ]
              },
              {
                "type": "date",
                "label": "Date of adoption",
                "name": "date_of_adoption",
                "selected": null
              },
              {
                "type": "text",
                "label": "Change of delimitation",
                "name": "delimitation_change",
                "selected": null
              },
              {
                "type": "text",
                "label": "Change of legal status",
                "name": "legal_status_change",
                "selected": null
              },
              {
                "type": "text",
                "label": "Reasons for changes",
                "name": "changes_reasons",
                "selected": null
              }
            ]
          },
          {
            "article_title": "France, Italy and Monaco Int1 Pelagos Sanctuary for the Conservation of Marine Mammals",
            "collection_id": 5059,
            "parent_collection_id": 509,
            "iso": ["FR", "IT", "MC"],
            "article_items": [{
                "type": "date",
                "label": "Dates of establishment and inclusion",
                "name": "date_of_establishment",
                "selected": null
              },
              {
                "type": "text",
                "label": "Surface",
                "name": "surface",
                "selected": null
              },
              {
                "type": "text",
                "label": "Coordinates",
                "name": "coordinates",
                "selected": null
              },
              {
                "type": "checkbox",
                "label": "Jurisdiction",
                "name": "jurisdiction",
                "selected": null,
                "options": [{
                    "text": "National",
                    "value": 1
                  },
                  {
                    "text": "Adjacent water",
                    "value": 2
                  },
                  {
                    "text": "High seas",
                    "value": 3
                  }
                ]
              },
              {
                "type": "radio",
                "label": "Management plan",
                "name": "management",
                "selected": null,
                "options": [{
                    "text": "Yes",
                    "value": 1
                  },
                  {
                    "text": "No",
                    "value": 2
                  },
                  {
                    "text": "In process",
                    "value": 3
                  }
                ]
              },
              {
                "type": "date",
                "label": "Date of adoption",
                "name": "date_of_adoption",
                "selected": null
              },
              {
                "type": "text",
                "label": "Change of delimitation",
                "name": "delimitation_change",
                "selected": null
              },
              {
                "type": "text",
                "label": "Change of legal status",
                "name": "legal_status_change",
                "selected": null
              },
              {
                "type": "text",
                "label": "Reasons for changes",
                "name": "changes_reasons",
                "selected": null
              }
            ]
          }
        ]
      },

      table_3: {
        table_label: 'Table VII – Implementation of management plans (Annex I to the Protocol)',
        collection_id: 510,
        parent_collection_id: 507,
        articles: []
      },
    }
  },




  tab_4: {
    label: 'Part IV: Endangered and threatened species',
    collection_id: 511,
    parent_collection_id: 5,
    data: {
      question: 'Question 5:  Has the Party implemented measures to protect and conserve endangered and threatened species as indicated in Table VIII?',
      table_1: {
        collection_id: 512,
        parent_collection_id: 511,
        table_label: 'Table VIII - Measures to protect endangered and threatened species',
        articles: [{
            article_title: 'Article 11.2',
            article_items: [{
              description: 'Drawing up of a list of endangered or threatened species of fauna and flora and identification of their distribution in the zones subject to Party\'s jurisdiction',
              collection_id: 5060,
              parent_collection_id: 512,
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
            article_title: 'Article 11.2, Article 12.1',
            article_items: [{
              description: 'Management of species of fauna and flora, listed in Annexes II and III to the Protocol , to ensure their favourable state of conservation',
              collection_id: 5061,
              parent_collection_id: 512,
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
            article_title: 'Article 11.3.a, Article 12.2',
            article_items: [{
              description: 'Controlling and, where appropriate, prohibiting the taking, possession or killing, the commercial trade, the transport and the exhibition for commercial purposes of protected species of fauna, particularly those listed in Annex II to the Protocol',
              collection_id: 5062,
              parent_collection_id: 512,
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
            article_title: 'Article 11.3.b',
            article_items: [{
              description: 'Controlling and where appropriate prohibiting the disturbance of protected wild fauna, particularly during the period of breeding, incubation, hibernation or migration',
              collection_id: 5063,
              parent_collection_id: 512,
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
            article_title: 'Article 11.4',
            article_items: [{
              description: 'Establishment of bilateral or multilateral cooperation (including agreements) to protect and restore the population of migrant species in the area where the Protocol is applied',
              collection_id: 5064,
              parent_collection_id: 512,
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
            article_title: 'Article 11.5, Article 12.2',
            article_items: [{
              description: 'Regulating and where appropriate prohibiting all forms of destruction and disturbance of protected species of flora, particularly those listed in Annex II to the Protocol',
              collection_id: 5065,
              parent_collection_id: 512,
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
            article_title: 'Article 11.6',
            article_items: [{
              description: 'Formulation and adoption of measures and plans concerning ex situ reproduction, particularly in captivity, of protected fauna and the growing of protected flora',
              collection_id: 5066,
              parent_collection_id: 512,
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
            article_title: 'Article 12.6',
            article_items: [{
              description: 'Granting of exceptions, to the prohibitions prescribed for the protection of the species listed in the Annexes to the Protocol for scientific, educational, or management purposes necessary to ensure the survival of the species',
              collection_id: 5067,
              parent_collection_id: 512,
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
            article_title: 'Article 13',
            article_items: [{
              description: 'Taking steps to deal with the deliberate or accidental introduction into the wild of non- indigenous or genetically modified species and prohibiting those that may have harmful impacts on the ecosystems habitats or species',
              collection_id: 5068,
              parent_collection_id: 512,
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
      },

      table_2:{
    "table_label": "Table IX – Measures to protect species, per each species",
    "description": "List of species as per the Annexes to the Protocol (For each species, tick the box that applies)",
    "collection_id": 513,
    "parent_collection_id": 511,
    "articles": [
    {
        "article_title": "Magnoliophyta",
        "collection_id": 6800,
        "parent_collection_id": 513,
        "article_items": [
        {
            "items": [
            {
                "name": "Cymodocea_nodosa_Ucria_Ascherson",
                "type": "checkbox",
                "label": "Cymodocea nodosa (Ucria) Ascherson",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Posidonia_oceanica_Linnaeus_Delile",
                "type": "checkbox",
                "label": "Posidonia oceanica (Linnaeus) Delile",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Zostera_marina_Linnaeus",
                "type": "checkbox",
                "label": "Zostera marina Linnaeus",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Zostera_noltii_Hornemann",
                "type": "checkbox",
                "label": "Zostera noltii Hornemann",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            }]
        }]
    },
    {
        "article_title": "Bryozoa",
        "collection_id": 6800,
        "parent_collection_id": 513,
        "article_items": [
        {
            "items": [
            {
                "name": "Hornera_lichenoides_Linnaeus_1758",
                "type": "checkbox",
                "label": "Hornera lichenoides (Linnaeus, 1758)",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            }]
        }]
    },
    {
        "article_title": "Chlorophyta",
        "collection_id": 6800,
        "parent_collection_id": 513,
        "article_items": [
        {
            "items": [
            {
                "name": "Caulerpa_ollivieri_Dostl",
                "type": "checkbox",
                "label": "Caulerpa ollivieri Dostál",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            }]
        }]
    },
    {
        "article_title": "Cnidaria",
        "collection_id": 6800,
        "parent_collection_id": 513,
        "article_items": [
        {
            "items": [
            {
                "name": "Antipathella_subpinnata_Ellis__Solander_1786",
                "type": "checkbox",
                "label": "Antipathella subpinnata (Ellis & Solander, 1786)",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Antipathes_dichotoma_Pallas_1766",
                "type": "checkbox",
                "label": "Antipathes dichotoma Pallas, 1766",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Antipathes_fragilis_Gravier_1918",
                "type": "checkbox",
                "label": "Antipathes fragilis Gravier, 1918",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Antipathes_sp_plur",
                "type": "checkbox",
                "label": "Antipathes sp. plur.",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Astroides_calycularis_Pallas_1766",
                "type": "checkbox",
                "label": "Astroides calycularis (Pallas, 1766)",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Corallium_rubrum_Linnaeus_1758",
                "type": "checkbox",
                "label": "Corallium rubrum (Linnaeus, 1758)",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Callogorgia_verticillataPallas_1766",
                "type": "checkbox",
                "label": "Callogorgia verticillata(Pallas, 1766)",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Cladocora_caespitosa_Linnaeus_1767",
                "type": "checkbox",
                "label": "Cladocora caespitosa (Linnaeus, 1767)",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Cladocora_debilis_Milne_Edwards__Haime_1849",
                "type": "checkbox",
                "label": "Cladocora debilis Milne Edwards & Haime, 1849",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Ellisella_paraplexauroides_Stiasny_1936",
                "type": "checkbox",
                "label": "Ellisella paraplexauroides (Stiasny, 1936)",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Errina_aspera_Linnaeus_1767",
                "type": "checkbox",
                "label": "Errina aspera (Linnaeus, 1767)",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Lophelia_pertusa_Linnaeus_1758",
                "type": "checkbox",
                "label": "Lophelia pertusa (Linnaeus, 1758)",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Madrepora_oculata_Linnaeus_1758",
                "type": "checkbox",
                "label": "Madrepora oculata Linnaeus, 1758",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Savalia_savaglia_Nardo_1844_synonGerardia_savaglia",
                "type": "checkbox",
                "label": "Savalia savaglia Nardo, 1844 (synon.Gerardia savaglia)",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            }]
        }]
    },
    {
        "article_title": "Crustacea",
        "collection_id": 6800,
        "parent_collection_id": 513,
        "article_items": [
        {
            "items": [
            {
                "name": "Homarus_gammarus_Linnaeus_1758",
                "type": "checkbox",
                "label": "Homarus gammarus (Linnaeus, 1758)",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Maja_squinado_Herbst_1788",
                "type": "checkbox",
                "label": "Maja squinado (Herbst, 1788)",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Ocypode_cursor_Linnaeus_1758",
                "type": "checkbox",
                "label": "Ocypode cursor (Linnaeus, 1758)",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Pachylasma_giganteum_Philippi_1836",
                "type": "checkbox",
                "label": "Pachylasma giganteum (Philippi, 1836)",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Palinurus_elephas_Fabricius_1787",
                "type": "checkbox",
                "label": "Palinurus elephas (Fabricius, 1787)",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Scyllarides_latus_Latreille_1803",
                "type": "checkbox",
                "label": "Scyllarides latus (Latreille, 1803)",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Scyllarus_arctus_Linnaeus_1758",
                "type": "checkbox",
                "label": "Scyllarus arctus (Linnaeus, 1758)",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Scyllarus_pygmaeus_Bate_1888",
                "type": "checkbox",
                "label": "Scyllarus pygmaeus (Bate, 1888)",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            }]
        }]
    },
    {
        "article_title": "Echinodermata",
        "collection_id": 6800,
        "parent_collection_id": 513,
        "article_items": [
        {
            "items": [
            {
                "name": "Paracentrotus_lividus_Lamarck_1816",
                "type": "checkbox",
                "label": "Paracentrotus lividus (Lamarck, 1816)",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Asterina_pancerii_Gasco_1870",
                "type": "checkbox",
                "label": "Asterina pancerii (Gasco, 1870)",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Centrostephanus_longispinus_Philippi_1845",
                "type": "checkbox",
                "label": "Centrostephanus longispinus (Philippi, 1845)",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Ophidiaster_ophidianus_Lamarck_1816",
                "type": "checkbox",
                "label": "Ophidiaster ophidianus (Lamarck, 1816)",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            }]
        }]
    },
    {
        "article_title": "Heterokontophyta",
        "collection_id": 6800,
        "parent_collection_id": 513,
        "article_items": [
        {
            "items": [
            {
                "name": "Cystoseira_genus_except_Cystoseira_compressa",
                "type": "checkbox",
                "label": "Cystoseira genus (except Cystoseira compressa)",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Kallymenia_spathulata_J_Agardh_PG_Parkinson",
                "type": "checkbox",
                "label": "Kallymenia spathulata (J. Agardh) P.G. Parkinson",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Laminaria_rodriguezii_Bornet_Sargassum_acinarium_Linnaeus_Setchell",
                "type": "checkbox",
                "label": "Laminaria rodriguezii Bornet Sargassum acinarium (Linnaeus) Setchell",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Sargassum_flavifolium_Ktzing",
                "type": "checkbox",
                "label": "Sargassum flavifolium Kützing",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Sargassum_hornschuchii_C_Agardh",
                "type": "checkbox",
                "label": "Sargassum hornschuchii C. Agardh",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Sargassum_trichocarpum_J_Agardh",
                "type": "checkbox",
                "label": "Sargassum trichocarpum J. Agardh",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            }]
        }]
    },
    {
        "article_title": "Rhodophyta",
        "collection_id": 6800,
        "parent_collection_id": 513,
        "article_items": [
        {
            "items": [
            {
                "name": "Fucus_virsoides_J_Agardh",
                "type": "checkbox",
                "label": "Fucus virsoides J. Agardh",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Gymnogongrus_crenulatus_Turner_J_Agardh",
                "type": "checkbox",
                "label": "Gymnogongrus crenulatus (Turner) J. Agardh",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Lithophyllum_byssoides_Lamarck_Foslie_Synon_Lithophyllum_lichenoides",
                "type": "checkbox",
                "label": "Lithophyllum byssoides (Lamarck) Foslie (Synon. Lithophyllum lichenoides)",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Ptilophora_mediterranea_H_Huv_RE_Norris",
                "type": "checkbox",
                "label": "Ptilophora mediterranea (H. Huvé) R.E. Norris",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Schimmelmannia_schousboei_J_Agardh_J_Agardh",
                "type": "checkbox",
                "label": "Schimmelmannia schousboei (J. Agardh) J. Agardh",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Sphaerococcus_rhizophylloides_JJ_Rodrguez",
                "type": "checkbox",
                "label": "Sphaerococcus rhizophylloides J.J. Rodríguez",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Tenarea_tortuosa_Esper_Lemoine",
                "type": "checkbox",
                "label": "Tenarea tortuosa (Esper) Lemoine",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Titanoderma_ramosissimum_Heydrich_Bressan__Cabioch_Synon_Goniolithon_byssoides",
                "type": "checkbox",
                "label": "Titanoderma ramosissimum (Heydrich) Bressan & Cabioch (Synon. Goniolithon byssoides)",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Titanoderma_trochanter_Bory_Benhissoune_et_al",
                "type": "checkbox",
                "label": "Titanoderma trochanter (Bory) Benhissoune et al.",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            }]
        }]
    },
    {
        "article_title": "Porifera",
        "collection_id": 6800,
        "parent_collection_id": 513,
        "article_items": [
        {
            "items": [
            {
                "name": "Aplysina_sp_plur",
                "type": "checkbox",
                "label": "Aplysina sp. plur.",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Asbestopluma_hypogea_Vacelet__BouryEsnault_1995",
                "type": "checkbox",
                "label": "Asbestopluma hypogea Vacelet & Boury-Esnault, 1995",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Axinella_cannabina_Esper_1794",
                "type": "checkbox",
                "label": "Axinella cannabina (Esper, 1794)",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Axinella_polypoides_Schmidt_1862",
                "type": "checkbox",
                "label": "Axinella polypoides Schmidt, 1862",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Geodia_hydronium_Jameson_1811",
                "type": "checkbox",
                "label": "Geodia hydronium (Jameson, 1811)",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Petrobiona_massiliana_Vacelet__Lvi_1958",
                "type": "checkbox",
                "label": "Petrobiona massiliana (Vacelet & Lévi, 1958)",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Sarcotragus_foetidus_Schmidt_1862_synon_Ircina_foetida",
                "type": "checkbox",
                "label": "Sarcotragus foetidus Schmidt, 1862* (synon. Ircina foetida)",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Sarcotragus_pipetta_Schmidt_1868_synon_Ircinia_pipetta",
                "type": "checkbox",
                "label": "Sarcotragus pipetta (Schmidt, 1868)* (synon. Ircinia pipetta)",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Tethya_sp_plur",
                "type": "checkbox",
                "label": "Tethya sp. plur.",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            }]
        }]
    },
    {
        "article_title": "Pisces",
        "collection_id": 6800,
        "parent_collection_id": 513,
        "article_items": [
        {
            "items": [
            {
                "name": "Acipenser_naccarii_Bonaparte_1836",
                "type": "checkbox",
                "label": "Acipenser naccarii (Bonaparte, 1836)",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Acipenser_sturio_Linnaeus_1758",
                "type": "checkbox",
                "label": "Acipenser sturio (Linnaeus, 1758)",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Alopias_vulpinus_Bonnaterre_1788",
                "type": "checkbox",
                "label": "Alopias vulpinus (Bonnaterre, 1788)",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Alosa_alosa_Linnaeus_1758",
                "type": "checkbox",
                "label": "Alosa alosa (Linnaeus, 1758)",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Alosa_fallax_Lacpde_1803",
                "type": "checkbox",
                "label": "Alosa fallax (Lacépède, 1803)",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Anguilla_anguilla_Linnaeus_1758",
                "type": "checkbox",
                "label": "Anguilla anguilla (Linnaeus, 1758)",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Aphanius_fasciatus_Valenciennes_1821",
                "type": "checkbox",
                "label": "Aphanius fasciatus (Valenciennes, 1821)",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Aphanius_iberus_Valenciennes_1846",
                "type": "checkbox",
                "label": "Aphanius iberus (Valenciennes, 1846)",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Carcharias_taurus_Rafinesque_1810",
                "type": "checkbox",
                "label": "Carcharias taurus (Rafinesque, 1810)",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Carcharodon_carcharias_Linnaeus_1758",
                "type": "checkbox",
                "label": "Carcharodon carcharias (Linnaeus, 1758)",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Carcharhinus_plumbeus_Nardo_1827",
                "type": "checkbox",
                "label": "Carcharhinus plumbeus (Nardo, 1827)",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Centrophorus_granulosus_Bloch__Schneider_1801",
                "type": "checkbox",
                "label": "Centrophorus granulosus (Bloch & Schneider, 1801)",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Cetorhinus_maximus_Gunnerus_1765",
                "type": "checkbox",
                "label": "Cetorhinus maximus (Gunnerus, 1765)",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Dipturus_batis_Linnaeus_1758",
                "type": "checkbox",
                "label": "Dipturus batis (Linnaeus, 1758)",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Epinephelus_marginatus_Lowe_1834",
                "type": "checkbox",
                "label": "Epinephelus marginatus (Lowe, 1834)",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Galeorhinus_galeus_Linnaeus_1758",
                "type": "checkbox",
                "label": "Galeorhinus galeus (Linnaeus, 1758)",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Gymnura_altavela_Linnaeus_1758",
                "type": "checkbox",
                "label": "Gymnura altavela (Linnaeus, 1758)",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Heptranchias_perlo_Bonnaterre_1788",
                "type": "checkbox",
                "label": "Heptranchias perlo (Bonnaterre, 1788)",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Hippocampus_guttulatus_Cuvier_1829_synon_Hippocampus_ramulosus",
                "type": "checkbox",
                "label": "Hippocampus guttulatus (Cuvier, 1829) (synon. Hippocampus ramulosus)",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Hippocampus_hippocampus_Linnaeus_1758",
                "type": "checkbox",
                "label": "Hippocampus hippocampus (Linnaeus, 1758)",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Huso_huso_Linnaeus_1758",
                "type": "checkbox",
                "label": "Huso huso (Linnaeus, 1758)",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Isurus_oxyrinchus_Rafinesque_1810",
                "type": "checkbox",
                "label": "Isurus oxyrinchus (Rafinesque, 1810)",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Lamna_nasus_Bonnaterre_1788",
                "type": "checkbox",
                "label": "Lamna nasus (Bonnaterre, 1788)",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Lampetra_fluviatilis_Linnaeus_1758",
                "type": "checkbox",
                "label": "Lampetra fluviatilis (Linnaeus, 1758)",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Lethenteron_zanandreai_Vladykov_1955",
                "type": "checkbox",
                "label": "Lethenteron zanandreai (Vladykov, 1955)",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Leucoraja_circularis_Couch_1838",
                "type": "checkbox",
                "label": "Leucoraja circularis (Couch, 1838)",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Leucoraja_melitensis_Clark_1926",
                "type": "checkbox",
                "label": "Leucoraja melitensis (Clark, 1926)",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Mustelus_asterias_Cloquet_1821",
                "type": "checkbox",
                "label": "Mustelus asterias (Cloquet, 1821)",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Mustelus_mustelus_Linnaeus_1758",
                "type": "checkbox",
                "label": "Mustelus mustelus (Linnaeus, 1758)",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Mustelus_punctulatus_Risso_1826",
                "type": "checkbox",
                "label": "Mustelus punctulatus (Risso, 1826)",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Mobula_mobular_Bonnaterre_1788",
                "type": "checkbox",
                "label": "Mobula mobular (Bonnaterre, 1788)",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Odontaspis_ferox_Risso_1810",
                "type": "checkbox",
                "label": "Odontaspis ferox (Risso, 1810)",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Oxynotus_centrina_Linnaeus_1758",
                "type": "checkbox",
                "label": "Oxynotus centrina (Linnaeus, 1758)",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Petromyzon_marinus_Linnaeus_1758",
                "type": "checkbox",
                "label": "Petromyzon marinus (Linnaeus, 1758)",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Prionace_glauca_Linnaeus_1758",
                "type": "checkbox",
                "label": "Prionace glauca (Linnaeus, 1758)",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Pomatoschistus_canestrini_Ninni_1883",
                "type": "checkbox",
                "label": "Pomatoschistus canestrini (Ninni, 1883)",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Pomatoschistus_tortonesei_Miller_1969",
                "type": "checkbox",
                "label": "Pomatoschistus tortonesei (Miller, 1969)",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Pristis_pectinata_Latham_1794",
                "type": "checkbox",
                "label": "Pristis pectinata (Latham, 1794)",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Pristis_pristis_Linnaeus_1758",
                "type": "checkbox",
                "label": "Pristis pristis (Linnaeus, 1758)",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Rhinobatos_cemiculus_E_Geoffroy_SaintHilaire_1817",
                "type": "checkbox",
                "label": "Rhinobatos cemiculus (E. Geoffroy Saint-Hilaire, 1817)",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Rhinobatos_rhinobatos_Linnaeus_1758",
                "type": "checkbox",
                "label": "Rhinobatos rhinobatos (Linnaeus, 1758)",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Rostroraja_alba_Lacpde_1803",
                "type": "checkbox",
                "label": "Rostroraja alba (Lacépède, 1803)",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Sphyrna_lewini_Griffith__Smith_1834",
                "type": "checkbox",
                "label": "Sphyrna lewini (Griffith & Smith, 1834)",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Sphyrna_mokarran_Rppell_1837",
                "type": "checkbox",
                "label": "Sphyrna mokarran (Rüppell, 1837)",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Sphyrna_zygaena_Linnaeus_1758",
                "type": "checkbox",
                "label": "Sphyrna zygaena (Linnaeus, 1758)",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Squatina_aculeata_Dumeril_in_Cuvier_1817",
                "type": "checkbox",
                "label": "Squatina aculeata (Dumeril, in Cuvier, 1817)",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Squatina_oculata_Bonaparte_1840",
                "type": "checkbox",
                "label": "Squatina oculata (Bonaparte, 1840)",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Squatina_squatina_Linnaeus_1758",
                "type": "checkbox",
                "label": "Squatina squatina (Linnaeus, 1758)",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Sciaena_umbra_Linnaeus_1758",
                "type": "checkbox",
                "label": "Sciaena umbra (Linnaeus, 1758)",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Squalus_acanthias_Linnaeus_1758",
                "type": "checkbox",
                "label": "Squalus acanthias (Linnaeus, 1758)",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Valencia_hispanica_Valenciennes_1846",
                "type": "checkbox",
                "label": "Valencia hispanica (Valenciennes, 1846)",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Valencia_letourneuxi_Sauvage_1880",
                "type": "checkbox",
                "label": "Valencia letourneuxi (Sauvage, 1880)",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Thunnus_thynnus_Linnaeus_1758",
                "type": "checkbox",
                "label": "Thunnus thynnus (Linnaeus, 1758)",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Umbrina_cirrosa_Linnaeus_1758",
                "type": "checkbox",
                "label": "Umbrina cirrosa (Linnaeus, 1758)",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Xiphias_gladius_Linnaeus_1758",
                "type": "checkbox",
                "label": "Xiphias gladius (Linnaeus, 1758)",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            }]
        }]
    },
    {
        "article_title": "Reptiles",
        "collection_id": 6800,
        "parent_collection_id": 513,
        "article_items": [
        {
            "items": [
            {
                "name": "Caretta_caretta_Linnaeus_1758",
                "type": "checkbox",
                "label": "Caretta caretta (Linnaeus, 1758)",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Chelonia_mydas_Linnaeus_1758",
                "type": "checkbox",
                "label": "Chelonia mydas (Linnaeus, 1758)",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Dermochelys_coriacea_Vandelli_1761",
                "type": "checkbox",
                "label": "Dermochelys coriacea (Vandelli, 1761)",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Eretmochelys_imbricata_Linnaeus_1766",
                "type": "checkbox",
                "label": "Eretmochelys imbricata (Linnaeus, 1766)",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Lepidochelys_kempii_Garman_1880",
                "type": "checkbox",
                "label": "Lepidochelys kempii (Garman, 1880)",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Trionyx_triunguis_Forskl_1775",
                "type": "checkbox",
                "label": "Trionyx triunguis (Forskål, 1775)",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            }]
        }]
    },
    {
        "article_title": "Aves",
        "collection_id": 6800,
        "parent_collection_id": 513,
        "article_items": [
        {
            "items": [
            {
                "name": "Calonectris_diomedea_Scopoli_1769",
                "type": "checkbox",
                "label": "Calonectris diomedea (Scopoli, 1769)",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Ceryle_rudis_Linnaeus_1758",
                "type": "checkbox",
                "label": "Ceryle rudis (Linnaeus, 1758)",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Charadrius_alexandrinus_Linnaeus_1758",
                "type": "checkbox",
                "label": "Charadrius alexandrinus (Linnaeus, 1758)",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Charadrius_leschenaultii_columbinus_Lesson_1826",
                "type": "checkbox",
                "label": "Charadrius leschenaultii columbinus (Lesson, 1826)",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Falco_eleonorae_Gn_1834",
                "type": "checkbox",
                "label": "Falco eleonorae (Géné, 1834)",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Halcyon_smyrnensis_Linnaeus_1758",
                "type": "checkbox",
                "label": "Halcyon smyrnensis (Linnaeus, 1758)",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Hydrobates_pelagicus_Linnaeus_1758",
                "type": "checkbox",
                "label": "Hydrobates pelagicus (Linnaeus, 1758)",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Larus_armenicus_Buturlin_1934",
                "type": "checkbox",
                "label": "Larus armenicus (Buturlin, 1934)",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Larus_audouinii_Payraudeau_1826",
                "type": "checkbox",
                "label": "Larus audouinii (Payraudeau, 1826)",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Larus_genei_Breme_1839",
                "type": "checkbox",
                "label": "Larus genei (Breme, 1839)",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Larus_melanocephalus_Temminck_1820",
                "type": "checkbox",
                "label": "Larus melanocephalus (Temminck, 1820)",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Numenius_tenuirostris_Viellot_1817",
                "type": "checkbox",
                "label": "Numenius tenuirostris (Viellot, 1817)",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Pandion_haliaetus_Linnaeus_1758",
                "type": "checkbox",
                "label": "Pandion haliaetus (Linnaeus, 1758)",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Pelecanus_crispus_Bruch_1832",
                "type": "checkbox",
                "label": "Pelecanus crispus (Bruch, 1832)",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Pelecanus_onocrotalus_Linnaeus_1758",
                "type": "checkbox",
                "label": "Pelecanus onocrotalus (Linnaeus, 1758)",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Phalacrocorax_aristotelis_Linnaeus_1761",
                "type": "checkbox",
                "label": "Phalacrocorax aristotelis (Linnaeus, 1761)",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Phalacrocorax_pygmeus_Pallas_1773",
                "type": "checkbox",
                "label": "Phalacrocorax pygmeus (Pallas, 1773)",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Phoenicopterus_ruber_Linnaeus_1758",
                "type": "checkbox",
                "label": "Phoenicopterus ruber (Linnaeus, 1758)",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Puffinus_mauretanicus_Lowe_PR_1921",
                "type": "checkbox",
                "label": "Puffinus mauretanicus (Lowe, PR, 1921)",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Puffinus_yelkouan_Brnnich_1764",
                "type": "checkbox",
                "label": "Puffinus yelkouan (Brünnich, 1764)",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Sterna_albifrons_Pallas_1764",
                "type": "checkbox",
                "label": "Sterna albifrons (Pallas, 1764)",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Sterna_bengalensis_Lesson_1831",
                "type": "checkbox",
                "label": "Sterna bengalensis (Lesson, 1831)",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Sterna_caspia_Pallas_1770",
                "type": "checkbox",
                "label": "Sterna caspia (Pallas, 1770)",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Sterna_nilotica_Gmelin_JF_1789",
                "type": "checkbox",
                "label": "Sterna nilotica (Gmelin, JF, 1789)",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Sterna_sandvicensis_Latham_1878",
                "type": "checkbox",
                "label": "Sterna sandvicensis (Latham, 1878)",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            }]
        }]
    },
    {
        "article_title": "Mammalia",
        "collection_id": 6800,
        "parent_collection_id": 513,
        "article_items": [
        {
            "items": [
            {
                "name": "Balaenoptera_acutorostrata_Lacpde_1804",
                "type": "checkbox",
                "label": "Balaenoptera acutorostrata (Lacépède, 1804)",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Balaenoptera_borealis_Lesson_1828",
                "type": "checkbox",
                "label": "Balaenoptera borealis (Lesson, 1828)",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Balaenoptera_physalus_Linnaeus_1758",
                "type": "checkbox",
                "label": "Balaenoptera physalus (Linnaeus, 1758)",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Delphinus_delphis_Linnaeus_1758",
                "type": "checkbox",
                "label": "Delphinus delphis (Linnaeus, 1758)",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Eubalaena_glacialis_Mller_1776",
                "type": "checkbox",
                "label": "Eubalaena glacialis (Müller, 1776)",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Globicephala_melas_Trail_1809",
                "type": "checkbox",
                "label": "Globicephala melas (Trail, 1809)",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Grampus_griseus_Cuvier_G_1812",
                "type": "checkbox",
                "label": "Grampus griseus (Cuvier G., 1812)",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Kogia_simus_Owen_1866",
                "type": "checkbox",
                "label": "Kogia simus (Owen, 1866)",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Megaptera_novaeangliae_Borowski_1781",
                "type": "checkbox",
                "label": "Megaptera novaeangliae (Borowski, 1781)",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Mesoplodon_densirostris_de_Blainville_1817",
                "type": "checkbox",
                "label": "Mesoplodon densirostris (de Blainville, 1817)",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Monachus_monachus_Hermann_1779",
                "type": "checkbox",
                "label": "Monachus monachus (Hermann, 1779)",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Orcinus_orca_Linnaeus_1758",
                "type": "checkbox",
                "label": "Orcinus orca (Linnaeus, 1758)",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Phocoena_phocoena_Linnaeus_1758",
                "type": "checkbox",
                "label": "Phocoena phocoena (Linnaeus, 1758)",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Physeter_macrocephalus_Linnaeus_1758",
                "type": "checkbox",
                "label": "Physeter macrocephalus (Linnaeus, 1758)",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Pseudorca_crassidens_Owen_1846",
                "type": "checkbox",
                "label": "Pseudorca crassidens (Owen, 1846)",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Stenella_coeruleoalba_Meyen_1833",
                "type": "checkbox",
                "label": "Stenella coeruleoalba (Meyen, 1833)",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Steno_bredanensis_Cuvier_in_Lesson_1828",
                "type": "checkbox",
                "label": "Steno bredanensis (Cuvier in Lesson, 1828)",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Tursiops_truncatus_Montagu_1821",
                "type": "checkbox",
                "label": "Tursiops truncatus (Montagu, 1821)",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Ziphius_cavirostris_Cuvier_G_1832",
                "type": "checkbox",
                "label": "Ziphius cavirostris (Cuvier G., 1832)",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            }]
        }]
    },
    {
        "article_title": "Mollusca",
        "collection_id": 6800,
        "parent_collection_id": 513,
        "article_items": [
        {
            "items": [
            {
                "name": "Charonia_lampas_Linnaeus_1758__Ch_Rubicunda__Ch_Nodifera",
                "type": "checkbox",
                "label": "Charonia lampas (Linnaeus, 1758) (= Ch. Rubicunda = Ch. Nodifera)",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Charonia_tritonis_variegata_Lamarck_1816__Ch_Seguenziae",
                "type": "checkbox",
                "label": "Charonia tritonis variegata (Lamarck, 1816) (= Ch. Seguenziae)",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Dendropoma_petraeum_Monterosato_1884",
                "type": "checkbox",
                "label": "Dendropoma petraeum (Monterosato, 1884)",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Erosaria_spurca_Linnaeus_1758",
                "type": "checkbox",
                "label": "Erosaria spurca (Linnaeus, 1758)",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Gibbula_nivosa_Adams_1851",
                "type": "checkbox",
                "label": "Gibbula nivosa (Adams, 1851)",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Lithophaga_lithophaga_Linnaeus_1758",
                "type": "checkbox",
                "label": "Lithophaga lithophaga (Linnaeus, 1758)",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Luria_lurida_Linnaeus_1758__Cypraea_lurida",
                "type": "checkbox",
                "label": "Luria lurida (Linnaeus, 1758) (= Cypraea lurida)",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Mitra_zonata_Marryat_1818",
                "type": "checkbox",
                "label": "Mitra zonata (Marryat, 1818)",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Patella_ferruginea_Gmelin_1791",
                "type": "checkbox",
                "label": "Patella ferruginea (Gmelin, 1791)",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Patella_nigra_Da_Costa_1771",
                "type": "checkbox",
                "label": "Patella nigra (Da Costa, 1771)",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Pholas_dactylus_Linnaeus_1758",
                "type": "checkbox",
                "label": "Pholas dactylus (Linnaeus, 1758)",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Pinna_nobilis_Linnaeus_1758",
                "type": "checkbox",
                "label": "Pinna nobilis (Linnaeus, 1758)",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Pinna_rudis__P_pernula_Linnaeus_1758",
                "type": "checkbox",
                "label": "Pinna rudis (= P. pernula) (Linnaeus, 1758)",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Ranella_olearia_Linnaeus_1758",
                "type": "checkbox",
                "label": "Ranella olearia (Linnaeus, 1758)",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Schilderia_achatidea_Gray_in_GB_Sowerby_II_1837",
                "type": "checkbox",
                "label": "Schilderia achatidea (Gray in G.B. Sowerby II, 1837)",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Tonna_galea_Linnaeus_1758",
                "type": "checkbox",
                "label": "Tonna galea (Linnaeus, 1758)",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            },
            {
                "name": "Zonaria_pyrum_Gmelin_1791",
                "type": "checkbox",
                "label": "Zonaria pyrum (Gmelin, 1791)",
                "info": "Please tick all that apply",
                "selected": null,
                "options": [
                {
                    "text": "Party‘s list of endangered/threatened animals and plants",
                    "value": 1
                },
                {
                    "text": "Sub-regional cooperation for migrants species",
                    "value": 2
                },
                {
                    "text": "Ex situ protection measures",
                    "value": 3
                },
                {
                    "text": "Exemption granted",
                    "value": 4
                },
                {
                    "text": "Introduction of species or genetically modified species",
                    "value": 5
                }],
                "comments": ""
            }]
        }]
    }]
},
    }
  },
  tab_5: {
    label: 'Part V: Monitoring',
    collection_id: 514,
    parent_collection_id: 5,
    data: {
      question: '',
      table_label: 'Table X: Monitoring',
      collection_id: 515,
      parent_collection_id: 514,
      articles: [{
        article_title: '1. Implementation of quality status monitoring and Integrated Monitoring and Assessment (IMAP)',
        article_items: [{
          description: '',
          collection_id: 5069,
          parent_collection_id: 515,
          items: [{
              type: 'changes',
              label: 'Changes in the information provided in the previous report',
              info: 'Please tick the box that applies',
              selected: false,
              options: [
                { text: 'Yes', value: true },
                { text: 'No', value: false }
              ],
              options_description: ['If your answer is “Yes”, please update accordingly', 'If your answer is “No”, please go to next question'],
              comments: ''
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
        article_title: '2. Ecological Objective-EO 1 Biodiversity:',
        article_items: [{
          description: '',
          collection_id: 5070,
          parent_collection_id: 515,
          items: [{
              type: 'changes',
              label: 'Changes in the information provided in the previous report',
              info: 'Please tick the box that applies',
              selected: false,
              options: [
                { text: 'Yes', value: true },
                { text: 'No', value: false }
              ],
              options_description: ['If your answer is “Yes”, please update accordingly', 'If your answer is “No”, please go to next question'],
              comments: ''
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
        article_title: '3. Ecological Objective-EO 2 Non- indigenous species',
        article_items: [{
          description: '',
          collection_id: 5071,
          parent_collection_id: 515,
          items: [{
              type: 'changes',
              label: 'Changes in the information provided in the previous report',
              info: 'Please tick the box that applies',
              selected: false,
              options: [
                { text: 'Yes', value: true },
                { text: 'No', value: false }
              ],
              options_description: ['If your answer is “Yes”, please update accordingly', 'If your answer is “No”, please go to next question'],
              comments: ''
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
        article_title: '4.Ecological Objective -EO 3 Harvest of commercially exploited fish and shellfish',
        article_items: [{
          description: '',
          collection_id: 5072,
          parent_collection_id: 515,
          items: [{
              type: 'changes',
              label: 'Changes in the information provided in the previous report',
              info: 'Please tick the box that applies',
              selected: false,
              options: [
                { text: 'Yes', value: true },
                { text: 'No', value: false }
              ],
              options_description: ['If your answer is “Yes”, please update accordingly', 'If your answer is “No”, please go to next question'],
              comments: ''
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
        article_title: '5.Ecological Objective EO 6 Sea-floor integrity',
        article_items: [{
          description: '',
          collection_id: 5073,
          parent_collection_id: 515,
          items: [{
              type: 'changes',
              label: 'Changes in the information provided in the previous report',
              info: 'Please tick the box that applies',
              selected: false,
              options: [
                { text: 'Yes', value: true },
                { text: 'No', value: false }
              ],
              options_description: ['If your answer is “Yes”, please update accordingly', 'If your answer is “No”, please go to next question'],
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
      }]
    }
  },



  tab_6: {
    label: 'Part VI: Enforcements measures',
    collection_id: 516,
    parent_collection_id: 5,
    data: {
      question: 'Please insert the data or tick the appropriate cell or describe the enforcement measures taken',
      table_label: 'Table XI: Enforcements measures',
      collection_id: 517,
      parent_collection_id: 516,
      articles: [{
          article_title: 'Article 6.g: Prohibition and regulation of all activities involving taking of species (i.e. fishing, hunting, taking of animals and harvesting of plants and their destruction, as well as trade in animals, parts of animals, plants and parts of plants) which originate in specially protected areas',
          collection_id: 5074,
          parent_collection_id: 517,
          article_items: [{
            label: 'Number of inspections',
            type: 'number',
            name: 'inspections',
            selected: '',
          }, {
            label: 'Number of non-compliance cases',
            type: 'number',
            name: 'non_compliance',
            selected: '',
          }, {
            label: 'Number of fines issued',
            type: 'number',
            name: 'total_fines',
            selected: '',
          }, {
            label: 'Total amount of issued fines',
            type: 'number',
            name: 'total_amount',
            selected: '',
          }, {
            label: 'Number of other enforcement measures',
            type: 'number',
            name: 'enforcement',
            selected: '',
          }, {
            label: 'Remarks/Comments',
            type: 'textarea',
            name: 'remarks',
            selected: '',
          }]
        }, {
          article_title: 'Article11.3.a: Controlling and, where appropriate, prohibiting the taking, possession or killing, the commercial trade, the transport and the exhibition for commercial purposes of protected species of fauna, particularly those listed in Annex II to the Protocol ',
          collection_id: 5075,
          parent_collection_id: 517,
          article_items: [{
            label: 'Number of inspections',
            type: 'number',
            name: 'inspections',
            selected: '',
          }, {
            label: 'Number of non-compliance cases',
            type: 'number',
            name: 'non_compliance',
            selected: '',
          }, {
            label: 'Number of fines issued',
            type: 'number',
            name: 'total_fines',
            selected: '',
          }, {
            label: 'Total amount of issued fines',
            type: 'number',
            name: 'total_amount',
            selected: '',
          }, {
            label: 'Number of other enforcement measures',
            type: 'number',
            name: 'enforcement',
            selected: '',
          }, {
            label: 'Remarks/Comments',
            type: 'textarea',
            name: 'remarks',
            selected: '',
          }]
        },
        {
          article_title: 'Article 11.3.b Controlling and where appropriate prohibiting the disturbance of protected wild fauna, particularly during the period of breeding, incubation, hibernation or migration ',
          collection_id: 5076,
          parent_collection_id: 517,
          article_items: [{
            label: 'Number of inspections',
            type: 'number',
            name: 'inspections',
            selected: '',
          }, {
            label: 'Number of non-compliance cases',
            type: 'number',
            name: 'non_compliance',
            selected: '',
          }, {
            label: 'Number of fines issued',
            type: 'number',
            name: 'total_fines',
            selected: '',
          }, {
            label: 'Total amount of issued fines',
            type: 'number',
            name: 'total_amount',
            selected: '',
          }, {
            label: 'Number of other enforcement measures',
            type: 'number',
            name: 'enforcement',
            selected: '',
          }, {
            label: 'Remarks/Comments',
            type: 'textarea',
            name: 'remarks',
            selected: '',
          }]
        },
        {
          article_title: 'Article11.5 Regulating and where appropriate prohibiting all forms of destruction and disturbance of protected species of flora, particularly those listed in Annex II to the Protocol ',
          collection_id: 5077,
          parent_collection_id: 517,
          article_items: [{
            label: 'Number of inspections',
            type: 'number',
            name: 'inspections',
            selected: '',
          }, {
            label: 'Number of non-compliance cases',
            type: 'number',
            name: 'non_compliance',
            selected: '',
          }, {
            label: 'Number of fines issued',
            type: 'number',
            name: 'total_fines',
            selected: '',
          }, {
            label: 'Total amount of issued fines',
            type: 'number',
            name: 'total_amount',
            selected: '',
          }, {
            label: 'Number of other enforcement measures',
            type: 'number',
            name: 'enforcement',
            selected: '',
          }, {
            label: 'Remarks/Comments',
            type: 'textarea',
            name: 'remarks',
            selected: '',
          }]
        }
      ]
    }
  },


  tab_7: {
    label: 'PART VII: Implementation of regional actions plans (RAPs)',
    collection_id: 518,
    parent_collection_id: 5,
    data: {
      question: '',
      table_label: 'Table XII: Implementation of RAPs',
      collection_id: 519,
      parent_collection_id: 518,
      articles: [{
        article_title: 'RAP for the conservation of Cartilaginous Fishes (Chondrichthyans) (COP Decision IG 21/4)',
        article_items: [{
          description: 'Formalize/reinforce synchronous submission of catch, bycatch and discard data to both scientific and management bodies, and annually to the General Fisheries Commission for the Mediterranean (GFCM)-Timeline: every year from 2014 to 2019',
          collection_id: 5078,
          parent_collection_id: 519,
          items: [{
              type: 'changes',
              label: 'Changes in the information provided in the previous report',
              info: 'Please tick the box that applies',
              selected: false,
              options: [
                { text: 'Yes', value: true },
                { text: 'No', value: false }
              ],
              options_description: ['If your answer is “Yes”, please update accordingly', 'If your answer is “No”, please go to next question'],
            },
            {
              type: 'status',
              label: 'Status of implementation',
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
            },

          ]
        }, {
          description: 'Establish strict legal protection for species listed in Annex II and GFCM Recommendation through national laws and regulations – Timeline: as soon as possible',
          collection_id: 5079,
          parent_collection_id: 519,
          items: [{
              type: 'changes',
              label: 'Changes in the information provided in the previous report',
              info: 'Please tick the box that applies',
              selected: false,
              options: [
                { text: 'Yes', value: true },
                { text: 'No', value: false }
              ],
              options_description: ['If your answer is “Yes”, please update accordingly', 'If your answer is “No”, please go to next question'],
              comments: ''
            },
            {
              type: 'status',
              label: 'Status of implementation',
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
            },

          ]
        }, {
          description: 'Support GFCM finning prohibition by enacting national regulations and monitoring their implementation and enforcement-Timeline: as soon as possible',
          collection_id: 5080,
          parent_collection_id: 519,
          items: [{
              type: 'changes',
              label: 'Changes in the information provided in the previous report',
              info: 'Please tick the box that applies',
              selected: false,
              options: [
                { text: 'Yes', value: true },
                { text: 'No', value: false }
              ],
              options_description: ['If your answer is “Yes”, please update accordingly', 'If your answer is “No”, please go to next question'],
              comments: ''
            },
            {
              type: 'status',
              label: 'Status of implementation',
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
            },

          ]
        }, {
          description: 'Complete and disseminate inventories of critical habitats (mating, spawning and nursery grounds)-Timeline: 2015',
          collection_id: 5081,
          parent_collection_id: 519,
          items: [{
              type: 'changes',
              label: 'Changes in the information provided in the previous report',
              info: 'Please tick the box that applies',
              selected: false,
              options: [
                { text: 'Yes', value: true },
                { text: 'No', value: false }
              ],
              options_description: ['If your answer is “Yes”, please update accordingly', 'If your answer is “No”, please go to next question'],
            },
            {
              type: 'status',
              label: 'Status of implementation',
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
            },

          ]
        }, {
          description: 'Increase compliance with obligations to collect and submit species-specific commercial catch and bycatch data to FAO and GFCM, including through increased use of observers-Timeline: from 2014 to 2015',
          collection_id: 5082,
          parent_collection_id: 519,
          items: [{
              type: 'changes',
              label: 'Changes in the information provided in the previous report',
              info: 'Please tick the box that applies',
              selected: false,
              options: [
                { text: 'Yes', value: true },
                { text: 'No', value: false }
              ],
              options_description: ['If your answer is “Yes”, please update accordingly', 'If your answer is “No”, please go to next question'],
              comments: ''
            },
            {
              type: 'status',
              label: 'Status of implementation',
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
            },

          ]
        }, {
          description: 'Comply with obligations under GFCM Recommendations to collect and submit data on pelagic shark catches._Timeline: as soon as possible',
          collection_id: 5083,
          parent_collection_id: 519,
          items: [{
              type: 'changes',
              label: 'Changes in the information provided in the previous report',
              info: 'Please tick the box that applies',
              selected: false,
              options: [
                { text: 'Yes', value: true },
                { text: 'No', value: false }
              ],
              options_description: ['If your answer is “Yes”, please update accordingly', 'If your answer is “No”, please go to next question'],
              comments: ''
            },
            {
              type: 'status',
              label: 'Status of implementation',
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
            },

          ]
        }, {
          description: 'Improve programmes for the collection and reporting of data from coastal fisheries-Timeline: as soon as possible',
          collection_id: 5084,
          parent_collection_id: 519,
          items: [{
              type: 'changes',
              label: 'Changes in the information provided in the previous report',
              info: 'Please tick the box that applies',
              selected: false,
              options: [
                { text: 'Yes', value: true },
                { text: 'No', value: false }
              ],
              options_description: ['If your answer is “Yes”, please update accordingly', 'If your answer is “No”, please go to next question'],
              comments: ''
            },
            {
              type: 'status',
              label: 'Status of implementation',
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
            },

          ]
        }, {
          description: 'Monitor Critically Endangered, Endangered and endemic species – Timeline: from 2014 to 2019',
          collection_id: 5085,
          parent_collection_id: 519,
          items: [{
              type: 'changes',
              label: 'Changes in the information provided in the previous report',
              info: 'Please tick the box that applies',
              selected: false,
              options: [
                { text: 'Yes', value: true },
                { text: 'No', value: false }
              ],
              options_description: ['If your answer is “Yes”, please update accordingly', 'If your answer is “No”, please go to next question'],
              comments: ''
            },
            {
              type: 'status',
              label: 'Status of implementation',
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
            },

          ]
        }, {
          description: 'Submit to the GFCM annual Shark Assessment Reports describing all national target and/or bycatch fisheries-Timeline: every year',
          collection_id: 5086,
          parent_collection_id: 519,
          items: [{
              type: 'changes',
              label: 'Changes in the information provided in the previous report',
              info: 'Please tick the box that applies',
              selected: false,
              options: [
                { text: 'Yes', value: true },
                { text: 'No', value: false }
              ],
              options_description: ['If your answer is “Yes”, please update accordingly', 'If your answer is “No”, please go to next question'],
              comments: ''
            },
            {
              type: 'status',
              label: 'Status of implementation',
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
            },

          ]
        }, {
          description: 'Develop and adopt (where these do not exist) national Shark Plans and specific regulations for fisheries exploiting chondrichthyans, whether target or bycatch-Timeline: as soon as possible',
          collection_id: 5087,
          parent_collection_id: 519,
          items: [{
              type: 'changes',
              label: 'Changes in the information provided in the previous report',
              info: 'Please tick the box that applies',
              selected: false,
              options: [
                { text: 'Yes', value: true },
                { text: 'No', value: false }
              ],
              options_description: ['If your answer is “Yes”, please update accordingly', 'If your answer is “No”, please go to next question'],
              comments: ''
            },
            {
              type: 'status',
              label: 'Status of implementation',
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
            },

          ]
        }]
      }, {
        article_title: 'RAP concerning Species Introductions and Invasive Species (COP Decision IG 22/12)',
        article_items: [{
          description: 'Set up a mechanism to promote and coordinate the actions listed in paragraph 22 of the RAP1 -Timeline: 2016',
          collection_id: 5088,
          parent_collection_id: 519,
          items: [{
              type: 'changes',
              label: 'Changes in the information provided in the previous report',
              info: 'Please tick the box that applies',
              selected: false,
              options: [
                { text: 'Yes', value: true },
                { text: 'No', value: false }
              ],
              options_description: ['If your answer is “Yes”, please update accordingly', 'If your answer is “No”, please go to next question'],
              comments: ''
            },
            {
              type: 'status',
              label: 'Status of implementation',
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
            },

          ]
        }, {
          description: 'Conduct a baseline study to feed the Marine Mediterranean Invasive Species (MAMIAS )2_Timeline: 2017',
          collection_id: 5089,
          parent_collection_id: 519,
          items: [{
              type: 'changes',
              label: 'Changes in the information provided in the previous report',
              info: 'Please tick the box that applies',
              selected: false,
              options: [
                { text: 'Yes', value: true },
                { text: 'No', value: false }
              ],
              options_description: ['If your answer is “Yes”, please update accordingly', 'If your answer is “No”, please go to next question'],
              comments: ''
            },
            {
              type: 'status',
              label: 'Status of implementation',
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
            },

          ]
        }, {
          description: 'Development of programmes for data collection and monitoring Timeline: 2017',
          collection_id: 5090,
          parent_collection_id: 519,
          items: [{
              type: 'changes',
              label: 'Changes in the information provided in the previous report',
              info: 'Please tick the box that applies',
              selected: false,
              options: [
                { text: 'Yes', value: true },
                { text: 'No', value: false }
              ],
              options_description: ['If your answer is “Yes”, please update accordingly', 'If your answer is “No”, please go to next question'],
              comments: ''
            },
            {
              type: 'status',
              label: 'Status of implementation',
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
            },

          ]
        }, {
          description: 'Launch the procedures for enacting or strengthening national legislation governing the control of alien species introduction Timeline: 2017',
          collection_id: 5091,
          parent_collection_id: 519,
          items: [{
              type: 'changes',
              label: 'Changes in the information provided in the previous report',
              info: 'Please tick the box that applies',
              selected: false,
              options: [
                { text: 'Yes', value: true },
                { text: 'No', value: false }
              ],
              options_description: ['If your answer is “Yes”, please update accordingly', 'If your answer is “No”, please go to next question'],
              comments: ''
            },
            {
              type: 'status',
              label: 'Status of implementation',
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
            },

          ]
        }, {
          description: 'Develop programmes to raise the awareness of the general public and target groups, including decision- makers, concerning the risks associated with species introduction Timeline: 2017',
          collection_id: 5092,
          parent_collection_id: 519,
          items: [{
              type: 'changes',
              label: 'Changes in the information provided in the previous report',
              info: 'Please tick the box that applies',
              selected: false,
              options: [
                { text: 'Yes', value: true },
                { text: 'No', value: false }
              ],
              options_description: ['If your answer is “Yes”, please update accordingly', 'If your answer is “No”, please go to next question'],
              comments: ''
            },
            {
              type: 'status',
              label: 'Status of implementation',
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
            },

          ]
        }]
      }, {
        article_title: 'RAP for the conservation of Bird Species (COP Decision IG 21/4)',
        article_items: [{
          description: 'Protect legally all bird species listed in Annex II to the SPA/BD Protocol- Timeline: by 2019',
          collection_id: 5093,
          parent_collection_id: 519,
          items: [{
              type: 'changes',
              label: 'Changes in the information provided in the previous report',
              info: 'Please tick the box that applies',
              selected: false,
              options: [
                { text: 'Yes', value: true },
                { text: 'No', value: false }
              ],
              options_description: ['If your answer is “Yes”, please update accordingly', 'If your answer is “No”, please go to next question'],
              comments: ''
            },
            {
              type: 'status',
              label: 'Status of implementation',
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
            },

          ]
        }, {
          description: 'Optimize synergies with international agreements and organizations dedicated to bird conservation_ Timeline: from 2014 to 2019',
          collection_id: 5094,
          parent_collection_id: 519,
          items: [{
              type: 'changes',
              label: 'Changes in the information provided in the previous report',
              info: 'Please tick the box that applies',
              selected: false,
              options: [
                { text: 'Yes', value: true },
                { text: 'No', value: false }
              ],
              options_description: ['If your answer is “Yes”, please update accordingly', 'If your answer is “No”, please go to next question'],
              comments: ''
            },
            {
              type: 'status',
              label: 'Status of implementation',
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
            },

          ]
        }, {
          description: 'Organize specific training courses and workshops in coordination/synergy with international and/or national NGOs_ Timeline: from 2014 to 2019',
          collection_id: 5095,
          parent_collection_id: 519,
          items: [{
              type: 'changes',
              label: 'Changes in the information provided in the previous report',
              info: 'Please tick the box that applies',
              selected: false,
              options: [
                { text: 'Yes', value: true },
                { text: 'No', value: false }
              ],
              options_description: ['If your answer is “Yes”, please update accordingly', 'If your answer is “No”, please go to next question'],
              comments: ''
            },
            {
              type: 'status',
              label: 'Status of implementation',
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
            },

          ]
        }, {
          description: 'Establishment / support of research and monitoring programs to fill gaps in the knowledge of threatened species in partnership with other organizations –Timeline: from 2014 to 2019',
          collection_id: 5096,
          parent_collection_id: 519,
          items: [{
              type: 'changes',
              label: 'Changes in the information provided in the previous report',
              info: 'Please tick the box that applies',
              selected: false,
              options: [
                { text: 'Yes', value: true },
                { text: 'No', value: false }
              ],
              options_description: ['If your answer is “Yes”, please update accordingly', 'If your answer is “No”, please go to next question'],
              comments: ''
            },
            {
              type: 'status',
              label: 'Status of implementation',
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
            },

          ]
        }, {
          description: 'Establishment and implementation of National Action Plans for the conservation of endangered and threatened bird species in the Mediterranean –Timeline: from 2014- 2019',
          collection_id: 5097,
          parent_collection_id: 519,
          items: [{
              type: 'changes',
              label: 'Changes in the information provided in the previous report',
              info: 'Please tick the box that applies',
              selected: false,
              options: [
                { text: 'Yes', value: true },
                { text: 'No', value: false }
              ],
              options_description: ['If your answer is “Yes”, please update accordingly', 'If your answer is “No”, please go to next question'],
              comments: ''
            },
            {
              type: 'status',
              label: 'Status of implementation',
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
            },

          ]
        }, {
          description: 'Identification of areas of important for birds on land and at sea (mapping of breeding, feeding, molting and wintering areas)- Timeline: from 2014 to 2019',
          collection_id: 5098,
          parent_collection_id: 519,
          items: [{
              type: 'changes',
              label: 'Changes in the information provided in the previous report',
              info: 'Please tick the box that applies',
              selected: false,
              options: [
                { text: 'Yes', value: true },
                { text: 'No', value: false }
              ],
              options_description: ['If your answer is “Yes”, please update accordingly', 'If your answer is “No”, please go to next question'],
              comments: ''
            },
            {
              type: 'status',
              label: 'Status of implementation',
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
          description: 'Legal establishment of Protected Areas with adequate management plans at breeding sites-Timeline: by 2019',
          collection_id: 5099,
          parent_collection_id: 519,
          items: [{
              type: 'changes',
              label: 'Changes in the information provided in the previous report',
              info: 'Please tick the box that applies',
              selected: false,
              options: [
                { text: 'Yes', value: true },
                { text: 'No', value: false }
              ],
              options_description: ['If your answer is “Yes”, please update accordingly', 'If your answer is “No”, please go to next question'],
              comments: ''
            },
            {
              type: 'status',
              label: 'Status of implementation',
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
            },

          ]
        }]
      }, {
        article_title: 'RAP for the conservation of Cetaceans (COP Decision IG 22/12)',
        article_items: [{
          description: 'Ratify the ACCOBAMS Agreement and implement its Resolutions and Recommendations of relevance for the Mediterranean Sea',
          collection_id: 5100,
          parent_collection_id: 519,
          items: [{
              type: 'changes',
              label: 'Changes in the information provided in the previous report',
              info: 'Please tick the box that applies',
              selected: false,
              options: [
                { text: 'Yes', value: true },
                { text: 'No', value: false }
              ],
              options_description: ['If your answer is “Yes”, please update accordingly', 'If your answer is “No”, please go to next question'],
              comments: ''
            },
            {
              type: 'status',
              label: 'Status of implementation',
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
            },

          ]
        }, {
          description: 'Ensure that cetaceans are covered, at national level, by appropriate regulation measures providing for the elimination of deliberate killing and for the mitigation of the adverse impacts from their interactions with human activities-',
          collection_id: 5101,
          parent_collection_id: 519,
          items: [{
              type: 'changes',
              label: 'Changes in the information provided in the previous report',
              info: 'Please tick the box that applies',
              selected: false,
              options: [
                { text: 'Yes', value: true },
                { text: 'No', value: false }
              ],
              options_description: ['If your answer is “Yes”, please update accordingly', 'If your answer is “No”, please go to next question'],
              comments: ''
            },
            {
              type: 'status',
              label: 'Status of implementation',
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
            },

          ]
        }, {
          description: 'Ensure, through regulation or other appropriate approaches,  that whale-watching activity is environmentally sound and sustainably conducted',
          collection_id: 5102,
          parent_collection_id: 519,
          items: [{
              type: 'changes',
              label: 'Changes in the information provided in the previous report',
              info: 'Please tick the box that applies',
              selected: false,
              options: [
                { text: 'Yes', value: true },
                { text: 'No', value: false }
              ],
              options_description: ['If your answer is “Yes”, please update accordingly', 'If your answer is “No”, please go to next question'],
              comments: ''
            },
            {
              type: 'status',
              label: 'Status of implementation',
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
            },

          ]
        }, {
          description: 'Undertake the comprehensive survey of abundance and distribution of cetaceans being planned by ACCOBAMS (ACCOBAMS Survey initiative)-',
          collection_id: 5103,
          parent_collection_id: 519,
          items: [{
              type: 'changes',
              label: 'Changes in the information provided in the previous report',
              info: 'Please tick the box that applies',
              selected: false,
              options: [
                { text: 'Yes', value: true },
                { text: 'No', value: false }
              ],
              options_description: ['If your answer is “Yes”, please update accordingly', 'If your answer is “No”, please go to next question'],
              comments: ''
            },
            {
              type: 'status',
              label: 'Status of implementation',
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
            },

          ]
        }, {
          description: 'Assess the cetacean bycatch and depredation in their fisheries and adopt mitigation measures',
          collection_id: 5104,
          parent_collection_id: 519,
          items: [{
              type: 'changes',
              label: 'Changes in the information provided in the previous report',
              info: 'Please tick the box that applies',
              selected: false,
              options: [
                { text: 'Yes', value: true },
                { text: 'No', value: false }
              ],
              options_description: ['If your answer is “Yes”, please update accordingly', 'If your answer is “No”, please go to next question'],
              comments: ''
            },
            {
              type: 'status',
              label: 'Status of implementation',
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
            },

          ]
        }, {
          description: 'Pursue the development and the implementation of a basin-wide strategy for underwater noise monitoring in the Mediterranean under the Ecological Objective 11 of the EcAp process',
          collection_id: 5105,
          parent_collection_id: 519,
          items: [{
              type: 'changes',
              label: 'Changes in the information provided in the previous report',
              info: 'Please tick the box that applies',
              selected: false,
              options: [
                { text: 'Yes', value: true },
                { text: 'No', value: false }
              ],
              options_description: ['If your answer is “Yes”, please update accordingly', 'If your answer is “No”, please go to next question'],
              comments: ''
            },
            {
              type: 'status',
              label: 'Status of implementation',
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
            },

          ]
        }, {
          description: 'Development of acoustic mapping to build a comprehensive picture of the spatial and temporal distribution of anthropogenic noise sources, in particular for the noise hotspot areas identified in the Mediterranean by ACCOBAMS-',
          collection_id: 5106,
          parent_collection_id: 519,
          items: [{
              type: 'changes',
              label: 'Changes in the information provided in the previous report',
              info: 'Please tick the box that applies',
              selected: false,
              options: [
                { text: 'Yes', value: true },
                { text: 'No', value: false }
              ],
              options_description: ['If your answer is “Yes”, please update accordingly', 'If your answer is “No”, please go to next question'],
              comments: ''
            },
            {
              type: 'status',
              label: 'Status of implementation',
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
            },

          ]
        }, {
          description: 'Promote awareness of the anthropogenic noise impacts on cetaceans, targeting in particular decision makers, key players in the industry organisations and the stockholders in the shipping sectors.',
          collection_id: 5107,
          parent_collection_id: 519,
          items: [{
              type: 'changes',
              label: 'Changes in the information provided in the previous report',
              info: 'Please tick the box that applies',
              selected: false,
              options: [
                { text: 'Yes', value: true },
                { text: 'No', value: false }
              ],
              options_description: ['If your answer is “Yes”, please update accordingly', 'If your answer is “No”, please go to next question'],
              comments: ''
            },
            {
              type: 'status',
              label: 'Status of implementation',
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
            },

          ]
        }, {
          description: 'Establish a list of marine areas under its jurisdiction identified as of special importance for cetaceans',
          collection_id: 5108,
          parent_collection_id: 519,
          items: [{
              type: 'changes',
              label: 'Changes in the information provided in the previous report',
              info: 'Please tick the box that applies',
              selected: false,
              options: [
                { text: 'Yes', value: true },
                { text: 'No', value: false }
              ],
              options_description: ['If your answer is “Yes”, please update accordingly', 'If your answer is “No”, please go to next question'],
              comments: ''
            },
            {
              type: 'status',
              label: 'Status of implementation',
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
            },

          ]
        }]
      }, {
        article_title: 'RAP for the conservation of Marine Vegetation (COP Decision IG 20/6)',
        article_items: [{
          description: 'Take new vegetation species in Annex II to the SPA/BD Protocol into account: Timeline: as soon as possible',
          collection_id: 5109,
          parent_collection_id: 519,
          items: [{
              type: 'changes',
              label: 'Changes in the information provided in the previous report',
              info: 'Please tick the box that applies',
              selected: false,
              options: [
                { text: 'Yes', value: true },
                { text: 'No', value: false }
              ],
              options_description: ['If your answer is “Yes”, please update accordingly', 'If your answer is “No”, please go to next question'],
              comments: ''
            },
            {
              type: 'status',
              label: 'Status of implementation',
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
            },

          ]
        }, {
          description: 'Create MPAs to conserve marine vegetation: Timeline: as soon as possible',
          collection_id: 5110,
          parent_collection_id: 519,
          items: [{
              type: 'changes',
              label: 'Changes in the information provided in the previous report',
              info: 'Please tick the box that applies',
              selected: false,
              options: [
                { text: 'Yes', value: true },
                { text: 'No', value: false }
              ],
              options_description: ['If your answer is “Yes”, please update accordingly', 'If your answer is “No”, please go to next question'],
              comments: ''
            },
            {
              type: 'status',
              label: 'Status of implementation',
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
            },

          ]
        }, {
          description: 'Set up a programme for making national inventories on macrophyta species, with staggered planning according to the regions’ priorities. Timeline: from 2012',
          collection_id: 5111,
          parent_collection_id: 519,
          items: [{
              type: 'changes',
              label: 'Changes in the information provided in the previous report',
              info: 'Please tick the box that applies',
              selected: false,
              options: [
                { text: 'Yes', value: true },
                { text: 'No', value: false }
              ],
              options_description: ['If your answer is “Yes”, please update accordingly', 'If your answer is “No”, please go to next question'],
              comments: ''
            },
            {
              type: 'status',
              label: 'Status of implementation',
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
            },

          ]
        }, {
          description: 'Make theoretical probable distribution maps for the main plant assemblages. Timeline: as soon as possible',
          collection_id: 5112,
          parent_collection_id: 519,
          items: [{
              type: 'changes',
              label: 'Changes in the information provided in the previous report',
              info: 'Please tick the box that applies',
              selected: false,
              options: [
                { text: 'Yes', value: true },
                { text: 'No', value: false }
              ],
              options_description: ['If your answer is “Yes”, please update accordingly', 'If your answer is “No”, please go to next question'],
              comments: ''
            },
            {
              type: 'status',
              label: 'Status of implementation',
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
            },

          ]
        }, {
          description: 'Implement targeted mapping and inventorying actions (Annex II species, priority sites). Timeline: from 2012',
          collection_id: 5113,
          parent_collection_id: 519,
          items: [{
              type: 'changes',
              label: 'Changes in the information provided in the previous report',
              info: 'Please tick the box that applies',
              selected: false,
              options: [
                { text: 'Yes', value: true },
                { text: 'No', value: false }
              ],
              options_description: ['If your answer is “Yes”, please update accordingly', 'If your answer is “No”, please go to next question'],
              comments: ''
            },
            {
              type: 'status',
              label: 'Status of implementation',
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
            },

          ]
        }, {
          description: 'Establish a programme for setting up monitoring networks for the main marine plant assemblages at national and regional level. Timeline: as soon as possible',
          collection_id: 5114,
          parent_collection_id: 519,
          items: [{
              type: 'changes',
              label: 'Changes in the information provided in the previous report',
              info: 'Please tick the box that applies',
              selected: false,
              options: [
                { text: 'Yes', value: true },
                { text: 'No', value: false }
              ],
              options_description: ['If your answer is “Yes”, please update accordingly', 'If your answer is “No”, please go to next question'],
              comments: ''
            },
            {
              type: 'status',
              label: 'Status of implementation',
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
            },

          ]
        }, {
          description: 'Set up and/or extend their networks for follow-up of plants in the Mediterranean. Timeline: from 2013',
          collection_id: 5115,
          parent_collection_id: 519,
          items: [{
              type: 'changes',
              label: 'Changes in the information provided in the previous report',
              info: 'Please tick the box that applies',
              selected: false,
              options: [
                { text: 'Yes', value: true },
                { text: 'No', value: false }
              ],
              options_description: ['If your answer is “Yes”, please update accordingly', 'If your answer is “No”, please go to next question'],
              comments: ''
            },
            {
              type: 'status',
              label: 'Status of implementation',
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
            },

          ]
        }, {
          description: 'To develop short, medium and long term action plans according to national and regional priorities. Timeline: from 2012',
          collection_id: 5116,
          parent_collection_id: 519,
          items: [{
              type: 'changes',
              label: 'Changes in the information provided in the previous report',
              info: 'Please tick the box that applies',
              selected: false,
              options: [
                { text: 'Yes', value: true },
                { text: 'No', value: false }
              ],
              options_description: ['If your answer is “Yes”, please update accordingly', 'If your answer is “No”, please go to next question'],
              comments: ''
            },
            {
              type: 'status',
              label: 'Status of implementation',
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
            },

          ]
        }]
      }, {
        article_title: 'RAP for the conservation of the Monk Seal (1985 COP Decision)',
        article_items: [{
          description: 'Has the Party given the monk seal protection status?',
          collection_id: 5117,
          parent_collection_id: 519,
          items: [{
              type: 'changes',
              label: 'Changes in the information provided in the previous report',
              info: 'Please tick the box that applies',
              selected: false,
              options: [
                { text: 'Yes', value: true },
                { text: 'No', value: false }
              ],
              options_description: ['If your answer is “Yes”, please update accordingly', 'If your answer is “No”, please go to next question'],
              comments: ''
            },
            {
              type: 'status',
              label: 'Status of implementation',
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
            },

          ]
        }, {
          description: 'For fishing, does the Party explicitly ban the use of dynamite, the carrying of firearms on boats, and all fishing techniques that can endanger monk seals?',
          collection_id: 5118,
          parent_collection_id: 519,
          items: [{
              type: 'changes',
              label: 'Changes in the information provided in the previous report',
              info: 'Please tick the box that applies',
              selected: false,
              options: [
                { text: 'Yes', value: true },
                { text: 'No', value: false }
              ],
              options_description: ['If your answer is “Yes”, please update accordingly', 'If your answer is “No”, please go to next question'],
              comments: ''
            },
            {
              type: 'status',
              label: 'Status of implementation',
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
            },

          ]
        }, {
          description: 'If the Party still has breeding monk seal populations, have measures been taken to isolate monk seals from any human activity?',
          collection_id: 5119,
          parent_collection_id: 519,
          items: [{
              type: 'changes',
              label: 'Changes in the information provided in the previous report',
              info: 'Please tick the box that applies',
              selected: false,
              options: [
                { text: 'Yes', value: true },
                { text: 'No', value: false }
              ],
              options_description: ['If your answer is “Yes”, please update accordingly', 'If your answer is “No”, please go to next question'],
              comments: ''
            },
            {
              type: 'status',
              label: 'Status of implementation',
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
            },

          ]
        }, {
          description: 'In the Party\'s territory, have SPAs been created to conserve monk seal populations or their potential habitats?',
          collection_id: 5120,
          parent_collection_id: 519,
          items: [{
              type: 'changes',
              label: 'Changes in the information provided in the previous report',
              info: 'Please tick the box that applies',
              selected: false,
              options: [
                { text: 'Yes', value: true },
                { text: 'No', value: false }
              ],
              options_description: ['If your answer is “Yes”, please update accordingly', 'If your answer is “No”, please go to next question'],
              comments: ''
            },
            {
              type: 'status',
              label: 'Status of implementation',
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
            },

          ]
        }, {
          description: 'Has the Party established a list of breeding caves and other habitats that are of importance for monk seal conservation?',
          collection_id: 5121,
          parent_collection_id: 519,
          items: [{
              type: 'changes',
              label: 'Changes in the information provided in the previous report',
              info: 'Please tick the box that applies',
              selected: false,
              options: [
                { text: 'Yes', value: true },
                { text: 'No', value: false }
              ],
              options_description: ['If your answer is “Yes”, please update accordingly', 'If your answer is “No”, please go to next question'],
              comments: ''
            },
            {
              type: 'status',
              label: 'Status of implementation',
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
            },

          ]
        }, {
          description: 'Has the Party carried out programmes for data collection on the monk seal?',
          collection_id: 5122,
          parent_collection_id: 519,
          items: [{
              type: 'changes',
              label: 'Changes in the information provided in the previous report',
              info: 'Please tick the box that applies',
              selected: false,
              options: [
                { text: 'Yes', value: true },
                { text: 'No', value: false }
              ],
              options_description: ['If your answer is “Yes”, please update accordingly', 'If your answer is “No”, please go to next question'],
              comments: ''
            },
            {
              type: 'status',
              label: 'Status of implementation',
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
            },

          ]
        }, {
          description: 'Has the Party developed programmes for awareness raising, information and training concerning monk sea conservation?',
          collection_id: 5123,
          parent_collection_id: 519,
          items: [{
              type: 'changes',
              label: 'Changes in the information provided in the previous report',
              info: 'Please tick the box that applies',
              selected: false,
              options: [
                { text: 'Yes', value: true },
                { text: 'No', value: false }
              ],
              options_description: ['If your answer is “Yes”, please update accordingly', 'If your answer is “No”, please go to next question'],
              comments: ''
            },
            {
              type: 'status',
              label: 'Status of implementation',
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
            },

          ]
        }, {
          description: 'Does the Party have an action plan for the conservation of monk seal and its potential habitats?',
          collection_id: 5124,
          parent_collection_id: 519,
          items: [{
              type: 'changes',
              label: 'Changes in the information provided in the previous report',
              info: 'Please tick the box that applies',
              selected: false,
              options: [
                { text: 'Yes', value: true },
                { text: 'No', value: false }
              ],
              options_description: ['If your answer is “Yes”, please update accordingly', 'If your answer is “No”, please go to next question'],
              comments: ''
            },
            {
              type: 'status',
              label: 'Status of implementation',
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
            },

          ]
        }]
      }, {
        article_title: 'RAP for the conservation of Mediterranean Marine Turtles (COP Decision IG 21/4)',
        article_items: [{
            description: 'Protection of turtles–general species protection. Timeline: as soon as possible',
            collection_id: 5125,
            parent_collection_id: 519,
            items: [{
                type: 'changes',
                label: 'Changes in the information provided in the previous report',
                info: 'Please tick the box that applies',
                selected: false,
                options: [
                  { text: 'Yes', value: true },
                  { text: 'No', value: false }
                ],
                options_description: ['If your answer is “Yes”, please update accordingly', 'If your answer is “No”, please go to next question'],
                comments: ''
              },
              {
                type: 'status',
                label: 'Status of implementation',
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
              },

            ]
          }, {
            description: 'Enforce legislation to eliminate deliberate killing. Timeline: as soon as possible',
            collection_id: 5126,
            parent_collection_id: 519,
            items: [{
                type: 'changes',
                label: 'Changes in the information provided in the previous report',
                info: 'Please tick the box that applies',
                selected: false,
                options: [
                  { text: 'Yes', value: true },
                  { text: 'No', value: false }
                ],
                options_description: ['If your answer is “Yes”, please update accordingly', 'If your answer is “No”, please go to next question'],
                comments: ''
              },
              {
                type: 'status',
                label: 'Status of implementation',
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
              },

            ]
          }, {
            description: 'Habitat protection and management (nesting, mating, feeding, wintering and key migration passages). Timeline: as soon as possible',
            collection_id: 5127,
            parent_collection_id: 519,
            items: [{
                type: 'changes',
                label: 'Changes in the information provided in the previous report',
                info: 'Please tick the box that applies',
                selected: false,
                options: [
                  { text: 'Yes', value: true },
                  { text: 'No', value: false }
                ],
                options_description: ['If your answer is “Yes”, please update accordingly', 'If your answer is “No”, please go to next question'],
                comments: ''
              },
              {
                type: 'status',
                label: 'Status of implementation',
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
              },

            ]
          }, {
            description: 'Setting up and implementing management plans. Timeline: from 2014 to 2019',
            collection_id: 5128,
            parent_collection_id: 519,
            items: [{
                type: 'changes',
                label: 'Changes in the information provided in the previous report',
                info: 'Please tick the box that applies',
                selected: false,
                options: [
                  { text: 'Yes', value: true },
                  { text: 'No', value: false }
                ],
                options_description: ['If your answer is “Yes”, please update accordingly', 'If your answer is “No”, please go to next question'],
                comments: ''
              },
              {
                type: 'status',
                label: 'Status of implementation',
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
              },

            ]
          }, {
            description: 'Restoration of damaged nesting habitats. Timeline: from 2014 to 2019',
            collection_id: 5129,
            parent_collection_id: 519,
            items: [{
                type: 'changes',
                label: 'Changes in the information provided in the previous report',
                info: 'Please tick the box that applies',
                selected: false,
                options: [
                  { text: 'Yes', value: true },
                  { text: 'No', value: false }
                ],
                options_description: ['If your answer is “Yes”, please update accordingly', 'If your answer is “No”, please go to next question'],
                comments: ''
              },
              {
                type: 'status',
                label: 'Status of implementation',
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
              },

            ]
          }, {
            description: 'Fishing regulations (depth, season, gear) in key areas. Timeline: from 2014 to 2019',
            collection_id: 5130,
            parent_collection_id: 519,
            items: [{
                type: 'changes',
                label: 'Changes in the information provided in the previous report',
                info: 'Please tick the box that applies',
                selected: false,
                options: [
                  { text: 'Yes', value: true },
                  { text: 'No', value: false }
                ],
                options_description: ['If your answer is “Yes”, please update accordingly', 'If your answer is “No”, please go to next question'],
                comments: ''
              },
              {
                type: 'status',
                label: 'Status of implementation',
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
              },

            ]
          }, {
            description: 'Setting up and/or improving operation of Rescue Centers. Timeline: as soon as possible',
            collection_id: 5131,
            parent_collection_id: 519,
            items: [{
                type: 'changes',
                label: 'Changes in the information provided in the previous report',
                info: 'Please tick the box that applies',
                selected: false,
                options: [
                  { text: 'Yes', value: true },
                  { text: 'No', value: false }
                ],
                options_description: ['If your answer is “Yes”, please update accordingly', 'If your answer is “No”, please go to next question'],
                comments: ''
              },
              {
                type: 'status',
                label: 'Status of implementation',
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
              },

            ]
          }, {
            description: 'Identification of new mating, feeding and wintering areas and key migration passages. Timeline: from 2014 to 2019',
            collection_id: 5132,
            parent_collection_id: 519,
            items: [{
                type: 'changes',
                label: 'Changes in the information provided in the previous report',
                info: 'Please tick the box that applies',
                selected: false,
                options: [
                  { text: 'Yes', value: true },
                  { text: 'No', value: false }
                ],
                options_description: ['If your answer is “Yes”, please update accordingly', 'If your answer is “No”, please go to next question'],
                comments: ''
              },
              {
                type: 'status',
                label: 'Status of implementation',
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
              },

            ]
          }, {
            description: 'Elaboration and execution of cooperative research projects of regional importance aimed at assessing the interaction between turtles and fisheries. Timeline: from 2014 to 2019',
            collection_id: 5133,
            parent_collection_id: 519,
            items: [{
                type: 'changes',
                label: 'Changes in the information provided in the previous report',
                info: 'Please tick the box that applies',
                selected: false,
                options: [
                  { text: 'Yes', value: true },
                  { text: 'No', value: false }
                ],
                options_description: ['If your answer is “Yes”, please update accordingly', 'If your answer is “No”, please go to next question'],
                comments: ''
              },
              {
                type: 'status',
                label: 'Status of implementation',
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
              },

            ]
          }, {
            description: 'Tagging and genetic analysis (as appropriate). Timeline: from 2014 to 2019',
            collection_id: 5134,
            parent_collection_id: 519,
            items: [{
                type: 'changes',
                label: 'Changes in the information provided in the previous report',
                info: 'Please tick the box that applies',
                selected: false,
                options: [
                  { text: 'Yes', value: true },
                  { text: 'No', value: false }
                ],
                options_description: ['If your answer is “Yes”, please update accordingly', 'If your answer is “No”, please go to next question'],
                comments: ''
              },
              {
                type: 'status',
                label: 'Status of implementation',
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
              },

            ]
          },
          {
            description: 'Modification of gear, methods and strategies. Timeline: from 2014 to 2019',
            collection_id: 5135,
            parent_collection_id: 519,
            items: [{
                type: 'changes',
                label: 'Changes in the information provided in the previous report',
                info: 'Please tick the box that applies',
                selected: false,
                options: [
                  { text: 'Yes', value: true },
                  { text: 'No', value: false }
                ],
                options_description: ['If your answer is “Yes”, please update accordingly', 'If your answer is “No”, please go to next question'],
                comments: ''
              },
              {
                type: 'status',
                label: 'Status of implementation',
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
              },

            ]
          }, {
            description: 'Setting up and/or improving long-term monitoring programmes. Timeline: from 2014 to 2019',
            collection_id: 5136,
            parent_collection_id: 519,
            items: [{
                type: 'changes',
                label: 'Changes in the information provided in the previous report',
                info: 'Please tick the box that applies',
                selected: false,
                options: [
                  { text: 'Yes', value: true },
                  { text: 'No', value: false }
                ],
                options_description: ['If your answer is “Yes”, please update accordingly', 'If your answer is “No”, please go to next question'],
                comments: ''
              },
              {
                type: 'status',
                label: 'Status of implementation',
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
              },

            ]
          }, {
            description: 'Setting up stranding networks. Timeline: as soon as possible',
            collection_id: 5137,
            parent_collection_id: 519,
            items: [{
                type: 'changes',
                label: 'Changes in the information provided in the previous report',
                info: 'Please tick the box that applies',
                selected: false,
                options: [
                  { text: 'Yes', value: true },
                  { text: 'No', value: false }
                ],
                options_description: ['If your answer is “Yes”, please update accordingly', 'If your answer is “No”, please go to next question'],
                comments: ''
              },
              {
                type: 'status',
                label: 'Status of implementation',
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
              },

            ]
          }, {
            description: 'Public awareness and Information campaigns in particular for fishermen and local populations. Timeline: from 2014 to 2019',
            collection_id: 5138,
            parent_collection_id: 519,
            items: [{
                type: 'changes',
                label: 'Changes in the information provided in the previous report',
                info: 'Please tick the box that applies',
                selected: false,
                options: [
                  { text: 'Yes', value: true },
                  { text: 'No', value: false }
                ],
                options_description: ['If your answer is “Yes”, please update accordingly', 'If your answer is “No”, please go to next question'],
                comments: ''
              },
              {
                type: 'status',
                label: 'Status of implementation',
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
              },

            ]
          }, {
            description: 'Training courses. Timeline: from 2014 to 2019',
            collection_id: 5139,
            parent_collection_id: 519,
            items: [{
                type: 'changes',
                label: 'Changes in the information provided in the previous report',
                info: 'Please tick the box that applies',
                selected: false,
                options: [
                  { text: 'Yes', value: true },
                  { text: 'No', value: false }
                ],
                options_description: ['If your answer is “Yes”, please update accordingly', 'If your answer is “No”, please go to next question'],
                comments: ''
              },
              {
                type: 'status',
                label: 'Status of implementation',
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
              },

            ]
          }, {
            description: 'Elaboration of National Action Plans and assessment of progress in implementation. Timeline: from 2014 to 2019',
            collection_id: 5140,
            parent_collection_id: 519,
            items: [{
                type: 'changes',
                label: 'Changes in the information provided in the previous report',
                info: 'Please tick the box that applies',
                selected: false,
                options: [
                  { text: 'Yes', value: true },
                  { text: 'No', value: false }
                ],
                options_description: ['If your answer is “Yes”, please update accordingly', 'If your answer is “No”, please go to next question'],
                comments: ''
              },
              {
                type: 'status',
                label: 'Status of implementation',
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
              },

            ]
          }
        ]
      }, {
        article_title: 'Dark Habitats Action Plan (COP Decision IG 21/4)',
        article_items: [{
            description: 'Making a summary of knowledge of dark populations and their distribution around the Mediterranean in the form of a geo-referenced information system',
            collection_id: 5141,
            parent_collection_id: 519,
            items: [{
                type: 'changes',
                label: 'Changes in the information provided in the previous report',
                info: 'Please tick the box that applies',
                selected: false,
                options: [
                  { text: 'Yes', value: true },
                  { text: 'No', value: false }
                ],
                options_description: ['If your answer is “Yes”, please update accordingly', 'If your answer is “No”, please go to next question'],
                comments: ''
              },
              {
                type: 'status',
                label: 'Status of implementation',
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
              },

            ]
          }, {
            description: 'Identify and assess proven pressures on each of the various types of habitat',
            collection_id: 5142,
            parent_collection_id: 519,
            items: [{
                type: 'changes',
                label: 'Changes in the information provided in the previous report',
                info: 'Please tick the box that applies',
                selected: false,
                options: [
                  { text: 'Yes', value: true },
                  { text: 'No', value: false }
                ],
                options_description: ['If your answer is “Yes”, please update accordingly', 'If your answer is “No”, please go to next question'],
                comments: ''
              },
              {
                type: 'status',
                label: 'Status of implementation',
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
              },

            ]
          }, {
            description: 'Revise the reference list of types of marine habitat for the selection of sites for inclusion in the national inventories of natural sites of conservation interest, in order to take account of dark assemblages',
            collection_id: 5143,
            parent_collection_id: 519,
            items: [{
                type: 'changes',
                label: 'Changes in the information provided in the previous report',
                info: 'Please tick the box that applies',
                selected: false,
                options: [
                  { text: 'Yes', value: true },
                  { text: 'No', value: false }
                ],
                options_description: ['If your answer is “Yes”, please update accordingly', 'If your answer is “No”, please go to next question'],
                comments: ''
              },
              {
                type: 'status',
                label: 'Status of implementation',
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
              },

            ]
          }, {
            description: 'Revise the list of endangered or threatened species in order to take account of dark assemblages species',
            collection_id: 5144,
            parent_collection_id: 519,
            items: [{
                type: 'changes',
                label: 'Changes in the information provided in the previous report',
                info: 'Please tick the box that applies',
                selected: false,
                options: [
                  { text: 'Yes', value: true },
                  { text: 'No', value: false }
                ],
                options_description: ['If your answer is “Yes”, please update accordingly', 'If your answer is “No”, please go to next question'],
                comments: ''
              },
              {
                type: 'status',
                label: 'Status of implementation',
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
              },

            ]
          }, {
            description: 'Promote the identifying of areas of interest for the conservation of dark assemblages in the Mediterranean and Carry out concerted actions in national and/or cross-border sites',
            collection_id: 5145,
            parent_collection_id: 519,
            items: [{
                type: 'changes',
                label: 'Changes in the information provided in the previous report',
                info: 'Please tick the box that applies',
                selected: false,
                options: [
                  { text: 'Yes', value: true },
                  { text: 'No', value: false }
                ],
                options_description: ['If your answer is “Yes”, please update accordingly', 'If your answer is “No”, please go to next question'],
                comments: ''
              },
              {
                type: 'status',
                label: 'Status of implementation',
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
              },

            ]
          }, {
            description: 'Finalise the implementing of MPAs in already identified sites at national level and outside waters that lie within national jurisdiction',
            collection_id: 5146,
            parent_collection_id: 519,
            items: [{
                type: 'changes',
                label: 'Changes in the information provided in the previous report',
                info: 'Please tick the box that applies',
                selected: false,
                options: [
                  { text: 'Yes', value: true },
                  { text: 'No', value: false }
                ],
                options_description: ['If your answer is “Yes”, please update accordingly', 'If your answer is “No”, please go to next question'],
                comments: ''
              },
              {
                type: 'status',
                label: 'Status of implementation',
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
              },

            ]
          }, {
            description: 'Propose the creation of new MPAs',
            collection_id: 5147,
            parent_collection_id: 519,
            items: [{
                type: 'changes',
                label: 'Changes in the information provided in the previous report',
                info: 'Please tick the box that applies',
                selected: false,
                options: [
                  { text: 'Yes', value: true },
                  { text: 'No', value: false }
                ],
                options_description: ['If your answer is “Yes”, please update accordingly', 'If your answer is “No”, please go to next question'],
                comments: ''
              },
              {
                type: 'status',
                label: 'Status of implementation',
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
              },

            ]
          }, {
            description: 'Extent existing MPAs to integrate nearby sites that host dark assemblages',
            collection_id: 5148,
            parent_collection_id: 519,
            items: [{
                type: 'changes',
                label: 'Changes in the information provided in the previous report',
                info: 'Please tick the box that applies',
                selected: false,
                options: [
                  { text: 'Yes', value: true },
                  { text: 'No', value: false }
                ],
                options_description: ['If your answer is “Yes”, please update accordingly', 'If your answer is “No”, please go to next question'],
                comments: ''
              },
              {
                type: 'status',
                label: 'Status of implementation',
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
              },

            ]
          }, {
            description: 'Introduce national legislation to reduce negative impacts',
            collection_id: 5149,
            parent_collection_id: 519,
            items: [{
                type: 'changes',
                label: 'Changes in the information provided in the previous report',
                info: 'Please tick the box that applies',
                selected: false,
                options: [
                  { text: 'Yes', value: true },
                  { text: 'No', value: false }
                ],
                options_description: ['If your answer is “Yes”, please update accordingly', 'If your answer is “No”, please go to next question'],
                comments: ''
              },
              {
                type: 'status',
                label: 'Status of implementation',
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
              },

            ]
          }, {
            description: 'Integrate taking dark assemblages into account within impact studies procedures',
            collection_id: 5150,
            parent_collection_id: 519,
            items: [{
                type: 'changes',
                label: 'Changes in the information provided in the previous report',
                info: 'Please tick the box that applies',
                selected: false,
                options: [
                  { text: 'Yes', value: true },
                  { text: 'No', value: false }
                ],
                options_description: ['If your answer is “Yes”, please update accordingly', 'If your answer is “No”, please go to next question'],
                comments: ''
              },
              {
                type: 'status',
                label: 'Status of implementation',
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
              },

            ]
          },
          {
            description: 'Step up awareness and information about dark assemblages with the various actors',
            collection_id: 5151,
            parent_collection_id: 519,
            items: [{
                type: 'changes',
                label: 'Changes in the information provided in the previous report',
                info: 'Please tick the box that applies',
                selected: false,
                options: [
                  { text: 'Yes', value: true },
                  { text: 'No', value: false }
                ],
                options_description: ['If your answer is “Yes”, please update accordingly', 'If your answer is “No”, please go to next question'],
                comments: ''
              },
              {
                type: 'status',
                label: 'Status of implementation',
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
              },

            ]
          }, {
            description: 'Implement monitoring systems',
            collection_id: 5152,
            parent_collection_id: 519,
            items: [{
                type: 'changes',
                label: 'Changes in the information provided in the previous report',
                info: 'Please tick the box that applies',
                selected: false,
                options: [
                  { text: 'Yes', value: true },
                  { text: 'No', value: false }
                ],
                options_description: ['If your answer is “Yes”, please update accordingly', 'If your answer is “No”, please go to next question'],
                comments: ''
              },
              {
                type: 'status',
                label: 'Status of implementation',
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
              },

            ]
          }
        ]
      }, {
        article_title: 'RAP for the conservation of Coralligenous and Other Calcareous Bio-concretions (COP Decision IG 22/12)',
        article_items: [{
          description: 'Improve habitat modeling methods could provide new predictive models on coralligenous distribution and guide cost-effective field surveys for data acquisition. Timeline: 2017',
          collection_id: 5153,
          parent_collection_id: 519,
          items: [{
              type: 'changes',
              label: 'Changes in the information provided in the previous report',
              info: 'Please tick the box that applies',
              selected: false,
              options: [
                { text: 'Yes', value: true },
                { text: 'No', value: false }
              ],
              options_description: ['If your answer is “Yes”, please update accordingly', 'If your answer is “No”, please go to next question'],
            },
            {
              type: 'status',
              label: 'Status of implementation',
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
            },

          ]
        }, {
          description: 'Promote research programs on coralligenous assemblages and maerl beds. Timeline: 2016',
          collection_id: 5154,
          parent_collection_id: 519,
          items: [{
              type: 'changes',
              label: 'Changes in the information provided in the previous report',
              info: 'Please tick the box that applies',
              selected: false,
              options: [
                { text: 'Yes', value: true },
                { text: 'No', value: false }
              ],
              options_description: ['If your answer is “Yes”, please update accordingly', 'If your answer is “No”, please go to next question'],
              comments: ''
            },
            {
              type: 'status',
              label: 'Status of implementation',
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
            },

          ]
        }, {
          description: 'Develop and implement legislation initiatives for the conservation of coralligenous assemblages. Timeline: ongoing',
          collection_id: 5155,
          parent_collection_id: 519,
          items: [{
              type: 'changes',
              label: 'Changes in the information provided in the previous report',
              info: 'Please tick the box that applies',
              selected: false,
              options: [
                { text: 'Yes', value: true },
                { text: 'No', value: false }
              ],
              options_description: ['If your answer is “Yes”, please update accordingly', 'If your answer is “No”, please go to next question'],
              comments: ''
            },
            {
              type: 'status',
              label: 'Status of implementation',
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
            },

          ]
        }, {
          description: 'Coordinate the design of an Integrated Monitoring and Assessment Program for the assessment of the state coralligenous/maërl assemblages in view to be included the assessment of the state of the Mediterranean.Timeline: 2016',
          collection_id: 5156,
          parent_collection_id: 519,
          items: [{
              type: 'changes',
              label: 'Changes in the information provided in the previous report',
              info: 'Please tick the box that applies',
              selected: false,
              options: [
                { text: 'Yes', value: true },
                { text: 'No', value: false }
              ],
              options_description: ['If your answer is “Yes”, please update accordingly', 'If your answer is “No”, please go to next question'],
            },
            {
              type: 'status',
              label: 'Status of implementation',
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
            },

          ]
        }]
      }]
    }
  },




}

export default form
