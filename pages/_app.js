import '../styles/globals.css';
import { DefaultSeo } from 'next-seo';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo
        titleTemplate='%s | Ruler Protocol Explained'
        defaultTitle="A Beginner's Guide to Ruler Protocol | Ruler Protocol Explained"
        description='The leader in peer-to-peer DeFi credit!'
        openGraph={{
          type: 'website',
          locale: 'en_US',
          url: 'https://ruler.fyi',
          title:
            "A Beginner's Guide to Ruler Protocol | Ruler Protocol Explained",
          description: 'The leader in peer-to-peer DeFi credit!',
          site_name: 'Ruler Protocol Explained',
          images: [
            {
              url: 'https://ruler.fyi/og-image.png',
              width: 1200,
              height: 630,
              alt:
                "A Beginner's Guide to Ruler Protocol | Ruler Protocol Explained",
            },
          ],
        }}
        twitter={{
          cardType: 'summary_large_image',
        }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
