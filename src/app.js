import React, { useState } from "react";
import "./styles.css";

var emojiDB = {
  "😀": "Happy Face",
  "😁": "Grining Face",
  "😍": "Heart Eyes",
  "😊": "Smiling Face",
  "😳": "Astonished",
  "😔": "Sad",
  "🥡": "Takeout box",
  "❤️": "Heart"
};

var emojisWeKnow = Object.keys(emojiDB);

console.log(emojisWeKnow);

export default function App() {
  var [meaning, setMeaning] = useState("");

  // Emoji Input Handler -- when user enters emoji in IP box.
  function emojiInputHandler(event) {
    // console.log(event.target.value);

    var userInput = event.target.value;
    var meaning = emojiDB[userInput];

    if (meaning === undefined) {
      meaning = "We don't have this in our DB";
    }
    setMeaning(meaning);
  }

  // On Screen Emoji Click Handler
  function emojiClickEventHandler(emojis) {
    // console.log("Clicked!" + emojis);

    var meaning = emojiDB[emojis];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Inside Out</h1>

      {/* Input Box for Emojis */}
      <input onChange={emojiInputHandler} />

      {/* To Print the meaning */}
      <h2> {meaning} </h2>

      {/* //Show emojis using List and map function*/}
      <div style={{ padding: "2rem" }}>
        {emojisWeKnow.map(function (emojis) {
          return (
            <span
              key={emojis}
              style={{ padding: "1rem", font: "larger" }}
              onClick={() => emojiClickEventHandler(emojis)}
            >
              {emojis}
            </span>
          );
        })}
      </div>
    </div>
  );
}
