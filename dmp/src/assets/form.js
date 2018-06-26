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
      articles:  []
      },
    },
  
  },
  tab_3: {
    label: 'Part III: QUANTITIES OF WASTES OR OTHER MATTER FOR EACH DUMP SITE AND COORDINATES FOR DUMP SITES',
    data: {
      table_1: {
      table_label: 'Table 3.  Biennial Summary of Quantities of Wastes or Other Matter at Sea for Each Dump Site',
        articles: []
      },
      table_2: {
      table_label: 'Table 4.  Coordinates for Dump Sites',
        articles: []
      },
    }
  },
  tab_4: {
    label: 'Part IV: MONITORING',
    data: {
      table_label: 'Table 5: Monitoring',
        articles: []
    }
  },

  tab_5: {
    label: 'Part V: PLACEMENT (Dumping Protocol, Article 3.4.b)',
    data: {
      table_label: 'Table 6: Biennial Summary of Information on Placement for Artificial Reefs',
        articles: []
    }
  },

}

export default form
