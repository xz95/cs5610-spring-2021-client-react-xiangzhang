import React, {useState} from "react";

const MultipleChoiceQuestion = ({question,attempt,setAttempt}) => {
  const [yourAnswer, setYourAnswer] = useState("null")
  const [grade, setGrade] = useState(false)
  return(
      <div>
        <h4>
          {question.question}&nbsp;
          {
           grade && question.correct === yourAnswer &&
            <i className="fas fa-check text-success"></i>
          }
          {
            grade && question.correct !== yourAnswer &&
            <i className="fas fa-times text-danger"></i>
          }
        </h4>
        {
          grade &&
          <h5>correct answer: {question.correct}</h5>
        }
        <br/>
        <ul className="list-group">
          {
            question.choices.map((choice) => {
              return(
                  <>
                    {
                      grade && (choice === yourAnswer || choice === question.correct) &&
                         <li className={`list-group-item
                               ${choice === question.correct ? 'list-group-item-success' : 'list-group-item-danger'}`}>
                           <label>
                             <input
                                 type="radio"
                                 checked={yourAnswer === choice ? true : false}
                                 name={question._id}/>
                             &nbsp; {choice}

                           </label>
                           {
                             choice === question.correct &&
                             <i className="fas fa-check float-right"></i>
                           }
                           {
                             choice !== question.correct &&
                             <i className="fas fa-times float-right"></i>
                           }
                         </li>
                    }
                    {
                      grade && choice !== yourAnswer && choice !== question.correct &&
                      <li className="list-group-item">
                        <label>
                          <input
                              type="radio"
                              name={question._id}/>
                          &nbsp; {choice}
                        </label>
                      </li>
                    }
                    {
                      !grade &&
                      <li className="list-group-item">
                        <label>
                          <input
                              onClick={() => {
                                setYourAnswer(choice)
                              }}
                              type="radio"
                              name={question._id}/>
                          &nbsp; {choice}
                        </label>
                      </li>
                    }
                  </>
              )
            })
          }
        </ul>
        <p>
          Your answer: {yourAnswer}
        </p>
        <button
            onClick={() => {
              setGrade(true)
              setAttempt(old=>[...old,{...question, answer: yourAnswer}])
            }}
            className="btn-success">
          Grade
        </button>

      </div>
  )
}

export default MultipleChoiceQuestion