import React, {useState, useEffect} from "react";
import {useParams} from 'react-router-dom'
import Question from "../questions/question";
import questionService from "../../services/questions-service"

const Quiz = () => {
  const {courseId, quizId} = useParams();
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    questionService.findQuestionsForQuiz(quizId)
    .then(questions => setQuestions(questions))
  },[])

  return(
      <div>
        <h2>Quiz {quizId}</h2>
        <br/>
        <ul className="list-group">
          {
            questions.map(question =>
                <li className="list-group-item">
                  <Question question={question}/>
                </li>
            )
          }
        </ul>
      </div>
  );
}

export default Quiz;
