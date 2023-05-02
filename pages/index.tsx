import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link'


const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>WEB 3.0 Latest TECHs</title>
        <meta
          content="Made by Rana Reebaal (PSFMA ISL)"
          name="description"
        />
        <link href="/favicon.ico" rel="icon" />
      </Head>



      <h1 className={styles.title}>
        Rana Reebaal (PSFMA Islamabad) WMD Q2 Assignments
      </h1>

      <main className={styles.main}>
        <h3>Click here to connect wallet!</h3><ConnectButton />

        <div className={styles.grid}>

          <div className={styles.card}>
            <Link href="https://goerli.etherscan.io/address/0xeED4485ECA3F64b16fB5cf05F4C6441A7B7cBCCd">
              <h2>1- Smart contract, simple transactions &rarr;</h2>
            </Link>
            <p>Transaction history, transfer and withdrawal processes.</p>
          </div>

          <div className={styles.card}>
            <Link href="https://mumbai.polygonscan.com/address/0xaf14c247d1072ae2621057cc649d9229346c5957#tokentxnsErc721">
              <h2>2- Mint NFTs &rarr;</h2>
            </Link>
            <p>1-2 and Bundle NFTs transactions at a time.</p>
          </div>

          <div className={styles.card}>
            <Link href="">
              <h2>3- Create wallet social with RainbowKit&rarr;</h2>
            </Link>
            <p>Click on the CONNECT WALLET button.</p>
          </div>


          <div className={styles.card}>
            <Link href="https://goerli.etherscan.io/address/0xD01610E588123c9B18aa7314A3a8701054f9A45c"><h2>4- Recent transactions on ehterscan&rarr;</h2></Link>
            <p>Some transactions related to these assignments.</p>
          </div>


        </div>
      </main>

    </div>
  );
};

export default Home;
