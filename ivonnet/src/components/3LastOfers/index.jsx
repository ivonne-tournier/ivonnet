import React from 'react'
import peinado from "../Img/peinado.jpg"
import corte3 from "../Img/corte3.jpg"
import tintura1 from "../Img/tintura1.jpg"
import alisado1 from "../Img/alisado1.jpg"
import pedicuria1 from "../Img/pedicuria 1.jpg"
import permanente1 from "../Img/permanente1.jpg"
import manicura from "../Img/manicura.jpg"
import pestañas2 from "../Img/pestañas2.jpg"
import depilacion3 from "../Img/depilacion3.jpg"


const LastOfers = () => {
  return (
        <div className="flex flex-wrap items-center justify-center w-full h-auto p-6 space-x-10 space-y-2 font-serif bg-violet-100">
        <p className="flex items-center justify-center w-full mb-2 text-xl bg-violet-100 font-calibri h-30">
        <strong>¡Nuestro trabajo!</strong>
      </p>
        
        <ul className="bg-violet-200 font-calibri rounded-2xl w-50 h-70 ">
          <li>
            <img
              src={peinado}
              alt="Imagen"
              className="h-40 p-2 w-45"
            />
          </li>
          <li className="m-2 font-bold text-center bg-violet-300 ">
            Peinados
          </li>
          
        </ul>


        <ul className="bg-violet-200 font-calibri rounded-2xl w-50 h-70">
          <li>
            <img
              src={corte3}
              alt="imagen"
              className="h-40 p-2 w-45"
            />
          </li>
          <li className="m-2 font-bold text-center bg-violet-300 ">
            Cortes 
          </li>
          
        </ul>


        <ul className="bg-violet-200 font-calibri rounded-2xl w-50 h-70">
          <li>
            <img
              src={tintura1}
              alt="Imagen "
              className="h-40 p-2 w-45"
            />
          </li>
          <li className="m-2 font-bold text-center bg-violet-300">
            Coloracion
          </li>
        </ul>


        <ul className="bg-violet-200 font-calibri rounded-2xl w-50 h-70">
          <li>
            <img
              src={alisado1}
              alt="Imagen "
              className="h-40 p-2 w-45"
            />
          </li>
          <li className="m-2 font-bold text-center bg-violet-300">
            Alisados
          </li>
          
        </ul>


        <ul className="bg-violet-200 font-calibri rounded-2xl w-50 h-70">
          <li>
            <img
              src={permanente1}
              alt="Imagen "
              className="h-40 p-2 w-45"
            />
          </li>
          <li className="m-2 font-bold text-center bg-violet-300">
            Permanentes 
          </li>
          
        </ul>


        <ul className="bg-violet-200 font-calibri rounded-2xl w-50 h-70">
          <li>
            <img
              src={pestañas2}
              alt="Imagen "
              className="h-40 p-2 w-45"
            />
          </li>
          <li className="m-2 font-bold text-center bg-violet-300">
            Pestañas pelo por pelo
          </li>
        </ul>


        <ul className="bg-violet-200 font-calibri rounded-2xl w-50 h-70">
          <li>
            <img
              src={depilacion3}
              alt="Imagen "
              className="h-40 p-2 w-45"
            />
          </li>
          <li className="m-2 font-bold text-center bg-violet-300">
            Depilacion
          </li>
        </ul>


        <ul className="bg-violet-200 font-calibri rounded-2xl w-50 h-70">
          <li>
            <img
              src={manicura}
              alt="Imagen "
              className="h-40 p-2 w-45"
            />
          </li>
          <li className="m-2 font-bold text-center bg-violet-300">
            Manicuria 
          </li>
        </ul>


        <ul className="bg-violet-200 font-calibri rounded-2xl w-50 h-70">
          <li>
            <img
              src={pedicuria1}
              alt="Imagen "
              className="h-40 p-2 w-45"
            />
          </li>
          <li className="m-2 font-bold text-center bg-violet-300">
            Pedicuria
          </li>
        </ul>
      </div>
  )
}

export default LastOfers