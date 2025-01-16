import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './features/Navbar/Navbar';
import Home from './features/Home/Home';

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <Home />
    </div>
  );
}

export default App;
