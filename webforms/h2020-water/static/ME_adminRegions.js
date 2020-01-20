const admin_regions = [
  {
    "text": "Budva",
    "value": "Budva"
  },
  {
    "text": "Ulcinj",
    "value": "Ulcinj"
  },
  {
    "text": "Tivat",
    "value": "Tivat"
  },
  {
    "text": "Kotor",
    "value": "Kotor"
  },
  {
    "text": "Herceg Novi",
    "value": "Herceg Novi"
  },
  {
    "text": "Bar",
    "value": "Bar"
  }
]
export default admin_regions.sort((a,b) => a.text.localeCompare(b.text))
