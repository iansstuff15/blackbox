import React from 'react'
import './input.css'
const InputComponent = ({label, type, name, id, placeholder, value,  ...otherProps}) => (
    <span>
        {
            label!=null?  
            <div>
            <label>{label}</label>
            </div>:null
        }
      
      
        <input type = {type} name={name} id={id} minLength={3} placeholder={placeholder} autoComplete='true' className={label!=null?'input':'no-label-input'} value = {value} {...otherProps}/>
    </span>
)

export default InputComponent;