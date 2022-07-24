

var obj = document.getElementsByClassName("drum");
numOfButtons = obj.length;

function playSound(drumName)
{
    switch (drumName) {
        case "w":
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case "a":
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
        case "s":
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        case "d":
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
        case "j":
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;
        case "k":
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
        case "l":
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
        default: console.log(drumName);
    }
}


for(var i=0; i<numOfButtons; i++)
{
    obj[i].addEventListener("click", function () {
        var dName = this.innerHTML;
        playSound(dName);
        buttonAnimation(dName);
    });
}

document.addEventListener("keydown", function (Event) {
    var key = Event.key;
    playSound(key);
    buttonAnimation(key)    ;
});

function buttonAnimation(pressedButton)
{
    document.querySelector("."+pressedButton).classList.add("pressed");
    setTimeout(function(){document.querySelector("."+pressedButton).classList.remove("pressed");}, 100);
}