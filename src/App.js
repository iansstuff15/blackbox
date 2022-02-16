import logo from './logo.svg';
import './App.css';
import './screens/registration/registraion'
import Registration from './screens/registration/registraion';
import firebase from 'firebase/compat/app'
import Login from './screens/login/login';
import ChangePass from './screens/changepassword/changepass';

function App() {
 
  return (
    <div className="App">
       <h1>Black Box</h1>
      
   
    <ChangePass/>
    </div>
  );
}

export default App;
