import { PubSub, Chat, Users, Storage } from '@livestorm/plugin'
import { preview } from './liveReactionListener'
import track from './tracking'

import i18n from './i18n'
import activationTemplate from './templates/activationTemplate'

export default async function sendActivationMessageIfUserIsHost() {
  const user = await Users.me()
  if (user.is_host) {
    suggestActivation()
  }
}

async function suggestActivation() {
  const message = await Chat.send({
    user: {
      firstName: 'Livestorm',
      tag: i18n().general.tag,
      avatarUrl: 'https://livestorm-ireland-plugin-assets.s3-eu-west-1.amazonaws.com/69ed6813-c055-4a06-96a8-14e0f3c9b515/rounded-logo-livestorm.png'
    },
    text: i18n().activationMessage.text,
    html: activationTemplate(),
  })
  message.onIframeMessage(({ answer }) => {
    if (answer === 'activate') {
      PubSub.publish('activate-live-reaction', {})
      Storage.setItem('emojis-activated', 'true')
      preview()
    } else if (answer === 'preview') {
      preview()
    } else if (answer === 'dismiss') {
      message.destroy()
    }

    track(`activation-${answer}`)
  })
  PubSub.subscribe('activate-live-reaction', () => {
    message.destroy()
  })
}