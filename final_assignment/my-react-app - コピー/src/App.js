import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [targetText, setTargetText] = useState("");
  const [correctChars, setCorrectChars] = useState(0);
  const [incorrectChars, setIncorrectChars] = useState(0);
  const [totalCorrectChars, setTotalCorrectChars] = useState(0);
  const [totalIncorrectChars, setTotalIncorrectChars] = useState(0);
  const [topics, setTopics] = useState([]);
  const [currentTopicIndex, setCurrentTopicIndex] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);

  useEffect(() => {
    fetch("/topics.json")
      .then((response) => response.json())
      .then((data) => {
        setTopics(data.topics);
        setTargetText(data.topics[0]);
        setStartTime(new Date());
      });
  }, []);

  useEffect(() => {
    let correctCount = 0;
    let incorrectCount = 0;
    for (let i = 0; i < text.length; i++) {
      if (text[i] === targetText[i]) {
        correctCount++;
      } else {
        incorrectCount++;
      }
    }
    setCorrectChars(correctCount);
    setIncorrectChars(incorrectCount);
  }, [text, targetText]);

  const handleChange = (e) => {
    const inputText = e.target.value;
    let correctCount = 0;
    let incorrectCount = 0;
    for (let i = 0; i < inputText.length; i++) {
      if (inputText[i] === targetText[i]) {
        correctCount++;
      } else {
        incorrectCount++;
      }
    }
    setText(inputText);
    setCorrectChars(correctCount);
    setIncorrectChars(incorrectCount);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && text === targetText) {
      setTotalCorrectChars(totalCorrectChars + correctChars);
      setTotalIncorrectChars(totalIncorrectChars + incorrectChars);
      if (currentTopicIndex + 1 === topics.length) {
        setCompleted(true);
        setEndTime(new Date());
      } else {
        const nextIndex = (currentTopicIndex + 1) % topics.length;
        setCurrentTopicIndex(nextIndex);
        setTargetText(topics[nextIndex]);
        setText("");
        setCorrectChars(0);
        setIncorrectChars(0);
      }
    }
  };

  const handleRetry = () => {
    setCurrentTopicIndex(0);
    setTargetText(topics[0]);
    setText("");
    setCorrectChars(0);
    setIncorrectChars(0);
    setTotalCorrectChars(0);
    setTotalIncorrectChars(0);
    setCompleted(false);
    setStartTime(new Date());
    setEndTime(null);
  };

  const getElapsedTime = () => {
    if (startTime && endTime) {
      const elapsed = (endTime - startTime) / 1000; // 秒単位
      return `${elapsed} 秒`;
    }
    return "";
  };

  const getAccuracy = () => {
    const totalChars = totalCorrectChars + totalIncorrectChars;
    if (totalChars === 0) return "0%";
    const accuracy = (totalCorrectChars / totalChars) * 100;
    return `${accuracy.toFixed(2)}%`;
  };

  const getNextKey = () => {
    if (text.length < targetText.length) {
      return targetText[text.length];
    }
    return null;
  };

  const Keyboard = ({ nextKey }) => {
    const rows = [
      ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "^", "\\"],
      ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "@", "["],
      ["a", "s", "d", "f", "g", "h", "j", "k", "l", ";", ":", "]"],
      ["Shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/"],
      [" "],
    ];
    return (
      <div className="keyboard">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="keyboard-row">
            {row.map((key) => (
              <span
                key={key}
                className={`key ${
                  key.toLowerCase() === nextKey?.toLowerCase() ||
                  (key === "Shift" &&
                    nextKey?.toUpperCase() === nextKey &&
                    nextKey !== " ")
                    ? "highlight"
                    : ""
                }`}
              >
                {key}
              </span>
            ))}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        {completed ? (
          <div>
            <p>すべての問題を完了しました！</p>
            <p>かかった時間: {getElapsedTime()}</p>
            <p>正答率: {getAccuracy()}</p>
            <p>総タイプ数: {totalCorrectChars + totalIncorrectChars}</p>
            <p>総正解タイプ数: {totalCorrectChars}</p>
            <p>総誤タイプ数: {totalIncorrectChars}</p>
            <button onClick={handleRetry}>リトライ</button>
          </div>
        ) : (
          <div>
            <p>以下のテキストを入力してください:</p>
            <p className="target-text">{targetText}</p>
            <input
              type="text"
              value={text}
              onChange={handleChange}
              onKeyPress={handleKeyPress}
              className="typing-input"
            />
            <p>正しい文字数: {correctChars}</p>
            <p>間違った文字数: {incorrectChars}</p>
          </div>
        )}
      </header>
      {!completed && <Keyboard nextKey={getNextKey()} />}
    </div>
  );
}

export default App;
