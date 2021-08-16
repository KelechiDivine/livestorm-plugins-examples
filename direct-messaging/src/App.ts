import { Chat, PubSub, Users } from '@livestorm/plugin'

export default async function() {
  const me = await Users.me()

  Chat.Buttons.registerChatShareButton({
    label: 'Send a private message',
    icon: 'message-circle',
    onClick: () => {
      setInputContent('')
    } 
  })
  Chat.registerMessageAction({
    label: 'Send a private message',
    icon: 'message-circle',
    onClick: (message) => {
      setInputContent(nameAsPseudo(message.user) + ' ')
    }
  })

  PubSub.subscribe(`dm-to-${me.id}`, ({ user, text }: { user: { first_name: string, last_name: string, avatar: { url: string } }, text: string }) => {
    Chat.send({
      user: {
        firstName: user.first_name,
        lastName: user.last_name,
        avatarUrl: user.avatar.url,
        tag: 'Sent privately to you'
      },
      text: `${text}`
    })
  })


  Chat.intercept(/^\/dm/, async ({ content }: { content: string }) => {
    const message = content.split('@')[1].split(' ')
    const userPseudo = message[0]
    message.shift()
    const messageContent = message.join(' ')

    const users = await Users.everyone()
    const recipient = users.find((user) => 
      nameAsPseudo(user) === 
      userPseudo
    )

    if (recipient) {
      const sentToSelf = recipient.id === me.id
      Chat.send({
        user: {
          firstName: me.first_name,
          lastName: me.last_name,
          avatarUrl: me.avatar?.url,
          tag: `Sent privately to ${sentToSelf ? 'yourself' : recipient.first_name}`
        },
        text: messageContent
      })
      
      if (sentToSelf) return

      PubSub.publish(`dm-to-${recipient.id}`, {
        data: {
          text: messageContent,
          user: me
        }
      })
    }
  })
}

function nameAsPseudo(user) {
  return [
    user.first_name,
    user.last_name
  ].join('')
  .normalize("NFD")
  .replace(/[\u0300-\u036f]/g, "")
}

function setInputContent(value) {
  const element: HTMLFormElement = parent.document.querySelector('.tchat-form__textarea')
  
  element.value = '';
  element.value = '/dm @' + value;
  element.focus();
  setCaretPosition(element, 5 + value.length);
  element.dispatchEvent(new Event('input'))
}

function setCaretPosition(element, caretPos) {
  if (element.createTextRange) {
    const range = element.createTextRange();
    range.move('character', caretPos);
    range.select();
  }
  else {
    if(element.selectionStart) {
      element.setSelectionRange(caretPos, caretPos);
    }
  }
}