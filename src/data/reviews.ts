/**
 * Short excerpts from public Google reviews. Nothing here is invented —
 * each quote is trimmed from a real review. Balanced feedback is included
 * on purpose.
 */
export type Review = {
  author: string;
  when: string;
  quote: string;
  theme: string;
  sentiment: "positive" | "mixed" | "critical";
};

export const reviews: Review[] = [
  {
    author: "Sarah Dawood",
    when: "3 years ago",
    quote:
      "Old school Chinese food… still tastes and smells like when I was a kid. We ordered wonton soup — amazing!",
    theme: "Nostalgia",
    sentiment: "positive",
  },
  {
    author: "Benjamin Walker",
    when: "2 years ago",
    quote:
      "We have been going to Yuan Tung since years and their food tastes just the same. My favourites are the hot & sour soup, chicken manchurian, schezuan fish and bbq squid.",
    theme: "Consistent taste",
    sentiment: "positive",
  },
  {
    author: "Ali Mirza",
    when: "2 months ago",
    quote:
      "We were 10 people. We ordered thai soup and hot and sour soup, fish, prawns, vegetable fried rice… food was very good, atmosphere was excellent. Purely a family place.",
    theme: "Family dining",
    sentiment: "positive",
  },
  {
    author: "Saad Ahmed",
    when: "5 years ago",
    quote: "Sticky fish! The best sticky fish. Plus their fried rice, fish and chips, soup…",
    theme: "Seafood",
    sentiment: "positive",
  },
  {
    author: "Aly Balagamwala",
    when: "3 years ago",
    quote:
      "Consistent Pakistani Chinese offering known for its 'hotpot' soups. One of their best offerings is the bar-b-que squid if you are inclined to seafood.",
    theme: "Hotpot & soups",
    sentiment: "positive",
  },
  {
    author: "Unzila Siddique",
    when: "2 years ago",
    quote:
      "This place is cozy and homely with some really comforting great food. Generous with quantity and excellent value for money.",
    theme: "Atmosphere",
    sentiment: "positive",
  },
  {
    author: "Farha Shah",
    when: "7 months ago",
    quote:
      "Growing up we always used to go to Yuan Tung for Chinese food. Thai soup used to be our favourite.",
    theme: "Nostalgia",
    sentiment: "positive",
  },
  {
    author: "Sadiq Hussain",
    when: "a month ago",
    quote: "Food was really tasty, specially Dry Chicken Chilli and Sizzling Prawns.",
    theme: "Popular dishes",
    sentiment: "positive",
  },
];

/** Shown so the picture stays honest, as the owner asked. */
export const balancedReviews: Review[] = [
  {
    author: "Ziad ul Haq Khawaja",
    when: "a month ago",
    quote:
      "The taste of food was better for me than several other Chinese restaurants. However the quantity was too low, whereas prices were about the same as others.",
    theme: "Portions & price",
    sentiment: "mixed",
  },
  {
    author: "Mohammed Khanani",
    when: "a year ago",
    quote:
      "The hotpot soup and prawn toast were good. The mains were a letdown on my last visit.",
    theme: "Mixed visit",
    sentiment: "mixed",
  },
  {
    author: "Fawad Qazi",
    when: "6 months ago",
    quote: "Good food, but the restaurant needs renovation.",
    theme: "Interior",
    sentiment: "critical",
  },
];

export const reviewThemes = [
  "hot and sour soup",
  "chowmein",
  "manchurian",
  "fried prawn balls",
  "seafood",
  "family dining",
  "nostalgia",
];
