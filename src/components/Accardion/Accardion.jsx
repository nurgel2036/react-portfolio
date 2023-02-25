import Accordion from "react-bootstrap/Accordion";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import accardionData from "./AccardionData";
import "../Accardion/Accardion.scss";
const COURSES = [ 
    { 
       background: "linear-gradient(90deg, rgba(88,204,219,1) 0%, rgba(218,78,122,1) 100%)", 
       name:"UI/UX design", 
      }, 
    {  
      background: "linear-gradient(90deg, rgba(218,78,122,1) 0%, rgba(122,78,218,1) 100%)", 
      name: 'Frontend' 
     }, 
    {  
      background: "linear-gradient(90deg, rgba(88,144,219,1) 0%, rgba(218,78,122,1) 100%)", 
    }, 
    {  
      background: "linear-gradient(90deg, rgba(218,78,122,1) 0%, rgba(88,144,219,1) 100%)", 
      name: "Backend" 
    }, 
    {  
      background: "linear-gradient(90deg, rgba(122,78,218,1) 0%, rgba(218,78,122,1) 100%)", 
      name: "HTML" 
    }, 
     
    {  
      background: "linear-gradient(90deg, rgba(218,78,122,1) 0%, rgba(88,204,219,1) 100%)", 
      name: "Python" 
    },
    {  
      background: "linear-gradient(90deg, rgba(122,78,218,1) 0%, rgba(218,78,122,1) 100%)", 
      name: "CSS" 
    }, 
    {  
      background: "linear-gradient(90deg, rgba(122,78,218,1) 0%, rgba(88,144,219,1) 100%)", 
      name: "Django" 
    } 
    
  ];
function Accardion() {
  return (
    <div className="out-accardion">
      <div className="main-accardion container">
        {accardionData.map((item, i) => {
          return (
            <div className="double-main">
                <Accordion id="accardion" key={i}>
              <Accordion.Item eventKey="0" className="item">
                <Accordion.Header className="header" style={{background: COURSES[i].background}}>{item.title}</Accordion.Header>
                <Accordion.Body className="body">{item.description}</Accordion.Body>
              </Accordion.Item>
            </Accordion>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Accardion;
