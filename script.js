const SUPABASE_URL = 'https://aweuqtiqfxjoflvvturi.supabase.co';
const SUPABASE_KEY = 'sb_publishable_DIHyv13-yCxgBKIC8PYCvQ_394bcWSE';
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

const products = [
  { id: 1, name: 'Chanel No. 5', brand: 'Chanel', volume: '90ML', prices: { '30ml': 1290, '60ml': 1990, '90ml': 2590, '120ml': 3190 }, offer: 'BUY 1 GET 1 FREE', discount: 40 },
  { id: 2, name: 'Coco Mademoiselle', brand: 'Chanel', volume: '90ML', prices: { '30ml': 1350, '60ml': 2150, '90ml': 2750, '120ml': 3390 }, offer: 'BUY 1 GET 1 FREE', discount: 45 },
  { id: 3, name: 'Good Girl', brand: 'Carolina Herrera', volume: '80ML', prices: { '30ml': 990, '60ml': 1690, '90ml': 2190, '120ml': 2690 }, offer: 'BEST SELLER', discount: 30 },
  { id: 4, name: 'Miss Dior', brand: 'Dior', volume: '90ML', prices: { '30ml': 1190, '60ml': 1890, '90ml': 2390, '120ml': 2990 }, offer: 'HOT DEAL', discount: 35 },
  { id: 5, name: 'Valentino', brand: 'Valentino', volume: '90ML', prices: { '30ml': 1130, '60ml': 1790, '90ml': 2290, '120ml': 2850 }, offer: 'SAVE 25%', discount: 25 },
  { id: 6, name: 'Black Opium', brand: 'YSL', volume: '90ML', prices: { '30ml': 1090, '60ml': 1790, '90ml': 2290, '120ml': 2790 }, offer: 'SPECIAL', discount: 32 },
  { id: 7, name: 'La Vie Est Belle', brand: 'Lancôme', volume: '75ML', prices: { '30ml': 1020, '60ml': 1590, '90ml': 2090, '120ml': 2590 }, offer: 'POPULAR', discount: 28 },
  { id: 8, name: 'Dior Sauvage', brand: 'Dior', volume: '90ML', prices: { '30ml': 1250, '60ml': 1990, '90ml': 2490, '120ml': 2990 }, offer: 'TOP RATED', discount: 30 },
  { id: 9, name: 'Bleu de Chanel', brand: 'Chanel', volume: '100ML', prices: { '30ml': 1290, '60ml': 1990, '90ml': 2590, '120ml': 3190 }, offer: 'LIMITED', discount: 22 },
  { id: 10, name: 'Acqua di Giò', brand: 'Giorgio Armani', volume: '90ML', prices: { '30ml': 990, '60ml': 1590, '90ml': 2090, '120ml': 2590 }, offer: 'FRESH PICK', discount: 27 },
  { id: 11, name: 'Rasasi Hawas for Him', brand: 'Rasasi', volume: '100ML', prices: { '30ml': 790, '60ml': 1290, '90ml': 1690, '120ml': 2190 }, offer: 'NEW ARRIVAL', discount: 20 },
  { id: 12, name: 'One Million', brand: 'Paco Rabanne', volume: '100ML', prices: { '30ml': 930, '60ml': 1490, '90ml': 1890, '120ml': 2290 }, offer: 'OFFER', discount: 33 },
  { id: 13, name: '212', brand: 'Carolina Herrera', volume: '90ML', prices: { '30ml': 850, '60ml': 1290, '90ml': 1690, '120ml': 2090 }, offer: 'BEST SELLER', discount: 29 },
  { id: 14, name: 'Bad Boy', brand: 'Carolina Herrera', volume: '90ML', prices: { '30ml': 890, '60ml': 1390, '90ml': 1790, '120ml': 2190 }, offer: 'HOT DEAL', discount: 30 },
  { id: 15, name: 'Jean Paul Gaultier', brand: 'Jean Paul Gaultier', volume: '125ML', prices: { '30ml': 980, '60ml': 1590, '90ml': 1990, '120ml': 2490 }, offer: 'BUY 1 GET 1 FREE', discount: 40 },
  { id: 16, name: 'Stronger With You', brand: 'Emporio Armani', volume: '100ML', prices: { '30ml': 930, '60ml': 1490, '90ml': 1890, '120ml': 2390 }, offer: 'POPULAR', discount: 26 },
  { id: 17, name: 'The One', brand: 'Dolce & Gabbana', volume: '90ML', prices: { '30ml': 980, '60ml': 1590, '90ml': 1990, '120ml': 2490 }, offer: 'SAVE 29%', discount: 29 },
  { id: 18, name: 'Valentino Born In Roma', brand: 'Valentino', volume: '90ML', prices: { '30ml': 1050, '60ml': 1690, '90ml': 2190, '120ml': 2690 }, offer: 'NEW EDITION', discount: 24 },
  { id: 19, name: 'Elixir', brand: 'Cartier', volume: '90ML', prices: { '30ml': 1180, '60ml': 1790, '90ml': 2290, '120ml': 2790 }, offer: 'LUXURY', discount: 30 },
  { id: 20, name: 'Azzaro Most Wanted', brand: 'Azzaro', volume: '100ML', prices: { '30ml': 880, '60ml': 1390, '90ml': 1890, '120ml': 2390 }, offer: 'POPULAR', discount: 31 },
  { id: 21, name: 'Asad', brand: 'Asad', volume: '90ML', prices: { '30ml': 820, '60ml': 1290, '90ml': 1690, '120ml': 2090 }, offer: 'EXCLUSIVE', discount: 22 },
  { id: 22, name: 'Althair', brand: 'Althair', volume: '90ML', prices: { '30ml': 780, '60ml': 1190, '90ml': 1690, '120ml': 2090 }, offer: 'ORIENTAL', discount: 25 }
];

const sizeOptions = ['30ml', '60ml', '90ml', '120ml'];

const productGrid = document.getElementById('productGrid');
const orderSection = document.getElementById('orderSection');
const orderBrand = document.getElementById('orderBrand');
const orderName = document.getElementById('orderName');
const orderProductImage = document.getElementById('orderProductImage');
const sizeSelect = document.getElementById('sizeSelect');
const bottleSelect = document.getElementById('bottleSelect');
const quantityInput = document.getElementById('quantityInput');
const promoInput = document.getElementById('promoInput');
const subtotalValue = document.getElementById('subtotalValue');
const discountValue = document.getElementById('discountValue');
const totalValue = document.getElementById('totalValue');
const submitOrder = document.getElementById('submitOrder');
const orderStatus = document.getElementById('orderStatus');
const customerName = document.getElementById('customerName');
const customerEmail = document.getElementById('customerEmail');
const customerPhone = document.getElementById('customerPhone');
const cartCountElement = document.getElementById('cartCount');

let selectedProductId = null;
let currentDiscount = 0;
let currentPromoCode = '';
let cartCount = 0;

function formatPrice(value) {
  return `${value.toLocaleString('en-US')} EGP`;
}

function getProductById(id) {
  return products.find((product) => product.id === id);
}

function renderProducts() {
  productGrid.innerHTML = products
    .map((product) => {
      const price = product.prices['90ml'];
      const oldPrice = Math.round(price * 1.35);
      return `
        <article class="product-card">
          <div class="product-badge">${product.offer}</div>
          <div class="product-discount">-${product.discount}%</div>
          <div class="product-image">
            ${product.brand.slice(0, 1)}
            <span class="volume-label">${product.volume}</span>
          </div>
          <div class="product-content">
            <h3 class="product-title">${product.brand} ${product.name}</h3>
            <p class="product-subtitle">${product.brand} For Men</p>
            <div class="price-row">
              <span class="price-old">${formatPrice(oldPrice)}</span>
              <span class="price-current">${formatPrice(price)}</span>
            </div>
          </div>
          <div class="product-footer">
            <button type="button" onclick="selectProduct(${product.id})">طلب الآن</button>
          </div>
        </article>
      `;
    })
    .join('');
}

function updateCartCount(value) {
  cartCountElement.textContent = value;
}

function showSelectedProduct(product) {
  orderSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  orderBrand.textContent = product.brand;
  orderName.textContent = `${product.brand} ${product.name}`;
  orderProductImage.textContent = product.brand.slice(0, 1);
  sizeSelect.innerHTML = sizeOptions
    .map((size) => `<option value="${size}">${size}</option>`)
    .join('');
  sizeSelect.value = '90ml';
  quantityInput.value = 1;
  promoInput.value = '';
  currentDiscount = 0;
  currentPromoCode = '';
  updateSummary();
}

function selectProduct(id) {
  selectedProductId = id;
  const product = getProductById(id);
  if (!product) return;
  showSelectedProduct(product);
  cartCount += 1;
  updateCartCount(cartCount);
  orderStatus.textContent = `تم اختيار ${product.brand} ${product.name}`;
  orderStatus.className = 'order-status success';
}

function updateSummary() {
  if (!selectedProductId) {
    subtotalValue.textContent = '0 EGP';
    discountValue.textContent = '0 EGP';
    totalValue.textContent = '0 EGP';
    return;
  }
  const product = getProductById(selectedProductId);
  const size = sizeSelect.value;
  const quantity = Math.max(1, Number(quantityInput.value));
  const unitPrice = product.prices[size] || product.prices['90ml'];
  const subtotal = unitPrice * quantity;
  const discountAmount = Math.round((subtotal * currentDiscount) / 100);
  const total = subtotal - discountAmount;
  subtotalValue.textContent = formatPrice(subtotal);
  discountValue.textContent = formatPrice(discountAmount);
  totalValue.textContent = formatPrice(total);
}

async function resolvePromo(code) {
  if (!code) return null;
  const { data, error } = await supabaseClient
    .from('promo_codes')
    .select('code, discount_percentage')
    .eq('code', code.trim().toUpperCase())
    .eq('active', true)
    .single();
  return error || !data ? null : data;
}

async function submitOrderHandler() {
  if (!selectedProductId) {
    orderStatus.textContent = 'اختر منتجاً أولاً.';
    orderStatus.className = 'order-status error';
    return;
  }
  const product = getProductById(selectedProductId);
  const size = sizeSelect.value;
  const bottleType = bottleSelect.value;
  const quantity = Math.max(1, Number(quantityInput.value));
  const unitPrice = product.prices[size] || product.prices['90ml'];
  const subtotal = unitPrice * quantity;
  const promoCode = promoInput.value.trim().toUpperCase();

  submitOrder.disabled = true;
  submitOrder.textContent = 'جارٍ تأكيد الطلب...';
  orderStatus.textContent = '';

  if (promoCode) {
    const promo = await resolvePromo(promoCode);
    if (promo) {
      currentDiscount = promo.discount_percentage;
      currentPromoCode = promo.code;
    } else {
      currentDiscount = 0;
      currentPromoCode = null;
    }
  } else {
    currentDiscount = 0;
    currentPromoCode = null;
  }

  updateSummary();

  const discountAmount = Math.round((subtotal * currentDiscount) / 100);
  const total = subtotal - discountAmount;
  const customer = {
    name: customerName.value.trim(),
    email: customerEmail.value.trim(),
    phone: customerPhone.value.trim(),
  };

  if (!customer.name || !customer.email) {
    orderStatus.textContent = 'ادخل الاسم والبريد الإلكتروني لإتمام الطلب.';
    orderStatus.className = 'order-status error';
    submitOrder.disabled = false;
    submitOrder.textContent = 'تأكيد الطلب';
    return;
  }

  const { error } = await supabaseClient.from('orders').insert([
    {
      product_name: product.name,
      brand: product.brand,
      size,
      bottle_type: bottleType,
      quantity,
      unit_price: unitPrice,
      subtotal,
      promo_code: currentPromoCode || null,
      discount_amount: discountAmount,
      total,
      customer_name: customer.name,
      customer_email: customer.email,
      customer_phone: customer.phone || null,
    },
  ]);

  submitOrder.disabled = false;
  submitOrder.textContent = 'تأكيد الطلب';

  if (error) {
    orderStatus.textContent = 'فشل في حفظ الطلب. حاول مرة أخرى.';
    orderStatus.className = 'order-status error';
    console.error(error);
    return;
  }

  orderStatus.textContent = 'تم حفظ الطلب في SQL بنجاح!';
  orderStatus.className = 'order-status success';
  customerName.value = '';
  customerEmail.value = '';
  customerPhone.value = '';
  promoInput.value = '';
  currentDiscount = 0;
  currentPromoCode = '';
  updateSummary();
}

sizeSelect.addEventListener('change', updateSummary);
quantityInput.addEventListener('input', updateSummary);
submitOrder.addEventListener('click', submitOrderHandler);

renderProducts();
updateCartCount(0);
