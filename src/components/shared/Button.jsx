import React from 'react'
import PropTypes from 'prop-types'


function Button({ type, isdisabled, children, version }) {
  return (
    <button className={`btn btn-${version}`}
      type={type}
      disabled={isdisabled}>
      {children}
    </ button >
  )
}

export default Button


Button.defaultProps = {
  version: "primary",
  isdisabled: true,
  type: "submit"
}

Button.propTypes = {
  type: PropTypes.string,
  isdisabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
  version: PropTypes.string,
}

