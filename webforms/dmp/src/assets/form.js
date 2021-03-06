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
          label: 'Name of the institution/s responsible for the Dumping Protocol',
          selected: '',
        },
        {
          name: 'officer_name',
          type: 'text',
          label: 'Name of the officer who is the focal point for the Dumping Protocol',
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
    label: 'Part I: Legal and Regulatory Measures',
    collection_id: 201,
    parent_collection_id: 2,
    data: {
      question: 'Has the Party, in accordance with Article 14 of the Barcelona Convention, adopted legislation implementing the provisions of the Dumping Protocol, as listed in Table I below?',
      table_label: 'Table I – LEGAL AND REGULATORY MEASURES',
      collection_id: 202,
      parent_collection_id: 201,
      articles: [{
        article_title: 'Article 4.1',
        article_items: [{
          description: 'Prohibition of dumping of wastes and other matter with the exception of those listed in Article4.2',
          additional_description: "Wastes or other matter listed in Article 4.2. are: “(a) dredged material; (b) fish waste or organic materials resulting from the processing of fish and other marine organisms; (c) vessels, until 31 December 2000; (d) platforms and other ma-made structures at sea, provided that material capable of creating floating debris or otherwise contributing to pollution of the marine environment has been removed to the maximum extent, without prejudice to the provisions of the Protocol concerning Pollution Resulting from Exploration and Exploitation of the  Continental Shelf, the Seabed and its Subsoil; and (e) inert uncontaminated geological materials the chemical constituents of which are unlikely to be released into the marine environment”.",
          collection_id: 2001,
          parent_collection_id: 202,
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
          additional_description: "The Annex to the Protocol lists the factors to be considered in establishing criteria governing the issue of permits for the dumping of matter at sea taking into account Article 6. These are: “A. Characteristics and Composition of the Matter, B. Characteristics of Dumping Site and Method of Deposit and C. General Considerations and Conditions”. <br> Guidelines adopted by the Meeting of the Contracting Parties refer to the wastes or other matter listed in Article 4.2 of the Dumping Protocol.",
          collection_id: 2002,
          parent_collection_id: 202,
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
          collection_id: 2003,
          parent_collection_id: 202,
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
          collection_id: 2004,
          parent_collection_id: 202,
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
          additional_description: "The Article 8 conditions refer to force majeure due to stress of weather or any other cause when human life or the safety of a ship or aircraft is threatened.",
          collection_id: 2005,
          parent_collection_id: 202,
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
          description: 'Critical dumping at sea is conducted under the conditions set out in Article 9 and UNEP/MAP Secretariat consulted immediately',
          additional_description: "The Article 9 conditions refer to a critical situation of an exceptional nature where wastes or other matter not listed in Article 4.2 cannot be disposed of on land without unacceptable danger or damage, above all for the safety of human life.",
          collection_id: 2006,
          parent_collection_id: 202,
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
          collection_id: 2007,
          parent_collection_id: 202,
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
          collection_id: 2008,
          parent_collection_id: 202,
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
          collection_id: 2009,
          parent_collection_id: 202,
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
    label: 'Part II: Dumping at sea permits and quantities',
    collection_id: 203,
    parent_collection_id: 2,
    data: {
      table_1: {
        question: '',
        table_label: 'Table 2a . Biennial Summary of Dumping at Sea Permits and Quantities',
        collection_id: 204,
        parent_collection_id: 203,
        table_note: 'Tables 2 to 5 have been harmonized to follow the Revised Electronic Reporting Format of the London Convention and its Protocol on Dumping (LC 33/15 Annex 5).<br>We would like to invite you to fill out tables 2 to 5 using the pre-filled online webforms, hovewer the <a target="_blank" href="https://idc.info-rac.org/bcrs/supporting_files/Dumping_Protocol_Tabular_Reporting_Template.xls">attached spreadsheet</a> is also an option that you may wish to consider.<br>If you fill out <a target="_blank" href="https://idc.info-rac.org/bcrs/supporting_files/Dumping_Protocol_Tabular_Reporting_Template.xls">the attached excel spreadsheet</a> please submit it by clicking on "add supporting file" button from the envelope.',
        table_article_label: '2.1 1976 Protocol Article or 1995 Protocol Article',
        table_aritcle_description: 'Reference to Articles pertaining to permits',
        articles: [{
            article_title: '1976 Protocol Article 5, Annex II',
            article_items: [{
              items: [{
                  type: 'text',
                  label: '2.2 Type of Permit',
                  name: 'permit_type',
                  description: '',
                  selected: 'Special Permit',
                  disabled: true,
                  info: '',
                },
                {
                  type: 'text',
                  label: '2.3 Waste Category',
                  name: 'waste_cateogry',
                  description: 'Waste Category as defined in Annex II to the 1976 Protocol',
                  info: 'Specify waste category',
                  selected: '',
                },
                {
                  type: 'text',
                  label: '2.4 Total Number of New Permits Issued',
                  description: 'Total of all new permits issued, single year valid permits and valid multiple year permits under a "Type of Permit"',
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
            article_title: '1976 Protocol Article 6',
            article_items: [{
              items: [{
                  type: 'text',
                  label: '2.2 Type of Permit',
                  name: 'permit_type',
                  description: '',
                  selected: 'General Permit',
                  disabled: true,
                  info: '',
                },
                {
                  type: 'text',
                  label: '2.3 Waste Category',
                  name: 'waste_cateogry',
                  description: '',
                  info: 'Specify waste category',
                  selected: '',
                },
                {
                  type: 'text',
                  label: '2.4 Total Number of New Permits Issued',
                  description: 'Total of all new permits issued, single year valid permits and valid multiple year permits under a "Type of Permit"',
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
            article_title: '1976 Protocol Article 8',
            article_items: [{
              items: [{
                  type: 'text',
                  label: '2.2 Type of Permit',
                  name: 'permit_type',
                  description: '',
                  selected: 'Force Majeure',
                  disabled: true,
                  info: '',
                },
                {
                  type: 'text',
                  label: '2.3 Waste Category',
                  name: 'waste_cateogry',
                  description: '',
                  info: 'Specify waste category',
                  selected: '',
                },
                {
                  type: 'text',
                  label: '2.4 Total Number of New Permits Issued',
                  description: 'Total of all new permits issued, single year valid permits and valid multiple year permits under a "Type of Permit"',
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
            article_title: '1976 Protocol Article 9',
            article_items: [{
              items: [{
                  type: 'text',
                  label: '2.2 Type of Permit',
                  name: 'permit_type',
                  description: '',
                  selected: 'Critical Situation',
                  disabled: true,
                  info: '',
                },
                {
                  type: 'text',
                  label: '2.3 Waste Category',
                  name: 'waste_cateogry',
                  description: '',
                  info: 'Specify waste category',
                  selected: '',
                },
                {
                  type: 'text',
                  label: '2.4 Total Number of New Permits Issued',
                  description: 'Total of all new permits issued, single year valid permits and valid multiple year permits under a "Type of Permit"',
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
            article_title: '1995 Protocol Article 4.2.a',
            article_items: [{
              items: [{
                  type: 'text',
                  label: '2.2 Type of Permit',
                  name: 'permit_type',
                  description: '',
                  selected: 'Permit',
                  disabled: true,
                  info: '',
                },
                {
                  type: 'text',
                  label: '2.3 Waste Category',
                  name: 'waste_cateogry',
                  description: '',
                  selected: 'Dredged Material',
                  info: '',
                },
                {
                  type: 'text',
                  label: '2.4 Total Number of New Permits Issued',
                  description: 'Total of all new permits issued, single year valid permits and valid multiple year permits under a "Type of Permit"',
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
            article_title: '1995 Protocol Article 4.2.b',
            article_items: [{
              items: [{
                  type: 'text',
                  label: '2.2 Type of Permit',
                  name: 'permit_type',
                  description: '',
                  selected: 'Permit',
                  disabled: true,
                  info: '',
                },
                {
                  type: 'text',
                  label: '2.3 Waste Category',
                  name: 'waste_cateogry',
                  description: 'Fish Waste or Organic Materials Resulting from the Processing of Fish and other Marine Organisms',
                  selected: '',
                  info: '',
                },
                {
                  type: 'text',
                  label: '2.4 Total Number of New Permits Issued',
                  description: 'Total of all new permits issued, single year valid permits and valid multiple year permits under a "Type of Permit"',
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
            article_title: '1995 Protocol Article 4.d',
            article_items: [{
              items: [{
                  type: 'text',
                  label: '2.2 Type of Permit',
                  name: 'permit_type',
                  description: '',
                  selected: 'Permit',
                  disabled: true,
                  info: '',
                },
                {
                  type: 'text',
                  label: '2.3 Waste Category',
                  name: 'waste_cateogry',
                  description: 'Platforms or other Man-Made Structures at Sea',
                  selected: '',
                  info: '',
                },
                {
                  type: 'text',
                  label: '2.4 Total Number of New Permits Issued',
                  description: 'Total of all new permits issued, single year valid permits and valid multiple year permits under a "Type of Permit"',
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
                  type: 'textarea',
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
                  description: '',
                  selected: 'Permit',
                  disabled: true,
                  info: '',
                },
                {
                  type: 'text',
                  label: '2.3 Waste Category',
                  name: 'waste_cateogry',
                  description: 'Inert Uncontaminated Geological Material',
                  selected: '',
                  info: '',
                },
                {
                  type: 'text',
                  label: '2.4 Total Number of New Permits Issued',
                  description: 'Total of all new permits issued, single year valid permits and valid multiple year permits under a "Type of Permit"',
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
            article_title: '1995 Protocol Article 8',
            article_items: [{
              items: [{
                  type: 'text',
                  label: '2.2 Type of Permit',
                  name: 'permit_type',
                  description: '',
                  selected: 'Force Majeure',
                  disabled: true,
                  info: '',
                },
                {
                  type: 'text',
                  label: '2.3 Waste Category',
                  name: 'waste_cateogry',
                  description: '',
                  selected: '',
                  info: 'Specify waste category',
                },
                {
                  type: 'text',
                  label: '2.4 Total Number of New Permits Issued',
                  description: 'Total of all new permits issued, single year valid permits and valid multiple year permits under a "Type of Permit"',
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
            article_title: '1995 Protocol Article 9',
            article_items: [{
              items: [{
                  type: 'text',
                  label: '2.2 Type of Permit',
                  name: 'permit_type',
                  description: '',
                  selected: 'Critical Situation',
                  disabled: true,
                  info: '',
                },
                {
                  type: 'text',
                  label: '2.3 Waste Category',
                  name: 'waste_cateogry',
                  description: '',
                  selected: '',
                  info: 'Specify waste category',
                },
                {
                  type: 'text',
                  label: '2.4 Total Number of New Permits Issued',
                  description: 'Total of all new permits issued, single year valid permits and valid multiple year permits under a "Type of Permit"',
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
      },
      table_2: {
        table_label: 'Table 2b: Quantities in Dry Weight of Dredged Material as specified in Table 2a \n' +
        'Conversion factors: Dredged material in volumes (m3) conversion to dry weight, (tons)= ((Wet volume x(100-%moisture)/100) * density of material',
        collection_id: 205,
        parent_collection_id: 203,
        articles:  []
      },
    },

  },
  tab_3: {
    label: 'Part III: Quantities of wastes or other matter for each dump site and coordinates for dump sites',
    collection_id: 206,
    parent_collection_id: 2,
    data: {
      table_1: {
      table_label: 'Table 3.  Biennial Summary of Quantities of Wastes or Other Matter at Sea for Each Dump Site',
        table_note: 'Tables 2 to 5 have been harmonized to follow the Revised Electronic Reporting Format of the London Convention and its Protocol on Dumping (LC 33/15 Annex 5).<br>We would like to invite you to fill out tables 2 to 5 using the pre-filled online webforms, hovewer the <a target="_blank" href="https://idc.info-rac.org/bcrs/supporting_files/Dumping_Protocol_Tabular_Reporting_Template.xls">attached spreadsheet</a> is also an option that you may wish to consider.<br>If you fill out <a target="_blank" href="https://idc.info-rac.org/bcrs/supporting_files/Dumping_Protocol_Tabular_Reporting_Template.xls">the attached excel spreadsheet</a> please submit it by clicking on "add supporting file" button from the envelope.',
        collection_id: 207,
        parent_collection_id: 206,
        articles: []
      },
      table_2: {
      table_label: 'Table 4.  Coordinates for Dump Sites',
        collection_id: 208,
        parent_collection_id: 206,
        articles: []
      },
    }
  },
  tab_4: {
    label: 'Part IV: Monitoring',
    collection_id: 209,
    parent_collection_id: 2,
    data: {
      table_label: 'Table 5: Monitoring',
      table_note: 'Tables 2 to 5 have been harmonized to follow the Revised Electronic Reporting Format of the London Convention and its Protocol on Dumping (LC 33/15 Annex 5).<br>We would like to invite you to fill out tables 2 to 5 using the pre-filled online webforms, hovewer the <a target="_blank" href="https://idc.info-rac.org/bcrs/supporting_files/Dumping_Protocol_Tabular_Reporting_Template.xls">attached spreadsheet</a> is also an option that you may wish to consider.<br>If you fill out <a target="_blank" href="https://idc.info-rac.org/bcrs/supporting_files/Dumping_Protocol_Tabular_Reporting_Template.xls">the attached excel spreadsheet</a> please submit it by clicking on "add supporting file" button from the envelope.',
      collection_id: 210,
      parent_collection_id: 209,
      articles: []
    }
  },

  tab_5: {
    label: 'Part V: PLACEMENT (Dumping Protocol, Article 3.4.b)',
    collection_id: 211,
    parent_collection_id: 2,
    data: {
      table_label: 'Table 6: Biennial Summary of Information on Placement for Artificial Reefs',
      collection_id: 212,
      parent_collection_id: 211,
      articles: []
    }
  },

}

export default form
