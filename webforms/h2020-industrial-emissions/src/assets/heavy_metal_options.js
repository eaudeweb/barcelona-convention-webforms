const heavy_metal = [
  {
    "text": "Mercury",
    "value": "Hg"
  },
  {
    "text": "Cadmium",
    "value": "Cd"
  },
  {
    "text": "Lead",
    "value": "Pb"
  },
  {
    "text": "Zinc",
    "value": "Zn"
  },
  {
    "text": "Copper",
    "value": "Cu"
  },
  {
    "text": "Chromium",
    "value": "Cr"
  }
]
export default heavy_metal.sort((a,b) => a.text.localeCompare(b.text))
