import React, { useState } from 'react';
import './contact.css';

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      name,
      email,
      message
    });
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    // <div>
    //   <h1>Contact Us</h1>
    //   <form onSubmit={handleSubmit}>
    //     <label htmlFor="name">Name:</label>
    //     <input
    //       type="text"
    //       id="name"
    //       value={name}
    //       onChange={handleNameChange}
    //       required
    //     />

    //     <label htmlFor="email">Email:</label>
    //     <input
    //       type="email"
    //       id="email"
    //       value={email}
    //       onChange={handleEmailChange}
    //       required
    //     />

    //     <label htmlFor="message">Message:</label>
    //     <textarea
    //       id="message"
    //       value={message}
    //       onChange={handleMessageChange}
    //       required
    //     ></textarea>

    //     <button type="submit">Submit</button>
    //   </form>
    // </div>

    <div className="outerContainer">


      <div class="container">
        <div class="row header">
          <h1>CONTACT US &nbsp;</h1>
          <h3>Fill out the form below to learn more!</h3>
        </div>
        <div class="row body">
          <form action="#">
            <ul>

              <li>
                <p class="left">
                  <label for="first_name">first name</label>
                  <input type="text" name="first_name" placeholder="John" />
                </p>
                <p class="pull-right">
                  <label for="last_name">last name</label>
                  <input type="text" name="last_name" placeholder="Smith" />
                </p>
              </li>

              <li>
                <p>
                  <label for="email">email <span class="req">*</span></label>
                  <input type="email" name="email" placeholder="john.smith@gmail.com" />
                </p>
              </li>
              <li><div class="divider"></div></li>
              <li>
                <label for="comments">comments</label>
                <textarea cols="46" rows="3" name="comments"></textarea>
              </li>

              <li>
                <input class="btn btn-submit" type="submit" value="Submit" />
                <small>or press <strong>enter</strong></small>
              </li>

            </ul>
          </form>
        </div>
      </div>
    </div>
  );
};


export default ContactPage