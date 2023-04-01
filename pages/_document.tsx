import Document, {DocumentContext, Head, Html, Main, NextScript,} from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return {...initialProps}
  }

  render() {
    // noinspection HtmlRequiredTitleElement
    return (
      <Html className="h-full bg-gray-50 antialiased" lang="en">
        <Head/>
        <body className="flex h-full flex-col">
        <Main/>
        <NextScript/>
        </body>
      </Html>
    )
  }
}

export default MyDocument
