import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './home/main';
import Login from './login/page';
import Movies from './movies/movie';
import Feedback from './feedback/feedbacks'
import Register from './login/register';


// import Naav from './home/navbar';
function App() {
  return (
    <div>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/movies' element={<Movies />}></Route>
        <Route path='/feedbacks' element={<Feedback />}></Route>

      </Routes>
     </BrowserRouter>
     
    
    </div>
  );
}
export default App;