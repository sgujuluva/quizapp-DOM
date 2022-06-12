const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];
// select the question text
let questionText = document.getElementById("question");
//radiobuttons
let answerOptions =document.querySelectorAll(".answer");
//select new quiz
let quiz = document.querySelector("#quiz");
//select the answer text
let answerA =document.getElementById("a_text");
let answerB =document.getElementById("b_text");
let answerC =document.getElementById("c_text");
let answerD =document.getElementById("d_text");
//click button to populate each question
let btnClick = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
    deselectAnswers();
    let currentQuizData = quizData[currentQuiz];
    questionText.innerText = currentQuizData.question;
    answerA.innerText = currentQuizData.a;
    answerB.innerText = currentQuizData.b;
    answerC.innerText = currentQuizData.c;
    answerD.innerText = currentQuizData.d;
}

function deselectAnswers(){
    answerOptions.forEach(answerOption => answerOption.checked = false);
}

function getSelected(){
    let answer;
    answerOptions.forEach(answerOption =>{
        if(answerOption.checked ){
             answer = answerOption.id;
        } 

        })
        return answer;
}

btnClick.addEventListener("click", () => {
    let userAnswer = getSelected();
    if(userAnswer){
        if(userAnswer === quizData[currentQuiz].correct){
            score++;
        }
        currentQuiz++;
        if(currentQuiz < quizData.length){
            loadQuiz();
        }else{
            quiz.innerHTML = `<h2> You answered correctly at ${score} / ${quizData.length} questions`
        }
    }
   
})