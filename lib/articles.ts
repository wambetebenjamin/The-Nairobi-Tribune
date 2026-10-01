export type Article = {
  slug: string;
  category: string;
  location: string;
  title: string;
  excerpt: string;
  author: string;
  publishedAt: string;
  readTime: string;
  image: string;
  imageAlt: string;
  imageCredit: string;
  imageSource: string;
  body: string[];
};

export const articles: Article[] = [
  {
    slug: "nairobi-in-motion",
    category: "Kenya",
    location: "Nairobi, Kenya",
    title: "Nairobi is a city written in motion",
    excerpt:
      "From the first matatu queue to the final evening ride, the capital's daily movement tells a story about who gets to shape the city.",
    author: "The City Desk",
    publishedAt: "2026-10-01T08:10:00+03:00",
    readTime: "5 min read",
    image: "/images/nairobi-dusk.jpg",
    imageAlt: "Nairobi's skyline glowing beneath a deep blue evening sky",
    imageCredit: "Pexels",
    imageSource: "https://www.pexels.com/photo/stunning-nairobi-skyline-at-dusk-29069329/",
    body: [
      "Nairobi announces itself through movement. Before the sun clears the horizon, a stream of buses, motorbikes and pedestrians is already threading between homes, markets and office towers.",
      "The city's pace is often described as a challenge to manage. It is also a portrait of people making a living, meeting one another and finding their own routes through a place that keeps changing around them.",
      "A better journey begins with small acts of attention. A shaded path, a safe crossing and a clear place to wait can change the way an ordinary morning feels. These details are easy to overlook when the conversation turns only to new roads and taller buildings.",
      "Nairobi's next chapter will be shaped not only by its skyline, but by the everyday spaces that let more people take part in city life."
    ]
  },
  {
    slug: "the-market-before-noon",
    category: "Business",
    location: "Nairobi, Kenya",
    title: "The market that opens before the city does",
    excerpt:
      "A row of produce stalls offers a close view of the patience, trade and neighbourhood ties behind a city's daily economy.",
    author: "The Business Desk",
    publishedAt: "2026-10-01T07:25:00+03:00",
    readTime: "4 min read",
    image: "/images/nairobi-market.jpg",
    imageAlt: "A colourful produce stall at a Nairobi street market",
    imageCredit: "Marie Frank via Pexels",
    imageSource: "https://www.pexels.com/photo/vibrant-street-market-in-nairobi-kenya-33730494/",
    body: [
      "The first signs of trade arrive quietly. A stall is swept clean, fruit is set out in careful rows and familiar greetings pass between the people who make a market feel like part of the neighbourhood.",
      "Small businesses are often discussed through numbers alone. On the ground, their value is just as visible in the relationships that keep customers returning and the quick decisions that help a family plan its day.",
      "For shoppers, the market is a place to compare, ask questions and choose what is fresh. For a trader, every display is an invitation to stop and talk. The exchange is practical, but it is also social.",
      "That everyday connection is easy to miss from a distance. Spend a morning among the stalls and the city's economy becomes more human, one conversation at a time."
    ]
  },
  {
    slug: "public-space-belongs-to-everyone",
    category: "Politics",
    location: "Nairobi, Kenya",
    title: "A public space is only as good as the people who can use it",
    excerpt:
      "The measure of a city's plans is found in the ordinary journey, from a safe crossing to a place to pause in the shade.",
    author: "The Editorial Desk",
    publishedAt: "2026-09-30T16:40:00+03:00",
    readTime: "6 min read",
    image: "/images/nairobi-riders.jpg",
    imageAlt: "Two delivery riders travelling through a Nairobi neighbourhood",
    imageCredit: "Pexels",
    imageSource: "https://www.pexels.com/photo/motorcycle-delivery-in-nairobi-street-scene-30661401/",
    body: [
      "Public decisions become real at street level. They are felt in the way a child crosses a road, how long a worker waits for a ride and whether an older neighbour can find a quiet place to rest.",
      "That is why the best measure of a plan is not only what appears on a map. It is whether people can use the result without special knowledge, extra expense or unnecessary risk.",
      "Good public space makes room for movement and stillness. It supports the small businesses that line a street while keeping the way clear for those who need to pass through it.",
      "Listening to those who use a place every day is a useful starting point. A city becomes more generous when its public choices reflect the lives already unfolding there."
    ]
  },
  {
    slug: "a-giant-in-the-grasslands",
    category: "Environment",
    location: "Nakuru County, Kenya",
    title: "In the grasslands, every path tells a story",
    excerpt:
      "An elephant and her calf invite a closer look at the shared spaces, careful choices and long view behind conservation.",
    author: "The Environment Desk",
    publishedAt: "2026-09-30T12:15:00+03:00",
    readTime: "5 min read",
    image: "/images/maasai-elephants.jpg",
    imageAlt: "An African elephant and calf moving through open grassland in Kenya",
    imageCredit: "Pexels",
    imageSource: "https://www.pexels.com/photo/elephants-walking-on-a-grass-field-6164790/",
    body: [
      "Across Kenya's open grasslands, an animal's path is rarely just a line through the landscape. It can connect water, food, shelter and the wider habits that make a living ecosystem possible.",
      "Conservation is often framed as a choice between people and wildlife. The more useful question is how communities, public agencies and conservation groups can make room for both, with local knowledge at the centre of the conversation.",
      "That work asks for patience. It depends on noticing how land is used, sharing information early and keeping the needs of people who live near wildlife in view.",
      "The long view is made from many small decisions. Each one can help protect a landscape without losing sight of the people who call it home."
    ]
  },
  {
    slug: "the-dhow-and-the-coast",
    category: "East Africa",
    location: "Zanzibar, Tanzania",
    title: "A dhow carries more than a catch",
    excerpt:
      "Along the Swahili coast, a working boat is also a reminder of the conversations, skill and exchange that connect the region.",
    author: "The East Africa Desk",
    publishedAt: "2026-09-29T10:05:00+03:00",
    readTime: "4 min read",
    image: "/images/zanzibar-dhow.jpg",
    imageAlt: "A traditional fishing boat seen from above in the clear water near Zanzibar",
    imageCredit: "Keegan Checks via Pexels",
    imageSource: "https://www.pexels.com/photo/aerial-view-of-a-boat-on-the-sea-4844208/",
    body: [
      "From above, a wooden boat looks small against the blue sweep of the Indian Ocean. At water level, it is a workplace, a source of knowledge and a familiar part of the coast's daily rhythm.",
      "The dhow is one of the images most associated with the Swahili coast, but its meaning reaches beyond the postcard. It points to the people who know the tide, repair a sail and carry news between shores.",
      "That knowledge is built through practice and shared over time. It connects fishing communities with the wider story of trade and culture that has shaped life along the East African coast.",
      "To understand the coast, look beyond the horizon. The work on the water is part of a much larger conversation about place, livelihood and belonging."
    ]
  },
  {
    slug: "mombasa-before-the-city-wakes",
    category: "Culture",
    location: "Mombasa, Kenya",
    title: "Mombasa meets the morning at the water's edge",
    excerpt:
      "Before the heat settles in, the shore offers a quieter view of a city shaped by the sea and the people who know it well.",
    author: "The Culture Desk",
    publishedAt: "2026-09-28T09:30:00+03:00",
    readTime: "3 min read",
    image: "/images/mombasa-sunrise.jpg",
    imageAlt: "Two people walking along Mombasa beach at sunrise",
    imageCredit: "Zebari Visuals on Pexels",
    imageSource: "https://www.pexels.com/photo/mombasa-beach-silhouette-at-sunrise-37476352/",
    body: [
      "At first light, the shoreline feels like a different kind of meeting place. The day's noise has not yet arrived, and the sea sets the pace for a few unhurried minutes.",
      "Mombasa's relationship with the water is practical as well as personal. It shapes work, food, memory and the way residents understand the city around them.",
      "A morning walk offers a small lesson in attention. Watch the colour of the sky change, listen to the waves settle and notice how the beach belongs to people in different ways.",
      "The coast has many stories. Some are told in archives and old streets. Others begin quietly, as the day opens beside the water."
    ]
  },
  {
    slug: "make-room-for-the-slower-journey",
    category: "Opinion",
    location: "Nairobi, Kenya",
    title: "A city should make room for the slowest journey",
    excerpt:
      "A fair transport conversation starts with the person who has to walk, wait, carry or cross before any journey can begin.",
    author: "The Opinion Desk",
    publishedAt: "2026-09-27T14:00:00+03:00",
    readTime: "5 min read",
    image: "/images/nairobi-skyline.jpg",
    imageAlt: "Nairobi's central skyline in the soft light of morning",
    imageCredit: "Pexels",
    imageSource: "https://www.pexels.com/photo/skyline-view-of-nairobi-cityscape-at-daytime-29069344/",
    body: [
      "A transport plan is often described through speed and capacity. Those measures matter, but they do not tell the whole story of a journey.",
      "Every trip begins and ends on foot. A parent with a child, a trader carrying supplies and a commuter crossing a wide road all experience the city from a different height and pace.",
      "Designing for the slowest journey does not hold a city back. It makes the shared parts of travel more useful, more legible and safer for everyone.",
      "The test of progress is not only how quickly a vehicle moves. It is whether a person can get where they need to go with dignity."
    ]
  },
  {
    slug: "the-wild-beyond-the-postcard",
    category: "Environment",
    location: "Maasai Mara, Kenya",
    title: "The wild has a place beyond the postcard",
    excerpt:
      "A leopard resting in a tree is a striking image, but the life of a reserve is built from much more than a single view.",
    author: "The Environment Desk",
    publishedAt: "2026-09-26T11:50:00+03:00",
    readTime: "4 min read",
    image: "/images/maasai-leopard.jpg",
    imageAlt: "A leopard resting on a tree branch in the Maasai Mara",
    imageCredit: "Pexels",
    imageSource: "https://www.pexels.com/photo/leopard-resting-in-tree-masai-mara-kenya-33651245/",
    body: [
      "The first thing a visitor notices may be the animal. The larger story sits in the life around it: the grass, the water, the people who care for the land and the paths that connect one habitat to another.",
      "Wildlife photography can open a door to that story. A single frame becomes more meaningful when it leads to questions about stewardship, local livelihoods and how a landscape changes through the seasons.",
      "A reserve is not separate from the region around it. Its future depends on relationships between communities, visitors and the wider natural world.",
      "The most lasting view is one that keeps the whole landscape in focus."
    ]
  }
];

export const categories = ["Kenya", "Politics", "Business", "Culture", "East Africa", "Environment", "Opinion"];

export function categorySlug(category: string) {
  return category.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

export function findArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}

export function getArticlesByCategory(category: string) {
  const normalized = category.trim().toLowerCase();
  if (normalized === "kenya") {
    return articles.filter((article) => article.location.endsWith("Kenya"));
  }
  return articles.filter((article) => article.category.toLowerCase() === normalized);
}

export function searchArticles(query: string) {
  const normalizedQuery = query.trim().toLowerCase();
  if (!normalizedQuery) return [];

  return articles.filter((article) =>
    [article.title, article.excerpt, article.category, article.location, ...article.body]
      .join(" ")
      .toLowerCase()
      .includes(normalizedQuery)
  );
}

export function formatArticleDate(date: string) {
  return new Intl.DateTimeFormat("en-KE", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Africa/Nairobi"
  }).format(new Date(date));
}
