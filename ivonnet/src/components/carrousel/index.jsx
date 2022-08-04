import {useState} from 'react';
import { createRef } from 'react';
import { Component } from 'react';
import peinado from "../Img/peinado.jpg"
import peinado1 from "../Img/peinado1.jpg"
import peinado3 from "../Img/peinado3.jpg"

    const images = 
    [peinado , peinado1, peinado3, ]

    
    const Carousel = () => {
      const [currentImage, setCurrentImage] = useState(0);
      const refs = images.reduce((acc, val, i) => {
        acc[i] = createRef();
        return acc;
      }, {});
    
      const scrollToImage = i => {
        setCurrentImage(i);
        
        refs[i].current.scrollIntoView(images.length[0,1,2]
        // behavior: 'smooth', 
          // block: 'nearest',
          // inline: 'start',
        );
      };

      const nextImage = () => {
        if (currentImage >= images.length - 1) {
          scrollToImage(0);
        } else {
          scrollToImage(currentImage + 1);
        }
      };
    
      const previousImage = () => {
        if (currentImage === 0) {
          scrollToImage(images.length - 1);
        } else {
          scrollToImage(currentImage - 1);
        }
      };
    
      const arrowStyle =
        'absolute text-white text-2xl z-10 bg-black h-10 w-10 rounded-full opacity-75 flex items-center justify-center';
    
      const sliderControl = isLeft => (
        <button
          type="button"
          onClick={isLeft ? previousImage : nextImage}
          className={`${arrowStyle} ${isLeft ? 'left-2' : 'right-2'}`}
          style={{ top: '40%' }}
        >
          <span role="img" aria-label={`Arrow ${isLeft ? 'left' : 'right'}`}>
            {isLeft ? '◀' : '▶'}
          </span>
        </button>
      );
    
      return (
            <div>
              <div className="bg-violet-200 flex items-center justify-center w-full  p-12  md:w-100% h-58 " >
          <div className="relative w-50">
          <div className="flex flex-wrap items-center justify-center w-full h-auto p-6 space-x-4 space-y-2 font-serif bg-violet-200">
        <p className="flex items-center justify-center w-full mb-2 text-xl bg-violet-200 font-calibri h-30">
        <strong>¡ÚLTIMAS OFERTAS!</strong>
      </p>
        <ul className="w-40 bg-violet-200 font-calibri h-70">
          <li>
              {sliderControl(true)}
              <li className="inline-flex overflow-hidden snap-x mandatory">
              {images.map((img, i) => (
                <div className="inline-flex justify-center flex-shrink-0 m-4 border-4" key={img} ref={refs[i]}>
                  <img src={img} className="object-scale-down w-40 h-40" />
                </div>
              ))}
              {sliderControl()}
              </li>
          </li>
          <li className="m-2 font-bold text-center bg-violet-300 ">
            Peinados
          </li>
          <li>Variedad de estilos para que elijas</li>
        </ul></div>
              
            </div>
          </div>
          </div>
      );
    };
    
    

export default Carousel

