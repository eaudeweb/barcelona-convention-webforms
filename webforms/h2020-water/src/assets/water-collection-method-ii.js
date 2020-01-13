const water_collection_method_ii = [
  {
    "text": "Using the location of the centre of the commune",
    "value": 1
  },
  {
    "text": "Using the share of the area of the commune within the coastal hydrological basin limit",
    "value": 2
  },
  {
    "text": "Using the share of the population living within the limit",
    "value": 3
  },
  {
    "text": "Using GIS layer of disaggregated data on individual wastewater treatment plants and collecting systems",
    "value": 4
  },
  {
    "text": "Other",
    "value": 5
  }
]
export default water_collection_method_ii.sort((a,b) => a.text.localeCompare(b.text))
