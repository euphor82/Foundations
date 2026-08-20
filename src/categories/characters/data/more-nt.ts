import type { BibleCharacter } from '../types'

export const MORE_NT: BibleCharacter[] = [
  {
    name: "Philemon",
    meaning: "affectionate",
    role: "Slave-owner and host of a house church",
    category: "Early Church",
    testament: "nt",
    era: "early-church",
    books: ["Philemon"],
    summary: "A wealthy believer in Colossae whose home hosted a church, Philemon was led to faith through Paul's ministry. When his runaway slave Onesimus was converted in Rome, Paul wrote to Philemon appealing that he receive the man back not as a slave but as a beloved brother in Christ.",
    verse: { ref: "Philemon 1:6", text: "The sharing of your faith may become effective for the full knowledge of every good thing that is in us for the sake of Christ." },
    whyMatter: "The recipient of a tender letter that quietly plants the gospel seed that would one day overturn slavery itself.",
    relationships: [
      { relation: "Friend", name: "Paul" },
      { relation: "Slave", name: "Onesimus" }
    ]
  },
  {
    name: "Onesimus",
    meaning: "useful",
    role: "Runaway slave, then brother in Christ",
    category: "Early Church",
    testament: "nt",
    era: "early-church",
    books: ["Philemon", "Colossians"],
    summary: "A slave who ran away from his master Philemon and found his way to the imprisoned Paul in Rome, Onesimus was converted and became dear to the apostle. Paul sent him back carrying the letter to Philemon, no longer merely a slave but a beloved brother, once useless yet now truly living up to his name.",
    verse: { ref: "Philemon 1:11", text: "Formerly he was useless to you, but now he is indeed useful to you and to me." },
    whyMatter: "A living picture of how the gospel transforms a person's worth and rewrites every human relationship.",
    relationships: [
      { relation: "Master", name: "Philemon" },
      { relation: "Father in the faith", name: "Paul" }
    ]
  },
  {
    name: "Epaphras",
    meaning: "lovely",
    role: "Founder and pastor of the Colossian church",
    category: "Early Church",
    testament: "nt",
    era: "early-church",
    books: ["Colossians", "Philemon"],
    summary: "A native of Colossae, Epaphras first brought the gospel to his hometown and to the neighboring churches of Laodicea and Hierapolis. Paul praised him as a faithful minister and a servant of Christ who wrestled earnestly in prayer for his people that they might stand mature and fully assured.",
    verse: { ref: "Colossians 4:12", text: "Always struggling on your behalf in his prayers, that you may stand mature and fully assured in all the will of God." },
    whyMatter: "A model pastor whose hidden labor in prayer shows that faithful ministry is measured on its knees.",
    relationships: [
      { relation: "Fellow worker", name: "Paul" }
    ]
  },
  {
    name: "Epaphroditus",
    meaning: "charming",
    role: "Philippian messenger who nearly died serving Paul",
    category: "Early Church",
    testament: "nt",
    era: "early-church",
    books: ["Philippians"],
    summary: "Sent by the church at Philippi to bring a gift and to care for the imprisoned Paul, Epaphroditus fell gravely ill and nearly died in the work. Paul honored him as a brother, fellow worker, and fellow soldier, and sent him home so the anxious church could rejoice to see him again.",
    verse: { ref: "Philippians 2:30", text: "He nearly died for the work of Christ, risking his life to complete what was lacking in your service to me." },
    whyMatter: "An ordinary church messenger whose costly devotion earned the title fellow soldier and lasting honor.",
    relationships: [
      { relation: "Fellow worker", name: "Paul" }
    ]
  },
  {
    name: "Phoebe",
    meaning: "bright, radiant",
    role: "Deacon of Cenchreae who carried Romans",
    category: "Early Church",
    testament: "nt",
    era: "early-church",
    woman: true,
    books: ["Romans"],
    summary: "A servant of the church at Cenchreae near Corinth, Phoebe was commended by Paul as a patron and benefactor of many, including himself. She is widely believed to have carried the letter to the Romans on her journey, entrusted to deliver Paul's greatest theological work to the church in the capital.",
    verse: { ref: "Romans 16:1", text: "I commend to you our sister Phoebe, a servant of the church at Cenchreae." },
    whyMatter: "A trusted leader and benefactor who likely bore the letter of Romans to the church, showing the honored place of women in ministry.",
    relationships: [
      { relation: "Commended by", name: "Paul" }
    ]
  },
  {
    name: "Tychicus",
    meaning: "fortunate",
    role: "Trusted courier of Paul's letters",
    category: "Early Church",
    testament: "nt",
    era: "early-church",
    books: ["Ephesians", "Colossians", "2 Timothy", "Titus"],
    summary: "A believer from the province of Asia, Tychicus was one of Paul's most dependable companions, carrying his letters and news between the apostle and the churches. Paul called him a beloved brother, faithful minister, and fellow servant, and repeatedly sent him to encourage the hearts of the scattered believers.",
    verse: { ref: "Ephesians 6:21", text: "Tychicus the beloved brother and faithful minister in the Lord will tell you everything." },
    whyMatter: "The reliable messenger behind several New Testament letters, proof that quiet faithfulness carries the gospel far.",
    relationships: [
      { relation: "Fellow worker", name: "Paul" }
    ]
  },
  {
    name: "Demas",
    meaning: "popular",
    role: "Co-worker who deserted Paul",
    category: "Early Church",
    testament: "nt",
    era: "early-church",
    books: ["Colossians", "2 Timothy", "Philemon"],
    summary: "Once numbered among Paul's fellow workers and greeted warmly in his earlier letters, Demas served alongside the apostle during his imprisonment. Yet in Paul's final letter he is remembered with sorrow, for he abandoned the aging apostle, having fallen in love with the present world.",
    verse: { ref: "2 Timothy 4:10", text: "For Demas, in love with this present world, has deserted me and gone to Thessalonica." },
    whyMatter: "A sobering warning that nearness to great ministry cannot substitute for a heart that loves Christ above the world.",
    relationships: [
      { relation: "Former fellow worker", name: "Paul" }
    ]
  },
  {
    name: "Agabus",
    role: "New Testament prophet",
    category: "Prophets",
    testament: "nt",
    era: "early-church",
    books: ["Acts"],
    summary: "A prophet from Jerusalem, Agabus foretold by the Spirit a great famine that would spread over the world, prompting the believers at Antioch to send relief to Judea. Years later he met Paul at Caesarea and, binding his own hands and feet with Paul's belt, warned that the apostle would be bound in Jerusalem.",
    verse: { ref: "Acts 21:11", text: "Thus says the Holy Spirit, 'This is how the Jews at Jerusalem will bind the man who owns this belt.'" },
    whyMatter: "A New Testament prophet whose accurate warnings show the Spirit still speaking to guide and prepare the Church.",
    relationships: [
      { relation: "Warned", name: "Paul" }
    ]
  },
  {
    name: "Gamaliel",
    meaning: "reward of God",
    role: "Pharisee and teacher of the law",
    category: "Priests & Leaders",
    testament: "nt",
    era: "early-church",
    books: ["Acts"],
    summary: "A respected Pharisee and teacher of the law held in honor by all the people, Gamaliel sat on the Sanhedrin when the apostles were dragged before it. He counseled restraint, warning that if the movement were of men it would fail, but if it were of God they could not stop it. Paul was raised at his feet.",
    verse: { ref: "Acts 5:39", text: "But if it is of God, you will not be able to overthrow them. You might even be found opposing God!" },
    whyMatter: "A voice of wisdom whose measured counsel spared the apostles and who trained the young Saul of Tarsus.",
    relationships: [
      { relation: "Teacher of", name: "Paul" }
    ]
  },
  {
    name: "Simeon",
    meaning: "he has heard",
    role: "Righteous man who blessed the infant Jesus",
    category: "Other",
    testament: "nt",
    era: "life-of-christ",
    books: ["Luke"],
    summary: "A righteous and devout man in Jerusalem, Simeon was promised by the Holy Spirit that he would not die before seeing the Lord's Christ. When Mary and Joseph brought the infant Jesus to the temple, he took the child in his arms and praised God, ready now to depart in peace, yet foretelling that a sword would pierce Mary's soul.",
    verse: { ref: "Luke 2:30", text: "For my eyes have seen your salvation." },
    whyMatter: "The patient saint whose Nunc Dimittis shows a life fulfilled the moment it beheld the Savior.",
    relationships: [
      { relation: "Blessed", name: "Jesus" }
    ]
  },
  {
    name: "Anna",
    meaning: "grace",
    role: "Prophetess who gave thanks over the infant Jesus",
    category: "Prophets",
    testament: "nt",
    era: "life-of-christ",
    woman: true,
    books: ["Luke"],
    summary: "An aged widow of great devotion, Anna had lived as a prophetess, worshiping in the temple with fasting and prayer night and day. At the very hour Simeon blessed the child, she came up and gave thanks to God, speaking of Jesus to all who were waiting for the redemption of Jerusalem.",
    verse: { ref: "Luke 2:38", text: "She began to give thanks to God and to speak of him to all who were waiting for the redemption of Jerusalem." },
    whyMatter: "A faithful woman of prayer who recognized the Redeemer and could not keep the good news to herself.",
    relationships: [
      { relation: "Testified about", name: "Jesus" }
    ]
  },
  {
    name: "Joseph of Arimathea",
    role: "Council member who buried Jesus",
    category: "Early Church",
    testament: "nt",
    era: "life-of-christ",
    books: ["Matthew", "Mark", "Luke", "John"],
    summary: "A rich and respected member of the Sanhedrin who was secretly a disciple, Joseph of Arimathea had not consented to the council's decision against Jesus. After the crucifixion he took courage, asked Pilate for the body, and laid it in his own new tomb, wrapping it in clean linen.",
    verse: { ref: "Mark 15:43", text: "Took courage and went to Pilate and asked for the body of Jesus." },
    whyMatter: "A secret disciple whose costly courage at the cross fulfilled prophecy and gave the Savior an honorable tomb.",
    relationships: [
      { relation: "Disciple of", name: "Jesus" }
    ]
  },
  {
    name: "Herodias",
    role: "Queen who had John the Baptist executed",
    category: "Rulers & Adversaries",
    testament: "nt",
    era: "life-of-christ",
    woman: true,
    books: ["Matthew", "Mark"],
    summary: "The wife of Herod Antipas, whom she had married after leaving his brother, Herodias nursed a bitter grudge against John the Baptist for condemning the union. Seizing her chance at Herod's birthday feast, she had her dancing daughter ask for John's head on a platter, and the prophet was beheaded in prison.",
    verse: { ref: "Mark 6:19", text: "Herodias had a grudge against him and wanted to put him to death." },
    whyMatter: "A chilling example of how guilty pride, when confronted by truth, will silence the messenger rather than repent.",
    relationships: [
      { relation: "Enemy", name: "John the Baptist" }
    ]
  },
  {
    name: "Herod Agrippa I",
    aka: ["Herod"],
    role: "King who persecuted the Church",
    category: "Rulers & Adversaries",
    testament: "nt",
    era: "early-church",
    books: ["Acts"],
    summary: "A grandson of Herod the Great, Agrippa I sought favor with the Jewish leaders by attacking the Church, killing James the brother of John with the sword and imprisoning Peter, who was freed by an angel. When he later accepted the crowd's praise as a god, he was struck down by an angel and died, eaten by worms.",
    verse: { ref: "Acts 12:23", text: "Immediately an angel of the Lord struck him down, because he did not give God the glory." },
    whyMatter: "A ruler whose sudden downfall shows that those who steal God's glory and fight His Church cannot stand.",
    relationships: [
      { relation: "Killed", name: "James (son of Zebedee)" },
      { relation: "Imprisoned", name: "Peter" }
    ]
  },
  {
    name: "Felix",
    role: "Roman governor of Judea",
    category: "Rulers & Adversaries",
    testament: "nt",
    era: "early-church",
    books: ["Acts"],
    summary: "The Roman governor before whom Paul was tried at Caesarea, Felix listened to the apostle reason about righteousness, self-control, and the coming judgment, and grew alarmed. Yet hoping for a bribe and wishing to please the Jews, he left Paul in prison for two years and passed him on to his successor.",
    verse: { ref: "Acts 24:25", text: "Felix was alarmed and said, 'Go away for the present. When I get an opportunity I will summon you.'" },
    whyMatter: "A tragic figure who felt the weight of gospel truth yet postponed repentance for a convenient season that never came.",
    relationships: [
      { relation: "Judged", name: "Paul" }
    ]
  },
  {
    name: "Festus",
    role: "Roman governor before whom Paul appealed",
    category: "Rulers & Adversaries",
    testament: "nt",
    era: "early-church",
    books: ["Acts"],
    summary: "Succeeding Felix as governor of Judea, Porcius Festus inherited Paul's unresolved case and sought to do the Jews a favor. When he proposed sending Paul back to Jerusalem, the apostle appealed to Caesar, and Festus, baffled by talk of a risen Jesus, called Paul mad before King Agrippa.",
    verse: { ref: "Acts 25:12", text: "You have appealed to Caesar; to Caesar you shall go." },
    whyMatter: "The governor whose ruling sent Paul to Rome, carrying the gospel to the heart of the empire as Christ had promised.",
    relationships: [
      { relation: "Judged", name: "Paul" }
    ]
  },
  {
    name: "Simon Magus",
    aka: ["Simon the Sorcerer"],
    role: "Samaritan sorcerer who tried to buy the Spirit",
    category: "Rulers & Adversaries",
    testament: "nt",
    era: "early-church",
    books: ["Acts"],
    summary: "A magician in Samaria who had amazed the people and claimed to be someone great, Simon professed belief and was baptized under Philip's preaching. But when he saw the Spirit given through the apostles' hands, he offered money to buy the power, and Peter sternly rebuked him, for his heart was not right before God.",
    verse: { ref: "Acts 8:20", text: "May your silver perish with you, because you thought you could obtain the gift of God with money!" },
    whyMatter: "The man whose name gave us simony, a lasting warning against treating God's power as something to be bought or sold.",
    relationships: [
      { relation: "Rebuked by", name: "Peter" }
    ]
  },
  {
    name: "Lois",
    role: "Timothy's grandmother of sincere faith",
    category: "Early Church",
    testament: "nt",
    era: "early-church",
    woman: true,
    books: ["2 Timothy"],
    summary: "The grandmother of Timothy, Lois was the first of three generations named for her genuine, unhypocritical faith. Paul remembered how the faith that first dwelt in her had been passed down through Eunice to Timothy, shaping the young pastor from childhood in the Holy Scriptures.",
    verse: { ref: "2 Timothy 1:5", text: "A sincere faith that dwelt first in your grandmother Lois and your mother Eunice." },
    whyMatter: "A grandmother whose quiet, sincere faith reminds us how the gospel is handed down through generations of a family.",
    relationships: [
      { relation: "Grandson", name: "Timothy" },
      { relation: "Daughter", name: "Eunice" }
    ]
  },
  {
    name: "Eunice",
    role: "Timothy's mother of sincere faith",
    category: "Early Church",
    testament: "nt",
    era: "early-church",
    woman: true,
    books: ["2 Timothy", "Acts"],
    summary: "A believing Jewish woman married to a Greek, Eunice was the mother of Timothy and, with her mother Lois, nurtured him in sincere faith and the sacred writings from infancy. Paul's letters honor her as a link in the chain of faith that produced his beloved co-worker.",
    verse: { ref: "2 Timothy 3:15", text: "From childhood you have been acquainted with the sacred writings." },
    whyMatter: "A faithful mother whose teaching of Scripture at home helped raise up one of the early Church's finest leaders.",
    relationships: [
      { relation: "Son", name: "Timothy" },
      { relation: "Mother", name: "Lois" }
    ]
  },
  {
    name: "Bartimaeus",
    meaning: "son of Timaeus",
    role: "Blind beggar healed by Jesus",
    category: "Other",
    testament: "nt",
    era: "life-of-christ",
    books: ["Mark"],
    summary: "A blind beggar sitting by the roadside outside Jericho, Bartimaeus cried out to Jesus as the Son of David and would not be silenced by the crowd. Jesus called him, healed him for his faith, and immediately Bartimaeus regained his sight and followed Jesus on the way.",
    verse: { ref: "Mark 10:52", text: "Go your way; your faith has made you well. And immediately he recovered his sight and followed him on the way." },
    whyMatter: "A beggar whose persistent, believing cry shows that desperate faith in Jesus is never turned away.",
    relationships: [
      { relation: "Healed by", name: "Jesus" }
    ]
  },
  {
    name: "Aristarchus",
    meaning: "best ruler",
    role: "Macedonian companion and fellow prisoner of Paul",
    category: "Early Church",
    testament: "nt",
    era: "early-church",
    books: ["Acts", "Colossians", "Philemon"],
    summary: "A believer from Thessalonica in Macedonia, Aristarchus was seized in the riot at Ephesus and traveled with Paul through many trials, including the storm-tossed voyage to Rome. There he shared the apostle's imprisonment, remembered as a fellow prisoner and fellow worker who stayed faithful to the end.",
    verse: { ref: "Colossians 4:10", text: "Aristarchus my fellow prisoner greets you." },
    whyMatter: "A steadfast companion whose willingness to share Paul's chains models loyal friendship in the gospel.",
    relationships: [
      { relation: "Fellow worker", name: "Paul" }
    ]
  }
]
