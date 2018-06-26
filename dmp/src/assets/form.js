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
      question: 'Has the Party, in accordance with Article 14 of the Barcelona Convention, adopted legislation implementing the provisions of the Dumping Protocol, as listed in Table I below?',
      table_label: 'Table I – LEGAL AND REGULATORY MEASURES',
      articles: [{
        article_title: 'Article 4.1',
        article_items: [{
          description: 'Prohibition of dumping of wastes and other matter with the exception of those listed in Article4.2',
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
        article_title: 'Article 5, Article 6, Article 10.1',
        article_items: [{
          description: 'Dumping of wastes and other matter listed in Article 4.2 is subject to a prior special permit from the designated competent national authority or authorities in conformity with the criteria set forth in the Annex to the Protocol and the related Guidelines adopted by the Meetings of the Contracting Parties',
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
          description: 'Designated competent national authority or authorities keep(s) records of the nature and quantities of the waste or other matter, dumping location and method',
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
        article_items: [{
          description: 'Prohibition of incineration at sea',
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
        article_items: [{
          description: 'Force majeure dumping at sea is conducted under the conditions set out in Article 8 and reported to UNEP/MAP Secretariat immediately',
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
        article_title: 'Article 9',
        article_items: [{
          description: 'Critical dumping at sea is conducted under the conditions set out in Article 95 and UNEP/MAP Secretariat consulted immediately',
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
        article_title: 'Article 10.2',
        article_items: [{
          description: 'Dumping permits provided for in Article 5 are issued for wastes or other matter loaded in your territory or loaded in the territory of a non-Contracting Party',
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
        article_title: 'Article 11',
        article_items: [{
          description: 'Application of measures to implement this Protocol to your vessels and aircrafts, those loading in your territory and those believed to be engaged in dumping in areas under your jurisdiction.',
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
        article_title: 'Article 12',
        optional: true,
        article_items: [{
          description: 'Issuing of instructions to maritime inspection ships and aircraft and other appropriate services to report to the relevant national authorities any incidents or conditions giving rise to suspicions that dumping in contravention to the Protocol had occurred or was about to occur',
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
    label: 'Part II: DUMPING AT SEA PERMITS AND QUANTITIES',
    data: {
      table_1: {
        question: '',
        table_label: 'Table 2a . Biennial Summary of Dumping at Sea Permits and Quantities',
        table_note: 'Tables 2 to 5 harmonized to follow the Revised Electronic Reporting Format of the London Convention and its Protocol on Dumping (LC 33/15 Annex 5)',

        table_article_label: '2.1 1976 Protocol Article or 1995 Protocol Article',
        table_aritcle_description: 'Reference to Articles pertaining to permits',

        articles: [{
            article_title: '1976 Protocol Article 5, Annex II',
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
                  name: 'waste_reporting_units_2',
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
                  type: 'text',
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
            article_title: '1976 Protocol Article 6',
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
                  type: 'text',
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
            article_title: '1976 Protocol Article 8',
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
                  type: 'text',
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
            article_title: '1976 Protocol Article 9',
            article_items: [{
              items: [{
                  type: 'text',
                  label: '2.2 Type of Permit',
                  name: 'permit_type',
                  description: 'Permit types are listed in the 1976 Protocol or the 1995 Protocol;',
                  selected: 'Critical Situation',
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
                  type: 'text',
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
            article_title: '1995 Protocol Article 4.2.a',
            article_items: [{
              items: [{
                  type: 'text',
                  label: '2.2 Type of Permit',
                  name: 'permit_type',
                  description: 'Permit types are listed in the 1976 Protocol or the 1995 Protocol;',
                  selected: 'Permit',
                  disabled: true,
                  info: '',
                },
                {
                  type: 'text',
                  label: '2.3 Waste Category',
                  name: 'waste_cateogry',
                  description: '1976 Protocol waste categories vary by permit; 1995 Protocol waste categories are defined in Article 4.2 of the Protocol',
                  selected: 'Dredged Material',
                  info: '',
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
                  info: 'e.g. cubic metres, cubic yards, tonnes; expressed as dry weight, if possible',
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
                  info: 'e.g. cubic metres, cubic yards, tonnes; expressed as dry weight, if possible',
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
                  type: 'text',
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
            article_title: '1995 Protocol Article 4.2.b',
            article_items: [{
              items: [{
                  type: 'text',
                  label: '2.2 Type of Permit',
                  name: 'permit_type',
                  description: 'Permit types are listed in the 1976 Protocol or the 1995 Protocol;',
                  selected: 'Permit',
                  disabled: true,
                  info: '',
                },
                {
                  type: 'text',
                  label: '2.3 Waste Category',
                  name: 'waste_cateogry',
                  description: '1976 Protocol waste categories vary by permit; 1995 Protocol waste categories are defined in Article 4.2 of the Protocol',
                  selected: '',
                  info: 'Fish Waste or Organic Materials Resulting from the Processing of Fish and other Marine Organisms',
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
                  info: 'e.g. tonnes (wet weight)',
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
                  info: 'e.g. tonnes (wet weight)',
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
                  type: 'text',
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
            article_title: '1995 Protocol Article 4.d',
            article_items: [{
              items: [{
                  type: 'text',
                  label: '2.2 Type of Permit',
                  name: 'permit_type',
                  description: 'Permit types are listed in the 1976 Protocol or the 1995 Protocol;',
                  selected: 'Permit',
                  disabled: true,
                  info: '',
                },
                {
                  type: 'text',
                  label: '2.3 Waste Category',
                  name: 'waste_cateogry',
                  description: '1976 Protocol waste categories vary by permit; 1995 Protocol waste categories are defined in Article 4.2 of the Protocol',
                  selected: '',
                  info: 'Platforms or Other Man Made Structures at Sea',
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
                  info: 'Number of Platforms or Other Man Made Structures at Sea',
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
                  info: 'Number of Platforms or Other Man Made Structures at Sea',
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
                  type: 'text',
                  label: '2.8 Notes',
                  description: 'Brief notes on any entry in Table 2',
                  name: 'notes',
                  selected: '',
                  info: 'Describe the   platforms or other man- made structures',
                }
              ]
            }]
          },
          {
            article_title: '1995 Protocol Article 4.e',
            article_items: [{
              items: [{
                  type: 'text',
                  label: '2.2 Type of Permit',
                  name: 'permit_type',
                  description: 'Permit types are listed in the 1976 Protocol or the 1995 Protocol;',
                  selected: 'Permit',
                  disabled: true,
                  info: '',
                },
                {
                  type: 'text',
                  label: '2.3 Waste Category',
                  name: 'waste_cateogry',
                  description: '1976 Protocol waste categories vary by permit; 1995 Protocol waste categories are defined in Article 4.2 of the Protocol',
                  selected: '',
                  info: 'Inert Uncontaminated Geological Material',
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
                  info: 'e.g. tonnes (dry weight)',
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
                  info: 'e.g. tonnes (dry weight)',
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
                  type: 'text',
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
            article_title: '1995 Protocol Article 8',
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
                  selected: '',
                  info: 'Specify waste category',
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
                  type: 'text',
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
            article_title: '1995 Protocol Article 9',
            article_items: [{
              items: [{
                  type: 'text',
                  label: '2.2 Type of Permit',
                  name: 'permit_type',
                  description: 'Permit types are listed in the 1976 Protocol or the 1995 Protocol;',
                  selected: 'Critical Situation',
                  disabled: true,
                  info: '',
                },
                {
                  type: 'text',
                  label: '2.3 Waste Category',
                  name: 'waste_cateogry',
                  description: '1976 Protocol waste categories vary by permit; 1995 Protocol waste categories are defined in Article 4.2 of the Protocol',
                  selected: '',
                  info: 'Specify waste category',
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
                  info: '',
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
                  type: 'text',
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
      },
      table_2: {
      table_label: 'Table 2b: Quantities in Dry Weight1 of Dredged Material as specified in table 2 (for conversion factors see the footnote)',
      articles:  [{
        items: [{
          label: 'Cr (tons)',
          selected: '',
        },
        {
          label: 'Cu (tons)',
          selected: '',
        },{
          label: 'Pb (tons)',
          selected: '',
        },{
          label: 'Ni (tons)',
          selected: '',
        },{
          label: 'Zn (tons)',
          selected: '',
        },{
          label: 'Oil (tons)',
          selected: '',
        },{
          label: 'ΣPAH9 (tons)',
          selected: '',
        },{
          label: 'ΣPAH16 (tons)',
          selected: '',
        },{
          label: 'ΣPCB7 (tons)',
          selected: '',
        },{
          label: 'HCB (kg)',
          selected: '',
        },{
          label: 'g-HCH (kg)',
          selected: '',
        },{
          label: 'p,p\' DDT (kg)',
          selected: '',
        },{
          label: 'p,p\' DDE (kg)',
          selected: '',
        },{
          label: 'p,p\' DDD (kg)',
          selected: '',
        },{
          label: 'ΣDDX (kg)',
          selected: '',
        },{
          label: 'TBT (kg)',
          selected: '',
        },{
          label: 'DBT (kg)',
          selected: '',
        },{
          label: 'Notes',
          selected: '',
        },]
      }]
  },
    },
  
  },
  tab_3: {
    label: 'Part III: QUANTITIES OF WASTES OR OTHER MATTER FOR EACH DUMP SITE AND COORDINATES FOR DUMP SITES',
    data: {
      table_1: {
      table_label: 'Table 3.  Biennial Summary of Quantities of Wastes or Other Matter at Sea for Each Dump Site',
        articles: [{
          article_title: {
            label: '3.1 Dump Site Code ',
            name: 'dump_site_code',
            type: 'text',
            info: 'Two-letter prefix for country code and the Contracting Party\'s own alphanumeric dump site code',
            selected: '',
          },
          article_items: [{
            label: '3.2 Map of Dumping Site',
            type: 'text',
            name: 'dumping_map',
            selected: '',
            info: 'Confirm that a small scale map showing the dump site location has been "Provided" or "Not Provided" to UNEP/MA Secretariat'
          }, {
            label: '3.3 Method of Dumping at Sea',
            type: 'text',
            name: 'dumping_sea_method',
            selected: '',
            info: 'Dumping at sea operations conducted via: ship, vessel, barge, aircraft, or other [explain]',
          }, {
            label: '3.4 Type of Waste Dumped at the Sea',
            type: 'text',
            name: 'waste_type_sea',
            selected: '',
            info: '[Select from the list of waste categories provided in Table 2a]',
          }, {
            label: '3.5 Total Quantity of a Waste Actually Dumped at the Site',
            type: 'text',
            name: 'total_waste_dumped',
            selected: '',
            info: 'Total dumped at a specific site',
          }, {
            label: '3.5.1 Waste Reporting Units',
            type: 'text',
            name: 'waste_reporting_units',
            selected: '',
            info: '[Depends on waste dumped]'
          }, 
          {
            label: '3.6 Notes',
            type: 'text',
            name: 'notes',
            selected: '',
            info: 'Brief notes on any entry in Table 3',
          }]
        }]
      },
      table_2: {
      table_label: 'Table 4.  Coordinates for Dump Sites',
        articles: [{
          article_title: {
            label: '4.1 Dump Site Code',
            name: 'dump_site_code',
            type: 'text',
            info: 'Two-letter prefix for country code and the Contracting Party\'s own alphanumeric dump site code (copied from 3.1)',
            selected: '',
          },
          article_items: [{
            label: '4.2 Geodetic Datum for Coordinates',
            type: 'text',
            name: 'geodetic_datum',
            selected: '',
            info: 'Geodetic Datum defines the size and shape of the earth and the origin and orientation of the coordinate systems used to map the earth'
          }, {
            label: '4.3 Shape of Dump Site',
            type: 'text',
            name: 'dump_site_shape',
            selected: '',
            info: 'Select from: point, line, circle, segment of a circle, or polygon (Geodetic datum for coordinates to be included in the online version)',
          }, {
            label: '4.4 Radius of Circle',
            type: 'text',
            name: 'radius_of_circle',
            selected: '',
            info: 'Nautical miles (2 significant figures)',
          }, {
            label: '4.5.1 Coordinate A - Latitude',
            type: 'text',
            name: 'coord_a_latitude',
            selected: '',
            info: 'North/South decimal degrees (4 significant figures), or North/South degrees, minutes, seconds',
          }, {
            label: '4.5.2 Coordinate A - Longitude',
            type: 'text',
            name: 'coord_a_longitude',
            selected: '',
            info: 'East/West decimal degrees (4 significant figures), or East/West degrees, minutes, seconds'
          }, 
          {
            label: '4.6.1 Coordinate B - Latitude',
            type: 'text',
            name: 'coord_b_latitude',
            selected: '',
            info: 'North/South decimal degrees (4 significant figures), or North/South degrees, minutes, seconds',
          },
          {
            label: '4.6.2 Coordinate B -Longitude',
            type: 'text',
            name: 'coord_b_longitude',
            selected: '',
            info: 'East/West decimal degrees (4 significant figures), or  East/West degrees, minutes, seconds',
          }, 
          {
            label: '4.7.1 Coordinate C - Latitude',
            type: 'text',
            name: 'coord_c_latitude',
            selected: '',
            info: 'North/South decimal degrees (4 significant figures), or North/South degrees, minutes, seconds',
          }, 
          {
            label: '4.7.2 Coordinate C - Longitude',
            type: 'text',
            name: 'coord_c_longitude',
            selected: '',
            info: 'East/West decimal degrees (4 significant figures), or East/West degrees, minutes, seconds',
          }, 
          {
            label: '4.8.1 Coordinate D - Latitude',
            type: 'text',
            name: 'coord_d_latitude',
            selected: '',
            info: 'North/South decimal degrees (4 significant figures), or North/South degrees, minutes, seconds',
          }, 
          {
            label: '4.8.2 Coordinate D - Longitude',
            type: 'text',
            name: 'coord_d_longitude',
            selected: '',
            info: 'East/West decimal degrees (4 significant figures), or    East/West degrees, minutes, seconds',
          }, 
          {
            label: '4.9 Notes',
            type: 'text',
            name: 'notes',
            selected: '',
            info: 'Brief notes on any entry in Table 4,',
          }]
        }]
      },
    }
  },
  tab_4: {
    label: 'Part IV: MONITORING',
    data: {
      table_label: 'Table 5: Monitoring',
        articles: [{
          article_title: {
            label: '5.1 Dump Site Code for Sites Monitore d during Reporting Period',
            name: 'dump_site_code_monitore_d',
            type: 'text',
            info: 'Two-letter prefix for country code and the Contracting Party\'s own alphanumeric dump site code (copied from 3.1)',
            selected: '',
          },
          article_items: [{
            label: '5.2 Was Monitoring Conducted during the Reporting Period?',
            type: 'radio',
            name: 'monitoring_conducted_rep_period',
            selected: '',
            info: '',
            options: [{text:'yes', value: true}, {text:'no', value:false}]
          }, {
            label: '5.3.1 If Field Monitoring was Conducted, when was it done?',
            type: 'checkbox',
            name: 'field_monitoring_when',
            selected: '',
            info: 'In case of other, explain',
            options:[
            {text: 'before dumping at sea', value: 1},
            {text: 'during dumping at sea', value: 2},
            {text: 'after dumping at sea', value: 3},
            {text: 'other', value: 4}
            ],
            comments: '',
          }, {
            label: '5.3.2 If Field Monitoring was Conducted, what type of survey was completed?',
            type: 'checkbox',
            name: 'field_monitoring_survey_type',
            selected: '',
            info: 'In case of other, explain',
            options:[
            {text: 'biological', value: 1},
            {text: 'geological', value: 2},
            {text: 'chemical', value: 3},
            {text: 'physical', value: 4},
            {text: 'other', value: 5}

            ],
          }, {
            label: '5.3.3 If Field Monitoring was Conducted, has an Adverse Impact(s) been found beyond that predicted?',
            type: 'radio',
            name: 'adverse_impact_found',
            selected: '',
            info: '',
            options: [{text:'yes', value: true}, {text:'no', value:false}],
          }, {
            label: '5.3.4 If an adverse impacts(s) was noted in 5.3.3 describe briefly',
            type: 'text',
            name: 'impact_description',
            selected: '',
            info: 'Brief information on: impacts (e.g. physical, chemical or biological) and their spatial or temporal variation'
          }, 
          {
            label: '5.4.1 Was Compliance Monitoring Conducted for a Permit(s) Issued to Use the Dump Site?',
            type: 'radio',
            name: 'compliance_monitoring_permit',
            selected: '',
            info: '',
            options: [{text:'yes', value: true}, {text:'no', value:false}],

          }, 
          {
            label: '5.4.2 If Compliance Monitoring was Conducted, were the dumping at sea operations found to be in compliance with the permit(s)?',
            type: 'radio',
            name: 'operations_in_compliance_with_permit',
            selected: '',
            info: '',
            options: [{text:'yes', value: true}, {text:'no', value:false}],

          }, 
          {
            label: '5.4.3 If dumping at sea operations were not in compliance, is follow-up action planned?',
            type: 'radio',
            name: 'is_follow_up_planned',
            selected: '',
            info: 'If Yes explain e.g. amendment of or revoking of the dumping permit, redefinition or closing of the dumping site',
            options: [{text:'yes', value: true}, {text:'no', value:false}],
            comments: '',
          }]
        }]
    }
  },

  tab_5: {
    label: 'Part V: PLACEMENT (Dumping Protocol, Article 3.4.b)',
    data: {
      table_label: 'Table 6: Biennial Summary of Information on Placement for Artificial Reefs',
        articles: [{
          article_title: {
            label: 'Placement Site Code',
            name: 'placement_site_code',
            type: 'text',
            info: 'National Code given',
            selected: '',
          },
          article_items: [{
            label: 'Locations of the placement',
            additional_info: 'As defined in the Updated Guidelines on artificial reefs ',
            type: 'text',
            name: 'placement_location',
            selected: '',
            info: 'A Map showing the placement site location with coordinates including depth and distance to shore and distance to the other reefs marked (YES/NO)',
          }, {
            label: 'Purpose of Placement',
            type: 'text',
            name: 'placement_purpose',
            selected: '',
            info: '(a) Environmental purposes including restoration of habitat, ecosystem management and biodiversity (b) Living marine resources (c ) Tourism etc',
          }, {
            label: 'Material Characteristics and Quantity',
            type: 'text',
            additional_info: 'Inert materials which do not cause pollution through leaching, physical or chemical weathering and/or biological activity',
            name: 'material_characteristics_and_quantity',
            selected: '',
            info: 'Detailed explanation of the composition of the material and their quantity (in tons)',
          }, {
            label: 'Is Impact Hypothesis conducted and when by who (yes/no; date; name)',
            type: 'text',
            name: 'impact_hypothesis_status',
            selected: '',
            info: '',
          }, {
            label: 'The name of the permitting authority and the name of national legislation',
            type: 'text',
            name: 'permitting_authority_name',
            selected: '',
            info: 'Name of the authority; legislation name and number as official gazette'
          }, 
          {
            label: 'Plans for Monitoring activities are in place (3) (YES/NO)',
            type: 'text',
            name: 'plans_for_monitoring',
            selected: '',
            info: 'Explain the monitoring and modalities including a plan for pre-placement and post- placement monitoring and evaluation.',
            additional_info: 'Pre-placement monitoring plans should set a reference baseline. Post-Placement monitoring plans should aim to produce scientific evidence to impact hypothesis',
          }, 
          {
            label: 'Notes',
            type: 'text',
            name: 'notes',
            selected: '',
            info: 'Other relevant information in details',
          }]
        }]
    }
  },

}

export default form
