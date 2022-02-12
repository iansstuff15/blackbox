import React from 'react'
import InputComponent from '../../components/input-component/input';
import'./login.css'
import sideimage from  '../../assets/images/login-illustration.png';

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { render } from '@testing-library/react';



class Login extends React.Component{

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
        <h2>LOGIN</h2>
        <h3>PAGE</h3>
        <div className='container'>
        <InputComponent label={'email'} placeholder={'i.e. JonnJonzz@email.com'} name={'emai'} type={'email'} id={'email'}/>
        <InputComponent label={'password'} placeholder={'Jonn#191281'} name={'password'} type={'password'} id={'password'}/>
     
        </div>
       
      
   

        <input type={'submit'} className='submit' value={'Register'}/>
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
export default Login;