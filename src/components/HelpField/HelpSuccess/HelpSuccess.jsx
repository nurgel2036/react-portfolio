import React from "react";
import "./HelpSuccess.scss";

import helpSuccess1 from '../helpField-img/right.png'

export default function HelpSuccess({setBool}) {
  return (
    <div className="out-helpSuccess">
      <div className="ultra-helpSuccess">
        <div class="success-block">
          <img src={helpSuccess1} alt="Success" />
          <h3>Успешно!</h3>
          <p>Заявка дошла великолепно! Теперь вы списке очереди</p>
          <a href="/">
          <button className="send-invite-btn">Назад</button>
          </a>
        </div>
      </div>
    </div>
  );
}
