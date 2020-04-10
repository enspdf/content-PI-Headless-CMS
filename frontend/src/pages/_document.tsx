import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
    render() {
        return (
            <html lang="es">
                <Head>
                    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.13.0/css/all.css" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                </Head>

                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
};