# A-Frame with Create-React-App Demo

## Step 1: 

  * Run `create-react-app app` in the root of your project folder. 

  * After your app has been created cd into it and run `npm start`.

## Step 2: 

 * Install required dependencies: 
      - aframe
      - aframe-animation-component
      - aframe-particle-system-component
      - aframe-react
      - babel-polyfill

  * To do this you can run the following in your terminal: 
  
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









## Resources: 

- https://aframe.io/
- https://cdn.aframe.io/
- https://github.com/aframevr/awesome-aframe

