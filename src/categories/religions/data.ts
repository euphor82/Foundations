import type { Religion } from './types'

export const RELIGIONS_INTRO =
  'These summaries aim to describe each faith fairly and on its own terms, then note key differences from historic Christianity. They are starting points for understanding and conversation, not exhaustive treatments — adherents within each tradition vary widely.'

/* Seeded sample (3 of the major world religions). */
export const RELIGIONS: Religion[] = [
  {
    name: 'Judaism',
    adherents: '~15 million',
    founder: 'Abraham (patriarch); Moses (lawgiver)',
    origin: "Rooted in God's covenant with Abraham (~2000 BC) and the giving of the Law to Moses; the faith of the Hebrew Scriptures (the Tanakh).",
    god: 'Strict monotheism: one God (YHWH), Creator and covenant-keeper, indivisible.',
    texts: 'The Tanakh (Torah, Prophets, Writings — the Christian Old Testament) and the Talmud (rabbinic teaching and commentary).',
    salvation: "Living faithfully within God's covenant — obeying Torah, repentance, and God's mercy — rather than a single moment of conversion.",
    afterlife: 'Views vary; the world to come and resurrection are affirmed in many traditions, though Judaism focuses more on this life and faithful living.',
    differences: [
      'Christianity confesses Jesus as the promised Messiah and the divine Son; Judaism does not, still awaiting the Messiah (or reading messianic hope differently).',
      'Christianity understands the one God as Trinity — Father, Son, and Spirit; Judaism holds to an undifferentiated oneness.',
      'Christians believe righteousness comes as a gift through faith in Christ; Jewish thought centers on covenant faithfulness and Torah.',
    ],
    shared: 'Christianity grew out of Judaism and shares the Hebrew Scriptures, belief in one Creator God, the moral law, and the hope of a coming redemption.',
    see_also: ['Covenant', 'Grace'],
  },
  {
    name: 'Islam',
    adherents: '~1.9 billion',
    founder: 'Muhammad (7th century AD), regarded as the final prophet',
    origin: "Arose in 7th-century Arabia through Muhammad, whom Muslims believe received the Qur'an from God through the angel Gabriel.",
    god: 'Strict monotheism (tawhid): one God, Allah, absolutely one and transcendent; associating partners with God is the gravest sin.',
    texts: "The Qur'an (believed to be God's literal, final revelation) and the Hadith (traditions of Muhammad's words and deeds).",
    salvation: 'Submission to God and faithful practice — the Five Pillars (creed, prayer, almsgiving, fasting, pilgrimage) — with final judgment resting on God’s mercy and one’s deeds.',
    afterlife: 'Bodily resurrection followed by judgment, leading to paradise or hell.',
    differences: [
      'Islam honors Jesus as a great prophet born of a virgin, but denies his deity, his crucifixion, and his resurrection; Christianity centers on all three.',
      'Christianity teaches salvation as a gift of grace received by faith; Islam emphasizes submission and righteous deeds within God’s mercy.',
      'Christians confess God as Trinity; Islam regards that as a compromise of God’s oneness.',
    ],
    shared: 'Both are monotheistic, trace themselves to Abraham, revere many of the same figures (Adam, Noah, Abraham, Moses, Jesus), and affirm a final judgment and moral accountability before God.',
    see_also: ['Grace', 'Gospel'],
  },
  {
    name: 'Buddhism',
    adherents: '~500 million',
    founder: 'Siddhartha Gautama, the Buddha (~5th century BC)',
    origin: 'Began in India with the Buddha’s enlightenment and his teaching on the cause of suffering and the path beyond it.',
    god: 'Non-theistic in its classic form: it does not center on a Creator God. Some later traditions venerate buddhas and bodhisattvas.',
    texts: 'The Tripitaka (“three baskets”) and, in other schools, additional sutras.',
    salvation: 'Liberation (nirvana) from the cycle of rebirth by extinguishing craving, through the Four Noble Truths and the Eightfold Path — a matter of insight and discipline.',
    afterlife: 'Rebirth shaped by karma, with the ultimate goal of release from the cycle altogether rather than an eternal personal heaven.',
    differences: [
      'Christianity centers on a personal Creator God who saves; classic Buddhism is non-theistic and looks to self-effort and insight.',
      'Christianity affirms an enduring personal self redeemed and raised to eternal life; Buddhism teaches “no-self” (anatta) and release from rebirth.',
      'Christian hope is restored relationship with God; Buddhist hope is the cessation of craving and suffering.',
    ],
    shared: 'Both take human suffering seriously, call for compassion and self-denial, and teach that grasping and selfish desire are at the root of much human misery.',
    see_also: ['Repentance'],
  },
  {
    name: 'Hinduism',
    adherents: '~1.2 billion',
    founder: 'No single founder; developed over millennia in the Indian subcontinent',
    origin: 'The world’s oldest major religious tradition, growing from ancient Vedic religion and the diverse cultures of India rather than from one moment or teacher.',
    god: 'Extremely varied: many honor numerous gods and goddesses (Vishnu, Shiva, Devi, and others), often understood as expressions of one ultimate reality (Brahman); traditions range from polytheistic to monistic.',
    texts: 'A vast body of scripture including the Vedas, Upanishads, Bhagavad Gita, and epics like the Ramayana and Mahabharata.',
    salvation: 'Release (moksha) from the cycle of rebirth (samsara), pursued through paths of devotion, action, and knowledge, shaped by karma over many lifetimes.',
    afterlife: 'Reincarnation according to karma, until the soul is finally liberated and united with the ultimate reality.',
    differences: [
      'Christianity worships one personal Creator God; Hinduism spans many gods and a more impersonal ultimate reality.',
      'Christianity teaches one life followed by resurrection and judgment; Hinduism teaches reincarnation across many lives.',
      'Christian salvation is a gift of grace received by faith in Christ; Hindu liberation is worked out over lifetimes through devotion, deeds, and insight.',
    ],
    shared: 'Both take the spiritual dimension of life seriously, value devotion and self-discipline, and hold that human beings are accountable for how they live.',
    see_also: ['Grace', 'Salvation'],
  },
  {
    name: 'Sikhism',
    adherents: '~25 million',
    founder: 'Guru Nanak (1469–1539) and nine successor Gurus',
    origin: 'Arose in the Punjab region of South Asia in the 15th–17th centuries through Guru Nanak and the Gurus who followed him.',
    god: 'Strict monotheism: one formless, eternal Creator God (Waheguru), beyond full human comprehension.',
    texts: 'The Guru Granth Sahib, the sacred scripture that Sikhs regard as their living, final Guru.',
    salvation: 'Union with God by devotion, honest living, service to others, and meditation on God’s name, breaking free from the cycle of rebirth.',
    afterlife: 'Reincarnation until the soul merges with God; liberation is the goal.',
    differences: [
      'Sikhism is strictly monotheistic but does not confess God as Trinity or Jesus as the divine Son and Savior.',
      'Christianity teaches salvation as a gift of grace through Christ’s death and resurrection; Sikhism emphasizes devotion, good deeds, and remembrance of God.',
      'Christianity affirms one life and resurrection; Sikhism affirms reincarnation until union with God.',
    ],
    shared: 'Both affirm one Creator God, reject empty ritual and hypocrisy, and stress honest work, humility, service, and care for the poor.',
    see_also: ['Grace', 'Righteousness'],
  },
  {
    name: 'Mormonism (LDS)',
    adherents: '~17 million',
    founder: 'Joseph Smith (1830, United States)',
    origin: 'Founded by Joseph Smith, who taught that he received new revelation restoring the true church; centered today in The Church of Jesus Christ of Latter-day Saints.',
    god: 'Believes in God the Father, Jesus, and the Holy Spirit as three distinct beings (not one God in three persons), and teaches that God was once a man and that humans may progress toward godhood.',
    texts: 'The Bible together with additional scripture: the Book of Mormon, Doctrine and Covenants, and the Pearl of Great Price.',
    salvation: 'By grace together with faith, ordinances, and obedience within the LDS church; a strong emphasis on works and eternal progression.',
    afterlife: 'Degrees of heavenly “glory,” with the possibility of exaltation to godhood for the faithful.',
    differences: [
      'Historic Christianity confesses one eternal God as Trinity; LDS teaching describes three separate beings and that God was once a man.',
      'Christianity holds the Bible as complete and sufficient; LDS adds later scriptures such as the Book of Mormon.',
      'Christianity teaches salvation by grace through faith alone in Christ; LDS joins grace with required ordinances and obedience.',
    ],
    shared: 'Latter-day Saints revere Jesus, hold the Bible in high regard, and are known for strong families, moral living, and generous service.',
    see_also: ['Grace', 'Trinity', 'Gospel'],
  },
  {
    name: "Jehovah's Witnesses",
    adherents: '~8.7 million',
    founder: 'Charles Taze Russell (late 1800s, United States)',
    origin: 'Grew out of the 19th-century Bible Student movement led by Charles Taze Russell; organized as the Watch Tower Society.',
    god: 'Strict unitarian monotheism: God is one person, Jehovah. Jesus is regarded as God’s first creation (not eternal God), and the Holy Spirit as God’s active force rather than a person.',
    texts: 'The Bible, read through their New World Translation and the teaching of the Watch Tower Society.',
    salvation: 'Faith in Jehovah expressed through obedience, moral living, and active evangelism; strong emphasis on works and loyalty to the organization.',
    afterlife: 'No eternal hell; the faithful live forever, most on a restored paradise earth, with 144,000 reigning in heaven.',
    differences: [
      'Christianity confesses Jesus as fully God and the Trinity as one God in three persons; Jehovah’s Witnesses deny both, viewing Jesus as a created being.',
      'Christianity affirms the bodily resurrection of Jesus; Jehovah’s Witnesses teach he was raised as a spirit.',
      'Christianity teaches salvation by grace through faith in Christ; the Witnesses stress works, obedience, and evangelistic activity.',
    ],
    shared: 'Jehovah’s Witnesses honor the Bible, take God’s name seriously, live disciplined moral lives, and are earnest in sharing their faith.',
    see_also: ['Trinity', 'Grace', 'Resurrection'],
  },
  {
    name: 'Atheism / Secular Humanism',
    adherents: 'Hundreds of millions (varies by definition)',
    founder: 'No founder; a worldview rather than a religion',
    origin: 'A modern, non-religious outlook — strengthened by the Enlightenment and modern science — that either denies or withholds belief in God.',
    god: 'No belief in God or gods; reality is understood as natural and material, without a divine Creator.',
    texts: 'No sacred text; draws on science, philosophy, and reason, and (for secular humanism) documents like the Humanist Manifestos.',
    salvation: 'No concept of salvation; meaning, ethics, and purpose are seen as human-made, grounded in reason, compassion, and human flourishing.',
    afterlife: 'Generally none; this life is all there is, so it is to be lived well and responsibly.',
    differences: [
      'Christianity is grounded in a personal Creator God who reveals himself; atheism denies or doubts any God.',
      'Christianity locates ultimate meaning and morality in God; secular humanism grounds them in human reason and shared well-being.',
      'Christianity hopes in resurrection and eternal life; atheism sees death as the end.',
    ],
    shared: 'Both can affirm the dignity and worth of human beings, the value of reason and honest inquiry, and a deep concern for justice and human flourishing.',
    see_also: ['Providence', 'Righteousness'],
  },
]

/* Christianity as a baseline for the compare chart (not shown in the detail
 * list, where each entry is described relative to Christianity). Lets the user
 * set Christianity directly beside any faith, attribute by attribute. */
export const CHRISTIANITY: Religion = {
  name: 'Christianity',
  adherents: '~2.4 billion',
  founder: 'Jesus Christ (1st century AD), fulfilling God’s covenant with Israel',
  origin: 'Grew out of Judaism in 1st-century Judea around the life, death, and resurrection of Jesus of Nazareth.',
  god: 'One God in three persons — Father, Son, and Holy Spirit (the Trinity): not three gods, but one God eternally existing as three.',
  texts: 'The Bible — the Old and New Testaments.',
  salvation: 'By God’s grace, received through faith in Jesus Christ, who died and rose to reconcile sinners to God — a gift, not earned by works.',
  afterlife: 'Bodily resurrection and final judgment; eternal life with God for those who are in Christ.',
  differences: [],
  shared: '',
}

/* Subjects available in the compare chart: Christianity first, then the rest. */
export const COMPARE_SUBJECTS: Religion[] = [CHRISTIANITY, ...RELIGIONS]
