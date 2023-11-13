import { useState } from "react";
import "./styles.css";

function Book() {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  return (
    <div className="book-container">
      <div className={`book ${flipped ? "flipped" : ""}`} onClick={handleFlip}>
        <div className="front-cover">
          <h1>组件库</h1>
        </div>
        <div className="back-cover">
          <h1>一探究竟</h1>
        </div>
      </div>
    </div>
  );
}

export default Book;