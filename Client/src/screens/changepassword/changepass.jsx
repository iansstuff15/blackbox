import React from 'react'
import InputComponent from '../../components/input-component/input';
import'./changepass.css'
import sideimage from  '../../assets/images/login-illustration.png';
import {AiFillCheckCircle, AiOutlineCheckCircle} from 'react-icons/ai'
import S from 'string';
import { handleGetSnapshotOfLibraryContent } from '../../helper/firebase_get'
import {Link } from 'react-router-dom';

class ChangePass extends React.Component{

    constructor() {
        super();
        this.state = {
          displayName: "",
          email: "",
          password: "",
          confirmPassword: "",
          showPasswordRequirements: false,
          passwordChecksPassed: 0,
          isUpper: false,
          isLower: false,
          isGreaterThan8: false,
          isContainSymbol: false,
          isNumeric: false,
          dataInfo: [],

        };
      }

      componentDidMount(){
        //puts the data into the datainfo state. To access, do dataInfo[place_name].
        //to check data, put console.log(data) in  .then(data => console.log(data))
        handleGetSnapshotOfLibraryContent("users","data").then(data=> this.setState({dataInfo: data['0']}))
      }

      handleChange = async(event) => {

        await this.setState({ [event.target.name]: event.target.value });
        // console.log(event.target.name+' '+event.target.value + ' state: '+this.state[event.target.name])
       if(event.target.name ==='password'){
        
        if(event.target.value.length >= 8){
          this.setState({isGreaterThan8: true})
          // console.log(this.state)
        }else if(event.target.value.length < 8){
          this.setState({isGreaterThan8: false})
        }
       
        const specialChars = /[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/;
    
        if(specialChars.test(event.target.value)){
          this.setState({isContainSymbol: true})
        }else if(!specialChars.test(event.target.value)){
          this.setState({isContainSymbol: false})
        }
    
        let uCheck = false;
        let lCheck = false;
    
        for(let check = 0; check < event.target.value.length; check++ ){
          if (S(event.target.value[check]).isUpper()){
            uCheck = true;
          }
    
          if (S(event.target.value[check]).isLower()){
            lCheck = true;
          }
        }
    
        !uCheck?this.setState({isUpper: false}):this.setState({isUpper: true})
        !lCheck?this.setState({isLower: false}):this.setState({isLower: true})
    
    
        if(S(event.target.value).contains(1||2||3||4||5||6||7||8||9||0)){
          this.setState({isNumeric: true})
          // console.log(this.state)
        }else if(!S(event.target.value).contains(1||2||3||4||5||6||7||8||9||0)){
          this.setState({isNumeric: false})
        }
    
    
       }
      };

      handleFocusOnPassword = () => (
        this.setState({showPasswordRequirements: true})
      )
      
      handleEscapePassword = () => {
        this.setState({showPasswordRequirements: false})
      }
      
      
handleSubmit = () => {
  //change password here via email
}

render(){return(

    


    <div className='grid'>
        <div>
      
        <form className='form' onSubmit ={this.handleSubmit}>
        <h2>CHANGE</h2>
        <h3>PASSWORD</h3>
        <div className='container'>
        <InputComponent label={'email'} placeholder={'i.e. JonnJonzz@email.com'} name={'email'} type={'email'} id={'email'}/>
        <InputComponent onChange={this.handleChange} onBlur={this.handleEscapePassword} label={'password'} placeholder={'Jonn#191281'} onFocus={this.handleFocusOnPassword}  name={'password'} type={'password'} id={'password'} value={this.password}/>
        {this.state.showPasswordRequirements? 
           <div>
           <progress value={this.state.passwordChecksPassed} max="5"> 42% </progress>
           <ul>
             <li> {this.state.isUpper? <AiFillCheckCircle className='icon'/> : <AiOutlineCheckCircle className='icon'/>} Contains capital letters</li><br/>
             <li>{this.state.isLower? <AiFillCheckCircle className='icon'/> : <AiOutlineCheckCircle className='icon'/>} Contains non-capital letters</li><br/>
             <li>{this.state.isContainSymbol? <AiFillCheckCircle className='icon'/> : <AiOutlineCheckCircle className='icon'/>} Contains symbols</li><br/>
             <li>{this.state.isNumeric? <AiFillCheckCircle className='icon'/> : <AiOutlineCheckCircle className='icon'/>}Contains numbers</li><br/>
             <li>{this.state.isGreaterThan8? <AiFillCheckCircle className='icon'/> : <AiOutlineCheckCircle className='icon'/>}More than 8 characters long</li><br/>
           </ul>
           </div>  
           :
           null
        }
        </div>
       
      
   

        <input type={'submit'} className='submit' value={'Change'}/>
        </form>
        </div>
        <div>
        
        <div className='container-fixed'>
            
        <img src={sideimage} alt='register illustration' />
        <Link to = "/login">
        <h1 className='toSignInButton'>Remember your password? Login now!</h1>
        </Link>
        </div>
        </div>
       
        
    </div>
)}
}
export default ChangePass;