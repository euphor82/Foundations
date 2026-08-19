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
    contrasts: [
      {
        belief: 'Jesus is not the Messiah; the Messiah is still to come.',
        response: 'The prophets foretold a suffering Messiah, pierced for our sins — and Jesus fulfilled it precisely. To reject him is to reject the One God promised and sent.',
        verse: { ref: 'Isaiah 53:5', text: 'But he was pierced for our transgressions; he was crushed for our iniquities; upon him was the chastisement that brought us peace, and with his wounds we are healed.' },
      },
      {
        belief: 'God is one person; he has no son and is not triune.',
        response: 'Jesus took the divine name and claimed to exist before Abraham. Either he is the one God he claimed to be, or he is not to be followed at all.',
        verse: { ref: 'John 8:58', text: 'Jesus said to them, “Truly, truly, I say to you, before Abraham was, I am.”' },
      },
      {
        belief: 'Right standing with God comes through the covenant and keeping the Law.',
        response: 'No one is justified by keeping the Law; it only exposes sin. Righteousness is a gift, received through faith in the Messiah.',
        verse: { ref: 'Galatians 2:16', text: 'A person is not justified by works of the law but through faith in Jesus Christ.' },
      },
      {
        belief: 'Since the temple’s fall, sin is atoned for by repentance and good deeds, without sacrifice.',
        response: 'Scripture is unbending: without the shedding of blood there is no forgiveness. Christ is the once-for-all sacrifice the whole temple system pointed toward.',
        verse: { ref: 'Hebrews 9:22', text: 'Without the shedding of blood there is no forgiveness of sins.' },
      },
    ],
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
    contrasts: [
      {
        belief: 'Jesus was only a prophet; God has no son, and calling Jesus divine is blasphemy.',
        response: 'Scripture calls Jesus God in the flesh and warns that to deny the Son is to reject the Father as well. No one honors God while rejecting his Son.',
        verse: { ref: '1 John 2:23', text: 'No one who denies the Son has the Father. Whoever confesses the Son has the Father also.' },
      },
      {
        belief: 'Jesus was not crucified; God rescued him and another died in his place.',
        response: 'The crucifixion is the best-attested event of the Gospels and the very heart of the good news — Christ died for sins and rose again. Deny the cross and you deny the gospel itself.',
        verse: { ref: '1 Corinthians 15:3-4', text: 'Christ died for our sins in accordance with the Scriptures, that he was buried, that he was raised on the third day in accordance with the Scriptures.' },
      },
      {
        belief: 'Salvation is earned by submission and good deeds weighed at the judgment.',
        response: 'No weight of good deeds can earn heaven. Salvation is a gift of grace received by faith, so that no one can boast.',
        verse: { ref: 'Ephesians 2:8-9', text: 'For by grace you have been saved through faith. And this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.' },
      },
      {
        belief: 'The Qur’an corrects the Bible, which is said to have been corrupted.',
        response: 'God’s word does not fail and cannot be corrupted out of existence — it stands forever. A later book that contradicts it cannot be from the same God.',
        verse: { ref: 'Isaiah 40:8', text: 'The grass withers, the flower fades, but the word of our God will stand forever.' },
      },
      {
        belief: 'God is a single person; the Trinity divides God and is idolatry.',
        response: 'The one God eternally exists as Father, Son, and Holy Spirit — not three gods, but one God in three persons, into whose single name believers are baptized.',
        verse: { ref: 'Matthew 28:19', text: 'Go therefore and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit.' },
      },
    ],
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
    contrasts: [
      {
        belief: 'There is no Creator God; ultimate reality is impersonal.',
        response: 'A personal God made all things and rules over them. Creation itself testifies to him, leaving no one without witness.',
        verse: { ref: 'Genesis 1:1', text: 'In the beginning, God created the heavens and the earth.' },
      },
      {
        belief: 'Liberation (nirvana) is achieved by our own effort along the Eightfold Path.',
        response: 'We cannot rescue ourselves. Salvation is God’s gift in Christ, received by grace — never the fruit of self-effort.',
        verse: { ref: 'Titus 3:5', text: 'He saved us, not because of works done by us in righteousness, but according to his own mercy.' },
      },
      {
        belief: 'People are reborn through many lives, and the self is ultimately an illusion.',
        response: 'We live once, then face judgment — and the self is real, made in God’s image, and will be raised. There is no wheel of endless rebirth to escape.',
        verse: { ref: 'Hebrews 9:27', text: 'It is appointed for man to die once, and after that comes judgment.' },
      },
    ],
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
    contrasts: [
      {
        belief: 'There are many gods, and behind them an impersonal ultimate reality (Brahman).',
        response: 'There is only one true God, and he shares his glory with no other. Whatever else is called “god” is no god at all.',
        verse: { ref: 'Isaiah 45:5', text: 'I am the LORD, and there is no other, besides me there is no God.' },
      },
      {
        belief: 'The soul is ultimately divine and merges with Brahman.',
        response: 'We are creatures, not God. Our hope is not to dissolve into the divine but to be reconciled to the God who made us.',
        verse: { ref: 'Psalm 100:3', text: 'Know that the LORD, he is God! It is he who made us, and we are his.' },
      },
      {
        belief: 'Release (moksha) comes through many lifetimes of karma, devotion, and works.',
        response: 'There are not many lives to work off sin. There is one life, then judgment — and rescue is a free gift, not a wage earned across lifetimes.',
        verse: { ref: 'Romans 6:23', text: 'For the wages of sin is death, but the free gift of God is eternal life in Christ Jesus our Lord.' },
      },
    ],
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
    contrasts: [
      {
        belief: 'God is one, but not triune, and Jesus is not the divine Son or the only Savior.',
        response: 'Jesus is the only way to God — there is salvation in no one else. To bypass the Son is to miss the Father.',
        verse: { ref: 'Acts 4:12', text: 'And there is salvation in no one else, for there is no other name under heaven given among men by which we must be saved.' },
      },
      {
        belief: 'Union with God comes through devotion, honest living, good deeds, and meditation on the Name.',
        response: 'Our works cannot unite us to God; only grace through faith in Christ can. Salvation is received, not achieved.',
        verse: { ref: 'Ephesians 2:8-9', text: 'For by grace you have been saved through faith. And this is not your own doing; it is the gift of God, not a result of works.' },
      },
      {
        belief: 'All religions are different paths up the same mountain to the one God.',
        response: 'Jesus did not claim to be one path among many but the only way to the Father. Sincere roads that reject him do not arrive at God.',
        verse: { ref: 'John 14:6', text: 'Jesus said to him, “I am the way, and the truth, and the life. No one comes to the Father except through me.”' },
      },
    ],
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
    contrasts: [
      {
        belief: 'God the Father was once a man who progressed to become God (“as man is, God once was; as God is, man may become”).',
        response: 'God was never a man who became God. He is God from everlasting to everlasting, unchanging, and before him no god ever existed.',
        verse: { ref: 'Isaiah 43:10', text: 'Before me no god was formed, nor shall there be any after me.' },
      },
      {
        belief: 'There are many gods, and faithful humans can themselves become gods (exaltation).',
        response: 'There is one God and no other — the first and the last. Human beings do not and cannot become gods.',
        verse: { ref: 'Isaiah 44:6', text: 'I am the first and I am the last; besides me there is no god.' },
      },
      {
        belief: 'The Father, Son, and Holy Spirit are three separate gods or beings.',
        response: 'The LORD our God is one. The three persons are one God — not three gods.',
        verse: { ref: 'Deuteronomy 6:4', text: 'Hear, O Israel: The LORD our God, the LORD is one.' },
      },
      {
        belief: 'God the Father has a physical body of flesh and bones.',
        response: 'God is spirit, not a man with a body. To picture God as an exalted man is to remake him in our own image.',
        verse: { ref: 'John 4:24', text: 'God is spirit, and those who worship him must worship in spirit and truth.' },
      },
      {
        belief: 'Salvation comes by grace together with faith, temple ordinances, and obedience.',
        response: 'Salvation is by grace through faith alone, apart from works — a gift, so that no one may boast.',
        verse: { ref: 'Ephesians 2:8-9', text: 'For by grace you have been saved through faith. And this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.' },
      },
      {
        belief: 'The Book of Mormon and later revelations are added Scripture alongside the Bible.',
        response: 'Scripture pronounces a curse on any “new gospel” that contradicts the one already delivered — even if an angel from heaven should bring it.',
        verse: { ref: 'Galatians 1:8', text: 'But even if we or an angel from heaven should preach to you a gospel contrary to the one we preached to you, let him be accursed.' },
      },
    ],
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
    contrasts: [
      {
        belief: 'Jesus is a created being (Michael the archangel), not God; the New World Translation renders John 1:1 as “a god.”',
        response: 'Jesus is the eternal Word who was God, and Thomas worshiped him as “my Lord and my God” without rebuke. A creature cannot be the Creator of all things.',
        verse: { ref: 'John 1:1', text: 'In the beginning was the Word, and the Word was with God, and the Word was God.' },
      },
      {
        belief: 'Because he is created, Jesus is not to be worshiped as God.',
        response: 'By him all things were created — so he stands outside creation, not within it. Scripture openly calls the Son God.',
        verse: { ref: 'Colossians 1:16', text: 'For by him all things were created, in heaven and on earth, visible and invisible.' },
      },
      {
        belief: 'The Holy Spirit is an impersonal active force, not a person.',
        response: 'You cannot lie to a force. The Spirit speaks, sends, and is lied to — and to lie to the Spirit is to lie to God himself.',
        verse: { ref: 'Acts 5:3-4', text: 'Why has Satan filled your heart to lie to the Holy Spirit... You have not lied to man but to God.' },
      },
      {
        belief: 'Jesus was raised as a spirit, not bodily.',
        response: 'The risen Jesus showed his hands and feet and said that a spirit has no flesh and bones as he does. The resurrection was bodily.',
        verse: { ref: 'Luke 24:39', text: 'See my hands and my feet, that it is I myself. Touch me, and see. For a spirit does not have flesh and bones as you see that I have.' },
      },
      {
        belief: 'Salvation depends on works, loyalty to the organization, and door-to-door preaching.',
        response: 'Salvation is by grace through faith in Christ — not by works or organizational loyalty. It is God’s gift.',
        verse: { ref: 'Ephesians 2:8-9', text: 'For by grace you have been saved through faith. And this is not your own doing; it is the gift of God, not a result of works.' },
      },
    ],
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
    contrasts: [
      {
        belief: 'There is no God; the material universe is all that exists.',
        response: 'Creation itself shouts that God is real. His power and nature are plainly seen in what he has made, so that no one has an excuse.',
        verse: { ref: 'Romans 1:20', text: 'For his invisible attributes, namely, his eternal power and divine nature, have been clearly perceived, ever since the creation of the world, in the things that have been made. So they are without excuse.' },
      },
      {
        belief: 'To deny God is the reasonable, intelligent position.',
        response: 'Scripture calls the denial of God not wisdom but folly — a suppression of what is plainly known.',
        verse: { ref: 'Psalm 14:1', text: 'The fool says in his heart, “There is no God.”' },
      },
      {
        belief: 'Morality is a human invention — relative and always changing.',
        response: 'God’s moral law is written on every human heart, which is why even those who deny him cannot stop making real moral judgments.',
        verse: { ref: 'Romans 2:15', text: 'They show that the work of the law is written on their hearts, while their conscience also bears witness.' },
      },
      {
        belief: 'Death is the end; there is no afterlife or judgment.',
        response: 'Every person dies once and then faces God’s judgment. This life is not the whole story.',
        verse: { ref: 'Hebrews 9:27', text: 'It is appointed for man to die once, and after that comes judgment.' },
      },
    ],
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
