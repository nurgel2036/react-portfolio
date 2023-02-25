import React from 'react'
import './HelpField.scss'

import quest1 from './helpField-img/quest.png'

export default function HelpField() {
  return (
    <div className='out-helpField'>
      <div className="main-helpField">
        <img src={quest1} alt="" />
      </div>
    </div>
  )
}
