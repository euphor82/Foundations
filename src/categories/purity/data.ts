import type { PuritySection } from './types'

/* Content ported verbatim from the standalone Purity walk-through sheet.
 * Verse references are wrapped in [[…]] so the view can render them as
 * tappable ESV chips. Grace-forward, age-appropriate, non-graphic. */
export const SECTIONS: PuritySection[] = [
  {
    id: 'prep', idx: '♥', kick: 'For you, Dad', label: 'Before You Begin', foryou: true, items: [
      { t: 'Pray first — ask God for the right words, a soft tone, and open ears on both sides.' },
      { t: 'Lead with love, not fear. The goal is to draw him toward Christ, not scare him from sin.' },
      { t: 'Make it a conversation, not a lecture. Ask questions and allow for silences.' },
      { t: 'Say early that everything happening in his body is normal and God-designed — it lowers his guard.' },
      { t: "This is the first of many talks. You're opening a door, not closing a subject." },
      { say: true, t: "I want to talk about something every guy goes through growing up. It's a good thing God designed, but it comes with some struggles too. I went through it, and I want to walk through it with you — no shame, no lectures, just us." },
    ],
  },
  {
    id: 'design', idx: '1', kick: 'Foundation', label: "God's Good Design", items: [
      { t: 'Start positive: God made the body and called it “very good” [[Genesis 1:27, 31]].' },
      { t: 'He is fearfully and wonderfully made [[Psalm 139:13-14]]. Puberty is that good design at work.' },
      { t: "Desire itself isn't shameful — it's part of being made in God's image. The question is what he does with it." },
      { say: true, t: "God isn't embarrassed about your body or these new feelings — He designed all of it. Our job isn't to pretend the desires aren't there; it's to learn to steward them." },
    ],
  },
  {
    id: 'lust', idx: '2', kick: 'The heart issue', label: 'Understanding Lust', items: [
      { t: "Temptation is not sin. Jesus was tempted yet never sinned [[Hebrews 4:15]] — he's never condemned just for being tempted." },
      { t: "Lust is welcoming and dwelling on the temptation [[Matthew 5:27-28]]. It's a choice of the heart." },
      { t: "Sin grows when it's fed — catch it at the very first thought [[James 1:14-15]]." },
      { t: 'Guard the heart [[Proverbs 4:23]] and the eyes [[Job 31:1]] [[Psalm 101:3]] — mostly about what he looks at and lingers on.' },
      { say: true, t: "You can't stop a bird from flying over your head — that's temptation. But you don't have to let it build a nest — that's lust. The first isn't sin; the second is a choice." },
    ],
  },
  {
    id: 'control', idx: '3', kick: 'Titus 2:6', label: 'Self-Control as Strength', items: [
      { t: "Paul's charge to young men: be self-controlled [[Titus 2:6]] — a mark of manhood, not a punishment." },
      { t: "Self-control is fruit of the Spirit [[Galatians 5:22-23]] — grown by God, not raw willpower. He's not alone." },
      { t: "A free man isn't mastered by anything [[1 Corinthians 6:12]]. Freedom is being able to say no." },
      { t: "Sometimes flee, don't fight — just walk away [[1 Corinthians 6:18]] [[2 Timothy 2:22]]. Wisdom, not weakness." },
      { t: 'His body belongs to God — a temple of the Spirit [[1 Corinthians 6:19-20]]; also [[1 Thessalonians 4:3-5]] [[Romans 12:1-2]].' },
      { say: true, t: "Self-control isn't God taking the fun away. It's God making you strong enough to be the one in charge of yourself. That's what it means to grow into a man." },
    ],
  },
  {
    id: 'mast', idx: '4', kick: 'Handle honestly', label: 'On Masturbation', items: [
      { t: 'Be honest: the Bible never directly names it. Saying so plainly protects your credibility.' },
      { t: "Don't lean on the Onan story [[Genesis 38:9-10]] — in context it's about refusing family duty, not the act itself." },
      { t: 'Where the concern lands (1): the thought life behind it [[Matthew 5:28]].' },
      { t: '(2): whether it’s mastering him [[1 Corinthians 6:12]] — a habit he runs to instead of God.' },
      { t: '(3): whether it honors God with his body [[1 Corinthians 6:19-20]].' },
      { t: 'Decide in advance how firm to be — faithful Christians differ. Aim at his heart and walk with God, not one act.' },
      { say: true, t: "The bigger question isn't just one action. It's: are you controlled by the Spirit, or by an urge? Are you feeding a thought life that honors God? That's the target." },
      { t: 'Caution: avoid shame that makes him feel dirty — it breeds secrecy. Conviction toward God, yes; shame that drives him into hiding, no.' },
    ],
  },
  {
    id: 'grace', idx: '5', kick: 'When we fall', label: 'Grace When He Stumbles', items: [
      { t: 'He will stumble — every man has. What he believes about God in that moment shapes everything.' },
      { t: "No condemnation in Christ [[Romans 8:1]] — God isn't standing over him in disgust." },
      { t: 'Confession brings cleansing, not rejection [[1 John 1:9]].' },
      { t: "He can come boldly to God, especially when he's blown it [[Hebrews 4:15-16]]." },
      { t: 'His identity is a beloved son — not his struggle.' },
      { say: true, t: "There's nothing you could do that would make me stop loving you, and nothing that makes God stop loving you. If you fall, you come talk to me — you don't hide. We'll walk through it together, every time." },
    ],
  },
  {
    id: 'plan', idx: '6', kick: 'Equip him', label: 'A Practical Battle Plan', items: [
      { t: "There's always a way out — teach him to look for it and take it [[1 Corinthians 10:13]]." },
      { t: 'Fill his mind with Scripture — memorize a verse together [[Psalm 119:9-11]].' },
      { t: 'Guard the inputs — phones and screens. Set up safeguards together, as help, not policing.' },
      { t: 'Bring it into the light — secrecy feeds it, honesty starves it [[James 5:16]].' },
      { t: 'Choose friends wisely [[1 Corinthians 15:33]]; two are better than one [[Ecclesiastes 4:9-12]].' },
      { t: "Replace, don't just resist — fill life with good things [[Philippians 4:8]]." },
      { t: 'Keep talking — he can come to you anytime, about anything.' },
    ],
  },
  {
    id: 'verses', idx: '★', kick: 'Quick tap', label: 'Key Verses', verses: [
      'Titus 2:6', 'Genesis 1:27, 31', 'Psalm 139:13-14', 'Matthew 5:27-28', 'Hebrews 4:15',
      'James 1:14-15', 'Proverbs 4:23', 'Galatians 5:22-23', '1 Corinthians 6:12',
      '1 Corinthians 6:18-20', '2 Timothy 2:22', '1 Corinthians 10:13', 'Psalm 119:9-11',
      'Romans 8:1', '1 John 1:9',
    ],
  },
  {
    id: 'close', idx: '✦', kick: 'Finish here', label: 'Close & Pray', items: [
      { say: true, t: "God made you on purpose, He loves you, and He's given you His Spirit to help you become a strong, self-controlled man. You won't do this perfectly — nobody does, including me. But you're not doing it alone. You've got God, and you've got me, and my door is always open." },
      { t: 'Pray over him before you finish (prayer below).' },
    ],
    prayerItem: 1,
    prayer: "<b>A prayer to close:</b> Father, thank You for my son and the good way You made him. Fill him with Your Spirit. Give him self-control that comes from You, a pure heart, and eyes that honor You. When he's tempted, show him the way out. When he stumbles, remind him there's no condemnation in Christ and draw him back. Help him stand firm, and let him always know how deeply he is loved — by You and by me. In Jesus' name, amen.",
  },
]
