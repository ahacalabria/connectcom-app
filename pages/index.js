import Head from 'next/head'
// import styles from './index.module.css';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>ConnectCom</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Bem-vindo à <a href="https://nextjs.org">Connect Com!</a>
        </h1>

        <p className="description">
          Conectando você e seus fornecedores.
        </p>

        <form>
          <input type="text" className="search-input" placeholder="Qual sua necessidade?" /><button className="btn">buscar</button>
        </form>

        <div className="grid">
          <a href="https://nextjs.org/docs" className="card">
            <h3>Quero me cadastrar &rarr;</h3>
            <p>Cadastra-se para acessar todos os recursos.</p>
          </a>

          <a href="https://nextjs.org/learn" className="card">
            <h3>Conheça mais sobre &rarr;</h3>
            <p>A ConnectCom é StartUp, é inovação.</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className="card"
          >
            <h3>Divulgar meus produtos &rarr;</h3>
            <p>Alcance seus clientes da melhor forma.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className="card"
          >
            <h3>FAQ &rarr;</h3>
            <p>
              Conheça as principais dúvidas ao utilizar a ConnectCom.
            </p>
          </a>
        </div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '} ConnectCom
          {/* <img src="/vercel.svg" alt="Vercel Logo" className="logo" /> */}
        </a>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        .search-input {
          padding: 8px 10px;
          height: 40px;
          width: 700px;
          border: 2px solid #eaeaea;
          // box-shadow: 0 0 5px 5px #888;
        }
        .btn{
          padding: 8px 10px;
          height: 40px;
          background-color: #0070f3;
          border: none;
          outline: none;
          color: #fff;
          border-radius: 0px 4px 4px 0px;
          font-weight: bold;
          cursor: pointer;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
