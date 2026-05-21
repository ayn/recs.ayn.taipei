export type Category =
  | "first-time"
  | "neighborhoods"
  | "running-cycling"
  | "getting-around"
  | "night-markets"
  | "food"
  | "seafood"
  | "desserts"
  | "bars"
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
  { id: "getting-around", label: "Getting around" },
  { id: "neighborhoods", label: "Neighborhoods" },
  { id: "night-markets", label: "Night markets" },
  { id: "food", label: "Food classics" },
  { id: "seafood", label: "Seafood" },
  { id: "desserts", label: "Desserts" },
  { id: "bars", label: "Cocktails / bars" },
  { id: "cafes", label: "Cafes" },
  { id: "running-cycling", label: "Run / bike rides" },
];

export const sections: Section[] = [
  {
    id: "first-time",
    title: "First-time Taipei",
    dek: "Classic stops that are still worth doing once.",
  },
  {
    id: "getting-around",
    title: "Getting around",
    dek: "Small practical things that make Taipei easier.",
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
    id: "seafood",
    title: "Seafood",
    dek: "A polished fish-market stop when you want seafood without making it a whole formal meal.",
  },
  {
    id: "desserts",
    title: "Desserts",
    dek: "Mango ice, tofu pudding, and a couple sweet stops.",
  },
  {
    id: "bars",
    title: "Cocktails and bars",
    dek: "A few Taipei cocktail picks from a bartender-heavy Reddit list. Check hours, reservation rules, and smoking policies before going.",
    link: {
      label: "Credit: Reddit bar list",
      href: "https://www.reddit.com/r/taiwan/comments/1rpr74h/extensive_taiwan_bar_recommendations_from_a/",
    },
  },
  {
    id: "cafes",
    title: "Cafes",
    dek: "Easy stops for coffee, drinks, and a slower pause.",
    link: {
      label: "Andrew's Google Maps coffee list",
      href: "https://maps.app.goo.gl/EcbgBobxpKbLHoAHA",
    },
  },
  {
    id: "running-cycling",
    title: "Running and rides",
    dek: "Easy ways to exercise or see the city on foot or bike.",
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
    name: "Jiantanshan Trail to the overlook / 劍潭山親山步道",
    area: "Shilin",
    category: "first-time",
    note: "Easy MRT-accessible hill walk with a great overlook. Nice alternative if Elephant Mountain is too obvious or you want views toward the Grand Hotel and northern Taipei.",
    tip: "The map points to the overlook. Start from Jiantan Station and follow the Jiantanshan Trail up.",
    gettingThere: { pills: [{ label: "MRT Red Line", tone: "red" }], detail: "Jiantan, Exit 2. Walk about 10 minutes to the trailhead." },
    tags: ["view", "hike", "overlook"],
    mapQuery: "Jiantanshan Trail",
    mapUrl: "https://maps.app.goo.gl/Q7jdt1smPvm57BcY6",
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
    name: "Beitou Hot Springs / 北投溫泉",
    area: "Beitou",
    category: "first-time",
    note: "Easy hot spring half-day inside Taipei. Walk around Xinbeitou, peek at Thermal Valley, and stop by the beautiful Beitou Library if you like quiet architecture.",
    tip: "Better on a cooler or rainy day. Book a private hot spring room if you actually want to soak.",
    gettingThere: { pills: [{ label: "MRT Red Line", tone: "red" }], detail: "Beitou, then transfer one stop to Xinbeitou." },
    tags: ["hot spring", "rainy day", "slow-taipei"],
    mapQuery: "Beitou Hot Springs Taipei",
  },
  {
    name: "Maokong Gondola / 貓空纜車",
    area: "Wenshan",
    category: "first-time",
    note: "Gondola ride up into the hills for tea, views, and a slower Taipei afternoon. Nice when the weather is clear and you want a break from dense city wandering.",
    tip: "Check whether the gondola is operating before going, especially on windy or rainy days.",
    gettingThere: { pills: [{ label: "MRT Brown Line", tone: "brown" }], detail: "Taipei Zoo, then walk to the Maokong Gondola station." },
    tags: ["tea", "views", "gondola"],
    mapQuery: "Maokong Gondola Taipei",
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
    name: "Huashan 1914 / 華山1914",
    area: "Zhongzheng",
    category: "neighborhoods",
    note: "Old winery turned creative park. Good for exhibits, pop-ups, shops, and a low-effort wander when you want something indoors-adjacent.",
    gettingThere: { pills: [{ label: "MRT Blue Line", tone: "blue" }, { label: "MRT Orange Line", tone: "orange" }], detail: "Zhongxiao Xinsheng, then walk." },
    tags: ["creative park", "rainy day", "shops"],
    mapQuery: "Huashan 1914 Creative Park Taipei",
  },
  {
    name: "Guang Hua / 光華商場 and Syntrend / 三創",
    area: "Zhongzheng",
    category: "neighborhoods",
    note: "Taipei tech mall zone. Good for electronics, PC parts, gadgets, cameras, games, and some very local browsing energy.",
    gettingThere: { pills: [{ label: "MRT Blue Line", tone: "blue" }, { label: "MRT Orange Line", tone: "orange" }], detail: "Zhongxiao Xinsheng, then walk." },
    tags: ["tech", "shopping", "gadgets"],
    mapQuery: "Guang Hua Digital Plaza Syntrend Taipei",
  },
  {
    name: "Songshan Cultural Park / 松山文創園區",
    area: "Xinyi",
    category: "neighborhoods",
    note: "Former tobacco factory turned cultural park near Xinyi. Good for design shops, exhibits, Eslite, and a slower break near Taipei 101.",
    gettingThere: { pills: [{ label: "MRT Blue Line", tone: "blue" }], detail: "Sun Yat-Sen Memorial Hall or Taipei City Hall, then walk." },
    tags: ["creative park", "design", "shops"],
    mapQuery: "Songshan Cultural and Creative Park Taipei",
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
    name: "Riverside paths / 河濱自行車道",
    area: "Across Taipei",
    category: "running-cycling",
    note: "For running or cycling, just look at the map and head to the closest entrance to the river path. The riverside network connects everywhere, and you can get 20+ miles without having to stop for city traffic.",
    tags: ["running", "cycling", "river path"],
    mapQuery: "Taipei riverside bikeway",
  },
  {
    name: "Taipei Municipal Stadium track / 臺北田徑場",
    area: "Songshan",
    category: "running-cycling",
    note: "Best central track option for workouts. Good surface, real track feel, and easy MRT access. Check for event closures before planning a serious session.",
    gettingThere: { pills: [{ label: "MRT Green Line", tone: "green" }], detail: "Taipei Arena, then walk over to the track." },
    tags: ["running", "track", "workout"],
    mapQuery: "Taipei Municipal Stadium track",
  },
  {
    name: "Tianmu Sports Park / University of Taipei track / 天母運動公園",
    area: "Tianmu",
    category: "running-cycling",
    note: "Good Tianmu-side option for track workouts or sports-park running. Useful if you are already staying or wandering around Tianmu.",
    gettingThere: { pills: [{ label: "MRT Red Line", tone: "red" }], detail: "Zhishan, then walk, bus, YouBike, or take a short Uber toward Tianmu." },
    tags: ["running", "track", "tianmu"],
    mapQuery: "Tianmu Sports Park University of Taipei Tianmu track",
  },
  {
    name: "YouBike / U-Bike",
    area: "Across Taipei",
    category: "getting-around",
    note: "Taipei's shared bikes are great and cheap for short hops, riverside rides, or connecting between MRT stops and neighborhoods.",
    tags: ["bike share", "cheap", "easy"],
    mapQuery: "YouBike Taipei",
  },
  {
    name: "Uber",
    area: "Across Taipei",
    category: "getting-around",
    note: "Uber is usually cheap in Taipei and easier than cabs if you do not speak Chinese. Especially useful late at night, in the rain, or for places that are awkward from the MRT.",
    tags: ["transport", "easy", "rainy day"],
    mapQuery: "Taipei",
  },
  {
    name: "Uber Eats",
    area: "Across Taipei",
    category: "getting-around",
    note: "Uber Eats is really inexpensive and convenient in Taipei. Great fallback when you want good food without fighting restaurant lines, crowds, heat, or rain.",
    tags: ["food delivery", "easy", "rainy day"],
    mapQuery: "Taipei restaurants",
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
    name: "Orange Shabu / 橘色涮涮屋",
    area: "Da'an",
    category: "food",
    note: "Nicer individual shabu-shabu option with polished service. The linked pin is Orange Shabu 1, and there are two other Taipei locations if another branch fits the day better.",
    tip: "Reserve if you can.",
    gettingThere: { pills: [{ label: "MRT Blue Line", tone: "blue" }, { label: "MRT Brown Line", tone: "brown" }], detail: "Zhongxiao Fuxing or Zhongxiao Dunhua, then walk into the Da'an Road lanes." },
    tags: ["hot pot", "shabu-shabu", "reservation"],
    mapQuery: "Orange Shabu Taipei",
    mapUrl: "https://maps.app.goo.gl/8NknyvMwDyHcWWnW7",
  },
  {
    name: "Nanmen Market / 南門市場",
    area: "Zhongzheng",
    category: "food",
    note: "Renovated, air-conditioned market that is much nicer than the old-school market image. Good for prepared foods, snacks, nicer pantry things, and food souvenirs. Easy to pair with CKS Memorial Hall.",
    gettingThere: { pills: [{ label: "MRT Red Line", tone: "red" }, { label: "MRT Green Line", tone: "green" }], detail: "Chiang Kai-shek Memorial Hall." },
    tags: ["market", "snacks", "souvenirs"],
    mapQuery: "Nanmen Market Taipei",
  },
  {
    name: "SunnyHills / 微熱山丘",
    area: "Minsheng Park",
    category: "food",
    note: "Pineapple cake souvenir stop with a calm, very polished flagship-store feel. Good if someone wants an easy edible gift that still feels Taiwanese.",
    gettingThere: { pills: [{ label: "MRT Green Line", tone: "green" }], detail: "Nanjing Sanmin, then walk or take a short taxi toward Minsheng Park." },
    tags: ["souvenirs", "pineapple cake", "gifts"],
    mapQuery: "SunnyHills Taipei Minsheng Park",
    mapUrl: "https://www.sunnyhills.com.tw/",
  },
  {
    name: "Shida Branch God's Stinky Tofu / 師大分部神之臭豆腐",
    area: "Shida / Gongguan",
    category: "food",
    note: "Stinky tofu pick if someone wants the classic fermented, crispy, cabbage-on-the-side experience. Good as a quick snack, not a whole meal plan.",
    gettingThere: { pills: [{ label: "MRT Green Line", tone: "green" }], detail: "Taipower Building or Gongguan, then walk." },
    tags: ["stinky tofu", "snack", "classic"],
    mapQuery: "師大分部神之臭豆腐",
    mapUrl: "https://maps.app.goo.gl/PaCRKtPDjXszfc126",
  },
  {
    name: "Addiction Aquatic Development / 上引水產",
    area: "Zhongshan",
    category: "seafood",
    note: "Fancy fish-market complex for seafood, standing sushi, grilled seafood, hot pot, prepared foods, and snacky things to bring back. More polished than chaotic.",
    gettingThere: { pills: [{ label: "MRT Orange Line", tone: "orange" }], detail: "Xingtian Temple, Exit 3, then a long walk or short taxi. Uber is easiest if you are not already nearby." },
    tags: ["seafood", "market", "sushi"],
    mapQuery: "Addiction Aquatic Development Taipei",
    mapUrl: "https://maps.app.goo.gl/Z7o4DZNnyWkzCUNU7",
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
    area: "Da'an",
    category: "food",
    note: "Casual Taiwanese breakfast classic. Good for soy milk, dan bing, rice rolls, and fried dough without committing to the Fu Hang line. There are locations all over, but this Da'an branch is an easy pin to use.",
    gettingThere: { pills: [{ label: "MRT Red Line", tone: "red" }, { label: "MRT Brown Line", tone: "brown" }], detail: "Use the linked Da'an branch, or search nearby because there are locations everywhere." },
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
    name: "AmorFati / 天命酒館",
    area: "Taipei",
    category: "bars",
    note: "Cocktail and wine bar that is good for custom drinks based on what you like. Better when you want a slower conversation with the bar.",
    gettingThere: { pills: [{ label: "MRT Blue Line", tone: "blue" }], detail: "Zhongxiao Dunhua, Exit 2. Walk about 3-5 minutes into the Yanji Street lanes." },
    tags: ["cocktails", "wine", "custom drinks"],
    mapQuery: "AmorFati 天命酒館 Taipei",
  },
  {
    name: "Hidden City / 隱城小城外",
    area: "Taipei",
    category: "bars",
    note: "Quiet, movie-inspired cocktail bar pick. Good if you want something more polished and lower-key than a loud night out.",
    gettingThere: { pills: [{ label: "MRT Red Line", tone: "red" }, { label: "MRT Brown Line", tone: "brown" }], detail: "Da'an, Exit 3. It is on Xinyi Road Section 3." },
    tags: ["cocktails", "quiet", "date night"],
    mapQuery: "Hidden City 隱城 小城外 Taipei",
  },
  {
    name: "Nothingness / 無",
    area: "Taipei",
    category: "bars",
    note: "Serious cocktail stop for classic drinks. Walk-in focused, so go earlier if this is a priority.",
    gettingThere: { pills: [{ label: "MRT Blue Line", tone: "blue" }, { label: "MRT Red Line", tone: "red" }], detail: "Taipei City Hall or Taipei 101 / World Trade Center, then walk into the Songshou Road side of Xinyi." },
    tags: ["cocktails", "classics", "walk-in"],
    mapQuery: "Nothingness 無 Taipei bar",
  },
  {
    name: "unDer lab",
    area: "Taipei",
    category: "bars",
    note: "Basement cocktail bar with more experimental drinks and food. Good when you want the drinks to be the point of the night.",
    gettingThere: { pills: [{ label: "MRT Blue Line", tone: "blue" }], detail: "Sun Yat-Sen Memorial Hall, then walk south toward Guangfu South Road Lane 308. Uber also works well." },
    tags: ["cocktails", "experimental", "food"],
    mapQuery: "unDer lab Taipei",
  },
  {
    name: "Staff Only Club",
    area: "Taipei",
    category: "bars",
    note: "Atmospheric cocktail bar in one of Taipei's remaining military dependents' village areas. Good for house cocktails and a setting that feels different.",
    gettingThere: { pills: [{ label: "MRT Green Line", tone: "green" }], detail: "Gongguan, then walk or YouBike toward Shuiyuan Road. Uber is easiest at night." },
    tags: ["cocktails", "atmosphere", "house drinks"],
    mapQuery: "Staff Only Club Taipei",
  },
  {
    name: "Bar Chihana / 千華",
    area: "Taipei",
    category: "bars",
    note: "Late-night industry bar for classic cocktails. Best for cocktail people, especially very late. Indoor smoking may be a dealbreaker.",
    gettingThere: { pills: [{ label: "MRT Red Line", tone: "red" }, { label: "MRT Green Line", tone: "green" }], detail: "Zhongshan, then walk toward Linsen North Road Lane 159." },
    tags: ["late night", "cocktails", "smoking"],
    mapQuery: "Bar Chihana 千華 Taipei",
  },
  {
    name: "Moonshine Coffee Roasters",
    area: "Taipei",
    category: "cafes",
    note: "Polished cafe with legit coffee cocktails. The team has real competition pedigree; try Morning Mist, their award-winning drink, if it is on the menu.",
    gettingThere: { pills: [{ label: "Map first", tone: "neutral" }], detail: "Check the current location before routing. Uber is easiest if it is not already near your day plan." },
    tags: ["cafe", "coffee cocktails", "award-winning"],
    mapQuery: "Moonshine Coffee Roasters 私釀咖啡商行 Taipei",
  },
  {
    name: "Starbucks Reserve Dream Plaza / 星巴克典藏 DREAM PLAZA 台北",
    area: "Xinyi",
    category: "cafes",
    note: "Massive, genuinely impressive Starbucks Reserve flagship. The signature drinks are actually not bad, and the space is worth seeing. Check out the Books.com.tw / 博客來 flagship bookstore in the same mall.",
    gettingThere: { pills: [{ label: "MRT Blue Line", tone: "blue" }], detail: "Taipei City Hall, then walk through Xinyi." },
    tags: ["coffee", "bookstore", "xinyi"],
    mapQuery: "Starbucks Reserve Dream Plaza Taipei",
    mapUrl: "https://www.starbucks.com.tw/stores/reserve/flagship/index.jspx",
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
