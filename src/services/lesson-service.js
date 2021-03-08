const LESSONS_URL = "https://wbdv-generic-server.herokuapp.com/api/001832331/lessons"
const MODULES_URL = "https://wbdv-generic-server.herokuapp.com/api/001832331/modules"

export const createLesson = (moduleId, lesson) =>
    fetch(`${MODULES_URL}/${moduleId}/lessons`, {
      method: "POST",
      body: JSON.stringify(lesson),
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(response => response.json());

export const updateLesson = (moduleId, module) =>
    fetch(`${LESSONS_URL}/${moduleId}`, {
      method: "PUT",
      body: JSON.stringify(module),
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(response => response.json());

export const findLessonsForModule = (moduleId) =>
    fetch(`${MODULES_URL}/${moduleId}/lessons`)
    .then(response => response.json());

export const deleteLesson = (moduleId) =>
    fetch(`${LESSONS_URL}/${moduleId}`, {
      method: 'DELETE'
    })
    .then(response => response.json());

const api = {
  createLesson, findLessonsForModule, deleteLesson, updateLesson
}

export default api;