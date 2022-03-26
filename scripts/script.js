'use strict'
// elements
const detailsEl=document.getElementById('details');
const backgroundEl = document.querySelector('.container-bg');

// functions
const closeModal = function(){
  backgroundEl.classList.remove('blur-background');
  detailsEl.style.display='none';
}
const showModal = function(){
  backgroundEl.classList.add('blur-background');
  detailsEl.style.display='block'; 
}
