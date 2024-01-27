let gameseq = [];
let userseq = [];

let btns = ["pink","gray","orange","blue"];
let started = false;
let level = 0;

let h3 = document.querySelector("h3");
document.addEventListener("keypress", function(){
  if(started == false){
    console.log("game is started");
    started = true;

    levelup();
  }

});

function gameflash(btn) {
btn.classList.add("flash");
setTimeout(function () {
    btn.classList.remove("flash");
},250);
}

function userflash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    },250);
    }
    

function levelup() {
    userseq = [];
    level++;
    h3.innerText = `level ${level}`;
let randidx = Math.floor(Math.random()*3);
let randcolor = btns[randidx];
let randbtn = document.querySelector(`.${randcolor}`);

// console.log(randidx);
// console.log(randcolor);
// console.log(randbtn);
gameseq.push(randcolor);
console.log(gameseq);
    gameflash(randbtn);
}

function checkans(idx) {
// console.log("current level : ",level);

if(userseq[idx] === gameseq[idx]){
   if(userseq.length == gameseq.length) {
    setTimeout(levelup,1000);
   }
}
else {
    h3.innerHTML = `Game over! your score was <b> ${level} </b> <br> press any key to start.`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout( function() {
        document.querySelector("body").style.backgroundColor = "white";  
    },150)
    reset();
}
}

function userpress() {

    let btn = this;
    userflash(btn);
    usercolor = btn.getAttribute("id");
    userseq.push(usercolor);
    checkans(userseq.length-1);
}

let allbtns = document.querySelectorAll(".btn");

for(btn of allbtns) {
    btn.addEventListener("click",userpress);
}

function reset() {
    started = false;
    userseq = [];
    gameseq = [];
    level = 0;

}