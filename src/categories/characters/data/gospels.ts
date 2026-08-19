import type { BibleCharacter } from '../types'

export const GOSPELS_CHARS: BibleCharacter[] = [
  {
    name: "Jesus",
    aka: ["Christ", "Son of Man", "Immanuel"],
    meaning: "the LORD saves",
    role: "The Messiah, the Son of God",
    category: "Other",
    testament: "nt",
    era: "life-of-christ",
    books: ["Matthew", "Mark", "Luke", "John"],
    summary: "Born of the virgin Mary, Jesus is the eternal Son of God who took on human flesh to save his people from their sins. He proclaimed the kingdom of God, healed the sick, was crucified for sinners, and rose bodily on the third day. He now reigns as Lord and will return to judge the living and the dead.",
    verse: { ref: "John 14:6", text: "I am the way, and the truth, and the life. No one comes to the Father except through me." },
    whyMatter: "He is the center of all Scripture and the only Savior of the world.",
    relationships: [
      { relation: "Mother", name: "Mary (mother of Jesus)" },
      { relation: "Earthly father", name: "Joseph (husband of Mary)" },
      { relation: "Relative", name: "John the Baptist" }
    ]
  },
  {
    name: "Mary (mother of Jesus)",
    meaning: "bitter or beloved",
    role: "Virgin mother of Jesus",
    category: "Other",
    testament: "nt",
    woman: true,
    era: "life-of-christ",
    books: ["Matthew", "Mark", "Luke", "John"],
    summary: "A young woman of Nazareth engaged to Joseph, Mary was chosen by God to bear his Son through the power of the Holy Spirit. She humbly received the angel's word and treasured the wonders surrounding Jesus in her heart. She stood by the cross at his death and was among the believers after his resurrection.",
    verse: { ref: "Luke 1:38", text: "Behold, I am the servant of the Lord; let it be to me according to your word." },
    whyMatter: "Her faithful obedience made her the mother through whom God brought the Savior into the world.",
    relationships: [
      { relation: "Husband", name: "Joseph (husband of Mary)" },
      { relation: "Son", name: "Jesus" },
      { relation: "Relative", name: "Elizabeth" }
    ]
  },
  {
    name: "Joseph (husband of Mary)",
    meaning: "may he add",
    role: "Carpenter and earthly father of Jesus",
    category: "Other",
    testament: "nt",
    era: "life-of-christ",
    books: ["Matthew", "Luke"],
    summary: "A righteous carpenter of Nazareth descended from King David, Joseph was engaged to Mary when he learned she was with child. Warned by an angel in a dream, he took Mary as his wife and named the boy Jesus, guarding the family and fleeing to Egypt to protect the child. He raised Jesus as his own son.",
    verse: { ref: "Matthew 1:20", text: "Joseph, son of David, do not fear to take Mary as your wife." },
    whyMatter: "His quiet obedience protected the Christ child and rooted Jesus in the royal line of David.",
    relationships: [
      { relation: "Wife", name: "Mary (mother of Jesus)" },
      { relation: "Son", name: "Jesus" }
    ]
  },
  {
    name: "John the Baptist",
    meaning: "the LORD is gracious",
    role: "Prophet who prepared the way for Jesus",
    category: "Other",
    testament: "nt",
    era: "life-of-christ",
    books: ["Matthew", "Mark", "Luke", "John"],
    summary: "Born to elderly parents as a miracle, John lived in the wilderness and called Israel to repentance, baptizing in the Jordan. He pointed away from himself to Jesus as the Lamb of God, and was later beheaded by Herod Antipas.",
    verse: { ref: "John 1:29", text: "Behold, the Lamb of God, who takes away the sin of the world!" },
    whyMatter: "The last of the old-covenant prophets and the forerunner who announced the Messiah.",
    relationships: [
      { relation: "Mother", name: "Elizabeth" },
      { relation: "Father", name: "Zechariah (father of John)" },
      { relation: "Relative", name: "Jesus" }
    ]
  },
  {
    name: "Zechariah (father of John)",
    meaning: "the LORD remembers",
    role: "Priest and father of John the Baptist",
    category: "Priests & Leaders",
    testament: "nt",
    era: "life-of-christ",
    books: ["Luke"],
    summary: "A priest of the division of Abijah, Zechariah and his wife Elizabeth were righteous but childless in old age. While serving in the temple he was told by the angel Gabriel that they would have a son, and his doubt left him mute until the boy was born. At John's birth his speech returned and he prophesied of the coming salvation.",
    verse: { ref: "Luke 1:13", text: "Do not be afraid, Zechariah, for your prayer has been heard." },
    whyMatter: "His story shows that God hears long prayers and keeps his promises in his own time.",
    relationships: [
      { relation: "Wife", name: "Elizabeth" },
      { relation: "Son", name: "John the Baptist" }
    ]
  },
  {
    name: "Elizabeth",
    meaning: "God is my oath",
    role: "Mother of John the Baptist",
    category: "Other",
    testament: "nt",
    woman: true,
    era: "life-of-christ",
    books: ["Luke"],
    summary: "A descendant of Aaron and wife of the priest Zechariah, Elizabeth was barren until God granted her a son in old age. When Mary visited her, the child leaped in her womb and she blessed Mary as the mother of her Lord. Her son grew up to be John the Baptist.",
    verse: { ref: "Luke 1:42", text: "Blessed are you among women, and blessed is the fruit of your womb!" },
    whyMatter: "Her joyful faith welcomed both the forerunner and the Savior before either was born.",
    relationships: [
      { relation: "Husband", name: "Zechariah (father of John)" },
      { relation: "Son", name: "John the Baptist" },
      { relation: "Relative", name: "Mary (mother of Jesus)" }
    ]
  },
  {
    name: "Mary Magdalene",
    role: "Devoted disciple and witness of the resurrection",
    category: "Other",
    testament: "nt",
    woman: true,
    era: "life-of-christ",
    books: ["Matthew", "Mark", "Luke", "John"],
    summary: "A woman from Magdala whom Jesus freed from seven demons, Mary Magdalene followed him faithfully and helped support his ministry. She stood by the cross and came to the tomb early on the first day of the week. She was the first to see the risen Lord and to announce the resurrection to the disciples.",
    verse: { ref: "John 20:16", text: "Jesus said to her, 'Mary.' She turned and said to him, 'Rabboni!'" },
    whyMatter: "Delivered and restored by Jesus, she became the first herald of his resurrection.",
    relationships: []
  },
  {
    name: "Martha",
    meaning: "lady or mistress",
    role: "Disciple and host of Jesus in Bethany",
    category: "Other",
    testament: "nt",
    woman: true,
    era: "life-of-christ",
    books: ["Luke", "John"],
    summary: "A woman of Bethany who welcomed Jesus into her home, Martha was busy with much serving while her sister Mary sat at the Lord's feet. When her brother Lazarus died, she confessed Jesus as the Christ, the Son of God who is the resurrection and the life. Her active love and growing faith mark her as a true disciple.",
    verse: { ref: "John 11:27", text: "I believe that you are the Christ, the Son of God, who is coming into the world." },
    whyMatter: "Her bold confession shows deep faith even in the face of death and grief.",
    relationships: [
      { relation: "Sister", name: "Mary of Bethany" },
      { relation: "Brother", name: "Lazarus" }
    ]
  },
  {
    name: "Mary of Bethany",
    role: "Disciple who sat at the feet of Jesus",
    category: "Other",
    testament: "nt",
    woman: true,
    era: "life-of-christ",
    books: ["Luke", "John"],
    summary: "The sister of Martha and Lazarus, Mary of Bethany chose to sit at the Lord's feet and listen to his teaching. Jesus commended her for choosing the good portion that would not be taken from her. She later anointed his feet with costly perfume in an act of devotion before his death.",
    verse: { ref: "Luke 10:42", text: "Mary has chosen the good portion, which will not be taken away from her." },
    whyMatter: "Her example teaches that sitting at Jesus' feet and treasuring his word is the one thing needed.",
    relationships: [
      { relation: "Sister", name: "Martha" },
      { relation: "Brother", name: "Lazarus" }
    ]
  },
  {
    name: "Lazarus",
    meaning: "God has helped",
    role: "Friend of Jesus raised from the dead",
    category: "Other",
    testament: "nt",
    era: "life-of-christ",
    books: ["John"],
    summary: "A beloved friend of Jesus who lived in Bethany with his sisters Martha and Mary, Lazarus fell sick and died. After four days in the tomb, Jesus wept and then called him out alive, displaying his power over death. This great sign led many to believe and hardened the resolve of his enemies.",
    verse: { ref: "John 11:43", text: "Lazarus, come out." },
    whyMatter: "His raising is a living sign that Jesus is the resurrection and the life.",
    relationships: [
      { relation: "Sister", name: "Martha" },
      { relation: "Sister", name: "Mary of Bethany" }
    ]
  },
  {
    name: "Nicodemus",
    meaning: "victory of the people",
    role: "Pharisee and secret follower of Jesus",
    category: "Other",
    testament: "nt",
    era: "life-of-christ",
    books: ["John"],
    summary: "A Pharisee and member of the ruling council, Nicodemus came to Jesus by night and heard that he must be born again to see the kingdom of God. He later spoke up for a fair hearing of Jesus among the leaders. After the crucifixion he helped Joseph of Arimathea bury the body with a costly mixture of spices.",
    verse: { ref: "John 3:3", text: "Truly, truly, I say to you, unless one is born again he cannot see the kingdom of God." },
    whyMatter: "His journey from curiosity to open devotion shows the new birth Jesus described taking root.",
    relationships: []
  },
  {
    name: "Zacchaeus",
    meaning: "pure or innocent",
    role: "Tax collector transformed by Jesus",
    category: "Other",
    testament: "nt",
    era: "life-of-christ",
    books: ["Luke"],
    summary: "A wealthy chief tax collector in Jericho, Zacchaeus was small in stature and climbed a sycamore tree to see Jesus pass by. Jesus called him by name and invited himself to his house, and Zacchaeus received him with joy. Transformed by grace, he gave half his goods to the poor and repaid all he had defrauded fourfold.",
    verse: { ref: "Luke 19:9", text: "Today salvation has come to this house, since he also is a son of Abraham." },
    whyMatter: "His story shows that Jesus came to seek and to save the lost, and that grace produces true repentance.",
    relationships: []
  },
  {
    name: "Herod the Great",
    role: "King of Judea who sought to kill the infant Jesus",
    category: "Rulers & Adversaries",
    testament: "nt",
    era: "life-of-christ",
    books: ["Matthew"],
    summary: "A ruthless client king of Judea under Rome, Herod the Great was known for grand building projects and brutal paranoia. When the wise men sought the newborn king of the Jews, he was troubled and plotted to destroy the child. Failing to find him, he ordered the massacre of the infant boys of Bethlehem.",
    verse: { ref: "Matthew 2:16", text: "He sent and killed all the male children in Bethlehem and in all that region." },
    whyMatter: "His murderous fear shows the world's hostility to the true King, whom God preserved.",
    relationships: []
  },
  {
    name: "Herod Antipas",
    role: "Tetrarch of Galilee who beheaded John the Baptist",
    category: "Rulers & Adversaries",
    testament: "nt",
    era: "life-of-christ",
    books: ["Matthew", "Mark", "Luke"],
    summary: "A son of Herod the Great, Antipas ruled Galilee and Perea as tetrarch during Jesus' ministry. Rebuked by John the Baptist for taking his brother's wife, he imprisoned and beheaded the prophet. He later mocked Jesus when Pilate sent him for questioning during the trial.",
    verse: { ref: "Mark 6:16", text: "John, whom I beheaded, has been raised." },
    whyMatter: "His guilty conscience and hardened heart warn against silencing the truth we do not want to hear.",
    relationships: []
  },
  {
    name: "Pontius Pilate",
    role: "Roman governor who sentenced Jesus to death",
    category: "Rulers & Adversaries",
    testament: "nt",
    era: "life-of-christ",
    books: ["Matthew", "Mark", "Luke", "John"],
    summary: "The Roman prefect of Judea, Pilate presided over the trial of Jesus and found no guilt in him. Pressured by the crowd and fearing unrest, he handed Jesus over to be crucified while washing his hands of the matter. He fastened the charge above the cross that named Jesus the King of the Jews.",
    verse: { ref: "John 18:38", text: "What is truth? I find no guilt in him." },
    whyMatter: "His failure to act on the truth he saw shows the danger of trading conscience for the approval of the crowd.",
    relationships: []
  },
  {
    name: "Caiaphas",
    role: "High priest who condemned Jesus",
    category: "Priests & Leaders",
    testament: "nt",
    era: "life-of-christ",
    books: ["Matthew", "Luke", "John"],
    summary: "The Jewish high priest during Jesus' trial, Caiaphas led the council that sought to put him to death. He declared it better that one man should die for the people, unknowingly prophesying the meaning of the cross. He charged Jesus with blasphemy and delivered him to Pilate.",
    verse: { ref: "John 11:50", text: "It is better for you that one man should die for the people." },
    whyMatter: "God turned his cynical words into a true prophecy of the salvation accomplished at the cross.",
    relationships: []
  }
]
