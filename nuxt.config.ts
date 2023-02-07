import { createResolver } from "@nuxt/kit";

const { resolve } = createResolver(import.meta.url)

export default defineNuxtConfig({
    srcDir: 'src',
    css: [
        resolve('./assets/styles/main.scss')
    ]
})
