import type { Book } from '../types'

export const PENTATEUCH: Book[] = [
  {
    name: "Genesis",
    genre: "Law / Narrative",
    era: "patriarchs",
    author: "Traditionally Moses",
    summary: "The book of beginnings — of the universe, humanity, sin, and God's covenant people. God speaks creation into being and forms man and woman in his image, but Adam and Eve's disobedience fractures everything, unleashing sin and death. The story moves through Cain and Abel, Noah's flood, and the scattering at Babel, then narrows to one family through whom God will bless the world. He calls Abraham and renews his promise to Isaac, Jacob, and Joseph, whose betrayal and rise in Egypt preserve the family through famine. Genesis closes with Israel dwelling in Egypt, the stage set for a nation.",
    verse: { ref: "Genesis 1:1", text: "In the beginning, God created the heavens and the earth." },
    point: "God is the sovereign Creator who made everything good, and though human sin corrupts it, he immediately sets in motion a plan to redeem the world through a chosen family. Nearly every later promise in Scripture traces back to the covenant God makes here.",
    christ: "The promised offspring of the woman who will crush the serpent (3:15), and the seed of Abraham in whom all nations are blessed (12:3).",
    chars: [
      { n: "Adam & Eve", d: "the first man and woman, made in God's image; their choice to eat the forbidden fruit brought sin and death into the world" },
      { n: "Noah", d: "a righteous man in a corrupt generation who obeyed God, preserving his family through the flood" },
      { n: "Abraham", d: "called out of Ur and promised land, descendants, and blessing for all nations; the father of the faithful" },
      { n: "Jacob", d: "grandson of Abraham, renamed Israel; father of the twelve tribes" },
      { n: "Joseph", d: "sold into slavery by his brothers yet raised to power in Egypt, preserving the family through famine" }
    ]
  },
  {
    name: "Exodus",
    genre: "Law / Narrative",
    era: "egypt-exodus",
    author: "Traditionally Moses",
    summary: "Generations after Joseph, Israel has multiplied into a nation but groans under slavery in Egypt. God hears their cry, calls Moses from a burning bush, and reveals his name — 'I AM WHO I AM.' Through ten plagues and the first Passover, he shatters Pharaoh's grip and leads Israel out through the parted Red Sea. At Mount Sinai he binds them to himself in covenant, giving the Ten Commandments and instructions for the tabernacle. The book ends as God's glory fills the tabernacle, and the holy God comes to dwell among his rescued people.",
    verse: { ref: "Exodus 20:2", text: "I am the LORD your God, who brought you out of the land of Egypt, out of the house of slavery." },
    point: "God redeems his people from bondage not because they earned it but because he remembers his covenant, then gives his law so a rescued people can live in fellowship with a holy God. Redemption comes first; obedience is the grateful response.",
    christ: "The Passover lamb whose blood shields from judgment prefigures Christ, 'our Passover lamb' who was sacrificed (1 Corinthians 5:7).",
    chars: [
      { n: "Moses", d: "rescued as an infant and called at the burning bush to lead Israel out of Egypt and mediate God's covenant" },
      { n: "Aaron", d: "Moses' brother and spokesman, appointed as Israel's first high priest" },
      { n: "Pharaoh", d: "the hard-hearted king of Egypt who resisted God until the plagues broke his hold on Israel" },
      { n: "Miriam", d: "sister of Moses and a prophetess who led Israel in song after the crossing of the sea" }
    ]
  },
  {
    name: "Leviticus",
    genre: "Law / Narrative",
    era: "egypt-exodus",
    author: "Traditionally Moses",
    summary: "With God now dwelling in the tabernacle, Leviticus answers a burning question: how can sinful people live near a holy God? It lays out the system of sacrifices, the ordination of priests, and the laws of clean and unclean that govern Israel's worship and daily life. At its center stands the Day of Atonement, when the nation's sin is carried away and the people are cleansed. Chapter after chapter presses the call, 'You shall be holy, for I the LORD your God am holy.' The book teaches Israel that access to God requires atonement and that holiness must shape all of life.",
    verse: { ref: "Leviticus 19:2", text: "You shall be holy, for I the LORD your God am holy." },
    point: "A holy God can be approached only through atonement, and the people he redeems are called to reflect his holiness in every part of life. The sacrifices show both the seriousness of sin and God's gracious provision to deal with it.",
    christ: "The sacrifices and the Day of Atonement foreshadow Christ, the once-for-all offering and our great high priest who opens the way to God (Hebrews 9-10).",
    chars: [
      { n: "Moses", d: "the mediator through whom God delivers the laws of worship and holiness to Israel" },
      { n: "Aaron", d: "the high priest who offers sacrifices and enters the Most Holy Place on the Day of Atonement" },
      { n: "Nadab & Abihu", d: "Aaron's sons struck down for offering unauthorized fire, a warning that God must be approached on his terms" }
    ]
  },
  {
    name: "Numbers",
    genre: "Law / Narrative",
    era: "egypt-exodus",
    author: "Traditionally Moses",
    summary: "Israel sets out from Sinai, counted and organized, poised to enter the promised land. But at the border, spies return with a fearful report, and the people refuse to trust God to give them Canaan. In judgment God sentences that faithless generation to wander forty years in the wilderness until it dies out. The book records repeated grumbling, rebellion, and God's discipline, yet also his patient provision of manna, water, and guidance. A new generation finally rises on the plains of Moab, ready to inherit what their parents forfeited.",
    verse: { ref: "Numbers 6:24", text: "The LORD bless you and keep you." },
    point: "God is faithful to his promises even when his people are faithless, but unbelief carries real consequences. The wilderness years expose Israel's hearts and display both God's just discipline and his steadfast commitment to bring a people into the land.",
    christ: "The bronze serpent lifted up to heal those who look to it points to Christ lifted on the cross, that whoever believes may have eternal life (John 3:14-15).",
    chars: [
      { n: "Moses", d: "the enduring leader who intercedes for a rebellious people yet is himself barred from the land for striking the rock" },
      { n: "Aaron", d: "the high priest whose budding staff confirms his God-given authority amid rebellion" },
      { n: "Joshua & Caleb", d: "the two faithful spies who trusted God and were spared to enter the promised land" },
      { n: "Balaam", d: "a foreign diviner hired to curse Israel who is compelled by God to bless them instead" },
      { n: "Korah", d: "a Levite who led a revolt against Moses and Aaron and was swallowed by the earth in judgment" }
    ]
  },
  {
    name: "Deuteronomy",
    genre: "Law / Narrative",
    era: "egypt-exodus",
    author: "Traditionally Moses",
    summary: "On the plains of Moab, at the edge of the promised land, Moses preaches his farewell sermons to the new generation. He retells the story of God's faithfulness, restates the law, and calls Israel to wholehearted love for the LORD. Again and again he urges them to remember, to teach their children, and to choose life by obeying the God who redeemed them. He sets before them blessing for obedience and curse for rebellion, then renews the covenant. The book closes with Moses' death, as leadership passes to Joshua and Israel stands ready to enter.",
    verse: { ref: "Deuteronomy 6:5", text: "You shall love the LORD your God with all your heart and with all your soul and with all your might." },
    point: "Covenant faithfulness flows from the heart: Israel is to love and obey the one true God out of gratitude for his redemption. Moses presses a clear choice between the life that comes from clinging to God and the death that follows turning away.",
    christ: "Moses promises a coming prophet like himself to whom Israel must listen — a hope fulfilled in Christ, the greater prophet and mediator (Deuteronomy 18:15; Acts 3:22).",
    chars: [
      { n: "Moses", d: "Israel's aged leader delivering his final sermons before dying within sight of the land he could not enter" },
      { n: "Joshua", d: "commissioned by God as Moses' successor to lead Israel into Canaan" },
      { n: "The new generation", d: "the children of the wilderness, called to renew the covenant and take hold of God's promise" }
    ]
  }
]
