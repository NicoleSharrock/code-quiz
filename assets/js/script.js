const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const startingMinutes = 1;
let time = startingMinutes * 60;
const countdownEl = document.getElementById("countdown");
let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()


    setInterval(updateCountdown, 1000);
    function updateCountdown() {
        const minutes = Math.floor(time / 60);
        let seconds = time % 60;

        seconds = seconds < 10 ? "0" + seconds : seconds;

        countdownEl.innerHTML = `${minutes}: ${seconds}`;
        time--;
        if (time <= 0 || time < 1) {
            clearInterval(startingMinutes)
        }
    }
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question: '_______ is the process of finding errors and fixing them within a program.',
        answers: [
            { text: 'Compiling', correct: false },
            { text: 'Executing', correct: false },
            { text: 'Debugging', correct: true },
            { text: 'Scanning', correct: false }
        ]
    },
    {
        question: 'A loop that never ends is referred to as a(n) _____?',
        answers: [
            { text: 'While loop', correct: false },
            { text: 'Infinite loop', correct: true },
            { text: 'Recursive loop', correct: false },
            { text: 'for loop', correct: false }
        ]
    },
    {
        question: 'What tag can be used to insert a line break or blank line in an HTML document??',
        answers: [
            { text: '<title></title>', correct: false },
            { text: '<br></br>', correct: true },
            { text: '<body></body>', correct: false },
            { text: '<head></head>', correct: false }
        ]
    }


]
