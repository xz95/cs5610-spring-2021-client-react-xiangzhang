import React, {useEffect, useState} from "react";

const TrueFalseQuestion = ({question}) => {
  const [answer, setAnswer] = useState(null)
  const [grade, setGrade] = useState(false)
  //
  // function choiceType() {
  //   if (answer === question.answer) {
  //     return 'list-group-item-danger';
  //   }
  //   if (answer !== question.answer) {
  //     return 'list-group-item-danger';
  //   }
  //   return ''
  // }


  return (
      <div>
        <h4>
          {question.question} &nbsp;
          {
            grade && JSON.stringify(answer) === question.correct &&
            <i className="fas fa-check text-success"></i>
          }
          {
            grade && JSON.stringify(answer) !== question.correct &&
            <i className="fas fa-times text-danger"></i>
          }
        </h4>
        {
          grade &&
                  <h5>correct answer: {question.correct}</h5>
        }
        <br/>
        {/*{JSON.stringify(answer)}*/}
        {
          grade && (true === answer || "true" === question.correct) &&
          <label className={`list-group-item
                              ${"true" === question.correct ? 'list-group-item-success' : 'list-group-item-danger'}`}>

            <input
                type="radio"
                checked={answer}
                name={question._id}/>&nbsp; True
            {
              "true" === question.correct &&
              <i className="fas fa-check float-right"></i>
            }
            {
              "false" === question.correct &&
              <i className="fas fa-times float-right"></i>
            }
          </label>
        }
        {
          grade && true !== answer && "true" !== question.correct &&
          <label className="list-group-item">
            <input
                type="radio"
                name={question._id}/>&nbsp; True</label>
        }

        {
          !grade &&
          <label className="list-group-item">
            <input
                type="radio"
                onClick={() => setAnswer(true)}
                name={question._id}/>&nbsp; True</label>
        }


        {
          grade && (false === answer || "false" === question.correct) &&
          <label className={`list-group-item 
                            ${"false" === question.correct ? 'list-group-item-success' : 'list-group-item-danger'}`}>
            <input
                type="radio"
                checked={!answer}
                name={question._id}/>&nbsp; False
            {
              "false" === question.correct &&
              <i className="fas fa-check float-right"></i>
            }
            {
              "true" === question.correct &&
              <i className="fas fa-times float-right"></i>
            }
            </label>

        }
        {
          grade && false !== answer && "false" !== question.correct &&
          <label className="list-group-item">
            <input
                type="radio"
                name={question._id}/>&nbsp; False</label>
        }
        {
          !grade &&
          <label className="list-group-item">
            <input
                type="radio"
                onClick={() => setAnswer(false)}
                name={question._id}/>&nbsp; False</label>
        }

        <p>
          Your answer: {JSON.stringify(answer)}
        </p>
        <button
            onClick={() => setGrade(true)}
            className="btn-success">
          Grade
        </button>

        <br/>
      </div>
  )
}

export default TrueFalseQuestion;