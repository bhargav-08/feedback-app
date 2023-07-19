import React from 'react'
import { useContext } from 'react'
import FeedbackContext from './context/FeedbackContext'

function FeedBackStats() {
  const { feedback } = useContext(FeedbackContext)

  function average() {
    const total =
      feedback.reduce((acc, curr) => acc + curr.rating, 0) / feedback.length
    return total
  }

  const avg = average()
    .toFixed(1)
    .replace(/[.,]0$/, '')

  return (
    <div className='feedback-stats'>
      <div>{feedback.length} Reviews</div>
      <div>Average Rating: {isNaN(avg) ? 0 : avg}</div>
    </div>
  )
}

export default FeedBackStats
