const admin_regions = [
  {
    "text": "Champagne-Ardenne",
    "value": "Champagne-Ardenne"
  },
  {
    "text": "Franche-Comte",
    "value": "Franche-Comte"
  },
  {
    "text": "Herault",
    "value": "Herault"
  },
  {
    "text": "Alpes maritimes",
    "value": "Alpes maritimes"
  },
  {
    "text": "Pyrenees orientales",
    "value": "Pyrenees orientales"
  },
  {
    "text": "Aude",
    "value": "Aude"
  },
  {
    "text": "Bourgogne",
    "value": "Bourgogne"
  },
  {
    "text": "Provence-Alpes-Cote d'Azur",
    "value": "Provence-Alpes-Cote d'Azur"
  },
  {
    "text": "Gard",
    "value": "Gard"
  },
  {
    "text": "Corse",
    "value": "Corse"
  },
  {
    "text": "Bouches du Rhone",
    "value": "Bouches du Rhone"
  },
  {
    "text": "Rhone-Alpes",
    "value": "Rhone-Alpes"
  }
]
export default admin_regions.sort((a,b) => a.text.localeCompare(b.text))
