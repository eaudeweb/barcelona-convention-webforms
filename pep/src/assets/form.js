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
    collection_id: 301,
    parent_collection_id: 3,
    data: {
      question: 'Has the Party, in accordance with Article 14 of the Barcelona Convention, adopted legislation implementing the provisions of the Prevention and Emergency Protocol, as listed in Table I below?',
      table_label: 'Table I – LEGAL AND REGULATORY MEASURES',
      collection_id: 302,
      parent_collection_id: 301,
      articles: [{
        article_title: 'Article 4.1',
        article_items: [{
          description: 'Maintenance and promotion of contingency plans and other means (i.e. pre-positioned response equipment and training courses for both operating and supervisory level response personnel) of preventing and combating oil and hazardous and noxious substances(HNS) pollution incidents',
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
              options_description: ['If your answer is “Yes”, please provide link to relevant part of REMPEC Country Profile and/or title, date of enactment and a summary of the relevant provisions (Indicate website/URL link or other reference)', 'If your answer is “No”, please in the column difficulties/challenges, tick all that apply'],
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
          description: 'Designation of a national authority or authorities responsible for the implementation of the Prevention and Emergency Protocol',
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
              options_description: ['If your answer is “Yes”, please provide link to relevant part of REMPEC Country Profile and/or title, date of enactment and a summary of the relevant provisions (Indicate website/URL link or other reference)', 'If your answer is “No”, please in the column difficulties/challenges, tick all that apply'],
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
        article_title: 'Article 4.3',
        article_items: [{
          description: 'Informing the Regional Centre (REMPEC) every two years of the measures taken for the implementation of the Prevention and Emergency Protocol',
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
        article_title: 'Article 5',
        article_items: [{
          description: 'Development of monitoring and surveillance programmes and activities aimed at detecting oil and HNS pollution incidents whether accidental or operational and illicit discharges',
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
              options_description: ['If your answer is “Yes”, please provide link to MENELAS information system and/or title, date of enactment and a summary of the relevant provisions (Indicate website/URL link or other reference)', 'If your answer is “No”, please in the column difficulties/challenges, tick all that apply'],
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
        article_title: 'Article 9.1',
        article_items: [{
          description: 'Issuing of instructions to masters of ships flying your flag and pilots of aircrafts registered in their territory to report on actual or potential oil and HNS pollution incidents to the designated national authority or authorities and the nearest Coastal State',
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
        article_title: 'Article 9.2',
        article_items: [{
          description: 'Ensuring that the master of every ship sailing in their territorial waters report on actual or potential oil and HNS pollution incidents to the designated national authority or authorities and the nearest Coastal State',
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
        article_title: 'Article 9.3 Article 9.4',
        article_items: [{
          description: 'Issuing of instructions to Port and Port Facility Authorities and offshore installations under their jurisdiction to report on actual or potential oil and HNS pollution incidents to the designated national authorities or authorities',
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
        article_title: 'Article 9.6 Article 9.7',
        article_items: [{
          description: 'Communication to REMPEC and those Contracting Parties likely to be affected of information on actual or potential oil and HNS pollution incidents collected by masters of ships flying your flag, pilots of aircrafts registered in your territory, Port and Port Facility Authorities and offshore installations under their jurisdiction',
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
        article_title: 'Article 10.1',
        article_items: [{
          description: 'Conducting oil and HNS pollution incident assessments (i.e. nature, extent and possible consequences) and taking every practical measure to prevent, reduce and, to the fullest possible extent, eliminate the effects of the pollution incident',
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
        article_title: 'Article 11.1',
        article_items: [{
          description: 'Ensuring that ships flying their flag have on board a pollution emergency plan as required by, and in accordance with, the relevant international regulations',
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
        article_title: 'Article 11.2',
        article_items: [{
          description: 'Masters of ships flying their flag follow the procedures described in the shipboard emergency plan in case of oil and HNS pollution incidents',
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
        article_title: 'Article 11.3',
        article_items: [{
          description: 'Ensuring that the master of every ship sailing in their territorial waters follows the procedures described in the shipboard emergency plan in case of oil and HNS pollution incidents',
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
          description: 'Authorities or operators in charge of sea ports handling facilities have pollution emergency plans or other similar arrangements coordinated with the national system',
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
        article_title: 'Article 11.5',
        article_items: [{
          description: 'Operators in charge of offshore installations under their jurisdiction have a contingency plan coordinated with the national system',
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
        article_title: 'Article 12.3',
        article_items: [{
          description: 'Taking the necessary legal or administrative measures to facilitate the entry into, stay in and departure from their national territory of equipment, products and personnel engaged in responding to a pollution incident',
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
        article_title: 'Article 14',
        article_items: [{
          description: 'Ensuring that port reception facilities meeting the needs of ships (including pleasure craft), are available in their ports and terminals',
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
          description: 'Ensuring that port reception facilities are used efficiently, without causing any undue delay to ships and limiting discharges to the marine environment',
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
          description: 'Ensuring that ships using the ports of the Parties are provided with updated information with respect to obligations under the MARPOL Convention and applicable national legislation',
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
        article_title: 'Article 15',
        article_items: [{
          description: 'Assessing the environmental risks of the recognized routes used in maritime traffic',
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
          description: 'Taking appropriate measures aimed at reducing the risks of accidents or their environmental consequences',
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
        article_title: 'Article 16',
        article_items: [{
          description: 'Defining national, sub-regional or regional strategies concerning reception in ports and places of refuge, of ships in distress presenting a threat to the marine environment',
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
        article_title: 'Article 7',
        optional: true,
        article_items: [{
          description: 'Dissemination of information on designated national authorities with responsibilities, including operational responsibilities, in case of oil and HNS pollution incidents',
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
              options_description: ['If your answer is “Yes”, please provide link to relevant part of REMPEC Country Profile and/or title, date of enactment and a summary of the relevant provisions (Indicate website/URL link or other reference)', 'If your answer is “No”, please in the column difficulties/challenges, tick all that apply'],
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
          description: 'Dissemination of information on national regulations and other matters directly related to preparedness for and response to pollution of the sea by oil or other hazardous and noxious substances',
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
              options_description: ['If your answer is “Yes”, please provide link to relevant part of REMPEC Country Profile and/or title, date of enactment and a summary of the relevant provisions (Indicate website/URL link or other reference)', 'If your answer is “No”, please in the column difficulties/challenges, tick all that apply'],
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
          description: 'Dissemination of information on new ways in which pollution of the sea by oil or other hazardous and noxious substances may be avoided, new measures for combating pollution, new developments in the technology of conducting monitoring and the development of research programmes.',
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
        article_title: 'Article 8',
        optional: true,
        article_items: [{
          description: 'Coordination of the means of communication to ensure, with the necessary speed ad and reliability, the reception, transmission and dissemination of reports and urgent information concerning pollution incidents',
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
    label: 'Part II: POLLUTION PREPAREDNESS AND RESPONSE: OPERATIONAL MEASURES',
    collection_id: 303,
    parent_collection_id: 3,
    data: {
      question: '',
      table_label: 'Table II – OPERATIONAL MEASURES',
      collection_id: 304,
      parent_collection_id: 303,
      articles: [{
        article_title: 'Article 4',
        article_items: [{
            description: 'National response strategy for marine pollution incidents adopted including a policy for the use of dispersants',
            items: [{
                type: 'status',
                label: 'Status',
                info: 'Please tick the box that applies',
                selected: null,
                options: [
                  { text: 'Yes', value: 1 },
                  { text: 'Under preparation', value: 2 },
                  { text: 'Under revision', value: 3 },
                  { text: 'No', value: 4 }
                ],
                options_description: ['If your answer is “Yes” provide link to the relevant part of REMPEC Country Profile and/or national datasets for details (website/URL link/other reference)', 'If your answer is ”No”, please in the column difficulties/challenges, tick all that apply'],
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
                options_description: ['On a voluntary basis, please briefly describe difficulties/challenges and the type of assistance that is required'],
                comments: ''
              }
            ]
          }, {
            description: 'National Contingency Plan covers:',
            items: [{
              type: 'special',
              label: 'Plans',
              info: 'Please tick all that apply',
              selected: [],
              options: [
                { text: 'Oil', value: 1 },
                { text: 'HNS (Hazardous and Noxious Substances)', value: 2 },
                { text: 'Both oil and HNS', value: 3 }
              ],
              options_description: [''],
            }]
          },
          {
            description: 'National stockpiles of pre-positioned oil and HNS spill response equipment, including naval and aerial means, established',
            items: [{
                type: 'status',
                label: 'Status',
                info: 'Please tick the box that applies',
                selected: null,
                options: [
                  { text: 'Yes', value: 1 },
                  { text: 'No', value: 4 }
                ],
                options_description: ['If your answer is “Yes” provide link to MEDGIS-MAR* and/or national datasets for details (website/URL link/other reference)', 'If your answer is ”No”, please in the column difficulties/challenges, tick all that apply'],
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
                options_description: ['On a voluntary basis, please briefly describe difficulties/challenges and the type of assistance that is required'],
                comments: ''
              }
            ]
          }, {
            description: 'Regular exercises are carried out to test the National Contingency Plan',
            items: [{
                type: 'status',
                label: 'Status',
                info: 'Please tick the box that applies',
                selected: null,
                options: [
                  { text: 'Yes', value: 1 },
                  { text: 'No', value: 4 }
                ],
                options_description: ['If your answer is “Yes, provide link to the relevant part of REMPEC Country Profile and/or national data sets for details (website/URL link/other reference)', 'If your answer is ”No”, please in the column difficulties/challenges, tick all that apply'],
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
                options_description: ['On a voluntary basis, please briefly describe difficulties/challenges and the type of assistance that is required'],
                comments: ''
              }
            ]
          }, {
            description: 'Local contingency plans, including port contingency plans, adopted',
            items: [{
                type: 'status',
                label: 'Status',
                info: 'Please tick the box that applies',
                selected: null,
                options: [
                  { text: 'Yes', value: 1 },
                  { text: 'Under preparation', value: 2 },
                  { text: 'Under revision', value: 3 },
                  { text: 'No', value: 4 }
                ],
                options_description: ['If your answer is “Yes” provide link to the relevant part of REMPEC country profile and/or national datasets for details (website/URL link/other reference)', 'If your answer is ”No”, please in the column difficulties/challenges, tick all that apply'],
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
                options_description: ['On a voluntary basis, please briefly describe difficulties/challenges and the type of assistance that is required'],
                comments: ''
              }
            ]
          }, {
            description: 'Local plans, including port contingency plans, are integrated with the National Contingency Plan',
            items: [{
                type: 'status',
                label: 'Status',
                info: 'Please tick the box that applies',
                selected: null,
                options: [
                  { text: 'Yes', value: 1 },
                  { text: 'No', value: 4 },
                  { text: 'In process of integration', value: 3 }
                ],
                options_description: ['If your answer is “Yes” on a voluntary basis provide website/URL link/other reference for details', 'If your answer is ”No”, please in the column difficulties/challenges, tick all that apply'],
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
                options_description: ['On a voluntary basis, please briefly describe difficulties/challenges and the type of assistance that is required'],
                comments: ''
              }
            ]
          }, {
            description: 'Local plans, including port contingency plans, are integrated with the industry emergency procedures',
            items: [{
                type: 'status',
                label: 'Status',
                info: 'Please tick the box that applies',
                selected: null,
                options: [
                  { text: 'Yes', value: 1 },
                  { text: 'No', value: 4 }
                ],
                options_description: ['If your answer is “Yes” on a voluntary basis provide website/URL link/other reference for details', 'If your answer is ”No”, please in the column difficulties/challenges, tick all that apply'],
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
                options_description: ['On a voluntary basis, please briefly describe difficulties/challenges and the type of assistance that is required'],
                comments: ''
              }
            ]
          }, {
            description: 'Participation in sub-regional agreements regarding emergency situations adopted',
            items: [{
                type: 'status',
                label: 'Status',
                info: 'Please tick the box that applies',
                selected: null,
                options: [
                  { text: 'Yes', value: 1 },
                  { text: 'No', value: 4 }
                ],
                options_description: ['If your answer is “Yes” provide link to the relevant part of REMPEC country profile and/or national datasets for details (website/URL link/other reference)', 'If your answer is ”No”, please in the column difficulties/challenges, tick all that apply'],
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
                options_description: ['On a voluntary basis, please briefly describe difficulties/challenges and the type of assistance that is required'],
                comments: ''
              }
            ]
          }
        ]
      }]
    }
  },
  tab_3: {
    label: 'Part III: POLLUTION  INCIDENTS',
    collection_id: 305,
    parent_collection_id: 3,
    data: {
      question: {
        label: 'Information on Pollution Incidents provided in MEDGIS- MAR for the current biennium',
        info: 'Please, tick the box that applies',
        selected: null,
        options: [{
          value: true,
          text: 'Yes',
        }, {
          value: false,
          text: 'No',
        }],
        options_description: ['If your answer is “Yes”, no need to fill out this table', 'If your answer is “No” please fill out this Table'],
      },
      table_label: 'Table III - POLLUTION INCIDENTS',
      collection_id: 306,
      parent_collection_id: 305,
      articles: [
       // HERE PUSH INCIDENT.js STUFF
      ]
    }
  },
}

export default form
