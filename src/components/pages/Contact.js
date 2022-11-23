
import { Form } from 'react-bootstrap';
import {useState} from 'react';
import {validateEmail } from '../../utils/helpers';

function Contact() {
    
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email)) {
      setErrorMessage('Email is invalid');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    }
    alert(`Thanks for visiting ${name}`);

    setEmail('');
    setName('');
    setMessage('');
  };
    return (
      <div>
        <h1>Contact Bee:</h1>
        <ul>
          <li><div className='row'>
            <p className='col'> Email</p>
            <Form className='col'><input
              value={email}
              name="email"
              onChange={handleInputChange}
              type="email"
              placeholder="email"
            /></Form>
            <div className='col'></div>
          </div></li>
          <li><div className='row'>
            <p className='col'> Name</p>
            <Form className='col'><input
              value={name}
              name="name"
              onChange={handleInputChange}
              type="text"
              placeholder="name"
            /></Form>
            <div className='col'></div>
          </div></li>
          <li>
            <p> Message</p>
            <Form><input
              value={message}
              name="message"
              onChange={handleInputChange}
              type="message"
              placeholder="message"
            /></Form>
            <button type="button" onClick={handleFormSubmit}>Submit</button>
            {errorMessage && (
              <div>
                <p className="error-text">{errorMessage}</p>
              </div>
            )}
            <div className='col'></div>
          </li>
        </ul>
      </div>
    );
  }

export default Contact;