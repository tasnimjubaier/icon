import './App.css';
import Home from './components/Home/Home';
import Sidebar from './components/Sidebar/Sidebar';
import Faru from './components/Faru/Faru';
import Body from './components/Body/Body';
import Topbar from './components/Topbar/Topbar';

function App() {
  return (
    <div className="App">
      <Sidebar /> 
      <Topbar />
      <Body /> 
      {/* <Faru /> */}
    </div>
  );
}

export default App;
