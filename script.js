var startButton = document.getElementById('start-btn')
var mainContainer = document.getElementById ('main-container')
var timeCon = document.getElementById ('timeId')
var questionContainer = document.getElementById ('question-container')
var questionList = document.getElementById('question')
var answerChoices= document.querySelectorAll ('.answer-buttons')
var btn1= document.querySelector ("#ansBtn1")
var btn2= document.querySelector("#ansBtn2")
var btn3= document.querySelector ("#ansBtn3")
var btn4= document.querySelector ("#ansBtn4")
var checkAnswer = document.querySelector ("#check-answer")
var questionCount = 1;
var timer = 75
var questions = [
    {
        question: 'Which built-in method adds one or more elements to the end of an array and returns the new length of the array?',
        answers: ["last()","put()","push()","None of the Above"],
        answer: "push()"
    },
    {
        question: 'Which built-in method reverses the order of the elements of an array?',
        answers: [ "changeOrder(order)", " reverse()", "sort(order)", "None of the above "],
        answer: "reverse()"
            
    },
    {
        question: 'Which of the following function of String object returns the characters in a string between two indexes into the string?',
        answers: [ "slice()","split()","substr()","substring()"],
        answer: "substring()"
           
        
    },
    {
        question:'Which of the following function of String object creates an HTML anchor that is used as a hypertext target?',
        answers: [ "anchor()","link()","blink()","big()"],
        answer: "anchor()"
           
         
    },
    {
        question: 'Which of the following function of Array object calls a function for each element in the array?',
        answers: [ "concat()","every()","filter()","forEach()"],
        answer: "forEach()"
        
       
    }
]
var questionNumber=0;

startButton.addEventListener('click',startQuiz)

answerChoices.forEach(function(click){
    click.addEventListener ('click',answerCheck)
}
);

document.getElementById('question-container').style.display = "none";


function startQuiz(){
    
    mainContainer.style.display = "none";
    questionContainer.style.display = "block";
    questionNumber = 0;
    displayQuestion(questionNumber)
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
function displayQuestion(n){
    questionList.textContent = questions[n].question; 
    btn1.textContent = questions[n].answers[0];
    btn2.textContent = questions[n].answers[1];
    btn3.textContent = questions[n].answers[2];
    btn4.textContent = questions[n].answers[3];
    questionNumber = n;
    
}

function answerCheck(event){
    event.preventDefault();
    checkAnswer.style.display = "block";
    setTimeout(function () {
        checkAnswer.style.display = 'none';
    }, 1000);

    if (questions[questionNumber].answer == questions[questionNumber].answer   )
     {
        checkAnswer.textContent= "Correct";
    } else {
        timer = timer -10;
        checkAnswer.textContent ="Wrong!";
    }

    if(questionNumber<questions.length -1 ){
        displayQuestion(questionNumber +1); 
    }

questionCount++;
}