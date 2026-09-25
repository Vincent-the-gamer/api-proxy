interface Params {
  type: 'choice' | 'noul' | 'score'
  state: string
  options?: string[]
}

export default eventHandler(async (event) => {
  const body: Params = await readBody(event)
  const res = await fetch('https://jev-ai.net/api/openjev/decide', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Referer': 'https://jev-ai.net/zh',
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/154.0.0.0',
    },
    body: JSON.stringify(body),
  })

  if (!res.ok)
    throw createError({ statusCode: res.status, statusMessage: res.statusText, data: await res.text() })

  return await res.json()
})
