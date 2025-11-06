import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

//Button For opening the responsive navbar
const ResponsiveOpenButton = () => {
  return (
    <div>
        <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
    </div>
  )
}

export default ResponsiveOpenButton