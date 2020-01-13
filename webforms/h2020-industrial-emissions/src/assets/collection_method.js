const collection_method = [
  {
    "text": "Field measurement",
    "value": 100
  },
  {
    "text": "Emission factor",
    "value": 200
  },
  {
    "text": "National inventories",
    "value": 300
  },
  {
    "text": "Compiled official reports",
    "value": 400
  },
  {
    "text": "Compiled official records",
    "value": 500
  }
]
export default collection_method.sort((a,b) => a.text.localeCompare(b.text))
