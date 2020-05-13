import mixing from './mixing'
import area_type from './area-type'

const ind_5_1_1_records_structure = (data) => ({
  nationalStationID: {
    name: 'nationalStationID',
    label: 'Station code',
    tooltip: 'Use the former sampling guidelines provided by UNEP-MAP',
    type: 'text',
    selected: data && data.nationalStationID || null,
    get validation() {
      if (!this.selected)
        return `${this.label} is required`
    }
  },
  nationalStationName: {
    name: 'nationalStationName',
    label: 'Name of the station',
    tooltip: 'Use the former sampling guidelines provided by UNEP-MAP',
    type: 'text',
    selected: data && data.nationalStationName || null,
    get validation() {
      if (!this.selected)
        return `${this.label} is required`
    }
  },
  longitude: {
    name: 'longitude',
    type: 'number',
    selected: data && data.longitude || null,
    label: 'Longitude in the reference system WGS84 decimal degrees',
    tooltip: 'This is a required, not null field. Use the common geodetic datum WGS84. The bathing water must be located within country border.',
    get validation() {
      if (!this.selected)
        return `${this.label} is required`
      if (this.selected && (this.selected < -180 || this.selected > 180))
        return `${this.label} ${this.type === 'number' ? 'can only contain numeric characters and must be between -180 and 180' : ''}`
    }
  },
  latitude: {
    name: 'latitude',
    type: 'number',
    selected: data && data.latitude || null,
    label: 'Latitude in the reference system WGS84 decimal degrees',
    tooltip: 'This is a required, not null field. Use the common geodetic datum WGS84. The bathing water must be located within country border.',
    get validation() {
      if (!this.selected)
        return `${this.label} is required`
      if (this.selected && (this.selected < -90 || this.selected > 90))
        return `${this.label} ${this.type === 'number' ? 'can only contain numeric characters and must be between -90 and 90' : ''}`
    }
  },
  closestCoast: {
    name: 'closestCoast',
    type: 'number',
    selected: data && data.closestCoast || null,
    label: 'Distance from the station to the Coast (km)',
    tooltip: 'Measured distance between the station point and closest coast',
    get validation() {
      if (this.selected && (this.selected < 0 || this.selected > 1000))
        return `${this.label} ${this.type === 'number' ? 'can only contain numeric characters and must be between 0 and 1000' : ''}`
    }
  },
  seaDepth: {
    name: 'seaDepth',
    type: 'number',
    selected: data && data.seaDepth || null,
    label: 'Depth of the Sea bed (m)',
    tooltip: 'Measured distance between the Sea depth and the station point location',
    get validation() {
      if (this.selected && (this.selected < 0 || this.selected > 1000))
        return `${this.label} ${this.type === 'number' ? 'can only contain numeric characters and must be between 0 and 1000' : ''}`
    }
  },
  mixing: {
    name: 'mixing',
    label: 'Mixing characteristics of the water column in the station point',
    tooltip: 'Select a value from the list.',
    type: 'select',
    selected: data && data.mixing || null,
    options: mixing.map(p => ({text: `${p.text}`, value: p.value})),
    get validation() {
      return true
    }
  },
  areaType: {
    name: 'areaType',
    label: 'Type of monitored area',
    tooltip: 'Select a value from the list.',
    type: 'select',
    selected: data && data.areaType || null,
    options: area_type.map(p => ({text: `${p.text}`, value: p.value})),
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
})

export default ind_5_1_1_records_structure
