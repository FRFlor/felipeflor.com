export {render}
// See https://vite-plugin-ssr.com/data-fetching
export const passToClient = ["pageProps", "urlPathname"]

import {renderToString} from "@vue/server-renderer"
import {dangerouslySkipEscape, escapeInject} from "vite-plugin-ssr/server"
import {createApp} from "./app"
import type {PageContextServer} from "./types"

async function render(pageContext: PageContextServer) {
    const {Page, pageProps} = pageContext
    // This render() hook only supports SSR, see https://vite-plugin-ssr.com/render-modes for how to modify render() to support SPA
    if (!Page) throw new Error("My render() hook expects pageContext.Page to be defined")
    const app = createApp(Page, pageProps, pageContext)

    const appHtml = await renderToString(app)

    // See https://vite-plugin-ssr.com/head
    const {documentProps} = pageContext.exports
    const title = (documentProps && documentProps.title) || "Felipe Flor - Software Developer"
    const desc = (documentProps && documentProps.description) || "I am Felipe Flor, a FullStack WebDeveloper from Ontario - Canada, mostly experienced with Vue, Laravel and Typescript. This website contains my personal Portfolio and contact information, come take a look!"

    const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang="en" class="dark">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" href="./koala.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="${desc}" />
        <title>${title}</title>
      </head>
      <body >
        <noscript>
            <h1 class="z-10 text-white font-bold text-7xl lg:text-8xl absolute left-5 top-10 right-auto lg:left-auto lg:right-20 lg:top-20 ">
                Felipe Flor
            </h1>
        </noscript>
        <h1 class="sr-only">
            Felipe Flor
        </h1>      
        <div id="app">${dangerouslySkipEscape(appHtml)}</div>
      </body>
    </html>`

    return {
        documentHtml,
        pageContext: {
            // We can add some `pageContext` here, which is useful if we want to do page redirection https://vite-plugin-ssr.com/page-redirection
        }
    }
}
