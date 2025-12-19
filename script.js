// ─────────────────────────────
//  GROUP TITLES (kategoriler içindeki alt başlıkların çıktısı)
// ─────────────────────────────

const GROUP_TITLES = {
  kahvalti: { smoothie: "Smoothie Bowl" },
  bowl: {},
  lezzetler: {
    vegetarian: "Vejetaryen",
    chicken: "Tavuklu",
  },
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

const DEFAULT_TEXT = {
  snakeReadyStatus: "Hazır",
  snakeStartedStatus: "Başladı",
  snakeStoppedStatus: "Durdu",
  snakeGameOverStatus: "Oyun bitti",
  snakePlayingStatus: "Oynanıyor",
  filterVeg: "Vejetaryen",
  filterSpicy: "Acılı",
  filterCheese: "Peynirli",
  filterDessert: "Tatlı",
  filtersLabel: "Filtreler",
  checkerRed: "Kırmızı",
  checkerBlack: "Siyah",
  caffeineLabel: "kafein",
};

let uiText = { ...DEFAULT_TEXT };

const SUPPORTED_LANGS = ["tr", "en", "ru"];
const DEFAULT_LANG = "tr";
let currentLang = DEFAULT_LANG;
let translations = {};

function getItemId(item) {
  if (item.id) return item.id;
  if (item.img) {
    const last = item.img.split("/").pop() || "";
    return last.replace(/\.\w+$/, "");
  }
  return item.title?.toLowerCase().replace(/[^a-z0-9]+/gi, "_") || "";
}

function refreshUiText() {
  const incoming = translations.ui || translations.text || {};
  uiText = { ...DEFAULT_TEXT, ...incoming };
  snakeStatusText = uiText.snakeReadyStatus;
  checkersStatusState = { key: "checkersTurn", vars: { player: uiText.checkerRed } };
}

function resolveTranslation(key) {
  if (!key) return "";
  const nested = key
    .split(".")
    .reduce((acc, part) => (acc && typeof acc === "object" && part in acc ? acc[part] : undefined), translations);
  if (typeof nested === "string") return nested;
  if (translations.ui && key in translations.ui) return translations.ui[key];
  if (key in translations) return translations[key];
  return "";
}

function applyStaticTranslations() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (!el.dataset.defaultText) el.dataset.defaultText = el.textContent?.trim() || "";
    const translated = resolveTranslation(key);
    el.textContent = translated || el.dataset.defaultText;
  });

  document.querySelectorAll("[data-i18n-content]").forEach((el) => {
    const key = el.dataset.i18nContent;
    if (!el.dataset.defaultContent) el.dataset.defaultContent = el.getAttribute("content") || "";
    const translated = resolveTranslation(key);
    el.setAttribute("content", translated || el.dataset.defaultContent);
  });

  const titleEl = document.querySelector("title[data-i18n]");
  if (titleEl) document.title = titleEl.textContent;
}

function translateMenuItem(item) {
  const itemId = getItemId(item);
  const menuEntry = translations.menu?.[itemId] || {};
  return {
    ...item,
    id: itemId,
    title: menuEntry.title || item.title,
    desc: item.suppressDesc ? "" : (menuEntry.desc || item.desc),
  };
}

function translateGroupTitle(cat, group) {
  return translations.groups?.[cat]?.[group] || (GROUP_TITLES[cat] || {})[group] || group;
}

async function fetchTranslations(lang) {
  try {
    const response = await fetch(`/locales/${lang}.json`, { cache: "no-store" });
    if (!response.ok) {
      console.error(`Translation request failed for ${lang}: ${response.status} ${response.statusText}`);
      return {};
    }
    try {
      return await response.json();
    } catch (parseError) {
      console.error("Translation parse failed", parseError);
      return {};
    }
  } catch (error) {
    console.error("Translation load failed", error);
    return {};
  }
}

function showIntroOverlay() {
  document.body.classList.add("intro-active");
  const overlay = document.getElementById("intro-overlay");
  if (overlay) overlay.removeAttribute("hidden");
}

function hideIntroOverlay(instant = false) {
  const overlay = document.getElementById("intro-overlay");
  const panel = document.getElementById("intro-panel");
  document.body.classList.remove("intro-active");
  if (!overlay) return;
  if (instant) {
    overlay.setAttribute("hidden", "hidden");
    return;
  }
  overlay.classList.add("intro-reveal");
  panel?.classList.add("intro-panel-hide");
  setTimeout(() => overlay.setAttribute("hidden", "hidden"), 450);
}

async function applyLanguage(lang) {
  const targetLang = SUPPORTED_LANGS.includes(lang) ? lang : DEFAULT_LANG;
  const loadedTranslations = await fetchTranslations(targetLang);

  currentLang = targetLang;
  translations = loadedTranslations && Object.keys(loadedTranslations).length
    ? loadedTranslations
    : {};

  document.documentElement.lang = currentLang;
  refreshUiText();
  applyStaticTranslations();
  renderItems();
  updateSnakeHUD();
  renderTttStatus();
  updateCheckersStatus();
  localStorage.setItem("hb-lang", currentLang);
}

async function initLanguage() {
  const saved = localStorage.getItem("hb-lang");
  await applyLanguage(saved || DEFAULT_LANG);
  if (saved) {
    hideIntroOverlay(true);
  } else {
    showIntroOverlay();
  }
}

const itemImg = (name) => `images/items/${name}.webp`;

// ─────────────────────────────
//  MENU ITEMS — GÜNCEL LISTE
// ─────────────────────────────

const ITEMS = [
  // ──────────── KAHVALTI ────────────
  { cat: "kahvalti", title: "Mini Kahvaltı", price: 280, desc: "Göz yumurta, beyaz peynir, mini smoothie bowl, zeytinler, domates, salatalık, patates kızartması, ekşi maya ekmek ve çay.", img: itemImg("mini_kahvalti") },
  { cat: "kahvalti", title: "Ekmek Üstü Yumurta & Avokado", price: 240, desc: "Ekşi maya ekmek üstü taze peynir, çırpılmış yumurta, avokado ve mini smoothie bowl.", img: itemImg("ekmek_ustu_yumurta_ve_avokado") },
  { cat: "kahvalti", title: "Kruvasan Bowl", price: 260, desc: "Tereyağlı kruvasan yanında çırpılmış yumurta, avokado ve mini smoothie bowl.", img: itemImg("kruvasan_bowl") },
  { cat: "kahvalti", title: "Sandviç", price: 220, desc: "Ekşi maya ekmekte cheddar, taze kaşar, krem peynir, dana jambon, haşlanmış yumurta ve lolorosso.", img: itemImg("sandvic") },
  { cat: "kahvalti", title: "Dana Jambon Tost", price: 220, desc: "Taze kaşar peyniri, dana jambon, patates kızartması ve Akdeniz yeşillikleri.", img: itemImg("dana_jambon_tost") },
  { cat: "kahvalti", title: "Tavuklu Tost", price: 280, desc: "Ekşi maya ekmek, kremalı tavuk, patates kızartması ve akdeniz yeşillikleri", img: itemImg("tavuklu_tost") },
  { cat: "kahvalti", title: "Tatlı & Tuzlu Ekmek Üstü", price: 220, desc: "Bir dilim krem peynirli, dana jambonlu ve göz yumurtalı; diğer dilim çikolata, muz ve böğürtlenli.", img: itemImg("tatli_ve_tuzlu_ekmek_ustu") },
  { cat: "kahvalti", title: "Çırpılmış Yumurta", price: 180, desc: "Çırpılmış yumurta, beyaz peynir ve ekşi maya ekmek.", img: itemImg("cirpilmis_yumurta") },
  { cat: "kahvalti", title: "Omlet", price: 190, desc: "Taze otlu, sebzeli veya peynirli omlet; yanında yeşil salata ve ekşi maya ekmek.", img: itemImg("omlet") },
  { cat: "kahvalti", title: "Kruvasan", price: 180, desc: "Tereyağlı kruvasan.", img: itemImg("kruvasan") },
  { cat: "kahvalti", title: "Kruvasan Çikolata & Çilek", price: 230, desc: "Çikolata ve taze çilekle sunulan kruvasan.", img: itemImg("kruvasan_cikolata_ve_cilek") },
  { cat: "kahvalti", title: "Menemen", price: 190, desc: "Yaz domatesiyle menemen, beyaz peynir ve ekşi maya ekmek.", img: itemImg("menemen") },
  { cat: "kahvalti", group: "smoothie", title: "Acaí Bowl", price: 220, desc: "Acai özü, muz, böğürtlen, frambuaz ve granola.", img: itemImg("bowl") },
  { cat: "kahvalti", group: "smoothie", title: "Berry Bowl", price: 200, desc: "Süzme yoğurt, bal, granola ve çilek.", img: itemImg("bowl1") },
  
  // ──────────── BOWL ────────────
  { cat: "bowl", title: "Basmatı Bowl", price: 260, desc: "Izgara tavuk göğsü, basmati pilavı, brokoli, havuç, Akdeniz yeşilliği ve zeytinyağı.", img: itemImg("bowl2") },
  { cat: "bowl", title: "Vegan Bowl", price: 220, desc: "Kavrulmuş nohut, mantar, avokado, bebek turp, Akdeniz yeşilliği, havuç ve zeytinyağı.", img: itemImg("bowl3") },
  { cat: "bowl", title: "Ton Balıklı Bowl", price: 260, desc: "Esmer pirinç, ton balığı, brokoli, havuç, Akdeniz yeşilliği, zeytinyağı ve salatalık turşusu.", img: itemImg("bowl4") },
  { cat: "bowl", title: "Köfte Grill Bowl", price: 260, desc: "Basmati pilavı, ızgara köfte, köz biber, lahana turşusu, Akdeniz yeşilliği, havuç ve zeytinyağı.", img: itemImg("bowl5") },
  { cat: "bowl", title: "Makarna Bowl", price: 220, desc: "Burgu makarna, yoğurt, salatalık turşusu, mısır, Meksika fasulyesi, Akdeniz yeşilliği, havuç ve zeytinyağı.", img: itemImg("bowl6") },
  { cat: "bowl", title: "Acı Tatlı Sos Tavuk Bowl", price: 260, desc: "Arpa şehriye, acı tatlı soslu tavuk göğsü, brokoli, Akdeniz yeşilliği, havuç ve zeytinyağı.", img: itemImg("bowl7") },
  { cat: "bowl", title: "Fresh Bowl", price: 220, desc: "Kinoa, avokado, çilek, havuç, Akdeniz yeşilliği ve zeytinyağı.", img: itemImg("bowl8") },

  // ──────────── LEZZETLER ────────────
  { cat: "lezzetler", group: "chicken", title: "Tavuklu Sezar Salata", price: 250, desc: "Izgara tavuk göğsü, taze göbek marul, domates, kruton, sezar sos ve mısır.", img: itemImg("tavuklu_sezar_salata") },
  { cat: "lezzetler", group: "vegetarian", title: "Yeşil Salata", price: 190, desc: "Taze göbek marul, lolorosso, havuç, turp, salatalık, domates ve beyaz peynir.", img: itemImg("yesil_salata") },
  { cat: "lezzetler", group: "chicken", title: "Çıtır Tavuk", price: 280, desc: "Panelenmiş jülyen tavuk dilimleri, sweet chili sos, sezar sos ve patates kızartması.", img: itemImg("citir_tavuk") },
  { cat: "lezzetler", group: "chicken", title: "Burritos Tavuk Dürüm", price: 280, desc: "Tortilla ekmeğinde tavuk dilimleri, burritos sos, renkli biberler, mantar, mısır, cheddar peyniri, patates kızartması ve Akdeniz yeşilliği.", img: itemImg("burritos_tavuk_durum") },
  { cat: "lezzetler", group: "chicken", title: "Fettucine Alfredo", price: 280, desc: "Sotelenmiş tavuk dilimleri, fettuccine makarna, mantar, renkli biberler, pesto sos, krema ve parmesan peyniri.", img: itemImg("fettucine_alfredo") },
  { cat: "lezzetler", group: "chicken", title: "Köri Soslu Tavuk", price: 290, desc: "Köri soslu tavuk, mantar, renkli biberler, basmati pilav ve Akdeniz yeşillikleri.", img: itemImg("kori_soslu_tavuk") },
  { cat: "lezzetler", group: "chicken", title: "Sandviç", price: 220, desc: "Ekşi maya ekmek, cheddar, taze kaşar, krem peynir, dana jambon, haşlanmış yumurta ve lolorosso.", img: itemImg("sandvic") },
  { cat: "lezzetler", group: "vegetarian", title: "Ekmek Üstü", price: 240, desc: "Ekşi maya ekmek üstü krem peynir, çırpılmış yumurta ve avokado.", img: itemImg("ekmek_ustu") },
  { cat: "lezzetler", group: "vegetarian", title: "Patates Tava", price: 160, desc: "Klasik kızarmış patates.", img: itemImg("patates_tava") },

  // ──────────── TATLILAR ────────────
  { cat: "tatli", title: "Brownie Pasta", price: 260, desc: "İki dilim brownie arasında pasta kreması ve çilek dilimleri.", img: itemImg("brownie_pasta") },
  { cat: "tatli", title: "Profiterol", price: 220, desc: "Profiterol topları, pastacı kreması, çikolata ve Antep fıstığı parçacıkları.", img: itemImg("profiterol") },
  { cat: "tatli", title: "Magnolia", price: 230, desc: "Çilek, muz, çikolata, oreo veya karışık seçenekli magnolia.", img: itemImg("magnolia") },
  { cat: "tatli", title: "Tiramisu", price: 230, desc: "Klasik mascarpone kremalı tiramisu.", img: itemImg("tiramisu") },
  { cat: "tatli", title: "San Sebastian Cheesecake", price: 240, desc: "Karamelize yüzeyli San Sebastian cheesecake.", img: itemImg("san_sebastian_cheesecake") },
  { cat: "tatli", title: "Waffle", price: 240, desc: "Muz, çilek, yer fıstığı eklenebilir; hamur tarçın içerir.", img: itemImg("waffle") },
  { cat: "tatli", title: "Pancake", price: 230, desc: "Üç adet pancake, böğürtlen, çilek, muz ve çikolatayla.", img: itemImg("pancake") },
  { cat: "tatli", title: "Brownie Cookie (2 Adet)", price: 190, desc: "İki adet brownie cookie.", img: itemImg("brownie_cookie_2_adet") },
  { cat: "tatli", title: "Cheesecake", price: 230, desc: "Frambuaz, yaban mersini, limon, lotus veya süt reçeli seçenekleriyle cheesecake.", img: itemImg("cheesecake") },
  { cat: "tatli", title: "Hidden Bowl", price: 240, desc: "Pastacı kreması, lotus kırıkları, damla çikolata, pirinç patlakları, çilek, muz ve çikolata sosu.", img: itemImg("hidden_bowl") },
  { cat: "tatli", title: "Kruvasan Çikolata & Çilek", price: 230, desc: "Çikolata ve çilekle tatlandırılmış kruvasan.", img: itemImg("kruvasan_cikolata_ve_cilek") },
  { cat: "tatli", title: "Çikolata Tart", price: 190, desc: "Yoğun çikolata dolgulu tart.", img: itemImg("cikolata_dolgulu_tart") },
  { cat: "tatli", title: "Cevizli Brownie", price: 230, desc: "Ceviz parçalarıyla brownie.", img: itemImg("cevizli_brownie") },
  { cat: "tatli", title: "Chocolate Mousse", price: 210, desc: "Çikolatalı mus, böğürtlen ve çilek ile servis edilir.", img: itemImg("chocolate_mousse") },
  { cat: "tatli", title: "Çikolatalı Sufle", price: 240, desc: "Sıcak çikolatalı sufle.", img: itemImg("cikolatali_sufle") },
  { cat: "tatli", title: "Meyveli Çikolatalı Brownie", price: 240, desc: "Brownie parçaları, lotus kırığı, damla çikolata, çilek, muz ve çikolata sosu.", img: itemImg("meyveli_cikolatali_brownie") },
  { cat: "tatli", title: "Şekersiz Hurmalı İncirli Kek", price: 190, desc: "Şekersiz hurmalı ve incirli kek.", img: itemImg("sekersiz_hurmali_i_ncirli_kek") },

  // ──────────── MATCHA ────────────
  { cat: "matcha", title: "Matcha Latte", price: 210, desc: "Klasik sıcak matcha latte.", img: itemImg("matcha_latte"), suppressDesc: true },
  { cat: "matcha", title: "Ice Matcha Latte", price: 210, desc: "Buzlu matcha latte.", img: itemImg("ice_matcha_latte"), suppressDesc: true },
  { cat: "matcha", title: "Strawberry Matcha", price: 220, desc: "Çilek aromalı matcha.", img: itemImg("strawberry_matcha"), suppressDesc: true },
  { cat: "matcha", title: "Orange Mango Matcha", price: 220, desc: "Portakal ve mango ile matcha.", img: itemImg("orange_mango_matcha"), suppressDesc: true },

  // ──────────── SOĞUK İÇECEK ────────────
  { cat: "soguk", group: "sogukicecek", title: "Coca Cola / Fanta / Sprite", price: 120, desc: "Coca Cola, Fanta veya Sprite seçenekleri.", img: itemImg("coca_cola") },
  { cat: "soguk", group: "sogukicecek", title: "Fuse Tea", price: 120, desc: "Şeftali, limon, mango ve ananas seçenekleriyle.", img: itemImg("fuse_tea") },
  { cat: "soguk", group: "sogukicecek", title: "Cappy", price: 120, desc: "Vişne, şeftali ve karışık meyve seçenekleriyle.", img: itemImg("cappy") },
  { cat: "soguk", group: "sogukicecek", title: "Burn", price: 160, desc: "Enerji içeceği.", img: itemImg("burn"), suppressDesc: true },
  { cat: "soguk", group: "sogukicecek", title: "Cam Şişe Su", price: 50, desc: "Cam şişede su.", img: itemImg("cam_sise_su"), suppressDesc: true },
  { cat: "soguk", group: "sogukicecek", title: "Minera Maden Suyu Çeşitleri", price: 100, desc: "Doğal, limon, elma veya karpuz-çilek aromalı seçenekler.", img: itemImg("minera_maden_suyu") },
  { cat: "soguk", group: "sogukicecek", title: "Churchill", price: 120, desc: "Ferahlık veren karışım.", img: itemImg("churchill"), suppressDesc: true },
  { cat: "soguk", group: "sogukicecek", title: "Ayran", price: 90, desc: "Serinletici ayran.", img: itemImg("ayran"), suppressDesc: true },
  { cat: "soguk", group: "sogukicecek", title: "Taze Portakal Suyu", price: 210, desc: "Taze sıkılmış portakal suyu.", img: itemImg("taze_portakal_suyu"), suppressDesc: true },
  { cat: "soguk", group: "sogukicecek", title: "Redbull", price: 190, desc: "Enerji içeceği.", img: itemImg("redbull"), suppressDesc: true },

  // ──────────── SOĞUK KAHVELER ────────────
  { cat: "soguk", group: "coldcoffee", title: "Ice White Mocha", price: 210, desc: "Buzlu beyaz çikolatalı mocha.", img: itemImg("ice_white_mocha"), suppressDesc: true },
  { cat: "soguk", group: "coldcoffee", title: "Ice Americano", price: 170, desc: "Serinletici buzlu Americano.", img: itemImg("ice_americano"), suppressDesc: true },
  { cat: "soguk", group: "coldcoffee", title: "Ice Latte", price: 210, desc: "Buzlu latte.", img: itemImg("ice_latte"), suppressDesc: true },
  { cat: "soguk", group: "coldcoffee", title: "Ice Mocha", price: 210, desc: "Buzlu mocha.", img: itemImg("ice_mocha"), suppressDesc: true },
  { cat: "soguk", group: "coldcoffee", title: "Chocolate Frappe", price: 210, desc: "Çikolatalı frappe.", img: itemImg("chocolate_frappe"), suppressDesc: true },
  { cat: "soguk", group: "coldcoffee", title: "Caramel Frappe", price: 210, desc: "Karamelli frappe.", img: itemImg("caramel_frappe"), suppressDesc: true },
  { cat: "soguk", group: "coldcoffee", title: "Ice Latte Karamel", price: 210, desc: "Karamelli buzlu latte.", img: itemImg("ice_latte_karamel"), suppressDesc: true },
  { cat: "soguk", group: "coldcoffee", title: "Ice Latte Vanilya", price: 210, desc: "Vanilyalı buzlu latte.", img: itemImg("ice_latte_vanilya"), suppressDesc: true },
  { cat: "soguk", group: "coldcoffee", title: "Ice Spanish Latte", price: 210, desc: "Tatlı soğuk Spanish latte.", img: itemImg("ice_spanish_latte"), suppressDesc: true },
  { cat: "soguk", group: "coldcoffee", title: "Ice Caramel Macchiato", price: 210, desc: "Buzlu karamelli macchiato.", img: itemImg("ice_caramel_macchiato"), suppressDesc: true },
  { cat: "soguk", group: "coldcoffee", title: "Ice Latte Fındık", price: 210, desc: "Fındık aromalı buzlu latte.", img: itemImg("ice_latte_findik"), suppressDesc: true },
  { cat: "soguk", group: "coldcoffee", title: "Affogato", price: 230, desc: "Espresso ve dondurma ile affogato.", img: itemImg("affogato"), suppressDesc: true },
  { cat: "soguk", group: "coldcoffee", title: "Ekstra Şurup", price: 30, desc: "Kahve şurupları.", img: itemImg("ekstra_surup"), suppressDesc: true },
  { cat: "soguk", group: "coldcoffee", title: "Ice Flat White", price: 220, desc: "Buzlu flat white.", img: itemImg("ice_flat_white"), suppressDesc: true },
  { cat: "soguk", group: "coldcoffee", title: "Ice Cortado", price: 220, desc: "Buzlu cortado.", img: itemImg("ice_cortado"), suppressDesc: true },
  { cat: "soguk", group: "coldcoffee", title: "Ice Pumpkin Latte (Yeni)", price: 210, desc: "Balkabaklı buzlu latte.", img: itemImg("ice_pumpkin_latte_yeni"), suppressDesc: true },
  { cat: "soguk", group: "coldcoffee", title: "Cookie Latte", price: 210, desc: "Kurabiye aromalı buzlu latte.", img: itemImg("cookie_latte"), suppressDesc: true },

  // ──────────── MILKSHAKE ────────────
  { cat: "soguk", group: "milkshake", title: "Milkshake Çilek", price: 220, desc: "Çilekli milkshake.", img: itemImg("milkshake_cilek"), suppressDesc: true },
  { cat: "soguk", group: "milkshake", title: "Milkshake Çikolata", price: 220, desc: "Çikolatalı milkshake.", img: itemImg("milkshake_cikolata"), suppressDesc: true },
  { cat: "soguk", group: "milkshake", title: "Milkshake Oreo", price: 220, desc: "Oreo parçalı milkshake.", img: itemImg("milkshake_oreo"), suppressDesc: true },
  { cat: "soguk", group: "milkshake", title: "Milkshake Muz", price: 220, desc: "Muzlu milkshake.", img: itemImg("milkshake_muz"), suppressDesc: true },

  // ──────────── FROZEN ────────────
  { cat: "soguk", group: "frozen", title: "Frozen Karpuz", price: 210, desc: "Karpuzlu frozen.", img: itemImg("frozen_karpuz"), suppressDesc: true },
  { cat: "soguk", group: "frozen", title: "Frozen Böğürtlen", price: 210, desc: "Böğürtlenli frozen.", img: itemImg("frozen_bogurtlen"), suppressDesc: true },
  { cat: "soguk", group: "frozen", title: "Frozen Çilek", price: 210, desc: "Çilekli frozen.", img: itemImg("frozen_cilek"), suppressDesc: true },

  // ──────────── ALKOLSÜZ KOKTEYLLER ────────────
  { cat: "soguk", group: "kokteyl", title: "Mojito", price: 210, desc: "Mojito şurubu, esmer şeker, limon suyu, sprite, maden suyu ve taze nane.", img: itemImg("mojito"), suppressDesc: true },
  { cat: "soguk", group: "kokteyl", title: "Sex on The Beach", price: 210, desc: "Şeftali şurubu, ananas suyu, taze portakal suyu ve grenadin.", img: itemImg("sex_on_the_beach"), suppressDesc: true },
  { cat: "soguk", group: "kokteyl", title: "Purple Rain", price: 210, desc: "Ananas suyu, böğürtlen şurubu, passion fruit ve turunç aroması.", img: itemImg("purple_rain"), suppressDesc: true },
  { cat: "soguk", group: "kokteyl", title: "Cool Lime (Yeni)", price: 210, desc: "Ferahlatıcı cool lime.", img: itemImg("cool_lime_yeni"), suppressDesc: true },

  // ──────────── SICAK İÇECEK ────────────
  { cat: "sicak", group: "sicakicecek", title: "Demleme Çay", price: 50, desc: "Taze demlenmiş çay.", img: itemImg("demleme_cay"), suppressDesc: true },
  { cat: "sicak", group: "sicakicecek", title: "Demleme Çay (Fincan)", price: 70, desc: "Fincanda demleme çay.", img: itemImg("demleme_cay_fincan"), suppressDesc: true },
  { cat: "sicak", group: "kahve", title: "Filtre Kahve", price: 160, desc: "Klasik filtre kahve.", img: itemImg("filtre_kahve"), suppressDesc: true },
  { cat: "sicak", group: "kahve", title: "Espresso", price: 100, desc: "Yoğun espresso shot.", img: itemImg("espresso"), suppressDesc: true },
  { cat: "sicak", group: "kahve", title: "Double Espresso", price: 120, desc: "Çift shot espresso.", img: itemImg("double_espresso"), suppressDesc: true },
  { cat: "sicak", group: "kahve", title: "Latte Macchiato", price: 180, desc: "Süt ve espresso katmanları.", img: itemImg("latte_macchiato"), suppressDesc: true },
  { cat: "sicak", group: "kahve", title: "Caramel Macchiato", price: 180, desc: "Karamelli macchiato.", img: itemImg("caramel_macchiato"), suppressDesc: true },
  { cat: "sicak", group: "kahve", title: "Americano", price: 160, desc: "Espresso ve sıcak su.", img: itemImg("americano"), suppressDesc: true },
  { cat: "sicak", group: "kahve", title: "Cappuccino", price: 180, desc: "Espresso ve süt köpüğü.", img: itemImg("cappuccino"), suppressDesc: true },
  { cat: "sicak", group: "kahve", title: "Cafe Latte", price: 180, desc: "Klasik latte.", img: itemImg("cafe_latte"), suppressDesc: true },
  { cat: "sicak", group: "kahve", title: "Mocha", price: 190, desc: "Çikolatalı mocha.", img: itemImg("mocha"), suppressDesc: true },
  { cat: "sicak", group: "kahve", title: "White Chocolate Mocha", price: 190, desc: "Beyaz çikolatalı mocha.", img: itemImg("white_chocolate_mocha"), suppressDesc: true },
  { cat: "sicak", group: "kahve", title: "Flat White", price: 180, desc: "Yoğun kahveli flat white.", img: itemImg("flat_white"), suppressDesc: true },
  { cat: "sicak", group: "kahve", title: "Cortado", price: 180, desc: "Espresso ve az süt.", img: itemImg("cortado"), suppressDesc: true },
  { cat: "sicak", group: "kahve", title: "Türk Kahvesi", price: 130, desc: "Klasik Türk kahvesi.", img: itemImg("turk_kahvesi"), suppressDesc: true },
  { cat: "sicak", group: "kahve", title: "Türk Kahvesi (Double)", price: 170, desc: "Çift porsiyon Türk kahvesi.", img: itemImg("turk_kahvesi_double"), suppressDesc: true },
  { cat: "sicak", group: "sicakicecek", title: "Sıcak Çikolata", price: 180, desc: "Yoğun sıcak çikolata.", img: itemImg("sicak_cikolata"), suppressDesc: true },
  { cat: "sicak", group: "sicakicecek", title: "Sahlep", price: 180, desc: "Kışın vazgeçilmezi sahlep.", img: itemImg("sahlep"), suppressDesc: true },
  { cat: "sicak", group: "sicakicecek", title: "Fincan Süt", price: 120, desc: "Sıcak süt.", img: itemImg("fincan_sut"), suppressDesc: true },
  { cat: "sicak", group: "kahve", title: "Sütlü Filtre Kahve", price: 190, desc: "Süt eklenmiş filtre kahve.", img: itemImg("sutlu_filtre_kahve"), suppressDesc: true },
  { cat: "sicak", group: "sicakicecek", title: "Ballı Fincan Süt", price: 160, desc: "Bal ile sıcak süt.", img: itemImg("balli_fincan_sut"), suppressDesc: true },
  { cat: "sicak", group: "kahve", title: "Pumpkin Latte (Yeni)", price: 190, desc: "Balkabaklı latte.", img: itemImg("pumpkin_latte_yeni") },
  { cat: "sicak", group: "kahve", title: "Cookie Latte", price: 190, desc: "Kurabiye aromalı sıcak latte.", img: itemImg("cookie_latte") },

  // ──────────── DÜNYA ÇAYLARI ────────────
  { cat: "sicak", group: "dunya", title: "Red Forest", price: 190, desc: "Çilek, ahududu ve böğürtlen aromalı çay.", img: itemImg("red_forest") },
  { cat: "sicak", group: "dunya", title: "Jasmine", price: 190, desc: "Yasemin çiçeği aromalı Çin çayı.", img: itemImg("jasmine") },
  { cat: "sicak", group: "dunya", title: "Ihlamur & Melisa", price: 190, desc: "Kış aylarının vazgeçilmez bitki çayı.", img: itemImg("ihlamur_ve_melisa") },
  { cat: "sicak", group: "dunya", title: "Yeşil Çay", price: 190, desc: "Yumuşak içimli yeşil çay.", img: itemImg("yesil_cay") }
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
const snakeCanvas = document.getElementById("snake-canvas");
const snakeRestart = document.getElementById("snake-restart");
const snakeKeys = document.querySelectorAll(".snake-key");
const snakeScoreEl = document.getElementById("snake-score");
const snakeBestEl = document.getElementById("snake-best");
const snakeStatusEl = document.getElementById("snake-status");

const gameTabButtons = document.querySelectorAll(".game-tab-btn");
const gamePanels = document.querySelectorAll(".game-panel");
const tttCells = document.querySelectorAll(".ttt-cell");
const tttStatus = document.getElementById("ttt-status");
const tttReset = document.getElementById("ttt-reset");
const checkersBoardEl = document.getElementById("checkers-board");
const checkersStatusEl = document.getElementById("checkers-status");
const checkersReset = document.getElementById("checkers-reset");

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

const activeFilters = {
  veg: false,
  spicy: false,
  cheese: false,
  dessert: false,
};

const MENU_CATEGORIES = new Set(["kahvalti", "bowl", "lezzetler", "tatli", "matcha", "soguk", "sicak"]);
const GAME_CATEGORY = "games";

let activeCategory = "hiddenback";
let activeGame = "snake";
let searchTerm = "";
let snakeStatusText = uiText.snakeReadyStatus;
let tttStatusState = { key: "tttTurn", vars: { player: "X" } };
let checkersStatusState = { key: "checkersTurn", vars: { player: uiText.checkerRed } };

function formatTttStatus(key, vars = {}) {
  const templates = translations.games?.tictactoe || translations.games?.ttt || {};
  if (typeof templates[key] === "string") return templates[key].replace("{player}", vars.player || "");
  if (key === "tttTurn") return `Sıra: ${vars.player}`;
  if (key === "tttDraw") return "Berabere! Yeniden deneyin.";
  if (key === "tttWin") return `${vars.player} kazandı!`;
  return "";
}

function formatCheckersStatus(key, vars = {}) {
  const templates = translations.games?.checkers || {};
  if (typeof templates[key] === "string") return templates[key].replace("{player}", vars.player || "");
  if (key === "checkersTurn") return `Sıra: ${vars.player}`;
  if (key === "checkersWin") return `${vars.player} kazandı!`;
  return "";
}

const getTagLabels = () => ({
  veg: { label: uiText.filterVeg, color: "text-emerald-600" },
  spicy: { label: uiText.filterSpicy, color: "text-red-600" },
  cheese: { label: uiText.filterCheese, color: "text-amber-600" },
  dessert: { label: uiText.filterDessert, color: "text-pink-600" },
});

const getSnakeStatusText = () => ({
  snakeReadyStatus: uiText.snakeReadyStatus,
  snakeStartedStatus: uiText.snakeStartedStatus,
  snakeStoppedStatus: uiText.snakeStoppedStatus,
  snakeGameOverStatus: uiText.snakeGameOverStatus,
  snakePlayingStatus: uiText.snakePlayingStatus,
});

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

let tttBoard = Array(9).fill(null);
let tttCurrent = "X";
let tttFinished = false;

const CHECKERS_SIZE = 8;
let checkersBoard = [];
let checkersCurrent = "r";
let checkersSelected = null;
let checkersMoves = [];
let checkersFinished = false;

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

function updateSnakeHUD(statusKey = "") {
  if (statusKey) snakeStatusText = getSnakeStatusText()[statusKey] || statusKey;
  if (snakeScoreEl) snakeScoreEl.textContent = snakeState.score;
  if (snakeBestEl) snakeBestEl.textContent = snakeState.best;
  if (snakeStatusEl) snakeStatusEl.textContent = snakeStatusText;
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
  updateSnakeHUD("snakeReadyStatus");
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
  updateSnakeHUD("snakeStartedStatus");
  scheduleSnakeTick();
}

function stopSnakeGame(messageKey = "snakeStoppedStatus") {
  snakeState.playing = false;
  clearSnakeLoop();
  updateSnakeHUD(messageKey);
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
    stopSnakeGame("snakeGameOverStatus");
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

  updateSnakeHUD("snakePlayingStatus");
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

// ─────────────────────────────
//  GAMES: TIC TAC TOE
// ─────────────────────────────

function renderTttStatus() {
  if (tttStatus) tttStatus.textContent = formatTttStatus(tttStatusState.key, tttStatusState.vars);
}

function setTttStatus(key, vars = {}) {
  tttStatusState = { key, vars };
  renderTttStatus();
}

function resetTtt() {
  tttBoard = Array(9).fill(null);
  tttCurrent = "X";
  tttFinished = false;
  setTttStatus("tttTurn", { player: tttCurrent });

  tttCells.forEach((cell) => {
    cell.textContent = "";
    cell.classList.remove("filled");
  });
}

function checkTttWinner() {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const [a, b, c] of lines) {
    if (tttBoard[a] && tttBoard[a] === tttBoard[b] && tttBoard[a] === tttBoard[c]) {
      return tttBoard[a];
    }
  }

  if (tttBoard.every(Boolean)) return "draw";
  return null;
}

function handleTttClick(index) {
  if (tttFinished || tttBoard[index]) return;

  tttBoard[index] = tttCurrent;
  const cell = tttCells[index];
  if (cell) {
    cell.textContent = tttCurrent;
    cell.classList.add("filled");
  }

  const winner = checkTttWinner();
  if (winner === "draw") {
    tttFinished = true;
    setTttStatus("tttDraw");
    return;
  }

  if (winner) {
    tttFinished = true;
    setTttStatus("tttWin", { player: winner });
    return;
  }

  tttCurrent = tttCurrent === "X" ? "O" : "X";
  setTttStatus("tttTurn", { player: tttCurrent });
}

// ─────────────────────────────
//  GAMES: CHECKERS
// ─────────────────────────────

function buildInitialCheckersBoard() {
  const board = Array.from({ length: CHECKERS_SIZE }, () => Array(CHECKERS_SIZE).fill(null));

  for (let y = 0; y < CHECKERS_SIZE; y += 1) {
    for (let x = 0; x < CHECKERS_SIZE; x += 1) {
      if ((x + y) % 2 === 0) continue;

      if (y < 3) board[y][x] = "b";
      if (y > 4) board[y][x] = "r";
    }
  }

  return board;
}

function updateCheckersStatus() {
  const isTurn = (checkersStatusState.key || "checkersTurn") === "checkersTurn";
  const vars = isTurn
    ? { player: checkersCurrent === "r" ? uiText.checkerRed : uiText.checkerBlack }
    : checkersStatusState.vars;
  checkersStatusState = { key: checkersStatusState.key || "checkersTurn", vars };
  if (checkersStatusEl) checkersStatusEl.textContent = formatCheckersStatus(checkersStatusState.key, checkersStatusState.vars);
}

function resetCheckers() {
  checkersBoard = buildInitialCheckersBoard();
  checkersCurrent = "r";
  checkersSelected = null;
  checkersMoves = [];
  checkersFinished = false;
  checkersStatusState = { key: "checkersTurn", vars: { player: uiText.checkerRed } };
  updateCheckersStatus();
  renderCheckersBoard();
}

function isCurrentPlayerPiece(piece) {
  if (!piece) return false;
  return piece.toLowerCase() === checkersCurrent;
}

function isOpponentPiece(piece) {
  if (!piece) return false;
  return piece.toLowerCase() !== checkersCurrent;
}

function getPieceDirections(piece) {
  const isKing = piece === piece.toUpperCase();
  if (isKing) return [1, -1];
  return piece.toLowerCase() === "r" ? [-1] : [1];
}

function collectMoves(x, y) {
  const piece = checkersBoard[y][x];
  if (!piece || !isCurrentPlayerPiece(piece)) return [];

  const dirs = getPieceDirections(piece);
  const moves = [];

  dirs.forEach((dy) => {
    [-1, 1].forEach((dx) => {
      const nx = x + dx;
      const ny = y + dy;
      if (nx < 0 || nx >= CHECKERS_SIZE || ny < 0 || ny >= CHECKERS_SIZE) return;

      if (!checkersBoard[ny][nx]) {
        moves.push({ x: nx, y: ny, capture: false });
        return;
      }

      const jumpX = x + dx * 2;
      const jumpY = y + dy * 2;
      if (
        jumpX >= 0 &&
        jumpX < CHECKERS_SIZE &&
        jumpY >= 0 &&
        jumpY < CHECKERS_SIZE &&
        !checkersBoard[jumpY][jumpX] &&
        isOpponentPiece(checkersBoard[ny][nx])
      ) {
        moves.push({ x: jumpX, y: jumpY, capture: true, captured: { x: nx, y: ny } });
      }
    });
  });

  return moves;
}

function maybeCrown(piece, y) {
  if (piece === "r" && y === 0) return "R";
  if (piece === "b" && y === CHECKERS_SIZE - 1) return "B";
  return piece;
}

function moveCheckersPiece(targetX, targetY) {
  if (!checkersSelected) return;

  const { x, y } = checkersSelected;
  const piece = checkersBoard[y][x];
  const move = checkersMoves.find((m) => m.x === targetX && m.y === targetY);
  if (!move || !piece) return;

  checkersBoard[y][x] = null;
  checkersBoard[targetY][targetX] = maybeCrown(piece, targetY);

  if (move.capture && move.captured) {
    checkersBoard[move.captured.y][move.captured.x] = null;
  }

  checkersSelected = null;
  checkersMoves = [];
  checkersCurrent = checkersCurrent === "r" ? "b" : "r";

  const flat = checkersBoard.flat();
  const redLeft = flat.some((p) => p && p.toLowerCase() === "r");
  const blackLeft = flat.some((p) => p && p.toLowerCase() === "b");

  if (!redLeft || !blackLeft) {
    checkersFinished = true;
    checkersStatusState = {
      key: "checkersWin",
      vars: { player: redLeft ? uiText.checkerRed : uiText.checkerBlack },
    };
  } else {
    checkersStatusState = {
      key: "checkersTurn",
      vars: { player: checkersCurrent === "r" ? uiText.checkerRed : uiText.checkerBlack },
    };
  }

  updateCheckersStatus();
  renderCheckersBoard();
}

function renderCheckersBoard() {
  if (!checkersBoardEl) return;

  checkersBoardEl.innerHTML = "";

  for (let y = 0; y < CHECKERS_SIZE; y += 1) {
    for (let x = 0; x < CHECKERS_SIZE; x += 1) {
      const cell = document.createElement("button");
      cell.className = "checker-cell";
      cell.dataset.x = String(x);
      cell.dataset.y = String(y);
      if ((x + y) % 2 === 1) cell.classList.add("dark");

      const piece = checkersBoard[y][x];
      if (piece) {
        const span = document.createElement("span");
        const isRed = piece.toLowerCase() === "r";
        span.className = `checker-piece ${isRed ? "red" : "black"}`;
        span.textContent = piece === piece.toUpperCase() ? "♛" : "●";
        cell.appendChild(span);
      }

      if (checkersSelected && checkersSelected.x === x && checkersSelected.y === y) {
        cell.classList.add("selected");
      }

      if (checkersMoves.some((m) => m.x === x && m.y === y)) {
        cell.classList.add("move-target");
      }

      checkersBoardEl.appendChild(cell);
    }
  }
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

function setActiveGame(game) {
  activeGame = game;

  gameTabButtons.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.game === game);
  });

  gamePanels.forEach((panel) => {
    panel.classList.toggle("hidden", panel.dataset.game !== game);
  });

  if (game === "snake") {
    initSnake();
  } else {
    stopSnakeGame("snakeStoppedStatus");
  }

  if (game === "tictactoe") {
    resetTtt();
  }

  if (game === "checkers") {
    resetCheckers();
  }
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
    setActiveGame(activeGame || "snake");
  } else {
    stopSnakeGame("snakeStoppedStatus");
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
  const translated = translateMenuItem(item);
  const matchesSearch = term
    ? (translated.title && translated.title.toLowerCase().includes(term)) ||
      (translated.desc && translated.desc.toLowerCase().includes(term))
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
    btn.textContent = translateGroupTitle(activeCategory, group);
    btn.addEventListener("click", () => scrollToGroup(group));
    groupNavButtons.appendChild(btn);
  });

  groupNav.classList.remove("hidden");
}

function createCard(item) {
  const translated = translateMenuItem(item);
  const tagLabels = getTagLabels();
  const card = document.createElement("article");
  card.className = "bg-white border border-hb-border rounded-2xl p-4 sm:p-5 flex flex-col gap-3 shadow-[0_6px_18px_rgba(0,0,0,0.04)] card-fade";

  card.innerHTML = `
    <div class="rounded-xl overflow-hidden bg-neutral-200 aspect-[4/3]">
      <img src="${item.img}" alt="${translated.title}" class="w-full h-full object-cover">
    </div>
    <div class="flex flex-col gap-2">
      <div class="flex items-start justify-between gap-2">
        <h3 class="text-base font-semibold leading-tight">${translated.title}</h3>
        <span class="text-sm font-semibold">${formatPrice(item.price)}</span>
      </div>
      <p class="text-xs font-normal text-hb-muted leading-relaxed">${translated.desc || ""}</p>
      <div class="flex flex-wrap gap-2 text-[11px] text-hb-muted">
        ${(item.tags || [])
          .map((tag) => {
            const meta = tagLabels[tag];
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
      const groupTitle = translateGroupTitle(activeCategory, item.group);
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

  const translated = translateMenuItem(item);
  const tagLabels = getTagLabels();

  modalImg.src = translated.img;
  modalImg.alt = translated.title;
  modalTitle.textContent = translated.title;
  modalDesc.textContent = translated.desc || "";
  modalPrice.textContent = formatPrice(translated.price);

  const activeKeys = Object.entries(activeFilters)
    .filter(([, value]) => value)
    .map(([key]) => (tagLabels[key] ? tagLabels[key].label : null))
    .filter(Boolean);

  const extraParts = [];

  if (activeKeys.length) {
    extraParts.push(`${uiText.filtersLabel}: ${activeKeys.join(", ")}`);
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

gameTabButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const { game } = btn.dataset;
    setActiveGame(game || "snake");
  });
});

tttCells.forEach((cell) => {
  cell.addEventListener("click", () => {
    const index = Number(cell.dataset.index);
    handleTttClick(index);
  });
});

tttReset?.addEventListener("click", resetTtt);

checkersReset?.addEventListener("click", resetCheckers);

checkersBoardEl?.addEventListener("click", (event) => {
  const target = event.target.closest(".checker-cell");
  if (!target || checkersFinished) return;

  const x = Number(target.dataset.x);
  const y = Number(target.dataset.y);
  const piece = checkersBoard[y][x];

  if (checkersSelected && checkersMoves.some((m) => m.x === x && m.y === y)) {
    moveCheckersPiece(x, y);
    return;
  }

  if (piece && isCurrentPlayerPiece(piece)) {
    checkersSelected = { x, y };
    checkersMoves = collectMoves(x, y);
  } else {
    checkersSelected = null;
    checkersMoves = [];
  }

  renderCheckersBoard();
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

document.querySelectorAll(".intro-lang-btn").forEach((btn) => {
  btn.addEventListener("click", async () => {
    try {
      await applyLanguage(btn.dataset.lang);
    } catch (error) {
      console.warn("Language apply failed, using defaults", error);
      currentLang = DEFAULT_LANG;
      translations = {};
      applyStaticTranslations();
      renderItems();
    } finally {
      hideIntroOverlay();
    }
  });
});

(async () => {
  await initLanguage();
  setCategory(activeCategory);
  updateMenuArrow();
  updateBackToTop();
})();
