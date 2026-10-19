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

let typing= document.getElementById("typing");

let content=`
Happy +1 to the Girl who makes my day better without even trying.<br><br>
Let your cake be bigger than your worries today🎂🎂🎂`;

let index=0

function typewriter(){
  if ( index < content.length) {

    if (content.substring(index, index +4)==="<br>"){
      typing.innerHTML +="<br>";
      index+=4;
    }
    else{
      typing.innerHTML += content.charAt(index);
        index++;
      }
    setTimeout(typewriter,60);
    }
  }
typewriter();
