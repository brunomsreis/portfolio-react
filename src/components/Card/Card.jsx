import React from "react";
import styles from "./Card.module.css";

const Card = ({
  type,
  title,
  description,
  image,
  className,
  children,
}) => {
  let cardContent;

  if (type === "image") {
    cardContent = (
      <>
        <img src={image} alt={title} className={styles.cardImage} />
        <h2>{title}</h2>
        <p>{description}</p>
      </>
    );
  } else {
    cardContent = (
      <>
        <h2>{title}</h2>
        <p>{description}</p>
      </>
    );
  }

  return (
    <div className={`${styles.card} ${className}`}>
      {cardContent}
      {children}
    </div>
  );
};

export default Card;