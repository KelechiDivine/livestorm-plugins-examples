import { Configuration } from '@livestorm/plugin'

const translations = {
  "fr": {
    "general": {
      "tag": "Pour vous seulement"
    },
    "activationMessage": {
      "text": "Voulez-vous activer les réactions Emoji pour vos participants ?",
      "activate": "Activer",
      "dismiss": "Ignorer",
      "preview": "Essayer"
    },
    "feedbackMessage": {
      "text": "Qu'avez-vous pensé des réactions Emoji ?",
      "after": "Merci pour votre feedback !"
    }
  },
  "en": {
    "general": {
      "tag": "Only visible to you"
    },
    "activationMessage": {
      "text": "Would you like to activate Emoji Reactions for your attendees?",
      "activate": "Activate",
      "dismiss": "Dismiss",
      "preview": "Preview"
    },
    "feedbackMessage": {
      "text": "What did you think of the Emoji Reactions?",
      "after": "Thank you for your feedback!"
    }
  }
}

export default function () {
  const locale = Configuration.locale

  if (translations[locale]) return translations[locale]
  return translations.en
}