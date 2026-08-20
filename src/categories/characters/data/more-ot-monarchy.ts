import type { BibleCharacter } from '../types'

export const MORE_OT_MONARCHY: BibleCharacter[] = [
  {
    name: "Zadok",
    meaning: "righteous",
    role: "High priest",
    category: "Priests & Leaders",
    testament: "ot",
    era: "united-kingdom",
    books: ["2 Samuel", "1 Kings", "1 Chronicles"],
    summary: "Zadok served as priest during David's reign and stayed loyal through Absalom's revolt, helping carry the ark. When Adonijah tried to seize the throne, Zadok anointed Solomon as king at David's command. His descendants held the high priesthood for generations, and Ezekiel later honored the sons of Zadok as those who kept faithful charge of the sanctuary.",
    verse: { ref: "1 Kings 1:39", text: "There Zadok the priest took the horn of oil from the tent and anointed Solomon." },
    whyMatter: "His steadfast faithfulness established a priestly line that endured and became a byword for fidelity to the LORD.",
    relationships: [
      { relation: "Served under", name: "David" },
      { relation: "Anointed", name: "Solomon" }
    ]
  },
  {
    name: "Asa",
    meaning: "physician",
    role: "King of Judah",
    category: "Kings & Royalty",
    testament: "ot",
    era: "divided-kingdom",
    books: ["1 Kings", "2 Chronicles"],
    summary: "Asa did what was right in the eyes of the LORD, tearing down idols and even removing his grandmother from her position for making an Asherah image. He trusted God for a great victory over a vast Cushite army. Yet late in life he relied on a treaty with Syria and, when diseased in his feet, sought physicians rather than the LORD.",
    verse: { ref: "2 Chronicles 16:12", text: "Yet even in his disease he did not seek the LORD, but sought help from physicians." },
    whyMatter: "His life shows that early zeal for God must be sustained by lifelong trust rather than self-reliance.",
  },
  {
    name: "Jehoshaphat",
    meaning: "the LORD has judged",
    role: "King of Judah",
    category: "Kings & Royalty",
    testament: "ot",
    era: "divided-kingdom",
    books: ["1 Kings", "2 Chronicles"],
    summary: "Jehoshaphat sought the LORD and sent teachers throughout Judah with the Book of the Law. Facing an overwhelming invasion, he called the nation to fast and pray, then sent singers ahead of the army to praise God, and the enemy destroyed itself. His one great weakness was an unwise alliance with wicked King Ahab of Israel.",
    verse: { ref: "2 Chronicles 20:15", text: "Do not be afraid and do not be dismayed at this great horde, for the battle is not yours but God's." },
    whyMatter: "He models a ruler who seeks God first and wins battles through worship, while warning against ungodly alliances.",
    relationships: [
      { relation: "Ally", name: "Ahab" }
    ]
  },
  {
    name: "Naboth",
    meaning: "fruits",
    role: "Landowner of Jezreel",
    category: "Other",
    testament: "ot",
    era: "divided-kingdom",
    books: ["1 Kings"],
    summary: "Naboth owned a vineyard beside King Ahab's palace and refused to sell his ancestral inheritance, honoring the LORD's law that land should remain in the family. Queen Jezebel arranged for false witnesses to accuse him of blasphemy, and he was stoned to death so Ahab could seize the vineyard, a crime that brought God's judgment on Ahab's house.",
    verse: { ref: "1 Kings 21:3", text: "The LORD forbid that I should give you the inheritance of my fathers." },
    whyMatter: "His faithful stand and unjust death expose the corruption of Ahab and Jezebel and the LORD's care for the oppressed.",
    relationships: [
      { relation: "Coveted by", name: "Ahab" },
      { relation: "Killed by", name: "Jezebel" }
    ]
  },
  {
    name: "Micaiah",
    meaning: "who is like the LORD",
    role: "Prophet",
    category: "Prophets",
    testament: "ot",
    era: "divided-kingdom",
    books: ["1 Kings", "2 Chronicles"],
    summary: "When Ahab gathered four hundred prophets who all promised victory, Jehoshaphat asked for a prophet of the LORD, and Micaiah alone told the truth. He foresaw Israel scattered like sheep without a shepherd and foretold Ahab's death in battle. For this he was struck and imprisoned, yet his word came true exactly as spoken.",
    verse: { ref: "1 Kings 22:14", text: "As the LORD lives, what the LORD says to me, that I will speak." },
    whyMatter: "He is the model of the lone faithful prophet who speaks God's truth against a crowd of flatterers.",
    relationships: [
      { relation: "Rebuked", name: "Ahab" }
    ]
  },
  {
    name: "Athaliah",
    meaning: "the LORD is exalted",
    role: "Usurping queen of Judah",
    category: "Rulers & Adversaries",
    testament: "ot",
    woman: true,
    era: "divided-kingdom",
    books: ["2 Kings", "2 Chronicles"],
    summary: "Daughter of Ahab and Jezebel, Athaliah married into Judah's royal house. When her son Ahaziah died, she seized power and murdered the royal heirs to secure the throne, nearly extinguishing the line of David. She reigned six years until the infant Joash, secretly rescued, was crowned, and she was put to death.",
    verse: { ref: "2 Chronicles 22:10", text: "Now when Athaliah the mother of Ahaziah saw that her son was dead, she arose and destroyed all the royal family of the house of Judah." },
    whyMatter: "Her murderous grab for power threatened God's promise to David, yet the LORD preserved the royal line through one hidden child.",
  },
  {
    name: "Joash",
    aka: ["Jehoash"],
    meaning: "given by the LORD",
    role: "King of Judah",
    category: "Kings & Royalty",
    testament: "ot",
    era: "divided-kingdom",
    books: ["2 Kings", "2 Chronicles"],
    summary: "Rescued as a baby from Athaliah's slaughter and hidden in the temple, Joash was crowned king at age seven by the priest Jehoiada. He did what was right and organized the repair of the neglected temple. But after Jehoiada died, he listened to corrupt officials, turned to idols, and even ordered the murder of Jehoiada's son Zechariah.",
    verse: { ref: "2 Kings 12:2", text: "Jehoash did what was right in the eyes of the LORD all his days, because Jehoiada the priest instructed him." },
    whyMatter: "His rise and fall show how a faith propped up by a godly mentor can collapse when that influence is gone.",
    relationships: [
      { relation: "Guardian", name: "Jehoiada" },
      { relation: "Rescued from", name: "Athaliah" }
    ]
  },
  {
    name: "Jehoiada",
    meaning: "the LORD knows",
    role: "High priest",
    category: "Priests & Leaders",
    testament: "ot",
    era: "divided-kingdom",
    books: ["2 Kings", "2 Chronicles"],
    summary: "Jehoiada the high priest hid the child Joash from Athaliah for six years, then boldly organized the guards to crown him and put the usurping queen to death. He led the people in renewing their covenant with the LORD and tore down the temple of Baal. He guided Joash faithfully and was honored with burial among the kings.",
    verse: { ref: "2 Chronicles 24:16", text: "They buried him in the city of David among the kings, because he had done good in Israel." },
    whyMatter: "His courage preserved David's line and restored true worship, showing the power of a faithful spiritual leader.",
    relationships: [
      { relation: "Protege", name: "Joash" }
    ]
  },
  {
    name: "Uzziah",
    aka: ["Azariah"],
    meaning: "the LORD is my strength",
    role: "King of Judah",
    category: "Kings & Royalty",
    testament: "ot",
    era: "divided-kingdom",
    books: ["2 Kings", "2 Chronicles", "Isaiah"],
    summary: "Uzziah became king young and reigned long and prosperously, strengthening Judah's army, cities, and agriculture as long as he sought God. But when he grew strong, his heart became proud, and he entered the temple to burn incense, a duty reserved for priests. Struck with leprosy on his forehead, he lived isolated until his death.",
    verse: { ref: "2 Chronicles 26:16", text: "But when he was strong, he grew proud, to his destruction. For he was unfaithful to the LORD his God." },
    whyMatter: "His downfall is a stark warning that strength and success can breed the pride that provokes God's judgment.",
  },
  {
    name: "Manasseh",
    meaning: "making to forget",
    role: "King of Judah",
    category: "Kings & Royalty",
    testament: "ot",
    era: "divided-kingdom",
    books: ["2 Kings", "2 Chronicles"],
    summary: "Manasseh reigned longer than any king of Judah and became its most wicked, rebuilding idol altars, practicing sorcery, and even sacrificing his own sons. The LORD let Assyria carry him off in chains to Babylon. There he humbled himself and prayed, and God restored him to Jerusalem, where he tore down the idols he had raised.",
    verse: { ref: "2 Chronicles 33:13", text: "Then Manasseh knew that the LORD was God." },
    whyMatter: "His story is one of the Bible's most striking pictures of how deep repentance can reach even the worst of sinners.",
    relationships: [
      { relation: "Father", name: "Hezekiah" }
    ]
  },
  {
    name: "Huldah",
    meaning: "weasel",
    role: "Prophetess",
    category: "Prophets",
    testament: "ot",
    woman: true,
    era: "divided-kingdom",
    books: ["2 Kings", "2 Chronicles"],
    summary: "When the lost Book of the Law was discovered during temple repairs, King Josiah sent his officials to the prophetess Huldah. She confirmed that the book was God's word and that judgment would fall on Judah for its idolatry, yet promised that Josiah, because his heart was tender, would be spared the disaster in his lifetime.",
    verse: { ref: "2 Kings 22:15", text: "Thus says the LORD, the God of Israel: Tell the man who sent you to me." },
    whyMatter: "A woman of God authenticated Scripture and sparked one of Judah's greatest reforms under Josiah.",
    relationships: [
      { relation: "Advised", name: "Josiah" }
    ]
  },
  {
    name: "Baruch",
    meaning: "blessed",
    role: "Scribe",
    category: "Priests & Leaders",
    testament: "ot",
    era: "divided-kingdom",
    books: ["Jeremiah"],
    summary: "Baruch was the faithful scribe who wrote down the prophecies of Jeremiah as the prophet dictated them. When King Jehoiakim burned the scroll, Baruch wrote it all again with more words added. He shared Jeremiah's dangers and discouragement, and the LORD gave him a personal promise that his life would be spared.",
    verse: { ref: "Jeremiah 45:5", text: "But I will give you your life as a prize of war in all places to which you may go." },
    whyMatter: "His patient service preserved God's word through persecution, showing the quiet importance of faithful support.",
    relationships: [
      { relation: "Served", name: "Jeremiah" }
    ]
  },
  {
    name: "Vashti",
    meaning: "beautiful",
    role: "Queen of Persia",
    category: "Rulers & Adversaries",
    testament: "ot",
    woman: true,
    era: "exile",
    books: ["Esther"],
    summary: "Vashti was queen to King Ahasuerus (Xerxes) of Persia. During a lavish feast, the king summoned her to display her beauty before his drunken guests, and she refused to come. For this she was deposed and banished from his presence, and the search for a new queen opened the way for Esther to rise to the throne.",
    verse: { ref: "Esther 1:12", text: "But Queen Vashti refused to come at the king's command delivered by the eunuchs." },
    whyMatter: "Her removal set in motion the events by which God placed Esther in position to save His people.",
    relationships: [
      { relation: "Successor", name: "Esther" }
    ]
  },
  {
    name: "Joshua the High Priest",
    aka: ["Jeshua"],
    meaning: "the LORD is salvation",
    role: "High priest",
    category: "Priests & Leaders",
    testament: "ot",
    era: "return",
    books: ["Haggai", "Zechariah", "Ezra"],
    summary: "Joshua served as high priest among the exiles who returned from Babylon to rebuild the temple. In one of Zechariah's visions he stood before the angel of the LORD in filthy garments while Satan accused him, and God commanded that he be clothed in clean robes, a picture of forgiven sin and restored priesthood for a renewed people.",
    verse: { ref: "Zechariah 3:4", text: "Behold, I have taken your iniquity away from you, and I will clothe you with pure vestments." },
    whyMatter: "His cleansing vision pictures God's grace to remove guilt and restore His people to holy service.",
    relationships: [
      { relation: "Fellow leader", name: "Zerubbabel" }
    ]
  },
  {
    name: "Amaziah",
    meaning: "the LORD is mighty",
    role: "King of Judah",
    category: "Kings & Royalty",
    testament: "ot",
    era: "divided-kingdom",
    books: ["2 Kings", "2 Chronicles"],
    summary: "Amaziah did what was right, though not wholeheartedly. He obeyed a prophet by sending home hired Israelite soldiers before defeating Edom. Yet after his victory he foolishly brought back the gods of Edom and bowed to them. Puffed up with pride, he provoked a war with Israel, was defeated, and later fell to conspirators.",
    verse: { ref: "2 Chronicles 25:2", text: "And he did what was right in the eyes of the LORD, yet not with a whole heart." },
    whyMatter: "His half-hearted faith and post-victory idolatry warn that partial obedience opens the door to pride and ruin.",
  }
]
