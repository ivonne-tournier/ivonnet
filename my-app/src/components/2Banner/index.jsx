import React from 'react'
import logo from "../Img/logo.jpeg"

const Banner = () => {
  return (
        <div id='nosotros' className="flex flex-row flex-wrap items-center justify-center w-full font-serif text-justify bg-violet-200 h-100">
      <ul className="w-1/2 m-4">
        <dt className="pb-4 text-xl">
          <strong>¿Quiénes somos?</strong>
        </dt>
        <li className="flex flex-row pb-5 ">
          Salón La Giralda By Ivonnet nació en el año 2018 con el propósito de ayudar a mejorar la autopercepción de las
          personas a partir de la salud y la estética capilar.
        </li>
        <li className="flex flex-row pb-5">
          Optimizamos y empleamos técnicas de satisfacción en la experiencia de usuario para mejorar su comodidad con nosotros.
        </li>
        <li className="flex flex-row pb-5">
          Nuestra misión es obtener la imagen deseada por nuestros clientes, fortaleciendo su autoestima y logrando autoafirmación.
        </li>
        <li>
        <button className="w-20 h-6 rounded bg-violet-500 sm:ease-in-out sm:delay-80 sm:hover:-translate-y-1 sm:hover:scale-110 sm:hover:bg-blend-hard-light sm:duration-300"><a target="blank" href=""> Leer más</a></button>
        </li>
      </ul>
      <ul>
        <li className="flex flex-wrap pl-10 m-2 w-50 h-100">
          <img className='w-96 h-96' src={logo} alt="logo" />
        </li>
      </ul>
    </div>
  )
}

export default Banner