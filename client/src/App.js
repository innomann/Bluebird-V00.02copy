import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Header from "./Header";
import Recent from "./Recent"

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />

          <Routes>
            <Route exact path="/" element={<Recent />}></Route>
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
