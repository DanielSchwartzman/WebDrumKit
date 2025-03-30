let allSounds = [
    new Audio("./sounds/crash.mp3"),
    new Audio("./sounds/kick-bass.mp3"),
    new Audio("./sounds/snare.mp3"),
    new Audio("./sounds/tom-1.mp3"),
    new Audio("./sounds/tom-2.mp3"),
    new Audio("./sounds/tom-3.mp3"),
    new Audio("./sounds/tom-4.mp3"),
];
var allButtons = document.querySelectorAll(".drum");
document.addEventListener("keydown", (event) => {
    playSound(event.key);
})

allButtons.forEach(element => {
    element.addEventListener("click", () =>{
        playSound(element.classList[0]);
    })
});

function playSound(key)
{
    playAnimation(key);
    switch(key)
    {
        case 'w':
            allSounds[0].play();
            break;
        case 'a':
            allSounds[1].play();
            break;
        case 's':
            allSounds[2].play();
            break;
        case 'd':
            allSounds[3].play();
            break;
        case 'j':
            allSounds[4].play();
            break;
        case 'k':
            allSounds[5].play();
            break;
        case 'l':
            allSounds[6].play();
            break;
    }
}

function playAnimation(key)
{
    var currPressed = document.querySelector("."+key);
    currPressed.classList.add("pressed");
    setTimeout(function() {
        currPressed.classList.remove("pressed");
    }, 100);
}