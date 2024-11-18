import { Link, Outlet } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';

function App() {
  return (
    <div className="App">
   
        <Header />
      <div className='app-content'>
        <Outlet />
      </div>
      <div className='app-footer'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
