import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import * as fs from "fs";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kona Bot</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  )
};

export const getServerSideProps = async () => {
  console.log('ok');
  fs.writeFileSync('./test.txt', 'hello');
  return {
    props: {
      redirect: {
        // permanent: false,
        // destination: "/installation",
      },
    }
  };
}
