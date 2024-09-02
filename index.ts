import { AtpAgent } from '@atproto/api'

const agent = new AtpAgent({
  service: 'https://bsky.social'
})

if (!process.env.BSKY_HANDLE || !process.env.BSKY_APP_PASSWORD) {
  throw new Error('BSKY_HANDLE and BSKY_APP_PASSWORD must be set')
}

await agent.login({
  identifier: process.env.BSKY_HANDLE,
  password: process.env.BSKY_APP_PASSWORD,
})

const texts = [
  "Não.",
  "Ainda não.",
  "Não, não.",
  "Nem um pouco.",
  "Não mesmo.",
  "Não, não, não.",
  "Solteiríssima.",
  "Nem pensar.",
  "Negativo.",
  "Tão solteira quanto ontem.",
  "Mais solteira que número ímpar.",
  "Tão solteira que até cupido desistiu.",
]

agent.post({
  text: texts[Math.floor(Math.random() * texts.length)]
})