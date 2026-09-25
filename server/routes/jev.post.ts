import axios from 'axios'

const _axios = axios.create({
  headers: {
    'Referer': 'https://jev-ai.net/zh',
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/154.0.0.0',
  },
})

interface Params {
  type: 'choice' | 'noul' | 'score'
  state: string
  options?: string[]
}

export default eventHandler(async (event) => {
  const body: Params = await readBody(event)
  const { data } = await _axios.post('https://jev-ai.net/api/openjev/decide', body)
  return data
})
