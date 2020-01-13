const activities = [
  {
    "text": "Agriculture irrigation (e.g. food crops)",
    "value": "Agri"
  },
  {
    "text": "Aquaculture and fish ponds",
    "value": "Aqua"
  },
  {
    "text": "Dual water supply systems for urban non-potable use (toilet flushing, garden use)",
    "value": "Dual"
  },
  {
    "text": "Industrial processes, water for manufacturing and construction industry (cooling and process water)",
    "value": "Indu"
  },
  {
    "text": "Recreation (e.g. recreational water bodies, irrigation of areas for sports, etc.)",
    "value": "Recr"
  },
  {
    "text": "Aquifer recharge (e.g. through injection wells for saline intrusion control)",
    "value": "Rech"
  },
  {
    "text": "Water restoration and recreation of existing or creating new aquatic ecosystems",
    "value": "Rest"
  },
  {
    "text": "Irrigation of public gardens and landscape, firefighting, street washing, dust suppression, etc.",
    "value": "Urba"
  },
  {
    "text": "Other purposes",
    "value": "Other"
  }
]
export default activities.sort((a,b) => a.text.localeCompare(b.text))
