const admin_regions = [
  {
    "text": "Nador",
    "value": "Nador"
  },
  {
    "text": "Tanger",
    "value": "Tanger"
  },
  {
    "text": "Tetouan",
    "value": "Tetouan"
  }
]
export default admin_regions.sort((a,b) => a.text.localeCompare(b.text))
