// import logo from './logo.svg';
import "./App.css";
import Login from "./pages/Login";
import Passcode from "./pages/Passcode";
import Profile from "./pages/Profile";
import Appheader from "./pages/Appheader";
import { BrowserRouter, Routes , Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="Login" element={<Login />} />
          <Route path="passcode" element={<Passcode />} />
          <Route path="Profile" element={<Profile />} />
          <Route path="appheader" element={<Appheader />} />
          
        </Routes>
      </BrowserRouter>

      {/* <div className='project'> */}

      {/* <Appheader/> */}
      {/* <Space> */}
      {/* <SideMenu></SideMenu> */}
      {/* <Content></Content> */}
      {/* </Space> */}
      {/* <Login /> */}
      {/* <Passcode/> */}
      {/* <Sidebar /> */}

      {/* </div> */}
    </div>
  );
}

export default App;
