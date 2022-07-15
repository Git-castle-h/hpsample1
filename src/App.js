
import {Header} from './pages/header.js';
import {Main, main} from './pages/main.js';
import {Login} from './pages/login.js';
import {Skip} from './pages/skip.js';
import { Sub } from './pages/subpage';
import { Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './css/font.css';
import './css/App.css';
import './css/nomalize.css';
import './css/header.css';
import './css/main.css';
import './css/sub.css';
import './css/login.css';


function App() {
  return (
    <div className="App">    
      <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path ='/hpsample1'>
          <Route path ='' element={<MainPage></MainPage>}></Route>
          <Route path ='subpage' element={<SubPage></SubPage>}></Route>
          <Route path ='login' element={<LoginPage></LoginPage>}></Route>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>

  );
}

function MainPage(){
  return(
    <div className="MainPage">
    <Header></Header>
    <Skip></Skip>
    <Main></Main>
    </div>
  )
}



function  SubPage(){
  return(
    <div className="MainPage">
    <Header></Header>
    <Sub></Sub>
    </div>
  )
}

function LoginPage(){
  return(
    <div className="LoginPage">
      <Header></Header>
      <Login></Login>
    </div>
  )
}

export default App;
