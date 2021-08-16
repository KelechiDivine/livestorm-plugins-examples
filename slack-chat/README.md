# Livestorm plugin Slack Chat

Forward messages sent in the Chat of an ended event to a Slack Channel.
This is particularly useful for on-demand events and to chat with users checking out the replays of your events.

## Configuring the plugin

To configure the plugin you need to create an app on your Slack workspace and then create a webhook using [this page](https://api.slack.com/messaging/webhooks). You will be able to choose the channel that will receive the messages.
Once you have this webhook URL, modify the following variables in the `src/App.ts` file:
```javascript
const webHookURL = 'https://hooks.slack.com/services/XXXXXXXX'
const introText = 'Hello there ! 👋 The event is finished but we\'re still here to help ! Post a message in the chat and our team will read it instantly'
```

Please note that at the time of writing (August 16th 2021) we have still not released any `Settings` API that would remove the need for having hardcoded variable,instead developers will be able to create settings panel that will allow users to configure plugins from their event settings.


![reaction example](https://github.com/livestorm/livestorm-plugins-examples/blob/master/slack-chat/animation.gif?raw=true)

[Read the full documentation of Livestorm Plugins](https://github.com/livestorm/livestorm-plugin)

## The APIs used

### `When.eventEnds()`

We use this API to detect when the event ends in order to start forwarding messages to the configured Slack channel. 


Find out more about this API [here](https://developers.livestorm.co/docs/when#eventends).

### `Chat.send()`

We use this API to send a welcome message to the users entering the room.
The message can be configured, the idea of this message is to inform the user that despite the event being finished, he will be able to communicate in real time with the organizers of the event.

Find out more about this API [here](https://developers.livestorm.co/docs/chat#send).

### `Users.me()`

We use this API to retrieve the connected user and send his information (first name, last name) alongside the message forwarded to Slack.

Find out more about this API [here](https://developers.livestorm.co/docs/users#me).


## Requirements

- NodeJS (any recent version >12 will do)
- npm
- yarn (this is optionnal but below commands use it)

## Getting started

First off, install the Livestorm plugin CLI : 

```
yarn global add @livestorm/cli
```

Then create an `environments.json` file at the root and fill in your credentials following [this guide](https://developers.livestorm.co/docs/managing-environments).

Then run :
```
yarn
livestorm publish
```

And voilà !
