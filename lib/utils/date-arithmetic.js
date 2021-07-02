'use strict'

exports.__esModule = true
exports.add = add
exports.subtract = subtract
exports.startOf = startOf
exports.endOf = endOf
exports.min = min
exports.max = max
exports.inRange = inRange
exports.decade = decade
exports.century = century
exports.weekday = weekday
exports.diff = diff
exports.year = exports.month = exports.date = exports.day = exports.hours = exports.minutes = exports.seconds = exports.milliseconds = exports.lte = exports.lt = exports.gte = exports.gt = exports.neq = exports.eq = void 0

var _dateFns = require('date-fns')

var _startOfs

var MILI = 'milliseconds',
  SECONDS = 'seconds',
  MINUTES = 'minutes',
  HOURS = 'hours',
  DAY = 'day',
  WEEK = 'week',
  MONTH = 'month',
  YEAR = 'year',
  DECADE = 'decade',
  CENTURY = 'century'
var multiplierMilli = {
  milliseconds: 1,
  seconds: 1000,
  minutes: 60 * 1000,
  hours: 60 * 60 * 1000,
  day: 24 * 60 * 60 * 1000,
  week: 7 * 24 * 60 * 60 * 1000,
}
var multiplierMonth = {
  month: 1,
  year: 12,
  decade: 10 * 12,
  century: 100 * 12,
}

function daysOf(year) {
  return [31, daysInFeb(year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
}

function daysInFeb(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ? 29 : 28
}

function add(d, num, unit) {
  d = new Date(d)

  switch (unit) {
    case MILI:
    case SECONDS:
    case MINUTES:
    case HOURS:
    case DAY:
    case WEEK:
      return addMillis(d, num * multiplierMilli[unit])

    case MONTH:
    case YEAR:
    case DECADE:
    case CENTURY:
      return addMonths(d, num * multiplierMonth[unit])
  }

  throw new TypeError('Invalid units: "' + unit + '"')
}

function addMillis(d, num) {
  var nextDate = new Date(+d + num)
  return solveDST(d, nextDate)
}

function addMonths(d, num) {
  var year = d.getFullYear(),
    month = d.getMonth(),
    day = d.getDate(),
    totalMonths = year * 12 + month + num,
    nextYear = Math.trunc(totalMonths / 12),
    nextMonth = totalMonths % 12,
    nextDay = Math.min(day, daysOf(nextYear)[nextMonth])
  var nextDate = new Date(d)
  nextDate.setFullYear(nextYear) // To avoid a bug when sets the Feb month
  // with a date > 28 or date > 29 (leap year)

  nextDate.setDate(1)
  nextDate.setMonth(nextMonth)
  nextDate.setDate(nextDay)
  return nextDate
}

function solveDST(currentDate, nextDate) {
  var currentOffset = currentDate.getTimezoneOffset(),
    nextOffset = nextDate.getTimezoneOffset() // if is DST, add the difference in minutes
  // else the difference is zero

  var diffMinutes = nextOffset - currentOffset
  return new Date(+nextDate + diffMinutes * multiplierMilli.minutes)
}

function subtract(d, num, unit) {
  return add(d, -num, unit)
}

var startOfs =
  ((_startOfs = {}),
  (_startOfs[CENTURY] = function(d) {
    d = (0, _dateFns.startOfMonth)(d)
    return subtract(d, year(d) % 100, 'year')
  }),
  (_startOfs[DECADE] = function(d) {
    d = (0, _dateFns.startOfMonth)(d)
    return subtract(d, year(d) % 10, 'year')
  }),
  (_startOfs[YEAR] = _dateFns.startOfYear),
  (_startOfs[MONTH] = _dateFns.startOfMonth),
  (_startOfs[WEEK] = _dateFns.startOfWeek),
  (_startOfs[DAY] = _dateFns.startOfDay),
  (_startOfs[MINUTES] = _dateFns.startOfMinute),
  (_startOfs[SECONDS] = _dateFns.startOfSecond),
  _startOfs)

function startOf(d, unit, firstOfWeek) {
  if (!unit) return d
  var fn = startOfs[unit]

  if (!fn) {
    console.log('fn not found', unit) // eslint-disable-line

    return d
  }

  return fn(d, firstOfWeek)
}

function endOf(d, unit, firstOfWeek) {
  d = new Date(d)
  d = startOf(d, unit, firstOfWeek)

  switch (unit) {
    case CENTURY:
    case DECADE:
    case YEAR:
    case MONTH:
    case WEEK:
      d = add(d, 1, unit)
      d = subtract(d, 1, DAY)
      d.setHours(23, 59, 59, 999)
      break

    case DAY:
      d.setHours(23, 59, 59, 999)
      break

    case HOURS:
    case MINUTES:
    case SECONDS:
      d = add(d, 1, unit)
      d = subtract(d, 1, MILI)
  }

  return d
}

var eq = createComparer(function(a, b) {
  return a === b
})
exports.eq = eq
var neq = createComparer(function(a, b) {
  return a !== b
})
exports.neq = neq
var gt = createComparer(function(a, b) {
  return a > b
})
exports.gt = gt
var gte = createComparer(function(a, b) {
  return a >= b
})
exports.gte = gte
var lt = createComparer(function(a, b) {
  return a < b
})
exports.lt = lt
var lte = createComparer(function(a, b) {
  return a <= b
})
exports.lte = lte

function min() {
  return new Date(Math.min.apply(Math, arguments))
}

function max() {
  return new Date(Math.max.apply(Math, arguments))
}

function inRange(day, min, max, unit) {
  unit = unit || 'day'
  return (!min || gte(day, min, unit)) && (!max || lte(day, max, unit))
}

var milliseconds = createAccessor('Milliseconds')
exports.milliseconds = milliseconds
var seconds = createAccessor('Seconds')
exports.seconds = seconds
var minutes = createAccessor('Minutes')
exports.minutes = minutes
var hours = createAccessor('Hours')
exports.hours = hours
var day = createAccessor('Day')
exports.day = day
var date = createAccessor('Date')
exports.date = date
var month = createAccessor('Month')
exports.month = month
var year = createAccessor('FullYear')
exports.year = year

function decade(d, val) {
  return val === undefined ? year(startOf(d, DECADE)) : add(d, val + 10, YEAR)
}

function century(d, val) {
  return val === undefined ? year(startOf(d, CENTURY)) : add(d, val + 100, YEAR)
}

function weekday(d, val, firstDay) {
  var w = (day(d) + 7 - (firstDay || 0)) % 7
  return val === undefined ? w : add(d, val - w, DAY)
}

function diff(date1, date2, unit, asFloat) {
  var dividend, divisor, result

  switch (unit) {
    case MILI:
    case SECONDS:
    case MINUTES:
    case HOURS:
    case DAY:
    case WEEK:
      dividend = date2.getTime() - date1.getTime()
      break

    case MONTH:
    case YEAR:
    case DECADE:
    case CENTURY:
      dividend = (year(date2) - year(date1)) * 12 + month(date2) - month(date1)
      break

    default:
      throw new TypeError('Invalid units: "' + unit + '"')
  }

  switch (unit) {
    case MILI:
      divisor = 1
      break

    case SECONDS:
      divisor = 1000
      break

    case MINUTES:
      divisor = 1000 * 60
      break

    case HOURS:
      divisor = 1000 * 60 * 60
      break

    case DAY:
      divisor = 1000 * 60 * 60 * 24
      break

    case WEEK:
      divisor = 1000 * 60 * 60 * 24 * 7
      break

    case MONTH:
      divisor = 1
      break

    case YEAR:
      divisor = 12
      break

    case DECADE:
      divisor = 120
      break

    case CENTURY:
      divisor = 1200
      break

    default:
      throw new TypeError('Invalid units: "' + unit + '"')
  }

  result = dividend / divisor
  return asFloat ? result : Math.round(result)
}

function createAccessor(method) {
  var hourLength = (function(method) {
    switch (method) {
      case 'Milliseconds':
        return 3600000

      case 'Seconds':
        return 3600

      case 'Minutes':
        return 60

      case 'Hours':
        return 1

      default:
        return null
    }
  })(method)

  return function(d, val) {
    if (val === undefined) return d['get' + method]()
    var dateOut = new Date(d)
    dateOut['set' + method](val)

    if (
      hourLength &&
      dateOut['get' + method]() != val &&
      (method === 'Hours' ||
        (val >= hourLength &&
          dateOut.getHours() - d.getHours() < Math.floor(val / hourLength)))
    ) {
      //Skip DST hour, if it occurs
      dateOut['set' + method](val + hourLength)
    }

    return dateOut
  }
}

function createComparer(operator) {
  return function(a, b, unit) {
    return operator(+startOf(a, unit), +startOf(b, unit))
  }
}
