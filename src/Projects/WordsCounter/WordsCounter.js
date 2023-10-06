import React, { useState } from "react";
import "../../App.css";
import "./WordsCounter.css";

function WordsCounter() {
  const [text, setText] = useState("");

  const numberOfWords = (text) => {
    return text ? text.match(/\b\w+\b/g).length : 0;
  };

  const numberOfParagraphs = (text) => {
    return text
      ? text.split(/\n+/).filter((paragraph) => paragraph.trim() !== "").length
      : 0;
  };
  const numberOfSentences = (text) => {
    return text ? text.match(/([.!?]["']?\s|$)/g).length : 0;
  };
  return (
    <div className="body_container">
      <div className="project_title">
        <p>Words counter</p>
      </div>
      <div className="project_word_counter">
        <textarea value={text} onChange={(e) => setText(e.target.value)} />
        <div>
          <p>
            Number of words <span>{numberOfWords(text)}</span>
          </p>
          <p>
            Number of paragraph <span>{numberOfParagraphs(text)}</span>
          </p>
          <p>
            Number of sentences <span>{numberOfSentences(text)}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default WordsCounter;
