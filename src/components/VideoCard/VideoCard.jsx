import React from 'react';
import PropTypes from 'prop-types';
import './VideoCard.module.css'; 

const VideoCard = ({ video, onClose }) => {
  return (
    <div className={styles['video-card-container']}>
      <button onClick={onClose}>Close</button>
      <h3>{video.title}</h3>
      <div className={styles['video-player']}>
        {/* componente de player de vídeo, como um iframe ou um componente de player de vídeo personalizado */}
        {/* Exemplo de uso de iframe para vídeo do YouTube */}
        <iframe
          title={video.title}
          width="560"
          height="315"
          src={video.videoUrl}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

VideoCard.propTypes = {
  video: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    videoUrl: PropTypes.string.isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default VideoCard;
