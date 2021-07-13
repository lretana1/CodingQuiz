const questions = 
[
    {
        question: "An ____ is a data structure consisting of a collection of elements (values or variables), each identified by at least one ____ index or key.",
        answers:[
            {text:"Array",correct: true},
            {text:"Interger", correct: false},
            {text:"Function",correct: false},
            {text:"Boolean", correct: false}
        ]
    },
    {
        question: "instructs the browser to display a dialog with an optional message, and to wait until the user dismisses the dialog.",
        answers:[
            {text:"window.alert()", correct:true},
            {text:"window.prompt()", correct:false},
            {text:"window.location()", correct:false},
            {text:"window.onload()", correct:false}
        ]
    },
    {
        question: " A block of code that can be referenced by name to run the code it contains.",
        answers:[
            {text:"Algorithm", correct:false},
            {text:"Argument",correct:false},
            {text:"Command",correct:false},
            {text:"Function",correct:true}
        ]
    },
    {
        question:" The markup language used to build basic websites. Determines what shows up on the page. ",
        answers:[
            {text:"Node.js",correct:false},
            {text:"CSS",correct:false},
            {text:"HTML",correct:true},
            {text:"Javascriot",correct:false}
        ]
    },
    {
        question:"The first job for many coders. These developers work under the guidance of more experienced pros.",
        answers:[
            {text:"Full-stack Developer",correct:false},
            {text:"Junior Developer",correct:true},
            {text:"Mid-level Developer",correct:false},
            {text:"SeniorDeveloper",correct:false}
        ]
    }
]
var currentQuestion = 0;
var startBtn = document.querySelector("#startbtn");
var score = 0;

startBtn.onclick = function(){
    document.querySelector("#Startpage").style.display = "none";
    document.querySelector("#question-container").style.display = "block";
    updateQuestion(currentQuestion);
};

var updateQuestion = function(q){
    document.querySelector('.question').textContent = questions[q]["question"];
    for(var x = 0; x < questions[q]["answers"].length; x++){
        document.querySelectorAll('.answer-btn')[x].textContent = questions[q]["answers"][x]["text"];
        if (questions[q]["answers"][x]["correct"]){
            document.querySelectorAll('.answer-btn')[x].classList.add("true");
        }
    }
};


document.querySelectorAll('.answer-btn').forEach(function(btn){
    btn.onclick = function(){
        if(btn.classList.contains("true")){
            score++;
        }
        document.querySelector('.true').classList.remove("true");
        currentQuestion++;
        if (currentQuestion < questions.length){
            updateQuestion(currentQuestion);
        }
        else{
            document.querySelector("#question-container").style.display = "none";
            document.querySelector("#finished-container").style.display = "block";
            document.querySelector("#finished-container").textContent = "Score: " + score;
        }
    };
});
