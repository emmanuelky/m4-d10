import Sidebar from './components/Sidebar';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar />
      </Router>
    </div>
  );
}

export default App;
