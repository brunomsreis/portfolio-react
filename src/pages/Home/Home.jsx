import React from 'react';
import Card from '../../components/Card/Card';
import styles from './Home.module.css';
import { useState, useEffect } from 'react';



const Home = () => {
  const [photos, setPhotos] = useState([]);
  
  useEffect(() => {
    fetch('/photos.json')
      .then(response => response.json())
      .then(data => {
        console.log('Data from /photos.json:', data);
        setPhotos(data.photos.slice(-3));
      })
      .catch(error => {
        console.error('Erro ao carregar o arquivo JSON:', error);
      });
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.cards}>
        {/* Card 1 */}
        <Card
          type="image"
          title="Bruno Reis"
          description="I'm a web designer based in Porto."
          image="/assets/images/eu.jfif"
          className={styles.card1}
        />
        {/* Card 2 */}
        <Card
          type="text"
          title="Text Card"
          description="This is a card with only text."
          className={styles.card2}
        />
        {/* Card 3 */}
        <Card
          type="text"
          title="Text Card"
          description="This is a card with only text."
          className={styles.card3}
        />
        {/* Card 4 */}
        <Card
          type="text"
          title="Text Card"
          description="This is a card with only text."
          className={styles.card4}
        />
      </div>
      <div className={styles.cards}>
        {/* Card 5 */}
        <Card
          type="image"
          title="Image Card"
          description="This is a card with an image and text."
          image="image-url.jpg"
          className={styles.card5}
        />
       
        {/* Card 8 */}
        <Card
          type="text"
          title="Text Card"
          description="This is a card with only text."
          className={styles.card8}
        />
         {/* Card 6 */}
         <Card
          type="composite"
          className={styles.card6}
          title="Latest work"
        >
          {/* Sub Cards */}
          {photos.map((photo, index) => (
        <Card
          key={index}
          type="image"
          title={photo.title}
          url={photo.url}
          thumbnailUrl={photo.thumbnailUrl}
          className={styles[`subcard${index + 1}`]}
        />
      ))}
        </Card>
        {/* Card 7 */}
        <Card
          type="text"
          title="Text Card"
          description="This is a card with only text."
          className={styles.card7}
        />
        {/* Card 9 */}
        <Card
          type="text"
          title="Text Card"
          description="This is a card with only text."
          className={styles.card9}
        />
      </div>
    </div>
  );
};

export default Home;
