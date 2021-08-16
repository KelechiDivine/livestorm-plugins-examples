# Livestorm plugin Direct Messaging

Chat privately with other attendees during an Event.
Answer questions in private, explain something to anybody without disturbing the entire event !

![message example](https://github.com/livestorm/livestorm-plugins-examples/blob/master/direct-messaging/animation.gif?raw=true)

[Read the full documentation of Livestorm Plugins](https://github.com/livestorm/livestorm-plugin)

## The APIs used

### `Chat.intercept()`

We use this API to intercept chat messages that start with `/dm @`.
Once intercepted, we remove `/dm`, resolve the name of the user (the `@` something), send we send him/her the rest of the message in private.

Find out more about this API [here](https://developers.livestorm.co/docs/chat#intercept).

### `Chat.send()`

We use this API to send a message in the Chat whenever someone sends a DM.
We combine this API with the PubSub API in order to publish the message only to the correct recipient.

Find out more about this API [here](https://developers.livestorm.co/docs/chat#send).

### `PubSub`

We use this API to dispatch private messages via Websockets between attendees.
Everyone `subscribe()` to their own messaging channel (`dm-to-${me.id}`), then whenever a DM is sent, it is dispatched only to the channel corresponding to the recipient (ex: `dm-to-1235`). 

Find out more about this API [here](https://developers.livestorm.co/docs/pubsub).

### `Chat.Buttons.registerChatShareButton()`

We use this API to register a button in the (+) menu of the Chat, allowing the user to prefill the `<textarea>` with the correct command.

Find out more about this API [here](https://developers.livestorm.co/docs/chat#buttonsregisterchatsharebutton).

### `Users.me()`

We use the `Users` API to retrieve the information associated with the current user. This is used to subscribe to messages published to the ID of the connected user.

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
