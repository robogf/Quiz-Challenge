var startButton = document.getElementById('start-btn')
var mainContainer = document.getElementById ('main-container')
var timeCon = document.getElementById ('timeId')
var questionContainer = document.getElementById ('question-container')
var questionList = document.getElementById('question')
var answerChoices= document.getElementById ('answer-buttons')
var btn1= document.querySelector ("#ansBtn1")
var btn2= document.querySelector("#ansBtn2")
var btn3= document.querySelector ("#ansBtn3")
var btn4= document.querySelector ("#ansBtn4")

var timer = 75
var questions = [
    {
        question: 'Which built-in method adds one or more elements to the end of an array and returns the new length of the array?',
        answers: [
          {text: 'last()', 
           correct: false},
          {text: 'put()', 
          correct: false},
          {text: 'push()',
           correct: true},
          {text: 'None of the Above',
           correct:false}
        ]
    },
    {
        question: 'Which built-in method reverses the order of the elements of an array?',
        answers: [
            {text: 'changeOrder(order)', correct:false},
            {text: 'reverse()', correct:true},
            {text: 'sort(order)', correct:false},
            {text: 'None of the above ', correct:false},

            
        ]
    },
    {
        question: 'Which of the following function of String object returns the characters in a string between two indexes into the string?',
        answers: [
            {text: ' slice()', correct:false},
            {text: ' split()', correct:false},
            {text: ' substr()', correct:false},
            {text: ' substring()', correct:true}
        ]
    },
    {
        question:'Which of the following function of String object creates an HTML anchor that is used as a hypertext target?',
        answers: [
            {text: ' anchor()', correct:true},
            {text: ' link ()', correct:false},
            {text: ' blink())', correct:false},
            {text: ' big()', correct:false},


        ]
    },
    {
        question: 'Which of the following function of Array object calls a function for each element in the array?',
        answers: [
            {text: ' concat()', correct:false},
            {text: ' every()', correct:false},
            {text: ' filter()', correct:false},
            {text: ' forEach()', correct:true},
        ]
    }
]
var questionNumber=0;

startButton.addEventListener('click',startQuiz)

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
    btn1.textContent = questions[n].answers[0].text;
    btn2.textContent = questions[n].answers[1].text;
    btn3.textContent = questions[n].answers[2].text;
    btn4.textContent = questions[n].answers[3].text;
    questionNumber = n;
    
}

