import type { Religion } from '../types'

/* Additional movements and new religious movements, described fairly on their
 * own terms and then contrasted with historic Christianity. Each entry belongs
 * to the 'Movements & new religions' group. */
export const MORE_MOVEMENTS: Religion[] = [
  {
    name: 'Christian Science',
    group: 'Movements & new religions',
    adherents: 'Estimates vary; a small and declining movement (likely under 100,000 worldwide).',
    founder: 'Mary Baker Eddy',
    origin:
      'Founded in the United States in 1879, growing out of Mary Baker Eddy’s account of her healing and her 1875 book "Science and Health with Key to the Scriptures," which she taught alongside the Bible.',
    god: 'God is understood as infinite Mind, Spirit, Principle, Life, Truth, and Love — the only true reality. Matter is regarded as unreal.',
    texts: 'The Bible, interpreted through Eddy’s "Science and Health with Key to the Scriptures," which is treated as the authoritative key.',
    salvation:
      'Salvation is coming to understand that sin, sickness, and death have no real existence, and so demonstrating the power of divine Mind over the illusion of matter.',
    afterlife:
      'Death itself is regarded as part of the illusion of mortal mind to be finally overcome; existence continues as spiritual progress toward the full realization of oneness with God.',
    differences: [
      'Historic Christianity confesses that the material world is real and God-made ("very good"), and that Christ took on real flesh; Christian Science treats matter, sin, sickness, and death as illusions of "mortal mind."',
      'Christianity teaches that Christ’s death on the cross is a real, substitutionary atonement for sin; Christian Science reinterprets the cross and denies a literal atoning sacrifice.',
      'Christianity reads Scripture as the final authority; Christian Science reads the Bible through the controlling lens of Eddy’s "Science and Health."',
    ],
    shared:
      'Christian Science speaks earnestly of God as Love, values the Bible, prizes prayer, and longs for healing and freedom from suffering — genuine concerns it shares with Christianity, even where its answers diverge.',
    contrasts: [
      {
        belief: 'Sin is not a real moral reality but an error of mortal mind, an illusion to be corrected by right understanding.',
        response:
          'Scripture treats sin as real and universal, and self-deception about it as its own danger. Denying sin does not heal it; honest confession meets a God who forgives.',
        verse: {
          ref: '1 John 1:8-9',
          text: 'If we say we have no sin, we deceive ourselves, and the truth is not in us. If we confess our sins, he is faithful and just to forgive us our sins and to cleanse us from all unrighteousness.',
        },
      },
      {
        belief: 'The material world, the body, sickness, and death are unreal — appearances of mortal mind rather than true reality.',
        response:
          'God made a real, physical world and called it good, and the Son of God took on real flesh. Christian hope is not escape from matter but its redemption and resurrection.',
        verse: {
          ref: 'John 1:14',
          text: 'And the Word became flesh and dwelt among us, and we have seen his glory, glory as of the only Son from the Father, full of grace and truth.',
        },
      },
      {
        belief: 'Christ’s death is not a substitutionary payment for sin; the atonement is reinterpreted as at-one-ment with divine Mind.',
        response:
          'The cross was a real bearing of real sin in our place — his wounds, our healing. It is the heart of the gospel, not a symbol to be explained away.',
        verse: {
          ref: '1 Peter 2:24',
          text: 'He himself bore our sins in his body on the tree, that we might die to sin and live to righteousness. By his wounds you have been healed.',
        },
      },
      {
        belief: 'Eddy’s "Science and Health" is the divinely given key without which the Bible cannot be rightly understood.',
        response:
          'Scripture presents itself as sufficient and complete for salvation and godliness, needing no later book as its indispensable key. A key that reverses its plain meaning is a different message.',
        verse: {
          ref: '2 Timothy 3:16-17',
          text: 'All Scripture is breathed out by God and profitable for teaching, for reproof, for correction, and for training in righteousness, that the man of God may be complete, equipped for every good work.',
        },
      },
    ],
    see_also: ['Sin', 'Atonement', 'Salvation', 'Resurrection', 'Grace'],
  },
  {
    name: 'Unitarian Universalism',
    group: 'Movements & new religions',
    adherents: 'Estimates vary; a few hundred thousand worldwide, concentrated in North America.',
    founder:
      'No single founder; a modern movement formed in 1961 by the merger of the American Unitarian Association and the Universalist Church of America, with older roots in Unitarian and Universalist thought.',
    origin:
      'Grew out of two streams — Unitarianism (denying the Trinity) and Universalism (teaching universal salvation) — that consolidated into a deliberately pluralist, non-creedal movement.',
    god: 'No required belief about God: members range from theists to agnostics, humanists, and pantheists. The Trinity and the unique deity of Christ are not affirmed.',
    texts:
      'No single authoritative scripture; the tradition draws on many "sources," including the Bible, other world scriptures, philosophy, science, and personal experience.',
    salvation:
      'Salvation is not defined by any one path; the emphasis falls on ethical living, human dignity, justice, and a free and responsible search for truth and meaning.',
    afterlife: 'No fixed teaching; views vary widely from hopeful agnosticism to belief in some continuation, with no required doctrine.',
    differences: [
      'Historic Christianity confesses one God in three persons — Father, Son, and Holy Spirit; Unitarian Universalism denies the Trinity and does not affirm the deity of Christ.',
      'Christianity holds that Jesus is the one way to the Father; Unitarian Universalism affirms many paths and rejects any exclusive claim.',
      'Christianity is grounded in a defined confession of faith; Unitarian Universalism is non-creedal and treats binding doctrine as unnecessary.',
    ],
    shared:
      'Unitarian Universalism takes moral seriousness, human dignity, justice, and honest inquiry to heart, and welcomes many who are wounded or searching — concerns Christians can affirm even while parting on the person of Christ and the way of salvation.',
    contrasts: [
      {
        belief: 'God is a single undifferentiated being, or an open question; the Trinity is not affirmed.',
        response:
          'Scripture reveals the one God as Father, Son, and Holy Spirit — the Word who was with God and was God. The oneness of God is not less than this, but fuller.',
        verse: {
          ref: 'John 1:1',
          text: 'In the beginning was the Word, and the Word was with God, and the Word was God.',
        },
      },
      {
        belief: 'There are many valid paths to God and to truth; no single way is exclusive.',
        response:
          'Jesus makes an unavoidable claim: he is not one path among many but the way, the truth, and the life. His exclusivity is not narrowness but a rescue offered to all.',
        verse: {
          ref: 'John 14:6',
          text: 'Jesus said to him, “I am the way, and the truth, and the life. No one comes to the Father except through me.”',
        },
      },
      {
        belief: 'Salvation, if the word is used at all, is a matter of ethical living rather than reconciliation to God through Christ.',
        response:
          'Salvation is found in no one else; it comes as a gift through the name of Jesus, not as the sum of good living. Good works flow from that rescue but cannot replace it.',
        verse: {
          ref: 'Acts 4:12',
          text: 'And there is salvation in no one else, for there is no other name under heaven given among men by which we must be saved.',
        },
      },
    ],
    see_also: ['Trinity', 'Salvation', 'Grace'],
  },
  {
    name: 'Scientology',
    group: 'Movements & new religions',
    adherents: 'Estimates vary widely and are disputed; independent figures suggest a small membership, likely in the tens of thousands.',
    founder: 'L. Ron Hubbard',
    origin:
      'Developed by science-fiction writer L. Ron Hubbard in the 1950s, growing out of his 1950 self-help system "Dianetics" into a formal new religious movement organized as the Church of Scientology.',
    god: 'No defined doctrine of God is required; the concept of a Supreme Being is left to the individual. The focus rests on the person as a "thetan," an immortal spiritual being.',
    texts: 'The writings and recorded lectures of L. Ron Hubbard, including "Dianetics," treated as scripture; higher-level teachings are confidential and released only in stages.',
    salvation:
      'Progress ("going Clear" and advancing up "the Bridge to Total Freedom") is pursued through "auditing," a counseling process meant to clear the mind of harmful past impressions ("engrams"), including from past lives.',
    afterlife:
      'The thetan is regarded as immortal and as having lived many past lives, moving from body to body across vast spans of time; the goal is freedom and rehabilitation of the thetan’s native abilities.',
    differences: [
      'Historic Christianity confesses one eternal Creator God to whom all are accountable; Scientology leaves God undefined and centers on the self as an immortal thetan.',
      'Christianity teaches one life followed by judgment; Scientology teaches reincarnation of the thetan through many past lives.',
      'Christianity offers salvation freely by grace through Christ; Scientology offers advancement through paid auditing and graded, secret higher teachings.',
    ],
    shared:
      'Scientology takes seriously that people are more than matter, that the past wounds the present, and that human beings long to be free and whole — real intuitions, though its account of God, Christ, and salvation differs sharply.',
    contrasts: [
      {
        belief: 'The human being is at heart an immortal, self-existent spiritual being (a thetan) with god-like potential to be recovered.',
        response:
          'There is one God, and we are his creatures, not divine beings in our own right. To confuse the creature with the Creator is the oldest error; only God is God.',
        verse: {
          ref: 'Isaiah 43:10-11',
          text: 'Before me no god was formed, nor shall there be any after me. I, I am the Lord, and besides me there is no savior.',
        },
      },
      {
        belief: 'The thetan lives many lives, passing from body to body across enormous stretches of time.',
        response:
          'Scripture sets one life against one judgment — not an endless cycle. This makes the present life weighty and the offer of grace urgent.',
        verse: {
          ref: 'Hebrews 9:27',
          text: 'And just as it is appointed for man to die once, and after that comes judgment.',
        },
      },
      {
        belief: 'Freedom is attained by working up the Bridge through auditing and successive, costly levels of training.',
        response:
          'Freedom is not climbed toward by technique or purchased in stages; it is given by the Son. Where the Son sets a person free, they are free indeed.',
        verse: {
          ref: 'John 8:36',
          text: 'So if the Son sets you free, you will be free indeed.',
        },
      },
    ],
    see_also: ['Salvation', 'Grace'],
  },
  {
    name: 'Wicca / Modern Paganism',
    group: 'Movements & new religions',
    adherents: 'Estimates vary; likely around one to two million or more worldwide, with wide diversity and no central body.',
    founder:
      'No single founder; modern Wicca emerged in mid-20th-century Britain, popularized by Gerald Gardner and developed by many others, as part of a broader revival of nature-centered ("Pagan") religion.',
    origin:
      'A 20th-century revival drawing on folk custom, ceremonial magic, and pre-Christian imagery, formed into diverse traditions rather than a single organization.',
    god: 'Often duotheistic — a Goddess and a God, frequently seen in nature and the cycles of the year — and in other paths polytheistic or pantheistic; conceptions of deity vary widely.',
    texts:
      'No single authoritative scripture; practitioners use personal or tradition-specific books (such as a "Book of Shadows"), with wide variation between groups.',
    salvation:
      'There is no doctrine of salvation from sin; the aim is living in harmony with nature and the divine, guided by the ethic "An it harm none, do what ye will," often with belief in returned consequences.',
    afterlife: 'Beliefs vary; many hold to some form of reincarnation or a resting place (such as the "Summerland") between lives.',
    differences: [
      'Historic Christianity worships one transcendent Creator distinct from creation; Wicca and modern Paganism locate the divine within nature and commonly honor a Goddess and God or many deities.',
      'Christianity teaches one life followed by judgment; many Pagan paths teach reincarnation.',
      'Christianity warns against ritual magic and divination; these practices are central to much of Wicca.',
    ],
    shared:
      'Modern Paganism’s reverence for creation, its sense of the sacredness of the earth, and its concern to "harm none" echo real truths — that the world is a gift to be cared for and that our actions toward others matter.',
    contrasts: [
      {
        belief: 'The divine is many — a Goddess and a God, or numerous deities — and is found within nature itself.',
        response:
          'There is one God, the Maker of nature and not a part of it. Creation is to be honored as his gift, but worship belongs to the Creator alone.',
        verse: {
          ref: 'Isaiah 45:5',
          text: 'I am the Lord, and there is no other, besides me there is no God; I equip you, though you do not know me.',
        },
      },
      {
        belief: 'The soul returns through many lives in an ongoing cycle.',
        response:
          'Scripture appoints one life and then judgment, not a wheel of returns. This lends each life a single, God-given weight and makes today the day to turn to him.',
        verse: {
          ref: 'Hebrews 9:27',
          text: 'And just as it is appointed for man to die once, and after that comes judgment.',
        },
      },
      {
        belief: 'Magic, spellcraft, and divination are legitimate ways to shape reality, so long as they harm none.',
        response:
          'Scripture soberly warns God’s people away from sorcery and divination — not out of fear of nature, but because power and guidance are sought from the living God, not manipulated by ritual.',
        verse: {
          ref: 'Deuteronomy 18:10-12',
          text: 'There shall not be found among you anyone who practices divination or tells fortunes or interprets omens, or a sorcerer or a charmer or a medium or a necromancer or one who inquires of the dead, for whoever does these things is an abomination to the Lord.',
        },
      },
    ],
    see_also: ['Salvation'],
  },
  {
    name: 'New Age spirituality',
    group: 'Movements & new religions',
    adherents: 'Diffuse and hard to count; ideas are widely held across many backgrounds rather than by a defined membership. Estimates vary.',
    founder:
      'No founder or single organization; a loose late-20th-century movement drawing on many older sources — Eastern religion, Western esotericism, and popular psychology.',
    origin:
      'Emerged in the West through the 1960s–1980s as an eclectic, decentralized spirituality blending practices and ideas from many traditions.',
    god: 'God tends to be understood as an impersonal divine energy or consciousness present in all things, and especially as the divine within the self ("the god within").',
    texts:
      'No fixed scripture; a shifting body of popular books, channeled writings, and teachers, freely combined according to personal preference.',
    salvation:
      'The goal is spiritual awakening or evolution — realizing one’s own divinity and raising consciousness — often across many lifetimes, rather than rescue from sin.',
    afterlife: 'Commonly reincarnation and ongoing spiritual progress, with the soul evolving through successive lives toward higher awareness.',
    differences: [
      'Historic Christianity confesses one personal Creator distinct from us; New Age thought locates the divine within the self and in all things.',
      'Christianity teaches one life followed by judgment and resurrection; New Age spirituality teaches reincarnation and gradual spiritual evolution.',
      'Christianity says we are saved by God’s grace from outside us; New Age says we awaken to a divinity we already possess.',
    ],
    shared:
      'New Age spirituality reflects a genuine hunger for meaning, transcendence, and inner transformation, and a sense that reality is more than the material — longings Christianity affirms, even as it answers them very differently.',
    contrasts: [
      {
        belief: 'The self is divine; enlightenment is awakening to the god already within.',
        response:
          'The first lie ever told was that we could be as gods. But there is one God, and we are his beloved creatures, not divine in ourselves — a truth that humbles and frees.',
        verse: {
          ref: 'Isaiah 45:5',
          text: 'I am the Lord, and there is no other, besides me there is no God; I equip you, though you do not know me.',
        },
      },
      {
        belief: 'The soul is reborn through many lifetimes, evolving upward toward higher consciousness.',
        response:
          'Scripture gives one life, then judgment — not endless returns. Our hope is not self-driven evolution but resurrection given by God.',
        verse: {
          ref: 'Hebrews 9:27',
          text: 'And just as it is appointed for man to die once, and after that comes judgment.',
        },
      },
      {
        belief: 'We save ourselves by raising our own consciousness and realizing our inner divinity.',
        response:
          'Salvation is God’s gift, received by grace through faith, not a height we climb by inner work. Rescue comes from outside us, from the God who loved us first.',
        verse: {
          ref: 'Ephesians 2:8-9',
          text: 'For by grace you have been saved through faith. And this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
        },
      },
    ],
    see_also: ['Salvation', 'Resurrection', 'Grace'],
  },
]
