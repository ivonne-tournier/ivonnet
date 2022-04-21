import React from 'react'

const NavBar = () => {
  return (
    <div className=" font-serif ">
        <div className=' text-center flex flex-row p-10 bg-violet-400'>
          <h1 className='text-3xl'>Salón La Giralda By Ivonnet</h1>
        <a className='p-5' target="blanc" href="">Nosotros</a>
        <a className='p-5' target="blanc" href="">Sucursales</a>
        <a className='p-5' target="blanc" href="">Servicios</a>
        <a className='p-5' target="blanc" href="">Turnos</a>
        </div>
    </div>
  )
}

export default NavBar