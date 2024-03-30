import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
    <div className={styles.about}>
      <p className={styles.paragraph}>
        Hey! 
        With a background in Communication Sciences and a specialization in 
        multimedia—including photography, video, and web design—I'm 
        currently honing my skills in Full Stack development. 
        I'm passionate about blending creativity with technology to create 
        captivating experiences. A proactive learner and team player, I'm eager 
        to contribute to innovative projects and continue expanding my 
        expertise. To know more click on the CV: 
      </p>
      <a href="/seu_caminho_para_o_arquivo/curriculo.pdf" download>Download CV</a>
    </div>
  );
};

export default About;
