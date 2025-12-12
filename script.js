// ─────────────────────────────
//  GROUP TITLES (вывод подзаголовков внутри категорий)
// ─────────────────────────────

const GROUP_TITLES = {
  kahvalti: { toast: "Tostlar" },
  anayemek: {
    ekmekustu: "Ekmek Üstü",
    bowl: "Bowl",
    baslangic: "Başlangıçlar",
    salad: "Salatalar",
    noodle: "Noodle & Makarna",
    meat: "Et Yemekleri",
    chicken: "Tavuk Yemekleri"
  },
  burgerpizza: {
    pizza: "Pizzalar",
    burger: "Burgerler",
  },
  tatli: {},
  kahve: {
    hot: "Sıcak Kahveler",
    cold: "Soğuk Kahveler"
  },
  icecek: {
    soda: "Meşrubatlar",
    milkshake: "Milkshake",
    frozen: "Frozen",
    kokteyl: "Alkolsüz Kokteyller"
  }
};

// ─────────────────────────────
//  MENU ITEMS — KAHVALTI + TOST
// ─────────────────────────────

const ITEMS = [

  // ──────────── KAHVALTI ────────────
  {
    cat: "kahvalti",
    group: "kahvalti",
    title: "Serpme Kahvaltı (2 kişilik)",
    price: 960,
    desc: "Geniş serpme kahvaltı: peynir çeşitleri, reçeller, yumurta, pancake, sosis, sigara böreği, patates tava, mevsim meyvesi ve sınırsız çay.",
    img: "images/items/serpme-kahvalti.webp",
    tags: ["breakfast"]
  },
  {
    cat: "kahvalti",
    group: "kahvalti",
    title: "Mini Kahvaltı",
    price: 320,
    desc: "Peynir çeşitleri, zeytin, domates, salatalık, patates kızartması, yumurta ve çay.",
    img: "images/items/mini-kahvalti.webp",
    tags: ["breakfast"]
  },
  {
    cat: "kahvalti",
    group: "kahvalti",
    title: "Sahanda Yumurta",
    price: 170,
    desc: "Tavada iki göz yumurta.",
    img: "images/items/sahanda-yumurta.webp",
    tags: ["breakfast"]
  },
  {
    cat: "kahvalti",
    group: "kahvalti",
    title: "Menemen",
    price: 180,
    desc: "Domatesli biberli yumurta karışımı.",
    img: "images/items/menemen.webp",
    tags: ["breakfast"]
  },
  {
    cat: "kahvalti",
    group: "kahvalti",
    title: "Omlet",
    price: 170,
    desc: "Sade, peynirli, mantarlı veya taze otlu seçenekler.",
    img: "images/items/omlet.webp",
    tags: ["breakfast"]
  },
  {
    cat: "kahvalti",
    group: "kahvalti",
    title: "Fit Kahvaltı",
    price: 180,
    desc: "Müsli, süt, taze meyveler ve ceviz.",
    img: "images/items/fit-kahvalti.webp",
    tags: ["breakfast"]
  },
  {
    cat: "kahvalti",
    group: "kahvalti",
    title: "Pancake Burger",
    price: 230,
    desc: "2 adet pancake, pasta kreması, çilek, muz ve çikolata.",
    img: "images/items/pancake-burger.webp",
    tags: ["breakfast", "dessert"]
  },

  // ──────────── TOSTLAR ────────────
  {
    cat: "kahvalti",
    group: "toast",
    title: "Beyaz Peynirli Tost",
    price: 240,
    desc: "Ezine peynirli tost, domates, pesto sos, patates kızartması ve akdeniz yeşillikleri.",
    img: "images/items/tost-beyaz.webp",
    tags: ["cheese"]
  },
  {
    cat: "kahvalti",
    group: "toast",
    title: "Üç Peynirli Tost",
    price: 250,
    desc: "Kaşar, cheddar ve beyaz peynir ile üç peynirli tost.",
    img: "images/items/tost-uc-peynir.webp",
    tags: ["cheese"]
  },
  {
    cat: "kahvalti",
    group: "toast",
    title: "Tavuklu Tost",
    price: 320,
    desc: "Tavuk, mantar, kaşar ve cheddar ile tost; yanında patates.",
    img: "images/items/tost-tavuklu.webp",
    tags: []
  },
  {
    cat: "kahvalti",
    group: "toast",
    title: "Karışık Tost",
    price: 250,
    desc: "Kaşar peyniri ve salam ile hazırlanan tost.",
    img: "images/items/tost-karisik.webp",
    tags: []
  },
  {
    cat: "kahvalti",
    group: "toast",
    title: "Kaşarlı Tost",
    price: 240,
    desc: "Kaşar peyniri ile hazırlanmış klasik tost.",
    img: "images/items/tost-kasarli.webp",
    tags: ["cheese"]
  },

];

// ─────────────────────────────
//  ITEMS — ANA YEMEKLER
// ─────────────────────────────

ITEMS.push(
  // ─────────── EKMEK ÜSTÜ ───────────
  {
    cat: "anayemek",
    group: "ekmekustu",
    title: "Eggs Benedict",
    price: 250,
    desc: "Labne, sote ıspanak, poşe yumurta, dana jambon ve akdeniz yeşillikleri.",
    img: "images/items/eggs-benedict.webp",
    tags: ["breakfast"]
  },
  {
    cat: "anayemek",
    group: "ekmekustu",
    title: "Avokado",
    price: 250,
    desc: "Avokado, poşe yumurta, sote sebzeler ve akdeniz yeşillikleri.",
    img: "images/items/avokado-toast.webp",
    tags: ["veg"]
  },
  {
    cat: "anayemek",
    group: "ekmekustu",
    title: "Vegetarian",
    price: 250,
    desc: "Kırmızı biber, çeçil peynir, mantar, kızarmış domates ve akdeniz yeşillikleri.",
    img: "images/items/vegetarian-toast.webp",
    tags: ["veg", "cheese"]
  },

  // ─────────── BOWL ───────────
  {
    cat: "anayemek",
    group: "bowl",
    title: "Tavuklu Bowl",
    price: 280,
    desc: "Izgara tavuk, ızgara sebzeler, kuskus makarna, akdeniz yeşilliği, nar ekşisi.",
    img: "images/items/tavuklu-bowl.webp",
    tags: []
  },
  {
    cat: "anayemek",
    group: "bowl",
    title: "Turkish Bowl",
    price: 260,
    desc: "Kısır, sigara böreği, patates salatası, sarma, brownie parçacıkları.",
    img: "images/items/turkish-bowl.webp",
    tags: []
  },

  // ─────────── BAŞLANGIÇLAR ───────────
  {
    cat: "anayemek",
    group: "baslangic",
    title: "Cheddar Soslu Patates",
    price: 190,
    desc: "Kızarmış patates tava üzerinde sıcak cheddar sos.",
    img: "images/items/cheddar-fries.webp",
    tags: ["cheese"]
  },
  {
    cat: "anayemek",
    group: "baslangic",
    title: "Patates Tava",
    price: 180,
    desc: "Klasik kızarmış patates.",
    img: "images/items/patates-tava.webp",
    tags: ["veg"]
  },
  {
    cat: "anayemek",
    group: "baslangic",
    title: "Çıtır Tavuk",
    price: 320,
    desc: "Panelenmiş jülyen tavuk, sweet chili, sezar sos, hidden sos, patates kızartması.",
    img: "images/items/citir-tavuk.webp",
    tags: ["spicy"]
  },

  // ─────────── SALATALAR ───────────
  {
    cat: "anayemek",
    group: "salad",
    title: "Tavuklu Sezar Salata",
    price: 270,
    desc: "Göbek marul, domates, kruton, sezar sos, ızgara tavuk, mısır.",
    img: "images/items/caesar-salad.webp",
    tags: ["cheese"]
  },
  {
    cat: "anayemek",
    group: "salad",
    title: "Ton Balıklı Salata",
    price: 270,
    desc: "Akdeniz yeşillikleri, domates, salatalık, zeytin, mısır, ton balığı.",
    img: "images/items/tuna-salad.webp",
    tags: []
  },
  {
    cat: "anayemek",
    group: "salad",
    title: "Avokadolu Kinoa Salata",
    price: 270,
    desc: "Akdeniz yeşillikleri, domates, salatalık, avokado ve kinoa.",
    img: "images/items/quinoa-salad.webp",
    tags: ["veg"]
  },
  {
    cat: "anayemek",
    group: "salad",
    title: "Çıtır Tavuk Salata",
    price: 270,
    desc: "Akdeniz yeşillikleri, mısır, zeytin, domates, panelenmiş tavuk.",
    img: "images/items/crispy-salad.webp",
    tags: []
  },
  {
    cat: "anayemek",
    group: "salad",
    title: "Tavuklu Kase",
    price: 280,
    desc: "Izgara tavuk, ızgara sebzeler, kuskus makarna, akdeniz yeşilliği.",
    img: "images/items/tavuklu-kase.webp",
    tags: []
  },
  {
    cat: "anayemek",
    group: "salad",
    title: "Beef Salata",
    price: 360,
    desc: "Jülyen et, taze akdeniz yeşillikleri, domates, havuç, mısır.",
    img: "images/items/beef-salad.webp",
    tags: []
  },

  // ─────────── DÜRÜMLER ───────────
  {
    cat: "anayemek",
    group: "chicken",
    title: "Tavuk Dürüm",
    price: 320,
    desc: "Jülyen tavuk, mantar, renkli biber, kaşar, patates tava ve yeşillikler.",
    img: "images/items/tavuk-durum.webp",
    tags: []
  },
  {
    cat: "anayemek",
    group: "meat",
    title: "Et Dürüm",
    price: 360,
    desc: "Jülyen bonfile, mantar, biberler, kaşar, patates tava ve yeşillikler.",
    img: "images/items/et-durum.webp",
    tags: []
  },

  // ─────────── MEKSİKA YEMEKLERİ ───────────
  {
    cat: "anayemek",
    group: "chicken",
    title: "Burritos Tavuk",
    price: 330,
    desc: "Tortilla içinde tavuk, burritos sos, sebzeler, cheddar, patates kızartması.",
    img: "images/items/burritos-chicken.webp",
    tags: ["spicy", "cheese"]
  },
  {
    cat: "anayemek",
    group: "meat",
    title: "Burritos Et",
    price: 370,
    desc: "Bonfile dilimleri, burritos sos, sebzeler, cheddar, patates kızartması.",
    img: "images/items/burritos-beef.webp",
    tags: ["spicy", "cheese"]
  },

  // ─────────── MAKARNALAR ───────────
  {
    cat: "anayemek",
    group: "noodle",
    title: "Sebzeli Noodle",
    price: 310,
    desc: "Sebzeli wok noodle, kabak, havuç, biberler, susam, mantar, soya sos.",
    img: "images/items/noodle-veggie.webp",
    tags: ["veg"]
  },
  {
    cat: "anayemek",
    group: "noodle",
    title: "Tavuklu Noodle",
    price: 320,
    desc: "Tavuklu noodle, sebzeler ve hafif sos.",
    img: "images/items/noodle-chicken.webp",
    tags: []
  },
  {
    cat: "anayemek",
    group: "noodle",
    title: "Fettuccine Alfredo",
    price: 320,
    desc: "Tavuk, mantar, krema, parmesan ve pesto ile hazırlanan fettuccine.",
    img: "images/items/alfredo.webp",
    tags: ["cheese"]
  },
  {
    cat: "anayemek",
    group: "noodle",
    title: "Penne Arabiata",
    price: 310,
    desc: "Arabiata sos, zeytin, parmesan ve acı soslu penne.",
    img: "images/items/arrabiata.webp",
    tags: ["spicy", "veg"]
  },

  // ─────────── TAVUK YEMEKLERİ ───────────
  {
    cat: "anayemek",
    group: "chicken",
    title: "Izgara Tavuk (200 gr)",
    price: 340,
    desc: "Izgara tavuk göğüs, közlenmiş sebzeler, patates salatası ve yeşillikler.",
    img: "images/items/grilled-chicken.webp",
    tags: []
  },
  {
    cat: "anayemek",
    group: "chicken",
    title: "Köri Soslu Tavuk",
    price: 340,
    desc: "Köri soslu tavuk, mantar, renkli biberler ve patates salatası.",
    img: "images/items/curry-chicken.webp",
    tags: ["spicy"]
  },
  {
    cat: "anayemek",
    group: "chicken",
    title: "Kremalı Mantar Tavuk",
    price: 340,
    desc: "Kremalı soslu tavuk ve patates salatası.",
    img: "images/items/mushroom-chicken.webp",
    tags: []
  },
  {
    cat: "anayemek",
    group: "chicken",
    title: "Acı Tatlı Soslu Tavuk",
    price: 340,
    desc: "Acı tatlı soslu tavuk, renkli biber, mantar, susam ve patates salatası.",
    img: "images/items/sweet-sour-chicken.webp",
    tags: ["spicy"]
  }
);

// ─────────────────────────────
//  ITEMS — PİZZA + BURGER + TATLILAR
// ─────────────────────────────

ITEMS.push(
  // ─────────── PİZZALAR ───────────
  {
    cat: "burgerpizza",
    group: "pizza",
    title: "Pizza Margherita",
    price: 320,
    desc: "Mozarella peyniri ve pesto sos ile klasik Margherita.",
    img: "images/items/pizza-margherita.webp",
    tags: ["veg", "cheese"]
  },
  {
    cat: "burgerpizza",
    group: "pizza",
    title: "Pizza Karışık",
    price: 340,
    desc: "Mozarella, mısır, zeytin, biber, mantar, salam, sosis, sucuk.",
    img: "images/items/pizza-mix.webp",
    tags: ["cheese"]
  },
  {
    cat: "burgerpizza",
    group: "pizza",
    title: "Pizza Dört Peynir",
    price: 340,
    desc: "Cheddar, gravyer, mozarella ve parmesan peyniri.",
    img: "images/items/pizza-four-cheese.webp",
    tags: ["cheese", "veg"]
  },
  {
    cat: "burgerpizza",
    group: "pizza",
    title: "Pizza BBQ Tavuk",
    price: 340,
    desc: "BBQ tavuk, zeytin, kapya biber ve mozarella.",
    img: "images/items/pizza-bbq.webp",
    tags: ["cheese"]
  },
  {
    cat: "burgerpizza",
    group: "pizza",
    title: "Pizza Vegeterian",
    price: 340,
    desc: "Izgara havuç, kabak, mantar, renkli biberler ve mozarella.",
    img: "images/items/pizza-vegetarian.webp",
    tags: ["veg", "cheese"]
  },

  // ─────────── BURGERLER ───────────
  {
    cat: "burgerpizza",
    group: "burger",
    title: "Klasik Burger",
    price: 340,
    desc: "Dana burger, karamelize soğan, cheddar, marul ve özel sos.",
    img: "images/items/burger-classic.webp",
    tags: ["cheese"]
  },
  {
    cat: "burgerpizza",
    group: "burger",
    title: "Tavuk Burger",
    price: 320,
    desc: "Izgara tavuk, karamelize soğan, cheddar, marul ve burger sos.",
    img: "images/items/burger-chicken.webp",
    tags: []
  },
  {
    cat: "burgerpizza",
    group: "burger",
    title: "Üç Peynir Burger",
    price: 350,
    desc: "Burger köftesi, üç peynir sos, karamelize soğan ve özel sos.",
    img: "images/items/burger-three-cheese.webp",
    tags: ["cheese"]
  },

  // ─────────── TATLILAR ───────────
  {
    cat: "tatli",
    title: "Çikolata Dolgulu Tart",
    price: 190,
    desc: "Akışkan çikolata dolgulu tart.",
    img: "images/items/tart-chocolate.webp",
    tags: ["dessert", "veg"]
  },
  {
    cat: "tatli",
    title: "Cevizli Brownie",
    price: 230,
    desc: "Yoğun çikolatalı brownie, ceviz parçacıklı.",
    img: "images/items/brownie.webp",
    tags: ["dessert", "veg"]
  },
  {
    cat: "tatli",
    title: "Cheesecake",
    price: 230,
    desc: "Klasik cheesecake (Frambuaz / Yaban mersini / Limon / Lotus).",
    img: "images/items/cheesecake.webp",
    tags: ["dessert", "cheese"]
  },
  {
    cat: "tatli",
    title: "Tiramisu",
    price: 230,
    desc: "Kahveli İtalyan tatlısı.",
    img: "images/items/tiramisu.webp",
    tags: ["dessert"]
  },
  {
    cat: "tatli",
    title: "Waffle",
    price: 240,
    desc: "Muz, çilek, yer fıstığı ve çikolata sos.",
    img: "images/items/waffle.webp",
    tags: ["dessert"]
  },
  {
    cat: "tatli",
    title: "Magnolia",
    price: 230,
    desc: "Çilek • Muz • Çikolata • Oreo (karışık +10₺).",
    img: "images/items/magnolia.webp",
    tags: ["dessert"]
  },
  {
    cat: "tatli",
    title: "Brownie Cookie (2 adet)",
    price: 190,
    desc: "Dışı kıtır, içi yumuşak brownie cookie.",
    img: "images/items/brownie-cookie.webp",
    tags: ["dessert"]
  },
  {
    cat: "tatli",
    title: "Çikolatalı Sufle",
    price: 240,
    desc: "Sıcak akışkan çikolatalı sufle.",
    img: "images/items/souffle.webp",
    tags: ["dessert"]
  },
  {
    cat: "tatli",
    title: "San Sebastian Cheesecake",
    price: 240,
    desc: "Karamelli yanık yüzeyli San Sebastian cheesecake.",
    img: "images/items/san-sebastian.webp",
    tags: ["dessert", "cheese"]
  },
  {
    cat: "tatli",
    title: "Brownie Pasta",
    price: 260,
    desc: "İki brownie arasında krema ve çilek.",
    img: "images/items/brownie-pasta.webp",
    tags: ["dessert"]
  },
  {
    cat: "tatli",
    title: "Şekersiz Hurmalı İncirli Kek",
    price: 190,
    desc: "Doğal hurma ve incir ile şekersiz tatlı.",
    img: "images/items/fit-cake.webp",
    tags: ["dessert", "veg"]
  },
  {
    cat: "tatli",
    title: "Tart",
    price: 210,
    desc: "Orman meyveli veya çikolata dolgulu tart.",
    img: "images/items/tart.webp",
    tags: ["dessert"]
  },
  {
    cat: "tatli",
    title: "Pancake Burger",
    price: 230,
    desc: "2 pancake, krema, çilek, muz ve çikolata.",
    img: "images/items/pancake-burger.webp",
    tags: ["dessert"]
  },
  {
    cat: "tatli",
    title: "Damla Çikolatalı Cevizli Kurabiye",
    price: 180,
    desc: "3 adet kurabiye ile servis edilir.",
    img: "images/items/cookie.webp",
    tags: ["dessert"]
  },
  {
    cat: "tatli",
    title: "Limonlu Cheesecake",
    price: 230,
    desc: "Serinletici limonlu cheesecake.",
    img: "images/items/cheesecake-lemon.webp",
    tags: ["dessert", "cheese"]
  },
  {
    cat: "tatli",
    title: "Lotus Cheesecake",
    price: 230,
    desc: "Lotus bisküvisi ve kreması ile cheesecake.",
    img: "images/items/cheesecake-lotus.webp",
    tags: ["dessert", "cheese"]
  },
  {
    cat: "tatli",
    title: "Hidden Dream",
    price: 230,
    desc: "Oreo tabanı, hidden krema, akışkan çikolata, fındık.",
    img: "images/items/hidden-dream.webp",
    tags: ["dessert"]
  },
  {
    cat: "tatli",
    title: "Süt Reçelli Cheesecake",
    price: 230,
    desc: "Süt reçeli, krokan ve çilek ile.",
    img: "images/items/cheesecake-milk.webp",
    tags: ["dessert", "cheese"]
  },
  {
    cat: "tatli",
    title: "Meyveli Çikolatalı Brownie",
    price: 240,
    desc: "Brownie parçaları, lotus, çilek, muz ve çikolata sosu.",
    img: "images/items/brownie-fruit.webp",
    tags: ["dessert"]
  },
  {
    cat: "tatli",
    title: "Hidden Bowl",
    price: 240,
    desc: "Pastacı kreması, lotus kırığı, çilek, muz, çikolata sosu.",
    img: "images/items/hidden-bowl.webp",
    tags: ["dessert"]
  },
  {
    cat: "tatli",
    title: "Profiterol",
    price: 220,
    desc: "Pastacı kreması, çikolata sosu, Antep fıstığı.",
    img: "images/items/profiterol.webp",
    tags: ["dessert"]
  }
);

// ─────────────────────────────
//  ITEMS — İÇECEKLER
// ─────────────────────────────

ITEMS.push(

  // ─────────── SOĞUK İÇECEKLER ───────────
  { cat: "icecek", group: "soda", title: "Coca Cola", price: 120, desc: "Zero ve şekersiz seçenekleri ile.", img: "images/items/cola.webp", tags: [] },
  { cat: "icecek", group: "soda", title: "Fanta", price: 120, desc: "Gazlı portakallı içecek.", img: "images/items/fanta.webp", tags: [] },
  { cat: "icecek", group: "soda", title: "Sprite", price: 120, desc: "Limon aromalı gazlı içecek.", img: "images/items/sprite.webp", tags: [] },
  { cat: "icecek", group: "soda", title: "Fuse Tea", price: 120, desc: "Şeftali, limon, mango, ananas seçenekleri.", img: "images/items/fusetea.webp", tags: [] },
  { cat: "icecek", group: "soda", title: "Cappy", price: 120, desc: "Vişne, şeftali, karışık.", img: "images/items/cappy.webp", tags: [] },
  { cat: "icecek", group: "soda", title: "Burn", price: 160, desc: "Enerji içeceği.", img: "images/items/burn.webp", tags: [] },
  { cat: "icecek", group: "soda", title: "Cam Şişe Su", price: 50, desc: "Doğal kaynak suyu.", img: "images/items/water.webp", tags: [] },
  { cat: "icecek", group: "soda", title: "Minera Maden Suyu", price: 100, desc: "Doğal maden suyu.", img: "images/items/minera.webp", tags: [] },
  { cat: "icecek", group: "soda", title: "Minera Limon Aromalı", price: 100, desc: "Limon aromalı maden suyu.", img: "images/items/minera-lemon.webp", tags: [] },
  { cat: "icecek", group: "soda", title: "Minera Elma Aromalı", price: 100, desc: "Elma aromalı maden suyu.", img: "images/items/minera-apple.webp", tags: [] },
  { cat: "icecek", group: "soda", title: "Minera Karpuz Çilek", price: 100, desc: "Aromalı maden suyu.", img: "images/items/minera-fruit.webp", tags: [] },
  { cat: "icecek", group: "soda", title: "Churchill", price: 120, desc: "Limon, tuz ve soda karışımı.", img: "images/items/churchill.webp", tags: [] },
  { cat: "icecek", group: "soda", title: "Ayran", price: 90, desc: "Geleneksel ayran.", img: "images/items/ayran.webp", tags: [] },
  { cat: "icecek", group: "soda", title: "Taze Portakal Suyu", price: 210, desc: "Taze sıkılmış.", img: "images/items/orange-juice.webp", tags: [] },
  { cat: "icecek", group: "soda", title: "RedBull", price: 190, desc: "Enerji içeceği.", img: "images/items/redbull.webp", tags: [] },

  // ─────────── SOĞUK KAHVELER ───────────
  { cat: "kahve", group: "cold", title: "Ice White Mocha", price: 210, desc: "Buzlu beyaz çikolatalı mocha.", img: "images/items/ice-white-mocha.webp", tags: [], caffeine: "150 mg" },
  { cat: "kahve", group: "cold", title: "Ice Americano", price: 170, desc: "Serinletici buzlu Americano.", img: "images/items/ice-americano.webp", tags: [], caffeine: "140 mg" },
  { cat: "kahve", group: "cold", title: "Ice Latte", price: 210, desc: "Buzlu latte.", img: "images/items/ice-latte.webp", tags: [], caffeine: "130 mg" },
  { cat: "kahve", group: "cold", title: "Ice Mocha", price: 210, desc: "Buzlu mocha.", img: "images/items/ice-mocha.webp", tags: [], caffeine: "150 mg" },
  { cat: "kahve", group: "cold", title: "Chocolate Frappe", price: 210, desc: "Çikolatalı frappe.", img: "images/items/choco-frappe.webp", tags: [], caffeine: "100 mg" },
  { cat: "kahve", group: "cold", title: "Caramel Frappe", price: 210, desc: "Karamelli frappe.", img: "images/items/caramel-frappe.webp", tags: [], caffeine: "100 mg" },
  { cat: "kahve", group: "cold", title: "Ice Latte Karamel", price: 210, desc: "Karamelli buzlu latte.", img: "images/items/ice-latte-caramel.webp", tags: [], caffeine: "130 mg" },
  { cat: "kahve", group: "cold", title: "Ice Latte Vanilya", price: 210, desc: "Vanilyalı buzlu latte.", img: "images/items/ice-latte-vanilla.webp", tags: [], caffeine: "130 mg" },
  { cat: "kahve", group: "cold", title: "Ice Spanish Latte", price: 210, desc: "Tatlı soğuk Spanish latte.", img: "images/items/ice-spanish.webp", tags: [], caffeine: "130 mg" },
  { cat: "kahve", group: "cold", title: "Ice Caramel Macchiato", price: 210, desc: "Buzlu karamelli macchiato.", img: "images/items/ice-macchiato.webp", tags: [], caffeine: "120 mg" },
  { cat: "kahve", group: "cold", title: "Ice Latte Fındık", price: 210, desc: "Fındıklı buzlu latte.", img: "images/items/ice-latte-hazelnut.webp", tags: [], caffeine: "130 mg" },
  { cat: "kahve", group: "cold", title: "Affogato", price: 230, desc: "Dondurma + espresso.", img: "images/items/affogato.webp", tags: [], caffeine: "80 mg" },
  { cat: "kahve", group: "cold", title: "Ice Flat White", price: 220, desc: "Buzlu flat white.", img: "images/items/ice-flatwhite.webp", tags: [], caffeine: "150 mg" },
  { cat: "kahve", group: "cold", title: "Ice Cortado", price: 220, desc: "Buzlu cortado.", img: "images/items/ice-cortado.webp", tags: [], caffeine: "120 mg" },
  { cat: "kahve", group: "cold", title: "Ice Pumpkin Latte (Yeni)", price: 210, desc: "Buzlu pumpkin latte.", img: "images/items/ice-pumpkin.webp", tags: [], caffeine: "130 mg" },

  // ─────────── MİLKSHAKE ───────────
  { cat: "icecek", group: "milkshake", title: "Milkshake Çilek", price: 220, desc: "Çilekli milkshake.", img: "images/items/milkshake-strawberry.webp", tags: ["dessert"] },
  { cat: "icecek", group: "milkshake", title: "Milkshake Çikolata", price: 220, desc: "Çikolatalı milkshake.", img: "images/items/milkshake-choco.webp", tags: ["dessert"] },
  { cat: "icecek", group: "milkshake", title: "Milkshake Oreo", price: 220, desc: "Oreo parçacıklı milkshake.", img: "images/items/milkshake-oreo.webp", tags: ["dessert"] },
  { cat: "icecek", group: "milkshake", title: "Milkshake Muz", price: 220, desc: "Muzlu milkshake.", img: "images/items/milkshake-banana.webp", tags: ["dessert"] },

  // ─────────── FROZEN ───────────
  { cat: "icecek", group: "frozen", title: "Frozen Karpuz", price: 210, desc: "Karpuzlu frozen.", img: "images/items/frozen-watermelon.webp", tags: [] },
  { cat: "icecek", group: "frozen", title: "Frozen Böğürtlen", price: 210, desc: "Böğürtlen frozen.", img: "images/items/frozen-blackberry.webp", tags: [] },
  { cat: "icecek", group: "frozen", title: "Frozen Çilek", price: 210, desc: "Çilek frozen.", img: "images/items/frozen-strawberry.webp", tags: [] },
  { cat: "icecek", group: "frozen", title: "Cool Lime Frozen", price: 210, desc: "Cool lime aromalı frozen.", img: "images/items/frozen-lime.webp", tags: [] },

  // ─────────── ALKOLSÜZ KOKTEYLLER ───────────
  { cat: "icecek", group: "kokteyl", title: "Mojito", price: 210, desc: "Esmer şeker, limon, nane, soda, sprite.", img: "images/items/mojito.webp", tags: [] },
  { cat: "icecek", group: "kokteyl", title: "Sex on The Beach", price: 210, desc: "Şeftali şurubu, ananas suyu, portakal suyu, grenadin.", img: "images/items/sex-on-the-beach.webp", tags: [] },
  { cat: "icecek", group: "kokteyl", title: "Purple Rain", price: 210, desc: "Böğürtlen, passion fruit, turunç aroması.", img: "images/items/purple-rain.webp", tags: [] },
  { cat: "icecek", group: "kokteyl", title: "Cool Lime (Yeni)", price: 210, desc: "Ferahlık veren cool lime.", img: "images/items/cool-lime.webp", tags: [] },

  // ─────────── SICAK İÇECEKLER ───────────
  { cat: "sicak", title: "Demleme Çay", price: 50, desc: "Taze demlenmiş çay.", img: "images/items/tea.webp", tags: [] },
  { cat: "sicak", title: "Demleme Çay (Fincan)", price: 70, desc: "Fincanda demleme çay.", img: "images/items/tea-cup.webp", tags: [] },
  { cat: "kahve", group: "hot", title: "Filtre Kahve", price: 160, desc: "Klasik filtre kahve.", img: "images/items/filter-coffee.webp", tags: [], caffeine: "140 mg" },
  { cat: "kahve", group: "hot", title: "Espresso", price: 100, desc: "Yoğun espresso shot.", img: "images/items/espresso.webp", tags: [], caffeine: "63 mg" },
  { cat: "kahve", group: "hot", title: "Double Espresso", price: 120, desc: "Çift shot espresso.", img: "images/items/double-espresso.webp", tags: [], caffeine: "126 mg" },
  { cat: "kahve", group: "hot", title: "Latte Macchiato", price: 180, desc: "Süt ve espresso katmanları.", img: "images/items/latte-macchiato.webp", tags: [], caffeine: "120 mg" },
  { cat: "kahve", group: "hot", title: "Caramel Macchiato", price: 180, desc: "Karamelli macchiato.", img: "images/items/caramel-macchiato.webp", tags: [], caffeine: "120 mg" },
  { cat: "kahve", group: "hot", title: "Americano", price: 160, desc: "Espresso + sıcak su.", img: "images/items/americano.webp", tags: [], caffeine: "140 mg" },
  { cat: "kahve", group: "hot", title: "Cappuccino", price: 180, desc: "Espresso + süt köpüğü.", img: "images/items/cappuccino.webp", tags: [], caffeine: "120 mg" },
  { cat: "kahve", group: "hot", title: "Cafe Latte", price: 180, desc: "Klasik latte.", img: "images/items/latte.webp", tags: [], caffeine: "120 mg" },
  { cat: "kahve", group: "hot", title: "Mocha", price: 190, desc: "Çikolatalı mocha.", img: "images/items/mocha.webp", tags: [], caffeine: "150 mg" },
  { cat: "kahve", group: "hot", title: "White Chocolate Mocha", price: 190, desc: "Beyaz çikolatalı mocha.", img: "images/items/white-mocha.webp", tags: [], caffeine: "150 mg" },
  { cat: "kahve", group: "hot", title: "Flat White", price: 180, desc: "Yoğun kahveli flat white.", img: "images/items/flatwhite.webp", tags: [], caffeine: "150 mg" },
  { cat: "kahve", group: "hot", title: "Cortado", price: 180, desc: "Espresso + az süt.", img: "images/items/cortado.webp", tags: [], caffeine: "120 mg" },
  { cat: "kahve", group: "hot", title: "Türk Kahvesi", price: 130, desc: "Klasik Türk kahvesi.", img: "images/items/turkish-coffee.webp", tags: [], caffeine: "65 mg" },
  { cat: "kahve", group: "hot", title: "Türk Kahvesi Double", price: 170, desc: "Çift porsiyon.", img: "images/items/turkish-double.webp", tags: [], caffeine: "120 mg" },
  { cat: "sicak", title: "Sıcak Çikolata", price: 180, desc: "Yoğun sıcak çikolata.", img: "images/items/hot-chocolate.webp", tags: [] },
  { cat: "sicak", title: "Sahlep", price: 180, desc: "Kışın vazgeçilmezi.", img: "images/items/sahlep.webp", tags: [] },
  { cat: "kahve", group: "hot", title: "Espresso Shot", price: 50, desc: "Tek shot espresso.", img: "images/items/espresso-shot.webp", tags: [], caffeine: "63 mg" },
  { cat: "sicak", title: "Fincan Süt", price: 120, desc: "Sıcak süt.", img: "images/items/milk.webp", tags: [] },
  { cat: "kahve", group: "hot", title: "Sütlü Filtre Kahve", price: 190, desc: "Süt eklenmiş filtre kahve.", img: "images/items/filter-coffee-milk.webp", tags: [], caffeine: "130 mg" },
  { cat: "sicak", title: "Ballı Fincan Süt", price: 160, desc: "Bal ile sıcak süt.", img: "images/items/milk-honey.webp", tags: [] },
  { cat: "kahve", group: "hot", title: "Pumpkin Latte (Yeni)", price: 190, desc: "Balkabaklı latte.", img: "images/items/pumpkin-latte.webp", tags: [], caffeine: "130 mg" },

  // ─────────── DÜNYA ÇAYLARI ───────────
  { cat: "sicak", title: "Red Forest", price: 190, desc: "Kırmızı orman meyvelerinin aroması.", img: "images/items/red-forest.webp", tags: [] },
  { cat: "sicak", title: "Jasmine", price: 190, desc: "Yasemin çiçeği aromalı çay.", img: "images/items/jasmine.webp", tags: [] },
  { cat: "sicak", title: "Ihlamur & Melisa", price: 190, desc: "Rahatlatıcı bitki çayı.", img: "images/items/melisa.webp", tags: [] },
  { cat: "sicak", title: "Yeşil Çay", price: 190, desc: "Yumuşak ve hafif aromalı yeşil çay.", img: "images/items/green-tea.webp", tags: [] }

);

// ─────────────────────────────
//  RENDERING & INTERACTION LOGIC
// ─────────────────────────────

const hiddenbackSection = document.getElementById("hiddenback-section");
const menuSection = document.getElementById("menu-section");
const container = document.getElementById("items-container");
const instagramBlock = document.getElementById("instagram-block");
const layoutRoot = document.getElementById("layout-root");

const modalOverlay = document.getElementById("modal-overlay");
const modalImg = document.getElementById("modal-img");
const modalTitle = document.getElementById("modal-title");
const modalDesc = document.getElementById("modal-desc");
const modalPrice = document.getElementById("modal-price");
const modalExtra = document.getElementById("modal-extra");
const modalClose = document.getElementById("modal-close");

const groupNav = document.getElementById("group-nav");
const groupNavButtons = document.getElementById("group-nav-buttons");
const mobileTopMenu = document.getElementById("mobile-top-menu");
const menuArrow = document.getElementById("menu-arrow");
const backToTopBtn = document.getElementById("back-to-top");

const catButtons = document.querySelectorAll(".cat-btn");
const filterChips = document.querySelectorAll(".filter-chip");
const searchDesktop = document.getElementById("search-desktop");
const mobileDrawerToggle = document.getElementById("mobile-drawer-toggle");
const mobileDrawer = document.getElementById("mobile-drawer");
const drawerOverlay = document.getElementById("drawer-overlay");
const drawerClose = document.getElementById("drawer-close");

const activeFilters = {
  veg: false,
  spicy: false,
  cheese: false,
  dessert: false,
};

let activeCategory = "hiddenback";
let searchTerm = "";

const TAG_LABELS = {
  veg: { label: "Vejetaryen", color: "text-emerald-600" },
  spicy: { label: "Acılı", color: "text-red-600" },
  cheese: { label: "Peynirli", color: "text-amber-600" },
  dessert: { label: "Tatlı", color: "text-pink-600" },
};

const formatPrice = (price) => (typeof price === "number" ? `${price}₺` : "" );

function updateLayout(category) {
  const isHome = category === "hiddenback";
  layoutRoot?.classList.toggle("home-layout", isHome);
}

function isMobileView() {
  return window.innerWidth < 1024;
}

function updateDrawerTrigger() {
  if (!mobileDrawerToggle) return;

  const shouldShow = isMobileView() && activeCategory === "hiddenback";
  mobileDrawerToggle.classList.toggle("hidden", !shouldShow);
}

function updateMobileTopMenu(showMenu) {
  if (!mobileTopMenu) return;

  const shouldShow = showMenu && isMobileView();
  mobileTopMenu.classList.toggle("hidden", !shouldShow);
  if (shouldShow) {
    updateMenuArrow();
  }
}

function updateMenuArrow() {
  if (!menuArrow || !menuSection) return;

  const threshold = Math.max(0, menuSection.offsetTop - 80);
  const pastMenu = window.scrollY > threshold;
  menuArrow.textContent = pastMenu ? "↑" : "↓";
}

function updateBackToTop() {
  if (!backToTopBtn || !menuSection) return;

  const pastThreshold = window.scrollY > menuSection.offsetTop + 240;
  const shouldShow = isMobileView() && activeCategory !== "hiddenback" && pastThreshold;
  backToTopBtn.classList.toggle("hidden", !shouldShow);
}

function openDrawer() {
  if (!mobileDrawer || !drawerOverlay) return;
  if (!isMobileView()) return;

  mobileDrawer.classList.add("open");
  drawerOverlay.classList.remove("hidden");
}

function closeDrawer() {
  if (!mobileDrawer || !drawerOverlay) return;

  mobileDrawer.classList.remove("open");
  drawerOverlay.classList.add("hidden");
}

function toggleSections(category) {
  const showMenu = category !== "hiddenback";

  hiddenbackSection?.classList.toggle("hidden", showMenu);
  instagramBlock?.classList.toggle("hidden", showMenu);
  menuSection?.classList.toggle("hidden", !showMenu);
  if (!showMenu) {
    renderGroupNav([]);
  }

  updateLayout(category);
  updateDrawerTrigger();
  updateMobileTopMenu(showMenu);
  updateBackToTop();
}

function syncFilterButtons(key, isActive) {
  document.querySelectorAll(`[data-filter="${key}"]`).forEach((btn) => {
    btn.classList.toggle("active", isActive);
  });
}

function applyFilters(item) {
  const term = searchTerm.trim().toLowerCase();
  const matchesSearch = term
    ? (item.title && item.title.toLowerCase().includes(term)) ||
      (item.desc && item.desc.toLowerCase().includes(term))
    : true;

  const activeKeys = Object.entries(activeFilters)
    .filter(([, value]) => value)
    .map(([key]) => key);

  const matchesTags = activeKeys.length
    ? activeKeys.every((tag) => (item.tags || []).includes(tag))
    : true;

  return matchesSearch && matchesTags;
}

function scrollToGroup(group) {
  const heading = container?.querySelector(`[data-group="${group}"]`);
  if (!heading) return;

  const offset = 90;
  const top = heading.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior: "smooth" });
}

function renderGroupNav(groups) {
  if (!groupNav || !groupNavButtons) return;

  const titles = GROUP_TITLES[activeCategory] || {};
  const visibleGroups = groups.filter((group) => titles[group]);

  groupNavButtons.innerHTML = "";

  if (!visibleGroups.length || activeCategory === "hiddenback") {
    groupNav.classList.add("hidden");
    return;
  }

  visibleGroups.forEach((group) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "filter-chip";
    btn.textContent = titles[group];
    btn.addEventListener("click", () => scrollToGroup(group));
    groupNavButtons.appendChild(btn);
  });

  groupNav.classList.remove("hidden");
}

function createCard(item) {
  const card = document.createElement("article");
  card.className = "bg-white border border-hb-border rounded-2xl p-4 sm:p-5 flex flex-col gap-3 shadow-[0_6px_18px_rgba(0,0,0,0.04)] card-fade";

  const caffeineLine =
    item.cat === "kahve" && item.caffeine
      ? `<p class="text-xs text-hb-muted">≈ ${item.caffeine} kafein</p>`
      : "";

  card.innerHTML = `
    <div class="rounded-xl overflow-hidden bg-neutral-200 aspect-[4/3]">
      <img src="${item.img}" alt="${item.title}" class="w-full h-full object-cover">
    </div>
    <div class="flex flex-col gap-2">
      <div class="flex items-start justify-between gap-2">
        <h3 class="text-base font-semibold leading-tight">${item.title}</h3>
        <span class="text-sm font-semibold">${formatPrice(item.price)}</span>
      </div>
      <p class="text-sm text-hb-muted leading-relaxed">${item.desc || ""}</p>
      ${caffeineLine}
      <div class="flex flex-wrap gap-2 text-[11px] text-hb-muted">
        ${(item.tags || [])
          .map((tag) => {
            const meta = TAG_LABELS[tag];
            return meta ? `<span class="px-2 py-0.5 rounded-full bg-gray-100 ${meta.color}">${meta.label}</span>` : "";
          })
          .join("")}
      </div>
    </div>
  `;

  card.addEventListener("click", () => openModal(item));
  return card;
}

function renderItems() {
  if (!container) return;

  container.innerHTML = "";
  const groupTitles = GROUP_TITLES[activeCategory] || {};
  const addedGroup = new Set();
  const renderedGroups = [];

  ITEMS.filter((item) => item.cat === activeCategory)
    .filter(applyFilters)
    .forEach((item) => {
      const groupTitle = groupTitles[item.group];
      if (groupTitle && !addedGroup.has(item.group)) {
        const heading = document.createElement("h3");
        heading.className =
          "col-span-full mt-6 mb-3 text-sm sm:text-base font-semibold uppercase tracking-[0.18em] text-hb-muted pl-1";
        heading.textContent = groupTitle;
        heading.dataset.group = item.group;
        heading.id = `group-${item.group}`;
        container.appendChild(heading);
        addedGroup.add(item.group);
        renderedGroups.push(item.group);
      }

      container.appendChild(createCard(item));
    });

  renderGroupNav(renderedGroups);

  if (!container.childElementCount) {
    const empty = document.createElement("p");
    empty.className = "text-center text-sm text-hb-muted col-span-full py-4";
    empty.textContent = "Sonuç bulunamadı.";
    container.appendChild(empty);
  }
}

function openModal(item) {
  if (!modalOverlay) return;

  modalImg.src = item.img;
  modalImg.alt = item.title;
  modalTitle.textContent = item.title;
  modalDesc.textContent = item.desc || "";
  modalPrice.textContent = formatPrice(item.price);

  const activeKeys = Object.entries(activeFilters)
    .filter(([, value]) => value)
    .map(([key]) => TAG_LABELS[key]?.label)
    .filter(Boolean);

  const extraParts = [];

  if (item.cat === "kahve" && item.caffeine) {
    extraParts.push(`≈ ${item.caffeine} kafein`);
  }

  if (activeKeys.length) {
    extraParts.push(`Filtreler: ${activeKeys.join(", ")}`);
  }

  if (extraParts.length) {
    modalExtra.textContent = extraParts.join(" · ");
    modalExtra.classList.remove("hidden");
  } else {
    modalExtra.classList.add("hidden");
  }

  modalOverlay.classList.remove("hidden");
}

function closeModal() {
  modalOverlay?.classList.add("hidden");
}

function setCategory(cat) {
  if (!cat) return;

  activeCategory = cat;
  catButtons.forEach((b) => b.classList.toggle("active", b.dataset.cat === cat));
  toggleSections(cat);
  renderItems();
  updateBackToTop();
}

catButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const { cat } = btn.dataset;
    setCategory(cat);
    if (isMobileView()) {
      closeDrawer();
    }
  });
});

filterChips.forEach((chip) => {
  chip.addEventListener("click", () => {
    const key = chip.dataset.filter;
    if (!key || !(key in activeFilters)) return;

    activeFilters[key] = !activeFilters[key];
    syncFilterButtons(key, activeFilters[key]);
    renderItems();
  });
});

if (searchDesktop) {
  searchDesktop.addEventListener("input", (e) => {
    searchTerm = e.target.value;
    renderItems();
  });
}

mobileDrawerToggle?.addEventListener("click", () => {
  if (activeCategory === "hiddenback") {
    setCategory("kahvalti");
    menuSection?.scrollIntoView({ behavior: "smooth" });
  }
  openDrawer();
});

drawerOverlay?.addEventListener("click", closeDrawer);
drawerClose?.addEventListener("click", closeDrawer);

window.addEventListener("resize", () => {
  updateDrawerTrigger();
  updateMobileTopMenu(activeCategory !== "hiddenback");
  if (!isMobileView()) {
    closeDrawer();
  }
  updateMenuArrow();
  updateBackToTop();
});

window.addEventListener("scroll", () => {
  updateMenuArrow();
  updateBackToTop();
});

mobileDrawerToggle?.addEventListener("click", () => {
  if (activeCategory === "hiddenback") {
    setCategory("kahvalti");
    menuSection?.scrollIntoView({ behavior: "smooth" });
  }
  openDrawer();
});

drawerOverlay?.addEventListener("click", closeDrawer);
drawerClose?.addEventListener("click", closeDrawer);

window.addEventListener("resize", () => {
  updateDrawerTrigger();
  updateMobileTopMenu(activeCategory !== "hiddenback");
  if (!isMobileView()) {
    closeDrawer();
  }
  updateMenuArrow();
});

window.addEventListener("scroll", updateMenuArrow);

mobileDrawerToggle?.addEventListener("click", () => {
  if (activeCategory === "hiddenback") {
    setCategory("kahvalti");
    menuSection?.scrollIntoView({ behavior: "smooth" });
  }
  openDrawer();
});

drawerOverlay?.addEventListener("click", closeDrawer);
drawerClose?.addEventListener("click", closeDrawer);

window.addEventListener("resize", () => {
  updateDrawerTrigger();
  updateMobileTopMenu(activeCategory !== "hiddenback");
  if (!isMobileView()) {
    closeDrawer();
  }
});

mobileDrawerToggle?.addEventListener("click", () => {
  if (activeCategory === "hiddenback") {
    setCategory("kahvalti");
    menuSection?.scrollIntoView({ behavior: "smooth" });
  }
  openDrawer();
});

drawerOverlay?.addEventListener("click", closeDrawer);
drawerClose?.addEventListener("click", closeDrawer);

window.addEventListener("resize", () => {
  updateDrawerTrigger();
  updateMobileTopMenu(activeCategory !== "hiddenback");
  if (!isMobileView()) {
    closeDrawer();
  }
});

mobileDrawerToggle?.addEventListener("click", () => {
  if (activeCategory === "hiddenback") {
    setCategory("kahvalti");
    menuSection?.scrollIntoView({ behavior: "smooth" });
  }
  openDrawer();
});

drawerOverlay?.addEventListener("click", closeDrawer);
drawerClose?.addEventListener("click", closeDrawer);

window.addEventListener("resize", () => {
  updateDrawerTrigger();
  if (!isMobileView()) {
    closeDrawer();
  }
});

mobileMenuPeek?.addEventListener("click", () => {
  setCategory("kahvalti");
  menuSection?.scrollIntoView({ behavior: "smooth" });
});

window.addEventListener("resize", () => {
  updateMobileMenuBar();
  updateMobilePeek();
});

mobileMenuPeek?.addEventListener("click", () => {
  setCategory("kahvalti");
  menuSection?.scrollIntoView({ behavior: "smooth" });
});

window.addEventListener("resize", () => {
  updateMobileMenuBar();
  updateMobilePeek();
});

mobileMenuPeek?.addEventListener("click", () => {
  setCategory("kahvalti");
  menuSection?.scrollIntoView({ behavior: "smooth" });
});

window.addEventListener("resize", () => {
  updateMobileMenuBar();
  updateMobilePeek();
});

mobileMenuOpen?.addEventListener("click", openMobileDrawer);
mobileMenuClose?.addEventListener("click", closeMobileDrawer);
mobileOverlay?.addEventListener("click", closeMobileDrawer);
mobileDrawerHandle?.addEventListener("click", openMobileDrawer);

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && mobileDrawer?.classList.contains("open")) {
    closeMobileDrawer();
  }
});

window.addEventListener("resize", () => {
  if (!isMobileView()) {
    closeMobileDrawer();
  }

  setMobileHandleVisibility();
});

window.addEventListener("touchstart", (event) => {
  touchStartX = event.touches[0]?.clientX || 0;
});

window.addEventListener("touchend", (event) => {
  const endX = event.changedTouches[0]?.clientX || 0;
  const delta = endX - touchStartX;

  if (!isMobileView()) return;

  if (delta > 80 && touchStartX < 40) {
    openMobileDrawer();
  } else if (delta < -80 && mobileDrawer?.classList.contains("open")) {
    closeMobileDrawer();
  }
});

mobileMenuOpen?.addEventListener("click", openMobileDrawer);
mobileMenuClose?.addEventListener("click", closeMobileDrawer);
mobileOverlay?.addEventListener("click", closeMobileDrawer);
mobileDrawerHandle?.addEventListener("click", openMobileDrawer);

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && mobileDrawer?.classList.contains("open")) {
    closeMobileDrawer();
  }
});

window.addEventListener("resize", () => {
  if (!isMobileView()) {
    closeMobileDrawer();
  }

  setMobileHandleVisibility();
});

window.addEventListener("touchstart", (event) => {
  touchStartX = event.touches[0]?.clientX || 0;
});

window.addEventListener("touchend", (event) => {
  const endX = event.changedTouches[0]?.clientX || 0;
  const delta = endX - touchStartX;

  if (!isMobileView()) return;

  if (delta > 80 && touchStartX < 40) {
    openMobileDrawer();
  } else if (delta < -80 && mobileDrawer?.classList.contains("open")) {
    closeMobileDrawer();
  }
});

mobileMenuOpen?.addEventListener("click", openMobileDrawer);
mobileMenuClose?.addEventListener("click", closeMobileDrawer);
mobileOverlay?.addEventListener("click", closeMobileDrawer);
mobileDrawerHandle?.addEventListener("click", openMobileDrawer);

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && mobileDrawer?.classList.contains("open")) {
    closeMobileDrawer();
  }
});

window.addEventListener("resize", () => {
  if (!isMobileView()) {
    closeMobileDrawer();
    mobileDrawerHandle?.classList.remove("hide");
  }
});

window.addEventListener("touchstart", (event) => {
  touchStartX = event.touches[0]?.clientX || 0;
});

window.addEventListener("touchend", (event) => {
  const endX = event.changedTouches[0]?.clientX || 0;
  const delta = endX - touchStartX;

  if (!isMobileView()) return;

  if (delta > 80 && touchStartX < 40) {
    openMobileDrawer();
  } else if (delta < -80 && mobileDrawer?.classList.contains("open")) {
    closeMobileDrawer();
  }
});

modalClose?.addEventListener("click", closeModal);
modalOverlay?.addEventListener("click", (event) => {
  if (event.target === modalOverlay) closeModal();
});

backToTopBtn?.addEventListener("click", () => {
  if (!menuSection) return;

  const offset = 72;
  const top = menuSection.offsetTop - offset;
  window.scrollTo({ top, behavior: "smooth" });
});

// Initial render
setCategory(activeCategory);
updateMenuArrow();
updateBackToTop();
