/**
 * Imports
 */

var applyStyles = require('@f/apply-styles')
var position = require('..')
var test = require('tape')

/**
 * Tests
 */

test('should work', function (t) {
  t.deepEqual(check('left'), {left: -60, top: 5})
  t.deepEqual(check('right'), {left: 140, top: 5})
  t.deepEqual(check('top'), {left: 15, top: -70})
  t.deepEqual(check('bottom'), {left: 15, top: 80})

  t.end()
})

/**
 * Helpers
 */

function $ (html) {
  document.body.style.margin = '0px'
  document.body.style.position = 'relative'
  document.body.innerHTML = html
  return document.body.firstChild
}

function check (placement, space) {
  var near = $('<div style="position:relative;width:50px;height:50px;left:40px;top:30px;"></div><div style="width:100px;height:100px;position:absolute"></div>')
  var node = near.nextSibling

  position(node, near, placement, space)
  return getStyle(node)
}

function getStyle (node) {
  var left = Number(node.style.left.slice(0, -2))
  var top = Number(node.style.top.slice(0, -2))

  return {
    left: left,
    top: top
  }
}
