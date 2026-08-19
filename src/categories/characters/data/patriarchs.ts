import type { BibleCharacter } from '../types'

export const PATRIARCHS: BibleCharacter[] = [
  {
    name: "Adam",
    meaning: "man; from the ground",
    role: "First man; head of humanity",
    category: "Patriarchs & Matriarchs",
    testament: "ot",
    era: "patriarchs",
    books: ["Genesis"],
    summary: "Formed by God from the dust and given the breath of life, Adam was placed in Eden to work and keep the garden and to walk with his Maker. His disobedience in eating the forbidden fruit brought sin and death into the world, so that all humanity now shares in his fall.",
    verse: { ref: "Genesis 2:7", text: "then the LORD God formed the man of dust from the ground and breathed into his nostrils the breath of life, and the man became a living creature." },
    whyMatter: "As the representative head of the human race, his sin explains why the world is broken and why a second Adam was needed to save it.",
    relationships: [
      { relation: "Wife", name: "Eve" },
      { relation: "Son", name: "Cain" },
      { relation: "Son", name: "Abel" }
    ]
  },
  {
    name: "Eve",
    meaning: "living; mother of all living",
    role: "First woman; mother of humanity",
    category: "Patriarchs & Matriarchs",
    testament: "ot",
    woman: true,
    era: "patriarchs",
    books: ["Genesis"],
    summary: "Made from Adam's side as a helper fit for him, Eve was the crown of God's creation and the mother of all the living. Deceived by the serpent, she took the forbidden fruit and gave some to her husband, yet God's promise that her offspring would crush the serpent held out the first hope of redemption.",
    verse: { ref: "Genesis 3:20", text: "The man called his wife's name Eve, because she was the mother of all living." },
    whyMatter: "She is the mother of all people and the first to receive God's promise that a Savior would come through her offspring.",
    relationships: [
      { relation: "Husband", name: "Adam" },
      { relation: "Son", name: "Cain" },
      { relation: "Son", name: "Abel" }
    ]
  },
  {
    name: "Cain",
    meaning: "acquired; gotten",
    role: "First son of Adam; first murderer",
    category: "Patriarchs & Matriarchs",
    testament: "ot",
    era: "patriarchs",
    books: ["Genesis"],
    summary: "The firstborn of Adam and Eve, Cain worked the ground and brought an offering that God did not accept as his brother's was. Consumed by anger and jealousy, he murdered Abel in the field and was sent out as a restless wanderer, though God marked him for protection.",
    verse: { ref: "Genesis 4:7", text: "If you do well, will you not be accepted? And if you do not do well, sin is crouching at the door. Its desire is contrary to you, but you must rule over it." },
    whyMatter: "His story is the Bible's first picture of how unchecked sin grows from resentment into violence.",
    relationships: [
      { relation: "Father", name: "Adam" },
      { relation: "Mother", name: "Eve" },
      { relation: "Brother", name: "Abel" }
    ]
  },
  {
    name: "Abel",
    meaning: "breath; vapor",
    role: "Righteous shepherd; first martyr",
    category: "Patriarchs & Matriarchs",
    testament: "ot",
    era: "patriarchs",
    books: ["Genesis"],
    summary: "A keeper of sheep, Abel brought God the firstborn of his flock, and by faith his offering was accepted while his brother's was not. His jealous brother Cain killed him, making Abel the first human to die and, as Scripture calls him, the first righteous martyr.",
    verse: { ref: "Hebrews 11:4", text: "By faith Abel offered to God a more acceptable sacrifice than Cain, through which he was commended as righteous, God commending him by accepting his gifts." },
    whyMatter: "He is the Bible's first example of faith that pleases God and of the righteous who suffer at the hands of the wicked.",
    relationships: [
      { relation: "Father", name: "Adam" },
      { relation: "Mother", name: "Eve" },
      { relation: "Brother", name: "Cain" }
    ]
  },
  {
    name: "Enoch",
    meaning: "dedicated",
    role: "Patriarch who walked with God",
    category: "Patriarchs & Matriarchs",
    testament: "ot",
    era: "patriarchs",
    books: ["Genesis"],
    summary: "In a line of men who lived and died, Enoch stands out because he walked faithfully with God for three hundred years. Rather than dying, he was taken directly by God, a rare sign of God's favor and of a fellowship stronger than death.",
    verse: { ref: "Genesis 5:24", text: "Enoch walked with God, and he was not, for God took him." },
    whyMatter: "His life shows that intimate, faithful walking with God is possible even in a fallen world, and that such fellowship outlasts death.",
    relationships: [
      { relation: "Son", name: "Methuselah" }
    ]
  },
  {
    name: "Noah",
    meaning: "rest; comfort",
    role: "Builder of the ark; second father of humanity",
    category: "Patriarchs & Matriarchs",
    testament: "ot",
    era: "patriarchs",
    books: ["Genesis"],
    summary: "In a generation given over to violence and corruption, Noah found favor with God as a righteous man who walked with him. Obeying God's command, he built the ark and, with his family, was carried safely through the flood that judged the earth, becoming the ancestor of all who came after.",
    verse: { ref: "Genesis 6:9", text: "Noah was a righteous man, blameless in his generation. Noah walked with God." },
    whyMatter: "His deliverance through the flood is a lasting picture of God's judgment on sin and his salvation of the faithful.",
    relationships: [
      { relation: "Son", name: "Shem" },
      { relation: "Son", name: "Ham" },
      { relation: "Son", name: "Japheth" }
    ]
  },
  {
    name: "Abraham",
    aka: ["Abram"],
    meaning: "father of a multitude",
    role: "Patriarch; father of the faithful",
    category: "Patriarchs & Matriarchs",
    testament: "ot",
    era: "patriarchs",
    books: ["Genesis"],
    summary: "Called by God out of Ur, Abraham left everything on the promise of land, descendants, and blessing for all nations. His life is a journey of faith — trusting God for a son in old age and, at the test on Mount Moriah, being willing to offer that son, Isaac.",
    verse: { ref: "Genesis 15:6", text: "And he believed the LORD, and he counted it to him as righteousness." },
    whyMatter: "He is the father of God's covenant people and the Bible's model of justifying faith.",
    relationships: [
      { relation: "Wife", name: "Sarah" },
      { relation: "Son", name: "Isaac" },
      { relation: "Son", name: "Ishmael" },
      { relation: "Nephew", name: "Lot" }
    ]
  },
  {
    name: "Sarah",
    aka: ["Sarai"],
    meaning: "princess",
    role: "Matriarch; wife of Abraham",
    category: "Patriarchs & Matriarchs",
    testament: "ot",
    woman: true,
    era: "patriarchs",
    books: ["Genesis"],
    summary: "The wife of Abraham, Sarah shared his long journey of faith and his long wait for the promised son. Barren into old age and prone at times to doubt and to take matters into her own hands, she finally laughed in wonder when God gave her Isaac at ninety.",
    verse: { ref: "Genesis 21:6", text: "And Sarah said, 'God has made laughter for me; everyone who hears will laugh over me.'" },
    whyMatter: "She is the mother of the promised line and a witness that God keeps his word even when it seems impossible.",
    relationships: [
      { relation: "Husband", name: "Abraham" },
      { relation: "Son", name: "Isaac" },
      { relation: "Servant", name: "Hagar" }
    ]
  },
  {
    name: "Hagar",
    meaning: "flight; stranger",
    role: "Egyptian servant; mother of Ishmael",
    category: "Patriarchs & Matriarchs",
    testament: "ot",
    woman: true,
    era: "patriarchs",
    books: ["Genesis"],
    summary: "An Egyptian servant of Sarah, Hagar was given to Abraham and bore him Ishmael before being driven into the wilderness. There God met her in her distress, promised to make her son into a great nation, and she named him the God who sees.",
    verse: { ref: "Genesis 16:13", text: "So she called the name of the LORD who spoke to her, 'You are a God of seeing,' for she said, 'Truly here I have seen him who looks after me.'" },
    whyMatter: "Her story shows that God sees and cares for the outcast and afflicted, even those outside the covenant line.",
    relationships: [
      { relation: "Son", name: "Ishmael" },
      { relation: "Master", name: "Abraham" },
      { relation: "Mistress", name: "Sarah" }
    ]
  },
  {
    name: "Isaac",
    meaning: "he laughs",
    role: "Patriarch; son of promise",
    category: "Patriarchs & Matriarchs",
    testament: "ot",
    era: "patriarchs",
    books: ["Genesis"],
    summary: "Born to Abraham and Sarah in their old age, Isaac was the child of promise through whom the covenant would continue. He submitted as his father prepared to sacrifice him, married Rebekah, and passed the blessing on to his sons Jacob and Esau.",
    verse: { ref: "Genesis 26:24", text: "And the LORD appeared to him the same night and said, 'I am the God of Abraham your father. Fear not, for I am with you and will bless you and multiply your offspring for my servant Abraham's sake.'" },
    whyMatter: "He is the promised heir who carries God's covenant forward from Abraham to the twelve tribes.",
    relationships: [
      { relation: "Father", name: "Abraham" },
      { relation: "Mother", name: "Sarah" },
      { relation: "Wife", name: "Rebekah" },
      { relation: "Son", name: "Jacob" },
      { relation: "Son", name: "Esau" }
    ]
  },
  {
    name: "Rebekah",
    meaning: "to bind; captivating",
    role: "Matriarch; wife of Isaac",
    category: "Patriarchs & Matriarchs",
    testament: "ot",
    woman: true,
    era: "patriarchs",
    books: ["Genesis"],
    summary: "Found at a well through the prayer of Abraham's servant, Rebekah left her family to become Isaac's wife. Told by God that the elder of her twins would serve the younger, she later schemed to secure the blessing for her favored son Jacob.",
    verse: { ref: "Genesis 24:58", text: "And they called Rebekah and said to her, 'Will you go with this man?' She said, 'I will go.'" },
    whyMatter: "Her willing faith and her role in the blessing show how God works his sovereign purposes through human choices.",
    relationships: [
      { relation: "Husband", name: "Isaac" },
      { relation: "Son", name: "Jacob" },
      { relation: "Son", name: "Esau" }
    ]
  },
  {
    name: "Jacob",
    aka: ["Israel"],
    meaning: "he grasps the heel; supplanter",
    role: "Patriarch; father of the twelve tribes",
    category: "Patriarchs & Matriarchs",
    testament: "ot",
    era: "patriarchs",
    books: ["Genesis"],
    summary: "A grasper from birth, Jacob seized his brother's birthright and blessing before fleeing to Laban, where he married Leah and Rachel and grew a large family. After wrestling with God through the night, he was given a new name, Israel, and became the father of the twelve tribes.",
    verse: { ref: "Genesis 32:28", text: "Then he said, 'Your name shall no longer be called Jacob, but Israel, for you have striven with God and with men, and have prevailed.'" },
    whyMatter: "He is the father of Israel, and his transformation shows God's patient grace toward a flawed but chosen man.",
    relationships: [
      { relation: "Father", name: "Isaac" },
      { relation: "Mother", name: "Rebekah" },
      { relation: "Brother", name: "Esau" },
      { relation: "Wife", name: "Leah" },
      { relation: "Wife", name: "Rachel" },
      { relation: "Son", name: "Joseph" },
      { relation: "Son", name: "Judah" }
    ]
  },
  {
    name: "Esau",
    aka: ["Edom"],
    meaning: "hairy",
    role: "Firstborn of Isaac; father of Edom",
    category: "Patriarchs & Matriarchs",
    testament: "ot",
    era: "patriarchs",
    books: ["Genesis"],
    summary: "The elder twin of Isaac and Rebekah, Esau was a skilled hunter who despised his birthright and sold it to Jacob for a bowl of stew. Though cheated of his father's blessing, he later reconciled with his brother and became the father of the Edomites.",
    verse: { ref: "Genesis 25:34", text: "Then Jacob gave Esau bread and lentil stew, and he ate and drank and rose and went his way. Thus Esau despised his birthright." },
    whyMatter: "His trading of the birthright for a meal is a lasting warning against valuing fleeting appetites over God's promises.",
    relationships: [
      { relation: "Father", name: "Isaac" },
      { relation: "Mother", name: "Rebekah" },
      { relation: "Brother", name: "Jacob" }
    ]
  },
  {
    name: "Rachel",
    meaning: "ewe",
    role: "Matriarch; beloved wife of Jacob",
    category: "Patriarchs & Matriarchs",
    testament: "ot",
    woman: true,
    era: "patriarchs",
    books: ["Genesis"],
    summary: "The beautiful younger daughter of Laban, Rachel was the wife Jacob loved and worked fourteen years to marry. Long barren while she longed for children, she finally bore Joseph and later died giving birth to Benjamin.",
    verse: { ref: "Genesis 29:20", text: "So Jacob served seven years for Rachel, and they seemed to him but a few days because of the love he had for her." },
    whyMatter: "As the beloved but long-barren wife, she embodies both deep love and the ache of waiting on God for a child.",
    relationships: [
      { relation: "Husband", name: "Jacob" },
      { relation: "Sister", name: "Leah" },
      { relation: "Son", name: "Joseph" },
      { relation: "Father", name: "Laban" }
    ]
  },
  {
    name: "Leah",
    meaning: "weary; wild cow",
    role: "Matriarch; wife of Jacob",
    category: "Patriarchs & Matriarchs",
    testament: "ot",
    woman: true,
    era: "patriarchs",
    books: ["Genesis"],
    summary: "The elder daughter of Laban, Leah was given to Jacob by deception and lived unloved in the shadow of her sister Rachel. Yet God saw her affliction and opened her womb, and through her sons Judah and Levi came the royal and priestly lines of Israel.",
    verse: { ref: "Genesis 29:31", text: "When the LORD saw that Leah was hated, he opened her womb, but Rachel was barren." },
    whyMatter: "Overlooked by man but seen by God, she became the mother of the tribe from which the Messiah would come.",
    relationships: [
      { relation: "Husband", name: "Jacob" },
      { relation: "Sister", name: "Rachel" },
      { relation: "Son", name: "Judah" },
      { relation: "Father", name: "Laban" }
    ]
  },
  {
    name: "Joseph",
    meaning: "may he add",
    role: "Patriarch; ruler in Egypt",
    category: "Patriarchs & Matriarchs",
    testament: "ot",
    era: "patriarchs",
    books: ["Genesis"],
    summary: "The favored son of Jacob, Joseph was sold into slavery by his jealous brothers yet rose to become second in command over Egypt. Through dreams and God's providence he stored grain for a great famine and saved his family, forgiving those who had wronged him.",
    verse: { ref: "Genesis 50:20", text: "As for you, you meant evil against me, but God meant it for good, to bring it about that many people should be kept alive, as they are today." },
    whyMatter: "His life is the Bible's clearest early picture of God turning human evil into good for the saving of many.",
    relationships: [
      { relation: "Father", name: "Jacob" },
      { relation: "Mother", name: "Rachel" },
      { relation: "Brother", name: "Judah" }
    ]
  },
  {
    name: "Judah",
    meaning: "praise",
    role: "Patriarch; father of the royal tribe",
    category: "Patriarchs & Matriarchs",
    testament: "ot",
    era: "patriarchs",
    books: ["Genesis"],
    summary: "The fourth son of Jacob and Leah, Judah proposed selling Joseph but later grew into a man willing to offer his own life for his brother Benjamin. His father's blessing named him the tribe of rulers, and from his line would come King David and ultimately the Messiah.",
    verse: { ref: "Genesis 49:10", text: "The scepter shall not depart from Judah, nor the ruler's staff from between his feet, until tribute comes to him; and to him shall be the obedience of the peoples." },
    whyMatter: "He is the ancestor of David and of Jesus, the promised Lion of the tribe of Judah.",
    relationships: [
      { relation: "Father", name: "Jacob" },
      { relation: "Mother", name: "Leah" },
      { relation: "Brother", name: "Joseph" }
    ]
  }
]
