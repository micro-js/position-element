
# position-element

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

Position an element relative to another element

## Installation

    $ npm install @f/position-element

## Usage

```js
var position = require('@f/position-element')

function positionTooltip (tooltip, target, placement) {
  position(tooltip, target, placement)
}
```

## API

### positionElement(node, placement, options)

- `node` - The DOM node you want to position
- `placement` - One of `top/right/bottom/left`. How to position `node` relative to `near`. (e.g. `top` aligns the bottom edge of `node` with the top edge of `near`, horizontally centered)
- `options` - Optional. Options object containing:
  * `near` - The DOM node you want to position `node` relative to. If not specified, `node`'s offsetParent is used.
  * `space` - Optional. Defaults to `0`. Specifies how much padding to add

**Returns:** `void`

## License

MIT

[travis-image]: https://img.shields.io/travis/micro-js/position-element.svg?style=flat-square
[travis-url]: https://travis-ci.org/micro-js/position-element
[git-image]: https://img.shields.io/github/tag/micro-js/position-element.svg?style=flat-square
[git-url]: https://github.com/micro-js/position-element
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/@f/position-element.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@f/position-element
