function CardProjeto({ titulo, descricao, tecnologia }) {
  return (
    <article className="card-projeto">
      <h3>{titulo}</h3>

      <p>{descricao}</p>

      <span>{tecnologia}</span>
    </article>
  );
}

export default CardProjeto;