import React from 'react';

export default function ContactUs () {

  return (
    <div className="mui-panel" id="contact-us">
    <div className="mui-container">
        <form className="mui-form" id="contact-form">
          <legend>CONTACT US</legend>
          <div className="mui-textfield mui-textfield--float-label">
            <input id="inputName" type="text" required />
            <label>Name</label>
          </div>
          <div className="mui-textfield mui-textfield--float-label">
            <input id="inputEmail" type="email" required />
            <label>Email Address</label>
          </div>
          <div className="mui-textfield mui-textfield--float-label">
            <textarea id="inputMessage" required></textarea>
            <label>Message</label>
          </div>
          <button id="submitEmail" type="submit" className="mui-btn mui-btn--flat">
            Submit
          </button>
          <p id="my-form-status"></p>
        </form>
    </div>
    </div>
);
  }
