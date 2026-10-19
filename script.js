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
