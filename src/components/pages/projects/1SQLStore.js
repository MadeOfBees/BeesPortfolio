import React from 'react';
import Image from 'react-bootstrap/Image'
import "../../css/style.css"


export default function Proj1() {
  return (
    <div>
      <div className="row">
        <h1 className='col'>SQLStore</h1>
        <Image
          src="https://user-images.githubusercontent.com/9198297/201371225-a8b36224-6e2c-43a3-b66f-da3140a7a096.jpg"
          alt="SQL Store"
          className="col sanders"
        />
      </div>
      <ul>
        <li>A lightweight server backend for a storefront:</li>
        <li><a href="https://github.com/MadeOfBees/SQLStore">https://github.com/MadeOfBees/SQLStore</a></li>
        <li><a href="https://drive.google.com/file/d/1dYLfz0TsId_BLlTx0xDWlpE2cbvZJHuK/view">Video: https://drive.google.com/file/d/1dYLfz0TsId_BLlTx0xDWlpE2cbvZJHuK/view</a></li>
      </ul>
    </div>
  );
}
