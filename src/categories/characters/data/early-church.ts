import type { BibleCharacter } from '../types'

export const EARLY_CHURCH: BibleCharacter[] = [
  {
    name: "Paul",
    aka: ["Saul"],
    meaning: "small / humble",
    role: "Apostle to the Gentiles",
    category: "Apostles",
    testament: "nt",
    era: "early-church",
    books: ["Acts", "Romans"],
    summary: "Once a zealous persecutor of the Church, Saul met the risen Jesus on the road to Damascus and was transformed into the apostle Paul. He planted churches across the Roman world on three missionary journeys and wrote thirteen New Testament letters.",
    verse: { ref: "Philippians 1:21", text: "For to me to live is Christ, and to die is gain." },
    whyMatter: "The Church's greatest missionary and theologian, whose letters shape Christian belief to this day.",
    relationships: [
      { relation: "Companion", name: "Barnabas" },
      { relation: "Companion", name: "Silas" },
      { relation: "Disciple", name: "Timothy" },
      { relation: "Disciple", name: "Titus" }
    ]
  },
  {
    name: "Barnabas",
    meaning: "son of encouragement",
    role: "Encourager and missionary companion of Paul",
    category: "Early Church",
    testament: "nt",
    era: "early-church",
    books: ["Acts"],
    summary: "A generous Levite from Cyprus, Barnabas sold his field for the church and vouched for the newly converted Saul when others feared him. He partnered with Paul on the first missionary journey and later mentored his cousin John Mark after a sharp disagreement over him.",
    verse: { ref: "Acts 11:24", text: "For he was a good man, full of the Holy Spirit and of faith." },
    whyMatter: "A model of encouragement and reconciliation who invested in people others were ready to give up on.",
    relationships: [
      { relation: "Companion", name: "Paul" },
      { relation: "Cousin", name: "John Mark" }
    ]
  },
  {
    name: "Stephen",
    meaning: "crown",
    role: "First Christian martyr and deacon",
    category: "Early Church",
    testament: "nt",
    era: "early-church",
    books: ["Acts"],
    summary: "Chosen as one of the seven to serve the Greek-speaking widows, Stephen was full of grace and power and did great signs among the people. Falsely accused before the Sanhedrin, he preached Israel's history boldly and became the first believer to die for Christ, praying forgiveness for his killers.",
    verse: { ref: "Acts 7:59", text: "Lord Jesus, receive my spirit." },
    whyMatter: "The Church's first martyr, whose Christlike death and forgiveness echoed his Lord and stirred the conscience of Saul.",
    relationships: []
  },
  {
    name: "Philip the Evangelist",
    meaning: "lover of horses",
    role: "Deacon and evangelist to Samaria",
    category: "Early Church",
    testament: "nt",
    era: "early-church",
    books: ["Acts"],
    summary: "One of the seven chosen to serve tables, Philip carried the gospel to Samaria with signs and great joy after the believers were scattered by persecution. Led by the Spirit, he explained Isaiah to an Ethiopian official and baptized him on the desert road.",
    verse: { ref: "Acts 8:35", text: "He told him the good news about Jesus." },
    whyMatter: "A pioneering evangelist who crossed ethnic and cultural lines to bring the gospel to Samaritans and an African seeker.",
    relationships: []
  },
  {
    name: "Silas",
    meaning: "of the woods",
    role: "Prophet and missionary companion of Paul",
    category: "Early Church",
    testament: "nt",
    era: "early-church",
    books: ["Acts"],
    summary: "A leading man among the believers in Jerusalem, Silas carried the letter from the Jerusalem Council to the Gentile churches and then joined Paul's second missionary journey. Imprisoned with Paul at Philippi, he sang hymns at midnight before an earthquake shook the jail open.",
    verse: { ref: "Acts 16:25", text: "About midnight Paul and Silas were praying and singing hymns to God." },
    whyMatter: "A faithful partner in mission whose joy in suffering helped carry the gospel deeper into Europe.",
    relationships: [
      { relation: "Companion", name: "Paul" }
    ]
  },
  {
    name: "Timothy",
    meaning: "honoring God",
    role: "Paul's protege and pastor at Ephesus",
    category: "Early Church",
    testament: "nt",
    era: "early-church",
    books: ["Acts", "1 Timothy", "2 Timothy"],
    summary: "Raised by his faithful mother and grandmother, Timothy joined Paul at Lystra and became his most trusted younger co-worker. Though timid and often unwell, he was entrusted to shepherd the Ephesian church and received two of Paul's most personal letters.",
    verse: { ref: "2 Timothy 1:7", text: "For God gave us a spirit not of fear but of power and love and self-control." },
    whyMatter: "A picture of faithful discipleship passed from one generation to the next in the work of ministry.",
    relationships: [
      { relation: "Mentor", name: "Paul" }
    ]
  },
  {
    name: "Titus",
    meaning: "pleasing",
    role: "Paul's trusted co-worker and troubleshooter",
    category: "Early Church",
    testament: "nt",
    era: "early-church",
    books: ["Titus"],
    summary: "A Gentile convert whom Paul refused to have circumcised, Titus became a proof that the gospel is for all nations. He carried Paul's stern letter to Corinth and was later left in Crete to appoint elders and set the churches in order.",
    verse: { ref: "Titus 2:7", text: "Show yourself in all respects to be a model of good works." },
    whyMatter: "A dependable leader who handled difficult situations with tact and helped establish healthy churches.",
    relationships: [
      { relation: "Mentor", name: "Paul" }
    ]
  },
  {
    name: "Luke",
    meaning: "light-giving",
    role: "Physician and author of Luke and Acts",
    category: "Early Church",
    testament: "nt",
    era: "early-church",
    books: ["Acts"],
    summary: "A physician and careful historian, Luke traveled with Paul and wrote the Gospel that bears his name along with the book of Acts. His two volumes trace the story of Jesus and the spread of the gospel from Jerusalem to Rome with an eye for the poor and the outsider.",
    verse: { ref: "Colossians 4:14", text: "Luke the beloved physician greets you." },
    whyMatter: "The Gentile historian who gave the Church a quarter of the New Testament and its orderly account of Christian beginnings.",
    relationships: [
      { relation: "Companion", name: "Paul" }
    ]
  },
  {
    name: "John Mark",
    aka: ["Mark"],
    meaning: "God is gracious",
    role: "Missionary helper and Gospel writer",
    category: "Early Church",
    testament: "nt",
    era: "early-church",
    books: ["Acts", "Mark"],
    summary: "A young man from Jerusalem, John Mark set out with Paul and Barnabas but turned back early, causing a rift that split the two missionaries. He later proved himself, becoming useful to Paul again and, by tradition, writing the Gospel of Mark from Peter's preaching.",
    verse: { ref: "2 Timothy 4:11", text: "Get Mark and bring him with you, for he is very useful to me for ministry." },
    whyMatter: "Living proof that early failure need not be final, restored to fruitful service and lasting Scripture.",
    relationships: [
      { relation: "Cousin", name: "Barnabas" }
    ]
  },
  {
    name: "Priscilla",
    aka: ["Prisca"],
    meaning: "ancient",
    role: "Tentmaker and teacher in the early Church",
    category: "Early Church",
    testament: "nt",
    era: "early-church",
    woman: true,
    books: ["Acts", "Romans"],
    summary: "A tentmaker like her husband Aquila, Priscilla worked alongside Paul and hosted a church in her home. Together the couple took the eloquent Apollos aside and explained the way of God to him more accurately.",
    verse: { ref: "Romans 16:3", text: "Greet Prisca and Aquila, my fellow workers in Christ Jesus." },
    whyMatter: "A gifted teacher and ministry partner who shows the vital place of women in the early Church.",
    relationships: [
      { relation: "Husband", name: "Aquila" }
    ]
  },
  {
    name: "Aquila",
    meaning: "eagle",
    role: "Tentmaker and co-worker with Paul",
    category: "Early Church",
    testament: "nt",
    era: "early-church",
    books: ["Acts", "Romans"],
    summary: "A Jewish tentmaker expelled from Rome, Aquila met Paul in Corinth and shared both his trade and his mission. With his wife Priscilla he mentored Apollos and risked his life for Paul, hosting churches in the cities where they lived.",
    verse: { ref: "Romans 16:4", text: "Who risked their necks for my life." },
    whyMatter: "A working-class believer whose home and hospitality became a base for gospel ministry across the empire.",
    relationships: [
      { relation: "Wife", name: "Priscilla" }
    ]
  },
  {
    name: "Apollos",
    meaning: "destroyer",
    role: "Eloquent preacher from Alexandria",
    category: "Early Church",
    testament: "nt",
    era: "early-church",
    books: ["Acts"],
    summary: "An eloquent Jew from Alexandria, mighty in the Scriptures, Apollos taught accurately about Jesus though he knew only the baptism of John. After Priscilla and Aquila instructed him more fully, he powerfully refuted opponents and strengthened the believers in Achaia.",
    verse: { ref: "Acts 18:24", text: "He was an eloquent man, competent in the Scriptures." },
    whyMatter: "A gifted teacher who kept learning, showing that eloquence and humility can serve the gospel together.",
    relationships: []
  },
  {
    name: "Lydia",
    meaning: "woman of Lydia",
    role: "Merchant and first European convert",
    category: "Early Church",
    testament: "nt",
    era: "early-church",
    woman: true,
    books: ["Acts"],
    summary: "A dealer in purple cloth from Thyatira, Lydia was worshiping by the river at Philippi when the Lord opened her heart to Paul's message. She and her household were baptized, and her home became the first church in Europe.",
    verse: { ref: "Acts 16:14", text: "The Lord opened her heart to pay attention to what was said by Paul." },
    whyMatter: "The first recorded European convert, whose open heart and open home launched the gospel on a new continent.",
    relationships: []
  },
  {
    name: "Cornelius",
    meaning: "horn",
    role: "Roman centurion and first Gentile convert",
    category: "Early Church",
    testament: "nt",
    era: "early-church",
    books: ["Acts"],
    summary: "A devout Roman centurion who feared God and gave generously, Cornelius was told in a vision to send for Peter. As Peter preached, the Holy Spirit fell on his household, opening the door of faith to the Gentiles.",
    verse: { ref: "Acts 10:34", text: "Truly I understand that God shows no partiality." },
    whyMatter: "The first Gentile convert, whose household proved the gospel is for every nation without becoming Jewish first.",
    relationships: []
  },
  {
    name: "Tabitha",
    aka: ["Dorcas"],
    meaning: "gazelle",
    role: "Disciple known for charity, raised by Peter",
    category: "Early Church",
    testament: "nt",
    era: "early-church",
    woman: true,
    books: ["Acts"],
    summary: "A beloved disciple in Joppa, Tabitha was always doing good and making garments for the widows. When she fell sick and died, the believers sent for Peter, who prayed and raised her to life, and many came to believe in the Lord.",
    verse: { ref: "Acts 9:36", text: "She was full of good works and acts of charity." },
    whyMatter: "A quiet servant whose works of mercy were treasured, and whose raising drew a whole town to Christ.",
    relationships: []
  },
  {
    name: "James (brother of Jesus)",
    meaning: "supplanter",
    role: "Leader of the Jerusalem church",
    category: "Early Church",
    testament: "nt",
    era: "early-church",
    books: ["Acts", "James"],
    summary: "A brother of Jesus who did not believe during His ministry, James was convinced by an appearance of the risen Lord and became the recognized leader of the Jerusalem church. He guided the Jerusalem Council and wrote the practical letter that bears his name.",
    verse: { ref: "James 1:22", text: "Be doers of the word, and not hearers only." },
    whyMatter: "A skeptic turned pillar of the Church, whose letter presses faith to prove itself in everyday obedience.",
    relationships: [
      { relation: "Brother", name: "Jesus" },
      { relation: "Brother", name: "Jude" }
    ]
  },
  {
    name: "Jude",
    aka: ["Judas"],
    meaning: "praise",
    role: "Brother of Jesus and letter writer",
    category: "Early Church",
    testament: "nt",
    era: "early-church",
    books: ["Jude"],
    summary: "A brother of Jesus and of James, Jude wrote a brief, urgent letter warning believers against false teachers who twisted grace into license. He calls the Church to contend for the faith while keeping themselves in the love of God.",
    verse: { ref: "Jude 1:3", text: "Contend for the faith that was once for all delivered to the saints." },
    whyMatter: "A watchman who urges the Church to guard sound doctrine and rest in God's power to keep them.",
    relationships: [
      { relation: "Brother", name: "Jesus" },
      { relation: "Brother", name: "James (brother of Jesus)" }
    ]
  },
  {
    name: "Ananias of Damascus",
    meaning: "the LORD is gracious",
    role: "Disciple who welcomed and baptized Saul",
    category: "Early Church",
    testament: "nt",
    era: "early-church",
    books: ["Acts"],
    summary: "A devout disciple in Damascus, Ananias was sent by the Lord in a vision to the newly blinded Saul, despite knowing his reputation for persecution. He laid hands on Saul, restored his sight, and baptized the man who would become Paul.",
    verse: { ref: "Acts 9:17", text: "Brother Saul, the Lord Jesus has sent me so that you may regain your sight." },
    whyMatter: "An obscure but obedient believer whose courage to embrace an enemy helped launch the greatest missionary career.",
    relationships: [
      { relation: "Baptized", name: "Paul" }
    ]
  }
]
