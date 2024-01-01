import { FC, useState } from "react";
import "./styles.css";
import SharkButton from "../SharkButton";

export interface BookType extends React.HTMLProps<HTMLDivElement> {
  nameCover:string;
  handleClick: () => void
}

const Book:FC<BookType> = ({nameCover,children, handleClick}) => {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  return (
    <div className="book-container">
      <div className={`book ${flipped ? "flipped" : ""}`} onMouseEnter={handleFlip} onMouseLeave={handleFlip}>
        <div className="front-cover">
          <h1 className="name">{nameCover}</h1>
        </div>
        <div className="back-cover">
          <div className="introduce">{children}</div>
          <SharkButton text="前往" onClick={handleClick}/>
        </div>
      </div>
    </div>
  );
}

export default Book;