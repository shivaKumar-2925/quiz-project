const quizDB=[
  {
    question:"Q1:what is the full form of HTML ?",
    a:"hello tells module link",
    b:"helloin text markup link",
    c:"Hyper Makeup language",
    d:"Hyper Text markup language",
   ans:"ans4"
  },
  {
    question:"Q2:what is the full of the css",
    a:" calling style store",
    b:"cashcade style store",
    c:"cashcading style sheet",
    d:"cash steke store",
   ans:"ans3"
  },
  {
    question:"Q3:what is the full of HTTP",
    a:"hello tells time proof",
    b:"helloin text total photo",
    c:"Hyper text  travel path",
    d:"Hyper Text transfer protocal",
   ans:"ans4"
  },
  {
    question:"Q4:what is the full form of js",
    a:"javascipt",
    b:"jobscript",
    c:"justScript",
    d:"jailyscript",
   ans:"ans1"
  }

] 
const question =document.querySelector(".question");
const option1 = document.querySelector("#option1")
const option2 = document.querySelector("#option2")
const option3 = document.querySelector("#option3")
const option4 = document.querySelector("#option4");
const answers = document.querySelectorAll(".answer")
 const submit = document.querySelector('#submit');
const showScore = document.querySelector('#showScore')
let questionCount = 0;
const loadQuestion=()=>{
  const questionList = quizDB[questionCount];
  
   question.innerText = questionList.question ;
   option1.innerHTML = questionList.a;
   option2.innerHTML = questionList.b;
   option3.innerHTML = questionList.c;
   option4.innerHTML = questionList.d;
}

loadQuestion()
const  removeChecked=()=>{
  answers.forEach((curAnsEle)=>{
    if(curAnsEle.checked){
      curAnsEle.checked=false
    }
  })
}

const getCheckAnswer = ()=>{
   let  answer;
   answers.forEach((curAnsEle)=>{
  if(curAnsEle.checked){
  answer = curAnsEle.id;
  }
 
   })
    return answer;
 
}
let score=0;



submit.addEventListener("click",()=>{
 const  checkAnswer = getCheckAnswer()
 console.log(checkAnswer)
 if(checkAnswer===quizDB[questionCount].ans){
 score++;
 
 }
 removeChecked()
 questionCount++;
 if(questionCount < quizDB.length){
   loadQuestion()
 }else{
 showScore.innerHTML=`
 <h2> you scored ${score}/${quizDB.length}</h3>
 <button class="btn" onclick="location.reload()">play again</button>
 `
 showScore.classList.remove('scoreArea')
 }
 
})