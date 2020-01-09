import ind_6_1_1_records_structure from './ind_6_1_1_records_structure'
import ind_6_1_2_records_structure from './ind_6_1_2_records_structure'
import ind_6_1_3_records_structure from './ind_6_1_3_records_structure'
import ind_6_2_1_records_structure from './ind_6_2_1_records_structure'
import ind_6_2_2_records_structure from './ind_6_2_2_records_structure'
import ind_6_2_3_records_structure from './ind_6_2_3_records_structure'
import ind_6_2_4_records_structure from './ind_6_2_4_records_structure'
import ind_6_3_1_records_structure from './ind_6_3_1_records_structure'
import ind_6_3_2_records_structure from './ind_6_3_2_records_structure'
import ind_6_4_1_records_structure from './ind_6_4_1_records_structure'
import ind_6_4_2_records_structure from './ind_6_4_2_records_structure'
import ind_6_4_3_records_structure from './ind_6_4_3_records_structure'

const form = (country, formData) => ({
  tabs: {
    tab_0: {
      description: 'Information on the reporting Party.',
      form_fields: {
        countryCode: {
          name: 'countryCode',
          type: 'text',
          label: 'Reporting Country',
          selected: country,
          disabled: true,
        },
        reportingYear: {
          name: 'reportingYear',
          type: 'number',
          label: 'Reporting year',
          selected: '2020',
          disabled: true,
        }
      }
    },
    tab_1: {
      description: 'Release of nutrients from industrial sectors',
      form_fields: {
        ind_6_1_1_records: {
          description: 'Total BOD load discharged from industrial installations to the Mediterranean marine environment',
          fields: [ind_6_1_1_records_structure()]
        },
        ind_6_1_2_records: {
          description: 'Total Nitrogen load discharged from industrial installations to the Mediterranean marine environment',
          fields: [ind_6_1_2_records_structure()]
        },
        ind_6_1_3_records: {
          description: 'Total phosphorus load discharged from industrial installations to the Mediterranean marine environment',
          fields: [ind_6_1_3_records_structure()]
        }
      }
    },
    tab_2: {
      description: 'Release of toxic substances from industrial sectors',
      form_fields: {
        ind_6_2_1_records: {
          description: 'Total heavy metals load released from industrial installations to the Mediterranean marine environment',
          fields: [ind_6_2_1_records_structure()]
        },
        ind_6_2_2_records: {
          description: 'Furans and dioxins load released from industrial installations to the Mediterranean marine environment',
          fields: [ind_6_2_2_records_structure()]
        },
        ind_6_2_3_records: {
          description: 'Polycyclic aromatic hydrocarbons (PAH) load released from industrial installations to the Mediterranean marine environment',
          fields: [ind_6_2_3_records_structure()]
        },
        ind_6_2_4_records: {
          description: 'Volatile organic compounds (VOC) load released from industrial installations to the Mediterranean marine environment',
          fields: [ind_6_2_4_records_structure()]
        }
      }
    },
    tab_3: {
      description: 'Industrial hazardous waste disposed in environmentally sound manner',
      form_fields: {
        ind_6_3_1_records: {
          description: 'Total quantity of generated hazardous waste from industrial installations',
          fields: [ind_6_3_1_records_structure()]
        },
        ind_6_3_2_records: {
          description: 'Quantity of industrial hazardous waste disposed in environmentally sound manner relative to total quantity of generated hazardous waste from industrial installations',
          fields: [ind_6_3_2_records_structure()]
        }
      }
    },
    tab_4: {
      description: 'Compliance measures aiming at the reduction and/or elimination of pollutants generated by industrial sectors',
      form_fields: {
        ind_6_4_1_records: {
          description: 'Number of industrial installations reporting periodically loads of pollutants discharged to the marine and coastal environments relative to the total number of industrial installations',
          fields: [ind_6_4_1_records_structure()]
        },
        ind_6_4_2_records: {
          description: 'Number of environmental inspections carried out by enforcement authorities in which industrial installations were found to be in breach of laws and regulations relative to the total number of executed inspections',
          fields: [ind_6_4_2_records_structure()]
        },
        ind_6_4_3_records: {
          description: 'Number of eliminated hotspots identified in the updated NAPs relative to the 2001 and 2015 baselines',
          fields: [ind_6_4_3_records_structure()]
        }
      }
    }
  }
})

export default form
