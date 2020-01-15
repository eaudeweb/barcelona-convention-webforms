import ind_3_1_1_records_structure from './ind_3_1_1_records_structure'
import ind_3_1_2_records_structure from './ind_3_1_2_records_structure'
import ind_3_2_1_records_structure from './ind_3_2_1_records_structure'
import ind_3_2_2_records_structure from './ind_3_2_2_records_structure'
import ind_4_1_1_records_structure from './ind_4_1_1_records_structure'
import ind_4_1_2_records_structure from './ind_4_1_2_records_structure'
import ind_4_2_records_structure from './ind_4_2_records_structure'
import ind_4_3_records_structure from './ind_4_3_records_structure'
import ind_5_1_1_records_structure from './ind_5_1_1_records_structure'
import ind_5_1_2_records_structure from './ind_5_1_2_records_structure'
import ind_5_2_records_structure from './ind_5_2_records_structure'

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
      description: 'Access to sanitation',
      form_fields: {
        ind_3_1_1_records: {
          description: 'Share of national population with access to an improved sanitation system (ISS)',
          fields: [ind_3_1_1_records_structure()]
        },
        ind_3_1_2_records: {
          description: 'Share of population in the catchment/hydrological basin at the coastal area with access to an improved sanitation system (ISS)',
          fields: [ind_3_1_2_records_structure()]
        },
        ind_3_2_1_records: {
          description: 'Proportion of national population using safely managed sanitation services (SMSS)',
          fields: [ind_3_2_1_records_structure()]
        },
        ind_3_2_2_records: {
          description: 'Proportion of population in the catchment/ hydrological basin at the coastal area using safely managed sanitation services (SMSS)',
          fields: [ind_3_2_2_records_structure()]
        }
      }
    },
    tab_2: {
      description: 'Municipal Wastewater Management',
      form_fields: {
        ind_4_1_1_records: {
          description: 'Municipal wastewater collected and wastewater treated at the national level',
          fields: [ind_4_1_1_records_structure()]
        },
        ind_4_1_2_records: {
          description: 'Municipal wastewater collected and wastewater treated per catchment/ hydrological basin at the coastal area',
          fields: [ind_4_1_2_records_structure()]
        },
        ind_4_2_records: {
          description: 'Direct use of treated municipal wastewater at the National level',
          fields: [ind_4_2_records_structure()]
        },
        ind_4_3_records: {
          description: 'Release of nutrients from municipal effluents per catchment/ hydrological basin at the coastal area',
          fields: [ind_4_3_records_structure()]
        }
      }
    },
    tab_3: {
      description: 'Coastal and Marine Water Quality',
      form_fields: {
        ind_5_1_1_records: {
          description: 'Nutrient concentrations in transitional, coastal and marine waters (Station)',
          fields: [ind_5_1_1_records_structure()]
        },
        ind_5_1_2_records: {
          description: 'Nutrient concentrations in transitional, coastal and marine waters (Parameters)',
          fields: [ind_5_1_2_records_structure()]
        },
        ind_5_2_records: {
          description: 'Bathing Water Quality',
          fields: [ind_5_2_records_structure()]
        }
      }
    }
  }
})

export default form
