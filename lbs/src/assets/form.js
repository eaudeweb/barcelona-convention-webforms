var form = {
  tab_1: {
    label: 'Part I: Legal and Regulatory measures',
    data: {
      question: 'Question 1: If during the period under review, the Party has signed, as per Article 3 para. 2 of the Convention, any bilateral and/or multilateral agreement(s), including, sub-regional and/or regional agreement(s) with another Party or with other States, falling under the scope of application of the Convention and its Protocols, please complete Table I below.',
      table_label: 'Table I: Legal and Regulatory Measures',
      articles: [{
        article_title: 'Article 5.1',
        article_items: [{
          description: 'Action Plans, programmes and measures (the NAPs and the SAPs) to eliminate pollution from LBS activities particularly regarding the phasing out of inputs of the substances listed in Annex I to the Protocol that are toxic, persistent and liable to bioaccumulate, using BAT and BEP',
          items: [{
              type: 'changes',
              label: 'Changes in the information provided in the previous report',
              info: 'Please tick the box that applies',
              selected: null,
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
        article_title: 'Article 5.2',
        article_items: [{
          description: 'Priorities and timetables for implementing the action plans, programmes and measures adopted taking into account the elements set out in Annex I to the Protocol and periodically updated',
          items: [{
              type: 'changes',
              label: 'Changes in the information provided in the previous report',
              info: 'Please tick the box that applies',
              selected: null,
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
        article_title: 'Article 5.5',
        article_items: [{
          description: 'Preventive measures taken to reduce to a minimum the risk of pollution caused by accidents',
          items: [{
              type: 'changes',
              label: 'Changes in the information provided in the previous report',
              info: 'Please tick the box that applies',
              selected: null,
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
        article_title: 'Article 6',
        article_items: [{
          description: 'Point source discharges into the Protocol Area and releases into water and/or air that reach and may affect the Mediterranean Area are strictly subject to authorization or regulation by the competent national authority or authorities',
          items: [{
              type: 'changes',
              label: 'Changes in the information provided in the previous report',
              info: 'Please tick the box that applies',
              selected: null,
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
        }, {
          description: 'Establishment of inspection systems for the competent national authority or authorities to assess compliance with authorizations and regulations',
          items: [{
              type: 'changes',
              label: 'Changes in the information provided in the previous report',
              info: 'Please tick the box that applies',
              selected: null,
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
        }, {
          description: 'Application of appropriate sanctions in the event of non- compliance with authorizations and/or regulations',
          items: [{
              type: 'changes',
              label: 'Changes in the information provided in the previous report',
              info: 'Please tick the box that applies',
              selected: null,
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
        article_title: 'Article 7, Article 15',
        article_items: [{
          description: 'Implementation of common measures for the control of pollution adopted by the Meeting of the Contracting Parties, including the implementation of measures provided for in Regional Actions Plans',
          items: [{
              type: 'changes',
              label: 'Changes in the information provided in the previous report',
              info: 'Please tick the box that applies',
              selected: null,
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
        article_title: 'Article 8',
        article_items: [{
          description: 'Monitoring programmes and activities carried out to assess, as far as possible, the levels of pollution along the coast in particular with regard to the sectors of activity and categories of substances listed in Annex I to the Protocol',
          items: [{
              type: 'changes',
              label: 'Changes in the information provided in the previous report',
              info: 'Please tick the box that applies',
              selected: null,
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
        }, {
          description: 'Monitoring programmes and activities carried out to evaluate the effectiveness of action plans, programmes and measures under this Protocol (the NAPs and the SAPs) to eliminate to the fullest possible extent pollution of the marine environment',
          items: [{
              type: 'changes',
              label: 'Changes in the information provided in the previous report',
              info: 'Please tick the box that applies',
              selected: null,
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
      }]
    }
  },

  tab_2: {
    label: 'Part II: LBS Protocol (Article 13(c))',
    data: {
      question: {
        label: 'Data submitted via MEDPOL online NBB system for the current biennium',
        info: 'Please, tick the box that applies',
        selected: null,
        options: [{
          value: true,
          text: 'Yes',
        }, {
          value: false,
          text: 'No',
        }],
        options_description: ['If your answer is “Yes”, no need to fill out this table', 'If your answer is “No”, please fill out this table in line with MEDPOL NBB database and associated Guidelines'],
      },
      table_label: 'Table II: Inventory: LBS Protocol (Article 13(c))',
      articles: [{
        article_title: 'Organohalogen compounds',
        article_items: [{
          description: 'Pollutant Group: Organohalogen compounds <small class="text-muted">(Annex I to the LBS Protocol)</small>',
          items: [{
              type: 'select',
              label: 'Pollutant name',
              info: 'Please select an option',
              selected: null,
              options: [
                { text: 'Please select one item', value: null },
                { text: 'Pollutant 1', value: 1 },
                { text: 'Pollutant 2', value: 2 }
              ]
            },
            {
              type: 'select',
              label: 'Sector of Activity',
              info: 'Annex I to the LBS Protocol MEDPOL NBB database group of sectors',
              selected: null,
              options: [
                { text: 'Please select one item', value: null },
                { text: 'Sector 1', value: 1 },
                { text: 'Sector 2', value: 2 }
              ]
            },
            {
              type: 'select',
              label: 'Sub-sector',
              info: 'MED POL NBB database group of sectors',
              selected: null,
              options: [
                { text: 'Please select one item', value: null },
                { text: 'Sub-sector 1', value: 1 },
                { text: 'Sub-sector 2', value: 2 }
              ]
            },
            {
              label: 'Release to Air - Information based on',
              info: 'It has to be indicated whether the reported information is based on measurement (M), calculation (C ) or estimation (E)',
              type: 'select',
              name: 'release_air_base',
              selected: null,
              options: [
                { text: 'Please select one item', value: null },
                { text: 'Measurement', value: 'M' },
                { text: 'Calculation', value: 'C' },
                { text: 'Estimation', value: 'E' }
              ]
            },
            {
              label: 'Release to Air - Quantities Kg/year',
              info: 'Indication of the total quantity of the pollutant released to air from all sectors of activity',
              type: 'number',
              name: 'release_air_quantity',
              value: '',
            },
            {
              label: 'Release to Water - Information based on',
              info: 'It has to be indicated whether the reported information is based on measurement (M), calculation (C ) or estimation (E)',
              type: 'select',
              name: 'release_water_base',
              selected: null,
              options: [
                { text: 'Please select one item', value: null },
                { text: 'Measurement', value: 'M' },
                { text: 'Calculation', value: 'C' },
                { text: 'Estimation', value: 'E' }
              ]
            },
            {
              label: 'Release to Water - Quantities Kg/year',
              info: 'Indication of the total quantity of the pollutant released to waters from all sectors of activity',
              type: 'number',
              name: 'release_water_quantity',
              value: '',
            },
            {
              label: 'Release to Soil - Information based on',
              info: 'It has to be indicated whether the reported information is based on measurement (M), calculation (C ) or estimation (E)',
              type: 'select',
              name: 'release_soil_base',
              selected: null,
              options: [
                { text: 'Please select one item', value: null },
                { text: 'Measurement', value: 'M' },
                { text: 'Calculation', value: 'C' },
                { text: 'Estimation', value: 'E' }
              ]
            },
            {
              label: 'Release to Soil - Quantities Kg/year',
              info: 'Indication of the total quantity of the pollutant released to soil from all sectors of activity',
              type: 'number',
              name: 'release_soil_quantity',
              value: '',
            }
          ]
        }]
      }, {
        article_title: 'Organophosphorus compounds',
        article_items: [{
          description: 'Pollutant Group: Organophosphorus compounds <small class="text-muted">(Annex I to the LBS Protocol)</small>',
          items: [{
              type: 'select',
              label: 'Pollutant name',
              info: 'Please select an option',
              selected: null,
              options: [
                { text: 'Please select one item', value: null },
                { text: 'Pollutant 1', value: 1 },
                { text: 'Pollutant 2', value: 2 }
              ]
            },
            {
              type: 'select',
              label: 'Sector of Activity',
              info: 'Annex I to the LBS Protocol MEDPOL NBB database group of sectors',
              selected: null,
              options: [
                { text: 'Please select one item', value: null },
                { text: 'Sector 1', value: 1 },
                { text: 'Sector 2', value: 2 }
              ]
            },
            {
              type: 'select',
              label: 'Sub-sector',
              info: 'MED POL NBB database group of sectors',
              selected: null,
              options: [
                { text: 'Please select one item', value: null },
                { text: 'Sub-sector 1', value: 1 },
                { text: 'Sub-sector 2', value: 2 }
              ]
            },
            {
              label: 'Release to Air - Information based on',
              info: 'It has to be indicated whether the reported information is based on measurement (M), calculation (C ) or estimation (E)',
              type: 'select',
              name: 'release_air_base',
              selected: null,
              options: [
                { text: 'Please select one item', value: null },
                { text: 'Measurement', value: 'M' },
                { text: 'Calculation', value: 'C' },
                { text: 'Estimation', value: 'E' }
              ]
            },
            {
              label: 'Release to Air - Quantities Kg/year',
              info: 'Indication of the total quantity of the pollutant released to air from all sectors of activity',
              type: 'number',
              name: 'release_air_quantity',
              value: '',
            },
            {
              label: 'Release to Water - Information based on',
              info: 'It has to be indicated whether the reported information is based on measurement (M), calculation (C ) or estimation (E)',
              type: 'select',
              name: 'release_water_base',
              selected: null,
              options: [
                { text: 'Please select one item', value: null },
                { text: 'Measurement', value: 'M' },
                { text: 'Calculation', value: 'C' },
                { text: 'Estimation', value: 'E' }
              ]
            },
            {
              label: 'Release to Water - Quantities Kg/year',
              info: 'Indication of the total quantity of the pollutant released to waters from all sectors of activity',
              type: 'number',
              name: 'release_water_quantity',
              value: '',
            },
            {
              label: 'Release to Soil - Information based on',
              info: 'It has to be indicated whether the reported information is based on measurement (M), calculation (C ) or estimation (E)',
              type: 'select',
              name: 'release_soil_base',
              selected: null,
              options: [
                { text: 'Please select one item', value: null },
                { text: 'Measurement', value: 'M' },
                { text: 'Calculation', value: 'C' },
                { text: 'Estimation', value: 'E' }
              ]
            },
            {
              label: 'Release to Soil - Quantities Kg/year',
              info: 'Indication of the total quantity of the pollutant released to soil from all sectors of activity',
              type: 'number',
              name: 'release_soil_quantity',
              value: '',
            }
          ]
        }]
      }, {
        article_title: 'Organotin compounds',
        article_items: [{
          description: 'Pollutant Group: Organotin compounds <small class="text-muted">(Annex I to the LBS Protocol)</small>',
          items: [{
              type: 'select',
              label: 'Pollutant name',
              info: 'Please select an option',
              selected: null,
              options: [
                { text: 'Please select one item', value: null },
                { text: 'Pollutant 1', value: 1 },
                { text: 'Pollutant 2', value: 2 }
              ]
            },
            {
              type: 'select',
              label: 'Sector of Activity',
              info: 'Annex I to the LBS Protocol MEDPOL NBB database group of sectors',
              selected: null,
              options: [
                { text: 'Please select one item', value: null },
                { text: 'Sector 1', value: 1 },
                { text: 'Sector 2', value: 2 }
              ]
            },
            {
              type: 'select',
              label: 'Sub-sector',
              info: 'MED POL NBB database group of sectors',
              selected: null,
              options: [
                { text: 'Please select one item', value: null },
                { text: 'Sub-sector 1', value: 1 },
                { text: 'Sub-sector 2', value: 2 }
              ]
            },
            {
              label: 'Release to Air - Information based on',
              info: 'It has to be indicated whether the reported information is based on measurement (M), calculation (C ) or estimation (E)',
              type: 'select',
              name: 'release_air_base',
              selected: null,
              options: [
                { text: 'Please select one item', value: null },
                { text: 'Measurement', value: 'M' },
                { text: 'Calculation', value: 'C' },
                { text: 'Estimation', value: 'E' }
              ]
            },
            {
              label: 'Release to Air - Quantities Kg/year',
              info: 'Indication of the total quantity of the pollutant released to air from all sectors of activity',
              type: 'number',
              name: 'release_air_quantity',
              value: '',
            },
            {
              label: 'Release to Water - Information based on',
              info: 'It has to be indicated whether the reported information is based on measurement (M), calculation (C ) or estimation (E)',
              type: 'select',
              name: 'release_water_base',
              selected: null,
              options: [
                { text: 'Please select one item', value: null },
                { text: 'Measurement', value: 'M' },
                { text: 'Calculation', value: 'C' },
                { text: 'Estimation', value: 'E' }
              ]
            },
            {
              label: 'Release to Water - Quantities Kg/year',
              info: 'Indication of the total quantity of the pollutant released to waters from all sectors of activity',
              type: 'number',
              name: 'release_water_quantity',
              value: '',
            },
            {
              label: 'Release to Soil - Information based on',
              info: 'It has to be indicated whether the reported information is based on measurement (M), calculation (C ) or estimation (E)',
              type: 'select',
              name: 'release_soil_base',
              selected: null,
              options: [
                { text: 'Please select one item', value: null },
                { text: 'Measurement', value: 'M' },
                { text: 'Calculation', value: 'C' },
                { text: 'Estimation', value: 'E' }
              ]
            },
            {
              label: 'Release to Soil - Quantities Kg/year',
              info: 'Indication of the total quantity of the pollutant released to soil from all sectors of activity',
              type: 'number',
              name: 'release_soil_quantity',
              value: '',
            }
          ]
        }]
      }, {
        article_title: 'Polycyclic aromatic hydrocarbons',
        article_items: [{
          description: 'Pollutant Group: Polycyclic aromatic hydrocarbons <small class="text-muted">(Annex I to the LBS Protocol)</small>',
          items: [{
              type: 'select',
              label: 'Pollutant name',
              info: 'Please select an option',
              selected: null,
              options: [
                { text: 'Please select one item', value: null },
                { text: 'Pollutant 1', value: 1 },
                { text: 'Pollutant 2', value: 2 }
              ]
            },
            {
              type: 'select',
              label: 'Sector of Activity',
              info: 'Annex I to the LBS Protocol MEDPOL NBB database group of sectors',
              selected: null,
              options: [
                { text: 'Please select one item', value: null },
                { text: 'Sector 1', value: 1 },
                { text: 'Sector 2', value: 2 }
              ]
            },
            {
              type: 'select',
              label: 'Sub-sector',
              info: 'MED POL NBB database group of sectors',
              selected: null,
              options: [
                { text: 'Please select one item', value: null },
                { text: 'Sub-sector 1', value: 1 },
                { text: 'Sub-sector 2', value: 2 }
              ]
            },
            {
              label: 'Release to Air - Information based on',
              info: 'It has to be indicated whether the reported information is based on measurement (M), calculation (C ) or estimation (E)',
              type: 'select',
              name: 'release_air_base',
              selected: null,
              options: [
                { text: 'Please select one item', value: null },
                { text: 'Measurement', value: 'M' },
                { text: 'Calculation', value: 'C' },
                { text: 'Estimation', value: 'E' }
              ]
            },
            {
              label: 'Release to Air - Quantities Kg/year',
              info: 'Indication of the total quantity of the pollutant released to air from all sectors of activity',
              type: 'number',
              name: 'release_air_quantity',
              value: '',
            },
            {
              label: 'Release to Water - Information based on',
              info: 'It has to be indicated whether the reported information is based on measurement (M), calculation (C ) or estimation (E)',
              type: 'select',
              name: 'release_water_base',
              selected: null,
              options: [
                { text: 'Please select one item', value: null },
                { text: 'Measurement', value: 'M' },
                { text: 'Calculation', value: 'C' },
                { text: 'Estimation', value: 'E' }
              ]
            },
            {
              label: 'Release to Water - Quantities Kg/year',
              info: 'Indication of the total quantity of the pollutant released to waters from all sectors of activity',
              type: 'number',
              name: 'release_water_quantity',
              value: '',
            },
            {
              label: 'Release to Soil - Information based on',
              info: 'It has to be indicated whether the reported information is based on measurement (M), calculation (C ) or estimation (E)',
              type: 'select',
              name: 'release_soil_base',
              selected: null,
              options: [
                { text: 'Please select one item', value: null },
                { text: 'Measurement', value: 'M' },
                { text: 'Calculation', value: 'C' },
                { text: 'Estimation', value: 'E' }
              ]
            },
            {
              label: 'Release to Soil - Quantities Kg/year',
              info: 'Indication of the total quantity of the pollutant released to soil from all sectors of activity',
              type: 'number',
              name: 'release_soil_quantity',
              value: '',
            }
          ]
        }]
      }, {
        article_title: 'Heavy metals and their compounds',
        article_items: [{
          description: 'Pollutant Group: Heavy metals and their compounds <small class="text-muted">(Annex I to the LBS Protocol)</small>',
          items: [{
              type: 'select',
              label: 'Pollutant name',
              info: 'Please select an option',
              selected: null,
              options: [
                { text: 'Please select one item', value: null },
                { text: 'Pollutant 1', value: 1 },
                { text: 'Pollutant 2', value: 2 }
              ]
            },
            {
              type: 'select',
              label: 'Sector of Activity',
              info: 'Annex I to the LBS Protocol MEDPOL NBB database group of sectors',
              selected: null,
              options: [
                { text: 'Please select one item', value: null },
                { text: 'Sector 1', value: 1 },
                { text: 'Sector 2', value: 2 }
              ]
            },
            {
              type: 'select',
              label: 'Sub-sector',
              info: 'MED POL NBB database group of sectors',
              selected: null,
              options: [
                { text: 'Please select one item', value: null },
                { text: 'Sub-sector 1', value: 1 },
                { text: 'Sub-sector 2', value: 2 }
              ]
            },
            {
              label: 'Release to Air - Information based on',
              info: 'It has to be indicated whether the reported information is based on measurement (M), calculation (C ) or estimation (E)',
              type: 'select',
              name: 'release_air_base',
              selected: null,
              options: [
                { text: 'Please select one item', value: null },
                { text: 'Measurement', value: 'M' },
                { text: 'Calculation', value: 'C' },
                { text: 'Estimation', value: 'E' }
              ]
            },
            {
              label: 'Release to Air - Quantities Kg/year',
              info: 'Indication of the total quantity of the pollutant released to air from all sectors of activity',
              type: 'number',
              name: 'release_air_quantity',
              value: '',
            },
            {
              label: 'Release to Water - Information based on',
              info: 'It has to be indicated whether the reported information is based on measurement (M), calculation (C ) or estimation (E)',
              type: 'select',
              name: 'release_water_base',
              selected: null,
              options: [
                { text: 'Please select one item', value: null },
                { text: 'Measurement', value: 'M' },
                { text: 'Calculation', value: 'C' },
                { text: 'Estimation', value: 'E' }
              ]
            },
            {
              label: 'Release to Water - Quantities Kg/year',
              info: 'Indication of the total quantity of the pollutant released to waters from all sectors of activity',
              type: 'number',
              name: 'release_water_quantity',
              value: '',
            },
            {
              label: 'Release to Soil - Information based on',
              info: 'It has to be indicated whether the reported information is based on measurement (M), calculation (C ) or estimation (E)',
              type: 'select',
              name: 'release_soil_base',
              selected: null,
              options: [
                { text: 'Please select one item', value: null },
                { text: 'Measurement', value: 'M' },
                { text: 'Calculation', value: 'C' },
                { text: 'Estimation', value: 'E' }
              ]
            },
            {
              label: 'Release to Soil - Quantities Kg/year',
              info: 'Indication of the total quantity of the pollutant released to soil from all sectors of activity',
              type: 'number',
              name: 'release_soil_quantity',
              value: '',
            }
          ]
        }]
      }, {
        article_title: 'Used lubricating oils',
        article_items: [{
          description: 'Pollutant Group: Used lubricating oils <small class="text-muted">(Annex I to the LBS Protocol)</small>',
          items: [{
              type: 'select',
              label: 'Pollutant name',
              info: 'Please select an option',
              selected: null,
              options: [
                { text: 'Please select one item', value: null },
                { text: 'Pollutant 1', value: 1 },
                { text: 'Pollutant 2', value: 2 }
              ]
            },
            {
              type: 'select',
              label: 'Sector of Activity',
              info: 'Annex I to the LBS Protocol MEDPOL NBB database group of sectors',
              selected: null,
              options: [
                { text: 'Please select one item', value: null },
                { text: 'Sector 1', value: 1 },
                { text: 'Sector 2', value: 2 }
              ]
            },
            {
              type: 'select',
              label: 'Sub-sector',
              info: 'MED POL NBB database group of sectors',
              selected: null,
              options: [
                { text: 'Please select one item', value: null },
                { text: 'Sub-sector 1', value: 1 },
                { text: 'Sub-sector 2', value: 2 }
              ]
            },
            {
              label: 'Release to Air - Information based on',
              info: 'It has to be indicated whether the reported information is based on measurement (M), calculation (C ) or estimation (E)',
              type: 'select',
              name: 'release_air_base',
              selected: null,
              options: [
                { text: 'Please select one item', value: null },
                { text: 'Measurement', value: 'M' },
                { text: 'Calculation', value: 'C' },
                { text: 'Estimation', value: 'E' }
              ]
            },
            {
              label: 'Release to Air - Quantities Kg/year',
              info: 'Indication of the total quantity of the pollutant released to air from all sectors of activity',
              type: 'number',
              name: 'release_air_quantity',
              value: '',
            },
            {
              label: 'Release to Water - Information based on',
              info: 'It has to be indicated whether the reported information is based on measurement (M), calculation (C ) or estimation (E)',
              type: 'select',
              name: 'release_water_base',
              selected: null,
              options: [
                { text: 'Please select one item', value: null },
                { text: 'Measurement', value: 'M' },
                { text: 'Calculation', value: 'C' },
                { text: 'Estimation', value: 'E' }
              ]
            },
            {
              label: 'Release to Water - Quantities Kg/year',
              info: 'Indication of the total quantity of the pollutant released to waters from all sectors of activity',
              type: 'number',
              name: 'release_water_quantity',
              value: '',
            },
            {
              label: 'Release to Soil - Information based on',
              info: 'It has to be indicated whether the reported information is based on measurement (M), calculation (C ) or estimation (E)',
              type: 'select',
              name: 'release_soil_base',
              selected: null,
              options: [
                { text: 'Please select one item', value: null },
                { text: 'Measurement', value: 'M' },
                { text: 'Calculation', value: 'C' },
                { text: 'Estimation', value: 'E' }
              ]
            },
            {
              label: 'Release to Soil - Quantities Kg/year',
              info: 'Indication of the total quantity of the pollutant released to soil from all sectors of activity',
              type: 'number',
              name: 'release_soil_quantity',
              value: '',
            }
          ]
        }]
      }, {
        article_title: 'Radioactive substances, including their wastes',
        article_items: [{
          description: 'Pollutant Group: Radioactive substances, including their wastes <small class="text-muted">(Annex I to the LBS Protocol)</small>',
          items: [{
              type: 'select',
              label: 'Pollutant name',
              info: 'Please select an option',
              selected: null,
              options: [
                { text: 'Please select one item', value: null },
                { text: 'Pollutant 1', value: 1 },
                { text: 'Pollutant 2', value: 2 }
              ]
            },
            {
              type: 'select',
              label: 'Sector of Activity',
              info: 'Annex I to the LBS Protocol MEDPOL NBB database group of sectors',
              selected: null,
              options: [
                { text: 'Please select one item', value: null },
                { text: 'Sector 1', value: 1 },
                { text: 'Sector 2', value: 2 }
              ]
            },
            {
              type: 'select',
              label: 'Sub-sector',
              info: 'MED POL NBB database group of sectors',
              selected: null,
              options: [
                { text: 'Please select one item', value: null },
                { text: 'Sub-sector 1', value: 1 },
                { text: 'Sub-sector 2', value: 2 }
              ]
            },
            {
              label: 'Release to Air - Information based on',
              info: 'It has to be indicated whether the reported information is based on measurement (M), calculation (C ) or estimation (E)',
              type: 'select',
              name: 'release_air_base',
              selected: null,
              options: [
                { text: 'Please select one item', value: null },
                { text: 'Measurement', value: 'M' },
                { text: 'Calculation', value: 'C' },
                { text: 'Estimation', value: 'E' }
              ]
            },
            {
              label: 'Release to Air - Quantities Kg/year',
              info: 'Indication of the total quantity of the pollutant released to air from all sectors of activity',
              type: 'number',
              name: 'release_air_quantity',
              value: '',
            },
            {
              label: 'Release to Water - Information based on',
              info: 'It has to be indicated whether the reported information is based on measurement (M), calculation (C ) or estimation (E)',
              type: 'select',
              name: 'release_water_base',
              selected: null,
              options: [
                { text: 'Please select one item', value: null },
                { text: 'Measurement', value: 'M' },
                { text: 'Calculation', value: 'C' },
                { text: 'Estimation', value: 'E' }
              ]
            },
            {
              label: 'Release to Water - Quantities Kg/year',
              info: 'Indication of the total quantity of the pollutant released to waters from all sectors of activity',
              type: 'number',
              name: 'release_water_quantity',
              value: '',
            },
            {
              label: 'Release to Soil - Information based on',
              info: 'It has to be indicated whether the reported information is based on measurement (M), calculation (C ) or estimation (E)',
              type: 'select',
              name: 'release_soil_base',
              selected: null,
              options: [
                { text: 'Please select one item', value: null },
                { text: 'Measurement', value: 'M' },
                { text: 'Calculation', value: 'C' },
                { text: 'Estimation', value: 'E' }
              ]
            },
            {
              label: 'Release to Soil - Quantities Kg/year',
              info: 'Indication of the total quantity of the pollutant released to soil from all sectors of activity',
              type: 'number',
              name: 'release_soil_quantity',
              value: '',
            }
          ]
        }]
      }, {
        article_title: 'Biocides and their derivatives',
        article_items: [{
          description: 'Pollutant Group: Biocides and their derivatives <small class="text-muted">(Annex I to the LBS Protocol)</small>',
          items: [{
              type: 'select',
              label: 'Pollutant name',
              info: 'Please select an option',
              selected: null,
              options: [
                { text: 'Please select one item', value: null },
                { text: 'Pollutant 1', value: 1 },
                { text: 'Pollutant 2', value: 2 }
              ]
            },
            {
              type: 'select',
              label: 'Sector of Activity',
              info: 'Annex I to the LBS Protocol MEDPOL NBB database group of sectors',
              selected: null,
              options: [
                { text: 'Please select one item', value: null },
                { text: 'Sector 1', value: 1 },
                { text: 'Sector 2', value: 2 }
              ]
            },
            {
              type: 'select',
              label: 'Sub-sector',
              info: 'MED POL NBB database group of sectors',
              selected: null,
              options: [
                { text: 'Please select one item', value: null },
                { text: 'Sub-sector 1', value: 1 },
                { text: 'Sub-sector 2', value: 2 }
              ]
            },
            {
              label: 'Release to Air - Information based on',
              info: 'It has to be indicated whether the reported information is based on measurement (M), calculation (C ) or estimation (E)',
              type: 'select',
              name: 'release_air_base',
              selected: null,
              options: [
                { text: 'Please select one item', value: null },
                { text: 'Measurement', value: 'M' },
                { text: 'Calculation', value: 'C' },
                { text: 'Estimation', value: 'E' }
              ]
            },
            {
              label: 'Release to Air - Quantities Kg/year',
              info: 'Indication of the total quantity of the pollutant released to air from all sectors of activity',
              type: 'number',
              name: 'release_air_quantity',
              value: '',
            },
            {
              label: 'Release to Water - Information based on',
              info: 'It has to be indicated whether the reported information is based on measurement (M), calculation (C ) or estimation (E)',
              type: 'select',
              name: 'release_water_base',
              selected: null,
              options: [
                { text: 'Please select one item', value: null },
                { text: 'Measurement', value: 'M' },
                { text: 'Calculation', value: 'C' },
                { text: 'Estimation', value: 'E' }
              ]
            },
            {
              label: 'Release to Water - Quantities Kg/year',
              info: 'Indication of the total quantity of the pollutant released to waters from all sectors of activity',
              type: 'number',
              name: 'release_water_quantity',
              value: '',
            },
            {
              label: 'Release to Soil - Information based on',
              info: 'It has to be indicated whether the reported information is based on measurement (M), calculation (C ) or estimation (E)',
              type: 'select',
              name: 'release_soil_base',
              selected: null,
              options: [
                { text: 'Please select one item', value: null },
                { text: 'Measurement', value: 'M' },
                { text: 'Calculation', value: 'C' },
                { text: 'Estimation', value: 'E' }
              ]
            },
            {
              label: 'Release to Soil - Quantities Kg/year',
              info: 'Indication of the total quantity of the pollutant released to soil from all sectors of activity',
              type: 'number',
              name: 'release_soil_quantity',
              value: '',
            }
          ]
        }]
      }, {
        article_title: 'Crude oils and hydrocarbons of petroleum origin',
        article_items: [{
          description: 'Pollutant Group: Crude oils and hydrocarbons of petroleum origin <small class="text-muted">(Annex I to the LBS Protocol)</small>',
          items: [{
              type: 'select',
              label: 'Pollutant name',
              info: 'Please select an option',
              selected: null,
              options: [
                { text: 'Please select one item', value: null },
                { text: 'Pollutant 1', value: 1 },
                { text: 'Pollutant 2', value: 2 }
              ]
            },
            {
              type: 'select',
              label: 'Sector of Activity',
              info: 'Annex I to the LBS Protocol MEDPOL NBB database group of sectors',
              selected: null,
              options: [
                { text: 'Please select one item', value: null },
                { text: 'Sector 1', value: 1 },
                { text: 'Sector 2', value: 2 }
              ]
            },
            {
              type: 'select',
              label: 'Sub-sector',
              info: 'MED POL NBB database group of sectors',
              selected: null,
              options: [
                { text: 'Please select one item', value: null },
                { text: 'Sub-sector 1', value: 1 },
                { text: 'Sub-sector 2', value: 2 }
              ]
            },
            {
              label: 'Release to Air - Information based on',
              info: 'It has to be indicated whether the reported information is based on measurement (M), calculation (C ) or estimation (E)',
              type: 'select',
              name: 'release_air_base',
              selected: null,
              options: [
                { text: 'Please select one item', value: null },
                { text: 'Measurement', value: 'M' },
                { text: 'Calculation', value: 'C' },
                { text: 'Estimation', value: 'E' }
              ]
            },
            {
              label: 'Release to Air - Quantities Kg/year',
              info: 'Indication of the total quantity of the pollutant released to air from all sectors of activity',
              type: 'number',
              name: 'release_air_quantity',
              value: '',
            },
            {
              label: 'Release to Water - Information based on',
              info: 'It has to be indicated whether the reported information is based on measurement (M), calculation (C ) or estimation (E)',
              type: 'select',
              name: 'release_water_base',
              selected: null,
              options: [
                { text: 'Please select one item', value: null },
                { text: 'Measurement', value: 'M' },
                { text: 'Calculation', value: 'C' },
                { text: 'Estimation', value: 'E' }
              ]
            },
            {
              label: 'Release to Water - Quantities Kg/year',
              info: 'Indication of the total quantity of the pollutant released to waters from all sectors of activity',
              type: 'number',
              name: 'release_water_quantity',
              value: '',
            },
            {
              label: 'Release to Soil - Information based on',
              info: 'It has to be indicated whether the reported information is based on measurement (M), calculation (C ) or estimation (E)',
              type: 'select',
              name: 'release_soil_base',
              selected: null,
              options: [
                { text: 'Please select one item', value: null },
                { text: 'Measurement', value: 'M' },
                { text: 'Calculation', value: 'C' },
                { text: 'Estimation', value: 'E' }
              ]
            },
            {
              label: 'Release to Soil - Quantities Kg/year',
              info: 'Indication of the total quantity of the pollutant released to soil from all sectors of activity',
              type: 'number',
              name: 'release_soil_quantity',
              value: '',
            }
          ]
        }]
      }, {
        article_title: 'Cyanides and fluorides',
        article_items: [{
          description: 'Pollutant Group: Cyanides and fluorides <small class="text-muted">(Annex I to the LBS Protocol)</small>',
          items: [{
              type: 'select',
              label: 'Pollutant name',
              info: 'Please select an option',
              selected: null,
              options: [
                { text: 'Please select one item', value: null },
                { text: 'Pollutant 1', value: 1 },
                { text: 'Pollutant 2', value: 2 }
              ]
            },
            {
              type: 'select',
              label: 'Sector of Activity',
              info: 'Annex I to the LBS Protocol MEDPOL NBB database group of sectors',
              selected: null,
              options: [
                { text: 'Please select one item', value: null },
                { text: 'Sector 1', value: 1 },
                { text: 'Sector 2', value: 2 }
              ]
            },
            {
              type: 'select',
              label: 'Sub-sector',
              info: 'MED POL NBB database group of sectors',
              selected: null,
              options: [
                { text: 'Please select one item', value: null },
                { text: 'Sub-sector 1', value: 1 },
                { text: 'Sub-sector 2', value: 2 }
              ]
            },
            {
              label: 'Release to Air - Information based on',
              info: 'It has to be indicated whether the reported information is based on measurement (M), calculation (C ) or estimation (E)',
              type: 'select',
              name: 'release_air_base',
              selected: null,
              options: [
                { text: 'Please select one item', value: null },
                { text: 'Measurement', value: 'M' },
                { text: 'Calculation', value: 'C' },
                { text: 'Estimation', value: 'E' }
              ]
            },
            {
              label: 'Release to Air - Quantities Kg/year',
              info: 'Indication of the total quantity of the pollutant released to air from all sectors of activity',
              type: 'number',
              name: 'release_air_quantity',
              value: '',
            },
            {
              label: 'Release to Water - Information based on',
              info: 'It has to be indicated whether the reported information is based on measurement (M), calculation (C ) or estimation (E)',
              type: 'select',
              name: 'release_water_base',
              selected: null,
              options: [
                { text: 'Please select one item', value: null },
                { text: 'Measurement', value: 'M' },
                { text: 'Calculation', value: 'C' },
                { text: 'Estimation', value: 'E' }
              ]
            },
            {
              label: 'Release to Water - Quantities Kg/year',
              info: 'Indication of the total quantity of the pollutant released to waters from all sectors of activity',
              type: 'number',
              name: 'release_water_quantity',
              value: '',
            },
            {
              label: 'Release to Soil - Information based on',
              info: 'It has to be indicated whether the reported information is based on measurement (M), calculation (C ) or estimation (E)',
              type: 'select',
              name: 'release_soil_base',
              selected: null,
              options: [
                { text: 'Please select one item', value: null },
                { text: 'Measurement', value: 'M' },
                { text: 'Calculation', value: 'C' },
                { text: 'Estimation', value: 'E' }
              ]
            },
            {
              label: 'Release to Soil - Quantities Kg/year',
              info: 'Indication of the total quantity of the pollutant released to soil from all sectors of activity',
              type: 'number',
              name: 'release_soil_quantity',
              value: '',
            }
          ]
        }]
      }, {
        article_title: 'Non-biodegradable detergents and surface-active substances',
        article_items: [{
          description: 'Pollutant Group: Non-biodegradable detergents and surface-active substances <small class="text-muted">(Annex I to the LBS Protocol)</small>',
          items: [{
              type: 'select',
              label: 'Pollutant name',
              info: 'Please select an option',
              selected: null,
              options: [
                { text: 'Please select one item', value: null },
                { text: 'Pollutant 1', value: 1 },
                { text: 'Pollutant 2', value: 2 }
              ]
            },
            {
              type: 'select',
              label: 'Sector of Activity',
              info: 'Annex I to the LBS Protocol MEDPOL NBB database group of sectors',
              selected: null,
              options: [
                { text: 'Please select one item', value: null },
                { text: 'Sector 1', value: 1 },
                { text: 'Sector 2', value: 2 }
              ]
            },
            {
              type: 'select',
              label: 'Sub-sector',
              info: 'MED POL NBB database group of sectors',
              selected: null,
              options: [
                { text: 'Please select one item', value: null },
                { text: 'Sub-sector 1', value: 1 },
                { text: 'Sub-sector 2', value: 2 }
              ]
            },
            {
              label: 'Release to Air - Information based on',
              info: 'It has to be indicated whether the reported information is based on measurement (M), calculation (C ) or estimation (E)',
              type: 'select',
              name: 'release_air_base',
              selected: null,
              options: [
                { text: 'Please select one item', value: null },
                { text: 'Measurement', value: 'M' },
                { text: 'Calculation', value: 'C' },
                { text: 'Estimation', value: 'E' }
              ]
            },
            {
              label: 'Release to Air - Quantities Kg/year',
              info: 'Indication of the total quantity of the pollutant released to air from all sectors of activity',
              type: 'number',
              name: 'release_air_quantity',
              value: '',
            },
            {
              label: 'Release to Water - Information based on',
              info: 'It has to be indicated whether the reported information is based on measurement (M), calculation (C ) or estimation (E)',
              type: 'select',
              name: 'release_water_base',
              selected: null,
              options: [
                { text: 'Please select one item', value: null },
                { text: 'Measurement', value: 'M' },
                { text: 'Calculation', value: 'C' },
                { text: 'Estimation', value: 'E' }
              ]
            },
            {
              label: 'Release to Water - Quantities Kg/year',
              info: 'Indication of the total quantity of the pollutant released to waters from all sectors of activity',
              type: 'number',
              name: 'release_water_quantity',
              value: '',
            },
            {
              label: 'Release to Soil - Information based on',
              info: 'It has to be indicated whether the reported information is based on measurement (M), calculation (C ) or estimation (E)',
              type: 'select',
              name: 'release_soil_base',
              selected: null,
              options: [
                { text: 'Please select one item', value: null },
                { text: 'Measurement', value: 'M' },
                { text: 'Calculation', value: 'C' },
                { text: 'Estimation', value: 'E' }
              ]
            },
            {
              label: 'Release to Soil - Quantities Kg/year',
              info: 'Indication of the total quantity of the pollutant released to soil from all sectors of activity',
              type: 'number',
              name: 'release_soil_quantity',
              value: '',
            }
          ]
        }]
      }, {
        article_title: 'Compounds of nitrogen and phosphorus',
        article_items: [{
          description: 'Pollutant Group: Compounds of nitrogen and phosphorus <small class="text-muted">(Annex I to the LBS Protocol)</small>',
          items: [{
              type: 'select',
              label: 'Pollutant name',
              info: 'Please select an option',
              selected: null,
              options: [
                { text: 'Please select one item', value: null },
                { text: 'Pollutant 1', value: 1 },
                { text: 'Pollutant 2', value: 2 }
              ]
            },
            {
              type: 'select',
              label: 'Sector of Activity',
              info: 'Annex I to the LBS Protocol MEDPOL NBB database group of sectors',
              selected: null,
              options: [
                { text: 'Please select one item', value: null },
                { text: 'Sector 1', value: 1 },
                { text: 'Sector 2', value: 2 }
              ]
            },
            {
              type: 'select',
              label: 'Sub-sector',
              info: 'MED POL NBB database group of sectors',
              selected: null,
              options: [
                { text: 'Please select one item', value: null },
                { text: 'Sub-sector 1', value: 1 },
                { text: 'Sub-sector 2', value: 2 }
              ]
            },
            {
              label: 'Release to Air - Information based on',
              info: 'It has to be indicated whether the reported information is based on measurement (M), calculation (C ) or estimation (E)',
              type: 'select',
              name: 'release_air_base',
              selected: null,
              options: [
                { text: 'Please select one item', value: null },
                { text: 'Measurement', value: 'M' },
                { text: 'Calculation', value: 'C' },
                { text: 'Estimation', value: 'E' }
              ]
            },
            {
              label: 'Release to Air - Quantities Kg/year',
              info: 'Indication of the total quantity of the pollutant released to air from all sectors of activity',
              type: 'number',
              name: 'release_air_quantity',
              value: '',
            },
            {
              label: 'Release to Water - Information based on',
              info: 'It has to be indicated whether the reported information is based on measurement (M), calculation (C ) or estimation (E)',
              type: 'select',
              name: 'release_water_base',
              selected: null,
              options: [
                { text: 'Please select one item', value: null },
                { text: 'Measurement', value: 'M' },
                { text: 'Calculation', value: 'C' },
                { text: 'Estimation', value: 'E' }
              ]
            },
            {
              label: 'Release to Water - Quantities Kg/year',
              info: 'Indication of the total quantity of the pollutant released to waters from all sectors of activity',
              type: 'number',
              name: 'release_water_quantity',
              value: '',
            },
            {
              label: 'Release to Soil - Information based on',
              info: 'It has to be indicated whether the reported information is based on measurement (M), calculation (C ) or estimation (E)',
              type: 'select',
              name: 'release_soil_base',
              selected: null,
              options: [
                { text: 'Please select one item', value: null },
                { text: 'Measurement', value: 'M' },
                { text: 'Calculation', value: 'C' },
                { text: 'Estimation', value: 'E' }
              ]
            },
            {
              label: 'Release to Soil - Quantities Kg/year',
              info: 'Indication of the total quantity of the pollutant released to soil from all sectors of activity',
              type: 'number',
              name: 'release_soil_quantity',
              value: '',
            }
          ]
        }]
      }, {
        article_title: 'Litter, persistent or processed solid material',
        article_items: [{
          description: 'Pollutant Group: Litter, persistent or processed solid material <small class="text-muted">(Annex I to the LBS Protocol)</small>',
          items: [{
              type: 'select',
              label: 'Pollutant name',
              info: 'Please select an option',
              selected: null,
              options: [
                { text: 'Please select one item', value: null },
                { text: 'Pollutant 1', value: 1 },
                { text: 'Pollutant 2', value: 2 }
              ]
            },
            {
              type: 'select',
              label: 'Sector of Activity',
              info: 'Annex I to the LBS Protocol MEDPOL NBB database group of sectors',
              selected: null,
              options: [
                { text: 'Please select one item', value: null },
                { text: 'Sector 1', value: 1 },
                { text: 'Sector 2', value: 2 }
              ]
            },
            {
              type: 'select',
              label: 'Sub-sector',
              info: 'MED POL NBB database group of sectors',
              selected: null,
              options: [
                { text: 'Please select one item', value: null },
                { text: 'Sub-sector 1', value: 1 },
                { text: 'Sub-sector 2', value: 2 }
              ]
            },
            {
              label: 'Release to Air - Information based on',
              info: 'It has to be indicated whether the reported information is based on measurement (M), calculation (C ) or estimation (E)',
              type: 'select',
              name: 'release_air_base',
              selected: null,
              options: [
                { text: 'Please select one item', value: null },
                { text: 'Measurement', value: 'M' },
                { text: 'Calculation', value: 'C' },
                { text: 'Estimation', value: 'E' }
              ]
            },
            {
              label: 'Release to Air - Quantities Kg/year',
              info: 'Indication of the total quantity of the pollutant released to air from all sectors of activity',
              type: 'number',
              name: 'release_air_quantity',
              value: '',
            },
            {
              label: 'Release to Water - Information based on',
              info: 'It has to be indicated whether the reported information is based on measurement (M), calculation (C ) or estimation (E)',
              type: 'select',
              name: 'release_water_base',
              selected: null,
              options: [
                { text: 'Please select one item', value: null },
                { text: 'Measurement', value: 'M' },
                { text: 'Calculation', value: 'C' },
                { text: 'Estimation', value: 'E' }
              ]
            },
            {
              label: 'Release to Water - Quantities Kg/year',
              info: 'Indication of the total quantity of the pollutant released to waters from all sectors of activity',
              type: 'number',
              name: 'release_water_quantity',
              value: '',
            },
            {
              label: 'Release to Soil - Information based on',
              info: 'It has to be indicated whether the reported information is based on measurement (M), calculation (C ) or estimation (E)',
              type: 'select',
              name: 'release_soil_base',
              selected: null,
              options: [
                { text: 'Please select one item', value: null },
                { text: 'Measurement', value: 'M' },
                { text: 'Calculation', value: 'C' },
                { text: 'Estimation', value: 'E' }
              ]
            },
            {
              label: 'Release to Soil - Quantities Kg/year',
              info: 'Indication of the total quantity of the pollutant released to soil from all sectors of activity',
              type: 'number',
              name: 'release_soil_quantity',
              value: '',
            }
          ]
        }]
      }, {
        article_title: 'Acid or alkaline compounds',
        article_items: [{
          description: 'Pollutant Group: Acid or alkaline compounds <small class="text-muted">(Annex I to the LBS Protocol)</small>',
          items: [{
              type: 'select',
              label: 'Pollutant name',
              info: 'Please select an option',
              selected: null,
              options: [
                { text: 'Please select one item', value: null },
                { text: 'Pollutant 1', value: 1 },
                { text: 'Pollutant 2', value: 2 }
              ]
            },
            {
              type: 'select',
              label: 'Sector of Activity',
              info: 'Annex I to the LBS Protocol MEDPOL NBB database group of sectors',
              selected: null,
              options: [
                { text: 'Please select one item', value: null },
                { text: 'Sector 1', value: 1 },
                { text: 'Sector 2', value: 2 }
              ]
            },
            {
              type: 'select',
              label: 'Sub-sector',
              info: 'MED POL NBB database group of sectors',
              selected: null,
              options: [
                { text: 'Please select one item', value: null },
                { text: 'Sub-sector 1', value: 1 },
                { text: 'Sub-sector 2', value: 2 }
              ]
            },
            {
              label: 'Release to Air - Information based on',
              info: 'It has to be indicated whether the reported information is based on measurement (M), calculation (C ) or estimation (E)',
              type: 'select',
              name: 'release_air_base',
              selected: null,
              options: [
                { text: 'Please select one item', value: null },
                { text: 'Measurement', value: 'M' },
                { text: 'Calculation', value: 'C' },
                { text: 'Estimation', value: 'E' }
              ]
            },
            {
              label: 'Release to Air - Quantities Kg/year',
              info: 'Indication of the total quantity of the pollutant released to air from all sectors of activity',
              type: 'number',
              name: 'release_air_quantity',
              value: '',
            },
            {
              label: 'Release to Water - Information based on',
              info: 'It has to be indicated whether the reported information is based on measurement (M), calculation (C ) or estimation (E)',
              type: 'select',
              name: 'release_water_base',
              selected: null,
              options: [
                { text: 'Please select one item', value: null },
                { text: 'Measurement', value: 'M' },
                { text: 'Calculation', value: 'C' },
                { text: 'Estimation', value: 'E' }
              ]
            },
            {
              label: 'Release to Water - Quantities Kg/year',
              info: 'Indication of the total quantity of the pollutant released to waters from all sectors of activity',
              type: 'number',
              name: 'release_water_quantity',
              value: '',
            },
            {
              label: 'Release to Soil - Information based on',
              info: 'It has to be indicated whether the reported information is based on measurement (M), calculation (C ) or estimation (E)',
              type: 'select',
              name: 'release_soil_base',
              selected: null,
              options: [
                { text: 'Please select one item', value: null },
                { text: 'Measurement', value: 'M' },
                { text: 'Calculation', value: 'C' },
                { text: 'Estimation', value: 'E' }
              ]
            },
            {
              label: 'Release to Soil - Quantities Kg/year',
              info: 'Indication of the total quantity of the pollutant released to soil from all sectors of activity',
              type: 'number',
              name: 'release_soil_quantity',
              value: '',
            }
          ]
        }]
      }, {
        article_title: 'Non-toxic substances that have an adverse effect on the oxygen balance',
        article_items: [{
          description: 'Pollutant Group: Non-toxic substances that have an adverse effect on the oxygen balance <small class="text-muted">(Annex I to the LBS Protocol)</small>',
          items: [{
              type: 'select',
              label: 'Pollutant name',
              info: 'Please select an option',
              selected: null,
              options: [
                { text: 'Please select one item', value: null },
                { text: 'Pollutant 1', value: 1 },
                { text: 'Pollutant 2', value: 2 }
              ]
            },
            {
              type: 'select',
              label: 'Sector of Activity',
              info: 'Annex I to the LBS Protocol MEDPOL NBB database group of sectors',
              selected: null,
              options: [
                { text: 'Please select one item', value: null },
                { text: 'Sector 1', value: 1 },
                { text: 'Sector 2', value: 2 }
              ]
            },
            {
              type: 'select',
              label: 'Sub-sector',
              info: 'MED POL NBB database group of sectors',
              selected: null,
              options: [
                { text: 'Please select one item', value: null },
                { text: 'Sub-sector 1', value: 1 },
                { text: 'Sub-sector 2', value: 2 }
              ]
            },
            {
              label: 'Release to Air - Information based on',
              info: 'It has to be indicated whether the reported information is based on measurement (M), calculation (C ) or estimation (E)',
              type: 'select',
              name: 'release_air_base',
              selected: null,
              options: [
                { text: 'Please select one item', value: null },
                { text: 'Measurement', value: 'M' },
                { text: 'Calculation', value: 'C' },
                { text: 'Estimation', value: 'E' }
              ]
            },
            {
              label: 'Release to Air - Quantities Kg/year',
              info: 'Indication of the total quantity of the pollutant released to air from all sectors of activity',
              type: 'number',
              name: 'release_air_quantity',
              value: '',
            },
            {
              label: 'Release to Water - Information based on',
              info: 'It has to be indicated whether the reported information is based on measurement (M), calculation (C ) or estimation (E)',
              type: 'select',
              name: 'release_water_base',
              selected: null,
              options: [
                { text: 'Please select one item', value: null },
                { text: 'Measurement', value: 'M' },
                { text: 'Calculation', value: 'C' },
                { text: 'Estimation', value: 'E' }
              ]
            },
            {
              label: 'Release to Water - Quantities Kg/year',
              info: 'Indication of the total quantity of the pollutant released to waters from all sectors of activity',
              type: 'number',
              name: 'release_water_quantity',
              value: '',
            },
            {
              label: 'Release to Soil - Information based on',
              info: 'It has to be indicated whether the reported information is based on measurement (M), calculation (C ) or estimation (E)',
              type: 'select',
              name: 'release_soil_base',
              selected: null,
              options: [
                { text: 'Please select one item', value: null },
                { text: 'Measurement', value: 'M' },
                { text: 'Calculation', value: 'C' },
                { text: 'Estimation', value: 'E' }
              ]
            },
            {
              label: 'Release to Soil - Quantities Kg/year',
              info: 'Indication of the total quantity of the pollutant released to soil from all sectors of activity',
              type: 'number',
              name: 'release_soil_quantity',
              value: '',
            }
          ]
        }]
      }, {
        article_title: 'Non-toxic substances that have adverse effects on the physical or chemical characteristics of seawater',
        article_items: [{
          description: 'Pollutant Group: Non-toxic substances that have adverse effects on the physical or chemical characteristics of seawater <small class="text-muted">(Annex I to the LBS Protocol)</small>',
          items: [{
              type: 'select',
              label: 'Pollutant name',
              info: 'Please select an option',
              selected: null,
              options: [
                { text: 'Please select one item', value: null },
                { text: 'Pollutant 1', value: 1 },
                { text: 'Pollutant 2', value: 2 }
              ]
            },
            {
              type: 'select',
              label: 'Sector of Activity',
              info: 'Annex I to the LBS Protocol MEDPOL NBB database group of sectors',
              selected: null,
              options: [
                { text: 'Please select one item', value: null },
                { text: 'Sector 1', value: 1 },
                { text: 'Sector 2', value: 2 }
              ]
            },
            {
              type: 'select',
              label: 'Sub-sector',
              info: 'MED POL NBB database group of sectors',
              selected: null,
              options: [
                { text: 'Please select one item', value: null },
                { text: 'Sub-sector 1', value: 1 },
                { text: 'Sub-sector 2', value: 2 }
              ]
            },
            {
              label: 'Release to Air - Information based on',
              info: 'It has to be indicated whether the reported information is based on measurement (M), calculation (C ) or estimation (E)',
              type: 'select',
              name: 'release_air_base',
              selected: null,
              options: [
                { text: 'Please select one item', value: null },
                { text: 'Measurement', value: 'M' },
                { text: 'Calculation', value: 'C' },
                { text: 'Estimation', value: 'E' }
              ]
            },
            {
              label: 'Release to Air - Quantities Kg/year',
              info: 'Indication of the total quantity of the pollutant released to air from all sectors of activity',
              type: 'number',
              name: 'release_air_quantity',
              value: '',
            },
            {
              label: 'Release to Water - Information based on',
              info: 'It has to be indicated whether the reported information is based on measurement (M), calculation (C ) or estimation (E)',
              type: 'select',
              name: 'release_water_base',
              selected: null,
              options: [
                { text: 'Please select one item', value: null },
                { text: 'Measurement', value: 'M' },
                { text: 'Calculation', value: 'C' },
                { text: 'Estimation', value: 'E' }
              ]
            },
            {
              label: 'Release to Water - Quantities Kg/year',
              info: 'Indication of the total quantity of the pollutant released to waters from all sectors of activity',
              type: 'number',
              name: 'release_water_quantity',
              value: '',
            },
            {
              label: 'Release to Soil - Information based on',
              info: 'It has to be indicated whether the reported information is based on measurement (M), calculation (C ) or estimation (E)',
              type: 'select',
              name: 'release_soil_base',
              selected: null,
              options: [
                { text: 'Please select one item', value: null },
                { text: 'Measurement', value: 'M' },
                { text: 'Calculation', value: 'C' },
                { text: 'Estimation', value: 'E' }
              ]
            },
            {
              label: 'Release to Soil - Quantities Kg/year',
              info: 'Indication of the total quantity of the pollutant released to soil from all sectors of activity',
              type: 'number',
              name: 'release_soil_quantity',
              value: '',
            }
          ]
        }]
      }]
    }
  },

  tab_3: {
    label: 'Part III: Implementation of Regional Actions Plans (RAPs) and their effectiveness',
    data: {
      question: '',
      table_label: 'Table III: Implementation of Regional Actions Plans (RAPs) and their effectiveness',
      articles: [{
        article_title: 'Regional Action Plans on POPs * (COP IG Decisions 19/8, 19/9, 20/8.3.1-4)',
        article_items: [{
          description: 'Prohibit and/or take legal and administrative measures necessary to eliminate the production and use, import and export of POPs and their wastes (Provision that follows Article 3 of the Stockholm Convention)',
          items: [{
              type: 'changes',
              label: 'Changes in the information provided in the previous report',
              info: 'Please tick the box that applies',
              selected: null,
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
          description: 'Application of BAT and BEPs for environmentally sound management of POPs (Provision that follows Article 5 of the Stockholm Convention)',
          items: [{
              type: 'changes',
              label: 'Changes in the information provided in the previous report',
              info: 'Please tick the box that applies',
              selected: null,
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
          description: 'Take appropriate measures to handle, collect, transport, store and dispose in an environmentally sound manner POPs wastes, including products and articles upon becoming wastes (Provision that follows Article 6 of the Stockholm Convention)',
          items: [{
              type: 'changes',
              label: 'Changes in the information provided in the previous report',
              info: 'Please tick the box that applies',
              selected: null,
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
        article_title: 'Regional Action Plan on Mercury (COP Decision IG. 20/8.1)',
        article_items: [{
          description: 'Prohibit the installation of new Chlor- alkali plants using mercury cells and vinyl chloride monomer production plants using mercury as a catalyst (Article IV.1 A)',
          items: [{
              type: 'changes',
              label: 'Changes in the information provided in the previous report',
              info: 'Please tick the box that applies',
              selected: null,
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
          description: 'Ensure that the releases of mercury from the activity of Chlor-alkali plants shall cease by 2020 at the latest (Article IV.A)',
          items: [{
              type: 'changes',
              label: 'Changes in the information provided in the previous report',
              info: 'Please tick the box that applies',
              selected: null,
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
          description: 'Adopt National Emission Limit Values (ELVs) by 2015 and 2019 for mercury emissions based on values included in the Regional Plan on the Reduction of inputs of Mercury from other than Chlor-alkali industry (Article IV.B)',
          items: [{
              type: 'changes',
              label: 'Changes in the information provided in the previous report',
              info: 'Please tick the box that applies',
              selected: null,
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
          description: 'Monitor releases of mercury into water, air and soil in order to verify compliance with the requirements of the Regional Plan (Article IV.D)',
          items: [{
              type: 'changes',
              label: 'Changes in the information provided in the previous report',
              info: 'Please tick the box that applies',
              selected: null,
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
          description: 'Achieve environmental sound management of metallic mercury from the decommissioned plants (Article IV.A)',
          items: [{
              type: 'changes',
              label: 'Changes in the information provided in the previous report',
              info: 'Please tick the box that applies',
              selected: null,
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
          description: 'Progressively reduce total releases of mercury (to air, water and to products) from existing Chlor-alkali plants until their final cessation with the view not to exceed 1.0g per metric tonne of installed chlorine production capacity in each plant   (Article IV.A)',
          items: [{
              type: 'changes',
              label: 'Changes in the information provided in the previous report',
              info: 'Please tick the box that applies',
              selected: null,
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
          description: 'Take appropriate measures to isolate and contain mercury containing wastes (Article IV.D)',
          items: [{
              type: 'changes',
              label: 'Changes in the information provided in the previous report',
              info: 'Please tick the box that applies',
              selected: null,
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
        article_title: 'Regional Action Plans on BOD5 reduction (COP Decisions IG.19.7 and 20/8.2)',
        article_items: [{
          description: 'Adopt National Emission Limit Values (ELV) for BOD5 in urban wastewater after treatment in accordance with the requirements of the Regional Plan (Article III.2 and 3)',
          items: [{
              type: 'changes',
              label: 'Changes in the information provided in the previous report',
              info: 'Please tick the box that applies',
              selected: null,
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
          description: 'Monitor discharges from municipal wastewater treatment plants to verify compliance with the requirements of the Regional Plan taking into account the Guidelines  included in Appendix II to the Regional Plan (Article III.4)',
          items: [{
              type: 'changes',
              label: 'Changes in the information provided in the previous report',
              info: 'Please tick the box that applies',
              selected: null,
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
          description: 'Ensure that all agglomerations of more than 2000 inhabitants collect and treat urban wastewater before discharging them into the environment (Article III, Appendix I and Appendix III).',
          items: [{
              type: 'changes',
              label: 'Changes in the information provided in the previous report',
              info: 'Please tick the box that applies',
              selected: null,
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
          description: 'Establishment of ELV and authorization compatible with the operation and the emission discharge values of the urban waste water treatment plan, in case the food sector installation discharges into the sewage system (Article IV.1)',
          items: [{
              type: 'changes',
              label: 'Changes in the information provided in the previous report',
              info: 'Please tick the box that applies',
              selected: null,
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
          description: 'Monitor food sector installation discharges into water to verify compliance with the requirements of the Regional Plan taking into account the Guidelines included in Appendix I to the Regional Plan (Article IV.2)',
          items: [{
              type: 'changes',
              label: 'Changes in the information provided in the previous report',
              info: 'Please tick the box that applies',
              selected: null,
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
        article_title: 'Regional Action Plan on Marine Litter (COP Decisions IG. 21/7 and 22/10)',
        article_items: [{
          description: 'Reduction of fraction of plastic packaging waste that goes to landfill or incineration (Article 9. Timetable- 2019)',
          items: [{
              type: 'changes',
              label: 'Changes in the information provided in the previous report',
              info: 'Please tick the box that applies',
              selected: null,
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
          description: 'Ensure adequate urban sewer systems, wastewater treatment plants and waste management systems to prevent run-off and riverine inputs of marine litter(Article 9. Timetable 2020)',
          items: [{
              type: 'changes',
              label: 'Changes in the information provided in the previous report',
              info: 'Please tick the box that applies',
              selected: null,
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
          description: 'Application of cost effective measures to prevent any marine littering from dredging activities (Article 9. Timetable 2020)',
          items: [{
              type: 'changes',
              label: 'Changes in the information provided in the previous report',
              info: 'Please tick the box that applies',
              selected: null,
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
          description: 'Urban solid waste management is based on reduction at source with the following waste hierarchy: prevention, re-use, recycling, recovery and environmental sound disposal (Article 9. Timetable 2025)',
          items: [{
              type: 'changes',
              label: 'Changes in the information provided in the previous report',
              info: 'Please tick the box that applies',
              selected: null,
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
          description: 'Enhancement of public awareness and education of pollution and involvement of various stakeholders with regard to marine litter management (Article 16. Timetable: as appropriate)',
          items: [{
              type: 'changes',
              label: 'Changes in the information provided in the previous report',
              info: 'Please tick the box that applies',
              selected: null,
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
          description: 'Adopt preventive measures to minimize inputs of plastic in the marine environment (Article 9. Timetable 2017)',
          items: [{
              type: 'changes',
              label: 'Changes in the information provided in the previous report',
              info: 'Please tick the box that applies',
              selected: null,
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
          description: 'Implement programmes on regular removal and sound disposal of accumulations/hotspots of marine litter (Article 10. Timetable 2019)',
          items: [{
              type: 'changes',
              label: 'Changes in the information provided in the previous report',
              info: 'Please tick the box that applies',
              selected: null,
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
          description: 'Remove existing accumulated litter from Specially Protected Areas of Mediterranean Importance (SPAMI) and litter impacting endangered species listed in Annexes II and III of the SPA and Biodiversity Protocol (Article 10. Timetable 2019)',
          items: [{
              type: 'changes',
              label: 'Changes in the information provided in the previous report',
              info: 'Please tick the box that applies',
              selected: null,
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
          description: 'Close to the extent possible existing illegal solid waste dump sites (Article 9. Timetable 2020)',
          items: [{
              type: 'changes',
              label: 'Changes in the information provided in the previous report',
              info: 'Please tick the box that applies',
              selected: null,
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
          description: 'Explore an implement National Marine Litter Cleanup Campaigns, participate in international Coastal Cleanup Campaigns and Programmes, apply Adopt a Beach or similar practices and apply Fishing for Litter practices (Article 10. Timetable 2019)',
          items: [{
              type: 'changes',
              label: 'Changes in the information provided in the previous report',
              info: 'Please tick the box that applies',
              selected: null,
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
          description: 'Explore and implement a No-Special - Fee System in port facilities used for implementing the measures provided for in Article 10 of the Regional Plan on removing existing marine litter and its environmentally sound disposal (Article 10. Timetable 2019)',
          items: [{
              type: 'changes',
              label: 'Changes in the information provided in the previous report',
              info: 'Please tick the box that applies',
              selected: null,
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
        article_title: 'Regional Action Plan on Sustainable Consumption and Production in the Mediterranean (COP Decision IG. 22/5)',
        article_items: [{
          description: 'Food, Fisheries and Agriculture (FFA): Adoption and implementation of Good Agricultural Practices (GAP) in line with the EcAP ecological objectives and ICZM guidelines',
          items: [{
              type: 'changes',
              label: 'Changes in the information provided in the previous report',
              info: 'Please tick the box that applies',
              selected: null,
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
          description: 'Food, Fisheries and Agriculture (FFA): Adoption and implementation of Sustainable Fishing Practices, in line with the EcAP ecological objectives and ICZM guidelines',
          items: [{
              type: 'changes',
              label: 'Changes in the information provided in the previous report',
              info: 'Please tick the box that applies',
              selected: null,
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
          description: 'Food, Fisheries and Agriculture (FFA): Establishment of certification schemes (eco- labels) that confirm the sustainable production of food and fisheries products.',
          items: [{
              type: 'changes',
              label: 'Changes in the information provided in the previous report',
              info: 'Please tick the box that applies',
              selected: null,
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
          description: 'Food, Fisheries and Agriculture (FFA): Adoption of Sustainable Public Procurement (SPP) schemes for food and fisheries products.',
          items: [{
              type: 'changes',
              label: 'Changes in the information provided in the previous report',
              info: 'Please tick the box that applies',
              selected: null,
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
          description: 'Food, Fisheries and Agriculture (FFA): Adoption of measures in the field of communication and education to promote the consumption of sustainable, healthy and local food',
          items: [{
              type: 'changes',
              label: 'Changes in the information provided in the previous report',
              info: 'Please tick the box that applies',
              selected: null,
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
          description: 'Goods Manufacturing: Adoption of measures to implement the waste management hierarchy, develop extended produced responsibility schemes, and encourage circular economy',
          items: [{
              type: 'changes',
              label: 'Changes in the information provided in the previous report',
              info: 'Please tick the box that applies',
              selected: null,
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
          description: 'Goods Manufacturing: Development of policy instruments to support the private sector in the sustainable design, production and use of manufactured goods',
          items: [{
              type: 'changes',
              label: 'Changes in the information provided in the previous report',
              info: 'Please tick the box that applies',
              selected: null,
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
          description: 'Goods Manufacturing: Adoption and implementation of Sustainable Public Procurement (SPP) in the Goods Manufacturing Sector',
          items: [{
              type: 'changes',
              label: 'Changes in the information provided in the previous report',
              info: 'Please tick the box that applies',
              selected: null,
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
          description: 'Goods Manufacturing: Establishment of certification schemes (eco-labels) for manufactured goods and awareness raising among the population on the consumption of eco-labelled goods',
          items: [{
              type: 'changes',
              label: 'Changes in the information provided in the previous report',
              info: 'Please tick the box that applies',
              selected: null,
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
          description: 'Tourism: Creation of eco-taxes, eco-charges or fees to internalize externalities of tourism activities',
          items: [{
              type: 'changes',
              label: 'Changes in the information provided in the previous report',
              info: 'Please tick the box that applies',
              selected: null,
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
          description: 'Tourism: Revision of the current national tourism legislation to integrate sustainable principle and measures',
          items: [{
              type: 'changes',
              label: 'Changes in the information provided in the previous report',
              info: 'Please tick the box that applies',
              selected: null,
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
          description: 'Tourism: Adoption of measures to promote the diversification of the tourism offer from mass tourism to alternative forms of tourism',
          items: [{
              type: 'changes',
              label: 'Changes in the information provided in the previous report',
              info: 'Please tick the box that applies',
              selected: null,
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
          description: 'Tourism: Adoption of measures to promote tourism eco-labels and facilitate their award by tourist facilities.',
          items: [{
              type: 'changes',
              label: 'Changes in the information provided in the previous report',
              info: 'Please tick the box that applies',
              selected: null,
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
          description: 'Housing and Construction: Develop measures to support sustainable coastal urban development and green construction, taking into account the entire life cycle of buildings.',
          items: [{
              type: 'changes',
              label: 'Changes in the information provided in the previous report',
              info: 'Please tick the box that applies',
              selected: null,
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
          description: 'Housing and Construction: Promote sustainable public procurement in the public housing and construction sector',
          items: [{
              type: 'changes',
              label: 'Changes in the information provided in the previous report',
              info: 'Please tick the box that applies',
              selected: null,
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
      }]
    }
  },

  tab_4: {
    label: 'Part IV: Implementation of National Actions Plans (NAPs) and their effectiveness',
    data: {
      question: '',
      table_label: 'Table IV: Implementation of NAPs and their effectiveness',
      articles: [{
        article_title: 'Common Operational targets in the NAPs under EO5',
        article_items: [{
          description: 'Provide XX% of agglomerations in excess of 2000 inhabitants with wastewater collection and treatment',
          items: [{
              type: 'changes',
              label: 'Changes in the information provided in the previous report',
              info: 'Please tick the box that applies',
              selected: null,
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
          description: 'Reduce by XX% of BOD discharged to water bodies',
          items: [{
              type: 'changes',
              label: 'Changes in the information provided in the previous report',
              info: 'Please tick the box that applies',
              selected: null,
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
        article_title: 'Common Operational targets in the NAPs under EO9',
        article_items: [{
          description: 'Reduce discharge of hazardous substances from industrial plants (apply BAT/BEP) by XX% or dispose in a safe manner',
          items: [{
              type: 'changes',
              label: 'Changes in the information provided in the previous report',
              info: 'Please tick the box that applies',
              selected: null,
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
        article_title: 'Common Operational targets in the NAPs under E10',
        article_items: [{
          description: 'Provide for the collection of XX% of solid waste',
          items: [{
              type: 'changes',
              label: 'Changes in the information provided in the previous report',
              info: 'Please tick the box that applies',
              selected: null,
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
          description: 'Construct XX municipal solid waste landfills',
          items: [{
              type: 'changes',
              label: 'Changes in the information provided in the previous report',
              info: 'Please tick the box that applies',
              selected: null,
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
          description: 'Adopt good practices in solid waste management including waste reduction, sorting, recycling, recovery, and reuse',
          items: [{
              type: 'changes',
              label: 'Changes in the information provided in the previous report',
              info: 'Please tick the box that applies',
              selected: null,
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
          description: 'Regulate/reduce usage/ discharge of XX% of fraction of plastics',
          items: [{
              type: 'changes',
              label: 'Changes in the information provided in the previous report',
              info: 'Please tick the box that applies',
              selected: null,
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
          description: 'Close/ remediate XX% of illegal solid waste dump sites',
          items: [{
              type: 'changes',
              label: 'Changes in the information provided in the previous report',
              info: 'Please tick the box that applies',
              selected: null,
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
      }]
    }
  },

  tab_5: {
    label: 'Part V: Monitoring',
    data: {
      question: '',
      table_label: 'Table V: Monitoring',
      articles: [{
        article_title: '1. Implementation of quality status monitoring and Integrated Monitoring and Assessment (IMAP) or steps to revise national monitoring programmes in line with IMAP',
        article_items: [{
          description: '',
          items: [{
              type: 'changes',
              label: 'Changes in the information provided in the previous report',
              info: 'Please tick the box that applies',
              selected: null,
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
        article_title: '2. Ecological Objective-EO 5 Eutrophication',
        article_items: [{
          description: '',
          items: [{
              type: 'changes',
              label: 'Changes in the information provided in the previous report',
              info: 'Please tick the box that applies',
              selected: null,
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
        article_title: '3. Ecological Objective-EO 9-Pollution',
        article_items: [{
          description: '',
          items: [{
              type: 'changes',
              label: 'Changes in the information provided in the previous report',
              info: 'Please tick the box that applies',
              selected: null,
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
        article_title: '4. Ecological Objective EO 10 Marine litter',
        article_items: [{
          description: '',
          items: [{
              type: 'changes',
              label: 'Changes in the information provided in the previous report',
              info: 'Please tick the box that applies',
              selected: null,
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
      }]
    }
  },

  tab_6: {
    label: 'Part VI: Enforcements measures',
    data: {
      question: 'Please insert the data or tick the appropriate cell or describe the enforcement measures taken',
      table_label: 'Table VI: Enforcements measures',
      articles: [{
        article_title: 'National legislation and regulations implementing the Protocol (Article 6)',
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
      }, {
        article_title: 'Specific conditions attached to authorizations or permits (Article 6)',
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
  },
}

export default form
