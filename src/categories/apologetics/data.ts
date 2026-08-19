import type { ApologeticsQA } from './types'

export const APOLOGETICS_INTRO = "These are starting points, not the last word — offered with humility and respect for honest questions. Real conversations are better than tidy arguments, so take what helps and hold the rest gently."

export const QUESTIONS: ApologeticsQA[] = [
  {
    question: "Does God exist?",
    topic: "God",
    short: "The existence of anything at all, the deep order of the universe, and our sense of real right and wrong all point beyond themselves toward God.",
    answer: "No single argument settles this for everyone, and thoughtful people land in different places. Still, there are real reasons many find belief in God reasonable rather than blind. There is the sheer fact that something exists rather than nothing, and that the universe seems finely tuned to allow life at all.  There is also our persistent sense that some things are genuinely right and others genuinely wrong — not just personal taste — which is hard to ground in a purely material world.  None of this is a mathematical proof. But faith here is not a leap into the dark so much as a step toward the most fitting explanation of the world we actually find ourselves in — a world that looks more like a gift than an accident.",
    points: ["Something exists rather than nothing, which invites explanation.", "The universe appears finely tuned for life.", "Our deep moral intuitions fit a personal God better than blind matter."],
    verses: [{ ref: "Romans 1:20", text: "For his invisible attributes, namely, his eternal power and divine nature, have been clearly perceived, ever since the creation of the world, in the things that have been made. So they are without excuse." }],
    see_also: ["Faith", "Providence"]
  },
  {
    question: "Isn't faith just believing without evidence?",
    topic: "God",
    short: "Biblical faith is trust based on reasons, more like confidence in a trustworthy person than a blind guess.",
    answer: "It is a fair worry, because the word 'faith' sometimes gets used to mean believing things for no reason at all. But that is not what the Bible means by it. Faith in Scripture is trust — the kind you place in a friend who has proven reliable, or a doctor whose track record you know.  The New Testament writers appealed to public events, eyewitnesses, and evidence, not to a demand that people switch off their minds.  Everyone lives by trust of some kind — in other people, in reason itself, in the reliability of our senses. The Christian claim is not that we believe without grounds, but that the grounds point to a God worth trusting even where our sight runs out.",
    points: ["Faith is trust grounded in reasons, not the absence of them.", "The biblical writers appealed to evidence and eyewitnesses.", "Everyone lives by some kind of trust."],
    verses: [{ ref: "John 20:29", text: "Jesus said to him, 'Have you believed because you have seen me? Blessed are those who have not seen and yet have believed.'" }],
    see_also: ["Faith", "Scripture"]
  },
  {
    question: "If God made everything, who made God?",
    topic: "God",
    short: "The question assumes God is one more made thing, but God is by definition the uncreated source that everything else depends on.",
    answer: "This is one of the most natural questions to ask, and children often ask it best. The short answer is that the question quietly assumes God is the same kind of thing as everything else — something that began, and so needs a cause.  But that is not what Christians mean by God. God is not one more item inside the universe; he is the eternal, self-existing reality that everything else hangs on.  Asking who made God is a bit like asking what is north of the North Pole — it treats God as if he were another point on the map rather than the ground the map rests on. Something must be eternal and uncaused, or nothing could exist now. Christians say that something is not blind matter but a personal God.",
    points: ["The question assumes God is a created thing, which Christians deny.", "God is the uncreated, self-existent source of everything else.", "Something must be eternal, or nothing would exist at all."],
    see_also: ["Providence", "Faith"]
  },
  {
    question: "Can we trust the Bible?",
    topic: "The Bible",
    short: "The Bible is remarkably well preserved and historically rooted, and its honesty about its own heroes is a mark of truthfulness.",
    answer: "Trust has to be earned, and it is worth asking hard questions of any ancient book. On the historical side, the New Testament is preserved in far more early manuscripts, far closer to the events, than any other work from the ancient world.  It is also strikingly candid — it records the failures, doubts, and cowardice of its own leaders, which is not how people usually write propaganda.  None of that forces anyone to believe. But it means the Bible can be taken seriously as history and testimony, not dismissed as legend. Many have found that reading it honestly, rather than at a distance, is where trust actually begins.",
    points: ["The New Testament has unmatched manuscript support from the ancient world.", "It records the flaws of its own heroes, a mark of honesty.", "It is rooted in real places, people, and events."],
    verses: [{ ref: "2 Timothy 3:16", text: "All Scripture is breathed out by God and profitable for teaching, for reproof, for correction, and for training in righteousness." }],
    see_also: ["Scripture", "Faith"]
  },
  {
    question: "Isn't the Bible full of contradictions?",
    topic: "The Bible",
    short: "Many apparent contradictions are differences in perspective or emphasis, the kind you would expect from independent, honest witnesses.",
    answer: "This deserves an honest look rather than a brush-off. Some passages are genuinely hard, and Christians have wrestled with them for centuries.  But many of the famous 'contradictions' turn out to be the kind of variation you get whenever several witnesses describe the same event — different details, different angles, different purposes. Identical accounts would look more like collusion than truth.  It is fair to keep asking the hard questions, and worth reading a difficult passage in its context before concluding it cannot be reconciled. Where honest tension remains, faith does not require pretending it away — it holds the questions open while trusting the larger story.",
    points: ["Differences among the Gospels resemble honest, independent testimony.", "Many contradictions dissolve when read in context.", "Faith can live with unresolved questions without pretending."],
    see_also: ["Scripture"]
  },
  {
    question: "Hasn't the Bible been changed over time?",
    topic: "The Bible",
    short: "The abundance of early manuscripts lets scholars trace the text back closely to the originals, and the message has been remarkably stable.",
    answer: "It is a common assumption — that the Bible was quietly edited across the centuries like a game of telephone. But the reality is almost the opposite. We have thousands of manuscripts, many very early, in several languages, copied independently in different regions.  Because they can be compared, scholars can actually track where copying slips crept in, and they are overwhelmingly minor — spelling, word order, nothing that touches a core Christian belief.  The discovery of the Dead Sea Scrolls, for example, showed the Old Testament text had been passed down with striking care over a thousand years. The book we read today is, in its substance, the book that was written.",
    points: ["Thousands of early manuscripts let scholars compare and trace the text.", "Known variations are minor and touch no core doctrine.", "Discoveries like the Dead Sea Scrolls confirm careful transmission."],
    see_also: ["Scripture"]
  },
  {
    question: "Did Jesus really exist?",
    topic: "Jesus",
    short: "Nearly all historians, believing or not, agree that a Jewish teacher named Jesus lived, taught, and was crucified in first-century Palestine.",
    answer: "This one is actually not very controversial among historians. Even scholars with no religious commitment overwhelmingly accept that Jesus of Nazareth was a real person.  Beyond the New Testament, he is mentioned by non-Christian writers such as the Roman historian Tacitus and the Jewish historian Josephus, both writing within living memory of the events.  The interesting debate is not whether Jesus existed but who he was and what his life meant. That is a question worth taking up honestly, and it is the one the Gospels most want to press on us.",
    points: ["Historians across the spectrum accept Jesus as a real figure.", "Non-Christian sources like Tacitus and Josephus mention him.", "The real debate is about his identity, not his existence."],
    see_also: ["Resurrection", "Scripture"]
  },
  {
    question: "Did Jesus rise from the dead?",
    topic: "Jesus",
    short: "The empty tomb, the many eyewitnesses, and the transformed disciples are historical facts that the resurrection explains better than the alternatives.",
    answer: "Everything in Christianity rests on this, so it should be examined, not simply assumed. A few things are widely granted even by skeptical historians: Jesus was crucified and buried, his tomb was found empty, and his followers were utterly convinced they had seen him alive.  What could account for all three? Fearful disciples became bold enough to die for their message; women were named as the first witnesses in a culture that undervalued their testimony — details you would not invent.  No one can force belief here, and honest doubt is understandable. But the resurrection remains the explanation that ties the evidence together, and it is the hinge on which the whole Christian hope turns.",
    points: ["The crucifixion, empty tomb, and eyewitness experiences are widely accepted.", "The disciples' transformation is hard to explain by fraud or delusion.", "Awkward details, like women as first witnesses, ring true."],
    verses: [{ ref: "1 Corinthians 15:3-4", text: "For I delivered to you as of first importance what I also received: that Christ died for our sins in accordance with the Scriptures, that he was buried, that he was raised on the third day in accordance with the Scriptures." }],
    see_also: ["Resurrection", "Hope"]
  },
  {
    question: "Was Jesus just a good teacher?",
    topic: "Jesus",
    short: "Jesus claimed an authority that only makes sense if he was far more than a teacher — so 'merely good' may be the one thing he cannot be.",
    answer: "Many people admire Jesus while wanting to keep him at the level of a wise moral teacher, like Socrates or the Buddha. It is a respectful instinct, but it may not survive a close reading of what he actually said.  Jesus forgave sins that were not committed against him, accepted worship, and said that our eternal standing depended on our response to him. Those are not the words of a humble ethics teacher; they are staggering claims about his own identity.  As C. S. Lewis put it, a man saying such things is either telling the truth, or is deluded, or is deceiving — but the one option he leaves us is not 'a good teacher and nothing more.' The question he presses is not whether we admire him, but who we think he is.",
    points: ["Jesus forgave sins, accepted worship, and claimed unique authority.", "Those claims rule out 'merely a good teacher.'", "The real question is his identity, not his ethics."],
    verses: [{ ref: "John 14:6", text: "Jesus said to him, 'I am the way, and the truth, and the life. No one comes to the Father except through me.'" }],
    see_also: ["Resurrection", "Faith"]
  },
  {
    question: "Why does God allow suffering?",
    topic: "Suffering & Evil",
    short: "God has not promised a pain-free life, but he entered our suffering himself and promises to redeem it.",
    answer: "Christianity does not offer a tidy formula, but it takes suffering seriously. It teaches that the world is not the way God made it — sin has broken it — so pain is real and not to be minimized.  Yet the Christian answer is unique: God did not stay distant from suffering but entered it in Jesus, who wept, was betrayed, and died. The cross means God is not indifferent to our pain.  And the resurrection is the promise that one day he will wipe away every tear and make all things new. That is not an explanation for every particular grief, but it is a hope strong enough to carry them.",
    points: ["Suffering is real because the world is fallen, not as God intended.", "In Jesus, God shares our suffering rather than watching from afar.", "The resurrection promises a final end to suffering."],
    verses: [{ ref: "Revelation 21:4", text: "He will wipe away every tear from their eyes, and death shall be no more, neither shall there be mourning, nor crying, nor pain anymore." }],
    see_also: ["Providence", "Hope", "Resurrection"]
  },
  {
    question: "How can a loving God send people to hell?",
    topic: "Suffering & Evil",
    short: "Hell is best understood as God honoring our freedom to refuse him, not a cruelty imposed on people longing to be with him.",
    answer: "This is one of the hardest questions, and it should be handled with tenderness rather than as a debating point. The Bible does take judgment seriously, and Christians should not pretend otherwise.  But many have come to see hell less as God dragging the unwilling to torment and more as God, sorrowfully, honoring a real human choice — the freedom to say to him, in the end, 'leave me alone.' Love that could not be refused would not be love at all.  Alongside that, Scripture insists God 'desires all people to be saved' and went to the cross precisely so that no one need face judgment. The heart of the Christian message is not a threat but a rescue that is offered to everyone.",
    points: ["Hell can be seen as God honoring the freedom to refuse him.", "God takes no delight in judgment and desires all to be saved.", "The cross is God's costly effort to spare us from it."],
    verses: [{ ref: "2 Peter 3:9", text: "The Lord is not slow to fulfill his promise as some count slowness, but is patient toward you, not wishing that any should perish, but that all should reach repentance." }],
    see_also: ["Hell", "Grace", "Sin"]
  },
  {
    question: "Aren't science and Christianity at war?",
    topic: "Science & Faith",
    short: "The 'war' is largely a modern myth; many founders of modern science were believers who saw studying nature as studying God's work.",
    answer: "The idea of a long war between science and faith is popular, but historians of science increasingly regard it as a myth built up in the last couple of centuries.  Many pioneers of modern science — Kepler, Newton, Faraday, and others — were serious Christians who expected the universe to be orderly and intelligible precisely because a rational God made it. The very confidence that nature follows discoverable laws grew in that soil.  Science and faith are mostly asking different kinds of questions: science asks how the world works, while faith asks what it means and why it is here at all. Good answers to one need not crowd out the other.",
    points: ["The 'conflict thesis' is largely a modern historical myth.", "Many founders of modern science were devout believers.", "Science asks 'how'; faith asks 'why' and 'what for.'"],
    see_also: ["Providence", "Faith"]
  },
  {
    question: "Doesn't evolution disprove God?",
    topic: "Science & Faith",
    short: "Even if life developed gradually, that describes a process, not a reason the universe exists at all — a question science does not answer.",
    answer: "Sincere Christians hold a range of views here, and it is worth being honest about that. Some read Genesis as pointing to a young earth; others see it as ancient poetry about who made the world and why, fully compatible with an old universe and common descent. This is a family conversation, not a test of faith.  What is worth noticing is that even a complete account of how life developed would describe a mechanism, not explain why there is a universe with laws for evolution to work through in the first place.  Explaining the process is not the same as explaining the source. Many scientists who fully accept evolution remain convinced Christians for exactly that reason.",
    points: ["Christians differ on the age of the earth and how to read Genesis.", "Describing how life developed does not explain why anything exists.", "Many committed Christians fully accept mainstream science."],
    see_also: ["Providence", "Scripture"]
  },
  {
    question: "Aren't all religions basically the same?",
    topic: "Other Religions",
    short: "The world faiths share some ethical instincts but disagree deeply on God, humanity, and salvation — respecting them means taking those differences seriously.",
    answer: "It sounds generous to say all religions are the same, and they do share some moral wisdom, like versions of the golden rule. That common ground is real and worth honoring.  But at the center they genuinely diverge: on whether God is personal, on what has gone wrong with us, and on how it is put right. One faith says we are saved by our own effort, another by escaping desire, another by sheer grace. These are not the same claim in different clothes.  Treating every religion as secretly identical actually flattens them and quietly disrespects what each holds dear. The more honest and respectful path is to let each speak for itself, notice the real differences, and weigh them thoughtfully.",
    points: ["Religions share some ethics but differ deeply at the center.", "They disagree on God, on humanity's problem, and on the solution.", "Respect means taking differences seriously, not erasing them."],
    verses: [{ ref: "John 14:6", text: "Jesus said to him, 'I am the way, and the truth, and the life. No one comes to the Father except through me.'" }],
    see_also: ["Grace", "Faith"]
  },
  {
    question: "Isn't it arrogant to say Jesus is the only way?",
    topic: "Other Religions",
    short: "Christians hold this not as a boast but as a message they received — and it comes with a call to humble, loving service, not superiority.",
    answer: "It can certainly sound arrogant, and sadly some Christians have carried it arrogantly. That is worth owning honestly.  But the claim itself is not a boast about Christians being better; it is a report about what they believe God has done. If it is true that God came in person to rescue people who could not rescue themselves, then it is received news, not a trophy earned. The messenger of good news has nothing to be proud of.  And notice the shape of the claim: the 'only way' is a way of self-giving love, a Savior who washes feet and dies for enemies. Whatever else that is, it is the opposite of arrogance — and it calls those who follow him to the same humility.",
    points: ["The claim is received news, not a badge of superiority.", "The 'way' itself is one of humble, self-giving love.", "Arrogance in delivering it betrays the message."],
    verses: [{ ref: "Acts 4:12", text: "And there is salvation in no one else, for there is no other name under heaven given among men by which we must be saved." }],
    see_also: ["Grace", "Faith"]
  },
  {
    question: "Can't you be good without God?",
    topic: "Morality",
    short: "Of course kind, honest people exist apart from belief — the deeper question is what makes goodness real and binding in the first place.",
    answer: "Yes, and it would be foolish and insulting to deny it. Plenty of people who claim no faith are honest, generous, and kind, sometimes putting believers to shame. Christianity actually expects this, since it teaches that God's moral law is written on every human heart.  So the question was never whether unbelievers can behave well. The deeper puzzle is a different one: if there is no God, what makes goodness anything more than personal preference or social habit? Where does a real obligation to be good come from?  That is not an accusation against anyone's character; it is a genuine philosophical question. Christians say our shared sense that cruelty is truly wrong points beyond us — to a good God who is the source of goodness itself.",
    points: ["Non-believers are often genuinely good, as Christianity expects.", "The real question is what grounds goodness, not who practices it.", "Our sense of real obligation points beyond mere preference."],
    verses: [{ ref: "Romans 2:15", text: "They show that the work of the law is written on their hearts, while their conscience also bears witness, and their conflicting thoughts accuse or even excuse them." }],
    see_also: ["Sin", "Grace"]
  },
  {
    question: "Isn't morality just relative?",
    topic: "Morality",
    short: "Almost no one lives as though cruelty and justice were mere opinion — our deepest moral reactions behave as if some things are truly right or wrong.",
    answer: "In theory, moral relativism sounds open-minded and humble. But almost no one can actually live it. The person who says all morality is relative will still insist their own mistreatment was really unjust, not just unfashionable.  We do not treat racism or cruelty to children as matters of taste, like preferring one flavor over another. We speak and feel as though some things are wrong for everyone, everywhere — and that instinct runs deep.  Christianity makes sense of that instinct: real right and wrong exist because they are rooted in the character of a good God, not merely in shifting human opinion. That does not make believers morally superior, but it does give our moral outrage something solid to stand on.",
    points: ["Few can consistently live as if morality were mere opinion.", "We treat cruelty and injustice as wrong for everyone.", "A good God grounds morality beyond shifting human taste."],
    see_also: ["Sin", "Providence"]
  },
  {
    question: "What happens after we die?",
    topic: "The Afterlife",
    short: "Christianity's hope is not a ghostly escape but resurrection — bodily life renewed in a remade world, in the presence of God.",
    answer: "People often picture the Christian afterlife as floating souls on clouds, but the real hope is bigger and more earthy than that. The New Testament's central promise is resurrection: not merely surviving as a spirit, but being raised to full, embodied life.  The final picture is not of escaping the world but of the world itself healed — a new heaven and new earth where God dwells with his people and death is undone.  For those who trust Christ, death is not the end of the story but a doorway into that renewed life. It is meant to be faced honestly, with grief where grief is real, but also with a hope that death does not have the last word.",
    points: ["The Christian hope is resurrection, not just a disembodied soul.", "The end is a renewed creation, not escape from the world.", "For those in Christ, death is a doorway, not a dead end."],
    verses: [{ ref: "John 11:25", text: "Jesus said to her, 'I am the resurrection and the life. Whoever believes in me, though he die, yet shall he live.'" }],
    see_also: ["Resurrection", "Hope", "Hell"]
  }
]
