const mixing = [
  {
    "text": "Fully mixed",
    "value": "FM"
  },
  {
    "text": "Partially mixed",
    "value": "PM"
  },
  {
    "text": "Vertically stratified",
    "value": "VS"
  }
]
export default mixing.sort((a,b) => a.text.localeCompare(b.text))
