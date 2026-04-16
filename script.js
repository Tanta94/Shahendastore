const SUPABASE_URL = 'https://aweuqtiqfxjoflvvturi.supabase.co';
const SUPABASE_KEY = 'sb_publishable_DIHyv13-yCxgBKIC8PYCvQ_394bcWSE';
const supabaseClient = typeof supabase !== 'undefined' && supabase.createClient ? supabase.createClient(SUPABASE_URL, SUPABASE_KEY) : null;

// أضف image لكل منتج: image: 'https://example.com/path/to-image.jpg'
const sizeOptions = ['30ml', '50ml', '100ml'];

// أضف image لكل منتج: image: 'https://example.com/path/to-image.jpg'
const products = [
  // Men / Unisex
  { id: 1, name: 'Black XS', brand: 'Paco Rabanne', category: 'Men/Unisex', prices: { '30ml': 300, '50ml': 400, '100ml': 600 } },
  { id: 2, name: 'Black XS L\'Exces', brand: 'Paco Rabanne', category: 'Men/Unisex', prices: { '30ml': 300, '50ml': 400, '100ml': 600 } },
  { id: 3, name: 'Chrome', brand: 'Azzaro', category: 'Men/Unisex', prices: { '30ml': 300, '50ml': 400, '100ml': 600 } },
  { id: 4, name: 'Asad', brand: 'Lattafa', category: 'Men/Unisex', prices: { '30ml': 350, '50ml': 450, '100ml': 650 } },
  { id: 5, name: 'Sauvage', brand: 'Dior', category: 'Men/Unisex', prices: { '30ml': 300, '50ml': 400, '100ml': 600 } },
  { id: 6, name: 'Bleu de Chanel', brand: 'Chanel', category: 'Men/Unisex', prices: { '30ml': 300, '50ml': 400, '100ml': 600 } },
  { id: 7, name: 'Acqua di Giò', brand: 'Giorgio Armani', category: 'Men/Unisex', prices: { '30ml': 300, '50ml': 400, '100ml': 600 } },
  { id: 8, name: 'Hawas', brand: 'Rasasi', category: 'Men/Unisex', prices: { '30ml': 300, '50ml': 400, '100ml': 600 } },
  { id: 9, name: 'One Million', brand: 'Paco Rabanne', category: 'Men/Unisex', prices: { '30ml': 300, '50ml': 400, '100ml': 600 } },
  { id: 10, name: '212', brand: 'Carolina Herrera', category: 'Men/Unisex', prices: { '30ml': 300, '50ml': 400, '100ml': 600 } },
  { id: 11, name: 'Bad Boy', brand: 'Carolina Herrera', category: 'Men/Unisex', prices: { '30ml': 300, '50ml': 400, '100ml': 600 } },
  { id: 12, name: 'Jean Paul Gaultier', brand: 'Jean Paul Gaultier', category: 'Men/Unisex', prices: { '30ml': 300, '50ml': 400, '100ml': 600 } },
  { id: 13, name: 'Silver Scent', brand: 'Jacques Bogart', category: 'Men/Unisex', prices: { '30ml': 300, '50ml': 400, '100ml': 600 } },
  { id: 14, name: 'Kenzo', brand: 'Kenzo', category: 'Men/Unisex', prices: { '30ml': 300, '50ml': 400, '100ml': 600 } },
  { id: 15, name: 'Stronger with you', brand: 'Emporio Armani', category: 'Men/Unisex', prices: { '30ml': 350, '50ml': 450, '100ml': 650 } },
  // Women
  { id: 16, name: 'Baccarat Rouge 540', brand: 'Maison Francis Kurkdjian', category: 'Women', prices: { '30ml': 300, '50ml': 400, '100ml': 600 } },
  { id: 17, name: 'Black Opium', brand: 'Yves Saint Laurent', category: 'Women', prices: { '30ml': 300, '50ml': 400, '100ml': 600 } },
  { id: 18, name: 'Libre', brand: 'Yves Saint Laurent', category: 'Women', prices: { '30ml': 300, '50ml': 400, '100ml': 600 } },
  { id: 19, name: 'La Vie Est Belle', brand: 'Lancôme', category: 'Women', prices: { '30ml': 400, '50ml': 500, '100ml': 700 } },
  { id: 20, name: 'Good Girl', brand: 'Carolina Herrera', category: 'Women', prices: { '30ml': 300, '50ml': 400, '100ml': 600 } },
  { id: 21, name: 'Miss Dior', brand: 'Dior', category: 'Women', prices: { '30ml': 300, '50ml': 400, '100ml': 600 } },
  { id: 22, name: 'Valentino Donna', brand: 'Valentino', category: 'Women', prices: { '30ml': 400, '50ml': 500, '100ml': 700 } },
  { id: 23, name: 'Valentino Born in Roma', brand: 'Valentino', category: 'Women', prices: { '30ml': 300, '50ml': 400, '100ml': 600 } },
  { id: 24, name: 'Chanel No.5', brand: 'Chanel', category: 'Women', prices: { '30ml': 300, '50ml': 400, '100ml': 600 } },
  { id: 25, name: 'Yara pink perfume', brand: 'Yara', category: 'Women', prices: { '30ml': 300, '50ml': 400, '100ml': 600 } },
  { id: 26, name: 'Dior Jadore', brand: 'Dior', category: 'Women', prices: { '30ml': 300, '50ml': 400, '100ml': 600 } },
  { id: 27, name: 'Chanel Coco Mademoiselle', brand: 'Chanel', category: 'Women', prices: { '30ml': 350, '50ml': 450, '100ml': 650 } },
  { id: 28, name: 'Gucci Bloom', brand: 'Gucci', category: 'Women', prices: { '30ml': 300, '50ml': 400, '100ml': 600 } },
  { id: 29, name: 'Armani Si', brand: 'Giorgio Armani', category: 'Women', prices: { '30ml': 300, '50ml': 400, '100ml': 600 } },
  { id: 30, name: 'Lancome Tresor Midnight Rose', brand: 'Lancôme', category: 'Women', prices: { '30ml': 300, '50ml': 400, '100ml': 600 } },
  // Musk / Oud / Special
  { id: 31, name: 'White Musk', brand: 'Musk', category: 'Musk/Oud/Special', prices: { '30ml': 400, '50ml': 500, '100ml': 700 } },
  { id: 32, name: 'Pomegranate Musk', brand: 'Musk', category: 'Musk/Oud/Special', prices: { '30ml': 400, '50ml': 500, '100ml': 700 } },
  { id: 33, name: 'Choco Musk', brand: 'Al Rehab', category: 'Musk/Oud/Special', prices: { '30ml': 400, '50ml': 500, '100ml': 700 } },
  { id: 34, name: 'Oud Al Zahra', brand: 'Oud', category: 'Musk/Oud/Special', prices: { '30ml': 400, '50ml': 500, '100ml': 700 } },
  { id: 35, name: 'Musk Tahara', brand: 'Musk', category: 'Musk/Oud/Special', prices: { '30ml': 400, '50ml': 500, '100ml': 700 } },
  { id: 36, name: 'Amber Musk', brand: 'Musk', category: 'Musk/Oud/Special', prices: { '30ml': 400, '50ml': 500, '100ml': 700 } },
  { id: 37, name: 'Oud Wood style', brand: 'Oud', category: 'Musk/Oud/Special', prices: { '30ml': 400, '50ml': 500, '100ml': 700 } },
  { id: 38, name: 'Oud Vanilla', brand: 'Oud', category: 'Musk/Oud/Special', prices: { '30ml': 400, '50ml': 500, '100ml': 700 } },
  { id: 39, name: 'Oud Rose', brand: 'Oud', category: 'Musk/Oud/Special', prices: { '30ml': 400, '50ml': 500, '100ml': 700 } },
  // Bad Boy variants
  { id: 40, name: 'Bad Boy EDT (Original)', brand: 'Carolina Herrera', category: 'Special', prices: { '30ml': 300, '50ml': 400, '100ml': 600 } },
  { id: 41, name: 'Bad Boy Cobalt', brand: 'Carolina Herrera', category: 'Special', prices: { '30ml': 350, '50ml': 450, '100ml': 550 } },
  { id: 42, name: 'Bad Boy Extreme', brand: 'Carolina Herrera', category: 'Special', prices: { '30ml': 500, '50ml': 600, '100ml': 850 } },
  { id: 43, name: 'Bad Boy Le Parfum', brand: 'Carolina Herrera', category: 'Special', prices: { '30ml': 600, '50ml': 700, '100ml': 800 } },
  { id: 44, name: 'Bad Boy Elixir', brand: 'Carolina Herrera', category: 'Special', prices: { '30ml': 500, '50ml': 600, '100ml': 700 } },
  // Kayali
  { id: 45, name: 'Kayali', brand: 'Kayali', category: 'Women', prices: { '30ml': 300, '50ml': 400, '100ml': 600 } },
  // 212 Women
  { id: 46, name: '212 NYC Women', brand: 'Carolina Herrera', category: 'Women', prices: { '30ml': 400, '50ml': 500, '100ml': 700 } },
  { id: 47, name: '212 Sexy Women', brand: 'Carolina Herrera', category: 'Women', prices: { '30ml': 400, '50ml': 500, '100ml': 700 } },
  { id: 48, name: '212 VIP Women', brand: 'Carolina Herrera', category: 'Women', prices: { '30ml': 400, '50ml': 500, '100ml': 700 } },
  { id: 49, name: '212 VIP Rosé', brand: 'Carolina Herrera', category: 'Women', prices: { '30ml': 400, '50ml': 500, '100ml': 700 } },
  { id: 50, name: '212 VIP Rosé Elixir', brand: 'Carolina Herrera', category: 'Women', prices: { '30ml': 400, '50ml': 500, '100ml': 700 } },
  // 212 Men
  { id: 51, name: '212 Men NYC', brand: 'Carolina Herrera', category: 'Men/Unisex', prices: { '30ml': 400, '50ml': 500, '100ml': 700 } },
  { id: 52, name: '212 VIP Men', brand: 'Carolina Herrera', category: 'Men/Unisex', prices: { '30ml': 400, '50ml': 500, '100ml': 700 } },
  { id: 53, name: '212 VIP Black', brand: 'Carolina Herrera', category: 'Men/Unisex', prices: { '30ml': 400, '50ml': 500, '100ml': 700 } },
  { id: 54, name: '212 Sexy Men', brand: 'Carolina Herrera', category: 'Men/Unisex', prices: { '30ml': 400, '50ml': 500, '100ml': 700 } },
  { id: 55, name: '212 Heroes', brand: 'Carolina Herrera', category: 'Men/Unisex', prices: { '30ml': 400, '50ml': 500, '100ml': 700 } }
];

let productGrid;
let orderSection;
let orderBrand;
let orderName;
let orderProductImage;
let sizeSelect;
let bottleSelect;
let quantityInput;
let promoInput;
let subtotalValue;
let discountValue;
let totalValue;
let submitOrder;
let orderStatus;
let customerName;
let customerEmail;
let customerPhone;
let cartCountElement;

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
      const price = product.prices['100ml'];
      const imageUrl = product.image || `https://via.placeholder.com/320x240.png?text=${encodeURIComponent(product.name)}`;
      return `
        <article class="product-card">
          <div class="product-image">
            <img src="${imageUrl}" alt="${product.name}" loading="lazy" />
            <span class="volume-label">${product.volume || '100ml'}</span>
            <span class="offer-badge">اشتر 2 احصل على 1 مجاني</span>
          </div>
          <div class="product-content">
            <h3 class="product-title">${product.brand} ${product.name}</h3>
            <p class="product-subtitle">${product.category}</p>
            <div class="price-row">
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
  const imageUrl = product.image || `https://via.placeholder.com/84x84.png?text=${encodeURIComponent(product.name)}`;
  orderProductImage.innerHTML = `<img src="${imageUrl}" alt="${product.name}" loading="lazy" />`;
  sizeSelect.innerHTML = sizeOptions
    .map((size) => `<option value="${size}">${size}</option>`)
    .join('');
  sizeSelect.value = '100ml';
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
  const unitPrice = product.prices[size] || product.prices['100ml'];
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
  const unitPrice = product.prices[size] || product.prices['100ml'];
  const subtotal = unitPrice * quantity;
  const promoCode = promoInput.value.trim().toUpperCase();

  submitOrder.disabled = true;
  submitOrder.textContent = 'جارٍ تأكيد الطلب...';
  orderStatus.textContent = '';

  if (promoCode && supabaseClient) {
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

  if (!supabaseClient) {
    orderStatus.textContent = 'فشل الاتصال بقاعدة البيانات. تأكد من اتصالك بالإنترنت.';
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
    const message = error.message || 'فشل في حفظ الطلب.';
    orderStatus.textContent = `فشل في حفظ الطلب: ${message}`;
    orderStatus.className = 'order-status error';
    console.error('Supabase insert error:', error);
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

document.addEventListener('DOMContentLoaded', () => {
  productGrid = document.getElementById('productGrid');
  orderSection = document.getElementById('orderSection');
  orderBrand = document.getElementById('orderBrand');
  orderName = document.getElementById('orderName');
  orderProductImage = document.getElementById('orderProductImage');
  sizeSelect = document.getElementById('sizeSelect');
  bottleSelect = document.getElementById('bottleSelect');
  quantityInput = document.getElementById('quantityInput');
  promoInput = document.getElementById('promoInput');
  subtotalValue = document.getElementById('subtotalValue');
  discountValue = document.getElementById('discountValue');
  totalValue = document.getElementById('totalValue');
  submitOrder = document.getElementById('submitOrder');
  orderStatus = document.getElementById('orderStatus');
  customerName = document.getElementById('customerName');
  customerEmail = document.getElementById('customerEmail');
  customerPhone = document.getElementById('customerPhone');
  cartCountElement = document.getElementById('cartCount');

  renderProducts();
  updateCartCount(0);

  if (sizeSelect) sizeSelect.addEventListener('change', updateSummary);
  if (quantityInput) quantityInput.addEventListener('input', updateSummary);
  if (submitOrder) submitOrder.addEventListener('click', submitOrderHandler);
  window.selectProduct = selectProduct;
});
