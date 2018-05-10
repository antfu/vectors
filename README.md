# Vectors
A immutable **arbitrary dimension** vector libary for Javascript.

This library provide [`VectorN`](#VectorN) [`Vector3`](#Vector3) [`Vector2`](#Vector2)

## Install
via NPM/Yarn
```sh
npm i antfu/vectors
```
in browsers
```html
<script src="https://raw.com/antfu/vectors/dist/vectors.umd.js"></script>
```

## Classes
### VectorN
`VectorN` is **arbitrary dimension** vector with some basic methods.
```js
const vec4D = new VectorN(4, [0, 2, 3, 4])
```

## Vector3
`Vector3` is 3D vector.
```js
const vec3D = new Vector3(1, 2, 3)
```

## Vector2
`Vector2` is 2D vector.
```js
const vec2D = new Vector2(2, 3)
```