import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Redux/store";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
import Login from "./Components/Auth/Login";
import setAuthToken from "./utils/setAuthToken";
import { jwtDecode } from "jwt-decode";
import { logoutUser, setCurrentUser } from "./Redux/actions/authActions";
import ProfileHome from "./Components/Profile/ProfileHome";
import Quiz from "./Components/Main/Quiz";
import Quizpost from "./Components/Main/Quizpost";
import Gallery from "./Components/Profile/Gallery";


function App() {
 const isLoggedIn = localStorage.jwtToken ? true : false;

if (localStorage.jwtToken) {
  const token = localStorage.jwtToken;
  setAuthToken(token);
  const decoded = jwtDecode(token);
  store.dispatch(setCurrentUser(decoded));
  const currentTime = Date.now() / 1000;
 if (decoded?.exp && decoded.exp < currentTime) {
  console.log("Should be signed out")
  store.dispatch(logoutUser());
  window.location.href = "./login";
 }
}

  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          {localStorage.jwtToken ? <Header /> : null}

          <Routes>
            <Route
              path="/"
              element={
                isLoggedIn ? <Navigate to="/home" /> : <Navigate to="/login" />
              }
            />
            <Route path="/" element={<Home />}></Route>
            <Route path="/quiz" element={<Quiz/>}></Route>
            <Route path="/quizpost" element={<Quizpost/>}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/messaging" element={<ProfileHome />} />
            <Route path="/gallery" element={<Gallery />} />
            
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}



export default App;