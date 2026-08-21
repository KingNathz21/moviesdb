const state = { category: 'All', query: '', sort: 'az', slide: 0 };
const data = Array.isArray(movies) ? movies : [];
const allCategories = [...new Set(['All', ...categories, ...data.map(m => m.category).filter(Boolean)])];

const grid = document.getElementById('movieGrid');
const empty = document.getElementById('emptyState');
const tabs = document.getElementById('categoryTabs');
const categoryCards = document.getElementById('categoryCards');

function escapeHtml(value='') {
  return String(value).replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
}

function renderTabs() {
  tabs.innerHTML = allCategories.map(c => `<button class="category-tab ${state.category===c?'active':''}" data-category="${escapeHtml(c)}">${escapeHtml(c)}</button>`).join('');
  tabs.querySelectorAll('button').forEach(btn => btn.addEventListener('click', () => { state.category = btn.dataset.category; renderTabs(); renderMovies(); }));
}

function renderMovies() {
  let filtered = data.filter(m => {
    const matchesCategory = state.category === 'All' || m.category === state.category;
    const q = state.query.toLowerCase();
    return matchesCategory && (!q || `${m.title} ${m.category} ${m.year||''}`.toLowerCase().includes(q));
  });
  filtered.sort((a,b) => {
    if (state.sort === 'za') return b.title.localeCompare(a.title);
    if (state.sort === 'year-new') return (b.year||0)-(a.year||0);
    if (state.sort === 'year-old') return (a.year||0)-(b.year||0);
    return a.title.localeCompare(b.title);
  });

  grid.innerHTML = filtered.map(movie => {
    const cover = movie.cover && !movie.cover.includes('PASTE-') ? `<img loading="lazy" src="${escapeHtml(movie.cover)}" alt="${escapeHtml(movie.title)} cover" onerror="this.replaceWith(Object.assign(document.createElement('div'),{className:'fallback',textContent:'Cover unavailable'}))">` : `<div class="fallback">${escapeHtml(movie.title)}</div>`;
    return `<article class="movie-card">${cover}<span class="movie-badge">${escapeHtml(movie.category||'Movie')}</span><div class="movie-info"><h3>${escapeHtml(movie.title)}</h3><p>${movie.year||'—'} · ${movie.status==='watched'?'Watched':'To watch'}</p></div></article>`;
  }).join('');
  empty.hidden = filtered.length !== 0;
}

function renderCategoryCards() {
  const realCategories = allCategories.filter(c => c !== 'All');
  categoryCards.innerHTML = realCategories.map(c => {
    const count = data.filter(m => m.category === c).length;
    return `<button class="category-card" data-category="${escapeHtml(c)}">${escapeHtml(c)}<small>${count} ${count===1?'movie':'movies'}</small></button>`;
  }).join('');
  categoryCards.querySelectorAll('button').forEach(btn => btn.addEventListener('click', () => {
    state.category = btn.dataset.category;
    document.getElementById('library').scrollIntoView({behavior:'smooth'});
    renderTabs(); renderMovies();
  }));
}

function renderStats() {
  document.getElementById('movieCount').textContent = data.length;
  document.getElementById('categoryCount').textContent = new Set(data.map(m=>m.category).filter(Boolean)).size;
  document.getElementById('watchCount').textContent = data.filter(m=>m.status !== 'watched').length;
}

function renderCarousel() {
  const slides = Array.isArray(carouselSlides) ? carouselSlides : [];
  const track = document.getElementById('carouselTrack');
  const dots = document.getElementById('carouselDots');
  if (!slides.length) { track.innerHTML=''; dots.innerHTML=''; return; }
  track.innerHTML = slides.map(s => `<div class="slide"><img src="${escapeHtml(s.image)}" alt=""></div>`).join('');
  dots.innerHTML = slides.map((_,i)=>`<button class="dot ${i===0?'active':''}" aria-label="Show slide ${i+1}"></button>`).join('');
  dots.querySelectorAll('.dot').forEach((dot,i)=>dot.addEventListener('click',()=>goToSlide(i)));
  updateCarouselText();
  setInterval(()=>goToSlide((state.slide+1)%slides.length), 5000);
}

function goToSlide(index) {
  const slides = carouselSlides;
  if (!slides?.length) return;
  state.slide = index;
  document.getElementById('carouselTrack').style.transform = `translateX(-${index*100}%)`;
  document.querySelectorAll('.dot').forEach((d,i)=>d.classList.toggle('active',i===index));
  updateCarouselText();
}
function updateCarouselText() {
  const slide = carouselSlides?.[state.slide];
  if (!slide) return;
  document.getElementById('spotlightTitle').textContent = slide.title || '';
  document.getElementById('spotlightText').textContent = slide.text || '';
}

document.getElementById('search').addEventListener('input', e => { state.query=e.target.value; renderMovies(); });
document.getElementById('sort').addEventListener('change', e => { state.sort=e.target.value; renderMovies(); });
document.getElementById('themeToggle').addEventListener('click', () => document.body.classList.toggle('light'));

// Keep the dark design as the default; a small light mode is available without changing the data.
const lightStyle = document.createElement('style');
lightStyle.textContent = `.light{--bg:#f4f4f6;--panel:#fff;--panel2:#e9e9ed;--text:#111218;--muted:#666873;--line:rgba(0,0,0,.1)}.light .topbar{background:rgba(244,244,246,.84)}.light .search input,.light .controls select{color:var(--text)}.light .orbit-card{background:linear-gradient(145deg,#fff,#ddd)}`;
document.head.appendChild(lightStyle);

renderTabs(); renderMovies(); renderCategoryCards(); renderStats(); renderCarousel();
