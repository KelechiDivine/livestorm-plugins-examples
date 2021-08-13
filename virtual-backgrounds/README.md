# Livestorm plugin Virtual Background

Add awesome visual effects to your video stream 😱.
Whether you want to use them for privacy reasons or just for fun, we are sure you will love them ! 

![reaction example](https://github.com/livestorm/livestorm-plugins-examples/blob/master/virtual-backgrounds/animation.gif?raw=true)

[Read the full documentation of Livestorm Plugins](https://github.com/livestorm/livestorm-plugin)

## The APIs used

### `Streams.registerMultipleCameraEffects()`

We use this API to expose all the camera effects in Livestorm background effects list. 

Mostly the logic behind the camera effects lies in the templates and the tflite models.
By the way, this is greatly inspired from Jitsi's open source implementation of virtual backgrounds, we are very grateful for their help!


Find out more about this API [here](https://developers.livestorm.co/docs/streams).

### `Streams.registerCameraEffectButton()`

We use this API to allow users to send their own photo to use as a virtual background.

By displaying a custom button within the camera effect list we can get a callback whenever someone clicks on it and then we can prompt the user for their image, and then we simply register a new camera effect containing the photo chosen by the user.

#### `Configuration`

We use the `Configuration` API to get the language of the event in order to display translated labels and strings.



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
