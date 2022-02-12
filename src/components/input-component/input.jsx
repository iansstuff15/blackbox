import React from 'react'
import './input.css'
const InputComponent = ({label, type, name, id, placeholder, ...otherProps}) => (
    <div>
     
        <label>{label}</label><br/>
        <input type = {type} name={name} id={id} minLength={3} required placeholder={placeholder} autoComplete='true' className='input' {...otherProps}/>
    </div>
)

export default InputComponent;