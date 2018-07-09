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
    label: 'Part I: Legal and regulatory measures',
    collection_id: 601,
    parent_collection_id: 6,
    data: {
      question: 'Question 1: Has the Party, in accordance with Article 14 of the Barcelona Convention, adopted legislation implementing the provisions of the Offshore Protocol as listed in Table I?',
      table_label: 'Table I – LEGAL AND REGULATORY MEASURES',
      collection_id: 602,
      parent_collection_id: 601,
      articles: [{
        article_title: 'Articles 4., 5 and 6 Annex IV Granting of authorizations',
        article_items: [{
          description: 'Exploration and  exploitation offshore activities subject to prior authorization issued by the national competent authority in accordance with Articles 5 and 6 and the criteria set forth in Annex IV',
          collection_id: 6001,
          parent_collection_id: 602,
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
        article_title: 'Article 8 BAT and BEP',
        article_items: [{
          description: 'Obligation upon operators to use the best available, environmentally effective and economically appropriate techniques in order to minimize the risk of offshore pollution',
          collection_id: 6002,
          parent_collection_id: 602,
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
        article_title: 'Article 9 Harmful or noxious substances and materials',
        article_items: [{
          description: 'Prohibition of disposal of harmful and noxious substances and materials listed in Annex I to the Protocol',
          collection_id: 6003,
          parent_collection_id: 602,
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
          description: 'Disposal of harmful and noxious substances and materials listed in Annex II to the Protocol is subject to a prior special permit from the competent national authority in conformity with the criteria set forth in Annex III to the Protocol',
          collection_id: 6004,
          parent_collection_id: 602,
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
          description: 'Disposal of harmful and noxious substances and materials that are not listed in Annexes I and II to the Protocol is subject to a prior general permit from the competent national authority in conformity with the criteria set forth in Annex III to the Protocol',
          collection_id: 6005,
          parent_collection_id: 602,
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
          description: 'Use and storage of offshore chemicals is approved by the competent national authority on the basis of the Chemical Use Plan',
          collection_id: 6006,
          parent_collection_id: 602,
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
        article_title: 'Article 10 Oil and Oily Mixtures and Drilling Fluids and Cuttings',
        article_items: [{
          description: 'Disposal of oil and oily mixtures in accordance with the provisions of Annex V A to the Protocol',
          collection_id: 6007,
          parent_collection_id: 602,
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
          description: 'Use and disposal of drilling fluids and cuttings in accordance with the provisions of Annex V B to the Protocol',
          collection_id: 6008,
          parent_collection_id: 602,
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
        article_title: 'Article 11 Sewage',
        article_items: [{
          description: 'Discharge of sewage prohibited with the exception of those cases provided for in Article 11.1 of the Protocol',
          collection_id: 6009,
          parent_collection_id: 602,
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
        article_title: 'Article 12 Garbage',
        article_items: [{
          description: 'Prohibition of disposal into the Protocol area of all plastics, such as synthetic ropes , synthetic fishing nets and plastic garbage bags and all non- biodegradable garbage, including paper products, rags, galls, metal, bottles, crockery, dunnage, lining and packing materials',
          collection_id: 6010,
          parent_collection_id: 602,
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
          description: 'Disposal of food waste to take place as far away as possible from land in accordance with international rules and standards',
          collection_id: 6011,
          parent_collection_id: 602,
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
        article_title: 'Article 13 Reception facilities',
        article_items: [{
          description: 'Ensure that operators dispose of all waste and harmful or noxious substances and materials in designated onshore reception facilities',
          collection_id: 6012,
          parent_collection_id: 602,
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
        article_title: 'Article 15 Safety Measures',
        article_items: [{
          description: 'Certificate of safety and fitness required to the offshore installation by the competent national authority',
          collection_id: 6013,
          parent_collection_id: 602,
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
        article_title: 'Article 16 Contingency Planning',
        article_items: [{
          description: 'Contingency Plan in accordance with Annex VII to the Protocol required to the operator by the competent national authority',
          collection_id: 6014,
          parent_collection_id: 602,
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
        article_title: 'Article 12 Monitoring',
        article_items: [{
          description: 'Establishment of environmental and compliance monitoring programmes and activities',
          collection_id: 6015,
          parent_collection_id: 602,
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
        article_title: 'Article 20 Removal',
        article_items: [{
          description: 'Obligation upon operators to remove disused offshore installations and pipelines in accordance with the guidelines and standards adopted by the competent international organization',
          collection_id: 6016,
          parent_collection_id: 602,
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
        article_title: 'Article 21 SPA',
        article_items: [{
          description: 'Adoption of special measures to prevent, abate, combat and control pollution in specially protected areas arising from offshore activities in these areas',
          collection_id: 6017,
          parent_collection_id: 602,
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
    }
  },
  tab_2: {
    label: 'Part II: Permits and quantities',
    collection_id: 603,
    parent_collection_id: 6,
    data: {
      table_label: 'TABLE II - Biennial Summary of Permits and Quantities',
      collection_id: 604,
      parent_collection_id: 603,
        table_article_label: '2.1 1994 Protocol Article',
        table_aritcle_description: 'Reference to Articles pertaining to permits',

        articles: [{
            article_title: '1994 Protocol Article 9.5, Annex II',
            article_items: [{
              items: [{
                  type: 'text',
                  label: '2.2 Type of Permit',
                  name: 'permit_type',
                  description: 'Permit types are listed in the 1976 Protocol or the 1995 Protocol;',
                  selected: 'Special Permit',
                  disabled: true,
                  info: '',
                },
                {
                  type: 'text',
                  label: '2.3 Waste Category',
                  name: 'waste_cateogry',
                  description: '1976 Protocol waste categories vary by permit; 1995 Protocol waste categories are defined in Article 4.2 of the Protocol',
                  info: 'Specify waste category',
                  selected: '',
                },
                {
                  type: 'text',
                  label: '2.4 Total Number of New Permits Issued',
                  description: 'Total of all new permits issued, single year valid permits and valid multiple year permits under a "Type of',
                  name: 'permits_number_issued',
                  selected: '',
                  info: '',
                },
                {
                  type: 'text',
                  label: '2.5.1 Total Quantity of a Waste Category Permitted for Dumping at Sea',
                  description: 'Total quantity of a specific waste that was permitted for dumping at sea at a dump site during the reporting period',
                  name: 'waste_quantity_permited',
                  selected: '',
                  info: '',
                },
                {
                  type: 'text',
                  label: '2.5.2 Waste Reporting Unit',
                  description: 'Reporting units used by the permitting authority for a specific waste',
                  name: 'waste_reporting_unit',
                  selected: '',
                  info: 'Depends on waste dumped',
                },
                {
                  type: 'text',
                  label: '2.6.1 Total Quantity of a Waste Category Actually Dumped at Sea',
                  description: 'Total quantity of a specific waste that was actually dumped at the dump site during the reporting period',
                  name: 'waste_quanity_actual',
                  selected: '',
                  info: '',
                },
                {
                  type: 'text',
                  label: '2.6.2 Waste Reporting Units',
                  description: 'Reporting units used by the permitting authority for a waste',
                  name: 'waste_reporting_units',
                  selected: '',
                  info: 'Depends on waste dumped',
                },
                {
                  type: 'text',
                  label: '2.7 Dumping at Sea Operations Regulated by Other Means',
                  description: 'Provide information on other programs that also manage dumping at sea  operations,',
                  name: 'dumping_regulated',
                  selected: '',
                  info: '',
                },
                {
                  type: 'textarea',
                  label: '2.8 Notes',
                  description: 'Brief notes on any entry in Table 2',
                  name: 'notes',
                  selected: '',
                  info: '',
                }
              ]
            }]
          },
          {
            article_title: '1994 Protocol Article 9.6',
            article_items: [{
              items: [{
                  type: 'text',
                  label: '2.2 Type of Permit',
                  name: 'permit_type',
                  description: 'Permit types are listed in the 1976 Protocol or the 1995 Protocol;',
                  selected: 'General Permit',
                  disabled: true,
                  info: '',
                },
                {
                  type: 'text',
                  label: '2.3 Waste Category',
                  name: 'waste_cateogry',
                  description: '1976 Protocol waste categories vary by permit; 1995 Protocol waste categories are defined in Article 4.2 of the Protocol',
                  info: 'Specify waste category',
                  selected: '',
                },
                {
                  type: 'text',
                  label: '2.4 Total Number of New Permits Issued',
                  description: 'Total of all new permits issued, single year valid permits and valid multiple year permits under a "Type of',
                  name: 'permits_number_issued',
                  selected: '',
                  info: '',
                },
                {
                  type: 'text',
                  label: '2.5.1 Total Quantity of a Waste Category Permitted for Dumping at Sea',
                  description: 'Total quantity of a specific waste that was permitted for dumping at sea at a dump site during the reporting period',
                  name: 'waste_quantity_permited',
                  selected: '',
                  info: '',
                },
                {
                  type: 'text',
                  label: '2.5.2 Waste Reporting Unit',
                  description: 'Reporting units used by the permitting authority for a specific waste',
                  name: 'waste_reporting_unit',
                  selected: '',
                  info: 'Depends on waste dumped',
                },
                {
                  type: 'text',
                  label: '2.6.1 Total Quantity of a Waste Category Actually Dumped at Sea',
                  description: 'Total quantity of a specific waste that was actually dumped at the dump site during the reporting period',
                  name: 'waste_quanity_actual',
                  selected: '',
                  info: '',
                },
                {
                  type: 'text',
                  label: '2.6.2 Waste Reporting Units',
                  description: 'Reporting units used by the permitting authority for a waste',
                  name: 'waste_reporting_units',
                  selected: '',
                  info: 'Depends on waste dumped',
                },
                {
                  type: 'text',
                  label: '2.7 Dumping at Sea Operations Regulated by Other Means',
                  description: 'Provide information on other programs that also manage dumping at sea  operations,',
                  name: 'dumping_regulated',
                  selected: '',
                  info: '',
                },
                {
                  type: 'textarea',
                  label: '2.8 Notes',
                  description: 'Brief notes on any entry in Table 2',
                  name: 'notes',
                  selected: '',
                  info: '',
                }
              ]
            }]
          },
          {
            article_title: '1994 Protocol Article 14.1.a',
            article_items: [{
              items: [{
                  type: 'text',
                  label: '2.2 Type of Permit',
                  name: 'permit_type',
                  description: 'Permit types are listed in the 1976 Protocol or the 1995 Protocol;',
                  selected: 'Force Majeure',
                  disabled: true,
                  info: '',
                },
                {
                  type: 'text',
                  label: '2.3 Waste Category',
                  name: 'waste_cateogry',
                  description: '1976 Protocol waste categories vary by permit; 1995 Protocol waste categories are defined in Article 4.2 of the Protocol',
                  info: 'Specify waste category',
                  selected: '',
                },
                {
                  type: 'text',
                  label: '2.4 Total Number of New Permits Issued',
                  description: 'Total of all new permits issued, single year valid permits and valid multiple year permits under a "Type of',
                  name: 'permits_number_issued',
                  selected: '',
                  info: '',
                },
                {
                  type: 'text',
                  label: '2.5.1 Total Quantity of a Waste Category Permitted for Dumping at Sea',
                  description: 'Total quantity of a specific waste that was permitted for dumping at sea at a dump site during the reporting period',
                  name: 'waste_quantity_permited',
                  selected: '',
                  info: '',
                },
                {
                  type: 'text',
                  label: '2.5.2 Waste Reporting Unit',
                  description: 'Reporting units used by the permitting authority for a specific waste',
                  name: 'waste_reporting_unit',
                  selected: '',
                  info: 'Depends on waste dumped',
                },
                {
                  type: 'text',
                  label: '2.6.1 Total Quantity of a Waste Category Actually Dumped at Sea',
                  description: 'Total quantity of a specific waste that was actually dumped at the dump site during the reporting period',
                  name: 'waste_quanity_actual',
                  selected: '',
                  info: '',
                },
                {
                  type: 'text',
                  label: '2.6.2 Waste Reporting Units',
                  description: 'Reporting units used by the permitting authority for a waste',
                  name: 'waste_reporting_units',
                  selected: '',
                  info: 'Depends on waste dumped',
                },
                {
                  type: 'text',
                  label: '2.7 Dumping at Sea Operations Regulated by Other Means',
                  description: 'Provide information on other programs that also manage dumping at sea  operations,',
                  name: 'dumping_regulated',
                  selected: '',
                  info: '',
                },
                {
                  type: 'textarea',
                  label: '2.8 Notes',
                  description: 'Brief notes on any entry in Table 2',
                  name: 'notes',
                  selected: '',
                  info: 'Website/URL link or other reference to MEDPOL Report',
                }
              ]
            }]
          },
          {
            article_title: '1994 Protocol Article 14.1.b',
            article_items: [{
              items: [{
                  type: 'text',
                  label: '2.2 Type of Permit',
                  name: 'permit_type',
                  description: 'Permit types are listed in the 1976 Protocol or the 1995 Protocol;',
                  selected: 'Minimize Pollution Permit',
                  disabled: true,
                  info: '',
                },
                {
                  type: 'text',
                  label: '2.3 Waste Category',
                  name: 'waste_cateogry',
                  description: '1976 Protocol waste categories vary by permit; 1995 Protocol waste categories are defined in Article 4.2 of the Protocol',
                  info: 'Specify waste category',
                  selected: '',
                },
                {
                  type: 'text',
                  label: '2.4 Total Number of New Permits Issued',
                  description: 'Total of all new permits issued, single year valid permits and valid multiple year permits under a "Type of',
                  name: 'permits_number_issued',
                  selected: '',
                  info: '',
                },
                {
                  type: 'text',
                  label: '2.5.1 Total Quantity of a Waste Category Permitted for Dumping at Sea',
                  description: 'Total quantity of a specific waste that was permitted for dumping at sea at a dump site during the reporting period',
                  name: 'waste_quantity_permited',
                  selected: '',
                  info: '',
                },
                {
                  type: 'text',
                  label: '2.5.2 Waste Reporting Unit',
                  description: 'Reporting units used by the permitting authority for a specific waste',
                  name: 'waste_reporting_unit',
                  selected: '',
                  info: 'Depends on waste dumped',
                },
                {
                  type: 'text',
                  label: '2.6.1 Total Quantity of a Waste Category Actually Dumped at Sea',
                  description: 'Total quantity of a specific waste that was actually dumped at the dump site during the reporting period',
                  name: 'waste_quanity_actual',
                  selected: '',
                  info: '',
                },
                {
                  type: 'text',
                  label: '2.6.2 Waste Reporting Units',
                  description: 'Reporting units used by the permitting authority for a waste',
                  name: 'waste_reporting_units',
                  selected: '',
                  info: 'Depends on waste dumped',
                },
                {
                  type: 'text',
                  label: '2.7 Dumping at Sea Operations Regulated by Other Means',
                  description: 'Provide information on other programs that also manage dumping at sea  operations,',
                  name: 'dumping_regulated',
                  selected: '',
                  info: '',
                },
                {
                  type: 'textarea',
                  label: '2.8 Notes',
                  description: 'Brief notes on any entry in Table 2',
                  name: 'notes',
                  selected: '',
                  info: 'Website/URL link or other reference to MEDPOL Report',
                }
              ]
            }]
          }
        ]

    }
  },
  tab_3: {
    label: 'Part III: Inventory of offshore installations',
    collection_id: 605,
    parent_collection_id: 6,
    data: {
      question: '',
      table_label: 'Table III – Inventory of offshore installations including disused installations',
      collection_id: 606,
      parent_collection_id: 605,
      articles: []
    }
  },
  tab_4: {
    label: 'Part IV: Enforcement',
    collection_id: 607,
    parent_collection_id: 6,
    data: {
      question: '',
      table_label: 'Table IV – Enforcement measures',
      collection_id: 608,
      parent_collection_id: 607,
      articles: [{
        article_title: 'Protocol obligations and national legislation and regulations implementing the Protocol - Article 3 of the Protocol',
        collection_id: 6018,
        parent_collection_id: 608,
        article_items: [{
          label: 'Number of inspections',
          type: 'number',
          name: 'inspections',
          value: '',
        }, {
          label: 'Number of non-compliance cases',
          type: 'number',
          name: 'non_compliance',
          value: '',
        }, {
          label: 'Number of fines issued and total amount',
          type: 'number',
          name: 'total_amount',
          value: '',
        }, {
          label: 'Number of suspensions of authorizations or permits',
          type: 'number',
          name: 'suspensions',
          value: '',
        }, {
          label: 'Number of operation shutdowns',
          type: 'number',
          name: 'shutdowns',
          value: '',
        }, {
          label: 'Number of other enforcement measures',
          type: 'number',
          name: 'enforcement',
          value: '',
        }, {
          label: 'Number of clean measures implemented',
          type: 'number',
          name: 'implemented',
          value: '',
        }, {
          label: 'Remarks/Comments',
          type: 'textarea',
          name: 'remarks',
          value: '',
        }]
      },{
        article_title: 'Specific conditions attached to authorizations or permits-Article 4 and 5',
        collection_id: 6019,
        parent_collection_id: 608,
        article_items: [{
          label: 'Number of inspections',
          type: 'number',
          name: 'inspections',
          value: '',
        }, {
          label: 'Number of non-compliance cases',
          type: 'number',
          name: 'non_compliance',
          value: '',
        }, {
          label: 'Number of fines issued and total amount',
          type: 'number',
          name: 'total_amount',
          value: '',
        }, {
          label: 'Number of suspensions of authorizations or permits',
          type: 'number',
          name: 'suspensions',
          value: '',
        }, {
          label: 'Number of operation shutdowns',
          type: 'number',
          name: 'shutdowns',
          value: '',
        }, {
          label: 'Number of other enforcement measures',
          type: 'number',
          name: 'enforcement',
          value: '',
        }, {
          label: 'Number of clean measures implemented',
          type: 'number',
          name: 'implemented',
          value: '',
        }, {
          label: 'Remarks/Comments',
          type: 'textarea',
          name: 'remarks',
          value: '',
        }]
      },{
        article_title: 'Provisions regarding to illegal disposal-Article 9',
        collection_id: 6020,
        parent_collection_id: 608,
        article_items: [{
          label: 'Number of inspections',
          type: 'number',
          name: 'inspections',
          value: '',
        }, {
          label: 'Number of non-compliance cases',
          type: 'number',
          name: 'non_compliance',
          value: '',
        }, {
          label: 'Number of fines issued and total amount',
          type: 'number',
          name: 'total_amount',
          value: '',
        }, {
          label: 'Number of suspensions of authorizations or permits',
          type: 'number',
          name: 'suspensions',
          value: '',
        }, {
          label: 'Number of operation shutdowns',
          type: 'number',
          name: 'shutdowns',
          value: '',
        }, {
          label: 'Number of other enforcement measures',
          type: 'number',
          name: 'enforcement',
          value: '',
        }, {
          label: 'Number of clean measures implemented',
          type: 'number',
          name: 'implemented',
          value: '',
        }, {
          label: 'Remarks/Comments',
          type: 'textarea',
          name: 'remarks',
          value: '',
        }]
      },{
        article_title: 'Provisions regarding safety measures-Article',
        collection_id: 6021,
        parent_collection_id: 608,
        article_items: [{
          label: 'Number of inspections',
          type: 'number',
          name: 'inspections',
          value: '',
        }, {
          label: 'Number of non-compliance cases',
          type: 'number',
          name: 'non_compliance',
          value: '',
        }, {
          label: 'Number of fines issued and total amount',
          type: 'number',
          name: 'total_amount',
          value: '',
        }, {
          label: 'Number of suspensions of authorizations or permits',
          type: 'number',
          name: 'suspensions',
          value: '',
        }, {
          label: 'Number of operation shutdowns',
          type: 'number',
          name: 'shutdowns',
          value: '',
        }, {
          label: 'Number of other enforcement measures',
          type: 'number',
          name: 'enforcement',
          value: '',
        }, {
          label: 'Number of clean measures implemented',
          type: 'number',
          name: 'implemented',
          value: '',
        }, {
          label: 'Remarks/Comments',
          type: 'textarea',
          name: 'remarks',
          value: '',
        }]
      }]
    }
  }
}

export default form
