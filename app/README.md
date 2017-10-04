# A-Frame with Create-React-App Demo

## Step 1: 

Run `create-react-app` in the root of your project folder. 

```
create-react-app app
```

After your app has been created cd into it and run `npm start`.

``` 
cd app && npm start
```

## Step 2: 

Install required dependencies: 
  - aframe
  - aframe-animation-component
  - aframe-particle-system-component
  - aframe-react
  - babel-polyfill

To do this you can run the following in your terminal: 
  
  ```
  npm i aframe aframe-animation-component aframe-particle-system-component aframe-react babel-polyfill
  ```

## Step 3 

Now import all of those dependancies into your app.js. We will need to import Entity and Scene from aframe-react.

```
import 'aframe';
import 'aframe-animation-component';
import 'aframe-particle-system-component';
import 'babel-polyfill';
import {Entity, Scene} from 'aframe-react';
```


## Step 4 

Inside the return remove what create-react-app gave you and add just a Scene tag. 
<Scene>
</Scene>

```
class App extends Component {

  render() {
    return (
      <Scene>

      </Scene>
    )
  }
}
```


## Step 5 

We will now add our first Entity tag. 

A-Frame provides a handful of elements such as `a-box` or `a-sky` called primitives that wrap the entity-component pattern to make it appealing for beginners. Developers can create their own primitives as well. 

For our first entity we will be using `a-sky`. Within the Entity tag add primitive and set it equal to a-sky.

The sky primitive adds a background color or 360° image to a scene. A sky is a large sphere with a color or texture mapped to the inside.

```
<Entity primitive="a-sky" />
```

We now need to add a background image to the sky. We will be using the following image for this demo:

![alt text](https://ucarecdn.com/19a73c27-dc44-4e15-9d49-e93fd70d8014/)

```
<Entity primitive="a-sky" src="https://ucarecdn.com/19a73c27-dc44-4e15-9d49-e93fd70d8014/" />
```

Use an equirectangular image as a background for the best result. 

If you want to do a plan color instead of an image you can use `color="#444" ` instead of a `src=""`

```
<Entity primitive="a-sky" color="#444" />

```

## Adding Camera and Curser Primitives

The camera primitive determines what the user sees. We can change the viewport by modifying the camera entity’s position and rotation.

The cursor primitive is a reticle that allows for clicking and basic interactivity with a scene on devices that do not have a hand controller. The default appearance is a ring geometry. The cursor is usually placed as a child of the camera.

```
<Entity primitive="a-camera">
    <Entity primitive="a-cursor" animation__click={{property: 'scale', startEvents: 'click', from: '0.1 0.1 0.1', to: '1 1 1', dur: 150}}/>
</Entity>
```

## Adding Snow

In order to add snow we will be using the `aframe-particle-system-component` dependency as this is not a built in A-Frame feature.

Make another Entity tag and give 

<Entity particle-system={{preset: 'snow', particleCount: 8000}}/>


## Resources: 

- https://aframe.io/
- https://cdn.aframe.io/
- https://github.com/aframevr/awesome-aframe
- https://aframe.io/docs/0.7.0/primitives/a-sky.html
- https://aframe.io/docs/0.7.0/primitives/a-camera.html
- https://aframe.io/docs/0.7.0/primitives/a-cursor.html
- 

