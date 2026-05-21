export type Category =
  | "first-time"
  | "neighborhoods"
  | "night-markets"
  | "food"
  | "desserts"
  | "cafes";

export type Rec = {
  name: string;
  area: string;
  category: Category;
  note: string;
  tags: string[];
  mapQuery: string;
};

export const categories: { id: Category | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "first-time", label: "First-time Taipei" },
  { id: "neighborhoods", label: "Neighborhoods" },
  { id: "night-markets", label: "Night markets" },
  { id: "food", label: "Food classics" },
  { id: "desserts", label: "Desserts" },
  { id: "cafes", label: "Cute cafes" },
];

export const sections: { id: Category; title: string; dek?: string }[] = [
  {
    id: "first-time",
    title: "First-time Taipei",
    dek: "Classic stops that are still worth doing once.",
  },
  {
    id: "neighborhoods",
    title: "Neighborhoods to wander",
    dek: "Good areas when you want the day to unfold without too much planning.",
  },
  {
    id: "night-markets",
    title: "Night markets",
    dek: "Easy first picks, from very food-focused to full tourist chaos.",
  },
  {
    id: "food",
    title: "Food classics",
    dek: "Reliable Taipei staples. Not hidden gems, just useful places to know.",
  },
  {
    id: "desserts",
    title: "Desserts",
    dek: "Mango ice, tofu pudding, and a couple sweet stops.",
  },
  {
    id: "cafes",
    title: "Cute cafes, not coffee homework",
    dek: "Places that work even if nobody wants to talk about extraction.",
  },
];

export const recs: Rec[] = [
  {
    name: "Jiufen Old Street",
    area: "Ruifang, day trip",
    category: "first-time",
    note: "Tourist-heavy, but still magical for a first Taiwan trip. Lanterns, stairs, tea houses, mountain and ocean views. Best late afternoon into evening. It is outside Taipei city, but close enough to include.",
    tags: ["day trip", "touristy but worth it", "views"],
    mapQuery: "Jiufen Old Street",
  },
  {
    name: "Taipei 101 / Xinyi",
    area: "Xinyi",
    category: "first-time",
    note: "The obvious landmark, but still fun if it is your first time. Good to combine with dinner, drinks, or a mall break nearby.",
    tags: ["first-timer", "landmark", "easy"],
    mapQuery: "Taipei 101",
  },
  {
    name: "Elephant Mountain",
    area: "Xinyi",
    category: "first-time",
    note: "Short but sweaty stairs, classic Taipei 101 view. Best around sunset if the weather is clear.",
    tags: ["view", "sunset", "stairs"],
    mapQuery: "Elephant Mountain Taipei",
  },
  {
    name: "Chiang Kai-shek Memorial Hall",
    area: "Zhongzheng",
    category: "first-time",
    note: "Big iconic Taipei landmark. Easy stop if you are nearby, and the plaza gives you a lot of Taipei in one glance.",
    tags: ["first-timer", "landmark", "easy stop"],
    mapQuery: "Chiang Kai-shek Memorial Hall",
  },
  {
    name: "Yongkang Street / 永康街",
    area: "Da'an",
    category: "neighborhoods",
    note: "One of the easiest first-time Taipei areas. Food, dessert, boutiques, side streets, and lots nearby.",
    tags: ["first-timer", "food", "walk"],
    mapQuery: "Yongkang Street Taipei",
  },
  {
    name: "Zhongshan",
    area: "Zhongshan",
    category: "neighborhoods",
    note: "Good for shopping, cafes, small boutiques, and a more stylish Taipei afternoon.",
    tags: ["shopping", "cafes", "afternoon"],
    mapQuery: "Zhongshan Station Taipei",
  },
  {
    name: "Ximending",
    area: "Wanhua",
    category: "neighborhoods",
    note: "Youthful, chaotic, neon, street food, shopping. More fun at night.",
    tags: ["night", "shopping", "street food"],
    mapQuery: "Ximending Taipei",
  },
  {
    name: "Dadaocheng / Dihua Street",
    area: "Datong",
    category: "neighborhoods",
    note: "Old Taipei, tea, dried goods, restored buildings, small shops. Nice slower walk.",
    tags: ["old taipei", "tea", "slow walk"],
    mapQuery: "Dihua Street Taipei",
  },
  {
    name: "Tianmu",
    area: "Shilin",
    category: "neighborhoods",
    note: "More relaxed, suburban, and international. Home to TAS and TJS, so the area has a different rhythm: cafes, brunch spots, bakeries, families, and an easy weekend pace.",
    tags: ["weekend", "cafes", "slower pace"],
    mapQuery: "Tianmu Taipei",
  },
  {
    name: "Oasis Coffee Roasters",
    area: "Tianmu",
    category: "neighborhoods",
    note: "Bright, airy cafe with a very Tianmu feel. Easy place to spend a slow afternoon.",
    tags: ["cafe", "tianmu", "slow afternoon"],
    mapQuery: "Oasis Coffee Roasters Tianmu",
  },
  {
    name: "All Day Roasting Company",
    area: "Tianmu",
    category: "neighborhoods",
    note: "Popular brunch and cafe spot that works well even for non-coffee people.",
    tags: ["brunch", "cafe", "tianmu"],
    mapQuery: "All Day Roasting Company Tianmu",
  },
  {
    name: "Tianmu Flea Market",
    area: "Tianmu",
    category: "neighborhoods",
    note: "Weekend flea market with vintage finds, random objects, and a fun local atmosphere.",
    tags: ["weekend", "flea market", "local"],
    mapQuery: "Tianmu Flea Market",
  },
  {
    name: "Raohe Night Market",
    area: "Songshan",
    category: "night-markets",
    note: "Best first night market. Straightforward layout, temple entrance, lots of classic snacks. Try the pepper bun.",
    tags: ["first-timer", "night market", "pepper bun"],
    mapQuery: "Raohe Night Market",
  },
  {
    name: "Ningxia Night Market",
    area: "Datong",
    category: "night-markets",
    note: "Smaller and very food-focused. Good if you want eating more than games or shopping.",
    tags: ["food", "night market", "compact"],
    mapQuery: "Ningxia Night Market",
  },
  {
    name: "Shilin Night Market",
    area: "Shilin",
    category: "night-markets",
    note: "Famous and touristy. Not my top food pick, but still a classic if someone wants the big-name night market.",
    tags: ["classic", "touristy", "night market"],
    mapQuery: "Shilin Night Market",
  },
  {
    name: "Din Tai Fung",
    area: "Multiple locations",
    category: "food",
    note: "Famous worldwide, but still worth doing in Taipei. Xiao long bao, cucumber salad, fried rice, spicy wontons.",
    tags: ["first-timer", "xiao long bao", "easy"],
    mapQuery: "Din Tai Fung Taipei",
  },
  {
    name: "Yongkang Beef Noodles",
    area: "Yongkang",
    category: "food",
    note: "Classic beef noodle soup pick right by Yongkang Street.",
    tags: ["beef noodles", "classic", "yongkang"],
    mapQuery: "Yongkang Beef Noodles Taipei",
  },
  {
    name: "Lin Dong Fang Beef Noodles",
    area: "Zhongshan",
    category: "food",
    note: "Another famous beef noodle option if it fits the route.",
    tags: ["beef noodles", "classic"],
    mapQuery: "Lin Dong Fang Beef Noodles Taipei",
  },
  {
    name: "Fu Hang Soy Milk",
    area: "Zhongzheng",
    category: "food",
    note: "Classic Taiwanese breakfast. Great, but the line can be brutal. Go early or skip if lines ruin the mood.",
    tags: ["breakfast", "classic", "go early"],
    mapQuery: "Fu Hang Soy Milk Taipei",
  },
  {
    name: "Smoothie House",
    area: "Yongkang",
    category: "desserts",
    note: "Famous mango shaved ice and snowy ice in Yongkang. Very first-time Taipei, in a good way.",
    tags: ["dessert", "mango ice", "first-timer"],
    mapQuery: "Smoothie House Yongkang Taipei",
  },
  {
    name: "Longdu Ice Dessert Parlor / 龍都冰菓專業家",
    area: "Wanhua",
    category: "desserts",
    note: "Old-school shaved ice institution near Longshan Temple. Good backup when you want something more local and less Yongkang-first-timer.",
    tags: ["dessert", "shaved ice", "old taipei"],
    mapQuery: "Longdu Ice Dessert Parlor Taipei",
  },
  {
    name: "Bai-Shui Tofu Pudding / 白水豆花",
    area: "Yongkang",
    category: "desserts",
    note: "Pretty, modern tofu pudding right on Yongkang Street. Easy dessert add-on after beef noodles or wandering the area.",
    tags: ["dessert", "douhua", "yongkang"],
    mapQuery: "Bai-Shui Tofu Pudding Yongkang Taipei",
  },
  {
    name: "Yu Pin Yuan Iced and Hot Tangyuan / 御品元冰火湯圓",
    area: "Tonghua",
    category: "desserts",
    note: "Hot peanut or sesame tangyuan over shaved ice. Very Taiwan, very easy to like, and a good late-night dessert move.",
    tags: ["dessert", "tangyuan", "night"],
    mapQuery: "Yu Pin Yuan Iced and Hot Tangyuan Taipei",
  },
  {
    name: "Soypresso",
    area: "Dadaocheng",
    category: "desserts",
    note: "Modern soy milk and tofu pudding stop in Dadaocheng. Nice break if you are already walking Dihua Street.",
    tags: ["dessert", "douhua", "dadaocheng"],
    mapQuery: "Soypresso Taipei",
  },
  {
    name: "Moonshine Coffee Roasters / 私釀咖啡商行",
    area: "Taipei",
    category: "cafes",
    note: "Cute, polished cafe option. Good even if she is not a coffee person.",
    tags: ["cute cafe", "easy", "polished"],
    mapQuery: "Moonshine Coffee Roasters 私釀咖啡商行 Taipei",
  },
  {
    name: "Fika Fika Cafe",
    area: "Zhongshan",
    category: "cafes",
    note: "Clean, calm, and easy to recommend around Zhongshan. Good for a mid-afternoon reset.",
    tags: ["cafe", "zhongshan", "calm"],
    mapQuery: "Fika Fika Cafe Taipei",
  },
  {
    name: "Coffee Law",
    area: "Dadaocheng",
    category: "cafes",
    note: "A comfortable Dadaocheng cafe stop if you are already wandering Dihua Street.",
    tags: ["cafe", "dadaocheng", "walk break"],
    mapQuery: "Coffee Law Dadaocheng Taipei",
  },
  {
    name: "Powder Workshop",
    area: "Yongkang",
    category: "cafes",
    note: "Small, cute Yongkang-area stop for drinks and something sweet between walks.",
    tags: ["cute cafe", "yongkang", "dessert"],
    mapQuery: "Powder Workshop Taipei",
  },
];

export const routes = [
  {
    title: "Best first day",
    stops: "Yongkang -> CKS Memorial Hall -> Taipei 101 / Xinyi -> Raohe Night Market",
    note: "Easy, classic, and not too clever. Good when someone lands with energy.",
  },
  {
    title: "Rainy day",
    stops: "Zhongshan shops and cafes -> Taipei 101 mall -> Din Tai Fung",
    note: "Keeps things flexible and mostly indoors without feeling trapped in malls all day.",
  },
  {
    title: "Touristy but worth it",
    stops: "Jiufen late afternoon into evening",
    note: "Go when the lanterns start turning on. Accept that it will be busy.",
  },
];

export function mapsUrl(query: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}
