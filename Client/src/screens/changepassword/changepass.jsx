import React from 'react'
import InputComponent from '../../components/input-component/input';
import'./changepass.css'
import sideimage from  '../../assets/images/login-illustration.png';

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { render } from '@testing-library/react';



class ChangePass extends React.Component{

    constructor() {
        super();
        this.state = {
          displayName: "",
          email: "",
          password: "",
          confirmPassword: "",
        };
      }

      
      
      


render(){return(

    


    <div className='grid'>
        <div>
      
        <form className='form'>
        <h2>CHANGE</h2>
        <h3>PASSWORD</h3>
        <div className='container'>
        <InputComponent label={'email'} placeholder={'i.e. JonnJonzz@email.com'} name={'emai'} type={'email'} id={'email'}/>
        <InputComponent label={'old password'} placeholder={'Jonn#191281'} name={'password'} type={'password'} id={'password'}/>
        <InputComponent label={'new password'} placeholder={'Jonn#191281'} name={'password'} type={'password'} id={'password'}/>
        </div>
       
      
   

        <input type={'submit'} className='submit' value={'Change'}/>
        </form>
        </div>
        <div>
        
        <div className='container-fixed'>
            
        <img src={sideimage} alt='register illustration' />
        <h1 className='toSignInButton'>Don't have an account yet? Sign up</h1>
        </div>
        </div>
       
        
    </div>
)}
}
export default ChangePass;