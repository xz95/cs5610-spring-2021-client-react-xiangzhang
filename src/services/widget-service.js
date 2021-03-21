const WIDGETS_URL = "/api/widgets"
const TOPIC_URL = "/api/topics"

export const createWidget = (topicId, widget) =>
    fetch(`${TOPIC_URL}/${topicId}/widgets`, {
      method: "POST",
      body: JSON.stringify(widget),
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(response => response.json());

export const updateWidget = (widgetId, widget) =>
    fetch(`${WIDGETS_URL}/${widgetId}`, {
      method: "PUT",
      body: JSON.stringify(widget),
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(response => response.json());

export const findWidgetsForTopic = (topicId) =>
    fetch(`${TOPIC_URL}/${topicId}/widgets`)
    .then(response => response.json());

export const deleteWidget = (widgetId) =>
    fetch(`${WIDGETS_URL}/${widgetId}`, {
      method: 'DELETE'
    })
    .then(response => response.json());

const api = {
  createWidget, findWidgetsForTopic, deleteWidget, updateWidget
}

export default api;