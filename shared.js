/* ============================================================
   MAISON VEIL — Shared JavaScript
   Cart logic, product data, nav, toast, scroll reveal
   ============================================================ */

/* ─── PRODUCT DATA ─── */
const PRODUCTS = [
  {
    id: 1, name: 'Fog Linen Trench Coat', category: 'women', sub: 'Outerwear',
    price: 18500, oldPrice: null, badge: 'new',
    colors: ['#C4B9A8','#2D2926','#8B4A2B'],
    sizes: ['XS','S','M','L','XL'],
    description: 'A masterwork in understated outerwear. Cut from a weightless fog-grey linen blend sourced from artisan mills in Rajasthan, this trench coat drapes with the effortless authority of a garment that knows exactly what it is.',
    details: ['Composition: 78% Linen, 22% Cotton','Dry clean recommended','Relaxed silhouette, true to size','Length: Midi (107 cm)','Made in India'],
    images: [
      'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=700&q=80',
      'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=700&q=80',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=700&q=80',
    ]
  },
  {
    id: 2, name: 'Shadow Drape Shirt', category: 'men', sub: 'Tops',
    price: 6200, oldPrice: 8400, badge: 'sale',
    colors: ['#1A1714','#C4B9A8'],
    sizes: ['S','M','L','XL','XXL'],
    description: 'An asymmetric drape shirt that challenges the geometry of conventional tailoring. The shadow-fall hem and oversized placket create a silhouette that is both architectural and deeply wearable.',
    details: ['Composition: 100% Egyptian Cotton','Machine wash cold','Oversized fit — size down if preferred','Chest pocket with concealed snap','Made in India'],
    images: [
      'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=700&q=80',
      'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=700&q=80',
    ]
  },
  {
    id: 3, name: 'Silk Bias Skirt', category: 'women', sub: 'Bottoms',
    price: 9800, oldPrice: null, badge: null,
    colors: ['#D6CFC4','#2D2926','#3D5A45'],
    sizes: ['XS','S','M','L'],
    description: 'Cut on the bias from pure habotai silk, this skirt moves with an almost liquid grace. The subtle flare at the hem creates a silhouette that is quietly, devastatingly elegant.',
    details: ['Composition: 100% Silk Habotai','Dry clean only','Midi length: 90cm','Invisible zip closure','Made in India'],
    images: [
      'https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?w=700&q=80',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80',
    ]
  },
  {
    id: 4, name: 'Cashmere Turtleneck', category: 'unisex', sub: 'Knitwear',
    price: 12000, oldPrice: null, badge: 'new',
    colors: ['#C4B9A8','#1A1714','#8B4A2B','#3D5A45'],
    sizes: ['XS','S','M','L','XL'],
    description: 'Grade A Mongolian cashmere, spun and knit to achieve the ideal balance of structure and softness. The rolled turtleneck sits with a natural ease that improves with every wear.',
    details: ['Composition: 100% Grade A Cashmere','Dry clean or hand wash cold','Regular fit','Ribbed cuffs and hem','Made in India'],
    images: [
      'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=700&q=80',
      'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=700&q=80',
    ]
  },
  {
    id: 5, name: 'Linen Wide-Leg Trousers', category: 'women', sub: 'Bottoms',
    price: 7800, oldPrice: null, badge: null,
    colors: ['#F5F0E8','#C4B9A8','#1A1714'],
    sizes: ['XS','S','M','L','XL'],
    description: 'Sculptural wide-leg trousers that drape magnificently from a high waist. Crafted from stonewashed Belgian linen that softens beautifully over time.',
    details: ['Composition: 100% Belgian Linen','Machine wash cold','High rise, wide leg silhouette','Elasticated back waist','Made in India'],
    images: [
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=700&q=80',
      'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=700&q=80',
    ]
  },
  {
    id: 6, name: 'Merino Crew Pullover', category: 'men', sub: 'Knitwear',
    price: 8500, oldPrice: 10500, badge: 'sale',
    colors: ['#9B9088','#1A1714','#3D5A45'],
    sizes: ['S','M','L','XL','XXL'],
    description: 'An impeccably crafted merino crew neck that transitions seamlessly from desk to dinner. The fine-gauge knit has a refined surface texture that speaks quietly of quality.',
    details: ['Composition: 100% Fine Merino Wool','Machine wash wool cycle','Regular fit','Ribbed trim throughout','Made in India'],
    images: [
      'https://images.unsplash.com/photo-1516826957135-700dedea698c?w=700&q=80',
      'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=700&q=80',
    ]
  },
  {
    id: 7, name: 'Structured Blazer', category: 'women', sub: 'Outerwear',
    price: 15000, oldPrice: null, badge: 'new',
    colors: ['#2D2926','#C4B9A8'],
    sizes: ['XS','S','M','L','XL'],
    description: 'A precision-engineered blazer with a clean single-button closure and softly padded shoulders. The half-lining allows the garment to breathe while maintaining its immaculate structure.',
    details: ['Composition: 60% Wool, 40% Polyester','Dry clean only','Fitted silhouette','Inner breast pocket','Made in India'],
    images: [
      'https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=700&q=80',
      'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=700&q=80',
    ]
  },
  {
    id: 8, name: 'Leather Belt Bag', category: 'accessories', sub: 'Bags',
    price: 5500, oldPrice: null, badge: null,
    colors: ['#8B4A2B','#1A1714','#C4B9A8'],
    sizes: ['ONE SIZE'],
    description: 'A compact belt bag in full-grain vegetable-tanned leather. The clean minimal aesthetic hides a thoughtfully organised interior. A piece that ages with stunning character.',
    details: ['Material: Full-grain vegetable-tanned leather','Zip closure main compartment','Adjustable leather belt strap','Dimensions: 22 × 14 × 7 cm','Made in India'],
    images: [
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=700&q=80',
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=700&q=80',
    ]
  },
];

/* ─── CART ─── */
const Cart = {
  get() {
    try { return JSON.parse(localStorage.getItem('mv_cart')) || []; }
    catch { return []; }
  },
  save(items) { localStorage.setItem('mv_cart', JSON.stringify(items)); },
  add(productId, size, qty = 1) {
    const items = this.get();
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;
    const key = `${productId}_${size}`;
    const existing = items.find(i => i.key === key);
    if (existing) { existing.qty += qty; }
    else { items.push({ key, productId, size, qty, name: product.name, price: product.price, image: product.images[0], sub: product.sub }); }
    this.save(items);
    this.updateBadge();
    showToast(`✓ ${product.name} added to cart`);
  },
  remove(key) {
    const items = this.get().filter(i => i.key !== key);
    this.save(items); this.updateBadge();
  },
  updateQty(key, qty) {
    const items = this.get();
    const item = items.find(i => i.key === key);
    if (item) { item.qty = qty; if (qty <= 0) { this.remove(key); return; } }
    this.save(items); this.updateBadge();
  },
  count() { return this.get().reduce((s, i) => s + i.qty, 0); },
  subtotal() { return this.get().reduce((s, i) => s + i.price * i.qty, 0); },
  updateBadge() {
    document.querySelectorAll('.cart-badge').forEach(el => {
      const c = this.count();
      el.textContent = c;
      el.style.display = c > 0 ? 'flex' : 'none';
    });
  }
};

/* ─── TOAST ─── */
function showToast(msg, duration = 3000) {
  let toast = document.getElementById('globalToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'globalToast'; toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<span class="toast-icon">✦</span> ${msg}`;
  toast.classList.add('show');
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => toast.classList.remove('show'), duration);
}

/* ─── FORMAT CURRENCY ─── */
function fmt(n) { return '₹' + n.toLocaleString('en-IN'); }

/* ─── NAV ACTIVE STATE ─── */
function setActiveNav() {
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    a.classList.toggle('active', href === page || (page === 'index.html' && href === 'index.html'));
  });
}

/* ─── MOBILE NAV ─── */
function initMobileNav() {
  const btn = document.getElementById('hamburger');
  const menu = document.getElementById('mobileNav');
  if (btn && menu) {
    btn.addEventListener('click', () => menu.classList.toggle('open'));
  }
}

/* ─── SCROLL REVEAL ─── */
function initReveal() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

/* ─── WISHLIST (localStorage) ─── */
const Wishlist = {
  get() { try { return JSON.parse(localStorage.getItem('mv_wish')) || []; } catch { return []; } },
  toggle(id) {
    let w = this.get();
    if (w.includes(id)) { w = w.filter(x => x !== id); showToast('Removed from wishlist'); }
    else { w.push(id); showToast('♡ Added to wishlist'); }
    localStorage.setItem('mv_wish', JSON.stringify(w));
    this.updateIcons();
  },
  has(id) { return this.get().includes(id); },
  updateIcons() {
    document.querySelectorAll('[data-wish]').forEach(btn => {
      const id = parseInt(btn.dataset.wish);
      btn.textContent = this.has(id) ? '♥' : '♡';
      btn.style.color = this.has(id) ? 'var(--rust)' : '';
    });
  }
};

/* ─── RENDER PRODUCT CARD ─── */
function renderProductCard(p, delay = 0) {
  const sale = p.oldPrice ? `<span class="sale">${fmt(p.price)}</span> <span class="old">${fmt(p.oldPrice)}</span>` : fmt(p.price);
  const badge = p.badge ? `<span class="badge badge-${p.badge}">${p.badge === 'new' ? 'New' : 'Sale'}</span>` : '';
  const colors = p.colors.map((c,i) => `<span class="color-dot ${i===0?'active':''}" style="background:${c}" title="${c}"></span>`).join('');
  return `
    <div class="product-card reveal" style="transition-delay:${delay}s" data-id="${p.id}">
      <div class="product-img-wrap">
        <div class="product-img-badge">${badge}</div>
        <button class="product-wishlist" data-wish="${p.id}" onclick="Wishlist.toggle(${p.id}); event.stopPropagation();">♡</button>
        <a href="product.html?id=${p.id}">
          <img src="${p.images[0]}" alt="${p.name}" loading="lazy"/>
        </a>
        <div class="product-quick">
          <button class="product-quick-btn" onclick="quickAdd(${p.id})">Quick Add</button>
        </div>
      </div>
      <div class="product-info">
        <a href="product.html?id=${p.id}">
          <div class="name">${p.name}</div>
        </a>
        <div class="sub">${p.sub}</div>
        <div class="price">${sale}</div>
        <div class="product-colors">${colors}</div>
      </div>
    </div>`;
}

function quickAdd(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  const size = p.sizes[Math.floor(p.sizes.length / 2)];
  Cart.add(id, size);
}

/* ─── RENDER NAV ─── */
function renderNav(activePage) {
  const pages = [
    { href: 'index.html', label: 'Home' },
    { href: 'shop.html', label: 'Shop' },
    { href: 'about.html', label: 'About' },
  ];
  const cartCount = Cart.count();
  return `
  <nav class="navbar">
    <div class="navbar-inner">
      <a href="index.html" class="nav-logo">Maison Veil</a>
      <ul class="nav-links">
        ${pages.map(p => `<li><a href="${p.href}" class="${p.href===activePage?'active':''}">${p.label}</a></li>`).join('')}
        <li><a href="shop.html?cat=women">Women</a></li>
        <li><a href="shop.html?cat=men">Men</a></li>
        <li><a href="shop.html?cat=accessories">Accessories</a></li>
      </ul>
      <div class="nav-actions">
        <a href="cart.html" class="nav-icon-btn">
          <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>
          <span class="cart-badge" style="display:${cartCount>0?'flex':'none'}">${cartCount}</span>
        </a>
        <button class="nav-hamburger" id="hamburger" aria-label="Menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
    <div class="nav-mobile" id="mobileNav">
      ${pages.map(p=>`<a href="${p.href}">${p.label}</a>`).join('')}
      <a href="shop.html?cat=women">Women</a>
      <a href="shop.html?cat=men">Men</a>
      <a href="shop.html?cat=accessories">Accessories</a>
      <a href="cart.html">Cart (${cartCount})</a>
    </div>
  </nav>`;
}

/* ─── RENDER FOOTER ─── */
function renderFooter() {
  return `
  <footer class="footer">
    <div class="footer-grid">
      <div>
        <span class="footer-logo">Maison Veil</span>
        <p class="footer-tagline">Luxury ready-to-wear crafted at the intersection of heritage and restraint. Rooted in India, worn across the world.</p>
        <div class="footer-social">
          <a href="#">𝕏</a><a href="#">in</a><a href="#">ig</a><a href="#">yt</a>
        </div>
      </div>
      <div>
        <div class="footer-col-title">Collections</div>
        <ul class="footer-links">
          <li><a href="shop.html">New Arrivals</a></li>
          <li><a href="shop.html?cat=women">Women</a></li>
          <li><a href="shop.html?cat=men">Men</a></li>
          <li><a href="shop.html?cat=accessories">Accessories</a></li>
        </ul>
      </div>
      <div>
        <div class="footer-col-title">Company</div>
        <ul class="footer-links">
          <li><a href="about.html">Our Story</a></li>
          <li><a href="about.html#sustainability">Sustainability</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Press</a></li>
        </ul>
      </div>
      <div>
        <div class="footer-col-title">Support</div>
        <ul class="footer-links">
          <li><a href="#">Shipping & Returns</a></li>
          <li><a href="#">Size Guide</a></li>
          <li><a href="#">Care Instructions</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span class="footer-copy">© 2026 Maison Veil. All rights reserved.</span>
      <div class="payment-methods">
        <span class="pay-chip">Visa</span>
        <span class="pay-chip">Mastercard</span>
        <span class="pay-chip">UPI</span>
        <span class="pay-chip">RazorPay</span>
      </div>
    </div>
  </footer>`;
}

/* ─── RENDER MARQUEE ─── */
function renderMarquee() {
  const items = ['Free shipping over ₹5,000','New AW \'26 Collection — Now Live','Crafted in India · Worn Globally','Members receive early access'];
  const double = [...items,...items].map(t=>`<span class="marquee-item">${t}</span><span class="marquee-sep">◆</span>`).join('');
  return `<div class="marquee-bar"><div class="marquee-track">${double}</div></div>`;
}

/* ─── INIT ─── */
document.addEventListener('DOMContentLoaded', () => {
  Cart.updateBadge();
  Wishlist.updateIcons();
  initMobileNav();
  initReveal();
});
