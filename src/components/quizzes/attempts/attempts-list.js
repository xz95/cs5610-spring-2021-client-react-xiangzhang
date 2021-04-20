import React ,{useEffect,useState}from "react";
import {Link, useParams} from "react-router-dom";

// import quizService from "../../../services/quizzes-service";
import quizzesService from "../../../services/quizzes-service"

const AttemptsList = () => {
  const [attempts,setAttempts] = useState([])
  const {courseId,quizId} = useParams();
  var i = 1
  useEffect(()=>{
    quizzesService.findAttempts(quizId)
                .then(attempts => setAttempts(attempts))
  },[])
  return(
      <div>
        <Link to={`/courses/${courseId}/quizzes`}>
          <i className="fas fa-times float-right fa-3x"></i>
        </Link>
        <br/>
        <br/>
        <br/>
        <div >
          {
            attempts.map(attempt =>
                <ul className="list-group">

                  <li className="list-group-item bg-primary">
                    <h4>Attempt {i++}</h4>
                  </li>
                  <li className="list-group-item text-danger font-weight-bold">
                    Score: {attempt.score}
                  </li>
                  {
                    attempt.answers.map(answer =>
                        <div>
                          <li className="list-group-item font-weight-bold">
                            Question: {answer.question}
                          </li>
                          <li className="list-group-item">
                            Your answer: {answer.answer}
                          </li>
                          <li className="list-group-item">
                            Correct answer: {answer.correct}
                          </li>
                        </div>
                    )
                  }
                  <br/>
                  <br/>
                </ul>
            )
          }
        </div>
      </div>
  )

}
export default AttemptsList