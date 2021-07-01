'use strict'

exports.__esModule = true
exports.useWhatChanged = useWhatChanged

var _react = require('react')

function useWhatChanged(values) {
  // The ref object is a generic container whose current property is mutable ...
  // ... and can hold any value, similar to an instance property on a class
  var ref = (0, _react.useRef)() // Store current value in ref

  ;(0, _react.useEffect)(function() {
    console.group('WHAT_CHANGED')

    if (typeof ref.current === 'undefined') {
      console.log('WHAT_CHANGED', 'INITIAL')
    } else {
      var somethingChanged = false

      for (var key in values) {
        var prev = ref.current[key]

        if (values[key] !== prev) {
          somethingChanged = true
          console.log('WHAT_CHANGED:', key, 'from', prev, 'to', values[key])
        }
      }

      if (!somethingChanged) {
        console.log('WHAT_CHANGED: nothing ?')
      }
    }

    console.groupEnd()
    ref.current = values
  }) // Return previous value (happens before update in useEffect above)

  return ref.current
}
