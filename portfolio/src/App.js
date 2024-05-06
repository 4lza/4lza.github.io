import './App.css';
import project1 from './resources/images/project 1.png'
import project2 from './resources/images/project 2.png'
import project3 from './resources/images/project 3.png'
import twitter from './resources/images/twitter logo.png'
import linkedin from './resources/images/linkedin logo.png'
import github from './resources/images/github logo.png'
import logo from './resources/images/favicon.ico'




function App() {
  return (
    <>
     <div class="navbar">
    <div class="about"><a href="#About">About Me</a>
    </div>
    <div><a href="#Experience">Experience</a></div>
    <div class="contacts"><a href="#Contacts">Contacts</a></div>
  </div>

  <div id="section1">
  <div class="child">
    <p class="heading">Aleeza Ahmed</p>
    <p class="bio"><span class="bold">A Hardworking Developer,</span><span class="italics">with big goals</span></p>
  </div>
  <div class="child-2"><img className='slideInDown' src={logo}></img></div>
</div>

  <div id="About">
    <div class="child-3">
    <p class="heading">About Me</p>
    <p class="bio"><span class="bold">Innovative. Passionate. Creative.</span></p>
  </div>
  </div>

  <div id="Experience">
    <div class="child-4">
      <p class="heading">Experience</p>
      <div class="top">
      <div class="one">
      <img src={project1} height="150px" width="150px"></img>
      <a href="https://4lza.github.io/circumferenceCalculator/" target="_blank"><p class="pone">Circumference Calculator</p></a>
    </div>
    <div class="two">
    <img src={project2}  height="150px" width="150px"></img>
      <a href="https://4lza.github.io/mainCounter/" target="_blank"><p class="pone">Counter</p></a>
    </div>
      </div>
      <div class="bottom">
      <div class="three">
      <img src={project3} height="150px" width="150px"></img>
      <a href="https://4lza.github.io/randomNumberGenerator/" target="_blank"><p class="pthree">Random Number</p></a>
    </div>
    <div class="four">
      <img src="" height="150px" width="150px"></img>
      <p class="pfour">Project four</p>
    </div>
    </div>
  </div>
  </div>

  <div id="Contacts">
    <div class="child-5">
      <p class="heading">Contacts</p>
    <div class="socials">
    <div class="Twitter">
      <img src={twitter} height="100px"></img>
      <p>Twitter</p>
    </div>
    <div class="Linkedin">
      <img src={linkedin} height="100px"></img>
      <p>Linkedin</p>
    </div>
    <div class="GitHub">
      <img src={github} height="100px"></img>
      <p>GitHub</p>
    </div>
    </div>
    </div>
    </div>
    </>
    );
}

export default App;
