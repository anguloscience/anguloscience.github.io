/*
==============================================================
 # FORMAL Education
==============================================================
*/

// Select all slides
const slides = document.querySelectorAll(".slideFormal");

// loop through slides and set each slides translateX property to index * 100% 
slides.forEach((slideFormal, indx) => {
  slideFormal.style.transform = `translateX(${indx * 100}%)`;
});

// current slide counter
let curSlide = 0;

// select next slide button
const nextSlide = document.querySelector(".btn-next");

// add event listener and next slide functionality
nextSlide.addEventListener("click", function () {
     curSlide++;

  slides.forEach((slideFormal, indx) => {
    slideFormal.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});

// maximum number of slides
let maxSlide = slides.length;

// add event listener and navigation functionality
nextSlide.addEventListener("click", function () {
  // check if current slide is the last and reset current slide
  if (curSlide === maxSlide) {
    curSlide = 0;
  } else {
    curSlide+1;
  }

//   move slide by -100%
  slides.forEach((slideFormal, indx) => {
    slideFormal.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});
// select prev slide button
const prevSlide = document.querySelector(".btn-prev");

// add event listener and navigation functionality
prevSlide.addEventListener("click", function () {
  // check if current slide is the first and reset current slide to last
  if (curSlide === 0) {
    curSlide = maxSlide -1;
  } else {
    curSlide = curSlide-1 ;
  }

  //   move slide by 100%
  slides.forEach((slideFormal, indx) => {
    slideFormal.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});

/*
==============================================================
 # INFORMAL Education
==============================================================
*/
// Select all slides
const informal = document.querySelectorAll(".slideInformal");

// loop through slides and set each slides translateX property to index * 100% 
informal.forEach((slideInformal, indx) => {
  slideInformal.style.transform = `translateX(${indx * 100}%)`;
});

// current slide counter
let curInformal = 0;

// select next slide button
const nextInformal = document.querySelector(".btn-next-informal");

// add event listener and next slide functionality
nextInformal.addEventListener("click", function () {
     curInformal++;

  informal.forEach((slideInformal, indx) => {
    slideInformal.style.transform = `translateX(${100 * (indx - curInformal)}%)`;
  });
});

// maximum number of slides
let maxInformal = informal.length;

// add event listener and navigation functionality
nextInformal.addEventListener("click", function () {
  // check if current slide is the last and reset current slide
  if (curInformal === maxInformal) {
    curInformal = 0;
  } else {
    curInformal+1;
  }

//   move slide by -100%
  informal.forEach((slideInformal, indx) => {
    slideInformal.style.transform = `translateX(${100 * (indx - curInformal)}%)`;
  });
});
// select prev slide button
const prevInformal = document.querySelector(".btn-prev-informal");

// add event listener and navigation functionality
prevInformal.addEventListener("click", function () {
  // check if current slide is the first and reset current slide to last
  if (curInformal === 0) {
    curInformal = maxInformal -1;
  } else {
    curInformal= curInformal-1 ;
  }

  //   move slide by 100%
  informal.forEach((slideInformal, indx) => {
    slideInformal.style.transform = `translateX(${100 * (indx - curInformal)}%)`;
  });
});

