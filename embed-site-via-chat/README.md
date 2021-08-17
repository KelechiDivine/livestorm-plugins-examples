# Livestorm plugin Embed Site via Chat

Easily embed webpages using a chat command.
Streamline your embed process by simply embedding sites using '/embed {url}' in the chat bar.

![message example](https://github.com/livestorm/livestorm-plugins-examples/blob/master/direct-messaging/animation.gif?raw=true)

[Read the full documentation of Livestorm Plugins](https://github.com/livestorm/livestorm-plugin)

## The APIs used

### `Chat.intercept()`

We use this API to intercept chat messages that start with `/embed`.
Once intercepted, we remove `/embed`, validate the entered URL and hence load a stream displaying an iframe with the entered URL.

Find out more about this API [here](https://developers.livestorm.co/docs/chat#intercept).

### `Chat.send()`

We use this API to send a message in the Chat visible to only the user intiating the request, if we notice an invalid URL or that the user is not a team member or guest speaker.

Find out more about this API [here](https://developers.livestorm.co/docs/chat#send).

### `Streams.addStream()`

We use this API in order to load our URL's content in an iFrame, in order for it to be visible for the other participants of the event.

Please note that URLs that have the [`Same origin` flag] or a restriction on the [`X-FRAME-OPTIONS` flag] would not be able to load in the iFrame as the source websites do not allow it.

Find out more about this API [here](https://developers.livestorm.co/docs/streams#addstream).

### `Users.me()`

We use the `Users` API to retrieve the information associated with the current user. This is used to ensure that the user initiating the request is a team member or a guest speaker.

## Requirements

- NodeJS (any recent version >12 will do)
- npm
- yarn (this is optional but below commands use it)

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