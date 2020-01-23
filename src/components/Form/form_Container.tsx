import React from 'react';
import Main from './content/form-main'
import Footer from './content/form-footer';
import './form_Container.scss';



const Form:React.FC = ()=>{
  return(
    <div className="FmContainer">
      <Main />
      <Footer brand="Gigahex" />
    </div>
  
  )
}

export default Form;