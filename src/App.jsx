import logo from './logo.svg';
import './App.css';
import Homepage from './components/homepage';
import Scrollbar from './components/scrollbar';
function App() {
  return (
    <div className="App">
     <Scrollbar/>
      <Homepage/>
    </div>
  );
}

export default App;
