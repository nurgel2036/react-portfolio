import React from 'react'
import './HelpField.scss'

import quest1 from './helpField-img/quest.png'

export default function HelpField() {
  return (
    <div className='out-helpField'>
      <div className="main-helpField">
        <div className="quest-bg-image"></div>
        <div className="quest-right">
            <div className="quest-right1">Не знаете, какой курс <br /> подойдет именно вам ?</div>
            <div className="quest-right2"></div>
            <div className="quest-right3"></div>
        </div>
      </div>
    </div>
  )
}
