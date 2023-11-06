const quizData = [
    {
        question: 'What is the capital of France?',
        answers: ['London', 'Paris', 'Berlin', 'Madrid'],
        correct: 'Paris'
    },
    {
        question: 'Which planet is known as the red planet?',
        answers: ['Jupiter', 'Mars', 'Venus', 'Mercury'],
        correct: 'Mars'
    },
    {
        question: 'Who painted the Mona Lisa?',
        answers: ['Vincent van Gogh', 'Leonardo da Vinci', 'Pablo Picasso', 'Michelangelo'],
        correct: 'Leonardo da Vinci'
    },
    {
        question: 'What is the largest ocean on Earth?',
        answers: ['Pacific Ocean','Indian Ocean','Arctic Ocean','Antarctic Ocean'],
        correct: 'Pacific Ocean'
    }
];

const quizContainer = document.getElementById('quiz');
const resultContainer = document.getElementById('result');
const submitButton = document.getElementById('submit');

function buildQuiz() {
    const output = [];

    quizData.forEach((data, index) => {
        const answers = [];
        for (let i = 0; i < data.answers.length; i++) {
            answers.push(
                `<label>
                    <input type="radio" name="question${index}" value="${data.answers[i]}">
                    ${data.answers[i]}
                </label>`
            );
        }

        output.push(
            `<div class="question">${data.question}</div>
            <div class="answers">${answers.join('')}</div>`
        );
    });

    quizContainer.innerHTML = output.join('');
}

function showResults() {
    const answerContainers = quizContainer.querySelectorAll('.answers');
    let score = 0;

    quizData.forEach((data, index) => {
        const answerContainer = answerContainers[index];
        const selector = `input[name=question${index}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        if (userAnswer === data.correct) {
            score++;
        }
    });

    resultContainer.innerHTML = `You got ${score} out of ${quizData.length} correct!`;
}

buildQuiz();

submitButton.addEventListener('click', showResults);
