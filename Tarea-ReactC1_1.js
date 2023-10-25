export function Tarjeta(props) {
    return (
      <div className="tarjeta">
        <img src={props.imagen} alt="Foto de perfil" className="tarjeta-img" />
        <div className="tarjeta-data">
          <header className="tarjeta-data-header">{props.nombre}</header>
          <span>{props.titulo}</span>
        </div>
      </div>
    );
  }

  export function BlogPost(props) {
    return (
      <article className="post">
        <header className="post-header">
          <h2 className="post-title">{props.titulo}</h2>
          <Tarjeta {...props.autor} />
        </header>
        {props.parrafos.split("\n").map((parrafo, i) => (
          <p className="post-paragraph" key={"post-paragraph" + i}>
            {parrafo}
          </p>
        ))}
      </article>
    );
  }