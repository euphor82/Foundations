import type { BibleCharacter } from '../types'

export const UNITED_KINGDOM: BibleCharacter[] = [
  {
    name: "Samuel",
    meaning: "heard by God",
    role: "Last judge, prophet, and priest who anointed Israel's first kings",
    category: "Prophets",
    testament: "ot",
    era: "united-kingdom",
    books: ["1 Samuel", "2 Samuel"],
    summary: "Born to Hannah in answer to prayer and dedicated to the LORD, Samuel served in the tabernacle from childhood and grew into Israel's last judge and a faithful prophet. He anointed both Saul and David as king, bridging the era of the judges and the monarchy.",
    verse: { ref: "1 Samuel 3:10", text: "Speak, for your servant hears." },
    whyMatter: "A faithful transitional leader who spoke God's word without flattery and set apart Israel's first kings.",
    relationships: [
      { relation: "Mother", name: "Hannah" },
      { relation: "Anointed", name: "Saul" },
      { relation: "Anointed", name: "David" }
    ]
  },
  {
    name: "Saul",
    meaning: "asked for",
    role: "First king of Israel",
    category: "Kings & Royalty",
    testament: "ot",
    era: "united-kingdom",
    books: ["1 Samuel", "2 Samuel"],
    summary: "Chosen as Israel's first king, Saul was tall and impressive but proved impatient and disobedient, forfeiting the kingdom through repeated failure to trust God. Consumed by jealousy, he hunted David for years before dying in battle against the Philistines.",
    verse: { ref: "1 Samuel 15:22", text: "To obey is better than sacrifice." },
    whyMatter: "A sobering example that outward stature and position cannot substitute for a heart that obeys God.",
    relationships: [
      { relation: "Son", name: "Jonathan" },
      { relation: "Daughter", name: "Michal" },
      { relation: "Son-in-law", name: "David" },
      { relation: "Anointed by", name: "Samuel" }
    ]
  },
  {
    name: "Jonathan",
    meaning: "the LORD has given",
    role: "Prince of Israel; Saul's son and David's covenant friend",
    category: "Kings & Royalty",
    testament: "ot",
    era: "united-kingdom",
    books: ["1 Samuel", "2 Samuel"],
    summary: "The valiant son of King Saul, Jonathan trusted God for victory and struck the Philistines with daring faith. He loved David as his own soul and willingly deferred the throne to him, though he died alongside his father in battle on Mount Gilboa.",
    verse: { ref: "1 Samuel 14:6", text: "Nothing can hinder the LORD from saving by many or by few." },
    whyMatter: "A model of loyal, self-giving friendship who honored God's chosen king above his own royal claim.",
    relationships: [
      { relation: "Father", name: "Saul" },
      { relation: "Sister", name: "Michal" },
      { relation: "Friend", name: "David" }
    ]
  },
  {
    name: "David",
    meaning: "beloved",
    role: "King of Israel; shepherd, warrior, and psalmist",
    category: "Kings & Royalty",
    testament: "ot",
    era: "united-kingdom",
    books: ["1 Samuel", "2 Samuel", "Psalms"],
    summary: "A shepherd boy anointed while Saul still reigned, David killed Goliath and rose to unite Israel and make Jerusalem its capital. A man after God's own heart, he also fell into grave sin with Bathsheba, yet repented, and God promised him an everlasting throne.",
    verse: { ref: "1 Samuel 13:14", text: "The LORD has sought out a man after his own heart." },
    whyMatter: "Israel's greatest king and the ancestor and pattern of the Messiah, the Son of David.",
    relationships: [
      { relation: "Father-in-law", name: "Saul" },
      { relation: "Friend", name: "Jonathan" },
      { relation: "Wife", name: "Michal" },
      { relation: "Wife", name: "Abigail" },
      { relation: "Wife", name: "Bathsheba" },
      { relation: "Son", name: "Absalom" },
      { relation: "Son", name: "Solomon" }
    ]
  },
  {
    name: "Goliath",
    meaning: "exile",
    role: "Philistine giant and champion of Gath",
    category: "Rulers & Adversaries",
    testament: "ot",
    era: "united-kingdom",
    books: ["1 Samuel"],
    summary: "A towering Philistine warrior from Gath, Goliath defied the armies of Israel and their God for forty days, and no soldier dared face him. The young David answered his challenge in the name of the LORD and felled him with a single stone from a sling.",
    verse: { ref: "1 Samuel 17:45", text: "You come to me with a sword, but I come to you in the name of the LORD." },
    whyMatter: "His defeat displays that the battle belongs to the LORD, who saves apart from human might.",
    relationships: [
      { relation: "Enemy", name: "David" }
    ]
  },
  {
    name: "Michal",
    meaning: "who is like God?",
    role: "Daughter of Saul and first wife of David",
    category: "Kings & Royalty",
    testament: "ot",
    era: "united-kingdom",
    woman: true,
    books: ["1 Samuel", "2 Samuel"],
    summary: "Saul's younger daughter, Michal loved David and once saved his life by helping him escape her father's men. Later given to another man and then restored to David, she despised him for dancing before the ark, and Scripture notes she remained childless.",
    verse: { ref: "1 Samuel 18:20", text: "Now Saul's daughter Michal loved David." },
    whyMatter: "Her story shows how misplaced pride can curdle early love and estrange us from wholehearted worship.",
    relationships: [
      { relation: "Father", name: "Saul" },
      { relation: "Brother", name: "Jonathan" },
      { relation: "Husband", name: "David" }
    ]
  },
  {
    name: "Abigail",
    meaning: "my father is joy",
    role: "Wise woman who became a wife of David",
    category: "Other",
    testament: "ot",
    era: "united-kingdom",
    woman: true,
    books: ["1 Samuel"],
    summary: "The discerning wife of the harsh and foolish Nabal, Abigail acted swiftly to bring provisions to David and his men, restraining him from needless bloodshed. After Nabal died, David took her as his wife, honoring her wisdom and peacemaking.",
    verse: { ref: "1 Samuel 25:32", text: "Blessed be the LORD, who sent you this day to meet me." },
    whyMatter: "A picture of humble wisdom and courage that averts violence and points others back to God.",
    relationships: [
      { relation: "Husband", name: "David" }
    ]
  },
  {
    name: "Bathsheba",
    meaning: "daughter of an oath",
    role: "Wife of David and mother of Solomon",
    category: "Kings & Royalty",
    testament: "ot",
    era: "united-kingdom",
    woman: true,
    books: ["2 Samuel", "1 Kings"],
    summary: "The wife of Uriah the Hittite, Bathsheba was taken by David in the great sin that marked his reign, and their first child died. She later became the mother of Solomon and acted to secure his succession to the throne.",
    verse: { ref: "2 Samuel 12:24", text: "Then David comforted his wife, and she bore a son, and he called his name Solomon." },
    whyMatter: "Through her, God brought forth Solomon and the royal line, weaving grace even into a story of failure.",
    relationships: [
      { relation: "Husband", name: "David" },
      { relation: "Son", name: "Solomon" },
      { relation: "First husband", name: "Uriah" }
    ]
  },
  {
    name: "Nathan",
    meaning: "he gave",
    role: "Prophet in the court of David",
    category: "Prophets",
    testament: "ot",
    era: "united-kingdom",
    books: ["2 Samuel", "1 Kings"],
    summary: "A faithful prophet during David's reign, Nathan delivered God's covenant promise of an enduring throne and later confronted the king over his sin with the parable of the poor man's lamb. He also helped secure Solomon's accession to the throne.",
    verse: { ref: "2 Samuel 12:7", text: "You are the man!" },
    whyMatter: "A courageous truth-teller who confronted even a king, showing that God's word holds power to account.",
    relationships: [
      { relation: "Advised", name: "David" },
      { relation: "Anointed", name: "Solomon" }
    ]
  },
  {
    name: "Absalom",
    meaning: "father of peace",
    role: "Son of David who rebelled against him",
    category: "Kings & Royalty",
    testament: "ot",
    era: "united-kingdom",
    books: ["2 Samuel"],
    summary: "David's handsome and ambitious son, Absalom won the hearts of Israel and led a rebellion that drove his father from Jerusalem. He died caught in an oak tree during the battle, and David wept bitterly over the loss of his son.",
    verse: { ref: "2 Samuel 18:33", text: "O my son Absalom, my son, my son Absalom!" },
    whyMatter: "A tragic warning that charm and ambition without integrity bring ruin to a family and a nation.",
    relationships: [
      { relation: "Father", name: "David" }
    ]
  },
  {
    name: "Joab",
    meaning: "the LORD is father",
    role: "Commander of David's army",
    category: "Priests & Leaders",
    testament: "ot",
    era: "united-kingdom",
    books: ["2 Samuel", "1 Kings"],
    summary: "The fierce and capable commander of David's army, Joab won many of the king's battles and remained fiercely loyal to his throne. Yet his ruthlessness and vengeful killings troubled David, and he was finally put to death in Solomon's reign.",
    verse: { ref: "2 Samuel 10:12", text: "Be of good courage, and may the LORD do what seems good to him." },
    whyMatter: "A capable but ruthless leader who shows how loyalty divorced from righteousness eventually reaps judgment.",
    relationships: [
      { relation: "Served", name: "David" }
    ]
  },
  {
    name: "Solomon",
    meaning: "peace",
    aka: ["Jedidiah"],
    role: "King of Israel renowned for wisdom",
    category: "Kings & Royalty",
    testament: "ot",
    era: "united-kingdom",
    books: ["1 Kings"],
    summary: "The son of David and Bathsheba, Solomon asked God for wisdom and became the wisest and wealthiest of Israel's kings, building the temple in Jerusalem. Yet in his later years many foreign wives turned his heart to idols, sowing division for the kingdom.",
    verse: { ref: "1 Kings 3:9", text: "Give your servant therefore an understanding mind to govern your people." },
    whyMatter: "His reign shows both the glory of God-given wisdom and the peril of a divided heart.",
    relationships: [
      { relation: "Father", name: "David" },
      { relation: "Mother", name: "Bathsheba" }
    ]
  },
  {
    name: "Queen of Sheba",
    role: "Foreign queen who visited Solomon",
    category: "Other",
    testament: "ot",
    era: "united-kingdom",
    woman: true,
    books: ["1 Kings"],
    summary: "Hearing of Solomon's fame, the queen of a distant land came to test him with hard questions and was overwhelmed by his wisdom and the splendor of his court. She blessed the LORD and exchanged lavish gifts before returning to her own country.",
    verse: { ref: "1 Kings 10:7", text: "The half was not told me; your wisdom surpasses the report that I heard." },
    whyMatter: "Jesus cited her as a seeker of wisdom who will rise in judgment against those who ignore one greater than Solomon.",
    relationships: [
      { relation: "Visited", name: "Solomon" }
    ]
  }
]
