import logo from './logo.svg';
import './App.css';
import './screens/registration/registraion'
import Registration from './screens/registration/registraion';
import firebase from 'firebase/compat/app'
import Login from './screens/login/login';

function App() {
  const firebaseApp = firebase.apps[0];
  return (
    <div className="App">
       <h1>Black Box</h1>
      
   
      <Registration/>
    </div>
  );
}

export default App;
