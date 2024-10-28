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
    image: `/pic0.jpeg`,
    title: "Anna Smith",
    occupation: `Designer`,
    description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio hic
        amet dolorem aliquam asperiores nesciunt doloremque blanditiis veritatis
        doloribus dolorum aperiam, id repudiandae expedita fuga animi nam nobis
        sunt officiis. Lorem, ipsum dolor sit amet consectetur adipisicing elit.`,
  },
  {
    image: `/pic1.jpeg`,
    title: "Michael Johnson",
    occupation: `Manager`,
    description: `Lorem dolor sit amet consectetur, adipisicing elit. Minus accusantium
        ratione quia nam esse quaerat porro dolore libero fuga nesciunt dolores
        numquam voluptatem ipsum eveniet, quam, delectus necessitatibus pariatur
        autem.`,
  },
  {
    image: `/pic2.jpeg`,
    title: "Hailey Green",
    occupation: `Customer Support`,
    description: `Minus accusantium. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        ratione quia nam esse quaerat porro dolore libero fuga nesciunt dolores
        numquam voluptatem ipsum eveniet, quam, delectus necessitatibus pariatur
        autem.`,
  },
  {
    image: `/pic3.jpeg`,
    title: "Matt Holland",
    occupation: `Engineer`,
    description: `Distinctio hic
        amet dolorem aliquam asperiores nesciunt doloremque blanditiis veritatis
        doloribus dolorum aperiam, id repudiandae expedita fuga animi nam nobis
        sunt officiis. Numquam voluptatem ipsum eveniet, quam, delectus necessitatibus pariatur
        autem.`,
  },
];

const updateScreen = function () {
  pic.src = slides[activeIndex].image;
  name.textContent = slides[activeIndex].title;
  job.textContent = slides[activeIndex].occupation;
  text.textContent = slides[activeIndex].description;
};

let activeIndex = 0;
let maxSlide = slides.length;
updateScreen();

// console.log(slides[3].image);
console.log(slides.length);

btnLeft.addEventListener("click", function () {
  if (activeIndex === 0) {
    activeIndex = maxSlide - 1;
  } else {
    activeIndex--;
  }
  updateScreen();
});

btnRight.addEventListener("click", function () {
  if (activeIndex === maxSlide - 1) {
    activeIndex = 0;
  } else {
    activeIndex++;
  }
  updateScreen();
});
