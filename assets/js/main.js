/**
* Template Name: DevFolio
* Template URL: https://bootstrapmade.com/devfolio-bootstrap-portfolio-html-template/
* Updated: Aug 07 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

// Minimal JS for the redesigned site
(function () {
  'use strict';
  // Theme toggle with persistence
  const THEME_KEY = 'preferred-theme';
  const stored = localStorage.getItem(THEME_KEY);
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initial = stored || (prefersDark ? 'dark' : 'light');
  const root = document.documentElement; // <html>
  function applyTheme(mode) {
    root.setAttribute('data-bs-theme', mode === 'dark' ? 'dark' : 'light');
    const icon = document.getElementById('themeIcon');
    if (icon) {
      icon.className = mode === 'dark' ? 'bi bi-sun me-2' : 'bi bi-moon-stars me-2';
    }
    // Ensure navbar toggler icon is visible in dark mode by toggling Bootstrap's icon color
    const header = document.getElementById('site-header');
    if (header) {
      if (mode === 'dark') header.classList.add('navbar-dark'); else header.classList.remove('navbar-dark');
    }
  }
  applyTheme(initial);
  const toggleBtn = document.getElementById('themeToggle');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', function () {
      const current = root.getAttribute('data-bs-theme') === 'dark' ? 'dark' : 'light';
      const next = current === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      localStorage.setItem(THEME_KEY, next);
    });
  }
  // Smooth scrollspy for Bootstrap navbar
  const navLinks = document.querySelectorAll('.navbar a.nav-link');
  const sections = Array.from(navLinks)
    .map(link => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);

  function onScroll() {
    const pos = window.scrollY + 100;
    sections.forEach((sec, idx) => {
      const top = sec.offsetTop;
      const bottom = top + sec.offsetHeight;
      const link = navLinks[idx];
      if (pos >= top && pos < bottom) {
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
      }
    });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('load', onScroll);
})();