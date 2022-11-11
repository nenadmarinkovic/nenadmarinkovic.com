import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";
import { ServerStyleSheet } from "styled-components";

class Website extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,

        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="description" content="Web development and design." />
          <link
            rel="preload"
            href="/fonts/CeraPro-Regular.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="crossorigin"
          />
          {/* <link
            rel="preload"
            href="/fonts/CeraPro-Bold.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="crossorigin"
          />
          <link
            rel="preload"
            href="/fonts/CeraPro-Black.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="crossorigin"
          /> */}
          <link rel="icon" href="/favicon.ico" />
          <link href="/manifest.json" rel="manifest" />
          <link href="/apple-touch-icon.png" rel="apple-touch-icon" />
          <meta content="#ffffff" name="theme-color" />
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
