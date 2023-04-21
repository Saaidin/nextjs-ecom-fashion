import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"
import Homelist from "./components/Homelist"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Fashion Store</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Homelist />
    </div>
  )
}
