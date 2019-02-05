import React, { Component } from 'react';
import Search from './components/Search/Search';

class App extends Component {
  render() {
    return (
      <Search
        placeholder="Zoek in winkel"
        minimumInputLength="3" />
    );
  }
}

export default App;
