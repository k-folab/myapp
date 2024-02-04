import React from "react";
import wordLogo from "../icons/word.svg";
import tomatoLogo from "../icons/tomato.svg";
import heartLogo from "../icons/heart.svg";

export default function End() {
  return (
    <div className="end">
      <div className="end-title">Featured Movie</div>
      <div className="cards">
        {/* first card */}
        <div>
          <div
            className="card-1"
            style={{
              backgroundImage: ` linear-gradient(0deg, rgba(0, 0, 0, 0.10) 0%, rgba(0, 0, 0, 0.50) 100%),  url(https://resizing.flixster.com/0xxuABVVuzJrUT130WFHKE-irEg=/ems.cHJkLWVtcy1hc3NldHMvdHZzZWFzb24vNzUyMTFhOTktZTU4Ni00ODkyLWJlYjQtZTgxYTllZmU2OGM0LmpwZw==)`,
              backgroundSize: `cover`,
              width: 260,
              height: 400,
            }}
          >
            <div className="nav-2">
              <div className="tv-series">TV SERIES</div>
              <div className="heart-logo">
                <img src={heartLogo} alt=""></img>
              </div>
            </div>
          </div>
          <div className="below">
            <p>USA, 2016 - Current</p>
            <h1>Stranger Things</h1>
            <div className="end-logos_wrap">
              <div className="end-logo_1">
                <img src={wordLogo} alt=""></img>
                <div>86.0 / 100</div>
              </div>
              <div className="end-logo_2">
                <img src={tomatoLogo} alt=""></img>
                <div>97%</div>
              </div>
            </div>
            <p>Action, Adventure, Horror</p>
          </div>
        </div>
        {/* first card end */}

        {/* second card */}
        <div>
          <div
            className="card-1"
            style={{
              backgroundImage: ` linear-gradient(0deg, rgba(0, 0, 0, 0.10) 0%, rgba(0, 0, 0, 0.50) 100%),  url(https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg)`,
              backgroundSize: `cover`,
              width: 260,
              height: 400,
            }}
          >
            <div className="nav-3">
              {/* <div className="tv-series">TV SERIES</div> */}
              <div className="heart-logo_2">
                <img src={heartLogo} alt=""></img>
              </div>
            </div>
          </div>
          <div className="below">
            <p>USA, 2005</p>
            <h1>Batman Begins</h1>
            <div className="end-logos_wrap">
              <div className="end-logo_1">
                <img src={wordLogo} alt=""></img>
                <div>82.0 / 100</div>
              </div>
              <div className="end-logo_2">
                <img src={tomatoLogo} alt=""></img>
                <div>70%</div>
              </div>
            </div>
            <p>Action, Adventure</p>
          </div>
        </div>
        {/* second card end */}
      </div>
    </div>
  );
}
