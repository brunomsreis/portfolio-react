import React from 'react';
import Card from '../../components/Card/Card'; 
import styles from './Contact.module.css'; 

const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cards}>
        {/* Card com informações de contato */}
        <Card
          type="image"
          description={(
            <div className={styles.contactInfo}>
              <div>
                <span>Bruno Miguel Santos Reis</span>
              </div>
              <div>
                <span>Email: brunomiguelsantosreis@gmail.com</span>
              </div>
              <div>
                <span>Phone: 913309997</span>
              </div>
              <div>
                <a href="https://www.behance.net/brunomsreis" target="_blank" rel="noopener noreferrer">Behance</a>
              </div>
              <div>
                <a href="https://www.linkedin.com/in/brunomiguelreis/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </div>
              <div>
                <a href="https://github.com/brunomsreis/Porfolio_React.git" target="_blank" rel="noopener noreferrer">Github</a>
              </div>
            </div>
          )}
          image="/assets/images/eu.jfif"
          className={styles.cardImage} 
        />
        
        {/* Card com formulário de contato */}
        <Card
          type="text"
          title="Contact Form"
          className={styles.contactFormCard}
        >
          <form className={styles.contactForm}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />

            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4" />

            <button type="submit">Submit</button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default Contact;