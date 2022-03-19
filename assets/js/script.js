const startButton = document.getElementById("start-btn")
const questionContainerElement = document.getElementById("question-container")

startButton.addEventListener("click", startGame)

function startGame() {
    console.log("started")
    startButton.classList.add("hide")
    questionContainerElement.classList.remove("hide")
    setNextQuestion()
}

// var questions = [
//     {
//         prompt: "___ is the process of finding errors and fixing them within a program.\n(a) Compiling\n\(b) Executing\n(c) Debugging\n(d) Scanning",
//         answer: "c"
//     },
//     {
//         prompt: "A loop that never ends is referred to as a(n) ___.\n(a) While loop\n\(b) Infinite loop\n(c) Recursive loop\n(d) for loop",
//         answer: "b"
//     },]
// var score = 0;

// for (var i = 0; i < questions.length; i++) {
//     var response = window.prompt(questions[i].prompt);
//     if (response == questions[i].answer) {
//         score++;
//         alert("Correct!");
//     } else {
//         alert("Wrong!");
//     }
// }
// alert("you got " + score + "/" + questions.length)