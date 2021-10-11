import React from 'react';
import './style.css';
import { MemeGenerator } from './MemeGenerator';
import { Header } from './Header';

class App extends React.Component {
  render () {
    return (
      <>
        <Header/>
        <MemeGenerator/>
      </>
    )
  }
}

export default App;
