import React,{useEffect} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Recent from "./Recent"
import Chatpage from "./pages/Chatpage";
import Login from "./components/Login"





function App() {
  

  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Routes>
            <Route exact path="/" element={<Recent />}></Route>
            <Route exact path="/chatpage" element={<Chatpage />}></Route>
            <Route exact path="/login" element={<Login/>}></Route>
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
