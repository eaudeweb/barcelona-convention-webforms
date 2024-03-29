import reference_years from './reference_years'
import sectors from './sector_options'
import collection_method from './collection_method'
import subsectors from "./subsector_options";

const ind_6_4_1_records_structure = (adminRegions, data) => {
  let sector = null
  return {
    administrativeRegion: {
      name: 'administrativeRegion',
      label: 'Administrative regions',
      tooltip: 'Administrative regions located in drainage basins that outflow into the Mediterranean.',
      type: 'select',
      selected: data && data.administrativeRegion || null,
      options: adminRegions || [],
      get validation() {
        if (!this.selected)
          return `${this.label} is required`
      }
    },
    year: {
      name: 'year',
      label: 'Reference year',
      type: 'select',
      selected: data && data.year || null,
      tooltip: 'Select an option from the list.',
      options: reference_years.map(p => ({text: `${p.text}`, value: p.value})),
      get validation() {
        if (!this.selected)
          return `${this.label} is required`
      }
    },
    noReportionIndustrialInstallations: {
      name: 'noReportionIndustrialInstallations',
      type: 'number',
      selected: data && data.noReportionIndustrialInstallations || null,
      label: 'No. of reporting industrial installations',
      tooltip: 'Number of records of industries providing data on discharges and emissions released by their industrial processes',
      get validation() {
        if (this.selected && (this.selected < 1 || this.selected > 1000000))
          return `${this.label} ${this.type === 'number' ? 'can only contain numeric characters and must be between 1 and 1000000' : ''}`
      }
    },
    noTotalInstallationsRequired: {
      name: 'noTotalInstallationsRequired',
      type: 'number',
      selected: data && data.noTotalInstallationsRequired || null,
      label: 'Total no. of industrial installations required to report',
      tooltip: 'Total number of industrial installations required to provide data on discharges and emissions released by their industrial processes',
      get validation() {
        if (this.selected && (this.selected < 1 || this.selected > 1000000))
          return `${this.label} ${this.type === 'number' ? 'can only contain numeric characters and must be between 1 and 1000000' : ''}`
      }
    },
    sector_id: {
      name: 'sector_id',
      label: 'Industrial Sector',
      tooltip: 'Sectors according to LBS Protocol 30 categories. Select an option from the list.',
      type: 'select',
      selected: data && data.sector_id || null,
      datasource_for: 'subsector_id',
      options: sectors.map(p => ({text: `${p.text}`, value: p.value})),
      get validation() {
        sector = this.selected
        return true
      }
    },
    subsector_id: {
      name: 'subsector_id',
      label: 'Subsectors Sector',
      tooltip: 'Select an option from the list.',
      type: 'select',
      selected: data && data.subsector_id || null,
      filter_by: null,
      get options() {
        if (this.filter_by) {
          return subsectors.filter(p => p.sector === this.filter_by).map(p => ({text: `${p.text}`, value: p.value}))
        } else {
          return []
        }
      },
      get validation() {
        return true
      }
    },
    collection_method: {
      name: 'collection_method',
      label: 'Method of data collection',
      tooltip: 'Select a method of data collection from the list.',
      type: 'select',
      selected: data && data.collection_method || null,
      options: collection_method.map(p => ({text: `${p.text}`, value: p.value})),
      get validation() {
        return true
      }
    },
    remarks: {
      name: 'remarks',
      type: 'textarea',
      selected: data && data.remarks || null,
      label: 'Remarks',
      tooltip: 'Remarks, comments or explanatory notes (free text)',
      get validation() {
        return true
      }
    }
  }
}

export default ind_6_4_1_records_structure
