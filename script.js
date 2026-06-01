// Mobile menu toggle
const menuButton = document.querySelector('.menu-toggle');
const globalNav = document.querySelector('.global-nav');

if (menuButton && globalNav) {
  menuButton.addEventListener('click', () => {
    const isOpen = globalNav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'メニューを閉じる' : 'メニューを開く');
  });

  globalNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      globalNav.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'メニューを開く');
    });
  });
}

// Email obfuscation - assembled at runtime to prevent bot scraping
const mailLink = document.getElementById('mail-link');
if (mailLink) {
  const u = 'astryve.design';
  const d = 'example.com';
  mailLink.href = 'mailto:' + u + '@' + d;
}
