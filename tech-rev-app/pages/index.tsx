import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>TechRev!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 class="text-center text-8xl">
          TechRev!
        </h1>

        <p class="text-center text-3xl pb-40">
          書いた記事をレビューしあって、記事の品質を高めましょう
        </p>
        
        <div class="grid grid-cols-2 gap-4 ">
          <Link href="/edit">
            <div class="max-w-sm mx-auto p-6 bg-gray-300 rounded-lg shadow-md cursor-pointer hover:bg-gray-200">
            <h1 class="text-center text-2xl">記事執筆</h1>
              <h2 class="text-gray-500">
                記事を書いて知識を共有しましょう
              </h2>
            </div>
          </Link>

          <div class="max-w-sm mx-auto p-6 bg-gray-300 rounded-lg shadow-md cursor-pointer hover:bg-gray-200">
            <h1 class="text-center text-2xl">レビューする</h1>
            <h2 class="text-gray-500">レビューして記事の品質を高めましょう</h2>
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
