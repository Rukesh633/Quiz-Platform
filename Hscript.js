const questions = [
    {
      question: 'Harry has a scar on his forehead. What shape is it?',
      answers: [
        { text: 'shining star', correct: false },
        { text: 'Lightning Bolt', correct: true },
        { text: 'egg', correct: false }
      ]
    },
    {
      question: 'Who is Fluffy?',
      answers: [
        { text: 'three-headed dog', correct: true },
        { text: 'three-headed snake', correct: false },
        { text: 'three-headed dragon', correct: false }
      ]
    },
    {
      question: 'What is the famous word of Snape?',
      answers: [
        { text: 'Always', correct: true },
        { text: 'Look at me', correct: false },
        { text: 'Obviously', correct: false }
      ]
    }
  ];
  
  const quizForm = document.getElementById('quizForm');
  const questionElement = document.getElementById('question');
  const answerElements = document.querySelectorAll('#quizForm label span');
  const scoreElement = document.getElementById('score');
  const resetBtn = document.getElementById('resetBtn');
  
  let currentQuestion = 0;
  let score = 0;
  
  loadQuestion();
  
  quizForm.addEventListener('submit', e => {
    e.preventDefault();
  
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    if (!selectedAnswer) {
      return;
    }
  
    const answerIndex = parseInt(selectedAnswer.value);
    const correct = questions[currentQuestion].answers[answerIndex - 1].correct;
    if (correct) {
      score++;
    }
  
    currentQuestion++;
    if (currentQuestion === questions.length) {
      document.getElementById('question').remove();
      document.getElementById('quiz-container').remove();
      showScore();
    } else {
      loadQuestion();
      
    }
  });
  
  resetBtn.addEventListener('click', () => {
    currentQuestion = 0;
    score = 0;
    loadQuestion();
    scoreElement.textContent = '';
    quizForm.style.display = 'block';
  });
  
  function loadQuestion() {
    const question = questions[currentQuestion];
    questionElement.textContent = question.question;
    answerElements.forEach((element, index) => {
      element.textContent = question.answers[index].text;
    });
  }
  
  function showScore() {
    const percentage = (score / questions.length) * 100;
    scoreElement.textContent = `You scored ${score}/${questions.length} (${percentage}%)`;
    quizForm.style.display = 'none';
  }