import type { BibleCharacter } from '../types'

export const EXODUS_JUDGES: BibleCharacter[] = [
  {
    name: "Moses",
    meaning: "drawn out (of the water)",
    role: "Prophet and deliverer who led Israel out of Egypt",
    category: "Exodus & Conquest",
    testament: "ot",
    era: "egypt-exodus",
    books: ["Exodus", "Leviticus", "Numbers", "Deuteronomy"],
    summary: "Rescued as a baby and raised in Pharaoh's house, Moses fled to the wilderness before God called him at the burning bush to free Israel. Through him God sent the plagues, parted the sea, and gave the Law at Sinai, leading the people forty years toward the Promised Land.",
    verse: { ref: "Deuteronomy 34:10", text: "And there has not arisen a prophet since in Israel like Moses, whom the LORD knew face to face." },
    whyMatter: "He is Israel's great lawgiver and deliverer, and a picture of the greater Deliverer to come.",
    relationships: [
      { relation: "Brother", name: "Aaron" },
      { relation: "Sister", name: "Miriam" },
      { relation: "Wife", name: "Zipporah" },
      { relation: "Father-in-law", name: "Jethro" },
      { relation: "Successor", name: "Joshua" }
    ]
  },
  {
    name: "Aaron",
    meaning: "exalted or mountain of strength",
    role: "First high priest of Israel and spokesman for Moses",
    category: "Exodus & Conquest",
    testament: "ot",
    era: "egypt-exodus",
    books: ["Exodus", "Leviticus", "Numbers", "Deuteronomy"],
    summary: "Aaron stood beside his brother Moses as spokesman before Pharaoh and helped lead Israel out of Egypt. God appointed him and his sons as priests, though he stumbled badly when he fashioned the golden calf while Moses was on the mountain.",
    verse: { ref: "Exodus 28:1", text: "Then bring near to you Aaron your brother, and his sons with him, from among the people of Israel, to serve me as priests." },
    whyMatter: "As Israel's first high priest, he foreshadows the mediating work later fulfilled perfectly in Christ.",
    relationships: [
      { relation: "Brother", name: "Moses" },
      { relation: "Sister", name: "Miriam" }
    ]
  },
  {
    name: "Miriam",
    meaning: "possibly bitter or beloved",
    role: "Prophetess and sister of Moses and Aaron",
    category: "Exodus & Conquest",
    testament: "ot",
    era: "egypt-exodus",
    woman: true,
    books: ["Exodus", "Numbers", "Deuteronomy"],
    summary: "As a girl Miriam watched over the baby Moses in the reeds and arranged for their own mother to nurse him. After the crossing of the sea she led the women in song and dance, though she was later disciplined for challenging Moses' unique calling.",
    verse: { ref: "Exodus 15:20", text: "Then Miriam the prophetess, the sister of Aaron, took a tambourine in her hand, and all the women went out after her with tambourines and dancing." },
    whyMatter: "She is one of Scripture's earliest named prophetesses and a leader of Israel's worship.",
    relationships: [
      { relation: "Brother", name: "Moses" },
      { relation: "Brother", name: "Aaron" }
    ]
  },
  {
    name: "Jethro",
    aka: ["Reuel"],
    meaning: "his excellence or abundance",
    role: "Priest of Midian and father-in-law of Moses",
    category: "Exodus & Conquest",
    testament: "ot",
    era: "egypt-exodus",
    books: ["Exodus", "Numbers"],
    summary: "Jethro took in Moses during his years of exile and gave him his daughter Zipporah in marriage. After the exodus he rejoiced at God's deliverance and wisely advised Moses to appoint capable men to help judge the people.",
    verse: { ref: "Exodus 18:24", text: "So Moses listened to the voice of his father-in-law and did all that he had said." },
    whyMatter: "His counsel to share leadership models godly wisdom and the value of delegation.",
    relationships: [
      { relation: "Son-in-law", name: "Moses" },
      { relation: "Daughter", name: "Zipporah" }
    ]
  },
  {
    name: "Zipporah",
    meaning: "bird",
    role: "Wife of Moses and daughter of Jethro",
    category: "Exodus & Conquest",
    testament: "ot",
    era: "egypt-exodus",
    woman: true,
    books: ["Exodus"],
    summary: "Zipporah met Moses at a well in Midian and became his wife during his years away from Egypt. In a mysterious night encounter she acted decisively to circumcise their son, sparing Moses from the LORD's judgment.",
    verse: { ref: "Exodus 2:21", text: "And Moses was content to dwell with the man, and he gave Moses his daughter Zipporah." },
    whyMatter: "Her account shows God working through an ordinary family as He prepared His deliverer.",
    relationships: [
      { relation: "Husband", name: "Moses" },
      { relation: "Father", name: "Jethro" }
    ]
  },
  {
    name: "Joshua",
    aka: ["Hoshea"],
    meaning: "the LORD is salvation",
    role: "Successor to Moses who led Israel into the Promised Land",
    category: "Exodus & Conquest",
    testament: "ot",
    era: "conquest-judges",
    books: ["Exodus", "Numbers", "Deuteronomy", "Joshua"],
    summary: "Joshua served as Moses' assistant and was one of only two spies who trusted God to give Israel the land. After Moses died, he led the people across the Jordan and through the conquest of Canaan, calling them to serve the LORD faithfully.",
    verse: { ref: "Joshua 24:15", text: "But as for me and my house, we will serve the LORD." },
    whyMatter: "He shows that bold faith and obedience lead God's people into the fulfillment of His promises.",
    relationships: [
      { relation: "Mentor", name: "Moses" },
      { relation: "Fellow spy", name: "Caleb" }
    ]
  },
  {
    name: "Caleb",
    meaning: "dog or wholehearted",
    role: "Faithful spy who wholly followed the LORD",
    category: "Exodus & Conquest",
    testament: "ot",
    era: "conquest-judges",
    books: ["Numbers", "Deuteronomy", "Joshua"],
    summary: "Caleb was one of the twelve spies sent into Canaan and, with Joshua, urged Israel to trust God and go up at once. Because he followed the LORD wholeheartedly, he alone of his generation lived to claim his promised inheritance at Hebron.",
    verse: { ref: "Numbers 14:24", text: "But my servant Caleb, because he has a different spirit and has followed me fully, I will bring into the land into which he went." },
    whyMatter: "His wholehearted faith stands as an enduring example of trusting God against overwhelming odds.",
    relationships: [
      { relation: "Fellow spy", name: "Joshua" }
    ]
  },
  {
    name: "Rahab",
    meaning: "broad or spacious",
    role: "Canaanite woman of Jericho who sheltered Israel's spies",
    category: "Exodus & Conquest",
    testament: "ot",
    era: "conquest-judges",
    woman: true,
    books: ["Joshua"],
    summary: "Rahab was a prostitute in Jericho who hid Israel's two spies and confessed that their God is God of heaven and earth. Because of her faith she and her family were spared when the city fell, and she was grafted into Israel and the line of the Messiah.",
    verse: { ref: "Joshua 2:11", text: "For the LORD your God, he is God in the heavens above and on the earth beneath." },
    whyMatter: "She is a striking picture of grace, saved by faith and honored in the ancestry of Jesus.",
    relationships: []
  },
  {
    name: "Deborah",
    meaning: "bee",
    role: "Prophetess and judge who delivered Israel",
    category: "Judges",
    testament: "ot",
    era: "conquest-judges",
    woman: true,
    books: ["Judges"],
    summary: "Deborah judged Israel and settled disputes under her palm, hearing the word of the LORD as a prophetess. She summoned Barak to lead the army against Sisera and went with him into battle, and afterward celebrated God's victory in song.",
    verse: { ref: "Judges 4:4", text: "Now Deborah, a prophetess, the wife of Lappidoth, was judging Israel at that time." },
    whyMatter: "She stands out as a courageous leader whom God raised up to rescue and guide His people.",
    relationships: [
      { relation: "Ally", name: "Barak" }
    ]
  },
  {
    name: "Barak",
    meaning: "lightning",
    role: "Military commander who fought at Deborah's word",
    category: "Judges",
    testament: "ot",
    era: "conquest-judges",
    books: ["Judges"],
    summary: "Barak was called by Deborah to lead ten thousand men against Sisera's army but would only go if she went with him. God routed the enemy before him, and he is remembered among the faithful who conquered kingdoms through trust in the LORD.",
    verse: { ref: "Judges 4:14", text: "And Deborah said to Barak, 'Up! For this is the day in which the LORD has given Sisera into your hand.'" },
    whyMatter: "His story shows God granting victory to those who obey, even when their faith needs support.",
    relationships: [
      { relation: "Ally", name: "Deborah" }
    ]
  },
  {
    name: "Gideon",
    aka: ["Jerubbaal"],
    meaning: "one who cuts down or hews",
    role: "Judge who delivered Israel from Midian",
    category: "Judges",
    testament: "ot",
    era: "conquest-judges",
    books: ["Judges"],
    summary: "Gideon was threshing wheat in hiding when the angel of the LORD called him a mighty man of valor. Though hesitant and asking for signs, he obeyed and, with only three hundred men, watched God rout the vast army of Midian so the glory would be God's alone.",
    verse: { ref: "Judges 7:2", text: "The people with you are too many for me to give the Midianites into their hand, lest Israel boast over me, saying, 'My own hand has saved me.'" },
    whyMatter: "His account teaches that God delights to save through weakness so that He alone receives the glory.",
    relationships: []
  },
  {
    name: "Samson",
    meaning: "of the sun or sunny",
    role: "Nazirite judge known for his great strength",
    category: "Judges",
    testament: "ot",
    era: "conquest-judges",
    books: ["Judges"],
    summary: "Set apart as a Nazirite from birth, Samson was given extraordinary strength to begin delivering Israel from the Philistines. His life was marked by impulsive choices and the betrayal that cost him his eyes, yet in his final act God granted him one last victory.",
    verse: { ref: "Judges 16:28", text: "O Lord GOD, please remember me and please strengthen me only this once, O God." },
    whyMatter: "His flawed life shows both the danger of squandered gifts and the mercy of a God who still uses the repentant.",
    relationships: [
      { relation: "Betrayer", name: "Delilah" }
    ]
  },
  {
    name: "Delilah",
    meaning: "possibly delicate or feeble",
    role: "Philistine woman who betrayed Samson",
    category: "Other",
    testament: "ot",
    era: "conquest-judges",
    woman: true,
    books: ["Judges"],
    summary: "Delilah was loved by Samson and pressed him day after day to reveal the secret of his strength. Persuaded by the Philistine rulers and their silver, she coaxed the truth from him and handed him over to his enemies.",
    verse: { ref: "Judges 16:18", text: "When Delilah saw that he had told her all his heart, she sent and called the lords of the Philistines." },
    whyMatter: "Her account is a sober warning about the destructive power of deception and misplaced trust.",
    relationships: [
      { relation: "Betrayed", name: "Samson" }
    ]
  },
  {
    name: "Ruth",
    meaning: "friendship or companion",
    role: "Moabite widow whose loyalty led to redemption",
    category: "Other",
    testament: "ot",
    era: "conquest-judges",
    woman: true,
    books: ["Ruth"],
    summary: "Ruth was a Moabite widow who refused to leave her mother-in-law Naomi, pledging to make Naomi's people and God her own. Gleaning in the fields of Boaz, she found favor and redemption, and became the great-grandmother of King David.",
    verse: { ref: "Ruth 1:16", text: "For where you go I will go, and where you lodge I will lodge. Your people shall be my people, and your God my God." },
    whyMatter: "Her faithfulness shows God's grace reaching the outsider and weaving her into the line of the Messiah.",
    relationships: [
      { relation: "Mother-in-law", name: "Naomi" },
      { relation: "Husband", name: "Boaz" }
    ]
  },
  {
    name: "Naomi",
    meaning: "pleasant",
    role: "Widow of Bethlehem and mother-in-law of Ruth",
    category: "Other",
    testament: "ot",
    era: "conquest-judges",
    woman: true,
    books: ["Ruth"],
    summary: "Naomi lost her husband and both sons in Moab and returned to Bethlehem in bitter grief, calling herself Mara. Through the loyalty of Ruth and the kindness of Boaz, her emptiness was turned to joy as she cradled a grandson in her arms.",
    verse: { ref: "Ruth 1:20", text: "Do not call me Naomi; call me Mara, for the Almighty has dealt very bitterly with me." },
    whyMatter: "Her story shows God quietly restoring hope and providing for the brokenhearted through ordinary faithfulness.",
    relationships: [
      { relation: "Daughter-in-law", name: "Ruth" }
    ]
  },
  {
    name: "Boaz",
    meaning: "in him is strength",
    role: "Kinsman-redeemer who married Ruth",
    category: "Other",
    testament: "ot",
    era: "conquest-judges",
    books: ["Ruth"],
    summary: "Boaz was a worthy landowner of Bethlehem who showed kindness to Ruth as she gleaned in his fields. Acting as kinsman-redeemer, he took her as his wife and provided a future for both Ruth and Naomi, becoming an ancestor of David and of Christ.",
    verse: { ref: "Ruth 3:11", text: "And now, my daughter, do not fear. I will do for you all that you ask, for all my fellow townsmen know that you are a worthy woman." },
    whyMatter: "As a kinsman-redeemer he beautifully foreshadows Christ, who redeems those who take refuge in Him.",
    relationships: [
      { relation: "Wife", name: "Ruth" }
    ]
  },
  {
    name: "Eli",
    meaning: "ascended or the LORD is high",
    role: "High priest and judge who raised Samuel",
    category: "Priests & Leaders",
    testament: "ot",
    era: "conquest-judges",
    books: ["1 Samuel"],
    summary: "Eli served as priest and judge at Shiloh and mentored the boy Samuel when God first called him. Though devout in his duties, he failed to restrain his wicked sons, and judgment fell on his house when the ark was captured.",
    verse: { ref: "1 Samuel 3:9", text: "Speak, LORD, for your servant hears." },
    whyMatter: "His life is a sobering reminder that faithful service must be matched by faithful leadership at home.",
    relationships: [
      { relation: "Ward", name: "Hannah" }
    ]
  },
  {
    name: "Hannah",
    meaning: "grace or favor",
    role: "Mother of Samuel who prayed for a son",
    category: "Other",
    testament: "ot",
    era: "conquest-judges",
    woman: true,
    books: ["1 Samuel"],
    summary: "Hannah was a barren woman who poured out her grief to the LORD at Shiloh, vowing to dedicate a son to His service. God answered her prayer with Samuel, and she kept her vow and rejoiced in a song that magnified the God who lifts up the lowly.",
    verse: { ref: "1 Samuel 1:27", text: "For this child I prayed, and the LORD has granted me my petition that I made to him." },
    whyMatter: "Her heartfelt prayer and grateful surrender model trusting God in sorrow and giving back His gifts.",
    relationships: [
      { relation: "Priest", name: "Eli" }
    ]
  }
]
