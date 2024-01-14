// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import './App.css'; 
import wSound from "../public/assets/sounds/tom-1.mp3"
import aSound from "../public/assets/sounds/tom-2.mp3"
import sSound from "../public/assets/sounds/tom-3.mp3"
import dSound from "../public/assets/sounds/tom-4.mp3"
import jSound from "../public/assets/sounds/snare.mp3"
import kSound from "../public/assets/sounds/crash.mp3"
import lSound from "../public/assets/sounds/kick-bass.mp3"

const DrumKit = () => {
  useEffect(() => {
    const handleButtonClick = (buttonInnerHTML) => {
      makeSound(buttonInnerHTML);
      buttonAnimation(buttonInnerHTML);
    };

    const handleKeyPress = (event) => {
      makeSound(event.key);
      buttonAnimation(event.key);
    };

    const makeSound = (key) => {
      console.log('hello',key);
      switch (key) {
        case 'w':
          new Audio(wSound).play();
          break;
        case 'a':
          new Audio(aSound).play();
          break;
        case 's':
          new Audio(sSound).play();
          break;
        case 'd':
          new Audio(dSound).play();
          break;
        case 'j':
          new Audio(jSound).play();
          break;
        case 'k':
          new Audio(kSound).play();
          break;
        case 'l':
          new Audio(lSound).play();
          break;
        default:
          console.log(key);
      }
    };

    const buttonAnimation = (currentKey) => {
      const activeButton = document.querySelector(`.${currentKey}`);
      activeButton.classList.add('pressed');

      setTimeout(() => {
        activeButton.classList.remove('pressed');
      }, 100);
    };

    const drumButtons = document.querySelectorAll('.drum');

    drumButtons.forEach((button) => {
      button.addEventListener('click', () => {
        handleButtonClick(button.innerHTML);
      });
    });

    document.addEventListener('keypress', handleKeyPress);

    // Cleanup event listeners on component unmount
    return () => {
      drumButtons.forEach((button) => {
        button.removeEventListener('click', handleButtonClick);
      });

      document.removeEventListener('keypress', handleKeyPress);
    };
  }, []); // empty dependency array means this useEffect runs once on component mount

  return (
    <div>
      <h1 id="title">Drum 🥁 Kit</h1>
  <div className="set">
    <button className="w drum">w</button>
    <button className="a drum">a</button>
    <button className="s drum">s</button>
    <button className="d drum">d</button>
    <button className="j drum">j</button>
    <button className="k drum">k</button>
    <button className="l drum">l</button>
  </div>
    </div>
  );
};

export default DrumKit;
