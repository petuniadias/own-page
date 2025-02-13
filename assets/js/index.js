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
