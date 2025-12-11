// ─────────────────────────────────────────────
//  FULL MENU DATA (можешь дополнять/править)
// ─────────────────────────────────────────────

const items = {
  // 1) KAHVALTI — Завтраки
  kahvalti: [
    {
      title: "Serpme Kahvaltı (2 kişi)",
      desc: "Ezine beyaz peynir, çeçil peyniri, reçeller, bal & kaymak, nutella, acuka, zeytinler, domates, salatalık, jambon, sahanda yumurta, pancake, sosis, sigara böreği, patates tava, yeşillik, mevsim meyvesi, sınırsız çay.",
      price: "960₺",
      img: "images/kahvalti/serpme.webp"
    },
    {
      title: "Mini Kahvaltı",
      desc: "Ezine peynir, çeçil peynir, siyah zeytin, domates, salatalık, patates kızartması, yumurta ve çay.",
      price: "320₺",
      img: "images/kahvalti/mini.webp"
    },
    {
      title: "Sahanda Yumurta",
      desc: "Tavada taze yumurta.",
      price: "170₺",
      img: "images/kahvalti/yumurta.webp"
    },
    {
      title: "Menemen",
      desc: "Domates, biber ve yumurta ile klasik Türk menemen.",
      price: "180₺",
      img: "images/kahvalti/menemen.webp"
    },
    {
      title: "Omlet",
      desc: "Taze yumurta ile omlet (sade veya malzemeli).",
      price: "170₺",
      img: "images/kahvalti/omlet.webp"
    },
    {
      title: "Fit Kahvaltı",
      desc: "Müsli, süt ve mevsim meyveleri ile hafif kahvaltı.",
      price: "180₺",
      img: "images/kahvalti/fit.webp"
    },
    {
      title: "Pancake Tabağı",
      desc: "Pancake, meyveler ve çikolatalı sos ile servis.",
      price: "230₺",
      img: "images/kahvalti/pancake.webp"
    }
  ],

  // 2) ANA YEMEKLER — Основные блюда
  anayemek: [
    // ekmek üstü
    {
      title: "Eggs Benedict",
      desc: "Poşe yumurta, hollandez sos ve ekşi mayalı ekmek ile brunch klasiği.",
      price: "250₺",
      img: "images/anayemek/benedict.webp"
    },
    {
      title: "Avokado Ekmek Üstü",
      desc: "Avokado püresi, limon, zeytinyağı ve baharatlarla hafif seçenek.",
      price: "250₺",
      img: "images/anayemek/avokado.webp"
    },
    {
      title: "Vegeterian Ekmek Üstü",
      desc: "Sebzeler ve peynirle hazırlanmış vejetaryen tost.",
      price: "250₺",
      img: "images/anayemek/vege-toast.webp"
    },

    // bowls
    {
      title: "Tavuklu Bowl",
      desc: "Izgara tavuk, sebzeler ve tahıllarla dengeli bowl.",
      price: "280₺",
      img: "images/anayemek/chicken-bowl.webp"
    },
    {
      title: "Turkish Bowl",
      desc: "Yerel tatlar ve baharatlarla hazırlanan bowl.",
      price: "260₺",
      img: "images/anayemek/turkish-bowl.webp"
    },

    // starters
    {
      title: "Cheddar Soslu Patates",
      desc: "Kızarmış patates üzerinde sıcak cheddar sos.",
      price: "190₺",
      img: "images/anayemek/cheddar-fries.webp"
    },
    {
      title: "Patates Tava",
      desc: "Klasik kızarmış patates.",
      price: "180₺",
      img: "images/anayemek/fries.webp"
    },
    {
      title: "Çıtır Tavuk",
      desc: "Crispy kaplamalı tavuk parçaları.",
      price: "320₺",
      img: "images/anayemek/crispy-chicken.webp"
    },

    // salata
    {
      title: "Tavuklu Sezar Salata",
      desc: "Romaine marul, kruton, parmesan ve ızgara tavuk.",
      price: "270₺",
      img: "images/anayemek/caesar.webp"
    },
    {
      title: "Ton Balıklı Salata",
      desc: "Taze ton balığı ve yeşillikler.",
      price: "270₺",
      img: "images/anayemek/tuna-salad.webp"
    },
    {
      title: "Avokadolu Kinoalı Salata",
      desc: "Avokado ve kinoanın uyumu.",
      price: "270₺",
      img: "images/anayemek/quinoa-salad.webp"
    },
    {
      title: "Çıtır Tavuk Salata",
      desc: "Yeşillikler ve çıtır tavuk parçaları.",
      price: "270₺",
      img: "images/anayemek/crispy-salad.webp"
    },
    {
      title: "Beef Salata",
      desc: "Izgara dana eti ile zengin salata.",
      price: "360₺",
      img: "images/anayemek/beef-salad.webp"
    },

    // burrito
    {
      title: "Burritos Tavuk",
      desc: "Tavuklu burrito, sebzeler ve soslarla.",
      price: "330₺",
      img: "images/anayemek/burrito-chicken.webp"
    },
    {
      title: "Burritos Et",
      desc: "Etli burrito, baharatlı ve doyurucu.",
      price: "370₺",
      img: "images/anayemek/burrito-beef.webp"
    },

    // noodle & pasta
    {
      title: "Sebzeli Noodle",
      desc: "Taze sebzeler ile wok noodle.",
      price: "310₺",
      img: "images/anayemek/noodle-veggie.webp"
    },
    {
      title: "Tavuklu Noodle",
      desc: "Tavuklu noodle, hafif sos ile.",
      price: "320₺",
      img: "images/anayemek/noodle-chicken.webp"
    },
    {
      title: "Fettuccine Alfredo",
      desc: "Kremalı Alfredo soslu fettuccine.",
      price: "320₺",
      img: "images/anayemek/alfredo.webp"
    },
    {
      title: "Penne Arrabiata",
      desc: "Baharatlı domates soslu penne.",
      price: "310₺",
      img: "images/anayemek/arrabiata.webp"
    },

    // tavuk yemekleri
    {
      title: "Izgara Tavuk (200 gr)",
      desc: "Izgara tavuk göğsü, garnitür ile.",
      price: "340₺",
      img: "images/anayemek/grilled-chicken.webp"
    },
    {
      title: "Köri Soslu Tavuk",
      desc: "Kremalı köri soslu tavuk.",
      price: "340₺",
      img: "images/anayemek/curry-chicken.webp"
    },
    {
      title: "Kremalı Mantar Tavuk",
      desc: "Kremalı mantar sos ile tavuk.",
      price: "340₺",
      img: "images/anayemek/mushroom-chicken.webp"
    },
    {
      title: "Acı Tatlı Soslu Tavuk",
      desc: "Tatlı-acı sos ile tavuk.",
      price: "340₺",
      img: "images/anayemek/sweet-sour-chicken.webp"
    }
  ],

  // 3) BURGERLER
  burger: [
    {
      title: "Klasik Burger",
      desc: "Dana köfte, domates, marul, turşu ve özel sos.",
      price: "340₺",
      img: "images/burger/classic.webp"
    },
    {
      title: "Tavuk Burger",
      desc: "Izgara tavuklu burger.",
      price: "320₺",
      img: "images/burger/chicken.webp"
    },
    {
      title: "Üç Peynir Burger",
      desc: "Üç çeşit peynirle zenginleştirilmiş burger.",
      price: "350₺",
      img: "images/burger/cheese.webp"
    }
  ],

  // 4) PİZZALAR
  pizza: [
    {
      title: "Pizza Margherita",
      desc: "Domates sosu, mozzarella, fesleğen.",
      price: "320₺",
      img: "images/pizza/margherita.webp"
    },
    {
      title: "Pizza Karışık",
      desc: "Sebze ve et karışımı malzemeler.",
      price: "340₺",
      img: "images/pizza/mix.webp"
    },
    {
      title: "Pizza Dört Peynir",
      desc: "Dört peynirli pizza.",
      price: "340₺",
      img: "images/pizza/four-cheese.webp"
    },
    {
      title: "Pizza BBQ Tavuk",
      desc: "BBQ soslu tavuklu pizza.",
      price: "340₺",
      img: "images/pizza/bbq-chicken.webp"
    },
    {
      title: "Pizza Vejeteryan",
      desc: "Bol sebzeli vejetaryen pizza.",
      price: "340₺",
      img: "images/pizza/veggie.webp"
    }
  ],

  // 5) TATLILAR
  tatli: [
    {
      title: "Çikolata Dolgulu Tart",
      desc: "Akışkan çikolata dolgulu tart.",
      price: "190₺",
      img: "images/tatli/tart.webp"
    },
    {
      title: "Cevizli Brownie",
      desc: "Ceviz parçacıklı brownie.",
      price: "230₺",
      img: "images/tatli/brownie.webp"
    },
    {
      title: "Cheesecake",
      desc: "Klasik cheesecake.",
      price: "230₺",
      img: "images/tatli/cheesecake.webp"
    },
    {
      title: "Tiramisu",
      desc: "Kahveli İtalyan tatlısı.",
      price: "230₺",
      img: "images/tatli/tiramisu.webp"
    },
    {
      title: "Waffle",
      desc: "Meyve ve soslarla waffle.",
      price: "240₺",
      img: "images/tatli/waffle.webp"
    },
    {
      title: "Çikolatalı Sufle",
      desc: "İçi akışkan çikolatalı sufle.",
      price: "240₺",
      img: "images/tatli/souffle.webp"
    }
  ],

  // 6) KAHVELER (hot + cold + matcha)
  kahve: [
    // горячие
    { title: "Latte", desc: "Espresso ve süt karışımı.", price: "190₺", img: "images/kahve/latte.webp" },
    { title: "Cappuccino", desc: "Espresso üzerine süt köpüğü.", price: "190₺", img: "images/kahve/cappuccino.webp" },
    { title: "Flat White", desc: "Yoğun espresso ve süt.", price: "190₺", img: "images/kahve/flatwhite.webp" },
    { title: "Americano", desc: "Sıcak filtre kahve tarzı.", price: "190₺", img: "images/kahve/americano.webp" },

    // холодные
    { title: "Ice White Mocha", desc: "Buzlu mocha kahve.", price: "210₺", img: "images/kahve/ice-white-mocha.webp" },
    { title: "Ice Americano", desc: "Buzlu Americano.", price: "170₺", img: "images/kahve/ice-americano.webp" },

    // матча
    { title: "Matcha Latte", desc: "Japon matcha ile latte.", price: "210₺", img: "images/kahve/matcha-latte.webp" },
    { title: "Ice Matcha Latte", desc: "Buzlu matcha latte.", price: "210₺", img: "images/kahve/ice-matcha.webp" },
    { title: "Strawberry Matcha", desc: "Çilekli matcha karışımı.", price: "220₺", img: "images/kahve/strawberry-matcha.webp" },
    { title: "Orange Mango Matcha", desc: "Portakal & mango ile matcha.", price: "220₺", img: "images/kahve/mango-matcha.webp" }
  ],

  // 7) İÇECEKLER — другие напитки
  icecek: [
    { title: "Mojito (Alkolsüz)", desc: "Nane, lime ve gazlı su ile ferah kokteyl.", price: "210₺", img: "images/icecek/mojito.webp" },
    { title: "Milkshake Çilek", desc: "Çilekli milkshake.", price: "220₺", img: "images/icecek/milkshake-strawberry.webp" },
    { title: "Milkshake Oreo", desc: "Oreo parçacıklı milkshake.", price: "220₺", img: "images/icecek/milkshake-oreo.webp" },
    { title: "Frozen Çilek", desc: "Çilekli frozen içecek.", price: "210₺", img: "images/icecek/frozen-strawberry.webp" },
    { title: "Coca Cola", desc: "Klasik soğuk içecek.", price: "120₺", img: "images/icecek/cola.webp" },
    { title: "Fanta", desc: "Gazlı portakallı içecek.", price: "120₺", img: "images/icecek/fanta.webp" },
    { title: "Sprite", desc: "Limonlu gazlı içecek.", price: "120₺", img: "images/icecek/sprite.webp" },
    { title: "Ayran", desc: "Serinleten ayran.", price: "90₺", img: "images/icecek/ayran.webp" }
  ]
};


// ─────────────────────────────────────────────
//  RENDER + MODAL LOGIC
// ─────────────────────────────────────────────

const container    = document.getElementById("items-container");
const modalOverlay = document.getElementById("modal-overlay");
const modalImg     = document.getElementById("modal-img");
const modalTitle   = document.getElementById("modal-title");
const modalDesc    = document.getElementById("modal-desc");
const modalPrice   = document.getElementById("modal-price");
const modalClose   = document.getElementById("modal-close");
const catButtons   = document.querySelectorAll(".cat-btn");

function loadCategory(cat) {
  const list = items[cat];
  if (!list) return;

  container.innerHTML = "";

  list.forEach((item) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className =
      "text-left rounded-2xl bg-white border border-hb-border hover:border-gray-400 " +
      "shadow-sm hover:shadow-md transition p-3 sm:p-4 flex flex-col card-fade";

    const imgSrc = item.img || "images/placeholder.webp";

    card.innerHTML = `
      <div class="w-full mb-3 overflow-hidden rounded-xl bg-neutral-100 aspect-[4/3]">
        <img src="${imgSrc}" alt="${item.title}" class="w-full h-full object-cover"
             onerror="this.style.display='none'; this.parentElement.classList.add('bg-neutral-200');">
      </div>
      <h3 class="text-base font-semibold mb-1">${item.title}</h3>
      <p class="text-sm text-hb-muted mb-2 min-h-[2.5rem]">${item.desc}</p>
      <p class="text-sm font-semibold mt-auto">${item.price}</p>
    `;

    card.addEventListener("click", () => openModal(item));
    container.appendChild(card);
  });
}

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

// ─────────────────────────────────────────────
//  EVENTS
// ─────────────────────────────────────────────

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

// Категории (и десктоп, и мобилка — у них одинаковый data-cat)
catButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const cat = btn.dataset.cat;
    // активное состояние
    catButtons.forEach((b) => b.classList.remove("active"));
    document
      .querySelectorAll(`.cat-btn[data-cat="${cat}"]`)
      .forEach((b) => b.classList.add("active"));

    loadCategory(cat);

    // на телефоне плавно поднимаем грид наверх
    if (window.innerWidth < 768) {
      container.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// первая загрузка
document.addEventListener("DOMContentLoaded", () => {
  // если есть активная кнопка — берём её категорию
  const activeBtn = document.querySelector(".cat-btn.active") || catButtons[0];
  if (activeBtn) {
    const cat = activeBtn.dataset.cat || "kahvalti";
    loadCategory(cat);
  } else {
    loadCategory("kahvalti");
  }
});
