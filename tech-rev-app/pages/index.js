import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>TechRev!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          TechRev!
        </h1>

        <p className={styles.description}>
          書いた記事をレビューしあって、記事の品質を高めましょう
        </p>

        <div className={styles.grid}>
          <a href="/" className={styles.card}>
            <h3>記事執筆 &rarr;</h3>
            <p>記事を書いて知識を共有しましょう</p>
          </a>

          <a href="/" className={styles.card}>
            <h3>レビューする &rarr;</h3>
            <p>レビューして記事の品質を高めましょう</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
