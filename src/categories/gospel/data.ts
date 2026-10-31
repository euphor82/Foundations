import type { GospelPoint, RoadStop, RespondStep } from './types'

/* Verse text is the World English Bible (WEB), which is in the public domain,
 * so it can be bundled and shown inline (no browser needed). Each entry pairs a
 * short topical "gist" (quick-view lead-in) with the full WEB text. */
export interface VerseEntry {
  gist: string
  text: string
}

export const WEB_NOTE = 'Verses shown in the World English Bible (public domain).'

export const VERSES: Record<string, VerseEntry> = {
  'Genesis 1:1': { gist: 'God created everything', text: 'In the beginning, God created the heavens and the earth.' },
  'Psalm 139:13-14': { gist: 'God made you, wonderfully', text: 'For you formed my inmost being. You knit me together in my mother’s womb. I will give thanks to you, for I am fearfully and wonderfully made. Your works are wonderful. My soul knows that very well.' },
  '1 John 4:8': { gist: 'God is love', text: 'He who doesn’t love doesn’t know God, for God is love.' },
  'Revelation 4:11': { gist: 'God is worthy; He made all things', text: '“Worthy are you, our Lord and our God, the Holy One, to receive the glory, the honor, and the power, for you created all things, and because of your desire they existed, and were created!”' },
  'Romans 3:23': { gist: 'All have sinned', text: 'for all have sinned, and fall short of the glory of God;' },
  'Isaiah 59:2': { gist: 'Sin separates us from God', text: 'But your iniquities have separated you and your God, and your sins have hidden his face from you, so that he will not hear.' },
  'Romans 6:23': { gist: 'Sin earns death; God gives life', text: 'For the wages of sin is death, but the free gift of God is eternal life in Christ Jesus our Lord.' },
  'Ephesians 2:1-3': { gist: 'Dead in sin apart from God', text: 'You were made alive when you were dead in your transgressions and sins, in which you once walked according to the course of this world, according to the prince of the power of the air, the spirit who now works in the children of disobedience. We also all once lived among them in the lusts of our flesh, doing the desires of the flesh and of the mind, and were by nature children of wrath, even as the rest.' },
  'John 3:16': { gist: 'God gave His Son for us', text: 'For God so loved the world, that he gave his one and only Son, that whoever believes in him should not perish, but have eternal life.' },
  'Romans 5:8': { gist: 'Christ died for us while we were sinners', text: 'But God commends his own love toward us, in that while we were yet sinners, Christ died for us.' },
  '1 Corinthians 15:3-4': { gist: 'Christ died, was buried, and rose', text: 'For I delivered to you first of all that which I also received: that Christ died for our sins according to the Scriptures, that he was buried, that he was raised on the third day according to the Scriptures,' },
  '2 Corinthians 5:21': { gist: 'He took our sin; we get His righteousness', text: 'For him who knew no sin he made to be sin on our behalf; so that in him we might become the righteousness of God.' },
  'John 14:6': { gist: 'Jesus is the only way to the Father', text: 'Jesus said to him, “I am the way, the truth, and the life. No one comes to the Father, except through me.' },
  'Mark 1:15': { gist: 'Repent and believe the Good News', text: 'and saying, “The time is fulfilled, and God’s Kingdom is at hand! Repent, and believe in the Good News.”' },
  'Romans 10:9-10': { gist: 'Confess and believe → saved', text: 'that if you will confess with your mouth that Jesus is Lord, and believe in your heart that God raised him from the dead, you will be saved. For with the heart, one believes resulting in righteousness; and with the mouth confession is made resulting in salvation.' },
  'Ephesians 2:8-9': { gist: 'Saved by grace through faith — not works', text: 'for by grace you have been saved through faith, and that not of yourselves; it is the gift of God, not of works, that no one would boast.' },
  'John 1:12': { gist: 'Receive Him → become God’s child', text: 'But as many as received him, to them he gave the right to become God’s children, to those who believe in his name:' },
  'Romans 10:13': { gist: 'Call on the Lord → saved', text: 'For, “Whoever will call on the name of the Lord will be saved.”' },
  'Acts 3:19': { gist: 'Repent, and sins are wiped out', text: '“Repent therefore, and turn again, that your sins may be blotted out, so that there may come times of refreshing from the presence of the Lord,' },
  'Romans 10:9': { gist: 'Confess Jesus as Lord → saved', text: 'that if you will confess with your mouth that Jesus is Lord, and believe in your heart that God raised him from the dead, you will be saved.' },
  'Acts 4:12': { gist: 'Salvation in no one but Jesus', text: 'There is salvation in none other, for neither is there any other name under heaven, that is given among men, by which we must be saved!' },
  '1 John 1:9': { gist: 'Confess → He forgives and cleanses', text: 'If we confess our sins, he is faithful and righteous to forgive us the sins, and to cleanse us from all unrighteousness.' },
  'Matthew 19:14': { gist: 'Jesus welcomes children', text: 'But Jesus said, “Allow the little children, and don’t forbid them to come to me; for the Kingdom of Heaven belongs to ones like these.”' },
  'Titus 3:5': { gist: 'Saved by His mercy, not our works', text: 'not by works of righteousness which we did ourselves, but according to his mercy, he saved us through the washing of regeneration and renewing by the Holy Spirit,' },
  'Romans 3:28': { gist: 'Justified by faith, apart from works', text: 'We maintain therefore that a man is justified by faith apart from the works of the law.' },
}

export const GOSPEL_INTRO =
  'A simple, memorable guide for sharing the good news of Jesus. Four movements — ' +
  'God · Sin · Christ · Response — each with Scripture behind it. Keep it short; ' +
  'expand only as the conversation needs. Tap any reference to read the verse right here.'

/** The whole message in a single breath — easy to recall under pressure. */
export const ONE_SENTENCE =
  'God made you and loves you; our sin separates us from Him; Jesus died in our place ' +
  'and rose again; and the moment you turn from sin and trust Him, you are saved — by ' +
  'grace alone, through faith alone, never by anything you do.'

/** The heart of the Protestant gospel — kept front and center. */
export const GRACE_TITLE = 'Grace alone, through faith alone'
export const GRACE_NOTE =
  'Salvation is God’s free gift, received by grace alone through faith alone in Christ ' +
  'alone. It can never be earned by good works, religion, or anything in us — so there ' +
  'is no room for boasting, and no one is ever “good enough.” We simply trust what Jesus ' +
  'has already done.'
export const GRACE_VERSES = ['Ephesians 2:8-9', 'Titus 3:5', 'Romans 3:28']

/** The memorable 4-beat spine (adult). */
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
    summary: 'Turn from sin and trust Jesus alone — and receive new life as a free gift.',
    points: [
      'Repent: turn from sin and turn to God.',
      'Believe and confess Jesus as Lord, risen from the dead.',
      'Salvation is received by grace through faith — never earned by our works.',
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
  'again. I turn from my sin and trust Him alone — not my own works — to save me. Be my ' +
  'Lord and my Savior. Thank You for forgiving me and giving me new life. In Jesus’ name, amen.'

export const PRAYER_NOTE =
  'A prayer doesn’t save — trusting Jesus does. These words just put that faith into words.'

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

/* ---------- Children's version ---------- */

export const CHILD_INTRO =
  'Simple words to share Jesus with a child. Keep it short, ask what they think, and let ' +
  'them know there’s no pressure — God loves them no matter what. Tap a verse to read it here.'

export const CHILD_WELCOME_VERSE = 'Matthew 19:14'

export const CHILD_POINTS: GospelPoint[] = [
  {
    key: '1',
    title: 'God made you and loves you',
    summary: 'God made you on purpose, and He loves you so much.',
    points: [
      'God made the whole world — and He made you.',
      'He knows you and loves you more than anyone ever could.',
    ],
    verses: ['Genesis 1:1', 'Psalm 139:13-14', 'John 3:16'],
  },
  {
    key: '2',
    title: 'Everybody does wrong things — that’s sin',
    summary: 'We all think, say, and do wrong things. That’s called sin.',
    points: [
      'Nobody is perfect — we all do wrong things sometimes.',
      'Sin is a problem because it keeps us away from God.',
    ],
    verses: ['Romans 3:23'],
  },
  {
    key: '3',
    title: 'Jesus came to rescue us',
    summary: 'Jesus never did anything wrong, but He died for us — and came back to life!',
    points: [
      'Jesus loves us so much He took the punishment for our sin on the cross.',
      'Three days later He rose again — Jesus is alive!',
    ],
    verses: ['John 3:16', '1 Corinthians 15:3-4'],
  },
  {
    key: '4',
    title: 'You can trust Jesus',
    summary: 'You can’t be good enough to earn it — it’s God’s gift. Just trust Jesus.',
    points: [
      'Tell God you’re sorry for the wrong things you’ve done.',
      'Believe Jesus died for you and is alive.',
      'Ask Him to be your Savior and forever friend — and He makes you His child.',
    ],
    verses: ['John 1:12', 'Romans 10:9', '1 John 1:9', 'Ephesians 2:8-9'],
  },
]

export const CHILD_PRAYER =
  'Dear God, thank You for loving me. I’m sorry for the wrong things I’ve done. I believe ' +
  'Jesus died for me and came back to life. Please forgive me and be my Savior and friend ' +
  'forever. Thank You, God. Amen.'

export const CHILD_PRAYER_NOTE =
  'The words don’t make it happen — trusting Jesus does. A child can pray this in their own words.'

export const CHILD_TIPS: string[] = [
  'Use simple words and short sentences — one idea at a time.',
  'Ask what they think, and let them ask questions.',
  'Lead with God’s love — no fear, no pressure.',
  'Tell them why you love Jesus.',
  'It’s okay to talk about it again and again — this is a first conversation, not the only one.',
  'Pray together, and celebrate their interest.',
]
