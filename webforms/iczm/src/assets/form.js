var form = {
  country: {
    tables: {
      table_1: [{
          name: 'partyname',
          type: 'text',
          label: '1.1 Contracting Party',
          selected: '',
        },
        {
          name: 'rep_period_from',
          type: 'number',
          label: '1.2.1 Reporting period from (year)',
          selected: '',
        },
        {
          name: 'rep_period_to',
          type: 'number',
          label: '1.2.2 Reporting period to (year)',
          selected: '',
        },
        {
          name: 'responsible_full_name',
          type: 'text',
          label: 'Full name of national body responsible',
          selected: ''
        },
        {
          name: 'reporter_full_name_function',
          type: 'text',
          label: '1.3 Name and functions of official completing the report',
          selected: ''
        },
        {
          name: 'mail',
          type: 'text',
          label: '1.3 Name and functions of official completing the report',
          selected: ''
        },
        {
          name: 'mailing_address',
          type: 'text',
          label: '1.4 Mailing address',
          selected: '',
        },
        {
          name: 'tel',
          type: 'text',
          label: '1.5 Telephone',
          selected: '',
        },
        {
          name: 'email',
          type: 'email',
          label: '1.6 Email',
          selected: '',
        },
        {
          name: 'validation_map_fp',
          type: 'text',
          label: '1.7 Validation by MAP Focal Point',
          selected: '',
        },
        {
          name: 'date_dispatch',
          type: 'date',
          label: '1.8 Date of dispatch of report',
          selected: '',
        }
      ]
    }
  },
  tab_2: {
    label: 'Part II: Preparation of Report',
    collection_id: '',
    parent_collection_id: '',
    data: {
      question: '',
      table_label: 'Table II - Preparation of Report',
      collection_id: '',
      parent_collection_id: '',
        articles: [{
          article_title: '2.1 Public authorities consulted',
          article_items: [{
            label: '',
            type: 'textarea',
            name: 'public_authorities_remarks',
            selected: '',
          }]
        },{
          article_title: '2.2 Stakeholders consulted',
          article_items: [{
            label: '',
            type: 'textarea',
            name: 'stakeholders_consulted_remarks',
            selected: '',
          }]
        }
      ]
    }
  },
  tab_3: {
    label: 'Part III: Ratification and general legal transposition into national law Articles 37, 5 and 6',
    collection_id: '',
    parent_collection_id: '',
    data: {
      question: '',
      table_label: 'Table III - Ratification and general legal transposition into national law Articles 37, 5 and 6',
      collection_id: '',
      parent_collection_id: '',
        articles: [{
          article_title: '3.1 Date of signature of Protocol',
          article_items: [{
            label: '',
            type: 'textarea',
            name: 'date_signature_remarks',
            selected: '',
          }]
        },{
          article_title: '3.2 Date of ratification or approval of Protocol',
          article_items: [{
            label: '',
            type: 'textarea',
            name: 'date_ratification_remarks',
            selected: '',
          }]
        },{
          article_title: '3.3 Date of filing with the Spanish Government',
          article_items: [{
            label: '',
            type: 'textarea',
            name: 'date_filling_spanish_government_remarks',
            selected: '',
          }]
        },{
          article_title: '3.4 Date of publication in the country',
          article_items: [{
            label: '',
            type: 'textarea',
            name: 'publication_remarks',
            selected: '',
          }]
        },{
          article_title: '3.5 Date of entry into force in national law',
          article_items: [{
            label: '',
            type: 'textarea',
            name: 'entry_into_force_remarks',
            selected: '',
          }]
        },{
          article_title: '3.6 In the absence of ratification, status of the process for ratification',
          article_items: [{
            label: '',
            type: 'textarea',
            name: 'ratification_remarks',
            selected: '',
          }]
        },{
          article_title: '3.7 Have the provisions of the Protocol been transposed into one or more general legal acts?',
          article_items: [{
            label: '',
            type: 'textarea',
            name: 'protocol_legal_acts_remarks',
            selected: '',
          },{
            label: 'Please specify titles and dates of such general legal acts?',
            type: 'textarea',
            name: 'title_date_legal_acts',
            selected: '',
          },{
            label: 'Which provisions of the Protocol have been transposed into the country’s general legal acts?',
            type: 'textarea',
            name: 'provisions_country_legal_acts',
            selected: '',
          },{
            label: 'Please give a synthetic description of each of them',
            type: 'textarea',
            name: 'synthetic_description',
            selected: '',
          },{
            label: 'Please provide brief comparison between the requirements of the Protocol and Contracting Party legislation',
            type: 'textarea',
            name: 'brief_comparison',
            selected: '',
          }]
        },{
          article_title: '3.8 Are any such acts being prepared?',
          article_items: [{
            label: '',
            type: 'textarea',
            name: 'acts_prepared_remarks',
            selected: '',
          },{
            label: 'Anticipated adoption date ?',
            type: 'textarea',
            name: 'adoption_date',
            selected: '',
          }]
        },{
          article_title: '3.9 Are the objectives and general principles of Article 5 and 6 of the Protocol included in such acts?',
          article_items: [{
            label: '',
            type: 'textarea',
            name: 'objectives_and_general_principles_art5',
            selected: '',
          }]
        },{
          article_title: '3.10 In case not, can you please explain why?',
          article_items: [{
            label: '',
            type: 'textarea',
            name: 'objectives_and_general_principles_art5_why',
            selected: '',
          }]
        }
      ]
    }
  },
  tab_4: {
    label: 'Part IV: Informations on geographical coverage Article 3-3',
    collection_id: '',
    parent_collection_id: '',
    data: {
      question: '',
      table_label: 'Table IV - Informations on geographical coverage Article 3-3',
      collection_id: '',
      parent_collection_id: '',
        articles: [{
          article_title: '4.1 - How was Article 3-3 implemented at national and/ or local level in relation to the obligation to inform the public and stakeholders?',
          article_items: [{
            label: '',
            type: 'textarea',
            name: 'article33_implemented_national',
            selected: '',
          }]
        }
      ]
    }
  },
  tab_5: {
    label: 'Part V: Institutional measures Article 7',
    collection_id: '',
    parent_collection_id: '',
    data: {
      question: '',
      table_label: 'Table V - Institutional measures Article 7',
      collection_id: '',
      parent_collection_id: '',
        articles: [{
          article_title: '5.1 Which department is responsible at central level for ICZM?',
          article_items: [{
            label: '',
            type: 'textarea',
            name: 'department_central_level_iczm',
            selected: '',
          }]
        },{
          article_title: '5.2 Is there an inter-ministerial/ national body for ICZM?',
          article_items: [{
            label: '',
            type: 'textarea',
            name: 'ministerial_national_body_iczm',
            selected: '',
          },{
            label: 'Please, give a short description of name, establishment, competencies and process',
            type: 'textarea',
            name: 'establishment_competencies_process',
            selected: '',
          },{
            label: 'If there is no such body, is there an intention to create it?',
            type: 'intention_to_create_body',
            name: 'intention',
            selected: '',
          }]
        },{
          article_title: '5.3 Is there coordination between maritime and land authorities (Art.7-1-b)?',
          article_items: [{
            label: '',
            type: 'textarea',
            name: 'maritime_land_coordination',
            selected: '',
          },{
            label: 'How and at what level?',
            type: 'textarea',
            name: 'how_details',
            selected: '',
          }]
        },{
          article_title: '5.4 Is there coordination between the national level and the local level:',
          article_items: [{
            label: 'on strategies, plans and programs?',
            type: 'textarea',
            name: 'coordination_strategies_plans',
            selected: '',
          },{
            label: 'on permissions for activities?',
            type: 'textarea',
            name: 'coordination_permissions',
            selected: '',
          },{
            label: 'How (article 7-1-c)?',
            type: 'textarea',
            name: 'coordination_how_details',
            selected: '',
          }]
        },{
          article_title: '5.5 What measures contribute to the coherence and effectiveness referred to under Article 7-2?',
          article_items: [{
            label: '',
            type: 'textarea',
            name: 'measures_to_choerence_article72',
            selected: '',
          }]
        },{
          article_title: '5.6 What difficulties have been encountered?',
          article_items: [{
            label: '',
            type: 'textarea',
            name: 'article72_difficulties',
            selected: '',
          }]
        },{
          article_title: '5.7 How the application of the Protocol has supported the implementation of the provisions of other Protocols of the Barcelona Convention?',
          article_items: [{
            label: '',
            type: 'textarea',
            name: 'support_of_bcrs',
            selected: '',
          }]
        }
      ]
    }
  },
  tab_6: {
    label: 'Part VI: Operational measures',
    collection_id: '',
    parent_collection_id: '',
    data: {
      question: '',
      table_label: 'Table VI - Operational measures',
      collection_id: '',
      parent_collection_id: '',
        articles: [{
          article_title: 'Article 8',
          article_items: [{
            label: '8.2.a Has a zone not less than 100 meters in width where construction is not allowed been legally established?',
            type: 'textarea',
            name: 'legally_established_zone',
            selected: '',
          },{
            label: '8.2.b Have other existing measures been adapted in a manner consistent with this article ?',
            type: 'textarea',
            name: 'existing_measures_adapted',
            selected: '',
          },{
            label: '8.3.a Has the national legislation identified and delimited areas in which urban development and other activities are restricted or, where necessary, prohibited ?',
            type: 'textarea',
            name: 'national_legistlation_delimited_areas',
            selected: '',
          },{
            label: '8.3.b Does national legislation limit the linear extension of urban development and the creation of new transport infrastructure along the coast ?',
            type: 'textarea',
            name: 'linear_extention_limitation',
            selected: '',
          },{
            label: '8.3.c Does national legislation provide for freedom of access by the public to the sea and along the shore ?',
            type: 'textarea',
            name: 'freedom_of_access_by_public_at_sea',
            selected: '',
          },{
            label: '8.3.d Does national legislation restrict or, where necessary, prohibit the movement and parking of land vehicles, as well as the movement and anchoring of marine vessels, in fragile natural areas on land or at sea, including beaches and dunes?',
            type: 'textarea',
            name: 'prohibition_parking_in_fragile_areas',
            selected: '',
          }]
        },{
          article_title: 'Article 9 - Economic Activities',
          article_items: [{
            label: 'Are there any specific economic indicators relating to the sustainable use of the coastal zone defined in national legislation?',
            type: 'textarea',
            name: 'economic_indicators_costal_zone',
            selected: '',
          }]
        },{
          article_title: 'Article 10 - Specific coastal ecosystems, landscapes & cultural heritage',
          article_items: [{
            label: '1. Wetlands - Are measures in place by national legislation to regulate or, if necessary, prohibit activities that may have adverse effects on wetlands and estuaries?',
            type: 'textarea',
            name: 'wetlands_measures',
            selected: '',
          },{
            label: '2.a Marine Habitats - Have measures to ensure the protection and conservation, through legislation, planning and management of marine and coastal areas been adopted?',
            type: 'textarea',
            name: 'conservation_measures',
            selected: '',
          },{
            label: '2.b Marine Habitats - Does your country participate in international cooperation programmes, agreements or activities to protect marine habitats?',
            type: 'textarea',
            name: 'international_cooperation',
            selected: '',
          }]
        },{
          article_title: 'Article 11 - Coastal landscapes',
          article_items: [{
            label: 'Does national legislation include planning and management measures to ensure the protection of coastal landscapes?',
            type: 'textarea',
            name: 'protection_of_costal_landscapes_planning',
            selected: '',
          }]
        },{
          article_title: 'Article 12 - Islands',
          article_items: [{
            label: 'Are the specificities of islands taken into account in coastal strategies, plans and programmes?',
            type: 'textarea',
            name: 'specificities_taken_into_account',
            selected: '',
          }]
        },{
          article_title: 'Article 13 - Cultural Heritage',
          article_items: [{
            label: 'Have appropriate measures to preserve and protect coastal cultural, archaeological and historic heritage including the underwater heritage been included in national legislation?',
            type: 'textarea',
            name: 'cultural_heritage',
            selected: '',
          }]
        },{
          article_title: 'Article 15 - Awareness raising, Training, Education & Research',
          description: 'Have awareness-raising activities, educational programmes, training and public education on ICZM been undertaken at the following levels? :',
          article_items: [{
            label: 'National',
            type: 'textarea',
            name: 'national',
            selected: '',
          },{
            label: 'Regional',
            type: 'textarea',
            name: 'regional',
            selected: '',
          },{
            label: 'Local',
            type: 'textarea',
            name: 'local',
            selected: '',
          }]
        },{
          article_title: 'Article 16 - Monitoring & Review',
          description: 'Has a national coastal inventory been prepared covering the following informations:',
          article_items: [{
            label: 'Resources & activities that may influence coastal zones?',
            type: 'textarea',
            name: 'resources_activities',
            selected: '',
          },{
            label: 'Institutions that may influence coastal zones?',
            type: 'textarea',
            name: 'institutions',
            selected: '',
          },{
            label: 'Legislation and Planning that may influence coastal zones?',
            type: 'textarea',
            name: 'legislation_planning',
            selected: '',
          }]
        },{
          article_title: 'Article 18 - National coastal strategies, Plans & Programmes, Tranboundary cooperation',
          article_items: [{
            label: '1. Has a national strategy for integrated coastal zone management been formulated or strengthened?',
            type: 'textarea',
            name: 'national_strategy',
            selected: '',
          },{
            label: '2. Are there up-to-date assessments of the use and management of coastal zones?',
            type: 'textarea',
            name: 'assessments',
            selected: '',
          },{
            label: '3. Are appropriate indicators defined in order to evaluate the effectiveness of integrated coastal zone management strategies, plans & programmes, as well as the progress of implementation of the Protocol?',
            type: 'textarea',
            name: 'indicators',
            selected: '',
          }]
        },{
          article_title: 'Article 19 - Environnemental Assessment',
          article_items: [{
            label: '1. Are appropriate EIAs required by national legislation for public and private projects likely to have significant environmental effects on the coastal zones?',
            type: 'textarea',
            name: 'appropriate_eia',
            selected: '',
          },{
            label: '2. Does national legislation require a strategic environmental assessment of plans and programmes affecting the coastal zone?',
            type: 'textarea',
            name: 'national_legislation',
            selected: '',
          }]
        },{
          article_title: 'Article 20 - Land Policy',
          article_items: [{
            label: '1. Have appropriate land policy instruments and measures been envisaged by national legislation for the purpose of promoting integrated coastal zone management?',
            type: 'textarea',
            name: 'land_policy',
            selected: '',
          },{
            label: '2. Are there mechanisms for the acquisition, cession, donation or transfer of land to the public domain and institute easements on properties in the coastal zone?',
            type: 'textarea',
            name: 'mechanisms',
            selected: '',
          },{
            label: '3. What is the area or percentage of land acquired in the Country?',
            type: 'textarea',
            name: 'area_acquired',
            selected: '',
          },{
            label: '4. Who is responsible for the management of the land?',
            type: 'textarea',
            name: 'land_responsible',
            selected: '',
          },{
            label: '5. Are there examples of private or non-governmental organizations established for the preservation of coastal land?',
            type: 'textarea',
            name: 'private_examples',
            selected: '',
          }]
        },{
          article_title: 'Article 21 - Economic, Financial & Fiscal Instruments',
          article_items: [{
            label: '1. Have measures to adopt relevant economic. Financial and? Or fiscal instruments intended to support local, regional and national initiatives for the integrated management of coastal zone been adopted?',
            type: 'textarea',
            name: 'relevant_economic',
            selected: '',
          },{
            label: '2. Are there economic, financial and/ or fiscal instruments which are potentially counter to the objectives of the integrated management of the coastal zone?',
            type: 'textarea',
            name: 'fiscal_instruments',
            selected: '',
          }]
        },{
          article_title: 'Articles 22 and 23 - Natural hazards & coastal erosion',
          article_items: [{
            label: '1. Have vulnerability and hazard assessments of coastal zones been undertaken?',
            type: 'textarea',
            name: 'vulnerability',
            selected: '',
          },{
            label: '2. Have prevention, mitigation and adaptation measures to address the effects of natural disasters, in particular of climate change, been implemented in coastal areas?',
            type: 'textarea',
            name: 'prevention_measures',
            selected: '',
          },{
            label: '3. Have measures been adopted to maintain or restore the natural capacity of the coast to adapt to changes, including those caused by the rise in sea levels?',
            type: 'textarea',
            name: 'measures_adopted',
            selected: '',
          }]
        },{
          article_title: 'Article 24 - Response to natural disasters',
          article_items: [{
            label: '1. Do you have a national contingency plan for natural disasters affecting the coastal zone and responsible organization?',
            type: 'textarea',
            name: 'national_contingency_plan',
            selected: '',
          },{
            label: '2. Which national authorities are competent to act in the case of natural disaster?',
            type: 'textarea',
            name: 'national_authorities',
            selected: '',
          }]
        },{
          article_title: 'Article 27 - Exchange of information and activities of common interest',
          article_items: [{
            label: '1. Have coastal management indicators been defined?',
            type: 'textarea',
            name: 'coastal_management',
            selected: '',
          },{
            label: '2. Have up-to-date assessments of the use and management of coastal zones been carried out and updated?',
            type: 'textarea',
            name: 'assessments_art27',
            selected: '',
          },{
            label: '3. Have activities of common interest, such as demonstration projects of integrated zone management been carried out?',
            type: 'textarea',
            name: 'activities',
            selected: '',
          },{
            label: '4. Have Centres of specific ICZM scientific capacity been established in your country?',
            type: 'textarea',
            name: 'scientific_capacity',
            selected: '',
          }]
        },{
          article_title: 'Article 28 - Transboundary cooperation',
          article_items: [{
            label: 'In contiguous coastal zones are bilateral or multilateral national coastal strategies, plans and programmes coordinated?',
            type: 'textarea',
            name: 'contiguous_costal_zones',
            selected: '',
          }]
        },{
          article_title: 'Article 29 - Transboundary environmental assessment',
          article_items: [{
            label: 'Is there cooperation by means of notification, exchange of information and consultation in assessing the environmental impacts of plans, programmes and projects?',
            type: 'textarea',
            name: 'cooperation_enviromental_impact_of_plans',
            selected: '',
          }]
        }
      ]
    }
  }
}

export default form