import NextApp from "next/app";
import { CacheProvider, Global, css } from "@emotion/core";
import { cache } from "emotion";

const globalStyles = (
  <Global
    styles={css`
      html,
      body {
        margin: 0px auto;
      }
    `}
  />
);

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <CacheProvider value={cache}>
        {globalStyles}
        <Component {...pageProps} />
      </CacheProvider>
    );
  }
}
