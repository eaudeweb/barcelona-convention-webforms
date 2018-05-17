var form = {
  tab_1: {
    label: 'Part I: Legal and Regulatory measures',
    data: {
      question: 'Question 1: Has the Party, in accordance with Article 14 of the Barcelona Convention, adopted legislation implementing the provisions of the SPA and Biodiversity Protocol listed in Table I below?',
      table_label: 'Table I: Legal and regulatory measures',
      articles: [{
          article_title: 'Article 2.1',
          article_items: [{
            description: 'Designation of the terrestrial areas (including wetlands) under their jurisdiction that are included in the area to which the SPA and Biological Diversity Protocol applies',
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
    data: {
      question: 'Question 2: Has the Party established specially protected areas and taken necessary measures for their protection and the implementation of their management plans?',

      table_1: {

        table_label: 'Table II – MEASURES TO PROTECT SPAs',
        articles: [{
            article_title: 'Article 3.1.a',
            article_items: [{
              description: 'Setting up of protected areas that come within the Protocol’s geographical coverage',
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
        table_label: 'Table III - LIST OF SPAs WITHIN THE PROTOCOL´S GEOGRAPHICAL COVERAGE',
        articles: [{
          article_title: {
            label: "Name of the SPA",
            value: 'please specify a name',
            name: 'name',
            type: 'text'
          },
          article_items: [{
              label: 'Date of establishment',
              type: 'date',
              name: 'date',
              value: '',
            }, {
              label: 'Category',
              type: 'text',
              name: 'category',
              value: '',
            }, {
              label: 'Jurisdiction',
              type: 'text',
              name: 'jurisdiction',
              value: '',
            }, {
              label: 'Coordinates',
              type: 'text',
              name: 'coordinates',
              value: '',
            }, {
              label: 'Surface (marine, terrestrial, wetland)',
              type: 'text',
              name: 'surface',
              value: '',
            }, {
              label: 'Main ecosystems, species and their habits',
              type: 'text',
              name: 'ecosystems',
              value: '',
            },
            {
              label: 'Management plan',
              type: 'multiple',
              name: 'management',
              value: [{
                  label: "Date of adoption",
                  value: '',
                  name: 'date',
                  type: 'date'
                },
                {
                  label: "No",
                  value: '',
                  type: 'number',
                  name: 'number'
                },
                {
                  label: "Under development",
                  value: '',
                  type: 'text',
                  name: 'under_dev'
                }
              ]
            }
          ]
        }]
      },


      table_3: {

        table_label: 'Table IV - MANAGEMENT OF SPAs',
        articles: [{
          article_title: 'Article 7.1',
          article_items: [{
            description: 'Adoption of planning, management, supervision and monitoring  measures for Specially Protected Areas',
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






  tab_4: {
    label: 'Part IV: Endangered and threatened species',
    data: {
      question: 'Question 5:	Has the Party implemented measures to protect and conserve endangered and threatened species as indicated in Table VIII?',

      table_1: {

        table_label: 'Table VIII - MEASURES TO PROTECT ENDANGERED AND THREATENED SPECIES',
        articles: [{
            article_title: 'Article 11.2',
            article_items: [{
              description: 'Drawing up of a list of endangered or threatened species of fauna and flora and identification of their distribution in the zones subject to Party\'s jurisdiction',
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
        table_label: 'Table IX – MEASURES TO PROTECT SPECIES,PER EACH SPECIES ',
        articles: [{
          article_title: 'List of species as per the Annexes to the Protocol(For each species, tick the box that applies)',
            article_items: [{
              items: [{
                  type: 'checkbox',
                  label: 'Posidonia Oceanica',
                  info: 'Please tick all that apply',
                  selected: [],
                  options: [
                    { text: 'Party‘s list of endangered/threatened animals and plants', value: 1 },
                    { text: 'Sub-regional cooperation for migrants species', value: 2 },
                    { text: 'Ex situ protection measures', value: 3 },
                    { text: 'Exemption granted', value: 4 },
                    { text: 'Introduction of species or genetically modified species', value: 5 }
                  ],
                  comments: ''
                },
                {
                  type: 'checkbox',
                  label: 'Xiphias gladius',
                  info: 'Please tick all that apply',
                  selected: [],
                  options: [
                    { text: 'Party‘s list of endangered/threatened animals and plants', value: 1 },
                    { text: 'Sub-regional cooperation for migrants species', value: 2 },
                    { text: 'Ex situ protection measures', value: 3 },
                    { text: 'Exemption granted', value: 4 },
                    { text: 'Introduction of species or genetically modified species', value: 5 }
                  ],
                  comments: ''
                }
              ]
            }]
        }]
      },

    }
  },

















}

export default form
