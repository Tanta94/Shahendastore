const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyPhwQRcUvzT8Edm9_mdzhLKyzQBrmtiyrpXZG-qYXOZFJeSgtWi74uwv9xjjbsHQ8/exec';

const products = [
  {
    id: 'shad1301',
    category: 'women',
    name: 'Velvet Rose Eau de Parfum',
    price: 825,
    discount: 18,
    image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'shad1302',
    category: 'men',
    name: 'Noir Oud Signature',
    price: 990,
    discount: 20,
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'shad1303',
    category: 'women',
    name: 'Amber Blossom',
    price: 720,
    discount: 15,
    image: 'https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'shad1304',
    category: 'men',
    name: 'Cedar & Spice',
    price: 655,
    discount: 12,
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'shad1305',
    category: 'women',
    name: 'Golden Musk',
    price: 770,
    discount: 17,
    image: 'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'shad1306',
    category: 'men',
    name: 'Midnight Vetiver',
    price: 845,
    discount: 22,
    image: 'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=900&q=80',
  },
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

  fetch(SCRIPT_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })
    .then((response) => {
      if (!response.ok) throw new Error('Unable to send order.');
      return response.json();
    })
    .then(() => {
      cart = {};
      saveCart();
      renderCart();
      checkoutForm.reset();
      alert('Thank you! Your order has been sent successfully.');
    })
    .catch(() => {
      alert('Something went wrong while placing your order. Please try again.');
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

renderProducts();
renderCart();
