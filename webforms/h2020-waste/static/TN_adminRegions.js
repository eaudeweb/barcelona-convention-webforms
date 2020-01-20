const admin_regions = [
  {
    "text": "Gabes",
    "value": "Gabes"
  },
  {
    "text": "Sfax",
    "value": "Sfax"
  },
  {
    "text": "Bizerte",
    "value": "Bizerte"
  },
  {
    "text": "Mahdia",
    "value": "Mahdia"
  },
  {
    "text": "Sousse",
    "value": "Sousse"
  },
  {
    "text": "Ariana-M",
    "value": "Ariana-M"
  },
  {
    "text": "Nabeul",
    "value": "Nabeul"
  },
  {
    "text": "Ben Arous",
    "value": "Ben Arous"
  },
  {
    "text": "Monastir",
    "value": "Monastir"
  },
  {
    "text": "Medenine",
    "value": "Medenine"
  },
  {
    "text": "Tunis",
    "value": "Tunis"
  }
]
export default admin_regions.sort((a,b) => a.text.localeCompare(b.text))
