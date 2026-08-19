import type { CalendarEntry } from './types'

export const CALENDAR_INTRO = "The church calendar walks the whole story of Christ across the year, from expectation to fulfillment. Not every tradition keeps every date, but these seasons and feasts have shaped Christian worship for centuries."

export const CALENDAR: CalendarEntry[] = [
  {
    name: "Advent",
    kind: "Season",
    when: "The four Sundays before Christmas",
    color: "Purple",
    colorHex: "#6B4E9E",
    summary: "Advent opens the church year with a season of waiting and hope, looking back to Christ's first coming and forward to his return.",
    observance: "Marked by Advent wreaths and candles, Scripture readings of promise, and a spirit of expectant preparation rather than premature celebration."
  },
  {
    name: "Christmas / Christmastide",
    kind: "Feast",
    when: "December 25 and the twelve days that follow",
    color: "White & Gold",
    colorHex: "#C9A227",
    summary: "Christmas celebrates the Incarnation, God taking on human flesh as Jesus is born in Bethlehem.",
    observance: "Kept with joyful worship, carols, and feasting; the historic 'twelve days' stretch the celebration from Christmas Day toward Epiphany."
  },
  {
    name: "Epiphany",
    kind: "Feast",
    when: "January 6",
    color: "White",
    colorHex: "#C9A227",
    summary: "Epiphany marks the revealing of Christ to the nations, remembered especially in the visit of the Magi to the young Jesus.",
    observance: "Celebrated with readings of the wise men and star, it highlights that the Savior came for all peoples, not one nation alone."
  },
  {
    name: "Ordinary Time (after Epiphany)",
    kind: "Season",
    when: "The weeks between Epiphany and Lent",
    color: "Green",
    colorHex: "#4F8A52",
    summary: "This quieter stretch follows Jesus' early ministry and calls believers toward steady growth in discipleship.",
    observance: "Without a major feast to frame it, worship turns to teaching, everyday faithfulness, and maturing in Christ."
  },
  {
    name: "Ash Wednesday",
    kind: "Feast",
    when: "The first day of Lent, forty days before Easter",
    color: "Purple",
    colorHex: "#6B4E9E",
    summary: "Ash Wednesday begins Lent with a sober call to repentance and a reminder of human mortality.",
    observance: "Many churches mark foreheads with ashes and the words 'from dust you came and to dust you shall return,' opening a season of self-examination."
  },
  {
    name: "Lent",
    kind: "Season",
    when: "The forty days leading up to Easter",
    color: "Purple",
    colorHex: "#6B4E9E",
    summary: "Lent is a season of fasting, repentance, and prayer that prepares the heart for Easter.",
    observance: "Christians often give something up or take on a discipline, echoing Jesus' forty days in the wilderness and drawing near to God."
  },
  {
    name: "Palm Sunday",
    kind: "Feast",
    when: "The Sunday before Easter, opening Holy Week",
    color: "Red",
    colorHex: "#B2543A",
    summary: "Palm Sunday remembers Jesus' entry into Jerusalem, welcomed by crowds waving palm branches.",
    observance: "Congregations wave palms and sing 'Hosanna,' beginning the week that moves from triumph toward the cross."
  },
  {
    name: "Maundy Thursday",
    kind: "Feast",
    when: "The Thursday of Holy Week",
    color: "White",
    colorHex: "#C9A227",
    summary: "Maundy Thursday recalls the Last Supper and Jesus' new commandment to love one another.",
    observance: "Often kept with the Lord's Supper and footwashing; the name comes from 'mandatum,' the command Jesus gave that night."
  },
  {
    name: "Good Friday",
    kind: "Feast",
    when: "The Friday of Holy Week",
    color: "Red / Black",
    colorHex: "#3A3730",
    summary: "Good Friday remembers the crucifixion of Jesus, the most solemn day of the Christian year.",
    observance: "Marked by quiet, stripped-down services and reflection on the cross, it holds grief and gratitude together as it awaits Easter."
  },
  {
    name: "Easter / Eastertide",
    kind: "Feast",
    when: "Easter Sunday and the fifty days that follow",
    color: "White & Gold",
    colorHex: "#C9A227",
    summary: "Easter celebrates the resurrection of Jesus, the greatest feast of the faith and the ground of Christian hope.",
    observance: "The joy of Easter Day expands into a fifty-day season of celebration, singing 'He is risen' and living in resurrection hope."
  },
  {
    name: "Ascension Day",
    kind: "Feast",
    when: "Forty days after Easter",
    color: "White",
    colorHex: "#C9A227",
    summary: "Ascension Day marks Jesus rising to heaven to reign at the Father's right hand.",
    observance: "It celebrates Christ's exaltation and ongoing rule, and the promise that he will one day return in the same way he left."
  },
  {
    name: "Pentecost",
    kind: "Feast",
    when: "Fifty days after Easter",
    color: "Red",
    colorHex: "#B2543A",
    summary: "Pentecost celebrates the gift of the Holy Spirit and the birth of the Church.",
    observance: "Remembering the Spirit poured out on the first believers, it is often called the Church's birthday and a call to mission."
  },
  {
    name: "Trinity Sunday",
    kind: "Feast",
    when: "The Sunday after Pentecost",
    color: "White",
    colorHex: "#C9A227",
    summary: "Trinity Sunday contemplates the mystery of the one God who is Father, Son, and Holy Spirit.",
    observance: "Rather than an event, it honors who God is, inviting worship of the triune God at the heart of the Christian faith."
  },
  {
    name: "Ordinary Time (after Pentecost)",
    kind: "Season",
    when: "The long stretch from after Pentecost until Advent",
    color: "Green",
    colorHex: "#4F8A52",
    summary: "This long green season is for living out the faith day by day until the church year begins again.",
    observance: "The extended season centers on growth, service, and following Jesus faithfully as the calendar circles back toward Advent."
  }
]
