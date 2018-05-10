# Vectors
A immutable **arbitrary dimension** vector libary for Javascript.

This library provides [`VectorN`](#vectorn) [`Vector3`](#vector3) [`Vector2`](#vector2)

## Install
via NPM/Yarn
```sh
npm i antfu/vectors
```
or in browsers
```html
<script src="https://raw.com/antfu/vectors/dist/vectors.umd.js"></script>
```

## Classes
### VectorN
`VectorN` is **arbitrary dimension** vector with some basic methods.
```js
import { VectorN } from 'vectors'

const vec4D = new VectorN(4, [0, 2, 3, 4])
```

### Vector3
`Vector3` is 3D vector extended from `VectorN` and with some 3D specfic methods.
```js
import { Vector3 } from 'vectors'

const v3 = new Vector3(1, 2, 3)
```

### Vector2
`Vector2` is 2D vector extended from `VectorN` and with some 2D specfic methods.
```js
import { Vector2 } from 'vectors'

const v2 = new Vector2(2, 3)
```

## License
MIT [@antfu](https://github.com/antfu) 2018