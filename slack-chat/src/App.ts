import { When, Chat, Users } from '@livestorm/plugin'

const webHookURL = 'https://hooks.slack.com/services/XXXXXXXX'
const introText = 'Hello there ! 👋 The event is finished but we\'re still here to help ! Post a message in the chat and our team will read it instantly'

let hasNotified = false

export default async function() {
  When.eventEnds(() => {
    if (!hasNotified) {
      notifyThatMessagesWillBeForwarded()
      hasNotified = true
    }

    Chat.listen(({ content, scope }) => {
      if (!scope) postToSlack(content)
    })
  })
}

async function notifyThatMessagesWillBeForwarded() {
  Chat.send({
    user: {
      firstName: 'Livestorm Slack',
      lastName: 'Plugin',
      tag: 'Only visible to you',
      avatarUrl: 'https://cdn.iconscout.com/icon/free/png-256/slack-2752072-2284889.png'
    },
    text: introText
  })
}

async function postToSlack(content) {
  
  const me = await Users.me()
  const text = `
${[me.first_name, me.last_name].join(' ')} said:
---
${content}
---
-> Answer him at:  ${window.origin}
  `

  fetch(webHookURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: JSON.stringify({ text })
  })
}