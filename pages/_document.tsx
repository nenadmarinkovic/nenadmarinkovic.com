import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";
import { ServerStyleSheet } from "styled-components";

class Doc extends Document {
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
          <meta name="description" content="Web development and design" />
          <meta content="#fff" name="theme-color" />
          <link href="/images/favicon.ico" rel="shortcut icon" />
          <link href="/manifest.json" rel="manifest" />
          <link href="/images/apple-touch-icon.png" rel="apple-touch-icon" />
          <link
            rel="stylesheet preload prefetch"
            href="/fonts/CeraPro-Regular.woff2"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            as="style"
            rel="stylesheet preload prefetch"
            href="/fonts/CeraPro-Bold.woff2"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="stylesheet preload prefetch"
            href="/fonts/CeraPro-Black.woff2"
            type="font/woff2"
            crossOrigin="anonymous"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Doc;
