import type { Book } from '../types'

export const GOSPELS_ACTS: Book[] = [
  {
    name: "Matthew",
    genre: "Gospel",
    era: "life-of-christ",
    author: "The apostle Matthew",
    summary: "Written to show that Jesus is the promised Messiah, the son of David and son of Abraham, the fulfillment of Israel's Scriptures. Matthew repeatedly notes that events happen 'to fulfill what was spoken by the prophet,' tying Jesus to the Old Testament hope. The Gospel gathers Jesus' teaching into five great blocks, most famously the Sermon on the Mount, presenting him as the authoritative teacher of the kingdom of heaven. It traces his birth, ministry, growing conflict with the religious leaders, and his death and resurrection. It closes with the risen Jesus commissioning his disciples to make disciples of all nations.",
    verse: { ref: "Matthew 28:19-20", text: "Go therefore and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, teaching them to observe all that I have commanded you. And behold, I am with you always, to the end of the age." },
    point: "Jesus is the long-awaited King and Messiah who fulfills the Scriptures and inaugurates the kingdom of heaven. He gathers a new people and sends them to disciple the nations under his abiding authority.",
    christ: "Jesus is the son of David and Immanuel, 'God with us,' the King whose reign fulfills every promise made to Israel.",
    chars: [
      { n: "Jesus", d: "the Messiah and King, teacher of the kingdom, who dies and rises to save his people from their sins" },
      { n: "Joseph", d: "the righteous man who obeys the angel and shelters Mary and the child" },
      { n: "John the Baptist", d: "the forerunner who prepares the way and baptizes Jesus" },
      { n: "Peter", d: "the leading disciple who confesses Jesus as the Christ, then denies him and is restored" },
      { n: "The Pharisees", d: "religious leaders whose opposition to Jesus grows throughout the Gospel" }
    ]
  },
  {
    name: "Mark",
    genre: "Gospel",
    era: "life-of-christ",
    author: "John Mark, an associate of Peter",
    summary: "The shortest and most fast-paced Gospel, likely drawing on Peter's eyewitness preaching. Mark moves quickly — his favorite word is 'immediately' — presenting Jesus as the powerful Son of God on the move. The first half is filled with mighty works: healings, exorcisms, and stilling the storm, as people ask who this man really is. At the center Peter confesses Jesus as the Christ, and Jesus begins to teach that the Son of Man must suffer, die, and rise. The book drives toward the cross, revealing a Messiah who reigns by serving and giving his life as a ransom.",
    verse: { ref: "Mark 10:45", text: "For even the Son of Man came not to be served but to serve, and to give his life as a ransom for many." },
    point: "Jesus is the mighty Son of God whose true glory is revealed at the cross, where he serves and ransoms his people. Following him means taking up the cross in the same path of self-giving service.",
    christ: "Jesus is the Son of God and suffering Son of Man, the King who conquers not by force but by laying down his life as a ransom.",
    chars: [
      { n: "Jesus", d: "the Son of God and servant King who suffers, dies, and rises for many" },
      { n: "Peter", d: "the disciple whose confession and failures shape the story; likely Mark's source" },
      { n: "The Twelve", d: "the disciples who follow yet struggle to understand the way of the cross" },
      { n: "Bartimaeus", d: "the blind beggar who sees, calls Jesus 'Son of David,' and follows on the way" },
      { n: "The centurion", d: "the Roman who, at the cross, declares, 'Truly this man was the Son of God!'" }
    ]
  },
  {
    name: "Luke",
    genre: "Gospel",
    era: "life-of-christ",
    author: "Luke, the physician and companion of Paul",
    summary: "A careful, orderly account written so that Theophilus and every reader may have certainty concerning the things they have been taught. Luke, a physician and companion of Paul, gives special attention to the poor, women, outsiders, and sinners whom Jesus welcomes. His Gospel overflows with prayer, joy, and the work of the Holy Spirit, and it holds many beloved parables such as the good Samaritan and the prodigal son. Jesus is shown as the Savior who seeks and saves the lost and who journeys resolutely to Jerusalem to suffer. It ends with his death, resurrection, and ascension, opening the disciples' minds to understand the Scriptures.",
    verse: { ref: "Luke 19:10", text: "For the Son of Man came to seek and to save the lost." },
    point: "Jesus is the Savior of the world who seeks out the lost, the poor, and the outsider, bringing good news of God's mercy. He fulfills the Scriptures and secures salvation through his death and resurrection.",
    christ: "Jesus is the Spirit-anointed Savior and friend of sinners, who came to seek and to save the lost and to bring salvation to all peoples.",
    chars: [
      { n: "Jesus", d: "the Savior who seeks the lost, welcomes sinners, and journeys to Jerusalem to die and rise" },
      { n: "Mary", d: "the young woman who believes the angel's word and magnifies the Lord" },
      { n: "Zacchaeus", d: "the tax collector who welcomes Jesus and finds salvation come to his house" },
      { n: "The prodigal son", d: "in Jesus' parable, the lost son welcomed home by a running, forgiving father" },
      { n: "Theophilus", d: "the reader to whom Luke writes so he may have certainty about these things" }
    ]
  },
  {
    name: "John",
    genre: "Gospel",
    era: "life-of-christ",
    author: "The apostle John",
    summary: "Written so that readers may believe that Jesus is the Christ, the Son of God. John opens not in a manger but in eternity: the Word who was with God and was God became flesh. Rather than many short episodes, John lingers on seven signs (water to wine, healings, feeding the five thousand, raising Lazarus) and seven 'I am' sayings that reveal Jesus' identity. Long, intimate discourses — the new birth, the bread of life, the good shepherd, the vine, the promise of the Spirit — draw the reader toward faith. The account climaxes in Jesus' arrest, crucifixion, and resurrection, and his commission of the disciples.",
    verse: { ref: "John 3:16", text: "For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life." },
    point: "Jesus is the eternal Son of God who reveals the Father and gives eternal life to all who believe in him. John selects his material deliberately to bring the reader to that faith.",
    christ: "The whole book is about Christ: the Word made flesh, the Lamb of God, the light of the world, the resurrection and the life — God himself made known.",
    chars: [
      { n: "Jesus", d: "the Word made flesh; the 'I am' who reveals the Father and lays down his life for the sheep" },
      { n: "John the Baptist", d: "the witness who points away from himself: 'Behold, the Lamb of God'" },
      { n: "Nicodemus", d: "a Pharisee who comes to Jesus by night and hears of being born again" },
      { n: "Mary, Martha & Lazarus", d: "the family of Bethany; Lazarus is raised from the dead, the climactic sign" },
      { n: "Thomas", d: "the disciple who doubts until he sees, then confesses, 'My Lord and my God!'" }
    ]
  },
  {
    name: "Acts",
    genre: "History",
    era: "early-church",
    author: "Luke, as a sequel to his Gospel",
    summary: "Luke's second volume, continuing the story from the ascension of Jesus into the birth and spread of the church. It opens with the risen Jesus promising the Holy Spirit, who is poured out at Pentecost and empowers bold witness. The gospel advances from Jerusalem outward — through Judea and Samaria and to the ends of the earth — as thousands believe and the church crosses ethnic barriers. Peter leads in the early chapters, and the risen Christ then calls Paul, whose missionary journeys plant churches across the Roman world. Through persecution, councils, and shipwreck, nothing can stop the unhindered progress of the word of God.",
    verse: { ref: "Acts 1:8", text: "But you will receive power when the Holy Spirit has come upon you, and you will be my witnesses in Jerusalem and in all Judea and Samaria, and to the end of the earth." },
    point: "The ascended Jesus builds his church by the power of the Holy Spirit, carrying the gospel from Jerusalem to the nations. God's saving purpose advances unstoppably through Spirit-empowered witnesses.",
    christ: "The risen and ascended Christ continues to act by his Spirit, reigning from heaven and adding to his church all who are being saved.",
    chars: [
      { n: "Peter", d: "the apostle who preaches at Pentecost and opens the door of faith to Jew and Gentile" },
      { n: "Paul", d: "the persecutor turned apostle, whose journeys carry the gospel across the empire" },
      { n: "Stephen", d: "the first martyr, who bears witness and forgives even as he is stoned" },
      { n: "Barnabas", d: "the encourager who befriends Paul and partners in the early mission" },
      { n: "The Holy Spirit", d: "poured out at Pentecost, empowering and directing the church's witness" }
    ]
  }
]
