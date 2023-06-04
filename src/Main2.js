import React from 'react'
import Img1 from "./r4.jpg";
import Img2 from "./r9.jpg";
import Mainpage from './Mainpage';
import { useSelector } from 'react-redux';

import Img3 from "./r5.jpg";
import Img4 from "./r12.jpg";
import Img5 from "./r8.jpg";
import Img6 from "./r13.jpg";

export default function Main2() {
    var state=useSelector(state=>state);
  var imgs = [Img1, Img4, Img3, Img2, Img5, Img6];
    
  return (
    <>
      <div id="tranp">

        <img id='insideimg' src={`${imgs[state]}`} style={{width:"100%",height:"100%",transition:"all .5s"}}/>
      </div>
      <div id="tran2">
        <Mainpage />
      </div>
    </>
  );
}
