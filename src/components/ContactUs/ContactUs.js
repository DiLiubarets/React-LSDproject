import React from 'react';

class ContactUs extends React.Component {

  sendEmail(e) {
    e.preventDefault();
    var name = document.getElementById("inputName").value;
    var email = document.getElementById("inputEmail").value;
    var message = document.getElementById("inputMessage").value;
  
    if (name === "" || email === "" || message === "") {
      // console.log("fail");
      return false;
    } else {
     
      var status = document.getElementById("my-form-status");
      var url = "https://formspree.io/xwkrpzap";
      var method = "POST";
      var data = new FormData();
      data.append("email", email);
      data.append("name", name);
      data.append("message", message);
  
      var xhr = new XMLHttpRequest();
      xhr.open(method, url);
      xhr.setRequestHeader("Accept", "application/json");
      xhr.onreadystatechange = function () {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
          console.log("success");
          status.innerHTML = "Thanks! Your message was send.";
        } else {
          console.log("error");
          status.innerHTML = "Oops! There was a problem.";
        }

      };
      xhr.send(data);
      
    }
  
  }
  render() {
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
          <button onClick={this.sendEmail} id="submitEmail" type="button" className="mui-btn mui-btn--flat">
            Submit
          </button>
          <p id="my-form-status"></p>
        </form>
    </div>
    </div>
)};
  }
  export default ContactUs;