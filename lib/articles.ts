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
  },
  {
    slug: "the-city-begins-at-the-crossing",
    category: "Politics",
    location: "Nairobi, Kenya",
    title: "The city begins at the crossing",
    excerpt: "A city's public choices are easiest to understand at the corner where someone has to wait, walk or make room for a neighbour.",
    author: "The Politics Desk",
    publishedAt: "2026-09-25T09:20:00+03:00",
    readTime: "5 min read",
    image: "/images/nairobi-riders.jpg",
    imageAlt: "Two delivery riders travelling through a Nairobi neighbourhood",
    imageCredit: "Pexels",
    imageSource: "https://www.pexels.com/photo/motorcycle-delivery-in-nairobi-street-scene-30661401/",
    body: [
      "Public life can feel abstract until it meets an ordinary journey. A crossing, a bus stop and a stretch of shade are small pieces of the city, but they are where many people experience public decisions first.",
      "The most useful conversations about streets begin with the people who use them at different speeds. A delivery rider, a schoolchild and a market trader each notice something different about the same route.",
      "That everyday knowledge is a resource. Bringing it into planning early can make a proposal easier to understand and the finished place more welcoming to the people it is meant to serve.",
      "A city is not only the buildings it puts up. It is also the shared ground between them, and the choices that decide who can move through it with confidence."
    ]
  },
  {
    slug: "the-neighbourhood-in-the-plan",
    category: "Politics",
    location: "Nairobi, Kenya",
    title: "Keep the neighbourhood in the plan",
    excerpt: "Long-term civic thinking starts with the familiar places and everyday needs that can disappear from a drawing made at a distance.",
    author: "The Editorial Desk",
    publishedAt: "2026-09-24T13:10:00+03:00",
    readTime: "4 min read",
    image: "/images/nairobi-skyline.jpg",
    imageAlt: "Nairobi's central skyline in the soft light of morning",
    imageCredit: "Pexels",
    imageSource: "https://www.pexels.com/photo/skyline-view-of-nairobi-cityscape-at-daytime-29069344/",
    body: [
      "A plan can make a city look wonderfully clear: lines connect, blocks take shape and the future appears neatly arranged. Life on the ground is less tidy, and that is exactly why local detail matters.",
      "Neighbourhoods hold routines that rarely appear on a map. They include the short walk to a shop, the route children take home and the places where people pause to exchange news.",
      "Good civic work makes space for those details instead of treating them as obstacles. It asks what is already working, who might be left out and how a new idea can strengthen the connections already there.",
      "The city in a drawing is only a beginning. The city people recognise as their own is the one worth planning for."
    ]
  },
  {
    slug: "a-market-is-a-network",
    category: "Business",
    location: "Nairobi, Kenya",
    title: "A market is more than a place to buy",
    excerpt: "Behind every colourful stall is a web of trust, timing and small decisions that helps a neighbourhood do business.",
    author: "The Business Desk",
    publishedAt: "2026-09-24T08:45:00+03:00",
    readTime: "4 min read",
    image: "/images/nairobi-market.jpg",
    imageAlt: "A colourful produce stall at a Nairobi street market",
    imageCredit: "Marie Frank via Pexels",
    imageSource: "https://www.pexels.com/photo/vibrant-street-market-in-nairobi-kenya-33730494/",
    body: [
      "A market is built from more than what is arranged on a table. It depends on people who know one another's habits, suppliers who arrive when they can and customers who return because a familiar face is part of the experience.",
      "That network is easy to underestimate when business is described only in terms of scale. Small exchanges can carry their own kind of value: a recommendation, a remembered preference or a chance to try something new.",
      "For a trader, presentation matters, but so does being present. Regular conversation helps a stall become a dependable part of the day rather than simply another stop along the way.",
      "Look closely at a busy market and its economy comes into focus as a shared effort, renewed with every greeting and every careful choice."
    ]
  },
  {
    slug: "the-value-of-a-familiar-shop",
    category: "Business",
    location: "Nairobi, Kenya",
    title: "The quiet value of a familiar shop",
    excerpt: "A neighbourhood business earns its place through reliable service, local knowledge and a relationship measured one visit at a time.",
    author: "The Business Desk",
    publishedAt: "2026-09-23T11:15:00+03:00",
    readTime: "3 min read",
    image: "/images/nairobi-market.jpg",
    imageAlt: "A colourful produce stall at a Nairobi street market",
    imageCredit: "Marie Frank via Pexels",
    imageSource: "https://www.pexels.com/photo/vibrant-street-market-in-nairobi-kenya-33730494/",
    body: [
      "The best-known shop on a street is not always the biggest. Sometimes it is the place where someone remembers how you take your tea, sets aside what you asked for or points you towards a better choice.",
      "Those gestures are part of how trust is built. They take time, attention and a steady presence, qualities that do not always show up in a balance sheet but can shape how a business is valued by the people around it.",
      "Local enterprise responds to a particular place. Its owners learn the rhythm of the block, notice what changes and adjust the way they serve the people who come through the door.",
      "A familiar shop is both a business and a meeting point. Its strength is often found in the relationships it makes room for."
    ]
  },
  {
    slug: "the-coast-keeps-its-own-time",
    category: "Culture",
    location: "Mombasa, Kenya",
    title: "The coast keeps its own time",
    excerpt: "Morning light, salt air and a slow walk by the water reveal a coastal rhythm that asks visitors to pay attention.",
    author: "The Culture Desk",
    publishedAt: "2026-09-24T07:30:00+03:00",
    readTime: "3 min read",
    image: "/images/mombasa-sunrise.jpg",
    imageAlt: "Two people walking along Mombasa beach at sunrise",
    imageCredit: "Zebari Visuals on Pexels",
    imageSource: "https://www.pexels.com/photo/mombasa-beach-silhouette-at-sunrise-37476352/",
    body: [
      "At the water's edge, the day seems to arrive in layers. The sky changes first, then the sea brightens and the familiar outline of the shore comes into view.",
      "A coastline is never only a view. It is a place people work, meet, remember and return to, carrying the habits that make one stretch of shore feel different from another.",
      "The pace of the morning invites a particular kind of attention. A walk becomes a chance to notice the sounds, the shifting colour and the many ways a shared landscape can hold personal meaning.",
      "Culture often lives in these repeated gestures. The coast keeps time through them, one morning and one conversation at a time."
    ]
  },
  {
    slug: "the-small-rituals-that-make-a-city",
    category: "Culture",
    location: "Nairobi, Kenya",
    title: "The small rituals that make a city",
    excerpt: "Everyday greetings, shared tables and familiar routes turn a fast-moving capital into a place people recognise as home.",
    author: "The Culture Desk",
    publishedAt: "2026-09-22T10:00:00+03:00",
    readTime: "4 min read",
    image: "/images/nairobi-dusk.jpg",
    imageAlt: "Nairobi's skyline glowing beneath a deep blue evening sky",
    imageCredit: "Pexels",
    imageSource: "https://www.pexels.com/photo/stunning-nairobi-skyline-at-dusk-29069329/",
    body: [
      "A city can be introduced by its skyline, but it is remembered through smaller things: the greeting exchanged at a gate, the usual seat on a commute and the place where friends agree to meet.",
      "These rituals are rarely planned. They grow as people share space, adapt to change and find ways to make a large city feel close enough to belong to.",
      "Nairobi's energy is visible in its movement, yet the pauses matter too. A familiar corner or a moment of conversation can make the city's scale feel more human.",
      "Pay attention to the ordinary and a different portrait appears. It is a portrait made of habits, hospitality and the many ways people create a sense of home."
    ]
  },
  {
    slug: "a-coastline-of-many-conversations",
    category: "East Africa",
    location: "Zanzibar, Tanzania",
    title: "A coastline of many conversations",
    excerpt: "Along the Indian Ocean, boats, ports and neighbourhoods connect lives through work, memory and the movement of ideas.",
    author: "The East Africa Desk",
    publishedAt: "2026-09-23T08:20:00+03:00",
    readTime: "5 min read",
    image: "/images/zanzibar-dhow.jpg",
    imageAlt: "A traditional fishing boat seen from above in the clear water near Zanzibar",
    imageCredit: "Keegan Checks via Pexels",
    imageSource: "https://www.pexels.com/photo/aerial-view-of-a-boat-on-the-sea-4844208/",
    body: [
      "The ocean can look like a boundary from land. For the people who know its routes, it is also a meeting place, carrying work, stories and ways of seeing from one shore to another.",
      "A boat is part of that wider picture. Its shape holds practical knowledge: how to read the water, care for a sail and move safely through conditions that change from one day to the next.",
      "Coastal life is connected by more than distance. Shared words, craft and memory travel with people, forming a conversation that has never belonged to a single port alone.",
      "To look at the coast closely is to notice how much is happening between the horizon and the shore. The region's connections are lived, worked and renewed there."
    ]
  },
  {
    slug: "the-view-from-the-other-shore",
    category: "East Africa",
    location: "Zanzibar, Tanzania",
    title: "The view from the other shore",
    excerpt: "A regional story becomes richer when neighbouring places are seen not as a backdrop, but as voices in the same conversation.",
    author: "The East Africa Desk",
    publishedAt: "2026-09-21T09:10:00+03:00",
    readTime: "4 min read",
    image: "/images/zanzibar-dhow.jpg",
    imageAlt: "A traditional fishing boat seen from above in the clear water near Zanzibar",
    imageCredit: "Keegan Checks via Pexels",
    imageSource: "https://www.pexels.com/photo/aerial-view-of-a-boat-on-the-sea-4844208/",
    body: [
      "It is tempting to describe a region from the centre of one city. The view changes when attention shifts to a neighbouring shore and the people who understand its daily patterns best.",
      "A regional perspective is not a single point of view. It is made from local experience, shared histories and the small exchanges that continue even when borders make the map look divided.",
      "Listening across places helps a story hold more than one truth at once. It can make familiar questions feel different and reveal connections that a quick glance might miss.",
      "The other shore is never simply distant. It is part of the region's ongoing conversation, with its own voice and its own way of seeing."
    ]
  },
  {
    slug: "follow-the-waterline",
    category: "Environment",
    location: "Nakuru County, Kenya",
    title: "Follow the waterline through the grasslands",
    excerpt: "Water shapes the routes wildlife takes and the questions communities ask about caring for a shared, changing landscape.",
    author: "The Environment Desk",
    publishedAt: "2026-09-23T15:40:00+03:00",
    readTime: "5 min read",
    image: "/images/maasai-elephants.jpg",
    imageAlt: "An African elephant and calf moving through open grassland in Kenya",
    imageCredit: "Pexels",
    imageSource: "https://www.pexels.com/photo/elephants-walking-on-a-grass-field-6164790/",
    body: [
      "In open country, water is one of the quiet forces that organises a landscape. It draws animals along familiar routes and shapes the way people understand the land around them.",
      "Following those routes can reveal where different needs meet. Conservation work is strongest when it includes people who live with the landscape and know how it changes through the seasons.",
      "The picture is more complex than a single dramatic sighting. It includes access, patience and the practical choices that help wildlife and communities share space.",
      "A waterline tells a story of connection. Paying attention to it is one way to see the grasslands as a living place, not simply a distant view."
    ]
  },
  {
    slug: "a-city-built-for-the-walk-between",
    category: "Opinion",
    location: "Nairobi, Kenya",
    title: "Build a city for the walk between",
    excerpt: "The quality of an urban journey is often decided by the short walk before the ride, the crossing and the place to wait.",
    author: "The Opinion Desk",
    publishedAt: "2026-09-22T15:20:00+03:00",
    readTime: "4 min read",
    image: "/images/nairobi-skyline.jpg",
    imageAlt: "Nairobi's central skyline in the soft light of morning",
    imageCredit: "Pexels",
    imageSource: "https://www.pexels.com/photo/skyline-view-of-nairobi-cityscape-at-daytime-29069344/",
    body: [
      "A journey is often measured from the moment a vehicle moves. For the person making it, the experience begins much earlier: at the door, along the pavement and at the place where the next step is not obvious.",
      "Those in-between moments deserve the same care as the headline infrastructure. A clear crossing, a comfortable place to wait and a continuous path can make the whole trip feel more possible.",
      "Designing around walking is not a sentimental extra. It is a practical way to think about access, safety and the everyday dignity of moving through a city.",
      "A better urban future will be judged not only by how far we travel, but by how thoughtful the walk between each part of the journey becomes."
    ]
  },
  {
    slug: "listening-is-part-of-the-infrastructure",
    category: "Opinion",
    location: "Nairobi, Kenya",
    title: "Listening is part of the infrastructure",
    excerpt: "Before a street changes, the people who use it every day already know where the pinch points and possibilities are.",
    author: "The Opinion Desk",
    publishedAt: "2026-09-20T12:40:00+03:00",
    readTime: "4 min read",
    image: "/images/nairobi-riders.jpg",
    imageAlt: "Two delivery riders travelling through a Nairobi neighbourhood",
    imageCredit: "Pexels",
    imageSource: "https://www.pexels.com/photo/motorcycle-delivery-in-nairobi-street-scene-30661401/",
    body: [
      "The most valuable information about a street may come from the person who uses it every day. They know where a route narrows, when a crossing feels difficult and which small change would make a real difference.",
      "Listening is sometimes treated as a step before the work begins. It should be part of the work itself: a way to notice what is happening, test an idea and learn from the people who live with the outcome.",
      "No single conversation will answer every question. But a process that makes room for many voices is more likely to see the full shape of a place.",
      "Infrastructure is made of materials and decisions. It is also made of trust, and trust starts when people can recognise their own experience in the choices being made."
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
