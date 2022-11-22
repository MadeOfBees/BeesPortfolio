import React from 'react';
import Image from 'react-bootstrap/Image'
import "../../css/style.css"

export default function Proj3() {
  return (
    <div>
      <div className="row">
        <h1 className='col'>Readme generator</h1>
        <Image
          src="https://download.logo.wine/logo/Markdown/Markdown-Logo.wine.png"
          alt="Readme generator"
          className="col sanders"
        />
      </div>
      <ul>
        <li>A simple readme generator made with Node.JS</li>
        <li><a href="https://github.com/MadeOfBees/nodeFileGen">https://github.com/MadeOfBees/nodeFileGen</a></li>
        <li><a href="https://drive.google.com/file/d/1sGpAIjlU4g1IhLEh1PfqGv3bMweSwSXw/view">Video: https://drive.google.com/file/d/1sGpAIjlU4g1IhLEh1PfqGv3bMweSwSXw/view</a></li>
      </ul>
    </div>
  );
}
