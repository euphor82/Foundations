/* Data + helpers for the Discover tab: a verse of the day, daily-featured
 * items, and random "surprise me" picks. Rotation is deterministic by the
 * day number so everyone sees the same thing on a given day. */

export interface Verse { ref: string; text: string }

/** Well-loved verses (ESV) for the verse of the day. */
export const VERSES: Verse[] = [
  { ref: 'John 3:16', text: 'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.' },
  { ref: 'Romans 8:28', text: 'And we know that for those who love God all things work together for good, for those who are called according to his purpose.' },
  { ref: 'Philippians 4:6–7', text: 'Do not be anxious about anything, but in everything by prayer and supplication with thanksgiving let your requests be made known to God. And the peace of God, which surpasses all understanding, will guard your hearts and your minds in Christ Jesus.' },
  { ref: 'Proverbs 3:5–6', text: 'Trust in the LORD with all your heart, and do not lean on your own understanding. In all your ways acknowledge him, and he will make straight your paths.' },
  { ref: 'Isaiah 40:31', text: 'But they who wait for the LORD shall renew their strength; they shall mount up with wings like eagles; they shall run and not be weary; they shall walk and not faint.' },
  { ref: 'Psalm 23:1', text: 'The LORD is my shepherd; I shall not want.' },
  { ref: 'Jeremiah 29:11', text: 'For I know the plans I have for you, declares the LORD, plans for welfare and not for evil, to give you a future and a hope.' },
  { ref: 'Matthew 11:28', text: 'Come to me, all who labor and are heavy laden, and I will give you rest.' },
  { ref: 'Joshua 1:9', text: 'Be strong and courageous. Do not be frightened, and do not be dismayed, for the LORD your God is with you wherever you go.' },
  { ref: 'Romans 5:8', text: 'But God shows his love for us in that while we were still sinners, Christ died for us.' },
  { ref: 'Ephesians 2:8–9', text: 'For by grace you have been saved through faith. And this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.' },
  { ref: 'Psalm 46:1', text: 'God is our refuge and strength, a very present help in trouble.' },
  { ref: '1 Corinthians 13:4–5', text: 'Love is patient and kind; love does not envy or boast; it is not arrogant or rude. It does not insist on its own way; it is not irritable or resentful.' },
  { ref: 'John 14:6', text: 'Jesus said to him, “I am the way, and the truth, and the life. No one comes to the Father except through me.”' },
  { ref: 'Galatians 2:20', text: 'I have been crucified with Christ. It is no longer I who live, but Christ who lives in me. And the life I now live in the flesh I live by faith in the Son of God, who loved me and gave himself for me.' },
  { ref: 'Psalm 119:105', text: 'Your word is a lamp to my feet and a light to my path.' },
  { ref: 'Romans 12:2', text: 'Do not be conformed to this world, but be transformed by the renewal of your mind, that by testing you may discern what is the will of God, what is good and acceptable and perfect.' },
  { ref: '2 Corinthians 5:17', text: 'Therefore, if anyone is in Christ, he is a new creation. The old has passed away; behold, the new has come.' },
  { ref: 'Hebrews 11:1', text: 'Now faith is the assurance of things hoped for, the conviction of things not seen.' },
  { ref: 'Matthew 6:33', text: 'But seek first the kingdom of God and his righteousness, and all these things will be added to you.' },
  { ref: 'Philippians 4:13', text: 'I can do all things through him who strengthens me.' },
  { ref: 'Psalm 27:1', text: 'The LORD is my light and my salvation; whom shall I fear? The LORD is the stronghold of my life; of whom shall I be afraid?' },
  { ref: '1 John 1:9', text: 'If we confess our sins, he is faithful and just to forgive us our sins and to cleanse us from all unrighteousness.' },
  { ref: 'Isaiah 41:10', text: 'Fear not, for I am with you; be not dismayed, for I am your God; I will strengthen you, I will help you, I will uphold you with my righteous right hand.' },
  { ref: 'Psalm 34:8', text: 'Oh, taste and see that the LORD is good! Blessed is the man who takes refuge in him!' },
  { ref: 'Lamentations 3:22–23', text: 'The steadfast love of the LORD never ceases; his mercies never come to an end; they are new every morning; great is your faithfulness.' },
  { ref: 'John 1:1', text: 'In the beginning was the Word, and the Word was with God, and the Word was God.' },
  { ref: 'Psalm 51:10', text: 'Create in me a clean heart, O God, and renew a right spirit within me.' },
  { ref: 'Proverbs 18:10', text: 'The name of the LORD is a strong tower; the righteous man runs into it and is safe.' },
  { ref: 'Galatians 5:22–23', text: 'But the fruit of the Spirit is love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, self-control; against such things there is no law.' },
  { ref: '1 Peter 5:7', text: 'Casting all your anxieties on him, because he cares for you.' },
  { ref: 'Psalm 121:1–2', text: 'I lift up my eyes to the hills. From where does my help come? My help comes from the LORD, who made heaven and earth.' },
  { ref: 'Micah 6:8', text: 'He has told you, O man, what is good; and what does the LORD require of you but to do justice, and to love kindness, and to walk humbly with your God?' },
  { ref: 'John 10:10', text: 'I came that they may have life and have it abundantly.' },
  { ref: 'Romans 6:23', text: 'For the wages of sin is death, but the free gift of God is eternal life in Christ Jesus our Lord.' },
  { ref: 'Psalm 37:4', text: 'Delight yourself in the LORD, and he will give you the desires of your heart.' },
  { ref: 'Colossians 3:23', text: 'Whatever you do, work heartily, as for the Lord and not for men.' },
  { ref: 'Matthew 5:16', text: 'Let your light shine before others, so that they may see your good works and give glory to your Father who is in heaven.' },
  { ref: '2 Timothy 1:7', text: 'For God gave us a spirit not of fear but of power and love and self-control.' },
  { ref: 'Revelation 21:4', text: 'He will wipe away every tear from their eyes, and death shall be no more, neither shall there be mourning, nor crying, nor pain anymore, for the former things have passed away.' },
]

/** The current day number, anchored to LOCAL midnight (so it rolls over at the
 *  same moment the streak day does). */
export const dayNumber = () => {
  const d = new Date()
  return Math.floor(new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime() / 86_400_000)
}

/** Deterministic pick for the day, spread by a coprime stride per feature. */
export function pickOfDay<T>(arr: T[], stride: number): T {
  return arr[(dayNumber() * stride) % arr.length]
}

/** A random element (for "surprise me"). */
export function pickRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)]
}
