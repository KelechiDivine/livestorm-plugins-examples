import { Storage, PubSub, NotificationCenter, RegisterStageButton, Users } from '@livestorm/plugin'
import listenIncomingMessagesForReaction from './listenIncomingMessagesForReaction'
import sendActivationMessageIfUserIsHost from './suggestActivation'
import feedbackMessageAfterEvent from './feedbackMessageAfterEvent'

const pickReactionTemplate: string = require('./templates/pickReactionTemplate.html').default
const liveReactionTemplate: string = require('./templates/liveReactionTemplate.html').default

let emojisActived = false

export async function liveReactionListener() {
  PubSub.subscribe('live-reaction', ({ reaction, emojisCount }) => {
    NotificationCenter.showIframe(liveReactionTemplate, {
      reaction, emojisCount
    })
  })

  PubSub.subscribe('activate-live-reaction', () => {
    if (!emojisActived) {
      emojisActived = true
      activatePlugin()
    }
  })

  if (await Storage.getItem('emojis-activated')) {
    emojisActived = true
    activatePlugin()
  } else {
    sendActivationMessageIfUserIsHost()
  }
  feedbackMessageAfterEvent()
}

export async function reactWith(reaction) {
  const peopleCount = (await Users.everyone()).length
  const config = [
    { min: 500, emojiCount: 1 },
    { min: 250, emojiCount: 2 },
    { min: 100, emojiCount: 3 },
    { min: 0, emojiCount: 4 }
  ]

  const emojisCount = config.find(c => peopleCount > c.min).emojiCount

  PubSub.publish('live-reaction', {
    data: { reaction, emojisCount }
  })

}

export function preview() {
  NotificationCenter.showIframe(liveReactionTemplate, { emojisCount: 4, reaction: 'https://plugin-assets.ireland.production.livestorm.io/emoji-reactions/%2B1.png' })
  setTimeout(() => NotificationCenter.showIframe(liveReactionTemplate, {  emojisCount: 2, reaction: 'https://plugin-assets.ireland.production.livestorm.io/emoji-reactions/heart_eyes.png' }), 200)
}

function activatePlugin() {
  RegisterStageButton.register({
    label: '',
    imageSource: 'https://plugin-assets.ireland.production.livestorm.io/emoji-reactions/smile@2x.png',
    iframe: {
      template: pickReactionTemplate,
      variables: {},
      width: 290,
      height: 35,
      onMessage: async (event) => {
        reactWith(event.clickedElement)
      }
    }
  })
  listenIncomingMessagesForReaction()
}
