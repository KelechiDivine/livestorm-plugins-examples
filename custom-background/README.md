# Livestorm plugin Custom Background

Just a small plugin to customize the background of the room.
This is actually a plugin allowing you to understand how the `Settings` API works

![message example](https://github.com/livestorm/livestorm-plugins-examples/blob/master/custom-background/animation.gif?raw=true)

[Read the full documentation of Livestorm Plugins](https://github.com/livestorm/livestorm-plugin)

## The APIs used

### `Theme.setBackground()`

This API is used to customize the background color.

Find out more about this API [here](https://developers.livestorm.co/docs/theme#setbackground).

### `Storage`

We use `Storage.setItem()` to persist the color of the background that the user entered in the settings of the plugins.
Then we use the `Storage.getItem()` method to retrieve the color back when users enter the room, that way we can set the proper background color.

Find out more about this API [here](https://developers.livestorm.co/docs/storage).

### `PubSub`

We use `subscribe()` and `publish()` APIs to update settings on the fly.
Whenever settings change in Livestorm's dashboard, the room is updated in realtime.  

Find out more about this API [here](https://developers.livestorm.co/docs/pubsub).

### `Settings.register()`

We use this API to activate a `Settings` application. That's the entry point of the plugin when loaded from Livestorm dashboard.

Find out more about this API [here](https://developers.livestorm.co/docs/settings#register).

### `Settings.Event.registerTemplate()`

We use this API to create the settings panel in the events settings dashboard. 
This is where we can add a form to prompt users for the color they want to set as background.

Find out more about this API [here](https://developers.livestorm.co/docs/settings).


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
