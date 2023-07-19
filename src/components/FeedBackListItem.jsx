import { useContext } from 'react'
import { FaTimes, FaEdit } from 'react-icons/fa'
import Card from './shared/Card'
import PropTypes from 'prop-types'
import FeedbackContext from './context/FeedbackContext'

function FeedBackListItem({ item }) {
  const { handleDelete, captureFeedback } = useContext(FeedbackContext)

  return (
    <Card>
      <div className='num-display'>{item.rating}</div>
      <button
        onClick={() => handleDelete(item.id)}
        className='close'
      >
        <FaTimes color='purple' />
      </button>
      <button
        className='edit'
        onClick={() => captureFeedback(item)}
      >
        <FaEdit color='purple' />
      </button>
      <div className='text-display'>{item.text}</div>
    </Card>
  )
}

export default FeedBackListItem

FeedBackListItem.propTypes = {
  item: PropTypes.object.isRequired,
}
