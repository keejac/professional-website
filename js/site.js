// Mobile menu: the ☰ button shows and hides the nav links.
document.addEventListener('DOMContentLoaded', function () {
  var btn = document.querySelector('.nav-toggle'), list = document.getElementById('nav-list');
  if (btn) btn.addEventListener('click', function () {
    var open = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!open));
    list.classList.toggle('is-open', !open);
  });
});
