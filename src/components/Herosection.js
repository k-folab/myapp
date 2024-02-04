import React from "react";
import wordLogo from "../icons/word.svg";
import tomatoLogo from "../icons/tomato.svg";
import playLogo from "../icons/play.svg";

export default function Herosection() {
  return (
    <div className="hero">
      <div className="hero-1">
        John Wick 3 : <br /> Parabellum
      </div>
      <div className="hero-2">
        <div className="hero-2_first">
          <img src={wordLogo} alt=""></img>
          <div>86.0 / 100</div>
        </div>
        <div className="hero-2_second">
          <img src={tomatoLogo} alt=""></img>
          <div>97%</div>
        </div>
      </div>
      <div className="hero-3">
        <div className="story">
          John Wick is on the run after killing a member
          <br /> of the international assassins' guild, and with
          <br /> a $14 million price tag on his head, he is the
          <br /> target of hit men and women everywhere.
        </div>
      </div>
      <div className="hero-4">
        <div className="hero-4_first">
          <img src={playLogo} alt=""></img>
        </div>
        <div className="hero-4_second">WATCH TRAILER</div>
      </div>
    </div>
  );
}
