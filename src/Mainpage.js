import React, { useEffect } from 'react'
import Slider from "./Slider";
import Img1 from "./r4.jpg";
import Img2 from "./r9.jpg";

import Img3 from "./r10.jpg";
import Img4 from "./r12.jpg";
import Img5 from "./r8.jpg";
import Img6 from "./r13.jpg";
import { Increament,Decreament } from './redux/actions';
import { useDispatch, useSelector } from 'react-redux';
export default function Mainpage() {
  var li_ = [1, 2, 3, 4, 5];
  // var imgs = [Img1, Img2, Img3, Img4, Img5, Img6];
  var state=useSelector(state=>state);
  var dispatch=useDispatch();
  return (
    <div onKeyDown={(e)=>{
      console.log(e.key);
      if (e.key==="ArrowRight"){
        dispatch(Increament);
      }
      else if (e.key === "ArrowLeft") {
        dispatch(Decreament);
      }
    }} className="App">
      <div id="insidecontent">
        <div id="line">
          {li_.map((e, i) => {
            if (i != 4) {
              return (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    height: "20%",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  key={i}
                >
                  <div id="circle"> </div>
                  <div id="li_"></div>
                </div>
              );
            } else {
              return (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    height: "5%",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  key={i}
                >
                  <div proname={state}  id="circle"> </div>
                  {/* <div id="li_"></div> */}
                </div>
              );
            }
          })}
        </div>
        <div id="content">
          <h1 style={{ marginBottom: "20px" ,fontSize:"34px" }}>Lorem</h1>
          <p style={{ marginBottom: "20px" ,color:"white",fontSize:"18px"}}>
            As you now know, a blog often deals with a given topic and is
            updated with regular posts, mostly in the form of articles.
            Websites, however, are often broken down into inner explanatory
            pages, each with varying purposes. This can mean anything from an
            FAQ page to a welcoming homepage design. These pages are
            occasionally updated, making a website more static than a blog.
            Oftentimes websites have internal blogs, while other websites are
            entirely blogs without any additional pages. When blogs are a
            section of a larger website, the website provides the bulk of the
            information and uses a blog feature to keep users updated and
            engaged. For example
          </p>
          <button
            style={{
              width: "120px",
              height: "50px",
              background: "black",
              color: "white",
              fontSize: "22px",
              border: "none",
              borderRadius:"10px",
              outline: "none",
            }}
          >
            {" "}
            Click
          </button>
        </div>
        <Slider />
      </div>
    </div>
  );
}
