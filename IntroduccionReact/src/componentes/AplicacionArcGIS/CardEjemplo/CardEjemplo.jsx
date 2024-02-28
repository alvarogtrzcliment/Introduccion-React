import './CardEjemplo.css'

// eslint-disable-next-line react/prop-types
function CardEjemplo({ linkImagen, titulo, descripcion, enlace }) {

  return (
    <div className='CardEjemplo'>
      <img src={linkImagen} alt="Imagen del ejemplo" />
      <h3>{titulo}</h3>
      <p>{descripcion}</p>
      <a href={enlace}>Enlace del Ejemplo</a>
    </div>
  );
}

export default CardEjemplo

