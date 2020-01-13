const water_collection_method_i = [
  {
    "text": "Calculated",
    "value": "C"
  },
  {
    "text": "Estimated",
    "value": "E"
  },
  {
    "text": "Measured",
    "value": "M"
  }
]
export default water_collection_method_i.sort((a,b) => a.text.localeCompare(b.text))
