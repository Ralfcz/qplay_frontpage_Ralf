import '../styles/main.scss'
import type {AppProps} from 'next/app'
import LayoutDefault from "../layout/LayoutDefault";
import Head from "next/head";
import ReactGA from 'react-ga';
import CookieConsent from "react-cookie-consent";
import {useEffect} from "react";
import {useRouter} from "next/router";

function MyApp({Component, pageProps}: AppProps) {
  const router = useRouter()
  const baseUrl = "https://www.qplay.cz"
  const currentPath = router.asPath.split('#')[0].split('?')[0]
  const completePath = baseUrl + (router.asPath === '/' ? '' : currentPath)

  useEffect(() => {
    ReactGA.initialize('UA-60146032-1');
  }, []);

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, [router.pathname, router.query]);

  return (
    <LayoutDefault>
      <Head>
        <title>QPlay.cz</title>
        <meta name="description" content="QPlay Minecraft Server"/>
        <meta name="viewport" content='width=device-width, initial-scale=1'/>
        <link rel="canonical" href={completePath}/>
      </Head>
      <CookieConsent
        location="bottom"
        buttonText="Souhlasím"
      >
        Tento web používá k poskytování služeb, personalizaci reklam a analýze návštěvnosti soubory cookie. Používáním
        tohoto webu s tím souhlasíte.{" "}
        <a
          href="https://www.google.com/intl/cs/policies/technologies/cookies/"
          target="_blank"
          rel="noreferrer"
        >
          Více informací
        </a>
      </CookieConsent>
      <Component {...pageProps} />
    </LayoutDefault>
  )
}

export default MyApp
