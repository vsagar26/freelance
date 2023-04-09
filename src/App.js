import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Pricing from './components/Pricing';
import Service from './components/Service';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Main/>
      <About/>
      <Service/>
      <Pricing/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
