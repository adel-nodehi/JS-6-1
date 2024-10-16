"use strict";

/*
// url [https://www.codewars.com/kata/5966eeb31b229e44eb00007a/solutions/javascript]

function vaporcode(string) {
  const lowerWord = string.trim().split(" ");
  // ['Lets', ...]

  console.log(lowerWord);

  const result = lowerWord.map((word) => {
    // 'Lets' => 'LETS' => ['L' , 'E' , ..] => 'L  E  T  S'
    return word.toUpperCase().split("").join("  ");
  });
  // ['L  E  T  S', ..]

  return result.join("  ");
}

// L  E  T  S

console.log(
  vaporcode("Lets go to the movies "),
  "\n",
  "L  E  T  S  G  O  T  O  T  H  E  M  O  V  I  E  S"
);
// console.log(
//   vaporcode("Why isnt my code working"),
//   "\n",
//   "W  H  Y  I  S  N  T  M  Y  C  O  D  E  W  O  R  K  I  N  G"
// );
*/

/*
// event propagation
const nav = document.querySelector(".nav");
const navList = document.querySelector(".nav__list");
const link = document.querySelector("#home");

link.addEventListener("click", function (e) {
  console.log("Link");
  //   console.log(e.target, e.currentTarget);

  // stop bubbling up
  // e.stopPropagation();
});

navList.addEventListener(
  "click",
  function (e) {
    console.log("List");
    // console.log(e.target, e.currentTarget);
  },
  false
);

nav.addEventListener("click", function (e) {
  console.log("Nav");
  // console.log(e.target, e.currentTarget);
});
*/

/*
const navLinks = document.querySelectorAll(".nav__link");

// navLinks.forEach((link) => {
//   link.addEventListener("click", function (e) {
//     e.preventDefault();

//     const targetElementSelector = link.getAttribute("href");

//     const targetElement = document.querySelector(targetElementSelector);

//     targetElement.scrollIntoView({
//       behavior: "smooth",
//     });
//   });
// });

const navList = document.querySelector(".nav__list");

// event Delegation
// 1. find the common parent
navList.addEventListener("click", function (e) {
  e.preventDefault();

  // 2. find witch element is clicked

  if (!e.target.classList.contains("nav__link")) return;

  const targetElementSelector = e.target.getAttribute("href");

  const targetElement = document.querySelector(targetElementSelector);

  targetElement.scrollIntoView({
    behavior: "smooth",
  });
});
*/

/*
// DOM Traversing
const navLinks = document.querySelector(".nav__list");

// direct children
// console.log(navLinks.childNodes); // don't use
// console.log(navLinks.children);
// console.log(navLinks.firstChild); // don't use
// console.log(navLinks.firstElementChild);
// console.log(navLinks.lastElementChild);

// upward: pants
// console.log(navLinks.parentNode); // don't use
// console.log(navLinks.parentElement);
// console.log(navLinks.closest(".header"));

// sibling
// const section = document.querySelector("#services");

// console.log(section.previousElementSibling);
// console.log(section.nextElementSibling);

// console.log(section.previousSibling); // don't use
// console.log(section.nextSibling); // don't use
*/
