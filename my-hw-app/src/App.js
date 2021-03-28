import React from 'react';
import './App.css'
import Wrapper from './Component/Wrapper'
import Table from './Component/Table'
import API from './utils/API.js'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Wrapper>
          <Table />
        </Wrapper>
        
        
      </header>
    </div>
  );
}


export default App;
