// ===== STICKY NAVBAR SHADOW =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 10);
});

// ===== MOBILE NAV TOGGLE =====
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Close mobile nav on link click
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const offset = navbar.offsetHeight + 8;
    window.scrollTo({ top: target.offsetTop - offset, behavior: 'smooth' });
  });
});

// ===== FAVORITES TOGGLE =====
document.querySelectorAll('.fav-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const active = btn.classList.toggle('active');
    btn.textContent = active ? '♥' : '♡';
  });
});

// ===== PET CARD FILTER =====
const cards = Array.from(document.querySelectorAll('.pet-card'));
const noResults = document.getElementById('noResults');

const filterType   = document.getElementById('filterType');
const filterAge    = document.getElementById('filterAge');
const filterSize   = document.getElementById('filterSize');
const filterGender = document.getElementById('filterGender');
const filterSearch = document.getElementById('filterSearch');
const filterSort   = document.getElementById('filterSort');
const grid         = document.getElementById('cardsGrid');

function applyFilters() {
  const type   = filterType.value;
  const age    = filterAge.value;
  const size   = filterSize.value;
  const gender = filterGender.value;
  const search = filterSearch.value.trim().toLowerCase();
  const sort   = filterSort.value;

  let visible = cards.filter(card => {
    if (type   && card.dataset.type   !== type)   return false;
    if (age    && card.dataset.age    !== age)     return false;
    if (size   && card.dataset.size   !== size)    return false;
    if (gender && card.dataset.gender !== gender)  return false;
    if (search && !card.dataset.name.toLowerCase().includes(search)) return false;
    return true;
  });

  if (sort === 'name') {
    visible.sort((a, b) => a.dataset.name.localeCompare(b.dataset.name));
  }

  cards.forEach(c => (c.style.display = 'none'));
  visible.forEach(c => (c.style.display = ''));

  // Re-append in sorted order
  visible.forEach(c => grid.appendChild(c));

  noResults.style.display = visible.length === 0 ? 'block' : 'none';
}

[filterType, filterAge, filterSize, filterGender, filterSort].forEach(el =>
  el.addEventListener('change', applyFilters)
);
filterSearch.addEventListener('input', applyFilters);
