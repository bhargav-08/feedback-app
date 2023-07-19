import React, { useContext, useEffect, useState } from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'
import FeedbackContext from './context/FeedbackContext'

function FeedBackReview() {
  const [text, setText] = useState('')
  const [rating, setRating] = useState(10)
  const [btnDisabled, setDisabled] = useState(true)
  const [msg, setMsg] = useState('')
  const { handleAdd, editFeedback, updateFeedback } =
    useContext(FeedbackContext)

  useEffect(() => {
    if (editFeedback.edit == true) {
      setDisabled(false)
      setText(editFeedback.item.text)
      setRating(editFeedback.item.rating)
    }
  }, [editFeedback])

  const handleOnchangeText = (e) => {
    if (text === '') {
      setDisabled(true)
      setMsg('')
    } else if (text !== '' && text.trim().length <= 10) {
      setDisabled(true)
      setMsg('Enter atleast 10 characters!!')
    } else {
      setMsg('')
      setDisabled(false)
    }
    setText(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      }
      if (editFeedback.edit == true) {
        updateFeedback(editFeedback.item.id, newFeedback)
      } else handleAdd(newFeedback)

      setText('')
    }
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us</h2>

        <RatingSelect
          rating={(rating) => {
            setRating(rating)
          }}
        />

        <div className='input-group'>
          <input
            type='text'
            onChange={handleOnchangeText}
            value={text}
            placeholder='Write a review'
          />
          <Button
            type='submit'
            isdisabled={btnDisabled}
          >
            Submit
          </Button>
        </div>
      </form>

      {msg && <div className='message'>{msg}</div>}
    </Card>
  )
}

export default FeedBackReview
