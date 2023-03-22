import Head from 'next/head';
import Alert from '../components/AlertCslx';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Alert type="error">Um alerta com cslx</Alert>
      <section className={utilStyles.headingMd}>
        <p>Olá, Eu sou Andrey. Eu Sou Desenvolvedor Web Full Stack. Estou aprendendo inglês no Duolingo</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}