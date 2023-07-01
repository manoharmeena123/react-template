import React, { useState } from 'react';
import '../css/homepage.css';

const Homepage = () => {
  const [showPopup, setShowPopup] = useState(false);

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div>
      <div className="icons">
        <div>
          <img src="https://cdn-icons-png.flaticon.com/128/2984/2984960.png" alt="" />
          <p>Connect Wallet</p>
        </div>
        <div>
          <img src="https://img.icons8.com/?size=2x&id=2mIgusGquJFz&format=png" alt="" />
          <p>Connect Discord</p>
        </div>
        <div>
          <img src="https://cdn-icons-png.flaticon.com/128/3670/3670151.png" alt="" />
          <p>Connect Twitter</p>
        </div>
        <div>
          <img src="https://cdn-icons-png.flaticon.com/128/2112/2112502.png" alt="" />
          <p>Questionnaire</p>
        </div>
        <div>
          <img src="https://cdn-icons-png.flaticon.com/128/4744/4744812.png" alt="" />
          <p>Finish</p>
        </div>
      </div>

      <div className="prime">
        <img src="https://main--stately-cocada-542a8d.netlify.app/assets/prime-heading.svg" alt="" />
      </div>

      <div className="static">
        <p>Welcome to The Primes List</p>
        <p>Do you have what it takes?</p>
        <button className="btn" onClick={openPopup}>
          Apply
        </button>
        <p>
          Already applied? <u>Log In?</u>
        </p>
      </div>

      <div className="footer">
        <h4>© 2023 The Primes. All Rights Reserved</h4>
      </div>

      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h2>Connect</h2>
            <img src="https://cdn-icons-png.flaticon.com/128/3258/3258446.png" alt="" />
            <p>you can directly to click on Connect button !</p>
            <button onClick={closePopup}>Connect</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Homepage;
