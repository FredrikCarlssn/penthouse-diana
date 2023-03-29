import penthouse from "../img/Penthouse.Diana.png";
import React from 'react';
import img_11 from "../img/IMG_11.mp4";


export function Home() {
  return (
    <div>
    <video src={img_11} autoPlay muted loop />
        <div className="blur">
    <img src={penthouse}></img>
    </div>
    </div>
  );
}

