import React, { useState, useEffect } from 'react';
import PhotoCard from '../../components/PhotoCard/PhotoCard';
import styles from './Works.module.css';

const Works = () => {
  const [photos, setPhotos] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  useEffect(() => {
    fetch('/photos.json')
      .then(response => response.json())
      .then(data => {
        console.log('Data from /photos.json:', data);
        setPhotos(data.photos);
      })
      .catch(error => {
        console.error('Erro ao carregar o arquivo JSON:', error);
      });
  }, []);

  const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo);
  };

  const handleCloseModal = () => {
    setSelectedPhoto(null);
  };

  return (
    <div className={styles['works-container']}>
      {/* Parte esquerda da página para a galeria de fotos em miniatura */}
      <div className={styles['gallery-container']}>
        <h2>Click on the thumbnail to make the photos bigger.</h2>
        <div className={styles.gallery}>
          {photos.map(photo => (
            <img
              key={photo.id}
              src={photo.thumbnailUrl}
              alt={photo.title}
              onClick={() => handlePhotoClick(photo)}
              className={styles.thumbnail}
            />
          ))}
        </div>
      </div>

      {/* Parte direita da página para o PhotoCard */}
      <div className={styles['photo-card-container']}>
        {selectedPhoto && (
          <PhotoCard photo={selectedPhoto} onClose={handleCloseModal} />
        )}
      </div>
    </div>
  );
};

export default Works;