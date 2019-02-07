import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import AppLayout from './AppLayout';
import AppBar from './AppBar';
import {AppProvider} from './AppProvider';
import {AppContext} from './AppProvider';
class App extends Component {
  render() {
    return (
      <AppLayout>
      <AppProvider>
        <h1>MATCH SCHEDULE</h1>
          <AppBar />
        </AppProvider>
      </AppLayout> 
    );
  }
}

export default App;
