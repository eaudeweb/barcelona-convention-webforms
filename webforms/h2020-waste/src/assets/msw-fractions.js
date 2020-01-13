const msw_fractions = [
  {
    "text": "Organic fraction % w/w",
    "value": 1
  },
  {
    "text": "Plastic fraction %",
    "value": 2
  },
  {
    "text": "Paper fraction %",
    "value": 3
  },
  {
    "text": "Metal fraction %",
    "value": 4
  },
  {
    "text": "Rest %",
    "value": 5
  }
]
export default msw_fractions.sort((a,b) => a.text.localeCompare(b.text))
