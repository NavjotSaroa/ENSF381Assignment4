// src/components/HomeMainSection.js
import React, { useState, useEffect } from 'react';
import reviews from '../data/reviews';

function HomeMainSection() {
  const [randomReviews, setRandomReviews] = useState([]);

  useEffect(() => {
    const getRandomReviews = () => {
      const shuffled = reviews.sort(() => 0.5 - Math.random());
      setRandomReviews(shuffled.slice(0, 2));
    };
    getRandomReviews();
  }, []);

  return (
    <main>
      <section>
        <h2>About Us</h2>
        <p>Welcome to our online store! We strive to provide the best products to you at the most competitive prices!</p>
        <button onClick={() => window.location.href = '/products'}>Shop Now</button>
      </section>
      <section>
        <h2>Customer Reviews</h2>
        {randomReviews.map((review, index) => (
          <div key={index}>
            <h3>{review.customerName}</h3>
            <p>{review.reviewContent}</p>
            <p>{'⭐'.repeat(review.stars)}</p>
          </div>
        ))}
      </section>
    </main>
  );
}

export default HomeMainSection;
