import CardProjeto from "./CardProjeto";

function Projetos() {
  const projetos = [
    {
      id: 1,
      titulo: "Portfólio Pessoal",
      descricao:
        "Site desenvolvido para apresentar meu perfil, habilidades e projetos.",
      tecnologia: "React + Vite"
    },
    {
      id: 2,
      titulo: "Page Pelo App",
      descricao:
        "Projeto acadêmico da Trilha Empreendedor voltado à otimização e eficiência de gestão de filas e tempo em restaurantes buffet.",
      tecnologia: "HTML + CSS + JavaScript"
    },
    {
      id: 3,
      titulo: "Projeto de IoT",
      descricao:
        "Projeto acadêmico utilizando Internet das Coisas para monitoramento e automação.",
      tecnologia: "ESP32 + IoT"
    }
  ];

  return (
    <section
      className="section gray"
      id="projetos"
    >
      <div className="container">

        <div className="title">

          <span>03</span>

          <h2>
            Meus Projetos
          </h2>

        </div>

        <div className="lista-projetos">

          {projetos.map((projeto) => (

            <CardProjeto
              key={projeto.id}
              titulo={projeto.titulo}
              descricao={projeto.descricao}
              tecnologia={projeto.tecnologia}
            />

          ))}

        </div>

      </div>
    </section>
  );
}

export default Projetos;