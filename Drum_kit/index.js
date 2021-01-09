var btnArray = document.querySelectorAll("button");
//for (var i = 0; i < btnArray.length; i++) {
  document.addEventListener("keydown", function(event) {
    var buttonInner = this.innerHTML;
    var x = event.key;
    switch (x) {
      case "w":
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
        buttonAnimation(x)
        break;
      case "a":
        var kick = new Audio("sounds/kick-bass.mp3");
        kick.play();
        buttonAnimation(x)
        break;
      case "s":
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
        buttonAnimation(x)
        break;
      case "d":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        buttonAnimation(x)
        break;
      case "j":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        buttonAnimation(x)
        break;
      case "k":
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        buttonAnimation(x)
        break;
      case "l":
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
        buttonAnimation(x)
        break;
      default: console.log();

    }

  });

function buttonAnimation(currentKey){
  var activeBtn = document.querySelector("."+currentKey);
  activeBtn.classList.add("pressed");
  setTimeout(function (){activeBtn.classList.remove("pressed");}, 100)
}









//Functions
