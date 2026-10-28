const toggle = document.querySelector('.menu-toggle');
const header = document.querySelector('.site-header');
toggle.addEventListener('click', () => {
  const open = header.classList.toggle('menu-open');
  toggle.setAttribute('aria-expanded', String(open));
});
document.querySelectorAll('nav a').forEach(link => link.addEventListener('click', () => {
  header.classList.remove('menu-open');
  toggle.setAttribute('aria-expanded', 'false');
}));
document.querySelector('#year').textContent = new Date().getFullYear();
