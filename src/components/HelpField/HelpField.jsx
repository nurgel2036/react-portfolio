import React from 'react'
import './HelpField.scss'

import quest1 from './helpField-img/quest.png'

const HelpFieldMpdal = () => {

    return(
        <div className="out-HFModal">
            <div className="main-HFModal">
                input
            </div>
        </div>
    );
};

export default function HelpField() {
    const [helpField,setHelpField] = React.useState(false)
  return (
    <div className='out-helpField'>
      <div className="main-helpField">
        <div className="quest-bg-image"></div>
        <div className="quest-right">
            <div className="quest-right1">Не знаете, какой курс <br /> подойдет именно вам ?</div>
            <div className="quest-right2">Наши специалисты проконсультируют и подберут для вас нужную программу.</div>
            <div className="quest-right3">оставить заявку</div>

        </div>
      </div>
    </div>
  )
}
