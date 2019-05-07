import React from 'react';
import './App.scss';
import { Sidebar, Content, Player } from 'containers';
import { BrowserRouter } from 'react-router-dom';

class App extends React.Component {

  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <div className="app__sidebar-and-content-wrapper">
            <Sidebar></Sidebar>
            <Content></Content>
          </div>
          <Player></Player>
        </BrowserRouter>
      </div>
    );
  }

}

export default App;
