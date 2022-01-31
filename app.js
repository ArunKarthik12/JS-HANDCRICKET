document.getElementById("play").style.display = "none";
document.getElementById("sucess").style.display = "none";
document.getElementById("lost").style.display = "none";
document.getElementById("2").style.display = "none";
document.getElementById("3").style.display = "none";
document.getElementById("4").style.display = "none";
document.getElementById("5").style.display = "none";
document.getElementById("6").style.display = "none";


var currentStrike=0;
var currentimg=1;
var score=0;
var target=0;
var remaining=0;
var randomNumber=0;

function startgame(){
  score=0;
  currentStrike=0;
  //hide start page
  document.getElementById("start").style.display = "none";
  //initialize game page
  document.getElementById("play").style.display = "block";
  //randomize target
  target=Math.floor(Math.random()*60)+1;
  document.getElementById("score-targ").innerHTML = "YOUR SCORE TO BEAT :"+target;
  document.getElementById("score-obtained").innerHTML = "YOUR SCORE : 0";
}
function randomnumbergen(){
  randomNumber = Math.floor(Math.random() * 6) + 1;
  document.getElementById(currentimg).style.display = "none";
  document.getElementById(randomNumber).style.display = "inline-block";
  

}

function randomDice(){

  if(currentStrike==0){
      document.getElementById("greeting").innerHTML = "ENTER YOUR CHOICE FIRST :";
  }else{
      randomnumbergen();
      currentimg = randomNumber;
      if(currentStrike === randomNumber){
        
        document.getElementById("play").style.display = "none";
        document.getElementById("lost").style.display = "block";
        remaining =target-score;
        document.getElementById("rem-update").innerHTML = "YOU LOST BY "+remaining+" RUNS";
        score=0;
        target=0;
      }else{
            score = score+currentStrike;
            document.getElementById("score-obtained").innerHTML = "YOUR SCORE : "+score;
            //greeting
            if(currentStrike ===6 ){
              document.getElementById("greeting").innerHTML = " on-mic🎤: OUT OF THE STADIUM";
            }
            if(currentStrike ===5 ){
              document.getElementById("greeting").innerHTML = " on-mic🎤: SO CHEEKY...";
            }
            if(currentStrike ===4 ){
              document.getElementById("greeting").innerHTML = "on-mic🎤: SAILED AWAY...";
            }
            if(currentStrike ===3){
                document.getElementById("greeting").innerHTML = " on-mic🎤: GREAT RUNNING";
            }
            if(currentStrike ===2){
                document.getElementById("greeting").innerHTML = " on-mic🎤: WELL PLAYED";
            }
            if(currentStrike ===1){
                document.getElementById("greeting").innerHTML = " on-mic🎤: WELL PLAYED";
            }
            currentStrike=0;
        }
    }
    if(score > target){
      
      //jump to victory page
      document.getElementById("play").style.display = "none";
      document.getElementById("sucess").style.display = "block";
      score=0;
      target=0;
    }
}
function  homepage(){
  // initially hide game-play
  document.getElementById("play").style.display = "none";
  //initially hide success
  document.getElementById("sucess").style.display = "none";
  //initially hide loss
  document.getElementById("lost").style.display = "none";
  //show initially
  document.getElementById("start").style.display = "block";
}


function reset(){
  target=Math.floor(Math.random()*60)+1;
  document.getElementById("score-targ").innerHTML = "YOUR SCORE TO BEAT :"+target;
  document.getElementById("score-obtained").innerHTML = "YOUR SCORE : 0";
  currentStrike=0;
  score=0;
  document.getElementById("greeting").innerHTML = "ENTER YOUR CHOICE FIRST :";
}
function setStrike1(){
  currentStrike = 1;
}
function setStrike2(){
  currentStrike = 2;
}
function setStrike3(){
  currentStrike = 3;
}
function setStrike4(){
  currentStrike = 4;
}
function setStrike5(){
  currentStrike = 5;
}
function setStrike6(){
  currentStrike = 6;
}


document.getElementById("image1").addEventListener("click", startgame);  
document.getElementById("btn-s").addEventListener("click", randomDice); 
document.getElementById("btn-r").addEventListener("click", reset);  
document.getElementById("btn-r1").addEventListener("click", homepage);  
document.getElementById("btn-r2").addEventListener("click", homepage); 

document.getElementById("btn-1").addEventListener("click", setStrike1);  
document.getElementById("btn-2").addEventListener("click", setStrike2);  
document.getElementById("btn-3").addEventListener("click", setStrike3);  
document.getElementById("btn-4").addEventListener("click", setStrike4);  
document.getElementById("btn-5").addEventListener("click", setStrike5);  
document.getElementById("btn-6").addEventListener("click", setStrike6);  
