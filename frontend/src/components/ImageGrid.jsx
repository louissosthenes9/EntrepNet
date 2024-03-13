import React from "react";
import { imageSet1, imageSet2 } from "../lib/constants";
import Image from "next/image";
export default function ImageGrid() {
  return (
    <>
    <div className=" relative">
    <div className="grid grid-cols-2">
        {imageSet1.map((imageObj) => (
          <Image
            key={imageObj.name}
            className= {`${imageObj.class} `}
            src={imageObj.src}
            width={150}
            height={150}
            alt={imageObj.name}
          />
        ))}
      </div>
      <div className="grid grid-cols-2 ">
        {imageSet2.map((imageObj) => (
          <Image
            key={imageObj.name}
            className= {`${imageObj.class} m-12`}
            src={imageObj.src}
            width={150}
            height={150}
            alt={imageObj.name}
          />
        ))}
      </div>
   
    </div>
 
     
   
    </>
  );
}
