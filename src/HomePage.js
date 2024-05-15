import React from 'react';
import './HomePage.css';

function HomePage() {
  // Define an array with the words to be repeated
  const words = ["Avani", "Treat"];
  
  // Define the number of repetitions for each word
  const repetitions = 50; // You can adjust this number as needed
  
  // Generate an array of repeated words
  const repeatedWords = [];
  words.forEach(word => {
    for (let i = 0; i < repetitions; i++) {
      repeatedWords.push(word);
    }
  });

  return (
    <div className="home-page">
      {repeatedWords.map((word, index) => (
        <div key={index} className="word">{word}</div>
      ))}
    </div>
  );
}

export default HomePage;
