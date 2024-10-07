let currentIndex = 0;

function showSlide(index) {
  const items = document.querySelectorAll(".carousel-item");
  if (index >= items.length) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = items.length - 1;
  } else {
    currentIndex = index;
  }

  const offset = -currentIndex * 100;
  document.querySelector(
    ".carousel-items"
  ).style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

// 自動輪播
setInterval(nextSlide, 5000);
