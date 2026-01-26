import { useState } from "react";
function FlipCard({ front, back }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="flip-card w-[400px] cursor-pointer"

onMouseEnter={() => setFlipped(true)}
onMouseLeave={() => setFlipped(false)}    >
      <div className={`flip-inner relative ${flipped ? "flipped" : ""}`}>

        {/* FRONT */}
        <div className="flip-face">
          {front}
        </div>

        {/* BACK */}
        <div className="flip-face flip-back absolute inset-0">
          {back}
        </div>

      </div>
    </div>
  );
}


export { FlipCard };

