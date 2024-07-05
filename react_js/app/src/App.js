// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home";
import About from "./about";
import Image from "./Image";
// import {trainee} from './trainee'
import Menu from "./menu";
import Services from "./services";
// import Contact from "./contact";
import "./App.css";
import Student from "./student";
// import Trainee from "./trainees";
import Trainee_table from "./trainees_table";
// import Events from "./events";
// import Events1 from "./events_1";
// import ColorChanger from "./color";
// import NumberCounter from "./number";
import ImageSlider from "./image_slide";
// import Hooks from "./hooks";
// import Form1 from "./form";
import Products from "./products";
import Productinfo from "./productinfo";

function App() {
  // console.log(trainee)
  // console.log(a)
  return (
    <div className="App">
      {/* <Home />
        <About /> */}
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services name="Divya" />} />
          <Route path="/Image" element={<Image />} />
          <Route path="/student" element={<Student name="Satya" age="18" />} />
          {/* <Route path="/trainees" element={<Trainee />} /> */}
          <Route path="/trainees_table" element={<Trainee_table />} />
          {/* <Route path="/contact" element={<Contact />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events_1" element={<Events1 />} /> */}
          {/* <Route path="/color" element={<ColorChanger />} />
          <Route path="/number" element={<NumberCounter />} />*/}
          <Route path="/image_slide" element={<ImageSlider />} />
          {/* <Route path="/hooks" element={<Hooks />} />
          <Route path="/form" element={<Form1 />} /> */}
          <Route path="/products" element={<Products />} />
          <Route path="/productinfo/:id" element={<Productinfo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
