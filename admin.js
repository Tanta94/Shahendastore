const SUPABASE_URL = 'https://aweuqtiqfxjoflvvturi.supabase.co';
const SUPABASE_KEY = 'sb_publishable_DIHyv13-yCxgBKIC8PYCvQ_394bcWSE';
const supabaseClient = typeof supabase !== 'undefined' && supabase.createClient ? supabase.createClient(SUPABASE_URL, SUPABASE_KEY) : null;

let ordersContainer;
let loadingMessage;
let errorMessage;
let refreshOrders;
let exportOrders;

function formatPrice(value) {
  return `${value.toLocaleString('en-US')} EGP`;
}

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleString('ar-EG', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
}

async function loadOrders() {
  if (!supabaseClient) {
    showError('خطأ في الاتصال بقاعدة البيانات');
    return;
  }

  try {
    loadingMessage.style.display = 'block';
    errorMessage.style.display = 'none';

    const { data: orders, error } = await supabaseClient
      .from('orders')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      throw error;
    }

    displayOrders(orders);
  } catch (error) {
    console.error('Error loading orders:', error);
    showError('فشل في تحميل الطلبات: ' + error.message);
  } finally {
    loadingMessage.style.display = 'none';
  }
}

function displayOrders(orders) {
  if (!orders || orders.length === 0) {
    ordersContainer.innerHTML = '<p>لا توجد طلبات حتى الآن.</p>';
    return;
  }

  ordersContainer.innerHTML = orders.map(order => `
    <div class="saved-order-item">
      <div class="order-info">
        <h4>${order.brand} ${order.product_name}</h4>
        <p><strong>العميل:</strong> ${order.customer_name}</p>
        <p><strong>الهاتف:</strong> ${order.customer_phone || 'غير محدد'}</p>
        <p><strong>العنوان:</strong> ${order.customer_address}</p>
        <p><strong>الحجم:</strong> ${order.size} | <strong>النوع:</strong> ${order.bottle_type} | <strong>الكمية:</strong> ${order.quantity}</p>
        <p><strong>السعر الإجمالي:</strong> ${formatPrice(order.total)}</p>
        <p><strong>تاريخ الطلب:</strong> ${formatDate(order.created_at)}</p>
        ${order.promo_code ? `<p><strong>كود الخصم:</strong> ${order.promo_code} (${formatPrice(order.discount_amount)} خصم)</p>` : ''}
      </div>
    </div>
  `).join('');
}

function showError(message) {
  errorMessage.textContent = message;
  errorMessage.style.display = 'block';
  loadingMessage.style.display = 'none';
}

function exportOrdersToCSV() {
  // يمكن إضافة وظيفة تصدير لاحقاً
  alert('وظيفة التصدير ستكون متاحة قريباً');
}

document.addEventListener('DOMContentLoaded', () => {
  ordersContainer = document.getElementById('ordersContainer');
  loadingMessage = document.getElementById('loadingMessage');
  errorMessage = document.getElementById('errorMessage');
  refreshOrders = document.getElementById('refreshOrders');
  exportOrders = document.getElementById('exportOrders');

  if (refreshOrders) refreshOrders.addEventListener('click', loadOrders);
  if (exportOrders) exportOrders.addEventListener('click', exportOrdersToCSV);

  loadOrders();
});
