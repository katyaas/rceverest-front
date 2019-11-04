import React from 'react';
import App from 'next/app';
import Router from "next/router";
import withYM from "next-ym";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}

export default withYM('52302433', Router)(MyApp);