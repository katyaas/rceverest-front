import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <html>
      <Head>
        <link rel="stylesheet" href="/_next/static/style.css" />
      </Head>
      <body style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.2), rgba(255,255,255,0.2)), url(/static/background2.jpg)',
        backgroundSize: 'cover',
      }}>
      <Main />
      <NextScript />
      </body>
      </html>
    )
  }
}