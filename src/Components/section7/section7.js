import React from 'react';
import './section7.css';

const CenteredContent = () => {
  return (
    <div className="containers">
      <main className="main-content">
        <p className='loremipsum'>Lorem Ipsum</p>
        <h1>
          <span className="black-text">Time To </span>
          <span className="blue-text">Change Your Life</span>
        </h1>
        <img src="./gwa.png" alt="Sample" className="centered-image" />
      </main>
      {/* <footer className="footer">
        <p>We want to keep you up to date once we launch our beta version so that you are the first to</p><p> experience this platform. Please fill out this short form below to be notified once we go live</p>
      </footer> */}

      


    </div>
  );
}

export default CenteredContent;
