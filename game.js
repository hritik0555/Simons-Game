
var level=0;
var started=true;
var userClickedPattern=[];
var gamePattern=[];
var buttonColours=["red","blue","green","yellow"];

function nextSequence()
{
    userClickedPattern=[];
    level++;
    $("h1").text("Level  " + level);
                                                 
    var randomNumber=Math.floor(Math.random()*4);
    var randomChosenColour=buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);



    $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
    console.log(gamePattern);


}


function playSound(name)
{
    var audio=new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColour)
{
   $("#" + currentColour).addClass("pressed");

   setTimeout(function(){
    $("#" + currentColour).removeClass("pressed"); 
   },100);
}


function startOver()
{
    started=true;
    level=0;
    gamePattern=[];
}


function checkAnswer(currentLevel)
{
      
     if(userClickedPattern[currentLevel]===gamePattern[currentLevel])
     {
         console.log("success");
         if(userClickedPattern.length===gamePattern.length)
         {
             setTimeout(function(){
                 nextSequence();
             },1000);
         }
     } 
     else
     {
         playSound("wrong");
         $("body").addClass("game-over");
         setTimeout(function(){
            $("body").removeClass("game-over");
         },200);

         $("h1").text("Game Over, Press A start Button To Restart");

         $(".start-button").text("Restart");
         startOver();

         $(".start-button").show();


        

        console.log("wrong");
     }
}


$(".start-button").on("click",function()
{
    $(".start-button").hide();
    if(started)
    {
        $("h1").text("Level  " + level)
        nextSequence();
        started=false;
    }
       
    
   
});


$(".btn").on("click",function()
{
    var userChosenColour=this.id;
    playSound(userChosenColour);
    userClickedPattern.push(userChosenColour);
    animatePress(userChosenColour);
    
    
    checkAnswer(userClickedPattern.length-1);
    console.log(userClickedPattern);
    
    
});






  



