// https://nitro.unjs.io/config
export default defineNitroConfig({
  srcDir: 'server',
  routeRules: {
    '/**': {
      cors: true,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Request-Method': 'PUT,POST,GET,DELETE,OPTIONS',
      },
    },
  },
  preset: 'netlify-edge',
  runtimeConfig: {
    compatibilityDate: '2026-09-25',
  },
})
