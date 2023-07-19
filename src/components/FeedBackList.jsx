import React, { useContext } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import FeedBackListItem from './FeedBackListItem'
import PropTypes from 'prop-types'
import FeedbackContext from './context/FeedbackContext'
import Spinner from '../components/shared/Spinner'

function FeedBackList() {
  const { feedback, isLoading } = useContext(FeedbackContext)

  if (!isLoading && (!feedback || feedback.length == 0)) {
    return <p>No Feedback yet</p>
  }

  return isLoading ? (
    <Spinner />
  ) : (
    <div className='feedback-list'>
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedBackListItem
              key={item.id}
              item={item}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )

  // <div className="feedback-list">
  //   {feedback.map((item) => <FeedBackListItem key={item.id} item={item} handleClick={handleDelete} />)}
  // </div>
}

export default FeedBackList

FeedBackList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ),
}
