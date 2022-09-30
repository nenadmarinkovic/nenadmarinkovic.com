import Document, { Html, Head, Main, NextScript } from "next/document";

class WebSite extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="UTF-8" />
          <meta name="description" content="Web development and design." />
          <meta name="author" content="Nenad Marinković" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default WebSite;
