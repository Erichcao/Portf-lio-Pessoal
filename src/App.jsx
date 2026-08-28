const experiences = [
    {
        year: 'Jan. 2026 — atual',
        title: 'HIIVE Lab',
        description:
            'Bolsista · Assistente de Engenharia e Operações: desenvolvo atividades voltadas à gestão, organização de processos, gestão de equipamentos e suporte a projetos industriais, integrando tecnologia e administração na prática.',
        image: '/img/hiive-lab.png',
        alt: 'Logo HIIVE Lab'
    },
    {
        year: 'Dez. 2024 - Dez. 2025',
        title: 'Clube de Programação',
        description:
            'Participação em projetos, programação e atividades voltadas à tecnologia no SENAI CIMATEC. Criação e gestão de eventos, processos seletivos e organizações gerais.',
        image: '/img/clube-programacao.png',
        alt: 'Logo Clube de Programação'
    },
    {
        year: 'Nov. 2024 - Atual',
        title: 'CIMATEC Falcons',
        description:
            'Participação nas atividades esportivas, criação de eventos, gestão de pessoal e processos, valorização da cultura geek, administração da iniciativa como um todo.',
        image: '/img/cimatec-falcons.png',
        alt: 'Logo CIMATEC Falcons'
    }
]


const interests = [
    {
        title: 'Gestão',
        description:
            'Gerenciamento e organização de processos e pessoas.'
    },
    {
        title: 'Tecnologia',
        description:
            'Novas ferramentas, ideias e possibilidades.'
    },
    {
        title: 'Aplicação na Prática',
        description:
            'Tecnologias aplicadas a problemas reais.'
    },
    {
        title: 'Games / Cultura Nerd',
        description:
            'O meu mundinho pessoal, onde me apaixonei desde criança e sempre alimento essa paixão com conhecimento e alegria.'
    }
]


const contacts = [
    {
        title: 'Telefone',
        value: '(71) 99726-5626',
        link: 'tel:+5571997265626'
    },
    {
        title: 'GitHub',
        value: 'github.com/Erichcao',
        link: 'https://github.com/Erichcao'
    },
    {
        title: 'LinkedIn',
        value: 'Eric Carneiro',
        link: 'https://www.linkedin.com/in/eric-carneiro-1a18522b7/'
    }
]


function App() {

    return (
        <>
            <header>
                <div className="container nav">

                    <a href="#inicio" className="logo">
                        EC
                    </a>

                    <nav>
                        <a href="#sobre">Sobre</a>
                        <a href="#experiencias">Experiências</a>
                        <a href="#interesses">Interesses</a>
                        <a href="#contato">Contato</a>
                    </nav>

                </div>
            </header>


            <main>

                {/* INÍCIO */}

                <section id="inicio" className="hero">

                    <div className="container hero-content">

                        <div className="hero-text">

                            <p className="subtitle">
                                ENGENHARIA DA COMPUTAÇÃO
                            </p>

                            <h1>
                                Eric
                                <br />
                                <span>Carneiro</span>
                            </h1>

                            <p>
                                Estudante de Engenharia da Computação no
                                SENAI CIMATEC, interessado em tecnologia,
                                gestão e criação criativa e eficiente de
                                soluções.
                            </p>

                            <a href="#sobre" className="button">
                                Saiba mais
                            </a>

                        </div>


                        <div className="profile">

                            <img
                                src="/img/japa.jpeg"
                                alt="Eric Carneiro"
                            />

                        </div>

                    </div>

                </section>


                {/* SOBRE */}

                <section id="sobre" className="section">

                    <div className="container">

                        <div className="title">

                            <span>01</span>

                            <h2>
                                Sobre
                            </h2>

                        </div>


                        <div className="about">

                            <p>
                                Sou estudante de Engenharia da Computação
                                no SENAI CIMATEC e gosto de aprender
                                colocando as coisas em prática, com
                                autenticidade e qualidade.
                            </p>

                            <p>
                                Tenho interesse por tecnologias, gestão de
                                processos e pessoas e novos aprendizados.
                                Também gosto de trabalhar em equipe, criar
                                projetos e conhecer novas ideias, sempre
                                utilizando da comunicação como principal
                                pilar.
                            </p>

                        </div>

                    </div>

                </section>


                {/* EXPERIÊNCIAS */}

                <section
                    id="experiencias"
                    className="section gray"
                >

                    <div className="container">

                        <div className="title">

                            <span>02</span>

                            <h2>
                                Experiências
                            </h2>

                        </div>


                        <div className="experiences">

                            {experiences.map((experience) => (

                                <article key={experience.title}>

                                    <span>
                                        {experience.year}
                                    </span>


                                    <div className="experience-content">

                                        <div className="experience-logo">

                                            <img
                                                src={experience.image}
                                                alt={experience.alt}
                                            />

                                        </div>


                                        <div>

                                            <h3>
                                                {experience.title}
                                            </h3>

                                            <p>
                                                {experience.description}
                                            </p>

                                        </div>

                                    </div>

                                </article>

                            ))}

                        </div>

                    </div>

                </section>


                {/* INTERESSES */}

                <section
                    id="interesses"
                    className="section"
                >

                    <div className="container">

                        <div className="title">

                            <span>03</span>

                            <h2>
                                Interesses
                            </h2>

                        </div>


                        <div className="interests">

                            {interests.map((interest) => (

                                <div key={interest.title}>

                                    <h3>
                                        {interest.title}
                                    </h3>

                                    <p>
                                        {interest.description}
                                    </p>

                                </div>

                            ))}

                        </div>


                        <div className="personal">

                            <p>
                                Fora da faculdade e do trabalho, gosto de
                                jogar, assistir filmes e séries e passar
                                tempo com pessoas importantes para mim.
                                Me considero uma pessoa criativa, leal,
                                respeitosa e curiosa, e que valoriza muito
                                a comunicação.
                            </p>

                        </div>

                    </div>

                </section>


                {/* CONTATO */}

                <section
                    id="contato"
                    className="contact-section"
                >

                    <div className="container">

                        <div className="title">

                            <span>04</span>

                            <h2>
                                Contato
                            </h2>

                        </div>


                        <div className="contact-grid">

                            <div className="contact-text">

                                <p>
                                    Quer conversar, trocar uma ideia ou
                                    conhecer mais sobre mim? Entre em
                                    contato.
                                </p>

                            </div>


                            <div className="contact-links">

                                {contacts.map((contact) => (

                                    <a
                                        key={contact.title}
                                        href={contact.link}
                                        target="_blank"
                                        rel="noreferrer"
                                    >

                                        <span>
                                            {contact.title}
                                        </span>

                                        <strong>
                                            {contact.value}
                                        </strong>

                                    </a>

                                ))}

                            </div>

                        </div>

                    </div>

                </section>

            </main>


            {/* FOOTER */}

            <footer>

                <div className="container">

                    <p>
                        Eric Borges Carneiro · Engenharia da Computação ·
                        SENAI CIMATEC
                    </p>

                </div>

            </footer>
        </>
    )
}


export default App