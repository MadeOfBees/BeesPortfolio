import React from 'react';
import Image from 'react-bootstrap/Image'
import "../../css/style.css"

export default function Proj7() {
  return (
    <div>
      <div className="row">
        <h1 className='col'>ChessTutorial</h1>
        <Image
          src="https://user-images.githubusercontent.com/9198297/205209501-8e7bb02a-9f5d-4290-a7b0-ffd0d9e7a80d.jpg"
          alt="ChessTutorial"
          className="col sanders"
        />
      </div>
      <ul>
        <li>A simple Chess Tutorial</li>
        <li><a href="https://github.com/MadeOfBees/chess-tutorials">https://github.com/MadeOfBees/chess-tutorials</a></li>
        <li><a href="https://chesstutorials.netlify.app/">https://chesstutorials.netlify.app/</a></li>
      </ul>
    </div>
  );
}
