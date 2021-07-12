var test= document.getElementById("startbtn")
test.onclick=function(){console.log("helloworld") }

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
        questions:"The first job for many coders. These developers work under the guidance of more experienced pros.",
        answers:[
            {text:"Full-stack Developer",correct:false},
            {text:"Junior Developer",correct:true},
            {text:"Mid-level Developer",correct:false},
            {text:"SeniorDeveloper",correct:false}
        ]
    }
]