const quizData = [
    {
        question: "which is most powerful anime character?",
        a: "Naruto Uzumaki",
        b: "Goku",
        c: "Ichigo Kurosaki",
        d: "Eren Yeager",
        correct: "b",
    },
    {
        question: "which anime has the most episodes?",
        a: "Naruto",
        b: "One Piece",
        c: "Bleach",
        d: "Attack on Titan",
        correct: "b",
    },
    {
        question: "which anime character has a higher IQ?",
        a: "Naruto",
        b: "Luffy",
        c: "Itachi",
        d: "Tanjiro",
        correct: "c",
    },
    {
        question: "which anime is the shortest?",
        a: "Naruto",
        b: "Hunter X Hunter",
        c: "Demon Slayer",
        d: "Black Clover",
        correct: "c",
    },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => (answerEl.checked = false));
}

function getSelected() {
    let answer;
    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

submitBtn.addEventListener("click", () => {
    const answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2>You answered ${score}/${quizData.length} questions correctly</h2><button onclick="window.location.reload()">Reload</button>`;
        }
    }
});
