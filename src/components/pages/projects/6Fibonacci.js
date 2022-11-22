import React from 'react';
import Image from 'react-bootstrap/Image'
import "../../css/style.css"

export default function Proj6() {
  return (
    <div>
      <div className="row">
        <h1 className='col'>fibonacciGen</h1>
        <Image
          src="http://i.stack.imgur.com/eHWK9.png"
          alt="fibonacciGen"
          className="col sanders"
        />
      </div>
      <ul>
        <li>Simple fibonacci sequence generator</li>
        <li><a href="https://github.com/MadeOfBees/fibonacci-Calculator">https://github.com/MadeOfBees/fibonacci-Calculator</a></li>
      </ul>
    </div>
  );
}
