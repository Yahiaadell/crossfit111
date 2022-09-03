import './App.css';
import About from './Components/About/About';
import Coaches from './Components/Coaches/Coaches';
import { Creator } from './Components/Creator/Creator';
import Footer from './Components/Footer/Footer';
import Hero from './Components/Hero/Hero';
import Join from './Components/Join/Join';
import Location from './Components/Location/Location';
import Schedule from './Components/Schedule/Schedule';
function App() {
  return (
    <div className="App">
          <Hero />
          <About />
          <Coaches />
          <Schedule />
          <Location />
          <Join />
          <Footer />
          <Creator />
    </div>
  );
}

export default App;
