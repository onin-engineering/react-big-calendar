'use strict'

exports.__esModule = true
exports.default = void 0

var sum = function sum(x) {
  var s = 0

  for (var i = 0; i < x.length; i++) {
    s += x[i]
  }

  return s
}

var mean = function mean(x) {
  return sum(x) / x.length
}

var createTimer = function createTimer() {
  var started = {}
  var timings = {}

  var time = function time(label) {
    started[label] = performance.now()
  }

  var timeEnd = function timeEnd(label) {
    var end = performance.now()

    if (started[label]) {
      timings[label] = timings[label] || []
      timings[label].push(end - started[label])
    }
  }

  var total = function total(label) {
    return sum(timings[label] || [])
  }

  var average = function average(label) {
    return mean(timings[label] || [])
  }

  var count = function count(label) {
    return (timings[label] || []).length
  }

  var totals = function totals() {
    return Object.keys(timings).map(function(label) {
      return {
        label: label,
        total: total(label),
      }
    })
  }

  return {
    time: time,
    timeEnd: timeEnd,
    timings: timings,
    average: average,
    count: count,
    total: total,
    totals: totals,
  }
}

var _default = createTimer
exports.default = _default
module.exports = exports.default
