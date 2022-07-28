import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Feed from '../components/feed/Feed'
import Leftbar from '../components/leftbar/Leftbar'
import Rightbar from '../components/rightbar/RightBar'
import TopBar from '../components/topbar'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <TopBar/>
      <main className={styles.main}>
        <Leftbar/>
        <Feed/>
        <Rightbar/>
      </main>
    </div>
  )
}

export default Home
