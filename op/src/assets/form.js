var form = {
  tab_1: {
    label: 'Part I: LEGAL AND REGULATORY MEASURES',
    data: {
      question: 'Question 1: Has the Party, in accordance with Article 14 of the Barcelona Convention, adopted legislation implementing the provisions of the Offshore Protocol as listed in Table I?',
      table_label: 'Table I – LEGAL AND REGULATORY MEASURES',
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
    label: 'Part II: PERMITS AND QUANTITIES',
    data: {
      question: '',
      table_label: 'Table II – Biennial Summary of Permits and Quantities',
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
    label: 'Part III: INVENTORY OF OFFSHORE INSTALLATIONS',
    data: {
      question: '',
      table_label: 'Table III – INVENTORY OF OFFSHORE INSTALLATIONS INCLUDING DISUSED INSTALLATIONS',
    }
  },
  tab_4: {
    label: 'Part IV: ENFORCEMENT',
    data: {
      question: '',
      table_label: 'Table IV – ENFORCEMENT MEASURES',
    }
  }
}

export default form
