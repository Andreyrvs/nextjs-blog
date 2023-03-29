import Head from 'next/head';
import Alert from '../components/AlertCslx';
import Layout, { siteTitle } from '../components/layout';
import { getSortedPostsData } from '../lib/posts';
import utilStyles from '../styles/utils.module.css';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      {/* <Alert type="error">Um alerta com cslx</Alert> */}
      <section className={utilStyles.headingMd}>
        <p>Olá, Eu sou Andrey. Tenho interesse em atuar como desenvolvedor Web, diante disso estou em processo de transição de carreira tendo atuado no setor público. Decidi me especializar na área de tecnologia após alguns anos trabalhando em serviços braçais que eram repetitivos e exigiam pouco conhecimento. Agora, estou animado para me desenvolver em tecnologias como JavaScript, TypeScript, React, Node.js e Python, para solucionar desafios em minha carreira.</p>
        {/* <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p> */}
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}