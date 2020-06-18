import React, { useState } from "react";
import CarModel from "./CarModel";

const Room = () => {
  const [xCamera, setXCamera] = useState(5);
  const [yCamera, setYCamera] = useState(3);
  const [zCamera, setZCamera] = useState(1);

  return (
    <div className="room">
      <div className="room__menu">
        <div className="car__container">
          <div className="car__type">
            <img
              src={require("./assets/images/supercars/lambo.jpg")}
              alt="lambo"
            />
          </div>
          <span className="car__modal">Lambo</span>
        </div>
      </div>
      {/* <div className="room__inputs">
        <input
          type="range"
          name="xCamera"
          value={xCamera}
          onChange={(e) => setXCamera(e.target.value)}
        />
        <input
          type="range"
          name="yCamera"
          value={yCamera}
          onChange={(e) => setYCamera(e.target.value)}
        />
        <input
          type="range"
          name="zCamera"
          value={zCamera}
          onChange={(e) => setZCamera(e.target.value)}
        />
      </div> */}
      {/* <div className="scene"></div> */}
      {/* <CarModel xCamera={xCamera} yCamera={yCamera} zCamera={zCamera} /> */}
      <CarModel />
      <div className="room__msg">
        <p>
          This is a demo room for a 3d model, this is just to showcase my skill
          with working with libararies, use the mouse to interact with the car
        </p>
      </div>
    </div>
  );
};

export default Room;
