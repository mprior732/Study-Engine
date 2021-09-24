import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

//components
import Nav from "./components/Nav";
import InputMicroQuestion from "./components/microbiology/InputMicroQuestion";
import ListMicroQuestions from "./components/microbiology/ListMicroQuestions";
import MicroFlashApp from "./components/microbiology/MicroFlashApp";
import Landing from "./components/Landing";

//two functions to support switch wrapping with fragments
function FragmentSupportingSwitch({ children }) {
  const flattenedChildren = [];
  flatten(flattenedChildren, children);
  return React.createElement.apply(
    React,
    [Switch, null].concat(flattenedChildren)
  );
}

function flatten(target, children) {
  React.Children.forEach(children, (child) => {
    if (React.isValidElement(child)) {
      if (child.type === Fragment) {
        flatten(target, child.props.children);
      } else {
        target.push(child);
      }
    }
  });
}

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <FragmentSupportingSwitch>
          <Route path="/" exact component={Landing} />
          <Route path="/microbiology" component={MicroFlashApp} />

          <Route path="/managebio">
            <Fragment>
              <div className="container">
                <InputMicroQuestion />
                <ListMicroQuestions />
              </div>
            </Fragment>
          </Route>
        </FragmentSupportingSwitch>
      </div>
    </Router>
  );
}

export default App;
