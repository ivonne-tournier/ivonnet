import React from 'react'

const NavBar = () => {
  return (
    <div className="font-serif ">
        <div className='flex flex-row flex-wrap p-10 text-center bg-gradient-to-r from-pink-300 to-violet-500'>
          <h1 className='text-3xl '>Salón La Giralda By Ivonnet</h1>
        <a className='p-5 pl-20' target="blanc" href="#nosotros">Nosotros</a>
        <a className='p-5' target="blanc" href="">Sucursales</a>
        <a className='p-5' target="blanc" href="">Servicios</a>
        <a className='p-5' target="blanc" href="">Turnos</a>
        </div>
    </div>
  )
}

export default NavBar