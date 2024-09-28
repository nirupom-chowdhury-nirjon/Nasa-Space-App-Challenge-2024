const questions = [
    {
        "question": "Which SDG focuses on reducing poverty?",
        "choices": ["SDG 5", "SDG 2", "SDG 1"],
        "correct": "SDG 1",
        "explanation": "SDG 1 aims to end poverty in all its forms everywhere, ensuring that everyone can access basic resources and services."
    },
    {
        "question": "What SDG deals with quality education?",
        "choices": ["SDG 7", "SDG 5", "SDG 4"],
        "correct": "SDG 4",
        "explanation": "SDG 4 focuses on ensuring inclusive and equitable quality education and promoting lifelong learning opportunities for all."
    },
    {
        "question": "Which SDG aims to end hunger and achieve food security?",
        "choices": ["SDG 4", "SDG 3", "SDG 2"],
        "correct": "SDG 2",
        "explanation": "SDG 2 aims to end hunger, achieve food security, and promote sustainable agriculture, ensuring everyone has access to nutritious food."
    },
    {
        "question": "What SDG is about good health and well-being?",
        "choices": ["SDG 2", "SDG 3", "SDG 5"],
        "correct": "SDG 3",
        "explanation": "SDG 3 ensures healthy lives and promotes well-being for all at all ages."
    },
    {
        "question": "Which SDG focuses on gender equality?",
        "choices": ["SDG 5", "SDG 6", "SDG 7"],
        "correct": "SDG 5",
        "explanation": "SDG 5 aims to achieve gender equality and empower all women and girls."
    },
    {
        "question": "What SDG aims to promote clean water and sanitation for all?",
        "choices": ["SDG 6", "SDG 7", "SDG 8"],
        "correct": "SDG 6",
        "explanation": "SDG 6 focuses on ensuring availability and sustainable management of water and sanitation for all."
    },
    {
        "question": "Which SDG promotes affordable and clean energy?",
        "choices": ["SDG 7", "SDG 8", "SDG 9"],
        "correct": "SDG 7",
        "explanation": "SDG 7 ensures access to affordable, reliable, sustainable, and modern energy for all."
    },
    {
        "question": "Which SDG is focused on decent work and economic growth?",
        "choices": ["SDG 8", "SDG 9", "SDG 10"],
        "correct": "SDG 8",
        "explanation": "SDG 8 promotes sustained, inclusive, and sustainable economic growth, full and productive employment, and decent work for all."
    },
    {
        "question": "Which SDG aims to reduce inequality within and among countries?",
        "choices": ["SDG 9", "SDG 10", "SDG 11"],
        "correct": "SDG 10",
        "explanation": "SDG 10 focuses on reducing inequality by ensuring equal opportunities and reducing disparities in wealth and power."
    },
    {
        "question": "What SDG is about sustainable cities and communities?",
        "choices": ["SDG 10", "SDG 11", "SDG 12"],
        "correct": "SDG 11",
        "explanation": "SDG 11 aims to make cities inclusive, safe, resilient, and sustainable."
    },
    {
        "question": "Which SDG focuses on responsible consumption and production?",
        "choices": ["SDG 12", "SDG 13", "SDG 14"],
        "correct": "SDG 12",
        "explanation": "SDG 12 ensures sustainable consumption and production patterns, reducing resource use and environmental impact."
    },
    {
        "question": "What SDG focuses on climate action?",
        "choices": ["SDG 12", "SDG 13", "SDG 14"],
        "correct": "SDG 13",
        "explanation": "SDG 13 aims to take urgent action to combat climate change and its impacts."
    },
    {
        "question": "Which SDG focuses on life below water?",
        "choices": ["SDG 13", "SDG 14", "SDG 15"],
        "correct": "SDG 14",
        "explanation": "SDG 14 aims to conserve and sustainably use the oceans, seas, and marine resources for sustainable development."
    },
    {
        "question": "What SDG focuses on life on land?",
        "choices": ["SDG 14", "SDG 15", "SDG 16"],
        "correct": "SDG 15",
        "explanation": "SDG 15 aims to protect, restore, and promote the sustainable use of terrestrial ecosystems."
    },
    {
        "question": "Which SDG focuses on peace, justice, and strong institutions?",
        "choices": ["SDG 16", "SDG 17", "SDG 12"],
        "correct": "SDG 16",
        "explanation": "SDG 16 promotes peaceful and inclusive societies, access to justice for all, and accountable institutions."
    },
    {
        "question": "Which SDG focuses on partnerships for the goals?",
        "choices": ["SDG 16", "SDG 17", "SDG 15"],
        "correct": "SDG 17",
        "explanation": "SDG 17 aims to strengthen global partnerships to support and achieve the ambitious targets of the 2030 Agenda for Sustainable Development."
    },
    {
        "question": "Which SDG aims to promote innovation and infrastructure?",
        "choices": ["SDG 8", "SDG 9", "SDG 10"],
        "correct": "SDG 9",
        "explanation": "SDG 9 focuses on building resilient infrastructure, promoting inclusive and sustainable industrialization, and fostering innovation."
    },
    {
        "question": "Which SDG aims to protect marine and coastal ecosystems?",
        "choices": ["SDG 13", "SDG 14", "SDG 15"],
        "correct": "SDG 14",
        "explanation": "SDG 14 seeks to conserve and sustainably use oceans, seas, and marine resources, addressing marine pollution and overfishing."
    },
    {
        "question": "What SDG is focused on protecting biodiversity and ecosystems?",
        "choices": ["SDG 13", "SDG 14", "SDG 15"],
        "correct": "SDG 15",
        "explanation": "SDG 15 works to halt biodiversity loss and protect natural ecosystems."
    },
    {
        "question": "What SDG promotes sustainable agricultural practices?",
        "choices": ["SDG 1", "SDG 2", "SDG 3"],
        "correct": "SDG 2",
        "explanation": "SDG 2 aims to end hunger, achieve food security, and promote sustainable agriculture."
    },
    {
        "question": "Which SDG focuses on building sustainable cities and communities?",
        "choices": ["SDG 11", "SDG 12", "SDG 13"],
        "correct": "SDG 11",
        "explanation": "SDG 11 aims to make cities inclusive, safe, resilient, and sustainable."
    },
    {
        "question": "Which SDG emphasizes reducing ocean pollution?",
        "choices": ["SDG 14", "SDG 15", "SDG 16"],
        "correct": "SDG 14",
        "explanation": "SDG 14 focuses on reducing marine pollution and protecting marine biodiversity."
    },
    {
        "question": "What SDG focuses on reducing the environmental impact of cities?",
        "choices": ["SDG 11", "SDG 12", "SDG 13"],
        "correct": "SDG 11",
        "explanation": "SDG 11 focuses on reducing air pollution, managing urban waste, and building sustainable cities."
    },
    {
        "question": "Which SDG aims to promote economic inclusion?",
        "choices": ["SDG 8", "SDG 9", "SDG 10"],
        "correct": "SDG 10",
        "explanation": "SDG 10 focuses on reducing inequality by promoting economic inclusion for all."
    },
    {
        "question": "Which SDG aims to promote access to justice for all?",
        "choices": ["SDG 15", "SDG 16", "SDG 17"],
        "correct": "SDG 16",
        "explanation": "SDG 16 focuses on promoting access to justice, reducing violence, and building strong institutions."
    },
    {
        "question": "Which SDG promotes global partnerships to achieve sustainability goals?",
        "choices": ["SDG 16", "SDG 17", "SDG 11"],
        "correct": "SDG 17",
        "explanation": "SDG 17 focuses on building partnerships between governments, the private sector, and civil society to achieve sustainable development."
    }
]
;

let currentQuestion = 0;
let correctCount = 0;
let wrongCount = 0;

const questionEl = document.getElementById('question');
const choicesEl = document.getElementById('choices');
const scoreEl = document.getElementById('score');
const explanationEl = document.getElementById('explanation'); 
const nextBtn = document.getElementById('next-btn');

function loadQuestion() {
    const currentQ = questions[currentQuestion];
    questionEl.innerText = currentQ.question;
    choicesEl.innerHTML = '';
    explanationEl.innerText = '';

    currentQ.choices.forEach(choice => {
        const button = document.createElement('button');
        button.innerText = choice;
        button.classList.add('choice-btn');
        button.onclick = () => checkAnswer(choice);
        choicesEl.appendChild(button);
    });
}

function checkAnswer(selectedChoice) {
    const correctChoice = questions[currentQuestion].correct;
    const explanation = questions[currentQuestion].explanation;

    if (selectedChoice === correctChoice) {
        correctCount++;
        alert("Congratulations! 🎊 That's correct!");
    } else {
        wrongCount++;
        alert("Sorry, that's wrong.");
    }

    explanationEl.innerText = explanation; // Show importance explanation after answering
    scoreEl.innerText = `Correct: ${correctCount} | Wrong: ${wrongCount}`;
    currentQuestion++;

    if (currentQuestion < questions.length) {
        nextBtn.style.display = 'block'; // Show the Next button to load the next question
    } else {
        endGame();
    }
}

function endGame() {
    questionEl.innerText = `Game Over! You scored ${correctCount} correct answers.`;
    choicesEl.innerHTML = '';
    explanationEl.innerHTML = '';
    nextBtn.style.display = 'none';
}

nextBtn.onclick = () => {
    loadQuestion();
    nextBtn.style.display = 'none'; // Hide the Next button while waiting for an answer
};

loadQuestion(); // Start the game
