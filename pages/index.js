import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<title>Hackropolis</title>
				<meta name="description" content="The first virtual computer club for youths in Greece" />
				<link rel="icon" href="/favicon.ico" />
				<meta name="theme-color" content="#ffffff" />
				<meta property="og:type" content="website" />
				<meta name="og:title" property="og:title" content="Hackropolis" />
				<meta name="og:description" property="og:description" content="The first virtual computer club for youths in Greece" />
				<meta property="og:url" content="https://hackropolis.club/" />
				<meta name="twitter:card" content="summary" />
				<meta name="twitter:title" content="Hackropolis" />
				<meta name="twitter:description" content="The first virtual computer club for youths in Greece" />
				<meta name="twitter:site" content="@hackropolis" />
				<meta name="twitter:creator" content="@hackropolis" />
				<link rel="icon" type="image/png" href="/favicon.ico" />
				<link rel="apple-touch-icon" href="/favicon.ico" />
				<meta property="og:image" content="https://hackropolis.club/logo.png" />
				<meta name="twitter:image" content="https://hackropolis.club/logo.png" />
				<link rel="canonical" href="https://hackropolis.club/" />
			</Head>
			<div className={styles.header}>
				<h1 className={styles.title}>
					We are <u>Hackropolis</u>
				</h1>
				<h2 className={styles.slogan}>The first virtual computer club for youths in Greece</h2>
			</div>
			<main className={styles.main}>
				<article className={styles.description}>
					<p>
						<b>Are you interested in computer science?</b>
					</p>
					<p>
						Hackropolis is a virtual computer club for Greek and/or Greek-speaking young people that are interested in computer science
						and other related fields. We regularly organize meetings online and work on projects together. No experience required — all
						you need is an internet connection, come as you are!
					</p>
					<p>
						We mostly consist of middle-to-high school students and operate under the auspices of{' '}
						<a
							href="https://hackclub.com/?utm_source=hackropolis.club&utm_medium=linkback&utm_campaign=hackropolis"
							target="_blank"
							rel="noopener"
						>
							The Hack Foundation
						</a>{' '}
						(a registered 501(c)(3) nonprofit organization in California, United States), which supports similar acts like ours globally.
					</p>
					<p>
						Our goal is to provide people with an inclusive space where they can be themselves, no matter whether they live. We want to
						show that computers and technology can be fun, exciting, and a means of personal development and expression.
					</p>
					<p>
						Intrigued?{' '}
						<a href="https://hackropolis.club/apply" target="_blank" rel="noopener">
							<b>Apply today!</b>
						</a>
					</p>
				</article>
			</main>
			<div className={styles.extra}>
				<div className={styles.links}>
					<h3>Need to know more?</h3>
					<ul className={styles.list}>
						<li>
							<a href="https://twitter.com/hackropolis" target="_blank" rel="noopener">
								<b>
									<u>Check out our feed on Twitter</u>
								</b>
							</a>
						</li>
						<li>
							<a href="https://github.com/hackropolis" target="_blank" rel="noopener">
								<b>
									<u>Check out our projects on GitHub</u>
								</b>
							</a>
						</li>
					</ul>
				</div>
				<div className={styles.links}>
					<h3>Want to reach out?</h3>
					<ul className={styles.list}>
						<li>
							<a href="https://hackropolis.club/apply" target="_blank" rel="noopener">
								<b>
									<u>Apply</u>
								</b>
							</a>
						</li>
						<li>
							<a href="https://hackropolis.club/discord" target="_blank" rel="noopener">
								<b>
									<u>Hop on our Discord</u>
								</b>
							</a>
						</li>
						<li>
							<a href="https://hackropolis.club/matrix" target="_blank" rel="noopener">
								<b>
									<u>Visit our Matrix room</u>
								</b>
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div className={styles.sponsors}>
				<h3>We're sponsored by:</h3>
				<ul className={styles.list}>
					<li>
						<a
							href="https://www.stickermule.com/unlock?ref_id=5157172701&utm_medium=link&utm_source=invite"
							target="_blank"
							rel="noopener"
						>
							<img src="/sponsors/sticker-mule.svg" alt="Sticker Mule Logo" width="300px" height="100px" />
						</a>
					</li>
					<li>
						<a href="https://vercel.com?utm_source=hackropolis&utm_campaign=oss&utm_medium=link" target="_blank" rel="noopener">
							<picture>
								<source srcSet="/sponsors/vercel-light.svg" media="(prefers-color-scheme: dark)" />
								<img alt="Vercel Logo" src="/sponsors/vercel-dark.svg" />
							</picture>
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
}
