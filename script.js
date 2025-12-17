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

const TRANSLATIONS = {
  tr: {
    metaTitle: "HiddenBack — Menü",
    metaDescription: "HiddenBack Cafe — Yalova. Modern, temiz ve kullanışlı online menü.",
    introTitle: "Dili seçin",
    navAbout: "Hakkımızda",
    navGames: "Games",
    navMenu: "Menü",
    heroHeadline: "Şehrin tam merkezinde, gözlerden uzakta saklanan eski bir kafe.",
    heroBody1:
      "hiddenback, Yalova’nın kalbinde, keşfedilmeyi bekleyen gizli bir nokta. Amacımız; iyi kahveyi, ev yapımı tatlıları ve sıcak bir atmosferi tek bir yerde buluşturmak. Sabah kahvaltısından akşam kahvesine kadar, her saat burada kendi ritmine sahip.",
    heroBody2:
      "Burada menü, sadece bir yemek listesi değil — misafirlerimizin anılarının bir parçası. Aşağıda hiddenback’in atmosferini, hikâyesini ve detaylarını daha yakından keşfedebilirsin.",
    article1Title: "Publika • Yalova’da modern bir buluşma noktası",
    article1Body:
      "Zamanla hiddenback, Yalova’nın kalbinde modern ve samimi bir buluşma noktası haline geliyor. Aynı masada öğrenciler, yazılımcılar, bankacılar, avukatlar ve yaratıcı insanlar bir araya geliyor; hem çalışmak hem de arkadaşlarla sakin bir akşam geçirmek isteyen herkes burada buluşuyor. hiddenback’te her misafir kendi ritmini bulur: yolda hızlı bir espresso, dizüstü bilgisayar eşliğinde sakin bir filtre kahve molası ya da akşam buluşmasına eşlik eden bir tatlı. Tüm kahvelerin detaylı açıklamalarını ve kafein seviyelerini online menümüzde bulabilirsin.",
    article2Title: "Tatlı Vitrini • Günlük hazırlanan tatlılar",
    article2Body:
      "Cheesecake, brownie, tart ve waffle çeşitlerimiz her gün taze hazırlanıyor. Tatlılar, kahveyle uyumlu olacak şekilde tasarlandı — online menüde hem içerikleri hem de fiyatları rahatça inceleyebilirsin.",
    article3Title: "Atmosfer • Sessiz köşeler ve sıcak ışıklar",
    article3Body:
      "hiddenback, hem bilgisayarla çalışanlar hem de arkadaşlarla sohbet edenler için tasarlandı. Loş ışık, rahat oturma alanları ve sakin müzik — tüm bunlar menüyle beraber deneyimin doğal bir parçası.",
    instagramTitle: "Canlıdan kareler",
    instagramButton: "Instagram'a git",
    gamesHeading: "Oyununu seç ve oyna",
    gamesIntro:
      "Games sekmesinden artık üç oyuna erişebilirsin. Dilediğin oyunu yukarıdan seç, kuralları oku ve hemen oynamaya başla.",
    snakeTab: "Yılan Oyunu",
    tttTab: "Çapraz & Sıfır",
    checkersTab: "Dama",
    snakeScore: "Skor",
    snakeBest: "Rekor",
    snakeStatus: "Durum",
    snakeTipTitle: "İpucu",
    snakeTip1: "Önce bir dil seç, sonra \"Games\"e geçip oyunu başlat.",
    snakeTip2: "Hız yavaş başlar; her elma ile biraz artar.",
    snakeTip3: "Telefon için butonlar büyük, dokunmatik gecikme yok.",
    snakeRestart: "Başlat / Sıfırla",
    snakeControls: "Mobilde yön tuşlarını, masaüstünde ok/WASD tuşlarını kullanabilirsiniz.",
    snakeReadyStatus: "Hazır",
    snakeStartedStatus: "Başladı",
    snakeStoppedStatus: "Durdu",
    snakeGameOverStatus: "Oyun bitti",
    snakePlayingStatus: "Oynanıyor",
    tttRulesTitle: "Kurallar",
    tttRules1:
      "Çapraz & Sıfır oyununda amaç, 3x3 karede yatay, dikey veya çapraz olarak kendi sembolünü dizmek. Sıra değişiyor: X başlar, ardından O gelir.",
    tttRules2:
      "Telefon ya da masaüstünde karelere dokunarak/klikleyerek oynayabilirsin. Berabere kalırsan yeniden başlat tuşu hemen burada.",
    tttReset: "Yeniden Başlat",
    tttTurn: "Sıra: {player}",
    tttDraw: "Berabere! Yeniden deneyin.",
    tttWin: "{player} kazandı!",
    checkersRulesTitle: "Kurallar",
    checkersRules1:
      "Dama 8x8 tahtada oynanır. Kırmızı taşlar yukarı, siyah taşlar aşağı doğru çapraz hareket eder. İleriye çapraz bir kare gidebilir veya rakip taşın üzerinden atlayarak hamle yapabilirler.",
    checkersRules2:
      "Taşın varacağı kare boş olmalı. Son sıraya ulaşan taş dama olur ve her yöne gidebilir. Sıra değiştikçe durum aşağıda gösterilir.",
    checkersReset: "Yeni Oyun",
    checkersHint: "Taşına dokun, geçerli hamleler vurgulanır.",
    checkerRed: "Kırmızı",
    checkerBlack: "Siyah",
    checkersTurn: "Sıra: {player}",
    checkersWin: "{player} kazandı!",
    filters: "Filtreler",
    filterVeg: "Vejetaryen",
    filterSpicy: "Acılı",
    filterCheese: "Peynirli",
    filterDessert: "Tatlı",
    groups: "Bölümler",
    searchPlaceholder: "Menüde ara...",
  },
  en: {
    metaTitle: "HiddenBack — Menu",
    metaDescription: "HiddenBack Cafe — Yalova. Modern, clean, and convenient online menu.",
    introTitle: "Choose your language",
    navAbout: "About",
    navGames: "Games",
    navMenu: "Menu",
    heroHeadline: "In the heart of the city, a tucked-away old cafe.",
    heroBody1:
      "hiddenback is a hidden spot in the heart of Yalova waiting to be discovered. Our goal is to bring good coffee, homemade desserts, and a warm atmosphere together in one place. From breakfast to evening coffee, every hour here has its own rhythm.",
    heroBody2:
      "Here, the menu is more than a list — it's part of our guests' memories. Explore hiddenback’s atmosphere, story, and details below.",
    article1Title: "Publika • A modern meeting point in Yalova",
    article1Body:
      "Over time, hiddenback becomes a modern and friendly meeting spot in Yalova’s center. Students, developers, bankers, lawyers, and creatives gather at the same table; anyone who wants to work or enjoy a calm evening with friends meets here. Every guest finds their rhythm at hiddenback: a quick espresso on the go, a quiet filter coffee with a laptop, or a dessert to pair with an evening meetup. You can find detailed coffee descriptions and caffeine levels in our online menu.",
    article2Title: "Dessert Display • Freshly made every day",
    article2Body:
      "Our cheesecakes, brownies, tarts, and waffles are prepared fresh daily. Desserts are designed to pair with coffee — check ingredients and prices easily in the online menu.",
    article3Title: "Atmosphere • Cozy corners and warm lights",
    article3Body:
      "hiddenback is designed both for those working on laptops and for friends chatting together. Dim lights, comfortable seating, and calm music — all of these are a natural part of the experience alongside the menu.",
    instagramTitle: "Moments from live",
    instagramButton: "Open Instagram",
    gamesHeading: "Pick a game and play",
    gamesIntro:
      "You can now access three games from the Games tab. Choose one above, read the rules, and start playing right away.",
    snakeTab: "Snake",
    tttTab: "Tic Tac Toe",
    checkersTab: "Checkers",
    snakeScore: "Score",
    snakeBest: "Best",
    snakeStatus: "Status",
    snakeTipTitle: "Hint",
    snakeTip1: "Pick a language, then open Games to start.",
    snakeTip2: "Speed starts slow and rises with every apple.",
    snakeTip3: "Buttons are big for phones with no touch delay.",
    snakeRestart: "Start / Reset",
    snakeControls: "Use arrows/WASD on desktop; tap the arrows on mobile.",
    snakeReadyStatus: "Ready",
    snakeStartedStatus: "Started",
    snakeStoppedStatus: "Stopped",
    snakeGameOverStatus: "Game over",
    snakePlayingStatus: "Playing",
    tttRulesTitle: "Rules",
    tttRules1:
      "In Tic Tac Toe, the goal is to line up your symbol horizontally, vertically, or diagonally on the 3x3 grid. X starts, then O follows.",
    tttRules2:
      "Tap or click the squares on phone or desktop. If it's a draw, restart with the button right here.",
    tttReset: "Restart",
    tttTurn: "Turn: {player}",
    tttDraw: "Draw! Try again.",
    tttWin: "{player} wins!",
    checkersRulesTitle: "Rules",
    checkersRules1:
      "Checkers is played on an 8x8 board. Red pieces move upward, black pieces move downward diagonally. They can move one diagonal square forward or jump over opponents.",
    checkersRules2:
      "The destination square must be empty. Reaching the last rank crowns a piece so it can move in all directions. The status updates below as turns change.",
    checkersReset: "New Game",
    checkersHint: "Tap your piece to highlight valid moves.",
    checkerRed: "Red",
    checkerBlack: "Black",
    checkersTurn: "Turn: {player}",
    checkersWin: "{player} wins!",
    filters: "Filters",
    filterVeg: "Vegetarian",
    filterSpicy: "Spicy",
    filterCheese: "Cheesy",
    filterDessert: "Dessert",
    groups: "Sections",
    searchPlaceholder: "Search the menu...",
  },
  ru: {
    metaTitle: "HiddenBack — Меню",
    metaDescription: "HiddenBack Cafe — Ялова. Современное, удобное онлайн-меню.",
    introTitle: "Выберите язык",
    navAbout: "О нас",
    navGames: "Игры",
    navMenu: "Меню",
    heroHeadline: "В самом центре города, спрятанное от глаз старое кафе.",
    heroBody1:
      "hiddenback — тайное место в центре Ялова, которое ждет, чтобы его открыли. Наша цель — соединить хороший кофе, домашние десерты и теплую атмосферу в одном месте. От утреннего завтрака до вечернего кофе здесь у каждого часа свой ритм.",
    heroBody2:
      "Здесь меню — больше, чем список блюд, это часть воспоминаний наших гостей. Ниже можно ближе познакомиться с атмосферой и историей hiddenback.",
    article1Title: "Publika • Современная точка встречи в Ялова",
    article1Body:
      "Со временем hiddenback превращается в современное и дружелюбное место встречи в центре Ялова. За одним столом собираются студенты, разработчики, банкиры, юристы и креативщики; здесь встречаются и те, кто хочет поработать, и те, кто хочет спокойно провести вечер с друзьями. Каждый гость находит свой ритм: быстрый эспрессо на ходу, спокойная чашка фильтра с ноутбуком или десерт для вечерней встречи. Подробные описания и уровень кофеина каждого напитка есть в онлайн-меню.",
    article2Title: "Витрина десертов • Готовим каждый день",
    article2Body:
      "Наши чизкейки, брауни, тарты и вафли готовятся свежими каждый день. Десерты созданы так, чтобы сочетаться с кофе — состав и цены удобно посмотреть в онлайн-меню.",
    article3Title: "Атмосфера • Тихие уголки и теплый свет",
    article3Body:
      "hiddenback создан и для работы за ноутбуком, и для разговоров с друзьями. Приглушенный свет, комфортные зоны и спокойная музыка — естественная часть впечатления вместе с меню.",
    instagramTitle: "Кадры из жизни",
    instagramButton: "Открыть Instagram",
    gamesHeading: "Выберите игру и играйте",
    gamesIntro:
      "В разделе Games теперь доступны три игры. Выберите любую выше, прочитайте правила и сразу начинайте играть.",
    snakeTab: "Змейка",
    tttTab: "Крестики-нолики",
    checkersTab: "Шашки",
    snakeScore: "Счёт",
    snakeBest: "Рекорд",
    snakeStatus: "Статус",
    snakeTipTitle: "Подсказка",
    snakeTip1: "Сначала выберите язык, затем откройте Games и запустите игру.",
    snakeTip2: "Скорость начинается медленно и растёт с каждым яблоком.",
    snakeTip3: "Кнопки крупные для телефона, без задержки касания.",
    snakeRestart: "Старт / Сброс",
    snakeControls: "Используйте стрелки/WASD на компьютере или кнопки на телефоне.",
    snakeReadyStatus: "Готово",
    snakeStartedStatus: "Старт",
    snakeStoppedStatus: "Остановлено",
    snakeGameOverStatus: "Игра окончена",
    snakePlayingStatus: "Идёт игра",
    tttRulesTitle: "Правила",
    tttRules1:
      "В крестиках-ноликах цель — выстроить свой символ по горизонтали, вертикали или диагонали на поле 3x3. Ходит X, затем O.",
    tttRules2:
      "Можно нажимать клетки на телефоне или компьютере. Если ничья — перезапустите кнопкой здесь же.",
    tttReset: "Перезапустить",
    tttTurn: "Ход: {player}",
    tttDraw: "Ничья! Попробуйте снова.",
    tttWin: "Победа: {player}!",
    checkersRulesTitle: "Правила",
    checkersRules1:
      "Шашки играются на доске 8x8. Красные ходят вверх, черные вниз по диагонали. Можно пройти на одну диагональ вперёд или перепрыгнуть соперника.",
    checkersRules2:
      "Клетка назначения должна быть пустой. Достигнув последней линии, шашка становится дамкой и может ходить во все стороны. Статус ниже обновляется по ходам.",
    checkersReset: "Новая игра",
    checkersHint: "Нажмите на свою шашку, чтобы увидеть возможные ходы.",
    checkerRed: "Красные",
    checkerBlack: "Чёрные",
    checkersTurn: "Ход: {player}",
    checkersWin: "Победа: {player}!",
    filters: "Фильтры",
    filterVeg: "Вегетарианское",
    filterSpicy: "Острое",
    filterCheese: "Сырное",
    filterDessert: "Десерт",
    groups: "Разделы",
    searchPlaceholder: "Поиск по меню...",
  },
};

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
  { cat: "kahvalti", title: "Tatlı & Tuzlu Ekmek Üstü", price: 220, desc: "Bir dilim krem peynirli, dana jambonlu ve göz yumurtalı; diğer dilim çikolata, muz ve böğürtlenli.", img: itemImg("tatli_ve_tuzlu_ekmek_ustu") },
  { cat: "kahvalti", title: "Çırpılmış Yumurta", price: 180, desc: "Çırpılmış yumurta, beyaz peynir ve ekşi maya ekmek.", img: itemImg("cirpilmis_yumurta") },
  { cat: "kahvalti", title: "Menemen", price: 190, desc: "Yaz domatesiyle menemen, beyaz peynir ve ekşi maya ekmek.", img: itemImg("menemen") },
  { cat: "kahvalti", title: "Omlet", price: 190, desc: "Taze otlu, sebzeli veya peynirli omlet; yanında yeşil salata ve ekşi maya ekmek.", img: itemImg("omlet") },
  { cat: "kahvalti", title: "Kruvasan", price: 180, desc: "Tereyağlı kruvasan.", img: itemImg("kruvasan") },
  { cat: "kahvalti", title: "Kruvasan Çikolata & Çilek", price: 230, desc: "Çikolata ve taze çilekle sunulan kruvasan.", img: itemImg("kruvasan_cikolata_ve_cilek") },
  { cat: "kahvalti", title: "Tavuklu Tost", price: 280, desc: "Ekşi maya ekmek, kremalı tavuk, patates kızartması ve akdeniz yeşillikleri", img: itemImg("tavuklu_tost") },

  // ──────────── BOWL ────────────
  { cat: "bowl", group: "smoothie", title: "Acaí Bowl", price: 220, desc: "Acai özü, muz, böğürtlen, frambuaz ve granola.", img: itemImg("bowl") },
  { cat: "bowl", group: "smoothie", title: "Berry Bowl", price: 200, desc: "Süzme yoğurt, bal, granola ve çilek.", img: itemImg("bowl1") },
  { cat: "bowl", group: "savory", title: "Basmatı Bowl", price: 260, desc: "Izgara tavuk göğsü, basmati pilavı, brokoli, havuç, Akdeniz yeşilliği ve zeytinyağı.", img: itemImg("bowl2") },
  { cat: "bowl", group: "savory", title: "Vegan Bowl", price: 220, desc: "Kavrulmuş nohut, mantar, avokado, bebek turp, Akdeniz yeşilliği, havuç ve zeytinyağı.", img: itemImg("bowl3") },
  { cat: "bowl", group: "savory", title: "Ton Balıklı Bowl", price: 260, desc: "Esmer pirinç, ton balığı, brokoli, havuç, Akdeniz yeşilliği, zeytinyağı ve salatalık turşusu.", img: itemImg("bowl4") },
  { cat: "bowl", group: "savory", title: "Köfte Grill Bowl", price: 260, desc: "Basmati pilavı, ızgara köfte, köz biber, lahana turşusu, Akdeniz yeşilliği, havuç ve zeytinyağı.", img: itemImg("bowl5") },
  { cat: "bowl", group: "savory", title: "Makarna Bowl", price: 220, desc: "Burgu makarna, yoğurt, salatalık turşusu, mısır, Meksika fasulyesi, Akdeniz yeşilliği, havuç ve zeytinyağı.", img: itemImg("bowl6") },
  { cat: "bowl", group: "savory", title: "Acı Tatlı Sos Tavuk Bowl", price: 260, desc: "Arpa şehriye, acı tatlı soslu tavuk göğsü, brokoli, Akdeniz yeşilliği, havuç ve zeytinyağı.", img: itemImg("bowl7") },
  { cat: "bowl", group: "savory", title: "Fresh Bowl", price: 220, desc: "Kinoa, avokado, çilek, havuç, Akdeniz yeşilliği ve zeytinyağı.", img: itemImg("bowl8") },

  // ──────────── LEZZETLER ────────────
  { cat: "lezzetler", title: "Tavuklu Sezar Salata", price: 250, desc: "Izgara tavuk göğsü, taze göbek marul, domates, kruton, sezar sos ve mısır.", img: itemImg("tavuklu_sezar_salata") },
  { cat: "lezzetler", title: "Yeşil Salata", price: 190, desc: "Taze göbek marul, lolorosso, havuç, turp, salatalık, domates ve beyaz peynir.", img: itemImg("yesil_salata") },
  { cat: "lezzetler", title: "Çıtır Tavuk", price: 280, desc: "Panelenmiş jülyen tavuk dilimleri, sweet chili sos, sezar sos ve patates kızartması.", img: itemImg("citir_tavuk") },
  { cat: "lezzetler", title: "Burritos Tavuk Dürüm", price: 280, desc: "Tortilla ekmeğinde tavuk dilimleri, burritos sos, renkli biberler, mantar, mısır, cheddar peyniri, patates kızartması ve Akdeniz yeşilliği.", img: itemImg("burritos_tavuk_durum") },
  { cat: "lezzetler", title: "Fettucine Alfredo", price: 280, desc: "Sotelenmiş tavuk dilimleri, fettuccine makarna, mantar, renkli biberler, pesto sos, krema ve parmesan peyniri.", img: itemImg("fettucine_alfredo") },
  { cat: "lezzetler", title: "Köri Soslu Tavuk", price: 290, desc: "Köri soslu tavuk, mantar, renkli biberler, basmati pilav ve Akdeniz yeşillikleri.", img: itemImg("kori_soslu_tavuk") },
  { cat: "lezzetler", title: "Sandviç", price: 220, desc: "Ekşi maya ekmek, cheddar, taze kaşar, krem peynir, dana jambon, haşlanmış yumurta ve lolorosso.", img: itemImg("sandvic") },
  { cat: "lezzetler", title: "Ekmek Üstü", price: 240, desc: "Ekşi maya ekmek üstü krem peynir, çırpılmış yumurta ve avokado.", img: itemImg("ekmek_ustu") },
  { cat: "lezzetler", title: "Patates Tava", price: 160, desc: "Klasik kızarmış patates.", img: itemImg("patates_tava") },

  // ──────────── TATLILAR ────────────
  { cat: "tatli", title: "Çikolata Dolgulu Tart", price: 190, desc: "Yoğun çikolata dolgulu tart.", img: itemImg("cikolata_dolgulu_tart") },
  { cat: "tatli", title: "Cevizli Brownie", price: 230, desc: "Ceviz parçalarıyla brownie.", img: itemImg("cevizli_brownie") },
  { cat: "tatli", title: "Cheesecake", price: 230, desc: "Frambuaz, yaban mersini, limon, lotus veya süt reçeli seçenekleriyle cheesecake.", img: itemImg("cheesecake") },
  { cat: "tatli", title: "Tiramisu", price: 230, desc: "Klasik mascarpone kremalı tiramisu.", img: itemImg("tiramisu") },
  { cat: "tatli", title: "Waffle", price: 240, desc: "Muz, çilek, yer fıstığı eklenebilir; hamur tarçın içerir.", img: itemImg("waffle") },
  { cat: "tatli", title: "Magnolia", price: 230, desc: "Çilek, muz, çikolata, oreo veya karışık seçenekli magnolia.", img: itemImg("magnolia") },
  { cat: "tatli", title: "Brownie Cookie (2 Adet)", price: 190, desc: "İki adet brownie cookie.", img: itemImg("brownie_cookie_2_adet") },
  { cat: "tatli", title: "Çikolatalı Sufle", price: 240, desc: "Sıcak çikolatalı sufle.", img: itemImg("cikolatali_sufle") },
  { cat: "tatli", title: "San Sebastian Cheesecake", price: 240, desc: "Karamelize yüzeyli San Sebastian cheesecake.", img: itemImg("san_sebastian_cheesecake") },
  { cat: "tatli", title: "Brownie Pasta", price: 260, desc: "İki dilim brownie arasında pasta kreması ve çilek dilimleri.", img: itemImg("brownie_pasta") },
  { cat: "tatli", title: "Şekersiz Hurmalı İncirli Kek", price: 190, desc: "Şekersiz hurmalı ve incirli kek.", img: itemImg("sekersiz_hurmali_i_ncirli_kek") },
  { cat: "tatli", title: "Tart", price: 210, desc: "Orman meyveli veya çikolata dolgulu tart.", img: itemImg("tart") },
  { cat: "tatli", title: "Pancake", price: 230, desc: "Üç adet pancake, böğürtlen, çilek, muz ve çikolatayla.", img: itemImg("pancake") },
  { cat: "tatli", title: "Damla Çikolatalı Cevizli Kurabiye", price: 180, desc: "Üç adet kurabiye ile servis edilir.", img: itemImg("damla_cikolatali_cevizli_kurabiye") },
  { cat: "tatli", title: "Hidden Dream", price: 230, desc: "Oreo tabanı, hidden krema, akışkan çikolata ve fındık parçaları.", img: itemImg("hidden_dream") },
  { cat: "tatli", title: "Meyveli Çikolatalı Brownie", price: 240, desc: "Brownie parçaları, lotus kırığı, damla çikolata, çilek, muz ve çikolata sosu.", img: itemImg("meyveli_cikolatali_brownie") },
  { cat: "tatli", title: "Hidden Bowl", price: 240, desc: "Pastacı kreması, lotus kırıkları, damla çikolata, pirinç patlakları, çilek, muz ve çikolata sosu.", img: itemImg("hidden_bowl") },
  { cat: "tatli", title: "Profiterol", price: 220, desc: "Profiterol topları, pastacı kreması, çikolata ve Antep fıstığı parçacıkları.", img: itemImg("profiterol") },
  { cat: "tatli", title: "Chocolate Mousse", price: 210, desc: "Çikolatalı mus, böğürtlen ve çilek ile servis edilir.", img: itemImg("chocolate_mousse") },
  { cat: "tatli", title: "Kruvasan", price: 180, desc: "Tereyağlı kruvasan tatlı servisi.", img: itemImg("kruvasan") },
  { cat: "tatli", title: "Kruvasan Çikolata & Çilek", price: 230, desc: "Çikolata ve çilekle tatlandırılmış kruvasan.", img: itemImg("kruvasan_cikolata_ve_cilek") },

  // ──────────── MATCHA ────────────
  { cat: "matcha", title: "Matcha Latte", price: 210, desc: "Klasik sıcak matcha latte.", img: itemImg("matcha_latte") },
  { cat: "matcha", title: "Ice Matcha Latte", price: 210, desc: "Buzlu matcha latte.", img: itemImg("ice_matcha_latte") },
  { cat: "matcha", title: "Strawberry Matcha", price: 220, desc: "Çilek aromalı matcha.", img: itemImg("strawberry_matcha") },
  { cat: "matcha", title: "Orange Mango Matcha", price: 220, desc: "Portakal ve mango ile matcha.", img: itemImg("orange_mango_matcha") },

  // ──────────── SOĞUK İÇECEK ────────────
  { cat: "soguk", group: "sogukicecek", title: "Coca Cola", price: 120, desc: "Zero ve şekersiz seçenekleriyle.", img: itemImg("coca_cola") },
  { cat: "soguk", group: "sogukicecek", title: "Fanta", price: 120, desc: "Soğuk gazlı içecek.", img: itemImg("fanta") },
  { cat: "soguk", group: "sogukicecek", title: "Sprite", price: 120, desc: "Limon aromalı gazlı içecek.", img: itemImg("sprite") },
  { cat: "soguk", group: "sogukicecek", title: "Fuse Tea", price: 120, desc: "Şeftali, limon, mango ve ananas seçenekleriyle.", img: itemImg("fuse_tea") },
  { cat: "soguk", group: "sogukicecek", title: "Cappy", price: 120, desc: "Vişne, şeftali ve karışık meyve seçenekleriyle.", img: itemImg("cappy") },
  { cat: "soguk", group: "sogukicecek", title: "Burn", price: 160, desc: "Enerji içeceği.", img: itemImg("burn") },
  { cat: "soguk", group: "sogukicecek", title: "Cam Şişe Su", price: 50, desc: "Cam şişede su.", img: itemImg("cam_sise_su") },
  { cat: "soguk", group: "sogukicecek", title: "Minera Maden Suyu", price: 100, desc: "Doğal maden suyu.", img: itemImg("minera_maden_suyu") },
  { cat: "soguk", group: "sogukicecek", title: "Minera Limon Aromalı", price: 100, desc: "Limon aromalı maden suyu.", img: itemImg("minera_limon_aromali") },
  { cat: "soguk", group: "sogukicecek", title: "Minera Elma Aromalı", price: 100, desc: "Elma aromalı maden suyu.", img: itemImg("minera_elma_aromali") },
  { cat: "soguk", group: "sogukicecek", title: "Churchill", price: 120, desc: "Ferahlık veren karışım.", img: itemImg("churchill") },
  { cat: "soguk", group: "sogukicecek", title: "Ayran", price: 90, desc: "Serinletici ayran.", img: itemImg("ayran") },
  { cat: "soguk", group: "sogukicecek", title: "Taze Portakal Suyu", price: 210, desc: "Taze sıkılmış portakal suyu.", img: itemImg("taze_portakal_suyu") },
  { cat: "soguk", group: "sogukicecek", title: "Redbull", price: 190, desc: "Enerji içeceği.", img: itemImg("redbull") },
  { cat: "soguk", group: "sogukicecek", title: "Minera Karpuz Çilek Aromalı", price: 100, desc: "Karpuz ve çilek aromalı maden suyu.", img: itemImg("minera_karpuz_cilek_aromali") },

  // ──────────── SOĞUK KAHVELER ────────────
  { cat: "soguk", group: "coldcoffee", title: "Ice White Mocha", price: 210, desc: "Buzlu beyaz çikolatalı mocha.", img: itemImg("ice_white_mocha") },
  { cat: "soguk", group: "coldcoffee", title: "Ice Americano", price: 170, desc: "Serinletici buzlu Americano.", img: itemImg("ice_americano") },
  { cat: "soguk", group: "coldcoffee", title: "Ice Latte", price: 210, desc: "Buzlu latte.", img: itemImg("ice_latte") },
  { cat: "soguk", group: "coldcoffee", title: "Ice Mocha", price: 210, desc: "Buzlu mocha.", img: itemImg("ice_mocha") },
  { cat: "soguk", group: "coldcoffee", title: "Chocolate Frappe", price: 210, desc: "Çikolatalı frappe.", img: itemImg("chocolate_frappe") },
  { cat: "soguk", group: "coldcoffee", title: "Caramel Frappe", price: 210, desc: "Karamelli frappe.", img: itemImg("caramel_frappe") },
  { cat: "soguk", group: "coldcoffee", title: "Ice Latte Karamel", price: 210, desc: "Karamelli buzlu latte.", img: itemImg("ice_latte_karamel") },
  { cat: "soguk", group: "coldcoffee", title: "Ice Latte Vanilya", price: 210, desc: "Vanilyalı buzlu latte.", img: itemImg("ice_latte_vanilya") },
  { cat: "soguk", group: "coldcoffee", title: "Ice Spanish Latte", price: 210, desc: "Tatlı soğuk Spanish latte.", img: itemImg("ice_spanish_latte") },
  { cat: "soguk", group: "coldcoffee", title: "Ice Caramel Macchiato", price: 210, desc: "Buzlu karamelli macchiato.", img: itemImg("ice_caramel_macchiato") },
  { cat: "soguk", group: "coldcoffee", title: "Ice Latte Fındık", price: 210, desc: "Fındık aromalı buzlu latte.", img: itemImg("ice_latte_findik") },
  { cat: "soguk", group: "coldcoffee", title: "Affogato", price: 230, desc: "Espresso ve dondurma ile affogato.", img: itemImg("affogato") },
  { cat: "soguk", group: "coldcoffee", title: "Ekstra Şurup", price: 30, desc: "Kahve şurupları.", img: itemImg("ekstra_surup") },
  { cat: "soguk", group: "coldcoffee", title: "Ice Flat White", price: 220, desc: "Buzlu flat white.", img: itemImg("ice_flat_white") },
  { cat: "soguk", group: "coldcoffee", title: "Ice Cortado", price: 220, desc: "Buzlu cortado.", img: itemImg("ice_cortado") },
  { cat: "soguk", group: "coldcoffee", title: "Ice Pumpkin Latte (Yeni)", price: 210, desc: "Balkabaklı buzlu latte.", img: itemImg("ice_pumpkin_latte_yeni") },
  { cat: "soguk", group: "coldcoffee", title: "Cookie Latte", price: 210, desc: "Kurabiye aromalı buzlu latte.", img: itemImg("cookie_latte") },

  // ──────────── MILKSHAKE ────────────
  { cat: "soguk", group: "milkshake", title: "Milkshake Çilek", price: 220, desc: "Çilekli milkshake.", img: itemImg("milkshake_cilek") },
  { cat: "soguk", group: "milkshake", title: "Milkshake Çikolata", price: 220, desc: "Çikolatalı milkshake.", img: itemImg("milkshake_cikolata") },
  { cat: "soguk", group: "milkshake", title: "Milkshake Oreo", price: 220, desc: "Oreo parçalı milkshake.", img: itemImg("milkshake_oreo") },
  { cat: "soguk", group: "milkshake", title: "Milkshake Muz", price: 220, desc: "Muzlu milkshake.", img: itemImg("milkshake_muz") },

  // ──────────── FROZEN ────────────
  { cat: "soguk", group: "frozen", title: "Frozen Karpuz", price: 210, desc: "Karpuzlu frozen.", img: itemImg("frozen_karpuz") },
  { cat: "soguk", group: "frozen", title: "Frozen Böğürtlen", price: 210, desc: "Böğürtlenli frozen.", img: itemImg("frozen_bogurtlen") },
  { cat: "soguk", group: "frozen", title: "Frozen Çilek", price: 210, desc: "Çilekli frozen.", img: itemImg("frozen_cilek") },

  // ──────────── ALKOLSÜZ KOKTEYLLER ────────────
  { cat: "soguk", group: "kokteyl", title: "Mojito", price: 210, desc: "Mojito şurubu, esmer şeker, limon suyu, sprite, maden suyu ve taze nane.", img: itemImg("mojito") },
  { cat: "soguk", group: "kokteyl", title: "Sex on The Beach", price: 210, desc: "Şeftali şurubu, ananas suyu, taze portakal suyu ve grenadin.", img: itemImg("sex_on_the_beach") },
  { cat: "soguk", group: "kokteyl", title: "Purple Rain", price: 210, desc: "Ananas suyu, böğürtlen şurubu, passion fruit ve turunç aroması.", img: itemImg("purple_rain") },
  { cat: "soguk", group: "kokteyl", title: "Cool Lime (Yeni)", price: 210, desc: "Ferahlatıcı cool lime.", img: itemImg("cool_lime_yeni") },

  // ──────────── SICAK İÇECEK ────────────
  { cat: "sicak", group: "sicakicecek", title: "Demleme Çay", price: 50, desc: "Taze demlenmiş çay.", img: itemImg("demleme_cay") },
  { cat: "sicak", group: "sicakicecek", title: "Demleme Çay (Fincan)", price: 70, desc: "Fincanda demleme çay.", img: itemImg("demleme_cay_fincan") },
  { cat: "sicak", group: "kahve", title: "Filtre Kahve", price: 160, desc: "Klasik filtre kahve.", img: itemImg("filtre_kahve") },
  { cat: "sicak", group: "kahve", title: "Espresso", price: 100, desc: "Yoğun espresso shot.", img: itemImg("espresso") },
  { cat: "sicak", group: "kahve", title: "Double Espresso", price: 120, desc: "Çift shot espresso.", img: itemImg("double_espresso") },
  { cat: "sicak", group: "kahve", title: "Latte Macchiato", price: 180, desc: "Süt ve espresso katmanları.", img: itemImg("latte_macchiato") },
  { cat: "sicak", group: "kahve", title: "Caramel Macchiato", price: 180, desc: "Karamelli macchiato.", img: itemImg("caramel_macchiato") },
  { cat: "sicak", group: "kahve", title: "Americano", price: 160, desc: "Espresso ve sıcak su.", img: itemImg("americano") },
  { cat: "sicak", group: "kahve", title: "Cappuccino", price: 180, desc: "Espresso ve süt köpüğü.", img: itemImg("cappuccino") },
  { cat: "sicak", group: "kahve", title: "Cafe Latte", price: 180, desc: "Klasik latte.", img: itemImg("cafe_latte") },
  { cat: "sicak", group: "kahve", title: "Mocha", price: 190, desc: "Çikolatalı mocha.", img: itemImg("mocha") },
  { cat: "sicak", group: "kahve", title: "White Chocolate Mocha", price: 190, desc: "Beyaz çikolatalı mocha.", img: itemImg("white_chocolate_mocha") },
  { cat: "sicak", group: "kahve", title: "Flat White", price: 180, desc: "Yoğun kahveli flat white.", img: itemImg("flat_white") },
  { cat: "sicak", group: "kahve", title: "Cortado", price: 180, desc: "Espresso ve az süt.", img: itemImg("cortado") },
  { cat: "sicak", group: "kahve", title: "Türk Kahvesi", price: 130, desc: "Klasik Türk kahvesi.", img: itemImg("turk_kahvesi") },
  { cat: "sicak", group: "kahve", title: "Türk Kahvesi (Double)", price: 170, desc: "Çift porsiyon Türk kahvesi.", img: itemImg("turk_kahvesi_double") },
  { cat: "sicak", group: "sicakicecek", title: "Sıcak Çikolata", price: 180, desc: "Yoğun sıcak çikolata.", img: itemImg("sicak_cikolata") },
  { cat: "sicak", group: "sicakicecek", title: "Sahlep", price: 180, desc: "Kışın vazgeçilmezi sahlep.", img: itemImg("sahlep") },
  { cat: "sicak", group: "kahve", title: "Espresso Shot", price: 50, desc: "Tek shot espresso.", img: itemImg("espresso_shot") },
  { cat: "sicak", group: "sicakicecek", title: "Fincan Süt", price: 120, desc: "Sıcak süt.", img: itemImg("fincan_sut") },
  { cat: "sicak", group: "kahve", title: "Sütlü Filtre Kahve", price: 190, desc: "Süt eklenmiş filtre kahve.", img: itemImg("sutlu_filtre_kahve") },
  { cat: "sicak", group: "sicakicecek", title: "Ballı Fincan Süt", price: 160, desc: "Bal ile sıcak süt.", img: itemImg("balli_fincan_sut") },
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
const introOverlay = document.getElementById("intro-overlay");
const introPanel = document.getElementById("intro-panel");
const languageButtons = document.querySelectorAll(".intro-lang-btn");

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
let introStarted = false;
let selectedLanguage = document.documentElement.lang || "tr";
let snakeStatusKey = "snakeReadyStatus";
let tttStatusState = { key: "tttTurn", vars: { player: "X" } };
let checkersStatusState = { key: "checkersTurn", vars: { player: t("checkerRed") } };

function t(key, vars = {}) {
  const lang = TRANSLATIONS[selectedLanguage] ? selectedLanguage : "tr";
  const fallback = TRANSLATIONS.tr[key] || key;
  const template = TRANSLATIONS[lang][key] || fallback;
  return template.replace(/\{(\w+)\}/g, (_, match) => {
    return Object.prototype.hasOwnProperty.call(vars, match) ? vars[match] : `{${match}}`;
  });
}

function applyTranslations() {
  document.title = t("metaTitle");
  const metaDesc = document.getElementById("meta-description");
  if (metaDesc) metaDesc.setAttribute("content", t("metaDescription"));

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    el.textContent = t(key);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    el.setAttribute("placeholder", t(key));
  });

  updateSnakeHUD();
  renderTttStatus();
  updateCheckersStatus();
}

const TAG_LABELS = {
  veg: { labelKey: "filterVeg", color: "text-emerald-600" },
  spicy: { labelKey: "filterSpicy", color: "text-red-600" },
  cheese: { labelKey: "filterCheese", color: "text-amber-600" },
  dessert: { labelKey: "filterDessert", color: "text-pink-600" },
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
  if (statusKey) snakeStatusKey = statusKey;
  if (snakeScoreEl) snakeScoreEl.textContent = snakeState.score;
  if (snakeBestEl) snakeBestEl.textContent = snakeState.best;
  if (snakeStatusEl) snakeStatusEl.textContent = t(snakeStatusKey);
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
  if (tttStatus) tttStatus.textContent = t(tttStatusState.key, tttStatusState.vars);
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
    ? { player: checkersCurrent === "r" ? t("checkerRed") : t("checkerBlack") }
    : checkersStatusState.vars;
  checkersStatusState = { key: checkersStatusState.key || "checkersTurn", vars };
  if (checkersStatusEl) checkersStatusEl.textContent = t(checkersStatusState.key, checkersStatusState.vars);
}

function resetCheckers() {
  checkersBoard = buildInitialCheckersBoard();
  checkersCurrent = "r";
  checkersSelected = null;
  checkersMoves = [];
  checkersFinished = false;
  checkersStatusState = { key: "checkersTurn", vars: { player: t("checkerRed") } };
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
      vars: { player: redLeft ? t("checkerRed") : t("checkerBlack") },
    };
  } else {
    checkersStatusState = {
      key: "checkersTurn",
      vars: { player: checkersCurrent === "r" ? t("checkerRed") : t("checkerBlack") },
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

function setLanguage(lang) {
  selectedLanguage = lang;
  document.documentElement.lang = lang;
  document.documentElement.dataset.lang = lang;
  applyTranslations();
}

function launchIntroFlow(lang) {
  if (!introOverlay || introStarted) return;

  introStarted = true;
  setLanguage(lang);

  introPanel?.classList.add("intro-panel-hide");

  introOverlay.classList.add("intro-reveal");
  document.body.classList.remove("intro-active");

  setTimeout(() => {
    introOverlay?.remove();
  }, 400);
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
    stopSnakeGame("Durdu");
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
    stopSnakeGame("Durdu");
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
            return meta ? `<span class="px-2 py-0.5 rounded-full bg-gray-100 ${meta.color}">${t(meta.labelKey)}</span>` : "";
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
    .map(([key]) => (TAG_LABELS[key] ? t(TAG_LABELS[key].labelKey) : null))
    .filter(Boolean);

  const extraParts = [];

  if (item.cat === "kahve" && item.caffeine) {
    extraParts.push(`≈ ${item.caffeine} kafein`);
  }

  if (activeKeys.length) {
    extraParts.push(`${t("filters")}: ${activeKeys.join(", ")}`);
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

applyTranslations();
initIntroOverlay();
// Initial render
setCategory(activeCategory);
updateMenuArrow();
updateBackToTop();
