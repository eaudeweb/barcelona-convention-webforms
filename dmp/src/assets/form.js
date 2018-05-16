var form = {
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
      },{
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
      },{
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
      },{
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
      },{
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
      },{
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
      },{
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
      },{
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
      },{
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
      question: '',
      table_label: 'Table 2a . Biennial Summary of Dumping at Sea Permits and Quantities',
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
    label: 'Part III: QUANTITIES OF WASTES OR OTHER MATTER FOR EACH DUMP SITE AND COORDINATES FOR DUMP SITES',
    data: {}
  },
  tab_4: {
    label: 'Part: IV MONITORING',
    data: {}
  },
  tab_5: {
    label: 'Part V: PLACEMENT (Dumping Protocol, Article 3.4.b)',
    data: {}
  }
}

export default form
