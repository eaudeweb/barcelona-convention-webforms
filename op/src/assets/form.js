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
      question: '',
      table_label: 'Table II – Biennial Summary of Permits and Quantities',
      collection_id: 604,
      parent_collection_id: 603,
      articles: [{
          article_title: 'TODO',
          article_items: [{
            description: 'TODO',
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
  tab_3: {
    label: 'Part III: Inventory of offshore installations',
    collection_id: 605,
    parent_collection_id: 6,
    data: {
      question: '',
      table_label: 'Table III – Inventory of offshore installations including disused installations',
      collection_id: 606,
      parent_collection_id: 605,
      articles: [{
        article_title: {
          label: 'Operator',
          type: 'text',
          name: 'operator',
          selected: '',
        },
        article_items: [{
          label: 'Production Start',
          description: '',
          type: 'date',
          name: 'production_start',
          selected: '',
        },{
          label: 'Current status',
          type: 'select',
          name: 'current_status',
          options: {},
          selected: '',
        },{
          label: 'Primary Production',
          type: 'select',
          name: 'primary_production',
          options: {},
          selected: '',
        },{
          label: 'Category',
          type: 'select',
          name: 'category',
          options: {},
          selected: '',
        },{
          label: 'Weight Substructure',
          description: 'tonnes',
          type: 'number',
          name: 'weight_substructure',
          selected: '',
        },{
          label: 'Weight Topside',
          description: 'tonnes',
          type: 'number',
          name: 'weight_topside',
          selected: '',
        },{
          label: 'Remarks',
          description: 'E.g. measures taken to not affect other legitimate uses of the sea: navigation, fishing and the protection of the marine environment',
          type: 'text',
          name: 'remarks',
          selected: '',
        }]
      }]
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
          type: 'text',
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
          type: 'text',
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
          type: 'text',
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
          type: 'text',
          name: 'remarks',
          value: '',
        }]
      }]
    }
  }
}

export default form
