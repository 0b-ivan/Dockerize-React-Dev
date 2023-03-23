import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Techstarter example</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/techst.svg"
            alt="Techstarter Logo"
            width={280}
            height={137}
            priority
          />
        </div>

        <div className={styles.grid}>
          <a
            href="https://docs.google.com/document/d/1X_h0bodXfXc-dTuRhH4jUvshIkFh08L7TEZjY5x5vE4/edit?usp=sharing"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Ü3 Docker - Dockerfile <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
                1.Lege ein Verzeichnis “Dockerfile-01”...
            </p>
          </a>
        </div>
      </main>
    </>
  )
}
