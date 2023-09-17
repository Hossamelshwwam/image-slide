let imageInfo = document.querySelector(".image-info");
let images = document.querySelectorAll("img");
let nextBtn = document.querySelector(".next");
let prevBtn = document.querySelector(".prev");
let bultes = document.querySelector(".bultes-container");
let currentSlide = 1;
let imagesTotle = images.length;

imageInfo.innerHTML = `slide #${currentSlide} of ${imagesTotle}`;

for (let i = 1; i <= imagesTotle; i++) {
  let li = document.createElement("li");
  let liText = document.createTextNode(i);
  li.appendChild(liText);
  li.classList.add("btn");
  if (i === currentSlide) {
    li.classList.add("active");
  }
  bultes.appendChild(li);
}

let btnBultes = document.querySelectorAll(".btn");

nextBtn.onclick = function () {
  if (currentSlide == imagesTotle) {
    currentSlide = 1;
    checker();
  } else {
    currentSlide++;
    checker();
  }
};

prevBtn.onclick = function () {
  if (currentSlide > imagesTotle || currentSlide == 1) {
    currentSlide = 7;
    checker();
  } else {
    currentSlide--;
    checker();
  }
};

btnBultes.forEach(function (btn) {
  btn.onclick = function () {
    currentSlide = btn.innerHTML;
    checker();
  };
});

function checker() {
  imageInfo.innerHTML = `slide #${currentSlide} of ${imagesTotle}`;
  btnBultes.forEach(function (btn) {
    btn.classList.remove("active");
    if (btn.innerHTML == currentSlide) {
      btn.classList.add("active");
    }
  });
  images.forEach(function (img) {
    img.classList.remove("active-image");
    images[currentSlide - 1].classList.add("active-image");
  });
}

checker();
