const area_type = [
  {
    "text": "Hot spot",
    "value": "HS"
  },
  {
    "text": "Protected Sea Area",
    "value": "PSA"
  },
  {
    "text": "Long Term Ecological Research Network",
    "value": "LTER"
  },
  {
    "text": "Other",
    "value": "O"
  }
]
export default area_type.sort((a,b) => a.text.localeCompare(b.text))
