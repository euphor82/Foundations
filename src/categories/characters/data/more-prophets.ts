import type { BibleCharacter } from '../types'

export const MORE_PROPHETS: BibleCharacter[] = [
  {
    name: "Joel",
    meaning: "the LORD is God",
    role: "Minor prophet",
    category: "Prophets",
    testament: "ot",
    era: "divided-kingdom",
    books: ["Joel"],
    summary: "Joel used a devastating locust plague as a picture of the coming \"day of the LORD,\" calling the people to rend their hearts and return to God. He looked beyond judgment to a day when the LORD would pour out his Spirit on all flesh, so that sons and daughters would prophesy.",
    verse: { ref: "Joel 2:28-29", text: "And it shall come to pass afterward, that I will pour out my Spirit on all flesh; your sons and your daughters shall prophesy, your old men shall dream dreams, and your young men shall see visions. Even on the male and female servants in those days I will pour out my Spirit." },
    whyMatter: "Peter declared Joel's promise of the outpoured Spirit fulfilled at Pentecost (Acts 2:16-21)."
  },
  {
    name: "Obadiah",
    meaning: "servant of the LORD",
    role: "Minor prophet",
    category: "Prophets",
    testament: "ot",
    era: "divided-kingdom",
    books: ["Obadiah"],
    summary: "In the shortest book of the Old Testament, Obadiah pronounced judgment on Edom, the descendants of Esau, for their pride and for gloating over Jerusalem in the day of her downfall. He announced that Edom would be brought low while the kingdom belonged to the LORD.",
    verse: { ref: "Obadiah 1:15", text: "For the day of the LORD is near upon all the nations. As you have done, it shall be done to you; your deeds shall return on your own head." },
    whyMatter: "His brief oracle shows that God holds nations accountable for how they treat his people."
  },
  {
    name: "Nahum",
    meaning: "comfort",
    role: "Minor prophet",
    category: "Prophets",
    testament: "ot",
    era: "divided-kingdom",
    books: ["Nahum"],
    summary: "A century after Jonah's preaching had spared Nineveh, Nahum foretold the fall of that same Assyrian capital, whose cruelty had again filled the earth. He proclaimed the LORD as slow to anger yet certain to judge, a stronghold for those who take refuge in him.",
    verse: { ref: "Nahum 1:7", text: "The LORD is good, a stronghold in the day of trouble; he knows those who take refuge in him." },
    whyMatter: "His prophecy assured God's people that even the mightiest oppressor would answer to the LORD."
  },
  {
    name: "Habakkuk",
    meaning: "embrace",
    role: "Minor prophet",
    category: "Prophets",
    testament: "ot",
    era: "divided-kingdom",
    books: ["Habakkuk"],
    summary: "Habakkuk boldly wrestled with God, asking how a holy God could tolerate injustice and use the wicked Babylonians to punish Judah. God answered that the righteous shall live by faith, and the prophet closed by resolving to rejoice in the LORD even if every crop and flock failed.",
    verse: { ref: "Habakkuk 2:4", text: "Behold, his soul is puffed up; it is not upright within him, but the righteous shall live by his faith." },
    whyMatter: "His words \"the righteous shall live by his faith\" became a cornerstone of Paul's gospel in Romans and Galatians."
  },
  {
    name: "Zephaniah",
    meaning: "the LORD has hidden",
    role: "Minor prophet",
    category: "Prophets",
    testament: "ot",
    era: "divided-kingdom",
    books: ["Zephaniah"],
    summary: "Zephaniah warned that the great day of the LORD was near, a day of wrath against Judah and the nations for their idolatry and complacency. Yet he promised that a humble remnant would be preserved, and that the LORD would rejoice over his people with singing.",
    verse: { ref: "Zephaniah 3:17", text: "The LORD your God is in your midst, a mighty one who will save; he will rejoice over you with gladness; he will quiet you by his love; he will exult over you with loud singing." },
    whyMatter: "He held together sober judgment and tender grace, promising joy to a rescued remnant."
  },
  {
    name: "Haggai",
    meaning: "festive",
    role: "Minor prophet",
    category: "Prophets",
    testament: "ot",
    era: "return",
    books: ["Haggai", "Ezra"],
    summary: "Haggai prophesied to the exiles who had returned from Babylon, rebuking them for building their own paneled houses while the temple lay in ruins. His stirring words moved Zerubbabel and Joshua the high priest to resume the work, with the promise that God would fill this latter house with glory.",
    verse: { ref: "Haggai 2:9", text: "The latter glory of this house shall be greater than the former, says the LORD of hosts. And in this place I will give peace, declares the LORD of hosts." },
    whyMatter: "His preaching roused the returned exiles to finish rebuilding the temple (Ezra 5-6).",
    relationships: [
      { relation: "Contemporary", name: "Zechariah the prophet" }
    ]
  },
  {
    name: "Zechariah the prophet",
    meaning: "the LORD remembers",
    role: "Minor prophet",
    category: "Prophets",
    testament: "ot",
    era: "return",
    books: ["Zechariah", "Ezra"],
    summary: "A contemporary of Haggai, Zechariah encouraged the returned exiles through a series of vivid night visions of God's plans for Jerusalem. He looked ahead to the coming of a humble King who would ride into Zion on a donkey, and to the shepherd who would be pierced.",
    verse: { ref: "Zechariah 9:9", text: "Rejoice greatly, O daughter of Zion! Shout aloud, O daughter of Jerusalem! Behold, your king is coming to you; righteous and having salvation is he, humble and mounted on a donkey, on a colt, the foal of a donkey." },
    whyMatter: "His prophecy of the humble King was fulfilled when Jesus rode into Jerusalem on Palm Sunday (Matthew 21:4-5).",
    relationships: [
      { relation: "Contemporary", name: "Haggai" }
    ]
  },
  {
    name: "Malachi",
    meaning: "my messenger",
    role: "Minor prophet",
    category: "Prophets",
    testament: "ot",
    era: "return",
    books: ["Malachi"],
    summary: "The last of the Old Testament prophets, Malachi confronted a spiritually weary people who offered blemished sacrifices and doubted God's love. He rebuked their half-hearted worship and broken covenants, and promised that the Lord would send his messenger to prepare the way before him.",
    verse: { ref: "Malachi 3:1", text: "Behold, I send my messenger, and he will prepare the way before me. And the Lord whom you seek will suddenly come to his temple; and the messenger of the covenant in whom you delight, behold, he is coming, says the LORD of hosts." },
    whyMatter: "His promise of a coming messenger pointed forward to John the Baptist, who prepared the way for Christ (Mark 1:2-4)."
  }
]
