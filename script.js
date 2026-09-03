function showPage(pageId) {
  const sections = document.querySelectorAll('section');
  sections.forEach(section => section.style.display = 'none');
  document.getElementById(pageId).style.display = 'block';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Show home by default
showPage('home');
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let slides = document.getElementsByClassName("slide");
  if (n > slides.length) slideIndex = 1;
  if (n < 1) slideIndex = slides.length;

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
}
