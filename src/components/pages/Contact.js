import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

export default function Contact() {
  // form inputs
  const [contactState, setContactState] = useState({ name: '', email: '', message: ''});
  //error
  const [errorMessage, setErrorMessage] = useState('');
  //deconstruct form inputs
  const { name, email, message } = contactState;

  //handle change detects validation
  const handleInputChange = (e) => {
    // deconstruct event target
    const { target } = e;
    //name of input field
    const inputType = target.name;
    //value of input field
    const inputValue = target.value;
    // cheacks if valid email
    if(inputType === 'email'){
      if(!validateEmail(inputValue))
        setErrorMessage('Invalid email');
      else
        setErrorMessage('');
    }
    //error checks for inputs length 
    //only shows up if the user made any change b4 clearing input
    if(!inputValue){
      setErrorMessage(`${inputType} is required`);
    }
    else{
      setErrorMessage(``);
    }
    //change form info to input (constact state is the unchanged)
    setContactState({ ...contactState, [inputType]: inputValue});
    //console.log(contactState);
  };

  //form handler
  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();
    console.log({name, email, message});
    if(!name || !email || !message)
      setErrorMessage(`Invalid submission`);
    else{
      //clear inputs and data
      setContactState({ name: '', email: '', message: ''});
    }
 
  };

  return (
    <div className='page'>
      <h2>Contact Me</h2>
      <form>
        
        <div>
        Name: &nbsp;
          <input
            value={name}
            name="name"
            onChange={handleInputChange}
            type="text"
            placeholder="name"
          />      
        </div>
        <div>
          Email: &nbsp;
          <input
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder="email"
          />
        </div>
        Message:
        <br/>
          <input
            value={message}
            name="message"
            onChange={handleInputChange}
            type="text"
            placeholder="message"
          />      
        <br/>
        <br/>
        <button className='btn btn-success' type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}
