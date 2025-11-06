import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'

import React from 'react'

const ResponsiveCloseButton = () => {
  return (
    <div>
        <FontAwesomeIcon className='cursor-pointer' icon={faX}></FontAwesomeIcon>
    </div>
  )
}

export default ResponsiveCloseButton