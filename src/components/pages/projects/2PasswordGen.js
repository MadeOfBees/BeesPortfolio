import React from 'react';
import Image from 'react-bootstrap/Image'
import "../../css/style.css"

export default function Proj2() {
  return (
    <div>
      <div className="row">
        <h1 className='col'>PasswordGen</h1>
        <Image
          src="https://user-images.githubusercontent.com/9198297/190828203-2adb4546-0e32-43f5-a163-07e28f079d48.png"
          alt="PasswordGen"
          className="col sanders"
        />
      </div>
      <h1>PasswordGen</h1>
      <ul>
        <li>A simple password generator</li>
        <li><a href="https://bit.ly/3XqBH07">https://madeofbees.github.io/passwordGen/</a></li>
        <li><a href="https://github.com/MadeOfBees/passwordGen">https://github.com/MadeOfBees/passwordGen</a></li>
      </ul>
    </div>
  );
}
