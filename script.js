// Social Ghera — mobile nav toggle (shared across all pages)
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var mobileMenu = document.querySelector('.nav-mobile');
  if (!toggle || !mobileMenu) return;

  toggle.addEventListener('click', function () {
    var isOpen = mobileMenu.classList.toggle('open');
    document.body.classList.toggle('nav-open', isOpen);
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  // Close the menu after tapping a link (nicer on real navigations to a new page)
  mobileMenu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      mobileMenu.classList.remove('open');
      document.body.classList.remove('nav-open');
    });
  });
});
