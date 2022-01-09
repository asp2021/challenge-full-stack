import React from "react"
import Public from './Routes/Public'
import { BrowserRouter as Router} from "react-router-dom"
import './App.css';
import { GlobalProvider } from "./Context/GlobalProvider";

function App() {
  return (
   <div className="App">
      <Router>
        <GlobalProvider> 
          <Public />
          </GlobalProvider> 
      </Router>
    </div>
  );
}

export default App;
