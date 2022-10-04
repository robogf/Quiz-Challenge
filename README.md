# Quiz-Challenge

## Site Picture 
![site](/Screen%20Shot%202022-10-03%20at%2011.28.30%20PM.png)

## Technologies Used 
- HTML - used to create elements on the DOM
- CSS - styled the html elements on the webpage
- Git - version control system to track changes of soure code
- Github - Host our repository that is deployed to github pages
- JavaScript- allowed us to add the functionality to the page 

## Summary 
Through this application you are able to take a mini quiz that is multiple choice against the timer.

## Code Snippet 
```JavaScript 
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
```
## Author Links 
[LinkedIn](https://www.linkedin.com/in/angel-matias-01120b251/)
[GitHub] (https://github.com/robogf)
