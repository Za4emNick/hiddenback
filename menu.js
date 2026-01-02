(() => {
  const MENU_API_URL = window.MENU_API_URL;

  // Маппинг: ключи category из таблицы -> заголовки на сайте
  const CATEGORY_TITLES = {
    coffee: "Coffee",
    espresso: "Espresso",
    tea: "Tea",
    dessert: "Desserts",
    cold: "Cold Drinks",
    breakfast: "Breakfast",
    snack: "Snacks",
  };

  const rootEl = document.getElementById("menu-root");
  const statusEl = document.getElementById("menu-status");
  const refreshBtn = document.getElementById("menu-refresh");

  function setStatus(text) {
    if (statusEl) statusEl.textContent = text || "";
  }

  function escapeHtml(s) {
    return String(s ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function formatPrice(value) {
    // value может прийти числом или строкой
    if (value === null || value === undefined || value === "") return "";
    const n = Number(String(value).replace(",", "."));
    if (!Number.isFinite(n)) return String(value);
    // без копеек
    return String(Math.round(n));
  }

  function toNum(value, fallback = 0) {
    if (value === null || value === undefined || value === "") return fallback;
    const n = Number(String(value).trim().replace(",", "."));
    return Number.isFinite(n) ? n : fallback;
  }

  async function fetchMenuItems() {
    if (!MENU_API_URL || MENU_API_URL.includes("PASTE_YOUR")) {
      throw new Error("MENU_API_URL is not set. Paste Apps Script URL in index.html");
    }

    const res = await fetch(`${MENU_API_URL}?t=${Date.now()}`, { cache: "no-store" });
    if (!res.ok) throw new Error(`Menu API error: ${res.status}`);

    const data = await res.json();
    const items = Array.isArray(data.items) ? data.items : [];

    // нормализация и фильтры
    return items
      .map((x) => ({
        id: String(x.id ?? "").trim(),
        category: String(x.cat ?? "other").trim().toLowerCase(),     // было x.category
        name: String(x.title ?? "").trim(),                          // было x.name
        description: String(x.desc ?? "").trim(),                    // было x.description
        price: x.price,
        active:
          x.active === true ||
          String(x.active ?? "").trim().toLowerCase() === "true" ||
          String(x.active ?? "").trim().toLowerCase() === "yes",
        sort: toNum(x.sort ?? x.order_by, 0),
      }))
      .filter((x) => x.active && x.name)
      .sort((a, b) => toNum(a.sort, 0) - toNum(b.sort, 0));

  }

  function groupByCategory(items) {
    const map = new Map();
    for (const it of items) {
      if (!map.has(it.category)) map.set(it.category, []);
      map.get(it.category).push(it);
    }
    return map;
  }

  function render(items) {
    if (!rootEl) return;

    if (!items.length) {
      rootEl.innerHTML = `
        <div class="rounded-2xl border border-white/10 bg-white/5 p-5">
          <div class="text-base font-medium">Menu is empty</div>
          <div class="mt-1 text-sm text-zinc-400">
            Add rows into Google Sheet (tab: <span class="font-mono">menu</span>).
          </div>
        </div>
      `;
      return;
    }

    const grouped = groupByCategory(items);

    // категории сортируем по алфавиту, можно будет поменять под себя
    const categories = Array.from(grouped.keys()).sort((a, b) => a.localeCompare(b));

    const html = categories
      .map((cat) => {
        const title = CATEGORY_TITLES[cat] || cat.charAt(0).toUpperCase() + cat.slice(1);
        const list = grouped.get(cat) || [];

        const rowsHtml = list
          .map((it) => {
            const price = formatPrice(it.price);

            return `
              <div class="py-4 border-b border-white/10 last:border-b-0">
                <div class="flex items-start justify-between gap-4">
                  <div class="min-w-0">
                    <div class="flex items-center gap-3">
                      <div class="text-base font-medium truncate">${escapeHtml(it.name)}</div>
                    </div>
                    ${
                      it.description
                        ? `<div class="mt-1 text-sm text-zinc-400">${escapeHtml(it.description)}</div>`
                        : ``
                    }
                  </div>

                  <div class="shrink-0 text-base font-semibold tabular-nums">
                    ${price ? `${escapeHtml(price)}` : ""}
                  </div>
                </div>
              </div>
            `;
          })
          .join("");

        return `
          <section class="rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
            <div class="px-5 py-4 border-b border-white/10">
              <h3 class="text-lg font-semibold">${escapeHtml(title)}</h3>
            </div>
            <div class="px-5">
              ${rowsHtml}
            </div>
          </section>
        `;
      })
      .join("");

    rootEl.innerHTML = html;
  }

  async function loadAndRender() {
    try {
      setStatus("Loading menu…");
      const items = await fetchMenuItems();
      render(items);
      setStatus(`Updated: ${new Date().toLocaleString()}`);
    } catch (err) {
      console.error(err);
      setStatus("Failed to load menu (check API URL / sheet name / headers).");
      if (rootEl) {
        rootEl.innerHTML = `
          <div class="rounded-2xl border border-red-500/20 bg-red-500/10 p-5">
            <div class="text-base font-medium">Menu load error</div>
            <div class="mt-1 text-sm text-zinc-300">
              ${escapeHtml(err?.message || "Unknown error")}
            </div>
          </div>
        `;
      }
    }
  }

  if (refreshBtn) refreshBtn.addEventListener("click", loadAndRender);

  // автозагрузка
  loadAndRender();
})();
