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
  tip?: string;
  tags: string[];
  mapQuery: string;
  mapUrl?: string;
  image?: {
    src: string;
    alt: string;
  };
};

export type Section = {
  id: Category;
  title: string;
  dek?: string;
  link?: {
    label: string;
    href: string;
  };
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

export const sections: Section[] = [
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
    title: "Food classics and one splurge",
    dek: "Reliable Taipei staples, plus one nicer reservation if you plan ahead.",
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
    link: {
      label: "Andrew's Taiwan coffee list",
      href: "https://maps.app.goo.gl/EcbgBobxpKbLHoAHA",
    },
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
    note: "The obvious landmark, but still fun if it is your first time. Good to combine with food, a mall break, or wandering around Xinyi.",
    tip: "If you want Din Tai Fung, get a number first, then do the touristy 101 stuff while you wait. If you do not care about the observatory or tuned mass damper, Simple Kaffa Sola on 88F is a lower-commitment way to get high up in the building.",
    tags: ["first-timer", "landmark", "practical"],
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
    note: "More relaxed, suburban, and international. Home to TAS and TJS, so the area has a different rhythm: cafes, brunch spots, bakeries, families, and an easy weekend pace. If you go, Oasis, All Day, and the weekend flea market are easy nearby stops.",
    tags: ["weekend", "cafes", "slower pace"],
    mapQuery: "Tianmu Taipei",
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
    tip: "At the Taipei 101 branch, grab a number before wandering the building.",
    tags: ["first-timer", "xiao long bao", "easy"],
    mapQuery: "Din Tai Fung Taipei",
  },
  {
    name: "A Joy",
    area: "Taipei 101",
    category: "food",
    note: "Big splurge buffet on 86F of Taipei 101. Worth it if you want one nicer reservation with a view.",
    tip: "If you have enough lead time, book early: A Joy uses a one-month reservation window, with online booking at 9am and phone booking at 10am. Card concierge is worth trying if you have it.",
    tags: ["reservation", "splurge", "taipei 101"],
    mapQuery: "A Joy Taipei 101",
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
    note: "Classic Taipei mango shaved ice spot in Yongkang. Very first-time Taipei, in a good way.",
    tags: ["dessert", "mango ice", "first-timer"],
    mapQuery: "Smoothie House Yongkang Taipei",
  },
  {
    name: "杉味豆花",
    area: "Ningxia / Dadaocheng",
    category: "desserts",
    note: "Classic Taiwanese douhua spot near Ningxia. Great late-night dessert stop after wandering Dadaocheng or the night market.",
    tags: ["dessert", "douhua", "traditional"],
    mapQuery: "杉味豆花 台北",
  },
  {
    name: "江記東門豆花 Dongmen Jiang Ji Douhua",
    area: "Dongmen / Yongkang",
    category: "desserts",
    note: "Old-school Taipei douhua spot with a very traditional feel. Easy stop around Yongkang or Dongmen.",
    tags: ["dessert", "douhua", "traditional"],
    mapQuery: "江記東門豆花 台北",
  },
  {
    name: "榕美樹館",
    area: "Zhongshan",
    category: "desserts",
    note: "Beautiful old-house tea and dessert cafe with a relaxed Taipei atmosphere. Nice slower stop around Zhongshan or nearby neighborhoods.",
    tags: ["dessert", "tea", "slow-taipei"],
    mapQuery: "榕美樹館 台北",
  },
  {
    name: "Moonshine Coffee Roasters",
    area: "Taipei",
    category: "cafes",
    note: "Cute, polished cafe with legit coffee cocktails. The team has real competition pedigree; try Chocolate Gummy Bear if it is on the menu.",
    tags: ["cute cafe", "coffee cocktails", "award-winning"],
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
    name: "Oasis Coffee Roasters Anhe",
    area: "Da'an / Anhe",
    category: "cafes",
    note: "Polished specialty coffee spot that still feels easy to recommend. Good if you are around Da'an, Xinyi, or Yongkang.",
    tags: ["cafe", "coffee", "daan"],
    mapQuery: "Oasis Coffee Roasters Anhe Taipei",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=25.0340477%2C121.5517744&query_place_id=ChIJY-JuuXOrQjQRZA5wqDOYtFY",
  },
  {
    name: "Oasis Roasting Lab",
    area: "Tianmu",
    category: "cafes",
    note: "The Tianmu-side Oasis stop. Best if you are already making Tianmu a slower weekend wander.",
    tags: ["cafe", "tianmu", "slow-taipei"],
    mapQuery: "Oasis Roasting Lab Tianmu Taipei",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=25.119019%2C121.5319392&query_place_id=ChIJWRwDfzGvQjQR-xr7RZ5-rkQ",
  },
  {
    name: "光生 MITSUO",
    area: "Taipei Main / Taiyuan Road",
    category: "cafes",
    note: "Small Japanese-feeling coffee and vinyl spot near Taipei Main. Nice when you want a quieter pause around the station area.",
    tags: ["cafe", "vinyl", "quiet"],
    mapQuery: "光生 MITSUO 台北",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=25.0494399%2C121.5157538&query_place_id=ChIJP1Ftx1-pQjQRj1jxNrNocNM",
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
    stops: "Zhongshan shops and cafes -> Taipei 101 mall -> Din Tai Fung number -> Taipei 101 wander",
    note: "Keeps things flexible and mostly indoors, with the Din Tai Fung wait turned into useful wandering time.",
  },
  {
    title: "Touristy but worth it",
    stops: "Jiufen late afternoon into evening",
    note: "Go when the lanterns start turning on. Accept that it will be busy.",
  },
];

export function mapsUrl(query: string) {
  return `https://www.google.com/maps/place/${encodeURIComponent(query).replace(/%20/g, "+")}`;
}
