const waste_collection_method = [
  {
    "text": "Measurement",
    "value": "M"
  },
  {
    "text": "Estimation",
    "value": "E"
  },
  {
    "text": "Inventory",
    "value": "I"
  },
  {
    "text": "Report",
    "value": "R"
  }
]
export default waste_collection_method.sort((a,b) => a.text.localeCompare(b.text))
