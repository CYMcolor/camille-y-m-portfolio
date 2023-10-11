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
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="name"
        />

        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="text"
          placeholder="email"
        />

        <input
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="message"
        />

        <button className='btn' type="button" onClick={handleFormSubmit}>
          Submit
        </button>

      </form>
    </div>
  );
}
