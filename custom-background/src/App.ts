import { PubSub, Theme, Storage } from '@livestorm/plugin'

export default async function() {
  // Retrieving the value stored in the settings
  const color = await Storage.getItem('background-color')
  
  if (color) {
    Theme.setBackground({
      hue: Number(color),
      saturation: 100
    })
  }


  // That's how we update settings on the fly
  PubSub.subscribe('change-color', ({ hue }: { hue: number }) => {
    Theme.setBackground({
      hue: hue,
      saturation: 100
    })
  })
}