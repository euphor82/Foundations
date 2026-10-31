import type { GospelPoint, RoadStop, RespondStep } from './types'

export const GOSPEL_INTRO =
  'A simple, memorable guide for sharing the good news of Jesus. Four movements — ' +
  'God · Sin · Christ · Response — each with Scripture behind it. Keep it short; ' +
  'expand only as the conversation needs. Tap any reference to read it in the ESV.'

/** The whole message in a single breath — easy to recall under pressure. */
export const ONE_SENTENCE =
  'God made you and loves you; sin has separated us from Him; Jesus died in our place ' +
  'and rose again; turn from sin and trust Him — and you will be forgiven and given eternal life.'

/** The memorable 4-beat spine. */
export const POINTS: GospelPoint[] = [
  {
    key: 'God',
    title: 'God — our holy, loving Creator',
    summary: 'God made us and everything, and He made us to know Him.',
    points: [
      'God is good, holy, and loving — the King over all.',
      'He created us on purpose, to be in relationship with Him.',
      'Because He is our Maker, we owe Him our trust and worship.',
    ],
    verses: ['Genesis 1:1', 'Psalm 139:13-14', '1 John 4:8', 'Revelation 4:11'],
  },
  {
    key: 'Sin',
    title: 'Sin — the broken relationship',
    summary: 'We have all turned from God, and sin separates us from Him.',
    points: [
      'Everyone has sinned and falls short of God’s glory.',
      'Sin cuts us off from a holy God — and we can’t fix it ourselves.',
      'The just penalty for sin is death: eternal separation from God.',
    ],
    verses: ['Romans 3:23', 'Isaiah 59:2', 'Romans 6:23', 'Ephesians 2:1-3'],
  },
  {
    key: 'Christ',
    title: 'Christ — God’s rescue',
    summary: 'Jesus lived, died, and rose to pay for sin in our place.',
    points: [
      'Out of love, God sent His Son, Jesus — fully God and fully man.',
      'Jesus lived without sin, died on the cross for us, and rose again.',
      'He paid sin’s penalty and defeated death — the only way to the Father.',
    ],
    verses: ['John 3:16', 'Romans 5:8', '1 Corinthians 15:3-4', '2 Corinthians 5:21', 'John 14:6'],
  },
  {
    key: 'Response',
    title: 'Response — repent and believe',
    summary: 'Turn from sin and trust Jesus alone — and receive new life.',
    points: [
      'Repent: turn from sin and turn to God.',
      'Believe and confess Jesus as Lord, risen from the dead.',
      'Salvation is a free gift, by grace through faith — not earned by good works.',
    ],
    verses: ['Mark 1:15', 'Romans 10:9-10', 'Ephesians 2:8-9', 'John 1:12'],
  },
]

/** A well-worn, ordered path of verses — great for memory and recall. */
export const ROMANS_ROAD: RoadStop[] = [
  { ref: 'Romans 3:23', note: 'All have sinned and fall short of God’s glory.' },
  { ref: 'Romans 6:23', note: 'Sin earns death; God’s free gift is eternal life in Christ.' },
  { ref: 'Romans 5:8', note: 'Christ died for us while we were still sinners.' },
  { ref: 'Romans 10:9-10', note: 'Confess Jesus as Lord, believe He rose — and be saved.' },
  { ref: 'Romans 10:13', note: 'Everyone who calls on the Lord will be saved.' },
]

/** A → B → C — a simple way to walk through a response. */
export const RESPOND: RespondStep[] = [
  { letter: 'A', title: 'Admit', detail: 'Admit you have sinned and turn from it.', verses: ['Romans 3:23', 'Acts 3:19'] },
  { letter: 'B', title: 'Believe', detail: 'Believe Jesus died for you and rose again.', verses: ['Romans 10:9', 'John 3:16'] },
  { letter: 'C', title: 'Confess', detail: 'Confess Jesus as Lord and call on Him.', verses: ['Romans 10:9-10', 'Romans 10:13'] },
]

export const PRAYER =
  'God, I know I have sinned and I need You. I believe Jesus died for my sins and rose ' +
  'again. I turn from my sin and trust Him alone. Be my Lord and my Savior. Thank You for ' +
  'forgiving me and giving me new life. In Jesus’ name, amen.'

export const PRAYER_NOTE =
  'A prayer doesn’t save — trusting Jesus does. These words just put that trust into words.'

/** Short list worth committing to memory. */
export const MEMORY_VERSES = [
  'John 3:16', 'Romans 3:23', 'Romans 6:23', 'Romans 5:8', 'Ephesians 2:8-9',
  'Romans 10:9', 'John 14:6', '2 Corinthians 5:21', 'Acts 4:12', '1 John 1:9',
]

export const TIPS: string[] = [
  'Pray first — only God’s Spirit convicts and saves.',
  'Listen and ask questions; meet the person where they are.',
  'Tell your own story — what Jesus has done for you.',
  'Keep Jesus at the center; it’s good news, not an argument to win.',
  'Be gentle and respectful, and leave the results to God.',
  'Give them a Gospel of John to read, and help them find a church.',
]
