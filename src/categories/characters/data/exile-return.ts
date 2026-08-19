import type { BibleCharacter } from '../types'

export const EXILE_RETURN: BibleCharacter[] = [
  {
    name: "Ezekiel",
    meaning: "God strengthens",
    role: "Priest and prophet to the exiles in Babylon",
    category: "Prophets",
    testament: "ot",
    era: "exile",
    books: ["Ezekiel"],
    summary: "A priest carried into Babylon, Ezekiel was called to prophesy through dramatic visions and vivid sign-acts. He announced judgment on Jerusalem and the nations, then comforted the exiles with promises of a new heart, a new spirit, and a restored people. His vision of the valley of dry bones pictures God breathing life into a dead nation.",
    verse: { ref: "Ezekiel 36:26", text: "And I will give you a new heart, and a new spirit I will put within you." },
    whyMatter: "He proclaimed God's holiness and glory in exile and foretold the inward renewal fulfilled in the gospel.",
    relationships: []
  },
  {
    name: "Daniel",
    aka: ["Belteshazzar"],
    meaning: "God is my judge",
    role: "Prophet and statesman in the Babylonian and Persian courts",
    category: "Prophets",
    testament: "ot",
    era: "exile",
    books: ["Daniel"],
    summary: "Taken to Babylon as a youth, Daniel rose to high office while refusing to compromise his faith — interpreting the king's dreams and surviving a night in the lions' den. God gave him sweeping visions of coming kingdoms and of the everlasting kingdom of God.",
    verse: { ref: "Daniel 6:22", text: "My God sent his angel and shut the lions' mouths, and they have not harmed me." },
    whyMatter: "A model of faithful integrity in a pagan world, and a prophet of God's sovereign, unshakable kingdom.",
    relationships: [
      { relation: "Companion", name: "Shadrach" },
      { relation: "Companion", name: "Meshach" },
      { relation: "Companion", name: "Abednego" }
    ]
  },
  {
    name: "Shadrach",
    aka: ["Hananiah"],
    meaning: "The LORD is gracious",
    role: "One of Daniel's three companions in Babylon",
    category: "Other",
    testament: "ot",
    era: "exile",
    books: ["Daniel"],
    summary: "One of the young Judeans taken with Daniel, Shadrach served in the Babylonian administration and kept faith with the God of Israel. With Meshach and Abednego, he refused to bow to Nebuchadnezzar's golden image and was thrown into the fiery furnace. God preserved them unharmed, and a fourth figure walked with them in the flames.",
    verse: { ref: "Daniel 3:17", text: "Our God whom we serve is able to deliver us from the burning fiery furnace." },
    whyMatter: "He shows courageous, uncompromising worship of God even under threat of death.",
    relationships: [
      { relation: "Companion", name: "Daniel" },
      { relation: "Companion", name: "Meshach" },
      { relation: "Companion", name: "Abednego" }
    ]
  },
  {
    name: "Meshach",
    aka: ["Mishael"],
    meaning: "Who is what God is",
    role: "One of Daniel's three companions in Babylon",
    category: "Other",
    testament: "ot",
    era: "exile",
    books: ["Daniel"],
    summary: "A Judean exile appointed over the affairs of Babylon alongside Shadrach and Abednego, Meshach stood firm when commanded to worship the king's image. He declared that God was able to deliver, yet would remain faithful even if God did not. He emerged from the furnace without so much as the smell of smoke.",
    verse: { ref: "Daniel 3:18", text: "But if not, be it known to you, O king, that we will not serve your gods." },
    whyMatter: "His 'but if not' faith trusts God regardless of the outcome.",
    relationships: [
      { relation: "Companion", name: "Daniel" },
      { relation: "Companion", name: "Shadrach" },
      { relation: "Companion", name: "Abednego" }
    ]
  },
  {
    name: "Abednego",
    aka: ["Azariah"],
    meaning: "Servant of Nebo",
    role: "One of Daniel's three companions in Babylon",
    category: "Other",
    testament: "ot",
    era: "exile",
    books: ["Daniel"],
    summary: "Renamed by his captors, Abednego was one of the three friends who would not worship the golden image on the plain of Dura. Bound and cast into a furnace heated seven times hotter than usual, he was rescued by God without harm. Nebuchadnezzar then blessed the God who sent his angel to deliver his servants.",
    verse: { ref: "Daniel 3:25", text: "I see four men unbound, walking in the midst of the fire, and they are not hurt." },
    whyMatter: "His deliverance testifies that God is present with his people in the fire.",
    relationships: [
      { relation: "Companion", name: "Daniel" },
      { relation: "Companion", name: "Shadrach" },
      { relation: "Companion", name: "Meshach" }
    ]
  },
  {
    name: "Nebuchadnezzar",
    meaning: "May Nabu protect the heir",
    role: "King of Babylon who destroyed Jerusalem",
    category: "Rulers & Adversaries",
    testament: "ot",
    era: "exile",
    books: ["Daniel"],
    summary: "The most powerful king of Babylon, Nebuchadnezzar conquered Judah and carried its people into exile. Proud of his own greatness, he was humbled by God into living like a beast until he acknowledged the Most High. Restored to his reason, he praised the King of heaven whose dominion is everlasting.",
    verse: { ref: "Daniel 4:37", text: "Those who walk in pride he is able to humble." },
    whyMatter: "His downfall and confession show that God rules over the mightiest earthly kingdoms.",
    relationships: [
      { relation: "Successor", name: "Belshazzar" }
    ]
  },
  {
    name: "Belshazzar",
    meaning: "Bel protect the king",
    role: "Last ruler of Babylon before its fall",
    category: "Rulers & Adversaries",
    testament: "ot",
    era: "exile",
    books: ["Daniel"],
    summary: "Ruling Babylon at its end, Belshazzar held a great feast and profaned the sacred vessels taken from the temple in Jerusalem. A hand appeared and wrote on the wall, and Daniel interpreted the words as God's verdict against him. That very night the city fell to the Medes and Persians and Belshazzar was killed.",
    verse: { ref: "Daniel 5:27", text: "You have been weighed in the balances and found wanting." },
    whyMatter: "His fall warns that pride and sacrilege stand under the swift judgment of God.",
    relationships: [
      { relation: "Predecessor", name: "Nebuchadnezzar" }
    ]
  },
  {
    name: "Cyrus",
    meaning: "Sun or throne",
    role: "King of Persia who freed the exiles",
    category: "Kings & Royalty",
    testament: "ot",
    era: "return",
    books: ["Ezra"],
    summary: "Cyrus the Great founded the Persian Empire and overthrew Babylon. In the first year of his reign he issued a decree allowing the Jewish exiles to return home and rebuild the temple in Jerusalem. Isaiah had named him generations earlier as the LORD's anointed shepherd who would accomplish God's purpose.",
    verse: { ref: "Ezra 1:2", text: "The LORD, the God of heaven, has charged me to build him a house at Jerusalem." },
    whyMatter: "God used a pagan king to fulfill his promise of restoration, showing his rule over all history.",
    relationships: []
  },
  {
    name: "Ezra",
    meaning: "Help",
    role: "Priest and scribe who taught the Law",
    category: "Priests & Leaders",
    testament: "ot",
    era: "return",
    books: ["Ezra"],
    summary: "A priest and skilled scribe of the Law of Moses, Ezra led a second group of exiles back to Jerusalem. He set his heart to study, do, and teach the Law, and he led the people in repentance and covenant renewal. His reforms restored the community's devotion to God's word.",
    verse: { ref: "Ezra 7:10", text: "Ezra had set his heart to study the Law of the LORD, and to do it and to teach." },
    whyMatter: "He models a life devoted to studying, obeying, and teaching Scripture.",
    relationships: [
      { relation: "Contemporary", name: "Nehemiah" }
    ]
  },
  {
    name: "Nehemiah",
    meaning: "The LORD comforts",
    role: "Governor who rebuilt Jerusalem's walls",
    category: "Priests & Leaders",
    testament: "ot",
    era: "return",
    books: ["Nehemiah"],
    summary: "Cupbearer to the Persian king, Nehemiah was grieved to hear that Jerusalem's walls lay in ruins. Sent as governor, he rallied the people and rebuilt the walls in fifty-two days despite fierce opposition. A man of prayer and action, he also led reforms to restore justice and covenant faithfulness.",
    verse: { ref: "Nehemiah 6:16", text: "This work had been accomplished with the help of our God." },
    whyMatter: "He shows how prayerful, courageous leadership rebuilds and protects God's people.",
    relationships: [
      { relation: "Contemporary", name: "Ezra" }
    ]
  },
  {
    name: "Zerubbabel",
    meaning: "Seed of Babylon",
    role: "Governor who led the first return and rebuilt the temple",
    category: "Priests & Leaders",
    testament: "ot",
    era: "return",
    books: ["Ezra", "Haggai"],
    summary: "A descendant of David, Zerubbabel led the first wave of exiles back from Babylon and laid the foundation of the second temple. When the work stalled under opposition, the prophets Haggai and Zechariah stirred the people to finish it. God promised that the temple would be completed not by might but by his Spirit.",
    verse: { ref: "Zechariah 4:6", text: "Not by might, nor by power, but by my Spirit, says the LORD of hosts." },
    whyMatter: "He kept the Davidic line and God's dwelling among his people, pointing forward to Christ.",
    relationships: []
  },
  {
    name: "Esther",
    meaning: "Star",
    role: "Jewish queen of Persia who saved her people",
    category: "Other",
    testament: "ot",
    woman: true,
    era: "return",
    books: ["Esther"],
    summary: "A young Jewish woman raised by her cousin Mordecai, Esther became queen of Persia. When Haman plotted to destroy the Jews, she risked her life to approach the king uninvited and expose the scheme. Through her courage her people were rescued, an event still celebrated at the feast of Purim.",
    verse: { ref: "Esther 4:14", text: "And who knows whether you have not come to the kingdom for such a time as this?" },
    whyMatter: "Her courage displays God's hidden providence to preserve his people.",
    relationships: [
      { relation: "Cousin and guardian", name: "Mordecai" },
      { relation: "Enemy", name: "Haman" }
    ]
  },
  {
    name: "Mordecai",
    meaning: "Related to Marduk",
    role: "Jewish official at the Persian court",
    category: "Other",
    testament: "ot",
    era: "return",
    books: ["Esther"],
    summary: "A Jew in the Persian capital, Mordecai raised his orphaned cousin Esther as his own daughter. He uncovered a plot against the king and refused to bow to the proud official Haman, drawing Haman's murderous hatred against the Jews. In the end Mordecai was honored and raised to high office, working for the good of his people.",
    verse: { ref: "Esther 10:3", text: "He sought the welfare of his people and spoke peace to all his people." },
    whyMatter: "His faithful integrity and care for his people served God's purpose of deliverance.",
    relationships: [
      { relation: "Cousin and ward", name: "Esther" },
      { relation: "Enemy", name: "Haman" }
    ]
  },
  {
    name: "Haman",
    meaning: "Magnificent",
    role: "Persian official who plotted genocide against the Jews",
    category: "Rulers & Adversaries",
    testament: "ot",
    era: "return",
    books: ["Esther"],
    summary: "Elevated to the highest position under the Persian king, Haman was enraged that Mordecai would not bow to him. He plotted to destroy all the Jews and built a gallows for Mordecai. His scheme was exposed by Esther, and he was hanged on the very gallows he had prepared.",
    verse: { ref: "Esther 7:10", text: "So they hanged Haman on the gallows that he had prepared for Mordecai." },
    whyMatter: "His downfall shows that God overturns the schemes of the proud against his people.",
    relationships: [
      { relation: "Enemy", name: "Mordecai" },
      { relation: "Enemy", name: "Esther" }
    ]
  },
  {
    name: "Job",
    meaning: "Persecuted or hated",
    role: "Righteous man tested through suffering",
    category: "Other",
    testament: "ot",
    era: "patriarchs",
    books: ["Job"],
    summary: "A blameless and upright man of great wealth, Job lost his children, possessions, and health in a series of calamities permitted by God. He wrestled honestly with his suffering as his friends wrongly insisted it was punishment for sin. When God finally answered from the whirlwind, Job humbled himself and was restored.",
    verse: { ref: "Job 19:25", text: "For I know that my Redeemer lives, and at the last he will stand upon the earth." },
    whyMatter: "He shows faith that clings to God amid unexplained suffering and trusts his wisdom.",
    relationships: []
  }
]
