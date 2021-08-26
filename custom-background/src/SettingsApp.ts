import { Settings, Storage, PubSub } from '@livestorm/plugin'
const template = require('./templates/settings.html').default

export default () => {
  Settings.Event.registerPanel({
    template,
    onMessage: ({ hue }) => {
      /**
       * 
       * We are using the Storage API to persist the color entered in the <input>
       * The 'background-color' key can then be retrieved from the App.ts file 
       * by using Storage.getItem('background-color')
       * 
       */
      Storage.setItem('background-color', hue, { scope: 'event' })

      /**
       * 
       * We are publishing an event to notify everyone in the event's sessions
       * that the background color needs to change.
       * 
       * To catch this event, you need to subscribe() to the same key in the room (App.ts file)
       * 
       */
      PubSub.publish('change-color', {
        data: { hue },
        scope: 'event'
      })
    }
  })
}