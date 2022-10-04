var startButton = document.getElementById('start-btn')
var mainContainer = document.getElementById ('main-container')
var timeCon = document.getElementById ('timeId')
var questionContainer = document.getElementById ('question-container')
var timer = 75

startButton.addEventListener('click',startQuiz)
document.getElementById('question-container').style.display = "none";
function startQuiz(){
    
    mainContainer.style.display = "none";
    questionContainer.style.display = "block";
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




