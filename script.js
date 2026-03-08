const name = "Sharvi";

let messages = [

"I'm really proud of you " + name + ".",
"You are doing great.",
"You deserve everything because you are a good person.",
"You are a lovely woman.",
"You make the world brighter.",
"Happy Women's Day 💜"

];

let index = 0;

function start(){

playClick();

window.location.href = "messages.html";

}


function nextMessage(){

playClick();

let msg = document.getElementById("message");

if(index < messages.length){

typeWriter(messages[index], msg);

index++;

}else{

window.location.href = "memories.html";

}

}

function typeWriter(text, element){

element.innerHTML = "";

let i = 0;

let typing = setInterval(function(){

if(i < text.length){

element.innerHTML += text.charAt(i);

i++;

}else{

clearInterval(typing);

}

},40);

}


function nextPage(){

playClick();

window.location.href = "final.html";

}


function yesAnswer(){

playClick();

window.location.href = "celebration.html";

}

function noAnswer(){

playClick();

window.location.href = "comfort.html";

}


function goCelebrate(){

playClick();

window.location.href = "celebration.html";

}


function celebrate(){

let message = document.getElementById("finalMessage");

if(message){
message.innerHTML = "✨ Happy Women's Day " + name + " ✨";
}

for(let i=0;i<160;i++){

let c = document.createElement("div");

c.className = "confetti";

let x = window.innerWidth / 2;
let y = window.innerHeight / 2;

c.style.left = x + "px";
c.style.top = y + "px";

let angle = Math.random() * 2 * Math.PI;
let distance = 200 + Math.random()*300;

let xMove = Math.cos(angle) * distance;
let yMove = Math.sin(angle) * distance;

c.style.setProperty("--x", xMove + "px");
c.style.setProperty("--y", yMove + "px");

c.style.backgroundColor =
"hsl(" + Math.random()*360 + ",70%,60%)";

document.body.appendChild(c);

setTimeout(()=>c.remove(),4000);

setTimeout(function(){

confettiRain();

},700);

}

}

function confettiRain(){

function spawn(){

let c = document.createElement("div");
c.className = "confettiRain";

/* random horizontal position */
c.style.left = Math.random()*100 + "vw";

/* start slightly above screen */
c.style.top = (-500 + Math.random()*500) + "px";

/* random size */
let size = 4 + Math.random()*8;
c.style.width = size + "px";
c.style.height = size + "px";

/* random color */
c.style.backgroundColor =
"hsl(" + Math.random()*360 + ",70%,60%)";

/* sometimes circle */
if(Math.random() > 0.9){
c.style.borderRadius = "50%";
}

document.body.appendChild(c);

/* when it finishes falling */
c.addEventListener("animationend", function(){

c.remove();

/* spawn the next one (signal system) */
spawn();

});

}

/* start first confetti */
spawn();

}

function createPetals(){

setInterval(function(){

let petal = document.createElement("div");

petal.className = "petal";

petal.textContent = "🌸";

petal.style.left = Math.random()*100 + "vw";

petal.style.fontSize = (15 + Math.random()*10) + "px";

document.body.appendChild(petal);

setTimeout(() => {

petal.remove();

},8000);

},500);

}

window.onload = function(){

createPetals();


}
