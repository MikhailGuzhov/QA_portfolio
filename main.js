/* ===== Smooth scroll (кроме ссылок без href-якоря) ===== */
document.querySelectorAll('nav a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href');
    const target = document.querySelector(id);
    if (target) {
      e.preventDefault();
      window.scrollTo({
        top: target.offsetTop - 64,
        behavior: 'smooth'
      });
    }
  });
});

/* ===== Универсальная система модалок ===== */

const body = document.body;

/**
 * Привязка модалки
 * @param {string[]} openerIds - ID кнопок/ссылок открытия
 * @param {string} modalId - ID модалки (контейнер .modal-bg)
 */
function bindModal(openerIds, modalId) {
  const modal = document.getElementById(modalId);
  if (!modal) return;

  // Открытие
  openerIds.forEach(id => {
    const btn = document.getElementById(id);
    if (!btn) return;
    btn.addEventListener('click', e => {
      e.preventDefault();
      openModal(modal);
    });
  });

  // Кнопка X
  const closeBtn = modal.querySelector('.close-modal');
  if (closeBtn) closeBtn.addEventListener('click', () => closeModal(modal));

  // Кнопки "Назад" / "Закрыть"
  modal.querySelectorAll('.back-btn').forEach(b =>
    b.addEventListener('click', () => closeModal(modal))
  );

  // Клик по фону
  modal.addEventListener('click', e => {
    if (e.target === modal) closeModal(modal);
  });
}

function openModal(modal) {
  modal.classList.add('open');
  body.style.overflow = 'hidden';
}

function closeModal(modal) {
  modal.classList.remove('open');
  // Проверяем нет ли других открытых
  const anyOpen = document.querySelector('.modal-bg.open');
  if (!anyOpen) body.style.overflow = '';
}

// ESC глобально
window.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal-bg.open').forEach(m => closeModal(m));
  }
});

/* ===== Привязки конкретных модалок ===== */
bindModal(['petBtn','openPetBtn'], 'petModal');
bindModal(['openAutoBtn'], 'autoModal');
bindModal(['openCicdBtn'], 'cicdModal');
bindModal(['openAboutBtn'], 'aboutModal');
bindModal(['openResumeBtn'], 'resumeModal'); // если кнопка есть

/* ===== Тултипы: адаптация краёв (опционально) ===== */
function adjustTooltip(badge) {
  badge.classList.remove('tip-left','tip-right','tip-top');
  const rect = badge.getBoundingClientRect();
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const spaceBottom = vh - rect.bottom;
  const spaceTop = rect.top;
  if (spaceBottom < 70 && spaceTop > spaceBottom) badge.classList.add('tip-top');
  if (rect.left < 40) badge.classList.add('tip-left');
  else if (vw - rect.right < 40) badge.classList.add('tip-right');
}

document.querySelectorAll('.badge').forEach(b => {
  b.addEventListener('mouseenter', () => adjustTooltip(b));
  b.addEventListener('focus', () => adjustTooltip(b));
});
