
let thing = document.getElementById('background-svg');

let side = 0;

thing.addEventListener("click", function (e) {
  if (side === 0) {
    thing.style.transform="rotateY(180deg)";
    setTimeout(function () {
      document.getElementById('cosmos').style.visibility="hidden";
      document.getElementById('about').style.visibility="visible";
      side = 1;
    }, 700);
  } else {
    thing.style.transform="rotateY(0deg)";
    setTimeout(function () {
      document.getElementById('about').style.visibility="hidden";
      document.getElementById('cosmos').style.visibility="visible";
      side = 0;
    }, 700);
  }
})

document.getElementById('slacklink').addEventListener("click", function(e) {
  e.stopPropagation();
})
