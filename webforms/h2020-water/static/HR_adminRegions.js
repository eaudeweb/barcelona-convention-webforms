const admin_regions = [
  {
    "text": "Primorsko-Goranska",
    "value": "Primorsko-Goranska"
  },
  {
    "text": "Zadarska",
    "value": "Zadarska"
  },
  {
    "text": "Licko-Senjska",
    "value": "Licko-Senjska"
  },
  {
    "text": "Sibensko-Kninska",
    "value": "Sibensko-Kninska"
  },
  {
    "text": "Istarska",
    "value": "Istarska"
  },
  {
    "text": "Dubrovacko-Neretvanska",
    "value": "Dubrovacko-Neretvanska"
  },
  {
    "text": "Splitsko-Dalmatinska",
    "value": "Splitsko-Dalmatinska"
  }
]
export default admin_regions.sort((a,b) => a.text.localeCompare(b.text))
