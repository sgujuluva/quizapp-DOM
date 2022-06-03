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

let questionText = document.getElementById("question");
let answerA =document.getElementById("a_text");
let answerB =document.getElementById("b_text");
let answerC =document.getElementById("c_text");
let answerD =document.getElementById("d_text");
//click button to populate each question
let btnClick = document.getElementById("submit");
let index = 0;
eachQuestion(index);
btnClick.addEventListener("click", () => {
    if(index < quizData.length){
        index++;
        eachQuestion(index);
    }  
})
// to populate each question
function eachQuestion(index){
    questionText.innerText = quizData[index].question;
    answerA.innerText = quizData[index].a;
    answerB.innerText = quizData[index].b;
    answerC.innerText = quizData[index].c;
    answerD.innerText = quizData[index].d;
}

