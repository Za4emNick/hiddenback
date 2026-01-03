/**
 * Google Apps Script — HiddenBack menu passthrough
 *
 * Sheet columns (case-insensitive):
 * uid, cat, group, sort, active, price,
 * title_tr, desc_tr, title_en, desc_en, title_ru, desc_ru
 */

const SHEET_ID = "PASTE_SPREADSHEET_ID_HERE";
const SHEET_NAME = "menu";

function normalizeRow(row) {
  const uid = String(row.uid || row.id || "").trim();
  if (!uid) return null;

  const cat = String(row.cat || "").trim().toLowerCase();
  const group = String(row.group || "").trim().toLowerCase();

  const activeVal = row.active;
  const active =
    activeVal === true ||
    String(activeVal).toLowerCase() === "true" ||
    activeVal === 1 ||
    String(activeVal) === "1";

  const priceNum = Number(String(row.price ?? "").replace(",", "."));
  const price = Number.isFinite(priceNum) ? priceNum : "";

  const sortNum = Number(String(row.sort ?? "").replace(",", "."));
  const sort = Number.isFinite(sortNum) ? sortNum : "";

  const norm = (v) => String(v ?? "").trim();

  return {
    uid,
    cat,
    group,
    sort,
    active,
    price,
    title_tr: norm(row.title_tr),
    desc_tr: norm(row.desc_tr),
    title_en: norm(row.title_en),
    desc_en: norm(row.desc_en),
    title_ru: norm(row.title_ru),
    desc_ru: norm(row.desc_ru),
  };
}

function doGet() {
  const ss = SpreadsheetApp.openById(SHEET_ID);
  const sheet = ss.getSheetByName(SHEET_NAME);
  const values = sheet.getDataRange().getDisplayValues();
  const [headers, ...rows] = values;

  const items = rows
    .map((cols) => {
      const obj = {};
      headers.forEach((h, idx) => {
        const key = String(h || "").trim().toLowerCase();
        obj[key] = cols[idx];
      });
      return normalizeRow(obj);
    })
    .filter(Boolean);

  const payload = {
    items,
    updatedAt: new Date().toISOString(),
  };

  return ContentService.createTextOutput(JSON.stringify(payload)).setMimeType(ContentService.MimeType.JSON);
}
