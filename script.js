// ─────────────────────────────
//  MENU DATA (с тегами/ценой)
// ─────────────────────────────

const items = {
  kahvalti: [
    {
      title: "Serpme Kahvaltı (2 kişi)",
      desc: "Ezine beyaz peynir, çeçil peyniri, reçeller, bal & kaymak, nutella, acuka, zeytinler, domates, salatalık, jambon, sahanda yumurta, pancake, sosis, sigara böreği, patates tava, yeşillik, mevsim meyvesi, sınırsız çay.",
      price: "960₺",
      priceValue: 960,
      img: "images/kahvalti/serpme.webp",
      tags: ["breakfast", "cheese"]
    },
    {
      title: "Mini Kahvaltı",
      desc: "Ezine peynir, çeçil peynir, siyah zeytin, domates, salatalık, patates kızartması, yumurta ve çay.",
      price: "320₺",
      priceValue: 320,
      img: "images/kahvalti/mini.webp",
      tags: ["breakfast"]
    },
    {
      title: "Sahanda Yumurta",
      desc: "Tavada taze yumurta.",
      price: "170₺",
      priceValue: 170,
      img: "images/kahvalti/yumurta.webp",
      tags: ["breakfast"]
    },
    {
      title: "Menemen",
      desc: "Domates, biber ve yumurta ile klasik Türk menemen.",
      price: "180₺",
      priceValue: 180,
      img: "images/kahvalti/menemen.webp",
      tags: ["breakfast", "veg"]
    },
    {
      title: "Omlet",
      desc: "Taze yumurta ile omlet (sade veya malzemeli).",
      price: "170₺",
      priceValue: 170,
      img: "images/kahvalti/omlet.webp",
      tags: ["breakfast"]
    },
    {
      title: "Fit Kahvaltı",
      desc: "Müsli, süt ve mevsim meyveleri ile hafif kahvaltı.",
      price: "180₺",
      priceValue: 180,
      img: "images/kahvalti/fit.webp",
      tags: ["breakfast", "veg"]
    },
    {
      title: "Pancake Tabağı",
      desc: "Pancake, meyveler ve çikolatalı sos ile servis.",
      price: "230₺",
      priceValue: 230,
      img: "images/kahvalti/pancake.webp",
      tags: ["breakfast", "dessert"]
    }
  ],

  anayemek: [
    {
      title: "Eggs Benedict",
      desc: "Poşe yumurta, hollandez sos ve ekşi mayalı ekmek ile brunch klasiği.",
      price: "250₺",
      priceValue: 250,
      img: "images/anayemek/benedict.webp",
      tags: ["breakfast"]
    },
    {
      title: "Avokado Ekmek Üstü",
      desc: "Avokado püresi, limon, zeytinyağı ve baharatlarla hafif seçenek.",
      price: "250₺",
      priceValue: 250,
      img: "images/anayemek/avokado.webp",
      tags: ["veg"]
    },
    {
      title: "Vegeterian Ekmek Üstü",
      desc: "Sebzeler ve peynirle hazırlanmış vejetaryen tost.",
      price: "250₺",
      priceValue: 250,
      img: "images/anayemek/vege-toast.webp",
      tags: ["veg", "cheese"]
    },
    {
      title: "Tavuklu Bowl",
      desc: "Izgara tavuk, sebzeler ve tahıllarla dengeli bowl.",
      price: "280₺",
      priceValue: 280,
      img: "images/anayemek/chicken-bowl.webp",
      tags: []
    },
    {
      title: "Turkish Bowl",
      desc: "Yerel tatlar ve baharatlarla hazırlanan bowl.",
      price: "260₺",
      priceValue: 260,
      img: "images/anayemek/turkish-bowl.webp",
      tags: ["spicy"]
    },
    {
      title: "Cheddar Soslu Patates",
      desc: "Kızarmış patates üzerinde sıcak cheddar sos.",
      price: "190₺",
      priceValue: 190,
      img: "images/anayemek/cheddar-fries.webp",
      tags: ["cheese"]
    },
    {
      title: "Patates Tava",
      desc: "Klasik kızarmış patates.",
      price: "180₺",
      priceValue: 180,
      img: "images/anayemek/fries.webp",
      tags: ["veg"]
    },
    {
      title: "Çıtır Tavuk",
      desc: "Crispy kaplamalı tavuk parçaları.",
      price: "320₺",
      priceValue: 320,
      img: "images/anayemek/crispy-chicken.webp",
      tags: []
    },
    {
      title: "Tavuklu Sezar Salata",
      desc: "Romaine marul, kruton, parmesan ve ızgara tavuk.",
      price: "270₺",
      priceValue: 270,
      img: "images/anayemek/caesar.webp",
      tags: ["cheese"]
    },
    {
      title: "Ton Balıklı Salata",
      desc: "Taze ton balığı ve yeşillikler.",
      price: "270₺",
      priceValue: 270,
      img: "images/anayemek/tuna-salad.webp",
      tags: []
    },
    {
      title: "Avokadolu Kinoalı Salata",
      desc: "Avokado ve kinoanın uyumu.",
      price: "270₺",
      priceValue: 270,
      img: "images/anayemek/quinoa-salad.webp",
      tags: ["veg"]
    },
    {
      title: "Çıtır Tavuk Salata",
      desc: "Yeşillikler ve çıtır tavuk parçaları.",
      price: "270₺",
      priceValue: 270,
      img: "images/anayemek/crispy-salad.webp",
      tags: []
    },
    {
      title: "Beef Salata",
      desc: "Izgara dana eti ile zengin salata.",
      price: "360₺",
      priceValue: 360,
      img: "images/anayemek/beef-salad.webp",
      tags: []
    },
    {
      title: "Burritos Tavuk",
      desc: "Tavuklu burrito, sebzeler ve soslarla.",
      price: "330₺",
      priceValue: 330,
      img: "images/anayemek/burrito-chicken.webp",
      tags: ["spicy"]
    },
    {
      title: "Burritos Et",
      desc: "Etli burrito, baharatlı ve doyurucu.",
      price: "370₺",
      priceValue: 370,
      img: "images/anayemek/burrito-beef.webp",
      tags: ["spicy"]
    },
    {
      title: "Sebzeli Noodle",
      desc: "Taze sebzeler ile wok noodle.",
      price: "310₺",
      priceValue: 310,
      img: "images/anayemek/noodle-veggie.webp",
      tags: ["veg"]
    },
    {
      title: "Tavuklu Noodle",
      desc: "Tavuklu noodle, hafif sos ile.",
      price: "320₺",
      priceValue: 320,
      img: "images/anayemek/noodle-chicken.webp",
      tags: []
    },
    {
      title: "Fettuccine Alfredo",
      desc: "Kremalı Alfredo soslu fettuccine.",
      price: "320₺",
      priceValue: 320,
      img: "images/anayemek/alfredo.webp",
      tags: ["cheese"]
    },
    {
      title: "Penne Arrabiata",
      desc: "Baharatlı domates soslu penne.",
      price: "310₺",
      priceValue: 310,
      img: "images/anayemek/arrabiata.webp",
      tags: ["spicy", "veg"]
    },
    {
      title: "Izgara Tavuk (200 gr)",
      desc: "Izgara tavuk göğsü, garnitür ile.",
      price: "340₺",
      priceValue: 340,
      img: "images/anayemek/grilled-chicken.webp",
      tags: []
    },
    {
      title: "Köri Soslu Tavuk",
      desc: "Kremalı köri soslu tavuk.",
      price: "340₺",
      priceValue: 340,
      img: "images/anayemek/curry-chicken.webp",
      tags: ["spicy"]
    },
    {
      title: "Kremalı Mantar Tavuk",
      desc: "Kremalı mantar sos ile tavuk.",
      price: "340₺",
      priceValue: 340,
      img: "images/anayemek/mushroom-chicken.webp",
      tags: []
    },
    {
      title: "Acı Tatlı Soslu Tavuk",
      desc: "Tatlı-acı sos ile tavuk.",
      price: "340₺",
      priceValue: 340,
      img: "images/anayemek/sweet-sour-chicken.webp",
      tags: ["spicy"]
    }
  ],

  burger: [
    {
      title: "Klasik Burger",
      desc: "Dana köfte, domates, marul, turşu ve özel sos.",
      price: "340₺",
      priceValue: 340,
      img: "images/burger/classic.webp",
      tags: ["cheese"]
    },
    {
      title: "Tavuk Burger",
      desc: "Izgara tavuklu burger.",
      price: "320₺",
      priceValue: 320,
      img: "images/burger/chicken.webp",
      tags: []
    },
    {
      title: "Üç Peynir Burger",
      desc: "Üç çeşit peynirle zenginleştirilmiş burger.",
      price: "350₺",
      priceValue: 350,
      img: "images/burger/cheese.webp",
      tags: ["cheese"]
    }
  ],

  pizza: [
    {
      title: "Pizza Margherita",
      desc: "Domates sosu, mozzarella, fesleğen.",
      price: "320₺",
      priceValue: 320,
      img: "images/pizza/margherita.webp",
      tags: ["veg", "cheese"]
    },
    {
      title: "Pizza Karışık",
      desc: "Sebze ve et karışımı malzemeler.",
      price: "340₺",
      priceValue: 340,
      img: "images/pizza/mix.webp",
      tags: ["cheese"]
    },
    {
      title: "Pizza Dört Peynir",
      desc: "Dört peynirli pizza.",
      price: "340₺",
      priceValue: 340,
      img: "images/pizza/four-cheese.webp",
      tags: ["cheese", "veg"]
    },
    {
      title: "Pizza BBQ Tavuk",
      desc: "BBQ soslu tavuklu pizza.",
      price: "340₺",
      priceValue: 340,
      img: "images/pizza/bbq-chicken.webp",
      tags: ["cheese"]
    },
    {
      title: "Pizza Vejeteryan",
      desc: "Bol sebzeli vejetaryen pizza.",
      price: "340₺",
      priceValue: 340,
      img: "images/pizza/veggie.webp",
      tags: ["veg", "cheese"]
    }
  ],

  tatli: [
    {
      title: "Çikolata Dolgulu Tart",
      desc: "Akışkan çikolata dolgulu tart.",
      price: "190₺",
      priceValue: 190,
      img: "images/tatli/tart.webp",
      tags: ["dessert", "veg"]
    },
    {
      title: "Cevizli Brownie",
      desc: "Ceviz parçacıklı brownie.",
      price: "230₺",
      priceValue: 230,
      img: "images/tatli/brownie.webp",
      tags: ["dessert", "veg"]
    },
    {
      title: "Cheesecake",
      desc: "Klasik cheesecake.",
      price: "230₺",
      priceValue: 230,
      img: "images/tatli/cheesecake.webp",
      tags: ["dessert", "cheese", "veg"]
    },
    {
      title: "Tiramisu",
      desc: "Kahveli İtalyan tatlısı.",
      price: "230₺",
      priceValue: 230,
      img: "images/tatli/tiramisu.webp",
      tags: ["dessert", "veg"]
    },
    {
      title: "Waffle",
      desc: "Meyve ve soslarla waffle.",
      price: "240₺",
      priceValue: 240,
      img: "images/tatli/waffle.webp",
      tags: ["dessert", "veg"]
    },
    {
      title: "Çikolatalı Sufle",
      desc: "İçi akışkan çikolatalı sufle.",
      price: "240₺",
      priceValue: 240,
      img: "images/tatli/souffle.webp",
      tags: ["dessert", "veg"]
    }
  ],

  kahve: [
    { title: "Latte", desc: "Espresso ve süt karışımı.", price: "190₺", priceValue: 190, img: "images/kahve/latte.webp", tags: [] },
    { title: "Cappuccino", desc: "Espresso üzerine süt köpüğü.", price: "190₺", priceValue: 190, img: "images/kahve/cappuccino.webp", tags: [] },
    { title: "Flat White", desc: "Yoğun espresso ve süt.", price: "190₺", priceValue: 190, img: "images/kahve/flatwhite.webp", tags: [] },
    { title: "Americano", desc: "Sıcak filtre kahve tarzı.", price: "190₺", priceValue: 190, img: "images/kahve/americano.webp", tags: [] },
    { title: "Ice White Mocha", desc: "Buzlu mocha kahve.", price: "210₺", priceValue: 210, img: "images/kahve/ice-white-mocha.webp", tags: [] },
    { title: "Ice Americano", desc: "Buzlu Americano.", price: "170₺", priceValue: 170, img: "images/kahve/ice-americano.webp", tags: [] },
    { title: "Matcha Latte", desc: "Japon matcha ile latte.", price: "210₺", priceValue: 210, img: "images/kahve/matcha-latte.webp", tags: [] },
    { title: "Ice Matcha Latte", desc: "Buzlu matcha latte.", price: "210₺", priceValue: 210, img: "images/kahve/ice-matcha.webp", tags: [] },
    { title: "Strawberry Matcha", desc: "Çilekli matcha karışımı.", price: "220₺", priceValue: 220, img: "images/kahve/strawberry-matcha.webp", tags: [] },
    { title: "Orange Mango Matcha", desc: "Portakal & mango ile matcha.", price: "220₺", priceValue: 220, img: "images/kahve/mango-matcha.webp", tags: [] }
  ],

  icecek: [
    { title: "Mojito (Alkolsüz)", desc: "Nane, lime ve gazlı su ile ferah kokteyl.", price: "210₺", priceValue: 210, img: "images/icecek/mojito.webp", tags: [] },
    { title: "Milkshake Çilek", desc: "Çilekli milkshake.", price: "220₺", priceValue: 220, img: "images/icecek/milkshake-strawberry.webp", tags: ["dessert"] },
    { title: "Milkshake Oreo", desc: "Oreo parçacıklı milkshake.", price: "220₺", priceValue: 220, img: "images/icecek/milkshake-oreo.webp", tags: ["dessert"] },
    { title: "Frozen Çilek", desc: "Çilekli frozen içecek.", price: "210₺", priceValue: 210, img: "images/icecek/frozen-strawberry.webp", tags: [] },
    { title: "Coca Cola", desc: "Klasik soğuk içecek.", price: "120₺", priceValue: 120, img: "images/icecek/cola.webp", tags: [] },
    { title: "Fanta", desc: "Gazlı portakallı içecek.", price: "120₺", priceValue: 120, img: "images/icecek/fanta.webp", tags: [] },
    { title: "Sprite", desc: "Limonlu gazlı içecek.", price: "120₺", priceValue: 120, img: "images/icecek/sprite.webp", tags: [] },
    { title: "Ayran", desc: "Serinleten ayran.", price: "90₺", priceValue: 90, img: "images/icecek/ayran.webp", tags: [] }
  ]
};


// ─────────────────────────────
//  GLOBAL STATE
// ─────────────────────────────

let activeCategory = "kahvalti";
let searchTerm = "";
const activeFilters = {
  veg: false,
  spicy: false,
  cheese: false,
  breakfast: false,
  dessert: false,
  price: null // 'low' | 'mid' | 'high'
};


// ─────────────────────────────
//  DOM ELEMENTS
// ─────────────────────────────

const container        = document.getElementById("items-container");
const modalOverlay     = document.getElementById("modal-overlay");
const modalImg         = document.getElementById("modal-img");
const modalTitle       = document.getElementById("modal-title");
const modalDesc        = document.getElementById("modal-desc");
const modalPrice       = document.getElementById("modal-price");
const modalClose       = document.getElementById("modal-close");

const catButtons       = document.querySelectorAll(".cat-btn");
const filterChips      = document.querySelectorAll(".filter-chip");

const searchDesktop    = document.getElementById("search-desktop");
const searchMobile     = document.getElementById("search-mobile");
const filterToggleBtn  = document.getElementById("filter-toggle");
const mobileFiltersBox = document.getElementById("mobile-filters-panel");
const scrollTopBtn     = document.getElementById("scroll-top-btn");


// ─────────────────────────────
//  FILTER LOGIC
// ─────────────────────────────

function passesTagFilters(item) {
  const tags = item.tags || [];
  if (activeFilters.veg && !tags.includes("veg")) return false;
  if (activeFilters.spicy && !tags.includes("spicy")) return false;
  if (activeFilters.cheese && !tags.includes("cheese")) return false;
  if (activeFilters.breakfast && !tags.includes("breakfast")) return false;
  if (activeFilters.dessert && !tags.includes("dessert")) return false;
  return true;
}

function passesPriceFilter(item) {
  if (!activeFilters.price) return true;
  const p = item.priceValue || 0;

  if (activeFilters.price === "low")  return p < 200;
  if (activeFilters.price === "mid")  return p >= 200 && p <= 300;
  if (activeFilters.price === "high") return p > 300;

  return true;
}

function passesSearch(item) {
  if (!searchTerm) return true;
  const q = searchTerm.toLowerCase();
  return (
    item.title.toLowerCase().includes(q) ||
    item.desc.toLowerCase().includes(q)
  );
}

function filteredList(list) {
  return list.filter(item =>
    passesSearch(item) &&
    passesTagFilters(item) &&
    passesPriceFilter(item)
  );
}


// ─────────────────────────────
//  RENDERING
// ─────────────────────────────

function renderCategory(cat) {
  activeCategory = cat;
  const list = items[cat] || [];
  const visible = filteredList(list);

  container.innerHTML = "";

  if (!visible.length) {
    const empty = document.createElement("div");
    empty.className = "text-sm text-hb-muted col-span-full py-8 text-center";
    empty.textContent = "Bu filtrelerle sonuç bulunamadı.";
    container.appendChild(empty);
    return;
  }

  visible.forEach((item) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className =
      "text-left rounded-2xl bg-white border border-hb-border hover:border-gray-400 " +
      "shadow-sm hover:shadow-md transition p-3 sm:p-4 flex flex-col " +
      "card-fade hover:scale-[1.01]";

    const imgSrc = item.img || "images/placeholder.webp";

    card.innerHTML = `
      <div class="w-full mb-3 overflow-hidden rounded-xl bg-neutral-100 aspect-[4/3]">
        <img src="${imgSrc}" alt="${item.title}"
             class="w-full h-full object-cover transition-transform duration-200 hover:scale-[1.03]"
             onerror="this.style.display='none'; this.parentElement.classList.add('bg-neutral-200');">
      </div>
      <h3 class="text-base font-semibold mb-1">${item.title}</h3>
      <p class="text-sm text-hb-muted mb-2 min-h-[2.5rem] line-clamp-3">${item.desc}</p>
      <p class="text-sm font-semibold mt-auto">${item.price}</p>
    `;

    card.addEventListener("click", () => openModal(item));
    container.appendChild(card);
  });
}


// ─────────────────────────────
//  MODAL
// ─────────────────────────────

function openModal(item) {
  const imgSrc = item.img || "images/placeholder.webp";
  modalImg.src = imgSrc;
  modalImg.alt = item.title;
  modalTitle.textContent = item.title;
  modalDesc.textContent = item.desc;
  modalPrice.textContent = item.price;

  modalOverlay.classList.remove("hidden");
}

function closeModal() {
  modalOverlay.classList.add("hidden");
}

if (modalClose) {
  modalClose.addEventListener("click", closeModal);
}
if (modalOverlay) {
  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) closeModal();
  });
}
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});


// ─────────────────────────────
//  CATEGORY SWITCH
// ─────────────────────────────

catButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const cat = btn.dataset.cat;
    // подсветка
    catButtons.forEach((b) => b.classList.remove("active"));
    document
      .querySelectorAll(`.cat-btn[data-cat="${cat}"]`)
      .forEach((b) => b.classList.add("active"));

    renderCategory(cat);

    if (window.innerWidth < 768) {
      container.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});


// ─────────────────────────────
//  FILTERS
// ─────────────────────────────

filterChips.forEach((chip) => {
  const tagFilter = chip.dataset.filter;
  const priceFilter = chip.dataset.filterPrice;

  chip.addEventListener("click", () => {
    if (tagFilter) {
      activeFilters[tagFilter] = !activeFilters[tagFilter];
    }

    if (priceFilter) {
      // одиночный выбор по цене
      if (activeFilters.price === priceFilter) {
        activeFilters.price = null;
      } else {
        activeFilters.price = priceFilter;
      }
    }

    // обновляем активные классы
    filterChips.forEach((c) => {
      const tf = c.dataset.filter;
      const pf = c.dataset.filterPrice;
      c.classList.remove("active");
      if (tf && activeFilters[tf]) c.classList.add("active");
      if (pf && activeFilters.price === pf) c.classList.add("active");
    });

    renderCategory(activeCategory);
  });
});


// ─────────────────────────────
//  SEARCH (desktop + mobile)
// ─────────────────────────────

function updateSearch(value) {
  searchTerm = value.trim();
  if (searchDesktop && document.activeElement !== searchDesktop) {
    searchDesktop.value = value;
  }
  if (searchMobile && document.activeElement !== searchMobile) {
    searchMobile.value = value;
  }
  renderCategory(activeCategory);
}

if (searchDesktop) {
  searchDesktop.addEventListener("input", (e) => {
    updateSearch(e.target.value);
  });
}
if (searchMobile) {
  searchMobile.addEventListener("input", (e) => {
    updateSearch(e.target.value);
  });
}


// ─────────────────────────────
//  MOBILE CONTROLS
// ─────────────────────────────

if (filterToggleBtn && mobileFiltersBox) {
  filterToggleBtn.addEventListener("click", () => {
    mobileFiltersBox.classList.toggle("hidden");
  });
}

if (scrollTopBtn) {
  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}


// ─────────────────────────────
//  INITIAL RENDER
// ─────────────────────────────

document.addEventListener("DOMContentLoaded", () => {
  renderCategory(activeCategory);
});
