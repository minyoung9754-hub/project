// ============================================================
// script.js — 피부타입 스킨케어 가이드 인터랙션
// ============================================================

'use strict';

// ── 상태 관리 ──────────────────────────────────────────
let currentSkinType = null;
let currentRoutineTab = 'am';

// ── DOM 요소 ───────────────────────────────────────────
const skinTypeGrid   = document.getElementById('skin-type-grid');
const mainContent    = document.getElementById('main-content');
const selectedBanner = document.getElementById('selected-banner');
const selectedEmoji  = document.getElementById('selected-emoji');
const selectedName   = document.getElementById('selected-name');
const selectedDesc   = document.getElementById('selected-desc');
const charTags       = document.getElementById('characteristics-tags');
const ingredientsGrid = document.getElementById('ingredients-grid');
const productsGrid   = document.getElementById('products-grid');
const routineContent = document.getElementById('routine-content');
const modalOverlay   = document.getElementById('modal-overlay');
const modalClose     = document.getElementById('modal-close');
const tabAm          = document.getElementById('tab-am');
const tabPm          = document.getElementById('tab-pm');

// ── DOM 요소 (검색 모달) ───────────────────────────────────────────
const searchModalOverlay = document.getElementById('search-modal-overlay');
const searchModalClose = document.getElementById('search-modal-close');
const searchOpenBtn = document.getElementById('ingredient-search-open-btn');
const navSearchBtn = document.getElementById('nav-search-btn');

const tagInputWrapper = document.getElementById('tag-input-wrapper');
const tagList = document.getElementById('tag-list');
const tagInput = document.getElementById('ingredient-text-input');
const quickTagBtns = document.querySelectorAll('.quick-tag-btn');
const searchSubmitBtn = document.getElementById('search-submit-btn');

const searchResults = document.getElementById('search-results');
const searchResultsTitle = document.getElementById('search-results-title');
const searchResultsGrid = document.getElementById('search-results-grid');
const noResults = document.getElementById('no-results');
const searchResetBtn = document.getElementById('search-reset-btn');

let selectedTags = [];

// ── 1. 피부 타입 카드 생성 ──────────────────────────────
function renderSkinTypeCards() {
  const types = [
    { key: 'dry',         sub: '수분 부족, 당김, 각질' },
    { key: 'oily',        sub: '과잉 피지, 번들거림, 모공' },
    { key: 'normal',      sub: '균형 잡힌 건강한 피부' },
    { key: 'combination', sub: 'T존 지성 / U존 건성' },
    { key: 'sensitive',   sub: '홍조, 자극, 민감 반응' }
  ];

  skinTypeGrid.innerHTML = '';
  types.forEach(({ key, sub }) => {
    const data = SKIN_DATA[key];
    const card = document.createElement('button');
    card.className = 'skin-card reveal';
    card.setAttribute('id', `skin-card-${key}`);
    card.setAttribute('aria-label', `${data.name} 피부 타입 선택`);
    card.style.setProperty('--card-color', data.color);
    card.innerHTML = `
      <span class="skin-card-emoji">${data.emoji}</span>
      <div class="skin-card-name">${data.name}피부</div>
      <div class="skin-card-sub">${sub}</div>
    `;
    card.addEventListener('click', () => selectSkinType(key));
    skinTypeGrid.appendChild(card);
  });

  // Reveal 애니메이션 트리거
  observeReveal();
}

// ── 2. 피부 타입 선택 ──────────────────────────────────
function selectSkinType(key) {
  if (currentSkinType === key) return;
  currentSkinType = key;

  const data = SKIN_DATA[key];

  // 카드 active 상태 업데이트
  document.querySelectorAll('.skin-card').forEach(c => c.classList.remove('active'));
  const activeCard = document.getElementById(`skin-card-${key}`);
  if (activeCard) activeCard.classList.add('active');

  // 배너 업데이트
  selectedBanner.style.background = data.gradient;
  selectedEmoji.textContent = data.emoji;
  selectedName.textContent = `${data.name} 피부`;
  selectedDesc.textContent = data.description;

  // 특성 태그
  charTags.innerHTML = data.characteristics
    .map(c => `<span class="char-tag">${c}</span>`)
    .join('');

  // 콘텐츠 표시
  mainContent.style.display = 'block';

  // 섹션 렌더링
  renderIngredients(data);
  renderProducts(data);
  renderRoutine(data, 'am');

  // 루틴 탭 리셋
  currentRoutineTab = 'am';
  tabAm.classList.add('active');
  tabPm.classList.remove('active');

  // 스크롤
  setTimeout(() => {
    selectedBanner.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 100);
}

// ── 3. 성분 카드 렌더링 ────────────────────────────────
function renderIngredients(data) {
  ingredientsGrid.innerHTML = '';
  data.ingredients.forEach((ing, i) => {
    const card = document.createElement('article');
    card.className = 'ingredient-card reveal';
    card.setAttribute('id', `ingredient-card-${ing.id}`);
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', `${ing.name} 성분 상세 보기`);
    card.style.animationDelay = `${i * 0.07}s`;
    card.innerHTML = `
      <div class="ingredient-card-header">
        <span class="ingredient-category-badge">${ing.category}</span>
        <span class="ingredient-tag">${ing.tag}</span>
      </div>
      <div class="ingredient-name-ko">${ing.name}</div>
      <div class="ingredient-name-en">${ing.englishName}</div>
      <div class="ingredient-formula">
        <span class="ingredient-formula-label">분자식</span>
        ${ing.formula}
      </div>
      <p class="ingredient-role">${ing.role}</p>
      <div class="click-hint">🔬 클릭하면 화학 구조와 작용 원리를 볼 수 있어요</div>
    `;
    card.addEventListener('click', () => openIngredientModal(ing));
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') openIngredientModal(ing);
    });
    ingredientsGrid.appendChild(card);
  });

  observeReveal();
}

// ── 4. 성분 상세 모달 ──────────────────────────────────
function openIngredientModal(ing) {
  document.getElementById('modal-category').textContent   = ing.category;
  document.getElementById('modal-title').textContent      = ing.name;
  document.getElementById('modal-en-name').textContent    = ing.englishName;
  document.getElementById('modal-formula').textContent    = ing.formula;
  document.getElementById('modal-role').textContent       = ing.role;
  document.getElementById('modal-structure').textContent  = ing.chemicalStructure;
  document.getElementById('modal-mechanism').textContent  = ing.mechanism;
  document.getElementById('modal-caution').textContent    = ing.caution;

  modalOverlay.classList.add('open');
  modalOverlay.removeAttribute('aria-hidden');
  document.body.style.overflow = 'hidden';
  modalClose.focus();
}

function closeModal() {
  modalOverlay.classList.remove('open');
  modalOverlay.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

// 모달 이벤트
modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', e => {
  if (e.target === modalOverlay) closeModal();
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

// ── 5. 제품 카드 렌더링 ────────────────────────────────
function renderProducts(data) {
  productsGrid.innerHTML = '';
  data.products.forEach((prod, i) => {
    const card = document.createElement('article');
    card.className = 'product-card reveal';
    card.setAttribute('id', `product-card-${data.id}-${i}`);
    card.style.animationDelay = `${i * 0.1}s`;

    const tagsHtml = prod.keyIngredients
      .map(t => `<span class="ingredient-tag-pill">${t}</span>`)
      .join('');

    card.innerHTML = `
      <div class="product-number">${i + 1}</div>
      <div class="product-info">
        <span class="product-type-badge">${prod.type}</span>
        <div class="product-brand">${prod.brand}</div>
        <div class="product-name">${prod.name}</div>
        <p class="product-desc">${prod.description}</p>
        <div class="product-ingredients-tags">${tagsHtml}</div>
        <div class="product-price">${prod.price}</div>
      </div>
    `;
    productsGrid.appendChild(card);
  });

  observeReveal();
}

// ── 6. 루틴 렌더링 ─────────────────────────────────────
function renderRoutine(data, tab) {
  const steps = data.routine[tab];
  routineContent.innerHTML = '';

  const grid = document.createElement('div');
  grid.className = 'routine-steps';

  steps.forEach((step, i) => {
    const card = document.createElement('article');
    card.className = 'routine-step-card reveal';
    card.setAttribute('id', `routine-step-${tab}-${i}`);
    card.style.animationDelay = `${i * 0.08}s`;
    card.innerHTML = `
      <div class="step-header">
        <div class="step-number">${step.step}</div>
        <span class="step-icon">${step.icon}</span>
        <div class="step-name">${step.name}</div>
        <span class="step-time">${step.time}</span>
      </div>
      <p class="step-desc">${step.description}</p>
      <div class="step-tip">${step.tip}</div>
    `;
    grid.appendChild(card);
  });

  routineContent.appendChild(grid);
  observeReveal();
}

// ── 7. 루틴 탭 전환 ────────────────────────────────────
tabAm.addEventListener('click', () => {
  if (currentRoutineTab === 'am') return;
  currentRoutineTab = 'am';
  tabAm.classList.add('active');
  tabPm.classList.remove('active');
  if (currentSkinType) renderRoutine(SKIN_DATA[currentSkinType], 'am');
});

tabPm.addEventListener('click', () => {
  if (currentRoutineTab === 'pm') return;
  currentRoutineTab = 'pm';
  tabPm.classList.add('active');
  tabAm.classList.remove('active');
  if (currentSkinType) renderRoutine(SKIN_DATA[currentSkinType], 'pm');
});

// ── 8. Intersection Observer (reveal 애니메이션) ────────
function observeReveal() {
  const items = document.querySelectorAll('.reveal:not(.visible)');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  items.forEach(item => observer.observe(item));
}

// ── 9. 부드러운 스크롤 + 헤더 Active Link ────────────────
function setupNavLinks() {
  document.querySelectorAll('.nav-links a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

// ── 10. 헤더 스크롤 효과 ───────────────────────────────
function setupHeaderScroll() {
  const header = document.querySelector('.header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.style.boxShadow = '0 4px 24px rgba(0,0,0,0.08)';
    } else {
      header.style.boxShadow = 'none';
    }
  }, { passive: true });
}

// ── 11. 검색 모달 열기/닫기 ────────────────────────────────
function openSearchModal() {
  searchModalOverlay.classList.add('open');
  searchModalOverlay.removeAttribute('aria-hidden');
  document.body.style.overflow = 'hidden';
  tagInput.focus();
}

function closeSearchModal() {
  searchModalOverlay.classList.remove('open');
  searchModalOverlay.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

searchOpenBtn?.addEventListener('click', openSearchModal);
navSearchBtn?.addEventListener('click', openSearchModal);
searchModalClose?.addEventListener('click', closeSearchModal);

searchModalOverlay?.addEventListener('click', e => {
  if (e.target === searchModalOverlay) closeSearchModal();
});

// ── 12. 태그 입력 로직 ──────────────────────────────────
function renderTags() {
  tagList.innerHTML = '';
  selectedTags.forEach((tag, index) => {
    const el = document.createElement('span');
    el.className = 'input-tag';
    el.innerHTML = `
      ${tag}
      <button class="input-tag-remove" data-index="${index}" aria-label="삭제">✕</button>
    `;
    tagList.appendChild(el);
  });

  // 삭제 이벤트
  document.querySelectorAll('.input-tag-remove').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const idx = e.target.getAttribute('data-index');
      selectedTags.splice(idx, 1);
      renderTags();
    });
  });

  // 버튼 활성화
  searchSubmitBtn.disabled = selectedTags.length === 0;
}

function addTag(val) {
  const trimmed = val.trim();
  if (trimmed && !selectedTags.includes(trimmed)) {
    selectedTags.push(trimmed);
    renderTags();
  }
  tagInput.value = '';
}

tagInput?.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ',') {
    e.preventDefault();
    addTag(tagInput.value);
  } else if (e.key === 'Backspace' && tagInput.value === '' && selectedTags.length > 0) {
    selectedTags.pop();
    renderTags();
  }
});

quickTagBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    addTag(btn.getAttribute('data-ing'));
  });
});

tagInputWrapper?.addEventListener('click', () => {
  tagInput.focus();
});

// ── 13. 검색 로직 ──────────────────────────────────
function performSearch() {
  if (selectedTags.length === 0) return;

  // 전체 제품 수집
  let allProducts = [];
  Object.keys(SKIN_DATA).forEach(typeKey => {
    const data = SKIN_DATA[typeKey];
    data.products.forEach(prod => {
      // 중복 방지 로직 (이름 기준)
      if (!allProducts.find(p => p.name === prod.name)) {
        allProducts.push({
          ...prod,
          skinTypeLabel: data.name,
          skinTypeColor: data.color,
          productImage: data.productImage
        });
      }
    });
  });

  // 매칭 스코어 계산
  let matchedProducts = allProducts.map(prod => {
    let score = 0;
    let hitTags = [];
    
    selectedTags.forEach(tag => {
      // 제품 설명이나 키 성분에 포함되어 있는지 확인
      const isHit = prod.keyIngredients.some(ing => ing.includes(tag)) || prod.description.includes(tag);
      if (isHit) {
        score++;
        hitTags.push(tag);
      }
    });

    return { ...prod, score, hitTags };
  }).filter(p => p.score > 0);

  // 점수 순 정렬
  matchedProducts.sort((a, b) => b.score - a.score);

  renderSearchResults(matchedProducts);
}

function renderSearchResults(results) {
  searchResults.style.display = 'block';
  searchResultsGrid.innerHTML = '';
  
  if (results.length === 0) {
    searchResultsGrid.style.display = 'none';
    noResults.style.display = 'block';
    searchResultsTitle.textContent = `추천 결과를 찾지 못했어요`;
  } else {
    searchResultsGrid.style.display = 'flex';
    noResults.style.display = 'none';
    searchResultsTitle.textContent = `총 ${results.length}개의 유사 제품을 찾았어요`;

    results.forEach(prod => {
      const card = document.createElement('div');
      card.className = 'search-result-card';
      
      const tagsHtml = prod.keyIngredients.map(ing => {
        const isHit = prod.hitTags.some(t => ing.includes(t));
        return `<span class="matched-tag ${isHit ? 'hit' : 'miss'}">${ing}</span>`;
      }).join('');

      card.innerHTML = `
        <div class="result-score-badge">
          <span class="result-score-num">${prod.score}</span>
          매칭
        </div>
        <div class="result-info">
          <span class="result-skin-type">${prod.skinTypeLabel} 추천</span>
          <div class="result-brand">${prod.brand}</div>
          <div class="result-name">${prod.name}</div>
          <div class="result-matched-tags">${tagsHtml}</div>
          <div class="result-price">${prod.price}</div>
        </div>
      `;
      searchResultsGrid.appendChild(card);
    });
  }
}

searchSubmitBtn?.addEventListener('click', performSearch);

searchResetBtn?.addEventListener('click', () => {
  selectedTags = [];
  renderTags();
  searchResults.style.display = 'none';
  tagInput.focus();
});

// ── 초기화 ─────────────────────────────────────────────
function init() {
  renderSkinTypeCards();
  setupNavLinks();
  setupHeaderScroll();
}

document.addEventListener('DOMContentLoaded', init);
