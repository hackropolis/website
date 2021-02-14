import Head from 'next/head';
import { withTranslation, i18n } from '../i18n'
import styles from '../styles/Home.module.css';

const translationMenu = {
	en: "English",
	el: "Ελληνικά"
}

function Home({ t }) {
	return (
		<div className={styles.container}>
			<Head>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<title>Hackropolis</title>
				<meta name="description" content={t('slogan')} />
				<link rel="icon" href="/favicon.ico" />
				<meta name="theme-color" content="#ffffff" />
				<meta property="og:type" content="website" />
				<meta name="og:title" property="og:title" content="Hackropolis" />
				<meta name="og:description" property="og:description" content={t('slogan')} />
				<meta property="og:url" content="https://hackropolis.club/" />
				<meta name="twitter:card" content="summary" />
				<meta name="twitter:title" content="Hackropolis" />
				<meta name="twitter:description" content={t('slogan')} />
				<meta name="twitter:site" content="@hackropolis" />
				<meta name="twitter:creator" content="@hackropolis" />
				<link rel="icon" type="image/png" href="/favicon.ico" />
				<link rel="apple-touch-icon" href="/favicon.ico" />
				<meta property="og:image" content="https://hackropolis.club/logo.png" />
				<meta name="twitter:image" content="https://hackropolis.club/logo.png" />
				<link rel="canonical" href="https://hackropolis.club/" />
				<script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "46d832bfd8db4fefadafda69bd7e6b0e"}'></script>
			</Head>
			<div className={styles.langMenu}>
				{Object.entries(translationMenu).map(([language, name]) => {
					return i18n.language === language ? "" : <span key={language} onClick={() => i18n.changeLanguage(language)}>{name}</span>
				})}
			</div>
			<div className={styles.header}>
				<h1 className={styles.title}>
					{t('titlePrefix')} <u>Hackropolis</u>
				</h1>
				<h2 className={styles.slogan}>{t('slogan')}</h2>
			</div>
			<main className={styles.main}>
				<article className={styles.description}>
					<p>
						<b>{t('articleQuestion')}</b>
					</p>
					<p>
						{t('description')}
					</p>
					<p>
						{t('operateUnder')}{' '}
						<a
							href="https://hackclub.com/?utm_source=hackropolis.club&utm_medium=linkback&utm_campaign=hackropolis"
							target="_blank"
							rel="noopener"
						>
							{t('hackClub')}
						</a>{' '}
						{t('nonProfit')}
					</p>
					<p>
						{t('goalsAndDreams')}
					</p>
					<p>
						{t('closingQuestion')}{' '}
						<a href="https://hackropolis.club/apply" target="_blank" rel="noopener">
							<b>{t('btnJoinUs')}</b>
						</a>
					</p>
				</article>
			</main>
			<div className={styles.extra}>
				<div className={styles.links}>
					<h3>{t('learnHeader')}</h3>
					<ul className={styles.list}>
						<li>
							<a href="https://twitter.com/hackropolis" target="_blank" rel="noopener">
								<b>
									<u>{t('twitter')}</u>
								</b>
							</a>
						</li>
						<li>
							<a href="https://github.com/hackropolis" target="_blank" rel="noopener">
								<b>
									<u>{t('github')}</u>
								</b>
							</a>
						</li>
					</ul>
				</div>
				<div className={styles.links}>
					<h3>{t('contactHeader')}</h3>
					<ul className={styles.list}>
						<li>
							<a href="https://hackropolis.club/apply" target="_blank" rel="noopener">
								<b>
									<u>{t('apply')}</u>
								</b>
							</a>
						</li>
						<li>
							<a href="https://hackropolis.club/discord" target="_blank" rel="noopener">
								<b>
									<u>{t('discord')}</u>
								</b>
							</a>
						</li>
						<li>
							<a href="https://hackropolis.club/matrix" target="_blank" rel="noopener">
								<b>
									<u>{t('matrix')}</u>
								</b>
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div className={styles.sponsors}>
				<h3>{t('sponsors')}</h3>
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

Home.getInitialProps = async () => ({
	namespacesRequired: ['common'],
})

export default withTranslation('common')(Home)
