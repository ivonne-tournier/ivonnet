import logo from "../Img/logo.jpeg"

const footer = () => {
  return (
    <div className="flex flex-wrap justify-center w-full h-full bg-violet-200 font-calibri">
      <a href="www.numenstore.com"> <img className="pt-4 m-10 h-52 w-52" src={logo} alt="Logo Numen Store" /></a>
      <ul className="flex flex-col justify-center h-64 text-left w-72">
        <dt className="">
          <strong>CONTACTANOS </strong>
        </dt>
        <li><a target="blank" href="https://api.whatsapp.com/send?phone=541128060400"> Whatsapp </a></li>
        <li><a target="blank" href="https://www.instagram.com/salonlagiraldabyivonnet/?hl=es">Instagram</a></li>
      </ul>
      <ul className="flex flex-col justify-center h-64 pt-10 text-justify w-72 ">
        <dt className="">
          <strong>SERVICIOS</strong>
        </dt>
        <li> <a target="blank" href="">Peinados </a> </li>
        <li> <a target="blank" href="">Alisados </a> </li>
        <li> <a target="blank" href="">Permanentes </a> </li>
        <li> <a target="blank" href="">Nails </a> </li>
        <li> <a target="blank" href="">Cortes</a> </li>
   
        
      </ul>
      <ul className="flex flex-col justify-center h-64 pb-5 text-left w-72 ">
        <dt className="">
          <strong> INFORMACIÓN</strong>
        </dt>
        <li> <a href="">Promociones</a> </li>
        <li> <a target="blank" href="">Sucursales</a> </li>
        <li> <a target="blank" href="">Medios de Pago</a> </li>
      </ul>
    </div>
  );
};

export default footer;
