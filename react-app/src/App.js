import './App.css';
import { useState } from 'react';

function App() {
  const [name, setName] = useState("Veena");

  return (
    <div className="App">
     <h1>I am {name}</h1>
     <button onClick={()=> setName("1st baby")}>Lohithakshi</button>
     <button onClick={()=>setName("2nd baby")}>Bhuvainika</button>
    </div>
  );
}

export default App;
