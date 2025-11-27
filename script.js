let index = 0;
carousel();

function carousel() {
  const slides = document.getElementsByClassName("myslides");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  index++;
  if (index > slides.length) {
    index = 1;
  }
  slides[index - 1].style.display = "block";
  setTimeout(carousel, 3000); // Change slide every 3 sec
}