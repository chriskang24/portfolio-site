import React from 'react';
import about from '../img/about.jpg';

export default function ImageSection() {
  return (
    <div className="ImageSection">
      <div className="img">
        <img src={about} alt="" />
      </div>
      <div className="about-info">
        <h4>I am<span>Chris Kang</span></h4>
        <p className="about-text">
          Welcome to this part of my website!
        </p>
        <div className="about-details">
          <div className="left-section">
            <p>Full Name: </p>
            <p>Age:</p>
            <p>Nationality:</p>
            <p>Languages:</p>
            <p>Location:</p>
          </div>
          <div className="right-section">
            <p>Chris Kang</p>
            <p>25</p>
            <p>Canadian, Chinese</p>
            <p>English, Mandarin</p>
            <p>Toronto, Ontario</p>
          </div>
        </div>
        <button className="btn">Download CV</button>
      </div>
    </div>
  )
}