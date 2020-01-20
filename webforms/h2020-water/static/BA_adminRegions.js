const admin_regions = [
  {
    "text": "Costal Area - Neum",
    "value": "Costal Area - Neum"
  },
  {
    "text": "Trebisnjica",
    "value": "Trebisnjica"
  },
  {
    "text": "Cetina",
    "value": "Cetina"
  },
  {
    "text": "Neretva",
    "value": "Neretva"
  }
]
export default admin_regions.sort((a,b) => a.text.localeCompare(b.text))
