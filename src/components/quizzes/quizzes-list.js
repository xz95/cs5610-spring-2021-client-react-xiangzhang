import React, {useState, useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import quizzesService from "../../services/quizzes-service"

const QuizzesList = () => {
  const {courseId} = useParams();
  const [quizzes, setQuizzes] = useState([])
  useEffect(() => {
    quizzesService.findAllQuizzes()
    .then((quizzes) => {
      setQuizzes(quizzes)
    })
  }, [])
  return(
      <div className="container">
        <h2>Quizzes</h2>
        <div className="list-group">
          {
            quizzes.map((quiz) => {
              return(
                  <>
                    <Link
                        to={`/courses/${courseId}/quizzes/${quiz._id}`}
                        className="list-group-item">
                      {quiz.title}

                      <button
                          className="btn-primary float-right"
                          to={`/courses/${courseId}/quizzes/${quiz._id}`}>
                        Start
                      </button>

                    </Link>

                    <Link
                        to={`/courses/${courseId}/quizzes/${quiz._id}/attempts`}>
                      <button className="float-right btn-success">
                        Attempts
                      </button>
                    </Link>
                    <br/>
                  </>
              )
            })
          }
        </div>
      </div>
  )
}

export default QuizzesList;