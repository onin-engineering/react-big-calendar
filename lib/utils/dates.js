'use strict'

exports.__esModule = true
exports.monthsInYear = monthsInYear
exports.firstVisibleDay = firstVisibleDay
exports.lastVisibleDay = lastVisibleDay
exports.visibleDays = visibleDays
exports.ceil = ceil
exports.range = range
exports.merge = merge
exports.eqTime = eqTime
exports.isJustDate = isJustDate
exports.duration = duration
exports.diff = diff
exports.total = total
exports.week = week
exports.today = today
exports.yesterday = yesterday
exports.tomorrow = tomorrow
exports.startOf = exports.truncateToMinutes = exports.truncateToDays = exports.seconds = exports.month = exports.minutes = exports.min = exports.milliseconds = exports.max = exports.lte = exports.lt = exports.inRange = exports.hours = exports.gte = exports.gt = exports.eq = exports.endOf = exports.add = void 0

var dates = _interopRequireWildcard(require('date-arithmetic'))

exports.add = dates.add
exports.endOf = dates.endOf
exports.eq = dates.eq
exports.gt = dates.gt
exports.gte = dates.gte
exports.hours = dates.hours
exports.inRange = dates.inRange
exports.lt = dates.lt
exports.lte = dates.lte
exports.max = dates.max
exports.milliseconds = dates.milliseconds
exports.min = dates.min
exports.minutes = dates.minutes
exports.month = dates.month
exports.seconds = dates.seconds

function _getRequireWildcardCache(nodeInterop) {
  if (typeof WeakMap !== 'function') return null
  var cacheBabelInterop = new WeakMap()
  var cacheNodeInterop = new WeakMap()
  return (_getRequireWildcardCache = function _getRequireWildcardCache(
    nodeInterop
  ) {
    return nodeInterop ? cacheNodeInterop : cacheBabelInterop
  })(nodeInterop)
}

function _interopRequireWildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj
  }
  if (obj === null || (typeof obj !== 'object' && typeof obj !== 'function')) {
    return { default: obj }
  }
  var cache = _getRequireWildcardCache(nodeInterop)
  if (cache && cache.has(obj)) {
    return cache.get(obj)
  }
  var newObj = {}
  var hasPropertyDescriptor =
    Object.defineProperty && Object.getOwnPropertyDescriptor
  for (var key in obj) {
    if (key !== 'default' && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor
        ? Object.getOwnPropertyDescriptor(obj, key)
        : null
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc)
      } else {
        newObj[key] = obj[key]
      }
    }
  }
  newObj.default = obj
  if (cache) {
    cache.set(obj, newObj)
  }
  return newObj
}

/* eslint no-fallthrough: off */
var MILLI = {
  seconds: 1000,
  minutes: 1000 * 60,
  hours: 1000 * 60 * 60,
  day: 1000 * 60 * 60 * 24,
}
var MONTHS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

function monthsInYear(year) {
  var date = new Date(year, 0, 1)
  return MONTHS.map(function(i) {
    return dates.month(date, i)
  })
}

function firstVisibleDay(date, localizer) {
  var firstOfMonth = startOf(date, 'month')
  return startOf(firstOfMonth, 'week', localizer.startOfWeek())
}

function lastVisibleDay(date, localizer) {
  var endOfMonth = dates.endOf(date, 'month')
  return dates.endOf(endOfMonth, 'week', localizer.startOfWeek())
}

function visibleDays(date, localizer) {
  var current = firstVisibleDay(date, localizer),
    last = lastVisibleDay(date, localizer),
    days = []

  while (dates.lte(current, last, 'day')) {
    days.push(current)
    current = dates.add(current, 1, 'day')
  }

  return days
}

function ceil(date, unit) {
  var floor = startOf(date, unit)
  return dates.eq(floor, date) ? floor : dates.add(floor, 1, unit)
}

function range(start, end, unit) {
  if (unit === void 0) {
    unit = 'day'
  }

  var current = start,
    days = []

  while (dates.lte(current, end, unit)) {
    days.push(current)
    current = dates.add(current, 1, unit)
  }

  return days
}

function merge(date, time) {
  if (time == null && date == null) return null
  if (time == null) time = new Date()
  if (date == null) date = new Date()
  if (typeof date === 'number') time = new Date(date)
  if (typeof time === 'number') time = new Date(time)
  date = startOf(date, 'day')
  date = dates.hours(date, dates.hours(time))
  date = dates.minutes(date, dates.minutes(time))
  date = dates.seconds(date, dates.seconds(time))
  return dates.milliseconds(date, dates.milliseconds(time))
}

function eqTime(dateA, dateB) {
  return (
    dates.hours(dateA) === dates.hours(dateB) &&
    dates.minutes(dateA) === dates.minutes(dateB) &&
    dates.seconds(dateA) === dates.seconds(dateB)
  )
}

function isJustDate(date) {
  return (
    dates.hours(date) === 0 &&
    dates.minutes(date) === 0 &&
    dates.seconds(date) === 0 &&
    dates.milliseconds(date) === 0
  )
}

function duration(start, end, unit, firstOfWeek) {
  if (unit === 'day') unit = 'date'
  return Math.abs(
    dates[unit](start, undefined, firstOfWeek) -
      dates[unit](end, undefined, firstOfWeek)
  )
}

var truncateToDays = function truncateToDays(x) {
  return Math.floor(x / 86400000)
}

exports.truncateToDays = truncateToDays

var truncateToMinutes = function truncateToMinutes(x) {
  return Math.floor(x / 60000)
}

exports.truncateToMinutes = truncateToMinutes

var startOf = function startOf(d, unit) {
  if (unit === 'week') return d / 604800000
  if (unit === 'day') return d / 86400000
  if (unit === 'hour') return d / 3600000
  if (unit === 'minutes') return d / 60000
  if (unit === 'seconds') return d / 1000
  if (unit === 'milliseconds') return d
}

exports.startOf = startOf

function diff(dateA, dateB, unit) {
  if (!unit || unit === 'milliseconds') return Math.abs(+dateA - +dateB) // the .round() handles an edge case
  // with DST where the total won't be exact
  // since one day in the range may be shorter/longer by an hour

  return Math.round(
    Math.abs(
      startOf(dateA, unit) / MILLI[unit] - startOf(dateB, unit) / MILLI[unit]
    )
  )
}

function total(date, unit) {
  var ms = date.getTime(),
    div = 1

  switch (unit) {
    case 'week':
      div *= 7

    case 'day':
      div *= 24

    case 'hours':
      div *= 60

    case 'minutes':
      div *= 60

    case 'seconds':
      div *= 1000
  }

  return ms / div
}

function week(date) {
  var d = new Date(date)
  d.setHours(0, 0, 0)
  d.setDate(d.getDate() + 4 - (d.getDay() || 7))
  return Math.ceil(((d - new Date(d.getFullYear(), 0, 1)) / 8.64e7 + 1) / 7)
}

function today() {
  return startOf(new Date(), 'day')
}

function yesterday() {
  return dates.add(startOf(new Date(), 'day'), -1, 'day')
}

function tomorrow() {
  return dates.add(startOf(new Date(), 'day'), 1, 'day')
}
