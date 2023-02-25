import React from "react";
import "./Accardion.scss";
import accardionData from "./AccardionData";

import { AiOutlineDown } from "react-icons/ai";

export default function OutAccardion() {

  return (
    <div className="out-accardion">
      <div className="main-accardion">
      <div className="accardion">
        <button className="accardion-visible">
          <h1> А я точно смогу стать программистом?</h1>
          <span>
            {" "}
            <AiOutlineDown />
          </span>
        </button>
        <div 
            className="accardion-toggle"   
            >
          <p>
            Заниматься разработкой может каждый. Курсы начинаются с азов,
            поэтому никаких дополнительных знаний в сфере IT от вас не
            потребуется. Чтобы стать программистом, вам не надо быть
            математиком или инженером и обладать каким-то особым складом ума.
            Чтобы успешно завершить курс, нужно лишь перестать сомневаться в
            себе, не лениться и выполнять все задания.
          </p>
        </div>
      </div>
      </div>
    </div>
  );
}

const Accardion = () => {
    return(
        <>
        
        </>
    )
};
