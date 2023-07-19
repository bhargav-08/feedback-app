import { FaQuestion } from 'react-icons/fa'

import { Link } from 'react-router-dom'
import React from 'react'

function AboutIconLink() {
  return (
    <Link to="/about">
      <div className='about-link'>
        <FaQuestion size={30} color='white' />
      </div>
    </Link>
  )
}

export default AboutIconLink
