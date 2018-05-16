var form = {
  tab_1: {
    label: 'Part I: LEGAL AND REGULATORY MEASURES',
    data: {
      question: 'Question 1: Has the Party, in accordance with Article 14 of the Barcelona Convention, adopted legislation implementing the provisions of the Hazardous Wastes Protocol as listed in Table I below?',
      table_label: 'Table I – LEGAL AND REGULATORY MEASURES',
      articles: [{
          article_title: 'Article 4.1 Article 3.1(a) (b) Wastes Controlled for the Purpose of Transboundary Movement',
          article_items: [{
            description: 'National definition of waste used for the purpose of transboundary movements of waste',
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
            description: 'National definition of hazardous waste used for the purpose of transboundary movements of waste',
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
            description: 'National definition of hazardous wastes cover wastes other than those listed in Annex I to the Protocol',
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
            description: 'Regulation and control for the purpose of transboundary movements of any additional wastes as hazardous that are not included in Annex I to the Protocol',
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
          article_title: 'Article 5.2 Reduction/elimination of the generation of hazardous wastes',
          article_items: [{
            description: 'Reduction to a minimum or where possible elimination of the generation of hazardous waste',
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
          article_title: 'Article 5.3 Reduction of the amount of hazardous wastes subject to transboundary movement',
          article_items: [{
            description: 'Reduction to a minimum and possibly elimination of the transboundary movement of hazardous waste through bans on the import of hazardous waste, and refusal of permits for export of hazardous waste to States which have prohibited their import',
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
          article_title: 'Article 5.4 Restrictions/prohibitions on the export and transit of hazardous wastes',
          article_items: [{
            description: 'Subject to the specific provisions referred to in Art. 6 para. 4 relating to the transboundary movement of hazardous waste through the territorial sea of the State of transit, prohibition of the export and transit of hazardous  aste, within the area under their jurisdiction, to developing countries',
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
          article_title: 'Article 5.4 Restrictions/prohibitions on the import and transit of hazardous wastes',
          article_items: [{
            description: 'Subject to the specific provisions referred to in Art. 6 para. 4 relating to the transboundary movement of hazardous waste through the territorial sea of the State of transit, prohibition, by the Parties which are not Member States of the European Community of all imports and transit of hazardous waste',
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
          article_title: 'Article. 6.3\nArticle 6.4\nNotification procedure of the transboundary movement of waste',
          article_items: [{
            description: 'The transboundary movements of hazardous waste only take place (within areas beyond the territorial sea waters) with the prior written notification of the State of export and consent of the State of import, as specified in Annex IV',
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
            description: 'The transboundary movements of hazardous waste through the territorial sea of the State of transit only takes place with the prior notification by the State of export to the State of transit as specified in Annex IV',
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
          article_title: 'Article 5.1 Restrictions on the export/import/transit/ of hazardous wastes',
          article_items: [{
            description: 'Restrictions on the export of hazardous wastes and other wastes for final disposal (Annex III. A) in your country',
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
            description: 'Restrictions on the export of hazardous wastes and other wastes for recovery (Annex III.B) in your country',
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
            description: 'Restrictions on the import of hazardous wastes and other wastes for final disposal (Annex III. A) in your country',
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
            description: 'Restrictions on the import of hazardous wastes and other wastes for recovery (Annex IV B) in your country',
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
            description: 'Restrictions on the transit of hazardous wastes and other wastes through your country',
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
          article_title: 'Article 5.5\nArticle 9',
          article_items: [{
            description: 'Prevention and punishment by the national competent authority or authorities of illegal traffic in hazardous wastes, including criminal penalties for all persons involved in such illegal activities',
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
          article_title: 'Article 12 Information to and Participation to the Public',
          article_items: [{
            description: 'Ensure that adequate information is made available to the public and the public , whenever possible and appropriate have an opportunity to participate',
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
    label: 'Part II: GENERATION OF HAZARDOUS WASTES AND OTHER WASTES',
    data: {
      question: '',
      table_label: 'Table II – Wastes other than those listed in Annex I to the Protocol considered or defined as hazardous wastes under domestic legislation (Article 4 1)',
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
    label: 'Part III: TRANSBOUNDARY MOVEMENTS OF HAZARDOUS WASTES OR OTHER WASTES',
    data: {
      question: '',
      table_label: 'Table V - Export of hazardous wastes and other wastes',
    }
  },
  tab_4: {
    label: 'Part IV: DISPOSALS WHICH DID NOT PROCEED AS INTENDED AND ACCIDENTS',
    data: {
      question: '',
      table_label: 'Table VII - Disposals which did not proceed as intended',
    }
  },
  tab_5: {
    label: 'Part V: ENFORCEMENT MEASURES',
    data: {
      question: '',
      table_label: 'Table VI – Enforcement measures',
    }
  }
}

export default form
