let container = document.querySelector('.container'),
blue = document.querySelector('.blue'),
race = document.querySelector('.red'),
num = 0,
size = 100 + '%',
result = document.querySelector('.gameOver'),
score = document.querySelector('h3');



// blue Car

blue.addEventListener('animationiteration', () => {
    let randomNumber = (Math.floor(Math.random() * 12) * 50);
    blue.style.left = randomNumber + 'px';
    num++;
});

// Race Car

window.addEventListener("keydown", function(e){
    if(e.keyCode == "39"){ var raceLeft = parseInt(window.getComputedStyle(race).getPropertyValue("left"))
     if(raceLeft < 650){race.style.left = (raceLeft + 50) + "px"}
 };
 
     if(e.keyCode == "37"){
         var raceLeft = parseInt(window.getComputedStyle(race).getPropertyValue("left"))
         if(raceLeft > 0){race.style.left = (raceLeft - 50) + "px"
     }
 
     }
 });
 setInterval(function Gameover (){
    var blueCarTop = parseInt(window.getComputedStyle( blue).getPropertyValue("top"))
    var blueCarLeft = parseInt(window.getComputedStyle(blue).getPropertyValue("left"));
    var raceCarLeft = parseInt(window.getComputedStyle(race).getPropertyValue("left"));
        if((blueCarLeft === raceCarLeft) && (blueCarTop > 460) ){
            result.style.display = "block";
            container.style.display = "none";
            score.innerHTML = `score: ${num} `;

            num = 0;
        }
}, 10)