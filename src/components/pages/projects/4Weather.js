import React from 'react';
import Image from 'react-bootstrap/Image'
import "../../css/style.css"

export default function Proj4() {
  return (
    <div>
      <div className="row">
        <h1 className='col'>Scuffed Weather</h1>
        <Image
          src="https://user-images.githubusercontent.com/9198297/197867296-86436430-632b-4173-83d9-51cb3783512b.png"
          alt="Scuffed Weather"
          className="col sanders"
        />
      </div>
      <ul>
        <li>NGL only turned this one in for the grade, it's borked lol</li>
        <li><a href="https://madeofbees.github.io/weatherApp/">https://madeofbees.github.io/weatherApp/</a></li>
        <li><a href="https://github.com/MadeOfBees/weatherApp">https://github.com/MadeOfBees/weatherApp</a></li>
      </ul>
    </div>
  );
}
