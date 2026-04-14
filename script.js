const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwTabnY7LoDk_ajb6HYfuIJ5Erd2b1_cJ-J1AuVA3OP3jl4teRNcLeqy5e11_-4I2rg/exec';
const WHATSAPP_NUMBER = '201110511138';
const WHATSAPP_URL_BASE = `https://wa.me/${WHATSAPP_NUMBER}`;

const products = [
  { id: 'women01', category: 'women', name: 'Rouge Khamra', price: 950, discount: 15, image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80' },
  { id: 'women02', category: 'women', name: 'Libra', price: 980, discount: 12, image: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=900&q=80' },
  { id: 'women03', category: 'women', name: 'Dior', price: 920, discount: 10, image: 'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=900&q=80' },
  { id: 'women04', category: 'women', name: 'Chanel No. 5', price: 940, discount: 14, image: 'https://images.unsplash.com/photo-1515114929878-0a4ac90c7d96?auto=format&fit=crop&w=900&q=80' },
  { id: 'women05', category: 'women', name: 'Coco Mademoiselle', price: 870, discount: 13, image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=900&q=80' },
  { id: 'women06', category: 'women', name: 'Good Girl – Carolina Herrera', price: 910, discount: 16, image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80' },
  { id: 'women07', category: 'women', name: 'Miss Dior', price: 930, discount: 12, image: 'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=900&q=80' },
  { id: 'women08', category: 'women', name: 'Valentino', price: 860, discount: 11, image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80' },
  { id: 'women09', category: 'women', name: 'Black Opium (YSL)', price: 780, discount: 10, image: 'https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf?auto=format&fit=crop&w=900&q=80' },
  { id: 'women10', category: 'women', name: 'La Vie Est Belle (Lancôme)', price: 820, discount: 15, image: 'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=900&q=80' },
  { id: 'men01', category: 'men', name: 'Dior Sauvage', price: 990, discount: 18, image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=900&q=80' },
  { id: 'men02', category: 'men', name: 'Bleu de Chanel', price: 980, discount: 17, image: 'https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf?auto=format&fit=crop&w=900&q=80' },
  { id: 'men03', category: 'men', name: 'Acqua di Giò', price: 940, discount: 15, image: 'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=900&q=80' },
  { id: 'men04', category: 'men', name: 'Rasasi Hawas for Him', price: 830, discount: 14, image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80' },
  { id: 'men05', category: 'men', name: 'One Million', price: 900, discount: 13, image: 'https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf?auto=format&fit=crop&w=900&q=80' },
  { id: 'men06', category: 'men', name: '212', price: 820, discount: 12, image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80' },
  { id: 'men07', category: 'men', name: 'Bad Boy', price: 860, discount: 11, image: 'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=900&q=80' },
  { id: 'men08', category: 'men', name: 'Jean Paul', price: 870, discount: 12, image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80' },
  { id: 'men09', category: 'men', name: 'Stronger With You', price: 880, discount: 12, image: 'https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf?auto=format&fit=crop&w=900&q=80' },
  { id: 'men10', category: 'men', name: 'Great Silver', price: 840, discount: 10, image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80' },
];

const productGrid = document.getElementById('product-grid');
const cartPanel = document.getElementById('cart-panel');
const cartItemsContainer = document.getElementById('cart-items');
const cartCount = document.getElementById('cart-count');
const cartSubtotal = document.getElementById('cart-subtotal');
const checkoutTotal = document.getElementById('checkout-total');
const checkoutForm = document.getElementById('checkout-form');
const openCart = document.getElementById('open-cart');
const closeCart = document.getElementById('close-cart');
const continueCheckout = document.getElementById('continue-checkout');
const tabs = document.querySelectorAll('.tab');

let cart = JSON.parse(localStorage.getItem('shahendaCart')) || {};
let activeCategory = 'all';
const ORDER_BACKUP_KEY = 'shahendaOrderBackup';

function formatCurrency(value) {
  return new Intl.NumberFormat('en-EG', {
    style: 'currency',
    currency: 'EGP',
    maximumFractionDigits: 2,
  }).format(value);
}

function saveCart() {
  localStorage.setItem('shahendaCart', JSON.stringify(cart));
}

function getBackupQueue() {
  return JSON.parse(localStorage.getItem(ORDER_BACKUP_KEY) || '[]');
}

function setBackupQueue(queue) {
  localStorage.setItem(ORDER_BACKUP_KEY, JSON.stringify(queue));
}

function saveBackupOrder(order) {
  const queue = getBackupQueue();
  queue.push(order);
  setBackupQueue(queue);
}

function buildWhatsAppMessage(order) {
  const productLines = order.products.map((item) => `- ${item.name} x${item.quantity}`).join('\n');
  return `طلب جديد من Shahenda Store\n` +
    `الاسم: ${order.name}\n` +
    `الهاتف: ${order.phone}\n` +
    `العنوان: ${order.address}\n` +
    `المنتجات:\n${productLines}\n` +
    `المجموع: ${formatCurrency(order.totalPrice)}`;
}

function openWhatsAppOrder(order) {
  const message = buildWhatsAppMessage(order);
  const url = `${WHATSAPP_URL_BASE}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}

async function syncBackupOrders() {
  const queue = getBackupQueue();
  if (queue.length === 0) return;

  for (let index = 0; index < queue.length; index += 1) {
    const backupOrder = queue[index];
    try {
      const response = await fetch(SCRIPT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(backupOrder),
      });
      if (!response.ok) throw new Error(`Sync failed ${response.status}`);
      const text = await response.text();
      const data = JSON.parse(text);
      if (data.status === 'error') throw new Error(data.message || 'Sync error');
      queue.splice(index, 1);
      index -= 1;
    } catch (error) {
      console.warn('Backup order sync aborted:', error);
      break;
    }
  }

  setBackupQueue(queue);
}

function getCartItems() {
  return Object.keys(cart).map((id) => {
    const product = products.find((item) => item.id === id);
    return { ...product, quantity: cart[id] };
  });
}

function calculateSubtotal() {
  return getCartItems().reduce((sum, item) => sum + item.price * item.quantity, 0);
}

function updateCartCount() {
  const totalItems = getCartItems().reduce((sum, item) => sum + item.quantity, 0);
  cartCount.textContent = totalItems;
}

function renderProducts() {
  const filtered = activeCategory === 'all' ? products : products.filter((product) => product.category === activeCategory);
  productGrid.innerHTML = filtered.map((product) => {
    return `
      <article class="product-card">
        <div class="product-image">
          <img src="${product.image}" alt="${product.name}" />
          <span class="badge">-${product.discount}%</span>
        </div>
        <div class="product-info">
          <h3>${product.name}</h3>
          <p>${product.category === 'men' ? 'For Men' : 'For Women'}</p>
          <div class="price-row">
            <span class="price">${formatCurrency(product.price)}</span>
            <button class="product-button" data-action="add" data-id="${product.id}">Add to Cart</button>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

function renderCart() {
  const items = getCartItems();
  cartItemsContainer.innerHTML = items.length === 0 ? '<p class="empty-cart">Your cart is empty. Add a fragrance to begin.</p>' : items.map((item) => {
    return `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}" />
        <div class="cart-item-content">
          <h4>${item.name}</h4>
          <p>${formatCurrency(item.price)} × ${item.quantity}</p>
          <div class="quantity-controls">
            <button data-action="decrease" data-id="${item.id}">-</button>
            <span>${item.quantity}</span>
            <button data-action="increase" data-id="${item.id}">+</button>
          </div>
          <button class="remove-item" data-action="remove" data-id="${item.id}">Remove</button>
        </div>
      </div>
    `;
  }).join('');

  const subtotal = calculateSubtotal();
  cartSubtotal.textContent = formatCurrency(subtotal);
  checkoutTotal.textContent = formatCurrency(subtotal);
  updateCartCount();
}

function openCartPanel() {
  cartPanel.classList.add('open');
  cartPanel.classList.remove('hidden');
}

function closeCartPanel() {
  cartPanel.classList.remove('open');
}

function addToCart(productId) {
  cart[productId] = (cart[productId] || 0) + 1;
  saveCart();
  renderCart();
}

function updateCartItem(productId, delta) {
  if (!cart[productId]) return;
  cart[productId] += delta;
  if (cart[productId] <= 0) {
    delete cart[productId];
  }
  saveCart();
  renderCart();
}

function removeCartItem(productId) {
  delete cart[productId];
  saveCart();
  renderCart();
}

function handleProductGridClick(event) {
  const button = event.target.closest('button[data-action="add"]');
  if (!button) return;
  const productId = button.dataset.id;
  addToCart(productId);
  openCartPanel();
}

function handleCartClick(event) {
  const actionButton = event.target.closest('button[data-action]');
  if (!actionButton) return;
  const productId = actionButton.dataset.id;
  const action = actionButton.dataset.action;

  if (action === 'increase') updateCartItem(productId, 1);
  if (action === 'decrease') updateCartItem(productId, -1);
  if (action === 'remove') removeCartItem(productId);
}

function handleCategoryChange(event) {
  const selected = event.target.closest('.tab');
  if (!selected) return;
  tabs.forEach((tab) => tab.classList.remove('active'));
  selected.classList.add('active');
  activeCategory = selected.dataset.category;
  renderProducts();
}

function handleCheckout(event) {
  event.preventDefault();
  const name = checkoutForm['name'].value.trim();
  const phone = checkoutForm['phone'].value.trim();
  const address = checkoutForm['address'].value.trim();
  const items = getCartItems();

  if (!name || !phone || !address) {
    alert('Please complete all checkout fields.');
    return;
  }

  if (items.length === 0) {
    alert('Your cart is empty. Add products before placing an order.');
    return;
  }

  const totalPrice = calculateSubtotal();
  const payload = {
    name,
    phone,
    address,
    products: items.map((item) => ({ id: item.id, name: item.name, quantity: item.quantity, price: item.price })),
    totalPrice,
    date: new Date().toISOString(),
  };

  console.log('Sending payload:', payload);
  fetch(SCRIPT_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })
    .then(async (response) => {
      console.log('Response status:', response.status);
      const text = await response.text();
      console.log('Response text:', text);
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${text}`);
      }
      try {
        return JSON.parse(text);
      } catch (e) {
        throw new Error(`Invalid JSON response: ${text}`);
      }
    })
    .then((data) => {
      console.log('Success response:', data);
      cart = {};
      saveCart();
      renderCart();
      checkoutForm.reset();
      alert('Thank you! Your order has been sent successfully.');
    })
    .catch((error) => {
      console.error('Order submission error:', error.message);
      saveBackupOrder(payload);
      openWhatsAppOrder(payload);
      alert(`Order sent to WhatsApp and will sync later. Error: ${error.message}`);
    });
}

productGrid.addEventListener('click', handleProductGridClick);
cartItemsContainer.addEventListener('click', handleCartClick);
openCart.addEventListener('click', openCartPanel);
closeCart.addEventListener('click', closeCartPanel);
continueCheckout.addEventListener('click', () => {
  closeCartPanel();
  document.getElementById('customer-name').scrollIntoView({ behavior: 'smooth', block: 'center' });
});

tabs.forEach((tab) => tab.addEventListener('click', handleCategoryChange));
checkoutForm.addEventListener('submit', handleCheckout);
document.getElementById('whatsapp-order').addEventListener('click', () => {
  const name = checkoutForm['name'].value.trim();
  const phone = checkoutForm['phone'].value.trim();
  const address = checkoutForm['address'].value.trim();
  const items = getCartItems();

  if (!name || !phone || !address) {
    alert('Please complete all checkout fields before sending the order to WhatsApp.');
    return;
  }

  if (items.length === 0) {
    alert('Your cart is empty. Add products before placing an order.');
    return;
  }

  const totalPrice = calculateSubtotal();
  const payload = {
    name,
    phone,
    address,
    products: items.map((item) => ({ id: item.id, name: item.name, quantity: item.quantity, price: item.price })),
    totalPrice,
    date: new Date().toISOString(),
  };

  openWhatsAppOrder(payload);
});

renderProducts();
renderCart();
syncBackupOrders();
