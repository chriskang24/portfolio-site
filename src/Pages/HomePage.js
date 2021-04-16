import React from 'react';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="HomePage">
      <header className="hero">
        <h1 className="hero-text">
          Hi, I am
          <span> Chris Kang </span>
        </h1>
      </header>
      <p className="h-sub-text">
        Welcome to my portfolio website! Please see the sidebar for more info!
      </p>
      <div className="icons">
        <Link className="icon-holder" to={{ pathname: "https://github.com/chriskang24" }} target="_blank" >
          <FontAwesomeIcon className="icon gh" icon={faGithub} />
        </Link>

        <Link className="icon-holder" to={{ pathname: "https://www.linkedin.com/in/chrisjkang/" }} target="_blank">
          <FontAwesomeIcon className="icon li" icon={faLinkedin} />
        </Link>
      </div>
    </div>
  )
}