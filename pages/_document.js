import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <html>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="stylesheet" href="/static/style.css" />
        <meta name="google-site-verification" content="VT8C2BQhiGWT0blymCBgforOARaqybQmKvobGrRpuMg" />
        <meta name="yandex-verification" content="34e48ad4c78e0c69" />
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