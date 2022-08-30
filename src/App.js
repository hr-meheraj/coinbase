import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";

function App() {
  return (
    <div className="">
      <Navbar/>
      <div className="container">
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='sign-in' element={<SignIn/>}/>
     </Routes>

      </div>
    </div>
  );
}

export default App;
