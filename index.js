
var numbOfDrum =document.querySelectorAll(".drum").length; 
for(var i=0;i<numbOfDrum;i++){

 document.querySelectorAll(".drum")[i].addEventListener("click",function (){

    var button = this.innerHTML;

     makeSound(button);
     buttonAnimation(button);

    });

}

document.addEventListener("keypress",function(event){

    makeSound(event.key);
    buttonAnimation(event.key);

});

function makeSound(key){

   switch(key){

       case "w":
        var audioCrash = new Audio("./sounds/crash.mp3");
        audioCrash.play();
        break;

        case "a":
        var audioBass = new Audio("./sounds/kick-bass.mp3");
        audioBass.play();
        break;

        case "s":
        var audioSnare = new Audio("./sounds/snare.mp3");
        audioSnare.play();
        break;

        case "d":
        var audioTom1 = new Audio("./sounds/tom-1.mp3");
        audioTom1.play();
        break;
        
        case "j":
        var audioTom2 = new Audio("./sounds/tom-2.mp3");
        audioTom2.play();
        break;

        case "k":
        var audioTom3 = new Audio("./sounds/tom-3.mp3");
        audioTom3.play();
        break;

        case "l":
        var audioTom4 = new Audio("./sounds/tom-4.mp3");
        audioTom4.play();
        break;
        
        default:
   }

};


function buttonAnimation(currentKey){

    var clickButton = document.querySelector("."+ currentKey);

    clickButton.classList.add("pressed");
    setTimeout(function(){
        clickButton.classList.remove("pressed");
    },100);
}


