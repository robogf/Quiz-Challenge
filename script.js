var startButton = document.getElementById('start-btn')
var mainContainer = document.getElementById ('main-container')
var timeCon = document.getElementById ('timeId')
var timer = 75

startButton.addEventListener('click',startQuiz)

function startQuiz(){
    
    mainContainer.style.display = "none";
    function setTime() {

        timeInterval = setInterval(function(){
            timer-- 
            if (timer <1){
                clearInterval(timeInterval)
                
            }
            timeCon.innerHTML=timer;
        },1000)
       
    }
    setTime();
    
    


}




