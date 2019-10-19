import React from "react";
import { BrowserRouter, Route , Switch  } from "react-router-dom";
import Myroutes from "./Component/Myroutes";
import Home from "./Component/Home";
import ContactUs from "./Component/ContactUs";
import Aboutus from "./Component/Aboutus";
import User from "./Component/User";
import Error from "./Component/Error";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Myroutes />
        <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/contact" component={ContactUs} />
        <Route path="/about" component={Aboutus} />
        <Route path="/users" component={User} />
        <Route component={Error} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
