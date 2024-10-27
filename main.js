"use strict";
import "./style.css";

const btnLeft = document.querySelector(".btn-left");
const btnRight = document.querySelector(".btn-right");

const pic = document.querySelector(".profile-pic");
const name = document.querySelector(".member");
const job = document.querySelector(".job");
const text = document.querySelector(".info");

const slides = [
  {
    image: (pic.src = `/pic0.jpeg`),
    title: (name.textContent = "Ana Smith"),
    occupation: (job.textContent = `Designer`),
    description:
      (text.textContent = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio hic
        amet dolorem aliquam asperiores nesciunt doloremque blanditiis veritatis
        doloribus dolorum aperiam, id repudiandae expedita fuga animi nam nobis
        sunt officiis. Lorem, ipsum dolor sit amet consectetur adipisicing elit.`),
  },
  {
    image: (pic.src = `/pic1.jpeg`),
    title: (name.textContent = "Michael Johnson"),
    occupation: (job.textContent = `Manager`),
    description:
      (text.textContent = `Lorem dolor sit amet consectetur, adipisicing elit. Minus accusantium
        ratione quia nam esse quaerat porro dolore libero fuga nesciunt dolores
        numquam voluptatem ipsum eveniet, quam, delectus necessitatibus pariatur
        autem.`),
  },
  {
    image: (pic.src = `/pic2.jpeg`),
    title: (name.textContent = "Hailey Green"),
    occupation: (job.textContent = `Customer Support`),
    description:
      (text.textContent = `Minus accusantium. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        ratione quia nam esse quaerat porro dolore libero fuga nesciunt dolores
        numquam voluptatem ipsum eveniet, quam, delectus necessitatibus pariatur
        autem.`),
  },
  {
    image: (pic.src = `/pic3.jpeg`),
    title: (name.textContent = "Matt Holland"),
    occupation: (job.textContent = `Engineer`),
    description: (text.textContent = `Distinctio hic
        amet dolorem aliquam asperiores nesciunt doloremque blanditiis veritatis
        doloribus dolorum aperiam, id repudiandae expedita fuga animi nam nobis
        sunt officiis. Numquam voluptatem ipsum eveniet, quam, delectus necessitatibus pariatur
        autem.`),
  },
];

let activeIndex = 0;
let maxSlide = slides.length;
pic.src = slides[activeIndex].image;
name.textContent = slides[activeIndex].title;
job.textContent = slides[activeIndex].occupation;
text.textContent = slides[activeIndex].description;

// console.log(slides[3].image);
console.log(slides.length);

btnLeft.addEventListener("click", function () {
  if (activeIndex === 0) {
    activeIndex = maxSlide - 1;
  } else {
    --activeIndex;
  }
  pic.src = slides[activeIndex].image;
  name.textContent = slides[activeIndex].title;
  job.textContent = slides[activeIndex].occupation;
  text.textContent = slides[activeIndex].description;
});

btnRight.addEventListener("click", function () {
  if (activeIndex === maxSlide - 1) {
    activeIndex = 0;
  } else {
    ++activeIndex;
  }
  pic.src = slides[activeIndex].image;
  name.textContent = slides[activeIndex].title;
  job.textContent = slides[activeIndex].occupation;
  text.textContent = slides[activeIndex].description;
});
