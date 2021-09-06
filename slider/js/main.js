const sliderItems = document.querySelectorAll('.slider__item');
const sliderPrevBtn = document.querySelector('.prev-btn');
const sliderNextBtn = document.querySelector('.next-btn');
const body = document.querySelector('body');



let sliderIndex = 0;



function activeSLide(sliderIndex) {
  sliderItems.forEach(sliderItem => {
    sliderItem.classList.remove('slider__item--active');
  });

  sliderItems[sliderIndex].classList.add('slider__item--active');

  let sliderActiveImgUrl = sliderItems[sliderIndex].querySelector('img').src;

  body.style.backgroundImage = `url(${sliderActiveImgUrl})`;
  
}


function nextSlide() {

  if (sliderIndex >= sliderItems.length - 1) {
    sliderIndex = 0;
    activeSLide(sliderIndex);
  } else {
    sliderIndex++;
    activeSLide(sliderIndex);
  }


}

function prevSlide() {

  if (sliderIndex === 0) {
    sliderIndex = sliderItems.length - 1;
    activeSLide(sliderIndex);
  } else {
    sliderIndex--;
    activeSLide(sliderIndex);
  }


}


activeSLide(sliderIndex);
sliderPrevBtn.addEventListener('click', prevSlide);
sliderNextBtn.addEventListener('click', nextSlide);