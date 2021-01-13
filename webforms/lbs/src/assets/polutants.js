var polutants = [{
    text: "Please select a pollutant",
    value: null
  },
  {
    text: "NH3",
    value: 1
  },
  {
    text: "Arsenic (gas)",
    value: 2
  },
  {
    text: "Cadmium (gas)",
    value: 3
  },
  {
    text: "Chromium (gas)",
    value: 4
  },
  {
    text: "Copper (gas)",
    value: 5
  },
  {
    text: "Mercury (gas)",
    value: 6
  },
  {
    text: "Nickel (gas)",
    value: 7
  },
  {
    text: "Lead (gas)",
    value: 8
  },
  {
    text: "Vinyl chloride",
    value: 9
  },
  {
    text: "Chlorobenzene",
    value: 10
  },
  {
    text: "PCDD / PCDF (gas) mg /y",
    value: 11
  },
  {
    text: "Carbon tetrachloride",
    value: 12
  },
  {
    text: "PAH (gas)",
    value: 13
  },
  {
    text: "PAH - 10 different types",
    value: 14
  },
  {
    text: "PAH - 15 different types",
    value: 15
  },
  {
    text: "Benzo(a)anthracene",
    value: 16
  },
  {
    text: "Benzo(b)fluoranthene",
    value: 17
  },
  {
    text: "Benzo(b,k)fluoranthene",
    value: 18
  },
  {
    text: "Benzo(b,j,k)fluoranthene",
    value: 19
  },
  {
    text: "Fluoranthene",
    value: 20
  },
  {
    text: "Phenanthrene",
    value: 21
  },
  {
    text: "Indeno(1,2,3-CD)pyrene",
    value: 22
  },
  {
    text: "Naphtalene",
    value: 23
  },
  {
    text: "Total PCDD",
    value: 24
  },
  {
    text: "Benzo(a)pyrene",
    value: 25
  },
  {
    text: "Benzo(g,h,i)perylene",
    value: 26
  },
  {
    text: "Total PCDF",
    value: 27
  },
  {
    text: "BOD5",
    value: 28
  },
  {
    text: "TSS",
    value: 29
  },
  {
    text: "Total nitrogen",
    value: 30
  },
  {
    text: "Total phosphorus",
    value: 31
  },
  {
    text: "Hydrocarbons (minerals)",
    value: 32
  },
  {
    text: "Oils and greases (organic)",
    value: 33
  },
  {
    text: "PCDD / PCDF (liq) mg /y",
    value: 34
  },
  {
    text: "Carbon tetrachloride",
    value: 12
  },
  {
    text: "Organohalogen compounts (AOX)",
    value: 36
  },
  {
    text: "Tributyl tin oxide ",
    value: 37
  },
  {
    text: "Tributyl tin fluoride ",
    value: 38
  },
  {
    text: "Tetramethyl lead",
    value: 39
  },
  {
    text: "Tetraethyl lead",
    value: 40
  },
  {
    text: "DDT",
    value: 41
  },
  {
    text: "Aldrine",
    value: 42
  },
  {
    text: "Dieldrine",
    value: 43
  },
  {
    text: "Chlordane",
    value: 44
  },
  {
    text: "Heptachlore",
    value: 45
  },
  {
    text: "Mirex",
    value: 46
  },
  {
    text: "Toxaphene",
    value: 47
  },
  {
    text: "Hexachlorobenzene",
    value: 48
  },
  {
    text: "Chlorinated paraffins",
    value: 49
  },
  {
    text: "Hexachlorocyclohexane",
    value: 50
  },
  {
    text: "Chlorophenoxy acid (2,4 D)",
    value: 51
  },
  {
    text: "Chlorophenoxy acid (2,4,5 T)",
    value: 52
  },
  {
    text: "Chloroform",
    value: 53
  },
  {
    text: "Toluene",
    value: 54
  },
  {
    text: "Phenols",
    value: 55
  },
  {
    text: "HAP (liq)",
    value: 56
  },
  {
    text: "Tributyl tin",
    value: 57
  },
  {
    text: "PCB / PCT",
    value: 58
  },
  {
    text: "Arsenic (liq)",
    value: 59
  },
  {
    text: "Chromium (liq)",
    value: 60
  },
  {
    text: "Cadmium (liq)",
    value: 61
  },
  {
    text: "Cyanide (liq)",
    value: 62
  },
  {
    text: "Copper (liq)",
    value: 63
  },
  {
    text: "Fluoride (liq)",
    value: 64
  },
  {
    text: "Mercury (liq)",
    value: 65
  },
  {
    text: "Nickel (liq)",
    value: 66
  },
  {
    text: "Lead (liq)",
    value: 67
  },
  {
    text: "Zinc (liq)",
    value: 68
  },
  {
    text: "Hydroxyde de triphenyl etain",
    value: 69
  },
  {
    text: "Obsolete Chemicals",
    value: 70
  },
  {
    text: "Old lubricating oils",
    value: 71
  },
  {
    text: "Battery",
    value: 72
  },
  {
    text: "Perchloroethyle",
    value: 73
  },
  {
    text: "Petroleum Hydrocarbons",
    value: 74
  },
  {
    text: "COD",
    value: 75
  },
  {
    text: "Benzene",
    value: 76
  },
  {
    text: "Biphenyls",
    value: 77
  },
  {
    text: "Boron",
    value: 78
  },
  {
    text: "BTEX",
    value: 79
  },
  {
    text: "Butyltin compounds",
    value: 80
  },
  {
    text: "Carbon dioxyde",
    value: 81
  },
  {
    text: "Carbon monoxyde",
    value: 82
  },
  {
    text: "Chlorinated Compound (gas)",
    value: 83
  },
  {
    text: "Chlorinated Compound (liq)",
    value: 84
  },
  {
    text: "Dichloroethane-1,2",
    value: 85
  },
  {
    text: "Fluoride (gas)",
    value: 86
  },
  {
    text: "HAP (gas)",
    value: 87
  },
  {
    text: "Methane",
    value: 88
  },
  {
    text: "Organomercury compounds",
    value: 89
  },
  {
    text: "PAH (liq)",
    value: 90
  },
  {
    text: "Pb, As, Cr, Hg",
    value: 91
  },
  {
    text: "Phosphates",
    value: 92
  },
  {
    text: "Selenium",
    value: 93
  },
  {
    text: "Suspended Solid",
    value: 94
  },
  {
    text: "Sulfur oxyde",
    value: 95
  },
  {
    text: "Tin",
    value: 96
  },
  {
    text: "TOC",
    value: 97
  },
  {
    text: "Total Organic Matter",
    value: 98
  },
  {
    text: "Total Suspended Particulates",
    value: 99
  },
  {
    text: "Trichloroethylene",
    value: 100
  },
  {
    text: "Triphenyl tin hydroxyde",
    value: 101
  },
  {
    text: "Zinc (gas)",
    value: 102
  },
  {
    text: "Nitrogen oxyde",
    value: 103
  },
  {
    text: "Dichloromethane",
    value: 104
  },
  {
    text: "Chlorine",
    value: 105
  },
  {
    text: "Chlorides",
    value: 106
  },
  {
    text: "Dinitrogenoxide",
    value: 107
  },
  {
    text: "Hydrofluorocarbons",
    value: 108
  },
  {
    text: "Cyanide (gas)",
    value: 109
  },
  {
    text: "Hexachlorobutadience",
    value: 110
  },
  {
    text: "Iron,Fe",
    value: 111
  }
]

export default polutants.sort((a,b) => a.text.localeCompare(b.text))
