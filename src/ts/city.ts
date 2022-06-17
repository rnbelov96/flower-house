export {};

const cityMapBoxEl = document.querySelector('.city');
const markElList = [...document.querySelectorAll('.city__mark')];
let currentMarkIndex = 10;

cityMapBoxEl?.addEventListener('click', e => {
  const clickedEl = e.target as HTMLDivElement | null;

  if (!clickedEl || clickedEl.classList.contains('city__mark_blue')) {
    return;
  }

  if (
    clickedEl.classList.contains('city__mark') &&
    !clickedEl.classList.contains('city__mark_opened')
  ) {
    const clickedMarkIndex = clickedEl.dataset.markIndex;
    markElList[currentMarkIndex].classList.remove('city__mark_opened');
    currentMarkIndex = Number(clickedMarkIndex);
    clickedEl.classList.add('city__mark_opened');
  }
});
