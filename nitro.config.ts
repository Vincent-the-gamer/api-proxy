// https://nitro.unjs.io/config
export default defineNitroConfig({
  srcDir: 'server',
  preset: 'netlify-edge',
  runtimeConfig: {
    compatibilityDate: '2026-09-25',
  },
})
