import reference_years from './reference_years'

const dem_entry = (data) => ({
  year: {
    name: 'year',
    label: 'Reference year',
    type: 'select',
    selected: data && data.year || null,
    options: reference_years.map(p => ({text: `${p.text}`, value: p.value})),
    get validation() {
      if (!this.selected) {
        return `${this.label} is required`

      }
    }
  },
  totalPopulation: {
    name: 'totalPopulation',
    type: 'number',
    selected: data && data.totalPopulation || null,
    label: 'Total Population',
    tooltip: 'The total population as of the reference year',
    get validation() {
      if (this.selected && (this.selected < 1 || this.selected > 1000000000))
        return `${this.label} ${this.type === 'number' ? 'can only contain numeric characters and must be between 1 and 1000000000' : ''}`
    }
  },
  urbanPopulation: {
    name: 'urbanPopulation',
    type: 'number',
    selected: data && data.urbanPopulation || null,
    label: 'Urban Population',
    tooltip: 'The total population as of the reference year',
    get validation() {
      if (this.selected && (this.selected < 1 || this.selected > 1000000000))
        return `${this.label} ${this.type === 'number' ? 'can only contain numeric characters and must be between 1 and 1000000000' : ''}`
    }
  },
  ruralPopulation: {
    name: 'ruralPopulation',
    type: 'number',
    selected: data && data.ruralPopulation || null,
    label: 'Rural Population',
    tooltip: 'The total population as of the reference year',
    get validation() {
      if (this.selected && (this.selected < 1 || this.selected > 1000000000))
        return `${this.label} ${this.type === 'number' ? 'can only contain numeric characters and must be between 1 and 1000000000' : ''}`
    }
  },
  Total_Pop_Coast_Hydro_Basin: {
    name: 'Total_Pop_Coast_Hydro_Basin',
    type: 'number',
    selected: data && data.Total_Pop_Coast_Hydro_Basin || null,
    label: 'Total population living in the hydrological basins (catchment) of coastal areas',
    tooltip: 'The total population as of the reference year',
    get validation() {
      if (this.selected && (this.selected < 1 || this.selected > 1000000000))
        return `${this.label} ${this.type === 'number' ? 'can only contain numeric characters and must be between 1 and 1000000000' : ''}`
    }
  },
  Urban_Pop_Coast_Hydro_Basin: {
    name: 'Urban_Pop_Coast_Hydro_Basin',
    type: 'number',
    selected: data && data.Urban_Pop_Coast_Hydro_Basin || null,
    label: 'Urban population living in the hydrological basins (catchment) of coastal areas',
    tooltip: 'The urban population as of the reference year',
    get validation() {
      if (this.selected && (this.selected < 1 || this.selected > 1000000000))
        return `${this.label} ${this.type === 'number' ? 'can only contain numeric characters and must be between 1 and 1000000000' : ''}`
    }
  },
  Rural_Pop_Coast_Hydro_Basin: {
    name: 'Rural_Pop_Coast_Hydro_Basin',
    type: 'number',
    selected: data && data.Rural_Pop_Coast_Hydro_Basin || null,
    label: 'Rural population living in the hydrological basins (catchment) of coastal areas',
    tooltip: 'The total population as of the reference year',
    get validation() {
      if (this.selected && (this.selected < 1 || this.selected > 1000000000))
        return `${this.label} ${this.type === 'number' ? 'can only contain numeric characters and must be between 1 and 1000000000' : ''}`
    }
  },
  Total_Pop_more_2000_Inhabitants_Hydro_Coast: {
    name: 'Total_Pop_more_2000_Inhabitants_Hydro_Coast',
    type: 'number',
    selected: data && data.Total_Pop_more_2000_Inhabitants_Hydro_Coast || null,
    label: 'Total population in agglomerations >= 2000 inhabitants located within the hydrological basin of coastal areas and within coastal areas that discharge directly in the Mediterranean',
    tooltip: 'Total population in agglomerations >= 2000 inhabitants located within the hydrological basin of coastal areas and within coastal areas that discharge directly in the Mediterranean (in case total population in coastal areas and coastal hydrological basins is not available)',
    get validation() {
      if (this.selected && (this.selected < 1 || this.selected > 1000000000))
        return `${this.label} ${this.type === 'number' ? 'can only contain numeric characters and must be between 1 and 1000000000' : ''}`
    }
  },
  Total_Pop_more_2000_Inhabitants_Coast: {
    name: 'Total_Pop_more_2000_Inhabitants_Coast',
    type: 'number',
    selected: data && data.Total_Pop_more_2000_Inhabitants_Coast || null,
    label: 'Total population living in coastal agglomerations ≥ 2000 inhabitants',
    tooltip: 'Total population living in coastal agglomerations ≥ 2000 inhabitants (in case population >= 2000 Inhabitants living in hydrological basins is not available)',
    get validation() {
      if (this.selected && (this.selected < 1 || this.selected > 1000000000))
        return `${this.label} ${this.type === 'number' ? 'can only contain numeric characters and must be between 1 and 1000000000' : ''}`
    }
  },
  Total_Pop_Coast: {
    name: 'Total_Pop_Coast',
    type: 'number',
    selected: data && data.Total_Pop_Coast || null,
    label: 'Total Population living in the coastal area',
    tooltip: 'Total Population living in the coastal area',
    get validation() {
      if (this.selected && (this.selected < 1 || this.selected > 1000000000))
        return `${this.label} ${this.type === 'number' ? 'can only contain numeric characters and must be between 1 and 1000000000' : ''}`
    }
  }
})

export default dem_entry
