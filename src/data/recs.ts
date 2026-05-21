export type Category =
  | "first-time"
  | "neighborhoods"
  | "night-markets"
  | "food"
  | "desserts"
  | "cafes";

export type TransitTone =
  | "red"
  | "green"
  | "blue"
  | "brown"
  | "orange"
  | "mixed"
  | "train"
  | "car"
  | "neutral";

export type TransitPill = {
  label: string;
  tone: TransitTone;
};

export type GettingThere = {
  pills: TransitPill[];
  detail: string;
};

export type Rec = {
  name: string;
  area: string;
  category: Category;
  note: string;
  tip?: string;
  gettingThere?: GettingThere;
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
    name: "Jiufen Old Street / 九份老街",
    area: "Ruifang, day trip",
    category: "first-time",
    note: "Tourist-heavy, but still magical for a first Taiwan trip. Lanterns, stairs, tea houses, mountain and ocean views. Best late afternoon into evening. It is outside Taipei city, but close enough to include.",
    gettingThere: { pills: [{ label: "Uber/taxi", tone: "car" }], detail: "Easiest from Taipei, especially with 2-4 people. Transit option: TRA to Ruifang, then bus or taxi up to Jiufen." },
    tags: ["day trip", "touristy but worth it", "views"],
    mapQuery: "Jiufen Old Street",
  },
  {
    name: "Yingge Ceramics Old Street / 鶯歌陶瓷老街",
    area: "Yingge, day trip",
    category: "first-time",
    note: "Pottery town just outside Taipei. Good for ceramics shops, small gifts, and a slower hands-on afternoon if someone wants something craftier than another mall or night market.",
    gettingThere: { pills: [{ label: "TRA", tone: "train" }], detail: "Yingge Station, then walk or take a short taxi to the old street." },
    tags: ["day trip", "pottery", "crafts"],
    mapQuery: "Yingge Ceramics Old Street",
    mapUrl: "https://www.google.com/maps?cid=8172425620574256624",
  },
  {
    name: "Taipei 101 / 台北101 / Xinyi 信義",
    area: "Xinyi",
    category: "first-time",
    note: "The obvious landmark, but still fun if it is your first time. Good to combine with food, a mall break, or wandering around Xinyi.",
    tip: "If you want Din Tai Fung, get a number first, then do the touristy 101 stuff while you wait. If you do not care about the observatory or tuned mass damper, Simple Kaffa Sola on 88F is a lower-commitment way to get high up in the building.",
    gettingThere: { pills: [{ label: "MRT Red Line", tone: "red" }], detail: "Taipei 101 / World Trade Center. Blue Line to Taipei City Hall also works for a Xinyi walk." },
    tags: ["first-timer", "landmark", "practical"],
    mapQuery: "Taipei 101",
  },
  {
    name: "Elephant Mountain / 象山",
    area: "Xinyi",
    category: "first-time",
    note: "Short but sweaty stairs, classic Taipei 101 view. Best around sunset if the weather is clear.",
    gettingThere: { pills: [{ label: "MRT Red Line", tone: "red" }], detail: "Xiangshan, then follow signs to the trail stairs." },
    tags: ["view", "sunset", "stairs"],
    mapQuery: "Elephant Mountain Taipei",
  },
  {
    name: "Chiang Kai-shek Memorial Hall / 中正紀念堂",
    area: "Zhongzheng",
    category: "first-time",
    note: "Big iconic Taipei landmark. Easy stop if you are nearby, and the plaza gives you a lot of Taipei in one glance.",
    gettingThere: { pills: [{ label: "MRT Red Line", tone: "red" }, { label: "MRT Green Line", tone: "green" }], detail: "Chiang Kai-shek Memorial Hall." },
    tags: ["first-timer", "landmark", "easy stop"],
    mapQuery: "Chiang Kai-shek Memorial Hall",
  },
  {
    name: "Yongkang Street / 永康街",
    area: "Da'an",
    category: "neighborhoods",
    note: "One of the easiest first-time Taipei areas. Food, dessert, boutiques, side streets, and lots nearby.",
    gettingThere: { pills: [{ label: "MRT Red Line", tone: "red" }, { label: "MRT Orange Line", tone: "orange" }], detail: "Dongmen. Start around Yongkang Street and wander from there." },
    tags: ["first-timer", "food", "walk"],
    mapQuery: "Yongkang Street Taipei",
  },
  {
    name: "Zhongshan / 中山",
    area: "Zhongshan",
    category: "neighborhoods",
    note: "Good for shopping, cafes, small boutiques, Korean boutiques, and a more stylish Taipei afternoon. For K-pop albums and merch, HGMusic has two stores right across from each other nearby.",
    gettingThere: { pills: [{ label: "MRT Red Line", tone: "red" }, { label: "MRT Green Line", tone: "green" }], detail: "Zhongshan. Most of the good wandering is north and east of the station." },
    tags: ["shopping", "cafes", "k-pop"],
    mapQuery: "Zhongshan Station Taipei",
  },
  {
    name: "Ximending / 西門町",
    area: "Wanhua",
    category: "neighborhoods",
    note: "Youthful, chaotic, neon, street food, shopping. More fun at night.",
    gettingThere: { pills: [{ label: "MRT Blue Line", tone: "blue" }, { label: "MRT Green Line", tone: "green" }], detail: "Ximen." },
    tags: ["night", "shopping", "street food"],
    mapQuery: "Ximending Taipei",
  },
  {
    name: "Dadaocheng / 大稻埕 / Dihua Street 迪化街",
    area: "Datong",
    category: "neighborhoods",
    note: "Old Taipei, tea, dried goods, restored buildings, small shops. Nice slower walk.",
    gettingThere: { pills: [{ label: "MRT Green Line", tone: "green" }, { label: "MRT Orange Line", tone: "orange" }], detail: "Beimen for the south end, or Daqiaotou for the north end." },
    tags: ["old taipei", "tea", "slow walk"],
    mapQuery: "Dihua Street Taipei",
  },
  {
    name: "Datong / 大同",
    area: "Datong",
    category: "neighborhoods",
    note: "Older Taipei area that is good for wandering between Taipei Main, Taiyuan Road, Dihua Street, and Ningxia. Ri Xing Type Foundry is a great stop if you like typography or old craft, but it is a bit of a walk from Dadaocheng.",
    gettingThere: { pills: [{ label: "MRT Green Line", tone: "green" }, { label: "MRT Red Line", tone: "red" }, { label: "TRA", tone: "train" }], detail: "Beimen, Zhongshan, Daqiaotou, or Taipei Main Station depending on where you start." },
    tags: ["old taipei", "crafts", "walk"],
    mapQuery: "Datong District Taipei",
  },
  {
    name: "Tianmu / 天母",
    area: "Shilin",
    category: "neighborhoods",
    note: "More relaxed, suburban, and international. Home to TAS and TJS, so the area has a different rhythm: cafes, brunch spots, bakeries, families, and an easy weekend pace. If you go, Oasis, All Day, and the weekend flea market are easy nearby stops.",
    gettingThere: { pills: [{ label: "MRT Red Line", tone: "red" }], detail: "Zhishan or Shipai, then bus, taxi, or Uber. From central Taipei, Uber is often simplest." },
    tags: ["weekend", "cafes", "slower pace"],
    mapQuery: "Tianmu Taipei",
  },
  {
    name: "Raohe Night Market / 饒河夜市",
    area: "Songshan",
    category: "night-markets",
    note: "Best first night market. Straightforward layout, temple entrance, lots of classic snacks. Try the pepper bun.",
    gettingThere: { pills: [{ label: "MRT Green Line", tone: "green" }], detail: "Songshan. TRA to Songshan also works. The entrance is right by the temple." },
    tags: ["first-timer", "night market", "pepper bun"],
    mapQuery: "Raohe Night Market",
  },
  {
    name: "Ningxia Night Market / 寧夏夜市",
    area: "Datong",
    category: "night-markets",
    note: "Smaller and very food-focused. Good if you want eating more than games or shopping.",
    gettingThere: { pills: [{ label: "MRT Red Line", tone: "red" }], detail: "Shuanglian, then walk west. Zhongshan also works if you are already there." },
    tags: ["food", "night market", "compact"],
    mapQuery: "Ningxia Night Market",
  },
  {
    name: "Shilin Night Market / 士林夜市",
    area: "Shilin",
    category: "night-markets",
    note: "Famous and touristy. Not my top food pick, but still a classic if someone wants the big-name night market.",
    gettingThere: { pills: [{ label: "MRT Red Line", tone: "red" }], detail: "Jiantan, Exit 1. Do not get off at Shilin Station." },
    tags: ["classic", "touristy", "night market"],
    mapQuery: "Shilin Night Market",
  },
  {
    name: "Din Tai Fung / 鼎泰豐",
    area: "Multiple locations",
    category: "food",
    note: "Famous worldwide, but still worth doing in Taipei. Xiao long bao, cucumber salad, fried rice, spicy wontons.",
    tip: "At the Taipei 101 branch, grab a number before wandering the building.",
    gettingThere: { pills: [{ label: "MRT Red Line", tone: "red" }], detail: "Taipei 101 / World Trade Center for the Taipei 101 branch." },
    tags: ["first-timer", "xiao long bao", "easy"],
    mapQuery: "Din Tai Fung Taipei",
  },
  {
    name: "A Joy",
    area: "Taipei 101",
    category: "food",
    note: "Big splurge buffet on 86F of Taipei 101. Worth it if you want one nicer reservation with a view.",
    tip: "If you have enough lead time, book early: A Joy uses a one-month reservation window, with online booking at 9am and phone booking at 10am. Card concierge is worth trying if you have it.",
    gettingThere: { pills: [{ label: "MRT Red Line", tone: "red" }], detail: "Taipei 101 / World Trade Center. It is inside Taipei 101." },
    tags: ["reservation", "splurge", "taipei 101"],
    mapQuery: "A Joy Taipei 101",
  },
  {
    name: "Wulao Hotpot / 無老鍋",
    area: "Yongkang / Xinyi",
    category: "food",
    note: "Reliable nicer hot pot pick that still feels easy for visitors. I would aim for the Yongkang or Xinyi location depending on the rest of the day.",
    tip: "Make a reservation if you can, especially for dinner.",
    gettingThere: { pills: [{ label: "MRT Red Line", tone: "red" }, { label: "MRT Orange Line", tone: "orange" }], detail: "Dongmen for Yongkang, or Taipei 101 / Xinyi Anhe area for Xinyi." },
    tags: ["hot pot", "dinner", "reservation"],
    mapQuery: "Wulao Hotpot Taipei",
  },
  {
    name: "Yongkang Beef Noodles / 永康牛肉麵",
    area: "Yongkang",
    category: "food",
    note: "Classic beef noodle soup pick right by Yongkang Street.",
    gettingThere: { pills: [{ label: "MRT Red Line", tone: "red" }, { label: "MRT Orange Line", tone: "orange" }], detail: "Dongmen." },
    tags: ["beef noodles", "classic", "yongkang"],
    mapQuery: "Yongkang Beef Noodles Taipei",
  },
  {
    name: "Lin Dong Fang Beef Noodles / 林東芳牛肉麵",
    area: "Zhongshan",
    category: "food",
    note: "Another famous beef noodle option if it fits the route.",
    gettingThere: { pills: [{ label: "MRT Brown Line", tone: "brown" }, { label: "MRT Green Line", tone: "green" }], detail: "Nanjing Fuxing, then walk or take a short taxi depending on the exact branch." },
    tags: ["beef noodles", "classic"],
    mapQuery: "Lin Dong Fang Beef Noodles Taipei",
  },
  {
    name: "Fu Hang Soy Milk / 阜杭豆漿",
    area: "Zhongzheng",
    category: "food",
    note: "Classic Taiwanese breakfast. Great, but the line can be brutal. Go early or skip if lines ruin the mood.",
    gettingThere: { pills: [{ label: "MRT Blue Line", tone: "blue" }], detail: "Shandao Temple. The entrance is upstairs in Huashan Market." },
    tags: ["breakfast", "classic", "go early"],
    mapQuery: "Fu Hang Soy Milk Taipei",
  },
  {
    name: "Yong He Soy Milk / 永和豆漿",
    area: "Multiple locations",
    category: "food",
    note: "Casual Taiwanese breakfast chain-style classic. Good for soy milk, dan bing, rice rolls, and fried dough without committing to the Fu Hang line.",
    gettingThere: { pills: [{ label: "Map first", tone: "neutral" }], detail: "There are locations everywhere. Use this popular branch if it fits your route." },
    tags: ["breakfast", "soy milk", "easy"],
    mapQuery: "Yong He Soy Milk Taipei",
    mapUrl: "https://maps.app.goo.gl/oYTjUEP3yC9EyeSX6",
  },
  {
    name: "Smoothie House / 思慕昔",
    area: "Yongkang",
    category: "desserts",
    note: "Classic Taipei mango shaved ice spot in Yongkang. Very first-time Taipei, in a good way.",
    gettingThere: { pills: [{ label: "MRT Red Line", tone: "red" }, { label: "MRT Orange Line", tone: "orange" }], detail: "Dongmen." },
    tags: ["dessert", "mango ice", "first-timer"],
    mapQuery: "Smoothie House Yongkang Taipei",
  },
  {
    name: "杉味豆花",
    area: "Ningxia / Dadaocheng",
    category: "desserts",
    note: "Classic Taiwanese douhua spot near Ningxia. Great late-night dessert stop after wandering Dadaocheng or the night market.",
    gettingThere: { pills: [{ label: "MRT Red Line", tone: "red" }], detail: "Shuanglian, then walk toward Ningxia Night Market." },
    tags: ["dessert", "douhua", "traditional"],
    mapQuery: "杉味豆花 台北",
  },
  {
    name: "江記東門豆花 Dongmen Jiang Ji Douhua",
    area: "Dongmen / Yongkang",
    category: "desserts",
    note: "Old-school Taipei douhua spot with a very traditional feel. Easy stop around Yongkang or Dongmen.",
    gettingThere: { pills: [{ label: "MRT Red Line", tone: "red" }, { label: "MRT Orange Line", tone: "orange" }], detail: "Dongmen." },
    tags: ["dessert", "douhua", "traditional"],
    mapQuery: "江記東門豆花 台北",
  },
  {
    name: "榕美樹館",
    area: "Zhongshan",
    category: "desserts",
    note: "Beautiful old-house tea and dessert cafe with a relaxed Taipei atmosphere. Nice slower stop around Zhongshan or nearby neighborhoods.",
    gettingThere: { pills: [{ label: "MRT Red Line", tone: "red" }, { label: "MRT Green Line", tone: "green" }], detail: "Zhongshan, then walk." },
    tags: ["dessert", "tea", "slow-taipei"],
    mapQuery: "榕美樹館 台北",
  },
  {
    name: "Moonshine Coffee Roasters",
    area: "Taipei",
    category: "cafes",
    note: "Cute, polished cafe with legit coffee cocktails. The team has real competition pedigree; try Chocolate Gummy Bear if it is on the menu.",
    gettingThere: { pills: [{ label: "Map first", tone: "neutral" }], detail: "Check the current location before routing. Uber is easiest if it is not already near your day plan." },
    tags: ["cute cafe", "coffee cocktails", "award-winning"],
    mapQuery: "Moonshine Coffee Roasters 私釀咖啡商行 Taipei",
  },
  {
    name: "Fika Fika Cafe",
    area: "Zhongshan",
    category: "cafes",
    note: "Clean, calm, and easy to recommend around Zhongshan. Good for a mid-afternoon reset.",
    gettingThere: { pills: [{ label: "MRT Red Line", tone: "red" }, { label: "MRT Green Line", tone: "green" }], detail: "Zhongshan, then walk." },
    tags: ["cafe", "zhongshan", "calm"],
    mapQuery: "Fika Fika Cafe Taipei",
  },
  {
    name: "Oasis Coffee Roasters Anhe",
    area: "Da'an / Anhe",
    category: "cafes",
    note: "Polished specialty coffee spot that still feels easy to recommend. Good if you are around Da'an, Xinyi, or Yongkang.",
    gettingThere: { pills: [{ label: "MRT Brown Line", tone: "brown" }], detail: "Liuzhangli, or route through Xinyi Anhe by MRT/taxi depending on where you start." },
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
    gettingThere: { pills: [{ label: "MRT Red Line", tone: "red" }], detail: "Zhishan or Shipai, then bus, taxi, or Uber." },
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
    gettingThere: { pills: [{ label: "MRT", tone: "neutral" }, { label: "TRA", tone: "train" }], detail: "Taipei Main Station, Beimen, or Zhongshan all work. Pick whichever fits your route." },
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
