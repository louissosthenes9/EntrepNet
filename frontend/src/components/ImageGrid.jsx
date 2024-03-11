import React from "react";
import { images } from "../libs/constants";
import Image from "next/image";
export default function ImageGrid() {
  return (
    <div className="grid grid-cols-2">
      
        {images.map((imageObj,index) => (
         <div 
           
           key={imageObj.name}>
           <Image
              src={imageObj.src}
              width={150}
              height={150}
              alt={imageObj.name}
            />
         </div>
           
         
        ))}
    
    </div>
  );
}
