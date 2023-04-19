import React from 'react'
import Link from 'next/Link';
import { useRouter } from 'next/router';
import styles from '../assets/styles/main/Card.module.scss'


// import styles from '/styles/Card.module.scss'
 const ProductCard = ({ id, title, price, category, description, image, rating }) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/${category}/${id}`);
  };
    return (
      <div className={styles.card}>
        <img src={image} alt={title} />
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className="card-text">{description}</p>
          <p className="card-text">Price: ${price}</p>
          <p className="card-text">Category: {category}</p>
          <p className="card-text">Rating: {rating.rate} ({rating.count} reviews)</p>
          <button onClick={handleClick}>View details</button>
        </div>
      </div>
    );
  };
export default ProductCard;
