// Narrowing for HTML elements
let title = document.querySelector("#title");
// if (title != null) {
if (title instanceof Element) {
  title.innerHTML = "HELLO";
}

// OR
let title2 = document.querySelector("#title") as Element;
title2.innerHTML = "HELLO";

// OR - Optional changing
let title3 = document.querySelector("#title");
if (title3?.innerHTML != undefined) {
  title3.innerHTML = "HELLO";
}

//////////////////////////////////////////////////
let link = document.querySelector(".link");
if (link instanceof HTMLAnchorElement) {
  link.href = "https://kakao.com";
}

//////////////////////////////////////////////////
let btn = document.querySelector("#btn");
btn?.addEventListener("click", (e) => {});

//////////////////////////////////////////////////
// Q1
let image = document.querySelector("#image");
if (image instanceof HTMLImageElement) {
  image.src = "new.jpg";
}

// Q2
let naverLinks = document.querySelectorAll(".naver");

naverLinks.forEach((link) => {
  if (link instanceof HTMLAnchorElement) {
    link.href = "https://kakao.com";
  }
});
