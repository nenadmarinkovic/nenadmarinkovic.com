import Document, { Html, Head, Main, NextScript } from "next/document";
import { GlobalStyles } from "../styles/globals";

class Website extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <GlobalStyles />
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

export default Website;
