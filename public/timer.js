// Timer logic

const EXAM_TIME = 60 * 65
const NUM_QUESTION = 45
const QUESTION_TIME = parseInt(EXAM_TIME / NUM_QUESTION)

const timer = document.getElementById('timer')
const timeLeft = document.getElementById('time-left')

let hasStarted = 0, questionNo = 1
let questionTime = QUESTION_TIME, examTime = EXAM_TIME

const button = document.getElementById('next')
button.addEventListener('click', () => {
    if (hasStarted) {
        nextQuestion()
    } else {
        start()
    }
})

function nextQuestion() {
    questionTime += QUESTION_TIME
    questionNo++
}

function start() {
    hasStarted = 1
    button.innerHTML = 'NEXT'
    tick()
    setInterval(() => {
        tick()
    }, 1000)
}

function tick() {
    examTime -= 1
    questionTime -= 1
    timeLeft.innerHTML = `FINISH TIME IN: ${(questionTime < 0) ? '-' : ''}${secondsToMS(examTime)}`
    timer.innerHTML = `TIME LEFT FOR QUESTION ${questionNo}: <b>${(questionTime < 0) ? '-' : ''}${secondsToMS(questionTime)}</b>`
}

// Helper Functions 
const pad = (val) => {
    if (val < 10) {
        return `0${val}`
    }
    return val
}

const secondsToMS = (diffSeconds) => {
    diffSeconds = Math.abs(diffSeconds)
    const minutes = parseInt((diffSeconds / 60))
    const seconds = parseInt(diffSeconds - minutes * 60)
    return `${pad(minutes)}:${pad(seconds)}`
}
