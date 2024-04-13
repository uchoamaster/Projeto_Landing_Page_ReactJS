import './Main.css';


function Main(){
    return(
        <main>
        <section className='box-titulo'>
          <h1>Horadev</h1>
          <p>Trabalhando com ReactJS, é uma Biblioteca Javascript para criar SPAs</p>
          <a href='https://reactjs.org/' target='_blank'>Site Oficial</a>
        </section>
        <section className='box-requisitos'>
          <h2>Requisitos</h2>
          <p>Veja abaixo os requisitos mínimos para aprender React JS:</p>
          <div className='box-cards'>
            <div className='card'>
              <h3>HTML</h3>
              <p>Aprender a estrutura os elementos da página com HTML</p>
            </div>
            <div className='card'>
              <h3>CSS</h3>
              <p>Aprender a estilizar os elementos da página com CSS</p>
            </div>
            <div className='card'>
              <h3>Javascript</h3>
              <p>Aprender a linguagem utilizada pelo REACT JS, o Javascript</p>
            </div>
          </div>
        </section>
      </main>
    );
}

export default Main;