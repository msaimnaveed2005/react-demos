import React, { useRef } from 'react'

const FocusInput = () => {


    const inputElement=useRef(null);
    const focusInput=()=>
    {
        inputElement.current.focus();
    }
  return (
    <div>
        <input type='text' ref={inputElement}/>
        <button onClick={()=>focusInput()}>ClickMe</button>
    </div>
  )
}

export default FocusInput