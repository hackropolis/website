import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hackropolis</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          We are <u>Hackropolis</u>
        </h1>
        <h2>The first virtual hackerspace in Greece</h2>
        <p className={styles.description}>
          <b>Making stuff on your own kinda sucks.</b> <br />
          We're a virtual club (member of <a>The Hack Foundation</a>), where
          like-minded students from every edge of Greece (<i>and beyond</i>)
          meet weekly to discuss about topics they are interested in, build
          stuff they like and learn together.
        </p>
        <div className={styles.links}>
          <a>
            <b>
              <u>Join us &rarr;</u>
            </b>
          </a>
          <br />
          <a href="https://discord.gg/rcgpHEneHp" target="_blank">
            <b>
              <u>Hop on our Discord &rarr;</u>
            </b>
          </a>
          <br />
          <a href="https://twitter.com/hackropolis" target="_blank">
            <b>
              <u>Take a look at our Twitter &rarr;</u>
            </b>
          </a>
          <br />
          <a href="https://github.com/hackropolis" target="_blank">
            <b>
              <u>View our GitHub &rarr;</u>
            </b>
          </a>
        </div>
      </main>

      <div className={styles.sponsors}>
        <h3>We're sponsored by:</h3>
        <div className={styles.grid}>
          {/* <Image
            src="/sponsors/vercel.svg"
            alt="Vercel Logo"
            className={styles.vercellogo}
          /> */}
          {/* TODO: enable only if vercel sponsors us */}
          <a
            href="https://www.stickermule.com/unlock?ref_id=5157172701&utm_medium=link&utm_source=invite"
            target="_blank"
          >
            <Image
              src="/sponsors/sticker-mule.svg"
              alt="Sticker Mule Logo"
              width="300px"
              height="100px"
            />
          </a>
        </div>
      </div>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <Image
            src="/sponsors/vercel.svg"
            alt="Vercel Logo"
            className={styles.vercellogo}
          />
        </a>
      </footer> */}
      {
        // TODO: Enable this if we end up needing vercel.
      }
    </div>
  );
}
