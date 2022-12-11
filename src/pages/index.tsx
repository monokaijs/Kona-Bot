import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import * as fs from "fs";
import {DatabaseService} from "@/services/DatabaseService";
import {handleRequest} from "@/services/RequestService";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kona Bot</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
    </div>
  )
};

export const getServerSideProps = handleRequest(async (ctx) => {
  await DatabaseService.connect();
  return {
    props: {}
  };
})
