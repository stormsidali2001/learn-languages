import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import TopBar from '../components/topbar'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
    
      <TopBar/>
      <main className={styles.main}>

      </main>
    </div>
  )
}

export default Home
