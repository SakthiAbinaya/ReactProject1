import React from "react";
import "./Registration.css";
import { useState } from "react";
const RegistrationPage = () => {

  const [isRegistrationComplete, setIsRegistrationComplete] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault(); // prevent default form submission


    // Simulate API call and set registration complete flag
    setIsRegistrationComplete(true);

   document.getElementById("s").reset();
  };

  return (
    <div className="registration-container">
      <h2>Registration</h2>
      <form method="post" id='s' onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter name"
          required
        />

<label htmlFor="age">Age:</label>
       <input type="text" name="age" id="age" placeholder='Enter number' required maxLength="2" />

       <label htmlFor="qualification">Qualification:</label>
        <input type="text" name="qualification" id="qualification" placeholder='Enter your degree' required />

        <label htmlFor="qfi">Field of interest</label>
        <input type="text" name="qualification" id="qualification" placeholder='Enter your job interest' required />

       <label htmlFor="verification">Verification Details:</label>
       <textarea name="text" id="verification" rows="2" placeholder='Enter your aadhar number' required></textarea>

        <label htmlFor="address">Address:</label>
       <textarea name="text" id="verification" rows="2" placeholder='Enter your current address' required></textarea>

       <label htmlFor="experience">Working Experience:</label>
       <input type="text" name="experience" id="experience" placeholder='if not enter null' required />

        <label htmlFor="experience">Specialized Field:</label>
         <input type="text" name="experience" id="experience" placeholder='Enter your domain' required />

        <label htmlFor="residential">Residential Address:</label>
        <textarea name="text" id="verification" rows="2" placeholder='Enter your native address' required></textarea>

        <button type="submit" id="mybutton">
          Register
        </button>
      </form>

      {/* Show popup if registration is complete */}
      {isRegistrationComplete && (
        <div className="popup">
          <p>Registration Complete!</p>
          <button onClick={() => setIsRegistrationComplete(false)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default RegistrationPage;