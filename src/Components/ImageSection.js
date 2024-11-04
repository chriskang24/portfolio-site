import React from 'react';
import about from '../img/about.jpg';
import { Link } from 'react-router-dom';

export default function ImageSection() {
  return (
    <div className="ImageSection">
      <div className="img">
        <img src={about} alt="" />
      </div>
      <div className="about-info">
        <h4>I am<span> Chris Kang</span></h4>
        <p className="about-text">
          Full-Stack Web Developer
        </p>
        <div className="about-details">
          <div className="left-section">
            <p>Full Name: </p>
            <p>Nationality:</p>
            <p>Languages:</p>
            <p>Location:</p>
          </div>
          <div className="right-section">
            <p>Christopher Kang</p>
            <p>Chinese Canadian</p>
            <p>English, Mandarin</p>
            <p>Toronto, Ontario</p>
          </div>
        </div>
        <Link to="resume.pdf" target="_blank" download>
          <button className="btn" >Download Resume</button>
        </Link>
      </div>
    </div>
  )
}