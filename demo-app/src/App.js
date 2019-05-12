import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { UsersView } from './components/UsersView'
import { UserInfo } from './components/UserInfo'


import './App.css'
function App() {
  return (
    <React.Fragment>
      <Navbar />
      <div style={{ marginTtop: "32px" }} className="container">

        <BrowserRouter>
          <Route exact path="/" component={UsersView} />
          <Route path="/:userId" component={UserInfo} />
        </BrowserRouter>


      </div>
    </React.Fragment>
  )
}

export default App;
