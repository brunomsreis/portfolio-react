// PhotoCard.jsx

import React from 'react';
import PropTypes from 'prop-types';

const PhotoCard = ({ photo, onClose }) => {
  return (
    <div className="photo-card">
      <img src={photo.url} alt={photo.title} />
      <div className="description">
        <h3>{photo.title}</h3>
        {photo.description && <p>{photo.description}</p>}
      </div>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

PhotoCard.propTypes = {
  photo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    description: PropTypes.string, 
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default PhotoCard;
