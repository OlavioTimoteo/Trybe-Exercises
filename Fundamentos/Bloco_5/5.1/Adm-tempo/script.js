document.querySelector('#header-container').style.background = 'MediumSeaGreen';
document.querySelector(".emergency-tasks").style.background = "DarkSalmon";
document.querySelector(".no-emergency-tasks").style.background = "DarkSalmon";
let element1 = document.querySelectorAll(".emergency-tasks h3");
for (let i = 0; i < element1.length; i += 1) {
  element1[i].style.background = "rbg (76,164,109)";
}
let element2 = document.querySelectorAll(".no-emergency-tasks h3");
for (let i = 0; i < element2.length; i += 1) {
  element2[i].style.background = "Black";
}
document.querySelector('#footer-container').style.background = 'DarkSlateGrey';
