const state = { category: 'All', query: '', sort: 'az', slide: 0 };
const data = Array.isArray(movies) ? movies : [];
const getCategories = m => Array.isArray(m.categories) ? m.categories : (m.category ? [m.category] : []);
const allCategories = [...new Set(['All', ...categories, ...data.flatMap(getCategories)])];
const grid = document.getElementById('movieGrid'), empty = document.getElementById('emptyState'), tabs = document.getElementById('categoryTabs'), categoryCards = document.getElementById('categoryCards');

function escapeHtml(value='') { return String(value).replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c])); }
function renderTabs() { tabs.innerHTML = allCategories.map(c => `<button class="category-tab ${state.category===c?'active':''}" data-category="${escapeHtml(c)}">${escapeHtml(c)}</button>`).join(''); tabs.querySelectorAll('button').forEach(b=>b.onclick=()=>{state.category=b.dataset.category;renderTabs();renderMovies();}); }
function renderMovies() {
  let filtered = data.filter(m => { const q=state.query.toLowerCase(); const cats=getCategories(m); return (state.category==='All'||cats.includes(state.category)) && (!q||`${m.title} ${m.originalTitle||''} ${cats.join(' ')} ${(m.genres||[]).join(' ')} ${m.year||''} ${m.director||''}`.toLowerCase().includes(q)); });
  filtered.sort((a,b)=>state.sort==='za'?b.title.localeCompare(a.title):state.sort==='year-new'?(b.year||0)-(a.year||0):state.sort==='year-old'?(a.year||0)-(b.year||0):a.title.localeCompare(b.title));
  grid.innerHTML=filtered.map(movie=>{ const cats=getCategories(movie); const cover=movie.cover&&!movie.cover.includes('PASTE-')?`<img loading="lazy" src="${escapeHtml(movie.cover)}" alt="${escapeHtml(movie.title)} cover" onerror="this.style.display='none'">`:`<div class="fallback">${escapeHtml(movie.title)}</div>`; return `<article class="movie-card" data-index="${data.indexOf(movie)}" tabindex="0" role="button">${cover}<span class="movie-badge">${escapeHtml(cats[0]||'Movie')}</span><div class="movie-info"><h3>${escapeHtml(movie.title)}</h3><p>${movie.year||'—'} · ${movie.status==='watched'?'Watched':'To watch'}</p></div></article>`; }).join('');
  grid.querySelectorAll('.movie-card').forEach(card=>{const open=()=>openMovie(Number(card.dataset.index));card.onclick=open;card.onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();open();}};}); empty.hidden=filtered.length!==0;
}
function renderCategoryCards(){const real=allCategories.filter(c=>c!=='All');categoryCards.innerHTML=real.map(c=>{const n=data.filter(m=>getCategories(m).includes(c)).length;return `<button class="category-card" data-category="${escapeHtml(c)}">${escapeHtml(c)}<small>${n} ${n===1?'movie':'movies'}</small></button>`}).join('');categoryCards.querySelectorAll('button').forEach(b=>b.onclick=()=>{state.category=b.dataset.category;document.getElementById('library').scrollIntoView({behavior:'smooth'});renderTabs();renderMovies();});}
function renderStats(){document.getElementById('movieCount').textContent=data.length;document.getElementById('categoryCount').textContent=new Set(data.flatMap(getCategories)).size;document.getElementById('watchCount').textContent=data.filter(m=>m.status!=='watched').length;}

function setText(id,value){document.getElementById(id).textContent=value||'—';}
function openMovie(index){
  const m=data[index]; if(!m)return;
  const cats=getCategories(m);
  setText('detailTitle',m.title); setText('detailCategory',cats.join(' · ')||'Movie'); setText('detailMeta',[m.year,m.runtime,m.ageRating,m.rating,m.status==='watched'?'Watched':'To watch'].filter(Boolean).join(' · ')); setText('detailDescription',m.description);
  const cover=document.getElementById('detailCover'); cover.src=m.cover||''; cover.alt=`${m.title} cover`;
  const back=document.getElementById('detailBackdrop'); back.src=m.backdrop||m.cover||''; back.alt='';
  document.getElementById('detailGenres').innerHTML=(m.genres||[]).map(g=>`<span>${escapeHtml(g)}</span>`).join('');
  const facts=[['Original title',m.originalTitle],['Release date',m.releaseDate],['Categories',cats.join(', ')],['Location',m.location],['Director',m.director],['Studio',m.studio],['Language',m.language],['Country',m.country],['Franchise',m.franchise],['Collection',m.collection]];
  document.getElementById('detailFacts').innerHTML=facts.filter(x=>x[1]).map(x=>`<div><span>${escapeHtml(x[0])}</span><strong>${escapeHtml(x[1])}</strong></div>`).join('');
  setText('detailCast',(m.cast||[]).join(', ')); setText('detailNotes',m.notes); document.getElementById('detailNotesWrap').hidden=!m.notes;
  const modal=document.getElementById('movieModal');modal.hidden=false;modal.setAttribute('aria-hidden','false');document.body.classList.add('modal-open');
}
function closeMovie(){const modal=document.getElementById('movieModal');modal.hidden=true;modal.setAttribute('aria-hidden','true');document.body.classList.remove('modal-open');}
document.querySelectorAll('[data-close-modal]').forEach(el=>el.addEventListener('click',closeMovie));document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMovie();});

function renderCarousel(){const slides=Array.isArray(carouselSlides)?carouselSlides:[],track=document.getElementById('carouselTrack'),dots=document.getElementById('carouselDots');if(!slides.length){track.innerHTML='';dots.innerHTML='';return;}track.innerHTML=slides.map(s=>`<div class="slide"><img src="${escapeHtml(s.image)}" alt=""></div>`).join('');dots.innerHTML=slides.map((_,i)=>`<button class="dot ${i===0?'active':''}" aria-label="Show slide ${i+1}"></button>`).join('');dots.querySelectorAll('.dot').forEach((d,i)=>d.onclick=()=>goToSlide(i));updateCarouselText();setInterval(()=>goToSlide((state.slide+1)%slides.length),5000);}
function goToSlide(index){if(!carouselSlides?.length)return;state.slide=index;document.getElementById('carouselTrack').style.transform=`translateX(-${index*100}%)`;document.querySelectorAll('.dot').forEach((d,i)=>d.classList.toggle('active',i===index));updateCarouselText();}
function updateCarouselText(){const s=carouselSlides?.[state.slide];if(!s)return;setText('spotlightTitle',s.title);setText('spotlightText',s.text);}

document.getElementById('search').oninput=e=>{state.query=e.target.value;renderMovies();};document.getElementById('sort').onchange=e=>{state.sort=e.target.value;renderMovies();};document.getElementById('themeToggle').onclick=()=>document.body.classList.toggle('light');
const lightStyle=document.createElement('style');lightStyle.textContent=`.light{--bg:#f4f4f6;--panel:#fff;--panel2:#e9e9ed;--text:#111218;--muted:#666873;--line:rgba(0,0,0,.1)}.light .topbar{background:rgba(244,244,246,.84)}.light .search input,.light .controls select{color:var(--text)}.light .orbit-card{background:linear-gradient(145deg,#fff,#ddd)}`;document.head.appendChild(lightStyle);
renderTabs();renderMovies();renderCategoryCards();renderStats();renderCarousel();
