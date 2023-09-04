const questions = [
    {
      question: 'What system replaced J.A.R.V.I.S ?',
      answers: [
        { text: 'MONDAY', correct: false },
        { text: 'FRIDAY', correct: true },
        { text: 'SATURDAY', correct: false }
      ]
    },
    {
      question: 'What is Captain Americas shield made of?',
      answers: [
        { text: 'Vibranium', correct: true },
        { text: 'Adamantium', correct: false },
        { text: 'Promethium', correct: false }
      ]
    },
    {
      question: 'What is the real name of the Black panther?',
      answers: [
        { text: 'T Challa', correct: true },
        { text: 'M baku', correct: false },
        { text: 'N Jobu', correct: false }
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