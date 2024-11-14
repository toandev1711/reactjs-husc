import './App.css';
import Header from './components/Header';
function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <Overview />
      <Training />
      <Footer/>
    </div>
  );
}

export default App;