import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import CartBar from "./components/CartBar";
import NotRegistered from "./components/NotRegistered";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";

function App() {
  return (
    <div className="px-6 py-3">
      <NotRegistered />
      <CartBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>}/>
      <Route path="signup" element={<Signup/>}/>
      {/* <Route path="" element={}/> */}
      </Routes>
    </div>
  );
}

export default App;
