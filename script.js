// ─────────────────────────────
//  GROUP TITLES (kategoriler içindeki alt başlıkların çıktısı)
// ─────────────────────────────

const GROUP_TITLES = {
  kahvalti: { smoothie: "Smoothie Bowl" },
  bowl: { smoothie: "Smoothie Bowl" },
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

const DEFAULT_TEXT = {
  runnerReadyStatus: "Hazır",
  runnerRunningStatus: "Koşuyor",
  runnerCrashedStatus: "Çarptı",
  filterVeg: "Vejetaryen",
  filterSpicy: "Acılı",
  filterCheese: "Peynirli",
  filterDessert: "Tatlı",
  filtersLabel: "Filtreler",
  caffeineLabel: "kafein",
};

let uiText = { ...DEFAULT_TEXT };

const SUPPORTED_LANGS = ["tr", "en", "ru"];
const DEFAULT_LANG = "tr";
let currentLang = DEFAULT_LANG;
let translations = {};
const hiddenLogo = new Image();
hiddenLogo.src = "logo-x-x.jpg";

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
  runnerStatusText = uiText.runnerReadyStatus;
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
  if (cat === "lezzetler") return "";
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
  loadRunnerBest();
  updateRunnerHUD();
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
  { cat: "kahvalti", title: "Brioche French Tost", price: 250, desc: "Karamelize brioş, mevsim meyveleri ve akçaağaç şurubuyla Fransız tost.", img: itemImg("brioche") },
  { cat: "kahvalti", title: "Dana Jambon Tost", price: 220, desc: "Taze kaşar peyniri, dana jambon, patates kızartması ve Akdeniz yeşillikleri.", img: itemImg("dana_jambon_tost") },
  { cat: "kahvalti", title: "Tavuklu Tost", price: 280, desc: "Ekşi maya ekmek, kremalı tavuk, patates kızartması ve akdeniz yeşillikleri", img: itemImg("tavuklu_tost") },
  { cat: "kahvalti", title: "Tatlı & Tuzlu Ekmek Üstü", price: 220, desc: "Bir dilim krem peynirli, dana jambonlu ve göz yumurtalı; diğer dilim çikolata, muz.", img: itemImg("tatli_ve_tuzlu_ekmek_ustu") },
  { cat: "kahvalti", title: "Çırpılmış Yumurta", price: 180, desc: "Çırpılmış yumurta, beyaz peynir ve ekşi maya ekmek.", img: itemImg("cirpilmis_yumurta") },
  { cat: "kahvalti", title: "Omlet", price: 190, desc: "Taze otlu, sebzeli veya peynirli omlet; yanında yeşil salata ve ekşi maya ekmek.", img: itemImg("omlet") },
  { cat: "kahvalti", title: "Kruvasan", price: 180, img: itemImg("kruvasan") },
  { cat: "kahvalti", title: "Kruvasan Çikolata & Çilek", price: 230, img: itemImg("kruvasan_cikolata_ve_cilek") },
  { cat: "kahvalti", title: "Menemen", price: 190, desc: "Yaz domatesiyle menemen, beyaz peynir ve ekşi maya ekmek.", img: itemImg("menemen") },
  { cat: "kahvalti", title: "Patates Tava", price: 160, desc: "Klasik kızarmış patates.", img: itemImg("patates_tava") },
  { cat: "kahvalti", group: "smoothie", title: "Acaí Bowl", price: 220, desc: "Acai özü, muz, böğürtlen, frambuaz ve granola.", img: itemImg("bowl") },
  { cat: "kahvalti", group: "smoothie", title: "Berry Bowl", price: 200, desc: "Süzme yoğurt, bal, granola ve çilek.", img: itemImg("bowl1") },
  
  // ──────────── BOWL ────────────
  { id: "bowl", cat: "bowl", group: "smoothie", title: "Acaí Bowl", price: 220, desc: "Acai özü, muz, böğürtlen, frambuaz ve granola.", img: itemImg("bowl") },
  { id: "bowl1", cat: "bowl", group: "smoothie", title: "Berry Bowl", price: 200, desc: "Süzme yoğurt, bal, granola ve çilek.", img: itemImg("bowl1") },
  { cat: "bowl", title: "Basmatı Bowl", price: 260, desc: "Izgara tavuk göğsü, basmati pilavı, brokoli, havuç, Akdeniz yeşilliği ve zeytinyağı.", img: itemImg("bowl2") },
  { cat: "bowl", title: "Vegan Bowl", price: 220, desc: "Kavrulmuş nohut, mantar, avokado, bebek turp, Akdeniz yeşilliği, havuç ve zeytinyağı.", img: itemImg("bowl3") },
  { cat: "bowl", title: "Ton Balıklı Bowl", price: 260, desc: "Esmer pirinç, ton balığı, brokoli, havuç, Akdeniz yeşilliği, zeytinyağı ve salatalık turşusu.", img: itemImg("bowl4") },
  { cat: "bowl", title: "Köfte Grill Bowl", price: 260, desc: "Basmati pilavı, ızgara köfte, köz biber, lahana turşusu, Akdeniz yeşilliği, havuç ve zeytinyağı.", img: itemImg("bowl5") },
  { cat: "bowl", title: "Makarna Bowl", price: 220, desc: "Burgu makarna, yoğurt, salatalık turşusu, Meksika fasulyesi, Akdeniz yeşilliği, havuç ve zeytinyağı.", img: itemImg("bowl6") },
  { cat: "bowl", title: "Acı Tatlı Sos Tavuk Bowl", price: 260, desc: "Arpa şehriye, acı tatlı soslu tavuk göğsü, brokoli, Akdeniz yeşilliği, havuç ve zeytinyağı.", img: itemImg("bowl7") },
  { cat: "bowl", title: "Fresh Bowl", price: 220, desc: "Kinoa, avokado, çilek, havuç, Akdeniz yeşilliği ve zeytinyağı.", img: itemImg("bowl8") },

  // ──────────── LEZZETLER ────────────
  { cat: "lezzetler", title: "Tavuklu Sezar Salata", price: 250, desc: "Izgara tavuk göğsü, taze göbek marul, domates, kruton, sezar sos.", img: itemImg("tavuklu_sezar_salata") },
  { cat: "lezzetler", title: "Yeşil Salata", price: 190, desc: "Taze göbek marul, lolorosso, havuç, turp, salatalık, domates ve beyaz peynir.", img: itemImg("yesil_salata") },
  { cat: "lezzetler", title: "Çıtır Tavuk", price: 280, desc: "Panelenmiş jülyen tavuk dilimleri, sweet chili sos, sezar sos ve patates kızartması.", img: itemImg("citir_tavuk") },
  { cat: "lezzetler", title: "Burritos Tavuk Dürüm", price: 280, desc: "Tortilla ekmeğinde tavuk dilimleri, burritos sos, renkli biberler, mantar, cheddar peyniri, patates kızartması ve Akdeniz yeşilliği.", img: itemImg("burritos_tavuk_durum") },
  { cat: "lezzetler", title: "Fettucine Alfredo", price: 280, desc: "Sotelenmiş tavuk dilimleri, fettuccine makarna, mantar, renkli biberler, pesto sos, krema ve parmesan peyniri.", img: itemImg("fettucine_alfredo") },
  { cat: "lezzetler", title: "Köri Soslu Tavuk", price: 290, desc: "Köri soslu tavuk, mantar, renkli biberler, basmati pilav ve Akdeniz yeşillikleri.", img: itemImg("kori_soslu_tavuk") },
  { cat: "lezzetler", title: "Sandviç", price: 220, desc: "Ekşi maya ekmekte cheddar, taze kaşar, krem peynir, dana jambon, haşlanmış yumurta ve lolorosso.", img: itemImg("sandvic") },
  { cat: "lezzetler", title: "Ekmek Üstü", price: 240, desc: "Ekşi maya ekmek üstü krem peynir, çırpılmış yumurta ve avokado.", img: itemImg("ekmek_ustu_yumurta_ve_avokado") },
  { cat: "lezzetler", title: "Patates Tava", price: 160, desc: "Klasik kızarmış patates.", img: itemImg("patates_tava") },

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
  { cat: "sicak", group: "dunya", title: "Ihlamur & Melisa", price: 190, desc: "Kış aylarının vazgeçilmez bitki çayı.", img: itemImg("ihlamur") },
  { cat: "sicak", group: "dunya", title: "Yeşil Çay", price: 190, desc: "Yumuşak içimli yeşil çay.", img: itemImg("yesil_cay") }
];

// ==== EXPORT ALL ITEMS -> GOOGLE SHEETS (TSV) ====
function exportItemsToSheetsTSV() {
  // Заголовки под Google Sheets
  const headers = ["id", "cat", "group", "title", "price", "desc", "active", "sort"];

  const rows = ITEMS.map((item, idx) => {
    const id = getItemId(item);
    const cat = item.cat || "";
    const group = item.group || "";
    const title = item.title || "";
    const price = typeof item.price === "number" ? item.price : "";
    const desc = item.desc || "";
    const active = item.active === false ? "FALSE" : "TRUE";
    const sort = item.sort ?? idx + 1;

    // TSV: табы между колонками, строки через \n
    return [id, cat, group, title, price, desc, active, sort]
      .map((v) => String(v).replaceAll("\t", " ").replaceAll("\n", " "))
      .join("\t");
  });

  const tsv = [headers.join("\t"), ...rows].join("\n");

  // Скопировать в буфер
  if (navigator.clipboard?.writeText) {
    navigator.clipboard
      .writeText(tsv)
      .then(() => alert("✅ Export copied! Paste into Google Sheets (cell A1)."))
      .catch(() => {
        console.log(tsv);
        alert("⚠️ Could not copy automatically. TSV printed in Console.");
      });
  } else {
    console.log(tsv);
    alert("⚠️ Clipboard not supported. TSV printed in Console.");
  }

  return tsv;
}

// Быстрый доступ из консоли:
window.exportItemsToSheetsTSV = exportItemsToSheetsTSV;

// ==== APPLY FULL SHEET DATA TO EXISTING ITEMS BY id ====
const MENU_API_URL = window.MENU_API_URL || ""; // вставляется в index.html

async function fetchSheetItems() {
  if (!MENU_API_URL) return [];
  const res = await fetch(`${MENU_API_URL}?t=${Date.now()}`, { cache: "no-store" });
  if (!res.ok) return [];
  const data = await res.json();
  return Array.isArray(data.items) ? data.items : [];
}

function applySheetItemsToLocalItems(sheetItems) {
  const map = new Map();
  sheetItems.forEach((row) => {
    const id = String(row.id || "").trim();
    if (!id) return;

    map.set(id, {
      price: row.price,
      desc: row.desc,
      active: row.active,
    });
  });

  ITEMS.forEach((item) => {
    const id = getItemId(item);
    const row = map.get(id);
    if (!row) return;

    // price
    if (row.price !== "" && row.price != null) {
      const p = Number(String(row.price).replace(",", "."));
      if (Number.isFinite(p)) item.price = p;
    }

    // desc
    if (typeof row.desc === "string") {
      item.desc = row.desc;
    }

    // active
    const a = String(row.active).toLowerCase();
    if (a === "true" || row.active === true) item.active = true;
    if (a === "false" || row.active === false) item.active = false;
  });
}

// ─────────────────────────────
//  RENDERING & INTERACTION LOGIC
// ─────────────────────────────

const hiddenbackSection = document.getElementById("hiddenback-section");
const menuSection = document.getElementById("menu-section");
const container = document.getElementById("items-container");
const instagramBlock = document.getElementById("instagram-block");
const gamesSection = document.getElementById("games-section");
const layoutRoot = document.getElementById("layout-root");
const siteHeader = document.querySelector("header");
const runnerCanvas = document.getElementById("runner-canvas");
const runnerStart = document.getElementById("runner-start");
const runnerDistanceEl = document.getElementById("runner-distance");
const runnerBestEl = document.getElementById("runner-best");
const runnerStatusEl = document.getElementById("runner-status");
const carCanvas = document.getElementById("car-canvas");
const carStartBtn = document.getElementById("car-start");
const carLeftBtn = document.getElementById("car-move-left");
const carRightBtn = document.getElementById("car-move-right");
const carDistanceEl = document.getElementById("car-distance");
const carBestEl = document.getElementById("car-best");
const carStatusEl = document.getElementById("car-status");
const tetrisCanvas = document.getElementById("tetris-canvas");
const tetrisStartBtn = document.getElementById("tetris-start");
const tetrisRotateBtn = document.getElementById("tetris-rotate");
const tetrisLeftBtn = document.getElementById("tetris-left");
const tetrisRightBtn = document.getElementById("tetris-right");
const tetrisDropBtn = document.getElementById("tetris-drop");
const tetrisScoreEl = document.getElementById("tetris-score");
const tetrisLinesEl = document.getElementById("tetris-lines");

const gameTabButtons = document.querySelectorAll(".game-tab-btn");
const gamePanels = document.querySelectorAll(".game-panel");

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
let activeGame = "runner";
let searchTerm = "";
let runnerStatusText = uiText.runnerReadyStatus;

const getTagLabels = () => ({
  veg: { label: uiText.filterVeg, color: "text-emerald-600" },
  spicy: { label: uiText.filterSpicy, color: "text-red-600" },
  cheese: { label: uiText.filterCheese, color: "text-amber-600" },
  dessert: { label: uiText.filterDessert, color: "text-pink-600" },
});

const formatPrice = (price) => (typeof price === "number" ? `${price}₺` : "" );

const runnerState = {
  x: 82,
  y: 160,
  radius: 20,
  ground: 172,
  velocityY: 0,
  gravity: 0.0024,
  jump: -0.82,
  speed: 0.35,
  baseSpeed: 0.35,
  speedTimer: 0,
  obstacles: [],
  stars: [],
  running: false,
  distance: 0,
  best: 0,
  lastTime: 0,
  spawnTimer: 1000,
  starTimer: 0,
};

let runnerCtx = null;
let runnerLoop = null;

const DIR_MAP = {
  up: { x: 0, y: -1 },
  down: { x: 0, y: 1 },
  left: { x: -1, y: 0 },
  right: { x: 1, y: 0 },
};

const carState = {
  running: false,
  lane: 1,
  lanes: 3,
  speed: 0.35,
  baseSpeed: 0.35,
  speedTimer: 0,
  distance: 0,
  best: 0,
  obstacles: [],
  spawnTimer: 0,
  lastTime: 0,
  status: "Hazır",
};

let carCtx = null;
let carLoop = null;

const tetrisConfig = {
  cols: 10,
  rows: 20,
  block: 18,
};

const TETROMINOES = [
  { shape: [[1, 1, 1, 1]], color: "#38bdf8" }, // I
  { shape: [[1, 1], [1, 1]], color: "#facc15" }, // O
  { shape: [[0, 1, 0], [1, 1, 1]], color: "#22c55e" }, // T
  { shape: [[1, 0, 0], [1, 1, 1]], color: "#a855f7" }, // J
  { shape: [[0, 0, 1], [1, 1, 1]], color: "#f97316" }, // L
  { shape: [[1, 1, 0], [0, 1, 1]], color: "#ef4444" }, // S
  { shape: [[0, 1, 1], [1, 1, 0]], color: "#0ea5e9" }, // Z
];

const tetrisState = {
  running: false,
  grid: [],
  piece: null,
  dropInterval: 370,
  minInterval: 80,
  speedTimer: 0,
  dropTimer: 0,
  lastTime: 0,
  score: 0,
  lines: 0,
};

const tetrisGesture = { startX: 0, startY: 0, active: false };
let tetrisCtx = null;
// ─────────────────────────────
//  GAMES: HIDDENBACK RUN
// ─────────────────────────────

const getRunnerStatusText = () => ({
  runnerReadyStatus: uiText.runnerReadyStatus,
  runnerRunningStatus: uiText.runnerRunningStatus,
  runnerCrashedStatus: uiText.runnerCrashedStatus,
});

function loadRunnerBest() {
  const saved = Number(localStorage.getItem("hb_runner_best")) || 0;
  runnerState.best = saved;
  updateRunnerHUD();
}

function saveRunnerBest() {
  localStorage.setItem("hb_runner_best", String(runnerState.best));
}

function updateRunnerHUD(statusKey = "") {
  if (statusKey) runnerStatusText = getRunnerStatusText()[statusKey] || statusKey;
  if (runnerDistanceEl) runnerDistanceEl.textContent = `${Math.floor(runnerState.distance)} m`;
  if (runnerBestEl) runnerBestEl.textContent = `${Math.floor(runnerState.best)} m`;
  if (runnerStatusEl) runnerStatusEl.textContent = runnerStatusText;
}

function resetRunnerState() {
  if (runnerCanvas) {
    const scaleH = runnerCanvas.height / 220;
    const scaleW = runnerCanvas.width / 520;
    runnerState.radius = 20 * scaleH;
    runnerState.ground = runnerCanvas.height - 50 * scaleH;
    runnerState.x = Math.min(runnerState.x, runnerCanvas.width * 0.25);
    runnerState.gravity = 0.0024 * scaleH;
    runnerState.jump = -0.82 * scaleH;
    runnerState.baseSpeed = 0.35 * scaleW;
  }
  runnerState.speed = runnerState.baseSpeed;
  runnerState.speedTimer = 0;
  runnerState.y = runnerState.ground;
  runnerState.velocityY = 0;
  runnerState.obstacles = [];
  runnerState.stars = [];
  runnerState.distance = 0;
  runnerState.spawnTimer = 900;
  runnerState.starTimer = 0;
  runnerState.running = false;
  runnerState.lastTime = 0;
  updateRunnerHUD("runnerReadyStatus");
  drawRunnerScene(true);
}

function spawnRunnerObstacle() {
  if (!runnerCanvas) return;
  const scaleH = runnerCanvas.height / 220;
  const scaleW = runnerCanvas.width / 520;
  const height = (28 + Math.random() * 40) * scaleH;
  const width = (26 + Math.random() * 24) * scaleW;
  const y = runnerState.ground - height;
  runnerState.obstacles.push({
    x: runnerCanvas.width + width + 20,
    y,
    width,
    height,
    color: Math.random() > 0.5 ? "#38bdf8" : "#f97316",
  });
}

function spawnRunnerStar() {
  if (!runnerCanvas) return;
  const scaleH = runnerCanvas.height / 220;
  runnerState.stars.push({
    x: runnerCanvas.width + 20,
    y: 20 + Math.random() * 80,
    size: (3 + Math.random() * 3) * scaleH,
    glow: Math.random() * 0.4 + 0.4,
  });
}

function drawKolobok(x, y) {
  if (!runnerCtx) return;
  const r = runnerState.radius;
  const gradient = runnerCtx.createRadialGradient(x - r * 0.2, y - r * 0.2, r * 0.2, x, y, r * 1.2);
  gradient.addColorStop(0, "#ffffff");
  gradient.addColorStop(1, "#f8fafc");

  runnerCtx.fillStyle = gradient;
  runnerCtx.strokeStyle = "#0b0b0b";
  runnerCtx.lineWidth = 2;
  runnerCtx.beginPath();
  runnerCtx.arc(x, y, r, 0, Math.PI * 2);
  runnerCtx.fill();
  runnerCtx.stroke();

  const size = r * 1.4;
  if (hiddenLogo.complete) {
    runnerCtx.save();
    runnerCtx.beginPath();
    runnerCtx.arc(x, y, r - 1, 0, Math.PI * 2);
    runnerCtx.clip();
    runnerCtx.drawImage(hiddenLogo, x - size / 2, y - size / 2, size, size);
    runnerCtx.restore();
  } else {
    runnerCtx.fillStyle = "#0b0b0b";
    runnerCtx.font = `${r * 0.8}px 'Courier New', monospace`;
    runnerCtx.textAlign = "center";
    runnerCtx.textBaseline = "middle";
    runnerCtx.fillText("X X", x, y - r * 0.38);

    runnerCtx.lineWidth = 1.8;
    runnerCtx.beginPath();
    runnerCtx.arc(x, y + r * 0.25, r * 0.4, 0, Math.PI, false);
    runnerCtx.stroke();
  }
}

function drawRunnerScene(showPrompt = false) {
  if (!runnerCtx || !runnerCanvas) return;
  const { width, height } = runnerCanvas;
  runnerCtx.clearRect(0, 0, width, height);

  const groundLine = runnerState.ground + runnerState.radius;
  const skyGradient = runnerCtx.createLinearGradient(0, 0, 0, height);
  skyGradient.addColorStop(0, "#0b1220");
  skyGradient.addColorStop(1, "#0f172a");
  runnerCtx.fillStyle = skyGradient;
  runnerCtx.fillRect(0, 0, width, height);

  runnerCtx.fillStyle = "rgba(255,255,255,0.08)";
  runnerState.stars.forEach((star) => {
    runnerCtx.save();
    runnerCtx.globalAlpha = star.glow;
    runnerCtx.fillRect(star.x, star.y, star.size, star.size);
    runnerCtx.restore();
  });

  runnerCtx.fillStyle = "#0b0b0b";
  runnerCtx.fillRect(0, groundLine, width, height - groundLine);
  runnerCtx.fillStyle = "rgba(255,255,255,0.08)";
  runnerCtx.fillRect(0, groundLine - 10, width, 2);

  runnerState.obstacles.forEach((ob) => {
    const grad = runnerCtx.createLinearGradient(ob.x, ob.y, ob.x, ob.y + ob.height);
    grad.addColorStop(0, ob.color);
    grad.addColorStop(1, "#0f172a");
    runnerCtx.fillStyle = grad;
    runnerCtx.fillRect(ob.x, ob.y, ob.width, ob.height);
    runnerCtx.fillStyle = "rgba(255,255,255,0.12)";
    runnerCtx.fillRect(ob.x + ob.width * 0.35, ob.y, 2, ob.height);
  });

  drawKolobok(runnerState.x, runnerState.y);

  if (showPrompt) {
    runnerCtx.fillStyle = "#e5e7eb";
    runnerCtx.font = "600 16px Inter, sans-serif";
    runnerCtx.textAlign = "center";
    const prompt = resolveTranslation("games.runnerPrompt") || "Başlat / Yeniden dene ile koşuya başla";
    runnerCtx.fillText(prompt, width / 2, height / 2);
  }
}

function startRunner() {
  if (!runnerCtx) return;
  resetRunnerState();
  runnerState.running = true;
  runnerStatusText = getRunnerStatusText().runnerRunningStatus;
  runnerState.lastTime = performance.now();
  runnerLoop = requestAnimationFrame(stepRunner);
  updateRunnerHUD();
}

function stopRunner(statusKey = "runnerCrashedStatus") {
  runnerState.running = false;
  if (runnerLoop) cancelAnimationFrame(runnerLoop);
  runnerLoop = null;
  if (runnerState.distance > runnerState.best) {
    runnerState.best = runnerState.distance;
    saveRunnerBest();
  }
  updateRunnerHUD(statusKey);
}

function handleRunnerJump() {
  if (activeGame !== "runner" || !runnerCtx) return;
  if (!runnerState.running) {
    startRunner();
    return;
  }
  if (runnerState.y >= runnerState.ground - 1) {
    runnerState.velocityY = runnerState.jump;
  }
}

function stepRunner(timestamp) {
  if (!runnerState.running || !runnerCanvas) return;
  const delta = Math.min(50, (timestamp - runnerState.lastTime) || 16);
  runnerState.lastTime = timestamp;
  const travel = delta * runnerState.speed;

  runnerState.velocityY += runnerState.gravity * delta;
  runnerState.y += runnerState.velocityY * delta;
  if (runnerState.y < runnerState.radius) {
    runnerState.y = runnerState.radius;
    runnerState.velocityY = 0;
  }
  if (runnerState.y > runnerState.ground) {
    runnerState.y = runnerState.ground;
    runnerState.velocityY = 0;
  }

  runnerState.spawnTimer -= delta;
  runnerState.starTimer -= delta;
  if (runnerState.spawnTimer <= 0) {
    spawnRunnerObstacle();
    runnerState.spawnTimer = 720 + Math.random() * 680;
  }
  if (runnerState.starTimer <= 0) {
    spawnRunnerStar();
    runnerState.starTimer = 260 + Math.random() * 360;
  }

  runnerState.obstacles = runnerState.obstacles
    .map((ob) => ({ ...ob, x: ob.x - travel }))
    .filter((ob) => ob.x + ob.width > -40);

  runnerState.stars = runnerState.stars
    .map((star) => ({ ...star, x: star.x - travel * 0.35 }))
    .filter((star) => star.x > -20);

  runnerState.distance += travel * 0.2;
  runnerState.speedTimer += delta;
  if (runnerState.speedTimer >= 5000) {
    runnerState.speed *= 1.12;
    runnerState.speedTimer = 0;
  }
  updateRunnerHUD();

  const playerLeft = runnerState.x - runnerState.radius + 4;
  const playerRight = runnerState.x + runnerState.radius - 4;
  const playerTop = runnerState.y - runnerState.radius + 2;
  const playerBottom = runnerState.y + runnerState.radius - 2;

  const collided = runnerState.obstacles.some((ob) => {
    const obLeft = ob.x;
    const obRight = ob.x + ob.width;
    const obTop = ob.y;
    const obBottom = ob.y + ob.height;
    return (
      playerRight > obLeft &&
      playerLeft < obRight &&
      playerBottom > obTop &&
      playerTop < obBottom
    );
  });

  if (collided) {
    stopRunner("runnerCrashedStatus");
    drawRunnerScene(true);
    return;
  }

  drawRunnerScene();
  runnerLoop = requestAnimationFrame(stepRunner);
}

function bindRunnerControls() {
  runnerCanvas?.addEventListener("pointerdown", handleRunnerJump);

  window.addEventListener("keydown", (event) => {
    const key = event.key.toLowerCase();
    if ([" ", "w", "arrowup"].includes(key)) {
      event.preventDefault();
      handleRunnerJump();
    }
  });

  runnerStart?.addEventListener("click", () => {
    startRunner();
  });
}

function initRunner() {
  if (!runnerCanvas || runnerCtx) return;
  runnerCtx = runnerCanvas.getContext("2d");
  loadRunnerBest();
  bindRunnerControls();
  resetRunnerState();
}

// ─────────────────────────────
//  GAME 2: CAR RACE
// ─────────────────────────────

function resetCarState() {
  carState.lane = 1;
  carState.distance = 0;
  carState.spawnTimer = 600;
  carState.obstacles = [];
  carState.running = false;
  carState.lastTime = 0;
  carState.status = "Hazır";
  carState.speed = carState.baseSpeed;
  carState.speedTimer = 0;
  updateCarHUD();
  drawCarScene();
}

function spawnCarObstacle() {
  const lane = Math.floor(Math.random() * carState.lanes);
  const width = (carCanvas.width / carState.lanes) * 0.5;
  carState.obstacles.push({
    lane,
    y: -80,
    width,
    height: 70 + Math.random() * 30,
    color: Math.random() > 0.5 ? "#0ea5e9" : "#f97316",
  });
}

function updateCarHUD(statusText) {
  if (typeof statusText === "string") carState.status = statusText;
  if (carDistanceEl) carDistanceEl.textContent = `${Math.floor(carState.distance)} m`;
  if (carBestEl) carBestEl.textContent = `${Math.floor(carState.best)} m`;
  if (carStatusEl) carStatusEl.textContent = carState.status;
}

function moveCar(direction) {
  if (!carState.running) return;
  if (direction === "left") {
    carState.lane = Math.max(0, carState.lane - 1);
  } else if (direction === "right") {
    carState.lane = Math.min(carState.lanes - 1, carState.lane + 1);
  }
  drawCarScene();
}

function drawCarScene() {
  if (!carCtx || !carCanvas) return;
  const { width, height } = carCanvas;
  carCtx.clearRect(0, 0, width, height);

  carCtx.fillStyle = "#111827";
  carCtx.fillRect(0, 0, width, height);

  const laneWidth = width / carState.lanes;
  carCtx.strokeStyle = "rgba(255,255,255,0.18)";
  carCtx.lineWidth = 2;
  for (let i = 1; i < carState.lanes; i += 1) {
    const x = i * laneWidth;
    carCtx.setLineDash([10, 12]);
    carCtx.beginPath();
    carCtx.moveTo(x, 0);
    carCtx.lineTo(x, height);
    carCtx.stroke();
  }
  carCtx.setLineDash([]);

  const carX = carState.lane * laneWidth + laneWidth * 0.2;
  const carWidth = laneWidth * 0.6;
  const carHeight = 70;
  const carY = height - 90;

  if (hiddenLogo.complete) {
    carCtx.drawImage(hiddenLogo, carX, carY, carWidth, carHeight);
  } else {
    carCtx.fillStyle = "#0ea5e9";
    carCtx.fillRect(carX, carY, carWidth, carHeight);
  }

  carState.obstacles.forEach((ob) => {
    carCtx.fillStyle = ob.color;
    carCtx.fillRect(ob.lane * laneWidth + laneWidth * 0.25, ob.y, laneWidth * 0.5, ob.height);
  });
}

function stopCar(status = "Durdu") {
  carState.running = false;
  if (carLoop) cancelAnimationFrame(carLoop);
  carLoop = null;
  if (carState.distance > carState.best) {
    carState.best = carState.distance;
  }
  updateCarHUD(status);
}

function stepCar(timestamp) {
  if (!carState.running || !carCanvas) return;
  const delta = Math.min(50, (timestamp - carState.lastTime) || 16);
  carState.lastTime = timestamp;

  carState.distance += delta * 0.25;
  carState.spawnTimer -= delta;

  if (carState.spawnTimer <= 0) {
    spawnCarObstacle();
    carState.spawnTimer = 720 + Math.random() * 420;
  }

  const travel = delta * carState.speed;
  carState.obstacles = carState.obstacles
    .map((ob) => ({ ...ob, y: ob.y + travel }))
    .filter((ob) => ob.y < carCanvas.height + 100);

  const laneWidth = carCanvas.width / carState.lanes;
  const carRect = {
    left: carState.lane * laneWidth + laneWidth * 0.2,
    right: carState.lane * laneWidth + laneWidth * 0.8,
    top: carCanvas.height - 90,
    bottom: carCanvas.height - 20,
  };

  const collided = carState.obstacles.some((ob) => {
    const obLeft = ob.lane * laneWidth + laneWidth * 0.25;
    const obRight = obLeft + laneWidth * 0.5;
    const obTop = ob.y;
    const obBottom = ob.y + ob.height;
    return (
      carRect.right > obLeft &&
      carRect.left < obRight &&
      carRect.bottom > obTop &&
      carRect.top < obBottom
    );
  });

  if (collided) {
    stopCar("Çarpıştı");
    drawCarScene();
    return;
  }

  carState.speedTimer += delta;
  if (carState.speedTimer >= 5000) {
    carState.speed *= 1.12;
    carState.speedTimer = 0;
  }

  updateCarHUD();
  drawCarScene();
  carLoop = requestAnimationFrame(stepCar);
}

function startCar() {
  if (!carCtx) return;
  resetCarState();
  carState.running = true;
  carState.status = "Yolda";
  carState.lastTime = performance.now();
  carLoop = requestAnimationFrame(stepCar);
  updateCarHUD("Yolda");
}

function initCarGame() {
  if (!carCanvas || carCtx) return;
  carCtx = carCanvas.getContext("2d");
  resetCarState();
}

// ─────────────────────────────
//  GAME 3: HIDDENBEK TETRIS
// ─────────────────────────────

function createEmptyGrid() {
  return Array.from({ length: tetrisConfig.rows }, () => Array(tetrisConfig.cols).fill(null));
}

function randomTetromino() {
  const base = TETROMINOES[Math.floor(Math.random() * TETROMINOES.length)];
  return {
    matrix: base.shape.map((row) => [...row]),
    color: base.color,
    x: 3,
    y: 0,
  };
}

function rotateMatrix(matrix) {
  const sizeY = matrix.length;
  const sizeX = matrix[0].length;
  const res = Array.from({ length: sizeX }, () => Array(sizeY).fill(0));
  for (let y = 0; y < sizeY; y += 1) {
    for (let x = 0; x < sizeX; x += 1) {
      res[x][sizeY - 1 - y] = matrix[y][x];
    }
  }
  return res;
}

function tetrisCollides(grid, piece) {
  for (let y = 0; y < piece.matrix.length; y += 1) {
    for (let x = 0; x < piece.matrix[y].length; x += 1) {
      if (!piece.matrix[y][x]) continue;
      const newX = piece.x + x;
      const newY = piece.y + y;
      if (newX < 0 || newX >= tetrisConfig.cols || newY >= tetrisConfig.rows) return true;
      if (newY >= 0 && grid[newY][newX]) return true;
    }
  }
  return false;
}

function mergePiece(grid, piece) {
  piece.matrix.forEach((row, y) => {
    row.forEach((val, x) => {
      if (val) {
        const gx = piece.x + x;
        const gy = piece.y + y;
        if (gy >= 0) grid[gy][gx] = piece.color;
      }
    });
  });
}

function clearTetrisLines() {
  let cleared = 0;
  tetrisState.grid = tetrisState.grid.filter((row) => {
    const full = row.every(Boolean);
    if (full) cleared += 1;
    return !full;
  });
  while (tetrisState.grid.length < tetrisConfig.rows) {
    tetrisState.grid.unshift(Array(tetrisConfig.cols).fill(null));
  }

  if (cleared) {
    tetrisState.lines += cleared;
    tetrisState.score += cleared * 100;
    if (tetrisScoreEl) tetrisScoreEl.textContent = tetrisState.score;
    if (tetrisLinesEl) tetrisLinesEl.textContent = tetrisState.lines;
  }
}

function drawTetrisScene() {
  if (!tetrisCtx || !tetrisCanvas) return;
  const { width, height } = tetrisCanvas;
  tetrisCtx.fillStyle = "#0f172a";
  tetrisCtx.fillRect(0, 0, width, height);

  const block = tetrisConfig.block;
  tetrisState.grid.forEach((row, y) => {
    row.forEach((cell, x) => {
      if (cell) {
        tetrisCtx.fillStyle = cell;
        tetrisCtx.fillRect(x * block + 1, y * block + 1, block - 2, block - 2);
      }
    });
  });

  if (tetrisState.piece) {
    tetrisState.piece.matrix.forEach((row, y) => {
      row.forEach((val, x) => {
        if (val) {
          tetrisCtx.fillStyle = tetrisState.piece.color;
          tetrisCtx.fillRect(
            (tetrisState.piece.x + x) * block + 1,
            (tetrisState.piece.y + y) * block + 1,
            block - 2,
            block - 2
          );
        }
      });
    });
  }
}

function tetrisMove(dir) {
  if (!tetrisState.running || !tetrisState.piece) return;
  const next = { ...tetrisState.piece, x: tetrisState.piece.x + dir };
  if (!tetrisCollides(tetrisState.grid, next)) {
    tetrisState.piece = next;
    drawTetrisScene();
  }
}

function tetrisRotate() {
  if (!tetrisState.running || !tetrisState.piece) return;
  const rotated = rotateMatrix(tetrisState.piece.matrix);
  const candidate = { ...tetrisState.piece, matrix: rotated };
  if (!tetrisCollides(tetrisState.grid, candidate)) {
    tetrisState.piece = candidate;
    drawTetrisScene();
  }
}

function tetrisDrop(fast = false) {
  if (!tetrisState.piece) return;
  const next = { ...tetrisState.piece, y: tetrisState.piece.y + 1 };
  if (!tetrisCollides(tetrisState.grid, next)) {
    tetrisState.piece = next;
    tetrisState.dropTimer = fast ? 0 : tetrisState.dropTimer;
    return;
  }
  mergePiece(tetrisState.grid, tetrisState.piece);
  clearTetrisLines();
  tetrisState.piece = randomTetromino();
  if (tetrisCollides(tetrisState.grid, tetrisState.piece)) {
    stopTetris();
  }
}

function tetrisPoint(evt) {
  const touch = evt.changedTouches?.[0] || evt.touches?.[0] || evt;
  return { x: touch?.clientX ?? 0, y: touch?.clientY ?? 0 };
}

function handleTetrisPointerStart(evt) {
  if (evt.cancelable) evt.preventDefault();
  const { x, y } = tetrisPoint(evt);
  tetrisGesture.startX = x;
  tetrisGesture.startY = y;
  tetrisGesture.active = true;
}

function handleTetrisPointerEnd(evt) {
  if (!tetrisGesture.active) return;
  if (evt.cancelable) evt.preventDefault();
  const { x, y } = tetrisPoint(evt);
  const dx = x - tetrisGesture.startX;
  const dy = y - tetrisGesture.startY;
  tetrisGesture.active = false;

  const absX = Math.abs(dx);
  const absY = Math.abs(dy);
  const threshold = 22;

  if (absX < threshold && absY < threshold) {
    tetrisRotate();
    return;
  }

  if (absX > absY) {
    if (dx > 0) tetrisMove(1);
    else tetrisMove(-1);
  } else if (dy > 0) {
    tetrisDrop(true);
  } else {
    tetrisRotate();
  }
}

function stepTetris(timestamp) {
  if (!tetrisState.running) return;
  const delta = (timestamp - tetrisState.lastTime) || 16;
  tetrisState.lastTime = timestamp;
  tetrisState.dropTimer += delta;
  tetrisState.speedTimer += delta;

  if (tetrisState.speedTimer >= 5000) {
    tetrisState.dropInterval = Math.max(tetrisState.minInterval, Math.floor(tetrisState.dropInterval * 0.91));
    tetrisState.speedTimer = 0;
  }

  if (tetrisState.dropTimer > tetrisState.dropInterval) {
    tetrisDrop();
    tetrisState.dropTimer = 0;
  }

  drawTetrisScene();
  requestAnimationFrame(stepTetris);
}

function startTetris() {
  if (!tetrisCtx) return;
  tetrisState.running = true;
  tetrisState.grid = createEmptyGrid();
  tetrisState.piece = randomTetromino();
  tetrisState.dropTimer = 0;
  tetrisState.speedTimer = 0;
  tetrisState.lastTime = performance.now();
  tetrisState.dropInterval = 370;
  tetrisState.score = 0;
  tetrisState.lines = 0;
  tetrisGesture.active = false;
  if (tetrisScoreEl) tetrisScoreEl.textContent = "0";
  if (tetrisLinesEl) tetrisLinesEl.textContent = "0";
  drawTetrisScene();
  requestAnimationFrame(stepTetris);
}

function stopTetris() {
  tetrisState.running = false;
  tetrisGesture.active = false;
}

function initTetris() {
  if (!tetrisCanvas || tetrisCtx) return;
  tetrisCtx = tetrisCanvas.getContext("2d");
  const blockByWidth = Math.floor(tetrisCanvas.width / tetrisConfig.cols);
  const blockByHeight = Math.floor(tetrisCanvas.height / tetrisConfig.rows);
  tetrisConfig.block = Math.max(12, Math.min(blockByWidth, blockByHeight));
  tetrisState.grid = createEmptyGrid();
  tetrisState.piece = randomTetromino();
  drawTetrisScene();
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

  const shouldShow = showMenu;
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

function updateMobileHeaderHeight() {
  if (!siteHeader) return;

  const height = siteHeader.offsetHeight || 0;
  document.documentElement.style.setProperty("--mobile-header-height", `${height}px`);
}

function setActiveGame(game = "runner") {
  activeGame = game;

  gameTabButtons.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.game === game);
  });

  gamePanels.forEach((panel) => {
    panel.classList.toggle("hidden", panel.dataset.game !== game);
  });

  if (game === "runner") {
    stopCar("Hazır");
    stopTetris();
    initRunner();
  } else if (game === "car") {
    stopRunner("runnerReadyStatus");
    stopTetris();
    initCarGame();
  } else if (game === "tetris") {
    stopRunner("runnerReadyStatus");
    stopCar("Hazır");
    initTetris();
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
    setActiveGame(activeGame || "runner");
  } else {
    stopRunner("runnerReadyStatus");
    stopCar("Hazır");
    stopTetris();
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
  groupNavButtons.innerHTML = "";

  if (!groups.length) {
    groupNav.classList.add("hidden");
    return;
  }

  groupNav.classList.remove("hidden");

  groups.forEach((group) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className =
      "px-3 py-1 rounded-full border border-hb-border bg-white text-[11px] font-semibold whitespace-nowrap transition hover:bg-black hover:text-white";
    btn.textContent = translateGroupTitle(activeCategory, group);
    btn.addEventListener("click", () => scrollToGroup(group));
    groupNavButtons.appendChild(btn);
  });
}

function createCard(item) {
  const translated = translateMenuItem(item);
  const tagLabels = getTagLabels();
  const card = document.createElement("article");
  card.className = "bg-white border border-hb-border rounded-2xl p-4 sm:p-5 flex flex-col gap-3 shadow-[0_6px_18px_rgba(0,0,0,0.04)] card-fade";

  card.innerHTML = `
    <div class="rounded-xl overflow-hidden bg-neutral-200 aspect-square">
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
    .filter((item) => item.active !== false)
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
    setActiveGame(btn.dataset.game || "runner");
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

carStartBtn?.addEventListener("click", () => startCar());
carLeftBtn?.addEventListener("click", () => moveCar("left"));
carRightBtn?.addEventListener("click", () => moveCar("right"));
tetrisStartBtn?.addEventListener("click", () => startTetris());
tetrisRotateBtn?.addEventListener("click", () => tetrisRotate());
tetrisLeftBtn?.addEventListener("click", () => tetrisMove(-1));
tetrisRightBtn?.addEventListener("click", () => tetrisMove(1));
tetrisDropBtn?.addEventListener("click", () => tetrisDrop(true));

if (tetrisCanvas) {
  tetrisCanvas.addEventListener("pointerdown", (evt) => {
    if (evt.pointerType === "mouse" && !isMobileView()) return;
    handleTetrisPointerStart(evt);
  });
  tetrisCanvas.addEventListener("pointerup", (evt) => {
    if (evt.pointerType === "mouse" && !isMobileView()) return;
    handleTetrisPointerEnd(evt);
  });
  tetrisCanvas.addEventListener("touchmove", (evt) => evt.preventDefault(), { passive: false });
}

drawerOverlay?.addEventListener("click", closeDrawer);
drawerClose?.addEventListener("click", closeDrawer);

window.addEventListener("resize", () => {
  updateMobileHeaderHeight();
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

window.addEventListener("keydown", (event) => {
  if (activeGame === "car" && carState.running) {
    if (["arrowleft", "a"].includes(event.key.toLowerCase())) {
      event.preventDefault();
      moveCar("left");
    } else if (["arrowright", "d"].includes(event.key.toLowerCase())) {
      event.preventDefault();
      moveCar("right");
    }
  }

  if (activeGame === "tetris" && tetrisState.running) {
    const key = event.key.toLowerCase();
    if (key === "arrowleft" || key === "a") {
      event.preventDefault();
      tetrisMove(-1);
    } else if (key === "arrowright" || key === "d") {
      event.preventDefault();
      tetrisMove(1);
    } else if (key === "arrowup" || key === "w") {
      event.preventDefault();
      tetrisRotate();
    } else if (key === "arrowdown" || key === "s") {
      event.preventDefault();
      tetrisDrop(true);
    }
  }
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
  // 1) подгружаем таблицу и применяем обновления
  try {
    const sheetItems = await fetchSheetItems();
    applySheetItemsToLocalItems(sheetItems);
  } catch (e) {
    console.warn("Sheet sync failed", e);
  }

  // 2) дальше всё как было
  await initLanguage();
  updateMobileHeaderHeight();
  setCategory(activeCategory);
  updateMenuArrow();
  updateBackToTop();
})();
