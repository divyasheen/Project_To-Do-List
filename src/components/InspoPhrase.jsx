import { useState, useEffect } from "react";
import "./InspoPhrase.css";

function InspoPhrase() {
  const [phrase, setPhrase] = useState({});

  useEffect(() => {
    fetch("https://dummyjson.com/quotes")
      .then((resp) => resp.json())
      .then((data) => setPhrase(data))
      .catch((error) => console.log(error.message));
  }, []);

  const randomQuote =
    phrase.quotes?.[Math.floor(Math.random() * phrase.quotes.length)];

  return (
    <div className="inspo-box">
      {randomQuote && (
        <div className ="inspoPhrase" key={randomQuote.id}>
          <h4>&quot;{randomQuote.quote}&quot;</h4>
          <p>{randomQuote.author}</p>
        </div>
      )}
    </div>
  );
}

export default InspoPhrase;
