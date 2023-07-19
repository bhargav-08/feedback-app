import { createContext, useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([])
  const [editFeedback, setEditFeedback] = useState({ edit: false, item: {} })
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchFeedback()
  }, [])

  const fetchFeedback = async () => {
    const response = await fetch('/feedback')
    const data = await response.json()
    setFeedback(data)
    setIsLoading(false)
  }

  // Delete the feedback
  async function handleDelete(key) {
    if (window.confirm('Are you sure you want to delete the feedback?')) {
      const response = await fetch(`feedback/${key}`, {
        method: 'DELETE',
      })
      const data = await response.json()
      setFeedback(feedback.filter((val) => val.id != key))
    }
  }

  // Add feedback
  const handleAdd = async (newFeedback) => {
    const response = await fetch('/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newFeedback),
    })

    const data = await response.json()
    setFeedback([data, ...feedback])
  }

  // capture feedback which we want to edit in useState
  function captureFeedback(item) {
    setEditFeedback({ edit: true, item: item })
  }

  // update feedback
  async function updateFeedback(key, newFeedback) {
    const response = await fetch(`/feedback/${key}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newFeedback),
    })

    const data = await response.json()

    setFeedback(
      feedback.map((item) => (item.id == key ? { ...item, ...data } : item))
    )
  }

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        editFeedback,
        isLoading,
        handleDelete,
        handleAdd,
        captureFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext
