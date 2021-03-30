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

        <div class="grid grid-cols-2 gap-4 ">
          <div class="max-w-sm mx-auto flex p-6 bg-white rounded-lg shadow-md cursor-pointer hover:bg-gray-200 space-y-10">
            <blockquote>記事執筆</blockquote>
            <figcaption class="font-medium">
              <div class="text-gray-500">
                記事を書いて知識を共有しましょう
              </div>
            </figcaption>
          </div>

          <div class="max-w-sm mx-auto flex p-6 bg-white rounded-lg shadow-md cursor-pointer hover:bg-gray-200">
            <p>レビューする</p>
            <p>レビューして記事の品質を高めましょう</p>
          </div>
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
