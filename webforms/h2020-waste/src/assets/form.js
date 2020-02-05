import ind_1_1_records_structure from './ind_1_1_records_structure'
import ind_1_A_records_structure from './ind_1_A_records_structure'
import ind_1_B_records_structure from './ind_1_B_records_structure'
import ind_1_C_records_structure from './ind_1_C_records_structure'
import ind_1_D_records_structure from './ind_1_D_records_structure'
import ind_2_A_1_records_structure from './ind_2_A_1_records_structure'
import ind_2_A_2_records_structure from './ind_2_A_2_records_structure'
import ind_2_B_records_structure from './ind_2_B_records_structure'
import ind_2_B_1_records_structure from './ind_2_B_1_records_structure'
import ind_2_B_2_records_structure from './ind_2_B_2_records_structure'
import ind_2_B_3_records_structure from './ind_2_B_3_records_structure'
import ind_2_C_records_structure from './ind_2_C_records_structure'
import ind_Q_A_records_structure from './ind_Q_A_records_structure'
import ind_Q_B_records_structure from './ind_Q_B_records_structure'
import ind_Q_C_records_structure from './ind_Q_C_records_structure'

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
      description: 'Municipal Waste Generation',
      form_fields: {
        ind_1_1_records: {
          description: 'Total municipal solid waste (MSW) generation on a specific geographical level',
          fields: [ind_1_1_records_structure(formData.adminRegions)]
        },
        ind_1_A_records: {
          description: 'Municipal Solid Waste Composition',
          fields: [ind_1_A_records_structure(formData.adminRegions)]
        },
        ind_1_B_records: {
          description: 'Plastic waste generation per capita',
          fields: [ind_1_B_records_structure(formData.adminRegions)]
        },
        ind_1_C_records: {
          description: '% of population in Coastal Areas / Total Population',
          fields: [ind_1_C_records_structure()]
        },
        ind_1_D_records: {
          description: '% of Time of Tourist visitors in Coastal Areas / Population in Coastal Areas',
          fields: [ind_1_D_records_structure()]
        }
      }
    },
    tab_2: {
      description: '"Hardware" of waste management',
      form_fields: {
        ind_2_A_1_records: {
          description: 'Waste Collection Coverage (Wcc on population)',
          fields: [ind_2_A_1_records_structure(formData.adminRegions)]
        },
        ind_2_A_2_records: {
          description: 'Waste captured by the system (Ws)',
          fields: [ind_2_A_2_records_structure(formData.adminRegions)]
        },
        ind_2_B_records: {
          description: 'Environmental Control',
          fields: [ind_2_B_records_structure(formData.adminRegions)]
        },
        ind_2_B_1_records: {
          description: '% of waste that goes to uncontrolled dumpsites (Wd)',
          fields: [ind_2_B_1_records_structure(formData.adminRegions)]
        },
        ind_2_B_2_records: {
          description: 'Number of Dumpsites in Coastal Areas (NdC)',
          fields: [ind_2_B_2_records_structure(formData.adminRegions)]
        },
        ind_2_B_3_records: {
          description: 'Waste going to dumpsites in the Coastal Areas (WdC)',
          fields: [ind_2_B_3_records_structure(formData.adminRegions)]
        },
        ind_2_C_records: {
          description: 'Resource Recovery and % of plastic waste generated that is recycled',
          fields: [ind_2_C_records_structure(formData.adminRegions)]
        }
      }
    },
    tab_3: {
      description: '"Software" of waste management',
      form_fields: {
        ind_Q_A_records: {
          description: 'Marine Litter & waste management framework',
          fields: [ind_Q_A_records_structure()]
        },
        ind_Q_B_records: {
          description: 'Resource recovery',
          fields: [ind_Q_B_records_structure()]
        },
        ind_Q_C_records: {
          description: 'SUSTAINABLE CONSUMPTION AND PRODUCTION',
          fields: [ind_Q_C_records_structure()]
        }
      }
    }
  }
})

export default form
