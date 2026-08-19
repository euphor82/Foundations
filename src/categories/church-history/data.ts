import type { HistoryPeriod } from './types'

export const HISTORY_INTRO = "The story of the Church stretches from Pentecost to the present, as the good news of Jesus spread across the world through faithful witnesses in every generation. These ten periods trace how believers preserved the gospel, wrestled with truth, and carried the faith to the ends of the earth."

export const PERIODS: HistoryPeriod[] = [
  {
    id: "apostolic",
    name: "The Apostolic Church",
    when: "c. AD 30–100",
    summary: "From Pentecost to the death of the last apostle, the gospel spread from Jerusalem across the Roman world and the writings of the New Testament took shape.",
    events: [
      { title: "Pentecost", when: "c. AD 30", summary: "The Holy Spirit is poured out in Jerusalem and the Church is born as thousands believe and are baptized.", people: ["Peter"] },
      { title: "The gospel to the Gentiles", when: "c. AD 40–50", summary: "The message spreads beyond the Jews, and the Jerusalem Council affirms that Gentiles are saved by grace apart from the law.", people: ["Peter", "James", "Paul"] },
      { title: "Paul's missionary journeys", when: "c. AD 46–60", summary: "Paul plants churches across the empire and writes letters that shape Christian faith and practice for all time.", people: ["Paul", "Barnabas"] },
      { title: "Close of the New Testament", when: "c. AD 60–100", summary: "The Gospels and apostolic letters are written and gathered, and John, the last living apostle, completes his writings.", people: ["John"] }
    ]
  },
  {
    id: "persecution",
    name: "Persecution & the Early Church",
    when: "c. 100–313",
    summary: "Under a hostile empire, Christians endured waves of persecution while apologists defended the faith and the testimony of the martyrs drew many to Christ.",
    events: [
      { title: "The age of the martyrs", when: "c. 100–250", summary: "Believers like Polycarp and Perpetua face death rather than deny Christ, and their courage becomes a powerful witness.", people: ["Polycarp", "Perpetua"] },
      { title: "The apologists", when: "c. 150–220", summary: "Writers defend the faith to a skeptical world, arguing that Christianity is both true and good for society.", people: ["Justin Martyr", "Tertullian"] },
      { title: "Constantine's conversion", when: "312", summary: "The emperor credits his victory at the Milvian Bridge to the God of the Christians and embraces the faith.", people: ["Constantine"] },
      { title: "The Edict of Milan", when: "313", summary: "Constantine and Licinius grant toleration to Christians, ending official persecution across the empire.", people: ["Constantine"] }
    ]
  },
  {
    id: "councils",
    name: "The Age of the Councils",
    when: "313–500",
    summary: "With freedom to gather, the Church defined the core of its faith through great councils and creeds, guided by teachers who clarified who Christ is.",
    events: [
      { title: "Council of Nicaea", when: "325", summary: "Bishops affirm that the Son is fully God, one in being with the Father, producing the Nicene Creed still confessed today.", people: ["Athanasius"] },
      { title: "Jerome's Vulgate", when: "c. 382–405", summary: "Jerome translates the Scriptures into Latin, giving the Western Church its Bible for the next thousand years.", people: ["Jerome"] },
      { title: "Augustine of Hippo", when: "c. 386–430", summary: "A converted teacher writes 'Confessions' and 'The City of God', shaping Christian thought on grace, sin, and God.", people: ["Augustine"] },
      { title: "Council of Chalcedon", when: "451", summary: "The Church confesses that Christ is one person in two natures, fully God and fully man, a landmark of orthodox faith." }
    ]
  },
  {
    id: "early-medieval",
    name: "The Early Middle Ages",
    when: "500–1000",
    summary: "As Roman order collapsed in the West, monks and missionaries preserved learning and carried the gospel to the peoples of Europe.",
    events: [
      { title: "The fall of Rome", when: "476", summary: "The Western Roman Empire crumbles, and the Church becomes a steadying force amid political chaos." },
      { title: "Benedict and monasticism", when: "c. 529", summary: "Benedict writes his Rule, and monasteries become centers of prayer, work, and the preservation of knowledge.", people: ["Benedict of Nursia"] },
      { title: "Gregory the Great", when: "590–604", summary: "A humble and reforming pope strengthens the Church, aids the poor, and sends missionaries to England.", people: ["Gregory the Great"] },
      { title: "Charlemagne crowned", when: "800", summary: "The Frankish king is crowned emperor, uniting much of Europe and sponsoring a revival of learning and worship.", people: ["Charlemagne"] }
    ]
  },
  {
    id: "high-medieval",
    name: "The High Middle Ages & Great Schism",
    when: "1000–1300",
    summary: "The Church reached the height of its influence in Europe even as East and West divided, while new schools of thought sought to unite faith and reason.",
    events: [
      { title: "The East–West Schism", when: "1054", summary: "Longstanding differences over authority and doctrine lead the Eastern and Western churches to formally divide." },
      { title: "The Crusades", when: "1095–1291", summary: "A series of military campaigns aimed to recover the Holy Land, a complex chapter with lasting consequences." },
      { title: "Anselm's reasoned faith", when: "c. 1078–1109", summary: "Anselm seeks 'faith seeking understanding', offering enduring arguments for God and the meaning of the cross.", people: ["Anselm of Canterbury"] },
      { title: "Aquinas and the universities", when: "c. 1225–1274", summary: "Thomas Aquinas synthesizes faith and reason as new universities become the great centers of learning.", people: ["Thomas Aquinas"] }
    ]
  },
  {
    id: "late-medieval",
    name: "Late Medieval & Forerunners",
    when: "1300–1500",
    summary: "Amid crises in leadership, reformers called the Church back to Scripture, while new technology prepared the way for a coming renewal.",
    events: [
      { title: "The papal crises", when: "1309–1417", summary: "The papacy relocates to Avignon and later splits among rival claimants, weakening confidence in Church authority." },
      { title: "Wycliffe and the English Bible", when: "c. 1380", summary: "John Wycliffe insists on the authority of Scripture and inspires its translation into English.", people: ["John Wycliffe"] },
      { title: "Jan Hus", when: "c. 1415", summary: "The Bohemian reformer calls for renewal and is martyred, sowing seeds that later reformers would reap.", people: ["Jan Hus"] },
      { title: "The printing press", when: "c. 1440", summary: "Gutenberg's press makes books, and soon the Bible, widely available, transforming the spread of ideas.", people: ["Johannes Gutenberg"] }
    ]
  },
  {
    id: "reformation",
    name: "The Reformation",
    when: "1500–1600",
    summary: "A movement to reform the Church around Scripture and grace reshaped Western Christianity, while the Catholic Church renewed itself in response.",
    events: [
      { title: "Luther's 95 Theses", when: "1517", summary: "Martin Luther challenges the sale of indulgences, sparking a movement centered on salvation by grace through faith.", people: ["Martin Luther"] },
      { title: "Zwingli in Zurich", when: "c. 1519", summary: "Huldrych Zwingli leads reform in Switzerland, preaching directly from Scripture.", people: ["Huldrych Zwingli"] },
      { title: "Calvin's Geneva", when: "c. 1536", summary: "John Calvin systematizes Reformation theology and shapes a city around the Word of God.", people: ["John Calvin"] },
      { title: "The Council of Trent", when: "1545–1563", summary: "The Catholic Church clarifies its doctrine and reforms abuses in response to the Protestant movement." }
    ]
  },
  {
    id: "post-reformation",
    name: "Post-Reformation & Awakening",
    when: "1600–1750",
    summary: "Protestant faith deepened through careful teaching, heartfelt devotion, and revival, giving the English-speaking world a beloved Bible and a fresh spiritual hunger.",
    events: [
      { title: "The King James Bible", when: "1611", summary: "A new English translation is completed that shapes worship and language for centuries.", people: ["James I"] },
      { title: "The Puritans", when: "c. 1620–1690", summary: "Believers seek to purify worship and live wholly for God, leaving a rich legacy of devotion and writing.", people: ["John Bunyan", "John Owen"] },
      { title: "The rise of Pietism", when: "c. 1675", summary: "A renewal movement stresses personal faith, holy living, and warmhearted devotion over dry formalism.", people: ["Philipp Spener"] },
      { title: "The First Great Awakening", when: "c. 1730–1745", summary: "Powerful preaching brings widespread revival across Britain and the American colonies.", people: ["Jonathan Edwards", "George Whitefield"] }
    ]
  },
  {
    id: "modern-missions",
    name: "The Modern Missionary Era",
    when: "1750–1900",
    summary: "Awakened faith overflowed into missions and social reform, as believers carried the gospel worldwide and worked to end great injustices.",
    events: [
      { title: "Wesley and Methodism", when: "c. 1739", summary: "John Wesley's tireless preaching sparks a movement of renewal and disciplined discipleship.", people: ["John Wesley", "Charles Wesley"] },
      { title: "William Carey and world missions", when: "1793", summary: "Carey sails for India and helps launch the modern missionary movement, expecting great things from God.", people: ["William Carey"] },
      { title: "Abolition of the slave trade", when: "1807", summary: "Christian conviction drives the long campaign to end the slave trade in the British Empire.", people: ["William Wilberforce"] },
      { title: "The Second Great Awakening", when: "c. 1790–1840", summary: "Revival spreads across America, fueling missions, reform, and the founding of many churches and colleges.", people: ["Charles Finney"] }
    ]
  },
  {
    id: "global",
    name: "Global Christianity",
    when: "1900–today",
    summary: "Across a century of upheaval and renewal, the Christian faith grew into a truly worldwide movement, with its center of gravity shifting toward the Global South.",
    events: [
      { title: "The Azusa Street Revival", when: "1906", summary: "A revival in Los Angeles ignites the worldwide Pentecostal movement, emphasizing the Holy Spirit's power.", people: ["William Seymour"] },
      { title: "Faith through the World Wars", when: "1914–1945", summary: "Global conflict tests the Church, prompting deep reflection, courageous witness, and renewed theology.", people: ["Dietrich Bonhoeffer"] },
      { title: "Billy Graham's crusades", when: "c. 1949–2005", summary: "Mass evangelism reaches millions across the globe with a simple call to follow Christ.", people: ["Billy Graham"] },
      { title: "The Global South rising", when: "c. 1970–today", summary: "The heart of world Christianity moves to Africa, Asia, and Latin America, where the Church grows rapidly." }
    ]
  }
]
