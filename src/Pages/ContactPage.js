import React from 'react';
import ContactItem from '../Components/ContactItem';
import phone from '../img/phone.svg';
import email from '../img/emailme.svg';
import location from '../img/location.svg';
import Title from '../Components/title';
export default function ContactPage() {
  return (
    <div>
      <div className="title">
        <Title title={'Contact Info'} />
      </div>
      <div className="ContactPage">
        <div className="map-sect">
          <iframe title={'Current Location'} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d369106.72666663735!2d-79.65823226748859!3d43.717899031135076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb90d7c63ba5%3A0x323555502ab4c477!2sToronto%2C%20ON!5e0!3m2!1sen!2sca!4v1618505108833!5m2!1sen!2sca" width="600" height="450" style={{ border: 0 }} allowfullScreen="" loading="lazy"></iframe>
        </div>

        <div className="contact-sec">
          <ContactItem icon={phone} text1={'+1 647-938-5595'} text2={'Mobile Contact'} title={'Phone'} />
          <ContactItem icon={email} text1={'christopherjkang24@gmail.com'} text2={'Primary Email'} title={'Email Address'} />
          <ContactItem icon={location} text1={'Toronto, Ontario'} text2={'Canada'} title={'Residence'} />
        </div>
      </div>
    </div>
  )
}