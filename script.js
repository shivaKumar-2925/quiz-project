const quizDB = [
  {
    question: "Q1:what is the full form of HTML ?",
    a: "hello tells module link",
    b: "helloin text markup link",
    c: "Hyper Makeup language",
    d: "Hyper Text markup language",
    ans: "ans4",
  },
  {
    question: "Q2:what is the full of the css",
    a: " calling style store",
    b: "cashcade style store",
    c: "cashcading style sheet",
    d: "cash steke store",
    ans: "ans3",
  },
  {
    question: "Q3:what is the full of HTTP",
    a: "hello tells time proof",
    b: "helloin text total photo",
    c: "Hyper text  travel path",
    d: "Hyper Text transfer protocal",
    ans: "ans4",
  },
  {
    question: "Q4:what is the full form of js",
    a: "javascipt",
    b: "jobscript",
    c: "justScript",
    d: "jailyscript",
    ans: "ans1",
  },
];
const innerDiv = document.getElementsByClassName("inner-div");
const question = document.querySelector(".question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const allAnswers = document.querySelectorAll(".answer");
const submit = document.querySelector("#submit");
const showScore = document.querySelector("#showScore");
const allForm = document.getElementById("myForm");
const showScores = document.getElementById("showScore");
const playAgainBtn = document.getElementsByClassName("playAgainBtn1");

var ind = 0;
var score = 0;
function loadQue() {
  if (ind < quizDB.length) {
    question.innerHTML = quizDB[ind].question;
    option1.innerHTML = quizDB[ind].a;
    option2.innerHTML = quizDB[ind].b;
    option3.innerHTML = quizDB[ind].c;
    option4.innerHTML = quizDB[ind].d;
  } else {
    console.log("no quetions left");
  }
}

loadQue();
console.log(ind);
submit.addEventListener("click", () => {
  allAnswers.forEach((ele) => {
    if (ele.checked) {
      console.log(ele.id, quizDB[ind].ans);
      if (ele.id == quizDB[ind].ans) {
        score += 1;
      }

      ele.checked = false;
    }
  });
  if (ind < quizDB.length - 1) {
  } else {
    innerDiv[0].style.display = "none";
    showScore.innerHTML = `your score is ${score} out of ${quizDB.length}<br/>
     <button class='playAgainBtn1'>Play-again !!<bottun>`;

    showScores.style.display = "block";
    playAgainBtn[0].addEventListener("click", () => {
      location.reload();
    });
  }
  ind += 1;
  loadQue();
});
