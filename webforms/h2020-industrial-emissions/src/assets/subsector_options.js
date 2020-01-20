const subsectors = [
  {
    value: 1,
    sector: 8,
    text: 'Growing of cereals (wheat, rice, maize, soyabeans, other)'
  },
  {
    value: 2,
    sector: 8,
    text: 'Growing of fruit and vegetables'
  },
  {
    value: 3,
    sector: 8,
    text: 'Horticultural specialities, nurseries'
  },
  {
    value: 4,
    sector: 8,
    text: 'Industrial crops (cotton, tobacco, sugar cane, sugar beet, potatoes, other)'
  },
  {
    value: 5,
    sector: 8,
    text: 'Manufacture of wines'
  },
  {
    value: 6,
    sector: 13,
    text: 'Fish breeding'
  },
  {
    value: 7,
    sector: 13,
    text: 'Fish processing'
  },
  {
    value: 8,
    sector: 21,
    text: 'Drydocks'
  },
  {
    value: 9,
    sector: 21,
    text: 'Shipyards'
  },
  {
    value: 10,
    sector: 32,
    text: 'Seawater desalination plants'
  },
  {
    value: 11,
    sector: 4,
    text: 'Farming of animals (cattle, sheep, swine, poultry) and slaughterhouses'
  },
  {
    value: 12,
    sector: 4,
    text: 'Farming of special animals (rabbits, goats, horses, asses, mules and hinnies, other)'
  },
  {
    value: 13,
    sector: 5,
    text: 'Animal feeds'
  },
  {
    value: 14,
    sector: 5,
    text: 'Animal raw materials,Vegetable raw materials'
  },
  {
    value: 15,
    sector: 5,
    text: 'Dairy industry'
  },
  {
    value: 16,
    sector: 5,
    text: 'Manufacture of beer'
  },
  {
    value: 17,
    sector: 5,
    text: 'Manufacture of non-alcoholic beverages'
  },
  {
    value: 18,
    sector: 5,
    text: 'Manufacture of olive oil'
  },
  {
    value: 19,
    sector: 5,
    text: 'Manufacture of other vegetable oils (other than olive oil)'
  },
  {
    value: 20,
    sector: 5,
    text: 'Manufacture of sugar beet'
  },
  {
    value: 21,
    sector: 5,
    text: 'Manufacture of wines and spirits'
  },
  {
    value: 22,
    sector: 5,
    text: 'Other prepared foods'
  },
  {
    value: 23,
    sector: 5,
    text: 'Preserving fruit and vegetables'
  },
  {
    value: 24,
    sector: 14,
    text: 'Waste dumps'
  },
  {
    value: 25,
    sector: 27,
    text: 'Formulation of pesticides'
  },
  {
    value: 26,
    sector: 27,
    text: 'Synthesis of phytosanitary products'
  },
  {
    value: 27,
    sector: 1,
    text: 'Manufacture of cement'
  },
  {
    value: 28,
    sector: 1,
    text: 'Manufacture of lime and plaster'
  },
  {
    value: 29,
    sector: 30,
    text: 'Manufacture of electric machines and appliances (condensers, transformers)'
  },
  {
    value: 30,
    sector: 30,
    text: 'Manufacture of integrated circuits'
  },
  {
    value: 31,
    sector: 30,
    text: 'Manufacture of radio, television and communications equipment'
  },
  {
    value: 32,
    sector: 17,
    text: 'Nitrogenous fertilizers'
  },
  {
    value: 33,
    sector: 17,
    text: 'Phosphate fertilizers and phosphoric acid'
  },
  {
    value: 34,
    sector: 9,
    text: 'Casting of grey iron'
  },
  {
    value: 35,
    sector: 9,
    text: 'Casting of other non-ferrous metals'
  },
  {
    value: 36,
    sector: 9,
    text: 'Casting of steel'
  },
  {
    value: 37,
    sector: 9,
    text: 'Electroplating'
  },
  {
    value: 38,
    sector: 9,
    text: 'First-stage aluminium smelting'
  },
  {
    value: 39,
    sector: 9,
    text: 'First-stage copper smelting'
  },
  {
    value: 40,
    sector: 9,
    text: 'Manufacture of accumulators'
  },
  {
    value: 41,
    sector: 9,
    text: 'Manufacture of basic iron and steel'
  },
  {
    value: 42,
    sector: 9,
    text: 'Manufacture of lead oxides and lead-based colouring matter'
  },
  {
    value: 43,
    sector: 9,
    text: 'Manufacture of other non-ferrous metals'
  },
  {
    value: 44,
    sector: 9,
    text: 'Manufacture of zinc or tin'
  },
  {
    value: 45,
    sector: 9,
    text: 'Second-stage aluminium smelting'
  },
  {
    value: 46,
    sector: 9,
    text: 'Second-stage copper smelting'
  },
  {
    value: 47,
    sector: 9,
    text: 'Second-stage lead smelting'
  },
  {
    value: 48,
    sector: 18,
    text: 'Industrial gases'
  },
  {
    value: 49,
    sector: 18,
    text: 'Manufacture of ceramic products'
  },
  {
    value: 50,
    sector: 18,
    text: 'Manufacture of glass and glass products'
  },
  {
    value: 51,
    sector: 18,
    text: 'Other (activated carbon, composed of Al, Ba, Ca, Ni, â€¦)'
  },
  {
    value: 52,
    sector: 18,
    text: 'Synthesis of pigments'
  },
  {
    value: 53,
    sector: 7,
    text: 'Manufacture of explosives, glues, gelatine, essential oils'
  },
  {
    value: 54,
    sector: 7,
    text: 'Other chemicals'
  },
  {
    value: 55,
    sector: 7,
    text: 'Paints and varnishes'
  },
  {
    value: 56,
    sector: 7,
    text: 'Plastics, rubber, synthetic resins'
  },
  {
    value: 57,
    sector: 7,
    text: 'Polyethylene tetraphtalate'
  },
  {
    value: 58,
    sector: 7,
    text: 'Polyvinyl chloride'
  },
  {
    value: 59,
    sector: 7,
    text: 'Synthesis of pigments'
  },
  {
    value: 60,
    sector: 16,
    text: 'Manufacture of articles of paper or paperboard'
  },
  {
    value: 61,
    sector: 16,
    text: 'Manufacture of paper and pulp'
  },
  {
    value: 62,
    sector: 16,
    text: 'Printing activities'
  },
  {
    value: 63,
    sector: 15,
    text: 'Cosmetics and perfumes'
  },
  {
    value: 64,
    sector: 15,
    text: 'Pharmaceuticals'
  },
  {
    value: 65,
    sector: 15,
    text: 'Soaps, detergents and sanitary preparations'
  },
  {
    value: 66,
    sector: 10,
    text: 'Manufacture of petrochemicals'
  },
  {
    value: 67,
    sector: 10,
    text: 'Manufacture of refined petroleum products'
  },
  {
    value: 68,
    sector: 10,
    text: 'Transport and marketing of petroleum products'
  },
  {
    value: 69,
    sector: 19,
    text: 'Manufacture and dyeing of textiles'
  },
  {
    value: 70,
    sector: 19,
    text: 'Manufacture of clothing and other finished products made of fabric'
  },
  {
    value: 71,
    sector: 28,
    text: 'Extraction of petroleum and gas'
  },
  {
    value: 72,
    sector: 28,
    text: 'Metal mining'
  },
  {
    value: 73,
    sector: 23,
    text: 'Installations for melting mineral substances'
  },
  {
    value: 74,
    sector: 23,
    text: 'Manufacture of Wood'
  },
  {
    value: 75,
    sector: 23,
    text: 'Other'
  },
  {
    value: 76,
    sector: 6,
    text: 'Gasoline Loading'
  },
  {
    value: 77,
    sector: 6,
    text: 'Port handling (cargo)'
  },
  {
    value: 78,
    sector: 11,
    text: 'Combustion of heating oil'
  },
  {
    value: 79,
    sector: 11,
    text: 'Combustion of lignite'
  },
  {
    value: 80,
    sector: 11,
    text: 'Gaz production'
  },
  {
    value: 81,
    sector: 29,
    text: 'Recycling of lubrifying oils'
  },
  {
    value: 82,
    sector: 29,
    text: 'Recycling of metal waste and scrap'
  },
  {
    value: 83,
    sector: 29,
    text: 'Recycling of non-metal waste and scrap (paper, glass)'
  },
  {
    value: 84,
    sector: 12,
    text: 'Tanning and dressing of leather'
  },
  {
    value: 85,
    sector: 20,
    text: 'Hotel, food and beverage services'
  },
  {
    value: 86,
    sector: 20,
    text: 'Recreational activities'
  },
  {
    value: 87,
    sector: 3,
    text: 'Manufacture of aircraft and spacecraft'
  },
  {
    value: 88,
    sector: 3,
    text: 'Manufacture of motor vehicles'
  },
  {
    value: 89,
    sector: 3,
    text: 'Manufacture of other transport equipment'
  },
  {
    value: 90,
    sector: 3,
    text: 'Rail transport'
  },
  {
    value: 91,
    sector: 3,
    text: 'Urban road transport (automobiles and buses)'
  },
  {
    value: 92,
    sector: 3,
    text: 'Water transport (freight, passengers)'
  },
  {
    value: 93,
    sector: 24,
    text: 'Technical centres for landfill and storage'
  },
  {
    value: 94,
    sector: 31,
    text: 'Compost production'
  },
  {
    value: 95,
    sector: 2,
    text: 'Industrial wastewater treatment plant'
  },
  {
    value: 96,
    sector: 2,
    text: 'Treatment plants'
  },
  {
    value: 97,
    sector: 25,
    text: 'Urban waste incineration plants'
  },
  {
    value: 98,
    sector: 26,
    text: 'Refuse collection, depollution and similar activities'
  },
  {
    value: 99,
    sector: 7,
    text: 'Lead Alkyl'
  }
]

export default subsectors
