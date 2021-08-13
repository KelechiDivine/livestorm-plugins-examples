import { Configuration } from '@livestorm/plugin'

const translations = {
  "fr": {
    image : {
      label : {
        "lightBlur": "Léger flou",
        "mediumBlur": "Flou",
        "strongBlur": "Flou intense",
        "turquoise": "Turquoise",
        "red": "Rouge",
        "orange": "Orange",
        "blue": "Bleu",
        "grey": "Gris",
        "green": "Vert",
        "darkBlue": "Bleu foncé",
        "openSpace": "Open Space",
        "deco": "Deco",
        "chill": "Chill",
        "lounge": "Lounge",
      }
    },
    uploadCustomBackground: {
      label: "Ajouter un arrière-plan"
    }
  },
  "en": {
    image : {
      label : {
        "lightBlur": "Light Blur",
        "mediumBlur": "Medium Blur",
        "strongBlur": "Strong Blur",
        "turquoise": "Turquoise",
        "red": "Red",
        "orange": "Orange",
        "blue": "Blue",
        "grey": "Grey",
        "green": "Green",
        "darkBlue": "Dark Blue",
        "openSpace": "Open Space",
        "deco": "Deco",
        "chill": "Chill",
        "lounge": "Lounge",
      }
    },
    uploadCustomBackground: {
      label: "Upload custom background"
    }
  },
}

export default function () {
  const locale = Configuration.locale
  if (translations[locale]) return translations[locale]
  return translations.en
}
