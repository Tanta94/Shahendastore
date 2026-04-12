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

    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 28px;
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

    <div class="grid" id="productGrid"></div>

    <div class="footer-note">All products redirect to WhatsApp for a seamless luxury order experience.</div>
  </section>

  <script>
    const number = '201110511138';
    const products = [
      {name: 'Baccarat Rouge', price: 155, desc: 'A luminous fusion of amber and rose for a captivating evening signature.'},
      {name: 'Khamra', price: 138, desc: 'A warm oriental creation with notes of amber, saffron, and dark florals.'},
      {name: 'Libre', price: 142, desc: 'A bold, floral-oriental scent balancing lavender and orange blossom.'},
      {name: 'Dior', price: 163, desc: 'An iconic fragrance with powerful depth and elegant precision.'},
      {name: 'Chanel No. 5', price: 180, desc: 'An eternal ode to femininity with luminous aldehydes and jasmine.'},
      {name: 'Coco Mademoiselle (Chanel)', price: 148, desc: 'A modern classic with sensual vanilla and sparkling citrus.'},
      {name: 'Good Girl – Carolina Herrera', price: 152, desc: 'A daring blend of rose, jasmine, and dark tonka bean.'},
      {name: 'Miss Dior', price: 140, desc: 'A romantic floral statement refined with patchouli and sweetness.'},
      {name: 'Valentino', price: 146, desc: 'A luxurious oriental spicy fragrance with velvet petals and woods.'},
      {name: 'Black Opium (YSL)', price: 147, desc: 'A seductive coffee-floral fragrance with addictive gourmand accents.'},
      {name: 'La Vie Est Belle (Lancôme)', price: 139, desc: 'A luminous, elegant blend of iris, patchouli, and praline.'},
      {name: 'Dior Sauvage', price: 149, desc: 'A fresh, rugged scent charged with bergamot and spicy amberwood.'},
      {name: 'Bleu de Chanel', price: 150, desc: 'A refined woody aromatic scent crafted for modern confidence.'},
      {name: 'Acqua di Giò', price: 132, desc: 'A breezy aquatic masterpiece radiating Mediterranean freshness.'},
      {name: 'Rasasi Hawas for Him', price: 128, desc: 'A bold blend of citrus, spices, and exotic woods for striking charm.'},
      {name: 'One Million', price: 131, desc: 'A lavish, spicy-golden fragrance with leather and amber allure.'},
      {name: '212', price: 124, desc: 'A sleek urban aroma that balances freshness with city energy.'},
      {name: 'Bad Boy', price: 133, desc: 'A dark, striking scent built with black and white pepper and tonka.'},
      {name: 'Jean Paul', price: 129, desc: 'A charismatic fragrance with cedarwood, orange blossom and woods.'},
      {name: 'Stronger With You', price: 136, desc: 'A warm, intimate blend of vanilla, chestnut, and spicy lavender.'}
    ];

    const grid = document.getElementById('productGrid');

    function createCard(product, index) {
      const sizes = ['30ml', '50ml', '100ml'];
      const defaultSize = '50ml';
      const card = document.createElement('article');
      card.className = 'card';
      card.innerHTML = `
        <div class="card-visual" aria-hidden="true">
          <div class="visual-shape" style="background: linear-gradient(145deg, rgba(212,175,55,0.2), rgba(255,255,255,0.03)), radial-gradient(circle at top left, rgba(255,255,255,0.12), transparent 18%);">
            <div class="bottle" style="transform: translateY(0);">
              <div class="bottle-top"></div>
              <div class="bottle-inner"></div>
              <div class="bottle-label">${product.name.split(' ')[0].slice(0,6)}</div>
            </div>
          </div>
        </div>
        <div class="card-body">
          <h2 class="card-title">${product.name}</h2>
          <p class="card-subtitle">${product.desc}</p>
          <div class="price"><span>$${product.price}</span><small>starting price</small></div>
          <div class="sizes" role="radiogroup" aria-label="Size selector for ${product.name}"></div>
          <a class="buy" href="#" data-product="${encodeURIComponent(product.name)}" data-size="${defaultSize}">Buy Now</a>
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
        const message = `Hello, I want to order ${productName} - ${size}`;
        const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
      });

      return card;
    }

    products.forEach((product, index) => {
      grid.appendChild(createCard(product, index));
    });
  </script>
</body>
</html>
