const header = document.querySelector('nav');
const mainHeader = document.querySelector('.main-header');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
        header.style.display = 'flex';
    } else {
        header.style.display = 'none';
    }
  });
});

observer.observe(mainHeader);

const images = ["assets/images/indexpage.gif", "assets/images/indexpageone.gif", "assets/images/indexpagetwo.gif"];
let currentIndex = 0;

function changeImage() {
  const main = document.getElementById('js-main-image');
  currentIndex = (currentIndex + 1) % images.length;
  main.src = images[currentIndex];
}

setInterval(changeImage, 2000);