"use strict";

const navPanel = document.querySelector('#panel'),
  navOpener = document.querySelector('#open'),
  navClose = document.querySelector('#close');

navOpener.addEventListener('click', () => {
  navPanel.classList.add('show')
  document.body.style.overflow = 'hidden'
});


navClose.addEventListener('click', () => {
  navPanel.classList.remove('show')
  document.body.style.overflow = ''
});

navPanel.addEventListener('click', () => {
  navPanel.classList.remove('show')
  document.body.style.overflow = ''
});