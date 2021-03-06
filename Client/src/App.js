import './App.css';
import './screens/registration/registraion'
import Registration from './screens/registration/registraion';
import Login from './screens/login/login';
import Home from './screens/home/home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header/header';
import GamePage from './screens/game-page/game_page';
import GenrePage from './screens/genre-page/genre_page';
import ProfilePage from './screens/profile-page/Profile_page';
import Library from './screens/library/library';
import Change from './screens/changepassword/changepass';
function App() {
 
  return (
    <BrowserRouter >
    <div className='App'>
    <Header/>
    <Routes >
      <Route path="/" element={<Home/>} />
      <Route path="login" element={<Login/>} />
      <Route path="register" element={<Registration/>} />
      <Route path="profile" element={<ProfilePage/>} />
      <Route path="library" element={<Library/>} />
      <Route path ="changepassword" element={<Change/>}/>
      <Route path="game" element={<GamePage/>} >
        <Route path=":game_id" element={<GamePage />} />
      </Route>
      <Route path="genre" element={<GenrePage/>}>
        <Route path=":game_genre" element={<GenrePage/>}/>
      </Route>
    </Routes>
    </div>
   
  </BrowserRouter>
  );
}

export default App;
