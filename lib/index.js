/**
 * Modules
 */

var getRect = require('@f/element-rect')
var applyStyles = require('@f/apply-styles')
var computePlacement = require('@f/compute-placement')

/**
 * Expose positionElement
 */

module.exports = positionElement

/**
 * positionElement
 */

function positionElement (node, near, placement, space) {
  var nodeDims = getRect(node)
  var nearRect = getRect(near, true)
  var pos = computePlacement(placement, nodeDims, nearRect, space)

  applyStyles(node, pos)
}
