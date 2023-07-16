// script.js
document.addEventListener('DOMContentLoaded', function () {
    const questionElement = document.querySelector('.question');
    const optionsElement = document.querySelector('.options');
    const checkBtn = document.querySelector('.check-btn');
    const resultElement = document.querySelector('.result');
  
    let questions = [];
    let currentQuestionIndex = 0;
    let score = 0;
  
    function displayQuestion() {
      const currentQuestion = questions[currentQuestionIndex];
      if (!currentQuestion) {
        // Si no hay más preguntas, mostrar el puntaje final
        displayFinalScore();
        return;
      }
  
      questionElement.textContent = currentQuestion.question;
      optionsElement.innerHTML = '';
  
      currentQuestion.options.forEach(option => {
        const listItem = document.createElement('li');
        listItem.textContent = option;
        listItem.addEventListener('click', () => checkAnswer(option));
        optionsElement.appendChild(listItem);
      });
    }
  
    function checkAnswer(selectedOption) {
      const currentQuestion = questions[currentQuestionIndex];
      if (selectedOption === currentQuestion.correct_answer) {
        score += 1;
        resultElement.textContent = 'Correcto! +1 punto';
        resultElement.style.color = 'green';
      } else {
        resultElement.textContent = 'Incorrecto. Intenta nuevamente.';
        resultElement.style.color = 'red';
      }
      checkBtn.disabled = true;
  
      // Avanzar a la siguiente pregunta después de 1 segundo
      setTimeout(() => {
        currentQuestionIndex++;
        resultElement.textContent = '';
        checkBtn.disabled = false;
        displayQuestion();
      }, 1000);
    }
  
    function fetchQuestions() {
      fetch('https://opentdb.com/api.php?amount=10&type=multiple')
        .then(response => response.json())
        .then(data => {
          questions = data.results.map(result => ({
            question: result.question,
            correct_answer: result.correct_answer,
            options: [...result.incorrect_answers, result.correct_answer]
          }));
          displayQuestion();
          checkBtn.disabled = false;
          resultElement.textContent = '';
        })
        .catch(error => console.error('Error fetching questions:', error));
    }
  
    function displayFinalScore() {
      questionElement.textContent = `Tu puntuación final: ${score}`;
      optionsElement.innerHTML = '';
      checkBtn.style.display = 'none';
    }
  
    checkBtn.addEventListener('click', checkAnswer);
  
    // Cargar las preguntas al inicio
    fetchQuestions();
  });
  