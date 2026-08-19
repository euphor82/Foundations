import type { BibleCharacter } from '../types'

export const PROPHETS_KINGS: BibleCharacter[] = [
  {
    name: "Rehoboam",
    meaning: "he enlarges the people",
    role: "First king of the southern kingdom of Judah",
    category: "Kings & Royalty",
    testament: "ot",
    era: "divided-kingdom",
    books: ["1 Kings", "2 Kings"],
    summary: "Rehoboam succeeded his father Solomon, but rejected the elders' counsel and threatened the people with heavier burdens. His harshness split the nation, as ten northern tribes broke away under Jeroboam and only Judah and Benjamin remained loyal to the house of David.",
    verse: { ref: "1 Kings 12:14", text: "My father made your yoke heavy, and I will add to your yoke." },
    whyMatter: "His folly divided Israel into two kingdoms, shaping the rest of Old Testament history.",
    relationships: [
      { relation: "Father", name: "Solomon" },
      { relation: "Rival", name: "Jeroboam" }
    ]
  },
  {
    name: "Jeroboam",
    meaning: "the people will contend",
    role: "First king of the northern kingdom of Israel",
    category: "Kings & Royalty",
    testament: "ot",
    era: "divided-kingdom",
    books: ["1 Kings", "2 Kings"],
    summary: "Jeroboam led the northern tribes in revolt against Rehoboam and became king of Israel. Fearing his people would return to Jerusalem, he set up golden calves at Bethel and Dan, leading the nation into idolatry that scarred it for generations.",
    verse: { ref: "1 Kings 12:28", text: "Behold your gods, O Israel, who brought you up out of the land of Egypt." },
    whyMatter: "He became the pattern of a leader who made Israel sin, a warning repeated throughout Kings.",
    relationships: [
      { relation: "Rival", name: "Rehoboam" }
    ]
  },
  {
    name: "Ahab",
    meaning: "father's brother",
    role: "King of the northern kingdom of Israel",
    category: "Kings & Royalty",
    testament: "ot",
    era: "divided-kingdom",
    books: ["1 Kings", "2 Kings"],
    summary: "Ahab married the Sidonian princess Jezebel and promoted the worship of Baal throughout Israel. He clashed repeatedly with the prophet Elijah, and Scripture records that he did more to provoke the LORD than all the kings before him.",
    verse: { ref: "1 Kings 16:33", text: "Ahab did more to provoke the LORD, the God of Israel, to anger than all the kings of Israel who were before him." },
    whyMatter: "His reign marks the deepest slide of the northern kingdom into idolatry under Jezebel's influence.",
    relationships: [
      { relation: "Wife", name: "Jezebel" },
      { relation: "Adversary", name: "Elijah" }
    ]
  },
  {
    name: "Jezebel",
    meaning: "where is the prince",
    role: "Queen of Israel who promoted Baal worship",
    category: "Rulers & Adversaries",
    testament: "ot",
    woman: true,
    era: "divided-kingdom",
    books: ["1 Kings", "2 Kings"],
    summary: "Jezebel, a Sidonian princess and wife of King Ahab, aggressively spread Baal worship and hunted down the prophets of the LORD. She arranged the murder of Naboth to seize his vineyard, and in judgment she was thrown from a window and met the end Elijah had foretold.",
    verse: { ref: "1 Kings 21:25", text: "There was none who sold himself to do what was evil in the sight of the LORD like Ahab, whom Jezebel his wife incited." },
    whyMatter: "Her name became a byword for seductive idolatry and ruthless opposition to God's prophets.",
    relationships: [
      { relation: "Husband", name: "Ahab" },
      { relation: "Adversary", name: "Elijah" }
    ]
  },
  {
    name: "Elijah",
    meaning: "my God is the LORD",
    role: "Prophet in the northern kingdom of Israel",
    category: "Prophets",
    testament: "ot",
    era: "divided-kingdom",
    books: ["1 Kings", "2 Kings"],
    summary: "Elijah confronted King Ahab and the prophets of Baal, calling down fire on Mount Carmel to prove that the LORD alone is God. Fed by ravens and strengthened for the journey, he heard God not in wind or fire but in a low whisper, and was finally taken up to heaven in a whirlwind.",
    verse: { ref: "1 Kings 18:21", text: "If the LORD is God, follow him; but if Baal, then follow him." },
    whyMatter: "The great prophet of confrontation and revival, expected to herald the Messiah's coming.",
    relationships: [
      { relation: "Successor", name: "Elisha" },
      { relation: "Adversary", name: "Ahab" },
      { relation: "Adversary", name: "Jezebel" }
    ]
  },
  {
    name: "Elisha",
    meaning: "my God is salvation",
    role: "Prophet and successor to Elijah",
    category: "Prophets",
    testament: "ot",
    era: "divided-kingdom",
    books: ["1 Kings", "2 Kings"],
    summary: "Elisha received a double portion of Elijah's spirit when his master was taken up to heaven. His ministry overflowed with miracles of mercy, including purifying water, multiplying oil for a widow, raising a boy from death, and healing the leper Naaman.",
    verse: { ref: "2 Kings 2:9", text: "Please let there be a double portion of your spirit on me." },
    whyMatter: "His compassionate miracles reveal a God who cares for the humble and points ahead to Christ.",
    relationships: [
      { relation: "Predecessor", name: "Elijah" }
    ]
  },
  {
    name: "Naaman",
    meaning: "pleasantness",
    role: "Syrian army commander healed of leprosy",
    category: "Other",
    testament: "ot",
    era: "divided-kingdom",
    books: ["2 Kings"],
    summary: "Naaman was a mighty commander of the army of Aram, yet he was a leper. At the word of the prophet Elisha he swallowed his pride and washed seven times in the Jordan, and his flesh was restored so that he confessed there is no God in all the earth but in Israel.",
    verse: { ref: "2 Kings 5:15", text: "Behold, I know that there is no God in all the earth but in Israel." },
    whyMatter: "A foreigner's humble obedience shows that God's grace reaches beyond Israel to the nations.",
    relationships: [
      { relation: "Healed by", name: "Elisha" }
    ]
  },
  {
    name: "Jehu",
    meaning: "the LORD is he",
    role: "King of Israel who purged the house of Ahab",
    category: "Kings & Royalty",
    testament: "ot",
    era: "divided-kingdom",
    books: ["1 Kings", "2 Kings"],
    summary: "Jehu was anointed king by a prophet to carry out judgment on the house of Ahab. Driving furiously, he struck down Joram and Jezebel and destroyed the worship of Baal in Israel, yet he did not fully turn from the sins of Jeroboam.",
    verse: { ref: "2 Kings 9:20", text: "He drives furiously." },
    whyMatter: "He executed God's judgment on Ahab's dynasty, showing that zeal must be matched by wholehearted obedience.",
    relationships: [
      { relation: "Adversary", name: "Jezebel" }
    ]
  },
  {
    name: "Hezekiah",
    meaning: "the LORD strengthens",
    role: "Righteous king of Judah",
    category: "Kings & Royalty",
    testament: "ot",
    era: "divided-kingdom",
    books: ["2 Kings", "Isaiah"],
    summary: "Hezekiah tore down the high places and trusted the LORD as no king of Judah before him. When Assyria besieged Jerusalem, he spread the enemy's threatening letter before God, and the LORD delivered the city; later he was granted fifteen added years of life.",
    verse: { ref: "2 Kings 18:5", text: "He trusted in the LORD, the God of Israel, so that there was none like him among all the kings of Judah after him." },
    whyMatter: "A model of faith under pressure who sought the LORD and saw Jerusalem miraculously spared.",
    relationships: [
      { relation: "Prophet", name: "Isaiah" }
    ]
  },
  {
    name: "Josiah",
    meaning: "the LORD supports",
    role: "Reforming king of Judah",
    category: "Kings & Royalty",
    testament: "ot",
    era: "divided-kingdom",
    books: ["2 Kings"],
    summary: "Josiah became king as a boy and sought the God of David with his whole heart. When the Book of the Law was discovered in the temple, he tore his clothes in grief and led a sweeping reform, purging idolatry and restoring the Passover.",
    verse: { ref: "2 Kings 23:25", text: "Before him there was no king like him, who turned to the LORD with all his heart and with all his soul and with all his might." },
    whyMatter: "His rediscovery of God's Word sparked the last great revival before Judah's exile.",
    relationships: [
      { relation: "Prophet", name: "Jeremiah" }
    ]
  },
  {
    name: "Isaiah",
    meaning: "the LORD is salvation",
    role: "Prophet to Judah",
    category: "Prophets",
    testament: "ot",
    era: "divided-kingdom",
    books: ["Isaiah"],
    summary: "Isaiah saw the LORD high and lifted up in the temple and answered the call to go. Ministering to the kings of Judah, he foretold both judgment and comfort, pointing far ahead to the suffering Servant who would bear the sins of many.",
    verse: { ref: "Isaiah 6:8", text: "Here I am! Send me." },
    whyMatter: "The evangelical prophet whose visions of the Servant and the coming child illumine the gospel.",
    relationships: [
      { relation: "King", name: "Hezekiah" }
    ]
  },
  {
    name: "Jeremiah",
    aka: ["the weeping prophet"],
    meaning: "the LORD exalts",
    role: "Prophet to Judah before and during the exile",
    category: "Prophets",
    testament: "ot",
    era: "exile",
    books: ["Jeremiah"],
    summary: "Jeremiah was set apart before birth to speak God's word to a rebellious Judah. He wept over the nation's coming fall to Babylon, yet he promised a new covenant in which God would write his law on the heart.",
    verse: { ref: "Jeremiah 1:5", text: "Before I formed you in the womb I knew you, and before you were born I consecrated you." },
    whyMatter: "Faithful amid rejection, he announced the new covenant fulfilled in Christ.",
    relationships: [
      { relation: "King", name: "Josiah" }
    ]
  },
  {
    name: "Amos",
    meaning: "burden bearer",
    role: "Shepherd prophet to Israel",
    category: "Prophets",
    testament: "ot",
    era: "divided-kingdom",
    books: ["Amos"],
    summary: "Amos was a shepherd and dresser of sycamore figs whom God called from Judah to prophesy against the northern kingdom. He denounced the wealthy who trampled the poor and warned that religious ritual is worthless without justice.",
    verse: { ref: "Amos 5:24", text: "Let justice roll down like waters, and righteousness like an ever-flowing stream." },
    whyMatter: "The prophet of social justice who insists that true worship bears fruit in righteous living.",
    relationships: []
  },
  {
    name: "Hosea",
    meaning: "salvation",
    role: "Prophet to the northern kingdom of Israel",
    category: "Prophets",
    testament: "ot",
    era: "divided-kingdom",
    books: ["Hosea"],
    summary: "Hosea was told to marry the unfaithful Gomer as a living picture of Israel's spiritual adultery. Through his heartbreak and steadfast love, God revealed his own faithful heart toward a wayward people he refused to give up.",
    verse: { ref: "Hosea 6:6", text: "I desire steadfast love and not sacrifice, the knowledge of God rather than burnt offerings." },
    whyMatter: "His marriage dramatizes God's relentless, covenant love pursuing an unfaithful people.",
    relationships: []
  },
  {
    name: "Micah",
    meaning: "who is like the LORD",
    role: "Prophet to Judah and Israel",
    category: "Prophets",
    testament: "ot",
    era: "divided-kingdom",
    books: ["Micah"],
    summary: "Micah prophesied against the injustice and corruption of both kingdoms while holding out hope for restoration. He foretold that a ruler would come from Bethlehem, and summed up true religion as justice, mercy, and humble walking with God.",
    verse: { ref: "Micah 6:8", text: "He has told you, O man, what is good; and what does the LORD require of you but to do justice, and to love kindness, and to walk humbly with your God?" },
    whyMatter: "He named Bethlehem as the Messiah's birthplace and distilled the heart of godly life.",
    relationships: []
  },
  {
    name: "Jonah",
    meaning: "dove",
    role: "Reluctant prophet sent to Nineveh",
    category: "Prophets",
    testament: "ot",
    era: "divided-kingdom",
    books: ["Jonah"],
    summary: "Jonah fled from God's call to preach to Nineveh and was swallowed by a great fish, from whose belly he cried out and was delivered. When the wicked city repented, he sulked at God's mercy, and the LORD taught him to care for those he had written off.",
    verse: { ref: "Jonah 2:9", text: "Salvation belongs to the LORD!" },
    whyMatter: "His story reveals God's compassion for outsiders and prefigures Christ's three days in the grave.",
    relationships: []
  }
]
