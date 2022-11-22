import React from 'react';
import Image from 'react-bootstrap/Image'
import "../../css/style.css"

export default function Proj7() {
  return (
    <div>
      <div className="row">
        <h1 className='col'>Team Maker</h1>
        <Image
          src="https://user-images.githubusercontent.com/9198297/200918630-01c4f4fd-d28e-4ce9-99c0-1ba52a8e63f4.jpg"
          alt="Team Maker"
          className="col sanders"
        />
      </div>
      <ul>
        <li>A simple team website generator</li>
        <li><a href="https://github.com/MadeOfBees/teamMaker">https://github.com/MadeOfBees/teamMaker</a></li>
      </ul>
    </div>
  );
}
