import React, { useState, useEffect } from "react";
import "./TinderCard.css";
import TinderCard from "react-tinder-card";
import databse from "../../firebase";

export default function TInderCard() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const unsubscribe = databse
      .collection("people")
      .onSnapshot((snapshot) =>
        setPeople(snapshot.docs.map((person) => person.data()))
      );
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <div>
      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}
