const initialState = {
  topics: [
    // {title: 't1', _id: '123'},
    // {title: 't2', _id: '234'},
    // {title: 't3', _id: '345'},
  ],
  asdf: 111,
  dfgdfgdfg: 345345
}

const topicReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_TOPIC":
      // const newModule = {
      //     title: "New Module",
      //     _id: (new Date()).getTime()
      // }
      return {
        ...state,
        topics: [
          ...state.topics,
          action.topic
        ]
      }
    case "DELETE_TOPIC":
      return {
        ...state,
        topics: state.topics.filter(topic => {
          if(topic._id !== action.topicToDelete._id) {
            return true
          } else {
            return false
          }
        })
      }
    case "UPDATE_TOPIC":
      return {
        ...state,
        topics: state.topics.map(topic => {
          if(topic._id === action.updateTopic._id) {
            return action.updateTopic
          } else {
            return topic
          }
        })
      }
    case "FIND_TOPICS_FOR_LESSON":
      return {
        ...state,
        topics: action.topics
      }
    default:
      return state
  }
}

export default topicReducer