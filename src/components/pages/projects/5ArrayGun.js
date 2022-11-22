import React from 'react';
import Image from 'react-bootstrap/Image'
import "../../css/style.css"

export default function Proj5() {
  return (
    <div>
      <div className="row">
        <h1 className='col'>arrayGun</h1>
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/2/21/Space_Pilot_X_Ray_Gun_made_by_Taiyo.jpg"
          alt="Scuffed Weather"
          className="col sanders"
        />
      </div>
      <ul>
        <li>Simple site to turn lists into arrays</li>
        <li><a href="https://github.com/MadeOfBees/arrayGun">https://github.com/MadeOfBees/arrayGun</a></li>
      </ul>
    </div>
  );
}
