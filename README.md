# QA Portfolio

Личный сайт-портфолио QA-инженера **Михаила Гужова**

**Демо:** https://mikhailguzhov.github.io/qa-portfolio/

---

## О проекте
Статический одностраничник на **HTML5 / CSS3 / Vanilla JS**.  
Задача — показать реальные кейсы, стек и план роста (ручное → авто, CI/CD).

---

## Ключевые разделы
- **Hero** — миссия и краткий оффер  
- **Skills-badges** — стек и методологии  
- **Portfolio-grid** (6 карточек)  
  - Баг-репорты  
  - Чек-листы и сценарии  
  - Pet-projects (модалка)  
  - Обо мне + видео (модалка)  
  - Автотесты *(WIP)*  
  - CI/CD & метрики *(WIP)*  
- **Contacts**

Каждая карточка открывает модальное окно с подробностями, кодом или ссылками.  
Адаптив: 320 – 1440 px, фикс-header/footer, плавная прокрутка.

---

## Стек
- **Разметка:** HTML5, BEM  
- **Стили:** CSS Grid, Flexbox, custom-properties  
- **Скрипты:** ES6+, чистый JS для модалок  
- **Деплой:** GitHub Pages  

---

## Быстрый старт
```bash
git clone https://github.com/MikhailGuzhov/qa-portfolio.git
cd qa-portfolio
# локальный статический сервер
python -m http.server 8000
# или открой index.html напрямую

