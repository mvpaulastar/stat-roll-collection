import { useEffect, useState } from "react";
import "./SpinningDice.css";
const SpinningDice = ({ statBlock }) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, [statBlock]);

  const className = `${animate ? "dice-animation" : ""}`;
  return (
    <div className="spinning-dice">
      <div
        class={className + " dice face1"}
        onAnimationEnd={() => setAnimate(false)}
      >
        <span className="dot"></span>
      </div>
      <div
        class={className + " dice face2"}
        onAnimationEnd={() => setAnimate(false)}
      >
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
      <div
        class={className + " dice face3"}
        onAnimationEnd={() => setAnimate(false)}
      >
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
      <div
        class={className + " dice face4"}
        onAnimationEnd={() => setAnimate(false)}
      >
        <div className="column">
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
        <div className="column">
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </div>
      <div
        class={className + " dice face5"}
        onAnimationEnd={() => setAnimate(false)}
      >
        <div className="column">
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
        <div className="column">
          <span className="dot"></span>
        </div>
        <div className="column">
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </div>
      <div
        class={className + " dice face6"}
        onAnimationEnd={() => setAnimate(false)}
      >
        <div className="column">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
        <div className="column">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </div>
    </div>
  );
};

export default SpinningDice;
