import './App.css';
import {Footer} from './components/Footer'
import logo from './resources/images/favicon.ico'
import { Experience } from './components/Experience';
import { Navbar } from './components/Navbar';




function App() {
  return (
    <>
    <Navbar />
  <div id="section1">
  <div class="child">
    <p class="heading">Aleeza Ahmed</p>
    <p class="bio"><span class="bold">A Hardworking Developer,</span><span class="italics">with big goals</span></p>
    <img className='zoomIn' src={logo}></img>
  </div>
</div>
  <div id="About">
    <div class="child-3">
    <p class="heading">About Me</p>
    <p class="bio"><span class="bold">Innovative. Passionate. Creative.</span></p>
  </div>
  </div>
  <Experience />
  <Footer />
    </>
    );
}

export default App;
