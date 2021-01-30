import logo from './logo.svg';
import React from 'react';
import './App.css';
// import Header from './components/Header'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import PageHome from './components/PageHome'
import PageThread from './components/PageThread'
import PageNotFound from './components/PageNotFound'
import Language from './components/Language'
import ContactForm from './components/ContactForm'
import PersonList from './PersonList'

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <PageHome />
          </Route>
          <Route path="/language">
            <Language />
            <ContactForm />
            {/* <PersonList /> */}
          </Route>
          <Route path="/personList">
            <PersonList />
          </Route>
        </Switch>
      </Router>
    );
  }
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
