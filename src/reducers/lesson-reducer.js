const initialState = {
  lessons: [
    {title: 'Lesson 1', _id: '123'},
    {title: 'Lesson 2', _id: '234'},
    {title: 'Lesson 3', _id: '345'},
  ],
  asdf: 111,
  dfgdfgdfg: 345345
}

const lessonReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_LESSON":
      return {
        ...state,
        lessons: [
          ...state.lessons,
          action.lesson
        ]
      }

    case "DELETE_LESSON":
      return {
        ...state,
        lessons: state.lessons.filter(lesson => {
          if(lesson._id !== action.lessonToDelete._id) {
            return true
          } else {
            return false
          }
        })
      }
    case "UPDATE_LESSON":
    case "FIND_LESSONS_FOR_MODULE":
      return {
        ...state,
        lessons: action.lessons
      }
    default:
      return state
  }
}

export default lessonReducer