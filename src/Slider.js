import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {Increament,Decreament} from "../src/redux/actions.js";
import Img from "../src/r2.jpg";
import Img2 from "../src/r11.jpg";
import Img3 from "../src/r14.jpg";
import Img4 from "../src/r6.jpg";
import Img5 from "../src/r7.jpg";


export default function Slider() {

    const state=useSelector(state=>state);
    console.log(state);
    const dispatch=useDispatch();

  return (
    <div id="slider">
      <div id="slides">
        <div
          style={{
            marginLeft: `-${40 * state}%`,
            height: state === 0 ? "80%" : "70%",
          }}
          className="_1"
          id="same"
        >
          <img src={Img} style={{ width: "100%", height: "100%" }} />
        </div>
        <div
          style={{
            height: state === 1 ? "80%" : "70%",
          }}
          id="same"
        >
          <img src={Img3} style={{ width: "100%", height: "100%" }} />
        </div>
        <div
          style={{
            height: state === 2 ? "80%" : "70%",
          }}
          id="same"
        >
          <img src={Img2} style={{ width: "100%", height: "100%" }} />
        </div>
        <div
          style={{
            height: state === 3 ? "80%" : "70%",
          }}
          id="same"
        >
          <img src={Img4} style={{ width: "100%", height: "100%" }} />
        </div>
        <div
          style={{
            height: state === 4 ? "80%" : "70%",
          }}
          id="same"
        >
          <img src={Img5} style={{ width: "100%", height: "100%" }} />
        </div>
        <div
          style={{
            height: state === 5 ? "80%" : "70%",
          }}
          id="same0"
        >
          Sorry Slides is over
          {/* <img src={Img5} style={{ width: "100%", height: "100%" }} /> */}
        </div>
      </div>
      <div id="btns">
        <button
          id="btnsame"
          onClick={() => {
            dispatch(Decreament);
          }}
        >
          x
        </button>
        <button
          id="btnsame"
          onClick={() => {
            dispatch(Increament);
          }}
        >
          y
        </button>
      </div>
    </div>
  );
}
