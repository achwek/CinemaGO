import './App.css';
import Catalog from './pages/catalog';
import Dashbord from './pages/Dashbord';
import Users from './pages/users';
import SignUp from './pages/signup';
import SignIn from './pages/signin';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Reviews from './pages/reviews';
import Comments from './pages/comments';
import EditUser from './pages/edit-user';
import AddFilm from './pages/add-film';
import EditFilm from './pages/edit-film';

import Error from './pages/404';
import ForgotPassword from './pages/forgot-password';
function App() {
  return (
    <div className='App'> 
    <Router>
      <Routes>
        <Route path='/' element={<Dashbord/>}></Route>
        <Route path='/catalog' element={<Catalog/>}></Route>
        <Route path='/users' element={<Users/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path='/signin' element={<SignIn/>}></Route>
        <Route path='/reviews' element={<Reviews/>}></Route>
        <Route path='/comments' element={<Comments/>}></Route>
        <Route path='/edit-user' element={<EditUser/>}></Route>
        <Route path='/add-film' element={<AddFilm/>}></Route>
        <Route path='/edit-film' element={<EditFilm/>}></Route>
       
        <Route path='/error' element={<Error/>}></Route>
        <Route path='/forgotPassword' element={<ForgotPassword/>}></Route>





      </Routes>
    </Router>
    
    </div>
  
  );
}

export default App;
