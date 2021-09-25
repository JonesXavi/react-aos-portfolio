import React from 'react'

// Styles
import '@fortawesome/fontawesome-free/css/all.min.css';

import { Contacts } from '../en';

const Contact = () => (
  <section className="contact" id="contact">
    <div className="container">
      <ul>
        {
          Contacts.types.map((item, index) => (
            <li key={index}>
              <a href={item.link} rel="noopener noreferrer" target="_blank"><i className={item.icon}></i></a>
            </li>
          ))
        }
      </ul>
    </div>
  </section>
);

export default Contact;
