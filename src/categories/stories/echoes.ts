/* Cross-testament echoes: how an Old Testament story is picked up and
 * fulfilled in the New. Keyed by the OT story's exact `title`.
 *
 * `story` is a New Testament story title — it becomes a tappable link when a
 * story by that name exists; otherwise it renders as plain label text.
 * `ref` is the New Testament passage that makes the connection. */
export interface Echo {
  story: string
  ref: string
  note: string
}

export const ECHOES: Record<string, Echo[]> = {
  'The Fall': [
    {
      story: 'The Crucifixion',
      ref: 'Romans 5:18–19',
      note: 'Where the first Adam’s disobedience brought death to all, the last Adam’s obedience brings righteousness and life.',
    },
  ],
  'Noah’s Ark and the Flood': [
    {
      story: 'The Baptism of Jesus',
      ref: '1 Peter 3:20–21',
      note: 'Peter sees the family saved through the waters of the flood as a picture of baptism, which saves through the resurrection of Christ.',
    },
  ],
  'The Call of Abraham': [
    {
      story: 'The Nativity',
      ref: 'Galatians 3:8, 16',
      note: 'The promise that “all nations” would be blessed in Abraham points to his single offspring — Christ — in whom the blessing finally comes to the world.',
    },
  ],
  'God’s Covenant with Abraham': [
    {
      story: 'The Crucifixion',
      ref: 'Romans 4:20–25',
      note: 'Abraham was counted righteous by faith before he had done anything — the same faith by which sinners are justified in the God who raised Jesus.',
    },
  ],
  'The Binding of Isaac': [
    {
      story: 'The Crucifixion',
      ref: 'John 3:16; Hebrews 11:17–19',
      note: 'A father offers his only beloved son on a mountain, and a substitute dies in the son’s place — the pattern the cross completes.',
    },
  ],
  'Joseph and His Brothers': [
    {
      story: 'The Crucifixion',
      ref: 'Genesis 50:20; Acts 7:9–10',
      note: 'Betrayed by his own and later exalted to save many, Joseph says “you meant evil… God meant it for good” — foreshadowing the cross.',
    },
  ],
  'The Passover': [
    {
      story: 'The Crucifixion',
      ref: '1 Corinthians 5:7; John 19:36',
      note: 'A spotless lamb is slain and its blood shelters God’s people from death: “Christ, our Passover lamb, has been sacrificed.”',
    },
  ],
  'Crossing the Red Sea': [
    {
      story: 'The Baptism of Jesus',
      ref: '1 Corinthians 10:1–2',
      note: 'Israel passed through the water out of slavery into new life — which Paul calls being “baptized into Moses,” a shadow of baptism into Christ.',
    },
  ],
  'Manna and Quail': [
    {
      story: 'Feeding the Five Thousand',
      ref: 'John 6:48–51',
      note: 'Bread from heaven kept Israel alive in the wilderness; Jesus declares, “I am the bread of life,” the true bread that gives the world life.',
    },
  ],
  'Water from the Rock': [
    {
      story: 'The Crucifixion',
      ref: '1 Corinthians 10:4',
      note: 'Life-giving water poured from a struck rock — “and the Rock was Christ,” struck for us so that living water might flow.',
    },
  ],
  'The Ten Commandments': [
    {
      story: 'The Sermon on the Mount',
      ref: 'Matthew 5:17',
      note: 'Jesus does not abolish the law but fulfills it, driving it to the heart and embodying its perfect keeping.',
    },
  ],
  'The Bronze Serpent': [
    {
      story: 'The Crucifixion',
      ref: 'John 3:14–15',
      note: 'Jesus applies it to himself: “as Moses lifted up the serpent… so must the Son of Man be lifted up,” that whoever looks in faith may live.',
    },
  ],
  'The Fall of Jericho': [
    {
      story: 'The Crucifixion',
      ref: 'Hebrews 11:30–31',
      note: 'The walls fell “by faith,” and Rahab was spared by faith — an early sign that God rescues all who trust him, Israelite or outsider.',
    },
  ],
  'Ruth and Boaz': [
    {
      story: 'The Nativity',
      ref: 'Matthew 1:5',
      note: 'Boaz the kinsman-redeemer rescues Ruth, a Moabite outsider — and their line runs straight to David and to Jesus, the true Redeemer.',
    },
  ],
  'David and Goliath': [
    {
      story: 'The Triumphal Entry',
      ref: 'Matthew 1:1; 21:9',
      note: 'God saves his people through one anointed champion who fights in their place — a pattern fulfilled in Jesus, the greater Son of David.',
    },
  ],
  'Jonah and the Great Fish': [
    {
      story: 'The Resurrection',
      ref: 'Matthew 12:39–40',
      note: 'Jesus points to “the sign of Jonah”: as Jonah was three days in the fish, so the Son of Man would be three days in the earth before rising.',
    },
  ],
  'Ezekiel’s Valley of Dry Bones': [
    {
      story: 'The Raising of Lazarus',
      ref: 'John 5:25; Romans 8:11',
      note: 'God’s Spirit breathing life into dry bones anticipates the resurrection — the dead hearing the voice of the Son of God and living.',
    },
  ],
}
