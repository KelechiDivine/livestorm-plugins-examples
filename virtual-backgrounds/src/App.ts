import { Streams } from '@livestorm/plugin'
import i18n from './i18n'
const template = require('./virtual-background.html').default
export default function (): void {

  // Safari does not work with this plugin
  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)

  /**
   * Do not enable on mobile devices
   *
   * As per this page : https://developer.mozilla.org/en-US/docs/Web/HTTP/Browser_detection_using_the_user_agent
   * "In summary, we recommend looking for the string 'Mobi' anywhere in the User Agent to detect a mobile device."
   */
  const isMobile = /Mobi/.test(navigator.userAgent)

  const baseImageURLDir = 'https://plugin-assets.ireland.production.livestorm.io/simple-video-background/images'

  Streams.registerMultipleCameraEffects({
    template,
    disabled: isSafari || isMobile,
    effects: [
      {
        label: i18n().image.label.lightBlur,
        imageUrl : baseImageURLDir + '/Blur1-200x112.png',
        variables: {
          blur: 3,
          backgroundType: 'blur',
        },

      },
      {
        label: i18n().image.label.mediumBlur,
        imageUrl : baseImageURLDir + '/Blur2-200x112.png',
        variables: {
          blur: 6,
          backgroundType: 'blur',
        },
      },
      {
        label: i18n().image.label.strongBlur,
        imageUrl : baseImageURLDir + '/Blur3-200x112.png',
        variables: {
          blur: 9,
          backgroundType: 'blur',
        },
      },
      {
        label: i18n().image.label.openSpace,
        imageUrl: baseImageURLDir + '/open_space-200x112.png',
        variables: {
          imageKey: 'openspace',
          blur: 4,
          backgroundType: 'image',
        }
      },
      {
        label: i18n().image.label.deco,
        imageUrl: baseImageURLDir + '/deco-200x112.png',
        variables: {
          imageKey: 'deco',
          blur: 4,
          backgroundType: 'image',
        }
      },
      {
        label: i18n().image.label.chill,
        imageUrl: baseImageURLDir + '/chill-200x112.png',
        variables: {
          imageKey: 'chill',
          blur: 4,
          backgroundType: 'image',
        }
      },
      {
        label: i18n().image.label.lounge,
        imageUrl: baseImageURLDir + '/lounge-200x112.png',
        variables: {
          imageKey: 'lounge',
          blur: 4,
          backgroundType: 'image',
        }
      },
      {
        label: i18n().image.label.turquoise,
        imageUrl: baseImageURLDir + '/ls_turquoise-200x112.png',
        variables: {
          imageKey: 'turquoise',
          blur: 4,
          backgroundType: 'image',
        }
      },
      {
        label: i18n().image.label.red,
        imageUrl: baseImageURLDir + '/ls_red-200x112.png',
        variables: {
          imageKey: 'red',
          blur: 4,
          backgroundType: 'image',
        }
      },
      {
        label: i18n().image.label.orange,
        imageUrl: baseImageURLDir + '/ls_orange-200x112.png',
        variables: {
          imageKey: 'orange',
          blur: 4,
          backgroundType: 'image',
        }
      },
      {
        label: i18n().image.label.blue,
        imageUrl: baseImageURLDir + '/ls_blue-200x112.png',
        variables: {
          imageKey: 'blue',
          blur: 4,
          backgroundType: 'image',
        }
      },
      {
        label: i18n().image.label.grey,
        imageUrl: baseImageURLDir + '/ls_grey-200x112.png',
        variables: {
          imageKey: 'grey',
          blur: 4,
          backgroundType: 'image',
        }
      },
      {
        label: i18n().image.label.green,
        imageUrl: baseImageURLDir + '/ls_green-200x112.png',
        variables: {
          imageKey: 'green',
          blur: 4,
          backgroundType: 'image',
        }
      },
      {
        label: i18n().image.label.darkBlue,
        imageUrl: baseImageURLDir + '/ls_dark-blue-200x112.png',
        variables: {
          imageKey: 'darkblue',
          blur: 4,
          backgroundType: 'image',
        }
      },
    ]
  })

  Streams.Buttons.registerCameraEffectButton({
    'label': i18n().uploadCustomBackground.label,
    'imageSource': 'https://livestorm-ireland-plugin-assets.s3-eu-west-1.amazonaws.com/19045ffb-6551-409e-b076-26ca96a47da7/upload@2x.png',
    type: 'upload',
    onUpload: ({ url }) => {
      Streams.registerCameraEffect({
        template: template,
        imageUrl: url,
        variables: {
          backgroundImageUrl: url,
          backgroundType: 'image',
        },
        immediateApply: true,
        source: 'user'
      })
    }
  })
}
