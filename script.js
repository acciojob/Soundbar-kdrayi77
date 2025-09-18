const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

document.querySelectorAll(".btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.classList.contains("stop")) {
      stopSounds();
    } else {
      playSound(btn.innerText);
    }
  });
});

function playSound(sound) {
  stopSounds();
  const audio = document.getElementById(sound);
  if (audio) {
    audio.play();
  }
}

function stopSounds() {
  sounds.forEach((sound) => {
    const audio = document.getElementById(sound);
    audio.pause();
    audio.currentTime = 0;
  });
}
