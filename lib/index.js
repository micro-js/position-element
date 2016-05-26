/**
 * Modules
 */

var getRect = require('@f/element-rect')
var applyStyles = require('@f/apply-styles')
var offsetParent = require('@f/offset-parent')
var computePlacement = require('@f/compute-placement')

/**
 * Expose positionElement
 */

module.exports = positionElement

/**
 * positionElement
 */

function positionElement (node, placement, opts) {
  opts = opts || {}

  var parent = offsetParent(node)
  var near = opts.near || parent
  var nodeDims = getRect(node)
  var nearRect = getRect(near, true)
  var pos = computePlacement(placement, nodeDims, nearRect, {relative: near === parent, space: opts.space})

  applyStyles(node, pos)
}
