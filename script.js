let body = document.querySelector("#dark");
let header = document.querySelector("header");
let headerLeft = document.querySelector(".header-left");
let topWrapper = document.querySelector(".top-wrapper");
let contentWrapper = document.querySelector(".content-wrapper");
let heading = document.querySelector(".heading");
let skills = document.querySelector(".skills");
let messageWrapper = document.querySelector(".message-wrapper");
let footer = document.querySelector("footer");
let btnToggle = document.querySelector("#btn-dark");
let moon = document.querySelector("#moon");
let sun = document.querySelector("#sun"); 
let fishNight = document.querySelector("#fishNight");
let fishDay = document.querySelector("#fishDay");

btnToggle.addEventListener("click", handleToggleBtn);

function handleToggleBtn (){
    if(moon.style.display === "block" && sun.style.display === "none"){
        moon.style.display = "inline-block";
        sun.style.display = "none";
        fishNight.style.display = "inline-block";
        fishDay.style.display = "none";
    } else {
        moon.style.display = "none";
        sun.style.display = "inline-block";
        fishNight.style.display = "none";
        fishDay.style.display = "inline-block";
    }

      body.classList.toggle("light-mode");
      header.classList.toggle("light-mode");
      headerLeft.classList.toggle("light-mode");
      topWrapper.classList.toggle("light-mode");
      contentWrapper.classList.toggle("light-mode");
      heading.classList.toggle("light-mode");
      skills.classList.toggle("light-mode");
      messageWrapper.classList.toggle("light-mode");
      footer.classList.toggle("light-mode");
}

