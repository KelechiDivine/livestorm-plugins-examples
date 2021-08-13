import { Users, Chat, When, Storage } from '@livestorm/plugin'
import i18n from './i18n'
import track from './tracking'

const gatherFeedbackTemplate: string = require('./templates/gatherFeedbackTemplate.html').default

export default async function feedbackMessageAfterEvent() {
  if (!(await Users.me()).is_host) return

  When.eventEnds(async () => {
    if (!await Storage.getItem('emojis-activated')) return
    if (await Storage.getItem('feedback-sent')) return

    setTimeout(async () => {
      Storage.setItem('feedback-sent', 'true')
      const message = await Chat.send({
        user: {
          firstName: 'Livestorm',
          tag: i18n().general.tag,
          avatarUrl: 'https://livestorm-ireland-plugin-assets.s3-eu-west-1.amazonaws.com/69ed6813-c055-4a06-96a8-14e0f3c9b515/rounded-logo-livestorm.png'
        },
        text: i18n().feedbackMessage.text,
        html: gatherFeedbackTemplate,
      })

      message.onIframeMessage(content => {
        message.destroy()
        Chat.send({
          user: {
            firstName: 'Livestorm',
            tag: i18n().general.tag,
            avatarUrl: 'https://livestorm-ireland-plugin-assets.s3-eu-west-1.amazonaws.com/69ed6813-c055-4a06-96a8-14e0f3c9b515/rounded-logo-livestorm.png'
          },
          text: i18n().feedbackMessage.after,
        })

        track(`feedback-${content.feedback}`)
      })
    }, 3000)
  })
}