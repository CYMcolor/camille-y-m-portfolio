import React, { useState } from 'react';

export default function Contact() {
  // form inputs
  const [contactState, setContactState] = useState({ name: '', email: '', message: ''});
  //error
  const [errorMessage, setErrorMessage] = useState("");
  //deconstruct form inputs
  const { name, email, message } = contactState;

  //handle change detects validation
  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { name, email, message} = e.target;
    return setContactState(name, email, message)
  };

  //form handler
  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();
    //clear inputs
    setContactState({ name: '', email: '', message: ''});
    
  };

  return (
    <div className='page'>
      <h2>Contact Me</h2>
      <form>
        <div>
          <input
            value={name}
            name="name"
            onChange={handleInputChange}
            type="text"
            placeholder="name"
          />
        </div>
        
        <div>
          <input
            value={email}
            name="email"
            onChange={handleInputChange}
            type="text"
            placeholder="email"
          />
        </div>
        
        <div>
          <input
            value={message}
            name="message"
            onChange={handleInputChange}
            type="text"
            placeholder="message"
          />
        </div>
        
      
        <button className='btn btn-success' type="button" onClick={handleFormSubmit}>
          Submit
        </button>

      </form>
    </div>
  );
}
