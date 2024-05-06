import React from 'react';
import { experienceImages } from '../resources/images';

export const Experience = () => {
  return (
    <div id="Experience">
    <div class="child-4">
      <p class="heading">Experience</p>
      <div class="top">
      <div class="one">
      <img src={experienceImages.project1} height="150px" width="150px"></img>
      <a href="https://4lza.github.io/circumferenceCalculator/" target="_blank"><p class="pone">Circumference Calculator</p></a>
    </div>
    <div class="two">
    <img src={experienceImages.project2}  height="150px" width="150px"></img>
      <a href="https://4lza.github.io/mainCounter/" target="_blank"><p class="pone">Counter</p></a>
    </div>
      </div>
      <div class="bottom">
      <div class="three">
      <img src={experienceImages.project3} height="150px" width="150px"></img>
      <a href="https://4lza.github.io/randomNumberGenerator/" target="_blank"><p class="pthree">Random Number</p></a>
    </div>
    <div class="four">
      <img src="" height="150px" width="150px"></img>
      <p class="pfour">Project four</p>
    </div>
    </div>
  </div>
  </div>
  )
}
