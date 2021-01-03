import Head from 'next/head';
import styles from '../styles/Home.module.css';

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
					<b>Let's be honest: making stuff alone kinda sucks.</b> <br />
					We're a virtual club (member of{' '}
					<a
						href="https://hackclub.com/?utm_source=hackropolis.vercel.app&utm_medium=linkback&utm_campaign=hackropolis"
						target="_blank"
						rel="noopener"
					>
						The Hack Foundation
					</a>
					), where like-minded students from Greece (<i>and beyond</i>) meet weekly to discuss about topics they are interested in, build
					stuff they like and learn together.
				</p>
				<div className={styles.links}>
					<h3>Get involved:</h3>
							<a href="https://hackropolis.club/apply" target="_blank" rel="noopener">
						<b>
							<u>Join us &rarr;</u>
						</b>
					</a>
							<a href="https://twitter.com/hackropolis" target="_blank" rel="noopener">
						<b>
							<u>Take a look at our Twitter &rarr;</u>
						</b>
					</a>
							<a href="https://github.com/hackropolis" target="_blank" rel="noopener">
						<b>
							<u>View our GitHub &rarr;</u>
						</b>
					</a>
					<h3>Get in touch:</h3>
							<a href="https://hackropolis.club/discord" target="_blank" rel="noopener">
						<b>
							<u>Hop on our Discord &rarr;</u>
						</b>
							<a href="https://hackropolis.club/matrix" target="_blank" rel="noopener">
						<b>
							<u>Visit our Matrix &rarr;</u>
						</b>
					</a>
				</div>
			</main>

			<div className={styles.sponsors}>
				<h3>We're sponsored by:</h3>
				<div className={styles.grid}>
					<a href="https://www.stickermule.com/unlock?ref_id=5157172701&utm_medium=link&utm_source=invite" target="_blank" rel="noopener">
						<img src="/sponsors/sticker-mule.svg" alt="Sticker Mule Logo" width="300px" height="100px" />
					</a>
				</div>
			</div>
		</div>
	);
}
