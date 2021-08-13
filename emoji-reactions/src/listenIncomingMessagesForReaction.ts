import { Chat } from '@livestorm/plugin'
import { reactWith } from './liveReactionListener'
import emojisList from './emojisList'

export default function listenIncomingMessagesForReaction() {
  Chat.listen(({ content, scope }) => {
    if (scope) return

    const match = emojisList.find((emoji) => `:${emoji}:` === content)
    if (match) reactWith(`https://plugin-assets.ireland.production.livestorm.io/emoji-reactions/${encodeURIComponent(match)}.png`)
  })
}
