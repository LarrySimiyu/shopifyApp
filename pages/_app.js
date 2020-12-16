import App from 'next/app'
import Head from 'next/head'
import { AppProvier } from '@shopify/polaris';
import '@shopify/polaris/dist/styles.css'
import translations from 'shopify/polaris/locales/en.json';


class MyApp extends App {
    render()  {
        const { Component, pageProps } = this.props
        return(
            <React.Fragment>
                <Head>
                    <title>Sample Application</title>
                    <meta charSet="utf-8" />
                </Head>
                <AppProvier i18n={translations}>
                <Component {...pageProps}/>
                </AppProvier>

            </React.Fragment>
        )
    }
}

export default MyApp;