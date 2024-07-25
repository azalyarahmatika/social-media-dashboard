import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/images/favicon-32x32.png" />
      </Head>
      <body className="my-16 font-inter w-screen h-screen overflow-y-auto overflow-x-hidden flex justify-center items-center custom_gradient">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
