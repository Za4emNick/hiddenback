// ─────────────────────────────
//  GROUP TITLES (kategoriler içindeki alt başlıkların çıktısı)
// ─────────────────────────────

const GROUP_TITLES = {
  kahvalti: {},
  bowl: { smoothie: "Smoothie Bowl", savory: "Bowl" },
  lezzetler: {},
  tatli: {},
  matcha: {},
  soguk: {
    sogukicecek: "Soğuk İçecekler",
    coldcoffee: "Soğuk Kahveler",
    milkshake: "Milkshake",
    frozen: "Frozen",
    kokteyl: "Alkolsüz Kokteyller"
  },
  sicak: {
    sicakicecek: "Sıcak İçecekler",
    kahve: "Kahveler",
    dunya: "Dünya Çayları"
  }
};

const DEFAULT_IMG = "images/items/menemen.webp";

// ─────────────────────────────
//  MENU ITEMS — GÜNCEL LISTE
// ─────────────────────────────

const ITEMS = [
  // ──────────── KAHVALTI ────────────
  { cat: "kahvalti", title: "Mini Kahvaltı", price: 280, desc: "Göz yumurta, beyaz peynir, mini smoothie bowl, zeytinler, domates, salatalık, patates kızartması, ekşi maya ekmek ve çay.", img: DEFAULT_IMG },
  { cat: "kahvalti", title: "Ekmek Üstü Yumurta & Avokado", price: 240, desc: "Ekşi maya ekmek üstü taze peynir, çırpılmış yumurta, avokado ve mini smoothie bowl.", img: DEFAULT_IMG },
  { cat: "kahvalti", title: "Kruvasan Bowl", price: 260, desc: "Tereyağlı kruvasan yanında çırpılmış yumurta, avokado ve mini smoothie bowl.", img: DEFAULT_IMG },
  { cat: "kahvalti", title: "Sandviç", price: 220, desc: "Ekşi maya ekmekte cheddar, taze kaşar, krem peynir, dana jambon, haşlanmış yumurta ve lolorosso.", img: DEFAULT_IMG },
  { cat: "kahvalti", title: "Dana Jambon Tost", price: 220, desc: "Taze kaşar peyniri, dana jambon, patates kızartması ve Akdeniz yeşillikleri.", img: DEFAULT_IMG },
  { cat: "kahvalti", title: "Tatlı & Tuzlu Ekmek Üstü", price: 220, desc: "Bir dilim krem peynirli, dana jambonlu ve göz yumurtalı; diğer dilim çikolata, muz ve böğürtlenli.", img: DEFAULT_IMG },
  { cat: "kahvalti", title: "Çırpılmış Yumurta", price: 180, desc: "Çırpılmış yumurta, beyaz peynir ve ekşi maya ekmek.", img: DEFAULT_IMG },
  { cat: "kahvalti", title: "Menemen", price: 190, desc: "Yaz domatesiyle menemen, beyaz peynir ve ekşi maya ekmek.", img: DEFAULT_IMG },
  { cat: "kahvalti", title: "Omlet", price: 190, desc: "Taze otlu, sebzeli veya peynirli omlet; yanında yeşil salata ve ekşi maya ekmek.", img: DEFAULT_IMG },
  { cat: "kahvalti", title: "Kruvasan", price: 180, desc: "Tereyağlı kruvasan.", img: DEFAULT_IMG },
  { cat: "kahvalti", title: "Kruvasan Çikolata & Çilek", price: 230, desc: "Çikolata ve taze çilekle sunulan kruvasan.", img: DEFAULT_IMG },

  // ──────────── BOWL ────────────
  { cat: "bowl", group: "smoothie", title: "Acaí Bowl", price: 220, desc: "Acai özü, muz, böğürtlen, frambuaz ve granola.", img: DEFAULT_IMG },
  { cat: "bowl", group: "smoothie", title: "Berry Bowl", price: 200, desc: "Süzme yoğurt, bal, granola ve çilek.", img: DEFAULT_IMG },
  { cat: "bowl", group: "savory", title: "Basmatı Bowl", price: 260, desc: "Izgara tavuk göğsü, basmati pilavı, brokoli, havuç, Akdeniz yeşilliği ve zeytinyağı.", img: DEFAULT_IMG },
  { cat: "bowl", group: "savory", title: "Vegan Bowl", price: 220, desc: "Kavrulmuş nohut, mantar, avokado, bebek turp, Akdeniz yeşilliği, havuç ve zeytinyağı.", img: DEFAULT_IMG },
  { cat: "bowl", group: "savory", title: "Ton Balıklı Bowl", price: 260, desc: "Esmer pirinç, ton balığı, brokoli, havuç, Akdeniz yeşilliği, zeytinyağı ve salatalık turşusu.", img: DEFAULT_IMG },
  { cat: "bowl", group: "savory", title: "Köfte Grill Bowl", price: 260, desc: "Basmati pilavı, ızgara köfte, köz biber, lahana turşusu, Akdeniz yeşilliği, havuç ve zeytinyağı.", img: DEFAULT_IMG },
  { cat: "bowl", group: "savory", title: "Makarna Bowl", price: 220, desc: "Burgu makarna, yoğurt, salatalık turşusu, mısır, Meksika fasulyesi, Akdeniz yeşilliği, havuç ve zeytinyağı.", img: DEFAULT_IMG },
  { cat: "bowl", group: "savory", title: "Acı Tatlı Sos Tavuk Bowl", price: 260, desc: "Arpa şehriye, acı tatlı soslu tavuk göğsü, brokoli, Akdeniz yeşilliği, havuç ve zeytinyağı.", img: DEFAULT_IMG },
  { cat: "bowl", group: "savory", title: "Fresh Bowl", price: 220, desc: "Kinoa, avokado, çilek, havuç, Akdeniz yeşilliği ve zeytinyağı.", img: DEFAULT_IMG },

  // ──────────── LEZZETLER ────────────
  { cat: "lezzetler", title: "Tavuklu Sezar Salata", price: 250, desc: "Izgara tavuk göğsü, taze göbek marul, domates, kruton, sezar sos ve mısır.", img: DEFAULT_IMG },
  { cat: "lezzetler", title: "Yeşil Salata", price: 190, desc: "Taze göbek marul, lolorosso, havuç, turp, salatalık, domates ve beyaz peynir.", img: DEFAULT_IMG },
  { cat: "lezzetler", title: "Çıtır Tavuk", price: 280, desc: "Panelenmiş jülyen tavuk dilimleri, sweet chili sos, sezar sos ve patates kızartması.", img: DEFAULT_IMG },
  { cat: "lezzetler", title: "Burritos Tavuk Dürüm", price: 280, desc: "Tortilla ekmeğinde tavuk dilimleri, burritos sos, renkli biberler, mantar, mısır, cheddar peyniri, patates kızartması ve Akdeniz yeşilliği.", img: DEFAULT_IMG },
  { cat: "lezzetler", title: "Fettucine Alfredo", price: 280, desc: "Sotelenmiş tavuk dilimleri, fettuccine makarna, mantar, renkli biberler, pesto sos, krema ve parmesan peyniri.", img: DEFAULT_IMG },
  { cat: "lezzetler", title: "Köri Soslu Tavuk", price: 290, desc: "Köri soslu tavuk, mantar, renkli biberler, basmati pilav ve Akdeniz yeşillikleri.", img: DEFAULT_IMG },
  { cat: "lezzetler", title: "Sandviç", price: 220, desc: "Ekşi maya ekmek, cheddar, taze kaşar, krem peynir, dana jambon, haşlanmış yumurta ve lolorosso.", img: DEFAULT_IMG },
  { cat: "lezzetler", title: "Ekmek Üstü", price: 240, desc: "Ekşi maya ekmek üstü krem peynir, çırpılmış yumurta ve avokado.", img: DEFAULT_IMG },
  { cat: "lezzetler", title: "Patates Tava", price: 160, desc: "Klasik kızarmış patates.", img: DEFAULT_IMG },

  // ──────────── TATLILAR ────────────
  { cat: "tatli", title: "Çikolata Dolgulu Tart", price: 190, desc: "Yoğun çikolata dolgulu tart.", img: DEFAULT_IMG },
  { cat: "tatli", title: "Cevizli Brownie", price: 230, desc: "Ceviz parçalarıyla brownie.", img: DEFAULT_IMG },
  { cat: "tatli", title: "Cheesecake", price: 230, desc: "Frambuaz, yaban mersini, limon, lotus veya süt reçeli seçenekleriyle cheesecake.", img: DEFAULT_IMG },
  { cat: "tatli", title: "Tiramisu", price: 230, desc: "Klasik mascarpone kremalı tiramisu.", img: DEFAULT_IMG },
  { cat: "tatli", title: "Waffle", price: 240, desc: "Muz, çilek, yer fıstığı eklenebilir; hamur tarçın içerir.", img: DEFAULT_IMG },
  { cat: "tatli", title: "Magnolia", price: 230, desc: "Çilek, muz, çikolata, oreo veya karışık seçenekli magnolia.", img: DEFAULT_IMG },
  { cat: "tatli", title: "Brownie Cookie (2 Adet)", price: 190, desc: "İki adet brownie cookie.", img: DEFAULT_IMG },
  { cat: "tatli", title: "Çikolatalı Sufle", price: 240, desc: "Sıcak çikolatalı sufle.", img: DEFAULT_IMG },
  { cat: "tatli", title: "San Sebastian Cheesecake", price: 240, desc: "Karamelize yüzeyli San Sebastian cheesecake.", img: DEFAULT_IMG },
  { cat: "tatli", title: "Brownie Pasta", price: 260, desc: "İki dilim brownie arasında pasta kreması ve çilek dilimleri.", img: DEFAULT_IMG },
  { cat: "tatli", title: "Şekersiz Hurmalı İncirli Kek", price: 190, desc: "Şekersiz hurmalı ve incirli kek.", img: DEFAULT_IMG },
  { cat: "tatli", title: "Tart", price: 210, desc: "Orman meyveli veya çikolata dolgulu tart.", img: DEFAULT_IMG },
  { cat: "tatli", title: "Pancake", price: 230, desc: "Üç adet pancake, böğürtlen, çilek, muz ve çikolatayla.", img: DEFAULT_IMG },
  { cat: "tatli", title: "Damla Çikolatalı Cevizli Kurabiye", price: 180, desc: "Üç adet kurabiye ile servis edilir.", img: DEFAULT_IMG },
  { cat: "tatli", title: "Hidden Dream", price: 230, desc: "Oreo tabanı, hidden krema, akışkan çikolata ve fındık parçaları.", img: DEFAULT_IMG },
  { cat: "tatli", title: "Meyveli Çikolatalı Brownie", price: 240, desc: "Brownie parçaları, lotus kırığı, damla çikolata, çilek, muz ve çikolata sosu.", img: DEFAULT_IMG },
  { cat: "tatli", title: "Hidden Bowl", price: 240, desc: "Pastacı kreması, lotus kırıkları, damla çikolata, pirinç patlakları, çilek, muz ve çikolata sosu.", img: DEFAULT_IMG },
  { cat: "tatli", title: "Profiterol", price: 220, desc: "Profiterol topları, pastacı kreması, çikolata ve Antep fıstığı parçacıkları.", img: DEFAULT_IMG },
  { cat: "tatli", title: "Chocolate Mousse", price: 210, desc: "Çikolatalı mus, böğürtlen ve çilek ile servis edilir.", img: DEFAULT_IMG },
  { cat: "tatli", title: "Kruvasan", price: 180, desc: "Tereyağlı kruvasan tatlı servisi.", img: DEFAULT_IMG },
  { cat: "tatli", title: "Kruvasan Çikolata & Çilek", price: 230, desc: "Çikolata ve çilekle tatlandırılmış kruvasan.", img: DEFAULT_IMG },

  // ──────────── MATCHA ────────────
  { cat: "matcha", title: "Matcha Latte", price: 210, desc: "Klasik sıcak matcha latte.", img: DEFAULT_IMG },
  { cat: "matcha", title: "Ice Matcha Latte", price: 210, desc: "Buzlu matcha latte.", img: DEFAULT_IMG },
  { cat: "matcha", title: "Strawberry Matcha", price: 220, desc: "Çilek aromalı matcha.", img: DEFAULT_IMG },
  { cat: "matcha", title: "Orange Mango Matcha", price: 220, desc: "Portakal ve mango ile matcha.", img: DEFAULT_IMG },

  // ──────────── SOĞUK İÇECEK ────────────
  { cat: "soguk", group: "sogukicecek", title: "Coca Cola", price: 120, desc: "Zero ve şekersiz seçenekleriyle.", img: DEFAULT_IMG },
  { cat: "soguk", group: "sogukicecek", title: "Fanta", price: 120, desc: "Soğuk gazlı içecek.", img: DEFAULT_IMG },
  { cat: "soguk", group: "sogukicecek", title: "Sprite", price: 120, desc: "Limon aromalı gazlı içecek.", img: DEFAULT_IMG },
  { cat: "soguk", group: "sogukicecek", title: "Fuse Tea", price: 120, desc: "Şeftali, limon, mango ve ananas seçenekleriyle.", img: DEFAULT_IMG },
  { cat: "soguk", group: "sogukicecek", title: "Cappy", price: 120, desc: "Vişne, şeftali ve karışık meyve seçenekleriyle.", img: DEFAULT_IMG },
  { cat: "soguk", group: "sogukicecek", title: "Burn", price: 160, desc: "Enerji içeceği.", img: DEFAULT_IMG },
  { cat: "soguk", group: "sogukicecek", title: "Cam Şişe Su", price: 50, desc: "Cam şişede su.", img: DEFAULT_IMG },
  { cat: "soguk", group: "sogukicecek", title: "Minera Maden Suyu", price: 100, desc: "Doğal maden suyu.", img: DEFAULT_IMG },
  { cat: "soguk", group: "sogukicecek", title: "Minera Limon Aromalı", price: 100, desc: "Limon aromalı maden suyu.", img: DEFAULT_IMG },
  { cat: "soguk", group: "sogukicecek", title: "Minera Elma Aromalı", price: 100, desc: "Elma aromalı maden suyu.", img: DEFAULT_IMG },
  { cat: "soguk", group: "sogukicecek", title: "Churchill", price: 120, desc: "Ferahlık veren karışım.", img: DEFAULT_IMG },
  { cat: "soguk", group: "sogukicecek", title: "Ayran", price: 90, desc: "Serinletici ayran.", img: DEFAULT_IMG },
  { cat: "soguk", group: "sogukicecek", title: "Taze Portakal Suyu", price: 210, desc: "Taze sıkılmış portakal suyu.", img: DEFAULT_IMG },
  { cat: "soguk", group: "sogukicecek", title: "Redbull", price: 190, desc: "Enerji içeceği.", img: DEFAULT_IMG },
  { cat: "soguk", group: "sogukicecek", title: "Minera Karpuz Çilek Aromalı", price: 100, desc: "Karpuz ve çilek aromalı maden suyu.", img: DEFAULT_IMG },

  // ──────────── SOĞUK KAHVELER ────────────
  { cat: "soguk", group: "coldcoffee", title: "Ice White Mocha", price: 210, desc: "Buzlu beyaz çikolatalı mocha.", img: DEFAULT_IMG },
  { cat: "soguk", group: "coldcoffee", title: "Ice Americano", price: 170, desc: "Serinletici buzlu Americano.", img: DEFAULT_IMG },
  { cat: "soguk", group: "coldcoffee", title: "Ice Latte", price: 210, desc: "Buzlu latte.", img: DEFAULT_IMG },
  { cat: "soguk", group: "coldcoffee", title: "Ice Mocha", price: 210, desc: "Buzlu mocha.", img: DEFAULT_IMG },
  { cat: "soguk", group: "coldcoffee", title: "Chocolate Frappe", price: 210, desc: "Çikolatalı frappe.", img: DEFAULT_IMG },
  { cat: "soguk", group: "coldcoffee", title: "Caramel Frappe", price: 210, desc: "Karamelli frappe.", img: DEFAULT_IMG },
  { cat: "soguk", group: "coldcoffee", title: "Ice Latte Karamel", price: 210, desc: "Karamelli buzlu latte.", img: DEFAULT_IMG },
  { cat: "soguk", group: "coldcoffee", title: "Ice Latte Vanilya", price: 210, desc: "Vanilyalı buzlu latte.", img: DEFAULT_IMG },
  { cat: "soguk", group: "coldcoffee", title: "Ice Spanish Latte", price: 210, desc: "Tatlı soğuk Spanish latte.", img: DEFAULT_IMG },
  { cat: "soguk", group: "coldcoffee", title: "Ice Caramel Macchiato", price: 210, desc: "Buzlu karamelli macchiato.", img: DEFAULT_IMG },
  { cat: "soguk", group: "coldcoffee", title: "Ice Latte Fındık", price: 210, desc: "Fındık aromalı buzlu latte.", img: DEFAULT_IMG },
  { cat: "soguk", group: "coldcoffee", title: "Affogato", price: 230, desc: "Espresso ve dondurma ile affogato.", img: DEFAULT_IMG },
  { cat: "soguk", group: "coldcoffee", title: "Ekstra Şurup", price: 30, desc: "Kahve şurupları.", img: DEFAULT_IMG },
  { cat: "soguk", group: "coldcoffee", title: "Ice Flat White", price: 220, desc: "Buzlu flat white.", img: DEFAULT_IMG },
  { cat: "soguk", group: "coldcoffee", title: "Ice Cortado", price: 220, desc: "Buzlu cortado.", img: DEFAULT_IMG },
  { cat: "soguk", group: "coldcoffee", title: "Ice Pumpkin Latte (Yeni)", price: 210, desc: "Balkabaklı buzlu latte.", img: DEFAULT_IMG },
  { cat: "soguk", group: "coldcoffee", title: "Cookie Latte", price: 210, desc: "Kurabiye aromalı buzlu latte.", img: DEFAULT_IMG },

  // ──────────── MILKSHAKE ────────────
  { cat: "soguk", group: "milkshake", title: "Milkshake Çilek", price: 220, desc: "Çilekli milkshake.", img: DEFAULT_IMG },
  { cat: "soguk", group: "milkshake", title: "Milkshake Çikolata", price: 220, desc: "Çikolatalı milkshake.", img: DEFAULT_IMG },
  { cat: "soguk", group: "milkshake", title: "Milkshake Oreo", price: 220, desc: "Oreo parçalı milkshake.", img: DEFAULT_IMG },
  { cat: "soguk", group: "milkshake", title: "Milkshake Muz", price: 220, desc: "Muzlu milkshake.", img: DEFAULT_IMG },

  // ──────────── FROZEN ────────────
  { cat: "soguk", group: "frozen", title: "Frozen Karpuz", price: 210, desc: "Karpuzlu frozen.", img: DEFAULT_IMG },
  { cat: "soguk", group: "frozen", title: "Frozen Böğürtlen", price: 210, desc: "Böğürtlenli frozen.", img: DEFAULT_IMG },
  { cat: "soguk", group: "frozen", title: "Frozen Çilek", price: 210, desc: "Çilekli frozen.", img: DEFAULT_IMG },

  // ──────────── ALKOLSÜZ KOKTEYLLER ────────────
  { cat: "soguk", group: "kokteyl", title: "Mojito", price: 210, desc: "Mojito şurubu, esmer şeker, limon suyu, sprite, maden suyu ve taze nane.", img: DEFAULT_IMG },
  { cat: "soguk", group: "kokteyl", title: "Sex on The Beach", price: 210, desc: "Şeftali şurubu, ananas suyu, taze portakal suyu ve grenadin.", img: DEFAULT_IMG },
  { cat: "soguk", group: "kokteyl", title: "Purple Rain", price: 210, desc: "Ananas suyu, böğürtlen şurubu, passion fruit ve turunç aroması.", img: DEFAULT_IMG },
  { cat: "soguk", group: "kokteyl", title: "Cool Lime (Yeni)", price: 210, desc: "Ferahlatıcı cool lime.", img: DEFAULT_IMG },

  // ──────────── SICAK İÇECEK ────────────
  { cat: "sicak", group: "sicakicecek", title: "Demleme Çay", price: 50, desc: "Taze demlenmiş çay.", img: DEFAULT_IMG },
  { cat: "sicak", group: "sicakicecek", title: "Demleme Çay (Fincan)", price: 70, desc: "Fincanda demleme çay.", img: DEFAULT_IMG },
  { cat: "sicak", group: "kahve", title: "Filtre Kahve", price: 160, desc: "Klasik filtre kahve.", img: DEFAULT_IMG },
  { cat: "sicak", group: "kahve", title: "Espresso", price: 100, desc: "Yoğun espresso shot.", img: DEFAULT_IMG },
  { cat: "sicak", group: "kahve", title: "Double Espresso", price: 120, desc: "Çift shot espresso.", img: DEFAULT_IMG },
  { cat: "sicak", group: "kahve", title: "Latte Macchiato", price: 180, desc: "Süt ve espresso katmanları.", img: DEFAULT_IMG },
  { cat: "sicak", group: "kahve", title: "Caramel Macchiato", price: 180, desc: "Karamelli macchiato.", img: DEFAULT_IMG },
  { cat: "sicak", group: "kahve", title: "Americano", price: 160, desc: "Espresso ve sıcak su.", img: DEFAULT_IMG },
  { cat: "sicak", group: "kahve", title: "Cappuccino", price: 180, desc: "Espresso ve süt köpüğü.", img: DEFAULT_IMG },
  { cat: "sicak", group: "kahve", title: "Cafe Latte", price: 180, desc: "Klasik latte.", img: DEFAULT_IMG },
  { cat: "sicak", group: "kahve", title: "Mocha", price: 190, desc: "Çikolatalı mocha.", img: DEFAULT_IMG },
  { cat: "sicak", group: "kahve", title: "White Chocolate Mocha", price: 190, desc: "Beyaz çikolatalı mocha.", img: DEFAULT_IMG },
  { cat: "sicak", group: "kahve", title: "Flat White", price: 180, desc: "Yoğun kahveli flat white.", img: DEFAULT_IMG },
  { cat: "sicak", group: "kahve", title: "Cortado", price: 180, desc: "Espresso ve az süt.", img: DEFAULT_IMG },
  { cat: "sicak", group: "kahve", title: "Türk Kahvesi", price: 130, desc: "Klasik Türk kahvesi.", img: DEFAULT_IMG },
  { cat: "sicak", group: "kahve", title: "Türk Kahvesi (Double)", price: 170, desc: "Çift porsiyon Türk kahvesi.", img: DEFAULT_IMG },
  { cat: "sicak", group: "sicakicecek", title: "Sıcak Çikolata", price: 180, desc: "Yoğun sıcak çikolata.", img: DEFAULT_IMG },
  { cat: "sicak", group: "sicakicecek", title: "Sahlep", price: 180, desc: "Kışın vazgeçilmezi sahlep.", img: DEFAULT_IMG },
  { cat: "sicak", group: "kahve", title: "Espresso Shot", price: 50, desc: "Tek shot espresso.", img: DEFAULT_IMG },
  { cat: "sicak", group: "sicakicecek", title: "Fincan Süt", price: 120, desc: "Sıcak süt.", img: DEFAULT_IMG },
  { cat: "sicak", group: "kahve", title: "Sütlü Filtre Kahve", price: 190, desc: "Süt eklenmiş filtre kahve.", img: DEFAULT_IMG },
  { cat: "sicak", group: "sicakicecek", title: "Ballı Fincan Süt", price: 160, desc: "Bal ile sıcak süt.", img: DEFAULT_IMG },
  { cat: "sicak", group: "kahve", title: "Pumpkin Latte (Yeni)", price: 190, desc: "Balkabaklı latte.", img: DEFAULT_IMG },
  { cat: "sicak", group: "kahve", title: "Cookie Latte", price: 190, desc: "Kurabiye aromalı sıcak latte.", img: DEFAULT_IMG },

  // ──────────── DÜNYA ÇAYLARI ────────────
  { cat: "sicak", group: "dunya", title: "Red Forest", price: 190, desc: "Çilek, ahududu ve böğürtlen aromalı çay.", img: DEFAULT_IMG },
  { cat: "sicak", group: "dunya", title: "Jasmine", price: 190, desc: "Yasemin çiçeği aromalı Çin çayı.", img: DEFAULT_IMG },
  { cat: "sicak", group: "dunya", title: "Ihlamur & Melisa", price: 190, desc: "Kış aylarının vazgeçilmez bitki çayı.", img: DEFAULT_IMG },
  { cat: "sicak", group: "dunya", title: "Yeşil Çay", price: 190, desc: "Yumuşak içimli yeşil çay.", img: DEFAULT_IMG }
];

// ─────────────────────────────
//  RENDERING & INTERACTION LOGIC
// ─────────────────────────────

const hiddenbackSection = document.getElementById("hiddenback-section");
const menuSection = document.getElementById("menu-section");
const container = document.getElementById("items-container");
const instagramBlock = document.getElementById("instagram-block");
const gamesSection = document.getElementById("games-section");
const layoutRoot = document.getElementById("layout-root");
const introOverlay = document.getElementById("intro-overlay");
const introPanel = document.getElementById("intro-panel");
const introSelection = document.getElementById("intro-selection");
const introTyped = document.getElementById("intro-typed");
const languageButtons = document.querySelectorAll(".intro-lang-btn");

const snakeCanvas = document.getElementById("snake-canvas");
const snakeRestart = document.getElementById("snake-restart");
const snakeKeys = document.querySelectorAll(".snake-key");
const snakeScoreEl = document.getElementById("snake-score");
const snakeBestEl = document.getElementById("snake-best");
const snakeStatusEl = document.getElementById("snake-status");

const modalOverlay = document.getElementById("modal-overlay");
const modal = document.getElementById("modal");
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
const headerQuickButtons = document.querySelectorAll(".header-quick-btn");
const mobileFooterButtons = document.querySelectorAll("#mobile-footer-nav .footer-nav-btn");
const desktopFooterButtons = document.querySelectorAll("#desktop-footer-nav .footer-nav-btn");
const gamesMenuFab = document.getElementById("games-menu-fab");

const activeFilters = {
  veg: false,
  spicy: false,
  cheese: false,
  dessert: false,
};

const MENU_CATEGORIES = new Set(["kahvalti", "bowl", "lezzetler", "tatli", "matcha", "soguk", "sicak"]);
const GAME_CATEGORY = "games";

let activeCategory = "hiddenback";
let searchTerm = "";
let introStarted = false;
let selectedLanguage = document.documentElement.lang || "tr";
let typeSoundCtx = null;

const TAG_LABELS = {
  veg: { label: "Vejetaryen", color: "text-emerald-600" },
  spicy: { label: "Acılı", color: "text-red-600" },
  cheese: { label: "Peynirli", color: "text-amber-600" },
  dessert: { label: "Tatlı", color: "text-pink-600" },
};

const formatPrice = (price) => (typeof price === "number" ? `${price}₺` : "" );

// ─────────────────────────────
//  GAMES: SNAKE
// ─────────────────────────────

const snakeState = {
  gridSize: 18,
  tile: 20,
  speed: 140,
  playing: false,
  snake: [],
  direction: { x: 1, y: 0 },
  nextDirection: { x: 1, y: 0 },
  food: { x: 8, y: 8 },
  score: 0,
  best: 0,
};

let snakeCtx = null;
let snakeLoop = null;
let snakeReady = false;

const DIR_MAP = {
  up: { x: 0, y: -1 },
  down: { x: 0, y: 1 },
  left: { x: -1, y: 0 },
  right: { x: 1, y: 0 },
};

function loadSnakeBest() {
  const saved = Number(localStorage.getItem("hb_snake_best")) || 0;
  snakeState.best = saved;
  updateSnakeHUD();
}

function saveSnakeBest() {
  localStorage.setItem("hb_snake_best", String(snakeState.best));
}

function updateSnakeHUD(status = "") {
  if (snakeScoreEl) snakeScoreEl.textContent = snakeState.score;
  if (snakeBestEl) snakeBestEl.textContent = snakeState.best;
  if (snakeStatusEl && status) snakeStatusEl.textContent = status;
}

function resetSnakeState() {
  snakeState.snake = [
    { x: 6, y: 9 },
    { x: 5, y: 9 },
    { x: 4, y: 9 },
  ];
  snakeState.direction = { x: 1, y: 0 };
  snakeState.nextDirection = { x: 1, y: 0 };
  snakeState.food = { x: 10, y: 9 };
  snakeState.score = 0;
  snakeState.speed = 140;
  updateSnakeHUD("Hazır");
  drawSnake();
}

function clearSnakeLoop() {
  if (snakeLoop) {
    clearTimeout(snakeLoop);
    snakeLoop = null;
  }
}

function startSnakeGame() {
  if (!snakeCtx) return;

  clearSnakeLoop();
  snakeState.playing = true;
  resetSnakeState();
  updateSnakeHUD("Başladı");
  scheduleSnakeTick();
}

function stopSnakeGame(message = "Durdu") {
  snakeState.playing = false;
  clearSnakeLoop();
  updateSnakeHUD(message);
}

function scheduleSnakeTick() {
  clearSnakeLoop();
  snakeLoop = setTimeout(stepSnake, snakeState.speed);
}

function stepSnake() {
  if (!snakeState.playing) return;

  snakeState.direction = snakeState.nextDirection;
  const head = { ...snakeState.snake[0] };
  head.x += snakeState.direction.x;
  head.y += snakeState.direction.y;

  if (hitWall(head) || hitSelf(head)) {
    stopSnakeGame("Oyun bitti");
    return;
  }

  snakeState.snake.unshift(head);

  if (head.x === snakeState.food.x && head.y === snakeState.food.y) {
    snakeState.score += 1;
    snakeState.speed = Math.max(70, snakeState.speed - 3);
    placeFood();
    if (snakeState.score > snakeState.best) {
      snakeState.best = snakeState.score;
      saveSnakeBest();
    }
  } else {
    snakeState.snake.pop();
  }

  updateSnakeHUD("Oynanıyor");
  drawSnake();
  scheduleSnakeTick();
}

function hitWall(point) {
  return (
    point.x < 0 ||
    point.y < 0 ||
    point.x >= snakeState.gridSize ||
    point.y >= snakeState.gridSize
  );
}

function hitSelf(point) {
  return snakeState.snake.some((p) => p.x === point.x && p.y === point.y);
}

function placeFood() {
  const openTiles = [];
  for (let y = 0; y < snakeState.gridSize; y += 1) {
    for (let x = 0; x < snakeState.gridSize; x += 1) {
      if (!snakeState.snake.some((p) => p.x === x && p.y === y)) {
        openTiles.push({ x, y });
      }
    }
  }

  if (!openTiles.length) return;
  snakeState.food = openTiles[Math.floor(Math.random() * openTiles.length)];
}

function drawSnake() {
  if (!snakeCtx || !snakeCanvas) return;

  snakeCtx.fillStyle = "#050505";
  snakeCtx.fillRect(0, 0, snakeCanvas.width, snakeCanvas.height);

  // Food
  snakeCtx.fillStyle = "#f97316";
  snakeCtx.fillRect(
    snakeState.food.x * snakeState.tile,
    snakeState.food.y * snakeState.tile,
    snakeState.tile,
    snakeState.tile
  );

  // Snake body
  snakeCtx.fillStyle = "#10b981";
  snakeState.snake.forEach((part, index) => {
    const color = index === 0 ? "#22d3ee" : "#10b981";
    snakeCtx.fillStyle = color;
    snakeCtx.fillRect(
      part.x * snakeState.tile,
      part.y * snakeState.tile,
      snakeState.tile - 1,
      snakeState.tile - 1
    );
  });
}

function queueDirection(dirKey) {
  const next = DIR_MAP[dirKey];
  if (!next) return;

  const { x, y } = next;
  if (snakeState.direction.x === -x && snakeState.direction.y === -y) return;
  snakeState.nextDirection = next;
}

function bindSnakeControls() {
  if (snakeRestart) {
    snakeRestart.addEventListener("click", () => {
      startSnakeGame();
    });
  }

  snakeKeys.forEach((btn) => {
    btn.addEventListener("click", () => {
      const dir = btn.dataset.dir;
      queueDirection(dir);
    });
  });

  window.addEventListener("keydown", (event) => {
    const key = event.key.toLowerCase();
    if (["w", "arrowup"].includes(key)) queueDirection("up");
    if (["s", "arrowdown"].includes(key)) queueDirection("down");
    if (["a", "arrowleft"].includes(key)) queueDirection("left");
    if (["d", "arrowright"].includes(key)) queueDirection("right");
  });
}

function initSnake() {
  if (!snakeCanvas || snakeReady) return;

  snakeCtx = snakeCanvas.getContext("2d");
  snakeReady = true;
  loadSnakeBest();
  bindSnakeControls();
  resetSnakeState();
}

function setLanguage(lang) {
  selectedLanguage = lang;
  document.documentElement.lang = lang;
  document.documentElement.dataset.lang = lang;
  // gelecekteki dil dosyaları için hazırlık
}

function startReveal() {
  if (!introOverlay || introOverlay.classList.contains("intro-reveal")) return;

  introOverlay.classList.add("intro-reveal");
  document.body.classList.remove("intro-active");

  setTimeout(() => {
    introOverlay?.remove();
  }, 650);
}

function playTypeSound() {
  try {
    if (!typeSoundCtx) {
      typeSoundCtx = new (window.AudioContext || window.webkitAudioContext)();
    }

    const duration = 0.07;
    const now = typeSoundCtx.currentTime;
    const oscillator = typeSoundCtx.createOscillator();
    const gainNode = typeSoundCtx.createGain();

    oscillator.type = "square";
    oscillator.frequency.value = 920;
    gainNode.gain.setValueAtTime(0.04, now);
    gainNode.gain.exponentialRampToValueAtTime(0.001, now + duration);

    oscillator.connect(gainNode);
    gainNode.connect(typeSoundCtx.destination);

    oscillator.start(now);
    oscillator.stop(now + duration);
  } catch (error) {
    // sessizce geç
  }
}

function runTypewriter(onComplete) {
  const target = introTyped;
  const messages = [
    { selector: ".intro-typed-welcome", text: "Welcome to" },
    { selector: ".intro-typed-name", text: "h i d d e n b a c k..." },
  ];

  if (!target) {
    onComplete?.();
    return;
  }

  target.classList.remove("hidden");
  target.classList.remove("intro-type-cursor");
  target.innerHTML = `
    <span class="intro-chip intro-chip-dark">
      <span class="intro-type-cursor intro-typed-welcome"></span>
    </span>
    <span class="intro-chip intro-chip-light">
      <span class="intro-typed-name"></span>
    </span>
    <img src="logo-x-x.jpg" alt="HiddenBack Logo" class="intro-logo hidden intro-type-logo" />
  `;

  const logoEl = target.querySelector(".intro-type-logo");
  const spans = messages.map((msg) => target.querySelector(msg.selector));

  if (spans.some((span) => !span)) {
    onComplete?.();
    return;
  }

  let segmentIndex = 0;
  let charIndex = 0;

  const typeNext = () => {
    const current = messages[segmentIndex];
    const span = spans[segmentIndex];
    if (!current || !span) {
      onComplete?.();
      return;
    }

    if (charIndex <= current.text.length) {
      span.textContent = current.text.slice(0, charIndex);
      charIndex += 1;
      const justTyped = current.text.charAt(charIndex - 1);
      if (justTyped && justTyped.trim()) {
        playTypeSound();
      }
      setTimeout(typeNext, 90);
    } else {
      span.classList.remove("intro-type-cursor");
      segmentIndex += 1;
      charIndex = 0;

      const nextSpan = spans[segmentIndex];
      if (nextSpan) {
        nextSpan.classList.add("intro-type-cursor");
        setTimeout(typeNext, 120);
      } else {
        logoEl?.classList.remove("hidden");
        setTimeout(() => onComplete?.(), 650);
      }
    }
  };

  typeNext();
}

function launchIntroFlow(lang) {
  if (!introOverlay || introStarted) return;

  introStarted = true;
  setLanguage(lang);

  introSelection?.classList.add("hidden");

  introPanel?.classList.add("intro-panel-hide");
  setTimeout(() => introPanel?.classList.add("hidden"), 260);

  setTimeout(() => {
    runTypewriter(() => {
      setTimeout(startReveal, 300);
    });
  }, 200);

  setTimeout(startReveal, 6000);
}

function initIntroOverlay() {
  if (!introOverlay) return;

  document.body.classList.add("intro-active");

  languageButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.dataset.lang || "tr";
      launchIntroFlow(lang);
    });
  });
}

function updateLayout(category) {
  const isHome = category === "hiddenback";
  layoutRoot?.classList.toggle("home-layout", isHome);
}

function isMobileView() {
  return window.innerWidth < 1024;
}

function updateDrawerTrigger() {
  if (!mobileDrawerToggle) return;

  const shouldShow = isMobileView() && MENU_CATEGORIES.has(activeCategory);
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

function updateFooterNav(category) {
  const buttonSets = [mobileFooterButtons, desktopFooterButtons];

  buttonSets.forEach((set) => {
    set.forEach((btn) => {
      const isActive =
        (btn.dataset.nav === "hiddenback" && category === "hiddenback") ||
        (btn.dataset.nav === "games" && category === GAME_CATEGORY) ||
        (btn.dataset.nav === "menu" && MENU_CATEGORIES.has(category));

      btn.classList.toggle("ring-2", isActive);
      btn.classList.toggle("ring-black", isActive);
      btn.classList.toggle("ring-offset-2", isActive);
    });
  });
}

function updateHeaderQuickLinks(category) {
  const inMenu = MENU_CATEGORIES.has(category);

  headerQuickButtons.forEach((btn) => {
    btn.classList.toggle("hidden", inMenu);
  });
}

function goToMenuCategory() {
  Object.keys(activeFilters).forEach((key) => {
    activeFilters[key] = false;
    syncFilterButtons(key, false);
  });

  searchTerm = "";
  if (searchDesktop) searchDesktop.value = "";

  setCategory("kahvalti"); // this triggers renderItems() internally
  menuSection?.scrollIntoView({ behavior: "smooth" });
}

function updateBackToTop() {
  if (!backToTopBtn) return;

  const shouldShow = window.scrollY > 200;
  backToTopBtn.classList.toggle("hidden", !shouldShow);
}

function updateGamesFab() {
  if (!gamesMenuFab) return;

  const shouldShow = activeCategory === GAME_CATEGORY;
  gamesMenuFab.classList.toggle("hidden", !shouldShow);
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
  const showHome = category === "hiddenback";
  const showGame = category === GAME_CATEGORY;
  const showMenu = MENU_CATEGORIES.has(category);

  hiddenbackSection?.classList.toggle("hidden", !showHome);
  instagramBlock?.classList.toggle("hidden", !showHome);
  gamesSection?.classList.toggle("hidden", !showGame);
  menuSection?.classList.toggle("hidden", !showMenu);

  if (!showMenu) {
    renderGroupNav([]);
  }

  if (showGame) {
    initSnake();
  } else {
    stopSnakeGame("Durdu");
  }

  updateLayout(category);
  updateDrawerTrigger();
  updateMobileTopMenu(showMenu);
  updateGamesFab();
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

  if (!MENU_CATEGORIES.has(activeCategory)) {
    container.innerHTML = "";
    return;
  }

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

const isModalOpen = () => modalOverlay && !modalOverlay.classList.contains("hidden");

function closeModal() {
  modalOverlay?.classList.add("hidden");
}

function setCategory(cat) {
  if (!cat) return;

  activeCategory = cat;
  catButtons.forEach((b) => b.classList.toggle("active", b.dataset.cat === cat));
  toggleSections(cat);
  updateFooterNav(cat);
  updateHeaderQuickLinks(cat);

  if (MENU_CATEGORIES.has(cat)) {
    renderItems();
  } else if (container) {
    container.innerHTML = "";
  }
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
    goToMenuCategory();
  }
  openDrawer();
});

headerQuickButtons.forEach((btn) => {
  btn.addEventListener("click", () => handleNav(btn.dataset.nav));
});

function handleNav(destination) {
  if (destination === "hiddenback") {
    setCategory("hiddenback");
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else if (destination === "games") {
    setCategory(GAME_CATEGORY);
    gamesSection?.scrollIntoView({ behavior: "smooth" });
  } else if (destination === "menu") {
    goToMenuCategory();
    if (isMobileView()) openDrawer();
  }
}

[...mobileFooterButtons, ...desktopFooterButtons].forEach((btn) => {
  btn.addEventListener("click", () => handleNav(btn.dataset.nav));
});

drawerOverlay?.addEventListener("click", closeDrawer);
drawerClose?.addEventListener("click", closeDrawer);

window.addEventListener("resize", () => {
  updateDrawerTrigger();
  updateMobileTopMenu(MENU_CATEGORIES.has(activeCategory));
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

modal?.addEventListener("click", (event) => event.stopPropagation());
modalClose?.addEventListener("click", closeModal);
modalOverlay?.addEventListener("click", (event) => {
  if (event.target !== modalOverlay) return;
  closeModal();
});

backToTopBtn?.addEventListener("click", () => {
  if (!menuSection) return;

  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && isModalOpen()) {
    closeModal();
  }
});

initIntroOverlay();
// Initial render
setCategory(activeCategory);
updateMenuArrow();
updateBackToTop();
