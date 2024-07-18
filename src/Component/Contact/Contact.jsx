import React, { useEffect } from "react";
import "./Contact.css";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png";

const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "a2260943-f122-4ea5-9574-7ed862fe15db");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      })  
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    }

    useEffect(()=>{
      setTimeout(()=>{
        setResult("");
      },3000)
    },[result]);

  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send us a message <img src={msg_icon} className="contact-msg" />
        </h3>
        <p>
          {" "}
          As potential future Terriers, we expect all applicants to adhere to
          the same standards of academic honesty and integrity as our current
          students. When representing the words or ideas of another in their
          original work, students should properly credit the source.
        </p>
        <ul>
          <li>
            {" "}
            <img src={mail_icon} />
            shivani22mishraa@gmail.com
          </li>
          <li>
            {" "}
            <img src={phone_icon} />
            917185500{" "}
          </li>
          <li>
            {" "}
            <img src={location_icon} />
            233 Bay State Road, Boston, MA 02215
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label>Your Name</label>
            <input type="text" name='name' placeholder="Enter your Name" required />
            <label>Phone Number</label>
            <input type="tel" name='phone' placeholder="Enter your Number" required />
            <label>Right Your Message Here </label>
            <textarea name="message" rows='6' placeholder="Enter your Message" required></textarea>
            <button type='submit' className="btn dark-btn">Submit Now <img src={white_arrow}/></button>

        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
