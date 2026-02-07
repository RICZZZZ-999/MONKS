const screenMain = document.getElementById("screen-main");
const screenPreparing = document.getElementById("screen-preparing");
const screenUnlocked = document.getElementById("screen-unlocked");

const joinBtn = document.getElementById("join-btn");
const skipBtn = document.getElementById("skip-btn");
const countdownSpan = document.getElementById("countdown");

let timerId = null;
let remaining = 5;

function showScreen(target) {
  [screenMain, screenPreparing, screenUnlocked].forEach((el) =>
    el.classList.remove("screen--active")
  );
  target.classList.add("screen--active");
}

// When user clicks "Join Now"
joinBtn.addEventListener("click", () => {
  remaining = 5;
  countdownSpan.textContent = remaining;
  showScreen(screenPreparing);

  if (timerId) clearInterval(timerId);
  timerId = setInterval(() => {
    remaining -= 1;
    countdownSpan.textContent = remaining;
    if (remaining <= 0) {
      clearInterval(timerId);
      showScreen(screenUnlocked);
    }
  }, 1000);
});

// Skip button
skipBtn.addEventListener("click", () => {
  if (timerId) clearInterval(timerId);
  showScreen(screenUnlocked);
});
