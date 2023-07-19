import React from 'react'
import spinner from '../assest/spinner.gif'

function Spinner() {
  return (
    <img
      style={{
        width: '250px',
        display: 'block',
        margin: 'auto',
      }}
      src={spinner}
      alt='Loading'
    />
  )
}

export default Spinner
