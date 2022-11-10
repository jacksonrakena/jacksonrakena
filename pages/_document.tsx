import NextDocument, { Head, Html, Main, NextScript } from "next/document";

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        </Head>
        <body>
          <a
            style={{ display: "none" }}
            rel="me"
            href="https://mastodon.nz/@jackson"
          >
            Mastodon
          </a>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
