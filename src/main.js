import { initBackground } from './background.js';
import { hospitals } from './data/hospitals.js';
import { renderHospitals } from './hospitals.js';

// Initialize background animation
initBackground();

// Initialize mobile menu
const menuButton = document.querySelector('.menu-button');
const mobileMenu = document.querySelector('.mobile-menu');

menuButton.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

// Render hospitals
renderHospitals(hospitals);

// Handle navigation
const navLinks = document.querySelectorAll('.nav-link');
const currentPath = window.location.pathname;

navLinks.forEach(link => {
  if (link.getAttribute('href') === currentPath) {
    link.classList.add('active');
  } else {
    link.classList.remove('active');
  }
});