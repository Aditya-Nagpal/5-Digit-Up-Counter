var inputBar = document.querySelector("#cnt-input-bar form > input");
var Counters = document.getElementsByClassName("counter");
var startBtn = document.getElementById("counter-starter");
var resetBtn = document.getElementById("counter-reset");
var currCnt;
startBtn.addEventListener("click", function (event) {
  var digits = new Array(5);
  for (let i = 0; i <= 4; i++) {
    digits[i] = 0;
  }
  for (let Counter of Counters) {
    let paras = Counter.getElementsByTagName("p");
    paras[0].innerText = "0";
    paras[1].innerText = "1";
  }
  currCnt = 0;
  var targetCnt = inputBar.value;
  var interval = setInterval(function () {
    if (currCnt == targetCnt) {
      clearInterval(interval);
      return;
    }
    currCnt++;
    var temp = currCnt;
    for (let i = 0; i <= 4; i++) {
      if (temp === 0) {
        break;
      }
      if (digits[4 - i] !== temp % 10) {
        Update(4 - i, temp % 10);
        digits[4 - i] = temp % 10;
      }
      temp = Math.floor(temp / 10);
    }
  }, 1000);
});

function Update(index, data) {
  var paras = Counters[index].getElementsByTagName("p");
  var Next = paras[1];
  var Curr = paras[0];
  Next.innerText = data;
  Next.classList.add("animate");
  setTimeout(function () {
    Curr.innerText = Next.innerText;
    Next.classList.remove("animate");
  }, 500);
}

resetBtn.addEventListener("click", function () {
  Reset();
});

function Reset() {
  for (let Counter of Counters) {
    let paras = Counter.getElementsByTagName("p");
    paras[0].innerText = "0";
    paras[1].innerText = "1";
  }
  document.getElementsByTagName("form")[0].reset();
}
