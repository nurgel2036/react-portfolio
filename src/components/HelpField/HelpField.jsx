import React from "react";
import "./HelpField.scss";
import HelpSuccess from "./HelpSuccess/HelpSuccess";

import quest1 from "./helpField-img/quest.png";

const HelpFieldMpdal = ({setHelpField}) => {
    const [inputValue, setInputValue] = React.useState('');
    const [showWarning, setShowWarning] = React.useState(false);
    const [bool, setBool] = React.useState(false)
    
  function handleSubmit(event) {
    event.preventDefault();
    if (inputValue === '') {
      setShowWarning(true);
    } else {
      // do something with the input value
      setShowWarning(false)
    }
  }

  function handleInputChange(event) {
    setInputValue(event.target.value);
    setShowWarning(false);
  }
  return (
    <div className="out-HFModal">
      <div className="ultra-HFModal">
        <div className="main-HFModal">
          <div className="toggle-helpField" onClick={()=>setHelpField(false)}>
            <div className="toggle-HF-stick"></div>
            <div className="toggle-HF-stick"></div>
          </div>
          <form className="content-helpField" onSubmit={handleSubmit}>
            <input type="text" value={inputValue} onChange={handleInputChange} name="name" placeholder="Ваше Имя" />
            { showWarning && <p className="HF-warning" for='name'>Введите свое имя</p>}
            <input type="text"  name="num" placeholder="Ваш номер телефона" />
            { showWarning && <p className="HF-warning" for='num'>Введите номер телефона</p>}
            <input type="email"  name="email" placeholder="ваша почта" />
            { showWarning && <p className="HF-warning" for='email'>Введите свою почту</p>}
            <button  type='submit' onClick={()=>setBool(true)}>Отправить</button>
            <p>
              Нажимая кнопки «Отправить» Вы соглашаетесь на обработку
              предоставленных вами персональных данных.
            </p>
          </form>
        </div>
      </div>
      {bool && <HelpSuccess setBool={setBool}/>}
    </div>
  );
};

export default function HelpField() {
  const [helpField, setHelpField] = React.useState(false);
  return (
    <div className="out-helpField">
      <div className="main-helpField">
        <div className="quest-bg-image"></div>
        <div className="quest-right">
          <div className="quest-right1">
            Не знаете, какой курс <br /> подойдет именно вам ?
          </div>
          <div className="quest-right2">
            Наши специалисты проконсультируют и подберут для вас нужную
            программу.
          </div>
          <div className="quest-right3" onClick={()=>setHelpField(true)}>оставить заявку</div>
          { helpField && <HelpFieldMpdal setHelpField={setHelpField} />}
        </div>
      </div>
    </div>
  );
}
