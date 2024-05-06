import React from 'react';
import {socialImages} from '../resources/images';

export const Footer = () => {
  return (
    <div id="Contacts">
    <div class="child-5">
      <p class="heading">Contacts</p>
    <div class="socials">
    <div class="Twitter">
      <img src={socialImages.logo1} height="100px"></img>
      <p>Twitter</p>
    </div>
    <div class="Linkedin">
      <img src={socialImages.logo3} height="100px"></img>
      <p>Linkedin</p>
    </div>
    <div class="GitHub">
      <img src={socialImages.logo2} height="100px"></img>
      <p>GitHub</p>
    </div>
    </div>
    </div>
    </div>
  )
}
