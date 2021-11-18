import React, { useEffect } from "react";
import "./styles/FlipCard.css";

export const FlipCard = () => {
  const cards = new Array(8).fill().map((_, idx) => idx + 1);
  const images = [
    "https://user-images.githubusercontent.com/45379812/142275222-d918f25b-146b-4a20-b5f6-100b1208044b.png",
    "https://user-images.githubusercontent.com/45379812/142275227-a2898900-4a61-4aab-b024-f93605f38c45.png",
    "https://user-images.githubusercontent.com/45379812/142275231-ecb537c6-7eac-4f00-85ff-bb4ef320e994.png",
    "https://user-images.githubusercontent.com/45379812/142275224-d0263333-b8ef-4a6e-89b4-5aa4038281ea.png",
  ];

  useEffect(() => {
    const frontCards = document.querySelectorAll(".card_front");
    const backCards = document.querySelectorAll(".card_back");
    const durations = new Array(frontCards.length)
      .fill()
      .map((_) => Math.floor(Math.random() * 6) + 2);

    frontCards.forEach(
      (card, idx) =>
        (card.style.animation = `flipfront ${durations[idx]}s ${idx}s infinite`)
    );
    backCards.forEach(
      (card, idx) =>
        (card.style.animation = `flipback ${durations[idx]}s ${idx}s infinite`)
    );
  }, []);

  return (
    <div className="flip_card">
      {cards.map((number, idx) => (
        <div className="card" key={`card${idx}`}>
          <div className="card_front" key={`card${idx}`}>
            <img src={images[number % 4]} alt="Back" />
          </div>
          <div className="card_back" key={`card${idx}`}>
            <img
              src="https://user-images.githubusercontent.com/45379812/142275218-632829c3-915c-4de1-8a23-b09cb7d4cb86.png"
              alt="Back"
            />
          </div>
        </div>
      ))}
    </div>
  );
};
