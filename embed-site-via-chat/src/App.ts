import { Chat, Streams, Users } from '@livestorm/plugin'
const template = require('./iframe.html').default

export default async function() {
  const connectedUser = await Users.me();

  function sendChatError(text) {
    Chat.send({
      user: {
        firstName: 'Livestorm',
        lastName: 'Bot',
        tag: 'Sent privately to you'
      },
      text
    });
  }

  function createEmbedStream(url) {
    var templateOptions = {
      title: 'Embed Stream',
      imageUrl: '',
      template,
      variables: { url },
      onMessage: (message) => {}
    };
    Streams.addStream(templateOptions);
  }

  function validateUrl(url) {
    try { 
      url = new URL(url); 
      return true;
    } 
    catch (e) { return false; }
  }

  Chat.intercept(/\/embed*/, (message) => {
    var url = message.content.toString().split(" ")[1];
    if (!validateUrl(url)){
      sendChatError('The URL you are trying to embed seems to be invalid. Kindly try again.');
      return;
    }
    // Allow only team members and guest speakers to embed
    if (connectedUser.is_team_member || connectedUser.is_guest_speaker){
      createEmbedStream(url);
    }
    else{
      sendChatError('Sorry, embedding is limited to guest speakers and team members.');
      return;
    }
  })
}