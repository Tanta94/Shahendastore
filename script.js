import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/dist/supabase.js';

const SUPABASE_URL = 'https://aweuqtiqfxjoflvvturi.supabase.co';
const SUPABASE_KEY = 'sb_publishable_DIHyv13-yCxgBKIC8PYCvQ_394bcWSE';
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

const products = [
  { id: 1, name: 'Chanel No. 5', brand: 'Chanel', description: 'Signature floral elegance.', prices: { '30ml': 89, '60ml': 159, '90ml': 219, '120ml': 279 } },
  { id: 2, name: 'Coco Mademoiselle', brand: 'Chanel', description: 'Modern orange blossom sophistication.', prices: { '30ml': 95, '60ml': 169, '90ml': 235, '120ml': 295 } },
  { id: 3, name: 'Good Girl', brand: 'Carolina Herrera', description: 'Bold, seductive, unforgettable.', prices: { '30ml': 79, '60ml': 145, '90ml': 199, '120ml': 255 } },
  { id: 4, name: 'Miss Dior', brand: 'Dior', description: 'Timeless elegance with luminous florals.', prices: { '30ml': 85, '60ml': 149, '90ml': 215, '120ml': 269 } },
  { id: 5, name: 'Valentino', brand: 'Valentino', description: 'Italian glamour in a fragrant form.', prices: { '30ml': 82, '60ml': 149, '90ml': 209, '120ml': 269 } },
  { id: 6, name: 'Black Opium', brand: 'YSL', description: 'Dark coffee and floral gourmand.', prices: { '30ml': 78, '60ml': 145, '90ml': 205, '120ml': 259 } },
  { id: 7, name: 'La Vie Est Belle', brand: 'Lancôme', description: 'Radiant sweetness with elegant depth.', prices: { '30ml': 72, '60ml': 135, '90ml': 195, '120ml': 245 } },
  { id: 8, name: 'Dior Sauvage', brand: 'Dior', description: 'Fresh spicy power for the modern man.', prices: { '30ml': 88, '60ml': 159, '90ml': 218, '120ml': 278 } },
  { id: 9, name: 'Bleu de Chanel', brand: 'Chanel', description: 'Citrus wood with effortless refinement.', prices: { '30ml': 92, '60ml': 165, '90ml': 225, '120ml': 285 } },
  { id: 10, name: 'Acqua di Giò', brand: 'Giorgio Armani', description: 'Marine freshness meets classic Armani.', prices: { '30ml': 69, '60ml': 129, '90ml': 185, '120ml': 235 } },
  { id: 11, name: 'Rasasi Hawas for Him', brand: 'Rasasi', description: 'Modern spice and aquatic energy.', prices: { '30ml': 58, '60ml': 109, '90ml': 159, '120ml': 199 } },
  { id: 12, name: 'One Million', brand: 'Paco Rabanne', description: 'Statement boldness with bright leather.', prices: { '30ml': 72, '60ml': 135, '90ml': 195, '120ml': 245 } },
  { id: 13, name: '212', brand: 'Carolina Herrera', description: 'Urban freshness tailored for today.', prices: { '30ml': 65, '60ml': 119, '90ml': 169, '120ml': 209 } },
  { id: 14, name: 'Bad Boy', brand: 'Carolina Herrera', description: 'Rebellious spice and woody charm.', prices: { '30ml': 69, '60ml': 129, '90ml': 179, '120ml': 219 } },
  { id: 15, name: 'Jean Paul Gaultier', brand: 'Jean Paul Gaultier', description: 'Provocative marine and leather notes.', prices: { '30ml': 76, '60ml': 139, '90ml': 199, '120ml': 255 } },
  { id: 16, name: 'Stronger With You', brand: 'Emporio Armani', description: 'Spice and sweet comfort for him.', prices: { '30ml': 74, '60ml': 139, '90ml': 195, '120ml': 249 } },
  { id: 17, name: 'The One', brand: 'Dolce & Gabbana', description: 'Warm amber with elegant sophistication.', prices: { '30ml': 81, '60ml': 149, '90ml': 209, '120ml': 269 } },
  { id: 18, name: 'Valentino Born In Roma', brand: 'Valentino', description: 'Contemporary freshness with citrus spice.', prices: { '30ml': 84, '60ml': 159, '90ml': 219, '120ml': 279 } },
  { id: 19, name: 'Elixir', brand: 'Cartier', description: 'Luxury potion of florals and woods.', prices: { '30ml': 91, '60ml': 169, '90ml': 229, '120ml': 289 } },
  { id: 20, name: 'Azzaro Most Wanted', brand: 'Azzaro', description: 'Fiery spice balanced with soft amber.', prices: { '30ml': 73, '60ml': 139, '90ml': 199, '120ml': 249 } },
  { id: 21, name: 'Asad', brand: 'Asad', description: 'Exclusive oriental warmth and musk.', prices: { '30ml': 66, '60ml': 125, '90ml': 179, '120ml': 229 } },
  { id: 22, name: 'Althair', brand: 'Althair', description: 'Smooth oud, citrus, and rich woods.', prices: { '30ml': 64, '60ml': 119, '90ml': 175, '120ml': 225 } },
];

const sizeOptions = ['30ml', '60ml', '90ml', '120ml'];

const productGrid = document.getElementById('productGrid');
const selectedBrand = document.getElementById('selectedBrand');
const selectedProduct = document.getElementById('selectedProduct');
const selectedDescription = document.getElementById('selectedDescription');
const productPlaceholder = document.getElementById('productPlaceholder');
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
const customerNote = document.getElementById('customerNote');

let selectedProductId = products[0].id;
let currentDiscount = 0;
let currentPromoCode = '';
let cartCount = 0;

function renderProducts() {
  productGrid.innerHTML = '';
  products.forEach((product) => {
    const card = document.createElement('article');
    card.className = 'product-card';
    const volume = '90ML';
    const price = product.prices['90ml'];
    const oldPrice = (price * 1.3).toFixed(0);
    card.innerHTML = `
      <div class="product-art" data-volume="${volume}">${product.brand.slice(0, 1)}</div>
      <div class="product-content">
        <h3 class="product-title">${product.name}</h3>
        <p class="product-subtitle">${product.brand}</p>
        <div class="price-row">
          <span class="price-old">$${oldPrice}</span>
          <span class="price-current">$${price.toFixed(2)}</span>
        </div>
      </div>
      <div class="product-footer">
        <button class="button button-primary">Add to cart</button>
      </div>
    `;
    const button = card.querySelector('button');
    button.addEventListener('click', () => addToCart(product.id));
    productGrid.appendChild(card);
  });
}

function populateSizeOptions() {
  sizeSelect.innerHTML = sizeOptions.map((size) => `<option value="${size}">${size}</option>`).join('');
}

function formatCurrency(value) {
  return `$${value.toFixed(2)}`;
}

function getSelectedProduct() {
  return products.find((item) => item.id === selectedProductId);
}

function selectProduct(id) {
  selectedProductId = id;
  const product = getSelectedProduct();
  selectedBrand.textContent = product.brand;
  selectedProduct.textContent = product.name;
  selectedDescription.textContent = product.description;
  productPlaceholder.textContent = product.brand.slice(0, 1);
  sizeSelect.value = '30ml';
  quantityInput.value = 1;
  promoInput.value = '';
  currentDiscount = 0;
  currentPromoCode = '';
  updateSummary();
}

function updateSummary() {
  const product = getSelectedProduct();
  const size = sizeSelect.value;
  const quantity = Math.max(1, Number(quantityInput.value));
  const unitPrice = product.prices[size] || product.prices['30ml'];
  const subtotal = unitPrice * quantity;
  const discountAmount = (subtotal * currentDiscount) / 100;
  const total = subtotal - discountAmount;
  subtotalValue.textContent = formatCurrency(subtotal);
  discountValue.textContent = formatCurrency(discountAmount);
  totalValue.textContent = formatCurrency(total);
}

async function fetchPromoCode(code) {
  if (!code) return null;
  const { data, error } = await supabase
    .from('promo_codes')
    .select('code, discount_percentage')
    .eq('code', code.trim().toUpperCase())
    .eq('active', true)
    .single();

  if (error || !data) return null;
  return data;
}

async function handlePromoValidation() {
  const code = promoInput.value.trim().toUpperCase();
  if (!code) {
    currentDiscount = 0;
    currentPromoCode = '';
    orderStatus.textContent = '';
    updateSummary();
    return;
  }

  orderStatus.textContent = 'Validating promo code...';
  const promo = await fetchPromoCode(code);
  if (promo) {
    currentDiscount = promo.discount_percentage;
    currentPromoCode = promo.code;
    orderStatus.textContent = `Promo applied: ${currentDiscount}% off.`;
    orderStatus.className = 'order-status success';
  } else {
    currentDiscount = 0;
    currentPromoCode = '';
    orderStatus.textContent = 'Promo code not found or expired.';
    orderStatus.className = 'order-status error';
  }

  updateSummary();
}

async function submitOrderHandler() {
  const product = getSelectedProduct();
  const size = sizeSelect.value;
  const bottleType = bottleSelect.value;
  const quantity = Math.max(1, Number(quantityInput.value));
  const unitPrice = product.prices[size] || product.prices['30ml'];
  const subtotal = unitPrice * quantity;
  const discountAmount = (subtotal * currentDiscount) / 100;
  const total = subtotal - discountAmount;

  const customer = {
    name: customerName.value.trim(),
    email: customerEmail.value.trim(),
    phone: customerPhone.value.trim(),
    note: customerNote.value.trim(),
  };

  if (!customer.name || !customer.email) {
    orderStatus.textContent = 'Please enter your name and email.';
    orderStatus.className = 'order-status error';
    return;
  }

  submitOrder.disabled = true;
  submitOrder.textContent = 'Saving order...';
  orderStatus.textContent = '';

  const { error } = await supabase.from('orders').insert([{ 
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
    order_note: customer.note || null,
  }]);

  submitOrder.disabled = false;
  submitOrder.textContent = 'إرسال الطلب';

  if (error) {
    orderStatus.textContent = 'Unable to save order. Please try again later.';
    orderStatus.className = 'order-status error';
    console.error('Supabase error:', error);
    return;
  }

  orderStatus.textContent = 'Order received successfully! Your order has been saved for tracking.';
  orderStatus.className = 'order-status success';
  customerName.value = '';
  customerEmail.value = '';
  customerPhone.value = '';
  customerNote.value = '';
}

function updateCartCount(count) {
  const cartCountElement = document.getElementById('cartCount');
  cartCountElement.textContent = count;
}

function addToCart(productId) {
  selectProduct(productId);
  cartCount += 1;
  updateCartCount(cartCount);
  orderStatus.textContent = 'تمت إضافة المنتج إلى العربة. اكمل بياناتك ثم أرسل الطلب.';
  orderStatus.className = 'order-status success';
}

sizeSelect.addEventListener('change', updateSummary);
quantityInput.addEventListener('input', updateSummary);
bottleSelect.addEventListener('change', updateSummary);
promoInput.addEventListener('change', handlePromoValidation);
submitOrder.addEventListener('click', submitOrderHandler);

populateSizeOptions();
renderProducts();
selectProduct(selectedProductId);
updateCartCount(cartCount);
