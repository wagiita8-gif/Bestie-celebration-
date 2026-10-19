const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

musicBtn.addEventListener("click", function () {
  if (music.paused) {
    music.play()
      .then(() => {
        musicBtn.textContent = "⏸️ Pause Birthday Music";
      })
      .catch(error => {
        console.log("Audio couldn't play:", error);
        musicBtn.textContent = "❌ Couldn't play music";
      });
  } else {
    music.pause();
    musicBtn.textContent = "🎵 Play Birthday Music";
  }
});

const typing = document.getElementById("typing");

const content = [
  "Happy +1 to the Girl who makes my day better without even trying.",
  "Let your cake be bigger than your worries today 🎂🎂🎂"
];

let line = 0;
let index = 0;

function typewriter() {
  if (line >= content.length) return;

  if (index < content[line].length) {
    typing.append(document.createTextNode(content[line].charAt(index)));
    index++;
    setTimeout(typewriter, 60);
  } else {
    if (line < content.length - 1) {
      typing.append(document.createElement("br"));
      typing.append(document.createElement("br"));
      line++;
      index = 0;
      setTimeout(typewriter, 60);
    }
  }
}

typewriter();
