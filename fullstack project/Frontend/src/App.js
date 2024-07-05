// import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
// import CompA from './Components/compA';
// import CompB from './Components/compB';
// import Classcomp from './Components/classComp';
// import CompC from './Components/compC';
// import Image from './Components/image';
// import Person from './Components/person';
// import Studentlist from './Components/studentlist';
import Menu from './Components/menu';
// import Studenttable from './Components/studenttable';
// import Student from './Components/sstudent';
// import Calculator from './Components/calculator';
// // import Click from './Components/click';
// import Onhover from './Components/onhover';
// import Hooks from './Components/hooks';
import Form from './Components/form';
import Getdata from './Components/getdata';
import EditForm from './Components/editform';
import RegistrationForm from './Components/registrationform';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Menu/>
      <Getdata/>
        <Routes>
          {/* <Route path='/compA' element={<CompA/>} />
          <Route path='/compB' element={<CompB/>} />
          <Route path='/compC' element={<CompC/>} />
          <Route path='/classComp' element={<Classcomp/>} />
          <Route path='/image' element={<Image/>} />
          <Route path='/' element={<Person name='Divya' branch='CSE' campus='ACET'/>} />
          <Route path='/studentlist' element={<Studentlist />} />
          <Route path='/studenttable' element={<Studenttable/>} />
          <Route path='/student' element={<Student/>} />
          <Route path='/calculator' element={<Calculator/>} />
          <Route path='/click' element={<Click/>} />
          <Route path='/onhover' element={<Onhover/>} />
  <Route path='/hooks' element={<Hooks/>} /> */}
          <Route path='/form' element={<Form/>}/>
          <Route path='/editform/:id' element={<EditForm/>}/>
          <Route path='/registrationform/:id' element={<RegistrationForm/>}/>
          {/* <Route path='/getdata' element={<Getdata/>}/> */}
        </Routes>
      </BrowserRouter>    
    </div>
  );
}

export default App;