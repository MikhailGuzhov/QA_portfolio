// Плавная прокрутка по якорям (кроме Pet Projects)
document.querySelectorAll('nav a').forEach(link => {
    if (link.id !== 'petBtn') {
        link.addEventListener('click', e => {
            const id = link.getAttribute('href');
            const target = document.querySelector(id);
            if (target) {
                e.preventDefault();
                window.scrollTo({ top: target.offsetTop - 64, behavior: 'smooth' });
            }
        });
    }
});
// Pet Project Modal logic
const petModal = document.getElementById('petModal');
const openPetBtn = document.getElementById('petBtn');
const openPetBtn2 = document.getElementById('openPetBtn');
const closePetModal = document.getElementById('closePetModal');
const backToMain = document.getElementById('backToMain');

function openModal() {
    petModal.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    petModal.classList.remove('open');
    document.body.style.overflow = '';
}
openPetBtn.addEventListener('click', e => {
    e.preventDefault();
    openModal();
});
openPetBtn2.addEventListener('click', openModal);
closePetModal.addEventListener('click', closeModal);
backToMain.addEventListener('click', closeModal);
// Close modal on ESC or bg click
petModal.addEventListener('click', e => { if (e.target === petModal) closeModal(); });
window.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });



// ===== AUTOTESTS MODAL =====
const autoModal = document.getElementById('autoModal');
const openAutoBtn = document.getElementById('openAutoBtn');
const closeAuto = document.getElementById('closeAutoModal');
const backAuto = document.getElementById('backFromAuto');

openAutoBtn.addEventListener('click', () => autoModal.classList.add('open'));
closeAuto.addEventListener('click', () => autoModal.classList.remove('open'));
backAuto.addEventListener('click', () => autoModal.classList.remove('open'));
autoModal.addEventListener('click', e => { if (e.target === autoModal) autoModal.classList.remove('open'); });

// ESC
window.addEventListener('keydown', e => { if (e.key === 'Escape') autoModal.classList.remove('open'); });


// ===== CI/CD MODAL =====
const cicdModal = document.getElementById('cicdModal');
const openCicdBtn = document.getElementById('openCicdBtn');
const closeCicd = document.getElementById('closeCicdModal');
const backCicd = document.getElementById('backFromCicd');

openCicdBtn.addEventListener('click', () => cicdModal.classList.add('open'));
closeCicd.addEventListener('click', () => cicdModal.classList.remove('open'));
backCicd.addEventListener('click', () => cicdModal.classList.remove('open'));
cicdModal.addEventListener('click', e => { if (e.target === cicdModal) cicdModal.classList.remove('open'); });

window.addEventListener('keydown', e => { if (e.key === 'Escape') cicdModal.classList.remove('open'); });

// ===== ABOUT MODAL =====
const aboutModal = document.getElementById('aboutModal');
const openAboutBtn = document.getElementById('openAboutBtn');
const closeAbout = document.getElementById('closeAboutModal');
const backAbout = document.getElementById('backFromAbout');

openAboutBtn.addEventListener('click', () => aboutModal.classList.add('open'));
closeAbout.addEventListener('click', () => aboutModal.classList.remove('open'));
backAbout.addEventListener('click', () => aboutModal.classList.remove('open'));
aboutModal.addEventListener('click', e => { if (e.target === aboutModal) aboutModal.classList.remove('open'); });
window.addEventListener('keydown', e => { if (e.key === 'Escape') aboutModal.classList.remove('open'); });

// Resume modal
const resumeModal = document.getElementById('resumeModal');
const openResumeBtn = document.getElementById('openResumeBtn');
const closeResumeModal = document.getElementById('closeResumeModal');
const backFromResume = document.getElementById('backFromResume');

function openModal(m){ m.classList.add('open'); document.documentElement.style.overflow='hidden'; }
function closeModal(m){ m.classList.remove('open'); document.documentElement.style.overflow=''; }

if(openResumeBtn){
  openResumeBtn.addEventListener('click', ()=>openModal(resumeModal));
}
if(closeResumeModal){
  closeResumeModal.addEventListener('click', ()=>closeModal(resumeModal));
}
if(backFromResume){
  backFromResume.addEventListener('click', ()=>closeModal(resumeModal));
}
resumeModal?.addEventListener('click', e=>{
  if(e.target===resumeModal) closeModal(resumeModal);
});
