class Question {
  constructor(newQuestion, answerArray, goodAnswer) {
    this.newQuestion = newQuestion;
    this.answerArray = answerArray;
    this.goodAnswer = goodAnswer;
  }
}

const questions = [
  new Question(
    "Quelle méthode Javascript permet de filtrer les éléments d'un tableau",
    ["indexOf()", "map()", "filter()", "reduce()"],
    "filter()"
  ),
  new Question(
    "Quelle méthode Javascript permet de vérifier si un élément figure dans un tableau",
    ["isNaN()", "includes()", "findIndex()", "isOdd()"],
    "includes()"
  ),
  new Question(
    "Quelle méthode transforme du JSON en un objet Javascript ?",
    ["JSON.parse()", "JSON.stringify()", "JSON.object()", "JSON.toJS"],
    "JSON.parse()"
  ),
  new Question(
    "Quel objet Javascript permet d'arrondir à l'entier le plus proche",
    ["Math.ceil()", "Math.floor()", "Math.round()", "Math.random()"],
    "Math.round()"
  ),
];

let index = 0;
let monScore = 0;

function questionDisplay() {
  question.innerHTML = questions[index].newQuestion;
}

function answerDisplay() {
  guess0.innerHTML = questions[index].answerArray[0];
  guess1.innerHTML = questions[index].answerArray[1];
  guess2.innerHTML = questions[index].answerArray[2];
  guess3.innerHTML = questions[index].answerArray[3];
}

function progressDisplay() {
  progress.innerHTML = `
    Question ${index + 1} sur ${questions.length}
  `;
}

function scoreResult(choice) {
  if (choice == questions[index].goodAnswer) {
    monScore++;
  }
}

function resultDisplay() {
  document.querySelector("h1").innerHTML = "QUIZ TERMINÉ !";
  question.innerHTML = "";
  score.innerHTML = `Votre score est de : ${monScore} / ${questions.length}`;
  document.querySelector(".choices").innerHTML = "";
  progress.innerHTML = "";
}

document.querySelectorAll(".btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    scoreResult(e.target.textContent);
    index++;
    if (index < questions.length) {
      questionDisplay();
      answerDisplay();
      progressDisplay();
    } else {
      resultDisplay();
    }
  });
});

questionDisplay();
answerDisplay();
progressDisplay();
