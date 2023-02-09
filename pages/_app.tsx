import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {DefaultSeo} from "next-seo";
import SEO from '../next-seo.config';
import {Londrina_Solid} from '@next/font/google';
import clsx from "clsx";

const londrinaSolid = Londrina_Solid({
  subsets: ['latin'],
  variable: '--font-londrina-solid',
  weight: ['100', '300', '400', '900']
})

function MyApp({Component, pageProps}: AppProps) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <div className={clsx(londrinaSolid.variable, "font-sans")}>
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp
