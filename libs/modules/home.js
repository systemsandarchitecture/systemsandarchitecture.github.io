// add animation
const home = document.querySelector('#home');

if (home) {
  let homeContentItem =  document.querySelector('.home-content-item');
  homeContentItem.classList.add('active');

  let slides = document.querySelectorAll('.home-content-item');
  let currentSlide = 0;
  let slideInterval = setInterval(nextSlide, 2000);

  function nextSlide() {
    slides[currentSlide].className = 'home-content-item';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'home-content-item active';
  }
}
