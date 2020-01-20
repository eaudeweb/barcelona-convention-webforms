const admin_regions = [
  {
    "text": "Tartous",
    "value": "Tartous"
  },
  {
    "text": "Lattakia",
    "value": "Lattakia"
  }
]
export default admin_regions.sort((a,b) => a.text.localeCompare(b.text))
