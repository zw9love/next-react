/**
 @author zengwei
 @time 2018/7/12
 **/
import Document, { Head, Main, NextScript } from 'next/document'
export default class MyDocument extends Document {
    render() {
        // console.log('重新渲染')
        // let name = "/_next/static/style.css?"
        // let randomStr = Math.floor(Math.random() * 1000000)
        return (
            <html>
            <Head>
                {/*<link rel="stylesheet" href={name + randomStr} />*/}
                <link rel="stylesheet" href="/_next/static/style.css" />
            </Head>
            <body>
            <Main />
            <NextScript />
            </body>
            </html>
        )
    }
}
