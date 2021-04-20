import React, {useState, useEffect} from "react";
import {useParams} from 'react-router-dom'
import Question from "../questions/question";
import questionService from "../../services/questions-service"
import quizzesService from "../../services/quizzes-service"

const Quiz = () => {
  const {courseId, quizId} = useParams();
  const [questions, setQuestions] = useState([]);
  const [enable, setEnable] = useState(false)
  const [attempt, setAttempt] = useState([])
  const [result, setResult] = useState({})

  useEffect(() => {
    questionService.findQuestionsForQuiz(quizId)
    .then(questions => setQuestions(questions))
  }, [])

  return (
      <div>
        <h2>Quiz {quizId}</h2>
        <br/>
        <ul className="list-group">
          {
            questions.map(question =>
                <li className="list-group-item">
                  {/*<Question question={question}/>*/}
                  <Question question={question}
                            attempt={attempt}
                            setAttempt={setAttempt}/>
                </li>
            )
          }

        </ul>
        {/*<button className="btn-success"*/}
        {/*        onClick={quizzesService.submitQuiz(quizId, questions)}>*/}
        {/*  submit*/}
        {/*</button>*/}
        <br/>
        <button className="float-right btn btn-success"
                disabled={`${enable ? 'disabled' : ''}`}
                onClick={() => {
                  if (attempt.length === questions.length) {
                    setEnable(true)
                    quizzesService.submitQuiz(quizId, attempt).then(
                        result => setResult(result))

                  } else {
                    alert("Please answer all questions before submit!")
                  }

                }}>Get your score
        </button>
        Score:
        <br/>
        {
          enable &&
          result.score
        }
      </div>
  );
}

export default Quiz;
