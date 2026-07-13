const mobileMenu = document.getElementById('mobile-menu');
const openButton = document.getElementById('menu-open');
const closeButton = document.getElementById('menu-close');
const closeLinks = document.querySelectorAll('.mobile-menu a');

function setMenu(open) {
  mobileMenu.classList.toggle('is-open', open);
  mobileMenu.setAttribute('aria-hidden', String(!open));
  openButton.setAttribute('aria-expanded', String(open));
  document.body.classList.toggle('menu-open', open);

  if (open) {
    closeButton.focus();
  } else if (document.activeElement === closeButton) {
    openButton.focus();
  }
}

openButton.addEventListener('click', () => setMenu(true));
closeButton.addEventListener('click', () => setMenu(false));
closeLinks.forEach((link) => link.addEventListener('click', () => setMenu(false)));

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && mobileMenu.classList.contains('is-open')) {
    setMenu(false);
  }
});

window.addEventListener('resize', () => {
  if (window.innerWidth >= 768 && mobileMenu.classList.contains('is-open')) {
    setMenu(false);
  }
});
