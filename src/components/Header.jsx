import React from 'react'
import PropTypes from 'prop-types'

function Header(props) {
  return (
    <header style={{ backgroundColor: props.bgcolor }}>
      <div className="container" >
        <h1 style={{ color: props.color }}>{props.text}</h1>
      </div>
    </header >
  )
}


Header.defaultProps = {
  text: "Feedback UI",
  color: "#ff6a95",
  bgcolor: "rgba(0,0,0,0.4)"
}

Header.protoType = {
  text: PropTypes.string
}

export default Header

