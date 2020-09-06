'use strict';

const btnShare = document.querySelector('#btnShare');
const tooltip = document.querySelector('.tooltip');

const handleTooltipToggle = () => {
  tooltip.classList.toggle('d-flex');
}

btnShare.addEventListener('click', handleTooltipToggle);

