import type { BibleCharacter } from '../types'

export const APOSTLES: BibleCharacter[] = [
  {
    name: "Peter",
    aka: ["Simon", "Cephas"],
    meaning: "rock",
    role: "Leader among the twelve apostles",
    category: "Apostles",
    testament: "nt",
    era: "life-of-christ",
    books: ["Matthew", "Mark", "Luke", "John", "Acts"],
    summary: "A Galilean fisherman called by Jesus, impulsive Peter confessed him as the Christ, yet denied him three times on the night of his arrest. Restored by the risen Jesus, he became a bold leader of the early Church and preached at Pentecost, where thousands believed.",
    verse: { ref: "Matthew 16:16", text: "You are the Christ, the Son of the living God." },
    whyMatter: "The outspoken leader of the apostles and a picture of failure met by grace and restoration.",
    relationships: [
      { relation: "Brother", name: "Andrew" }
    ]
  },
  {
    name: "Andrew",
    meaning: "manly",
    role: "Apostle and brother of Peter",
    category: "Apostles",
    testament: "nt",
    era: "life-of-christ",
    books: ["Matthew", "Mark", "Luke", "John"],
    summary: "Andrew was a fisherman and a former disciple of John the Baptist who first followed Jesus, then brought his brother Simon Peter to him. Throughout the Gospels he is remembered for bringing people to Jesus, including the boy with the loaves and fish.",
    verse: { ref: "John 1:41", text: "He first found his own brother Simon and said to him, We have found the Messiah." },
    whyMatter: "A quiet model of evangelism who kept introducing others to Jesus.",
    relationships: [
      { relation: "Brother", name: "Peter" }
    ]
  },
  {
    name: "James (son of Zebedee)",
    meaning: "supplanter",
    role: "Apostle in Jesus' inner circle",
    category: "Apostles",
    testament: "nt",
    era: "life-of-christ",
    books: ["Matthew", "Mark", "Luke", "John"],
    summary: "James and his brother John left their nets to follow Jesus and were nicknamed Sons of Thunder for their fiery zeal. Part of the inner circle with Peter and John, he witnessed the Transfiguration and later became the first apostle to be martyred, killed by Herod.",
    verse: { ref: "Mark 1:20", text: "And immediately he called them, and they left their father Zebedee in the boat with the hired servants and followed him." },
    whyMatter: "The first apostle to die for his faith, showing the cost of following Jesus.",
    relationships: [
      { relation: "Brother", name: "John the Apostle" }
    ]
  },
  {
    name: "John the Apostle",
    meaning: "the Lord is gracious",
    role: "Apostle and beloved disciple",
    category: "Apostles",
    testament: "nt",
    era: "early-church",
    books: ["Matthew", "Mark", "Luke", "John", "Acts"],
    summary: "John, the brother of James, was a fisherman in Jesus' inner circle and is known as the disciple whom Jesus loved. At the cross Jesus entrusted his mother to John's care, and he went on to be a pillar of the early Church, remembered for his witness to Christ and his message of love.",
    verse: { ref: "John 13:23", text: "One of his disciples, whom Jesus loved, was reclining at table at Jesus' side." },
    whyMatter: "The beloved disciple whose witness centers on the love of God revealed in Christ.",
    relationships: [
      { relation: "Brother", name: "James (son of Zebedee)" }
    ]
  },
  {
    name: "Philip the Apostle",
    meaning: "lover of horses",
    role: "Apostle from Bethsaida",
    category: "Apostles",
    testament: "nt",
    era: "life-of-christ",
    books: ["Matthew", "Mark", "Luke", "John"],
    summary: "Philip was from Bethsaida, the same town as Peter and Andrew, and was called by Jesus early in his ministry. He brought Nathanael to Jesus, and at the feeding of the five thousand Jesus tested him about how to feed the crowd.",
    verse: { ref: "John 1:43", text: "Jesus found Philip and said to him, Follow me." },
    whyMatter: "A seeker who found the Messiah and invited a skeptical friend to come and see.",
    relationships: [
      { relation: "Friend", name: "Nathanael (Bartholomew)" }
    ]
  },
  {
    name: "Nathanael (Bartholomew)",
    aka: ["Bartholomew"],
    meaning: "God has given",
    role: "Apostle brought to Jesus by Philip",
    category: "Apostles",
    testament: "nt",
    era: "life-of-christ",
    books: ["Matthew", "Mark", "Luke", "John"],
    summary: "Nathanael, widely identified with Bartholomew, was skeptical that anything good could come from Nazareth until Philip urged him to come and see. When Jesus revealed he had seen him under the fig tree, Nathanael confessed him as the Son of God and King of Israel.",
    verse: { ref: "John 1:49", text: "Nathanael answered him, Rabbi, you are the Son of God! You are the King of Israel!" },
    whyMatter: "An honest doubter whose skepticism turned to worship when he met Jesus.",
    relationships: [
      { relation: "Friend", name: "Philip the Apostle" }
    ]
  },
  {
    name: "Thomas",
    aka: ["Didymus"],
    meaning: "twin",
    role: "Apostle who doubted then believed",
    category: "Apostles",
    testament: "nt",
    era: "life-of-christ",
    books: ["Matthew", "Mark", "Luke", "John"],
    summary: "Thomas is remembered for refusing to believe in the resurrection until he could see and touch Jesus' wounds. When the risen Christ appeared to him, his doubt gave way to the great confession, My Lord and my God.",
    verse: { ref: "John 20:28", text: "Thomas answered him, My Lord and my God!" },
    whyMatter: "The doubter whose honest questions led to one of the clearest confessions of Jesus' deity.",
    relationships: []
  },
  {
    name: "Matthew",
    aka: ["Levi"],
    meaning: "gift of the Lord",
    role: "Apostle and former tax collector",
    category: "Apostles",
    testament: "nt",
    era: "life-of-christ",
    books: ["Matthew", "Mark", "Luke", "John"],
    summary: "Matthew, also called Levi, was a tax collector despised by his own people when Jesus called him to follow. He left his tax booth at once and hosted Jesus at a feast with fellow outcasts, and is traditionally credited with writing the first Gospel.",
    verse: { ref: "Matthew 9:9", text: "And he said to him, Follow me. And he rose and followed him." },
    whyMatter: "Proof that Jesus calls even the outcast, and gives them a new story to tell.",
    relationships: []
  },
  {
    name: "James (son of Alphaeus)",
    meaning: "supplanter",
    role: "Apostle among the twelve",
    category: "Apostles",
    testament: "nt",
    era: "life-of-christ",
    books: ["Matthew", "Mark", "Luke"],
    summary: "James the son of Alphaeus is one of the lesser known members of the twelve, sometimes called James the Less to distinguish him from James the son of Zebedee. Though the Gospels record little about him, he was chosen and sent by Jesus as a faithful apostle.",
    verse: { ref: "Luke 6:15", text: "and Matthew, and Thomas, and James the son of Alphaeus, and Simon who was called the Zealot." },
    whyMatter: "A reminder that faithful service matters even when little of it is recorded.",
    relationships: []
  },
  {
    name: "Thaddaeus",
    aka: ["Judas son of James"],
    meaning: "courageous heart",
    role: "Apostle among the twelve",
    category: "Apostles",
    testament: "nt",
    era: "life-of-christ",
    books: ["Matthew", "Mark", "Luke"],
    summary: "Thaddaeus, also called Judas the son of James, was one of the twelve apostles chosen by Jesus. At the Last Supper he asked how Jesus would reveal himself to the disciples and not to the world, prompting Jesus to speak of love and obedience.",
    verse: { ref: "John 14:22", text: "Judas (not Iscariot) said to him, Lord, how is it that you will manifest yourself to us, and not to the world?" },
    whyMatter: "An obscure apostle whose single recorded question drew out Jesus' teaching on love.",
    relationships: []
  },
  {
    name: "Simon the Zealot",
    meaning: "he has heard",
    role: "Apostle among the twelve",
    category: "Apostles",
    testament: "nt",
    era: "life-of-christ",
    books: ["Matthew", "Mark", "Luke"],
    summary: "Simon is called the Zealot, a title suggesting he once belonged to a movement burning with zeal for Israel's freedom from Rome. Jesus called him alongside Matthew the tax collector, uniting men from opposite ends of the political spectrum in one band of followers.",
    verse: { ref: "Luke 6:15", text: "and Matthew, and Thomas, and James the son of Alphaeus, and Simon who was called the Zealot." },
    whyMatter: "A former revolutionary who found a deeper cause in the kingdom of Jesus.",
    relationships: []
  },
  {
    name: "Judas Iscariot",
    meaning: "praise",
    role: "Apostle who betrayed Jesus",
    category: "Apostles",
    testament: "nt",
    era: "life-of-christ",
    books: ["Matthew", "Mark", "Luke", "John"],
    summary: "Judas Iscariot was numbered among the twelve and kept the moneybag, but he betrayed Jesus to the religious leaders for thirty pieces of silver. Overcome with remorse after the betrayal, he threw the money back and took his own life.",
    verse: { ref: "Matthew 26:14", text: "Then one of the twelve, whose name was Judas Iscariot, went to the chief priests." },
    whyMatter: "A sobering warning that nearness to Jesus is not the same as faith in him.",
    relationships: []
  },
  {
    name: "Matthias",
    meaning: "gift of the Lord",
    role: "Apostle chosen to replace Judas",
    category: "Apostles",
    testament: "nt",
    era: "early-church",
    books: ["Acts"],
    summary: "Matthias had followed Jesus from his baptism through the resurrection, and after Judas fell away the apostles cast lots to choose a witness to take his place. Matthias was chosen and numbered with the eleven, completing the twelve.",
    verse: { ref: "Acts 1:26", text: "And they cast lots for them, and the lot fell on Matthias, and he was numbered with the eleven apostles." },
    whyMatter: "A faithful eyewitness raised up to restore the twelve for the mission of the Church.",
    relationships: []
  }
]
