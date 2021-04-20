const QUIZZES_URL = 'http://localhost:3000/api/quizzes';

export const findAllQuizzes = () => {
  return fetch(QUIZZES_URL)
  .then(response => response.json())
}
export const findQuizById = (qid) => {
  return fetch(`${QUIZZES_URL}/${qid}`)
  .then(response => response.json())
}

export const submitQuiz = (qId, questions) => {
  fetch(`http://localhost:3000/api/quizzes/${qId}/attempts`, {
    method: 'POST',
    body: JSON.stringify(questions),
    headers: {
      'content-type': 'application/json'
    }
  }).then(response => response.json())
  .then(result => console.log(result))
}

const findAttempts = (qid) =>
    fetch(`http://localhost:3000/api/quizzes/${qid}/attempts`)
    .then(response => response.json())

const api = {
  findAllQuizzes, findQuizById, submitQuiz, findAttempts
}

export default api;
