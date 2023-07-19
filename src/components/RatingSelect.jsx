import { useContext, useEffect, useState } from 'react'
import FeedbackContext from './context/FeedbackContext'

function RatingSelect({ rating }) {
  const [selected, setSelected] = useState(10)
  const { editFeedback } = useContext(FeedbackContext)

  useEffect(() => {
    if (editFeedback.edit == true) {
      setSelected(editFeedback.item.rating)
    }
  }, [editFeedback])

  const handleChange = (e) => {
    setSelected(+e.target.value)
    rating(+e.target.value)
  }
  return (
    <ul className='rating'>
      {Array.from(Array(10).fill(), (_, i) => (
        <li key={i}>
          <input
            type='radio'
            id={`num${i + 1}`}
            name='rating'
            value={i + 1}
            checked={selected == i + 1}
            onChange={handleChange}
          />
          <label htmlFor={`num${i + 1}`}>{i + 1}</label>
        </li>
      ))}
    </ul>

    // <div>
    //   <ul className='rating'>
    //     <li>
    //       <input
    //         type='radio'
    //         id='num1'
    //         name='rating'
    //         value='1'
    //         checked={selected == 1}
    //         onChange={handleChange}
    //       />
    //       <label htmlFor='num1'>1</label>
    //     </li>
    //     <li>
    //       <input
    //         type='radio'
    //         id='num2'
    //         name='rating'
    //         value='2'
    //         checked={selected == 2}
    //         onChange={handleChange}
    //       />
    //       <label htmlFor='num2'>2</label>
    //     </li>
    //     <li>
    //       <input
    //         type='radio'
    //         id='num3'
    //         name='rating'
    //         value='3'
    //         checked={selected == 3}
    //         onChange={handleChange}
    //       />
    //       <label htmlFor='num3'>3</label>
    //     </li>
    //     <li>
    //       <input
    //         type='radio'
    //         id='num4'
    //         name='rating'
    //         value='4'
    //         checked={selected == 4}
    //         onChange={handleChange}
    //       />
    //       <label htmlFor='num4'>4</label>
    //     </li>
    //     <li>
    //       <input
    //         type='radio'
    //         id='num5'
    //         name='rating'
    //         value='5'
    //         checked={selected == 5}
    //         onChange={handleChange}
    //       />
    //       <label htmlFor='num5'>5</label>
    //     </li>
    //     <li>
    //       <input
    //         type='radio'
    //         id='num6'
    //         name='rating'
    //         value='6'
    //         checked={selected == 6}
    //         onChange={handleChange}
    //       />
    //       <label htmlFor='num6'>6</label>
    //     </li>
    //     <li>
    //       <input
    //         type='radio'
    //         id='num7'
    //         name='rating'
    //         value='7'
    //         checked={selected == 7}
    //         onChange={handleChange}
    //       />
    //       <label htmlFor='num7'>7</label>
    //     </li>
    //     <li>
    //       <input
    //         type='radio'
    //         id='num8'
    //         name='rating'
    //         value='8'
    //         checked={selected == 8}
    //         onChange={handleChange}
    //       />
    //       <label htmlFor='num8'>8</label>
    //     </li>
    //     <li>
    //       <input
    //         type='radio'
    //         id='num9'
    //         name='rating'
    //         value='9'
    //         checked={selected == 9}
    //         onChange={handleChange}
    //       />
    //       <label htmlFor='num9'>9</label>
    //     </li>
    //     <li>
    //       <input
    //         type='radio'
    //         id='num10'
    //         name='rating'
    //         value='10'
    //         checked={selected == 10}
    //         onChange={handleChange}
    //       />
    //       <label htmlFor='num10'>10</label>
    //     </li>
    //   </ul>
    // </div>
  )
}

export default RatingSelect
