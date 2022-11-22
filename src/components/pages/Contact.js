import React from 'react';
import { Form } from 'react-bootstrap';


export default function Contact() {
  return (
    <div>
      <h1>Contact Bee:</h1>
      <ul>
        <li><div className='row'>
          <p className='col'> Email</p>
          <Form className='col'><input></input></Form>
          <div className='col'></div>
        </div></li>
        <li><div className='row'>
          <p className='col'> Name</p>
          <Form className='col'><input></input></Form>
          <div className='col'></div>
        </div></li>
        <li>
          <p> Message</p>
          <Form><input></input></Form>
          <div className='col'></div>
</li>
      </ul>
    </div>
  );
}
