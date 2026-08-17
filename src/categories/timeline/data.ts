import type { Era } from './types'

export const TIMELINE_INTRO =
  'Biblical history is organized here by era rather than exact years. Many dates — especially in the earlier periods — are debated among scholars; where that is the case, a range is shown and flagged. Use this as a map of the storyline, not a precise chronology.'

export const ERAS: Era[] = [
  {
    id: 'patriarchs',
    name: 'Creation & the Patriarchs',
    when: 'Beginnings – c. 1900–1500 BC',
    note: 'The dating of creation and the early patriarchs is deeply debated; the events, not the calendar, are the point.',
    events: [
      {
        title: 'Creation and the Fall',
        when: 'Beginnings',
        disputed: true,
        summary:
          'God creates the heavens, the earth, and humanity in his image. Adam and Eve’s disobedience introduces sin and death, and God promises a deliverer (Genesis 1–3).',
        books: ['Genesis'],
        people: ['Adam & Eve'],
      },
      {
        title: 'The Flood',
        when: 'Primeval period',
        disputed: true,
        summary:
          'In response to human corruption, God sends a flood but preserves Noah’s family and the animals, then covenants never to destroy the earth so again (Genesis 6–9).',
        books: ['Genesis'],
        people: ['Noah'],
      },
      {
        title: 'The Call of Abraham',
        when: 'c. 2000–1800 BC',
        disputed: true,
        summary:
          'God calls Abraham out of Ur and promises him land, descendants, and blessing for all nations — the covenant the rest of Scripture unfolds (Genesis 12).',
        books: ['Genesis'],
        people: ['Abraham'],
      },
      {
        title: 'Isaac, Jacob & Joseph',
        when: 'c. 1900–1600 BC',
        disputed: true,
        summary:
          'The promise passes to Isaac, then Jacob (renamed Israel) and his twelve sons. Joseph, sold into Egypt, rises to power and preserves the family through famine (Genesis 25–50).',
        books: ['Genesis'],
        people: ['Jacob', 'Joseph'],
      },
    ],
  },
  {
    id: 'egypt-exodus',
    name: 'Egypt & the Exodus',
    when: 'c. 1800–1250 BC',
    note: 'Scholars debate the Exodus date, favoring either an “early” (c. 1446 BC) or “late” (c. 1260 BC) date.',
    events: [
      {
        title: 'Slavery in Egypt',
        when: 'c. 1800–1300 BC',
        disputed: true,
        summary:
          'Jacob’s descendants multiply in Egypt but are enslaved by a Pharaoh “who did not know Joseph.” God hears their cry (Exodus 1–2).',
        books: ['Exodus'],
        people: ['Moses'],
      },
      {
        title: 'Moses & the Exodus',
        when: 'c. 1446 or 1260 BC',
        disputed: true,
        summary:
          'God calls Moses at the burning bush and, through ten plagues and the first Passover, delivers Israel out of Egypt and through the sea (Exodus 3–15).',
        books: ['Exodus'],
        people: ['Moses', 'Aaron'],
      },
      {
        title: 'Sinai & the Law',
        when: 'shortly after the Exodus',
        summary:
          'At Mount Sinai God gives the Ten Commandments and the covenant law, and Israel builds the tabernacle where God dwells among them (Exodus 19–40; Leviticus).',
        books: ['Exodus', 'Leviticus'],
        people: ['Moses'],
      },
      {
        title: 'Wilderness Wandering',
        when: '40 years',
        summary:
          'Israel’s unbelief at the border leads to forty years in the wilderness until a new generation is ready to enter the land (Numbers; Deuteronomy).',
        books: ['Numbers', 'Deuteronomy'],
        people: ['Moses', 'Joshua'],
      },
    ],
  },
  {
    id: 'conquest-judges',
    name: 'Conquest & the Judges',
    when: 'c. 1250–1050 BC',
    events: [
      {
        title: 'Entering the Promised Land',
        when: 'c. 1250–1200 BC',
        disputed: true,
        summary:
          'Under Joshua, Israel crosses the Jordan and takes possession of Canaan, and the land is divided among the twelve tribes (Joshua).',
        books: ['Joshua'],
        people: ['Joshua'],
      },
      {
        title: 'The Cycle of the Judges',
        when: 'c. 1200–1050 BC',
        summary:
          'Israel repeatedly falls into idolatry, suffers oppression, cries out, and is rescued by God-raised leaders (“judges”) such as Deborah, Gideon, and Samson (Judges).',
        books: ['Judges'],
        people: ['Deborah', 'Gideon', 'Samson'],
      },
      {
        title: 'Ruth',
        when: 'during the Judges',
        summary:
          'Amid a dark era, a Moabite widow’s faithfulness weaves her into the line of King David — and of the Messiah (Ruth).',
        books: ['Ruth'],
        people: ['Ruth', 'Boaz'],
      },
    ],
  },
  {
    id: 'united-kingdom',
    name: 'The United Kingdom',
    when: 'c. 1050–930 BC',
    events: [
      {
        title: 'Samuel & King Saul',
        when: 'c. 1050–1010 BC',
        summary:
          'Israel demands a king; the prophet Samuel anoints Saul, whose reign begins well but ends in disobedience and decline (1 Samuel).',
        books: ['1 Samuel'],
        people: ['Samuel', 'Saul'],
      },
      {
        title: 'King David',
        when: 'c. 1010–970 BC',
        summary:
          'David, “a man after God’s own heart,” unites the kingdom and makes Jerusalem its capital. God promises him an everlasting throne (2 Samuel 7).',
        books: ['2 Samuel', 'Psalms'],
        people: ['David'],
      },
      {
        title: 'King Solomon & the Temple',
        when: 'c. 970–930 BC',
        summary:
          'Solomon builds the Temple in Jerusalem and the kingdom reaches its peak of wealth and wisdom — but his later idolatry sows division (1 Kings 1–11).',
        books: ['1 Kings', 'Proverbs'],
        people: ['Solomon'],
      },
    ],
  },
  {
    id: 'divided-kingdom',
    name: 'The Divided Kingdom',
    when: 'c. 930–586 BC',
    events: [
      {
        title: 'The Kingdom Splits',
        when: 'c. 930 BC',
        summary:
          'After Solomon, the kingdom divides: Israel (ten tribes) in the north and Judah in the south, each with its own line of mostly unfaithful kings (1 Kings 12).',
        books: ['1 Kings'],
        people: ['Rehoboam', 'Jeroboam'],
      },
      {
        title: 'The Prophets',
        when: 'c. 900–600 BC',
        summary:
          'God sends prophets — Elijah, Elisha, Isaiah, Amos, Hosea, and more — to call his people back to covenant faithfulness and to foretell both judgment and hope.',
        books: ['1 Kings', '2 Kings', 'Isaiah'],
        people: ['Elijah', 'Elisha', 'Isaiah'],
      },
      {
        title: 'Fall of the Northern Kingdom',
        when: '722 BC',
        summary:
          'Assyria conquers Israel and scatters the ten northern tribes for their persistent idolatry (2 Kings 17).',
        books: ['2 Kings'],
        people: [],
      },
    ],
  },
  {
    id: 'exile',
    name: 'The Exile',
    when: '586–538 BC',
    events: [
      {
        title: 'The Fall of Jerusalem',
        when: '586 BC',
        summary:
          'Babylon destroys Jerusalem and the Temple and carries Judah into exile — the covenant judgment the prophets had long warned of (2 Kings 25; Lamentations).',
        books: ['2 Kings', 'Jeremiah', 'Lamentations'],
        people: ['Nebuchadnezzar', 'Jeremiah'],
      },
      {
        title: 'Faith in a Foreign Land',
        when: '586–538 BC',
        summary:
          'In Babylon, Daniel and Ezekiel keep faith and receive visions of God’s sovereignty and future restoration (Daniel; Ezekiel).',
        books: ['Daniel', 'Ezekiel'],
        people: ['Daniel', 'Ezekiel'],
      },
    ],
  },
  {
    id: 'return',
    name: 'The Return',
    when: '538–430 BC',
    events: [
      {
        title: 'The Decree of Cyrus',
        when: '538 BC',
        summary:
          'Persia conquers Babylon, and Cyrus lets the exiles return to Judah — the beginning of restoration (Ezra 1).',
        books: ['Ezra'],
        people: ['Cyrus', 'Zerubbabel'],
      },
      {
        title: 'Rebuilding the Temple',
        when: 'c. 520–516 BC',
        summary:
          'Encouraged by the prophets Haggai and Zechariah, the returned exiles rebuild the Temple (Ezra 3–6; Haggai).',
        books: ['Ezra', 'Haggai', 'Zechariah'],
        people: ['Zerubbabel'],
      },
      {
        title: 'Ezra & Nehemiah',
        when: 'c. 458–430 BC',
        summary:
          'Ezra restores the Law and Nehemiah rebuilds Jerusalem’s walls, re-forming the people around God’s word (Ezra 7–10; Nehemiah).',
        books: ['Nehemiah', 'Esther'],
        people: ['Ezra', 'Nehemiah'],
      },
    ],
  },
  {
    id: 'intertestamental',
    name: 'Between the Testaments',
    when: 'c. 430–5 BC',
    note: 'The roughly 400 “silent years” between Malachi and the New Testament — not covered by the Protestant canon, but crucial background to the world Jesus entered.',
    events: [
      {
        title: 'Greek Rule & Hellenization',
        when: 'from 332 BC',
        summary:
          'Alexander the Great’s conquests spread Greek language and culture across the region, later giving the early Church a common tongue for the gospel.',
        books: [],
        people: ['Alexander the Great'],
      },
      {
        title: 'The Maccabean Revolt',
        when: '167–160 BC',
        summary:
          'When Greek rulers desecrate the Temple, the Maccabees lead a revolt and win a period of Jewish independence (remembered at Hanukkah).',
        books: [],
        people: ['Judas Maccabeus'],
      },
      {
        title: 'Roman Rule',
        when: 'from 63 BC',
        summary:
          'Rome takes control of Judea, installing rulers like Herod the Great. Synagogues, and parties such as the Pharisees and Sadducees, shape the setting of the Gospels.',
        books: [],
        people: ['Herod the Great'],
      },
    ],
  },
  {
    id: 'life-of-christ',
    name: 'The Life of Christ',
    when: 'c. 6/4 BC – AD 30/33',
    note: 'Jesus was likely born a few years “BC” due to a later calendar miscalculation; the year of the crucifixion is debated between AD 30 and 33.',
    events: [
      {
        title: 'The Birth of Jesus',
        when: 'c. 6–4 BC',
        disputed: true,
        summary:
          'The Word becomes flesh. Jesus is born in Bethlehem, announced to shepherds and sought by magi (Matthew 1–2; Luke 1–2; John 1).',
        books: ['John'],
        people: ['Jesus'],
      },
      {
        title: 'Public Ministry',
        when: 'c. AD 27–30',
        summary: 'Jesus teaches, works signs, and gathers disciples, revealing himself through his words and works (the four Gospels).',
        books: ['John'],
        people: ['Jesus', 'John the Baptist'],
      },
      {
        title: 'Crucifixion & Resurrection',
        when: 'c. AD 30–33',
        disputed: true,
        summary: 'Jesus is crucified in Jerusalem and rises on the third day — the center of the Christian gospel (John 18–21).',
        books: ['John'],
        people: ['Jesus', 'Thomas'],
      },
    ],
  },
  {
    id: 'early-church',
    name: 'The Early Church',
    when: 'c. AD 30 – 100',
    events: [
      {
        title: 'Pentecost',
        when: 'c. AD 30',
        summary: 'The Holy Spirit is poured out on the disciples, and the Church is born as thousands believe (Acts 2).',
        books: [],
        people: [],
      },
      {
        title: "Paul's Missionary Journeys",
        when: 'c. AD 46–60',
        summary:
          'Paul plants churches across the Roman world and writes letters — including Romans — that shape Christian belief and practice (Acts 13–28).',
        books: ['Romans'],
        people: ['Paul', 'Phoebe'],
      },
      {
        title: 'The New Testament Written',
        when: 'c. AD 48–95',
        summary:
          'The apostles and their circle write the Gospels and letters that, gathered together, become the New Testament.',
        books: ['John', 'Romans'],
        people: ['Paul'],
      },
    ],
  },
]

const ERA_BY_ID = new Map(ERAS.map((e) => [e.id, e]))
export const hasEra = (id: string) => ERA_BY_ID.has(id)
export const eraName = (id: string) => ERA_BY_ID.get(id)?.name ?? id
