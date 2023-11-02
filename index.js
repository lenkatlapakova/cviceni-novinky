const bodyElement = document.querySelector("body");
const news = document.querySelector(".news");
const newsTitle = document.querySelector("h1");
const zprava1Container = document.querySelector("#zprava1");
const zprava3 = document.querySelector("#zprava3 img");

bodyElement.style.backgroundColor = "#e9e9e9";
news.style.backgroundColor = "white";
news.style.maxWidth = "60rem";
newsTitle.textContent = "Aktuální novinky";
zprava3.src = "images/zprava3-novy.jpg";
zprava1Container.classList.add("post--main");