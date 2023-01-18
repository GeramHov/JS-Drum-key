document.addEventListener("keydown", function playSound(element) {
  let sound = document.querySelector(`audio[data-key="${element.keyCode}"]`);
  let key = document.querySelector(`.key[data-key="${element.keyCode}"]`);
  if (sound && key) {
    sound.currentTime = 0;
    sound.play();
    key.classList.add("playing");
  }
});

function removeTransition(element) {
  if (element.propertyName !== "transform") return;
  this.classList.remove("playing");
}

let keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

// BEATBOX FUNCTION //

document.addEventListener("keydown", function (event) {
  if (event.code === "Space") {
    function simulateKey(key) {
      const event = new KeyboardEvent("keydown", {
        keyCode: key,
      });
      document.dispatchEvent(event);
    }

    simulateKey();

    function playBeat(time, key) {
      return new Promise((resolve) => {
        setTimeout(() => {
          simulateKey(key);
          resolve();
        }, time);
      });
    }

    playBeat(250)
      .then(() => playBeat(300, "81"))
      .then(() => playBeat(250, "81"))
      .then(() => playBeat(250, "81"))
      .then(() => playBeat(400, "68"))
      .then(() => playBeat(250, "68"))
      .then(() => playBeat(250, "68"))
      .then(() => playBeat(400, "65"))
      .then(() => playBeat(250, "65"))
      .then(() => playBeat(250, "65"))
      .then(() => playBeat(500, "65"))
      .then(() => playBeat(200, "65"))
      .then(() => playBeat(400, "90"))
      .then(() => playBeat(250, "90"))
      .then(() => playBeat(250, "90"))
      .then(() => playBeat(400, "69"))
      .then(() => playBeat(250, "69"))
      .then(() => playBeat(250, "69"))
      .then(() => playBeat(400, "83"))
      .then(() => playBeat(250, "83"))
      .then(() => playBeat(250, "83"))
      .then(() => playBeat(500, "83"))
      .then(() => playBeat(200, "83"))
      .then(() => playBeat(400, "67"));
  }
});
