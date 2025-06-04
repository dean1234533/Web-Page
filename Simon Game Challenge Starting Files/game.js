var buttonColors = ["green", "red", "yellow", "blue"];
var gamePattern = [];
var userClickedPattern = [];
var started=false;
var level  = 0;

$(".btn").on("click", function(){


var userChosenColor = $(this).attr("id");
userClickedPattern.push(userChosenColor);


playSound(userChosenColor);
animatePress(userChosenColor);

checkAnswer(userClickedPattern.length - 1);
});





$(document).on("keypress", function(){
$("h1").text("Press A Key to Start");
    if (!started){

$("h1").text("level" + level);
started = true;
nextSequence();


}



});


function nextSequence(){
    userClickedPattern = [];
var randomNumber =Math.floor(Math.random() * 4);
var randomChosenColor = buttonColors[randomNumber];
gamePattern.push(randomChosenColor);

level++;
$("h1").text("level" + " "+level)



$("#" + randomChosenColor).fadeOut(200).fadeIn(200),


playSound();
}





function playSound(name){

var audio = new Audio("sounds/"+name+".mp3");

audio.play();

}


function animatePress(currentColor){

$("#"+ currentColor).addClass("pressed");


setTimeout (function(){

$("#" + currentColor).removeClass("pressed");

},100);

}

function checkAnswer(currentLevel){
if (gamePattern[currentLevel] ===  userClickedPattern[currentLevel]){
if (gamePattern.length === userClickedPattern.length){

setTimeout (function(){

nextSequence();


},1000);
}

}


else{


wrongAnswer();

}
}

function wrongAnswer(){

playSound("wrong");
$("body").addClass("game-over");
$("h1").text("Game Over, Press Any Key to Restart");




setTimeout (function(){

$("body").removeClass("game-over");

startOver();
},200);
}




function startOver(){
level = 0;
userClickedPattern = [];
gamePattern =[];
started = false;


}