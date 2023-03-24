const btnRate = document.getElementById("rate");
const btnResult = document.getElementById("result");
const startChose = document.getElementById("start-chose");
const btnSubmit = document.getElementById("submit");
let lastResult = 5;

function chooseStart(start) {
  const current = document.getElementsByClassName("rate__number--active");
  current[0].className = current[0].className.replace(
    " rate__number--active",
    ""
  );
  start.className += " rate__number--active";

  if (start?.textContent) {
    lastResult = start.textContent;
  }
  console.log("Value: ~", start.textContent);
}

function HandleSubmitBtn() {
  btnResult.style.display = "flex";
  btnRate.style.display = "none";
  startChose.textContent = lastResult;
}
