import { useState } from "react";
function App()
{
  const questions=[
    {
      questionText:"Which is frontend framework used to creating web apps?",
      answerOption:[
      {answerText:"Nodejs", isCorrect:false},
      {answerText:"Reactjs", isCorrect:true},
      {answerText:"Expressjs", isCorrect:false},
      {answerText:"mongodb", isCorrect:false},    
  ]
},
{
  questionText:"Which of the following statements are true?",
  answerOption:[
    {answerText:"node js is client-side language", isCorrect:false},
    {answerText:"both (a) and (b)", isCorrect:false},
    {answerText:"none of the above", isCorrect:false},
    {answerText:"node js is server side language",isCorrect:true},

  ]
},
{
  questionText:"Which is the web server among this?",
  answerOption:[
    {answerText:"reactjs", isCorrect:false},
    {answerText:"expressjs", isCorrect:false},
    {answerText:"node js",isCorrect:true},
    {answerText:"angular", isCorrect:false},
  ]
},
{
  questionText:"___ is an interactive shell that processes Node. ",
  answerOption:[
    {answerText:"REAL", isCorrect:false},
    {answerText:"RESP", isCorrect:false},
    {answerText:"None of the above", isCorrect:false},
    {answerText:"REPL",isCorrect:true},
  ]
},
{
  questionText:"Node.js is written in which language?  ",
  answerOption:[
    {answerText:"C++",isCorrect:false},
    {answerText:"Javascript", isCorrect:true},
    {answerText:"C", isCorrect:false},
    {answerText:"Java", isCorrect:false},
  ]
},

  ]
    
  const [currentQuestion,setCurrentQuestion]=useState(0)
  const [showScore,setShowScore]=useState(false)
  const [score,setScore]=useState(0)
  const Handle=(isCorrect)=>{
    if(isCorrect)
    {
      setScore(score+1)
    }
    const nextQuestion=currentQuestion+1
    if(nextQuestion<questions.length)
    {
      setCurrentQuestion(nextQuestion)
    }
    else
    {
      setShowScore(true)
    }
  }
  return(
    
    <div className="quiz">
      {
        showScore ?(
          <div className="score-section">
            YOU HAVE SCORED {score} OUT OF {questions.length}!!!
          </div>
        ):
        (
       
          
        <>
        
         <div className="question-section">
          <span>Question - {currentQuestion+1}</span> /{questions.length}   
          <span></span>
         </div>
         <div className="question-text">
          {questions[currentQuestion].questionText}
         </div>
         <div className="answer-question">
          {questions[currentQuestion].answerOption.map((answerOption) =>(
            <button onClick={ () => Handle(answerOption.isCorrect)}>{answerOption.answerText}</button>
          ))}
         </div>
        </>
        )
      }
    </div>
  )

}
export default App
        