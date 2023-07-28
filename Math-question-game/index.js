// Create a Math question
// Math question will have a random generator
// Question Type multiplication question with random number range 1-10
// Answer will be the product of the random number range and the random number
// User Will have to answer question
// On Submit Answer answer will be comopare with random generator answer
// If Answer will be correct than score will be incremented
// If answer will be wrong than score will be decremented

// const questionEl = document.getElementById("question");
// let questionFormEl = document.getElementById("questionForm");
// let storeAnswer; 

const questionEl = document.getElementById("question");
const questionFormEl = document.getElementById("questionForm");
const scoreEl = document.getElementById("score");

let storedAnswer;
let score = localStorage.getItem("score");

const randomNumber = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1) + min);
}

const generateQuestion = () => {
      const randomNumber1 = randomNumber(1, 10);
      const randomNumber2= randomNumber(1, 10);
      // const question = `Q. What is ${firstNumber} multiply by ${secondNumber} ?`;
      // const answer = firstNumber * secondNumber;
      const questionType = randomNumber(1, 4);
       
      let firstNumber;
      let secondNumber;

      if (randomNumber1 > randomNumber2 && questionType > 2) {
            firstNumber = randomNumber1;
            secondNumber = randomNumber2;
      } else {
            firstNumber = randomNumber2;
            secondNumber = randomNumber1;
       }

      let question;
      let answer;
      switch (questionType) {
            case 1:
                  question = `Q. What is ${firstNumber} multiply by ${secondNumber} ?`; 
                  answer = firstNumber * secondNumber; 
                  break;
            case 2:
                  question = `Q. What is ${firstNumber} Add to ${secondNumber} ?`;
                  answer = firstNumber + secondNumber;
                  break;
 
                  case 3:
                        question = `Q. What is ${firstNumber} Divided by ${secondNumber} ?`;
                        answer = firstNumber / secondNumber;
                  break;
            
                  case 4:
                        question = `Q. What is ${firstNumber} Subtract from ${secondNumber} ?`;
                        answer = firstNumber - secondNumber;
                        break;
            default:
                  question = `Q. What is ${firstNumber} Subtract from ${secondNumber} ?`;
                        answer = firstNumber - secondNumber;
                  break;
      }
      return { question, answer };
}


// console.log(generateQuestion());


const showQuestion = () => {
      const { question, answer } = generateQuestion();
      questionEl.innerText = question;
      scoreEl.innerText = score;
      storedAnswer = answer;
}


showQuestion();


const checkAnswer = (event) => {
      event.preventDefault();
      const formData = new FormData(questionFormEl);
      const userAnswer = parseInt(formData.get("answer"));

      if (userAnswer == storedAnswer) {
            Toastify({
                  text: `Your are wrong and your score is ${score}`,
                  className: "info",
                  gravity: "bottom",
                  position: "center",
                  style: {
                        background: "linear-gradient(to right, #00b09b, #96c93d)",
                  }
            }).showToast();
            score +=1;
      } else {
            score -= 1;
            Toastify({
                  text: `Your are wrong and your score is ${score}`,
                  className: "info",
                  gravity: "bottom",
                  position: "center",
                  style: {
                    background: "linear-gradient(to right, rgba(255,0,0,0), rgba(255,0,0,1))",
                  }
                }).showToast();
      }

      scoreEl.innerText = score;
      localStorage.setItem("score", score);
      event.target.reset();
      showQuestion();
     console.log("answer",userAnswer);
}

// checkAnswer()