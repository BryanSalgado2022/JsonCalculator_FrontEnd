import axios from 'axios';
import { useEffect } from 'react';
import './App.css';
import Form from './Components/Services/Form';
import { urlClimas } from './endpoints';

function App() {
  useEffect(() =>{
    axios.get(urlClimas)
      .then((response) => {
        console.log(response.data);
      })
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Calculator with C#</h1>        
        <div>
          <Form/>
        </div>
      </header>
      
    </div>
  );
}

export default App;
