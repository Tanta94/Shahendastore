<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Shahenda Store</title>
  <style>
    :root {
      color-scheme: dark;
      --bg: #070707;
      --panel: rgba(20, 20, 20, 0.94);
      --panel-soft: rgba(255, 255, 255, 0.05);
      --text: #f5f2ed;
      --muted: #b5aca2;
      --accent: #d4af37;
      --accent-soft: rgba(212, 175, 55, 0.15);
      --shadow: 0 28px 80px rgba(0, 0, 0, 0.24);
      --radius: 28px;
      --transition: 260ms ease;
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    html, body {
      min-height: 100%;
      background: radial-gradient(circle at top left, rgba(212, 175, 55, 0.12), transparent 24%),
                  radial-gradient(circle at bottom right, rgba(255, 255, 255, 0.05), transparent 20%),
                  var(--bg);
      color: var(--text);
      font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      line-height: 1.5;
    }

    body {
      padding: 32px;
    }

    .page {
      max-width: 1320px;
      margin: 0 auto;
      display: grid;
      gap: 32px;
    }

    header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 24px;
      padding: 28px 32px;
      border: 1px solid rgba(255,255,255,0.06);
      border-radius: var(--radius);
      background: linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01));
      box-shadow: var(--shadow);
      backdrop-filter: blur(16px);
    }

    .brand {
      display: grid;
      gap: 14px;
      max-width: 560px;
    }

    .brand h1 {
      font-size: clamp(2.5rem, 4vw, 4rem);
      letter-spacing: 0.18em;
      text-transform: uppercase;
      line-height: 1;
    }

    .brand p {
      color: var(--muted);
      font-size: 1rem;
      max-width: 38rem;
    }

    .kpi {
      display: flex;
      flex-wrap: wrap;
      gap: 16px;
    }

    .kpi-item {
      min-width: 170px;
      padding: 18px 22px;
      border-radius: 20px;
      background: rgba(255,255,255,0.04);
      border: 1px solid rgba(255,255,255,0.06);
      text-align: left;
    }

    .kpi-item span {
      display: block;
      font-size: 1.85rem;
      color: var(--accent);
      font-weight: 700;
    }

    .kpi-item small {
      color: var(--muted);
      font-size: 0.95rem;
      display: block;
      margin-top: 6px;
    }

    .toolbar {
      display: grid;
      grid-template-columns: minmax(0, 1fr) auto;
      gap: 18px;
      align-items: center;
      padding: 18px 24px;
      border-radius: var(--radius);
      background: rgba(255,255,255,0.03);
      border: 1px solid rgba(255,255,255,0.06);
      box-shadow: 0 20px 50px rgba(0,0,0,0.14);
      backdrop-filter: blur(16px);
    }

    .filters {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
    }

    .filter-pill {
      padding: 10px 18px;
      border-radius: 999px;
      border: 1px solid rgba(255,255,255,0.12);
      background: rgba(255,255,255,0.04);
      color: var(--text);
      cursor: pointer;
      transition: transform var(--transition), border-color var(--transition), background var(--transition);
      font-size: 0.95rem;
    }

    .filter-pill.active {
      border-color: rgba(212,175,55,0.45);
      background: rgba(212,175,55,0.16);
      color: #fff;
      transform: translateY(-1px);
    }

    .contact-btn {
      padding: 14px 22px;
      border-radius: 18px;
      border: 1px solid rgba(255,255,255,0.1);
      background: linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02));
      color: var(--text);
      cursor: pointer;
      font-weight: 700;
      transition: transform var(--transition), border-color var(--transition), background var(--transition);
      white-space: nowrap;
    }

    .contact-btn:hover {
      transform: translateY(-1px);
      border-color: rgba(212,175,55,0.35);
      background: rgba(255,255,255,0.08);
    }

    .empty-state {
      grid-column: 1 / -1;
      color: var(--muted);
      text-align: center;
      font-size: 1rem;
      padding: 36px 0;
    }

    .overlay {
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,0.75);
      display: none;
      align-items: center;
      justify-content: center;
      z-index: 50;
      padding: 20px;
      backdrop-filter: blur(6px);
    }

    .overlay.open {
      display: flex;
    }

    .modal {
      width: min(520px, 100%);
      border-radius: 28px;
      background: rgba(15, 15, 15, 0.98);
      border: 1px solid rgba(255,255,255,0.08);
      box-shadow: 0 36px 90px rgba(0,0,0,0.45);
      overflow: hidden;
    }

    .modal-header {
      padding: 26px 28px 16px;
      border-bottom: 1px solid rgba(255,255,255,0.06);
    }

    .modal-header h3 {
      font-size: 1.5rem;
      margin-bottom: 6px;
      letter-spacing: 0.02em;
    }

    .modal-header p {
      color: var(--muted);
      font-size: 0.96rem;
    }

    .modal-body {
      padding: 24px 28px 28px;
      display: grid;
      gap: 18px;
    }

    .modal-body label {
      font-size: 0.92rem;
      color: var(--muted);
      display: block;
      margin-bottom: 6px;
    }

    .modal-body input,
    .modal-body select {
      width: 100%;
      background: rgba(255,255,255,0.04);
      border: 1px solid rgba(255,255,255,0.1);
      color: var(--text);
      padding: 14px 16px;
      border-radius: 18px;
      font-size: 1rem;
      outline: none;
    }

    .modal-body .option-group {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
    }

    .modal-body .option-group button {
      flex: 1 1 calc(50% - 10px);
      min-width: 140px;
      padding: 14px 16px;
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 18px;
      background: rgba(255,255,255,0.04);
      color: var(--text);
      cursor: pointer;
      transition: border-color var(--transition), background var(--transition);
    }

    .modal-body .option-group button.active {
      background: rgba(212,175,55,0.16);
      border-color: rgba(212,175,55,0.45);
      color: #fff;
    }

    .modal-actions {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      justify-content: flex-end;
      margin-top: 6px;
    }

    .modal-actions button {
      padding: 14px 18px;
      border-radius: 18px;
      border: none;
      cursor: pointer;
      font-weight: 700;
      transition: transform var(--transition), box-shadow var(--transition);
    }

    .modal-actions .cancel-btn {
      background: rgba(255,255,255,0.06);
      color: var(--text);
    }

    .modal-actions .complete-btn {
      background: linear-gradient(135deg, rgba(212,175,55,0.96), rgba(255,216,121,0.86));
      color: #09090a;
    }

    .modal-actions button:hover {
      transform: translateY(-1px);
    }

    .modal-footer {
      border-top: 1px solid rgba(255,255,255,0.06);
      padding: 16px 28px;
      color: var(--muted);
      font-size: 0.95rem;
    }

    @media (max-width: 880px) {
      body {
        padding: 20px;
      }
      header {
        padding: 24px;
      }
      .toolbar {
        grid-template-columns: 1fr;
      }
      .modal-body .option-group button {
        flex: 1 1 100%;
      }
    }

    @media (max-width: 640px) {
      .sizes {
        gap: 8px;
      }
      .sizes button {
        flex: 1 1 46%;
      }
    }

    .card {
      position: relative;
      overflow: hidden;
      border-radius: 32px;
      border: 1px solid rgba(255,255,255,0.06);
      padding: 26px;
      background: linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01));
      box-shadow: var(--shadow);
      transition: transform var(--transition), border-color var(--transition), box-shadow var(--transition);
    }

    .card:hover {
      transform: translateY(-6px);
      border-color: rgba(212,175,55,0.35);
      box-shadow: 0 36px 90px rgba(0,0,0,0.32);
    }

    .card::before {
      content: "";
      position: absolute;
      inset: 0;
      pointer-events: none;
      background: radial-gradient(circle at top right, rgba(212,175,55,0.08), transparent 28%),
                  radial-gradient(circle at bottom left, rgba(255,255,255,0.06), transparent 18%);
      opacity: 0;
      transition: opacity var(--transition);
    }

    .card:hover::before {
      opacity: 1;
    }

    .card-visual {
      position: relative;
      width: 100%;
      aspect-ratio: 4 / 5;
      border-radius: 28px;
      overflow: hidden;
      margin-bottom: 22px;
      background: radial-gradient(circle at 40% 20%, rgba(255,255,255,0.18), transparent 22%),
                  linear-gradient(180deg, rgba(56, 54, 51, 0.16) 0%, rgba(16, 15, 15, 0.95) 100%);
      display: grid;
      place-items: center;
    }

    .visual-shape {
      width: 72%;
      height: 72%;
      border-radius: 24px;
      position: relative;
      background: linear-gradient(145deg, rgba(216,179,72,0.18), rgba(255,221,114,0.04));
      box-shadow: inset 0 0 0 1px rgba(255,255,255,0.08), 0 28px 60px rgba(0,0,0,0.28);
      overflow: hidden;
    }

    .visual-shape::before,
    .visual-shape::after {
      content: "";
      position: absolute;
      border-radius: 999px;
      background: rgba(255,255,255,0.12);
    }

    .visual-shape::before {
      width: 28%;
      height: 22%;
      top: 8%;
      left: 12%;
      filter: blur(1px);
    }

    .visual-shape::after {
      width: 36%;
      height: 26%;
      bottom: 12%;
      right: 8%;
      filter: blur(1.5px);
    }

    .bottle {
      position: absolute;
      inset: 12% 16%;
      display: grid;
      align-items: center;
      justify-items: center;
      transform: translateY(6%);
    }

    .bottle::before,
    .bottle::after {
      content: "";
      position: absolute;
      border-radius: 999px;
      background: linear-gradient(180deg, rgba(255,255,255,0.55), rgba(255,255,255,0.06));
      filter: blur(0.5px);
    }

    .bottle::before {
      width: 64%;
      height: 46%;
      top: 8%;
      left: 18%;
    }

    .bottle::after {
      width: 42%;
      height: 16%;
      bottom: 0;
      left: 29%;
      border-radius: 20px;
    }

    .bottle-inner {
      position: relative;
      width: 54%;
      height: 52%;
      border-radius: 30px 30px 20px 20px;
      background: linear-gradient(180deg, rgba(212,175,55,0.22), rgba(0,0,0,0.18));
      border: 1px solid rgba(255,255,255,0.14);
      overflow: hidden;
      box-shadow: inset 0 0 0 1px rgba(255,255,255,0.05);
    }

    .bottle-inner::before {
      content: "";
      position: absolute;
      inset: 12% 10% 22% 10%;
      background: linear-gradient(180deg, rgba(255,255,255,0.45), rgba(255,255,255,0.06));
      border-radius: 18px;
      mix-blend-mode: screen;
    }

    .bottle-top {
      position: absolute;
      top: -10%;
      left: 22%;
      width: 56%;
      height: 18%;
      border-radius: 16px;
      background: linear-gradient(180deg, rgba(255,255,255,0.8), rgba(255,255,255,0.16));
      border: 1px solid rgba(255,255,255,0.13);
      box-shadow: 0 6px 20px rgba(0,0,0,0.18);
    }

    .bottle-label {
      position: absolute;
      bottom: 16%;
      left: 50%;
      transform: translateX(-50%);
      width: 70%;
      height: 18%;
      border-radius: 999px;
      background: rgba(255,255,255,0.08);
      display: grid;
      place-items: center;
      font-size: 0.72rem;
      letter-spacing: 0.2em;
      color: rgba(255,255,255,0.85);
      text-transform: uppercase;
    }

    .card-title {
      font-size: 1.18rem;
      font-weight: 700;
      margin-bottom: 10px;
    }

    .card-subtitle {
      color: var(--muted);
      font-size: 0.95rem;
      line-height: 1.65;
      min-height: 3.7em;
      margin-bottom: 18px;
    }

    .price {
      display: inline-flex;
      align-items: baseline;
      gap: 6px;
      font-weight: 700;
      margin-bottom: 18px;
    }

    .price span {
      font-size: 1.65rem;
      letter-spacing: 0.02em;
    }

    .price small {
      color: var(--muted);
      font-size: 0.95rem;
    }

    .sizes {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin-bottom: 20px;
    }

    .sizes button {
      flex: 1 1 calc(33.333% - 8px);
      min-width: 88px;
      background: rgba(255,255,255,0.04);
      border: 1px solid rgba(255,255,255,0.08);
      color: var(--text);
      padding: 12px 14px;
      border-radius: 18px;
      cursor: pointer;
      transition: transform var(--transition), border-color var(--transition), background var(--transition), color var(--transition);
      font-size: 0.95rem;
    }

    .sizes button.active {
      background: rgba(212,175,55,0.15);
      border-color: rgba(212,175,55,0.45);
      color: #fff;
      transform: translateY(-1px);
    }

    .sizes button:hover {
      border-color: rgba(212,175,55,0.28);
    }

    .buy {
      display: inline-flex;
      width: 100%;
      justify-content: center;
      align-items: center;
      gap: 10px;
      padding: 14px 18px;
      border: none;
      border-radius: 18px;
      background: linear-gradient(135deg, rgba(212,175,55,0.96), rgba(255,216,121,0.86));
      color: #09090a;
      font-weight: 700;
      letter-spacing: 0.02em;
      cursor: pointer;
      text-decoration: none;
      transition: transform var(--transition), box-shadow var(--transition);
    }

    .buy:hover {
      transform: translateY(-2px);
      box-shadow: 0 18px 38px rgba(212,175,55,0.26);
    }

    .footer-note {
      text-align: center;
      color: var(--muted);
      font-size: 0.94rem;
      padding: 14px 8px;
    }

    @media (max-width: 880px) {
      body {
        padding: 20px;
      }
      header {
        padding: 24px;
      }
    }

    @media (max-width: 640px) {
      .sizes {
        gap: 8px;
      }
      .sizes button {
        flex: 1 1 46%;
      }
    }
  </style>
</head>
<body>
  <section class="page">
    <header>
      <div class="brand">
        <p style="letter-spacing: 0.24em; color: var(--accent); text-transform: uppercase; font-weight: 700;">Shahenda Store</p>
        <h1>Luxury perfume, designed for every moment.</h1>
        <p>Discover a premium collection of iconic scents crafted to feel intimate, bold, and unforgettable. Each product is presented with a refined, modern aesthetic that embodies elegance.</p>
      </div>
      <div class="kpi">
        <div class="kpi-item">
          <span>20</span>
          <small>Curated scents</small>
        </div>
        <div class="kpi-item">
          <span>24/7</span>
          <small>Quick WhatsApp orders</small>
        </div>
        <div class="kpi-item">
          <span>100%</span>
          <small>Premium packaging</small>
        </div>
      </div>
    </header>

    <div class="toolbar">
      <div class="filters" id="filterGroup"></div>
      <button type="button" class="contact-btn" id="contactBtn">Contact Us</button>
    </div>

    <div class="grid" id="productGrid"></div>

    <div class="footer-note">All products redirect to WhatsApp for a seamless luxury order experience.</div>
  </section>

  <div class="overlay" id="orderOverlay" aria-hidden="true">
    <div class="modal" role="dialog" aria-modal="true" aria-labelledby="orderTitle">
      <div class="modal-header">
        <h3 id="orderTitle">Complete your order</h3>
        <p>Finish your luxury purchase and send it instantly via WhatsApp.</p>
      </div>
      <div class="modal-body">
        <div>
          <label for="orderProduct">Product</label>
          <input id="orderProduct" type="text" readonly />
        </div>
        <div>
          <label for="orderSize">Size</label>
          <input id="orderSize" type="text" readonly />
        </div>
        <div>
          <label for="orderPrice">Price</label>
          <input id="orderPrice" type="text" readonly />
        </div>
        <div>
          <label for="orderAddress">Delivery address</label>
          <input id="orderAddress" type="text" placeholder="Enter your address" />
        </div>
        <div>
          <label>Bottle type</label>
          <div class="option-group" id="bottleOptions">
            <button type="button" class="active" data-type="Original Bottle">Original Bottle</button>
            <button type="button" data-type="Refill / Inspired Version">Refill / Inspired Version</button>
          </div>
        </div>
        <div class="modal-actions">
          <button type="button" class="cancel-btn" id="cancelOrder">Cancel</button>
          <button type="button" class="complete-btn" id="completeOrder">Complete Order</button>
        </div>
      </div>
      <div class="modal-footer">Your details are used only to place the order via WhatsApp.</div>
    </div>
  </div>

  <script>
    const number = '201110511138';
    const categories = ['All', 'Women', 'Men', 'Unisex'];
    const products = [
      {name: 'Baccarat Rouge', price: 1550, category: 'Unisex', desc: 'A luminous fusion of amber and rose for a captivating evening signature.'},
      {name: 'Khamra', price: 1380, category: 'Women', desc: 'A warm oriental creation with notes of amber, saffron, and dark florals.'},
      {name: 'Libre', price: 1420, category: 'Women', desc: 'A bold, floral-oriental scent balancing lavender and orange blossom.'},
      {name: 'Dior', price: 1630, category: 'Unisex', desc: 'An iconic fragrance with powerful depth and elegant precision.'},
      {name: 'Chanel No. 5', price: 1800, category: 'Women', desc: 'An eternal ode to femininity with luminous aldehydes and jasmine.'},
      {name: 'Coco Mademoiselle (Chanel)', price: 1480, category: 'Women', desc: 'A modern classic with sensual vanilla and sparkling citrus.'},
      {name: 'Good Girl – Carolina Herrera', price: 1520, category: 'Women', desc: 'A daring blend of rose, jasmine, and dark tonka bean.'},
      {name: 'Miss Dior', price: 1400, category: 'Women', desc: 'A romantic floral statement refined with patchouli and sweetness.'},
      {name: 'Valentino', price: 1460, category: 'Women', desc: 'A luxurious oriental spicy fragrance with velvet petals and woods.'},
      {name: 'Black Opium (YSL)', price: 1470, category: 'Women', desc: 'A seductive coffee-floral fragrance with addictive gourmand accents.'},
      {name: 'La Vie Est Belle (Lancôme)', price: 1390, category: 'Women', desc: 'A luminous, elegant blend of iris, patchouli, and praline.'},
      {name: 'Dior Sauvage', price: 1490, category: 'Men', desc: 'A fresh, rugged scent charged with bergamot and spicy amberwood.'},
      {name: 'Bleu de Chanel', price: 1500, category: 'Men', desc: 'A refined woody aromatic scent crafted for modern confidence.'},
      {name: 'Acqua di Giò', price: 1320, category: 'Men', desc: 'A breezy aquatic masterpiece radiating Mediterranean freshness.'},
      {name: 'Rasasi Hawas for Him', price: 1280, category: 'Men', desc: 'A bold blend of citrus, spices, and exotic woods for striking charm.'},
      {name: 'One Million', price: 1310, category: 'Men', desc: 'A lavish, spicy-golden fragrance with leather and amber allure.'},
      {name: '212', price: 1240, category: 'Men', desc: 'A sleek urban aroma that balances freshness with city energy.'},
      {name: 'Bad Boy', price: 1330, category: 'Men', desc: 'A dark, striking scent built with black and white pepper and tonka.'},
      {name: 'Jean Paul', price: 1290, category: 'Men', desc: 'A charismatic fragrance with cedarwood, orange blossom and woods.'},
      {name: 'Stronger With You', price: 1360, category: 'Men', desc: 'A warm, intimate blend of vanilla, chestnut, and spicy lavender.'}
    ];

    const grid = document.getElementById('productGrid');
    const filterGroup = document.getElementById('filterGroup');
    const contactBtn = document.getElementById('contactBtn');
    const overlay = document.getElementById('orderOverlay');
    const orderProduct = document.getElementById('orderProduct');
    const orderSize = document.getElementById('orderSize');
    const orderPrice = document.getElementById('orderPrice');
    const orderAddress = document.getElementById('orderAddress');
    const bottleOptions = document.getElementById('bottleOptions');
    const cancelOrder = document.getElementById('cancelOrder');
    const completeOrder = document.getElementById('completeOrder');

    let activeCategory = 'All';
    let activeProduct = null;
    let activeSize = '50ml';
    let activeBottleType = 'Original Bottle';

    function formatPrice(value) {
      return `EGP ${value.toLocaleString('en-US')}`;
    }

    function getVisualGradient(index) {
      const palettes = [
        'linear-gradient(145deg, rgba(212,175,55,0.26), rgba(30,26,22,0.16))',
        'linear-gradient(145deg, rgba(255,223,138,0.2), rgba(19,18,18,0.2))',
        'linear-gradient(145deg, rgba(238,210,140,0.16), rgba(12,12,12,0.18))',
        'linear-gradient(145deg, rgba(215,175,60,0.24), rgba(15,15,15,0.18))'
      ];
      return palettes[index % palettes.length];
    }

    function renderFilters() {
      filterGroup.innerHTML = '';
      categories.forEach((category) => {
        const pill = document.createElement('button');
        pill.type = 'button';
        pill.textContent = category;
        pill.className = `filter-pill${category === activeCategory ? ' active' : ''}`;
        pill.addEventListener('click', () => {
          if (activeCategory === category) return;
          activeCategory = category;
          filterProducts(category);
        });
        filterGroup.appendChild(pill);
      });
    }

    function filterProducts(category) {
      activeCategory = category;
      renderFilters();
      const filtered = category === 'All' ? products : products.filter((product) => product.category === category);
      grid.innerHTML = '';
      if (!filtered.length) {
        const message = document.createElement('p');
        message.className = 'empty-state';
        message.textContent = 'No fragrances found for this category yet.';
        grid.appendChild(message);
        return;
      }
      filtered.forEach((product, index) => grid.appendChild(createCard(product, index)));
    }

    function openOrderModal(product, size, price) {
      activeProduct = product;
      activeSize = size;
      orderProduct.value = product;
      orderSize.value = size;
      orderPrice.value = formatPrice(price);
      orderAddress.value = '';
      activeBottleType = 'Original Bottle';
      bottleOptions.querySelectorAll('button').forEach((button) => {
        button.classList.toggle('active', button.dataset.type === activeBottleType);
      });
      overlay.classList.add('open');
      overlay.setAttribute('aria-hidden', 'false');
    }

    function closeModal() {
      overlay.classList.remove('open');
      overlay.setAttribute('aria-hidden', 'true');
    }

    function createCard(product, index) {
      const sizes = ['30ml', '50ml', '100ml'];
      const defaultSize = '50ml';
      const card = document.createElement('article');
      card.className = 'card';
      card.innerHTML = `
        <div class="card-visual" aria-hidden="true">
          <div class="visual-shape" style="background: ${getVisualGradient(index)};">
            <div class="bottle" style="transform: translateY(0);">
              <div class="bottle-top"></div>
              <div class="bottle-inner"></div>
              <div class="bottle-label">${product.name.split(' ')[0].slice(0, 6)}</div>
            </div>
          </div>
        </div>
        <div class="card-body">
          <h2 class="card-title">${product.name}</h2>
          <p class="card-subtitle">${product.desc}</p>
          <div class="price"><span>${formatPrice(product.price)}</span><small>price in EGP</small></div>
          <div class="sizes" role="radiogroup" aria-label="Size selector for ${product.name}"></div>
          <a class="buy" href="#" data-product="${encodeURIComponent(product.name)}" data-size="${defaultSize}" data-price="${product.price}">Buy Now</a>
        </div>
      `;

      const sizeContainer = card.querySelector('.sizes');
      sizes.forEach((size) => {
        const button = document.createElement('button');
        button.type = 'button';
        button.textContent = size;
        button.dataset.size = size;
        button.className = size === defaultSize ? 'active' : '';
        button.addEventListener('click', () => {
          card.querySelectorAll('.sizes button').forEach((btn) => btn.classList.remove('active'));
          button.classList.add('active');
          const buyLink = card.querySelector('.buy');
          buyLink.dataset.size = size;
        });
        sizeContainer.appendChild(button);
      });

      const buyButton = card.querySelector('.buy');
      buyButton.addEventListener('click', (event) => {
        event.preventDefault();
        const productName = decodeURIComponent(buyButton.dataset.product);
        const size = buyButton.dataset.size;
        const price = parseInt(buyButton.dataset.price, 10);
        openOrderModal(productName, size, price);
      });

      return card;
    }

    function sendWhatsAppOrder() {
      const address = orderAddress.value.trim();
      if (!address) {
        orderAddress.focus();
        orderAddress.style.borderColor = 'rgba(212,175,55,0.7)';
        return;
      }
      const message = `Hello, I want to order ${activeProduct} - ${activeSize} - ${activeBottleType} - Address: ${address} - Price: ${formatPrice(products.find((item) => item.name === activeProduct).price)}`;
      const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
      window.open(url, '_blank');
      closeModal();
    }

    renderFilters();
    filterProducts(activeCategory);

    contactBtn.addEventListener('click', () => {
      window.open(`https://wa.me/${number}`, '_blank');
    });

    bottleOptions.addEventListener('click', (event) => {
      if (event.target.tagName !== 'BUTTON') return;
      bottleOptions.querySelectorAll('button').forEach((button) => button.classList.remove('active'));
      event.target.classList.add('active');
      activeBottleType = event.target.dataset.type;
    });

    cancelOrder.addEventListener('click', closeModal);
    completeOrder.addEventListener('click', sendWhatsAppOrder);
    overlay.addEventListener('click', (event) => {
      if (event.target === overlay) closeModal();
    });
  </script>
</body>
</html>
