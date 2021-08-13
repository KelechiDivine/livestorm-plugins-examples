# Livestorm plugin Emoji Reactions

Add custom emoji reactions to your Livestorm Room 🥳.
This plugin allows users to publish reactions with Emojis.

![reaction example](https://github.com/livestorm/livestorm-plugins-examples/blob/master/emoji-reactions/animation.gif?raw=true)

[Read the full documentation of Livestorm Plugins](https://github.com/livestorm/livestorm-plugin)

## The APIs used

### `Chat.send()`

First, the plugin sends a message in the chat to the moderators of the event.

This message includes a custom template and allows to activate the plugin, preview an emoji reaction and dismiss the message.

<img width="450px" src="https://d33v4339jhl8k0.cloudfront.net/docs/assets/57b4bd36c697917de37ce375/images/6082f714f8c0ef2d98df5a5b/file-9c0l54jk2j.png">

Find out more about this API [here](https://developers.livestorm.co/docs/chat).

#### `PubSub.subscribe()` & `Pubsub.publish()`

This is probably the most important API within this plugin. 
To display the emoji reaction to everyone in the Room, we use the `PubSub` API in order to subscribe and to publish to an event.

Whenever someone clicks on a reaction, we publish a message which everyone receives, and this triggers the Emoji Reaction.
We also use it to automatically hide the above Chat message whenever a moderator activates the emoji reactions.

Find out more about this API [here](https://developers.livestorm.co/docs/pubsub).

#### `Storage.setItem()` & `Storage.getItem()`

These APIs allows the plugin to know whether the emoji reaction was previously activated on an event. 
That way, we know if we have to automatically display the buttons and the message when we enter the room.

Find out more about this API [here](https://developers.livestorm.co/docs/storage).

#### `NotificationCenter.showIframe()`

This API is used to display the actual CSS animation within an HTML template.

Find out more about this API [here](https://developers.livestorm.co/docs/notificationcenter).

#### `Stage.Buttons.registerStageButton()`

This API is used to display the emoji reaction button on the stage whenever emoji reactions are activated.

Find out more about this API [here](https://developers.livestorm.co/docs/stage).

#### `When.eventEnds()`

We use this API to display a Chat message right when the events ends, this allow us to get some feedback from the moderators regarding the use of the plugin.

Find out more about this API [here](https://developers.livestorm.co/docs/when).

#### `Configuration`

We use the `Configuration` API to get some data such as the session ID for tracking purposes, and also to get the language of the event in order to display translated strings.

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
