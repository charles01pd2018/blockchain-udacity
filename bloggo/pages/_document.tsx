import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head >
          <link rel="preload" href="/fonts/manrope/Manrope-Light.ttf" as="font"crossOrigin=""/>       
          <link rel="preload" href="/fonts/manrope/Manrope-Medium.ttf" as="font" crossOrigin="" /> 
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body className='loading'>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;