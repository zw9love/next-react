/**
 @author zengwei
 @time 2018/7/14
 **/
// // This file doesn't go through babel or webpack transformation.
// // Make sure the syntax and sources this file requires are compatible with the current node version you are running
// // See https://github.com/zeit/next.js/issues/1245 for discussions on Universal Webpack or universal Babel
// const { createServer } = require('http')
// const { parse } = require('url')
// const next = require('next')
//
// const dev = process.env.NODE_ENV !== 'production'
// const app = next({ dev })
// const handle = app.getRequestHandler()
//
// app.prepare().then(() => {
//     createServer((req, res) => {
//         // Be sure to pass `true` as the second argument to `url.parse`.
//         // This tells it to parse the query portion of the URL.
//         const parsedUrl = parse(req.url, true)
//         const { pathname, query } = parsedUrl
//
//         if (pathname === '/a') {
//             app.render(req, res, '/b', query)
//         } else if (pathname === '/b') {
//             app.render(req, res, '/a', query)
//         } else {
//             handle(req, res, parsedUrl)
//         }
//     }).listen(3000, err => {
//         if (err) throw err
//         console.log('> Ready on http://localhost:3000')
//     })
// })

/* eslint-disable no-console */
// import express from 'express'
// import next from 'next'
const express = require('express')
const next = require('next')

const devProxy = {
    '/api': {
        target: 'http://0.0.0.0/',
        pathRewrite: {'^/api': '/'},
        changeOrigin: true,
        secure: false
    }
}

const port = parseInt(process.env.PORT, 10) || 3000
// const env = process.env.NODE_ENV
// const dev = env !== 'production'
const env = 'dev'
const dev = true
const app = next({
    dir: '.', // base directory where everything is, could move to src later
    dev
})

const handle = app.getRequestHandler()

let server
app
    .prepare()
    .then(() => {
        server = express()

        // Set up the proxy.
        if (dev && devProxy) {
            const proxyMiddleware = require('http-proxy-middleware')
            Object.keys(devProxy).forEach(function (context) {
                server.use(proxyMiddleware(context, devProxy[context]))
            })
        }

        // Default catch-all handler to allow Next.js to handle all other routes
        server.all('*', (req, res) => handle(req, res))

        server.listen(port, err => {
            if (err) {
                throw err
            }
            console.log(`> Ready on port ${port} [${env}]`)
        })
    })
    .catch(err => {
        console.log('An error occurred, unable to start the server')
        console.log(err)
    })
