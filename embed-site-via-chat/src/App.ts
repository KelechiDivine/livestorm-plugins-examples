import { Chat, Streams, Users } from '@livestorm/plugin'
const template = require('./iframe.html').default

export default async function() {
  const connected_user = await Users.me();

  function sendChatError(text){
    Chat.send({
      user: {
        firstName: 'Livestorm',
        lastName: 'Bot'
      },
      text: text
    });
  }

  function createEmbedStream(url){
    var template_options = {
      title : 'Embed Stream',
      imageUrl: '',
      template: template,
      variables: { url: url },
      onMessage: (message) => {}
    };
    Streams.addStream(template_options);
  }

  function validateUrl(url){
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
    if (connected_user.is_team_member || connected_user.is_guest_speaker){
      createEmbedStream(url);
    }
    else{
      sendChatError('Sorry, embedding is limited to guest speakers and team members.');
      return;
    }
  })
}