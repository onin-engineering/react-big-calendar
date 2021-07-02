;(function(global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined'
    ? factory(exports, require('react'), require('react-dom'))
    : typeof define === 'function' && define.amd
    ? define(['exports', 'react', 'react-dom'], factory)
    : ((global = global || self),
      factory((global.ReactBigCalendar = {}), global.React, global.ReactDOM))
})(this, function(exports, React, ReactDOM) {
  'use strict'

  var React__default = 'default' in React ? React['default'] : React
  var ReactDOM__default = 'default' in ReactDOM ? ReactDOM['default'] : ReactDOM

  function NoopWrapper(props) {
    return props.children
  }

  function _extends() {
    _extends =
      Object.assign ||
      function(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i]

          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key]
            }
          }
        }

        return target
      }

    return _extends.apply(this, arguments)
  }

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {}
    var target = {}
    var sourceKeys = Object.keys(source)
    var key, i

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i]
      if (excluded.indexOf(key) >= 0) continue
      target[key] = source[key]
    }

    return target
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf =
      Object.setPrototypeOf ||
      function _setPrototypeOf(o, p) {
        o.__proto__ = p
        return o
      }

    return _setPrototypeOf(o, p)
  }

  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype)
    subClass.prototype.constructor = subClass
    _setPrototypeOf(subClass, superClass)
  }

  function toVal(mix) {
    var k,
      y,
      str = ''

    if (typeof mix === 'string' || typeof mix === 'number') {
      str += mix
    } else if (typeof mix === 'object') {
      if (Array.isArray(mix)) {
        for (k = 0; k < mix.length; k++) {
          if (mix[k]) {
            if ((y = toVal(mix[k]))) {
              str && (str += ' ')
              str += y
            }
          }
        }
      } else {
        for (k in mix) {
          if (mix[k]) {
            str && (str += ' ')
            str += k
          }
        }
      }
    }

    return str
  }

  function clsx() {
    var i = 0,
      tmp,
      x,
      str = ''
    while (i < arguments.length) {
      if ((tmp = arguments[i++])) {
        if ((x = toVal(tmp))) {
          str && (str += ' ')
          str += x
        }
      }
    }
    return str
  }

  /**
   * This method returns the first argument it receives.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Util
   * @param {*} value Any value.
   * @returns {*} Returns `value`.
   * @example
   *
   * var object = { 'a': 1 };
   *
   * console.log(_.identity(object) === object);
   * // => true
   */
  function identity(value) {
    return value
  }

  /**
   * A faster alternative to `Function#apply`, this function invokes `func`
   * with the `this` binding of `thisArg` and the arguments of `args`.
   *
   * @private
   * @param {Function} func The function to invoke.
   * @param {*} thisArg The `this` binding of `func`.
   * @param {Array} args The arguments to invoke `func` with.
   * @returns {*} Returns the result of `func`.
   */
  function apply(func, thisArg, args) {
    switch (args.length) {
      case 0:
        return func.call(thisArg)
      case 1:
        return func.call(thisArg, args[0])
      case 2:
        return func.call(thisArg, args[0], args[1])
      case 3:
        return func.call(thisArg, args[0], args[1], args[2])
    }
    return func.apply(thisArg, args)
  }

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeMax = Math.max

  /**
   * A specialized version of `baseRest` which transforms the rest array.
   *
   * @private
   * @param {Function} func The function to apply a rest parameter to.
   * @param {number} [start=func.length-1] The start position of the rest parameter.
   * @param {Function} transform The rest array transform.
   * @returns {Function} Returns the new function.
   */
  function overRest(func, start, transform) {
    start = nativeMax(start === undefined ? func.length - 1 : start, 0)
    return function() {
      var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length)

      while (++index < length) {
        array[index] = args[start + index]
      }
      index = -1
      var otherArgs = Array(start + 1)
      while (++index < start) {
        otherArgs[index] = args[index]
      }
      otherArgs[start] = transform(array)
      return apply(func, this, otherArgs)
    }
  }

  /**
   * Creates a function that returns `value`.
   *
   * @static
   * @memberOf _
   * @since 2.4.0
   * @category Util
   * @param {*} value The value to return from the new function.
   * @returns {Function} Returns the new constant function.
   * @example
   *
   * var objects = _.times(2, _.constant({ 'a': 1 }));
   *
   * console.log(objects);
   * // => [{ 'a': 1 }, { 'a': 1 }]
   *
   * console.log(objects[0] === objects[1]);
   * // => true
   */
  function constant(value) {
    return function() {
      return value
    }
  }

  /** Detect free variable `global` from Node.js. */
  var freeGlobal =
    typeof global == 'object' && global && global.Object === Object && global

  /** Detect free variable `self`. */
  var freeSelf =
    typeof self == 'object' && self && self.Object === Object && self

  /** Used as a reference to the global object. */
  var root = freeGlobal || freeSelf || Function('return this')()

  /** Built-in value references. */
  var Symbol$1 = root.Symbol

  /** Used for built-in method references. */
  var objectProto = Object.prototype

  /** Used to check objects for own properties. */
  var hasOwnProperty = objectProto.hasOwnProperty

  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */
  var nativeObjectToString = objectProto.toString

  /** Built-in value references. */
  var symToStringTag = Symbol$1 ? Symbol$1.toStringTag : undefined

  /**
   * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the raw `toStringTag`.
   */
  function getRawTag(value) {
    var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag]

    try {
      value[symToStringTag] = undefined
      var unmasked = true
    } catch (e) {}

    var result = nativeObjectToString.call(value)
    if (unmasked) {
      if (isOwn) {
        value[symToStringTag] = tag
      } else {
        delete value[symToStringTag]
      }
    }
    return result
  }

  /** Used for built-in method references. */
  var objectProto$1 = Object.prototype

  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */
  var nativeObjectToString$1 = objectProto$1.toString

  /**
   * Converts `value` to a string using `Object.prototype.toString`.
   *
   * @private
   * @param {*} value The value to convert.
   * @returns {string} Returns the converted string.
   */
  function objectToString(value) {
    return nativeObjectToString$1.call(value)
  }

  /** `Object#toString` result references. */
  var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]'

  /** Built-in value references. */
  var symToStringTag$1 = Symbol$1 ? Symbol$1.toStringTag : undefined

  /**
   * The base implementation of `getTag` without fallbacks for buggy environments.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the `toStringTag`.
   */
  function baseGetTag(value) {
    if (value == null) {
      return value === undefined ? undefinedTag : nullTag
    }
    return symToStringTag$1 && symToStringTag$1 in Object(value)
      ? getRawTag(value)
      : objectToString(value)
  }

  /**
   * Checks if `value` is the
   * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
   * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an object, else `false`.
   * @example
   *
   * _.isObject({});
   * // => true
   *
   * _.isObject([1, 2, 3]);
   * // => true
   *
   * _.isObject(_.noop);
   * // => true
   *
   * _.isObject(null);
   * // => false
   */
  function isObject(value) {
    var type = typeof value
    return value != null && (type == 'object' || type == 'function')
  }

  /** `Object#toString` result references. */
  var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]'

  /**
   * Checks if `value` is classified as a `Function` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a function, else `false`.
   * @example
   *
   * _.isFunction(_);
   * // => true
   *
   * _.isFunction(/abc/);
   * // => false
   */
  function isFunction(value) {
    if (!isObject(value)) {
      return false
    }
    // The use of `Object#toString` avoids issues with the `typeof` operator
    // in Safari 9 which returns 'object' for typed arrays and other constructors.
    var tag = baseGetTag(value)
    return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag
  }

  /** Used to detect overreaching core-js shims. */
  var coreJsData = root['__core-js_shared__']

  /** Used to detect methods masquerading as native. */
  var maskSrcKey = (function() {
    var uid = /[^.]+$/.exec(
      (coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO) || ''
    )
    return uid ? 'Symbol(src)_1.' + uid : ''
  })()

  /**
   * Checks if `func` has its source masked.
   *
   * @private
   * @param {Function} func The function to check.
   * @returns {boolean} Returns `true` if `func` is masked, else `false`.
   */
  function isMasked(func) {
    return !!maskSrcKey && maskSrcKey in func
  }

  /** Used for built-in method references. */
  var funcProto = Function.prototype

  /** Used to resolve the decompiled source of functions. */
  var funcToString = funcProto.toString

  /**
   * Converts `func` to its source code.
   *
   * @private
   * @param {Function} func The function to convert.
   * @returns {string} Returns the source code.
   */
  function toSource(func) {
    if (func != null) {
      try {
        return funcToString.call(func)
      } catch (e) {}
      try {
        return func + ''
      } catch (e) {}
    }
    return ''
  }

  /**
   * Used to match `RegExp`
   * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
   */
  var reRegExpChar = /[\\^$.*+?()[\]{}|]/g

  /** Used to detect host constructors (Safari). */
  var reIsHostCtor = /^\[object .+?Constructor\]$/

  /** Used for built-in method references. */
  var funcProto$1 = Function.prototype,
    objectProto$2 = Object.prototype

  /** Used to resolve the decompiled source of functions. */
  var funcToString$1 = funcProto$1.toString

  /** Used to check objects for own properties. */
  var hasOwnProperty$1 = objectProto$2.hasOwnProperty

  /** Used to detect if a method is native. */
  var reIsNative = RegExp(
    '^' +
      funcToString$1
        .call(hasOwnProperty$1)
        .replace(reRegExpChar, '\\$&')
        .replace(
          /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
          '$1.*?'
        ) +
      '$'
  )

  /**
   * The base implementation of `_.isNative` without bad shim checks.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a native function,
   *  else `false`.
   */
  function baseIsNative(value) {
    if (!isObject(value) || isMasked(value)) {
      return false
    }
    var pattern = isFunction(value) ? reIsNative : reIsHostCtor
    return pattern.test(toSource(value))
  }

  /**
   * Gets the value at `key` of `object`.
   *
   * @private
   * @param {Object} [object] The object to query.
   * @param {string} key The key of the property to get.
   * @returns {*} Returns the property value.
   */
  function getValue(object, key) {
    return object == null ? undefined : object[key]
  }

  /**
   * Gets the native function at `key` of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {string} key The key of the method to get.
   * @returns {*} Returns the function if it's native, else `undefined`.
   */
  function getNative(object, key) {
    var value = getValue(object, key)
    return baseIsNative(value) ? value : undefined
  }

  var defineProperty = (function() {
    try {
      var func = getNative(Object, 'defineProperty')
      func({}, '', {})
      return func
    } catch (e) {}
  })()

  /**
   * The base implementation of `setToString` without support for hot loop shorting.
   *
   * @private
   * @param {Function} func The function to modify.
   * @param {Function} string The `toString` result.
   * @returns {Function} Returns `func`.
   */
  var baseSetToString = !defineProperty
    ? identity
    : function(func, string) {
        return defineProperty(func, 'toString', {
          configurable: true,
          enumerable: false,
          value: constant(string),
          writable: true,
        })
      }

  /** Used to detect hot functions by number of calls within a span of milliseconds. */
  var HOT_COUNT = 800,
    HOT_SPAN = 16

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeNow = Date.now

  /**
   * Creates a function that'll short out and invoke `identity` instead
   * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
   * milliseconds.
   *
   * @private
   * @param {Function} func The function to restrict.
   * @returns {Function} Returns the new shortable function.
   */
  function shortOut(func) {
    var count = 0,
      lastCalled = 0

    return function() {
      var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled)

      lastCalled = stamp
      if (remaining > 0) {
        if (++count >= HOT_COUNT) {
          return arguments[0]
        }
      } else {
        count = 0
      }
      return func.apply(undefined, arguments)
    }
  }

  /**
   * Sets the `toString` method of `func` to return `string`.
   *
   * @private
   * @param {Function} func The function to modify.
   * @param {Function} string The `toString` result.
   * @returns {Function} Returns `func`.
   */
  var setToString = shortOut(baseSetToString)

  /**
   * The base implementation of `_.rest` which doesn't validate or coerce arguments.
   *
   * @private
   * @param {Function} func The function to apply a rest parameter to.
   * @param {number} [start=func.length-1] The start position of the rest parameter.
   * @returns {Function} Returns the new function.
   */
  function baseRest(func, start) {
    return setToString(overRest(func, start, identity), func + '')
  }

  /**
   * Performs a
   * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
   * comparison between two values to determine if they are equivalent.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to compare.
   * @param {*} other The other value to compare.
   * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
   * @example
   *
   * var object = { 'a': 1 };
   * var other = { 'a': 1 };
   *
   * _.eq(object, object);
   * // => true
   *
   * _.eq(object, other);
   * // => false
   *
   * _.eq('a', 'a');
   * // => true
   *
   * _.eq('a', Object('a'));
   * // => false
   *
   * _.eq(NaN, NaN);
   * // => true
   */
  function eq(value, other) {
    return value === other || (value !== value && other !== other)
  }

  /** Used as references for various `Number` constants. */
  var MAX_SAFE_INTEGER = 9007199254740991

  /**
   * Checks if `value` is a valid array-like length.
   *
   * **Note:** This method is loosely based on
   * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
   * @example
   *
   * _.isLength(3);
   * // => true
   *
   * _.isLength(Number.MIN_VALUE);
   * // => false
   *
   * _.isLength(Infinity);
   * // => false
   *
   * _.isLength('3');
   * // => false
   */
  function isLength(value) {
    return (
      typeof value == 'number' &&
      value > -1 &&
      value % 1 == 0 &&
      value <= MAX_SAFE_INTEGER
    )
  }

  /**
   * Checks if `value` is array-like. A value is considered array-like if it's
   * not a function and has a `value.length` that's an integer greater than or
   * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
   * @example
   *
   * _.isArrayLike([1, 2, 3]);
   * // => true
   *
   * _.isArrayLike(document.body.children);
   * // => true
   *
   * _.isArrayLike('abc');
   * // => true
   *
   * _.isArrayLike(_.noop);
   * // => false
   */
  function isArrayLike(value) {
    return value != null && isLength(value.length) && !isFunction(value)
  }

  /** Used as references for various `Number` constants. */
  var MAX_SAFE_INTEGER$1 = 9007199254740991

  /** Used to detect unsigned integer values. */
  var reIsUint = /^(?:0|[1-9]\d*)$/

  /**
   * Checks if `value` is a valid array-like index.
   *
   * @private
   * @param {*} value The value to check.
   * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
   * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
   */
  function isIndex(value, length) {
    var type = typeof value
    length = length == null ? MAX_SAFE_INTEGER$1 : length

    return (
      !!length &&
      (type == 'number' || (type != 'symbol' && reIsUint.test(value))) &&
      value > -1 &&
      value % 1 == 0 &&
      value < length
    )
  }

  /**
   * Checks if the given arguments are from an iteratee call.
   *
   * @private
   * @param {*} value The potential iteratee value argument.
   * @param {*} index The potential iteratee index or key argument.
   * @param {*} object The potential iteratee object argument.
   * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
   *  else `false`.
   */
  function isIterateeCall(value, index, object) {
    if (!isObject(object)) {
      return false
    }
    var type = typeof index
    if (
      type == 'number'
        ? isArrayLike(object) && isIndex(index, object.length)
        : type == 'string' && index in object
    ) {
      return eq(object[index], value)
    }
    return false
  }

  /**
   * The base implementation of `_.times` without support for iteratee shorthands
   * or max array length checks.
   *
   * @private
   * @param {number} n The number of times to invoke `iteratee`.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the array of results.
   */
  function baseTimes(n, iteratee) {
    var index = -1,
      result = Array(n)

    while (++index < n) {
      result[index] = iteratee(index)
    }
    return result
  }

  /**
   * Checks if `value` is object-like. A value is object-like if it's not `null`
   * and has a `typeof` result of "object".
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
   * @example
   *
   * _.isObjectLike({});
   * // => true
   *
   * _.isObjectLike([1, 2, 3]);
   * // => true
   *
   * _.isObjectLike(_.noop);
   * // => false
   *
   * _.isObjectLike(null);
   * // => false
   */
  function isObjectLike(value) {
    return value != null && typeof value == 'object'
  }

  /** `Object#toString` result references. */
  var argsTag = '[object Arguments]'

  /**
   * The base implementation of `_.isArguments`.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an `arguments` object,
   */
  function baseIsArguments(value) {
    return isObjectLike(value) && baseGetTag(value) == argsTag
  }

  /** Used for built-in method references. */
  var objectProto$3 = Object.prototype

  /** Used to check objects for own properties. */
  var hasOwnProperty$2 = objectProto$3.hasOwnProperty

  /** Built-in value references. */
  var propertyIsEnumerable = objectProto$3.propertyIsEnumerable

  /**
   * Checks if `value` is likely an `arguments` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an `arguments` object,
   *  else `false`.
   * @example
   *
   * _.isArguments(function() { return arguments; }());
   * // => true
   *
   * _.isArguments([1, 2, 3]);
   * // => false
   */
  var isArguments = baseIsArguments(
    (function() {
      return arguments
    })()
  )
    ? baseIsArguments
    : function(value) {
        return (
          isObjectLike(value) &&
          hasOwnProperty$2.call(value, 'callee') &&
          !propertyIsEnumerable.call(value, 'callee')
        )
      }

  /**
   * Checks if `value` is classified as an `Array` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an array, else `false`.
   * @example
   *
   * _.isArray([1, 2, 3]);
   * // => true
   *
   * _.isArray(document.body.children);
   * // => false
   *
   * _.isArray('abc');
   * // => false
   *
   * _.isArray(_.noop);
   * // => false
   */
  var isArray = Array.isArray

  /**
   * This method returns `false`.
   *
   * @static
   * @memberOf _
   * @since 4.13.0
   * @category Util
   * @returns {boolean} Returns `false`.
   * @example
   *
   * _.times(2, _.stubFalse);
   * // => [false, false]
   */
  function stubFalse() {
    return false
  }

  /** Detect free variable `exports`. */
  var freeExports =
    typeof exports == 'object' && exports && !exports.nodeType && exports

  /** Detect free variable `module`. */
  var freeModule =
    freeExports &&
    typeof module == 'object' &&
    module &&
    !module.nodeType &&
    module

  /** Detect the popular CommonJS extension `module.exports`. */
  var moduleExports = freeModule && freeModule.exports === freeExports

  /** Built-in value references. */
  var Buffer = moduleExports ? root.Buffer : undefined

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined

  /**
   * Checks if `value` is a buffer.
   *
   * @static
   * @memberOf _
   * @since 4.3.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
   * @example
   *
   * _.isBuffer(new Buffer(2));
   * // => true
   *
   * _.isBuffer(new Uint8Array(2));
   * // => false
   */
  var isBuffer = nativeIsBuffer || stubFalse

  /** `Object#toString` result references. */
  var argsTag$1 = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag$1 = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]'

  var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]'

  /** Used to identify `toStringTag` values of typed arrays. */
  var typedArrayTags = {}
  typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[
    int8Tag
  ] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[
    uint8Tag
  ] = typedArrayTags[uint8ClampedTag] = typedArrayTags[
    uint16Tag
  ] = typedArrayTags[uint32Tag] = true
  typedArrayTags[argsTag$1] = typedArrayTags[arrayTag] = typedArrayTags[
    arrayBufferTag
  ] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[
    dateTag
  ] = typedArrayTags[errorTag] = typedArrayTags[funcTag$1] = typedArrayTags[
    mapTag
  ] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[
    regexpTag
  ] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[
    weakMapTag
  ] = false

  /**
   * The base implementation of `_.isTypedArray` without Node.js optimizations.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
   */
  function baseIsTypedArray(value) {
    return (
      isObjectLike(value) &&
      isLength(value.length) &&
      !!typedArrayTags[baseGetTag(value)]
    )
  }

  /**
   * The base implementation of `_.unary` without support for storing metadata.
   *
   * @private
   * @param {Function} func The function to cap arguments for.
   * @returns {Function} Returns the new capped function.
   */
  function baseUnary(func) {
    return function(value) {
      return func(value)
    }
  }

  /** Detect free variable `exports`. */
  var freeExports$1 =
    typeof exports == 'object' && exports && !exports.nodeType && exports

  /** Detect free variable `module`. */
  var freeModule$1 =
    freeExports$1 &&
    typeof module == 'object' &&
    module &&
    !module.nodeType &&
    module

  /** Detect the popular CommonJS extension `module.exports`. */
  var moduleExports$1 = freeModule$1 && freeModule$1.exports === freeExports$1

  /** Detect free variable `process` from Node.js. */
  var freeProcess = moduleExports$1 && freeGlobal.process

  /** Used to access faster Node.js helpers. */
  var nodeUtil = (function() {
    try {
      // Use `util.types` for Node.js 10+.
      var types =
        freeModule$1 &&
        freeModule$1.require &&
        freeModule$1.require('util').types

      if (types) {
        return types
      }

      // Legacy `process.binding('util')` for Node.js < 10.
      return freeProcess && freeProcess.binding && freeProcess.binding('util')
    } catch (e) {}
  })()

  /* Node.js helper references. */
  var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray

  /**
   * Checks if `value` is classified as a typed array.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
   * @example
   *
   * _.isTypedArray(new Uint8Array);
   * // => true
   *
   * _.isTypedArray([]);
   * // => false
   */
  var isTypedArray = nodeIsTypedArray
    ? baseUnary(nodeIsTypedArray)
    : baseIsTypedArray

  /** Used for built-in method references. */
  var objectProto$4 = Object.prototype

  /** Used to check objects for own properties. */
  var hasOwnProperty$3 = objectProto$4.hasOwnProperty

  /**
   * Creates an array of the enumerable property names of the array-like `value`.
   *
   * @private
   * @param {*} value The value to query.
   * @param {boolean} inherited Specify returning inherited property names.
   * @returns {Array} Returns the array of property names.
   */
  function arrayLikeKeys(value, inherited) {
    var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length

    for (var key in value) {
      if (
        (inherited || hasOwnProperty$3.call(value, key)) &&
        !(
          skipIndexes &&
          // Safari 9 has enumerable `arguments.length` in strict mode.
          (key == 'length' ||
            // Node.js 0.10 has enumerable non-index properties on buffers.
            (isBuff && (key == 'offset' || key == 'parent')) ||
            // PhantomJS 2 has enumerable non-index properties on typed arrays.
            (isType &&
              (key == 'buffer' ||
                key == 'byteLength' ||
                key == 'byteOffset')) ||
            // Skip index properties.
            isIndex(key, length))
        )
      ) {
        result.push(key)
      }
    }
    return result
  }

  /** Used for built-in method references. */
  var objectProto$5 = Object.prototype

  /**
   * Checks if `value` is likely a prototype object.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
   */
  function isPrototype(value) {
    var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto$5

    return value === proto
  }

  /**
   * This function is like
   * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
   * except that it includes inherited enumerable properties.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   */
  function nativeKeysIn(object) {
    var result = []
    if (object != null) {
      for (var key in Object(object)) {
        result.push(key)
      }
    }
    return result
  }

  /** Used for built-in method references. */
  var objectProto$6 = Object.prototype

  /** Used to check objects for own properties. */
  var hasOwnProperty$4 = objectProto$6.hasOwnProperty

  /**
   * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   */
  function baseKeysIn(object) {
    if (!isObject(object)) {
      return nativeKeysIn(object)
    }
    var isProto = isPrototype(object),
      result = []

    for (var key in object) {
      if (
        !(
          key == 'constructor' &&
          (isProto || !hasOwnProperty$4.call(object, key))
        )
      ) {
        result.push(key)
      }
    }
    return result
  }

  /**
   * Creates an array of the own and inherited enumerable property names of `object`.
   *
   * **Note:** Non-object values are coerced to objects.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category Object
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   *   this.b = 2;
   * }
   *
   * Foo.prototype.c = 3;
   *
   * _.keysIn(new Foo);
   * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
   */
  function keysIn(object) {
    return isArrayLike(object)
      ? arrayLikeKeys(object, true)
      : baseKeysIn(object)
  }

  /** Used for built-in method references. */
  var objectProto$7 = Object.prototype

  /** Used to check objects for own properties. */
  var hasOwnProperty$5 = objectProto$7.hasOwnProperty

  /**
   * Assigns own and inherited enumerable string keyed properties of source
   * objects to the destination object for all destination properties that
   * resolve to `undefined`. Source objects are applied from left to right.
   * Once a property is set, additional values of the same property are ignored.
   *
   * **Note:** This method mutates `object`.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Object
   * @param {Object} object The destination object.
   * @param {...Object} [sources] The source objects.
   * @returns {Object} Returns `object`.
   * @see _.defaultsDeep
   * @example
   *
   * _.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
   * // => { 'a': 1, 'b': 2 }
   */
  var defaults = baseRest(function(object, sources) {
    object = Object(object)

    var index = -1
    var length = sources.length
    var guard = length > 2 ? sources[2] : undefined

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      length = 1
    }

    while (++index < length) {
      var source = sources[index]
      var props = keysIn(source)
      var propsIndex = -1
      var propsLength = props.length

      while (++propsIndex < propsLength) {
        var key = props[propsIndex]
        var value = object[key]

        if (
          value === undefined ||
          (eq(value, objectProto$7[key]) && !hasOwnProperty$5.call(object, key))
        ) {
          object[key] = source[key]
        }
      }
    }

    return object
  })

  /**
   * The base implementation of `assignValue` and `assignMergeValue` without
   * value checks.
   *
   * @private
   * @param {Object} object The object to modify.
   * @param {string} key The key of the property to assign.
   * @param {*} value The value to assign.
   */
  function baseAssignValue(object, key, value) {
    if (key == '__proto__' && defineProperty) {
      defineProperty(object, key, {
        configurable: true,
        enumerable: true,
        value: value,
        writable: true,
      })
    } else {
      object[key] = value
    }
  }

  /**
   * Creates a base function for methods like `_.forIn` and `_.forOwn`.
   *
   * @private
   * @param {boolean} [fromRight] Specify iterating from right to left.
   * @returns {Function} Returns the new base function.
   */
  function createBaseFor(fromRight) {
    return function(object, iteratee, keysFunc) {
      var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length

      while (length--) {
        var key = props[fromRight ? length : ++index]
        if (iteratee(iterable[key], key, iterable) === false) {
          break
        }
      }
      return object
    }
  }

  /**
   * The base implementation of `baseForOwn` which iterates over `object`
   * properties returned by `keysFunc` and invokes `iteratee` for each property.
   * Iteratee functions may exit iteration early by explicitly returning `false`.
   *
   * @private
   * @param {Object} object The object to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {Function} keysFunc The function to get the keys of `object`.
   * @returns {Object} Returns `object`.
   */
  var baseFor = createBaseFor()

  /**
   * Creates a unary function that invokes `func` with its argument transformed.
   *
   * @private
   * @param {Function} func The function to wrap.
   * @param {Function} transform The argument transform.
   * @returns {Function} Returns the new function.
   */
  function overArg(func, transform) {
    return function(arg) {
      return func(transform(arg))
    }
  }

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeKeys = overArg(Object.keys, Object)

  /** Used for built-in method references. */
  var objectProto$8 = Object.prototype

  /** Used to check objects for own properties. */
  var hasOwnProperty$6 = objectProto$8.hasOwnProperty

  /**
   * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   */
  function baseKeys(object) {
    if (!isPrototype(object)) {
      return nativeKeys(object)
    }
    var result = []
    for (var key in Object(object)) {
      if (hasOwnProperty$6.call(object, key) && key != 'constructor') {
        result.push(key)
      }
    }
    return result
  }

  /**
   * Creates an array of the own enumerable property names of `object`.
   *
   * **Note:** Non-object values are coerced to objects. See the
   * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
   * for more details.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Object
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   *   this.b = 2;
   * }
   *
   * Foo.prototype.c = 3;
   *
   * _.keys(new Foo);
   * // => ['a', 'b'] (iteration order is not guaranteed)
   *
   * _.keys('hi');
   * // => ['0', '1']
   */
  function keys(object) {
    return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object)
  }

  /**
   * The base implementation of `_.forOwn` without support for iteratee shorthands.
   *
   * @private
   * @param {Object} object The object to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Object} Returns `object`.
   */
  function baseForOwn(object, iteratee) {
    return object && baseFor(object, iteratee, keys)
  }

  /**
   * Removes all key-value entries from the list cache.
   *
   * @private
   * @name clear
   * @memberOf ListCache
   */
  function listCacheClear() {
    this.__data__ = []
    this.size = 0
  }

  /**
   * Gets the index at which the `key` is found in `array` of key-value pairs.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} key The key to search for.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function assocIndexOf(array, key) {
    var length = array.length
    while (length--) {
      if (eq(array[length][0], key)) {
        return length
      }
    }
    return -1
  }

  /** Used for built-in method references. */
  var arrayProto = Array.prototype

  /** Built-in value references. */
  var splice = arrayProto.splice

  /**
   * Removes `key` and its value from the list cache.
   *
   * @private
   * @name delete
   * @memberOf ListCache
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  function listCacheDelete(key) {
    var data = this.__data__,
      index = assocIndexOf(data, key)

    if (index < 0) {
      return false
    }
    var lastIndex = data.length - 1
    if (index == lastIndex) {
      data.pop()
    } else {
      splice.call(data, index, 1)
    }
    --this.size
    return true
  }

  /**
   * Gets the list cache value for `key`.
   *
   * @private
   * @name get
   * @memberOf ListCache
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function listCacheGet(key) {
    var data = this.__data__,
      index = assocIndexOf(data, key)

    return index < 0 ? undefined : data[index][1]
  }

  /**
   * Checks if a list cache value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf ListCache
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function listCacheHas(key) {
    return assocIndexOf(this.__data__, key) > -1
  }

  /**
   * Sets the list cache `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf ListCache
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the list cache instance.
   */
  function listCacheSet(key, value) {
    var data = this.__data__,
      index = assocIndexOf(data, key)

    if (index < 0) {
      ++this.size
      data.push([key, value])
    } else {
      data[index][1] = value
    }
    return this
  }

  /**
   * Creates an list cache object.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function ListCache(entries) {
    var index = -1,
      length = entries == null ? 0 : entries.length

    this.clear()
    while (++index < length) {
      var entry = entries[index]
      this.set(entry[0], entry[1])
    }
  }

  // Add methods to `ListCache`.
  ListCache.prototype.clear = listCacheClear
  ListCache.prototype['delete'] = listCacheDelete
  ListCache.prototype.get = listCacheGet
  ListCache.prototype.has = listCacheHas
  ListCache.prototype.set = listCacheSet

  /**
   * Removes all key-value entries from the stack.
   *
   * @private
   * @name clear
   * @memberOf Stack
   */
  function stackClear() {
    this.__data__ = new ListCache()
    this.size = 0
  }

  /**
   * Removes `key` and its value from the stack.
   *
   * @private
   * @name delete
   * @memberOf Stack
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  function stackDelete(key) {
    var data = this.__data__,
      result = data['delete'](key)

    this.size = data.size
    return result
  }

  /**
   * Gets the stack value for `key`.
   *
   * @private
   * @name get
   * @memberOf Stack
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function stackGet(key) {
    return this.__data__.get(key)
  }

  /**
   * Checks if a stack value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf Stack
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function stackHas(key) {
    return this.__data__.has(key)
  }

  /* Built-in method references that are verified to be native. */
  var Map$1 = getNative(root, 'Map')

  /* Built-in method references that are verified to be native. */
  var nativeCreate = getNative(Object, 'create')

  /**
   * Removes all key-value entries from the hash.
   *
   * @private
   * @name clear
   * @memberOf Hash
   */
  function hashClear() {
    this.__data__ = nativeCreate ? nativeCreate(null) : {}
    this.size = 0
  }

  /**
   * Removes `key` and its value from the hash.
   *
   * @private
   * @name delete
   * @memberOf Hash
   * @param {Object} hash The hash to modify.
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  function hashDelete(key) {
    var result = this.has(key) && delete this.__data__[key]
    this.size -= result ? 1 : 0
    return result
  }

  /** Used to stand-in for `undefined` hash values. */
  var HASH_UNDEFINED = '__lodash_hash_undefined__'

  /** Used for built-in method references. */
  var objectProto$9 = Object.prototype

  /** Used to check objects for own properties. */
  var hasOwnProperty$7 = objectProto$9.hasOwnProperty

  /**
   * Gets the hash value for `key`.
   *
   * @private
   * @name get
   * @memberOf Hash
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function hashGet(key) {
    var data = this.__data__
    if (nativeCreate) {
      var result = data[key]
      return result === HASH_UNDEFINED ? undefined : result
    }
    return hasOwnProperty$7.call(data, key) ? data[key] : undefined
  }

  /** Used for built-in method references. */
  var objectProto$a = Object.prototype

  /** Used to check objects for own properties. */
  var hasOwnProperty$8 = objectProto$a.hasOwnProperty

  /**
   * Checks if a hash value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf Hash
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function hashHas(key) {
    var data = this.__data__
    return nativeCreate
      ? data[key] !== undefined
      : hasOwnProperty$8.call(data, key)
  }

  /** Used to stand-in for `undefined` hash values. */
  var HASH_UNDEFINED$1 = '__lodash_hash_undefined__'

  /**
   * Sets the hash `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf Hash
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the hash instance.
   */
  function hashSet(key, value) {
    var data = this.__data__
    this.size += this.has(key) ? 0 : 1
    data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED$1 : value
    return this
  }

  /**
   * Creates a hash object.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function Hash(entries) {
    var index = -1,
      length = entries == null ? 0 : entries.length

    this.clear()
    while (++index < length) {
      var entry = entries[index]
      this.set(entry[0], entry[1])
    }
  }

  // Add methods to `Hash`.
  Hash.prototype.clear = hashClear
  Hash.prototype['delete'] = hashDelete
  Hash.prototype.get = hashGet
  Hash.prototype.has = hashHas
  Hash.prototype.set = hashSet

  /**
   * Removes all key-value entries from the map.
   *
   * @private
   * @name clear
   * @memberOf MapCache
   */
  function mapCacheClear() {
    this.size = 0
    this.__data__ = {
      hash: new Hash(),
      map: new (Map$1 || ListCache)(),
      string: new Hash(),
    }
  }

  /**
   * Checks if `value` is suitable for use as unique object key.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
   */
  function isKeyable(value) {
    var type = typeof value
    return type == 'string' ||
      type == 'number' ||
      type == 'symbol' ||
      type == 'boolean'
      ? value !== '__proto__'
      : value === null
  }

  /**
   * Gets the data for `map`.
   *
   * @private
   * @param {Object} map The map to query.
   * @param {string} key The reference key.
   * @returns {*} Returns the map data.
   */
  function getMapData(map, key) {
    var data = map.__data__
    return isKeyable(key)
      ? data[typeof key == 'string' ? 'string' : 'hash']
      : data.map
  }

  /**
   * Removes `key` and its value from the map.
   *
   * @private
   * @name delete
   * @memberOf MapCache
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  function mapCacheDelete(key) {
    var result = getMapData(this, key)['delete'](key)
    this.size -= result ? 1 : 0
    return result
  }

  /**
   * Gets the map value for `key`.
   *
   * @private
   * @name get
   * @memberOf MapCache
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function mapCacheGet(key) {
    return getMapData(this, key).get(key)
  }

  /**
   * Checks if a map value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf MapCache
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function mapCacheHas(key) {
    return getMapData(this, key).has(key)
  }

  /**
   * Sets the map `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf MapCache
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the map cache instance.
   */
  function mapCacheSet(key, value) {
    var data = getMapData(this, key),
      size = data.size

    data.set(key, value)
    this.size += data.size == size ? 0 : 1
    return this
  }

  /**
   * Creates a map cache object to store key-value pairs.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function MapCache(entries) {
    var index = -1,
      length = entries == null ? 0 : entries.length

    this.clear()
    while (++index < length) {
      var entry = entries[index]
      this.set(entry[0], entry[1])
    }
  }

  // Add methods to `MapCache`.
  MapCache.prototype.clear = mapCacheClear
  MapCache.prototype['delete'] = mapCacheDelete
  MapCache.prototype.get = mapCacheGet
  MapCache.prototype.has = mapCacheHas
  MapCache.prototype.set = mapCacheSet

  /** Used as the size to enable large array optimizations. */
  var LARGE_ARRAY_SIZE = 200

  /**
   * Sets the stack `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf Stack
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the stack cache instance.
   */
  function stackSet(key, value) {
    var data = this.__data__
    if (data instanceof ListCache) {
      var pairs = data.__data__
      if (!Map$1 || pairs.length < LARGE_ARRAY_SIZE - 1) {
        pairs.push([key, value])
        this.size = ++data.size
        return this
      }
      data = this.__data__ = new MapCache(pairs)
    }
    data.set(key, value)
    this.size = data.size
    return this
  }

  /**
   * Creates a stack cache object to store key-value pairs.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function Stack(entries) {
    var data = (this.__data__ = new ListCache(entries))
    this.size = data.size
  }

  // Add methods to `Stack`.
  Stack.prototype.clear = stackClear
  Stack.prototype['delete'] = stackDelete
  Stack.prototype.get = stackGet
  Stack.prototype.has = stackHas
  Stack.prototype.set = stackSet

  /** Used to stand-in for `undefined` hash values. */
  var HASH_UNDEFINED$2 = '__lodash_hash_undefined__'

  /**
   * Adds `value` to the array cache.
   *
   * @private
   * @name add
   * @memberOf SetCache
   * @alias push
   * @param {*} value The value to cache.
   * @returns {Object} Returns the cache instance.
   */
  function setCacheAdd(value) {
    this.__data__.set(value, HASH_UNDEFINED$2)
    return this
  }

  /**
   * Checks if `value` is in the array cache.
   *
   * @private
   * @name has
   * @memberOf SetCache
   * @param {*} value The value to search for.
   * @returns {number} Returns `true` if `value` is found, else `false`.
   */
  function setCacheHas(value) {
    return this.__data__.has(value)
  }

  /**
   *
   * Creates an array cache object to store unique values.
   *
   * @private
   * @constructor
   * @param {Array} [values] The values to cache.
   */
  function SetCache(values) {
    var index = -1,
      length = values == null ? 0 : values.length

    this.__data__ = new MapCache()
    while (++index < length) {
      this.add(values[index])
    }
  }

  // Add methods to `SetCache`.
  SetCache.prototype.add = SetCache.prototype.push = setCacheAdd
  SetCache.prototype.has = setCacheHas

  /**
   * A specialized version of `_.some` for arrays without support for iteratee
   * shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {boolean} Returns `true` if any element passes the predicate check,
   *  else `false`.
   */
  function arraySome(array, predicate) {
    var index = -1,
      length = array == null ? 0 : array.length

    while (++index < length) {
      if (predicate(array[index], index, array)) {
        return true
      }
    }
    return false
  }

  /**
   * Checks if a `cache` value for `key` exists.
   *
   * @private
   * @param {Object} cache The cache to query.
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function cacheHas(cache, key) {
    return cache.has(key)
  }

  /** Used to compose bitmasks for value comparisons. */
  var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2

  /**
   * A specialized version of `baseIsEqualDeep` for arrays with support for
   * partial deep comparisons.
   *
   * @private
   * @param {Array} array The array to compare.
   * @param {Array} other The other array to compare.
   * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
   * @param {Function} customizer The function to customize comparisons.
   * @param {Function} equalFunc The function to determine equivalents of values.
   * @param {Object} stack Tracks traversed `array` and `other` objects.
   * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
   */
  function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
    var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length

    if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
      return false
    }
    // Check that cyclic values are equal.
    var arrStacked = stack.get(array)
    var othStacked = stack.get(other)
    if (arrStacked && othStacked) {
      return arrStacked == other && othStacked == array
    }
    var index = -1,
      result = true,
      seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : undefined

    stack.set(array, other)
    stack.set(other, array)

    // Ignore non-index properties.
    while (++index < arrLength) {
      var arrValue = array[index],
        othValue = other[index]

      if (customizer) {
        var compared = isPartial
          ? customizer(othValue, arrValue, index, other, array, stack)
          : customizer(arrValue, othValue, index, array, other, stack)
      }
      if (compared !== undefined) {
        if (compared) {
          continue
        }
        result = false
        break
      }
      // Recursively compare arrays (susceptible to call stack limits).
      if (seen) {
        if (
          !arraySome(other, function(othValue, othIndex) {
            if (
              !cacheHas(seen, othIndex) &&
              (arrValue === othValue ||
                equalFunc(arrValue, othValue, bitmask, customizer, stack))
            ) {
              return seen.push(othIndex)
            }
          })
        ) {
          result = false
          break
        }
      } else if (
        !(
          arrValue === othValue ||
          equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )
      ) {
        result = false
        break
      }
    }
    stack['delete'](array)
    stack['delete'](other)
    return result
  }

  /** Built-in value references. */
  var Uint8Array = root.Uint8Array

  /**
   * Converts `map` to its key-value pairs.
   *
   * @private
   * @param {Object} map The map to convert.
   * @returns {Array} Returns the key-value pairs.
   */
  function mapToArray(map) {
    var index = -1,
      result = Array(map.size)

    map.forEach(function(value, key) {
      result[++index] = [key, value]
    })
    return result
  }

  /**
   * Converts `set` to an array of its values.
   *
   * @private
   * @param {Object} set The set to convert.
   * @returns {Array} Returns the values.
   */
  function setToArray(set) {
    var index = -1,
      result = Array(set.size)

    set.forEach(function(value) {
      result[++index] = value
    })
    return result
  }

  /** Used to compose bitmasks for value comparisons. */
  var COMPARE_PARTIAL_FLAG$1 = 1,
    COMPARE_UNORDERED_FLAG$1 = 2

  /** `Object#toString` result references. */
  var boolTag$1 = '[object Boolean]',
    dateTag$1 = '[object Date]',
    errorTag$1 = '[object Error]',
    mapTag$1 = '[object Map]',
    numberTag$1 = '[object Number]',
    regexpTag$1 = '[object RegExp]',
    setTag$1 = '[object Set]',
    stringTag$1 = '[object String]',
    symbolTag = '[object Symbol]'

  var arrayBufferTag$1 = '[object ArrayBuffer]',
    dataViewTag$1 = '[object DataView]'

  /** Used to convert symbols to primitives and strings. */
  var symbolProto = Symbol$1 ? Symbol$1.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined

  /**
   * A specialized version of `baseIsEqualDeep` for comparing objects of
   * the same `toStringTag`.
   *
   * **Note:** This function only supports comparing values with tags of
   * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
   *
   * @private
   * @param {Object} object The object to compare.
   * @param {Object} other The other object to compare.
   * @param {string} tag The `toStringTag` of the objects to compare.
   * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
   * @param {Function} customizer The function to customize comparisons.
   * @param {Function} equalFunc The function to determine equivalents of values.
   * @param {Object} stack Tracks traversed `object` and `other` objects.
   * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
   */
  function equalByTag(
    object,
    other,
    tag,
    bitmask,
    customizer,
    equalFunc,
    stack
  ) {
    switch (tag) {
      case dataViewTag$1:
        if (
          object.byteLength != other.byteLength ||
          object.byteOffset != other.byteOffset
        ) {
          return false
        }
        object = object.buffer
        other = other.buffer

      case arrayBufferTag$1:
        if (
          object.byteLength != other.byteLength ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))
        ) {
          return false
        }
        return true

      case boolTag$1:
      case dateTag$1:
      case numberTag$1:
        // Coerce booleans to `1` or `0` and dates to milliseconds.
        // Invalid dates are coerced to `NaN`.
        return eq(+object, +other)

      case errorTag$1:
        return object.name == other.name && object.message == other.message

      case regexpTag$1:
      case stringTag$1:
        // Coerce regexes to strings and treat strings, primitives and objects,
        // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
        // for more details.
        return object == other + ''

      case mapTag$1:
        var convert = mapToArray

      case setTag$1:
        var isPartial = bitmask & COMPARE_PARTIAL_FLAG$1
        convert || (convert = setToArray)

        if (object.size != other.size && !isPartial) {
          return false
        }
        // Assume cyclic values are equal.
        var stacked = stack.get(object)
        if (stacked) {
          return stacked == other
        }
        bitmask |= COMPARE_UNORDERED_FLAG$1

        // Recursively compare objects (susceptible to call stack limits).
        stack.set(object, other)
        var result = equalArrays(
          convert(object),
          convert(other),
          bitmask,
          customizer,
          equalFunc,
          stack
        )
        stack['delete'](object)
        return result

      case symbolTag:
        if (symbolValueOf) {
          return symbolValueOf.call(object) == symbolValueOf.call(other)
        }
    }
    return false
  }

  /**
   * Appends the elements of `values` to `array`.
   *
   * @private
   * @param {Array} array The array to modify.
   * @param {Array} values The values to append.
   * @returns {Array} Returns `array`.
   */
  function arrayPush(array, values) {
    var index = -1,
      length = values.length,
      offset = array.length

    while (++index < length) {
      array[offset + index] = values[index]
    }
    return array
  }

  /**
   * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
   * `keysFunc` and `symbolsFunc` to get the enumerable property names and
   * symbols of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Function} keysFunc The function to get the keys of `object`.
   * @param {Function} symbolsFunc The function to get the symbols of `object`.
   * @returns {Array} Returns the array of property names and symbols.
   */
  function baseGetAllKeys(object, keysFunc, symbolsFunc) {
    var result = keysFunc(object)
    return isArray(object) ? result : arrayPush(result, symbolsFunc(object))
  }

  /**
   * A specialized version of `_.filter` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {Array} Returns the new filtered array.
   */
  function arrayFilter(array, predicate) {
    var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = []

    while (++index < length) {
      var value = array[index]
      if (predicate(value, index, array)) {
        result[resIndex++] = value
      }
    }
    return result
  }

  /**
   * This method returns a new empty array.
   *
   * @static
   * @memberOf _
   * @since 4.13.0
   * @category Util
   * @returns {Array} Returns the new empty array.
   * @example
   *
   * var arrays = _.times(2, _.stubArray);
   *
   * console.log(arrays);
   * // => [[], []]
   *
   * console.log(arrays[0] === arrays[1]);
   * // => false
   */
  function stubArray() {
    return []
  }

  /** Used for built-in method references. */
  var objectProto$b = Object.prototype

  /** Built-in value references. */
  var propertyIsEnumerable$1 = objectProto$b.propertyIsEnumerable

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeGetSymbols = Object.getOwnPropertySymbols

  /**
   * Creates an array of the own enumerable symbols of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of symbols.
   */
  var getSymbols = !nativeGetSymbols
    ? stubArray
    : function(object) {
        if (object == null) {
          return []
        }
        object = Object(object)
        return arrayFilter(nativeGetSymbols(object), function(symbol) {
          return propertyIsEnumerable$1.call(object, symbol)
        })
      }

  /**
   * Creates an array of own enumerable property names and symbols of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names and symbols.
   */
  function getAllKeys(object) {
    return baseGetAllKeys(object, keys, getSymbols)
  }

  /** Used to compose bitmasks for value comparisons. */
  var COMPARE_PARTIAL_FLAG$2 = 1

  /** Used for built-in method references. */
  var objectProto$c = Object.prototype

  /** Used to check objects for own properties. */
  var hasOwnProperty$9 = objectProto$c.hasOwnProperty

  /**
   * A specialized version of `baseIsEqualDeep` for objects with support for
   * partial deep comparisons.
   *
   * @private
   * @param {Object} object The object to compare.
   * @param {Object} other The other object to compare.
   * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
   * @param {Function} customizer The function to customize comparisons.
   * @param {Function} equalFunc The function to determine equivalents of values.
   * @param {Object} stack Tracks traversed `object` and `other` objects.
   * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
   */
  function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
    var isPartial = bitmask & COMPARE_PARTIAL_FLAG$2,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length

    if (objLength != othLength && !isPartial) {
      return false
    }
    var index = objLength
    while (index--) {
      var key = objProps[index]
      if (!(isPartial ? key in other : hasOwnProperty$9.call(other, key))) {
        return false
      }
    }
    // Check that cyclic values are equal.
    var objStacked = stack.get(object)
    var othStacked = stack.get(other)
    if (objStacked && othStacked) {
      return objStacked == other && othStacked == object
    }
    var result = true
    stack.set(object, other)
    stack.set(other, object)

    var skipCtor = isPartial
    while (++index < objLength) {
      key = objProps[index]
      var objValue = object[key],
        othValue = other[key]

      if (customizer) {
        var compared = isPartial
          ? customizer(othValue, objValue, key, other, object, stack)
          : customizer(objValue, othValue, key, object, other, stack)
      }
      // Recursively compare objects (susceptible to call stack limits).
      if (
        !(compared === undefined
          ? objValue === othValue ||
            equalFunc(objValue, othValue, bitmask, customizer, stack)
          : compared)
      ) {
        result = false
        break
      }
      skipCtor || (skipCtor = key == 'constructor')
    }
    if (result && !skipCtor) {
      var objCtor = object.constructor,
        othCtor = other.constructor

      // Non `Object` object instances with different constructors are not equal.
      if (
        objCtor != othCtor &&
        'constructor' in object &&
        'constructor' in other &&
        !(
          typeof objCtor == 'function' &&
          objCtor instanceof objCtor &&
          typeof othCtor == 'function' &&
          othCtor instanceof othCtor
        )
      ) {
        result = false
      }
    }
    stack['delete'](object)
    stack['delete'](other)
    return result
  }

  /* Built-in method references that are verified to be native. */
  var DataView = getNative(root, 'DataView')

  /* Built-in method references that are verified to be native. */
  var Promise$1 = getNative(root, 'Promise')

  /* Built-in method references that are verified to be native. */
  var Set$1 = getNative(root, 'Set')

  /* Built-in method references that are verified to be native. */
  var WeakMap = getNative(root, 'WeakMap')

  /** `Object#toString` result references. */
  var mapTag$2 = '[object Map]',
    objectTag$1 = '[object Object]',
    promiseTag = '[object Promise]',
    setTag$2 = '[object Set]',
    weakMapTag$1 = '[object WeakMap]'

  var dataViewTag$2 = '[object DataView]'

  /** Used to detect maps, sets, and weakmaps. */
  var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map$1),
    promiseCtorString = toSource(Promise$1),
    setCtorString = toSource(Set$1),
    weakMapCtorString = toSource(WeakMap)

  /**
   * Gets the `toStringTag` of `value`.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the `toStringTag`.
   */
  var getTag = baseGetTag

  // Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
  if (
    (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag$2) ||
    (Map$1 && getTag(new Map$1()) != mapTag$2) ||
    (Promise$1 && getTag(Promise$1.resolve()) != promiseTag) ||
    (Set$1 && getTag(new Set$1()) != setTag$2) ||
    (WeakMap && getTag(new WeakMap()) != weakMapTag$1)
  ) {
    getTag = function(value) {
      var result = baseGetTag(value),
        Ctor = result == objectTag$1 ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : ''

      if (ctorString) {
        switch (ctorString) {
          case dataViewCtorString:
            return dataViewTag$2
          case mapCtorString:
            return mapTag$2
          case promiseCtorString:
            return promiseTag
          case setCtorString:
            return setTag$2
          case weakMapCtorString:
            return weakMapTag$1
        }
      }
      return result
    }
  }

  var getTag$1 = getTag

  /** Used to compose bitmasks for value comparisons. */
  var COMPARE_PARTIAL_FLAG$3 = 1

  /** `Object#toString` result references. */
  var argsTag$2 = '[object Arguments]',
    arrayTag$1 = '[object Array]',
    objectTag$2 = '[object Object]'

  /** Used for built-in method references. */
  var objectProto$d = Object.prototype

  /** Used to check objects for own properties. */
  var hasOwnProperty$a = objectProto$d.hasOwnProperty

  /**
   * A specialized version of `baseIsEqual` for arrays and objects which performs
   * deep comparisons and tracks traversed objects enabling objects with circular
   * references to be compared.
   *
   * @private
   * @param {Object} object The object to compare.
   * @param {Object} other The other object to compare.
   * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
   * @param {Function} customizer The function to customize comparisons.
   * @param {Function} equalFunc The function to determine equivalents of values.
   * @param {Object} [stack] Tracks traversed `object` and `other` objects.
   * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
   */
  function baseIsEqualDeep(
    object,
    other,
    bitmask,
    customizer,
    equalFunc,
    stack
  ) {
    var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag$1 : getTag$1(object),
      othTag = othIsArr ? arrayTag$1 : getTag$1(other)

    objTag = objTag == argsTag$2 ? objectTag$2 : objTag
    othTag = othTag == argsTag$2 ? objectTag$2 : othTag

    var objIsObj = objTag == objectTag$2,
      othIsObj = othTag == objectTag$2,
      isSameTag = objTag == othTag

    if (isSameTag && isBuffer(object)) {
      if (!isBuffer(other)) {
        return false
      }
      objIsArr = true
      objIsObj = false
    }
    if (isSameTag && !objIsObj) {
      stack || (stack = new Stack())
      return objIsArr || isTypedArray(object)
        ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
        : equalByTag(
            object,
            other,
            objTag,
            bitmask,
            customizer,
            equalFunc,
            stack
          )
    }
    if (!(bitmask & COMPARE_PARTIAL_FLAG$3)) {
      var objIsWrapped =
          objIsObj && hasOwnProperty$a.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty$a.call(other, '__wrapped__')

      if (objIsWrapped || othIsWrapped) {
        var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other

        stack || (stack = new Stack())
        return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack)
      }
    }
    if (!isSameTag) {
      return false
    }
    stack || (stack = new Stack())
    return equalObjects(object, other, bitmask, customizer, equalFunc, stack)
  }

  /**
   * The base implementation of `_.isEqual` which supports partial comparisons
   * and tracks traversed objects.
   *
   * @private
   * @param {*} value The value to compare.
   * @param {*} other The other value to compare.
   * @param {boolean} bitmask The bitmask flags.
   *  1 - Unordered comparison
   *  2 - Partial comparison
   * @param {Function} [customizer] The function to customize comparisons.
   * @param {Object} [stack] Tracks traversed `value` and `other` objects.
   * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
   */
  function baseIsEqual(value, other, bitmask, customizer, stack) {
    if (value === other) {
      return true
    }
    if (
      value == null ||
      other == null ||
      (!isObjectLike(value) && !isObjectLike(other))
    ) {
      return value !== value && other !== other
    }
    return baseIsEqualDeep(
      value,
      other,
      bitmask,
      customizer,
      baseIsEqual,
      stack
    )
  }

  /** Used to compose bitmasks for value comparisons. */
  var COMPARE_PARTIAL_FLAG$4 = 1,
    COMPARE_UNORDERED_FLAG$2 = 2

  /**
   * The base implementation of `_.isMatch` without support for iteratee shorthands.
   *
   * @private
   * @param {Object} object The object to inspect.
   * @param {Object} source The object of property values to match.
   * @param {Array} matchData The property names, values, and compare flags to match.
   * @param {Function} [customizer] The function to customize comparisons.
   * @returns {boolean} Returns `true` if `object` is a match, else `false`.
   */
  function baseIsMatch(object, source, matchData, customizer) {
    var index = matchData.length,
      length = index,
      noCustomizer = !customizer

    if (object == null) {
      return !length
    }
    object = Object(object)
    while (index--) {
      var data = matchData[index]
      if (
        noCustomizer && data[2]
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
      ) {
        return false
      }
    }
    while (++index < length) {
      data = matchData[index]
      var key = data[0],
        objValue = object[key],
        srcValue = data[1]

      if (noCustomizer && data[2]) {
        if (objValue === undefined && !(key in object)) {
          return false
        }
      } else {
        var stack = new Stack()
        if (customizer) {
          var result = customizer(
            objValue,
            srcValue,
            key,
            object,
            source,
            stack
          )
        }
        if (
          !(result === undefined
            ? baseIsEqual(
                srcValue,
                objValue,
                COMPARE_PARTIAL_FLAG$4 | COMPARE_UNORDERED_FLAG$2,
                customizer,
                stack
              )
            : result)
        ) {
          return false
        }
      }
    }
    return true
  }

  /**
   * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` if suitable for strict
   *  equality comparisons, else `false`.
   */
  function isStrictComparable(value) {
    return value === value && !isObject(value)
  }

  /**
   * Gets the property names, values, and compare flags of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the match data of `object`.
   */
  function getMatchData(object) {
    var result = keys(object),
      length = result.length

    while (length--) {
      var key = result[length],
        value = object[key]

      result[length] = [key, value, isStrictComparable(value)]
    }
    return result
  }

  /**
   * A specialized version of `matchesProperty` for source values suitable
   * for strict equality comparisons, i.e. `===`.
   *
   * @private
   * @param {string} key The key of the property to get.
   * @param {*} srcValue The value to match.
   * @returns {Function} Returns the new spec function.
   */
  function matchesStrictComparable(key, srcValue) {
    return function(object) {
      if (object == null) {
        return false
      }
      return (
        object[key] === srcValue &&
        (srcValue !== undefined || key in Object(object))
      )
    }
  }

  /**
   * The base implementation of `_.matches` which doesn't clone `source`.
   *
   * @private
   * @param {Object} source The object of property values to match.
   * @returns {Function} Returns the new spec function.
   */
  function baseMatches(source) {
    var matchData = getMatchData(source)
    if (matchData.length == 1 && matchData[0][2]) {
      return matchesStrictComparable(matchData[0][0], matchData[0][1])
    }
    return function(object) {
      return object === source || baseIsMatch(object, source, matchData)
    }
  }

  /** `Object#toString` result references. */
  var symbolTag$1 = '[object Symbol]'

  /**
   * Checks if `value` is classified as a `Symbol` primitive or object.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
   * @example
   *
   * _.isSymbol(Symbol.iterator);
   * // => true
   *
   * _.isSymbol('abc');
   * // => false
   */
  function isSymbol(value) {
    return (
      typeof value == 'symbol' ||
      (isObjectLike(value) && baseGetTag(value) == symbolTag$1)
    )
  }

  /** Used to match property names within property paths. */
  var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/

  /**
   * Checks if `value` is a property name and not a property path.
   *
   * @private
   * @param {*} value The value to check.
   * @param {Object} [object] The object to query keys on.
   * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
   */
  function isKey(value, object) {
    if (isArray(value)) {
      return false
    }
    var type = typeof value
    if (
      type == 'number' ||
      type == 'symbol' ||
      type == 'boolean' ||
      value == null ||
      isSymbol(value)
    ) {
      return true
    }
    return (
      reIsPlainProp.test(value) ||
      !reIsDeepProp.test(value) ||
      (object != null && value in Object(object))
    )
  }

  /** Error message constants. */
  var FUNC_ERROR_TEXT = 'Expected a function'

  /**
   * Creates a function that memoizes the result of `func`. If `resolver` is
   * provided, it determines the cache key for storing the result based on the
   * arguments provided to the memoized function. By default, the first argument
   * provided to the memoized function is used as the map cache key. The `func`
   * is invoked with the `this` binding of the memoized function.
   *
   * **Note:** The cache is exposed as the `cache` property on the memoized
   * function. Its creation may be customized by replacing the `_.memoize.Cache`
   * constructor with one whose instances implement the
   * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
   * method interface of `clear`, `delete`, `get`, `has`, and `set`.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Function
   * @param {Function} func The function to have its output memoized.
   * @param {Function} [resolver] The function to resolve the cache key.
   * @returns {Function} Returns the new memoized function.
   * @example
   *
   * var object = { 'a': 1, 'b': 2 };
   * var other = { 'c': 3, 'd': 4 };
   *
   * var values = _.memoize(_.values);
   * values(object);
   * // => [1, 2]
   *
   * values(other);
   * // => [3, 4]
   *
   * object.a = 2;
   * values(object);
   * // => [1, 2]
   *
   * // Modify the result cache.
   * values.cache.set(object, ['a', 'b']);
   * values(object);
   * // => ['a', 'b']
   *
   * // Replace `_.memoize.Cache`.
   * _.memoize.Cache = WeakMap;
   */
  function memoize(func, resolver) {
    if (
      typeof func != 'function' ||
      (resolver != null && typeof resolver != 'function')
    ) {
      throw new TypeError(FUNC_ERROR_TEXT)
    }
    var memoized = function() {
      var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache

      if (cache.has(key)) {
        return cache.get(key)
      }
      var result = func.apply(this, args)
      memoized.cache = cache.set(key, result) || cache
      return result
    }
    memoized.cache = new (memoize.Cache || MapCache)()
    return memoized
  }

  // Expose `MapCache`.
  memoize.Cache = MapCache

  /** Used as the maximum memoize cache size. */
  var MAX_MEMOIZE_SIZE = 500

  /**
   * A specialized version of `_.memoize` which clears the memoized function's
   * cache when it exceeds `MAX_MEMOIZE_SIZE`.
   *
   * @private
   * @param {Function} func The function to have its output memoized.
   * @returns {Function} Returns the new memoized function.
   */
  function memoizeCapped(func) {
    var result = memoize(func, function(key) {
      if (cache.size === MAX_MEMOIZE_SIZE) {
        cache.clear()
      }
      return key
    })

    var cache = result.cache
    return result
  }

  /** Used to match property names within property paths. */
  var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g

  /** Used to match backslashes in property paths. */
  var reEscapeChar = /\\(\\)?/g

  /**
   * Converts `string` to a property path array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the property path array.
   */
  var stringToPath = memoizeCapped(function(string) {
    var result = []
    if (string.charCodeAt(0) === 46 /* . */) {
      result.push('')
    }
    string.replace(rePropName, function(match, number, quote, subString) {
      result.push(
        quote ? subString.replace(reEscapeChar, '$1') : number || match
      )
    })
    return result
  })

  /**
   * A specialized version of `_.map` for arrays without support for iteratee
   * shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the new mapped array.
   */
  function arrayMap(array, iteratee) {
    var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length)

    while (++index < length) {
      result[index] = iteratee(array[index], index, array)
    }
    return result
  }

  /** Used as references for various `Number` constants. */
  var INFINITY = 1 / 0

  /** Used to convert symbols to primitives and strings. */
  var symbolProto$1 = Symbol$1 ? Symbol$1.prototype : undefined,
    symbolToString = symbolProto$1 ? symbolProto$1.toString : undefined

  /**
   * The base implementation of `_.toString` which doesn't convert nullish
   * values to empty strings.
   *
   * @private
   * @param {*} value The value to process.
   * @returns {string} Returns the string.
   */
  function baseToString(value) {
    // Exit early for strings to avoid a performance hit in some environments.
    if (typeof value == 'string') {
      return value
    }
    if (isArray(value)) {
      // Recursively convert values (susceptible to call stack limits).
      return arrayMap(value, baseToString) + ''
    }
    if (isSymbol(value)) {
      return symbolToString ? symbolToString.call(value) : ''
    }
    var result = value + ''
    return result == '0' && 1 / value == -INFINITY ? '-0' : result
  }

  /**
   * Converts `value` to a string. An empty string is returned for `null`
   * and `undefined` values. The sign of `-0` is preserved.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to convert.
   * @returns {string} Returns the converted string.
   * @example
   *
   * _.toString(null);
   * // => ''
   *
   * _.toString(-0);
   * // => '-0'
   *
   * _.toString([1, 2, 3]);
   * // => '1,2,3'
   */
  function toString$1(value) {
    return value == null ? '' : baseToString(value)
  }

  /**
   * Casts `value` to a path array if it's not one.
   *
   * @private
   * @param {*} value The value to inspect.
   * @param {Object} [object] The object to query keys on.
   * @returns {Array} Returns the cast property path array.
   */
  function castPath(value, object) {
    if (isArray(value)) {
      return value
    }
    return isKey(value, object) ? [value] : stringToPath(toString$1(value))
  }

  /** Used as references for various `Number` constants. */
  var INFINITY$1 = 1 / 0

  /**
   * Converts `value` to a string key if it's not a string or symbol.
   *
   * @private
   * @param {*} value The value to inspect.
   * @returns {string|symbol} Returns the key.
   */
  function toKey(value) {
    if (typeof value == 'string' || isSymbol(value)) {
      return value
    }
    var result = value + ''
    return result == '0' && 1 / value == -INFINITY$1 ? '-0' : result
  }

  /**
   * The base implementation of `_.get` without support for default values.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array|string} path The path of the property to get.
   * @returns {*} Returns the resolved value.
   */
  function baseGet(object, path) {
    path = castPath(path, object)

    var index = 0,
      length = path.length

    while (object != null && index < length) {
      object = object[toKey(path[index++])]
    }
    return index && index == length ? object : undefined
  }

  /**
   * Gets the value at `path` of `object`. If the resolved value is
   * `undefined`, the `defaultValue` is returned in its place.
   *
   * @static
   * @memberOf _
   * @since 3.7.0
   * @category Object
   * @param {Object} object The object to query.
   * @param {Array|string} path The path of the property to get.
   * @param {*} [defaultValue] The value returned for `undefined` resolved values.
   * @returns {*} Returns the resolved value.
   * @example
   *
   * var object = { 'a': [{ 'b': { 'c': 3 } }] };
   *
   * _.get(object, 'a[0].b.c');
   * // => 3
   *
   * _.get(object, ['a', '0', 'b', 'c']);
   * // => 3
   *
   * _.get(object, 'a.b.c', 'default');
   * // => 'default'
   */
  function get(object, path, defaultValue) {
    var result = object == null ? undefined : baseGet(object, path)
    return result === undefined ? defaultValue : result
  }

  /**
   * The base implementation of `_.hasIn` without support for deep paths.
   *
   * @private
   * @param {Object} [object] The object to query.
   * @param {Array|string} key The key to check.
   * @returns {boolean} Returns `true` if `key` exists, else `false`.
   */
  function baseHasIn(object, key) {
    return object != null && key in Object(object)
  }

  /**
   * Checks if `path` exists on `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array|string} path The path to check.
   * @param {Function} hasFunc The function to check properties.
   * @returns {boolean} Returns `true` if `path` exists, else `false`.
   */
  function hasPath(object, path, hasFunc) {
    path = castPath(path, object)

    var index = -1,
      length = path.length,
      result = false

    while (++index < length) {
      var key = toKey(path[index])
      if (!(result = object != null && hasFunc(object, key))) {
        break
      }
      object = object[key]
    }
    if (result || ++index != length) {
      return result
    }
    length = object == null ? 0 : object.length
    return (
      !!length &&
      isLength(length) &&
      isIndex(key, length) &&
      (isArray(object) || isArguments(object))
    )
  }

  /**
   * Checks if `path` is a direct or inherited property of `object`.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Object
   * @param {Object} object The object to query.
   * @param {Array|string} path The path to check.
   * @returns {boolean} Returns `true` if `path` exists, else `false`.
   * @example
   *
   * var object = _.create({ 'a': _.create({ 'b': 2 }) });
   *
   * _.hasIn(object, 'a');
   * // => true
   *
   * _.hasIn(object, 'a.b');
   * // => true
   *
   * _.hasIn(object, ['a', 'b']);
   * // => true
   *
   * _.hasIn(object, 'b');
   * // => false
   */
  function hasIn(object, path) {
    return object != null && hasPath(object, path, baseHasIn)
  }

  /** Used to compose bitmasks for value comparisons. */
  var COMPARE_PARTIAL_FLAG$5 = 1,
    COMPARE_UNORDERED_FLAG$3 = 2

  /**
   * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
   *
   * @private
   * @param {string} path The path of the property to get.
   * @param {*} srcValue The value to match.
   * @returns {Function} Returns the new spec function.
   */
  function baseMatchesProperty(path, srcValue) {
    if (isKey(path) && isStrictComparable(srcValue)) {
      return matchesStrictComparable(toKey(path), srcValue)
    }
    return function(object) {
      var objValue = get(object, path)
      return objValue === undefined && objValue === srcValue
        ? hasIn(object, path)
        : baseIsEqual(
            srcValue,
            objValue,
            COMPARE_PARTIAL_FLAG$5 | COMPARE_UNORDERED_FLAG$3
          )
    }
  }

  /**
   * The base implementation of `_.property` without support for deep paths.
   *
   * @private
   * @param {string} key The key of the property to get.
   * @returns {Function} Returns the new accessor function.
   */
  function baseProperty(key) {
    return function(object) {
      return object == null ? undefined : object[key]
    }
  }

  /**
   * A specialized version of `baseProperty` which supports deep paths.
   *
   * @private
   * @param {Array|string} path The path of the property to get.
   * @returns {Function} Returns the new accessor function.
   */
  function basePropertyDeep(path) {
    return function(object) {
      return baseGet(object, path)
    }
  }

  /**
   * Creates a function that returns the value at `path` of a given object.
   *
   * @static
   * @memberOf _
   * @since 2.4.0
   * @category Util
   * @param {Array|string} path The path of the property to get.
   * @returns {Function} Returns the new accessor function.
   * @example
   *
   * var objects = [
   *   { 'a': { 'b': 2 } },
   *   { 'a': { 'b': 1 } }
   * ];
   *
   * _.map(objects, _.property('a.b'));
   * // => [2, 1]
   *
   * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
   * // => [1, 2]
   */
  function property(path) {
    return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path)
  }

  /**
   * The base implementation of `_.iteratee`.
   *
   * @private
   * @param {*} [value=_.identity] The value to convert to an iteratee.
   * @returns {Function} Returns the iteratee.
   */
  function baseIteratee(value) {
    // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
    // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
    if (typeof value == 'function') {
      return value
    }
    if (value == null) {
      return identity
    }
    if (typeof value == 'object') {
      return isArray(value)
        ? baseMatchesProperty(value[0], value[1])
        : baseMatches(value)
    }
    return property(value)
  }

  /**
   * Creates an object with the same keys as `object` and values generated
   * by running each own enumerable string keyed property of `object` thru
   * `iteratee`. The iteratee is invoked with three arguments:
   * (value, key, object).
   *
   * @static
   * @memberOf _
   * @since 2.4.0
   * @category Object
   * @param {Object} object The object to iterate over.
   * @param {Function} [iteratee=_.identity] The function invoked per iteration.
   * @returns {Object} Returns the new mapped object.
   * @see _.mapKeys
   * @example
   *
   * var users = {
   *   'fred':    { 'user': 'fred',    'age': 40 },
   *   'pebbles': { 'user': 'pebbles', 'age': 1 }
   * };
   *
   * _.mapValues(users, function(o) { return o.age; });
   * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
   *
   * // The `_.property` iteratee shorthand.
   * _.mapValues(users, 'age');
   * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
   */
  function mapValues(object, iteratee) {
    var result = {}
    iteratee = baseIteratee(iteratee)

    baseForOwn(object, function(value, key, object) {
      baseAssignValue(result, key, iteratee(value, key, object))
    })
    return result
  }

  /**
   * A specialized version of `_.forEach` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns `array`.
   */
  function arrayEach(array, iteratee) {
    var index = -1,
      length = array == null ? 0 : array.length

    while (++index < length) {
      if (iteratee(array[index], index, array) === false) {
        break
      }
    }
    return array
  }

  /** Used for built-in method references. */
  var objectProto$e = Object.prototype

  /** Used to check objects for own properties. */
  var hasOwnProperty$b = objectProto$e.hasOwnProperty

  /**
   * Assigns `value` to `key` of `object` if the existing value is not equivalent
   * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
   * for equality comparisons.
   *
   * @private
   * @param {Object} object The object to modify.
   * @param {string} key The key of the property to assign.
   * @param {*} value The value to assign.
   */
  function assignValue(object, key, value) {
    var objValue = object[key]
    if (
      !(hasOwnProperty$b.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))
    ) {
      baseAssignValue(object, key, value)
    }
  }

  /**
   * Copies properties of `source` to `object`.
   *
   * @private
   * @param {Object} source The object to copy properties from.
   * @param {Array} props The property identifiers to copy.
   * @param {Object} [object={}] The object to copy properties to.
   * @param {Function} [customizer] The function to customize copied values.
   * @returns {Object} Returns `object`.
   */
  function copyObject(source, props, object, customizer) {
    var isNew = !object
    object || (object = {})

    var index = -1,
      length = props.length

    while (++index < length) {
      var key = props[index]

      var newValue = customizer
        ? customizer(object[key], source[key], key, object, source)
        : undefined

      if (newValue === undefined) {
        newValue = source[key]
      }
      if (isNew) {
        baseAssignValue(object, key, newValue)
      } else {
        assignValue(object, key, newValue)
      }
    }
    return object
  }

  /**
   * The base implementation of `_.assign` without support for multiple sources
   * or `customizer` functions.
   *
   * @private
   * @param {Object} object The destination object.
   * @param {Object} source The source object.
   * @returns {Object} Returns `object`.
   */
  function baseAssign(object, source) {
    return object && copyObject(source, keys(source), object)
  }

  /**
   * The base implementation of `_.assignIn` without support for multiple sources
   * or `customizer` functions.
   *
   * @private
   * @param {Object} object The destination object.
   * @param {Object} source The source object.
   * @returns {Object} Returns `object`.
   */
  function baseAssignIn(object, source) {
    return object && copyObject(source, keysIn(source), object)
  }

  /** Detect free variable `exports`. */
  var freeExports$2 =
    typeof exports == 'object' && exports && !exports.nodeType && exports

  /** Detect free variable `module`. */
  var freeModule$2 =
    freeExports$2 &&
    typeof module == 'object' &&
    module &&
    !module.nodeType &&
    module

  /** Detect the popular CommonJS extension `module.exports`. */
  var moduleExports$2 = freeModule$2 && freeModule$2.exports === freeExports$2

  /** Built-in value references. */
  var Buffer$1 = moduleExports$2 ? root.Buffer : undefined,
    allocUnsafe = Buffer$1 ? Buffer$1.allocUnsafe : undefined

  /**
   * Creates a clone of  `buffer`.
   *
   * @private
   * @param {Buffer} buffer The buffer to clone.
   * @param {boolean} [isDeep] Specify a deep clone.
   * @returns {Buffer} Returns the cloned buffer.
   */
  function cloneBuffer(buffer, isDeep) {
    if (isDeep) {
      return buffer.slice()
    }
    var length = buffer.length,
      result = allocUnsafe
        ? allocUnsafe(length)
        : new buffer.constructor(length)

    buffer.copy(result)
    return result
  }

  /**
   * Copies the values of `source` to `array`.
   *
   * @private
   * @param {Array} source The array to copy values from.
   * @param {Array} [array=[]] The array to copy values to.
   * @returns {Array} Returns `array`.
   */
  function copyArray(source, array) {
    var index = -1,
      length = source.length

    array || (array = Array(length))
    while (++index < length) {
      array[index] = source[index]
    }
    return array
  }

  /**
   * Copies own symbols of `source` to `object`.
   *
   * @private
   * @param {Object} source The object to copy symbols from.
   * @param {Object} [object={}] The object to copy symbols to.
   * @returns {Object} Returns `object`.
   */
  function copySymbols(source, object) {
    return copyObject(source, getSymbols(source), object)
  }

  /** Built-in value references. */
  var getPrototype = overArg(Object.getPrototypeOf, Object)

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeGetSymbols$1 = Object.getOwnPropertySymbols

  /**
   * Creates an array of the own and inherited enumerable symbols of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of symbols.
   */
  var getSymbolsIn = !nativeGetSymbols$1
    ? stubArray
    : function(object) {
        var result = []
        while (object) {
          arrayPush(result, getSymbols(object))
          object = getPrototype(object)
        }
        return result
      }

  /**
   * Copies own and inherited symbols of `source` to `object`.
   *
   * @private
   * @param {Object} source The object to copy symbols from.
   * @param {Object} [object={}] The object to copy symbols to.
   * @returns {Object} Returns `object`.
   */
  function copySymbolsIn(source, object) {
    return copyObject(source, getSymbolsIn(source), object)
  }

  /**
   * Creates an array of own and inherited enumerable property names and
   * symbols of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names and symbols.
   */
  function getAllKeysIn(object) {
    return baseGetAllKeys(object, keysIn, getSymbolsIn)
  }

  /** Used for built-in method references. */
  var objectProto$f = Object.prototype

  /** Used to check objects for own properties. */
  var hasOwnProperty$c = objectProto$f.hasOwnProperty

  /**
   * Initializes an array clone.
   *
   * @private
   * @param {Array} array The array to clone.
   * @returns {Array} Returns the initialized clone.
   */
  function initCloneArray(array) {
    var length = array.length,
      result = new array.constructor(length)

    // Add properties assigned by `RegExp#exec`.
    if (
      length &&
      typeof array[0] == 'string' &&
      hasOwnProperty$c.call(array, 'index')
    ) {
      result.index = array.index
      result.input = array.input
    }
    return result
  }

  /**
   * Creates a clone of `arrayBuffer`.
   *
   * @private
   * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
   * @returns {ArrayBuffer} Returns the cloned array buffer.
   */
  function cloneArrayBuffer(arrayBuffer) {
    var result = new arrayBuffer.constructor(arrayBuffer.byteLength)
    new Uint8Array(result).set(new Uint8Array(arrayBuffer))
    return result
  }

  /**
   * Creates a clone of `dataView`.
   *
   * @private
   * @param {Object} dataView The data view to clone.
   * @param {boolean} [isDeep] Specify a deep clone.
   * @returns {Object} Returns the cloned data view.
   */
  function cloneDataView(dataView, isDeep) {
    var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer
    return new dataView.constructor(
      buffer,
      dataView.byteOffset,
      dataView.byteLength
    )
  }

  /** Used to match `RegExp` flags from their coerced string values. */
  var reFlags = /\w*$/

  /**
   * Creates a clone of `regexp`.
   *
   * @private
   * @param {Object} regexp The regexp to clone.
   * @returns {Object} Returns the cloned regexp.
   */
  function cloneRegExp(regexp) {
    var result = new regexp.constructor(regexp.source, reFlags.exec(regexp))
    result.lastIndex = regexp.lastIndex
    return result
  }

  /** Used to convert symbols to primitives and strings. */
  var symbolProto$2 = Symbol$1 ? Symbol$1.prototype : undefined,
    symbolValueOf$1 = symbolProto$2 ? symbolProto$2.valueOf : undefined

  /**
   * Creates a clone of the `symbol` object.
   *
   * @private
   * @param {Object} symbol The symbol object to clone.
   * @returns {Object} Returns the cloned symbol object.
   */
  function cloneSymbol(symbol) {
    return symbolValueOf$1 ? Object(symbolValueOf$1.call(symbol)) : {}
  }

  /**
   * Creates a clone of `typedArray`.
   *
   * @private
   * @param {Object} typedArray The typed array to clone.
   * @param {boolean} [isDeep] Specify a deep clone.
   * @returns {Object} Returns the cloned typed array.
   */
  function cloneTypedArray(typedArray, isDeep) {
    var buffer = isDeep
      ? cloneArrayBuffer(typedArray.buffer)
      : typedArray.buffer
    return new typedArray.constructor(
      buffer,
      typedArray.byteOffset,
      typedArray.length
    )
  }

  /** `Object#toString` result references. */
  var boolTag$2 = '[object Boolean]',
    dateTag$2 = '[object Date]',
    mapTag$3 = '[object Map]',
    numberTag$2 = '[object Number]',
    regexpTag$2 = '[object RegExp]',
    setTag$3 = '[object Set]',
    stringTag$2 = '[object String]',
    symbolTag$2 = '[object Symbol]'

  var arrayBufferTag$2 = '[object ArrayBuffer]',
    dataViewTag$3 = '[object DataView]',
    float32Tag$1 = '[object Float32Array]',
    float64Tag$1 = '[object Float64Array]',
    int8Tag$1 = '[object Int8Array]',
    int16Tag$1 = '[object Int16Array]',
    int32Tag$1 = '[object Int32Array]',
    uint8Tag$1 = '[object Uint8Array]',
    uint8ClampedTag$1 = '[object Uint8ClampedArray]',
    uint16Tag$1 = '[object Uint16Array]',
    uint32Tag$1 = '[object Uint32Array]'

  /**
   * Initializes an object clone based on its `toStringTag`.
   *
   * **Note:** This function only supports cloning values with tags of
   * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
   *
   * @private
   * @param {Object} object The object to clone.
   * @param {string} tag The `toStringTag` of the object to clone.
   * @param {boolean} [isDeep] Specify a deep clone.
   * @returns {Object} Returns the initialized clone.
   */
  function initCloneByTag(object, tag, isDeep) {
    var Ctor = object.constructor
    switch (tag) {
      case arrayBufferTag$2:
        return cloneArrayBuffer(object)

      case boolTag$2:
      case dateTag$2:
        return new Ctor(+object)

      case dataViewTag$3:
        return cloneDataView(object, isDeep)

      case float32Tag$1:
      case float64Tag$1:
      case int8Tag$1:
      case int16Tag$1:
      case int32Tag$1:
      case uint8Tag$1:
      case uint8ClampedTag$1:
      case uint16Tag$1:
      case uint32Tag$1:
        return cloneTypedArray(object, isDeep)

      case mapTag$3:
        return new Ctor()

      case numberTag$2:
      case stringTag$2:
        return new Ctor(object)

      case regexpTag$2:
        return cloneRegExp(object)

      case setTag$3:
        return new Ctor()

      case symbolTag$2:
        return cloneSymbol(object)
    }
  }

  /** Built-in value references. */
  var objectCreate = Object.create

  /**
   * The base implementation of `_.create` without support for assigning
   * properties to the created object.
   *
   * @private
   * @param {Object} proto The object to inherit from.
   * @returns {Object} Returns the new object.
   */
  var baseCreate = (function() {
    function object() {}
    return function(proto) {
      if (!isObject(proto)) {
        return {}
      }
      if (objectCreate) {
        return objectCreate(proto)
      }
      object.prototype = proto
      var result = new object()
      object.prototype = undefined
      return result
    }
  })()

  /**
   * Initializes an object clone.
   *
   * @private
   * @param {Object} object The object to clone.
   * @returns {Object} Returns the initialized clone.
   */
  function initCloneObject(object) {
    return typeof object.constructor == 'function' && !isPrototype(object)
      ? baseCreate(getPrototype(object))
      : {}
  }

  /** `Object#toString` result references. */
  var mapTag$4 = '[object Map]'

  /**
   * The base implementation of `_.isMap` without Node.js optimizations.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a map, else `false`.
   */
  function baseIsMap(value) {
    return isObjectLike(value) && getTag$1(value) == mapTag$4
  }

  /* Node.js helper references. */
  var nodeIsMap = nodeUtil && nodeUtil.isMap

  /**
   * Checks if `value` is classified as a `Map` object.
   *
   * @static
   * @memberOf _
   * @since 4.3.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a map, else `false`.
   * @example
   *
   * _.isMap(new Map);
   * // => true
   *
   * _.isMap(new WeakMap);
   * // => false
   */
  var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap

  /** `Object#toString` result references. */
  var setTag$4 = '[object Set]'

  /**
   * The base implementation of `_.isSet` without Node.js optimizations.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a set, else `false`.
   */
  function baseIsSet(value) {
    return isObjectLike(value) && getTag$1(value) == setTag$4
  }

  /* Node.js helper references. */
  var nodeIsSet = nodeUtil && nodeUtil.isSet

  /**
   * Checks if `value` is classified as a `Set` object.
   *
   * @static
   * @memberOf _
   * @since 4.3.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a set, else `false`.
   * @example
   *
   * _.isSet(new Set);
   * // => true
   *
   * _.isSet(new WeakSet);
   * // => false
   */
  var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet

  /** Used to compose bitmasks for cloning. */
  var CLONE_DEEP_FLAG = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG = 4

  /** `Object#toString` result references. */
  var argsTag$3 = '[object Arguments]',
    arrayTag$2 = '[object Array]',
    boolTag$3 = '[object Boolean]',
    dateTag$3 = '[object Date]',
    errorTag$2 = '[object Error]',
    funcTag$2 = '[object Function]',
    genTag$1 = '[object GeneratorFunction]',
    mapTag$5 = '[object Map]',
    numberTag$3 = '[object Number]',
    objectTag$3 = '[object Object]',
    regexpTag$3 = '[object RegExp]',
    setTag$5 = '[object Set]',
    stringTag$3 = '[object String]',
    symbolTag$3 = '[object Symbol]',
    weakMapTag$2 = '[object WeakMap]'

  var arrayBufferTag$3 = '[object ArrayBuffer]',
    dataViewTag$4 = '[object DataView]',
    float32Tag$2 = '[object Float32Array]',
    float64Tag$2 = '[object Float64Array]',
    int8Tag$2 = '[object Int8Array]',
    int16Tag$2 = '[object Int16Array]',
    int32Tag$2 = '[object Int32Array]',
    uint8Tag$2 = '[object Uint8Array]',
    uint8ClampedTag$2 = '[object Uint8ClampedArray]',
    uint16Tag$2 = '[object Uint16Array]',
    uint32Tag$2 = '[object Uint32Array]'

  /** Used to identify `toStringTag` values supported by `_.clone`. */
  var cloneableTags = {}
  cloneableTags[argsTag$3] = cloneableTags[arrayTag$2] = cloneableTags[
    arrayBufferTag$3
  ] = cloneableTags[dataViewTag$4] = cloneableTags[boolTag$3] = cloneableTags[
    dateTag$3
  ] = cloneableTags[float32Tag$2] = cloneableTags[float64Tag$2] = cloneableTags[
    int8Tag$2
  ] = cloneableTags[int16Tag$2] = cloneableTags[int32Tag$2] = cloneableTags[
    mapTag$5
  ] = cloneableTags[numberTag$3] = cloneableTags[objectTag$3] = cloneableTags[
    regexpTag$3
  ] = cloneableTags[setTag$5] = cloneableTags[stringTag$3] = cloneableTags[
    symbolTag$3
  ] = cloneableTags[uint8Tag$2] = cloneableTags[
    uint8ClampedTag$2
  ] = cloneableTags[uint16Tag$2] = cloneableTags[uint32Tag$2] = true
  cloneableTags[errorTag$2] = cloneableTags[funcTag$2] = cloneableTags[
    weakMapTag$2
  ] = false

  /**
   * The base implementation of `_.clone` and `_.cloneDeep` which tracks
   * traversed objects.
   *
   * @private
   * @param {*} value The value to clone.
   * @param {boolean} bitmask The bitmask flags.
   *  1 - Deep clone
   *  2 - Flatten inherited properties
   *  4 - Clone symbols
   * @param {Function} [customizer] The function to customize cloning.
   * @param {string} [key] The key of `value`.
   * @param {Object} [object] The parent object of `value`.
   * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
   * @returns {*} Returns the cloned value.
   */
  function baseClone(value, bitmask, customizer, key, object, stack) {
    var result,
      isDeep = bitmask & CLONE_DEEP_FLAG,
      isFlat = bitmask & CLONE_FLAT_FLAG,
      isFull = bitmask & CLONE_SYMBOLS_FLAG

    if (customizer) {
      result = object
        ? customizer(value, key, object, stack)
        : customizer(value)
    }
    if (result !== undefined) {
      return result
    }
    if (!isObject(value)) {
      return value
    }
    var isArr = isArray(value)
    if (isArr) {
      result = initCloneArray(value)
      if (!isDeep) {
        return copyArray(value, result)
      }
    } else {
      var tag = getTag$1(value),
        isFunc = tag == funcTag$2 || tag == genTag$1

      if (isBuffer(value)) {
        return cloneBuffer(value, isDeep)
      }
      if (tag == objectTag$3 || tag == argsTag$3 || (isFunc && !object)) {
        result = isFlat || isFunc ? {} : initCloneObject(value)
        if (!isDeep) {
          return isFlat
            ? copySymbolsIn(value, baseAssignIn(result, value))
            : copySymbols(value, baseAssign(result, value))
        }
      } else {
        if (!cloneableTags[tag]) {
          return object ? value : {}
        }
        result = initCloneByTag(value, tag, isDeep)
      }
    }
    // Check for circular references and return its corresponding clone.
    stack || (stack = new Stack())
    var stacked = stack.get(value)
    if (stacked) {
      return stacked
    }
    stack.set(value, result)

    if (isSet(value)) {
      value.forEach(function(subValue) {
        result.add(
          baseClone(subValue, bitmask, customizer, subValue, value, stack)
        )
      })
    } else if (isMap(value)) {
      value.forEach(function(subValue, key) {
        result.set(
          key,
          baseClone(subValue, bitmask, customizer, key, value, stack)
        )
      })
    }

    var keysFunc = isFull
      ? isFlat
        ? getAllKeysIn
        : getAllKeys
      : isFlat
      ? keysIn
      : keys

    var props = isArr ? undefined : keysFunc(value)
    arrayEach(props || value, function(subValue, key) {
      if (props) {
        key = subValue
        subValue = value[key]
      }
      // Recursively populate clone (susceptible to call stack limits).
      assignValue(
        result,
        key,
        baseClone(subValue, bitmask, customizer, key, value, stack)
      )
    })
    return result
  }

  /**
   * Gets the last element of `array`.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Array
   * @param {Array} array The array to query.
   * @returns {*} Returns the last element of `array`.
   * @example
   *
   * _.last([1, 2, 3]);
   * // => 3
   */
  function last(array) {
    var length = array == null ? 0 : array.length
    return length ? array[length - 1] : undefined
  }

  /**
   * The base implementation of `_.slice` without an iteratee call guard.
   *
   * @private
   * @param {Array} array The array to slice.
   * @param {number} [start=0] The start position.
   * @param {number} [end=array.length] The end position.
   * @returns {Array} Returns the slice of `array`.
   */
  function baseSlice(array, start, end) {
    var index = -1,
      length = array.length

    if (start < 0) {
      start = -start > length ? 0 : length + start
    }
    end = end > length ? length : end
    if (end < 0) {
      end += length
    }
    length = start > end ? 0 : (end - start) >>> 0
    start >>>= 0

    var result = Array(length)
    while (++index < length) {
      result[index] = array[index + start]
    }
    return result
  }

  /**
   * Gets the parent value at `path` of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array} path The path to get the parent value of.
   * @returns {*} Returns the parent value.
   */
  function parent(object, path) {
    return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1))
  }

  /**
   * The base implementation of `_.unset`.
   *
   * @private
   * @param {Object} object The object to modify.
   * @param {Array|string} path The property path to unset.
   * @returns {boolean} Returns `true` if the property is deleted, else `false`.
   */
  function baseUnset(object, path) {
    path = castPath(path, object)
    object = parent(object, path)
    return object == null || delete object[toKey(last(path))]
  }

  /** `Object#toString` result references. */
  var objectTag$4 = '[object Object]'

  /** Used for built-in method references. */
  var funcProto$2 = Function.prototype,
    objectProto$g = Object.prototype

  /** Used to resolve the decompiled source of functions. */
  var funcToString$2 = funcProto$2.toString

  /** Used to check objects for own properties. */
  var hasOwnProperty$d = objectProto$g.hasOwnProperty

  /** Used to infer the `Object` constructor. */
  var objectCtorString = funcToString$2.call(Object)

  /**
   * Checks if `value` is a plain object, that is, an object created by the
   * `Object` constructor or one with a `[[Prototype]]` of `null`.
   *
   * @static
   * @memberOf _
   * @since 0.8.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   * }
   *
   * _.isPlainObject(new Foo);
   * // => false
   *
   * _.isPlainObject([1, 2, 3]);
   * // => false
   *
   * _.isPlainObject({ 'x': 0, 'y': 0 });
   * // => true
   *
   * _.isPlainObject(Object.create(null));
   * // => true
   */
  function isPlainObject(value) {
    if (!isObjectLike(value) || baseGetTag(value) != objectTag$4) {
      return false
    }
    var proto = getPrototype(value)
    if (proto === null) {
      return true
    }
    var Ctor = hasOwnProperty$d.call(proto, 'constructor') && proto.constructor
    return (
      typeof Ctor == 'function' &&
      Ctor instanceof Ctor &&
      funcToString$2.call(Ctor) == objectCtorString
    )
  }

  /**
   * Used by `_.omit` to customize its `_.cloneDeep` use to only clone plain
   * objects.
   *
   * @private
   * @param {*} value The value to inspect.
   * @param {string} key The key of the property to inspect.
   * @returns {*} Returns the uncloned value or `undefined` to defer cloning to `_.cloneDeep`.
   */
  function customOmitClone(value) {
    return isPlainObject(value) ? undefined : value
  }

  /** Built-in value references. */
  var spreadableSymbol = Symbol$1 ? Symbol$1.isConcatSpreadable : undefined

  /**
   * Checks if `value` is a flattenable `arguments` object or array.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
   */
  function isFlattenable(value) {
    return (
      isArray(value) ||
      isArguments(value) ||
      !!(spreadableSymbol && value && value[spreadableSymbol])
    )
  }

  /**
   * The base implementation of `_.flatten` with support for restricting flattening.
   *
   * @private
   * @param {Array} array The array to flatten.
   * @param {number} depth The maximum recursion depth.
   * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
   * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
   * @param {Array} [result=[]] The initial result value.
   * @returns {Array} Returns the new flattened array.
   */
  function baseFlatten(array, depth, predicate, isStrict, result) {
    var index = -1,
      length = array.length

    predicate || (predicate = isFlattenable)
    result || (result = [])

    while (++index < length) {
      var value = array[index]
      if (depth > 0 && predicate(value)) {
        if (depth > 1) {
          // Recursively flatten arrays (susceptible to call stack limits).
          baseFlatten(value, depth - 1, predicate, isStrict, result)
        } else {
          arrayPush(result, value)
        }
      } else if (!isStrict) {
        result[result.length] = value
      }
    }
    return result
  }

  /**
   * Flattens `array` a single level deep.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Array
   * @param {Array} array The array to flatten.
   * @returns {Array} Returns the new flattened array.
   * @example
   *
   * _.flatten([1, [2, [3, [4]], 5]]);
   * // => [1, 2, [3, [4]], 5]
   */
  function flatten(array) {
    var length = array == null ? 0 : array.length
    return length ? baseFlatten(array, 1) : []
  }

  /**
   * A specialized version of `baseRest` which flattens the rest array.
   *
   * @private
   * @param {Function} func The function to apply a rest parameter to.
   * @returns {Function} Returns the new function.
   */
  function flatRest(func) {
    return setToString(overRest(func, undefined, flatten), func + '')
  }

  /** Used to compose bitmasks for cloning. */
  var CLONE_DEEP_FLAG$1 = 1,
    CLONE_FLAT_FLAG$1 = 2,
    CLONE_SYMBOLS_FLAG$1 = 4

  /**
   * The opposite of `_.pick`; this method creates an object composed of the
   * own and inherited enumerable property paths of `object` that are not omitted.
   *
   * **Note:** This method is considerably slower than `_.pick`.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Object
   * @param {Object} object The source object.
   * @param {...(string|string[])} [paths] The property paths to omit.
   * @returns {Object} Returns the new object.
   * @example
   *
   * var object = { 'a': 1, 'b': '2', 'c': 3 };
   *
   * _.omit(object, ['a', 'c']);
   * // => { 'b': '2' }
   */
  var omit = flatRest(function(object, paths) {
    var result = {}
    if (object == null) {
      return result
    }
    var isDeep = false
    paths = arrayMap(paths, function(path) {
      path = castPath(path, object)
      isDeep || (isDeep = path.length > 1)
      return path
    })
    copyObject(object, getAllKeysIn(object), result)
    if (isDeep) {
      result = baseClone(
        result,
        CLONE_DEEP_FLAG$1 | CLONE_FLAT_FLAG$1 | CLONE_SYMBOLS_FLAG$1,
        customOmitClone
      )
    }
    var length = paths.length
    while (length--) {
      baseUnset(result, paths[length])
    }
    return result
  })

  /**
   * An alternative to `_.reduce`; this method transforms `object` to a new
   * `accumulator` object which is the result of running each of its own
   * enumerable string keyed properties thru `iteratee`, with each invocation
   * potentially mutating the `accumulator` object. If `accumulator` is not
   * provided, a new object with the same `[[Prototype]]` will be used. The
   * iteratee is invoked with four arguments: (accumulator, value, key, object).
   * Iteratee functions may exit iteration early by explicitly returning `false`.
   *
   * @static
   * @memberOf _
   * @since 1.3.0
   * @category Object
   * @param {Object} object The object to iterate over.
   * @param {Function} [iteratee=_.identity] The function invoked per iteration.
   * @param {*} [accumulator] The custom accumulator value.
   * @returns {*} Returns the accumulated value.
   * @example
   *
   * _.transform([2, 3, 4], function(result, n) {
   *   result.push(n *= n);
   *   return n % 2 == 0;
   * }, []);
   * // => [4, 9]
   *
   * _.transform({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
   *   (result[value] || (result[value] = [])).push(key);
   * }, {});
   * // => { '1': ['a', 'c'], '2': ['b'] }
   */
  function transform(object, iteratee, accumulator) {
    var isArr = isArray(object),
      isArrLike = isArr || isBuffer(object) || isTypedArray(object)

    iteratee = baseIteratee(iteratee)
    if (accumulator == null) {
      var Ctor = object && object.constructor
      if (isArrLike) {
        accumulator = isArr ? new Ctor() : []
      } else if (isObject(object)) {
        accumulator = isFunction(Ctor) ? baseCreate(getPrototype(object)) : {}
      } else {
        accumulator = {}
      }
    }
    ;(isArrLike
      ? arrayEach
      : baseForOwn)(object, function(value, index, object) {
      return iteratee(accumulator, value, index, object)
    })
    return accumulator
  }

  function createCommonjsModule(fn, module) {
    return (
      (module = { exports: {} }), fn(module, module.exports), module.exports
    )
  }

  var reactIs_development = createCommonjsModule(function(module, exports) {
    {
      ;(function() {
        // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
        // nor polyfill, then a plain number is used for performance.
        var hasSymbol = typeof Symbol === 'function' && Symbol.for
        var REACT_ELEMENT_TYPE = hasSymbol
          ? Symbol.for('react.element')
          : 0xeac7
        var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca
        var REACT_FRAGMENT_TYPE = hasSymbol
          ? Symbol.for('react.fragment')
          : 0xeacb
        var REACT_STRICT_MODE_TYPE = hasSymbol
          ? Symbol.for('react.strict_mode')
          : 0xeacc
        var REACT_PROFILER_TYPE = hasSymbol
          ? Symbol.for('react.profiler')
          : 0xead2
        var REACT_PROVIDER_TYPE = hasSymbol
          ? Symbol.for('react.provider')
          : 0xeacd
        var REACT_CONTEXT_TYPE = hasSymbol
          ? Symbol.for('react.context')
          : 0xeace // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
        // (unstable) APIs that have been removed. Can we remove the symbols?

        var REACT_ASYNC_MODE_TYPE = hasSymbol
          ? Symbol.for('react.async_mode')
          : 0xeacf
        var REACT_CONCURRENT_MODE_TYPE = hasSymbol
          ? Symbol.for('react.concurrent_mode')
          : 0xeacf
        var REACT_FORWARD_REF_TYPE = hasSymbol
          ? Symbol.for('react.forward_ref')
          : 0xead0
        var REACT_SUSPENSE_TYPE = hasSymbol
          ? Symbol.for('react.suspense')
          : 0xead1
        var REACT_SUSPENSE_LIST_TYPE = hasSymbol
          ? Symbol.for('react.suspense_list')
          : 0xead8
        var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3
        var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4
        var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9
        var REACT_FUNDAMENTAL_TYPE = hasSymbol
          ? Symbol.for('react.fundamental')
          : 0xead5
        var REACT_RESPONDER_TYPE = hasSymbol
          ? Symbol.for('react.responder')
          : 0xead6
        var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7

        function isValidElementType(type) {
          return (
            typeof type === 'string' ||
            typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
            type === REACT_FRAGMENT_TYPE ||
            type === REACT_CONCURRENT_MODE_TYPE ||
            type === REACT_PROFILER_TYPE ||
            type === REACT_STRICT_MODE_TYPE ||
            type === REACT_SUSPENSE_TYPE ||
            type === REACT_SUSPENSE_LIST_TYPE ||
            (typeof type === 'object' &&
              type !== null &&
              (type.$$typeof === REACT_LAZY_TYPE ||
                type.$$typeof === REACT_MEMO_TYPE ||
                type.$$typeof === REACT_PROVIDER_TYPE ||
                type.$$typeof === REACT_CONTEXT_TYPE ||
                type.$$typeof === REACT_FORWARD_REF_TYPE ||
                type.$$typeof === REACT_FUNDAMENTAL_TYPE ||
                type.$$typeof === REACT_RESPONDER_TYPE ||
                type.$$typeof === REACT_SCOPE_TYPE ||
                type.$$typeof === REACT_BLOCK_TYPE))
          )
        }

        function typeOf(object) {
          if (typeof object === 'object' && object !== null) {
            var $$typeof = object.$$typeof

            switch ($$typeof) {
              case REACT_ELEMENT_TYPE:
                var type = object.type

                switch (type) {
                  case REACT_ASYNC_MODE_TYPE:
                  case REACT_CONCURRENT_MODE_TYPE:
                  case REACT_FRAGMENT_TYPE:
                  case REACT_PROFILER_TYPE:
                  case REACT_STRICT_MODE_TYPE:
                  case REACT_SUSPENSE_TYPE:
                    return type

                  default:
                    var $$typeofType = type && type.$$typeof

                    switch ($$typeofType) {
                      case REACT_CONTEXT_TYPE:
                      case REACT_FORWARD_REF_TYPE:
                      case REACT_LAZY_TYPE:
                      case REACT_MEMO_TYPE:
                      case REACT_PROVIDER_TYPE:
                        return $$typeofType

                      default:
                        return $$typeof
                    }
                }

              case REACT_PORTAL_TYPE:
                return $$typeof
            }
          }

          return undefined
        } // AsyncMode is deprecated along with isAsyncMode

        var AsyncMode = REACT_ASYNC_MODE_TYPE
        var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE
        var ContextConsumer = REACT_CONTEXT_TYPE
        var ContextProvider = REACT_PROVIDER_TYPE
        var Element = REACT_ELEMENT_TYPE
        var ForwardRef = REACT_FORWARD_REF_TYPE
        var Fragment = REACT_FRAGMENT_TYPE
        var Lazy = REACT_LAZY_TYPE
        var Memo = REACT_MEMO_TYPE
        var Portal = REACT_PORTAL_TYPE
        var Profiler = REACT_PROFILER_TYPE
        var StrictMode = REACT_STRICT_MODE_TYPE
        var Suspense = REACT_SUSPENSE_TYPE
        var hasWarnedAboutDeprecatedIsAsyncMode = false // AsyncMode should be deprecated

        function isAsyncMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsAsyncMode) {
              hasWarnedAboutDeprecatedIsAsyncMode = true // Using console['warn'] to evade Babel and ESLint

              console['warn'](
                'The ReactIs.isAsyncMode() alias has been deprecated, ' +
                  'and will be removed in React 17+. Update your code to use ' +
                  'ReactIs.isConcurrentMode() instead. It has the exact same API.'
              )
            }
          }

          return (
            isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE
          )
        }
        function isConcurrentMode(object) {
          return typeOf(object) === REACT_CONCURRENT_MODE_TYPE
        }
        function isContextConsumer(object) {
          return typeOf(object) === REACT_CONTEXT_TYPE
        }
        function isContextProvider(object) {
          return typeOf(object) === REACT_PROVIDER_TYPE
        }
        function isElement(object) {
          return (
            typeof object === 'object' &&
            object !== null &&
            object.$$typeof === REACT_ELEMENT_TYPE
          )
        }
        function isForwardRef(object) {
          return typeOf(object) === REACT_FORWARD_REF_TYPE
        }
        function isFragment(object) {
          return typeOf(object) === REACT_FRAGMENT_TYPE
        }
        function isLazy(object) {
          return typeOf(object) === REACT_LAZY_TYPE
        }
        function isMemo(object) {
          return typeOf(object) === REACT_MEMO_TYPE
        }
        function isPortal(object) {
          return typeOf(object) === REACT_PORTAL_TYPE
        }
        function isProfiler(object) {
          return typeOf(object) === REACT_PROFILER_TYPE
        }
        function isStrictMode(object) {
          return typeOf(object) === REACT_STRICT_MODE_TYPE
        }
        function isSuspense(object) {
          return typeOf(object) === REACT_SUSPENSE_TYPE
        }

        exports.AsyncMode = AsyncMode
        exports.ConcurrentMode = ConcurrentMode
        exports.ContextConsumer = ContextConsumer
        exports.ContextProvider = ContextProvider
        exports.Element = Element
        exports.ForwardRef = ForwardRef
        exports.Fragment = Fragment
        exports.Lazy = Lazy
        exports.Memo = Memo
        exports.Portal = Portal
        exports.Profiler = Profiler
        exports.StrictMode = StrictMode
        exports.Suspense = Suspense
        exports.isAsyncMode = isAsyncMode
        exports.isConcurrentMode = isConcurrentMode
        exports.isContextConsumer = isContextConsumer
        exports.isContextProvider = isContextProvider
        exports.isElement = isElement
        exports.isForwardRef = isForwardRef
        exports.isFragment = isFragment
        exports.isLazy = isLazy
        exports.isMemo = isMemo
        exports.isPortal = isPortal
        exports.isProfiler = isProfiler
        exports.isStrictMode = isStrictMode
        exports.isSuspense = isSuspense
        exports.isValidElementType = isValidElementType
        exports.typeOf = typeOf
      })()
    }
  })
  var reactIs_development_1 = reactIs_development.AsyncMode
  var reactIs_development_2 = reactIs_development.ConcurrentMode
  var reactIs_development_3 = reactIs_development.ContextConsumer
  var reactIs_development_4 = reactIs_development.ContextProvider
  var reactIs_development_5 = reactIs_development.Element
  var reactIs_development_6 = reactIs_development.ForwardRef
  var reactIs_development_7 = reactIs_development.Fragment
  var reactIs_development_8 = reactIs_development.Lazy
  var reactIs_development_9 = reactIs_development.Memo
  var reactIs_development_10 = reactIs_development.Portal
  var reactIs_development_11 = reactIs_development.Profiler
  var reactIs_development_12 = reactIs_development.StrictMode
  var reactIs_development_13 = reactIs_development.Suspense
  var reactIs_development_14 = reactIs_development.isAsyncMode
  var reactIs_development_15 = reactIs_development.isConcurrentMode
  var reactIs_development_16 = reactIs_development.isContextConsumer
  var reactIs_development_17 = reactIs_development.isContextProvider
  var reactIs_development_18 = reactIs_development.isElement
  var reactIs_development_19 = reactIs_development.isForwardRef
  var reactIs_development_20 = reactIs_development.isFragment
  var reactIs_development_21 = reactIs_development.isLazy
  var reactIs_development_22 = reactIs_development.isMemo
  var reactIs_development_23 = reactIs_development.isPortal
  var reactIs_development_24 = reactIs_development.isProfiler
  var reactIs_development_25 = reactIs_development.isStrictMode
  var reactIs_development_26 = reactIs_development.isSuspense
  var reactIs_development_27 = reactIs_development.isValidElementType
  var reactIs_development_28 = reactIs_development.typeOf

  var reactIs = createCommonjsModule(function(module) {
    {
      module.exports = reactIs_development
    }
  })

  /*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  */
  /* eslint-disable no-unused-vars */
  var getOwnPropertySymbols = Object.getOwnPropertySymbols
  var hasOwnProperty$e = Object.prototype.hasOwnProperty
  var propIsEnumerable = Object.prototype.propertyIsEnumerable

  function toObject(val) {
    if (val === null || val === undefined) {
      throw new TypeError(
        'Object.assign cannot be called with null or undefined'
      )
    }

    return Object(val)
  }

  function shouldUseNative() {
    try {
      if (!Object.assign) {
        return false
      }

      // Detect buggy property enumeration order in older V8 versions.

      // https://bugs.chromium.org/p/v8/issues/detail?id=4118
      var test1 = new String('abc') // eslint-disable-line no-new-wrappers
      test1[5] = 'de'
      if (Object.getOwnPropertyNames(test1)[0] === '5') {
        return false
      }

      // https://bugs.chromium.org/p/v8/issues/detail?id=3056
      var test2 = {}
      for (var i = 0; i < 10; i++) {
        test2['_' + String.fromCharCode(i)] = i
      }
      var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
        return test2[n]
      })
      if (order2.join('') !== '0123456789') {
        return false
      }

      // https://bugs.chromium.org/p/v8/issues/detail?id=3056
      var test3 = {}
      'abcdefghijklmnopqrst'.split('').forEach(function(letter) {
        test3[letter] = letter
      })
      if (
        Object.keys(Object.assign({}, test3)).join('') !==
        'abcdefghijklmnopqrst'
      ) {
        return false
      }

      return true
    } catch (err) {
      // We don't expect any of the above to throw, but better to be safe.
      return false
    }
  }

  var objectAssign = shouldUseNative()
    ? Object.assign
    : function(target, source) {
        var from
        var to = toObject(target)
        var symbols

        for (var s = 1; s < arguments.length; s++) {
          from = Object(arguments[s])

          for (var key in from) {
            if (hasOwnProperty$e.call(from, key)) {
              to[key] = from[key]
            }
          }

          if (getOwnPropertySymbols) {
            symbols = getOwnPropertySymbols(from)
            for (var i = 0; i < symbols.length; i++) {
              if (propIsEnumerable.call(from, symbols[i])) {
                to[symbols[i]] = from[symbols[i]]
              }
            }
          }
        }

        return to
      }

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED'

  var ReactPropTypesSecret_1 = ReactPropTypesSecret

  var printWarning = function() {}

  {
    var ReactPropTypesSecret$1 = ReactPropTypesSecret_1
    var loggedTypeFailures = {}
    var has = Function.call.bind(Object.prototype.hasOwnProperty)

    printWarning = function(text) {
      var message = 'Warning: ' + text
      if (typeof console !== 'undefined') {
        console.error(message)
      }
      try {
        // --- Welcome to debugging React ---
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message)
      } catch (x) {}
    }
  }

  /**
   * Assert that the values match with the type specs.
   * Error messages are memorized and will only be shown once.
   *
   * @param {object} typeSpecs Map of name to a ReactPropType
   * @param {object} values Runtime values that need to be type-checked
   * @param {string} location e.g. "prop", "context", "child context"
   * @param {string} componentName Name of the component for error messages.
   * @param {?Function} getStack Returns the component stack.
   * @private
   */
  function checkPropTypes(
    typeSpecs,
    values,
    location,
    componentName,
    getStack
  ) {
    {
      for (var typeSpecName in typeSpecs) {
        if (has(typeSpecs, typeSpecName)) {
          var error
          // Prop type validation may throw. In case they do, we don't want to
          // fail the render phase where it didn't fail before. So we log it.
          // After these have been cleaned up, we'll let them throw.
          try {
            // This is intentionally an invariant that gets caught. It's the same
            // behavior as without this statement except with a better message.
            if (typeof typeSpecs[typeSpecName] !== 'function') {
              var err = Error(
                (componentName || 'React class') +
                  ': ' +
                  location +
                  ' type `' +
                  typeSpecName +
                  '` is invalid; ' +
                  'it must be a function, usually from the `prop-types` package, but received `' +
                  typeof typeSpecs[typeSpecName] +
                  '`.'
              )
              err.name = 'Invariant Violation'
              throw err
            }
            error = typeSpecs[typeSpecName](
              values,
              typeSpecName,
              componentName,
              location,
              null,
              ReactPropTypesSecret$1
            )
          } catch (ex) {
            error = ex
          }
          if (error && !(error instanceof Error)) {
            printWarning(
              (componentName || 'React class') +
                ': type specification of ' +
                location +
                ' `' +
                typeSpecName +
                '` is invalid; the type checker ' +
                'function must return `null` or an `Error` but returned a ' +
                typeof error +
                '. ' +
                'You may have forgotten to pass an argument to the type checker ' +
                'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
                'shape all require an argument).'
            )
          }
          if (
            error instanceof Error &&
            !(error.message in loggedTypeFailures)
          ) {
            // Only monitor this failure once because there tends to be a lot of the
            // same error.
            loggedTypeFailures[error.message] = true

            var stack = getStack ? getStack() : ''

            printWarning(
              'Failed ' +
                location +
                ' type: ' +
                error.message +
                (stack != null ? stack : '')
            )
          }
        }
      }
    }
  }

  /**
   * Resets warning cache when testing.
   *
   * @private
   */
  checkPropTypes.resetWarningCache = function() {
    {
      loggedTypeFailures = {}
    }
  }

  var checkPropTypes_1 = checkPropTypes

  var has$1 = Function.call.bind(Object.prototype.hasOwnProperty)
  var printWarning$1 = function() {}

  {
    printWarning$1 = function(text) {
      var message = 'Warning: ' + text
      if (typeof console !== 'undefined') {
        console.error(message)
      }
      try {
        // --- Welcome to debugging React ---
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message)
      } catch (x) {}
    }
  }

  function emptyFunctionThatReturnsNull() {
    return null
  }

  var factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
    /* global Symbol */
    var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator
    var FAUX_ITERATOR_SYMBOL = '@@iterator' // Before Symbol spec.

    /**
     * Returns the iterator method function contained on the iterable object.
     *
     * Be sure to invoke the function with the iterable as context:
     *
     *     var iteratorFn = getIteratorFn(myIterable);
     *     if (iteratorFn) {
     *       var iterator = iteratorFn.call(myIterable);
     *       ...
     *     }
     *
     * @param {?object} maybeIterable
     * @return {?function}
     */
    function getIteratorFn(maybeIterable) {
      var iteratorFn =
        maybeIterable &&
        ((ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL]) ||
          maybeIterable[FAUX_ITERATOR_SYMBOL])
      if (typeof iteratorFn === 'function') {
        return iteratorFn
      }
    }

    /**
     * Collection of methods that allow declaration and validation of props that are
     * supplied to React components. Example usage:
     *
     *   var Props = require('ReactPropTypes');
     *   var MyArticle = React.createClass({
     *     propTypes: {
     *       // An optional string prop named "description".
     *       description: Props.string,
     *
     *       // A required enum prop named "category".
     *       category: Props.oneOf(['News','Photos']).isRequired,
     *
     *       // A prop named "dialog" that requires an instance of Dialog.
     *       dialog: Props.instanceOf(Dialog).isRequired
     *     },
     *     render: function() { ... }
     *   });
     *
     * A more formal specification of how these methods are used:
     *
     *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
     *   decl := ReactPropTypes.{type}(.isRequired)?
     *
     * Each and every declaration produces a function with the same signature. This
     * allows the creation of custom validation functions. For example:
     *
     *  var MyLink = React.createClass({
     *    propTypes: {
     *      // An optional string or URI prop named "href".
     *      href: function(props, propName, componentName) {
     *        var propValue = props[propName];
     *        if (propValue != null && typeof propValue !== 'string' &&
     *            !(propValue instanceof URI)) {
     *          return new Error(
     *            'Expected a string or an URI for ' + propName + ' in ' +
     *            componentName
     *          );
     *        }
     *      }
     *    },
     *    render: function() {...}
     *  });
     *
     * @internal
     */

    var ANONYMOUS = '<<anonymous>>'

    // Important!
    // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
    var ReactPropTypes = {
      array: createPrimitiveTypeChecker('array'),
      bool: createPrimitiveTypeChecker('boolean'),
      func: createPrimitiveTypeChecker('function'),
      number: createPrimitiveTypeChecker('number'),
      object: createPrimitiveTypeChecker('object'),
      string: createPrimitiveTypeChecker('string'),
      symbol: createPrimitiveTypeChecker('symbol'),

      any: createAnyTypeChecker(),
      arrayOf: createArrayOfTypeChecker,
      element: createElementTypeChecker(),
      elementType: createElementTypeTypeChecker(),
      instanceOf: createInstanceTypeChecker,
      node: createNodeChecker(),
      objectOf: createObjectOfTypeChecker,
      oneOf: createEnumTypeChecker,
      oneOfType: createUnionTypeChecker,
      shape: createShapeTypeChecker,
      exact: createStrictShapeTypeChecker,
    }

    /**
     * inlined Object.is polyfill to avoid requiring consumers ship their own
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
     */
    /*eslint-disable no-self-compare*/
    function is(x, y) {
      // SameValue algorithm
      if (x === y) {
        // Steps 1-5, 7-10
        // Steps 6.b-6.e: +0 != -0
        return x !== 0 || 1 / x === 1 / y
      } else {
        // Step 6.a: NaN == NaN
        return x !== x && y !== y
      }
    }
    /*eslint-enable no-self-compare*/

    /**
     * We use an Error-like object for backward compatibility as people may call
     * PropTypes directly and inspect their output. However, we don't use real
     * Errors anymore. We don't inspect their stack anyway, and creating them
     * is prohibitively expensive if they are created too often, such as what
     * happens in oneOfType() for any type before the one that matched.
     */
    function PropTypeError(message) {
      this.message = message
      this.stack = ''
    }
    // Make `instanceof Error` still work for returned errors.
    PropTypeError.prototype = Error.prototype

    function createChainableTypeChecker(validate) {
      {
        var manualPropTypeCallCache = {}
        var manualPropTypeWarningCount = 0
      }
      function checkType(
        isRequired,
        props,
        propName,
        componentName,
        location,
        propFullName,
        secret
      ) {
        componentName = componentName || ANONYMOUS
        propFullName = propFullName || propName

        if (secret !== ReactPropTypesSecret_1) {
          if (throwOnDirectAccess) {
            // New behavior only for users of `prop-types` package
            var err = new Error(
              'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
                'Use `PropTypes.checkPropTypes()` to call them. ' +
                'Read more at http://fb.me/use-check-prop-types'
            )
            err.name = 'Invariant Violation'
            throw err
          } else if (typeof console !== 'undefined') {
            // Old behavior for people using React.PropTypes
            var cacheKey = componentName + ':' + propName
            if (
              !manualPropTypeCallCache[cacheKey] &&
              // Avoid spamming the console because they are often not actionable except for lib authors
              manualPropTypeWarningCount < 3
            ) {
              printWarning$1(
                'You are manually calling a React.PropTypes validation ' +
                  'function for the `' +
                  propFullName +
                  '` prop on `' +
                  componentName +
                  '`. This is deprecated ' +
                  'and will throw in the standalone `prop-types` package. ' +
                  'You may be seeing this warning due to a third-party PropTypes ' +
                  'library. See https://fb.me/react-warning-dont-call-proptypes ' +
                  'for details.'
              )
              manualPropTypeCallCache[cacheKey] = true
              manualPropTypeWarningCount++
            }
          }
        }
        if (props[propName] == null) {
          if (isRequired) {
            if (props[propName] === null) {
              return new PropTypeError(
                'The ' +
                  location +
                  ' `' +
                  propFullName +
                  '` is marked as required ' +
                  ('in `' + componentName + '`, but its value is `null`.')
              )
            }
            return new PropTypeError(
              'The ' +
                location +
                ' `' +
                propFullName +
                '` is marked as required in ' +
                ('`' + componentName + '`, but its value is `undefined`.')
            )
          }
          return null
        } else {
          return validate(
            props,
            propName,
            componentName,
            location,
            propFullName
          )
        }
      }

      var chainedCheckType = checkType.bind(null, false)
      chainedCheckType.isRequired = checkType.bind(null, true)

      return chainedCheckType
    }

    function createPrimitiveTypeChecker(expectedType) {
      function validate(
        props,
        propName,
        componentName,
        location,
        propFullName,
        secret
      ) {
        var propValue = props[propName]
        var propType = getPropType(propValue)
        if (propType !== expectedType) {
          // `propValue` being instance of, say, date/regexp, pass the 'object'
          // check, but we can offer a more precise error message here rather than
          // 'of type `object`'.
          var preciseType = getPreciseType(propValue)

          return new PropTypeError(
            'Invalid ' +
              location +
              ' `' +
              propFullName +
              '` of type ' +
              ('`' +
                preciseType +
                '` supplied to `' +
                componentName +
                '`, expected ') +
              ('`' + expectedType + '`.')
          )
        }
        return null
      }
      return createChainableTypeChecker(validate)
    }

    function createAnyTypeChecker() {
      return createChainableTypeChecker(emptyFunctionThatReturnsNull)
    }

    function createArrayOfTypeChecker(typeChecker) {
      function validate(
        props,
        propName,
        componentName,
        location,
        propFullName
      ) {
        if (typeof typeChecker !== 'function') {
          return new PropTypeError(
            'Property `' +
              propFullName +
              '` of component `' +
              componentName +
              '` has invalid PropType notation inside arrayOf.'
          )
        }
        var propValue = props[propName]
        if (!Array.isArray(propValue)) {
          var propType = getPropType(propValue)
          return new PropTypeError(
            'Invalid ' +
              location +
              ' `' +
              propFullName +
              '` of type ' +
              ('`' +
                propType +
                '` supplied to `' +
                componentName +
                '`, expected an array.')
          )
        }
        for (var i = 0; i < propValue.length; i++) {
          var error = typeChecker(
            propValue,
            i,
            componentName,
            location,
            propFullName + '[' + i + ']',
            ReactPropTypesSecret_1
          )
          if (error instanceof Error) {
            return error
          }
        }
        return null
      }
      return createChainableTypeChecker(validate)
    }

    function createElementTypeChecker() {
      function validate(
        props,
        propName,
        componentName,
        location,
        propFullName
      ) {
        var propValue = props[propName]
        if (!isValidElement(propValue)) {
          var propType = getPropType(propValue)
          return new PropTypeError(
            'Invalid ' +
              location +
              ' `' +
              propFullName +
              '` of type ' +
              ('`' +
                propType +
                '` supplied to `' +
                componentName +
                '`, expected a single ReactElement.')
          )
        }
        return null
      }
      return createChainableTypeChecker(validate)
    }

    function createElementTypeTypeChecker() {
      function validate(
        props,
        propName,
        componentName,
        location,
        propFullName
      ) {
        var propValue = props[propName]
        if (!reactIs.isValidElementType(propValue)) {
          var propType = getPropType(propValue)
          return new PropTypeError(
            'Invalid ' +
              location +
              ' `' +
              propFullName +
              '` of type ' +
              ('`' +
                propType +
                '` supplied to `' +
                componentName +
                '`, expected a single ReactElement type.')
          )
        }
        return null
      }
      return createChainableTypeChecker(validate)
    }

    function createInstanceTypeChecker(expectedClass) {
      function validate(
        props,
        propName,
        componentName,
        location,
        propFullName
      ) {
        if (!(props[propName] instanceof expectedClass)) {
          var expectedClassName = expectedClass.name || ANONYMOUS
          var actualClassName = getClassName(props[propName])
          return new PropTypeError(
            'Invalid ' +
              location +
              ' `' +
              propFullName +
              '` of type ' +
              ('`' +
                actualClassName +
                '` supplied to `' +
                componentName +
                '`, expected ') +
              ('instance of `' + expectedClassName + '`.')
          )
        }
        return null
      }
      return createChainableTypeChecker(validate)
    }

    function createEnumTypeChecker(expectedValues) {
      if (!Array.isArray(expectedValues)) {
        {
          if (arguments.length > 1) {
            printWarning$1(
              'Invalid arguments supplied to oneOf, expected an array, got ' +
                arguments.length +
                ' arguments. ' +
                'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
            )
          } else {
            printWarning$1(
              'Invalid argument supplied to oneOf, expected an array.'
            )
          }
        }
        return emptyFunctionThatReturnsNull
      }

      function validate(
        props,
        propName,
        componentName,
        location,
        propFullName
      ) {
        var propValue = props[propName]
        for (var i = 0; i < expectedValues.length; i++) {
          if (is(propValue, expectedValues[i])) {
            return null
          }
        }

        var valuesString = JSON.stringify(expectedValues, function replacer(
          key,
          value
        ) {
          var type = getPreciseType(value)
          if (type === 'symbol') {
            return String(value)
          }
          return value
        })
        return new PropTypeError(
          'Invalid ' +
            location +
            ' `' +
            propFullName +
            '` of value `' +
            String(propValue) +
            '` ' +
            ('supplied to `' +
              componentName +
              '`, expected one of ' +
              valuesString +
              '.')
        )
      }
      return createChainableTypeChecker(validate)
    }

    function createObjectOfTypeChecker(typeChecker) {
      function validate(
        props,
        propName,
        componentName,
        location,
        propFullName
      ) {
        if (typeof typeChecker !== 'function') {
          return new PropTypeError(
            'Property `' +
              propFullName +
              '` of component `' +
              componentName +
              '` has invalid PropType notation inside objectOf.'
          )
        }
        var propValue = props[propName]
        var propType = getPropType(propValue)
        if (propType !== 'object') {
          return new PropTypeError(
            'Invalid ' +
              location +
              ' `' +
              propFullName +
              '` of type ' +
              ('`' +
                propType +
                '` supplied to `' +
                componentName +
                '`, expected an object.')
          )
        }
        for (var key in propValue) {
          if (has$1(propValue, key)) {
            var error = typeChecker(
              propValue,
              key,
              componentName,
              location,
              propFullName + '.' + key,
              ReactPropTypesSecret_1
            )
            if (error instanceof Error) {
              return error
            }
          }
        }
        return null
      }
      return createChainableTypeChecker(validate)
    }

    function createUnionTypeChecker(arrayOfTypeCheckers) {
      if (!Array.isArray(arrayOfTypeCheckers)) {
        printWarning$1(
          'Invalid argument supplied to oneOfType, expected an instance of array.'
        )
        return emptyFunctionThatReturnsNull
      }

      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i]
        if (typeof checker !== 'function') {
          printWarning$1(
            'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
              'received ' +
              getPostfixForTypeWarning(checker) +
              ' at index ' +
              i +
              '.'
          )
          return emptyFunctionThatReturnsNull
        }
      }

      function validate(
        props,
        propName,
        componentName,
        location,
        propFullName
      ) {
        for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
          var checker = arrayOfTypeCheckers[i]
          if (
            checker(
              props,
              propName,
              componentName,
              location,
              propFullName,
              ReactPropTypesSecret_1
            ) == null
          ) {
            return null
          }
        }

        return new PropTypeError(
          'Invalid ' +
            location +
            ' `' +
            propFullName +
            '` supplied to ' +
            ('`' + componentName + '`.')
        )
      }
      return createChainableTypeChecker(validate)
    }

    function createNodeChecker() {
      function validate(
        props,
        propName,
        componentName,
        location,
        propFullName
      ) {
        if (!isNode(props[propName])) {
          return new PropTypeError(
            'Invalid ' +
              location +
              ' `' +
              propFullName +
              '` supplied to ' +
              ('`' + componentName + '`, expected a ReactNode.')
          )
        }
        return null
      }
      return createChainableTypeChecker(validate)
    }

    function createShapeTypeChecker(shapeTypes) {
      function validate(
        props,
        propName,
        componentName,
        location,
        propFullName
      ) {
        var propValue = props[propName]
        var propType = getPropType(propValue)
        if (propType !== 'object') {
          return new PropTypeError(
            'Invalid ' +
              location +
              ' `' +
              propFullName +
              '` of type `' +
              propType +
              '` ' +
              ('supplied to `' + componentName + '`, expected `object`.')
          )
        }
        for (var key in shapeTypes) {
          var checker = shapeTypes[key]
          if (!checker) {
            continue
          }
          var error = checker(
            propValue,
            key,
            componentName,
            location,
            propFullName + '.' + key,
            ReactPropTypesSecret_1
          )
          if (error) {
            return error
          }
        }
        return null
      }
      return createChainableTypeChecker(validate)
    }

    function createStrictShapeTypeChecker(shapeTypes) {
      function validate(
        props,
        propName,
        componentName,
        location,
        propFullName
      ) {
        var propValue = props[propName]
        var propType = getPropType(propValue)
        if (propType !== 'object') {
          return new PropTypeError(
            'Invalid ' +
              location +
              ' `' +
              propFullName +
              '` of type `' +
              propType +
              '` ' +
              ('supplied to `' + componentName + '`, expected `object`.')
          )
        }
        // We need to check all keys in case some are required but missing from
        // props.
        var allKeys = objectAssign({}, props[propName], shapeTypes)
        for (var key in allKeys) {
          var checker = shapeTypes[key]
          if (!checker) {
            return new PropTypeError(
              'Invalid ' +
                location +
                ' `' +
                propFullName +
                '` key `' +
                key +
                '` supplied to `' +
                componentName +
                '`.' +
                '\nBad object: ' +
                JSON.stringify(props[propName], null, '  ') +
                '\nValid keys: ' +
                JSON.stringify(Object.keys(shapeTypes), null, '  ')
            )
          }
          var error = checker(
            propValue,
            key,
            componentName,
            location,
            propFullName + '.' + key,
            ReactPropTypesSecret_1
          )
          if (error) {
            return error
          }
        }
        return null
      }

      return createChainableTypeChecker(validate)
    }

    function isNode(propValue) {
      switch (typeof propValue) {
        case 'number':
        case 'string':
        case 'undefined':
          return true
        case 'boolean':
          return !propValue
        case 'object':
          if (Array.isArray(propValue)) {
            return propValue.every(isNode)
          }
          if (propValue === null || isValidElement(propValue)) {
            return true
          }

          var iteratorFn = getIteratorFn(propValue)
          if (iteratorFn) {
            var iterator = iteratorFn.call(propValue)
            var step
            if (iteratorFn !== propValue.entries) {
              while (!(step = iterator.next()).done) {
                if (!isNode(step.value)) {
                  return false
                }
              }
            } else {
              // Iterator will provide entry [k,v] tuples rather than values.
              while (!(step = iterator.next()).done) {
                var entry = step.value
                if (entry) {
                  if (!isNode(entry[1])) {
                    return false
                  }
                }
              }
            }
          } else {
            return false
          }

          return true
        default:
          return false
      }
    }

    function isSymbol(propType, propValue) {
      // Native Symbol.
      if (propType === 'symbol') {
        return true
      }

      // falsy value can't be a Symbol
      if (!propValue) {
        return false
      }

      // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
      if (propValue['@@toStringTag'] === 'Symbol') {
        return true
      }

      // Fallback for non-spec compliant Symbols which are polyfilled.
      if (typeof Symbol === 'function' && propValue instanceof Symbol) {
        return true
      }

      return false
    }

    // Equivalent of `typeof` but with special handling for array and regexp.
    function getPropType(propValue) {
      var propType = typeof propValue
      if (Array.isArray(propValue)) {
        return 'array'
      }
      if (propValue instanceof RegExp) {
        // Old webkits (at least until Android 4.0) return 'function' rather than
        // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
        // passes PropTypes.object.
        return 'object'
      }
      if (isSymbol(propType, propValue)) {
        return 'symbol'
      }
      return propType
    }

    // This handles more types than `getPropType`. Only used for error messages.
    // See `createPrimitiveTypeChecker`.
    function getPreciseType(propValue) {
      if (typeof propValue === 'undefined' || propValue === null) {
        return '' + propValue
      }
      var propType = getPropType(propValue)
      if (propType === 'object') {
        if (propValue instanceof Date) {
          return 'date'
        } else if (propValue instanceof RegExp) {
          return 'regexp'
        }
      }
      return propType
    }

    // Returns a string that is postfixed to a warning about an invalid type.
    // For example, "undefined" or "of type array"
    function getPostfixForTypeWarning(value) {
      var type = getPreciseType(value)
      switch (type) {
        case 'array':
        case 'object':
          return 'an ' + type
        case 'boolean':
        case 'date':
        case 'regexp':
          return 'a ' + type
        default:
          return type
      }
    }

    // Returns class name of the object, if any.
    function getClassName(propValue) {
      if (!propValue.constructor || !propValue.constructor.name) {
        return ANONYMOUS
      }
      return propValue.constructor.name
    }

    ReactPropTypes.checkPropTypes = checkPropTypes_1
    ReactPropTypes.resetWarningCache = checkPropTypes_1.resetWarningCache
    ReactPropTypes.PropTypes = ReactPropTypes

    return ReactPropTypes
  }

  var propTypes = createCommonjsModule(function(module) {
    /**
     * Copyright (c) 2013-present, Facebook, Inc.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */

    {
      var ReactIs = reactIs

      // By explicitly using `prop-types` you are opting into new development behavior.
      // http://fb.me/prop-types-in-prod
      var throwOnDirectAccess = true
      module.exports = factoryWithTypeCheckers(
        ReactIs.isElement,
        throwOnDirectAccess
      )
    }
  })

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var invariant = function(condition, format, a, b, c, d, e, f) {
    {
      if (format === undefined) {
        throw new Error('invariant requires an error message argument')
      }
    }

    if (!condition) {
      var error
      if (format === undefined) {
        error = new Error(
          'Minified exception occurred; use the non-minified dev environment ' +
            'for the full error message and additional helpful warnings.'
        )
      } else {
        var args = [a, b, c, d, e, f]
        var argIndex = 0
        error = new Error(
          format.replace(/%s/g, function() {
            return args[argIndex++]
          })
        )
        error.name = 'Invariant Violation'
      }

      error.framesToPop = 1 // we don't care about invariant's own frame
      throw error
    }
  }

  var invariant_1 = invariant

  var noop = function noop() {}

  function readOnlyPropType(handler, name) {
    return function(props, propName) {
      if (props[propName] !== undefined) {
        if (!props[handler]) {
          return new Error(
            'You have provided a `' +
              propName +
              '` prop to `' +
              name +
              '` ' +
              ('without an `' +
                handler +
                '` handler prop. This will render a read-only field. ') +
              ('If the field should be mutable use `' +
                defaultKey(propName) +
                '`. ') +
              ('Otherwise, set `' + handler + '`.')
          )
        }
      }
    }
  }

  function uncontrolledPropTypes(controlledValues, displayName) {
    var propTypes = {}
    Object.keys(controlledValues).forEach(function(prop) {
      // add default propTypes for folks that use runtime checks
      propTypes[defaultKey(prop)] = noop

      {
        var handler = controlledValues[prop]
        !(typeof handler === 'string' && handler.trim().length)
          ? invariant_1(
              false,
              'Uncontrollable - [%s]: the prop `%s` needs a valid handler key name in order to make it uncontrollable',
              displayName,
              prop
            )
          : void 0
        propTypes[prop] = readOnlyPropType(handler, displayName)
      }
    })
    return propTypes
  }
  function isProp(props, prop) {
    return props[prop] !== undefined
  }
  function defaultKey(key) {
    return 'default' + key.charAt(0).toUpperCase() + key.substr(1)
  }
  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   */

  function canAcceptRef(component) {
    return (
      !!component &&
      (typeof component !== 'function' ||
        (component.prototype && component.prototype.isReactComponent))
    )
  }

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  function componentWillMount() {
    // Call this.constructor.gDSFP to support sub-classes.
    var state = this.constructor.getDerivedStateFromProps(
      this.props,
      this.state
    )
    if (state !== null && state !== undefined) {
      this.setState(state)
    }
  }

  function componentWillReceiveProps(nextProps) {
    // Call this.constructor.gDSFP to support sub-classes.
    // Use the setState() updater to ensure state isn't stale in certain edge cases.
    function updater(prevState) {
      var state = this.constructor.getDerivedStateFromProps(
        nextProps,
        prevState
      )
      return state !== null && state !== undefined ? state : null
    }
    // Binding "this" is important for shallow renderer support.
    this.setState(updater.bind(this))
  }

  function componentWillUpdate(nextProps, nextState) {
    try {
      var prevProps = this.props
      var prevState = this.state
      this.props = nextProps
      this.state = nextState
      this.__reactInternalSnapshotFlag = true
      this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(
        prevProps,
        prevState
      )
    } finally {
      this.props = prevProps
      this.state = prevState
    }
  }

  // React may warn about cWM/cWRP/cWU methods being deprecated.
  // Add a flag to suppress these warnings for this special case.
  componentWillMount.__suppressDeprecationWarning = true
  componentWillReceiveProps.__suppressDeprecationWarning = true
  componentWillUpdate.__suppressDeprecationWarning = true

  function polyfill(Component) {
    var prototype = Component.prototype

    if (!prototype || !prototype.isReactComponent) {
      throw new Error('Can only polyfill class components')
    }

    if (
      typeof Component.getDerivedStateFromProps !== 'function' &&
      typeof prototype.getSnapshotBeforeUpdate !== 'function'
    ) {
      return Component
    }

    // If new component APIs are defined, "unsafe" lifecycles won't be called.
    // Error if any of these lifecycles are present,
    // Because they would work differently between older and newer (16.3+) versions of React.
    var foundWillMountName = null
    var foundWillReceivePropsName = null
    var foundWillUpdateName = null
    if (typeof prototype.componentWillMount === 'function') {
      foundWillMountName = 'componentWillMount'
    } else if (typeof prototype.UNSAFE_componentWillMount === 'function') {
      foundWillMountName = 'UNSAFE_componentWillMount'
    }
    if (typeof prototype.componentWillReceiveProps === 'function') {
      foundWillReceivePropsName = 'componentWillReceiveProps'
    } else if (
      typeof prototype.UNSAFE_componentWillReceiveProps === 'function'
    ) {
      foundWillReceivePropsName = 'UNSAFE_componentWillReceiveProps'
    }
    if (typeof prototype.componentWillUpdate === 'function') {
      foundWillUpdateName = 'componentWillUpdate'
    } else if (typeof prototype.UNSAFE_componentWillUpdate === 'function') {
      foundWillUpdateName = 'UNSAFE_componentWillUpdate'
    }
    if (
      foundWillMountName !== null ||
      foundWillReceivePropsName !== null ||
      foundWillUpdateName !== null
    ) {
      var componentName = Component.displayName || Component.name
      var newApiName =
        typeof Component.getDerivedStateFromProps === 'function'
          ? 'getDerivedStateFromProps()'
          : 'getSnapshotBeforeUpdate()'

      throw Error(
        'Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n' +
          componentName +
          ' uses ' +
          newApiName +
          ' but also contains the following legacy lifecycles:' +
          (foundWillMountName !== null ? '\n  ' + foundWillMountName : '') +
          (foundWillReceivePropsName !== null
            ? '\n  ' + foundWillReceivePropsName
            : '') +
          (foundWillUpdateName !== null ? '\n  ' + foundWillUpdateName : '') +
          '\n\nThe above lifecycles should be removed. Learn more about this warning here:\n' +
          'https://fb.me/react-async-component-lifecycle-hooks'
      )
    }

    // React <= 16.2 does not support static getDerivedStateFromProps.
    // As a workaround, use cWM and cWRP to invoke the new static lifecycle.
    // Newer versions of React will ignore these lifecycles if gDSFP exists.
    if (typeof Component.getDerivedStateFromProps === 'function') {
      prototype.componentWillMount = componentWillMount
      prototype.componentWillReceiveProps = componentWillReceiveProps
    }

    // React <= 16.2 does not support getSnapshotBeforeUpdate.
    // As a workaround, use cWU to invoke the new lifecycle.
    // Newer versions of React will ignore that lifecycle if gSBU exists.
    if (typeof prototype.getSnapshotBeforeUpdate === 'function') {
      if (typeof prototype.componentDidUpdate !== 'function') {
        throw new Error(
          'Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype'
        )
      }

      prototype.componentWillUpdate = componentWillUpdate

      var componentDidUpdate = prototype.componentDidUpdate

      prototype.componentDidUpdate = function componentDidUpdatePolyfill(
        prevProps,
        prevState,
        maybeSnapshot
      ) {
        // 16.3+ will not execute our will-update method;
        // It will pass a snapshot value to did-update though.
        // Older versions will require our polyfilled will-update value.
        // We need to handle both cases, but can't just check for the presence of "maybeSnapshot",
        // Because for <= 15.x versions this might be a "prevContext" object.
        // We also can't just check "__reactInternalSnapshot",
        // Because get-snapshot might return a falsy value.
        // So check for the explicit __reactInternalSnapshotFlag flag to determine behavior.
        var snapshot = this.__reactInternalSnapshotFlag
          ? this.__reactInternalSnapshot
          : maybeSnapshot

        componentDidUpdate.call(this, prevProps, prevState, snapshot)
      }
    }

    return Component
  }

  var _jsxFileName = '/Users/jquense/src/uncontrollable/src/uncontrollable.js'
  function uncontrollable(Component, controlledValues, methods) {
    if (methods === void 0) {
      methods = []
    }

    var displayName = Component.displayName || Component.name || 'Component'
    var canAcceptRef$1 = canAcceptRef(Component)
    var controlledProps = Object.keys(controlledValues)
    var PROPS_TO_OMIT = controlledProps.map(defaultKey)
    !(canAcceptRef$1 || !methods.length)
      ? invariant_1(
          false,
          '[uncontrollable] stateless function components cannot pass through methods ' +
            'because they have no associated instances. Check component: ' +
            displayName +
            ', ' +
            'attempting to pass through methods: ' +
            methods.join(', ')
        )
      : void 0

    var UncontrolledComponent =
      /*#__PURE__*/
      (function(_React$Component) {
        _inheritsLoose(UncontrolledComponent, _React$Component)

        function UncontrolledComponent() {
          var _this

          for (
            var _len = arguments.length, args = new Array(_len), _key = 0;
            _key < _len;
            _key++
          ) {
            args[_key] = arguments[_key]
          }

          _this =
            _React$Component.call.apply(
              _React$Component,
              [this].concat(args)
            ) || this
          _this.handlers = Object.create(null)
          controlledProps.forEach(function(propName) {
            var handlerName = controlledValues[propName]

            var handleChange = function handleChange(value) {
              if (_this.props[handlerName]) {
                var _this$props

                _this._notifying = true

                for (
                  var _len2 = arguments.length,
                    args = new Array(_len2 > 1 ? _len2 - 1 : 0),
                    _key2 = 1;
                  _key2 < _len2;
                  _key2++
                ) {
                  args[_key2 - 1] = arguments[_key2]
                }

                ;(_this$props = _this.props)[handlerName].apply(
                  _this$props,
                  [value].concat(args)
                )

                _this._notifying = false
              }

              if (!_this.unmounted)
                _this.setState(function(_ref) {
                  var _extends2

                  var values = _ref.values
                  return {
                    values: _extends(
                      Object.create(null),
                      values,
                      ((_extends2 = {}),
                      (_extends2[propName] = value),
                      _extends2)
                    ),
                  }
                })
            }

            _this.handlers[handlerName] = handleChange
          })
          if (methods.length)
            _this.attachRef = function(ref) {
              _this.inner = ref
            }
          var values = Object.create(null)
          controlledProps.forEach(function(key) {
            values[key] = _this.props[defaultKey(key)]
          })
          _this.state = {
            values: values,
            prevProps: {},
          }
          return _this
        }

        var _proto = UncontrolledComponent.prototype

        _proto.shouldComponentUpdate = function shouldComponentUpdate() {
          //let setState trigger the update
          return !this._notifying
        }

        UncontrolledComponent.getDerivedStateFromProps = function getDerivedStateFromProps(
          props,
          _ref2
        ) {
          var values = _ref2.values,
            prevProps = _ref2.prevProps
          var nextState = {
            values: _extends(Object.create(null), values),
            prevProps: {},
          }
          controlledProps.forEach(function(key) {
            /**
             * If a prop switches from controlled to Uncontrolled
             * reset its value to the defaultValue
             */
            nextState.prevProps[key] = props[key]

            if (!isProp(props, key) && isProp(prevProps, key)) {
              nextState.values[key] = props[defaultKey(key)]
            }
          })
          return nextState
        }

        _proto.componentWillUnmount = function componentWillUnmount() {
          this.unmounted = true
        }

        _proto.render = function render() {
          var _this2 = this

          var _this$props2 = this.props,
            innerRef = _this$props2.innerRef,
            props = _objectWithoutPropertiesLoose(_this$props2, ['innerRef'])

          PROPS_TO_OMIT.forEach(function(prop) {
            delete props[prop]
          })
          var newProps = {}
          controlledProps.forEach(function(propName) {
            var propValue = _this2.props[propName]
            newProps[propName] =
              propValue !== undefined
                ? propValue
                : _this2.state.values[propName]
          })
          return React__default.createElement(
            Component,
            _extends({}, props, newProps, this.handlers, {
              ref: innerRef || this.attachRef,
            })
          )
        }

        return UncontrolledComponent
      })(React__default.Component)

    polyfill(UncontrolledComponent)
    UncontrolledComponent.displayName = 'Uncontrolled(' + displayName + ')'
    UncontrolledComponent.propTypes = _extends(
      {
        innerRef: function innerRef() {},
      },
      uncontrolledPropTypes(controlledValues, displayName)
    )
    methods.forEach(function(method) {
      UncontrolledComponent.prototype[method] = function $proxiedMethod() {
        var _this$inner

        return (_this$inner = this.inner)[method].apply(_this$inner, arguments)
      }
    })
    var WrappedComponent = UncontrolledComponent

    if (React__default.forwardRef) {
      WrappedComponent = React__default.forwardRef(function(props, ref) {
        return React__default.createElement(
          UncontrolledComponent,
          _extends({}, props, {
            innerRef: ref,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 128,
            },
            __self: this,
          })
        )
      })
      WrappedComponent.propTypes = UncontrolledComponent.propTypes
    }

    WrappedComponent.ControlledComponent = Component
    /**
     * useful when wrapping a Component and you want to control
     * everything
     */

    WrappedComponent.deferControlTo = function(
      newComponent,
      additions,
      nextMethods
    ) {
      if (additions === void 0) {
        additions = {}
      }

      return uncontrollable(
        newComponent,
        _extends({}, controlledValues, additions),
        nextMethods
      )
    }

    return WrappedComponent
  }

  var localePropType = propTypes.oneOfType([propTypes.string, propTypes.func])

  function _format(localizer, formatter, value, format, culture) {
    var result =
      typeof format === 'function'
        ? format(value, culture, localizer)
        : formatter.call(localizer, value, format, culture)
    !(result == null || typeof result === 'string')
      ? invariant_1(
          false,
          '`localizer format(..)` must return a string, null, or undefined'
        )
      : void 0
    return result
  }

  var DateLocalizer = function DateLocalizer(spec) {
    var _this = this

    !(typeof spec.format === 'function')
      ? invariant_1(false, 'date localizer `format(..)` must be a function')
      : void 0
    !(typeof spec.firstOfWeek === 'function')
      ? invariant_1(
          false,
          'date localizer `firstOfWeek(..)` must be a function'
        )
      : void 0
    this.propType = spec.propType || localePropType
    this.startOfWeek = spec.firstOfWeek
    this.formats = spec.formats

    this.format = function() {
      for (
        var _len = arguments.length, args = new Array(_len), _key = 0;
        _key < _len;
        _key++
      ) {
        args[_key] = arguments[_key]
      }

      return _format.apply(void 0, [_this, spec.format].concat(args))
    }
  }
  function mergeWithDefaults(localizer, culture, formatOverrides, messages) {
    var formats = _extends({}, localizer.formats, formatOverrides)

    return _extends({}, localizer, {
      messages: messages,
      startOfWeek: function startOfWeek() {
        return localizer.startOfWeek(culture)
      },
      format: function format(value, _format2) {
        return localizer.format(value, formats[_format2] || _format2, culture)
      },
    })
  }

  var navigate = {
    PREVIOUS: 'PREV',
    NEXT: 'NEXT',
    TODAY: 'TODAY',
    DATE: 'DATE',
  }
  var views = {
    MONTH: 'month',
    WEEK: 'week',
    WORK_WEEK: 'work_week',
    DAY: 'day',
    AGENDA: 'agenda',
  }

  var Toolbar = /*#__PURE__*/ (function(_React$Component) {
    _inheritsLoose(Toolbar, _React$Component)

    function Toolbar() {
      var _this

      for (
        var _len = arguments.length, args = new Array(_len), _key = 0;
        _key < _len;
        _key++
      ) {
        args[_key] = arguments[_key]
      }

      _this =
        _React$Component.call.apply(_React$Component, [this].concat(args)) ||
        this

      _this.navigate = function(action) {
        _this.props.onNavigate(action)
      }

      _this.view = function(view) {
        _this.props.onView(view)
      }

      return _this
    }

    var _proto = Toolbar.prototype

    _proto.render = function render() {
      var _this$props = this.props,
        messages = _this$props.localizer.messages,
        label = _this$props.label
      return /*#__PURE__*/ React__default.createElement(
        'div',
        {
          className: 'rbc-toolbar',
        },
        /*#__PURE__*/ React__default.createElement(
          'span',
          {
            className: 'rbc-btn-group',
          },
          /*#__PURE__*/ React__default.createElement(
            'button',
            {
              type: 'button',
              onClick: this.navigate.bind(null, navigate.TODAY),
            },
            messages.today
          ),
          /*#__PURE__*/ React__default.createElement(
            'button',
            {
              type: 'button',
              onClick: this.navigate.bind(null, navigate.PREVIOUS),
            },
            messages.previous
          ),
          /*#__PURE__*/ React__default.createElement(
            'button',
            {
              type: 'button',
              onClick: this.navigate.bind(null, navigate.NEXT),
            },
            messages.next
          )
        ),
        /*#__PURE__*/ React__default.createElement(
          'span',
          {
            className: 'rbc-toolbar-label',
          },
          label
        ),
        /*#__PURE__*/ React__default.createElement(
          'span',
          {
            className: 'rbc-btn-group',
          },
          this.viewNamesGroup(messages)
        )
      )
    }

    _proto.viewNamesGroup = function viewNamesGroup(messages) {
      var _this2 = this

      var viewNames = this.props.views
      var view = this.props.view

      if (viewNames.length > 1) {
        return viewNames.map(function(name) {
          return /*#__PURE__*/ React__default.createElement(
            'button',
            {
              type: 'button',
              key: name,
              className: clsx({
                'rbc-active': view === name,
              }),
              onClick: _this2.view.bind(null, name),
            },
            messages[name]
          )
        })
      }
    }

    return Toolbar
  })(React__default.Component)

  Toolbar.propTypes = {
    view: propTypes.string.isRequired,
    views: propTypes.arrayOf(propTypes.string).isRequired,
    label: propTypes.node.isRequired,
    localizer: propTypes.object,
    onNavigate: propTypes.func.isRequired,
    onView: propTypes.func.isRequired,
  }

  /**
   * Retrieve via an accessor-like property
   *
   *    accessor(obj, 'name')   // => retrieves obj['name']
   *    accessor(data, func)    // => retrieves func(data)
   *    ... otherwise null
   */
  function accessor(data, field) {
    var value = null
    if (typeof field === 'function') value = field(data)
    else if (
      typeof field === 'string' &&
      typeof data === 'object' &&
      data != null &&
      field in data
    )
      value = data[field]
    return value
  }
  var wrapAccessor = function wrapAccessor(acc) {
    return function(data) {
      return accessor(data, acc)
    }
  }

  function notify(handler, args) {
    handler && handler.apply(null, [].concat(args))
  }

  var defaultMessages = {
    date: 'Date',
    time: 'Time',
    event: 'Event',
    allDay: 'All Day',
    week: 'Week',
    work_week: 'Work Week',
    day: 'Day',
    month: 'Month',
    previous: 'Back',
    next: 'Next',
    yesterday: 'Yesterday',
    tomorrow: 'Tomorrow',
    today: 'Today',
    agenda: 'Agenda',
    noEventsInRange: 'There are no events in this range.',
    showMore: function showMore(total) {
      return '+' + total + ' more'
    },
  }
  function messages(msgs) {
    return _extends({}, defaultMessages, msgs)
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      )
    }

    return self
  }

  var canUseDOM = !!(
    typeof window !== 'undefined' &&
    window.document &&
    window.document.createElement
  )

  /* https://github.com/component/raf */
  var prev = new Date().getTime()

  function fallback(fn) {
    var curr = new Date().getTime()
    var ms = Math.max(0, 16 - (curr - prev))
    var handle = setTimeout(fn, ms)
    prev = curr
    return handle
  }

  var vendors = ['', 'webkit', 'moz', 'o', 'ms']
  var cancelMethod = 'clearTimeout'
  var rafImpl = fallback // eslint-disable-next-line import/no-mutable-exports

  var getKey = function getKey(vendor, k) {
    return (
      vendor +
      (!vendor ? k : k[0].toUpperCase() + k.substr(1)) +
      'AnimationFrame'
    )
  }

  if (canUseDOM) {
    vendors.some(function(vendor) {
      var rafMethod = getKey(vendor, 'request')

      if (rafMethod in window) {
        cancelMethod = getKey(vendor, 'cancel') // @ts-ignore

        rafImpl = function rafImpl(cb) {
          return window[rafMethod](cb)
        }
      }

      return !!rafImpl
    })
  }
  var request = rafImpl

  /**
   * Returns the owner document of a given element.
   *
   * @param node the element
   */
  function ownerDocument(node) {
    return (node && node.ownerDocument) || document
  }

  /**
   * Returns the owner window of a given element.
   *
   * @param node the element
   */

  function ownerWindow(node) {
    var doc = ownerDocument(node)
    return (doc && doc.defaultView) || window
  }

  /**
   * Returns one or all computed style properties of an element.
   *
   * @param node the element
   * @param psuedoElement the style property
   */

  function getComputedStyle(node, psuedoElement) {
    return ownerWindow(node).getComputedStyle(node, psuedoElement)
  }

  var rUpper = /([A-Z])/g
  function hyphenate(string) {
    return string.replace(rUpper, '-$1').toLowerCase()
  }

  /**
   * Copyright 2013-2014, Facebook, Inc.
   * All rights reserved.
   * https://github.com/facebook/react/blob/2aeb8a2a6beb00617a4217f7f8284924fa2ad819/src/vendor/core/hyphenateStyleName.js
   */
  var msPattern = /^ms-/
  function hyphenateStyleName(string) {
    return hyphenate(string).replace(msPattern, '-ms-')
  }

  var supportedTransforms = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i
  function isTransform(value) {
    return !!(value && supportedTransforms.test(value))
  }

  function style(node, property) {
    var css = ''
    var transforms = ''

    if (typeof property === 'string') {
      return (
        node.style.getPropertyValue(hyphenateStyleName(property)) ||
        getComputedStyle(node).getPropertyValue(hyphenateStyleName(property))
      )
    }

    Object.keys(property).forEach(function(key) {
      var value = property[key]

      if (!value && value !== 0) {
        node.style.removeProperty(hyphenateStyleName(key))
      } else if (isTransform(key)) {
        transforms += key + '(' + value + ') '
      } else {
        css += hyphenateStyleName(key) + ': ' + value + ';'
      }
    })

    if (transforms) {
      css += 'transform: ' + transforms + ';'
    }

    node.style.cssText += ';' + css
  }

  /* eslint-disable no-bitwise, no-cond-assign */

  /**
   * Checks if an element contains another given element.
   *
   * @param context the context element
   * @param node the element to check
   */
  function contains(context, node) {
    // HTML DOM and SVG DOM may have different support levels,
    // so we need to check on context instead of a document root element.
    if (context.contains) return context.contains(node)
    if (context.compareDocumentPosition)
      return context === node || !!(context.compareDocumentPosition(node) & 16)
  }

  function isDocument(element) {
    return 'nodeType' in element && element.nodeType === document.DOCUMENT_NODE
  }

  function isWindow(node) {
    if ('window' in node && node.window === node) return node
    if (isDocument(node)) return node.defaultView || false
    return false
  }

  function getscrollAccessor(offset) {
    var prop = offset === 'pageXOffset' ? 'scrollLeft' : 'scrollTop'

    function scrollAccessor(node, val) {
      var win = isWindow(node)

      if (val === undefined) {
        return win ? win[offset] : node[prop]
      }

      if (win) {
        win.scrollTo(win[offset], val)
      } else {
        node[prop] = val
      }
    }

    return scrollAccessor
  }

  /**
   * Gets or sets the scroll left position of a given element.
   *
   * @param node the element
   * @param val the position to set
   */

  var getScrollLeft = getscrollAccessor('pageXOffset')

  /**
   * Gets or sets the scroll top position of a given element.
   *
   * @param node the element
   * @param val the position to set
   */

  var getScrollTop = getscrollAccessor('pageYOffset')

  /**
   * Returns the offset of a given element, including top and left positions, width and height.
   *
   * @param node the element
   */

  function offset(node) {
    var doc = ownerDocument(node)
    var box = {
      top: 0,
      left: 0,
      height: 0,
      width: 0,
    }
    var docElem = doc && doc.documentElement // Make sure it's not a disconnected DOM node

    if (!docElem || !contains(docElem, node)) return box
    if (node.getBoundingClientRect !== undefined)
      box = node.getBoundingClientRect()
    box = {
      top: box.top + getScrollTop(docElem) - (docElem.clientTop || 0),
      left: box.left + getScrollLeft(docElem) - (docElem.clientLeft || 0),
      width: box.width,
      height: box.height,
    }
    return box
  }

  var isHTMLElement = function isHTMLElement(e) {
    return !!e && 'offsetParent' in e
  }

  function offsetParent(node) {
    var doc = ownerDocument(node)
    var parent = node && node.offsetParent

    while (
      isHTMLElement(parent) &&
      parent.nodeName !== 'HTML' &&
      style(parent, 'position') === 'static'
    ) {
      parent = parent.offsetParent
    }

    return parent || doc.documentElement
  }

  var nodeName = function nodeName(node) {
    return node.nodeName && node.nodeName.toLowerCase()
  }
  /**
   * Returns the relative position of a given element.
   *
   * @param node the element
   * @param offsetParent the offset parent
   */

  function position(node, offsetParent$1) {
    var parentOffset = {
      top: 0,
      left: 0,
    }
    var offset$1 // Fixed elements are offset from window (parentOffset = {top:0, left: 0},
    // because it is its only offset parent

    if (style(node, 'position') === 'fixed') {
      offset$1 = node.getBoundingClientRect()
    } else {
      var parent = offsetParent$1 || offsetParent(node)
      offset$1 = offset(node)
      if (nodeName(parent) !== 'html') parentOffset = offset(parent)
      var borderTop = String(style(parent, 'borderTopWidth') || 0)
      parentOffset.top += parseInt(borderTop, 10) - getScrollTop(parent) || 0
      var borderLeft = String(style(parent, 'borderLeftWidth') || 0)
      parentOffset.left += parseInt(borderLeft, 10) - getScrollLeft(parent) || 0
    }

    var marginTop = String(style(node, 'marginTop') || 0)
    var marginLeft = String(style(node, 'marginLeft') || 0) // Subtract parent offsets and node margins

    return _extends({}, offset$1, {
      top: offset$1.top - parentOffset.top - (parseInt(marginTop, 10) || 0),
      left: offset$1.left - parentOffset.left - (parseInt(marginLeft, 10) || 0),
    })
  }

  /** Used to match a single whitespace character. */
  var reWhitespace = /\s/

  /**
   * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
   * character of `string`.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {number} Returns the index of the last non-whitespace character.
   */
  function trimmedEndIndex(string) {
    var index = string.length

    while (index-- && reWhitespace.test(string.charAt(index))) {}
    return index
  }

  /** Used to match leading whitespace. */
  var reTrimStart = /^\s+/

  /**
   * The base implementation of `_.trim`.
   *
   * @private
   * @param {string} string The string to trim.
   * @returns {string} Returns the trimmed string.
   */
  function baseTrim(string) {
    return string
      ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, '')
      : string
  }

  /** Used as references for various `Number` constants. */
  var NAN = 0 / 0

  /** Used to detect bad signed hexadecimal string values. */
  var reIsBadHex = /^[-+]0x[0-9a-f]+$/i

  /** Used to detect binary string values. */
  var reIsBinary = /^0b[01]+$/i

  /** Used to detect octal string values. */
  var reIsOctal = /^0o[0-7]+$/i

  /** Built-in method references without a dependency on `root`. */
  var freeParseInt = parseInt

  /**
   * Converts `value` to a number.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to process.
   * @returns {number} Returns the number.
   * @example
   *
   * _.toNumber(3.2);
   * // => 3.2
   *
   * _.toNumber(Number.MIN_VALUE);
   * // => 5e-324
   *
   * _.toNumber(Infinity);
   * // => Infinity
   *
   * _.toNumber('3.2');
   * // => 3.2
   */
  function toNumber(value) {
    if (typeof value == 'number') {
      return value
    }
    if (isSymbol(value)) {
      return NAN
    }
    if (isObject(value)) {
      var other = typeof value.valueOf == 'function' ? value.valueOf() : value
      value = isObject(other) ? other + '' : other
    }
    if (typeof value != 'string') {
      return value === 0 ? value : +value
    }
    value = baseTrim(value)
    var isBinary = reIsBinary.test(value)
    return isBinary || reIsOctal.test(value)
      ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
      : reIsBadHex.test(value)
      ? NAN
      : +value
  }

  /** Used as references for various `Number` constants. */
  var INFINITY$2 = 1 / 0,
    MAX_INTEGER = 1.7976931348623157e308

  /**
   * Converts `value` to a finite number.
   *
   * @static
   * @memberOf _
   * @since 4.12.0
   * @category Lang
   * @param {*} value The value to convert.
   * @returns {number} Returns the converted number.
   * @example
   *
   * _.toFinite(3.2);
   * // => 3.2
   *
   * _.toFinite(Number.MIN_VALUE);
   * // => 5e-324
   *
   * _.toFinite(Infinity);
   * // => 1.7976931348623157e+308
   *
   * _.toFinite('3.2');
   * // => 3.2
   */
  function toFinite(value) {
    if (!value) {
      return value === 0 ? value : 0
    }
    value = toNumber(value)
    if (value === INFINITY$2 || value === -INFINITY$2) {
      var sign = value < 0 ? -1 : 1
      return sign * MAX_INTEGER
    }
    return value === value ? value : 0
  }

  /**
   * Converts `value` to an integer.
   *
   * **Note:** This method is loosely based on
   * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to convert.
   * @returns {number} Returns the converted integer.
   * @example
   *
   * _.toInteger(3.2);
   * // => 3
   *
   * _.toInteger(Number.MIN_VALUE);
   * // => 0
   *
   * _.toInteger(Infinity);
   * // => 1.7976931348623157e+308
   *
   * _.toInteger('3.2');
   * // => 3
   */
  function toInteger(value) {
    var result = toFinite(value),
      remainder = result % 1

    return result === result ? (remainder ? result - remainder : result) : 0
  }

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeCeil = Math.ceil,
    nativeMax$1 = Math.max

  /**
   * Creates an array of elements split into groups the length of `size`.
   * If `array` can't be split evenly, the final chunk will be the remaining
   * elements.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category Array
   * @param {Array} array The array to process.
   * @param {number} [size=1] The length of each chunk
   * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
   * @returns {Array} Returns the new array of chunks.
   * @example
   *
   * _.chunk(['a', 'b', 'c', 'd'], 2);
   * // => [['a', 'b'], ['c', 'd']]
   *
   * _.chunk(['a', 'b', 'c', 'd'], 3);
   * // => [['a', 'b', 'c'], ['d']]
   */
  function chunk(array, size, guard) {
    if (guard ? isIterateeCall(array, size, guard) : size === undefined) {
      size = 1
    } else {
      size = nativeMax$1(toInteger(size), 0)
    }
    var length = array == null ? 0 : array.length
    if (!length || size < 1) {
      return []
    }
    var index = 0,
      resIndex = 0,
      result = Array(nativeCeil(length / size))

    while (index < length) {
      result[resIndex++] = baseSlice(array, index, (index += size))
    }
    return result
  }

  /**
   * A convenience hook around `useState` designed to be paired with
   * the component [callback ref](https://reactjs.org/docs/refs-and-the-dom.html#callback-refs) api.
   * Callback refs are useful over `useRef()` when you need to respond to the ref being set
   * instead of lazily accessing it in an effect.
   *
   * ```ts
   * const [element, attachRef] = useCallbackRef<HTMLDivElement>()
   *
   * useEffect(() => {
   *   if (!element) return
   *
   *   const calendar = new FullCalendar.Calendar(element)
   *
   *   return () => {
   *     calendar.destroy()
   *   }
   * }, [element])
   *
   * return <div ref={attachRef} />
   * ```
   *
   * @category refs
   */

  function useCallbackRef() {
    return React.useState(null)
  }

  var toFnRef = function toFnRef(ref) {
    return !ref || typeof ref === 'function'
      ? ref
      : function(value) {
          ref.current = value
        }
  }

  function mergeRefs(refA, refB) {
    var a = toFnRef(refA)
    var b = toFnRef(refB)
    return function(value) {
      if (a) a(value)
      if (b) b(value)
    }
  }
  /**
   * Create and returns a single callback ref composed from two other Refs.
   *
   * ```tsx
   * const Button = React.forwardRef((props, ref) => {
   *   const [element, attachRef] = useCallbackRef<HTMLButtonElement>();
   *   const mergedRef = useMergedRefs(ref, attachRef);
   *
   *   return <button ref={mergedRef} {...props}/>
   * })
   * ```
   *
   * @param refA A Callback or mutable Ref
   * @param refB A Callback or mutable Ref
   * @category refs
   */

  function useMergedRefs(refA, refB) {
    return React.useMemo(
      function() {
        return mergeRefs(refA, refB)
      },
      [refA, refB]
    )
  }

  var top = 'top'
  var bottom = 'bottom'
  var right = 'right'
  var left = 'left'
  var auto = 'auto'
  var basePlacements = [top, bottom, right, left]
  var start = 'start'
  var end = 'end'
  var clippingParents = 'clippingParents'
  var viewport = 'viewport'
  var popper = 'popper'
  var reference = 'reference'
  var variationPlacements = /*#__PURE__*/ basePlacements.reduce(function(
    acc,
    placement
  ) {
    return acc.concat([placement + '-' + start, placement + '-' + end])
  },
  [])
  var placements = /*#__PURE__*/ []
    .concat(basePlacements, [auto])
    .reduce(function(acc, placement) {
      return acc.concat([
        placement,
        placement + '-' + start,
        placement + '-' + end,
      ])
    }, []) // modifiers that need to read the DOM

  var beforeRead = 'beforeRead'
  var read = 'read'
  var afterRead = 'afterRead' // pure-logic modifiers

  var beforeMain = 'beforeMain'
  var main = 'main'
  var afterMain = 'afterMain' // modifier with the purpose to write to the DOM (or write into a framework state)

  var beforeWrite = 'beforeWrite'
  var write = 'write'
  var afterWrite = 'afterWrite'
  var modifierPhases = [
    beforeRead,
    read,
    afterRead,
    beforeMain,
    main,
    afterMain,
    beforeWrite,
    write,
    afterWrite,
  ]

  function getBasePlacement(placement) {
    return placement.split('-')[0]
  }

  function getBoundingClientRect(element) {
    var rect = element.getBoundingClientRect()
    return {
      width: rect.width,
      height: rect.height,
      top: rect.top,
      right: rect.right,
      bottom: rect.bottom,
      left: rect.left,
      x: rect.left,
      y: rect.top,
    }
  }

  // means it doesn't take into account transforms.

  function getLayoutRect(element) {
    var clientRect = getBoundingClientRect(element) // Use the clientRect sizes if it's not been transformed.
    // Fixes https://github.com/popperjs/popper-core/issues/1223

    var width = element.offsetWidth
    var height = element.offsetHeight

    if (Math.abs(clientRect.width - width) <= 1) {
      width = clientRect.width
    }

    if (Math.abs(clientRect.height - height) <= 1) {
      height = clientRect.height
    }

    return {
      x: element.offsetLeft,
      y: element.offsetTop,
      width: width,
      height: height,
    }
  }

  function getWindow(node) {
    if (node == null) {
      return window
    }

    if (node.toString() !== '[object Window]') {
      var ownerDocument = node.ownerDocument
      return ownerDocument ? ownerDocument.defaultView || window : window
    }

    return node
  }

  function isElement(node) {
    var OwnElement = getWindow(node).Element
    return node instanceof OwnElement || node instanceof Element
  }

  function isHTMLElement$1(node) {
    var OwnElement = getWindow(node).HTMLElement
    return node instanceof OwnElement || node instanceof HTMLElement
  }

  function isShadowRoot(node) {
    // IE 11 has no ShadowRoot
    if (typeof ShadowRoot === 'undefined') {
      return false
    }

    var OwnElement = getWindow(node).ShadowRoot
    return node instanceof OwnElement || node instanceof ShadowRoot
  }

  function contains$1(parent, child) {
    var rootNode = child.getRootNode && child.getRootNode() // First, attempt with faster native method

    if (parent.contains(child)) {
      return true
    } // then fallback to custom implementation with Shadow DOM support
    else if (rootNode && isShadowRoot(rootNode)) {
      var next = child

      do {
        if (next && parent.isSameNode(next)) {
          return true
        } // $FlowFixMe[prop-missing]: need a better way to handle this...

        next = next.parentNode || next.host
      } while (next)
    } // Give up, the result is false

    return false
  }

  function getNodeName(element) {
    return element ? (element.nodeName || '').toLowerCase() : null
  }

  function getComputedStyle$1(element) {
    return getWindow(element).getComputedStyle(element)
  }

  function isTableElement(element) {
    return ['table', 'td', 'th'].indexOf(getNodeName(element)) >= 0
  }

  function getDocumentElement(element) {
    // $FlowFixMe[incompatible-return]: assume body is always available
    return (
      (isElement(element)
        ? element.ownerDocument // $FlowFixMe[prop-missing]
        : element.document) || window.document
    ).documentElement
  }

  function getParentNode(element) {
    if (getNodeName(element) === 'html') {
      return element
    }

    return (
      // this is a quicker (but less type safe) way to save quite some bytes from the bundle
      // $FlowFixMe[incompatible-return]
      // $FlowFixMe[prop-missing]
      element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
      element.parentNode || // DOM Element detected
      (isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
      // $FlowFixMe[incompatible-call]: HTMLElement is a Node
      getDocumentElement(element) // fallback
    )
  }

  function getTrueOffsetParent(element) {
    if (
      !isHTMLElement$1(element) || // https://github.com/popperjs/popper-core/issues/837
      getComputedStyle$1(element).position === 'fixed'
    ) {
      return null
    }

    return element.offsetParent
  } // `.offsetParent` reports `null` for fixed elements, while absolute elements
  // return the containing block

  function getContainingBlock(element) {
    var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') !== -1
    var isIE = navigator.userAgent.indexOf('Trident') !== -1

    if (isIE && isHTMLElement$1(element)) {
      // In IE 9, 10 and 11 fixed elements containing block is always established by the viewport
      var elementCss = getComputedStyle$1(element)

      if (elementCss.position === 'fixed') {
        return null
      }
    }

    var currentNode = getParentNode(element)

    while (
      isHTMLElement$1(currentNode) &&
      ['html', 'body'].indexOf(getNodeName(currentNode)) < 0
    ) {
      var css = getComputedStyle$1(currentNode) // This is non-exhaustive but covers the most common CSS properties that
      // create a containing block.
      // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block

      if (
        css.transform !== 'none' ||
        css.perspective !== 'none' ||
        css.contain === 'paint' ||
        ['transform', 'perspective'].indexOf(css.willChange) !== -1 ||
        (isFirefox && css.willChange === 'filter') ||
        (isFirefox && css.filter && css.filter !== 'none')
      ) {
        return currentNode
      } else {
        currentNode = currentNode.parentNode
      }
    }

    return null
  } // Gets the closest ancestor positioned element. Handles some edge cases,
  // such as table ancestors and cross browser bugs.

  function getOffsetParent(element) {
    var window = getWindow(element)
    var offsetParent = getTrueOffsetParent(element)

    while (
      offsetParent &&
      isTableElement(offsetParent) &&
      getComputedStyle$1(offsetParent).position === 'static'
    ) {
      offsetParent = getTrueOffsetParent(offsetParent)
    }

    if (
      offsetParent &&
      (getNodeName(offsetParent) === 'html' ||
        (getNodeName(offsetParent) === 'body' &&
          getComputedStyle$1(offsetParent).position === 'static'))
    ) {
      return window
    }

    return offsetParent || getContainingBlock(element) || window
  }

  function getMainAxisFromPlacement(placement) {
    return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y'
  }

  var max = Math.max
  var min = Math.min
  var round = Math.round

  function within(min$1, value, max$1) {
    return max(min$1, min(value, max$1))
  }

  function getFreshSideObject() {
    return {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    }
  }

  function mergePaddingObject(paddingObject) {
    return Object.assign({}, getFreshSideObject(), paddingObject)
  }

  function expandToHashMap(value, keys) {
    return keys.reduce(function(hashMap, key) {
      hashMap[key] = value
      return hashMap
    }, {})
  }

  var toPaddingObject = function toPaddingObject(padding, state) {
    padding =
      typeof padding === 'function'
        ? padding(
            Object.assign({}, state.rects, {
              placement: state.placement,
            })
          )
        : padding
    return mergePaddingObject(
      typeof padding !== 'number'
        ? padding
        : expandToHashMap(padding, basePlacements)
    )
  }

  function arrow(_ref) {
    var _state$modifiersData$

    var state = _ref.state,
      name = _ref.name,
      options = _ref.options
    var arrowElement = state.elements.arrow
    var popperOffsets = state.modifiersData.popperOffsets
    var basePlacement = getBasePlacement(state.placement)
    var axis = getMainAxisFromPlacement(basePlacement)
    var isVertical = [left, right].indexOf(basePlacement) >= 0
    var len = isVertical ? 'height' : 'width'

    if (!arrowElement || !popperOffsets) {
      return
    }

    var paddingObject = toPaddingObject(options.padding, state)
    var arrowRect = getLayoutRect(arrowElement)
    var minProp = axis === 'y' ? top : left
    var maxProp = axis === 'y' ? bottom : right
    var endDiff =
      state.rects.reference[len] +
      state.rects.reference[axis] -
      popperOffsets[axis] -
      state.rects.popper[len]
    var startDiff = popperOffsets[axis] - state.rects.reference[axis]
    var arrowOffsetParent = getOffsetParent(arrowElement)
    var clientSize = arrowOffsetParent
      ? axis === 'y'
        ? arrowOffsetParent.clientHeight || 0
        : arrowOffsetParent.clientWidth || 0
      : 0
    var centerToReference = endDiff / 2 - startDiff / 2 // Make sure the arrow doesn't overflow the popper if the center point is
    // outside of the popper bounds

    var min = paddingObject[minProp]
    var max = clientSize - arrowRect[len] - paddingObject[maxProp]
    var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference
    var offset = within(min, center, max) // Prevents breaking syntax highlighting...

    var axisProp = axis
    state.modifiersData[name] =
      ((_state$modifiersData$ = {}),
      (_state$modifiersData$[axisProp] = offset),
      (_state$modifiersData$.centerOffset = offset - center),
      _state$modifiersData$)
  }

  function effect(_ref2) {
    var state = _ref2.state,
      options = _ref2.options
    var _options$element = options.element,
      arrowElement =
        _options$element === void 0 ? '[data-popper-arrow]' : _options$element

    if (arrowElement == null) {
      return
    } // CSS selector

    if (typeof arrowElement === 'string') {
      arrowElement = state.elements.popper.querySelector(arrowElement)

      if (!arrowElement) {
        return
      }
    }

    {
      if (!isHTMLElement$1(arrowElement)) {
        console.error(
          [
            'Popper: "arrow" element must be an HTMLElement (not an SVGElement).',
            'To use an SVG arrow, wrap it in an HTMLElement that will be used as',
            'the arrow.',
          ].join(' ')
        )
      }
    }

    if (!contains$1(state.elements.popper, arrowElement)) {
      {
        console.error(
          [
            'Popper: "arrow" modifier\'s `element` must be a child of the popper',
            'element.',
          ].join(' ')
        )
      }

      return
    }

    state.elements.arrow = arrowElement
  } // eslint-disable-next-line import/no-unused-modules

  var arrow$1 = {
    name: 'arrow',
    enabled: true,
    phase: 'main',
    fn: arrow,
    effect: effect,
    requires: ['popperOffsets'],
    requiresIfExists: ['preventOverflow'],
  }

  var unsetSides = {
    top: 'auto',
    right: 'auto',
    bottom: 'auto',
    left: 'auto',
  } // Round the offsets to the nearest suitable subpixel based on the DPR.
  // Zooming can change the DPR, but it seems to report a value that will
  // cleanly divide the values into the appropriate subpixels.

  function roundOffsetsByDPR(_ref) {
    var x = _ref.x,
      y = _ref.y
    var win = window
    var dpr = win.devicePixelRatio || 1
    return {
      x: round(round(x * dpr) / dpr) || 0,
      y: round(round(y * dpr) / dpr) || 0,
    }
  }

  function mapToStyles(_ref2) {
    var _Object$assign2

    var popper = _ref2.popper,
      popperRect = _ref2.popperRect,
      placement = _ref2.placement,
      offsets = _ref2.offsets,
      position = _ref2.position,
      gpuAcceleration = _ref2.gpuAcceleration,
      adaptive = _ref2.adaptive,
      roundOffsets = _ref2.roundOffsets

    var _ref3 =
        roundOffsets === true
          ? roundOffsetsByDPR(offsets)
          : typeof roundOffsets === 'function'
          ? roundOffsets(offsets)
          : offsets,
      _ref3$x = _ref3.x,
      x = _ref3$x === void 0 ? 0 : _ref3$x,
      _ref3$y = _ref3.y,
      y = _ref3$y === void 0 ? 0 : _ref3$y

    var hasX = offsets.hasOwnProperty('x')
    var hasY = offsets.hasOwnProperty('y')
    var sideX = left
    var sideY = top
    var win = window

    if (adaptive) {
      var offsetParent = getOffsetParent(popper)
      var heightProp = 'clientHeight'
      var widthProp = 'clientWidth'

      if (offsetParent === getWindow(popper)) {
        offsetParent = getDocumentElement(popper)

        if (getComputedStyle$1(offsetParent).position !== 'static') {
          heightProp = 'scrollHeight'
          widthProp = 'scrollWidth'
        }
      } // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it

      offsetParent = offsetParent

      if (placement === top) {
        sideY = bottom // $FlowFixMe[prop-missing]

        y -= offsetParent[heightProp] - popperRect.height
        y *= gpuAcceleration ? 1 : -1
      }

      if (placement === left) {
        sideX = right // $FlowFixMe[prop-missing]

        x -= offsetParent[widthProp] - popperRect.width
        x *= gpuAcceleration ? 1 : -1
      }
    }

    var commonStyles = Object.assign(
      {
        position: position,
      },
      adaptive && unsetSides
    )

    if (gpuAcceleration) {
      var _Object$assign

      return Object.assign(
        {},
        commonStyles,
        ((_Object$assign = {}),
        (_Object$assign[sideY] = hasY ? '0' : ''),
        (_Object$assign[sideX] = hasX ? '0' : ''),
        (_Object$assign.transform =
          (win.devicePixelRatio || 1) < 2
            ? 'translate(' + x + 'px, ' + y + 'px)'
            : 'translate3d(' + x + 'px, ' + y + 'px, 0)'),
        _Object$assign)
      )
    }

    return Object.assign(
      {},
      commonStyles,
      ((_Object$assign2 = {}),
      (_Object$assign2[sideY] = hasY ? y + 'px' : ''),
      (_Object$assign2[sideX] = hasX ? x + 'px' : ''),
      (_Object$assign2.transform = ''),
      _Object$assign2)
    )
  }

  function computeStyles(_ref4) {
    var state = _ref4.state,
      options = _ref4.options
    var _options$gpuAccelerat = options.gpuAcceleration,
      gpuAcceleration =
        _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat,
      _options$adaptive = options.adaptive,
      adaptive = _options$adaptive === void 0 ? true : _options$adaptive,
      _options$roundOffsets = options.roundOffsets,
      roundOffsets =
        _options$roundOffsets === void 0 ? true : _options$roundOffsets

    {
      var transitionProperty =
        getComputedStyle$1(state.elements.popper).transitionProperty || ''

      if (
        adaptive &&
        ['transform', 'top', 'right', 'bottom', 'left'].some(function(
          property
        ) {
          return transitionProperty.indexOf(property) >= 0
        })
      ) {
        console.warn(
          [
            'Popper: Detected CSS transitions on at least one of the following',
            'CSS properties: "transform", "top", "right", "bottom", "left".',
            '\n\n',
            'Disable the "computeStyles" modifier\'s `adaptive` option to allow',
            'for smooth transitions, or remove these properties from the CSS',
            'transition declaration on the popper element if only transitioning',
            'opacity or background-color for example.',
            '\n\n',
            'We recommend using the popper element as a wrapper around an inner',
            'element that can have any CSS property transitioned for animations.',
          ].join(' ')
        )
      }
    }

    var commonStyles = {
      placement: getBasePlacement(state.placement),
      popper: state.elements.popper,
      popperRect: state.rects.popper,
      gpuAcceleration: gpuAcceleration,
    }

    if (state.modifiersData.popperOffsets != null) {
      state.styles.popper = Object.assign(
        {},
        state.styles.popper,
        mapToStyles(
          Object.assign({}, commonStyles, {
            offsets: state.modifiersData.popperOffsets,
            position: state.options.strategy,
            adaptive: adaptive,
            roundOffsets: roundOffsets,
          })
        )
      )
    }

    if (state.modifiersData.arrow != null) {
      state.styles.arrow = Object.assign(
        {},
        state.styles.arrow,
        mapToStyles(
          Object.assign({}, commonStyles, {
            offsets: state.modifiersData.arrow,
            position: 'absolute',
            adaptive: false,
            roundOffsets: roundOffsets,
          })
        )
      )
    }

    state.attributes.popper = Object.assign({}, state.attributes.popper, {
      'data-popper-placement': state.placement,
    })
  } // eslint-disable-next-line import/no-unused-modules

  var computeStyles$1 = {
    name: 'computeStyles',
    enabled: true,
    phase: 'beforeWrite',
    fn: computeStyles,
    data: {},
  }

  var passive = {
    passive: true,
  }

  function effect$1(_ref) {
    var state = _ref.state,
      instance = _ref.instance,
      options = _ref.options
    var _options$scroll = options.scroll,
      scroll = _options$scroll === void 0 ? true : _options$scroll,
      _options$resize = options.resize,
      resize = _options$resize === void 0 ? true : _options$resize
    var window = getWindow(state.elements.popper)
    var scrollParents = [].concat(
      state.scrollParents.reference,
      state.scrollParents.popper
    )

    if (scroll) {
      scrollParents.forEach(function(scrollParent) {
        scrollParent.addEventListener('scroll', instance.update, passive)
      })
    }

    if (resize) {
      window.addEventListener('resize', instance.update, passive)
    }

    return function() {
      if (scroll) {
        scrollParents.forEach(function(scrollParent) {
          scrollParent.removeEventListener('scroll', instance.update, passive)
        })
      }

      if (resize) {
        window.removeEventListener('resize', instance.update, passive)
      }
    }
  } // eslint-disable-next-line import/no-unused-modules

  var eventListeners = {
    name: 'eventListeners',
    enabled: true,
    phase: 'write',
    fn: function fn() {},
    effect: effect$1,
    data: {},
  }

  var hash = {
    left: 'right',
    right: 'left',
    bottom: 'top',
    top: 'bottom',
  }
  function getOppositePlacement(placement) {
    return placement.replace(/left|right|bottom|top/g, function(matched) {
      return hash[matched]
    })
  }

  var hash$1 = {
    start: 'end',
    end: 'start',
  }
  function getOppositeVariationPlacement(placement) {
    return placement.replace(/start|end/g, function(matched) {
      return hash$1[matched]
    })
  }

  function getWindowScroll(node) {
    var win = getWindow(node)
    var scrollLeft = win.pageXOffset
    var scrollTop = win.pageYOffset
    return {
      scrollLeft: scrollLeft,
      scrollTop: scrollTop,
    }
  }

  function getWindowScrollBarX(element) {
    // If <html> has a CSS width greater than the viewport, then this will be
    // incorrect for RTL.
    // Popper 1 is broken in this case and never had a bug report so let's assume
    // it's not an issue. I don't think anyone ever specifies width on <html>
    // anyway.
    // Browsers where the left scrollbar doesn't cause an issue report `0` for
    // this (e.g. Edge 2019, IE11, Safari)
    return (
      getBoundingClientRect(getDocumentElement(element)).left +
      getWindowScroll(element).scrollLeft
    )
  }

  function getViewportRect(element) {
    var win = getWindow(element)
    var html = getDocumentElement(element)
    var visualViewport = win.visualViewport
    var width = html.clientWidth
    var height = html.clientHeight
    var x = 0
    var y = 0 // NB: This isn't supported on iOS <= 12. If the keyboard is open, the popper
    // can be obscured underneath it.
    // Also, `html.clientHeight` adds the bottom bar height in Safari iOS, even
    // if it isn't open, so if this isn't available, the popper will be detected
    // to overflow the bottom of the screen too early.

    if (visualViewport) {
      width = visualViewport.width
      height = visualViewport.height // Uses Layout Viewport (like Chrome; Safari does not currently)
      // In Chrome, it returns a value very close to 0 (+/-) but contains rounding
      // errors due to floating point numbers, so we need to check precision.
      // Safari returns a number <= 0, usually < -1 when pinch-zoomed
      // Feature detection fails in mobile emulation mode in Chrome.
      // Math.abs(win.innerWidth / visualViewport.scale - visualViewport.width) <
      // 0.001
      // Fallback here: "Not Safari" userAgent

      if (!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
        x = visualViewport.offsetLeft
        y = visualViewport.offsetTop
      }
    }

    return {
      width: width,
      height: height,
      x: x + getWindowScrollBarX(element),
      y: y,
    }
  }

  // of the `<html>` and `<body>` rect bounds if horizontally scrollable

  function getDocumentRect(element) {
    var _element$ownerDocumen

    var html = getDocumentElement(element)
    var winScroll = getWindowScroll(element)
    var body =
      (_element$ownerDocumen = element.ownerDocument) == null
        ? void 0
        : _element$ownerDocumen.body
    var width = max(
      html.scrollWidth,
      html.clientWidth,
      body ? body.scrollWidth : 0,
      body ? body.clientWidth : 0
    )
    var height = max(
      html.scrollHeight,
      html.clientHeight,
      body ? body.scrollHeight : 0,
      body ? body.clientHeight : 0
    )
    var x = -winScroll.scrollLeft + getWindowScrollBarX(element)
    var y = -winScroll.scrollTop

    if (getComputedStyle$1(body || html).direction === 'rtl') {
      x += max(html.clientWidth, body ? body.clientWidth : 0) - width
    }

    return {
      width: width,
      height: height,
      x: x,
      y: y,
    }
  }

  function isScrollParent(element) {
    // Firefox wants us to check `-x` and `-y` variations as well
    var _getComputedStyle = getComputedStyle$1(element),
      overflow = _getComputedStyle.overflow,
      overflowX = _getComputedStyle.overflowX,
      overflowY = _getComputedStyle.overflowY

    return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX)
  }

  function getScrollParent(node) {
    if (['html', 'body', '#document'].indexOf(getNodeName(node)) >= 0) {
      // $FlowFixMe[incompatible-return]: assume body is always available
      return node.ownerDocument.body
    }

    if (isHTMLElement$1(node) && isScrollParent(node)) {
      return node
    }

    return getScrollParent(getParentNode(node))
  }

  /*
  given a DOM element, return the list of all scroll parents, up the list of ancesors
  until we get to the top window object. This list is what we attach scroll listeners
  to, because if any of these parent elements scroll, we'll need to re-calculate the
  reference element's position.
  */

  function listScrollParents(element, list) {
    var _element$ownerDocumen

    if (list === void 0) {
      list = []
    }

    var scrollParent = getScrollParent(element)
    var isBody =
      scrollParent ===
      ((_element$ownerDocumen = element.ownerDocument) == null
        ? void 0
        : _element$ownerDocumen.body)
    var win = getWindow(scrollParent)
    var target = isBody
      ? [win].concat(
          win.visualViewport || [],
          isScrollParent(scrollParent) ? scrollParent : []
        )
      : scrollParent
    var updatedList = list.concat(target)
    return isBody
      ? updatedList // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
      : updatedList.concat(listScrollParents(getParentNode(target)))
  }

  function rectToClientRect(rect) {
    return Object.assign({}, rect, {
      left: rect.x,
      top: rect.y,
      right: rect.x + rect.width,
      bottom: rect.y + rect.height,
    })
  }

  function getInnerBoundingClientRect(element) {
    var rect = getBoundingClientRect(element)
    rect.top = rect.top + element.clientTop
    rect.left = rect.left + element.clientLeft
    rect.bottom = rect.top + element.clientHeight
    rect.right = rect.left + element.clientWidth
    rect.width = element.clientWidth
    rect.height = element.clientHeight
    rect.x = rect.left
    rect.y = rect.top
    return rect
  }

  function getClientRectFromMixedType(element, clippingParent) {
    return clippingParent === viewport
      ? rectToClientRect(getViewportRect(element))
      : isHTMLElement$1(clippingParent)
      ? getInnerBoundingClientRect(clippingParent)
      : rectToClientRect(getDocumentRect(getDocumentElement(element)))
  } // A "clipping parent" is an overflowable container with the characteristic of
  // clipping (or hiding) overflowing elements with a position different from
  // `initial`

  function getClippingParents(element) {
    var clippingParents = listScrollParents(getParentNode(element))
    var canEscapeClipping =
      ['absolute', 'fixed'].indexOf(getComputedStyle$1(element).position) >= 0
    var clipperElement =
      canEscapeClipping && isHTMLElement$1(element)
        ? getOffsetParent(element)
        : element

    if (!isElement(clipperElement)) {
      return []
    } // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414

    return clippingParents.filter(function(clippingParent) {
      return (
        isElement(clippingParent) &&
        contains$1(clippingParent, clipperElement) &&
        getNodeName(clippingParent) !== 'body'
      )
    })
  } // Gets the maximum area that the element is visible in due to any number of
  // clipping parents

  function getClippingRect(element, boundary, rootBoundary) {
    var mainClippingParents =
      boundary === 'clippingParents'
        ? getClippingParents(element)
        : [].concat(boundary)
    var clippingParents = [].concat(mainClippingParents, [rootBoundary])
    var firstClippingParent = clippingParents[0]
    var clippingRect = clippingParents.reduce(function(
      accRect,
      clippingParent
    ) {
      var rect = getClientRectFromMixedType(element, clippingParent)
      accRect.top = max(rect.top, accRect.top)
      accRect.right = min(rect.right, accRect.right)
      accRect.bottom = min(rect.bottom, accRect.bottom)
      accRect.left = max(rect.left, accRect.left)
      return accRect
    },
    getClientRectFromMixedType(element, firstClippingParent))
    clippingRect.width = clippingRect.right - clippingRect.left
    clippingRect.height = clippingRect.bottom - clippingRect.top
    clippingRect.x = clippingRect.left
    clippingRect.y = clippingRect.top
    return clippingRect
  }

  function getVariation(placement) {
    return placement.split('-')[1]
  }

  function computeOffsets(_ref) {
    var reference = _ref.reference,
      element = _ref.element,
      placement = _ref.placement
    var basePlacement = placement ? getBasePlacement(placement) : null
    var variation = placement ? getVariation(placement) : null
    var commonX = reference.x + reference.width / 2 - element.width / 2
    var commonY = reference.y + reference.height / 2 - element.height / 2
    var offsets

    switch (basePlacement) {
      case top:
        offsets = {
          x: commonX,
          y: reference.y - element.height,
        }
        break

      case bottom:
        offsets = {
          x: commonX,
          y: reference.y + reference.height,
        }
        break

      case right:
        offsets = {
          x: reference.x + reference.width,
          y: commonY,
        }
        break

      case left:
        offsets = {
          x: reference.x - element.width,
          y: commonY,
        }
        break

      default:
        offsets = {
          x: reference.x,
          y: reference.y,
        }
    }

    var mainAxis = basePlacement
      ? getMainAxisFromPlacement(basePlacement)
      : null

    if (mainAxis != null) {
      var len = mainAxis === 'y' ? 'height' : 'width'

      switch (variation) {
        case start:
          offsets[mainAxis] =
            offsets[mainAxis] - (reference[len] / 2 - element[len] / 2)
          break

        case end:
          offsets[mainAxis] =
            offsets[mainAxis] + (reference[len] / 2 - element[len] / 2)
          break
      }
    }

    return offsets
  }

  function detectOverflow(state, options) {
    if (options === void 0) {
      options = {}
    }

    var _options = options,
      _options$placement = _options.placement,
      placement =
        _options$placement === void 0 ? state.placement : _options$placement,
      _options$boundary = _options.boundary,
      boundary =
        _options$boundary === void 0 ? clippingParents : _options$boundary,
      _options$rootBoundary = _options.rootBoundary,
      rootBoundary =
        _options$rootBoundary === void 0 ? viewport : _options$rootBoundary,
      _options$elementConte = _options.elementContext,
      elementContext =
        _options$elementConte === void 0 ? popper : _options$elementConte,
      _options$altBoundary = _options.altBoundary,
      altBoundary =
        _options$altBoundary === void 0 ? false : _options$altBoundary,
      _options$padding = _options.padding,
      padding = _options$padding === void 0 ? 0 : _options$padding
    var paddingObject = mergePaddingObject(
      typeof padding !== 'number'
        ? padding
        : expandToHashMap(padding, basePlacements)
    )
    var altContext = elementContext === popper ? reference : popper
    var referenceElement = state.elements.reference
    var popperRect = state.rects.popper
    var element = state.elements[altBoundary ? altContext : elementContext]
    var clippingClientRect = getClippingRect(
      isElement(element)
        ? element
        : element.contextElement || getDocumentElement(state.elements.popper),
      boundary,
      rootBoundary
    )
    var referenceClientRect = getBoundingClientRect(referenceElement)
    var popperOffsets = computeOffsets({
      reference: referenceClientRect,
      element: popperRect,
      strategy: 'absolute',
      placement: placement,
    })
    var popperClientRect = rectToClientRect(
      Object.assign({}, popperRect, popperOffsets)
    )
    var elementClientRect =
      elementContext === popper ? popperClientRect : referenceClientRect // positive = overflowing the clipping rect
    // 0 or negative = within the clipping rect

    var overflowOffsets = {
      top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
      bottom:
        elementClientRect.bottom -
        clippingClientRect.bottom +
        paddingObject.bottom,
      left:
        clippingClientRect.left - elementClientRect.left + paddingObject.left,
      right:
        elementClientRect.right -
        clippingClientRect.right +
        paddingObject.right,
    }
    var offsetData = state.modifiersData.offset // Offsets can be applied only to the popper element

    if (elementContext === popper && offsetData) {
      var offset = offsetData[placement]
      Object.keys(overflowOffsets).forEach(function(key) {
        var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1
        var axis = [top, bottom].indexOf(key) >= 0 ? 'y' : 'x'
        overflowOffsets[key] += offset[axis] * multiply
      })
    }

    return overflowOffsets
  }

  function computeAutoPlacement(state, options) {
    if (options === void 0) {
      options = {}
    }

    var _options = options,
      placement = _options.placement,
      boundary = _options.boundary,
      rootBoundary = _options.rootBoundary,
      padding = _options.padding,
      flipVariations = _options.flipVariations,
      _options$allowedAutoP = _options.allowedAutoPlacements,
      allowedAutoPlacements =
        _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP
    var variation = getVariation(placement)
    var placements$1 = variation
      ? flipVariations
        ? variationPlacements
        : variationPlacements.filter(function(placement) {
            return getVariation(placement) === variation
          })
      : basePlacements
    var allowedPlacements = placements$1.filter(function(placement) {
      return allowedAutoPlacements.indexOf(placement) >= 0
    })

    if (allowedPlacements.length === 0) {
      allowedPlacements = placements$1

      {
        console.error(
          [
            'Popper: The `allowedAutoPlacements` option did not allow any',
            'placements. Ensure the `placement` option matches the variation',
            'of the allowed placements.',
            'For example, "auto" cannot be used to allow "bottom-start".',
            'Use "auto-start" instead.',
          ].join(' ')
        )
      }
    } // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...

    var overflows = allowedPlacements.reduce(function(acc, placement) {
      acc[placement] = detectOverflow(state, {
        placement: placement,
        boundary: boundary,
        rootBoundary: rootBoundary,
        padding: padding,
      })[getBasePlacement(placement)]
      return acc
    }, {})
    return Object.keys(overflows).sort(function(a, b) {
      return overflows[a] - overflows[b]
    })
  }

  function getExpandedFallbackPlacements(placement) {
    if (getBasePlacement(placement) === auto) {
      return []
    }

    var oppositePlacement = getOppositePlacement(placement)
    return [
      getOppositeVariationPlacement(placement),
      oppositePlacement,
      getOppositeVariationPlacement(oppositePlacement),
    ]
  }

  function flip(_ref) {
    var state = _ref.state,
      options = _ref.options,
      name = _ref.name

    if (state.modifiersData[name]._skip) {
      return
    }

    var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis,
      specifiedFallbackPlacements = options.fallbackPlacements,
      padding = options.padding,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      _options$flipVariatio = options.flipVariations,
      flipVariations =
        _options$flipVariatio === void 0 ? true : _options$flipVariatio,
      allowedAutoPlacements = options.allowedAutoPlacements
    var preferredPlacement = state.options.placement
    var basePlacement = getBasePlacement(preferredPlacement)
    var isBasePlacement = basePlacement === preferredPlacement
    var fallbackPlacements =
      specifiedFallbackPlacements ||
      (isBasePlacement || !flipVariations
        ? [getOppositePlacement(preferredPlacement)]
        : getExpandedFallbackPlacements(preferredPlacement))
    var placements = [preferredPlacement]
      .concat(fallbackPlacements)
      .reduce(function(acc, placement) {
        return acc.concat(
          getBasePlacement(placement) === auto
            ? computeAutoPlacement(state, {
                placement: placement,
                boundary: boundary,
                rootBoundary: rootBoundary,
                padding: padding,
                flipVariations: flipVariations,
                allowedAutoPlacements: allowedAutoPlacements,
              })
            : placement
        )
      }, [])
    var referenceRect = state.rects.reference
    var popperRect = state.rects.popper
    var checksMap = new Map()
    var makeFallbackChecks = true
    var firstFittingPlacement = placements[0]

    for (var i = 0; i < placements.length; i++) {
      var placement = placements[i]

      var _basePlacement = getBasePlacement(placement)

      var isStartVariation = getVariation(placement) === start
      var isVertical = [top, bottom].indexOf(_basePlacement) >= 0
      var len = isVertical ? 'width' : 'height'
      var overflow = detectOverflow(state, {
        placement: placement,
        boundary: boundary,
        rootBoundary: rootBoundary,
        altBoundary: altBoundary,
        padding: padding,
      })
      var mainVariationSide = isVertical
        ? isStartVariation
          ? right
          : left
        : isStartVariation
        ? bottom
        : top

      if (referenceRect[len] > popperRect[len]) {
        mainVariationSide = getOppositePlacement(mainVariationSide)
      }

      var altVariationSide = getOppositePlacement(mainVariationSide)
      var checks = []

      if (checkMainAxis) {
        checks.push(overflow[_basePlacement] <= 0)
      }

      if (checkAltAxis) {
        checks.push(
          overflow[mainVariationSide] <= 0,
          overflow[altVariationSide] <= 0
        )
      }

      if (
        checks.every(function(check) {
          return check
        })
      ) {
        firstFittingPlacement = placement
        makeFallbackChecks = false
        break
      }

      checksMap.set(placement, checks)
    }

    if (makeFallbackChecks) {
      // `2` may be desired in some cases – research later
      var numberOfChecks = flipVariations ? 3 : 1

      var _loop = function _loop(_i) {
        var fittingPlacement = placements.find(function(placement) {
          var checks = checksMap.get(placement)

          if (checks) {
            return checks.slice(0, _i).every(function(check) {
              return check
            })
          }
        })

        if (fittingPlacement) {
          firstFittingPlacement = fittingPlacement
          return 'break'
        }
      }

      for (var _i = numberOfChecks; _i > 0; _i--) {
        var _ret = _loop(_i)

        if (_ret === 'break') break
      }
    }

    if (state.placement !== firstFittingPlacement) {
      state.modifiersData[name]._skip = true
      state.placement = firstFittingPlacement
      state.reset = true
    }
  } // eslint-disable-next-line import/no-unused-modules

  var flip$1 = {
    name: 'flip',
    enabled: true,
    phase: 'main',
    fn: flip,
    requiresIfExists: ['offset'],
    data: {
      _skip: false,
    },
  }

  function getSideOffsets(overflow, rect, preventedOffsets) {
    if (preventedOffsets === void 0) {
      preventedOffsets = {
        x: 0,
        y: 0,
      }
    }

    return {
      top: overflow.top - rect.height - preventedOffsets.y,
      right: overflow.right - rect.width + preventedOffsets.x,
      bottom: overflow.bottom - rect.height + preventedOffsets.y,
      left: overflow.left - rect.width - preventedOffsets.x,
    }
  }

  function isAnySideFullyClipped(overflow) {
    return [top, right, bottom, left].some(function(side) {
      return overflow[side] >= 0
    })
  }

  function hide(_ref) {
    var state = _ref.state,
      name = _ref.name
    var referenceRect = state.rects.reference
    var popperRect = state.rects.popper
    var preventedOffsets = state.modifiersData.preventOverflow
    var referenceOverflow = detectOverflow(state, {
      elementContext: 'reference',
    })
    var popperAltOverflow = detectOverflow(state, {
      altBoundary: true,
    })
    var referenceClippingOffsets = getSideOffsets(
      referenceOverflow,
      referenceRect
    )
    var popperEscapeOffsets = getSideOffsets(
      popperAltOverflow,
      popperRect,
      preventedOffsets
    )
    var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets)
    var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets)
    state.modifiersData[name] = {
      referenceClippingOffsets: referenceClippingOffsets,
      popperEscapeOffsets: popperEscapeOffsets,
      isReferenceHidden: isReferenceHidden,
      hasPopperEscaped: hasPopperEscaped,
    }
    state.attributes.popper = Object.assign({}, state.attributes.popper, {
      'data-popper-reference-hidden': isReferenceHidden,
      'data-popper-escaped': hasPopperEscaped,
    })
  } // eslint-disable-next-line import/no-unused-modules

  var hide$1 = {
    name: 'hide',
    enabled: true,
    phase: 'main',
    requiresIfExists: ['preventOverflow'],
    fn: hide,
  }

  function distanceAndSkiddingToXY(placement, rects, offset) {
    var basePlacement = getBasePlacement(placement)
    var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1

    var _ref =
        typeof offset === 'function'
          ? offset(
              Object.assign({}, rects, {
                placement: placement,
              })
            )
          : offset,
      skidding = _ref[0],
      distance = _ref[1]

    skidding = skidding || 0
    distance = (distance || 0) * invertDistance
    return [left, right].indexOf(basePlacement) >= 0
      ? {
          x: distance,
          y: skidding,
        }
      : {
          x: skidding,
          y: distance,
        }
  }

  function offset$1(_ref2) {
    var state = _ref2.state,
      options = _ref2.options,
      name = _ref2.name
    var _options$offset = options.offset,
      offset = _options$offset === void 0 ? [0, 0] : _options$offset
    var data = placements.reduce(function(acc, placement) {
      acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset)
      return acc
    }, {})
    var _data$state$placement = data[state.placement],
      x = _data$state$placement.x,
      y = _data$state$placement.y

    if (state.modifiersData.popperOffsets != null) {
      state.modifiersData.popperOffsets.x += x
      state.modifiersData.popperOffsets.y += y
    }

    state.modifiersData[name] = data
  } // eslint-disable-next-line import/no-unused-modules

  var offset$2 = {
    name: 'offset',
    enabled: true,
    phase: 'main',
    requires: ['popperOffsets'],
    fn: offset$1,
  }

  function popperOffsets(_ref) {
    var state = _ref.state,
      name = _ref.name
    // Offsets are the actual position the popper needs to have to be
    // properly positioned near its reference element
    // This is the most basic placement, and will be adjusted by
    // the modifiers in the next step
    state.modifiersData[name] = computeOffsets({
      reference: state.rects.reference,
      element: state.rects.popper,
      strategy: 'absolute',
      placement: state.placement,
    })
  } // eslint-disable-next-line import/no-unused-modules

  var popperOffsets$1 = {
    name: 'popperOffsets',
    enabled: true,
    phase: 'read',
    fn: popperOffsets,
    data: {},
  }

  function getAltAxis(axis) {
    return axis === 'x' ? 'y' : 'x'
  }

  function preventOverflow(_ref) {
    var state = _ref.state,
      options = _ref.options,
      name = _ref.name
    var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      padding = options.padding,
      _options$tether = options.tether,
      tether = _options$tether === void 0 ? true : _options$tether,
      _options$tetherOffset = options.tetherOffset,
      tetherOffset =
        _options$tetherOffset === void 0 ? 0 : _options$tetherOffset
    var overflow = detectOverflow(state, {
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding,
      altBoundary: altBoundary,
    })
    var basePlacement = getBasePlacement(state.placement)
    var variation = getVariation(state.placement)
    var isBasePlacement = !variation
    var mainAxis = getMainAxisFromPlacement(basePlacement)
    var altAxis = getAltAxis(mainAxis)
    var popperOffsets = state.modifiersData.popperOffsets
    var referenceRect = state.rects.reference
    var popperRect = state.rects.popper
    var tetherOffsetValue =
      typeof tetherOffset === 'function'
        ? tetherOffset(
            Object.assign({}, state.rects, {
              placement: state.placement,
            })
          )
        : tetherOffset
    var data = {
      x: 0,
      y: 0,
    }

    if (!popperOffsets) {
      return
    }

    if (checkMainAxis || checkAltAxis) {
      var mainSide = mainAxis === 'y' ? top : left
      var altSide = mainAxis === 'y' ? bottom : right
      var len = mainAxis === 'y' ? 'height' : 'width'
      var offset = popperOffsets[mainAxis]
      var min$1 = popperOffsets[mainAxis] + overflow[mainSide]
      var max$1 = popperOffsets[mainAxis] - overflow[altSide]
      var additive = tether ? -popperRect[len] / 2 : 0
      var minLen = variation === start ? referenceRect[len] : popperRect[len]
      var maxLen = variation === start ? -popperRect[len] : -referenceRect[len] // We need to include the arrow in the calculation so the arrow doesn't go
      // outside the reference bounds

      var arrowElement = state.elements.arrow
      var arrowRect =
        tether && arrowElement
          ? getLayoutRect(arrowElement)
          : {
              width: 0,
              height: 0,
            }
      var arrowPaddingObject = state.modifiersData['arrow#persistent']
        ? state.modifiersData['arrow#persistent'].padding
        : getFreshSideObject()
      var arrowPaddingMin = arrowPaddingObject[mainSide]
      var arrowPaddingMax = arrowPaddingObject[altSide] // If the reference length is smaller than the arrow length, we don't want
      // to include its full size in the calculation. If the reference is small
      // and near the edge of a boundary, the popper can overflow even if the
      // reference is not overflowing as well (e.g. virtual elements with no
      // width or height)

      var arrowLen = within(0, referenceRect[len], arrowRect[len])
      var minOffset = isBasePlacement
        ? referenceRect[len] / 2 -
          additive -
          arrowLen -
          arrowPaddingMin -
          tetherOffsetValue
        : minLen - arrowLen - arrowPaddingMin - tetherOffsetValue
      var maxOffset = isBasePlacement
        ? -referenceRect[len] / 2 +
          additive +
          arrowLen +
          arrowPaddingMax +
          tetherOffsetValue
        : maxLen + arrowLen + arrowPaddingMax + tetherOffsetValue
      var arrowOffsetParent =
        state.elements.arrow && getOffsetParent(state.elements.arrow)
      var clientOffset = arrowOffsetParent
        ? mainAxis === 'y'
          ? arrowOffsetParent.clientTop || 0
          : arrowOffsetParent.clientLeft || 0
        : 0
      var offsetModifierValue = state.modifiersData.offset
        ? state.modifiersData.offset[state.placement][mainAxis]
        : 0
      var tetherMin =
        popperOffsets[mainAxis] + minOffset - offsetModifierValue - clientOffset
      var tetherMax = popperOffsets[mainAxis] + maxOffset - offsetModifierValue

      if (checkMainAxis) {
        var preventedOffset = within(
          tether ? min(min$1, tetherMin) : min$1,
          offset,
          tether ? max(max$1, tetherMax) : max$1
        )
        popperOffsets[mainAxis] = preventedOffset
        data[mainAxis] = preventedOffset - offset
      }

      if (checkAltAxis) {
        var _mainSide = mainAxis === 'x' ? top : left

        var _altSide = mainAxis === 'x' ? bottom : right

        var _offset = popperOffsets[altAxis]

        var _min = _offset + overflow[_mainSide]

        var _max = _offset - overflow[_altSide]

        var _preventedOffset = within(
          tether ? min(_min, tetherMin) : _min,
          _offset,
          tether ? max(_max, tetherMax) : _max
        )

        popperOffsets[altAxis] = _preventedOffset
        data[altAxis] = _preventedOffset - _offset
      }
    }

    state.modifiersData[name] = data
  } // eslint-disable-next-line import/no-unused-modules

  var preventOverflow$1 = {
    name: 'preventOverflow',
    enabled: true,
    phase: 'main',
    fn: preventOverflow,
    requiresIfExists: ['offset'],
  }

  function getHTMLElementScroll(element) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop,
    }
  }

  function getNodeScroll(node) {
    if (node === getWindow(node) || !isHTMLElement$1(node)) {
      return getWindowScroll(node)
    } else {
      return getHTMLElementScroll(node)
    }
  }

  // Composite means it takes into account transforms as well as layout.

  function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
    if (isFixed === void 0) {
      isFixed = false
    }

    var documentElement = getDocumentElement(offsetParent)
    var rect = getBoundingClientRect(elementOrVirtualElement)
    var isOffsetParentAnElement = isHTMLElement$1(offsetParent)
    var scroll = {
      scrollLeft: 0,
      scrollTop: 0,
    }
    var offsets = {
      x: 0,
      y: 0,
    }

    if (isOffsetParentAnElement || (!isOffsetParentAnElement && !isFixed)) {
      if (
        getNodeName(offsetParent) !== 'body' || // https://github.com/popperjs/popper-core/issues/1078
        isScrollParent(documentElement)
      ) {
        scroll = getNodeScroll(offsetParent)
      }

      if (isHTMLElement$1(offsetParent)) {
        offsets = getBoundingClientRect(offsetParent)
        offsets.x += offsetParent.clientLeft
        offsets.y += offsetParent.clientTop
      } else if (documentElement) {
        offsets.x = getWindowScrollBarX(documentElement)
      }
    }

    return {
      x: rect.left + scroll.scrollLeft - offsets.x,
      y: rect.top + scroll.scrollTop - offsets.y,
      width: rect.width,
      height: rect.height,
    }
  }

  function order(modifiers) {
    var map = new Map()
    var visited = new Set()
    var result = []
    modifiers.forEach(function(modifier) {
      map.set(modifier.name, modifier)
    }) // On visiting object, check for its dependencies and visit them recursively

    function sort(modifier) {
      visited.add(modifier.name)
      var requires = [].concat(
        modifier.requires || [],
        modifier.requiresIfExists || []
      )
      requires.forEach(function(dep) {
        if (!visited.has(dep)) {
          var depModifier = map.get(dep)

          if (depModifier) {
            sort(depModifier)
          }
        }
      })
      result.push(modifier)
    }

    modifiers.forEach(function(modifier) {
      if (!visited.has(modifier.name)) {
        // check for visited object
        sort(modifier)
      }
    })
    return result
  }

  function orderModifiers(modifiers) {
    // order based on dependencies
    var orderedModifiers = order(modifiers) // order based on phase

    return modifierPhases.reduce(function(acc, phase) {
      return acc.concat(
        orderedModifiers.filter(function(modifier) {
          return modifier.phase === phase
        })
      )
    }, [])
  }

  function debounce(fn) {
    var pending
    return function() {
      if (!pending) {
        pending = new Promise(function(resolve) {
          Promise.resolve().then(function() {
            pending = undefined
            resolve(fn())
          })
        })
      }

      return pending
    }
  }

  function format(str) {
    for (
      var _len = arguments.length,
        args = new Array(_len > 1 ? _len - 1 : 0),
        _key = 1;
      _key < _len;
      _key++
    ) {
      args[_key - 1] = arguments[_key]
    }

    return [].concat(args).reduce(function(p, c) {
      return p.replace(/%s/, c)
    }, str)
  }

  var INVALID_MODIFIER_ERROR =
    'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s'
  var MISSING_DEPENDENCY_ERROR =
    'Popper: modifier "%s" requires "%s", but "%s" modifier is not available'
  var VALID_PROPERTIES = [
    'name',
    'enabled',
    'phase',
    'fn',
    'effect',
    'requires',
    'options',
  ]
  function validateModifiers(modifiers) {
    modifiers.forEach(function(modifier) {
      Object.keys(modifier).forEach(function(key) {
        switch (key) {
          case 'name':
            if (typeof modifier.name !== 'string') {
              console.error(
                format(
                  INVALID_MODIFIER_ERROR,
                  String(modifier.name),
                  '"name"',
                  '"string"',
                  '"' + String(modifier.name) + '"'
                )
              )
            }

            break

          case 'enabled':
            if (typeof modifier.enabled !== 'boolean') {
              console.error(
                format(
                  INVALID_MODIFIER_ERROR,
                  modifier.name,
                  '"enabled"',
                  '"boolean"',
                  '"' + String(modifier.enabled) + '"'
                )
              )
            }

          case 'phase':
            if (modifierPhases.indexOf(modifier.phase) < 0) {
              console.error(
                format(
                  INVALID_MODIFIER_ERROR,
                  modifier.name,
                  '"phase"',
                  'either ' + modifierPhases.join(', '),
                  '"' + String(modifier.phase) + '"'
                )
              )
            }

            break

          case 'fn':
            if (typeof modifier.fn !== 'function') {
              console.error(
                format(
                  INVALID_MODIFIER_ERROR,
                  modifier.name,
                  '"fn"',
                  '"function"',
                  '"' + String(modifier.fn) + '"'
                )
              )
            }

            break

          case 'effect':
            if (typeof modifier.effect !== 'function') {
              console.error(
                format(
                  INVALID_MODIFIER_ERROR,
                  modifier.name,
                  '"effect"',
                  '"function"',
                  '"' + String(modifier.fn) + '"'
                )
              )
            }

            break

          case 'requires':
            if (!Array.isArray(modifier.requires)) {
              console.error(
                format(
                  INVALID_MODIFIER_ERROR,
                  modifier.name,
                  '"requires"',
                  '"array"',
                  '"' + String(modifier.requires) + '"'
                )
              )
            }

            break

          case 'requiresIfExists':
            if (!Array.isArray(modifier.requiresIfExists)) {
              console.error(
                format(
                  INVALID_MODIFIER_ERROR,
                  modifier.name,
                  '"requiresIfExists"',
                  '"array"',
                  '"' + String(modifier.requiresIfExists) + '"'
                )
              )
            }

            break

          case 'options':
          case 'data':
            break

          default:
            console.error(
              'PopperJS: an invalid property has been provided to the "' +
                modifier.name +
                '" modifier, valid properties are ' +
                VALID_PROPERTIES.map(function(s) {
                  return '"' + s + '"'
                }).join(', ') +
                '; but "' +
                key +
                '" was provided.'
            )
        }

        modifier.requires &&
          modifier.requires.forEach(function(requirement) {
            if (
              modifiers.find(function(mod) {
                return mod.name === requirement
              }) == null
            ) {
              console.error(
                format(
                  MISSING_DEPENDENCY_ERROR,
                  String(modifier.name),
                  requirement,
                  requirement
                )
              )
            }
          })
      })
    })
  }

  function uniqueBy(arr, fn) {
    var identifiers = new Set()
    return arr.filter(function(item) {
      var identifier = fn(item)

      if (!identifiers.has(identifier)) {
        identifiers.add(identifier)
        return true
      }
    })
  }

  function mergeByName(modifiers) {
    var merged = modifiers.reduce(function(merged, current) {
      var existing = merged[current.name]
      merged[current.name] = existing
        ? Object.assign({}, existing, current, {
            options: Object.assign({}, existing.options, current.options),
            data: Object.assign({}, existing.data, current.data),
          })
        : current
      return merged
    }, {}) // IE11 does not support Object.values

    return Object.keys(merged).map(function(key) {
      return merged[key]
    })
  }

  var INVALID_ELEMENT_ERROR =
    'Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.'
  var INFINITE_LOOP_ERROR =
    'Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.'
  var DEFAULT_OPTIONS = {
    placement: 'bottom',
    modifiers: [],
    strategy: 'absolute',
  }

  function areValidElements() {
    for (
      var _len = arguments.length, args = new Array(_len), _key = 0;
      _key < _len;
      _key++
    ) {
      args[_key] = arguments[_key]
    }

    return !args.some(function(element) {
      return !(element && typeof element.getBoundingClientRect === 'function')
    })
  }

  function popperGenerator(generatorOptions) {
    if (generatorOptions === void 0) {
      generatorOptions = {}
    }

    var _generatorOptions = generatorOptions,
      _generatorOptions$def = _generatorOptions.defaultModifiers,
      defaultModifiers =
        _generatorOptions$def === void 0 ? [] : _generatorOptions$def,
      _generatorOptions$def2 = _generatorOptions.defaultOptions,
      defaultOptions =
        _generatorOptions$def2 === void 0
          ? DEFAULT_OPTIONS
          : _generatorOptions$def2
    return function createPopper(reference, popper, options) {
      if (options === void 0) {
        options = defaultOptions
      }

      var state = {
        placement: 'bottom',
        orderedModifiers: [],
        options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
        modifiersData: {},
        elements: {
          reference: reference,
          popper: popper,
        },
        attributes: {},
        styles: {},
      }
      var effectCleanupFns = []
      var isDestroyed = false
      var instance = {
        state: state,
        setOptions: function setOptions(options) {
          cleanupModifierEffects()
          state.options = Object.assign(
            {},
            defaultOptions,
            state.options,
            options
          )
          state.scrollParents = {
            reference: isElement(reference)
              ? listScrollParents(reference)
              : reference.contextElement
              ? listScrollParents(reference.contextElement)
              : [],
            popper: listScrollParents(popper),
          } // Orders the modifiers based on their dependencies and `phase`
          // properties

          var orderedModifiers = orderModifiers(
            mergeByName([].concat(defaultModifiers, state.options.modifiers))
          ) // Strip out disabled modifiers

          state.orderedModifiers = orderedModifiers.filter(function(m) {
            return m.enabled
          }) // Validate the provided modifiers so that the consumer will get warned
          // if one of the modifiers is invalid for any reason

          {
            var modifiers = uniqueBy(
              [].concat(orderedModifiers, state.options.modifiers),
              function(_ref) {
                var name = _ref.name
                return name
              }
            )
            validateModifiers(modifiers)

            if (getBasePlacement(state.options.placement) === auto) {
              var flipModifier = state.orderedModifiers.find(function(_ref2) {
                var name = _ref2.name
                return name === 'flip'
              })

              if (!flipModifier) {
                console.error(
                  [
                    'Popper: "auto" placements require the "flip" modifier be',
                    'present and enabled to work.',
                  ].join(' ')
                )
              }
            }

            var _getComputedStyle = getComputedStyle$1(popper),
              marginTop = _getComputedStyle.marginTop,
              marginRight = _getComputedStyle.marginRight,
              marginBottom = _getComputedStyle.marginBottom,
              marginLeft = _getComputedStyle.marginLeft // We no longer take into account `margins` on the popper, and it can
            // cause bugs with positioning, so we'll warn the consumer

            if (
              [marginTop, marginRight, marginBottom, marginLeft].some(function(
                margin
              ) {
                return parseFloat(margin)
              })
            ) {
              console.warn(
                [
                  'Popper: CSS "margin" styles cannot be used to apply padding',
                  'between the popper and its reference element or boundary.',
                  'To replicate margin, use the `offset` modifier, as well as',
                  'the `padding` option in the `preventOverflow` and `flip`',
                  'modifiers.',
                ].join(' ')
              )
            }
          }

          runModifierEffects()
          return instance.update()
        },
        // Sync update – it will always be executed, even if not necessary. This
        // is useful for low frequency updates where sync behavior simplifies the
        // logic.
        // For high frequency updates (e.g. `resize` and `scroll` events), always
        // prefer the async Popper#update method
        forceUpdate: function forceUpdate() {
          if (isDestroyed) {
            return
          }

          var _state$elements = state.elements,
            reference = _state$elements.reference,
            popper = _state$elements.popper // Don't proceed if `reference` or `popper` are not valid elements
          // anymore

          if (!areValidElements(reference, popper)) {
            {
              console.error(INVALID_ELEMENT_ERROR)
            }

            return
          } // Store the reference and popper rects to be read by modifiers

          state.rects = {
            reference: getCompositeRect(
              reference,
              getOffsetParent(popper),
              state.options.strategy === 'fixed'
            ),
            popper: getLayoutRect(popper),
          } // Modifiers have the ability to reset the current update cycle. The
          // most common use case for this is the `flip` modifier changing the
          // placement, which then needs to re-run all the modifiers, because the
          // logic was previously ran for the previous placement and is therefore
          // stale/incorrect

          state.reset = false
          state.placement = state.options.placement // On each update cycle, the `modifiersData` property for each modifier
          // is filled with the initial data specified by the modifier. This means
          // it doesn't persist and is fresh on each update.
          // To ensure persistent data, use `${name}#persistent`

          state.orderedModifiers.forEach(function(modifier) {
            return (state.modifiersData[modifier.name] = Object.assign(
              {},
              modifier.data
            ))
          })
          var __debug_loops__ = 0

          for (var index = 0; index < state.orderedModifiers.length; index++) {
            {
              __debug_loops__ += 1

              if (__debug_loops__ > 100) {
                console.error(INFINITE_LOOP_ERROR)
                break
              }
            }

            if (state.reset === true) {
              state.reset = false
              index = -1
              continue
            }

            var _state$orderedModifie = state.orderedModifiers[index],
              fn = _state$orderedModifie.fn,
              _state$orderedModifie2 = _state$orderedModifie.options,
              _options =
                _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2,
              name = _state$orderedModifie.name

            if (typeof fn === 'function') {
              state =
                fn({
                  state: state,
                  options: _options,
                  name: name,
                  instance: instance,
                }) || state
            }
          }
        },
        // Async and optimistically optimized update – it will not be executed if
        // not necessary (debounced to run at most once-per-tick)
        update: debounce(function() {
          return new Promise(function(resolve) {
            instance.forceUpdate()
            resolve(state)
          })
        }),
        destroy: function destroy() {
          cleanupModifierEffects()
          isDestroyed = true
        },
      }

      if (!areValidElements(reference, popper)) {
        {
          console.error(INVALID_ELEMENT_ERROR)
        }

        return instance
      }

      instance.setOptions(options).then(function(state) {
        if (!isDestroyed && options.onFirstUpdate) {
          options.onFirstUpdate(state)
        }
      }) // Modifiers have the ability to execute arbitrary code before the first
      // update cycle runs. They will be executed in the same order as the update
      // cycle. This is useful when a modifier adds some persistent data that
      // other modifiers need to use, but the modifier is run after the dependent
      // one.

      function runModifierEffects() {
        state.orderedModifiers.forEach(function(_ref3) {
          var name = _ref3.name,
            _ref3$options = _ref3.options,
            options = _ref3$options === void 0 ? {} : _ref3$options,
            effect = _ref3.effect

          if (typeof effect === 'function') {
            var cleanupFn = effect({
              state: state,
              name: name,
              instance: instance,
              options: options,
            })

            var noopFn = function noopFn() {}

            effectCleanupFns.push(cleanupFn || noopFn)
          }
        })
      }

      function cleanupModifierEffects() {
        effectCleanupFns.forEach(function(fn) {
          return fn()
        })
        effectCleanupFns = []
      }

      return instance
    }
  }

  // This is b/c the Popper lib is all esm files, and would break in a common js only environment

  var createPopper = popperGenerator({
    defaultModifiers: [
      hide$1,
      popperOffsets$1,
      computeStyles$1,
      eventListeners,
      offset$2,
      flip$1,
      preventOverflow$1,
      arrow$1,
    ],
  })

  /**
   * Track whether a component is current mounted. Generally less preferable than
   * properlly canceling effects so they don't run after a component is unmounted,
   * but helpful in cases where that isn't feasible, such as a `Promise` resolution.
   *
   * @returns a function that returns the current isMounted state of the component
   *
   * ```ts
   * const [data, setData] = useState(null)
   * const isMounted = useMounted()
   *
   * useEffect(() => {
   *   fetchdata().then((newData) => {
   *      if (isMounted()) {
   *        setData(newData);
   *      }
   *   })
   * })
   * ```
   */

  function useMounted() {
    var mounted = React.useRef(true)
    var isMounted = React.useRef(function() {
      return mounted.current
    })
    React.useEffect(function() {
      return function() {
        mounted.current = false
      }
    }, [])
    return isMounted.current
  }

  function useSafeState(state) {
    var isMounted = useMounted()
    return [
      state[0],
      React.useCallback(
        function(nextState) {
          if (!isMounted()) return
          return state[1](nextState)
        },
        [isMounted, state[1]]
      ),
    ]
  }

  var initialPopperStyles = function initialPopperStyles(position) {
    return {
      position: position,
      top: '0',
      left: '0',
      opacity: '0',
      pointerEvents: 'none',
    }
  }

  var disabledApplyStylesModifier = {
    name: 'applyStyles',
    enabled: false,
  } // until docjs supports type exports...

  var ariaDescribedByModifier = {
    name: 'ariaDescribedBy',
    enabled: true,
    phase: 'afterWrite',
    effect: function effect(_ref) {
      var state = _ref.state
      return function() {
        var _state$elements = state.elements,
          reference = _state$elements.reference,
          popper = _state$elements.popper

        if ('removeAttribute' in reference) {
          var ids = (reference.getAttribute('aria-describedby') || '')
            .split(',')
            .filter(function(id) {
              return id.trim() !== popper.id
            })
          if (!ids.length) reference.removeAttribute('aria-describedby')
          else reference.setAttribute('aria-describedby', ids.join(','))
        }
      }
    },
    fn: function fn(_ref2) {
      var _popper$getAttribute

      var state = _ref2.state
      var _state$elements2 = state.elements,
        popper = _state$elements2.popper,
        reference = _state$elements2.reference
      var role =
        (_popper$getAttribute = popper.getAttribute('role')) == null
          ? void 0
          : _popper$getAttribute.toLowerCase()

      if (popper.id && role === 'tooltip' && 'setAttribute' in reference) {
        var ids = reference.getAttribute('aria-describedby')

        if (ids && ids.split(',').indexOf(popper.id) !== -1) {
          return
        }

        reference.setAttribute(
          'aria-describedby',
          ids ? ids + ',' + popper.id : popper.id
        )
      }
    },
  }
  var EMPTY_MODIFIERS = []
  /**
   * Position an element relative some reference element using Popper.js
   *
   * @param referenceElement
   * @param popperElement
   * @param {object}      options
   * @param {object=}     options.modifiers Popper.js modifiers
   * @param {boolean=}    options.enabled toggle the popper functionality on/off
   * @param {string=}     options.placement The popper element placement relative to the reference element
   * @param {string=}     options.strategy the positioning strategy
   * @param {boolean=}    options.eventsEnabled have Popper listen on window resize events to reposition the element
   * @param {function=}   options.onCreate called when the popper is created
   * @param {function=}   options.onUpdate called when the popper is updated
   *
   * @returns {UsePopperState} The popper state
   */

  function usePopper(referenceElement, popperElement, _temp) {
    var _ref3 = _temp === void 0 ? {} : _temp,
      _ref3$enabled = _ref3.enabled,
      enabled = _ref3$enabled === void 0 ? true : _ref3$enabled,
      _ref3$placement = _ref3.placement,
      placement = _ref3$placement === void 0 ? 'bottom' : _ref3$placement,
      _ref3$strategy = _ref3.strategy,
      strategy = _ref3$strategy === void 0 ? 'absolute' : _ref3$strategy,
      _ref3$modifiers = _ref3.modifiers,
      modifiers =
        _ref3$modifiers === void 0 ? EMPTY_MODIFIERS : _ref3$modifiers,
      config = _objectWithoutPropertiesLoose(_ref3, [
        'enabled',
        'placement',
        'strategy',
        'modifiers',
      ])

    var popperInstanceRef = React.useRef()
    var update = React.useCallback(function() {
      var _popperInstanceRef$cu
      ;(_popperInstanceRef$cu = popperInstanceRef.current) == null
        ? void 0
        : _popperInstanceRef$cu.update()
    }, [])
    var forceUpdate = React.useCallback(function() {
      var _popperInstanceRef$cu2
      ;(_popperInstanceRef$cu2 = popperInstanceRef.current) == null
        ? void 0
        : _popperInstanceRef$cu2.forceUpdate()
    }, [])

    var _useSafeState = useSafeState(
        React.useState({
          placement: placement,
          update: update,
          forceUpdate: forceUpdate,
          attributes: {},
          styles: {
            popper: initialPopperStyles(strategy),
            arrow: {},
          },
        })
      ),
      popperState = _useSafeState[0],
      setState = _useSafeState[1]

    var updateModifier = React.useMemo(
      function() {
        return {
          name: 'updateStateModifier',
          enabled: true,
          phase: 'write',
          requires: ['computeStyles'],
          fn: function fn(_ref4) {
            var state = _ref4.state
            var styles = {}
            var attributes = {}
            Object.keys(state.elements).forEach(function(element) {
              styles[element] = state.styles[element]
              attributes[element] = state.attributes[element]
            })
            setState({
              state: state,
              styles: styles,
              attributes: attributes,
              update: update,
              forceUpdate: forceUpdate,
              placement: state.placement,
            })
          },
        }
      },
      [update, forceUpdate, setState]
    )
    React.useEffect(
      function() {
        if (!popperInstanceRef.current || !enabled) return
        popperInstanceRef.current.setOptions({
          placement: placement,
          strategy: strategy,
          modifiers: [].concat(modifiers, [
            updateModifier,
            disabledApplyStylesModifier,
          ]),
        }) // intentionally NOT re-running on new modifiers
        // eslint-disable-next-line react-hooks/exhaustive-deps
      },
      [strategy, placement, updateModifier, enabled]
    )
    React.useEffect(
      function() {
        if (!enabled || referenceElement == null || popperElement == null) {
          return undefined
        }

        popperInstanceRef.current = createPopper(
          referenceElement,
          popperElement,
          _extends({}, config, {
            placement: placement,
            strategy: strategy,
            modifiers: [].concat(modifiers, [
              ariaDescribedByModifier,
              updateModifier,
            ]),
          })
        )
        return function() {
          if (popperInstanceRef.current != null) {
            popperInstanceRef.current.destroy()
            popperInstanceRef.current = undefined
            setState(function(s) {
              return _extends({}, s, {
                attributes: {},
                styles: {
                  popper: initialPopperStyles(strategy),
                },
              })
            })
          }
        } // This is only run once to _create_ the popper
        // eslint-disable-next-line react-hooks/exhaustive-deps
      },
      [enabled, referenceElement, popperElement]
    )
    return popperState
  }

  /* eslint-disable no-return-assign */
  var optionsSupported = false
  var onceSupported = false

  try {
    var options = {
      get passive() {
        return (optionsSupported = true)
      },

      get once() {
        // eslint-disable-next-line no-multi-assign
        return (onceSupported = optionsSupported = true)
      },
    }

    if (canUseDOM) {
      window.addEventListener('test', options, options)
      window.removeEventListener('test', options, true)
    }
  } catch (e) {
    /* */
  }

  /**
   * An `addEventListener` ponyfill, supports the `once` option
   *
   * @param node the element
   * @param eventName the event name
   * @param handle the handler
   * @param options event options
   */
  function addEventListener(node, eventName, handler, options) {
    if (options && typeof options !== 'boolean' && !onceSupported) {
      var once = options.once,
        capture = options.capture
      var wrappedHandler = handler

      if (!onceSupported && once) {
        wrappedHandler =
          handler.__once ||
          function onceHandler(event) {
            this.removeEventListener(eventName, onceHandler, capture)
            handler.call(this, event)
          }

        handler.__once = wrappedHandler
      }

      node.addEventListener(
        eventName,
        wrappedHandler,
        optionsSupported ? options : capture
      )
    }

    node.addEventListener(eventName, handler, options)
  }

  /**
   * A `removeEventListener` ponyfill
   *
   * @param node the element
   * @param eventName the event name
   * @param handle the handler
   * @param options event options
   */
  function removeEventListener(node, eventName, handler, options) {
    var capture =
      options && typeof options !== 'boolean' ? options.capture : options
    node.removeEventListener(eventName, handler, capture)

    if (handler.__once) {
      node.removeEventListener(eventName, handler.__once, capture)
    }
  }

  function listen(node, eventName, handler, options) {
    addEventListener(node, eventName, handler, options)
    return function() {
      removeEventListener(node, eventName, handler, options)
    }
  }

  /**
   * Creates a `Ref` whose value is updated in an effect, ensuring the most recent
   * value is the one rendered with. Generally only required for Concurrent mode usage
   * where previous work in `render()` may be discarded befor being used.
   *
   * This is safe to access in an event handler.
   *
   * @param value The `Ref` value
   */

  function useCommittedRef(value) {
    var ref = React.useRef(value)
    React.useEffect(
      function() {
        ref.current = value
      },
      [value]
    )
    return ref
  }

  function useEventCallback(fn) {
    var ref = useCommittedRef(fn)
    return React.useCallback(
      function() {
        return ref.current && ref.current.apply(ref, arguments)
      },
      [ref]
    )
  }

  /**
   * Copyright (c) 2014-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var warning = function() {}

  {
    var printWarning$2 = function printWarning(format, args) {
      var len = arguments.length
      args = new Array(len > 1 ? len - 1 : 0)
      for (var key = 1; key < len; key++) {
        args[key - 1] = arguments[key]
      }
      var argIndex = 0
      var message =
        'Warning: ' +
        format.replace(/%s/g, function() {
          return args[argIndex++]
        })
      if (typeof console !== 'undefined') {
        console.error(message)
      }
      try {
        // --- Welcome to debugging React ---
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message)
      } catch (x) {}
    }

    warning = function(condition, format, args) {
      var len = arguments.length
      args = new Array(len > 2 ? len - 2 : 0)
      for (var key = 2; key < len; key++) {
        args[key - 2] = arguments[key]
      }
      if (format === undefined) {
        throw new Error(
          '`warning(condition, format, ...args)` requires a warning ' +
            'message argument'
        )
      }
      if (!condition) {
        printWarning$2.apply(null, [format].concat(args))
      }
    }
  }

  var warning_1 = warning

  function safeFindDOMNode(componentOrElement) {
    if (componentOrElement && 'setState' in componentOrElement) {
      return ReactDOM__default.findDOMNode(componentOrElement)
    }

    return componentOrElement != null ? componentOrElement : null
  }

  var ownerDocument$1 = function(componentOrElement) {
    return ownerDocument(safeFindDOMNode(componentOrElement))
  }

  var escapeKeyCode = 27

  var noop$1 = function noop() {}

  function isLeftClickEvent(event) {
    return event.button === 0
  }

  function isModifiedEvent(event) {
    return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey)
  }

  var getRefTarget = function getRefTarget(ref) {
    return ref && ('current' in ref ? ref.current : ref)
  }

  /**
   * The `useRootClose` hook registers your callback on the document
   * when rendered. Powers the `<Overlay/>` component. This is used achieve modal
   * style behavior where your callback is triggered when the user tries to
   * interact with the rest of the document or hits the `esc` key.
   *
   * @param {Ref<HTMLElement>| HTMLElement} ref  The element boundary
   * @param {function} onRootClose
   * @param {object=}  options
   * @param {boolean=} options.disabled
   * @param {string=}  options.clickTrigger The DOM event name (click, mousedown, etc) to attach listeners on
   */
  function useRootClose(ref, onRootClose, _temp) {
    var _ref = _temp === void 0 ? {} : _temp,
      disabled = _ref.disabled,
      _ref$clickTrigger = _ref.clickTrigger,
      clickTrigger = _ref$clickTrigger === void 0 ? 'click' : _ref$clickTrigger

    var preventMouseRootCloseRef = React.useRef(false)
    var onClose = onRootClose || noop$1
    var handleMouseCapture = React.useCallback(
      function(e) {
        var currentTarget = getRefTarget(ref)
        warning_1(
          !!currentTarget,
          'RootClose captured a close event but does not have a ref to compare it to. ' +
            'useRootClose(), should be passed a ref that resolves to a DOM node'
        )
        preventMouseRootCloseRef.current =
          !currentTarget ||
          isModifiedEvent(e) ||
          !isLeftClickEvent(e) ||
          !!contains(currentTarget, e.target)
      },
      [ref]
    )
    var handleMouse = useEventCallback(function(e) {
      if (!preventMouseRootCloseRef.current) {
        onClose(e)
      }
    })
    var handleKeyUp = useEventCallback(function(e) {
      if (e.keyCode === escapeKeyCode) {
        onClose(e)
      }
    })
    React.useEffect(
      function() {
        if (disabled || ref == null) return undefined // Store the current event to avoid triggering handlers immediately
        // https://github.com/facebook/react/issues/20074

        var currentEvent = window.event
        var doc = ownerDocument$1(getRefTarget(ref)) // Use capture for this listener so it fires before React's listener, to
        // avoid false positives in the contains() check below if the target DOM
        // element is removed in the React mouse callback.

        var removeMouseCaptureListener = listen(
          doc,
          clickTrigger,
          handleMouseCapture,
          true
        )
        var removeMouseListener = listen(doc, clickTrigger, function(e) {
          // skip if this event is the same as the one running when we added the handlers
          if (e === currentEvent) {
            currentEvent = undefined
            return
          }

          handleMouse(e)
        })
        var removeKeyupListener = listen(doc, 'keyup', function(e) {
          // skip if this event is the same as the one running when we added the handlers
          if (e === currentEvent) {
            currentEvent = undefined
            return
          }

          handleKeyUp(e)
        })
        var mobileSafariHackListeners = []

        if ('ontouchstart' in doc.documentElement) {
          mobileSafariHackListeners = [].slice
            .call(doc.body.children)
            .map(function(el) {
              return listen(el, 'mousemove', noop$1)
            })
        }

        return function() {
          removeMouseCaptureListener()
          removeMouseListener()
          removeKeyupListener()
          mobileSafariHackListeners.forEach(function(remove) {
            return remove()
          })
        }
      },
      [
        ref,
        disabled,
        clickTrigger,
        handleMouseCapture,
        handleMouse,
        handleKeyUp,
      ]
    )
  }

  var resolveContainerRef = function resolveContainerRef(ref) {
    var _ref

    if (typeof document === 'undefined') return null
    if (ref == null) return ownerDocument().body
    if (typeof ref === 'function') ref = ref()
    if (ref && 'current' in ref) ref = ref.current
    if ((_ref = ref) == null ? void 0 : _ref.nodeType) return ref || null
    return null
  }
  function useWaitForDOMRef(ref, onResolved) {
    var _useState = React.useState(function() {
        return resolveContainerRef(ref)
      }),
      resolvedRef = _useState[0],
      setRef = _useState[1]

    if (!resolvedRef) {
      var earlyRef = resolveContainerRef(ref)
      if (earlyRef) setRef(earlyRef)
    }

    React.useEffect(
      function() {
        if (onResolved && resolvedRef) {
          onResolved(resolvedRef)
        }
      },
      [onResolved, resolvedRef]
    )
    React.useEffect(
      function() {
        var nextRef = resolveContainerRef(ref)

        if (nextRef !== resolvedRef) {
          setRef(nextRef)
        }
      },
      [ref, resolvedRef]
    )
    return resolvedRef
  }

  function toModifierMap(modifiers) {
    var result = {}

    if (!Array.isArray(modifiers)) {
      return modifiers || result
    } // eslint-disable-next-line no-unused-expressions

    modifiers == null
      ? void 0
      : modifiers.forEach(function(m) {
          result[m.name] = m
        })
    return result
  }
  function toModifierArray(map) {
    if (map === void 0) {
      map = {}
    }

    if (Array.isArray(map)) return map
    return Object.keys(map).map(function(k) {
      map[k].name = k
      return map[k]
    })
  }
  function mergeOptionsWithPopperConfig(_ref) {
    var _modifiers$preventOve,
      _modifiers$preventOve2,
      _modifiers$offset,
      _modifiers$arrow

    var enabled = _ref.enabled,
      enableEvents = _ref.enableEvents,
      placement = _ref.placement,
      flip = _ref.flip,
      offset = _ref.offset,
      containerPadding = _ref.containerPadding,
      arrowElement = _ref.arrowElement,
      _ref$popperConfig = _ref.popperConfig,
      popperConfig = _ref$popperConfig === void 0 ? {} : _ref$popperConfig
    var modifiers = toModifierMap(popperConfig.modifiers)
    return _extends({}, popperConfig, {
      placement: placement,
      enabled: enabled,
      modifiers: toModifierArray(
        _extends({}, modifiers, {
          eventListeners: {
            enabled: enableEvents,
          },
          preventOverflow: _extends({}, modifiers.preventOverflow, {
            options: containerPadding
              ? _extends(
                  {
                    padding: containerPadding,
                  },
                  (_modifiers$preventOve = modifiers.preventOverflow) == null
                    ? void 0
                    : _modifiers$preventOve.options
                )
              : (_modifiers$preventOve2 = modifiers.preventOverflow) == null
              ? void 0
              : _modifiers$preventOve2.options,
          }),
          offset: {
            options: _extends(
              {
                offset: offset,
              },
              (_modifiers$offset = modifiers.offset) == null
                ? void 0
                : _modifiers$offset.options
            ),
          },
          arrow: _extends({}, modifiers.arrow, {
            enabled: !!arrowElement,
            options: _extends(
              {},
              (_modifiers$arrow = modifiers.arrow) == null
                ? void 0
                : _modifiers$arrow.options,
              {
                element: arrowElement,
              }
            ),
          }),
          flip: _extends(
            {
              enabled: !!flip,
            },
            modifiers.flip
          ),
        })
      ),
    })
  }

  /**
   * Built on top of `Popper.js`, the overlay component is
   * great for custom tooltip overlays.
   */
  var Overlay = /*#__PURE__*/ React__default.forwardRef(function(
    props,
    outerRef
  ) {
    var flip = props.flip,
      offset = props.offset,
      placement = props.placement,
      _props$containerPaddi = props.containerPadding,
      containerPadding =
        _props$containerPaddi === void 0 ? 5 : _props$containerPaddi,
      _props$popperConfig = props.popperConfig,
      popperConfig = _props$popperConfig === void 0 ? {} : _props$popperConfig,
      Transition = props.transition

    var _useCallbackRef = useCallbackRef(),
      rootElement = _useCallbackRef[0],
      attachRef = _useCallbackRef[1]

    var _useCallbackRef2 = useCallbackRef(),
      arrowElement = _useCallbackRef2[0],
      attachArrowRef = _useCallbackRef2[1]

    var mergedRef = useMergedRefs(attachRef, outerRef)
    var container = useWaitForDOMRef(props.container)
    var target = useWaitForDOMRef(props.target)

    var _useState = React.useState(!props.show),
      exited = _useState[0],
      setExited = _useState[1]

    var _usePopper = usePopper(
        target,
        rootElement,
        mergeOptionsWithPopperConfig({
          placement: placement,
          enableEvents: !!props.show,
          containerPadding: containerPadding || 5,
          flip: flip,
          offset: offset,
          arrowElement: arrowElement,
          popperConfig: popperConfig,
        })
      ),
      styles = _usePopper.styles,
      attributes = _usePopper.attributes,
      popper = _objectWithoutPropertiesLoose(_usePopper, [
        'styles',
        'attributes',
      ])

    if (props.show) {
      if (exited) setExited(false)
    } else if (!props.transition && !exited) {
      setExited(true)
    }

    var handleHidden = function handleHidden() {
      setExited(true)

      if (props.onExited) {
        props.onExited.apply(props, arguments)
      }
    } // Don't un-render the overlay while it's transitioning out.

    var mountOverlay = props.show || (Transition && !exited)
    useRootClose(rootElement, props.onHide, {
      disabled: !props.rootClose || props.rootCloseDisabled,
      clickTrigger: props.rootCloseEvent,
    })

    if (!mountOverlay) {
      // Don't bother showing anything if we don't have to.
      return null
    }

    var child = props.children(
      _extends({}, popper, {
        show: !!props.show,
        props: _extends({}, attributes.popper, {
          style: styles.popper,
          ref: mergedRef,
        }),
        arrowProps: _extends({}, attributes.arrow, {
          style: styles.arrow,
          ref: attachArrowRef,
        }),
      })
    )

    if (Transition) {
      var onExit = props.onExit,
        onExiting = props.onExiting,
        onEnter = props.onEnter,
        onEntering = props.onEntering,
        onEntered = props.onEntered
      child = /*#__PURE__*/ React__default.createElement(
        Transition,
        {
          in: props.show,
          appear: true,
          onExit: onExit,
          onExiting: onExiting,
          onExited: handleHidden,
          onEnter: onEnter,
          onEntering: onEntering,
          onEntered: onEntered,
        },
        child
      )
    }

    return container
      ? /*#__PURE__*/ ReactDOM__default.createPortal(child, container)
      : null
  })
  Overlay.displayName = 'Overlay'
  Overlay.propTypes = {
    /**
     * Set the visibility of the Overlay
     */
    show: propTypes.bool,

    /** Specify where the overlay element is positioned in relation to the target element */
    placement: propTypes.oneOf(placements),

    /**
     * A DOM Element, Ref to an element, or function that returns either. The `target` element is where
     * the overlay is positioned relative to.
     */
    target: propTypes.any,

    /**
     * A DOM Element, Ref to an element, or function that returns either. The `container` will have the Portal children
     * appended to it.
     */
    container: propTypes.any,

    /**
     * Enables the Popper.js `flip` modifier, allowing the Overlay to
     * automatically adjust it's placement in case of overlap with the viewport or toggle.
     * Refer to the [flip docs](https://popper.js.org/popper-documentation.html#modifiers..flip.enabled) for more info
     */
    flip: propTypes.bool,

    /**
     * A render prop that returns an element to overlay and position. See
     * the [react-popper documentation](https://github.com/FezVrasta/react-popper#children) for more info.
     *
     * @type {Function ({
     *   show: boolean,
     *   placement: Placement,
     *   update: () => void,
     *   forceUpdate: () => void,
     *   props: {
     *     ref: (?HTMLElement) => void,
     *     style: { [string]: string | number },
     *     aria-labelledby: ?string
     *     [string]: string | number,
     *   },
     *   arrowProps: {
     *     ref: (?HTMLElement) => void,
     *     style: { [string]: string | number },
     *     [string]: string | number,
     *   },
     * }) => React.Element}
     */
    children: propTypes.func.isRequired,

    /**
     * Control how much space there is between the edge of the boundary element and overlay.
     * A convenience shortcut to setting `popperConfig.modfiers.preventOverflow.padding`
     */
    containerPadding: propTypes.number,

    /**
     * A set of popper options and props passed directly to react-popper's Popper component.
     */
    popperConfig: propTypes.object,

    /**
     * Specify whether the overlay should trigger `onHide` when the user clicks outside the overlay
     */
    rootClose: propTypes.bool,

    /**
     * Specify event for toggling overlay
     */
    rootCloseEvent: propTypes.oneOf(['click', 'mousedown']),

    /**
     * Specify disabled for disable RootCloseWrapper
     */
    rootCloseDisabled: propTypes.bool,

    /**
     * A Callback fired by the Overlay when it wishes to be hidden.
     *
     * __required__ when `rootClose` is `true`.
     *
     * @type func
     */
    onHide: function onHide(props) {
      for (
        var _len = arguments.length,
          args = new Array(_len > 1 ? _len - 1 : 0),
          _key = 1;
        _key < _len;
        _key++
      ) {
        args[_key - 1] = arguments[_key]
      }

      if (props.rootClose) {
        var _PropTypes$func

        return (_PropTypes$func = propTypes.func).isRequired.apply(
          _PropTypes$func,
          [props].concat(args)
        )
      }

      return propTypes.func.apply(propTypes, [props].concat(args))
    },

    /**
     * A `react-transition-group@2.0.0` `<Transition/>` component
     * used to animate the overlay as it changes visibility.
     */
    // @ts-ignore
    transition: propTypes.elementType,

    /**
     * Callback fired before the Overlay transitions in
     */
    onEnter: propTypes.func,

    /**
     * Callback fired as the Overlay begins to transition in
     */
    onEntering: propTypes.func,

    /**
     * Callback fired after the Overlay finishes transitioning in
     */
    onEntered: propTypes.func,

    /**
     * Callback fired right before the Overlay transitions out
     */
    onExit: propTypes.func,

    /**
     * Callback fired as the Overlay begins to transition out
     */
    onExiting: propTypes.func,

    /**
     * Callback fired after the Overlay finishes transitioning out
     */
    onExited: propTypes.func,
  }

  /**
   * Returns the height of a given element.
   *
   * @param node the element
   * @param client whether to use `clientHeight` if possible
   */

  function height(node, client) {
    var win = isWindow(node)
    return win
      ? win.innerHeight
      : client
      ? node.clientHeight
      : offset(node).height
  }

  var toArray = Function.prototype.bind.call(Function.prototype.call, [].slice)
  /**
   * Runs `querySelectorAll` on a given element.
   *
   * @param element the element
   * @param selector the selector
   */

  function qsa(element, selector) {
    return toArray(element.querySelectorAll(selector))
  }

  var MILLISECONDS_IN_MINUTE = 60000

  /**
   * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
   * They usually appear for dates that denote time before the timezones were introduced
   * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
   * and GMT+01:00:00 after that date)
   *
   * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
   * which would lead to incorrect calculations.
   *
   * This function returns the timezone offset in milliseconds that takes seconds in account.
   */
  var getTimezoneOffsetInMilliseconds = function getTimezoneOffsetInMilliseconds(
    dirtyDate
  ) {
    var date = new Date(dirtyDate.getTime())
    var baseTimezoneOffset = date.getTimezoneOffset()
    date.setSeconds(0, 0)
    var millisecondsPartOfTimezoneOffset =
      date.getTime() % MILLISECONDS_IN_MINUTE

    return (
      baseTimezoneOffset * MILLISECONDS_IN_MINUTE +
      millisecondsPartOfTimezoneOffset
    )
  }

  /**
   * @category Common Helpers
   * @summary Is the given argument an instance of Date?
   *
   * @description
   * Is the given argument an instance of Date?
   *
   * @param {*} argument - the argument to check
   * @returns {Boolean} the given argument is an instance of Date
   *
   * @example
   * // Is 'mayonnaise' a Date?
   * var result = isDate('mayonnaise')
   * //=> false
   */
  function isDate(argument) {
    return argument instanceof Date
  }

  var is_date = isDate

  var MILLISECONDS_IN_HOUR = 3600000
  var MILLISECONDS_IN_MINUTE$1 = 60000
  var DEFAULT_ADDITIONAL_DIGITS = 2

  var parseTokenDateTimeDelimeter = /[T ]/
  var parseTokenPlainTime = /:/

  // year tokens
  var parseTokenYY = /^(\d{2})$/
  var parseTokensYYY = [
    /^([+-]\d{2})$/, // 0 additional digits
    /^([+-]\d{3})$/, // 1 additional digit
    /^([+-]\d{4})$/, // 2 additional digits
  ]

  var parseTokenYYYY = /^(\d{4})/
  var parseTokensYYYYY = [
    /^([+-]\d{4})/, // 0 additional digits
    /^([+-]\d{5})/, // 1 additional digit
    /^([+-]\d{6})/, // 2 additional digits
  ]

  // date tokens
  var parseTokenMM = /^-(\d{2})$/
  var parseTokenDDD = /^-?(\d{3})$/
  var parseTokenMMDD = /^-?(\d{2})-?(\d{2})$/
  var parseTokenWww = /^-?W(\d{2})$/
  var parseTokenWwwD = /^-?W(\d{2})-?(\d{1})$/

  // time tokens
  var parseTokenHH = /^(\d{2}([.,]\d*)?)$/
  var parseTokenHHMM = /^(\d{2}):?(\d{2}([.,]\d*)?)$/
  var parseTokenHHMMSS = /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/

  // timezone tokens
  var parseTokenTimezone = /([Z+-].*)$/
  var parseTokenTimezoneZ = /^(Z)$/
  var parseTokenTimezoneHH = /^([+-])(\d{2})$/
  var parseTokenTimezoneHHMM = /^([+-])(\d{2}):?(\d{2})$/

  /**
   * @category Common Helpers
   * @summary Convert the given argument to an instance of Date.
   *
   * @description
   * Convert the given argument to an instance of Date.
   *
   * If the argument is an instance of Date, the function returns its clone.
   *
   * If the argument is a number, it is treated as a timestamp.
   *
   * If an argument is a string, the function tries to parse it.
   * Function accepts complete ISO 8601 formats as well as partial implementations.
   * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601
   *
   * If all above fails, the function passes the given argument to Date constructor.
   *
   * @param {Date|String|Number} argument - the value to convert
   * @param {Object} [options] - the object with options
   * @param {0 | 1 | 2} [options.additionalDigits=2] - the additional number of digits in the extended year format
   * @returns {Date} the parsed date in the local time zone
   *
   * @example
   * // Convert string '2014-02-11T11:30:30' to date:
   * var result = parse('2014-02-11T11:30:30')
   * //=> Tue Feb 11 2014 11:30:30
   *
   * @example
   * // Parse string '+02014101',
   * // if the additional number of digits in the extended year format is 1:
   * var result = parse('+02014101', {additionalDigits: 1})
   * //=> Fri Apr 11 2014 00:00:00
   */
  function parse(argument, dirtyOptions) {
    if (is_date(argument)) {
      // Prevent the date to lose the milliseconds when passed to new Date() in IE10
      return new Date(argument.getTime())
    } else if (typeof argument !== 'string') {
      return new Date(argument)
    }

    var options = dirtyOptions || {}
    var additionalDigits = options.additionalDigits
    if (additionalDigits == null) {
      additionalDigits = DEFAULT_ADDITIONAL_DIGITS
    } else {
      additionalDigits = Number(additionalDigits)
    }

    var dateStrings = splitDateString(argument)

    var parseYearResult = parseYear(dateStrings.date, additionalDigits)
    var year = parseYearResult.year
    var restDateString = parseYearResult.restDateString

    var date = parseDate(restDateString, year)

    if (date) {
      var timestamp = date.getTime()
      var time = 0
      var offset

      if (dateStrings.time) {
        time = parseTime(dateStrings.time)
      }

      if (dateStrings.timezone) {
        offset = parseTimezone(dateStrings.timezone) * MILLISECONDS_IN_MINUTE$1
      } else {
        var fullTime = timestamp + time
        var fullTimeDate = new Date(fullTime)

        offset = getTimezoneOffsetInMilliseconds(fullTimeDate)

        // Adjust time when it's coming from DST
        var fullTimeDateNextDay = new Date(fullTime)
        fullTimeDateNextDay.setDate(fullTimeDate.getDate() + 1)
        var offsetDiff =
          getTimezoneOffsetInMilliseconds(fullTimeDateNextDay) -
          getTimezoneOffsetInMilliseconds(fullTimeDate)
        if (offsetDiff > 0) {
          offset += offsetDiff
        }
      }

      return new Date(timestamp + time + offset)
    } else {
      return new Date(argument)
    }
  }

  function splitDateString(dateString) {
    var dateStrings = {}
    var array = dateString.split(parseTokenDateTimeDelimeter)
    var timeString

    if (parseTokenPlainTime.test(array[0])) {
      dateStrings.date = null
      timeString = array[0]
    } else {
      dateStrings.date = array[0]
      timeString = array[1]
    }

    if (timeString) {
      var token = parseTokenTimezone.exec(timeString)
      if (token) {
        dateStrings.time = timeString.replace(token[1], '')
        dateStrings.timezone = token[1]
      } else {
        dateStrings.time = timeString
      }
    }

    return dateStrings
  }

  function parseYear(dateString, additionalDigits) {
    var parseTokenYYY = parseTokensYYY[additionalDigits]
    var parseTokenYYYYY = parseTokensYYYYY[additionalDigits]

    var token

    // YYYY or ±YYYYY
    token = parseTokenYYYY.exec(dateString) || parseTokenYYYYY.exec(dateString)
    if (token) {
      var yearString = token[1]
      return {
        year: parseInt(yearString, 10),
        restDateString: dateString.slice(yearString.length),
      }
    }

    // YY or ±YYY
    token = parseTokenYY.exec(dateString) || parseTokenYYY.exec(dateString)
    if (token) {
      var centuryString = token[1]
      return {
        year: parseInt(centuryString, 10) * 100,
        restDateString: dateString.slice(centuryString.length),
      }
    }

    // Invalid ISO-formatted year
    return {
      year: null,
    }
  }

  function parseDate(dateString, year) {
    // Invalid ISO-formatted year
    if (year === null) {
      return null
    }

    var token
    var date
    var month
    var week

    // YYYY
    if (dateString.length === 0) {
      date = new Date(0)
      date.setUTCFullYear(year)
      return date
    }

    // YYYY-MM
    token = parseTokenMM.exec(dateString)
    if (token) {
      date = new Date(0)
      month = parseInt(token[1], 10) - 1
      date.setUTCFullYear(year, month)
      return date
    }

    // YYYY-DDD or YYYYDDD
    token = parseTokenDDD.exec(dateString)
    if (token) {
      date = new Date(0)
      var dayOfYear = parseInt(token[1], 10)
      date.setUTCFullYear(year, 0, dayOfYear)
      return date
    }

    // YYYY-MM-DD or YYYYMMDD
    token = parseTokenMMDD.exec(dateString)
    if (token) {
      date = new Date(0)
      month = parseInt(token[1], 10) - 1
      var day = parseInt(token[2], 10)
      date.setUTCFullYear(year, month, day)
      return date
    }

    // YYYY-Www or YYYYWww
    token = parseTokenWww.exec(dateString)
    if (token) {
      week = parseInt(token[1], 10) - 1
      return dayOfISOYear(year, week)
    }

    // YYYY-Www-D or YYYYWwwD
    token = parseTokenWwwD.exec(dateString)
    if (token) {
      week = parseInt(token[1], 10) - 1
      var dayOfWeek = parseInt(token[2], 10) - 1
      return dayOfISOYear(year, week, dayOfWeek)
    }

    // Invalid ISO-formatted date
    return null
  }

  function parseTime(timeString) {
    var token
    var hours
    var minutes

    // hh
    token = parseTokenHH.exec(timeString)
    if (token) {
      hours = parseFloat(token[1].replace(',', '.'))
      return (hours % 24) * MILLISECONDS_IN_HOUR
    }

    // hh:mm or hhmm
    token = parseTokenHHMM.exec(timeString)
    if (token) {
      hours = parseInt(token[1], 10)
      minutes = parseFloat(token[2].replace(',', '.'))
      return (
        (hours % 24) * MILLISECONDS_IN_HOUR + minutes * MILLISECONDS_IN_MINUTE$1
      )
    }

    // hh:mm:ss or hhmmss
    token = parseTokenHHMMSS.exec(timeString)
    if (token) {
      hours = parseInt(token[1], 10)
      minutes = parseInt(token[2], 10)
      var seconds = parseFloat(token[3].replace(',', '.'))
      return (
        (hours % 24) * MILLISECONDS_IN_HOUR +
        minutes * MILLISECONDS_IN_MINUTE$1 +
        seconds * 1000
      )
    }

    // Invalid ISO-formatted time
    return null
  }

  function parseTimezone(timezoneString) {
    var token
    var absoluteOffset

    // Z
    token = parseTokenTimezoneZ.exec(timezoneString)
    if (token) {
      return 0
    }

    // ±hh
    token = parseTokenTimezoneHH.exec(timezoneString)
    if (token) {
      absoluteOffset = parseInt(token[2], 10) * 60
      return token[1] === '+' ? -absoluteOffset : absoluteOffset
    }

    // ±hh:mm or ±hhmm
    token = parseTokenTimezoneHHMM.exec(timezoneString)
    if (token) {
      absoluteOffset = parseInt(token[2], 10) * 60 + parseInt(token[3], 10)
      return token[1] === '+' ? -absoluteOffset : absoluteOffset
    }

    return 0
  }

  function dayOfISOYear(isoYear, week, day) {
    week = week || 0
    day = day || 0
    var date = new Date(0)
    date.setUTCFullYear(isoYear, 0, 4)
    var fourthOfJanuaryDay = date.getUTCDay() || 7
    var diff = week * 7 + day + 1 - fourthOfJanuaryDay
    date.setUTCDate(date.getUTCDate() + diff)
    return date
  }

  var parse_1 = parse

  /**
   * @category Day Helpers
   * @summary Add the specified number of days to the given date.
   *
   * @description
   * Add the specified number of days to the given date.
   *
   * @param {Date|String|Number} date - the date to be changed
   * @param {Number} amount - the amount of days to be added
   * @returns {Date} the new date with the days added
   *
   * @example
   * // Add 10 days to 1 September 2014:
   * var result = addDays(new Date(2014, 8, 1), 10)
   * //=> Thu Sep 11 2014 00:00:00
   */
  function addDays(dirtyDate, dirtyAmount) {
    var date = parse_1(dirtyDate)
    var amount = Number(dirtyAmount)
    date.setDate(date.getDate() + amount)
    return date
  }

  var add_days = addDays

  /**
   * @category Millisecond Helpers
   * @summary Add the specified number of milliseconds to the given date.
   *
   * @description
   * Add the specified number of milliseconds to the given date.
   *
   * @param {Date|String|Number} date - the date to be changed
   * @param {Number} amount - the amount of milliseconds to be added
   * @returns {Date} the new date with the milliseconds added
   *
   * @example
   * // Add 750 milliseconds to 10 July 2014 12:45:30.000:
   * var result = addMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
   * //=> Thu Jul 10 2014 12:45:30.750
   */
  function addMilliseconds(dirtyDate, dirtyAmount) {
    var timestamp = parse_1(dirtyDate).getTime()
    var amount = Number(dirtyAmount)
    return new Date(timestamp + amount)
  }

  var add_milliseconds = addMilliseconds

  var MILLISECONDS_IN_HOUR$1 = 3600000

  /**
   * @category Hour Helpers
   * @summary Add the specified number of hours to the given date.
   *
   * @description
   * Add the specified number of hours to the given date.
   *
   * @param {Date|String|Number} date - the date to be changed
   * @param {Number} amount - the amount of hours to be added
   * @returns {Date} the new date with the hours added
   *
   * @example
   * // Add 2 hours to 10 July 2014 23:00:00:
   * var result = addHours(new Date(2014, 6, 10, 23, 0), 2)
   * //=> Fri Jul 11 2014 01:00:00
   */
  function addHours(dirtyDate, dirtyAmount) {
    var amount = Number(dirtyAmount)
    return add_milliseconds(dirtyDate, amount * MILLISECONDS_IN_HOUR$1)
  }

  var add_hours = addHours

  /**
   * @category Week Helpers
   * @summary Return the start of a week for the given date.
   *
   * @description
   * Return the start of a week for the given date.
   * The result will be in the local timezone.
   *
   * @param {Date|String|Number} date - the original date
   * @param {Object} [options] - the object with options
   * @param {Number} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
   * @returns {Date} the start of a week
   *
   * @example
   * // The start of a week for 2 September 2014 11:55:00:
   * var result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
   * //=> Sun Aug 31 2014 00:00:00
   *
   * @example
   * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
   * var result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), {weekStartsOn: 1})
   * //=> Mon Sep 01 2014 00:00:00
   */
  function startOfWeek(dirtyDate, dirtyOptions) {
    var weekStartsOn = dirtyOptions ? Number(dirtyOptions.weekStartsOn) || 0 : 0

    var date = parse_1(dirtyDate)
    var day = date.getDay()
    var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn

    date.setDate(date.getDate() - diff)
    date.setHours(0, 0, 0, 0)
    return date
  }

  var start_of_week = startOfWeek

  /**
   * @category ISO Week Helpers
   * @summary Return the start of an ISO week for the given date.
   *
   * @description
   * Return the start of an ISO week for the given date.
   * The result will be in the local timezone.
   *
   * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
   *
   * @param {Date|String|Number} date - the original date
   * @returns {Date} the start of an ISO week
   *
   * @example
   * // The start of an ISO week for 2 September 2014 11:55:00:
   * var result = startOfISOWeek(new Date(2014, 8, 2, 11, 55, 0))
   * //=> Mon Sep 01 2014 00:00:00
   */
  function startOfISOWeek(dirtyDate) {
    return start_of_week(dirtyDate, { weekStartsOn: 1 })
  }

  var start_of_iso_week = startOfISOWeek

  /**
   * @category ISO Week-Numbering Year Helpers
   * @summary Get the ISO week-numbering year of the given date.
   *
   * @description
   * Get the ISO week-numbering year of the given date,
   * which always starts 3 days before the year's first Thursday.
   *
   * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
   *
   * @param {Date|String|Number} date - the given date
   * @returns {Number} the ISO week-numbering year
   *
   * @example
   * // Which ISO-week numbering year is 2 January 2005?
   * var result = getISOYear(new Date(2005, 0, 2))
   * //=> 2004
   */
  function getISOYear(dirtyDate) {
    var date = parse_1(dirtyDate)
    var year = date.getFullYear()

    var fourthOfJanuaryOfNextYear = new Date(0)
    fourthOfJanuaryOfNextYear.setFullYear(year + 1, 0, 4)
    fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0)
    var startOfNextYear = start_of_iso_week(fourthOfJanuaryOfNextYear)

    var fourthOfJanuaryOfThisYear = new Date(0)
    fourthOfJanuaryOfThisYear.setFullYear(year, 0, 4)
    fourthOfJanuaryOfThisYear.setHours(0, 0, 0, 0)
    var startOfThisYear = start_of_iso_week(fourthOfJanuaryOfThisYear)

    if (date.getTime() >= startOfNextYear.getTime()) {
      return year + 1
    } else if (date.getTime() >= startOfThisYear.getTime()) {
      return year
    } else {
      return year - 1
    }
  }

  var get_iso_year = getISOYear

  /**
   * @category ISO Week-Numbering Year Helpers
   * @summary Return the start of an ISO week-numbering year for the given date.
   *
   * @description
   * Return the start of an ISO week-numbering year,
   * which always starts 3 days before the year's first Thursday.
   * The result will be in the local timezone.
   *
   * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
   *
   * @param {Date|String|Number} date - the original date
   * @returns {Date} the start of an ISO year
   *
   * @example
   * // The start of an ISO week-numbering year for 2 July 2005:
   * var result = startOfISOYear(new Date(2005, 6, 2))
   * //=> Mon Jan 03 2005 00:00:00
   */
  function startOfISOYear(dirtyDate) {
    var year = get_iso_year(dirtyDate)
    var fourthOfJanuary = new Date(0)
    fourthOfJanuary.setFullYear(year, 0, 4)
    fourthOfJanuary.setHours(0, 0, 0, 0)
    var date = start_of_iso_week(fourthOfJanuary)
    return date
  }

  var start_of_iso_year = startOfISOYear

  /**
   * @category Day Helpers
   * @summary Return the start of a day for the given date.
   *
   * @description
   * Return the start of a day for the given date.
   * The result will be in the local timezone.
   *
   * @param {Date|String|Number} date - the original date
   * @returns {Date} the start of a day
   *
   * @example
   * // The start of a day for 2 September 2014 11:55:00:
   * var result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
   * //=> Tue Sep 02 2014 00:00:00
   */
  function startOfDay(dirtyDate) {
    var date = parse_1(dirtyDate)
    date.setHours(0, 0, 0, 0)
    return date
  }

  var start_of_day = startOfDay

  var MILLISECONDS_IN_MINUTE$2 = 60000
  var MILLISECONDS_IN_DAY = 86400000

  /**
   * @category Day Helpers
   * @summary Get the number of calendar days between the given dates.
   *
   * @description
   * Get the number of calendar days between the given dates.
   *
   * @param {Date|String|Number} dateLeft - the later date
   * @param {Date|String|Number} dateRight - the earlier date
   * @returns {Number} the number of calendar days
   *
   * @example
   * // How many calendar days are between
   * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
   * var result = differenceInCalendarDays(
   *   new Date(2012, 6, 2, 0, 0),
   *   new Date(2011, 6, 2, 23, 0)
   * )
   * //=> 366
   */
  function differenceInCalendarDays(dirtyDateLeft, dirtyDateRight) {
    var startOfDayLeft = start_of_day(dirtyDateLeft)
    var startOfDayRight = start_of_day(dirtyDateRight)

    var timestampLeft =
      startOfDayLeft.getTime() -
      startOfDayLeft.getTimezoneOffset() * MILLISECONDS_IN_MINUTE$2
    var timestampRight =
      startOfDayRight.getTime() -
      startOfDayRight.getTimezoneOffset() * MILLISECONDS_IN_MINUTE$2

    // Round the number of days to the nearest integer
    // because the number of milliseconds in a day is not constant
    // (e.g. it's different in the day of the daylight saving time clock shift)
    return Math.round((timestampLeft - timestampRight) / MILLISECONDS_IN_DAY)
  }

  var difference_in_calendar_days = differenceInCalendarDays

  /**
   * @category ISO Week-Numbering Year Helpers
   * @summary Set the ISO week-numbering year to the given date.
   *
   * @description
   * Set the ISO week-numbering year to the given date,
   * saving the week number and the weekday number.
   *
   * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
   *
   * @param {Date|String|Number} date - the date to be changed
   * @param {Number} isoYear - the ISO week-numbering year of the new date
   * @returns {Date} the new date with the ISO week-numbering year setted
   *
   * @example
   * // Set ISO week-numbering year 2007 to 29 December 2008:
   * var result = setISOYear(new Date(2008, 11, 29), 2007)
   * //=> Mon Jan 01 2007 00:00:00
   */
  function setISOYear(dirtyDate, dirtyISOYear) {
    var date = parse_1(dirtyDate)
    var isoYear = Number(dirtyISOYear)
    var diff = difference_in_calendar_days(date, start_of_iso_year(date))
    var fourthOfJanuary = new Date(0)
    fourthOfJanuary.setFullYear(isoYear, 0, 4)
    fourthOfJanuary.setHours(0, 0, 0, 0)
    date = start_of_iso_year(fourthOfJanuary)
    date.setDate(date.getDate() + diff)
    return date
  }

  var set_iso_year = setISOYear

  /**
   * @category ISO Week-Numbering Year Helpers
   * @summary Add the specified number of ISO week-numbering years to the given date.
   *
   * @description
   * Add the specified number of ISO week-numbering years to the given date.
   *
   * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
   *
   * @param {Date|String|Number} date - the date to be changed
   * @param {Number} amount - the amount of ISO week-numbering years to be added
   * @returns {Date} the new date with the ISO week-numbering years added
   *
   * @example
   * // Add 5 ISO week-numbering years to 2 July 2010:
   * var result = addISOYears(new Date(2010, 6, 2), 5)
   * //=> Fri Jun 26 2015 00:00:00
   */
  function addISOYears(dirtyDate, dirtyAmount) {
    var amount = Number(dirtyAmount)
    return set_iso_year(dirtyDate, get_iso_year(dirtyDate) + amount)
  }

  var add_iso_years = addISOYears

  var MILLISECONDS_IN_MINUTE$3 = 60000

  /**
   * @category Minute Helpers
   * @summary Add the specified number of minutes to the given date.
   *
   * @description
   * Add the specified number of minutes to the given date.
   *
   * @param {Date|String|Number} date - the date to be changed
   * @param {Number} amount - the amount of minutes to be added
   * @returns {Date} the new date with the minutes added
   *
   * @example
   * // Add 30 minutes to 10 July 2014 12:00:00:
   * var result = addMinutes(new Date(2014, 6, 10, 12, 0), 30)
   * //=> Thu Jul 10 2014 12:30:00
   */
  function addMinutes(dirtyDate, dirtyAmount) {
    var amount = Number(dirtyAmount)
    return add_milliseconds(dirtyDate, amount * MILLISECONDS_IN_MINUTE$3)
  }

  var add_minutes = addMinutes

  /**
   * @category Month Helpers
   * @summary Get the number of days in a month of the given date.
   *
   * @description
   * Get the number of days in a month of the given date.
   *
   * @param {Date|String|Number} date - the given date
   * @returns {Number} the number of days in a month
   *
   * @example
   * // How many days are in February 2000?
   * var result = getDaysInMonth(new Date(2000, 1))
   * //=> 29
   */
  function getDaysInMonth(dirtyDate) {
    var date = parse_1(dirtyDate)
    var year = date.getFullYear()
    var monthIndex = date.getMonth()
    var lastDayOfMonth = new Date(0)
    lastDayOfMonth.setFullYear(year, monthIndex + 1, 0)
    lastDayOfMonth.setHours(0, 0, 0, 0)
    return lastDayOfMonth.getDate()
  }

  var get_days_in_month = getDaysInMonth

  /**
   * @category Month Helpers
   * @summary Add the specified number of months to the given date.
   *
   * @description
   * Add the specified number of months to the given date.
   *
   * @param {Date|String|Number} date - the date to be changed
   * @param {Number} amount - the amount of months to be added
   * @returns {Date} the new date with the months added
   *
   * @example
   * // Add 5 months to 1 September 2014:
   * var result = addMonths(new Date(2014, 8, 1), 5)
   * //=> Sun Feb 01 2015 00:00:00
   */
  function addMonths(dirtyDate, dirtyAmount) {
    var date = parse_1(dirtyDate)
    var amount = Number(dirtyAmount)
    var desiredMonth = date.getMonth() + amount
    var dateWithDesiredMonth = new Date(0)
    dateWithDesiredMonth.setFullYear(date.getFullYear(), desiredMonth, 1)
    dateWithDesiredMonth.setHours(0, 0, 0, 0)
    var daysInMonth = get_days_in_month(dateWithDesiredMonth)
    // Set the last day of the new month
    // if the original date was the last day of the longer month
    date.setMonth(desiredMonth, Math.min(daysInMonth, date.getDate()))
    return date
  }

  var add_months = addMonths

  /**
   * @category Quarter Helpers
   * @summary Add the specified number of year quarters to the given date.
   *
   * @description
   * Add the specified number of year quarters to the given date.
   *
   * @param {Date|String|Number} date - the date to be changed
   * @param {Number} amount - the amount of quarters to be added
   * @returns {Date} the new date with the quarters added
   *
   * @example
   * // Add 1 quarter to 1 September 2014:
   * var result = addQuarters(new Date(2014, 8, 1), 1)
   * //=> Mon Dec 01 2014 00:00:00
   */
  function addQuarters(dirtyDate, dirtyAmount) {
    var amount = Number(dirtyAmount)
    var months = amount * 3
    return add_months(dirtyDate, months)
  }

  var add_quarters = addQuarters

  /**
   * @category Second Helpers
   * @summary Add the specified number of seconds to the given date.
   *
   * @description
   * Add the specified number of seconds to the given date.
   *
   * @param {Date|String|Number} date - the date to be changed
   * @param {Number} amount - the amount of seconds to be added
   * @returns {Date} the new date with the seconds added
   *
   * @example
   * // Add 30 seconds to 10 July 2014 12:45:00:
   * var result = addSeconds(new Date(2014, 6, 10, 12, 45, 0), 30)
   * //=> Thu Jul 10 2014 12:45:30
   */
  function addSeconds(dirtyDate, dirtyAmount) {
    var amount = Number(dirtyAmount)
    return add_milliseconds(dirtyDate, amount * 1000)
  }

  var add_seconds = addSeconds

  /**
   * @category Week Helpers
   * @summary Add the specified number of weeks to the given date.
   *
   * @description
   * Add the specified number of week to the given date.
   *
   * @param {Date|String|Number} date - the date to be changed
   * @param {Number} amount - the amount of weeks to be added
   * @returns {Date} the new date with the weeks added
   *
   * @example
   * // Add 4 weeks to 1 September 2014:
   * var result = addWeeks(new Date(2014, 8, 1), 4)
   * //=> Mon Sep 29 2014 00:00:00
   */
  function addWeeks(dirtyDate, dirtyAmount) {
    var amount = Number(dirtyAmount)
    var days = amount * 7
    return add_days(dirtyDate, days)
  }

  var add_weeks = addWeeks

  /**
   * @category Year Helpers
   * @summary Add the specified number of years to the given date.
   *
   * @description
   * Add the specified number of years to the given date.
   *
   * @param {Date|String|Number} date - the date to be changed
   * @param {Number} amount - the amount of years to be added
   * @returns {Date} the new date with the years added
   *
   * @example
   * // Add 5 years to 1 September 2014:
   * var result = addYears(new Date(2014, 8, 1), 5)
   * //=> Sun Sep 01 2019 00:00:00
   */
  function addYears(dirtyDate, dirtyAmount) {
    var amount = Number(dirtyAmount)
    return add_months(dirtyDate, amount * 12)
  }

  var add_years = addYears

  /**
   * @category Range Helpers
   * @summary Is the given date range overlapping with another date range?
   *
   * @description
   * Is the given date range overlapping with another date range?
   *
   * @param {Date|String|Number} initialRangeStartDate - the start of the initial range
   * @param {Date|String|Number} initialRangeEndDate - the end of the initial range
   * @param {Date|String|Number} comparedRangeStartDate - the start of the range to compare it with
   * @param {Date|String|Number} comparedRangeEndDate - the end of the range to compare it with
   * @returns {Boolean} whether the date ranges are overlapping
   * @throws {Error} startDate of a date range cannot be after its endDate
   *
   * @example
   * // For overlapping date ranges:
   * areRangesOverlapping(
   *   new Date(2014, 0, 10), new Date(2014, 0, 20), new Date(2014, 0, 17), new Date(2014, 0, 21)
   * )
   * //=> true
   *
   * @example
   * // For non-overlapping date ranges:
   * areRangesOverlapping(
   *   new Date(2014, 0, 10), new Date(2014, 0, 20), new Date(2014, 0, 21), new Date(2014, 0, 22)
   * )
   * //=> false
   */
  function areRangesOverlapping(
    dirtyInitialRangeStartDate,
    dirtyInitialRangeEndDate,
    dirtyComparedRangeStartDate,
    dirtyComparedRangeEndDate
  ) {
    var initialStartTime = parse_1(dirtyInitialRangeStartDate).getTime()
    var initialEndTime = parse_1(dirtyInitialRangeEndDate).getTime()
    var comparedStartTime = parse_1(dirtyComparedRangeStartDate).getTime()
    var comparedEndTime = parse_1(dirtyComparedRangeEndDate).getTime()

    if (
      initialStartTime > initialEndTime ||
      comparedStartTime > comparedEndTime
    ) {
      throw new Error(
        'The start of the range cannot be after the end of the range'
      )
    }

    return (
      initialStartTime < comparedEndTime && comparedStartTime < initialEndTime
    )
  }

  var are_ranges_overlapping = areRangesOverlapping

  /**
   * @category Common Helpers
   * @summary Return an index of the closest date from the array comparing to the given date.
   *
   * @description
   * Return an index of the closest date from the array comparing to the given date.
   *
   * @param {Date|String|Number} dateToCompare - the date to compare with
   * @param {Date[]|String[]|Number[]} datesArray - the array to search
   * @returns {Number} an index of the date closest to the given date
   * @throws {TypeError} the second argument must be an instance of Array
   *
   * @example
   * // Which date is closer to 6 September 2015?
   * var dateToCompare = new Date(2015, 8, 6)
   * var datesArray = [
   *   new Date(2015, 0, 1),
   *   new Date(2016, 0, 1),
   *   new Date(2017, 0, 1)
   * ]
   * var result = closestIndexTo(dateToCompare, datesArray)
   * //=> 1
   */
  function closestIndexTo(dirtyDateToCompare, dirtyDatesArray) {
    if (!(dirtyDatesArray instanceof Array)) {
      throw new TypeError(
        toString.call(dirtyDatesArray) + ' is not an instance of Array'
      )
    }

    var dateToCompare = parse_1(dirtyDateToCompare)
    var timeToCompare = dateToCompare.getTime()

    var result
    var minDistance

    dirtyDatesArray.forEach(function(dirtyDate, index) {
      var currentDate = parse_1(dirtyDate)
      var distance = Math.abs(timeToCompare - currentDate.getTime())
      if (result === undefined || distance < minDistance) {
        result = index
        minDistance = distance
      }
    })

    return result
  }

  var closest_index_to = closestIndexTo

  /**
   * @category Common Helpers
   * @summary Return a date from the array closest to the given date.
   *
   * @description
   * Return a date from the array closest to the given date.
   *
   * @param {Date|String|Number} dateToCompare - the date to compare with
   * @param {Date[]|String[]|Number[]} datesArray - the array to search
   * @returns {Date} the date from the array closest to the given date
   * @throws {TypeError} the second argument must be an instance of Array
   *
   * @example
   * // Which date is closer to 6 September 2015: 1 January 2000 or 1 January 2030?
   * var dateToCompare = new Date(2015, 8, 6)
   * var result = closestTo(dateToCompare, [
   *   new Date(2000, 0, 1),
   *   new Date(2030, 0, 1)
   * ])
   * //=> Tue Jan 01 2030 00:00:00
   */
  function closestTo(dirtyDateToCompare, dirtyDatesArray) {
    if (!(dirtyDatesArray instanceof Array)) {
      throw new TypeError(
        toString.call(dirtyDatesArray) + ' is not an instance of Array'
      )
    }

    var dateToCompare = parse_1(dirtyDateToCompare)
    var timeToCompare = dateToCompare.getTime()

    var result
    var minDistance

    dirtyDatesArray.forEach(function(dirtyDate) {
      var currentDate = parse_1(dirtyDate)
      var distance = Math.abs(timeToCompare - currentDate.getTime())
      if (result === undefined || distance < minDistance) {
        result = currentDate
        minDistance = distance
      }
    })

    return result
  }

  var closest_to = closestTo

  /**
   * @category Common Helpers
   * @summary Compare the two dates and return -1, 0 or 1.
   *
   * @description
   * Compare the two dates and return 1 if the first date is after the second,
   * -1 if the first date is before the second or 0 if dates are equal.
   *
   * @param {Date|String|Number} dateLeft - the first date to compare
   * @param {Date|String|Number} dateRight - the second date to compare
   * @returns {Number} the result of the comparison
   *
   * @example
   * // Compare 11 February 1987 and 10 July 1989:
   * var result = compareAsc(
   *   new Date(1987, 1, 11),
   *   new Date(1989, 6, 10)
   * )
   * //=> -1
   *
   * @example
   * // Sort the array of dates:
   * var result = [
   *   new Date(1995, 6, 2),
   *   new Date(1987, 1, 11),
   *   new Date(1989, 6, 10)
   * ].sort(compareAsc)
   * //=> [
   * //   Wed Feb 11 1987 00:00:00,
   * //   Mon Jul 10 1989 00:00:00,
   * //   Sun Jul 02 1995 00:00:00
   * // ]
   */
  function compareAsc(dirtyDateLeft, dirtyDateRight) {
    var dateLeft = parse_1(dirtyDateLeft)
    var timeLeft = dateLeft.getTime()
    var dateRight = parse_1(dirtyDateRight)
    var timeRight = dateRight.getTime()

    if (timeLeft < timeRight) {
      return -1
    } else if (timeLeft > timeRight) {
      return 1
    } else {
      return 0
    }
  }

  var compare_asc = compareAsc

  /**
   * @category Common Helpers
   * @summary Compare the two dates reverse chronologically and return -1, 0 or 1.
   *
   * @description
   * Compare the two dates and return -1 if the first date is after the second,
   * 1 if the first date is before the second or 0 if dates are equal.
   *
   * @param {Date|String|Number} dateLeft - the first date to compare
   * @param {Date|String|Number} dateRight - the second date to compare
   * @returns {Number} the result of the comparison
   *
   * @example
   * // Compare 11 February 1987 and 10 July 1989 reverse chronologically:
   * var result = compareDesc(
   *   new Date(1987, 1, 11),
   *   new Date(1989, 6, 10)
   * )
   * //=> 1
   *
   * @example
   * // Sort the array of dates in reverse chronological order:
   * var result = [
   *   new Date(1995, 6, 2),
   *   new Date(1987, 1, 11),
   *   new Date(1989, 6, 10)
   * ].sort(compareDesc)
   * //=> [
   * //   Sun Jul 02 1995 00:00:00,
   * //   Mon Jul 10 1989 00:00:00,
   * //   Wed Feb 11 1987 00:00:00
   * // ]
   */
  function compareDesc(dirtyDateLeft, dirtyDateRight) {
    var dateLeft = parse_1(dirtyDateLeft)
    var timeLeft = dateLeft.getTime()
    var dateRight = parse_1(dirtyDateRight)
    var timeRight = dateRight.getTime()

    if (timeLeft > timeRight) {
      return -1
    } else if (timeLeft < timeRight) {
      return 1
    } else {
      return 0
    }
  }

  var compare_desc = compareDesc

  var MILLISECONDS_IN_MINUTE$4 = 60000
  var MILLISECONDS_IN_WEEK = 604800000

  /**
   * @category ISO Week Helpers
   * @summary Get the number of calendar ISO weeks between the given dates.
   *
   * @description
   * Get the number of calendar ISO weeks between the given dates.
   *
   * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
   *
   * @param {Date|String|Number} dateLeft - the later date
   * @param {Date|String|Number} dateRight - the earlier date
   * @returns {Number} the number of calendar ISO weeks
   *
   * @example
   * // How many calendar ISO weeks are between 6 July 2014 and 21 July 2014?
   * var result = differenceInCalendarISOWeeks(
   *   new Date(2014, 6, 21),
   *   new Date(2014, 6, 6)
   * )
   * //=> 3
   */
  function differenceInCalendarISOWeeks(dirtyDateLeft, dirtyDateRight) {
    var startOfISOWeekLeft = start_of_iso_week(dirtyDateLeft)
    var startOfISOWeekRight = start_of_iso_week(dirtyDateRight)

    var timestampLeft =
      startOfISOWeekLeft.getTime() -
      startOfISOWeekLeft.getTimezoneOffset() * MILLISECONDS_IN_MINUTE$4
    var timestampRight =
      startOfISOWeekRight.getTime() -
      startOfISOWeekRight.getTimezoneOffset() * MILLISECONDS_IN_MINUTE$4

    // Round the number of days to the nearest integer
    // because the number of milliseconds in a week is not constant
    // (e.g. it's different in the week of the daylight saving time clock shift)
    return Math.round((timestampLeft - timestampRight) / MILLISECONDS_IN_WEEK)
  }

  var difference_in_calendar_iso_weeks = differenceInCalendarISOWeeks

  /**
   * @category ISO Week-Numbering Year Helpers
   * @summary Get the number of calendar ISO week-numbering years between the given dates.
   *
   * @description
   * Get the number of calendar ISO week-numbering years between the given dates.
   *
   * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
   *
   * @param {Date|String|Number} dateLeft - the later date
   * @param {Date|String|Number} dateRight - the earlier date
   * @returns {Number} the number of calendar ISO week-numbering years
   *
   * @example
   * // How many calendar ISO week-numbering years are 1 January 2010 and 1 January 2012?
   * var result = differenceInCalendarISOYears(
   *   new Date(2012, 0, 1),
   *   new Date(2010, 0, 1)
   * )
   * //=> 2
   */
  function differenceInCalendarISOYears(dirtyDateLeft, dirtyDateRight) {
    return get_iso_year(dirtyDateLeft) - get_iso_year(dirtyDateRight)
  }

  var difference_in_calendar_iso_years = differenceInCalendarISOYears

  /**
   * @category Month Helpers
   * @summary Get the number of calendar months between the given dates.
   *
   * @description
   * Get the number of calendar months between the given dates.
   *
   * @param {Date|String|Number} dateLeft - the later date
   * @param {Date|String|Number} dateRight - the earlier date
   * @returns {Number} the number of calendar months
   *
   * @example
   * // How many calendar months are between 31 January 2014 and 1 September 2014?
   * var result = differenceInCalendarMonths(
   *   new Date(2014, 8, 1),
   *   new Date(2014, 0, 31)
   * )
   * //=> 8
   */
  function differenceInCalendarMonths(dirtyDateLeft, dirtyDateRight) {
    var dateLeft = parse_1(dirtyDateLeft)
    var dateRight = parse_1(dirtyDateRight)

    var yearDiff = dateLeft.getFullYear() - dateRight.getFullYear()
    var monthDiff = dateLeft.getMonth() - dateRight.getMonth()

    return yearDiff * 12 + monthDiff
  }

  var difference_in_calendar_months = differenceInCalendarMonths

  /**
   * @category Quarter Helpers
   * @summary Get the year quarter of the given date.
   *
   * @description
   * Get the year quarter of the given date.
   *
   * @param {Date|String|Number} date - the given date
   * @returns {Number} the quarter
   *
   * @example
   * // Which quarter is 2 July 2014?
   * var result = getQuarter(new Date(2014, 6, 2))
   * //=> 3
   */
  function getQuarter(dirtyDate) {
    var date = parse_1(dirtyDate)
    var quarter = Math.floor(date.getMonth() / 3) + 1
    return quarter
  }

  var get_quarter = getQuarter

  /**
   * @category Quarter Helpers
   * @summary Get the number of calendar quarters between the given dates.
   *
   * @description
   * Get the number of calendar quarters between the given dates.
   *
   * @param {Date|String|Number} dateLeft - the later date
   * @param {Date|String|Number} dateRight - the earlier date
   * @returns {Number} the number of calendar quarters
   *
   * @example
   * // How many calendar quarters are between 31 December 2013 and 2 July 2014?
   * var result = differenceInCalendarQuarters(
   *   new Date(2014, 6, 2),
   *   new Date(2013, 11, 31)
   * )
   * //=> 3
   */
  function differenceInCalendarQuarters(dirtyDateLeft, dirtyDateRight) {
    var dateLeft = parse_1(dirtyDateLeft)
    var dateRight = parse_1(dirtyDateRight)

    var yearDiff = dateLeft.getFullYear() - dateRight.getFullYear()
    var quarterDiff = get_quarter(dateLeft) - get_quarter(dateRight)

    return yearDiff * 4 + quarterDiff
  }

  var difference_in_calendar_quarters = differenceInCalendarQuarters

  var MILLISECONDS_IN_MINUTE$5 = 60000
  var MILLISECONDS_IN_WEEK$1 = 604800000

  /**
   * @category Week Helpers
   * @summary Get the number of calendar weeks between the given dates.
   *
   * @description
   * Get the number of calendar weeks between the given dates.
   *
   * @param {Date|String|Number} dateLeft - the later date
   * @param {Date|String|Number} dateRight - the earlier date
   * @param {Object} [options] - the object with options
   * @param {Number} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
   * @returns {Number} the number of calendar weeks
   *
   * @example
   * // How many calendar weeks are between 5 July 2014 and 20 July 2014?
   * var result = differenceInCalendarWeeks(
   *   new Date(2014, 6, 20),
   *   new Date(2014, 6, 5)
   * )
   * //=> 3
   *
   * @example
   * // If the week starts on Monday,
   * // how many calendar weeks are between 5 July 2014 and 20 July 2014?
   * var result = differenceInCalendarWeeks(
   *   new Date(2014, 6, 20),
   *   new Date(2014, 6, 5),
   *   {weekStartsOn: 1}
   * )
   * //=> 2
   */
  function differenceInCalendarWeeks(
    dirtyDateLeft,
    dirtyDateRight,
    dirtyOptions
  ) {
    var startOfWeekLeft = start_of_week(dirtyDateLeft, dirtyOptions)
    var startOfWeekRight = start_of_week(dirtyDateRight, dirtyOptions)

    var timestampLeft =
      startOfWeekLeft.getTime() -
      startOfWeekLeft.getTimezoneOffset() * MILLISECONDS_IN_MINUTE$5
    var timestampRight =
      startOfWeekRight.getTime() -
      startOfWeekRight.getTimezoneOffset() * MILLISECONDS_IN_MINUTE$5

    // Round the number of days to the nearest integer
    // because the number of milliseconds in a week is not constant
    // (e.g. it's different in the week of the daylight saving time clock shift)
    return Math.round((timestampLeft - timestampRight) / MILLISECONDS_IN_WEEK$1)
  }

  var difference_in_calendar_weeks = differenceInCalendarWeeks

  /**
   * @category Year Helpers
   * @summary Get the number of calendar years between the given dates.
   *
   * @description
   * Get the number of calendar years between the given dates.
   *
   * @param {Date|String|Number} dateLeft - the later date
   * @param {Date|String|Number} dateRight - the earlier date
   * @returns {Number} the number of calendar years
   *
   * @example
   * // How many calendar years are between 31 December 2013 and 11 February 2015?
   * var result = differenceInCalendarYears(
   *   new Date(2015, 1, 11),
   *   new Date(2013, 11, 31)
   * )
   * //=> 2
   */
  function differenceInCalendarYears(dirtyDateLeft, dirtyDateRight) {
    var dateLeft = parse_1(dirtyDateLeft)
    var dateRight = parse_1(dirtyDateRight)

    return dateLeft.getFullYear() - dateRight.getFullYear()
  }

  var difference_in_calendar_years = differenceInCalendarYears

  /**
   * @category Day Helpers
   * @summary Get the number of full days between the given dates.
   *
   * @description
   * Get the number of full days between the given dates.
   *
   * @param {Date|String|Number} dateLeft - the later date
   * @param {Date|String|Number} dateRight - the earlier date
   * @returns {Number} the number of full days
   *
   * @example
   * // How many full days are between
   * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
   * var result = differenceInDays(
   *   new Date(2012, 6, 2, 0, 0),
   *   new Date(2011, 6, 2, 23, 0)
   * )
   * //=> 365
   */
  function differenceInDays(dirtyDateLeft, dirtyDateRight) {
    var dateLeft = parse_1(dirtyDateLeft)
    var dateRight = parse_1(dirtyDateRight)

    var sign = compare_asc(dateLeft, dateRight)
    var difference = Math.abs(difference_in_calendar_days(dateLeft, dateRight))
    dateLeft.setDate(dateLeft.getDate() - sign * difference)

    // Math.abs(diff in full days - diff in calendar days) === 1 if last calendar day is not full
    // If so, result must be decreased by 1 in absolute value
    var isLastDayNotFull = compare_asc(dateLeft, dateRight) === -sign
    return sign * (difference - isLastDayNotFull)
  }

  var difference_in_days = differenceInDays

  /**
   * @category Millisecond Helpers
   * @summary Get the number of milliseconds between the given dates.
   *
   * @description
   * Get the number of milliseconds between the given dates.
   *
   * @param {Date|String|Number} dateLeft - the later date
   * @param {Date|String|Number} dateRight - the earlier date
   * @returns {Number} the number of milliseconds
   *
   * @example
   * // How many milliseconds are between
   * // 2 July 2014 12:30:20.600 and 2 July 2014 12:30:21.700?
   * var result = differenceInMilliseconds(
   *   new Date(2014, 6, 2, 12, 30, 21, 700),
   *   new Date(2014, 6, 2, 12, 30, 20, 600)
   * )
   * //=> 1100
   */
  function differenceInMilliseconds(dirtyDateLeft, dirtyDateRight) {
    var dateLeft = parse_1(dirtyDateLeft)
    var dateRight = parse_1(dirtyDateRight)
    return dateLeft.getTime() - dateRight.getTime()
  }

  var difference_in_milliseconds = differenceInMilliseconds

  var MILLISECONDS_IN_HOUR$2 = 3600000

  /**
   * @category Hour Helpers
   * @summary Get the number of hours between the given dates.
   *
   * @description
   * Get the number of hours between the given dates.
   *
   * @param {Date|String|Number} dateLeft - the later date
   * @param {Date|String|Number} dateRight - the earlier date
   * @returns {Number} the number of hours
   *
   * @example
   * // How many hours are between 2 July 2014 06:50:00 and 2 July 2014 19:00:00?
   * var result = differenceInHours(
   *   new Date(2014, 6, 2, 19, 0),
   *   new Date(2014, 6, 2, 6, 50)
   * )
   * //=> 12
   */
  function differenceInHours(dirtyDateLeft, dirtyDateRight) {
    var diff =
      difference_in_milliseconds(dirtyDateLeft, dirtyDateRight) /
      MILLISECONDS_IN_HOUR$2
    return diff > 0 ? Math.floor(diff) : Math.ceil(diff)
  }

  var difference_in_hours = differenceInHours

  /**
   * @category ISO Week-Numbering Year Helpers
   * @summary Subtract the specified number of ISO week-numbering years from the given date.
   *
   * @description
   * Subtract the specified number of ISO week-numbering years from the given date.
   *
   * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
   *
   * @param {Date|String|Number} date - the date to be changed
   * @param {Number} amount - the amount of ISO week-numbering years to be subtracted
   * @returns {Date} the new date with the ISO week-numbering years subtracted
   *
   * @example
   * // Subtract 5 ISO week-numbering years from 1 September 2014:
   * var result = subISOYears(new Date(2014, 8, 1), 5)
   * //=> Mon Aug 31 2009 00:00:00
   */
  function subISOYears(dirtyDate, dirtyAmount) {
    var amount = Number(dirtyAmount)
    return add_iso_years(dirtyDate, -amount)
  }

  var sub_iso_years = subISOYears

  /**
   * @category ISO Week-Numbering Year Helpers
   * @summary Get the number of full ISO week-numbering years between the given dates.
   *
   * @description
   * Get the number of full ISO week-numbering years between the given dates.
   *
   * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
   *
   * @param {Date|String|Number} dateLeft - the later date
   * @param {Date|String|Number} dateRight - the earlier date
   * @returns {Number} the number of full ISO week-numbering years
   *
   * @example
   * // How many full ISO week-numbering years are between 1 January 2010 and 1 January 2012?
   * var result = differenceInISOYears(
   *   new Date(2012, 0, 1),
   *   new Date(2010, 0, 1)
   * )
   * //=> 1
   */
  function differenceInISOYears(dirtyDateLeft, dirtyDateRight) {
    var dateLeft = parse_1(dirtyDateLeft)
    var dateRight = parse_1(dirtyDateRight)

    var sign = compare_asc(dateLeft, dateRight)
    var difference = Math.abs(
      difference_in_calendar_iso_years(dateLeft, dateRight)
    )
    dateLeft = sub_iso_years(dateLeft, sign * difference)

    // Math.abs(diff in full ISO years - diff in calendar ISO years) === 1
    // if last calendar ISO year is not full
    // If so, result must be decreased by 1 in absolute value
    var isLastISOYearNotFull = compare_asc(dateLeft, dateRight) === -sign
    return sign * (difference - isLastISOYearNotFull)
  }

  var difference_in_iso_years = differenceInISOYears

  var MILLISECONDS_IN_MINUTE$6 = 60000

  /**
   * @category Minute Helpers
   * @summary Get the number of minutes between the given dates.
   *
   * @description
   * Get the number of minutes between the given dates.
   *
   * @param {Date|String|Number} dateLeft - the later date
   * @param {Date|String|Number} dateRight - the earlier date
   * @returns {Number} the number of minutes
   *
   * @example
   * // How many minutes are between 2 July 2014 12:07:59 and 2 July 2014 12:20:00?
   * var result = differenceInMinutes(
   *   new Date(2014, 6, 2, 12, 20, 0),
   *   new Date(2014, 6, 2, 12, 7, 59)
   * )
   * //=> 12
   */
  function differenceInMinutes(dirtyDateLeft, dirtyDateRight) {
    var diff =
      difference_in_milliseconds(dirtyDateLeft, dirtyDateRight) /
      MILLISECONDS_IN_MINUTE$6
    return diff > 0 ? Math.floor(diff) : Math.ceil(diff)
  }

  var difference_in_minutes = differenceInMinutes

  /**
   * @category Month Helpers
   * @summary Get the number of full months between the given dates.
   *
   * @description
   * Get the number of full months between the given dates.
   *
   * @param {Date|String|Number} dateLeft - the later date
   * @param {Date|String|Number} dateRight - the earlier date
   * @returns {Number} the number of full months
   *
   * @example
   * // How many full months are between 31 January 2014 and 1 September 2014?
   * var result = differenceInMonths(
   *   new Date(2014, 8, 1),
   *   new Date(2014, 0, 31)
   * )
   * //=> 7
   */
  function differenceInMonths(dirtyDateLeft, dirtyDateRight) {
    var dateLeft = parse_1(dirtyDateLeft)
    var dateRight = parse_1(dirtyDateRight)

    var sign = compare_asc(dateLeft, dateRight)
    var difference = Math.abs(
      difference_in_calendar_months(dateLeft, dateRight)
    )
    dateLeft.setMonth(dateLeft.getMonth() - sign * difference)

    // Math.abs(diff in full months - diff in calendar months) === 1 if last calendar month is not full
    // If so, result must be decreased by 1 in absolute value
    var isLastMonthNotFull = compare_asc(dateLeft, dateRight) === -sign
    return sign * (difference - isLastMonthNotFull)
  }

  var difference_in_months = differenceInMonths

  /**
   * @category Quarter Helpers
   * @summary Get the number of full quarters between the given dates.
   *
   * @description
   * Get the number of full quarters between the given dates.
   *
   * @param {Date|String|Number} dateLeft - the later date
   * @param {Date|String|Number} dateRight - the earlier date
   * @returns {Number} the number of full quarters
   *
   * @example
   * // How many full quarters are between 31 December 2013 and 2 July 2014?
   * var result = differenceInQuarters(
   *   new Date(2014, 6, 2),
   *   new Date(2013, 11, 31)
   * )
   * //=> 2
   */
  function differenceInQuarters(dirtyDateLeft, dirtyDateRight) {
    var diff = difference_in_months(dirtyDateLeft, dirtyDateRight) / 3
    return diff > 0 ? Math.floor(diff) : Math.ceil(diff)
  }

  var difference_in_quarters = differenceInQuarters

  /**
   * @category Second Helpers
   * @summary Get the number of seconds between the given dates.
   *
   * @description
   * Get the number of seconds between the given dates.
   *
   * @param {Date|String|Number} dateLeft - the later date
   * @param {Date|String|Number} dateRight - the earlier date
   * @returns {Number} the number of seconds
   *
   * @example
   * // How many seconds are between
   * // 2 July 2014 12:30:07.999 and 2 July 2014 12:30:20.000?
   * var result = differenceInSeconds(
   *   new Date(2014, 6, 2, 12, 30, 20, 0),
   *   new Date(2014, 6, 2, 12, 30, 7, 999)
   * )
   * //=> 12
   */
  function differenceInSeconds(dirtyDateLeft, dirtyDateRight) {
    var diff = difference_in_milliseconds(dirtyDateLeft, dirtyDateRight) / 1000
    return diff > 0 ? Math.floor(diff) : Math.ceil(diff)
  }

  var difference_in_seconds = differenceInSeconds

  /**
   * @category Week Helpers
   * @summary Get the number of full weeks between the given dates.
   *
   * @description
   * Get the number of full weeks between the given dates.
   *
   * @param {Date|String|Number} dateLeft - the later date
   * @param {Date|String|Number} dateRight - the earlier date
   * @returns {Number} the number of full weeks
   *
   * @example
   * // How many full weeks are between 5 July 2014 and 20 July 2014?
   * var result = differenceInWeeks(
   *   new Date(2014, 6, 20),
   *   new Date(2014, 6, 5)
   * )
   * //=> 2
   */
  function differenceInWeeks(dirtyDateLeft, dirtyDateRight) {
    var diff = difference_in_days(dirtyDateLeft, dirtyDateRight) / 7
    return diff > 0 ? Math.floor(diff) : Math.ceil(diff)
  }

  var difference_in_weeks = differenceInWeeks

  /**
   * @category Year Helpers
   * @summary Get the number of full years between the given dates.
   *
   * @description
   * Get the number of full years between the given dates.
   *
   * @param {Date|String|Number} dateLeft - the later date
   * @param {Date|String|Number} dateRight - the earlier date
   * @returns {Number} the number of full years
   *
   * @example
   * // How many full years are between 31 December 2013 and 11 February 2015?
   * var result = differenceInYears(
   *   new Date(2015, 1, 11),
   *   new Date(2013, 11, 31)
   * )
   * //=> 1
   */
  function differenceInYears(dirtyDateLeft, dirtyDateRight) {
    var dateLeft = parse_1(dirtyDateLeft)
    var dateRight = parse_1(dirtyDateRight)

    var sign = compare_asc(dateLeft, dateRight)
    var difference = Math.abs(difference_in_calendar_years(dateLeft, dateRight))
    dateLeft.setFullYear(dateLeft.getFullYear() - sign * difference)

    // Math.abs(diff in full years - diff in calendar years) === 1 if last calendar year is not full
    // If so, result must be decreased by 1 in absolute value
    var isLastYearNotFull = compare_asc(dateLeft, dateRight) === -sign
    return sign * (difference - isLastYearNotFull)
  }

  var difference_in_years = differenceInYears

  function buildDistanceInWordsLocale() {
    var distanceInWordsLocale = {
      lessThanXSeconds: {
        one: 'less than a second',
        other: 'less than {{count}} seconds',
      },

      xSeconds: {
        one: '1 second',
        other: '{{count}} seconds',
      },

      halfAMinute: 'half a minute',

      lessThanXMinutes: {
        one: 'less than a minute',
        other: 'less than {{count}} minutes',
      },

      xMinutes: {
        one: '1 minute',
        other: '{{count}} minutes',
      },

      aboutXHours: {
        one: 'about 1 hour',
        other: 'about {{count}} hours',
      },

      xHours: {
        one: '1 hour',
        other: '{{count}} hours',
      },

      xDays: {
        one: '1 day',
        other: '{{count}} days',
      },

      aboutXMonths: {
        one: 'about 1 month',
        other: 'about {{count}} months',
      },

      xMonths: {
        one: '1 month',
        other: '{{count}} months',
      },

      aboutXYears: {
        one: 'about 1 year',
        other: 'about {{count}} years',
      },

      xYears: {
        one: '1 year',
        other: '{{count}} years',
      },

      overXYears: {
        one: 'over 1 year',
        other: 'over {{count}} years',
      },

      almostXYears: {
        one: 'almost 1 year',
        other: 'almost {{count}} years',
      },
    }

    function localize(token, count, options) {
      options = options || {}

      var result
      if (typeof distanceInWordsLocale[token] === 'string') {
        result = distanceInWordsLocale[token]
      } else if (count === 1) {
        result = distanceInWordsLocale[token].one
      } else {
        result = distanceInWordsLocale[token].other.replace('{{count}}', count)
      }

      if (options.addSuffix) {
        if (options.comparison > 0) {
          return 'in ' + result
        } else {
          return result + ' ago'
        }
      }

      return result
    }

    return {
      localize: localize,
    }
  }

  var build_distance_in_words_locale = buildDistanceInWordsLocale

  var commonFormatterKeys = [
    'M',
    'MM',
    'Q',
    'D',
    'DD',
    'DDD',
    'DDDD',
    'd',
    'E',
    'W',
    'WW',
    'YY',
    'YYYY',
    'GG',
    'GGGG',
    'H',
    'HH',
    'h',
    'hh',
    'm',
    'mm',
    's',
    'ss',
    'S',
    'SS',
    'SSS',
    'Z',
    'ZZ',
    'X',
    'x',
  ]

  function buildFormattingTokensRegExp(formatters) {
    var formatterKeys = []
    for (var key in formatters) {
      if (formatters.hasOwnProperty(key)) {
        formatterKeys.push(key)
      }
    }

    var formattingTokens = commonFormatterKeys
      .concat(formatterKeys)
      .sort()
      .reverse()
    var formattingTokensRegExp = new RegExp(
      '(\\[[^\\[]*\\])|(\\\\)?' + '(' + formattingTokens.join('|') + '|.)',
      'g'
    )

    return formattingTokensRegExp
  }

  var build_formatting_tokens_reg_exp = buildFormattingTokensRegExp

  function buildFormatLocale() {
    // Note: in English, the names of days of the week and months are capitalized.
    // If you are making a new locale based on this one, check if the same is true for the language you're working on.
    // Generally, formatted dates should look like they are in the middle of a sentence,
    // e.g. in Spanish language the weekdays and months should be in the lowercase.
    var months3char = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ]
    var monthsFull = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ]
    var weekdays2char = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
    var weekdays3char = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    var weekdaysFull = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ]
    var meridiemUppercase = ['AM', 'PM']
    var meridiemLowercase = ['am', 'pm']
    var meridiemFull = ['a.m.', 'p.m.']

    var formatters = {
      // Month: Jan, Feb, ..., Dec
      MMM: function(date) {
        return months3char[date.getMonth()]
      },

      // Month: January, February, ..., December
      MMMM: function(date) {
        return monthsFull[date.getMonth()]
      },

      // Day of week: Su, Mo, ..., Sa
      dd: function(date) {
        return weekdays2char[date.getDay()]
      },

      // Day of week: Sun, Mon, ..., Sat
      ddd: function(date) {
        return weekdays3char[date.getDay()]
      },

      // Day of week: Sunday, Monday, ..., Saturday
      dddd: function(date) {
        return weekdaysFull[date.getDay()]
      },

      // AM, PM
      A: function(date) {
        return date.getHours() / 12 >= 1
          ? meridiemUppercase[1]
          : meridiemUppercase[0]
      },

      // am, pm
      a: function(date) {
        return date.getHours() / 12 >= 1
          ? meridiemLowercase[1]
          : meridiemLowercase[0]
      },

      // a.m., p.m.
      aa: function(date) {
        return date.getHours() / 12 >= 1 ? meridiemFull[1] : meridiemFull[0]
      },
    }

    // Generate ordinal version of formatters: M -> Mo, D -> Do, etc.
    var ordinalFormatters = ['M', 'D', 'DDD', 'd', 'Q', 'W']
    ordinalFormatters.forEach(function(formatterToken) {
      formatters[formatterToken + 'o'] = function(date, formatters) {
        return ordinal(formatters[formatterToken](date))
      }
    })

    return {
      formatters: formatters,
      formattingTokensRegExp: build_formatting_tokens_reg_exp(formatters),
    }
  }

  function ordinal(number) {
    var rem100 = number % 100
    if (rem100 > 20 || rem100 < 10) {
      switch (rem100 % 10) {
        case 1:
          return number + 'st'
        case 2:
          return number + 'nd'
        case 3:
          return number + 'rd'
      }
    }
    return number + 'th'
  }

  var build_format_locale = buildFormatLocale

  /**
   * @category Locales
   * @summary English locale.
   */
  var en = {
    distanceInWords: build_distance_in_words_locale(),
    format: build_format_locale(),
  }

  var MINUTES_IN_DAY = 1440
  var MINUTES_IN_ALMOST_TWO_DAYS = 2520
  var MINUTES_IN_MONTH = 43200
  var MINUTES_IN_TWO_MONTHS = 86400

  /**
   * @category Common Helpers
   * @summary Return the distance between the given dates in words.
   *
   * @description
   * Return the distance between the given dates in words.
   *
   * | Distance between dates                                            | Result              |
   * |-------------------------------------------------------------------|---------------------|
   * | 0 ... 30 secs                                                     | less than a minute  |
   * | 30 secs ... 1 min 30 secs                                         | 1 minute            |
   * | 1 min 30 secs ... 44 mins 30 secs                                 | [2..44] minutes     |
   * | 44 mins ... 30 secs ... 89 mins 30 secs                           | about 1 hour        |
   * | 89 mins 30 secs ... 23 hrs 59 mins 30 secs                        | about [2..24] hours |
   * | 23 hrs 59 mins 30 secs ... 41 hrs 59 mins 30 secs                 | 1 day               |
   * | 41 hrs 59 mins 30 secs ... 29 days 23 hrs 59 mins 30 secs         | [2..30] days        |
   * | 29 days 23 hrs 59 mins 30 secs ... 44 days 23 hrs 59 mins 30 secs | about 1 month       |
   * | 44 days 23 hrs 59 mins 30 secs ... 59 days 23 hrs 59 mins 30 secs | about 2 months      |
   * | 59 days 23 hrs 59 mins 30 secs ... 1 yr                           | [2..12] months      |
   * | 1 yr ... 1 yr 3 months                                            | about 1 year        |
   * | 1 yr 3 months ... 1 yr 9 month s                                  | over 1 year         |
   * | 1 yr 9 months ... 2 yrs                                           | almost 2 years      |
   * | N yrs ... N yrs 3 months                                          | about N years       |
   * | N yrs 3 months ... N yrs 9 months                                 | over N years        |
   * | N yrs 9 months ... N+1 yrs                                        | almost N+1 years    |
   *
   * With `options.includeSeconds == true`:
   * | Distance between dates | Result               |
   * |------------------------|----------------------|
   * | 0 secs ... 5 secs      | less than 5 seconds  |
   * | 5 secs ... 10 secs     | less than 10 seconds |
   * | 10 secs ... 20 secs    | less than 20 seconds |
   * | 20 secs ... 40 secs    | half a minute        |
   * | 40 secs ... 60 secs    | less than a minute   |
   * | 60 secs ... 90 secs    | 1 minute             |
   *
   * @param {Date|String|Number} dateToCompare - the date to compare with
   * @param {Date|String|Number} date - the other date
   * @param {Object} [options] - the object with options
   * @param {Boolean} [options.includeSeconds=false] - distances less than a minute are more detailed
   * @param {Boolean} [options.addSuffix=false] - result indicates if the second date is earlier or later than the first
   * @param {Object} [options.locale=enLocale] - the locale object
   * @returns {String} the distance in words
   *
   * @example
   * // What is the distance between 2 July 2014 and 1 January 2015?
   * var result = distanceInWords(
   *   new Date(2014, 6, 2),
   *   new Date(2015, 0, 1)
   * )
   * //=> '6 months'
   *
   * @example
   * // What is the distance between 1 January 2015 00:00:15
   * // and 1 January 2015 00:00:00, including seconds?
   * var result = distanceInWords(
   *   new Date(2015, 0, 1, 0, 0, 15),
   *   new Date(2015, 0, 1, 0, 0, 0),
   *   {includeSeconds: true}
   * )
   * //=> 'less than 20 seconds'
   *
   * @example
   * // What is the distance from 1 January 2016
   * // to 1 January 2015, with a suffix?
   * var result = distanceInWords(
   *   new Date(2016, 0, 1),
   *   new Date(2015, 0, 1),
   *   {addSuffix: true}
   * )
   * //=> 'about 1 year ago'
   *
   * @example
   * // What is the distance between 1 August 2016 and 1 January 2015 in Esperanto?
   * var eoLocale = require('date-fns/locale/eo')
   * var result = distanceInWords(
   *   new Date(2016, 7, 1),
   *   new Date(2015, 0, 1),
   *   {locale: eoLocale}
   * )
   * //=> 'pli ol 1 jaro'
   */
  function distanceInWords(dirtyDateToCompare, dirtyDate, dirtyOptions) {
    var options = dirtyOptions || {}

    var comparison = compare_desc(dirtyDateToCompare, dirtyDate)

    var locale = options.locale
    var localize = en.distanceInWords.localize
    if (locale && locale.distanceInWords && locale.distanceInWords.localize) {
      localize = locale.distanceInWords.localize
    }

    var localizeOptions = {
      addSuffix: Boolean(options.addSuffix),
      comparison: comparison,
    }

    var dateLeft, dateRight
    if (comparison > 0) {
      dateLeft = parse_1(dirtyDateToCompare)
      dateRight = parse_1(dirtyDate)
    } else {
      dateLeft = parse_1(dirtyDate)
      dateRight = parse_1(dirtyDateToCompare)
    }

    var seconds = difference_in_seconds(dateRight, dateLeft)
    var offset = dateRight.getTimezoneOffset() - dateLeft.getTimezoneOffset()
    var minutes = Math.round(seconds / 60) - offset
    var months

    // 0 up to 2 mins
    if (minutes < 2) {
      if (options.includeSeconds) {
        if (seconds < 5) {
          return localize('lessThanXSeconds', 5, localizeOptions)
        } else if (seconds < 10) {
          return localize('lessThanXSeconds', 10, localizeOptions)
        } else if (seconds < 20) {
          return localize('lessThanXSeconds', 20, localizeOptions)
        } else if (seconds < 40) {
          return localize('halfAMinute', null, localizeOptions)
        } else if (seconds < 60) {
          return localize('lessThanXMinutes', 1, localizeOptions)
        } else {
          return localize('xMinutes', 1, localizeOptions)
        }
      } else {
        if (minutes === 0) {
          return localize('lessThanXMinutes', 1, localizeOptions)
        } else {
          return localize('xMinutes', minutes, localizeOptions)
        }
      }

      // 2 mins up to 0.75 hrs
    } else if (minutes < 45) {
      return localize('xMinutes', minutes, localizeOptions)

      // 0.75 hrs up to 1.5 hrs
    } else if (minutes < 90) {
      return localize('aboutXHours', 1, localizeOptions)

      // 1.5 hrs up to 24 hrs
    } else if (minutes < MINUTES_IN_DAY) {
      var hours = Math.round(minutes / 60)
      return localize('aboutXHours', hours, localizeOptions)

      // 1 day up to 1.75 days
    } else if (minutes < MINUTES_IN_ALMOST_TWO_DAYS) {
      return localize('xDays', 1, localizeOptions)

      // 1.75 days up to 30 days
    } else if (minutes < MINUTES_IN_MONTH) {
      var days = Math.round(minutes / MINUTES_IN_DAY)
      return localize('xDays', days, localizeOptions)

      // 1 month up to 2 months
    } else if (minutes < MINUTES_IN_TWO_MONTHS) {
      months = Math.round(minutes / MINUTES_IN_MONTH)
      return localize('aboutXMonths', months, localizeOptions)
    }

    months = difference_in_months(dateRight, dateLeft)

    // 2 months up to 12 months
    if (months < 12) {
      var nearestMonth = Math.round(minutes / MINUTES_IN_MONTH)
      return localize('xMonths', nearestMonth, localizeOptions)

      // 1 year up to max Date
    } else {
      var monthsSinceStartOfYear = months % 12
      var years = Math.floor(months / 12)

      // N years up to 1 years 3 months
      if (monthsSinceStartOfYear < 3) {
        return localize('aboutXYears', years, localizeOptions)

        // N years 3 months up to N years 9 months
      } else if (monthsSinceStartOfYear < 9) {
        return localize('overXYears', years, localizeOptions)

        // N years 9 months up to N year 12 months
      } else {
        return localize('almostXYears', years + 1, localizeOptions)
      }
    }
  }

  var distance_in_words = distanceInWords

  var MINUTES_IN_DAY$1 = 1440
  var MINUTES_IN_MONTH$1 = 43200
  var MINUTES_IN_YEAR = 525600

  /**
   * @category Common Helpers
   * @summary Return the distance between the given dates in words.
   *
   * @description
   * Return the distance between the given dates in words, using strict units.
   * This is like `distanceInWords`, but does not use helpers like 'almost', 'over',
   * 'less than' and the like.
   *
   * | Distance between dates | Result              |
   * |------------------------|---------------------|
   * | 0 ... 59 secs          | [0..59] seconds     |
   * | 1 ... 59 mins          | [1..59] minutes     |
   * | 1 ... 23 hrs           | [1..23] hours       |
   * | 1 ... 29 days          | [1..29] days        |
   * | 1 ... 11 months        | [1..11] months      |
   * | 1 ... N years          | [1..N]  years       |
   *
   * @param {Date|String|Number} dateToCompare - the date to compare with
   * @param {Date|String|Number} date - the other date
   * @param {Object} [options] - the object with options
   * @param {Boolean} [options.addSuffix=false] - result indicates if the second date is earlier or later than the first
   * @param {'s'|'m'|'h'|'d'|'M'|'Y'} [options.unit] - if specified, will force a unit
   * @param {'floor'|'ceil'|'round'} [options.partialMethod='floor'] - which way to round partial units
   * @param {Object} [options.locale=enLocale] - the locale object
   * @returns {String} the distance in words
   *
   * @example
   * // What is the distance between 2 July 2014 and 1 January 2015?
   * var result = distanceInWordsStrict(
   *   new Date(2014, 6, 2),
   *   new Date(2015, 0, 2)
   * )
   * //=> '6 months'
   *
   * @example
   * // What is the distance between 1 January 2015 00:00:15
   * // and 1 January 2015 00:00:00?
   * var result = distanceInWordsStrict(
   *   new Date(2015, 0, 1, 0, 0, 15),
   *   new Date(2015, 0, 1, 0, 0, 0),
   * )
   * //=> '15 seconds'
   *
   * @example
   * // What is the distance from 1 January 2016
   * // to 1 January 2015, with a suffix?
   * var result = distanceInWordsStrict(
   *   new Date(2016, 0, 1),
   *   new Date(2015, 0, 1),
   *   {addSuffix: true}
   * )
   * //=> '1 year ago'
   *
   * @example
   * // What is the distance from 1 January 2016
   * // to 1 January 2015, in minutes?
   * var result = distanceInWordsStrict(
   *   new Date(2016, 0, 1),
   *   new Date(2015, 0, 1),
   *   {unit: 'm'}
   * )
   * //=> '525600 minutes'
   *
   * @example
   * // What is the distance from 1 January 2016
   * // to 28 January 2015, in months, rounded up?
   * var result = distanceInWordsStrict(
   *   new Date(2015, 0, 28),
   *   new Date(2015, 0, 1),
   *   {unit: 'M', partialMethod: 'ceil'}
   * )
   * //=> '1 month'
   *
   * @example
   * // What is the distance between 1 August 2016 and 1 January 2015 in Esperanto?
   * var eoLocale = require('date-fns/locale/eo')
   * var result = distanceInWordsStrict(
   *   new Date(2016, 7, 1),
   *   new Date(2015, 0, 1),
   *   {locale: eoLocale}
   * )
   * //=> '1 jaro'
   */
  function distanceInWordsStrict(dirtyDateToCompare, dirtyDate, dirtyOptions) {
    var options = dirtyOptions || {}

    var comparison = compare_desc(dirtyDateToCompare, dirtyDate)

    var locale = options.locale
    var localize = en.distanceInWords.localize
    if (locale && locale.distanceInWords && locale.distanceInWords.localize) {
      localize = locale.distanceInWords.localize
    }

    var localizeOptions = {
      addSuffix: Boolean(options.addSuffix),
      comparison: comparison,
    }

    var dateLeft, dateRight
    if (comparison > 0) {
      dateLeft = parse_1(dirtyDateToCompare)
      dateRight = parse_1(dirtyDate)
    } else {
      dateLeft = parse_1(dirtyDate)
      dateRight = parse_1(dirtyDateToCompare)
    }

    var unit
    var mathPartial =
      Math[options.partialMethod ? String(options.partialMethod) : 'floor']
    var seconds = difference_in_seconds(dateRight, dateLeft)
    var offset = dateRight.getTimezoneOffset() - dateLeft.getTimezoneOffset()
    var minutes = mathPartial(seconds / 60) - offset
    var hours, days, months, years

    if (options.unit) {
      unit = String(options.unit)
    } else {
      if (minutes < 1) {
        unit = 's'
      } else if (minutes < 60) {
        unit = 'm'
      } else if (minutes < MINUTES_IN_DAY$1) {
        unit = 'h'
      } else if (minutes < MINUTES_IN_MONTH$1) {
        unit = 'd'
      } else if (minutes < MINUTES_IN_YEAR) {
        unit = 'M'
      } else {
        unit = 'Y'
      }
    }

    // 0 up to 60 seconds
    if (unit === 's') {
      return localize('xSeconds', seconds, localizeOptions)

      // 1 up to 60 mins
    } else if (unit === 'm') {
      return localize('xMinutes', minutes, localizeOptions)

      // 1 up to 24 hours
    } else if (unit === 'h') {
      hours = mathPartial(minutes / 60)
      return localize('xHours', hours, localizeOptions)

      // 1 up to 30 days
    } else if (unit === 'd') {
      days = mathPartial(minutes / MINUTES_IN_DAY$1)
      return localize('xDays', days, localizeOptions)

      // 1 up to 12 months
    } else if (unit === 'M') {
      months = mathPartial(minutes / MINUTES_IN_MONTH$1)
      return localize('xMonths', months, localizeOptions)

      // 1 year up to max Date
    } else if (unit === 'Y') {
      years = mathPartial(minutes / MINUTES_IN_YEAR)
      return localize('xYears', years, localizeOptions)
    }

    throw new Error('Unknown unit: ' + unit)
  }

  var distance_in_words_strict = distanceInWordsStrict

  /**
   * @category Common Helpers
   * @summary Return the distance between the given date and now in words.
   *
   * @description
   * Return the distance between the given date and now in words.
   *
   * | Distance to now                                                   | Result              |
   * |-------------------------------------------------------------------|---------------------|
   * | 0 ... 30 secs                                                     | less than a minute  |
   * | 30 secs ... 1 min 30 secs                                         | 1 minute            |
   * | 1 min 30 secs ... 44 mins 30 secs                                 | [2..44] minutes     |
   * | 44 mins ... 30 secs ... 89 mins 30 secs                           | about 1 hour        |
   * | 89 mins 30 secs ... 23 hrs 59 mins 30 secs                        | about [2..24] hours |
   * | 23 hrs 59 mins 30 secs ... 41 hrs 59 mins 30 secs                 | 1 day               |
   * | 41 hrs 59 mins 30 secs ... 29 days 23 hrs 59 mins 30 secs         | [2..30] days        |
   * | 29 days 23 hrs 59 mins 30 secs ... 44 days 23 hrs 59 mins 30 secs | about 1 month       |
   * | 44 days 23 hrs 59 mins 30 secs ... 59 days 23 hrs 59 mins 30 secs | about 2 months      |
   * | 59 days 23 hrs 59 mins 30 secs ... 1 yr                           | [2..12] months      |
   * | 1 yr ... 1 yr 3 months                                            | about 1 year        |
   * | 1 yr 3 months ... 1 yr 9 month s                                  | over 1 year         |
   * | 1 yr 9 months ... 2 yrs                                           | almost 2 years      |
   * | N yrs ... N yrs 3 months                                          | about N years       |
   * | N yrs 3 months ... N yrs 9 months                                 | over N years        |
   * | N yrs 9 months ... N+1 yrs                                        | almost N+1 years    |
   *
   * With `options.includeSeconds == true`:
   * | Distance to now     | Result               |
   * |---------------------|----------------------|
   * | 0 secs ... 5 secs   | less than 5 seconds  |
   * | 5 secs ... 10 secs  | less than 10 seconds |
   * | 10 secs ... 20 secs | less than 20 seconds |
   * | 20 secs ... 40 secs | half a minute        |
   * | 40 secs ... 60 secs | less than a minute   |
   * | 60 secs ... 90 secs | 1 minute             |
   *
   * @param {Date|String|Number} date - the given date
   * @param {Object} [options] - the object with options
   * @param {Boolean} [options.includeSeconds=false] - distances less than a minute are more detailed
   * @param {Boolean} [options.addSuffix=false] - result specifies if the second date is earlier or later than the first
   * @param {Object} [options.locale=enLocale] - the locale object
   * @returns {String} the distance in words
   *
   * @example
   * // If today is 1 January 2015, what is the distance to 2 July 2014?
   * var result = distanceInWordsToNow(
   *   new Date(2014, 6, 2)
   * )
   * //=> '6 months'
   *
   * @example
   * // If now is 1 January 2015 00:00:00,
   * // what is the distance to 1 January 2015 00:00:15, including seconds?
   * var result = distanceInWordsToNow(
   *   new Date(2015, 0, 1, 0, 0, 15),
   *   {includeSeconds: true}
   * )
   * //=> 'less than 20 seconds'
   *
   * @example
   * // If today is 1 January 2015,
   * // what is the distance to 1 January 2016, with a suffix?
   * var result = distanceInWordsToNow(
   *   new Date(2016, 0, 1),
   *   {addSuffix: true}
   * )
   * //=> 'in about 1 year'
   *
   * @example
   * // If today is 1 January 2015,
   * // what is the distance to 1 August 2016 in Esperanto?
   * var eoLocale = require('date-fns/locale/eo')
   * var result = distanceInWordsToNow(
   *   new Date(2016, 7, 1),
   *   {locale: eoLocale}
   * )
   * //=> 'pli ol 1 jaro'
   */
  function distanceInWordsToNow(dirtyDate, dirtyOptions) {
    return distance_in_words(Date.now(), dirtyDate, dirtyOptions)
  }

  var distance_in_words_to_now = distanceInWordsToNow

  /**
   * @category Day Helpers
   * @summary Return the array of dates within the specified range.
   *
   * @description
   * Return the array of dates within the specified range.
   *
   * @param {Date|String|Number} startDate - the first date
   * @param {Date|String|Number} endDate - the last date
   * @param {Number} [step=1] - the step between each day
   * @returns {Date[]} the array with starts of days from the day of startDate to the day of endDate
   * @throws {Error} startDate cannot be after endDate
   *
   * @example
   * // Each day between 6 October 2014 and 10 October 2014:
   * var result = eachDay(
   *   new Date(2014, 9, 6),
   *   new Date(2014, 9, 10)
   * )
   * //=> [
   * //   Mon Oct 06 2014 00:00:00,
   * //   Tue Oct 07 2014 00:00:00,
   * //   Wed Oct 08 2014 00:00:00,
   * //   Thu Oct 09 2014 00:00:00,
   * //   Fri Oct 10 2014 00:00:00
   * // ]
   */
  function eachDay(dirtyStartDate, dirtyEndDate, dirtyStep) {
    var startDate = parse_1(dirtyStartDate)
    var endDate = parse_1(dirtyEndDate)
    var step = dirtyStep !== undefined ? dirtyStep : 1

    var endTime = endDate.getTime()

    if (startDate.getTime() > endTime) {
      throw new Error('The first date cannot be after the second date')
    }

    var dates = []

    var currentDate = startDate
    currentDate.setHours(0, 0, 0, 0)

    while (currentDate.getTime() <= endTime) {
      dates.push(parse_1(currentDate))
      currentDate.setDate(currentDate.getDate() + step)
    }

    return dates
  }

  var each_day = eachDay

  /**
   * @category Day Helpers
   * @summary Return the end of a day for the given date.
   *
   * @description
   * Return the end of a day for the given date.
   * The result will be in the local timezone.
   *
   * @param {Date|String|Number} date - the original date
   * @returns {Date} the end of a day
   *
   * @example
   * // The end of a day for 2 September 2014 11:55:00:
   * var result = endOfDay(new Date(2014, 8, 2, 11, 55, 0))
   * //=> Tue Sep 02 2014 23:59:59.999
   */
  function endOfDay(dirtyDate) {
    var date = parse_1(dirtyDate)
    date.setHours(23, 59, 59, 999)
    return date
  }

  var end_of_day = endOfDay

  /**
   * @category Hour Helpers
   * @summary Return the end of an hour for the given date.
   *
   * @description
   * Return the end of an hour for the given date.
   * The result will be in the local timezone.
   *
   * @param {Date|String|Number} date - the original date
   * @returns {Date} the end of an hour
   *
   * @example
   * // The end of an hour for 2 September 2014 11:55:00:
   * var result = endOfHour(new Date(2014, 8, 2, 11, 55))
   * //=> Tue Sep 02 2014 11:59:59.999
   */
  function endOfHour(dirtyDate) {
    var date = parse_1(dirtyDate)
    date.setMinutes(59, 59, 999)
    return date
  }

  var end_of_hour = endOfHour

  /**
   * @category Week Helpers
   * @summary Return the end of a week for the given date.
   *
   * @description
   * Return the end of a week for the given date.
   * The result will be in the local timezone.
   *
   * @param {Date|String|Number} date - the original date
   * @param {Object} [options] - the object with options
   * @param {Number} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
   * @returns {Date} the end of a week
   *
   * @example
   * // The end of a week for 2 September 2014 11:55:00:
   * var result = endOfWeek(new Date(2014, 8, 2, 11, 55, 0))
   * //=> Sat Sep 06 2014 23:59:59.999
   *
   * @example
   * // If the week starts on Monday, the end of the week for 2 September 2014 11:55:00:
   * var result = endOfWeek(new Date(2014, 8, 2, 11, 55, 0), {weekStartsOn: 1})
   * //=> Sun Sep 07 2014 23:59:59.999
   */
  function endOfWeek(dirtyDate, dirtyOptions) {
    var weekStartsOn = dirtyOptions ? Number(dirtyOptions.weekStartsOn) || 0 : 0

    var date = parse_1(dirtyDate)
    var day = date.getDay()
    var diff = (day < weekStartsOn ? -7 : 0) + 6 - (day - weekStartsOn)

    date.setDate(date.getDate() + diff)
    date.setHours(23, 59, 59, 999)
    return date
  }

  var end_of_week = endOfWeek

  /**
   * @category ISO Week Helpers
   * @summary Return the end of an ISO week for the given date.
   *
   * @description
   * Return the end of an ISO week for the given date.
   * The result will be in the local timezone.
   *
   * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
   *
   * @param {Date|String|Number} date - the original date
   * @returns {Date} the end of an ISO week
   *
   * @example
   * // The end of an ISO week for 2 September 2014 11:55:00:
   * var result = endOfISOWeek(new Date(2014, 8, 2, 11, 55, 0))
   * //=> Sun Sep 07 2014 23:59:59.999
   */
  function endOfISOWeek(dirtyDate) {
    return end_of_week(dirtyDate, { weekStartsOn: 1 })
  }

  var end_of_iso_week = endOfISOWeek

  /**
   * @category ISO Week-Numbering Year Helpers
   * @summary Return the end of an ISO week-numbering year for the given date.
   *
   * @description
   * Return the end of an ISO week-numbering year,
   * which always starts 3 days before the year's first Thursday.
   * The result will be in the local timezone.
   *
   * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
   *
   * @param {Date|String|Number} date - the original date
   * @returns {Date} the end of an ISO week-numbering year
   *
   * @example
   * // The end of an ISO week-numbering year for 2 July 2005:
   * var result = endOfISOYear(new Date(2005, 6, 2))
   * //=> Sun Jan 01 2006 23:59:59.999
   */
  function endOfISOYear(dirtyDate) {
    var year = get_iso_year(dirtyDate)
    var fourthOfJanuaryOfNextYear = new Date(0)
    fourthOfJanuaryOfNextYear.setFullYear(year + 1, 0, 4)
    fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0)
    var date = start_of_iso_week(fourthOfJanuaryOfNextYear)
    date.setMilliseconds(date.getMilliseconds() - 1)
    return date
  }

  var end_of_iso_year = endOfISOYear

  /**
   * @category Minute Helpers
   * @summary Return the end of a minute for the given date.
   *
   * @description
   * Return the end of a minute for the given date.
   * The result will be in the local timezone.
   *
   * @param {Date|String|Number} date - the original date
   * @returns {Date} the end of a minute
   *
   * @example
   * // The end of a minute for 1 December 2014 22:15:45.400:
   * var result = endOfMinute(new Date(2014, 11, 1, 22, 15, 45, 400))
   * //=> Mon Dec 01 2014 22:15:59.999
   */
  function endOfMinute(dirtyDate) {
    var date = parse_1(dirtyDate)
    date.setSeconds(59, 999)
    return date
  }

  var end_of_minute = endOfMinute

  /**
   * @category Month Helpers
   * @summary Return the end of a month for the given date.
   *
   * @description
   * Return the end of a month for the given date.
   * The result will be in the local timezone.
   *
   * @param {Date|String|Number} date - the original date
   * @returns {Date} the end of a month
   *
   * @example
   * // The end of a month for 2 September 2014 11:55:00:
   * var result = endOfMonth(new Date(2014, 8, 2, 11, 55, 0))
   * //=> Tue Sep 30 2014 23:59:59.999
   */
  function endOfMonth(dirtyDate) {
    var date = parse_1(dirtyDate)
    var month = date.getMonth()
    date.setFullYear(date.getFullYear(), month + 1, 0)
    date.setHours(23, 59, 59, 999)
    return date
  }

  var end_of_month = endOfMonth

  /**
   * @category Quarter Helpers
   * @summary Return the end of a year quarter for the given date.
   *
   * @description
   * Return the end of a year quarter for the given date.
   * The result will be in the local timezone.
   *
   * @param {Date|String|Number} date - the original date
   * @returns {Date} the end of a quarter
   *
   * @example
   * // The end of a quarter for 2 September 2014 11:55:00:
   * var result = endOfQuarter(new Date(2014, 8, 2, 11, 55, 0))
   * //=> Tue Sep 30 2014 23:59:59.999
   */
  function endOfQuarter(dirtyDate) {
    var date = parse_1(dirtyDate)
    var currentMonth = date.getMonth()
    var month = currentMonth - (currentMonth % 3) + 3
    date.setMonth(month, 0)
    date.setHours(23, 59, 59, 999)
    return date
  }

  var end_of_quarter = endOfQuarter

  /**
   * @category Second Helpers
   * @summary Return the end of a second for the given date.
   *
   * @description
   * Return the end of a second for the given date.
   * The result will be in the local timezone.
   *
   * @param {Date|String|Number} date - the original date
   * @returns {Date} the end of a second
   *
   * @example
   * // The end of a second for 1 December 2014 22:15:45.400:
   * var result = endOfSecond(new Date(2014, 11, 1, 22, 15, 45, 400))
   * //=> Mon Dec 01 2014 22:15:45.999
   */
  function endOfSecond(dirtyDate) {
    var date = parse_1(dirtyDate)
    date.setMilliseconds(999)
    return date
  }

  var end_of_second = endOfSecond

  /**
   * @category Day Helpers
   * @summary Return the end of today.
   *
   * @description
   * Return the end of today.
   *
   * @returns {Date} the end of today
   *
   * @example
   * // If today is 6 October 2014:
   * var result = endOfToday()
   * //=> Mon Oct 6 2014 23:59:59.999
   */
  function endOfToday() {
    return end_of_day(new Date())
  }

  var end_of_today = endOfToday

  /**
   * @category Day Helpers
   * @summary Return the end of tomorrow.
   *
   * @description
   * Return the end of tomorrow.
   *
   * @returns {Date} the end of tomorrow
   *
   * @example
   * // If today is 6 October 2014:
   * var result = endOfTomorrow()
   * //=> Tue Oct 7 2014 23:59:59.999
   */
  function endOfTomorrow() {
    var now = new Date()
    var year = now.getFullYear()
    var month = now.getMonth()
    var day = now.getDate()

    var date = new Date(0)
    date.setFullYear(year, month, day + 1)
    date.setHours(23, 59, 59, 999)
    return date
  }

  var end_of_tomorrow = endOfTomorrow

  /**
   * @category Year Helpers
   * @summary Return the end of a year for the given date.
   *
   * @description
   * Return the end of a year for the given date.
   * The result will be in the local timezone.
   *
   * @param {Date|String|Number} date - the original date
   * @returns {Date} the end of a year
   *
   * @example
   * // The end of a year for 2 September 2014 11:55:00:
   * var result = endOfYear(new Date(2014, 8, 2, 11, 55, 00))
   * //=> Wed Dec 31 2014 23:59:59.999
   */
  function endOfYear(dirtyDate) {
    var date = parse_1(dirtyDate)
    var year = date.getFullYear()
    date.setFullYear(year + 1, 0, 0)
    date.setHours(23, 59, 59, 999)
    return date
  }

  var end_of_year = endOfYear

  /**
   * @category Day Helpers
   * @summary Return the end of yesterday.
   *
   * @description
   * Return the end of yesterday.
   *
   * @returns {Date} the end of yesterday
   *
   * @example
   * // If today is 6 October 2014:
   * var result = endOfYesterday()
   * //=> Sun Oct 5 2014 23:59:59.999
   */
  function endOfYesterday() {
    var now = new Date()
    var year = now.getFullYear()
    var month = now.getMonth()
    var day = now.getDate()

    var date = new Date(0)
    date.setFullYear(year, month, day - 1)
    date.setHours(23, 59, 59, 999)
    return date
  }

  var end_of_yesterday = endOfYesterday

  /**
   * @category Year Helpers
   * @summary Return the start of a year for the given date.
   *
   * @description
   * Return the start of a year for the given date.
   * The result will be in the local timezone.
   *
   * @param {Date|String|Number} date - the original date
   * @returns {Date} the start of a year
   *
   * @example
   * // The start of a year for 2 September 2014 11:55:00:
   * var result = startOfYear(new Date(2014, 8, 2, 11, 55, 00))
   * //=> Wed Jan 01 2014 00:00:00
   */
  function startOfYear(dirtyDate) {
    var cleanDate = parse_1(dirtyDate)
    var date = new Date(0)
    date.setFullYear(cleanDate.getFullYear(), 0, 1)
    date.setHours(0, 0, 0, 0)
    return date
  }

  var start_of_year = startOfYear

  /**
   * @category Day Helpers
   * @summary Get the day of the year of the given date.
   *
   * @description
   * Get the day of the year of the given date.
   *
   * @param {Date|String|Number} date - the given date
   * @returns {Number} the day of year
   *
   * @example
   * // Which day of the year is 2 July 2014?
   * var result = getDayOfYear(new Date(2014, 6, 2))
   * //=> 183
   */
  function getDayOfYear(dirtyDate) {
    var date = parse_1(dirtyDate)
    var diff = difference_in_calendar_days(date, start_of_year(date))
    var dayOfYear = diff + 1
    return dayOfYear
  }

  var get_day_of_year = getDayOfYear

  var MILLISECONDS_IN_WEEK$2 = 604800000

  /**
   * @category ISO Week Helpers
   * @summary Get the ISO week of the given date.
   *
   * @description
   * Get the ISO week of the given date.
   *
   * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
   *
   * @param {Date|String|Number} date - the given date
   * @returns {Number} the ISO week
   *
   * @example
   * // Which week of the ISO-week numbering year is 2 January 2005?
   * var result = getISOWeek(new Date(2005, 0, 2))
   * //=> 53
   */
  function getISOWeek(dirtyDate) {
    var date = parse_1(dirtyDate)
    var diff =
      start_of_iso_week(date).getTime() - start_of_iso_year(date).getTime()

    // Round the number of days to the nearest integer
    // because the number of milliseconds in a week is not constant
    // (e.g. it's different in the week of the daylight saving time clock shift)
    return Math.round(diff / MILLISECONDS_IN_WEEK$2) + 1
  }

  var get_iso_week = getISOWeek

  /**
   * @category Common Helpers
   * @summary Is the given date valid?
   *
   * @description
   * Returns false if argument is Invalid Date and true otherwise.
   * Invalid Date is a Date, whose time value is NaN.
   *
   * Time value of Date: http://es5.github.io/#x15.9.1.1
   *
   * @param {Date} date - the date to check
   * @returns {Boolean} the date is valid
   * @throws {TypeError} argument must be an instance of Date
   *
   * @example
   * // For the valid date:
   * var result = isValid(new Date(2014, 1, 31))
   * //=> true
   *
   * @example
   * // For the invalid date:
   * var result = isValid(new Date(''))
   * //=> false
   */
  function isValid(dirtyDate) {
    if (is_date(dirtyDate)) {
      return !isNaN(dirtyDate)
    } else {
      throw new TypeError(
        toString.call(dirtyDate) + ' is not an instance of Date'
      )
    }
  }

  var is_valid = isValid

  /**
   * @category Common Helpers
   * @summary Format the date.
   *
   * @description
   * Return the formatted date string in the given format.
   *
   * Accepted tokens:
   * | Unit                    | Token | Result examples                  |
   * |-------------------------|-------|----------------------------------|
   * | Month                   | M     | 1, 2, ..., 12                    |
   * |                         | Mo    | 1st, 2nd, ..., 12th              |
   * |                         | MM    | 01, 02, ..., 12                  |
   * |                         | MMM   | Jan, Feb, ..., Dec               |
   * |                         | MMMM  | January, February, ..., December |
   * | Quarter                 | Q     | 1, 2, 3, 4                       |
   * |                         | Qo    | 1st, 2nd, 3rd, 4th               |
   * | Day of month            | D     | 1, 2, ..., 31                    |
   * |                         | Do    | 1st, 2nd, ..., 31st              |
   * |                         | DD    | 01, 02, ..., 31                  |
   * | Day of year             | DDD   | 1, 2, ..., 366                   |
   * |                         | DDDo  | 1st, 2nd, ..., 366th             |
   * |                         | DDDD  | 001, 002, ..., 366               |
   * | Day of week             | d     | 0, 1, ..., 6                     |
   * |                         | do    | 0th, 1st, ..., 6th               |
   * |                         | dd    | Su, Mo, ..., Sa                  |
   * |                         | ddd   | Sun, Mon, ..., Sat               |
   * |                         | dddd  | Sunday, Monday, ..., Saturday    |
   * | Day of ISO week         | E     | 1, 2, ..., 7                     |
   * | ISO week                | W     | 1, 2, ..., 53                    |
   * |                         | Wo    | 1st, 2nd, ..., 53rd              |
   * |                         | WW    | 01, 02, ..., 53                  |
   * | Year                    | YY    | 00, 01, ..., 99                  |
   * |                         | YYYY  | 1900, 1901, ..., 2099            |
   * | ISO week-numbering year | GG    | 00, 01, ..., 99                  |
   * |                         | GGGG  | 1900, 1901, ..., 2099            |
   * | AM/PM                   | A     | AM, PM                           |
   * |                         | a     | am, pm                           |
   * |                         | aa    | a.m., p.m.                       |
   * | Hour                    | H     | 0, 1, ... 23                     |
   * |                         | HH    | 00, 01, ... 23                   |
   * |                         | h     | 1, 2, ..., 12                    |
   * |                         | hh    | 01, 02, ..., 12                  |
   * | Minute                  | m     | 0, 1, ..., 59                    |
   * |                         | mm    | 00, 01, ..., 59                  |
   * | Second                  | s     | 0, 1, ..., 59                    |
   * |                         | ss    | 00, 01, ..., 59                  |
   * | 1/10 of second          | S     | 0, 1, ..., 9                     |
   * | 1/100 of second         | SS    | 00, 01, ..., 99                  |
   * | Millisecond             | SSS   | 000, 001, ..., 999               |
   * | Timezone                | Z     | -01:00, +00:00, ... +12:00       |
   * |                         | ZZ    | -0100, +0000, ..., +1200         |
   * | Seconds timestamp       | X     | 512969520                        |
   * | Milliseconds timestamp  | x     | 512969520900                     |
   *
   * The characters wrapped in square brackets are escaped.
   *
   * The result may vary by locale.
   *
   * @param {Date|String|Number} date - the original date
   * @param {String} [format='YYYY-MM-DDTHH:mm:ss.SSSZ'] - the string of tokens
   * @param {Object} [options] - the object with options
   * @param {Object} [options.locale=enLocale] - the locale object
   * @returns {String} the formatted date string
   *
   * @example
   * // Represent 11 February 2014 in middle-endian format:
   * var result = format(
   *   new Date(2014, 1, 11),
   *   'MM/DD/YYYY'
   * )
   * //=> '02/11/2014'
   *
   * @example
   * // Represent 2 July 2014 in Esperanto:
   * var eoLocale = require('date-fns/locale/eo')
   * var result = format(
   *   new Date(2014, 6, 2),
   *   'Do [de] MMMM YYYY',
   *   {locale: eoLocale}
   * )
   * //=> '2-a de julio 2014'
   */
  function format$1(dirtyDate, dirtyFormatStr, dirtyOptions) {
    var formatStr = dirtyFormatStr
      ? String(dirtyFormatStr)
      : 'YYYY-MM-DDTHH:mm:ss.SSSZ'
    var options = dirtyOptions || {}

    var locale = options.locale
    var localeFormatters = en.format.formatters
    var formattingTokensRegExp = en.format.formattingTokensRegExp
    if (locale && locale.format && locale.format.formatters) {
      localeFormatters = locale.format.formatters

      if (locale.format.formattingTokensRegExp) {
        formattingTokensRegExp = locale.format.formattingTokensRegExp
      }
    }

    var date = parse_1(dirtyDate)

    if (!is_valid(date)) {
      return 'Invalid Date'
    }

    var formatFn = buildFormatFn(
      formatStr,
      localeFormatters,
      formattingTokensRegExp
    )

    return formatFn(date)
  }

  var formatters = {
    // Month: 1, 2, ..., 12
    M: function(date) {
      return date.getMonth() + 1
    },

    // Month: 01, 02, ..., 12
    MM: function(date) {
      return addLeadingZeros(date.getMonth() + 1, 2)
    },

    // Quarter: 1, 2, 3, 4
    Q: function(date) {
      return Math.ceil((date.getMonth() + 1) / 3)
    },

    // Day of month: 1, 2, ..., 31
    D: function(date) {
      return date.getDate()
    },

    // Day of month: 01, 02, ..., 31
    DD: function(date) {
      return addLeadingZeros(date.getDate(), 2)
    },

    // Day of year: 1, 2, ..., 366
    DDD: function(date) {
      return get_day_of_year(date)
    },

    // Day of year: 001, 002, ..., 366
    DDDD: function(date) {
      return addLeadingZeros(get_day_of_year(date), 3)
    },

    // Day of week: 0, 1, ..., 6
    d: function(date) {
      return date.getDay()
    },

    // Day of ISO week: 1, 2, ..., 7
    E: function(date) {
      return date.getDay() || 7
    },

    // ISO week: 1, 2, ..., 53
    W: function(date) {
      return get_iso_week(date)
    },

    // ISO week: 01, 02, ..., 53
    WW: function(date) {
      return addLeadingZeros(get_iso_week(date), 2)
    },

    // Year: 00, 01, ..., 99
    YY: function(date) {
      return addLeadingZeros(date.getFullYear(), 4).substr(2)
    },

    // Year: 1900, 1901, ..., 2099
    YYYY: function(date) {
      return addLeadingZeros(date.getFullYear(), 4)
    },

    // ISO week-numbering year: 00, 01, ..., 99
    GG: function(date) {
      return String(get_iso_year(date)).substr(2)
    },

    // ISO week-numbering year: 1900, 1901, ..., 2099
    GGGG: function(date) {
      return get_iso_year(date)
    },

    // Hour: 0, 1, ... 23
    H: function(date) {
      return date.getHours()
    },

    // Hour: 00, 01, ..., 23
    HH: function(date) {
      return addLeadingZeros(date.getHours(), 2)
    },

    // Hour: 1, 2, ..., 12
    h: function(date) {
      var hours = date.getHours()
      if (hours === 0) {
        return 12
      } else if (hours > 12) {
        return hours % 12
      } else {
        return hours
      }
    },

    // Hour: 01, 02, ..., 12
    hh: function(date) {
      return addLeadingZeros(formatters['h'](date), 2)
    },

    // Minute: 0, 1, ..., 59
    m: function(date) {
      return date.getMinutes()
    },

    // Minute: 00, 01, ..., 59
    mm: function(date) {
      return addLeadingZeros(date.getMinutes(), 2)
    },

    // Second: 0, 1, ..., 59
    s: function(date) {
      return date.getSeconds()
    },

    // Second: 00, 01, ..., 59
    ss: function(date) {
      return addLeadingZeros(date.getSeconds(), 2)
    },

    // 1/10 of second: 0, 1, ..., 9
    S: function(date) {
      return Math.floor(date.getMilliseconds() / 100)
    },

    // 1/100 of second: 00, 01, ..., 99
    SS: function(date) {
      return addLeadingZeros(Math.floor(date.getMilliseconds() / 10), 2)
    },

    // Millisecond: 000, 001, ..., 999
    SSS: function(date) {
      return addLeadingZeros(date.getMilliseconds(), 3)
    },

    // Timezone: -01:00, +00:00, ... +12:00
    Z: function(date) {
      return formatTimezone(date.getTimezoneOffset(), ':')
    },

    // Timezone: -0100, +0000, ... +1200
    ZZ: function(date) {
      return formatTimezone(date.getTimezoneOffset())
    },

    // Seconds timestamp: 512969520
    X: function(date) {
      return Math.floor(date.getTime() / 1000)
    },

    // Milliseconds timestamp: 512969520900
    x: function(date) {
      return date.getTime()
    },
  }

  function buildFormatFn(formatStr, localeFormatters, formattingTokensRegExp) {
    var array = formatStr.match(formattingTokensRegExp)
    var length = array.length

    var i
    var formatter
    for (i = 0; i < length; i++) {
      formatter = localeFormatters[array[i]] || formatters[array[i]]
      if (formatter) {
        array[i] = formatter
      } else {
        array[i] = removeFormattingTokens(array[i])
      }
    }

    return function(date) {
      var output = ''
      for (var i = 0; i < length; i++) {
        if (array[i] instanceof Function) {
          output += array[i](date, formatters)
        } else {
          output += array[i]
        }
      }
      return output
    }
  }

  function removeFormattingTokens(input) {
    if (input.match(/\[[\s\S]/)) {
      return input.replace(/^\[|]$/g, '')
    }
    return input.replace(/\\/g, '')
  }

  function formatTimezone(offset, delimeter) {
    delimeter = delimeter || ''
    var sign = offset > 0 ? '-' : '+'
    var absOffset = Math.abs(offset)
    var hours = Math.floor(absOffset / 60)
    var minutes = absOffset % 60
    return (
      sign + addLeadingZeros(hours, 2) + delimeter + addLeadingZeros(minutes, 2)
    )
  }

  function addLeadingZeros(number, targetLength) {
    var output = Math.abs(number).toString()
    while (output.length < targetLength) {
      output = '0' + output
    }
    return output
  }

  var format_1 = format$1

  /**
   * @category Day Helpers
   * @summary Get the day of the month of the given date.
   *
   * @description
   * Get the day of the month of the given date.
   *
   * @param {Date|String|Number} date - the given date
   * @returns {Number} the day of month
   *
   * @example
   * // Which day of the month is 29 February 2012?
   * var result = getDate(new Date(2012, 1, 29))
   * //=> 29
   */
  function getDate(dirtyDate) {
    var date = parse_1(dirtyDate)
    var dayOfMonth = date.getDate()
    return dayOfMonth
  }

  var get_date = getDate

  /**
   * @category Weekday Helpers
   * @summary Get the day of the week of the given date.
   *
   * @description
   * Get the day of the week of the given date.
   *
   * @param {Date|String|Number} date - the given date
   * @returns {Number} the day of week
   *
   * @example
   * // Which day of the week is 29 February 2012?
   * var result = getDay(new Date(2012, 1, 29))
   * //=> 3
   */
  function getDay(dirtyDate) {
    var date = parse_1(dirtyDate)
    var day = date.getDay()
    return day
  }

  var get_day = getDay

  /**
   * @category Year Helpers
   * @summary Is the given date in the leap year?
   *
   * @description
   * Is the given date in the leap year?
   *
   * @param {Date|String|Number} date - the date to check
   * @returns {Boolean} the date is in the leap year
   *
   * @example
   * // Is 1 September 2012 in the leap year?
   * var result = isLeapYear(new Date(2012, 8, 1))
   * //=> true
   */
  function isLeapYear(dirtyDate) {
    var date = parse_1(dirtyDate)
    var year = date.getFullYear()
    return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)
  }

  var is_leap_year = isLeapYear

  /**
   * @category Year Helpers
   * @summary Get the number of days in a year of the given date.
   *
   * @description
   * Get the number of days in a year of the given date.
   *
   * @param {Date|String|Number} date - the given date
   * @returns {Number} the number of days in a year
   *
   * @example
   * // How many days are in 2012?
   * var result = getDaysInYear(new Date(2012, 0, 1))
   * //=> 366
   */
  function getDaysInYear(dirtyDate) {
    return is_leap_year(dirtyDate) ? 366 : 365
  }

  var get_days_in_year = getDaysInYear

  /**
   * @category Hour Helpers
   * @summary Get the hours of the given date.
   *
   * @description
   * Get the hours of the given date.
   *
   * @param {Date|String|Number} date - the given date
   * @returns {Number} the hours
   *
   * @example
   * // Get the hours of 29 February 2012 11:45:00:
   * var result = getHours(new Date(2012, 1, 29, 11, 45))
   * //=> 11
   */
  function getHours(dirtyDate) {
    var date = parse_1(dirtyDate)
    var hours = date.getHours()
    return hours
  }

  var get_hours = getHours

  /**
   * @category Weekday Helpers
   * @summary Get the day of the ISO week of the given date.
   *
   * @description
   * Get the day of the ISO week of the given date,
   * which is 7 for Sunday, 1 for Monday etc.
   *
   * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
   *
   * @param {Date|String|Number} date - the given date
   * @returns {Number} the day of ISO week
   *
   * @example
   * // Which day of the ISO week is 26 February 2012?
   * var result = getISODay(new Date(2012, 1, 26))
   * //=> 7
   */
  function getISODay(dirtyDate) {
    var date = parse_1(dirtyDate)
    var day = date.getDay()

    if (day === 0) {
      day = 7
    }

    return day
  }

  var get_iso_day = getISODay

  var MILLISECONDS_IN_WEEK$3 = 604800000

  /**
   * @category ISO Week-Numbering Year Helpers
   * @summary Get the number of weeks in an ISO week-numbering year of the given date.
   *
   * @description
   * Get the number of weeks in an ISO week-numbering year of the given date.
   *
   * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
   *
   * @param {Date|String|Number} date - the given date
   * @returns {Number} the number of ISO weeks in a year
   *
   * @example
   * // How many weeks are in ISO week-numbering year 2015?
   * var result = getISOWeeksInYear(new Date(2015, 1, 11))
   * //=> 53
   */
  function getISOWeeksInYear(dirtyDate) {
    var thisYear = start_of_iso_year(dirtyDate)
    var nextYear = start_of_iso_year(add_weeks(thisYear, 60))
    var diff = nextYear.valueOf() - thisYear.valueOf()
    // Round the number of weeks to the nearest integer
    // because the number of milliseconds in a week is not constant
    // (e.g. it's different in the week of the daylight saving time clock shift)
    return Math.round(diff / MILLISECONDS_IN_WEEK$3)
  }

  var get_iso_weeks_in_year = getISOWeeksInYear

  /**
   * @category Millisecond Helpers
   * @summary Get the milliseconds of the given date.
   *
   * @description
   * Get the milliseconds of the given date.
   *
   * @param {Date|String|Number} date - the given date
   * @returns {Number} the milliseconds
   *
   * @example
   * // Get the milliseconds of 29 February 2012 11:45:05.123:
   * var result = getMilliseconds(new Date(2012, 1, 29, 11, 45, 5, 123))
   * //=> 123
   */
  function getMilliseconds(dirtyDate) {
    var date = parse_1(dirtyDate)
    var milliseconds = date.getMilliseconds()
    return milliseconds
  }

  var get_milliseconds = getMilliseconds

  /**
   * @category Minute Helpers
   * @summary Get the minutes of the given date.
   *
   * @description
   * Get the minutes of the given date.
   *
   * @param {Date|String|Number} date - the given date
   * @returns {Number} the minutes
   *
   * @example
   * // Get the minutes of 29 February 2012 11:45:05:
   * var result = getMinutes(new Date(2012, 1, 29, 11, 45, 5))
   * //=> 45
   */
  function getMinutes(dirtyDate) {
    var date = parse_1(dirtyDate)
    var minutes = date.getMinutes()
    return minutes
  }

  var get_minutes = getMinutes

  /**
   * @category Month Helpers
   * @summary Get the month of the given date.
   *
   * @description
   * Get the month of the given date.
   *
   * @param {Date|String|Number} date - the given date
   * @returns {Number} the month
   *
   * @example
   * // Which month is 29 February 2012?
   * var result = getMonth(new Date(2012, 1, 29))
   * //=> 1
   */
  function getMonth(dirtyDate) {
    var date = parse_1(dirtyDate)
    var month = date.getMonth()
    return month
  }

  var get_month = getMonth

  var MILLISECONDS_IN_DAY$1 = 24 * 60 * 60 * 1000

  /**
   * @category Range Helpers
   * @summary Get the number of days that overlap in two date ranges
   *
   * @description
   * Get the number of days that overlap in two date ranges
   *
   * @param {Date|String|Number} initialRangeStartDate - the start of the initial range
   * @param {Date|String|Number} initialRangeEndDate - the end of the initial range
   * @param {Date|String|Number} comparedRangeStartDate - the start of the range to compare it with
   * @param {Date|String|Number} comparedRangeEndDate - the end of the range to compare it with
   * @returns {Number} the number of days that overlap in two date ranges
   * @throws {Error} startDate of a date range cannot be after its endDate
   *
   * @example
   * // For overlapping date ranges adds 1 for each started overlapping day:
   * getOverlappingDaysInRanges(
   *   new Date(2014, 0, 10), new Date(2014, 0, 20), new Date(2014, 0, 17), new Date(2014, 0, 21)
   * )
   * //=> 3
   *
   * @example
   * // For non-overlapping date ranges returns 0:
   * getOverlappingDaysInRanges(
   *   new Date(2014, 0, 10), new Date(2014, 0, 20), new Date(2014, 0, 21), new Date(2014, 0, 22)
   * )
   * //=> 0
   */
  function getOverlappingDaysInRanges(
    dirtyInitialRangeStartDate,
    dirtyInitialRangeEndDate,
    dirtyComparedRangeStartDate,
    dirtyComparedRangeEndDate
  ) {
    var initialStartTime = parse_1(dirtyInitialRangeStartDate).getTime()
    var initialEndTime = parse_1(dirtyInitialRangeEndDate).getTime()
    var comparedStartTime = parse_1(dirtyComparedRangeStartDate).getTime()
    var comparedEndTime = parse_1(dirtyComparedRangeEndDate).getTime()

    if (
      initialStartTime > initialEndTime ||
      comparedStartTime > comparedEndTime
    ) {
      throw new Error(
        'The start of the range cannot be after the end of the range'
      )
    }

    var isOverlapping =
      initialStartTime < comparedEndTime && comparedStartTime < initialEndTime

    if (!isOverlapping) {
      return 0
    }

    var overlapStartDate =
      comparedStartTime < initialStartTime
        ? initialStartTime
        : comparedStartTime

    var overlapEndDate =
      comparedEndTime > initialEndTime ? initialEndTime : comparedEndTime

    var differenceInMs = overlapEndDate - overlapStartDate

    return Math.ceil(differenceInMs / MILLISECONDS_IN_DAY$1)
  }

  var get_overlapping_days_in_ranges = getOverlappingDaysInRanges

  /**
   * @category Second Helpers
   * @summary Get the seconds of the given date.
   *
   * @description
   * Get the seconds of the given date.
   *
   * @param {Date|String|Number} date - the given date
   * @returns {Number} the seconds
   *
   * @example
   * // Get the seconds of 29 February 2012 11:45:05.123:
   * var result = getSeconds(new Date(2012, 1, 29, 11, 45, 5, 123))
   * //=> 5
   */
  function getSeconds(dirtyDate) {
    var date = parse_1(dirtyDate)
    var seconds = date.getSeconds()
    return seconds
  }

  var get_seconds = getSeconds

  /**
   * @category Timestamp Helpers
   * @summary Get the milliseconds timestamp of the given date.
   *
   * @description
   * Get the milliseconds timestamp of the given date.
   *
   * @param {Date|String|Number} date - the given date
   * @returns {Number} the timestamp
   *
   * @example
   * // Get the timestamp of 29 February 2012 11:45:05.123:
   * var result = getTime(new Date(2012, 1, 29, 11, 45, 5, 123))
   * //=> 1330515905123
   */
  function getTime(dirtyDate) {
    var date = parse_1(dirtyDate)
    var timestamp = date.getTime()
    return timestamp
  }

  var get_time = getTime

  /**
   * @category Year Helpers
   * @summary Get the year of the given date.
   *
   * @description
   * Get the year of the given date.
   *
   * @param {Date|String|Number} date - the given date
   * @returns {Number} the year
   *
   * @example
   * // Which year is 2 July 2014?
   * var result = getYear(new Date(2014, 6, 2))
   * //=> 2014
   */
  function getYear(dirtyDate) {
    var date = parse_1(dirtyDate)
    var year = date.getFullYear()
    return year
  }

  var get_year = getYear

  /**
   * @category Common Helpers
   * @summary Is the first date after the second one?
   *
   * @description
   * Is the first date after the second one?
   *
   * @param {Date|String|Number} date - the date that should be after the other one to return true
   * @param {Date|String|Number} dateToCompare - the date to compare with
   * @returns {Boolean} the first date is after the second date
   *
   * @example
   * // Is 10 July 1989 after 11 February 1987?
   * var result = isAfter(new Date(1989, 6, 10), new Date(1987, 1, 11))
   * //=> true
   */
  function isAfter(dirtyDate, dirtyDateToCompare) {
    var date = parse_1(dirtyDate)
    var dateToCompare = parse_1(dirtyDateToCompare)
    return date.getTime() > dateToCompare.getTime()
  }

  var is_after = isAfter

  /**
   * @category Common Helpers
   * @summary Is the first date before the second one?
   *
   * @description
   * Is the first date before the second one?
   *
   * @param {Date|String|Number} date - the date that should be before the other one to return true
   * @param {Date|String|Number} dateToCompare - the date to compare with
   * @returns {Boolean} the first date is before the second date
   *
   * @example
   * // Is 10 July 1989 before 11 February 1987?
   * var result = isBefore(new Date(1989, 6, 10), new Date(1987, 1, 11))
   * //=> false
   */
  function isBefore(dirtyDate, dirtyDateToCompare) {
    var date = parse_1(dirtyDate)
    var dateToCompare = parse_1(dirtyDateToCompare)
    return date.getTime() < dateToCompare.getTime()
  }

  var is_before = isBefore

  /**
   * @category Common Helpers
   * @summary Are the given dates equal?
   *
   * @description
   * Are the given dates equal?
   *
   * @param {Date|String|Number} dateLeft - the first date to compare
   * @param {Date|String|Number} dateRight - the second date to compare
   * @returns {Boolean} the dates are equal
   *
   * @example
   * // Are 2 July 2014 06:30:45.000 and 2 July 2014 06:30:45.500 equal?
   * var result = isEqual(
   *   new Date(2014, 6, 2, 6, 30, 45, 0)
   *   new Date(2014, 6, 2, 6, 30, 45, 500)
   * )
   * //=> false
   */
  function isEqual(dirtyLeftDate, dirtyRightDate) {
    var dateLeft = parse_1(dirtyLeftDate)
    var dateRight = parse_1(dirtyRightDate)
    return dateLeft.getTime() === dateRight.getTime()
  }

  var is_equal = isEqual

  /**
   * @category Month Helpers
   * @summary Is the given date the first day of a month?
   *
   * @description
   * Is the given date the first day of a month?
   *
   * @param {Date|String|Number} date - the date to check
   * @returns {Boolean} the date is the first day of a month
   *
   * @example
   * // Is 1 September 2014 the first day of a month?
   * var result = isFirstDayOfMonth(new Date(2014, 8, 1))
   * //=> true
   */
  function isFirstDayOfMonth(dirtyDate) {
    return parse_1(dirtyDate).getDate() === 1
  }

  var is_first_day_of_month = isFirstDayOfMonth

  /**
   * @category Weekday Helpers
   * @summary Is the given date Friday?
   *
   * @description
   * Is the given date Friday?
   *
   * @param {Date|String|Number} date - the date to check
   * @returns {Boolean} the date is Friday
   *
   * @example
   * // Is 26 September 2014 Friday?
   * var result = isFriday(new Date(2014, 8, 26))
   * //=> true
   */
  function isFriday(dirtyDate) {
    return parse_1(dirtyDate).getDay() === 5
  }

  var is_friday = isFriday

  /**
   * @category Common Helpers
   * @summary Is the given date in the future?
   *
   * @description
   * Is the given date in the future?
   *
   * @param {Date|String|Number} date - the date to check
   * @returns {Boolean} the date is in the future
   *
   * @example
   * // If today is 6 October 2014, is 31 December 2014 in the future?
   * var result = isFuture(new Date(2014, 11, 31))
   * //=> true
   */
  function isFuture(dirtyDate) {
    return parse_1(dirtyDate).getTime() > new Date().getTime()
  }

  var is_future = isFuture

  /**
   * @category Month Helpers
   * @summary Is the given date the last day of a month?
   *
   * @description
   * Is the given date the last day of a month?
   *
   * @param {Date|String|Number} date - the date to check
   * @returns {Boolean} the date is the last day of a month
   *
   * @example
   * // Is 28 February 2014 the last day of a month?
   * var result = isLastDayOfMonth(new Date(2014, 1, 28))
   * //=> true
   */
  function isLastDayOfMonth(dirtyDate) {
    var date = parse_1(dirtyDate)
    return end_of_day(date).getTime() === end_of_month(date).getTime()
  }

  var is_last_day_of_month = isLastDayOfMonth

  /**
   * @category Weekday Helpers
   * @summary Is the given date Monday?
   *
   * @description
   * Is the given date Monday?
   *
   * @param {Date|String|Number} date - the date to check
   * @returns {Boolean} the date is Monday
   *
   * @example
   * // Is 22 September 2014 Monday?
   * var result = isMonday(new Date(2014, 8, 22))
   * //=> true
   */
  function isMonday(dirtyDate) {
    return parse_1(dirtyDate).getDay() === 1
  }

  var is_monday = isMonday

  /**
   * @category Common Helpers
   * @summary Is the given date in the past?
   *
   * @description
   * Is the given date in the past?
   *
   * @param {Date|String|Number} date - the date to check
   * @returns {Boolean} the date is in the past
   *
   * @example
   * // If today is 6 October 2014, is 2 July 2014 in the past?
   * var result = isPast(new Date(2014, 6, 2))
   * //=> true
   */
  function isPast(dirtyDate) {
    return parse_1(dirtyDate).getTime() < new Date().getTime()
  }

  var is_past = isPast

  /**
   * @category Day Helpers
   * @summary Are the given dates in the same day?
   *
   * @description
   * Are the given dates in the same day?
   *
   * @param {Date|String|Number} dateLeft - the first date to check
   * @param {Date|String|Number} dateRight - the second date to check
   * @returns {Boolean} the dates are in the same day
   *
   * @example
   * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
   * var result = isSameDay(
   *   new Date(2014, 8, 4, 6, 0),
   *   new Date(2014, 8, 4, 18, 0)
   * )
   * //=> true
   */
  function isSameDay(dirtyDateLeft, dirtyDateRight) {
    var dateLeftStartOfDay = start_of_day(dirtyDateLeft)
    var dateRightStartOfDay = start_of_day(dirtyDateRight)

    return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime()
  }

  var is_same_day = isSameDay

  /**
   * @category Hour Helpers
   * @summary Return the start of an hour for the given date.
   *
   * @description
   * Return the start of an hour for the given date.
   * The result will be in the local timezone.
   *
   * @param {Date|String|Number} date - the original date
   * @returns {Date} the start of an hour
   *
   * @example
   * // The start of an hour for 2 September 2014 11:55:00:
   * var result = startOfHour(new Date(2014, 8, 2, 11, 55))
   * //=> Tue Sep 02 2014 11:00:00
   */
  function startOfHour(dirtyDate) {
    var date = parse_1(dirtyDate)
    date.setMinutes(0, 0, 0)
    return date
  }

  var start_of_hour = startOfHour

  /**
   * @category Hour Helpers
   * @summary Are the given dates in the same hour?
   *
   * @description
   * Are the given dates in the same hour?
   *
   * @param {Date|String|Number} dateLeft - the first date to check
   * @param {Date|String|Number} dateRight - the second date to check
   * @returns {Boolean} the dates are in the same hour
   *
   * @example
   * // Are 4 September 2014 06:00:00 and 4 September 06:30:00 in the same hour?
   * var result = isSameHour(
   *   new Date(2014, 8, 4, 6, 0),
   *   new Date(2014, 8, 4, 6, 30)
   * )
   * //=> true
   */
  function isSameHour(dirtyDateLeft, dirtyDateRight) {
    var dateLeftStartOfHour = start_of_hour(dirtyDateLeft)
    var dateRightStartOfHour = start_of_hour(dirtyDateRight)

    return dateLeftStartOfHour.getTime() === dateRightStartOfHour.getTime()
  }

  var is_same_hour = isSameHour

  /**
   * @category Week Helpers
   * @summary Are the given dates in the same week?
   *
   * @description
   * Are the given dates in the same week?
   *
   * @param {Date|String|Number} dateLeft - the first date to check
   * @param {Date|String|Number} dateRight - the second date to check
   * @param {Object} [options] - the object with options
   * @param {Number} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
   * @returns {Boolean} the dates are in the same week
   *
   * @example
   * // Are 31 August 2014 and 4 September 2014 in the same week?
   * var result = isSameWeek(
   *   new Date(2014, 7, 31),
   *   new Date(2014, 8, 4)
   * )
   * //=> true
   *
   * @example
   * // If week starts with Monday,
   * // are 31 August 2014 and 4 September 2014 in the same week?
   * var result = isSameWeek(
   *   new Date(2014, 7, 31),
   *   new Date(2014, 8, 4),
   *   {weekStartsOn: 1}
   * )
   * //=> false
   */
  function isSameWeek(dirtyDateLeft, dirtyDateRight, dirtyOptions) {
    var dateLeftStartOfWeek = start_of_week(dirtyDateLeft, dirtyOptions)
    var dateRightStartOfWeek = start_of_week(dirtyDateRight, dirtyOptions)

    return dateLeftStartOfWeek.getTime() === dateRightStartOfWeek.getTime()
  }

  var is_same_week = isSameWeek

  /**
   * @category ISO Week Helpers
   * @summary Are the given dates in the same ISO week?
   *
   * @description
   * Are the given dates in the same ISO week?
   *
   * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
   *
   * @param {Date|String|Number} dateLeft - the first date to check
   * @param {Date|String|Number} dateRight - the second date to check
   * @returns {Boolean} the dates are in the same ISO week
   *
   * @example
   * // Are 1 September 2014 and 7 September 2014 in the same ISO week?
   * var result = isSameISOWeek(
   *   new Date(2014, 8, 1),
   *   new Date(2014, 8, 7)
   * )
   * //=> true
   */
  function isSameISOWeek(dirtyDateLeft, dirtyDateRight) {
    return is_same_week(dirtyDateLeft, dirtyDateRight, { weekStartsOn: 1 })
  }

  var is_same_iso_week = isSameISOWeek

  /**
   * @category ISO Week-Numbering Year Helpers
   * @summary Are the given dates in the same ISO week-numbering year?
   *
   * @description
   * Are the given dates in the same ISO week-numbering year?
   *
   * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
   *
   * @param {Date|String|Number} dateLeft - the first date to check
   * @param {Date|String|Number} dateRight - the second date to check
   * @returns {Boolean} the dates are in the same ISO week-numbering year
   *
   * @example
   * // Are 29 December 2003 and 2 January 2005 in the same ISO week-numbering year?
   * var result = isSameISOYear(
   *   new Date(2003, 11, 29),
   *   new Date(2005, 0, 2)
   * )
   * //=> true
   */
  function isSameISOYear(dirtyDateLeft, dirtyDateRight) {
    var dateLeftStartOfYear = start_of_iso_year(dirtyDateLeft)
    var dateRightStartOfYear = start_of_iso_year(dirtyDateRight)

    return dateLeftStartOfYear.getTime() === dateRightStartOfYear.getTime()
  }

  var is_same_iso_year = isSameISOYear

  /**
   * @category Minute Helpers
   * @summary Return the start of a minute for the given date.
   *
   * @description
   * Return the start of a minute for the given date.
   * The result will be in the local timezone.
   *
   * @param {Date|String|Number} date - the original date
   * @returns {Date} the start of a minute
   *
   * @example
   * // The start of a minute for 1 December 2014 22:15:45.400:
   * var result = startOfMinute(new Date(2014, 11, 1, 22, 15, 45, 400))
   * //=> Mon Dec 01 2014 22:15:00
   */
  function startOfMinute(dirtyDate) {
    var date = parse_1(dirtyDate)
    date.setSeconds(0, 0)
    return date
  }

  var start_of_minute = startOfMinute

  /**
   * @category Minute Helpers
   * @summary Are the given dates in the same minute?
   *
   * @description
   * Are the given dates in the same minute?
   *
   * @param {Date|String|Number} dateLeft - the first date to check
   * @param {Date|String|Number} dateRight - the second date to check
   * @returns {Boolean} the dates are in the same minute
   *
   * @example
   * // Are 4 September 2014 06:30:00 and 4 September 2014 06:30:15
   * // in the same minute?
   * var result = isSameMinute(
   *   new Date(2014, 8, 4, 6, 30),
   *   new Date(2014, 8, 4, 6, 30, 15)
   * )
   * //=> true
   */
  function isSameMinute(dirtyDateLeft, dirtyDateRight) {
    var dateLeftStartOfMinute = start_of_minute(dirtyDateLeft)
    var dateRightStartOfMinute = start_of_minute(dirtyDateRight)

    return dateLeftStartOfMinute.getTime() === dateRightStartOfMinute.getTime()
  }

  var is_same_minute = isSameMinute

  /**
   * @category Month Helpers
   * @summary Are the given dates in the same month?
   *
   * @description
   * Are the given dates in the same month?
   *
   * @param {Date|String|Number} dateLeft - the first date to check
   * @param {Date|String|Number} dateRight - the second date to check
   * @returns {Boolean} the dates are in the same month
   *
   * @example
   * // Are 2 September 2014 and 25 September 2014 in the same month?
   * var result = isSameMonth(
   *   new Date(2014, 8, 2),
   *   new Date(2014, 8, 25)
   * )
   * //=> true
   */
  function isSameMonth(dirtyDateLeft, dirtyDateRight) {
    var dateLeft = parse_1(dirtyDateLeft)
    var dateRight = parse_1(dirtyDateRight)
    return (
      dateLeft.getFullYear() === dateRight.getFullYear() &&
      dateLeft.getMonth() === dateRight.getMonth()
    )
  }

  var is_same_month = isSameMonth

  /**
   * @category Quarter Helpers
   * @summary Return the start of a year quarter for the given date.
   *
   * @description
   * Return the start of a year quarter for the given date.
   * The result will be in the local timezone.
   *
   * @param {Date|String|Number} date - the original date
   * @returns {Date} the start of a quarter
   *
   * @example
   * // The start of a quarter for 2 September 2014 11:55:00:
   * var result = startOfQuarter(new Date(2014, 8, 2, 11, 55, 0))
   * //=> Tue Jul 01 2014 00:00:00
   */
  function startOfQuarter(dirtyDate) {
    var date = parse_1(dirtyDate)
    var currentMonth = date.getMonth()
    var month = currentMonth - (currentMonth % 3)
    date.setMonth(month, 1)
    date.setHours(0, 0, 0, 0)
    return date
  }

  var start_of_quarter = startOfQuarter

  /**
   * @category Quarter Helpers
   * @summary Are the given dates in the same year quarter?
   *
   * @description
   * Are the given dates in the same year quarter?
   *
   * @param {Date|String|Number} dateLeft - the first date to check
   * @param {Date|String|Number} dateRight - the second date to check
   * @returns {Boolean} the dates are in the same quarter
   *
   * @example
   * // Are 1 January 2014 and 8 March 2014 in the same quarter?
   * var result = isSameQuarter(
   *   new Date(2014, 0, 1),
   *   new Date(2014, 2, 8)
   * )
   * //=> true
   */
  function isSameQuarter(dirtyDateLeft, dirtyDateRight) {
    var dateLeftStartOfQuarter = start_of_quarter(dirtyDateLeft)
    var dateRightStartOfQuarter = start_of_quarter(dirtyDateRight)

    return (
      dateLeftStartOfQuarter.getTime() === dateRightStartOfQuarter.getTime()
    )
  }

  var is_same_quarter = isSameQuarter

  /**
   * @category Second Helpers
   * @summary Return the start of a second for the given date.
   *
   * @description
   * Return the start of a second for the given date.
   * The result will be in the local timezone.
   *
   * @param {Date|String|Number} date - the original date
   * @returns {Date} the start of a second
   *
   * @example
   * // The start of a second for 1 December 2014 22:15:45.400:
   * var result = startOfSecond(new Date(2014, 11, 1, 22, 15, 45, 400))
   * //=> Mon Dec 01 2014 22:15:45.000
   */
  function startOfSecond(dirtyDate) {
    var date = parse_1(dirtyDate)
    date.setMilliseconds(0)
    return date
  }

  var start_of_second = startOfSecond

  /**
   * @category Second Helpers
   * @summary Are the given dates in the same second?
   *
   * @description
   * Are the given dates in the same second?
   *
   * @param {Date|String|Number} dateLeft - the first date to check
   * @param {Date|String|Number} dateRight - the second date to check
   * @returns {Boolean} the dates are in the same second
   *
   * @example
   * // Are 4 September 2014 06:30:15.000 and 4 September 2014 06:30.15.500
   * // in the same second?
   * var result = isSameSecond(
   *   new Date(2014, 8, 4, 6, 30, 15),
   *   new Date(2014, 8, 4, 6, 30, 15, 500)
   * )
   * //=> true
   */
  function isSameSecond(dirtyDateLeft, dirtyDateRight) {
    var dateLeftStartOfSecond = start_of_second(dirtyDateLeft)
    var dateRightStartOfSecond = start_of_second(dirtyDateRight)

    return dateLeftStartOfSecond.getTime() === dateRightStartOfSecond.getTime()
  }

  var is_same_second = isSameSecond

  /**
   * @category Year Helpers
   * @summary Are the given dates in the same year?
   *
   * @description
   * Are the given dates in the same year?
   *
   * @param {Date|String|Number} dateLeft - the first date to check
   * @param {Date|String|Number} dateRight - the second date to check
   * @returns {Boolean} the dates are in the same year
   *
   * @example
   * // Are 2 September 2014 and 25 September 2014 in the same year?
   * var result = isSameYear(
   *   new Date(2014, 8, 2),
   *   new Date(2014, 8, 25)
   * )
   * //=> true
   */
  function isSameYear(dirtyDateLeft, dirtyDateRight) {
    var dateLeft = parse_1(dirtyDateLeft)
    var dateRight = parse_1(dirtyDateRight)
    return dateLeft.getFullYear() === dateRight.getFullYear()
  }

  var is_same_year = isSameYear

  /**
   * @category Weekday Helpers
   * @summary Is the given date Saturday?
   *
   * @description
   * Is the given date Saturday?
   *
   * @param {Date|String|Number} date - the date to check
   * @returns {Boolean} the date is Saturday
   *
   * @example
   * // Is 27 September 2014 Saturday?
   * var result = isSaturday(new Date(2014, 8, 27))
   * //=> true
   */
  function isSaturday(dirtyDate) {
    return parse_1(dirtyDate).getDay() === 6
  }

  var is_saturday = isSaturday

  /**
   * @category Weekday Helpers
   * @summary Is the given date Sunday?
   *
   * @description
   * Is the given date Sunday?
   *
   * @param {Date|String|Number} date - the date to check
   * @returns {Boolean} the date is Sunday
   *
   * @example
   * // Is 21 September 2014 Sunday?
   * var result = isSunday(new Date(2014, 8, 21))
   * //=> true
   */
  function isSunday(dirtyDate) {
    return parse_1(dirtyDate).getDay() === 0
  }

  var is_sunday = isSunday

  /**
   * @category Hour Helpers
   * @summary Is the given date in the same hour as the current date?
   *
   * @description
   * Is the given date in the same hour as the current date?
   *
   * @param {Date|String|Number} date - the date to check
   * @returns {Boolean} the date is in this hour
   *
   * @example
   * // If now is 25 September 2014 18:30:15.500,
   * // is 25 September 2014 18:00:00 in this hour?
   * var result = isThisHour(new Date(2014, 8, 25, 18))
   * //=> true
   */
  function isThisHour(dirtyDate) {
    return is_same_hour(new Date(), dirtyDate)
  }

  var is_this_hour = isThisHour

  /**
   * @category ISO Week Helpers
   * @summary Is the given date in the same ISO week as the current date?
   *
   * @description
   * Is the given date in the same ISO week as the current date?
   *
   * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
   *
   * @param {Date|String|Number} date - the date to check
   * @returns {Boolean} the date is in this ISO week
   *
   * @example
   * // If today is 25 September 2014, is 22 September 2014 in this ISO week?
   * var result = isThisISOWeek(new Date(2014, 8, 22))
   * //=> true
   */
  function isThisISOWeek(dirtyDate) {
    return is_same_iso_week(new Date(), dirtyDate)
  }

  var is_this_iso_week = isThisISOWeek

  /**
   * @category ISO Week-Numbering Year Helpers
   * @summary Is the given date in the same ISO week-numbering year as the current date?
   *
   * @description
   * Is the given date in the same ISO week-numbering year as the current date?
   *
   * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
   *
   * @param {Date|String|Number} date - the date to check
   * @returns {Boolean} the date is in this ISO week-numbering year
   *
   * @example
   * // If today is 25 September 2014,
   * // is 30 December 2013 in this ISO week-numbering year?
   * var result = isThisISOYear(new Date(2013, 11, 30))
   * //=> true
   */
  function isThisISOYear(dirtyDate) {
    return is_same_iso_year(new Date(), dirtyDate)
  }

  var is_this_iso_year = isThisISOYear

  /**
   * @category Minute Helpers
   * @summary Is the given date in the same minute as the current date?
   *
   * @description
   * Is the given date in the same minute as the current date?
   *
   * @param {Date|String|Number} date - the date to check
   * @returns {Boolean} the date is in this minute
   *
   * @example
   * // If now is 25 September 2014 18:30:15.500,
   * // is 25 September 2014 18:30:00 in this minute?
   * var result = isThisMinute(new Date(2014, 8, 25, 18, 30))
   * //=> true
   */
  function isThisMinute(dirtyDate) {
    return is_same_minute(new Date(), dirtyDate)
  }

  var is_this_minute = isThisMinute

  /**
   * @category Month Helpers
   * @summary Is the given date in the same month as the current date?
   *
   * @description
   * Is the given date in the same month as the current date?
   *
   * @param {Date|String|Number} date - the date to check
   * @returns {Boolean} the date is in this month
   *
   * @example
   * // If today is 25 September 2014, is 15 September 2014 in this month?
   * var result = isThisMonth(new Date(2014, 8, 15))
   * //=> true
   */
  function isThisMonth(dirtyDate) {
    return is_same_month(new Date(), dirtyDate)
  }

  var is_this_month = isThisMonth

  /**
   * @category Quarter Helpers
   * @summary Is the given date in the same quarter as the current date?
   *
   * @description
   * Is the given date in the same quarter as the current date?
   *
   * @param {Date|String|Number} date - the date to check
   * @returns {Boolean} the date is in this quarter
   *
   * @example
   * // If today is 25 September 2014, is 2 July 2014 in this quarter?
   * var result = isThisQuarter(new Date(2014, 6, 2))
   * //=> true
   */
  function isThisQuarter(dirtyDate) {
    return is_same_quarter(new Date(), dirtyDate)
  }

  var is_this_quarter = isThisQuarter

  /**
   * @category Second Helpers
   * @summary Is the given date in the same second as the current date?
   *
   * @description
   * Is the given date in the same second as the current date?
   *
   * @param {Date|String|Number} date - the date to check
   * @returns {Boolean} the date is in this second
   *
   * @example
   * // If now is 25 September 2014 18:30:15.500,
   * // is 25 September 2014 18:30:15.000 in this second?
   * var result = isThisSecond(new Date(2014, 8, 25, 18, 30, 15))
   * //=> true
   */
  function isThisSecond(dirtyDate) {
    return is_same_second(new Date(), dirtyDate)
  }

  var is_this_second = isThisSecond

  /**
   * @category Week Helpers
   * @summary Is the given date in the same week as the current date?
   *
   * @description
   * Is the given date in the same week as the current date?
   *
   * @param {Date|String|Number} date - the date to check
   * @param {Object} [options] - the object with options
   * @param {Number} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
   * @returns {Boolean} the date is in this week
   *
   * @example
   * // If today is 25 September 2014, is 21 September 2014 in this week?
   * var result = isThisWeek(new Date(2014, 8, 21))
   * //=> true
   *
   * @example
   * // If today is 25 September 2014 and week starts with Monday
   * // is 21 September 2014 in this week?
   * var result = isThisWeek(new Date(2014, 8, 21), {weekStartsOn: 1})
   * //=> false
   */
  function isThisWeek(dirtyDate, dirtyOptions) {
    return is_same_week(new Date(), dirtyDate, dirtyOptions)
  }

  var is_this_week = isThisWeek

  /**
   * @category Year Helpers
   * @summary Is the given date in the same year as the current date?
   *
   * @description
   * Is the given date in the same year as the current date?
   *
   * @param {Date|String|Number} date - the date to check
   * @returns {Boolean} the date is in this year
   *
   * @example
   * // If today is 25 September 2014, is 2 July 2014 in this year?
   * var result = isThisYear(new Date(2014, 6, 2))
   * //=> true
   */
  function isThisYear(dirtyDate) {
    return is_same_year(new Date(), dirtyDate)
  }

  var is_this_year = isThisYear

  /**
   * @category Weekday Helpers
   * @summary Is the given date Thursday?
   *
   * @description
   * Is the given date Thursday?
   *
   * @param {Date|String|Number} date - the date to check
   * @returns {Boolean} the date is Thursday
   *
   * @example
   * // Is 25 September 2014 Thursday?
   * var result = isThursday(new Date(2014, 8, 25))
   * //=> true
   */
  function isThursday(dirtyDate) {
    return parse_1(dirtyDate).getDay() === 4
  }

  var is_thursday = isThursday

  /**
   * @category Day Helpers
   * @summary Is the given date today?
   *
   * @description
   * Is the given date today?
   *
   * @param {Date|String|Number} date - the date to check
   * @returns {Boolean} the date is today
   *
   * @example
   * // If today is 6 October 2014, is 6 October 14:00:00 today?
   * var result = isToday(new Date(2014, 9, 6, 14, 0))
   * //=> true
   */
  function isToday(dirtyDate) {
    return (
      start_of_day(dirtyDate).getTime() === start_of_day(new Date()).getTime()
    )
  }

  var is_today = isToday

  /**
   * @category Day Helpers
   * @summary Is the given date tomorrow?
   *
   * @description
   * Is the given date tomorrow?
   *
   * @param {Date|String|Number} date - the date to check
   * @returns {Boolean} the date is tomorrow
   *
   * @example
   * // If today is 6 October 2014, is 7 October 14:00:00 tomorrow?
   * var result = isTomorrow(new Date(2014, 9, 7, 14, 0))
   * //=> true
   */
  function isTomorrow(dirtyDate) {
    var tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + 1)
    return (
      start_of_day(dirtyDate).getTime() === start_of_day(tomorrow).getTime()
    )
  }

  var is_tomorrow = isTomorrow

  /**
   * @category Weekday Helpers
   * @summary Is the given date Tuesday?
   *
   * @description
   * Is the given date Tuesday?
   *
   * @param {Date|String|Number} date - the date to check
   * @returns {Boolean} the date is Tuesday
   *
   * @example
   * // Is 23 September 2014 Tuesday?
   * var result = isTuesday(new Date(2014, 8, 23))
   * //=> true
   */
  function isTuesday(dirtyDate) {
    return parse_1(dirtyDate).getDay() === 2
  }

  var is_tuesday = isTuesday

  /**
   * @category Weekday Helpers
   * @summary Is the given date Wednesday?
   *
   * @description
   * Is the given date Wednesday?
   *
   * @param {Date|String|Number} date - the date to check
   * @returns {Boolean} the date is Wednesday
   *
   * @example
   * // Is 24 September 2014 Wednesday?
   * var result = isWednesday(new Date(2014, 8, 24))
   * //=> true
   */
  function isWednesday(dirtyDate) {
    return parse_1(dirtyDate).getDay() === 3
  }

  var is_wednesday = isWednesday

  /**
   * @category Weekday Helpers
   * @summary Does the given date fall on a weekend?
   *
   * @description
   * Does the given date fall on a weekend?
   *
   * @param {Date|String|Number} date - the date to check
   * @returns {Boolean} the date falls on a weekend
   *
   * @example
   * // Does 5 October 2014 fall on a weekend?
   * var result = isWeekend(new Date(2014, 9, 5))
   * //=> true
   */
  function isWeekend(dirtyDate) {
    var date = parse_1(dirtyDate)
    var day = date.getDay()
    return day === 0 || day === 6
  }

  var is_weekend = isWeekend

  /**
   * @category Range Helpers
   * @summary Is the given date within the range?
   *
   * @description
   * Is the given date within the range?
   *
   * @param {Date|String|Number} date - the date to check
   * @param {Date|String|Number} startDate - the start of range
   * @param {Date|String|Number} endDate - the end of range
   * @returns {Boolean} the date is within the range
   * @throws {Error} startDate cannot be after endDate
   *
   * @example
   * // For the date within the range:
   * isWithinRange(
   *   new Date(2014, 0, 3), new Date(2014, 0, 1), new Date(2014, 0, 7)
   * )
   * //=> true
   *
   * @example
   * // For the date outside of the range:
   * isWithinRange(
   *   new Date(2014, 0, 10), new Date(2014, 0, 1), new Date(2014, 0, 7)
   * )
   * //=> false
   */
  function isWithinRange(dirtyDate, dirtyStartDate, dirtyEndDate) {
    var time = parse_1(dirtyDate).getTime()
    var startTime = parse_1(dirtyStartDate).getTime()
    var endTime = parse_1(dirtyEndDate).getTime()

    if (startTime > endTime) {
      throw new Error(
        'The start of the range cannot be after the end of the range'
      )
    }

    return time >= startTime && time <= endTime
  }

  var is_within_range = isWithinRange

  /**
   * @category Day Helpers
   * @summary Is the given date yesterday?
   *
   * @description
   * Is the given date yesterday?
   *
   * @param {Date|String|Number} date - the date to check
   * @returns {Boolean} the date is yesterday
   *
   * @example
   * // If today is 6 October 2014, is 5 October 14:00:00 yesterday?
   * var result = isYesterday(new Date(2014, 9, 5, 14, 0))
   * //=> true
   */
  function isYesterday(dirtyDate) {
    var yesterday = new Date()
    yesterday.setDate(yesterday.getDate() - 1)
    return (
      start_of_day(dirtyDate).getTime() === start_of_day(yesterday).getTime()
    )
  }

  var is_yesterday = isYesterday

  /**
   * @category Week Helpers
   * @summary Return the last day of a week for the given date.
   *
   * @description
   * Return the last day of a week for the given date.
   * The result will be in the local timezone.
   *
   * @param {Date|String|Number} date - the original date
   * @param {Object} [options] - the object with options
   * @param {Number} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
   * @returns {Date} the last day of a week
   *
   * @example
   * // The last day of a week for 2 September 2014 11:55:00:
   * var result = lastDayOfWeek(new Date(2014, 8, 2, 11, 55, 0))
   * //=> Sat Sep 06 2014 00:00:00
   *
   * @example
   * // If the week starts on Monday, the last day of the week for 2 September 2014 11:55:00:
   * var result = lastDayOfWeek(new Date(2014, 8, 2, 11, 55, 0), {weekStartsOn: 1})
   * //=> Sun Sep 07 2014 00:00:00
   */
  function lastDayOfWeek(dirtyDate, dirtyOptions) {
    var weekStartsOn = dirtyOptions ? Number(dirtyOptions.weekStartsOn) || 0 : 0

    var date = parse_1(dirtyDate)
    var day = date.getDay()
    var diff = (day < weekStartsOn ? -7 : 0) + 6 - (day - weekStartsOn)

    date.setHours(0, 0, 0, 0)
    date.setDate(date.getDate() + diff)
    return date
  }

  var last_day_of_week = lastDayOfWeek

  /**
   * @category ISO Week Helpers
   * @summary Return the last day of an ISO week for the given date.
   *
   * @description
   * Return the last day of an ISO week for the given date.
   * The result will be in the local timezone.
   *
   * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
   *
   * @param {Date|String|Number} date - the original date
   * @returns {Date} the last day of an ISO week
   *
   * @example
   * // The last day of an ISO week for 2 September 2014 11:55:00:
   * var result = lastDayOfISOWeek(new Date(2014, 8, 2, 11, 55, 0))
   * //=> Sun Sep 07 2014 00:00:00
   */
  function lastDayOfISOWeek(dirtyDate) {
    return last_day_of_week(dirtyDate, { weekStartsOn: 1 })
  }

  var last_day_of_iso_week = lastDayOfISOWeek

  /**
   * @category ISO Week-Numbering Year Helpers
   * @summary Return the last day of an ISO week-numbering year for the given date.
   *
   * @description
   * Return the last day of an ISO week-numbering year,
   * which always starts 3 days before the year's first Thursday.
   * The result will be in the local timezone.
   *
   * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
   *
   * @param {Date|String|Number} date - the original date
   * @returns {Date} the end of an ISO week-numbering year
   *
   * @example
   * // The last day of an ISO week-numbering year for 2 July 2005:
   * var result = lastDayOfISOYear(new Date(2005, 6, 2))
   * //=> Sun Jan 01 2006 00:00:00
   */
  function lastDayOfISOYear(dirtyDate) {
    var year = get_iso_year(dirtyDate)
    var fourthOfJanuary = new Date(0)
    fourthOfJanuary.setFullYear(year + 1, 0, 4)
    fourthOfJanuary.setHours(0, 0, 0, 0)
    var date = start_of_iso_week(fourthOfJanuary)
    date.setDate(date.getDate() - 1)
    return date
  }

  var last_day_of_iso_year = lastDayOfISOYear

  /**
   * @category Month Helpers
   * @summary Return the last day of a month for the given date.
   *
   * @description
   * Return the last day of a month for the given date.
   * The result will be in the local timezone.
   *
   * @param {Date|String|Number} date - the original date
   * @returns {Date} the last day of a month
   *
   * @example
   * // The last day of a month for 2 September 2014 11:55:00:
   * var result = lastDayOfMonth(new Date(2014, 8, 2, 11, 55, 0))
   * //=> Tue Sep 30 2014 00:00:00
   */
  function lastDayOfMonth(dirtyDate) {
    var date = parse_1(dirtyDate)
    var month = date.getMonth()
    date.setFullYear(date.getFullYear(), month + 1, 0)
    date.setHours(0, 0, 0, 0)
    return date
  }

  var last_day_of_month = lastDayOfMonth

  /**
   * @category Quarter Helpers
   * @summary Return the last day of a year quarter for the given date.
   *
   * @description
   * Return the last day of a year quarter for the given date.
   * The result will be in the local timezone.
   *
   * @param {Date|String|Number} date - the original date
   * @returns {Date} the last day of a quarter
   *
   * @example
   * // The last day of a quarter for 2 September 2014 11:55:00:
   * var result = lastDayOfQuarter(new Date(2014, 8, 2, 11, 55, 0))
   * //=> Tue Sep 30 2014 00:00:00
   */
  function lastDayOfQuarter(dirtyDate) {
    var date = parse_1(dirtyDate)
    var currentMonth = date.getMonth()
    var month = currentMonth - (currentMonth % 3) + 3
    date.setMonth(month, 0)
    date.setHours(0, 0, 0, 0)
    return date
  }

  var last_day_of_quarter = lastDayOfQuarter

  /**
   * @category Year Helpers
   * @summary Return the last day of a year for the given date.
   *
   * @description
   * Return the last day of a year for the given date.
   * The result will be in the local timezone.
   *
   * @param {Date|String|Number} date - the original date
   * @returns {Date} the last day of a year
   *
   * @example
   * // The last day of a year for 2 September 2014 11:55:00:
   * var result = lastDayOfYear(new Date(2014, 8, 2, 11, 55, 00))
   * //=> Wed Dec 31 2014 00:00:00
   */
  function lastDayOfYear(dirtyDate) {
    var date = parse_1(dirtyDate)
    var year = date.getFullYear()
    date.setFullYear(year + 1, 0, 0)
    date.setHours(0, 0, 0, 0)
    return date
  }

  var last_day_of_year = lastDayOfYear

  /**
   * @category Common Helpers
   * @summary Return the latest of the given dates.
   *
   * @description
   * Return the latest of the given dates.
   *
   * @param {...(Date|String|Number)} dates - the dates to compare
   * @returns {Date} the latest of the dates
   *
   * @example
   * // Which of these dates is the latest?
   * var result = max(
   *   new Date(1989, 6, 10),
   *   new Date(1987, 1, 11),
   *   new Date(1995, 6, 2),
   *   new Date(1990, 0, 1)
   * )
   * //=> Sun Jul 02 1995 00:00:00
   */
  function max$1() {
    var dirtyDates = Array.prototype.slice.call(arguments)
    var dates = dirtyDates.map(function(dirtyDate) {
      return parse_1(dirtyDate)
    })
    var latestTimestamp = Math.max.apply(null, dates)
    return new Date(latestTimestamp)
  }

  var max_1 = max$1

  /**
   * @category Common Helpers
   * @summary Return the earliest of the given dates.
   *
   * @description
   * Return the earliest of the given dates.
   *
   * @param {...(Date|String|Number)} dates - the dates to compare
   * @returns {Date} the earliest of the dates
   *
   * @example
   * // Which of these dates is the earliest?
   * var result = min(
   *   new Date(1989, 6, 10),
   *   new Date(1987, 1, 11),
   *   new Date(1995, 6, 2),
   *   new Date(1990, 0, 1)
   * )
   * //=> Wed Feb 11 1987 00:00:00
   */
  function min$1() {
    var dirtyDates = Array.prototype.slice.call(arguments)
    var dates = dirtyDates.map(function(dirtyDate) {
      return parse_1(dirtyDate)
    })
    var earliestTimestamp = Math.min.apply(null, dates)
    return new Date(earliestTimestamp)
  }

  var min_1 = min$1

  /**
   * @category Day Helpers
   * @summary Set the day of the month to the given date.
   *
   * @description
   * Set the day of the month to the given date.
   *
   * @param {Date|String|Number} date - the date to be changed
   * @param {Number} dayOfMonth - the day of the month of the new date
   * @returns {Date} the new date with the day of the month setted
   *
   * @example
   * // Set the 30th day of the month to 1 September 2014:
   * var result = setDate(new Date(2014, 8, 1), 30)
   * //=> Tue Sep 30 2014 00:00:00
   */
  function setDate(dirtyDate, dirtyDayOfMonth) {
    var date = parse_1(dirtyDate)
    var dayOfMonth = Number(dirtyDayOfMonth)
    date.setDate(dayOfMonth)
    return date
  }

  var set_date = setDate

  /**
   * @category Weekday Helpers
   * @summary Set the day of the week to the given date.
   *
   * @description
   * Set the day of the week to the given date.
   *
   * @param {Date|String|Number} date - the date to be changed
   * @param {Number} day - the day of the week of the new date
   * @param {Object} [options] - the object with options
   * @param {Number} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
   * @returns {Date} the new date with the day of the week setted
   *
   * @example
   * // Set Sunday to 1 September 2014:
   * var result = setDay(new Date(2014, 8, 1), 0)
   * //=> Sun Aug 31 2014 00:00:00
   *
   * @example
   * // If week starts with Monday, set Sunday to 1 September 2014:
   * var result = setDay(new Date(2014, 8, 1), 0, {weekStartsOn: 1})
   * //=> Sun Sep 07 2014 00:00:00
   */
  function setDay(dirtyDate, dirtyDay, dirtyOptions) {
    var weekStartsOn = dirtyOptions ? Number(dirtyOptions.weekStartsOn) || 0 : 0
    var date = parse_1(dirtyDate)
    var day = Number(dirtyDay)
    var currentDay = date.getDay()

    var remainder = day % 7
    var dayIndex = (remainder + 7) % 7

    var diff = (dayIndex < weekStartsOn ? 7 : 0) + day - currentDay
    return add_days(date, diff)
  }

  var set_day = setDay

  /**
   * @category Day Helpers
   * @summary Set the day of the year to the given date.
   *
   * @description
   * Set the day of the year to the given date.
   *
   * @param {Date|String|Number} date - the date to be changed
   * @param {Number} dayOfYear - the day of the year of the new date
   * @returns {Date} the new date with the day of the year setted
   *
   * @example
   * // Set the 2nd day of the year to 2 July 2014:
   * var result = setDayOfYear(new Date(2014, 6, 2), 2)
   * //=> Thu Jan 02 2014 00:00:00
   */
  function setDayOfYear(dirtyDate, dirtyDayOfYear) {
    var date = parse_1(dirtyDate)
    var dayOfYear = Number(dirtyDayOfYear)
    date.setMonth(0)
    date.setDate(dayOfYear)
    return date
  }

  var set_day_of_year = setDayOfYear

  /**
   * @category Hour Helpers
   * @summary Set the hours to the given date.
   *
   * @description
   * Set the hours to the given date.
   *
   * @param {Date|String|Number} date - the date to be changed
   * @param {Number} hours - the hours of the new date
   * @returns {Date} the new date with the hours setted
   *
   * @example
   * // Set 4 hours to 1 September 2014 11:30:00:
   * var result = setHours(new Date(2014, 8, 1, 11, 30), 4)
   * //=> Mon Sep 01 2014 04:30:00
   */
  function setHours(dirtyDate, dirtyHours) {
    var date = parse_1(dirtyDate)
    var hours = Number(dirtyHours)
    date.setHours(hours)
    return date
  }

  var set_hours = setHours

  /**
   * @category Weekday Helpers
   * @summary Set the day of the ISO week to the given date.
   *
   * @description
   * Set the day of the ISO week to the given date.
   * ISO week starts with Monday.
   * 7 is the index of Sunday, 1 is the index of Monday etc.
   *
   * @param {Date|String|Number} date - the date to be changed
   * @param {Number} day - the day of the ISO week of the new date
   * @returns {Date} the new date with the day of the ISO week setted
   *
   * @example
   * // Set Sunday to 1 September 2014:
   * var result = setISODay(new Date(2014, 8, 1), 7)
   * //=> Sun Sep 07 2014 00:00:00
   */
  function setISODay(dirtyDate, dirtyDay) {
    var date = parse_1(dirtyDate)
    var day = Number(dirtyDay)
    var currentDay = get_iso_day(date)
    var diff = day - currentDay
    return add_days(date, diff)
  }

  var set_iso_day = setISODay

  /**
   * @category ISO Week Helpers
   * @summary Set the ISO week to the given date.
   *
   * @description
   * Set the ISO week to the given date, saving the weekday number.
   *
   * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
   *
   * @param {Date|String|Number} date - the date to be changed
   * @param {Number} isoWeek - the ISO week of the new date
   * @returns {Date} the new date with the ISO week setted
   *
   * @example
   * // Set the 53rd ISO week to 7 August 2004:
   * var result = setISOWeek(new Date(2004, 7, 7), 53)
   * //=> Sat Jan 01 2005 00:00:00
   */
  function setISOWeek(dirtyDate, dirtyISOWeek) {
    var date = parse_1(dirtyDate)
    var isoWeek = Number(dirtyISOWeek)
    var diff = get_iso_week(date) - isoWeek
    date.setDate(date.getDate() - diff * 7)
    return date
  }

  var set_iso_week = setISOWeek

  /**
   * @category Millisecond Helpers
   * @summary Set the milliseconds to the given date.
   *
   * @description
   * Set the milliseconds to the given date.
   *
   * @param {Date|String|Number} date - the date to be changed
   * @param {Number} milliseconds - the milliseconds of the new date
   * @returns {Date} the new date with the milliseconds setted
   *
   * @example
   * // Set 300 milliseconds to 1 September 2014 11:30:40.500:
   * var result = setMilliseconds(new Date(2014, 8, 1, 11, 30, 40, 500), 300)
   * //=> Mon Sep 01 2014 11:30:40.300
   */
  function setMilliseconds(dirtyDate, dirtyMilliseconds) {
    var date = parse_1(dirtyDate)
    var milliseconds = Number(dirtyMilliseconds)
    date.setMilliseconds(milliseconds)
    return date
  }

  var set_milliseconds = setMilliseconds

  /**
   * @category Minute Helpers
   * @summary Set the minutes to the given date.
   *
   * @description
   * Set the minutes to the given date.
   *
   * @param {Date|String|Number} date - the date to be changed
   * @param {Number} minutes - the minutes of the new date
   * @returns {Date} the new date with the minutes setted
   *
   * @example
   * // Set 45 minutes to 1 September 2014 11:30:40:
   * var result = setMinutes(new Date(2014, 8, 1, 11, 30, 40), 45)
   * //=> Mon Sep 01 2014 11:45:40
   */
  function setMinutes(dirtyDate, dirtyMinutes) {
    var date = parse_1(dirtyDate)
    var minutes = Number(dirtyMinutes)
    date.setMinutes(minutes)
    return date
  }

  var set_minutes = setMinutes

  /**
   * @category Month Helpers
   * @summary Set the month to the given date.
   *
   * @description
   * Set the month to the given date.
   *
   * @param {Date|String|Number} date - the date to be changed
   * @param {Number} month - the month of the new date
   * @returns {Date} the new date with the month setted
   *
   * @example
   * // Set February to 1 September 2014:
   * var result = setMonth(new Date(2014, 8, 1), 1)
   * //=> Sat Feb 01 2014 00:00:00
   */
  function setMonth(dirtyDate, dirtyMonth) {
    var date = parse_1(dirtyDate)
    var month = Number(dirtyMonth)
    var year = date.getFullYear()
    var day = date.getDate()

    var dateWithDesiredMonth = new Date(0)
    dateWithDesiredMonth.setFullYear(year, month, 15)
    dateWithDesiredMonth.setHours(0, 0, 0, 0)
    var daysInMonth = get_days_in_month(dateWithDesiredMonth)
    // Set the last day of the new month
    // if the original date was the last day of the longer month
    date.setMonth(month, Math.min(day, daysInMonth))
    return date
  }

  var set_month = setMonth

  /**
   * @category Quarter Helpers
   * @summary Set the year quarter to the given date.
   *
   * @description
   * Set the year quarter to the given date.
   *
   * @param {Date|String|Number} date - the date to be changed
   * @param {Number} quarter - the quarter of the new date
   * @returns {Date} the new date with the quarter setted
   *
   * @example
   * // Set the 2nd quarter to 2 July 2014:
   * var result = setQuarter(new Date(2014, 6, 2), 2)
   * //=> Wed Apr 02 2014 00:00:00
   */
  function setQuarter(dirtyDate, dirtyQuarter) {
    var date = parse_1(dirtyDate)
    var quarter = Number(dirtyQuarter)
    var oldQuarter = Math.floor(date.getMonth() / 3) + 1
    var diff = quarter - oldQuarter
    return set_month(date, date.getMonth() + diff * 3)
  }

  var set_quarter = setQuarter

  /**
   * @category Second Helpers
   * @summary Set the seconds to the given date.
   *
   * @description
   * Set the seconds to the given date.
   *
   * @param {Date|String|Number} date - the date to be changed
   * @param {Number} seconds - the seconds of the new date
   * @returns {Date} the new date with the seconds setted
   *
   * @example
   * // Set 45 seconds to 1 September 2014 11:30:40:
   * var result = setSeconds(new Date(2014, 8, 1, 11, 30, 40), 45)
   * //=> Mon Sep 01 2014 11:30:45
   */
  function setSeconds(dirtyDate, dirtySeconds) {
    var date = parse_1(dirtyDate)
    var seconds = Number(dirtySeconds)
    date.setSeconds(seconds)
    return date
  }

  var set_seconds = setSeconds

  /**
   * @category Year Helpers
   * @summary Set the year to the given date.
   *
   * @description
   * Set the year to the given date.
   *
   * @param {Date|String|Number} date - the date to be changed
   * @param {Number} year - the year of the new date
   * @returns {Date} the new date with the year setted
   *
   * @example
   * // Set year 2013 to 1 September 2014:
   * var result = setYear(new Date(2014, 8, 1), 2013)
   * //=> Sun Sep 01 2013 00:00:00
   */
  function setYear(dirtyDate, dirtyYear) {
    var date = parse_1(dirtyDate)
    var year = Number(dirtyYear)
    date.setFullYear(year)
    return date
  }

  var set_year = setYear

  /**
   * @category Month Helpers
   * @summary Return the start of a month for the given date.
   *
   * @description
   * Return the start of a month for the given date.
   * The result will be in the local timezone.
   *
   * @param {Date|String|Number} date - the original date
   * @returns {Date} the start of a month
   *
   * @example
   * // The start of a month for 2 September 2014 11:55:00:
   * var result = startOfMonth(new Date(2014, 8, 2, 11, 55, 0))
   * //=> Mon Sep 01 2014 00:00:00
   */
  function startOfMonth(dirtyDate) {
    var date = parse_1(dirtyDate)
    date.setDate(1)
    date.setHours(0, 0, 0, 0)
    return date
  }

  var start_of_month = startOfMonth

  /**
   * @category Day Helpers
   * @summary Return the start of today.
   *
   * @description
   * Return the start of today.
   *
   * @returns {Date} the start of today
   *
   * @example
   * // If today is 6 October 2014:
   * var result = startOfToday()
   * //=> Mon Oct 6 2014 00:00:00
   */
  function startOfToday() {
    return start_of_day(new Date())
  }

  var start_of_today = startOfToday

  /**
   * @category Day Helpers
   * @summary Return the start of tomorrow.
   *
   * @description
   * Return the start of tomorrow.
   *
   * @returns {Date} the start of tomorrow
   *
   * @example
   * // If today is 6 October 2014:
   * var result = startOfTomorrow()
   * //=> Tue Oct 7 2014 00:00:00
   */
  function startOfTomorrow() {
    var now = new Date()
    var year = now.getFullYear()
    var month = now.getMonth()
    var day = now.getDate()

    var date = new Date(0)
    date.setFullYear(year, month, day + 1)
    date.setHours(0, 0, 0, 0)
    return date
  }

  var start_of_tomorrow = startOfTomorrow

  /**
   * @category Day Helpers
   * @summary Return the start of yesterday.
   *
   * @description
   * Return the start of yesterday.
   *
   * @returns {Date} the start of yesterday
   *
   * @example
   * // If today is 6 October 2014:
   * var result = startOfYesterday()
   * //=> Sun Oct 5 2014 00:00:00
   */
  function startOfYesterday() {
    var now = new Date()
    var year = now.getFullYear()
    var month = now.getMonth()
    var day = now.getDate()

    var date = new Date(0)
    date.setFullYear(year, month, day - 1)
    date.setHours(0, 0, 0, 0)
    return date
  }

  var start_of_yesterday = startOfYesterday

  /**
   * @category Day Helpers
   * @summary Subtract the specified number of days from the given date.
   *
   * @description
   * Subtract the specified number of days from the given date.
   *
   * @param {Date|String|Number} date - the date to be changed
   * @param {Number} amount - the amount of days to be subtracted
   * @returns {Date} the new date with the days subtracted
   *
   * @example
   * // Subtract 10 days from 1 September 2014:
   * var result = subDays(new Date(2014, 8, 1), 10)
   * //=> Fri Aug 22 2014 00:00:00
   */
  function subDays(dirtyDate, dirtyAmount) {
    var amount = Number(dirtyAmount)
    return add_days(dirtyDate, -amount)
  }

  var sub_days = subDays

  /**
   * @category Hour Helpers
   * @summary Subtract the specified number of hours from the given date.
   *
   * @description
   * Subtract the specified number of hours from the given date.
   *
   * @param {Date|String|Number} date - the date to be changed
   * @param {Number} amount - the amount of hours to be subtracted
   * @returns {Date} the new date with the hours subtracted
   *
   * @example
   * // Subtract 2 hours from 11 July 2014 01:00:00:
   * var result = subHours(new Date(2014, 6, 11, 1, 0), 2)
   * //=> Thu Jul 10 2014 23:00:00
   */
  function subHours(dirtyDate, dirtyAmount) {
    var amount = Number(dirtyAmount)
    return add_hours(dirtyDate, -amount)
  }

  var sub_hours = subHours

  /**
   * @category Millisecond Helpers
   * @summary Subtract the specified number of milliseconds from the given date.
   *
   * @description
   * Subtract the specified number of milliseconds from the given date.
   *
   * @param {Date|String|Number} date - the date to be changed
   * @param {Number} amount - the amount of milliseconds to be subtracted
   * @returns {Date} the new date with the milliseconds subtracted
   *
   * @example
   * // Subtract 750 milliseconds from 10 July 2014 12:45:30.000:
   * var result = subMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
   * //=> Thu Jul 10 2014 12:45:29.250
   */
  function subMilliseconds(dirtyDate, dirtyAmount) {
    var amount = Number(dirtyAmount)
    return add_milliseconds(dirtyDate, -amount)
  }

  var sub_milliseconds = subMilliseconds

  /**
   * @category Minute Helpers
   * @summary Subtract the specified number of minutes from the given date.
   *
   * @description
   * Subtract the specified number of minutes from the given date.
   *
   * @param {Date|String|Number} date - the date to be changed
   * @param {Number} amount - the amount of minutes to be subtracted
   * @returns {Date} the new date with the mintues subtracted
   *
   * @example
   * // Subtract 30 minutes from 10 July 2014 12:00:00:
   * var result = subMinutes(new Date(2014, 6, 10, 12, 0), 30)
   * //=> Thu Jul 10 2014 11:30:00
   */
  function subMinutes(dirtyDate, dirtyAmount) {
    var amount = Number(dirtyAmount)
    return add_minutes(dirtyDate, -amount)
  }

  var sub_minutes = subMinutes

  /**
   * @category Month Helpers
   * @summary Subtract the specified number of months from the given date.
   *
   * @description
   * Subtract the specified number of months from the given date.
   *
   * @param {Date|String|Number} date - the date to be changed
   * @param {Number} amount - the amount of months to be subtracted
   * @returns {Date} the new date with the months subtracted
   *
   * @example
   * // Subtract 5 months from 1 February 2015:
   * var result = subMonths(new Date(2015, 1, 1), 5)
   * //=> Mon Sep 01 2014 00:00:00
   */
  function subMonths(dirtyDate, dirtyAmount) {
    var amount = Number(dirtyAmount)
    return add_months(dirtyDate, -amount)
  }

  var sub_months = subMonths

  /**
   * @category Quarter Helpers
   * @summary Subtract the specified number of year quarters from the given date.
   *
   * @description
   * Subtract the specified number of year quarters from the given date.
   *
   * @param {Date|String|Number} date - the date to be changed
   * @param {Number} amount - the amount of quarters to be subtracted
   * @returns {Date} the new date with the quarters subtracted
   *
   * @example
   * // Subtract 3 quarters from 1 September 2014:
   * var result = subQuarters(new Date(2014, 8, 1), 3)
   * //=> Sun Dec 01 2013 00:00:00
   */
  function subQuarters(dirtyDate, dirtyAmount) {
    var amount = Number(dirtyAmount)
    return add_quarters(dirtyDate, -amount)
  }

  var sub_quarters = subQuarters

  /**
   * @category Second Helpers
   * @summary Subtract the specified number of seconds from the given date.
   *
   * @description
   * Subtract the specified number of seconds from the given date.
   *
   * @param {Date|String|Number} date - the date to be changed
   * @param {Number} amount - the amount of seconds to be subtracted
   * @returns {Date} the new date with the seconds subtracted
   *
   * @example
   * // Subtract 30 seconds from 10 July 2014 12:45:00:
   * var result = subSeconds(new Date(2014, 6, 10, 12, 45, 0), 30)
   * //=> Thu Jul 10 2014 12:44:30
   */
  function subSeconds(dirtyDate, dirtyAmount) {
    var amount = Number(dirtyAmount)
    return add_seconds(dirtyDate, -amount)
  }

  var sub_seconds = subSeconds

  /**
   * @category Week Helpers
   * @summary Subtract the specified number of weeks from the given date.
   *
   * @description
   * Subtract the specified number of weeks from the given date.
   *
   * @param {Date|String|Number} date - the date to be changed
   * @param {Number} amount - the amount of weeks to be subtracted
   * @returns {Date} the new date with the weeks subtracted
   *
   * @example
   * // Subtract 4 weeks from 1 September 2014:
   * var result = subWeeks(new Date(2014, 8, 1), 4)
   * //=> Mon Aug 04 2014 00:00:00
   */
  function subWeeks(dirtyDate, dirtyAmount) {
    var amount = Number(dirtyAmount)
    return add_weeks(dirtyDate, -amount)
  }

  var sub_weeks = subWeeks

  /**
   * @category Year Helpers
   * @summary Subtract the specified number of years from the given date.
   *
   * @description
   * Subtract the specified number of years from the given date.
   *
   * @param {Date|String|Number} date - the date to be changed
   * @param {Number} amount - the amount of years to be subtracted
   * @returns {Date} the new date with the years subtracted
   *
   * @example
   * // Subtract 5 years from 1 September 2014:
   * var result = subYears(new Date(2014, 8, 1), 5)
   * //=> Tue Sep 01 2009 00:00:00
   */
  function subYears(dirtyDate, dirtyAmount) {
    var amount = Number(dirtyAmount)
    return add_years(dirtyDate, -amount)
  }

  var sub_years = subYears

  var dateFns = {
    addDays: add_days,
    addHours: add_hours,
    addISOYears: add_iso_years,
    addMilliseconds: add_milliseconds,
    addMinutes: add_minutes,
    addMonths: add_months,
    addQuarters: add_quarters,
    addSeconds: add_seconds,
    addWeeks: add_weeks,
    addYears: add_years,
    areRangesOverlapping: are_ranges_overlapping,
    closestIndexTo: closest_index_to,
    closestTo: closest_to,
    compareAsc: compare_asc,
    compareDesc: compare_desc,
    differenceInCalendarDays: difference_in_calendar_days,
    differenceInCalendarISOWeeks: difference_in_calendar_iso_weeks,
    differenceInCalendarISOYears: difference_in_calendar_iso_years,
    differenceInCalendarMonths: difference_in_calendar_months,
    differenceInCalendarQuarters: difference_in_calendar_quarters,
    differenceInCalendarWeeks: difference_in_calendar_weeks,
    differenceInCalendarYears: difference_in_calendar_years,
    differenceInDays: difference_in_days,
    differenceInHours: difference_in_hours,
    differenceInISOYears: difference_in_iso_years,
    differenceInMilliseconds: difference_in_milliseconds,
    differenceInMinutes: difference_in_minutes,
    differenceInMonths: difference_in_months,
    differenceInQuarters: difference_in_quarters,
    differenceInSeconds: difference_in_seconds,
    differenceInWeeks: difference_in_weeks,
    differenceInYears: difference_in_years,
    distanceInWords: distance_in_words,
    distanceInWordsStrict: distance_in_words_strict,
    distanceInWordsToNow: distance_in_words_to_now,
    eachDay: each_day,
    endOfDay: end_of_day,
    endOfHour: end_of_hour,
    endOfISOWeek: end_of_iso_week,
    endOfISOYear: end_of_iso_year,
    endOfMinute: end_of_minute,
    endOfMonth: end_of_month,
    endOfQuarter: end_of_quarter,
    endOfSecond: end_of_second,
    endOfToday: end_of_today,
    endOfTomorrow: end_of_tomorrow,
    endOfWeek: end_of_week,
    endOfYear: end_of_year,
    endOfYesterday: end_of_yesterday,
    format: format_1,
    getDate: get_date,
    getDay: get_day,
    getDayOfYear: get_day_of_year,
    getDaysInMonth: get_days_in_month,
    getDaysInYear: get_days_in_year,
    getHours: get_hours,
    getISODay: get_iso_day,
    getISOWeek: get_iso_week,
    getISOWeeksInYear: get_iso_weeks_in_year,
    getISOYear: get_iso_year,
    getMilliseconds: get_milliseconds,
    getMinutes: get_minutes,
    getMonth: get_month,
    getOverlappingDaysInRanges: get_overlapping_days_in_ranges,
    getQuarter: get_quarter,
    getSeconds: get_seconds,
    getTime: get_time,
    getYear: get_year,
    isAfter: is_after,
    isBefore: is_before,
    isDate: is_date,
    isEqual: is_equal,
    isFirstDayOfMonth: is_first_day_of_month,
    isFriday: is_friday,
    isFuture: is_future,
    isLastDayOfMonth: is_last_day_of_month,
    isLeapYear: is_leap_year,
    isMonday: is_monday,
    isPast: is_past,
    isSameDay: is_same_day,
    isSameHour: is_same_hour,
    isSameISOWeek: is_same_iso_week,
    isSameISOYear: is_same_iso_year,
    isSameMinute: is_same_minute,
    isSameMonth: is_same_month,
    isSameQuarter: is_same_quarter,
    isSameSecond: is_same_second,
    isSameWeek: is_same_week,
    isSameYear: is_same_year,
    isSaturday: is_saturday,
    isSunday: is_sunday,
    isThisHour: is_this_hour,
    isThisISOWeek: is_this_iso_week,
    isThisISOYear: is_this_iso_year,
    isThisMinute: is_this_minute,
    isThisMonth: is_this_month,
    isThisQuarter: is_this_quarter,
    isThisSecond: is_this_second,
    isThisWeek: is_this_week,
    isThisYear: is_this_year,
    isThursday: is_thursday,
    isToday: is_today,
    isTomorrow: is_tomorrow,
    isTuesday: is_tuesday,
    isValid: is_valid,
    isWednesday: is_wednesday,
    isWeekend: is_weekend,
    isWithinRange: is_within_range,
    isYesterday: is_yesterday,
    lastDayOfISOWeek: last_day_of_iso_week,
    lastDayOfISOYear: last_day_of_iso_year,
    lastDayOfMonth: last_day_of_month,
    lastDayOfQuarter: last_day_of_quarter,
    lastDayOfWeek: last_day_of_week,
    lastDayOfYear: last_day_of_year,
    max: max_1,
    min: min_1,
    parse: parse_1,
    setDate: set_date,
    setDay: set_day,
    setDayOfYear: set_day_of_year,
    setHours: set_hours,
    setISODay: set_iso_day,
    setISOWeek: set_iso_week,
    setISOYear: set_iso_year,
    setMilliseconds: set_milliseconds,
    setMinutes: set_minutes,
    setMonth: set_month,
    setQuarter: set_quarter,
    setSeconds: set_seconds,
    setYear: set_year,
    startOfDay: start_of_day,
    startOfHour: start_of_hour,
    startOfISOWeek: start_of_iso_week,
    startOfISOYear: start_of_iso_year,
    startOfMinute: start_of_minute,
    startOfMonth: start_of_month,
    startOfQuarter: start_of_quarter,
    startOfSecond: start_of_second,
    startOfToday: start_of_today,
    startOfTomorrow: start_of_tomorrow,
    startOfWeek: start_of_week,
    startOfYear: start_of_year,
    startOfYesterday: start_of_yesterday,
    subDays: sub_days,
    subHours: sub_hours,
    subISOYears: sub_iso_years,
    subMilliseconds: sub_milliseconds,
    subMinutes: sub_minutes,
    subMonths: sub_months,
    subQuarters: sub_quarters,
    subSeconds: sub_seconds,
    subWeeks: sub_weeks,
    subYears: sub_years,
  }
  var dateFns_132 = dateFns.startOfDay
  var dateFns_136 = dateFns.startOfMinute
  var dateFns_137 = dateFns.startOfMonth
  var dateFns_139 = dateFns.startOfSecond
  var dateFns_142 = dateFns.startOfWeek
  var dateFns_143 = dateFns.startOfYear

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
        return addMonths$1(d, num * multiplierMonth[unit])
    }

    throw new TypeError('Invalid units: "' + unit + '"')
  }

  function addMillis(d, num) {
    var nextDate = new Date(+d + num)
    return solveDST(d, nextDate)
  }

  function addMonths$1(d, num) {
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
      d = dateFns_137(d)
      return subtract(d, year(d) % 100, 'year')
    }),
    (_startOfs[DECADE] = function(d) {
      d = dateFns_137(d)
      return subtract(d, year(d) % 10, 'year')
    }),
    (_startOfs[YEAR] = dateFns_143),
    (_startOfs[MONTH] = dateFns_137),
    (_startOfs[WEEK] = dateFns_142),
    (_startOfs[DAY] = dateFns_132),
    (_startOfs[MINUTES] = dateFns_136),
    (_startOfs[SECONDS] = dateFns_139),
    _startOfs)
  function startOf(d, unit, firstOfWeek) {
    if (!unit) return d
    var startOfUnit = startOfs[unit]
    if (!startOfUnit) return d
    return startOfUnit(d, {
      weekStartsOn: firstOfWeek,
    })
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
  var eq$1 = createComparer(function(a, b) {
    return a === b
  })
  var gt = createComparer(function(a, b) {
    return a > b
  })
  var gte = createComparer(function(a, b) {
    return a >= b
  })
  var lt = createComparer(function(a, b) {
    return a < b
  })
  var lte = createComparer(function(a, b) {
    return a <= b
  })
  function min$2() {
    return new Date(Math.min.apply(Math, arguments))
  }
  function max$2() {
    return new Date(Math.max.apply(Math, arguments))
  }
  function inRange(day, min, max, unit) {
    unit = unit || 'day'
    return (!min || gte(day, min, unit)) && (!max || lte(day, max, unit))
  }
  var milliseconds = createAccessor('Milliseconds')
  var seconds = createAccessor('Seconds')
  var minutes = createAccessor('Minutes')
  var hours = createAccessor('Hours')
  var month = createAccessor('Month')
  var year = createAccessor('FullYear')

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

  /* eslint no-fallthrough: off */
  var MILLI = {
    seconds: 1000,
    minutes: 1000 * 60,
    hours: 1000 * 60 * 60,
    day: 1000 * 60 * 60 * 24,
  }
  function firstVisibleDay(date, localizer) {
    var firstOfMonth = startOf(date, 'month')
    return startOf(firstOfMonth, 'week', localizer.startOfWeek())
  }
  function lastVisibleDay(date, localizer) {
    var endOfMonth = endOf(date, 'month')
    return endOf(endOfMonth, 'week', localizer.startOfWeek())
  }
  function visibleDays(date, localizer) {
    var current = firstVisibleDay(date, localizer),
      last = lastVisibleDay(date, localizer),
      days = []

    while (lte(current, last, 'day')) {
      days.push(current)
      current = add(current, 1, 'day')
    }

    return days
  }
  function ceil(date, unit) {
    var floor = startOf(date, unit)
    return eq$1(floor, date) ? floor : add(floor, 1, unit)
  }
  function range(start, end, unit) {
    if (unit === void 0) {
      unit = 'day'
    }

    var current = start,
      days = []

    while (lte(current, end, unit)) {
      days.push(current)
      current = add(current, 1, unit)
    }

    return days
  }
  function merge(date, time) {
    if (time == null && date == null) return null
    if (time == null) time = new Date()
    if (date == null) date = new Date()
    date = startOf(date, 'day')
    date = hours(date, hours(time))
    date = minutes(date, minutes(time))
    date = seconds(date, seconds(time))
    return milliseconds(date, milliseconds(time))
  }
  function isJustDate(date) {
    return (
      hours(date) === 0 &&
      minutes(date) === 0 &&
      seconds(date) === 0 &&
      milliseconds(date) === 0
    )
  }
  function diff(dateA, dateB, unit) {
    if (!unit || unit === 'milliseconds') return Math.abs(+dateA - +dateB) // the .round() handles an edge case
    // with DST where the total won't be exact
    // since one day in the range may be shorter/longer by an hour

    return Math.round(
      Math.abs(
        +startOf(dateA, unit) / MILLI[unit] -
          +startOf(dateB, unit) / MILLI[unit]
      )
    )
  }

  function isSelected(event, selected) {
    if (!event || selected == null) return false
    return [].concat(selected).indexOf(event) !== -1
  }
  function slotWidth(rowBox, slots) {
    var rowWidth = rowBox.right - rowBox.left
    var cellWidth = rowWidth / slots
    return cellWidth
  }
  function getSlotAtX(rowBox, x, rtl, slots) {
    var cellWidth = slotWidth(rowBox, slots)
    return rtl
      ? slots - 1 - Math.floor((x - rowBox.left) / cellWidth)
      : Math.floor((x - rowBox.left) / cellWidth)
  }
  function pointInBox(box, _ref) {
    var x = _ref.x,
      y = _ref.y
    return y >= box.top && y <= box.bottom && x >= box.left && x <= box.right
  }
  function dateCellSelection(start, rowBox, box, slots, rtl) {
    var startIdx = -1
    var endIdx = -1
    var lastSlotIdx = slots - 1
    var cellWidth = slotWidth(rowBox, slots) // cell under the mouse

    var currentSlot = getSlotAtX(rowBox, box.x, rtl, slots) // Identify row as either the initial row
    // or the row under the current mouse point

    var isCurrentRow = rowBox.top < box.y && rowBox.bottom > box.y
    var isStartRow = rowBox.top < start.y && rowBox.bottom > start.y // this row's position relative to the start point

    var isAboveStart = start.y > rowBox.bottom
    var isBelowStart = rowBox.top > start.y
    var isBetween = box.top < rowBox.top && box.bottom > rowBox.bottom // this row is between the current and start rows, so entirely selected

    if (isBetween) {
      startIdx = 0
      endIdx = lastSlotIdx
    }

    if (isCurrentRow) {
      if (isBelowStart) {
        startIdx = 0
        endIdx = currentSlot
      } else if (isAboveStart) {
        startIdx = currentSlot
        endIdx = lastSlotIdx
      }
    }

    if (isStartRow) {
      // select the cell under the initial point
      startIdx = endIdx = rtl
        ? lastSlotIdx - Math.floor((start.x - rowBox.left) / cellWidth)
        : Math.floor((start.x - rowBox.left) / cellWidth)

      if (isCurrentRow) {
        if (currentSlot < startIdx) startIdx = currentSlot
        else endIdx = currentSlot //select current range
      } else if (start.y < box.y) {
        // the current row is below start row
        // select cells to the right of the start cell
        endIdx = lastSlotIdx
      } else {
        // select cells to the left of the start cell
        startIdx = 0
      }
    }

    return {
      startIdx: startIdx,
      endIdx: endIdx,
    }
  }

  var matchesImpl
  /**
   * Checks if a given element matches a selector.
   *
   * @param node the element
   * @param selector the selector
   */

  function matches(node, selector) {
    if (!matchesImpl) {
      var body = document.body
      var nativeMatch =
        body.matches ||
        body.matchesSelector ||
        body.webkitMatchesSelector ||
        body.mozMatchesSelector ||
        body.msMatchesSelector

      matchesImpl = function matchesImpl(n, s) {
        return nativeMatch.call(n, s)
      }
    }

    return matchesImpl(node, selector)
  }

  /**
   * Returns the closest parent element that matches a given selector.
   *
   * @param node the reference element
   * @param selector the selector to match
   * @param stopAt stop traversing when this element is found
   */

  function closest(node, selector, stopAt) {
    if (node.closest && !stopAt) node.closest(selector)
    var nextNode = node

    do {
      if (matches(nextNode, selector)) return nextNode
      nextNode = nextNode.parentElement
    } while (nextNode && nextNode !== stopAt && nextNode.nodeType === document.ELEMENT_NODE)

    return null
  }

  function addEventListener$1(type, handler, target) {
    if (target === void 0) {
      target = document
    }

    return listen(target, type, handler, {
      passive: false,
    })
  }

  function isOverContainer(container, x, y) {
    return !container || contains(container, document.elementFromPoint(x, y))
  }
  function getEventNodeFromPoint(node, _ref) {
    var x = _ref.x,
      y = _ref.y,
      clientX = _ref.clientX,
      clientY = _ref.clientY
    var target = document.elementFromPoint(
      clientX != null ? clientX : x,
      clientY != null ? clientY : y
    )
    return closest(target, '.rbc-event', node)
  }
  function isEvent(node, bounds) {
    return !!getEventNodeFromPoint(node, bounds)
  }

  function getEventCoordinates(e) {
    var target = e

    if (e.touches && e.touches.length) {
      target = e.touches[0]
    }

    return {
      clientX: target.clientX,
      clientY: target.clientY,
      pageX: target.pageX,
      pageY: target.pageY,
    }
  }

  var clickTolerance = 5
  var clickInterval = 250

  var Selection = /*#__PURE__*/ (function() {
    function Selection(node, _temp) {
      var _ref2 = _temp === void 0 ? {} : _temp,
        _ref2$global = _ref2.global,
        global = _ref2$global === void 0 ? false : _ref2$global,
        _ref2$longPressThresh = _ref2.longPressThreshold,
        longPressThreshold =
          _ref2$longPressThresh === void 0 ? 250 : _ref2$longPressThresh

      this.isDetached = false
      this.container = node
      this.globalMouse = !node || global
      this.longPressThreshold = longPressThreshold
      this._listeners = Object.create(null)
      this._handleInitialEvent = this._handleInitialEvent.bind(this)
      this._handleMoveEvent = this._handleMoveEvent.bind(this)
      this._handleTerminatingEvent = this._handleTerminatingEvent.bind(this)
      this._keyListener = this._keyListener.bind(this)
      this._dropFromOutsideListener = this._dropFromOutsideListener.bind(this)
      this._dragOverFromOutsideListener = this._dragOverFromOutsideListener.bind(
        this
      ) // Fixes an iOS 10 bug where scrolling could not be prevented on the window.
      // https://github.com/metafizzy/flickity/issues/457#issuecomment-254501356

      this._removeTouchMoveWindowListener = addEventListener$1(
        'touchmove',
        function() {},
        window
      )
      this._removeKeyDownListener = addEventListener$1(
        'keydown',
        this._keyListener
      )
      this._removeKeyUpListener = addEventListener$1('keyup', this._keyListener)
      this._removeDropFromOutsideListener = addEventListener$1(
        'drop',
        this._dropFromOutsideListener
      )
      this._removeDragOverFromOutsideListener = addEventListener$1(
        'dragover',
        this._dragOverFromOutsideListener
      )

      this._addInitialEventListener()
    }

    var _proto = Selection.prototype

    _proto.on = function on(type, handler) {
      var handlers = this._listeners[type] || (this._listeners[type] = [])
      handlers.push(handler)
      return {
        remove: function remove() {
          var idx = handlers.indexOf(handler)
          if (idx !== -1) handlers.splice(idx, 1)
        },
      }
    }

    _proto.emit = function emit(type) {
      for (
        var _len = arguments.length,
          args = new Array(_len > 1 ? _len - 1 : 0),
          _key = 1;
        _key < _len;
        _key++
      ) {
        args[_key - 1] = arguments[_key]
      }

      var result
      var handlers = this._listeners[type] || []
      handlers.forEach(function(fn) {
        if (result === undefined) result = fn.apply(void 0, args)
      })
      return result
    }

    _proto.teardown = function teardown() {
      this.isDetached = true
      this.listeners = Object.create(null)
      this._removeTouchMoveWindowListener &&
        this._removeTouchMoveWindowListener()
      this._removeInitialEventListener && this._removeInitialEventListener()
      this._removeEndListener && this._removeEndListener()
      this._onEscListener && this._onEscListener()
      this._removeMoveListener && this._removeMoveListener()
      this._removeKeyUpListener && this._removeKeyUpListener()
      this._removeKeyDownListener && this._removeKeyDownListener()
      this._removeDropFromOutsideListener &&
        this._removeDropFromOutsideListener()
      this._removeDragOverFromOutsideListener &&
        this._removeDragOverFromOutsideListener()
    }

    _proto.isSelected = function isSelected(node) {
      var box = this._selectRect
      if (!box || !this.selecting) return false
      return objectsCollide(box, getBoundsForNode(node))
    }

    _proto.filter = function filter(items) {
      var box = this._selectRect //not selecting

      if (!box || !this.selecting) return []
      return items.filter(this.isSelected, this)
    } // Adds a listener that will call the handler only after the user has pressed on the screen
    // without moving their finger for 250ms or fire Click event.

    _proto._addLongPressOrClickListener = function _addLongPressOrClickListener(
      handler,
      initialEvent
    ) {
      var _this = this

      var timer = null
      var removeTouchMoveListener = null
      var removeTouchEndListener = null

      var handleTouchStart = function handleTouchStart(initialEvent) {
        timer = setTimeout(function() {
          cleanup()
          handler(initialEvent)
        }, _this.longPressThreshold)
        removeTouchMoveListener = addEventListener$1('touchmove', function() {
          return cleanup()
        }) // removeTouchEndListener = addEventListener('touchend', () => cleanup())

        removeTouchEndListener = addEventListener$1('touchend', function(e) {
          _this._handleClickEvent(e)

          cleanup()
        })
      }

      var removeTouchStartListener = addEventListener$1(
        'touchstart',
        handleTouchStart
      )

      var cleanup = function cleanup() {
        if (timer) {
          clearTimeout(timer)
        }

        if (removeTouchMoveListener) {
          removeTouchMoveListener()
        }

        if (removeTouchEndListener) {
          removeTouchEndListener()
        }

        timer = null
        removeTouchMoveListener = null
        removeTouchEndListener = null
      }

      if (initialEvent) {
        handleTouchStart(initialEvent)
      }

      return function() {
        cleanup()
        removeTouchStartListener()
      }
    } // Listen for mousedown and touchstart events. When one is received, disable the other and setup
    // future event handling based on the type of event.

    _proto._addInitialEventListener = function _addInitialEventListener() {
      var _this2 = this

      var removeMouseDownListener = addEventListener$1('mousedown', function(
        e
      ) {
        _this2._removeInitialEventListener()

        _this2._handleInitialEvent(e)

        _this2._removeInitialEventListener = addEventListener$1(
          'mousedown',
          _this2._handleInitialEvent
        )
      })
      var removeTouchStartListener = addEventListener$1('touchstart', function(
        e
      ) {
        _this2._removeInitialEventListener()

        _this2._removeInitialEventListener = _this2._addLongPressOrClickListener(
          _this2._handleInitialEvent,
          e
        )
      })

      this._removeInitialEventListener = function() {
        removeMouseDownListener()
        removeTouchStartListener()
      }
    }

    _proto._dropFromOutsideListener = function _dropFromOutsideListener(e) {
      var _getEventCoordinates = getEventCoordinates(e),
        pageX = _getEventCoordinates.pageX,
        pageY = _getEventCoordinates.pageY,
        clientX = _getEventCoordinates.clientX,
        clientY = _getEventCoordinates.clientY

      this.emit('dropFromOutside', {
        x: pageX,
        y: pageY,
        clientX: clientX,
        clientY: clientY,
      })
      e.preventDefault()
    }

    _proto._dragOverFromOutsideListener = function _dragOverFromOutsideListener(
      e
    ) {
      var _getEventCoordinates2 = getEventCoordinates(e),
        pageX = _getEventCoordinates2.pageX,
        pageY = _getEventCoordinates2.pageY,
        clientX = _getEventCoordinates2.clientX,
        clientY = _getEventCoordinates2.clientY

      this.emit('dragOverFromOutside', {
        x: pageX,
        y: pageY,
        clientX: clientX,
        clientY: clientY,
      })
      e.preventDefault()
    }

    _proto._handleInitialEvent = function _handleInitialEvent(e) {
      if (this.isDetached) {
        return
      }

      var _getEventCoordinates3 = getEventCoordinates(e),
        clientX = _getEventCoordinates3.clientX,
        clientY = _getEventCoordinates3.clientY,
        pageX = _getEventCoordinates3.pageX,
        pageY = _getEventCoordinates3.pageY

      var node = this.container(),
        collides,
        offsetData // Right clicks

      if (
        e.which === 3 ||
        e.button === 2 ||
        !isOverContainer(node, clientX, clientY)
      )
        return

      if (!this.globalMouse && node && !contains(node, e.target)) {
        var _normalizeDistance = normalizeDistance(0),
          top = _normalizeDistance.top,
          left = _normalizeDistance.left,
          bottom = _normalizeDistance.bottom,
          right = _normalizeDistance.right

        offsetData = getBoundsForNode(node)
        collides = objectsCollide(
          {
            top: offsetData.top - top,
            left: offsetData.left - left,
            bottom: offsetData.bottom + bottom,
            right: offsetData.right + right,
          },
          {
            top: pageY,
            left: pageX,
          }
        )
        if (!collides) return
      }

      var result = this.emit(
        'beforeSelect',
        (this._initialEventData = {
          isTouch: /^touch/.test(e.type),
          x: pageX,
          y: pageY,
          clientX: clientX,
          clientY: clientY,
        })
      )
      if (result === false) return

      switch (e.type) {
        case 'mousedown':
          this._removeEndListener = addEventListener$1(
            'mouseup',
            this._handleTerminatingEvent
          )
          this._onEscListener = addEventListener$1(
            'keydown',
            this._handleTerminatingEvent
          )
          this._removeMoveListener = addEventListener$1(
            'mousemove',
            this._handleMoveEvent
          )
          break

        case 'touchstart':
          this._handleMoveEvent(e)

          this._removeEndListener = addEventListener$1(
            'touchend',
            this._handleTerminatingEvent
          )
          this._removeMoveListener = addEventListener$1(
            'touchmove',
            this._handleMoveEvent
          )
          break
      }
    }

    _proto._handleTerminatingEvent = function _handleTerminatingEvent(e) {
      var _getEventCoordinates4 = getEventCoordinates(e),
        pageX = _getEventCoordinates4.pageX,
        pageY = _getEventCoordinates4.pageY

      this.selecting = false
      this._removeEndListener && this._removeEndListener()
      this._removeMoveListener && this._removeMoveListener()
      if (!this._initialEventData) return
      var inRoot = !this.container || contains(this.container(), e.target)
      var bounds = this._selectRect
      var click = this.isClick(pageX, pageY)
      this._initialEventData = null

      if (e.key === 'Escape') {
        return this.emit('reset')
      }

      if (!inRoot) {
        return this.emit('reset')
      }

      if (click && inRoot) {
        return this._handleClickEvent(e)
      } // User drag-clicked in the Selectable area

      if (!click) return this.emit('select', bounds)
    }

    _proto._handleClickEvent = function _handleClickEvent(e) {
      var _getEventCoordinates5 = getEventCoordinates(e),
        pageX = _getEventCoordinates5.pageX,
        pageY = _getEventCoordinates5.pageY,
        clientX = _getEventCoordinates5.clientX,
        clientY = _getEventCoordinates5.clientY

      var now = new Date().getTime()

      if (
        this._lastClickData &&
        now - this._lastClickData.timestamp < clickInterval
      ) {
        // Double click event
        this._lastClickData = null
        return this.emit('doubleClick', {
          x: pageX,
          y: pageY,
          clientX: clientX,
          clientY: clientY,
        })
      } // Click event

      this._lastClickData = {
        timestamp: now,
      }
      return this.emit('click', {
        x: pageX,
        y: pageY,
        clientX: clientX,
        clientY: clientY,
      })
    }

    _proto._handleMoveEvent = function _handleMoveEvent(e) {
      if (this._initialEventData === null || this.isDetached) {
        return
      }

      var _this$_initialEventDa = this._initialEventData,
        x = _this$_initialEventDa.x,
        y = _this$_initialEventDa.y

      var _getEventCoordinates6 = getEventCoordinates(e),
        pageX = _getEventCoordinates6.pageX,
        pageY = _getEventCoordinates6.pageY

      var w = Math.abs(x - pageX)
      var h = Math.abs(y - pageY)
      var left = Math.min(pageX, x),
        top = Math.min(pageY, y),
        old = this.selecting // Prevent emitting selectStart event until mouse is moved.
      // in Chrome on Windows, mouseMove event may be fired just after mouseDown event.

      if (this.isClick(pageX, pageY) && !old && !(w || h)) {
        return
      }

      this.selecting = true
      this._selectRect = {
        top: top,
        left: left,
        x: pageX,
        y: pageY,
        right: left + w,
        bottom: top + h,
      }

      if (!old) {
        this.emit('selectStart', this._initialEventData)
      }

      if (!this.isClick(pageX, pageY)) this.emit('selecting', this._selectRect)
      e.preventDefault()
    }

    _proto._keyListener = function _keyListener(e) {
      this.ctrl = e.metaKey || e.ctrlKey
    }

    _proto.isClick = function isClick(pageX, pageY) {
      var _this$_initialEventDa2 = this._initialEventData,
        x = _this$_initialEventDa2.x,
        y = _this$_initialEventDa2.y,
        isTouch = _this$_initialEventDa2.isTouch
      return (
        !isTouch &&
        Math.abs(pageX - x) <= clickTolerance &&
        Math.abs(pageY - y) <= clickTolerance
      )
    }

    return Selection
  })()
  /**
   * Resolve the disance prop from either an Int or an Object
   * @return {Object}
   */

  function normalizeDistance(distance) {
    if (distance === void 0) {
      distance = 0
    }

    if (typeof distance !== 'object')
      distance = {
        top: distance,
        left: distance,
        right: distance,
        bottom: distance,
      }
    return distance
  }
  /**
   * Given two objects containing "top", "left", "offsetWidth" and "offsetHeight"
   * properties, determine if they collide.
   * @param  {Object|HTMLElement} a
   * @param  {Object|HTMLElement} b
   * @return {bool}
   */

  function objectsCollide(nodeA, nodeB, tolerance) {
    if (tolerance === void 0) {
      tolerance = 0
    }

    var _getBoundsForNode = getBoundsForNode(nodeA),
      aTop = _getBoundsForNode.top,
      aLeft = _getBoundsForNode.left,
      _getBoundsForNode$rig = _getBoundsForNode.right,
      aRight = _getBoundsForNode$rig === void 0 ? aLeft : _getBoundsForNode$rig,
      _getBoundsForNode$bot = _getBoundsForNode.bottom,
      aBottom = _getBoundsForNode$bot === void 0 ? aTop : _getBoundsForNode$bot

    var _getBoundsForNode2 = getBoundsForNode(nodeB),
      bTop = _getBoundsForNode2.top,
      bLeft = _getBoundsForNode2.left,
      _getBoundsForNode2$ri = _getBoundsForNode2.right,
      bRight = _getBoundsForNode2$ri === void 0 ? bLeft : _getBoundsForNode2$ri,
      _getBoundsForNode2$bo = _getBoundsForNode2.bottom,
      bBottom = _getBoundsForNode2$bo === void 0 ? bTop : _getBoundsForNode2$bo

    return !(
      // 'a' bottom doesn't touch 'b' top
      (
        aBottom - tolerance < bTop || // 'a' top doesn't touch 'b' bottom
        aTop + tolerance > bBottom || // 'a' right doesn't touch 'b' left
        aRight - tolerance < bLeft || // 'a' left doesn't touch 'b' right
        aLeft + tolerance > bRight
      )
    )
  }
  /**
   * Given a node, get everything needed to calculate its boundaries
   * @param  {HTMLElement} node
   * @return {Object}
   */

  function getBoundsForNode(node) {
    if (!node.getBoundingClientRect) return node
    var rect = node.getBoundingClientRect(),
      left = rect.left + pageOffset('left'),
      top = rect.top + pageOffset('top')
    return {
      top: top,
      left: left,
      right: (node.offsetWidth || 0) + left,
      bottom: (node.offsetHeight || 0) + top,
    }
  }

  function pageOffset(dir) {
    if (dir === 'left')
      return window.pageXOffset || document.body.scrollLeft || 0
    if (dir === 'top') return window.pageYOffset || document.body.scrollTop || 0
  }

  var BackgroundCells = /*#__PURE__*/ (function(_React$Component) {
    _inheritsLoose(BackgroundCells, _React$Component)

    function BackgroundCells(props, context) {
      var _this

      _this = _React$Component.call(this, props, context) || this
      _this.state = {
        selecting: false,
      }
      return _this
    }

    var _proto = BackgroundCells.prototype

    _proto.componentDidMount = function componentDidMount() {
      this.props.selectable && this._selectable()
    }

    _proto.componentWillUnmount = function componentWillUnmount() {
      this._teardownSelectable()
    }

    _proto.UNSAFE_componentWillReceiveProps = function UNSAFE_componentWillReceiveProps(
      nextProps
    ) {
      if (nextProps.selectable && !this.props.selectable) this._selectable()
      if (!nextProps.selectable && this.props.selectable)
        this._teardownSelectable()
    }

    _proto.render = function render() {
      var _this$props = this.props,
        range = _this$props.range,
        getNow = _this$props.getNow,
        getters = _this$props.getters,
        currentDate = _this$props.date,
        Wrapper = _this$props.components.dateCellWrapper
      var _this$state = this.state,
        selecting = _this$state.selecting,
        startIdx = _this$state.startIdx,
        endIdx = _this$state.endIdx
      var current = getNow()
      return /*#__PURE__*/ React__default.createElement(
        'div',
        {
          className: 'rbc-row-bg',
        },
        range.map(function(date, index) {
          var selected = selecting && index >= startIdx && index <= endIdx

          var _getters$dayProp = getters.dayProp(date),
            className = _getters$dayProp.className,
            style = _getters$dayProp.style

          return /*#__PURE__*/ React__default.createElement(
            Wrapper,
            {
              key: index,
              value: date,
              range: range,
            },
            /*#__PURE__*/ React__default.createElement('div', {
              style: style,
              className: clsx(
                'rbc-day-bg',
                className,
                selected && 'rbc-selected-cell',
                eq$1(date, current, 'day') && 'rbc-today',
                currentDate &&
                  month(currentDate) !== month(date) &&
                  'rbc-off-range-bg'
              ),
            })
          )
        })
      )
    }

    _proto._selectable = function _selectable() {
      var _this2 = this

      var node = ReactDOM.findDOMNode(this)
      var selector = (this._selector = new Selection(this.props.container, {
        longPressThreshold: this.props.longPressThreshold,
      }))

      var selectorClicksHandler = function selectorClicksHandler(
        point,
        actionType
      ) {
        if (!isEvent(ReactDOM.findDOMNode(_this2), point)) {
          var rowBox = getBoundsForNode(node)
          var _this2$props = _this2.props,
            range = _this2$props.range,
            rtl = _this2$props.rtl

          if (pointInBox(rowBox, point)) {
            var currentCell = getSlotAtX(rowBox, point.x, rtl, range.length)

            _this2._selectSlot({
              startIdx: currentCell,
              endIdx: currentCell,
              action: actionType,
              box: point,
            })
          }
        }

        _this2._initial = {}

        _this2.setState({
          selecting: false,
        })
      }

      selector.on('selecting', function(box) {
        var _this2$props2 = _this2.props,
          range = _this2$props2.range,
          rtl = _this2$props2.rtl
        var startIdx = -1
        var endIdx = -1

        if (!_this2.state.selecting) {
          notify(_this2.props.onSelectStart, [box])
          _this2._initial = {
            x: box.x,
            y: box.y,
          }
        }

        if (selector.isSelected(node)) {
          var nodeBox = getBoundsForNode(node)

          var _dateCellSelection = dateCellSelection(
            _this2._initial,
            nodeBox,
            box,
            range.length,
            rtl
          )

          startIdx = _dateCellSelection.startIdx
          endIdx = _dateCellSelection.endIdx
        }

        _this2.setState({
          selecting: true,
          startIdx: startIdx,
          endIdx: endIdx,
        })
      })
      selector.on('beforeSelect', function(box) {
        if (_this2.props.selectable !== 'ignoreEvents') return
        return !isEvent(ReactDOM.findDOMNode(_this2), box)
      })
      selector.on('click', function(point) {
        return selectorClicksHandler(point, 'click')
      })
      selector.on('doubleClick', function(point) {
        return selectorClicksHandler(point, 'doubleClick')
      })
      selector.on('select', function(bounds) {
        _this2._selectSlot(
          _extends({}, _this2.state, {
            action: 'select',
            bounds: bounds,
          })
        )

        _this2._initial = {}

        _this2.setState({
          selecting: false,
        })

        notify(_this2.props.onSelectEnd, [_this2.state])
      })
    }

    _proto._teardownSelectable = function _teardownSelectable() {
      if (!this._selector) return

      this._selector.teardown()

      this._selector = null
    }

    _proto._selectSlot = function _selectSlot(_ref) {
      var endIdx = _ref.endIdx,
        startIdx = _ref.startIdx,
        action = _ref.action,
        bounds = _ref.bounds,
        box = _ref.box
      if (endIdx !== -1 && startIdx !== -1)
        this.props.onSelectSlot &&
          this.props.onSelectSlot({
            start: startIdx,
            end: endIdx,
            action: action,
            bounds: bounds,
            box: box,
            resourceId: this.props.resourceId,
          })
    }

    return BackgroundCells
  })(React__default.Component)

  BackgroundCells.propTypes = {
    date: propTypes.instanceOf(Date),
    getNow: propTypes.func.isRequired,
    getters: propTypes.object.isRequired,
    components: propTypes.object.isRequired,
    container: propTypes.func,
    dayPropGetter: propTypes.func,
    selectable: propTypes.oneOf([true, false, 'ignoreEvents']),
    longPressThreshold: propTypes.number,
    onSelectSlot: propTypes.func.isRequired,
    onSelectEnd: propTypes.func,
    onSelectStart: propTypes.func,
    range: propTypes.arrayOf(propTypes.instanceOf(Date)),
    rtl: propTypes.bool,
    type: propTypes.string,
    resourceId: propTypes.any,
  }

  var _excluded = [
    'style',
    'className',
    'event',
    'selected',
    'isAllDay',
    'onSelect',
    'onDoubleClick',
    'onKeyPress',
    'localizer',
    'continuesPrior',
    'continuesAfter',
    'accessors',
    'getters',
    'children',
    'components',
    'slotStart',
    'slotEnd',
  ]

  var EventCell = /*#__PURE__*/ (function(_React$Component) {
    _inheritsLoose(EventCell, _React$Component)

    function EventCell() {
      return _React$Component.apply(this, arguments) || this
    }

    var _proto = EventCell.prototype

    _proto.render = function render() {
      var _this$props = this.props,
        style = _this$props.style,
        className = _this$props.className,
        event = _this$props.event,
        selected = _this$props.selected,
        isAllDay = _this$props.isAllDay,
        onSelect = _this$props.onSelect,
        _onDoubleClick = _this$props.onDoubleClick,
        _onKeyPress = _this$props.onKeyPress,
        localizer = _this$props.localizer,
        continuesPrior = _this$props.continuesPrior,
        continuesAfter = _this$props.continuesAfter,
        accessors = _this$props.accessors,
        getters = _this$props.getters,
        children = _this$props.children,
        _this$props$component = _this$props.components,
        Event = _this$props$component.event,
        EventWrapper = _this$props$component.eventWrapper,
        slotStart = _this$props.slotStart,
        slotEnd = _this$props.slotEnd,
        props = _objectWithoutPropertiesLoose(_this$props, _excluded)

      delete props.resizable
      var title = accessors.title(event)
      var tooltip = accessors.tooltip(event)
      var end = accessors.end(event)
      var start = accessors.start(event)
      var allDay = accessors.allDay(event)
      var showAsAllDay =
        isAllDay || allDay || diff(start, ceil(end, 'day'), 'day') > 1
      var userProps = getters.eventProp(event, start, end, selected)
      var content = /*#__PURE__*/ React__default.createElement(
        'div',
        {
          className: 'rbc-event-content',
          title: tooltip || undefined,
        },
        Event
          ? /*#__PURE__*/ React__default.createElement(Event, {
              event: event,
              continuesPrior: continuesPrior,
              continuesAfter: continuesAfter,
              title: title,
              isAllDay: allDay,
              localizer: localizer,
              slotStart: slotStart,
              slotEnd: slotEnd,
            })
          : title
      )
      return /*#__PURE__*/ React__default.createElement(
        EventWrapper,
        _extends({}, this.props, {
          type: 'date',
        }),
        /*#__PURE__*/ React__default.createElement(
          'div',
          _extends({}, props, {
            tabIndex: 0,
            style: _extends({}, userProps.style, style),
            className: clsx('rbc-event', className, userProps.className, {
              'rbc-selected': selected,
              'rbc-event-allday': showAsAllDay,
              'rbc-event-continues-prior': continuesPrior,
              'rbc-event-continues-after': continuesAfter,
            }),
            onClick: function onClick(e) {
              return onSelect && onSelect(event, e)
            },
            onDoubleClick: function onDoubleClick(e) {
              return _onDoubleClick && _onDoubleClick(event, e)
            },
            onKeyPress: function onKeyPress(e) {
              return _onKeyPress && _onKeyPress(event, e)
            },
          }),
          typeof children === 'function' ? children(content) : content
        )
      )
    }

    return EventCell
  })(React__default.Component)

  EventCell.propTypes = {
    event: propTypes.object.isRequired,
    slotStart: propTypes.instanceOf(Date),
    slotEnd: propTypes.instanceOf(Date),
    resizable: propTypes.bool,
    selected: propTypes.bool,
    isAllDay: propTypes.bool,
    continuesPrior: propTypes.bool,
    continuesAfter: propTypes.bool,
    accessors: propTypes.object.isRequired,
    components: propTypes.object.isRequired,
    getters: propTypes.object.isRequired,
    localizer: propTypes.object,
    onSelect: propTypes.func,
    onDoubleClick: propTypes.func,
    onKeyPress: propTypes.func,
  }

  /* eslint-disable react/prop-types */

  var EventRowMixin = {
    propTypes: {
      slotMetrics: propTypes.object.isRequired,
      selected: propTypes.object,
      isAllDay: propTypes.bool,
      accessors: propTypes.object.isRequired,
      localizer: propTypes.object.isRequired,
      components: propTypes.object.isRequired,
      getters: propTypes.object.isRequired,
      onSelect: propTypes.func,
      onDoubleClick: propTypes.func,
      onKeyPress: propTypes.func,
    },
    defaultProps: {
      segments: [],
      selected: {},
    },
    renderEvent: function renderEvent(props, event) {
      var selected = props.selected,
        _ = props.isAllDay,
        accessors = props.accessors,
        getters = props.getters,
        onSelect = props.onSelect,
        onDoubleClick = props.onDoubleClick,
        onKeyPress = props.onKeyPress,
        localizer = props.localizer,
        slotMetrics = props.slotMetrics,
        components = props.components,
        resizable = props.resizable
      var continuesPrior = slotMetrics.continuesPrior(event)
      var continuesAfter = slotMetrics.continuesAfter(event)
      return /*#__PURE__*/ React__default.createElement(EventCell, {
        event: event,
        getters: getters,
        localizer: localizer,
        accessors: accessors,
        components: components,
        onSelect: onSelect,
        onDoubleClick: onDoubleClick,
        onKeyPress: onKeyPress,
        continuesPrior: continuesPrior,
        continuesAfter: continuesAfter,
        slotStart: slotMetrics.first,
        slotEnd: slotMetrics.last,
        selected: isSelected(event, selected),
        resizable: resizable,
      })
    },
    renderSpan: function renderSpan(slots, len, key, content) {
      if (content === void 0) {
        content = ' '
      }

      var per = (Math.abs(len) / slots) * 100 + '%'
      return /*#__PURE__*/ React__default.createElement(
        'div',
        {
          key: key,
          className: 'rbc-row-segment', // IE10/11 need max-width. flex-basis doesn't respect box-sizing
          style: {
            WebkitFlexBasis: per,
            flexBasis: per,
            maxWidth: per,
          },
        },
        content
      )
    },
  }

  /**
   * The base implementation of `_.findIndex` and `_.findLastIndex` without
   * support for iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {Function} predicate The function invoked per iteration.
   * @param {number} fromIndex The index to search from.
   * @param {boolean} [fromRight] Specify iterating from right to left.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function baseFindIndex(array, predicate, fromIndex, fromRight) {
    var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1)

    while (fromRight ? index-- : ++index < length) {
      if (predicate(array[index], index, array)) {
        return index
      }
    }
    return -1
  }

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeMax$2 = Math.max

  /**
   * This method is like `_.find` except that it returns the index of the first
   * element `predicate` returns truthy for instead of the element itself.
   *
   * @static
   * @memberOf _
   * @since 1.1.0
   * @category Array
   * @param {Array} array The array to inspect.
   * @param {Function} [predicate=_.identity] The function invoked per iteration.
   * @param {number} [fromIndex=0] The index to search from.
   * @returns {number} Returns the index of the found element, else `-1`.
   * @example
   *
   * var users = [
   *   { 'user': 'barney',  'active': false },
   *   { 'user': 'fred',    'active': false },
   *   { 'user': 'pebbles', 'active': true }
   * ];
   *
   * _.findIndex(users, function(o) { return o.user == 'barney'; });
   * // => 0
   *
   * // The `_.matches` iteratee shorthand.
   * _.findIndex(users, { 'user': 'fred', 'active': false });
   * // => 1
   *
   * // The `_.matchesProperty` iteratee shorthand.
   * _.findIndex(users, ['active', false]);
   * // => 0
   *
   * // The `_.property` iteratee shorthand.
   * _.findIndex(users, 'active');
   * // => 2
   */
  function findIndex(array, predicate, fromIndex) {
    var length = array == null ? 0 : array.length
    if (!length) {
      return -1
    }
    var index = fromIndex == null ? 0 : toInteger(fromIndex)
    if (index < 0) {
      index = nativeMax$2(length + index, 0)
    }
    return baseFindIndex(array, baseIteratee(predicate), index)
  }

  function endOfRange(dateRange, unit) {
    if (unit === void 0) {
      unit = 'day'
    }

    return {
      first: dateRange[0],
      last: add(dateRange[dateRange.length - 1], 1, unit),
    }
  }
  function eventSegments(event, range, accessors) {
    var _endOfRange = endOfRange(range),
      first = _endOfRange.first,
      last = _endOfRange.last

    var slots = diff(first, last, 'day')
    var start = max$2(startOf(accessors.start(event), 'day'), first)
    var end = min$2(ceil(accessors.end(event), 'day'), last)
    var padding = findIndex(range, function(x) {
      return eq$1(x, start, 'day')
    })
    var span = diff(start, end, 'day')
    span = Math.min(span, slots)
    span = Math.max(span, 1)
    return {
      event: event,
      span: span,
      left: padding + 1,
      right: Math.max(padding + span, 1),
    }
  }
  function eventLevels(rowSegments, limit) {
    if (limit === void 0) {
      limit = Infinity
    }

    var i,
      j,
      seg,
      levels = [],
      extra = []

    for (i = 0; i < rowSegments.length; i++) {
      seg = rowSegments[i]

      for (j = 0; j < levels.length; j++) {
        if (!segsOverlap(seg, levels[j])) break
      }

      if (j >= limit) {
        extra.push(seg)
      } else {
        ;(levels[j] || (levels[j] = [])).push(seg)
      }
    }

    for (i = 0; i < levels.length; i++) {
      levels[i].sort(function(a, b) {
        return a.left - b.left
      }) //eslint-disable-line
    }

    return {
      levels: levels,
      extra: extra,
    }
  }
  function inRange$1(e, start, end, accessors) {
    var eStart = startOf(accessors.start(e), 'day')
    var eEnd = accessors.end(e)
    var startsBeforeEnd = lte(eStart, end, 'day') // when the event is zero duration we need to handle a bit differently

    var endsAfterStart = !eq$1(eStart, eEnd, 'minutes')
      ? gt(eEnd, start, 'minutes')
      : gte(eEnd, start, 'minutes')
    return startsBeforeEnd && endsAfterStart
  }
  function segsOverlap(seg, otherSegs) {
    return otherSegs.some(function(otherSeg) {
      return otherSeg.left <= seg.right && otherSeg.right >= seg.left
    })
  }
  function sortEvents(evtA, evtB, accessors) {
    var startSort =
      +startOf(accessors.start(evtA), 'day') -
      +startOf(accessors.start(evtB), 'day')
    var durA = diff(
      accessors.start(evtA),
      ceil(accessors.end(evtA), 'day'),
      'day'
    )
    var durB = diff(
      accessors.start(evtB),
      ceil(accessors.end(evtB), 'day'),
      'day'
    )
    return (
      startSort || // sort by start Day first
      Math.max(durB, 1) - Math.max(durA, 1) || // events spanning multiple days go first
      !!accessors.allDay(evtB) - !!accessors.allDay(evtA) || // then allDay single day events
      +accessors.start(evtA) - +accessors.start(evtB)
    ) // then sort by start time
  }

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeCeil$1 = Math.ceil,
    nativeMax$3 = Math.max

  /**
   * The base implementation of `_.range` and `_.rangeRight` which doesn't
   * coerce arguments.
   *
   * @private
   * @param {number} start The start of the range.
   * @param {number} end The end of the range.
   * @param {number} step The value to increment or decrement by.
   * @param {boolean} [fromRight] Specify iterating from right to left.
   * @returns {Array} Returns the range of numbers.
   */
  function baseRange(start, end, step, fromRight) {
    var index = -1,
      length = nativeMax$3(nativeCeil$1((end - start) / (step || 1)), 0),
      result = Array(length)

    while (length--) {
      result[fromRight ? length : ++index] = start
      start += step
    }
    return result
  }

  /**
   * Creates a `_.range` or `_.rangeRight` function.
   *
   * @private
   * @param {boolean} [fromRight] Specify iterating from right to left.
   * @returns {Function} Returns the new range function.
   */
  function createRange(fromRight) {
    return function(start, end, step) {
      if (step && typeof step != 'number' && isIterateeCall(start, end, step)) {
        end = step = undefined
      }
      // Ensure the sign of `-0` is preserved.
      start = toFinite(start)
      if (end === undefined) {
        end = start
        start = 0
      } else {
        end = toFinite(end)
      }
      step = step === undefined ? (start < end ? 1 : -1) : toFinite(step)
      return baseRange(start, end, step, fromRight)
    }
  }

  /**
   * Creates an array of numbers (positive and/or negative) progressing from
   * `start` up to, but not including, `end`. A step of `-1` is used if a negative
   * `start` is specified without an `end` or `step`. If `end` is not specified,
   * it's set to `start` with `start` then set to `0`.
   *
   * **Note:** JavaScript follows the IEEE-754 standard for resolving
   * floating-point values which can produce unexpected results.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Util
   * @param {number} [start=0] The start of the range.
   * @param {number} end The end of the range.
   * @param {number} [step=1] The value to increment or decrement by.
   * @returns {Array} Returns the range of numbers.
   * @see _.inRange, _.rangeRight
   * @example
   *
   * _.range(4);
   * // => [0, 1, 2, 3]
   *
   * _.range(-4);
   * // => [0, -1, -2, -3]
   *
   * _.range(1, 5);
   * // => [1, 2, 3, 4]
   *
   * _.range(0, 20, 5);
   * // => [0, 5, 10, 15]
   *
   * _.range(0, -4, -1);
   * // => [0, -1, -2, -3]
   *
   * _.range(1, 4, 0);
   * // => [1, 1, 1]
   *
   * _.range(0);
   * // => []
   */
  var range$1 = createRange()

  var isSegmentInSlot = function isSegmentInSlot(seg, slot) {
    return seg.left <= slot && seg.right >= slot
  }

  var eventsInSlot = function eventsInSlot(segments, slot) {
    return segments.filter(function(seg) {
      return isSegmentInSlot(seg, slot)
    }).length
  }

  var EventEndingRow = /*#__PURE__*/ (function(_React$Component) {
    _inheritsLoose(EventEndingRow, _React$Component)

    function EventEndingRow() {
      return _React$Component.apply(this, arguments) || this
    }

    var _proto = EventEndingRow.prototype

    _proto.render = function render() {
      var _this$props = this.props,
        segments = _this$props.segments,
        slots = _this$props.slotMetrics.slots
      var rowSegments = eventLevels(segments).levels[0]
      var current = 1,
        lastEnd = 1,
        row = []

      while (current <= slots) {
        var key = '_lvl_' + current

        var _ref =
            rowSegments.filter(function(seg) {
              return isSegmentInSlot(seg, current)
            })[0] || {},
          event = _ref.event,
          left = _ref.left,
          right = _ref.right,
          span = _ref.span //eslint-disable-line

        if (!event) {
          current++
          continue
        }

        var gap = Math.max(0, left - lastEnd)

        if (this.canRenderSlotEvent(left, span)) {
          var content = EventRowMixin.renderEvent(this.props, event)

          if (gap) {
            row.push(EventRowMixin.renderSpan(slots, gap, key + '_gap'))
          }

          row.push(EventRowMixin.renderSpan(slots, span, key, content))
          lastEnd = current = right + 1
        } else {
          if (gap) {
            row.push(EventRowMixin.renderSpan(slots, gap, key + '_gap'))
          }

          row.push(
            EventRowMixin.renderSpan(
              slots,
              1,
              key,
              this.renderShowMore(segments, current)
            )
          )
          lastEnd = current = current + 1
        }
      }

      return /*#__PURE__*/ React__default.createElement(
        'div',
        {
          className: 'rbc-row',
        },
        row
      )
    }

    _proto.canRenderSlotEvent = function canRenderSlotEvent(slot, span) {
      var segments = this.props.segments
      return range$1(slot, slot + span).every(function(s) {
        var count = eventsInSlot(segments, s)
        return count === 1
      })
    }

    _proto.renderShowMore = function renderShowMore(segments, slot) {
      var _this = this

      var localizer = this.props.localizer
      var count = eventsInSlot(segments, slot)
      return count
        ? /*#__PURE__*/ React__default.createElement(
            'a',
            {
              key: 'sm_' + slot,
              href: '#',
              className: 'rbc-show-more',
              onClick: function onClick(e) {
                return _this.showMore(slot, e)
              },
            },
            localizer.messages.showMore(count)
          )
        : false
    }

    _proto.showMore = function showMore(slot, e) {
      e.preventDefault()
      this.props.onShowMore(slot, e.target)
    }

    return EventEndingRow
  })(React__default.Component)

  EventEndingRow.propTypes = _extends(
    {
      segments: propTypes.array,
      slots: propTypes.number,
      onShowMore: propTypes.func,
    },
    EventRowMixin.propTypes
  )
  EventEndingRow.defaultProps = _extends({}, EventRowMixin.defaultProps)

  var EventRow = /*#__PURE__*/ (function(_React$Component) {
    _inheritsLoose(EventRow, _React$Component)

    function EventRow() {
      return _React$Component.apply(this, arguments) || this
    }

    var _proto = EventRow.prototype

    _proto.render = function render() {
      var _this = this

      var _this$props = this.props,
        segments = _this$props.segments,
        slots = _this$props.slotMetrics.slots,
        className = _this$props.className
      var lastEnd = 1
      return /*#__PURE__*/ React__default.createElement(
        'div',
        {
          className: clsx(className, 'rbc-row'),
        },
        segments.reduce(function(row, _ref, li) {
          var event = _ref.event,
            left = _ref.left,
            right = _ref.right,
            span = _ref.span
          var key = '_lvl_' + li
          var gap = left - lastEnd
          var content = EventRowMixin.renderEvent(_this.props, event)
          if (gap) row.push(EventRowMixin.renderSpan(slots, gap, key + '_gap'))
          row.push(EventRowMixin.renderSpan(slots, span, key, content))
          lastEnd = right + 1
          return row
        }, [])
      )
    }

    return EventRow
  })(React__default.Component)

  EventRow.propTypes = _extends(
    {
      segments: propTypes.array,
    },
    EventRowMixin.propTypes
  )
  EventRow.defaultProps = _extends({}, EventRowMixin.defaultProps)

  var ScrollableWeekWrapper = function ScrollableWeekWrapper(_ref) {
    var children = _ref.children
    return /*#__PURE__*/ React__default.createElement(
      'div',
      {
        className: 'rbc-row-content-scroll-container',
      },
      children
    )
  }

  var safeIsNaN =
    Number.isNaN ||
    function ponyfill(value) {
      return typeof value === 'number' && value !== value
    }
  function isEqual$1(first, second) {
    if (first === second) {
      return true
    }
    if (safeIsNaN(first) && safeIsNaN(second)) {
      return true
    }
    return false
  }
  function areInputsEqual(newInputs, lastInputs) {
    if (newInputs.length !== lastInputs.length) {
      return false
    }
    for (var i = 0; i < newInputs.length; i++) {
      if (!isEqual$1(newInputs[i], lastInputs[i])) {
        return false
      }
    }
    return true
  }

  function memoizeOne(resultFn, isEqual) {
    if (isEqual === void 0) {
      isEqual = areInputsEqual
    }
    var lastThis
    var lastArgs = []
    var lastResult
    var calledOnce = false
    function memoized() {
      var newArgs = []
      for (var _i = 0; _i < arguments.length; _i++) {
        newArgs[_i] = arguments[_i]
      }
      if (calledOnce && lastThis === this && isEqual(newArgs, lastArgs)) {
        return lastResult
      }
      lastResult = resultFn.apply(this, newArgs)
      calledOnce = true
      lastThis = this
      lastArgs = newArgs
      return lastResult
    }
    return memoized
  }

  var isSegmentInSlot$1 = function isSegmentInSlot(seg, slot) {
    return seg.left <= slot && seg.right >= slot
  }

  var isEqual$2 = function isEqual(a, b) {
    return a[0].range === b[0].range && a[0].events === b[0].events
  }

  function getSlotMetrics() {
    return memoizeOne(function(options) {
      var range = options.range,
        events = options.events,
        maxRows = options.maxRows,
        minRows = options.minRows,
        accessors = options.accessors

      var _endOfRange = endOfRange(range),
        first = _endOfRange.first,
        last = _endOfRange.last

      var segments = events.map(function(evt) {
        return eventSegments(evt, range, accessors)
      })

      var _eventLevels = eventLevels(segments, Math.max(maxRows - 1, 1)),
        levels = _eventLevels.levels,
        extra = _eventLevels.extra

      while (levels.length < minRows) {
        levels.push([])
      }

      return {
        first: first,
        last: last,
        levels: levels,
        extra: extra,
        range: range,
        slots: range.length,
        clone: function clone(args) {
          var metrics = getSlotMetrics()
          return metrics(_extends({}, options, args))
        },
        getDateForSlot: function getDateForSlot(slotNumber) {
          return range[slotNumber]
        },
        getSlotForDate: function getSlotForDate(date) {
          return range.find(function(r) {
            return eq$1(r, date, 'day')
          })
        },
        getEventsForSlot: function getEventsForSlot(slot) {
          return segments
            .filter(function(seg) {
              return isSegmentInSlot$1(seg, slot)
            })
            .map(function(seg) {
              return seg.event
            })
        },
        continuesPrior: function continuesPrior(event) {
          return lt(accessors.start(event), first, 'day')
        },
        continuesAfter: function continuesAfter(event) {
          var eventEnd = accessors.end(event)
          var singleDayDuration = eq$1(
            accessors.start(event),
            eventEnd,
            'minutes'
          )
          return singleDayDuration
            ? gte(eventEnd, last, 'minutes')
            : gt(eventEnd, last, 'minutes')
        },
      }
    }, isEqual$2)
  }

  var DateContentRow = /*#__PURE__*/ (function(_React$Component) {
    _inheritsLoose(DateContentRow, _React$Component)

    function DateContentRow() {
      var _this

      for (
        var _len = arguments.length, args = new Array(_len), _key = 0;
        _key < _len;
        _key++
      ) {
        args[_key] = arguments[_key]
      }

      _this =
        _React$Component.call.apply(_React$Component, [this].concat(args)) ||
        this

      _this.handleSelectSlot = function(slot) {
        var _this$props = _this.props,
          range = _this$props.range,
          onSelectSlot = _this$props.onSelectSlot
        onSelectSlot(range.slice(slot.start, slot.end + 1), slot)
      }

      _this.handleShowMore = function(slot, target) {
        var _this$props2 = _this.props,
          range = _this$props2.range,
          onShowMore = _this$props2.onShowMore

        var metrics = _this.slotMetrics(_this.props)

        var row = qsa(
          ReactDOM.findDOMNode(_assertThisInitialized(_this)),
          '.rbc-row-bg'
        )[0]
        var cell
        if (row) cell = row.children[slot - 1]
        var events = metrics.getEventsForSlot(slot)
        onShowMore(events, range[slot - 1], cell, slot, target)
      }

      _this.createHeadingRef = function(r) {
        _this.headingRow = r
      }

      _this.createEventRef = function(r) {
        _this.eventRow = r
      }

      _this.getContainer = function() {
        var container = _this.props.container
        return container
          ? container()
          : ReactDOM.findDOMNode(_assertThisInitialized(_this))
      }

      _this.renderHeadingCell = function(date, index) {
        var _this$props3 = _this.props,
          renderHeader = _this$props3.renderHeader,
          getNow = _this$props3.getNow
        return renderHeader({
          date: date,
          key: 'header_' + index,
          className: clsx(
            'rbc-date-cell',
            eq$1(date, getNow(), 'day') && 'rbc-now'
          ),
        })
      }

      _this.renderDummy = function() {
        var _this$props4 = _this.props,
          className = _this$props4.className,
          range = _this$props4.range,
          renderHeader = _this$props4.renderHeader,
          showAllEvents = _this$props4.showAllEvents
        return /*#__PURE__*/ React__default.createElement(
          'div',
          {
            className: className,
          },
          /*#__PURE__*/ React__default.createElement(
            'div',
            {
              className: clsx(
                'rbc-row-content',
                showAllEvents && 'rbc-row-content-scrollable'
              ),
            },
            renderHeader &&
              /*#__PURE__*/ React__default.createElement(
                'div',
                {
                  className: 'rbc-row',
                  ref: _this.createHeadingRef,
                },
                range.map(_this.renderHeadingCell)
              ),
            /*#__PURE__*/ React__default.createElement(
              'div',
              {
                className: 'rbc-row',
                ref: _this.createEventRef,
              },
              /*#__PURE__*/ React__default.createElement(
                'div',
                {
                  className: 'rbc-row-segment',
                },
                /*#__PURE__*/ React__default.createElement(
                  'div',
                  {
                    className: 'rbc-event',
                  },
                  /*#__PURE__*/ React__default.createElement(
                    'div',
                    {
                      className: 'rbc-event-content',
                    },
                    '\xA0'
                  )
                )
              )
            )
          )
        )
      }

      _this.slotMetrics = getSlotMetrics()
      return _this
    }

    var _proto = DateContentRow.prototype

    _proto.getRowLimit = function getRowLimit() {
      var eventHeight = height(this.eventRow)
      var headingHeight = this.headingRow ? height(this.headingRow) : 0
      var eventSpace = height(ReactDOM.findDOMNode(this)) - headingHeight
      return Math.max(Math.floor(eventSpace / eventHeight), 1)
    }

    _proto.render = function render() {
      var _this$props5 = this.props,
        date = _this$props5.date,
        rtl = _this$props5.rtl,
        range = _this$props5.range,
        className = _this$props5.className,
        selected = _this$props5.selected,
        selectable = _this$props5.selectable,
        renderForMeasure = _this$props5.renderForMeasure,
        accessors = _this$props5.accessors,
        getters = _this$props5.getters,
        components = _this$props5.components,
        getNow = _this$props5.getNow,
        renderHeader = _this$props5.renderHeader,
        onSelect = _this$props5.onSelect,
        localizer = _this$props5.localizer,
        onSelectStart = _this$props5.onSelectStart,
        onSelectEnd = _this$props5.onSelectEnd,
        onDoubleClick = _this$props5.onDoubleClick,
        onKeyPress = _this$props5.onKeyPress,
        resourceId = _this$props5.resourceId,
        longPressThreshold = _this$props5.longPressThreshold,
        isAllDay = _this$props5.isAllDay,
        resizable = _this$props5.resizable,
        showAllEvents = _this$props5.showAllEvents,
        style = _this$props5.style
      if (renderForMeasure) return this.renderDummy()
      var metrics = this.slotMetrics(this.props)
      var levels = metrics.levels,
        extra = metrics.extra
      var ScrollableWeekComponent = showAllEvents
        ? ScrollableWeekWrapper
        : NoopWrapper
      var WeekWrapper = components.weekWrapper
      var eventRowProps = {
        selected: selected,
        accessors: accessors,
        getters: getters,
        localizer: localizer,
        components: components,
        onSelect: onSelect,
        onDoubleClick: onDoubleClick,
        onKeyPress: onKeyPress,
        resourceId: resourceId,
        slotMetrics: metrics,
        resizable: resizable,
      }
      return /*#__PURE__*/ React__default.createElement(
        'div',
        {
          className: className,
          style: style,
          role: 'rowgroup',
        },
        /*#__PURE__*/ React__default.createElement(BackgroundCells, {
          date: date,
          getNow: getNow,
          rtl: rtl,
          range: range,
          selectable: selectable,
          container: this.getContainer,
          getters: getters,
          onSelectStart: onSelectStart,
          onSelectEnd: onSelectEnd,
          onSelectSlot: this.handleSelectSlot,
          components: components,
          longPressThreshold: longPressThreshold,
          resourceId: resourceId,
        }),
        /*#__PURE__*/ React__default.createElement(
          'div',
          {
            className: clsx(
              'rbc-row-content',
              showAllEvents && 'rbc-row-content-scrollable'
            ),
            role: 'row',
          },
          renderHeader &&
            /*#__PURE__*/ React__default.createElement(
              'div',
              {
                className: 'rbc-row ',
                ref: this.createHeadingRef,
              },
              range.map(this.renderHeadingCell)
            ),
          /*#__PURE__*/ React__default.createElement(
            ScrollableWeekComponent,
            null,
            /*#__PURE__*/ React__default.createElement(
              WeekWrapper,
              _extends(
                {
                  isAllDay: isAllDay,
                },
                eventRowProps
              ),
              levels.map(function(segs, idx) {
                return /*#__PURE__*/ React__default.createElement(
                  EventRow,
                  _extends(
                    {
                      key: idx,
                      segments: segs,
                    },
                    eventRowProps
                  )
                )
              }),
              !!extra.length &&
                /*#__PURE__*/ React__default.createElement(
                  EventEndingRow,
                  _extends(
                    {
                      segments: extra,
                      onShowMore: this.handleShowMore,
                    },
                    eventRowProps
                  )
                )
            )
          )
        )
      )
    }

    return DateContentRow
  })(React__default.Component)

  DateContentRow.propTypes = {
    date: propTypes.instanceOf(Date),
    events: propTypes.array.isRequired,
    range: propTypes.array.isRequired,
    rtl: propTypes.bool,
    resizable: propTypes.bool,
    resourceId: propTypes.any,
    renderForMeasure: propTypes.bool,
    renderHeader: propTypes.func,
    container: propTypes.func,
    selected: propTypes.object,
    selectable: propTypes.oneOf([true, false, 'ignoreEvents']),
    longPressThreshold: propTypes.number,
    onShowMore: propTypes.func,
    showAllEvents: propTypes.bool,
    onSelectSlot: propTypes.func,
    onSelect: propTypes.func,
    onSelectEnd: propTypes.func,
    onSelectStart: propTypes.func,
    onDoubleClick: propTypes.func,
    onKeyPress: propTypes.func,
    dayPropGetter: propTypes.func,
    getNow: propTypes.func.isRequired,
    isAllDay: propTypes.bool,
    accessors: propTypes.object.isRequired,
    components: propTypes.object.isRequired,
    getters: propTypes.object.isRequired,
    localizer: propTypes.object.isRequired,
    minRows: propTypes.number.isRequired,
    maxRows: propTypes.number.isRequired,
  }
  DateContentRow.defaultProps = {
    minRows: 0,
    maxRows: Infinity,
  }

  var DateHeader = function DateHeader(_ref) {
    var label = _ref.label,
      drilldownView = _ref.drilldownView,
      onDrillDown = _ref.onDrillDown

    if (!drilldownView) {
      return /*#__PURE__*/ React__default.createElement('span', null, label)
    }

    return /*#__PURE__*/ React__default.createElement(
      'a',
      {
        href: '#',
        onClick: onDrillDown,
        role: 'cell',
      },
      label
    )
  }

  DateHeader.propTypes = {
    label: propTypes.node,
    date: propTypes.instanceOf(Date),
    drilldownView: propTypes.string,
    onDrillDown: propTypes.func,
    isOffRange: propTypes.bool,
  }

  var Header = function Header(_ref) {
    var label = _ref.label
    return /*#__PURE__*/ React__default.createElement(
      'span',
      {
        role: 'columnheader',
        'aria-sort': 'none',
      },
      label
    )
  }

  Header.propTypes = {
    label: propTypes.node,
  }

  var Popup = /*#__PURE__*/ (function(_React$Component) {
    _inheritsLoose(Popup, _React$Component)

    function Popup() {
      return _React$Component.apply(this, arguments) || this
    }

    var _proto = Popup.prototype

    _proto.componentDidMount = function componentDidMount() {
      var _this$props = this.props,
        _this$props$popupOffs = _this$props.popupOffset,
        popupOffset =
          _this$props$popupOffs === void 0 ? 5 : _this$props$popupOffs,
        popperRef = _this$props.popperRef,
        _getOffset = offset(popperRef.current),
        top = _getOffset.top,
        left = _getOffset.left,
        width = _getOffset.width,
        height = _getOffset.height,
        viewBottom = window.innerHeight + getScrollTop(window),
        viewRight = window.innerWidth + getScrollLeft(window),
        bottom = top + height,
        right = left + width

      if (bottom > viewBottom || right > viewRight) {
        var topOffset, leftOffset
        if (bottom > viewBottom)
          topOffset = bottom - viewBottom + (popupOffset.y || +popupOffset || 0)
        if (right > viewRight)
          leftOffset = right - viewRight + (popupOffset.x || +popupOffset || 0)
        this.setState({
          topOffset: topOffset,
          leftOffset: leftOffset,
        }) //eslint-disable-line
      }
    }

    _proto.render = function render() {
      var _this = this

      var _this$props2 = this.props,
        events = _this$props2.events,
        selected = _this$props2.selected,
        getters = _this$props2.getters,
        accessors = _this$props2.accessors,
        components = _this$props2.components,
        onSelect = _this$props2.onSelect,
        onDoubleClick = _this$props2.onDoubleClick,
        onKeyPress = _this$props2.onKeyPress,
        slotStart = _this$props2.slotStart,
        slotEnd = _this$props2.slotEnd,
        localizer = _this$props2.localizer,
        popperRef = _this$props2.popperRef
      var width = this.props.position.width,
        topOffset = (this.state || {}).topOffset || 0,
        leftOffset = (this.state || {}).leftOffset || 0
      var style = {
        top: -topOffset,
        left: -leftOffset,
        minWidth: width + width / 2,
      }
      return /*#__PURE__*/ React__default.createElement(
        'div',
        {
          style: _extends({}, this.props.style, style),
          className: 'rbc-overlay',
          ref: popperRef,
        },
        /*#__PURE__*/ React__default.createElement(
          'div',
          {
            className: 'rbc-overlay-header',
          },
          localizer.format(slotStart, 'dayHeaderFormat')
        ),
        events.map(function(event, idx) {
          return /*#__PURE__*/ React__default.createElement(EventCell, {
            key: idx,
            type: 'popup',
            event: event,
            getters: getters,
            onSelect: onSelect,
            accessors: accessors,
            components: components,
            onDoubleClick: onDoubleClick,
            onKeyPress: onKeyPress,
            continuesPrior: lt(accessors.end(event), slotStart, 'day'),
            continuesAfter: gte(accessors.start(event), slotEnd, 'day'),
            slotStart: slotStart,
            slotEnd: slotEnd,
            selected: isSelected(event, selected),
            draggable: true,
            onDragStart: function onDragStart() {
              return _this.props.handleDragStart(event)
            },
            onDragEnd: function onDragEnd() {
              return _this.props.show()
            },
          })
        })
      )
    }

    return Popup
  })(React__default.Component)

  Popup.propTypes = {
    position: propTypes.object,
    popupOffset: propTypes.oneOfType([
      propTypes.number,
      propTypes.shape({
        x: propTypes.number,
        y: propTypes.number,
      }),
    ]),
    events: propTypes.array,
    selected: propTypes.object,
    accessors: propTypes.object.isRequired,
    components: propTypes.object.isRequired,
    getters: propTypes.object.isRequired,
    localizer: propTypes.object.isRequired,
    onSelect: propTypes.func,
    onDoubleClick: propTypes.func,
    onKeyPress: propTypes.func,
    handleDragStart: propTypes.func,
    show: propTypes.func,
    slotStart: propTypes.instanceOf(Date),
    slotEnd: propTypes.number,
    popperRef: propTypes.oneOfType([
      propTypes.func,
      propTypes.shape({
        current: propTypes.Element,
      }),
    ]),
  }
  /**
   * The Overlay component, of react-overlays, creates a ref that is passed to the Popup, and
   * requires proper ref forwarding to be used without error
   */

  var Popup$1 = /*#__PURE__*/ React__default.forwardRef(function(props, ref) {
    return /*#__PURE__*/ React__default.createElement(
      Popup,
      _extends(
        {
          popperRef: ref,
        },
        props
      )
    )
  })

  var _excluded$1 = ['date', 'className']

  var eventsForWeek = function eventsForWeek(evts, start, end, accessors) {
    return evts.filter(function(e) {
      return inRange$1(e, start, end, accessors)
    })
  }

  var MonthView = /*#__PURE__*/ (function(_React$Component) {
    _inheritsLoose(MonthView, _React$Component)

    function MonthView() {
      var _this

      for (
        var _len = arguments.length, _args = new Array(_len), _key = 0;
        _key < _len;
        _key++
      ) {
        _args[_key] = arguments[_key]
      }

      _this =
        _React$Component.call.apply(_React$Component, [this].concat(_args)) ||
        this

      _this.getContainer = function() {
        return ReactDOM.findDOMNode(_assertThisInitialized(_this))
      }

      _this.renderWeek = function(week, weekIdx) {
        var _this$props = _this.props,
          events = _this$props.events,
          components = _this$props.components,
          selectable = _this$props.selectable,
          getNow = _this$props.getNow,
          selected = _this$props.selected,
          date = _this$props.date,
          localizer = _this$props.localizer,
          longPressThreshold = _this$props.longPressThreshold,
          accessors = _this$props.accessors,
          getters = _this$props.getters,
          showAllEvents = _this$props.showAllEvents
        var _this$state = _this.state,
          needLimitMeasure = _this$state.needLimitMeasure,
          rowLimit = _this$state.rowLimit
        events = eventsForWeek(
          events,
          week[0],
          week[week.length - 1],
          accessors
        )
        events.sort(function(a, b) {
          return sortEvents(a, b, accessors)
        })
        return /*#__PURE__*/ React__default.createElement(DateContentRow, {
          key: weekIdx,
          ref: weekIdx === 0 ? _this.slotRowRef : undefined,
          container: _this.getContainer,
          className: 'rbc-month-row',
          style: {
            minHeight: 'calc((100% - 35px) * ' + 1 / _this._weekCount + ')',
          },
          getNow: getNow,
          date: date,
          range: week,
          events: events,
          maxRows: showAllEvents ? Infinity : rowLimit,
          selected: selected,
          selectable: selectable,
          components: components,
          accessors: accessors,
          getters: getters,
          localizer: localizer,
          renderHeader: _this.readerDateHeading,
          renderForMeasure: needLimitMeasure,
          onShowMore: _this.handleShowMore,
          onSelect: _this.handleSelectEvent,
          onDoubleClick: _this.handleDoubleClickEvent,
          onKeyPress: _this.handleKeyPressEvent,
          onSelectSlot: _this.handleSelectSlot,
          longPressThreshold: longPressThreshold,
          rtl: _this.props.rtl,
          resizable: _this.props.resizable,
          showAllEvents: showAllEvents,
        })
      }

      _this.readerDateHeading = function(_ref) {
        var date = _ref.date,
          className = _ref.className,
          props = _objectWithoutPropertiesLoose(_ref, _excluded$1)

        var _this$props2 = _this.props,
          currentDate = _this$props2.date,
          getDrilldownView = _this$props2.getDrilldownView,
          localizer = _this$props2.localizer
        var isOffRange = month(date) !== month(currentDate)
        var isCurrent = eq$1(date, currentDate, 'day')
        var drilldownView = getDrilldownView(date)
        var label = localizer.format(date, 'dateFormat')
        var DateHeaderComponent =
          _this.props.components.dateHeader || DateHeader
        return /*#__PURE__*/ React__default.createElement(
          'div',
          _extends({}, props, {
            className: clsx(
              className,
              isOffRange && 'rbc-off-range',
              isCurrent && 'rbc-current'
            ),
            role: 'cell',
          }),
          /*#__PURE__*/ React__default.createElement(DateHeaderComponent, {
            label: label,
            date: date,
            drilldownView: drilldownView,
            isOffRange: isOffRange,
            onDrillDown: function onDrillDown(e) {
              return _this.handleHeadingClick(date, drilldownView, e)
            },
          })
        )
      }

      _this.handleSelectSlot = function(range, slotInfo) {
        _this._pendingSelection = _this._pendingSelection.concat(range)
        clearTimeout(_this._selectTimer)
        _this._selectTimer = setTimeout(function() {
          return _this.selectDates(slotInfo)
        })
      }

      _this.handleHeadingClick = function(date, view, e) {
        e.preventDefault()

        _this.clearSelection()

        notify(_this.props.onDrillDown, [date, view])
      }

      _this.handleSelectEvent = function() {
        _this.clearSelection()

        for (
          var _len2 = arguments.length, args = new Array(_len2), _key2 = 0;
          _key2 < _len2;
          _key2++
        ) {
          args[_key2] = arguments[_key2]
        }

        notify(_this.props.onSelectEvent, args)
      }

      _this.handleDoubleClickEvent = function() {
        _this.clearSelection()

        for (
          var _len3 = arguments.length, args = new Array(_len3), _key3 = 0;
          _key3 < _len3;
          _key3++
        ) {
          args[_key3] = arguments[_key3]
        }

        notify(_this.props.onDoubleClickEvent, args)
      }

      _this.handleKeyPressEvent = function() {
        _this.clearSelection()

        for (
          var _len4 = arguments.length, args = new Array(_len4), _key4 = 0;
          _key4 < _len4;
          _key4++
        ) {
          args[_key4] = arguments[_key4]
        }

        notify(_this.props.onKeyPressEvent, args)
      }

      _this.handleShowMore = function(events, date, cell, slot, target) {
        var _this$props3 = _this.props,
          popup = _this$props3.popup,
          onDrillDown = _this$props3.onDrillDown,
          onShowMore = _this$props3.onShowMore,
          getDrilldownView = _this$props3.getDrilldownView,
          doShowMoreDrillDown = _this$props3.doShowMoreDrillDown //cancel any pending selections so only the event click goes through.

        _this.clearSelection()

        if (popup) {
          var position$1 = position(
            cell,
            ReactDOM.findDOMNode(_assertThisInitialized(_this))
          )

          _this.setState({
            overlay: {
              date: date,
              events: events,
              position: position$1,
              target: target,
            },
          })
        } else if (doShowMoreDrillDown) {
          notify(onDrillDown, [date, getDrilldownView(date) || views.DAY])
        }

        notify(onShowMore, [events, date, slot])
      }

      _this.overlayDisplay = function() {
        _this.setState({
          overlay: null,
        })
      }

      _this._bgRows = []
      _this._pendingSelection = []
      _this.slotRowRef = /*#__PURE__*/ React__default.createRef()
      _this.state = {
        rowLimit: 5,
        needLimitMeasure: true,
      }
      return _this
    }

    var _proto = MonthView.prototype

    _proto.UNSAFE_componentWillReceiveProps = function UNSAFE_componentWillReceiveProps(
      _ref2
    ) {
      var date = _ref2.date
      this.setState({
        needLimitMeasure: !eq$1(date, this.props.date, 'month'),
      })
    }

    _proto.componentDidMount = function componentDidMount() {
      var _this2 = this

      var running
      if (this.state.needLimitMeasure) this.measureRowLimit(this.props)
      window.addEventListener(
        'resize',
        (this._resizeListener = function() {
          if (!running) {
            request(function() {
              running = false

              _this2.setState({
                needLimitMeasure: true,
              }) //eslint-disable-line
            })
          }
        }),
        false
      )
    }

    _proto.componentDidUpdate = function componentDidUpdate() {
      if (this.state.needLimitMeasure) this.measureRowLimit(this.props)
    }

    _proto.componentWillUnmount = function componentWillUnmount() {
      window.removeEventListener('resize', this._resizeListener, false)
    }

    _proto.render = function render() {
      var _this$props4 = this.props,
        date = _this$props4.date,
        localizer = _this$props4.localizer,
        className = _this$props4.className,
        month = visibleDays(date, localizer),
        weeks = chunk(month, 7)
      this._weekCount = weeks.length
      return /*#__PURE__*/ React__default.createElement(
        'div',
        {
          className: clsx('rbc-month-view', className),
          role: 'table',
          'aria-label': 'Month View',
        },
        /*#__PURE__*/ React__default.createElement(
          'div',
          {
            className: 'rbc-row rbc-month-header',
            role: 'row',
          },
          this.renderHeaders(weeks[0])
        ),
        weeks.map(this.renderWeek),
        this.props.popup && this.renderOverlay()
      )
    }

    _proto.renderHeaders = function renderHeaders(row) {
      var _this$props5 = this.props,
        localizer = _this$props5.localizer,
        components = _this$props5.components
      var first = row[0]
      var last = row[row.length - 1]
      var HeaderComponent = components.header || Header
      return range(first, last, 'day').map(function(day, idx) {
        return /*#__PURE__*/ React__default.createElement(
          'div',
          {
            key: 'header_' + idx,
            className: 'rbc-header',
          },
          /*#__PURE__*/ React__default.createElement(HeaderComponent, {
            date: day,
            localizer: localizer,
            label: localizer.format(day, 'weekdayFormat'),
          })
        )
      })
    }

    _proto.renderOverlay = function renderOverlay() {
      var _this3 = this

      var overlay = (this.state && this.state.overlay) || {}
      var _this$props6 = this.props,
        accessors = _this$props6.accessors,
        localizer = _this$props6.localizer,
        components = _this$props6.components,
        getters = _this$props6.getters,
        selected = _this$props6.selected,
        popupOffset = _this$props6.popupOffset
      return /*#__PURE__*/ React__default.createElement(
        Overlay,
        {
          rootClose: true,
          placement: 'bottom',
          show: !!overlay.position,
          onHide: function onHide() {
            return _this3.setState({
              overlay: null,
            })
          },
          target: function target() {
            return overlay.target
          },
        },
        function(_ref3) {
          var props = _ref3.props
          return /*#__PURE__*/ React__default.createElement(
            Popup$1,
            _extends({}, props, {
              popupOffset: popupOffset,
              accessors: accessors,
              getters: getters,
              selected: selected,
              components: components,
              localizer: localizer,
              position: overlay.position,
              show: _this3.overlayDisplay,
              events: overlay.events,
              slotStart: overlay.date,
              slotEnd: overlay.end,
              onSelect: _this3.handleSelectEvent,
              onDoubleClick: _this3.handleDoubleClickEvent,
              onKeyPress: _this3.handleKeyPressEvent,
              handleDragStart: _this3.props.handleDragStart,
            })
          )
        }
      )
    }

    _proto.measureRowLimit = function measureRowLimit() {
      this.setState({
        needLimitMeasure: false,
        rowLimit: this.slotRowRef.current.getRowLimit(),
      })
    }

    _proto.selectDates = function selectDates(slotInfo) {
      var slots = this._pendingSelection.slice()

      this._pendingSelection = []
      slots.sort(function(a, b) {
        return +a - +b
      })
      var start = new Date(slots[0])
      var end = new Date(slots[slots.length - 1])
      end.setDate(slots[slots.length - 1].getDate() + 1)
      notify(this.props.onSelectSlot, {
        slots: slots,
        start: start,
        end: end,
        action: slotInfo.action,
        bounds: slotInfo.bounds,
        box: slotInfo.box,
      })
    }

    _proto.clearSelection = function clearSelection() {
      clearTimeout(this._selectTimer)
      this._pendingSelection = []
    }

    return MonthView
  })(React__default.Component)

  MonthView.propTypes = {
    events: propTypes.array.isRequired,
    date: propTypes.instanceOf(Date),
    min: propTypes.instanceOf(Date),
    max: propTypes.instanceOf(Date),
    step: propTypes.number,
    getNow: propTypes.func.isRequired,
    scrollToTime: propTypes.instanceOf(Date),
    rtl: propTypes.bool,
    resizable: propTypes.bool,
    width: propTypes.number,
    accessors: propTypes.object.isRequired,
    components: propTypes.object.isRequired,
    getters: propTypes.object.isRequired,
    localizer: propTypes.object.isRequired,
    selected: propTypes.object,
    selectable: propTypes.oneOf([true, false, 'ignoreEvents']),
    longPressThreshold: propTypes.number,
    onNavigate: propTypes.func,
    onSelectSlot: propTypes.func,
    onSelectEvent: propTypes.func,
    onDoubleClickEvent: propTypes.func,
    onKeyPressEvent: propTypes.func,
    onShowMore: propTypes.func,
    showAllEvents: propTypes.bool,
    doShowMoreDrillDown: propTypes.bool,
    onDrillDown: propTypes.func,
    getDrilldownView: propTypes.func.isRequired,
    popup: propTypes.bool,
    handleDragStart: propTypes.func,
    popupOffset: propTypes.oneOfType([
      propTypes.number,
      propTypes.shape({
        x: propTypes.number,
        y: propTypes.number,
      }),
    ]),
  }

  MonthView.range = function(date, _ref4) {
    var localizer = _ref4.localizer
    var start = firstVisibleDay(date, localizer)
    var end = lastVisibleDay(date, localizer)
    return {
      start: start,
      end: end,
    }
  }

  MonthView.navigate = function(date, action) {
    switch (action) {
      case navigate.PREVIOUS:
        return add(date, -1, 'month')

      case navigate.NEXT:
        return add(date, 1, 'month')

      default:
        return date
    }
  }

  MonthView.title = function(date, _ref5) {
    var localizer = _ref5.localizer
    return localizer.format(date, 'monthHeaderFormat')
  }

  var DayColumnWrapper = function DayColumnWrapper(_ref) {
    var children = _ref.children,
      className = _ref.className,
      style = _ref.style
    return /*#__PURE__*/ React__default.createElement(
      'div',
      {
        className: className,
        style: style,
      },
      children
    )
  }

  function stringifyPercent(v) {
    return typeof v === 'string' ? v : v + '%'
  }
  /* eslint-disable react/prop-types */

  function TimeGridEvent(props) {
    var _extends2, _extends3

    var style = props.style,
      className = props.className,
      event = props.event,
      accessors = props.accessors,
      rtl = props.rtl,
      selected = props.selected,
      label = props.label,
      continuesEarlier = props.continuesEarlier,
      continuesLater = props.continuesLater,
      getters = props.getters,
      onClick = props.onClick,
      onDoubleClick = props.onDoubleClick,
      isBackgroundEvent = props.isBackgroundEvent,
      onKeyPress = props.onKeyPress,
      _props$showLabelTop = props.showLabelTop,
      showLabelTop =
        _props$showLabelTop === void 0 ? true : _props$showLabelTop,
      _props$components = props.components,
      Event = _props$components.event,
      EventWrapper = _props$components.eventWrapper
    var title = accessors.title(event)
    var tooltip = accessors.tooltip(event)
    var end = accessors.end(event)
    var start = accessors.start(event)
    var userProps = getters.eventProp(event, start, end, selected)
    var height = style.height,
      top = style.top,
      width = style.width,
      xOffset = style.xOffset
    var inner = [
      /*#__PURE__*/ React__default.createElement(
        'div',
        {
          key: '1',
          className: 'rbc-event-label',
        },
        label
      ),
      /*#__PURE__*/ React__default.createElement(
        'div',
        {
          key: '2',
          className: 'rbc-event-content',
        },
        Event
          ? /*#__PURE__*/ React__default.createElement(Event, {
              event: event,
              title: title,
            })
          : title
      ),
    ]

    if (!showLabelTop) {
      inner.reverse()
    }

    var eventStyle = isBackgroundEvent
      ? _extends(
          {},
          userProps.style,
          ((_extends2 = {
            top: stringifyPercent(top),
            height: stringifyPercent(height),
            // Adding 10px to take events container right margin into account
            width: 'calc(' + width + ' + 10px)',
          }),
          (_extends2[rtl ? 'right' : 'left'] = stringifyPercent(
            Math.max(0, xOffset)
          )),
          _extends2)
        )
      : _extends(
          {},
          userProps.style,
          ((_extends3 = {
            top: stringifyPercent(top),
            width: stringifyPercent(width),
            height: stringifyPercent(height),
          }),
          (_extends3[rtl ? 'right' : 'left'] = stringifyPercent(xOffset)),
          _extends3)
        )
    return /*#__PURE__*/ React__default.createElement(
      EventWrapper,
      _extends(
        {
          type: 'time',
        },
        props
      ),
      /*#__PURE__*/ React__default.createElement(
        'div',
        {
          onClick: onClick,
          onDoubleClick: onDoubleClick,
          style: eventStyle,
          onKeyPress: onKeyPress,
          title: tooltip
            ? (typeof label === 'string' ? label + ': ' : '') + tooltip
            : undefined,
          className: clsx(
            isBackgroundEvent ? 'rbc-background-event' : 'rbc-event',
            className,
            userProps.className,
            {
              'rbc-selected': selected,
              'rbc-event-continues-earlier': continuesEarlier,
              'rbc-event-continues-later': continuesLater,
            }
          ),
        },
        inner
      )
    )
  }

  var TimeSlotGroup = /*#__PURE__*/ (function(_Component) {
    _inheritsLoose(TimeSlotGroup, _Component)

    function TimeSlotGroup() {
      return _Component.apply(this, arguments) || this
    }

    var _proto = TimeSlotGroup.prototype

    _proto.render = function render() {
      var _this$props = this.props,
        renderSlot = _this$props.renderSlot,
        resource = _this$props.resource,
        group = _this$props.group,
        getters = _this$props.getters,
        _this$props$component = _this$props.components
      _this$props$component =
        _this$props$component === void 0 ? {} : _this$props$component
      var _this$props$component2 = _this$props$component.timeSlotWrapper,
        Wrapper =
          _this$props$component2 === void 0
            ? NoopWrapper
            : _this$props$component2
      var groupProps = getters ? getters.slotGroupProp() : {}
      return /*#__PURE__*/ React__default.createElement(
        'div',
        _extends(
          {
            className: 'rbc-timeslot-group',
          },
          groupProps
        ),
        group.map(function(value, idx) {
          var slotProps = getters ? getters.slotProp(value, resource) : {}
          return /*#__PURE__*/ React__default.createElement(
            Wrapper,
            {
              key: idx,
              value: value,
              resource: resource,
            },
            /*#__PURE__*/ React__default.createElement(
              'div',
              _extends({}, slotProps, {
                className: clsx('rbc-time-slot', slotProps.className),
              }),
              renderSlot && renderSlot(value, idx)
            )
          )
        })
      )
    }

    return TimeSlotGroup
  })(React.Component)
  TimeSlotGroup.propTypes = {
    renderSlot: propTypes.func,
    group: propTypes.array.isRequired,
    resource: propTypes.any,
    components: propTypes.object,
    getters: propTypes.object,
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i]
      descriptor.enumerable = descriptor.enumerable || false
      descriptor.configurable = true
      if ('value' in descriptor) descriptor.writable = true
      Object.defineProperty(target, descriptor.key, descriptor)
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps)
    if (staticProps) _defineProperties(Constructor, staticProps)
    return Constructor
  }

  /**
   * Creates a `baseEach` or `baseEachRight` function.
   *
   * @private
   * @param {Function} eachFunc The function to iterate over a collection.
   * @param {boolean} [fromRight] Specify iterating from right to left.
   * @returns {Function} Returns the new base function.
   */
  function createBaseEach(eachFunc, fromRight) {
    return function(collection, iteratee) {
      if (collection == null) {
        return collection
      }
      if (!isArrayLike(collection)) {
        return eachFunc(collection, iteratee)
      }
      var length = collection.length,
        index = fromRight ? length : -1,
        iterable = Object(collection)

      while (fromRight ? index-- : ++index < length) {
        if (iteratee(iterable[index], index, iterable) === false) {
          break
        }
      }
      return collection
    }
  }

  /**
   * The base implementation of `_.forEach` without support for iteratee shorthands.
   *
   * @private
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array|Object} Returns `collection`.
   */
  var baseEach = createBaseEach(baseForOwn)

  /**
   * The base implementation of `_.map` without support for iteratee shorthands.
   *
   * @private
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the new mapped array.
   */
  function baseMap(collection, iteratee) {
    var index = -1,
      result = isArrayLike(collection) ? Array(collection.length) : []

    baseEach(collection, function(value, key, collection) {
      result[++index] = iteratee(value, key, collection)
    })
    return result
  }

  /**
   * The base implementation of `_.sortBy` which uses `comparer` to define the
   * sort order of `array` and replaces criteria objects with their corresponding
   * values.
   *
   * @private
   * @param {Array} array The array to sort.
   * @param {Function} comparer The function to define sort order.
   * @returns {Array} Returns `array`.
   */
  function baseSortBy(array, comparer) {
    var length = array.length

    array.sort(comparer)
    while (length--) {
      array[length] = array[length].value
    }
    return array
  }

  /**
   * Compares values to sort them in ascending order.
   *
   * @private
   * @param {*} value The value to compare.
   * @param {*} other The other value to compare.
   * @returns {number} Returns the sort order indicator for `value`.
   */
  function compareAscending(value, other) {
    if (value !== other) {
      var valIsDefined = value !== undefined,
        valIsNull = value === null,
        valIsReflexive = value === value,
        valIsSymbol = isSymbol(value)

      var othIsDefined = other !== undefined,
        othIsNull = other === null,
        othIsReflexive = other === other,
        othIsSymbol = isSymbol(other)

      if (
        (!othIsNull && !othIsSymbol && !valIsSymbol && value > other) ||
        (valIsSymbol &&
          othIsDefined &&
          othIsReflexive &&
          !othIsNull &&
          !othIsSymbol) ||
        (valIsNull && othIsDefined && othIsReflexive) ||
        (!valIsDefined && othIsReflexive) ||
        !valIsReflexive
      ) {
        return 1
      }
      if (
        (!valIsNull && !valIsSymbol && !othIsSymbol && value < other) ||
        (othIsSymbol &&
          valIsDefined &&
          valIsReflexive &&
          !valIsNull &&
          !valIsSymbol) ||
        (othIsNull && valIsDefined && valIsReflexive) ||
        (!othIsDefined && valIsReflexive) ||
        !othIsReflexive
      ) {
        return -1
      }
    }
    return 0
  }

  /**
   * Used by `_.orderBy` to compare multiple properties of a value to another
   * and stable sort them.
   *
   * If `orders` is unspecified, all values are sorted in ascending order. Otherwise,
   * specify an order of "desc" for descending or "asc" for ascending sort order
   * of corresponding values.
   *
   * @private
   * @param {Object} object The object to compare.
   * @param {Object} other The other object to compare.
   * @param {boolean[]|string[]} orders The order to sort by for each property.
   * @returns {number} Returns the sort order indicator for `object`.
   */
  function compareMultiple(object, other, orders) {
    var index = -1,
      objCriteria = object.criteria,
      othCriteria = other.criteria,
      length = objCriteria.length,
      ordersLength = orders.length

    while (++index < length) {
      var result = compareAscending(objCriteria[index], othCriteria[index])
      if (result) {
        if (index >= ordersLength) {
          return result
        }
        var order = orders[index]
        return result * (order == 'desc' ? -1 : 1)
      }
    }
    // Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
    // that causes it, under certain circumstances, to provide the same value for
    // `object` and `other`. See https://github.com/jashkenas/underscore/pull/1247
    // for more details.
    //
    // This also ensures a stable sort in V8 and other engines.
    // See https://bugs.chromium.org/p/v8/issues/detail?id=90 for more details.
    return object.index - other.index
  }

  /**
   * The base implementation of `_.orderBy` without param guards.
   *
   * @private
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
   * @param {string[]} orders The sort orders of `iteratees`.
   * @returns {Array} Returns the new sorted array.
   */
  function baseOrderBy(collection, iteratees, orders) {
    if (iteratees.length) {
      iteratees = arrayMap(iteratees, function(iteratee) {
        if (isArray(iteratee)) {
          return function(value) {
            return baseGet(
              value,
              iteratee.length === 1 ? iteratee[0] : iteratee
            )
          }
        }
        return iteratee
      })
    } else {
      iteratees = [identity]
    }

    var index = -1
    iteratees = arrayMap(iteratees, baseUnary(baseIteratee))

    var result = baseMap(collection, function(value, key, collection) {
      var criteria = arrayMap(iteratees, function(iteratee) {
        return iteratee(value)
      })
      return { criteria: criteria, index: ++index, value: value }
    })

    return baseSortBy(result, function(object, other) {
      return compareMultiple(object, other, orders)
    })
  }

  /**
   * Creates an array of elements, sorted in ascending order by the results of
   * running each element in a collection thru each iteratee. This method
   * performs a stable sort, that is, it preserves the original sort order of
   * equal elements. The iteratees are invoked with one argument: (value).
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Collection
   * @param {Array|Object} collection The collection to iterate over.
   * @param {...(Function|Function[])} [iteratees=[_.identity]]
   *  The iteratees to sort by.
   * @returns {Array} Returns the new sorted array.
   * @example
   *
   * var users = [
   *   { 'user': 'fred',   'age': 48 },
   *   { 'user': 'barney', 'age': 36 },
   *   { 'user': 'fred',   'age': 30 },
   *   { 'user': 'barney', 'age': 34 }
   * ];
   *
   * _.sortBy(users, [function(o) { return o.user; }]);
   * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 30]]
   *
   * _.sortBy(users, ['user', 'age']);
   * // => objects for [['barney', 34], ['barney', 36], ['fred', 30], ['fred', 48]]
   */
  var sortBy = baseRest(function(collection, iteratees) {
    if (collection == null) {
      return []
    }
    var length = iteratees.length
    if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {
      iteratees = []
    } else if (
      length > 2 &&
      isIterateeCall(iteratees[0], iteratees[1], iteratees[2])
    ) {
      iteratees = [iteratees[0]]
    }
    return baseOrderBy(collection, baseFlatten(iteratees, 1), [])
  })

  var Event = /*#__PURE__*/ (function() {
    function Event(data, _ref) {
      var accessors = _ref.accessors,
        slotMetrics = _ref.slotMetrics

      var _slotMetrics$getRange = slotMetrics.getRange(
          accessors.start(data),
          accessors.end(data)
        ),
        start = _slotMetrics$getRange.start,
        startDate = _slotMetrics$getRange.startDate,
        end = _slotMetrics$getRange.end,
        endDate = _slotMetrics$getRange.endDate,
        top = _slotMetrics$getRange.top,
        height = _slotMetrics$getRange.height

      this.start = start
      this.end = end
      this.startMs = +startDate
      this.endMs = +endDate
      this.top = top
      this.height = height
      this.data = data
    }
    /**
     * The event's width without any overlap.
     */

    _createClass(Event, [
      {
        key: '_width',
        get: function get() {
          // The container event's width is determined by the maximum number of
          // events in any of its rows.
          if (this.rows) {
            var columns =
              this.rows.reduce(
                function(max, row) {
                  return Math.max(max, row.leaves.length + 1)
                }, // add itself
                0
              ) + 1 // add the container

            return 100 / columns
          }

          var availableWidth = 100 - this.container._width // The row event's width is the space left by the container, divided
          // among itself and its leaves.

          if (this.leaves) {
            return availableWidth / (this.leaves.length + 1)
          } // The leaf event's width is determined by its row's width

          return this.row._width
        },
        /**
         * The event's calculated width, possibly with extra width added for
         * overlapping effect.
         */
      },
      {
        key: 'width',
        get: function get() {
          var noOverlap = this._width
          var overlap = Math.min(100, this._width * 1.7) // Containers can always grow.

          if (this.rows) {
            return overlap
          } // Rows can grow if they have leaves.

          if (this.leaves) {
            return this.leaves.length > 0 ? overlap : noOverlap
          } // Leaves can grow unless they're the last item in a row.

          var leaves = this.row.leaves
          var index = leaves.indexOf(this)
          return index === leaves.length - 1 ? noOverlap : overlap
        },
      },
      {
        key: 'xOffset',
        get: function get() {
          // Containers have no offset.
          if (this.rows) return 0 // Rows always start where their container ends.

          if (this.leaves) return this.container._width // Leaves are spread out evenly on the space left by its row.

          var _this$row = this.row,
            leaves = _this$row.leaves,
            xOffset = _this$row.xOffset,
            _width = _this$row._width
          var index = leaves.indexOf(this) + 1
          return xOffset + index * _width
        },
      },
    ])

    return Event
  })()
  /**
   * Return true if event a and b is considered to be on the same row.
   */

  function onSameRow(a, b, minimumStartDifference) {
    return (
      // Occupies the same start slot.
      Math.abs(b.start - a.start) < minimumStartDifference || // A's start slot overlaps with b's end slot.
      (b.start > a.start && b.start < a.end)
    )
  }

  function sortByRender(events) {
    var sortedByTime = sortBy(events, [
      'startMs',
      function(e) {
        return -e.endMs
      },
    ])
    var sorted = []

    while (sortedByTime.length > 0) {
      var event = sortedByTime.shift()
      sorted.push(event)

      for (var i = 0; i < sortedByTime.length; i++) {
        var test = sortedByTime[i] // Still inside this event, look for next.

        if (event.endMs > test.startMs) continue // We've found the first event of the next event group.
        // If that event is not right next to our current event, we have to
        // move it here.

        if (i > 0) {
          var _event = sortedByTime.splice(i, 1)[0]
          sorted.push(_event)
        } // We've already found the next event group, so stop looking.

        break
      }
    }

    return sorted
  }

  function getStyledEvents(_ref2) {
    var events = _ref2.events,
      minimumStartDifference = _ref2.minimumStartDifference,
      slotMetrics = _ref2.slotMetrics,
      accessors = _ref2.accessors
    // Create proxy events and order them so that we don't have
    // to fiddle with z-indexes.
    var proxies = events.map(function(event) {
      return new Event(event, {
        slotMetrics: slotMetrics,
        accessors: accessors,
      })
    })
    var eventsInRenderOrder = sortByRender(proxies) // Group overlapping events, while keeping order.
    // Every event is always one of: container, row or leaf.
    // Containers can contain rows, and rows can contain leaves.

    var containerEvents = []

    var _loop = function _loop(i) {
      var event = eventsInRenderOrder[i] // Check if this event can go into a container event.

      var container = containerEvents.find(function(c) {
        return (
          c.end > event.start ||
          Math.abs(event.start - c.start) < minimumStartDifference
        )
      }) // Couldn't find a container — that means this event is a container.

      if (!container) {
        event.rows = []
        containerEvents.push(event)
        return 'continue'
      } // Found a container for the event.

      event.container = container // Check if the event can be placed in an existing row.
      // Start looking from behind.

      var row = null

      for (var j = container.rows.length - 1; !row && j >= 0; j--) {
        if (onSameRow(container.rows[j], event, minimumStartDifference)) {
          row = container.rows[j]
        }
      }

      if (row) {
        // Found a row, so add it.
        row.leaves.push(event)
        event.row = row
      } else {
        // Couldn't find a row – that means this event is a row.
        event.leaves = []
        container.rows.push(event)
      }
    }

    for (var i = 0; i < eventsInRenderOrder.length; i++) {
      var _ret = _loop(i)

      if (_ret === 'continue') continue
    } // Return the original events, along with their styles.

    return eventsInRenderOrder.map(function(event) {
      return {
        event: event.data,
        style: {
          top: event.top,
          height: event.height,
          width: event.width,
          xOffset: Math.max(0, event.xOffset),
        },
      }
    })
  }

  function getMaxIdxDFS(node, maxIdx, visited) {
    for (var i = 0; i < node.friends.length; ++i) {
      if (visited.indexOf(node.friends[i]) > -1) continue
      maxIdx = maxIdx > node.friends[i].idx ? maxIdx : node.friends[i].idx // TODO : trace it by not object but kinda index or something for performance

      visited.push(node.friends[i])
      var newIdx = getMaxIdxDFS(node.friends[i], maxIdx, visited)
      maxIdx = maxIdx > newIdx ? maxIdx : newIdx
    }

    return maxIdx
  }

  function noOverlap(_ref) {
    var events = _ref.events,
      minimumStartDifference = _ref.minimumStartDifference,
      slotMetrics = _ref.slotMetrics,
      accessors = _ref.accessors
    var styledEvents = getStyledEvents({
      events: events,
      minimumStartDifference: minimumStartDifference,
      slotMetrics: slotMetrics,
      accessors: accessors,
    })
    styledEvents.sort(function(a, b) {
      a = a.style
      b = b.style
      if (a.top !== b.top) return a.top > b.top ? 1 : -1
      else return a.top + a.height < b.top + b.height ? 1 : -1
    })

    for (var i = 0; i < styledEvents.length; ++i) {
      styledEvents[i].friends = []
      delete styledEvents[i].style.left
      delete styledEvents[i].style.left
      delete styledEvents[i].idx
      delete styledEvents[i].size
    }

    for (var _i = 0; _i < styledEvents.length - 1; ++_i) {
      var se1 = styledEvents[_i]
      var y1 = se1.style.top
      var y2 = se1.style.top + se1.style.height

      for (var j = _i + 1; j < styledEvents.length; ++j) {
        var se2 = styledEvents[j]
        var y3 = se2.style.top
        var y4 = se2.style.top + se2.style.height // be friends when overlapped

        if ((y3 <= y1 && y1 < y4) || (y1 <= y3 && y3 < y2)) {
          // TODO : hashmap would be effective for performance
          se1.friends.push(se2)
          se2.friends.push(se1)
        }
      }
    }

    for (var _i2 = 0; _i2 < styledEvents.length; ++_i2) {
      var se = styledEvents[_i2]
      var bitmap = []

      for (var _j = 0; _j < 100; ++_j) {
        bitmap.push(1)
      } // 1 means available

      for (var _j2 = 0; _j2 < se.friends.length; ++_j2) {
        if (se.friends[_j2].idx !== undefined) bitmap[se.friends[_j2].idx] = 0
      } // 0 means reserved

      se.idx = bitmap.indexOf(1)
    }

    for (var _i3 = 0; _i3 < styledEvents.length; ++_i3) {
      var size = 0
      if (styledEvents[_i3].size) continue
      var allFriends = []
      var maxIdx = getMaxIdxDFS(styledEvents[_i3], 0, allFriends)
      size = 100 / (maxIdx + 1)
      styledEvents[_i3].size = size

      for (var _j3 = 0; _j3 < allFriends.length; ++_j3) {
        allFriends[_j3].size = size
      }
    }

    for (var _i4 = 0; _i4 < styledEvents.length; ++_i4) {
      var e = styledEvents[_i4]
      e.style.left = e.idx * e.size // stretch to maximum

      var _maxIdx = 0

      for (var _j4 = 0; _j4 < e.friends.length; ++_j4) {
        var idx = e.friends[_j4]
        _maxIdx = _maxIdx > idx ? _maxIdx : idx
      }

      if (_maxIdx <= e.idx) e.size = 100 - e.idx * e.size // padding between events
      // for this feature, `width` is not percentage based unit anymore
      // it will be used with calc()

      var padding = e.idx === 0 ? 0 : 3
      e.style.width = 'calc(' + e.size + '% - ' + padding + 'px)'
      e.style.height = 'calc(' + e.style.height + '% - 2px)'
      e.style.xOffset = 'calc(' + e.style.left + '% + ' + padding + 'px)'
    }

    return styledEvents
  }

  /*eslint no-unused-vars: "off"*/
  var DefaultAlgorithms = {
    overlap: getStyledEvents,
    'no-overlap': noOverlap,
  }

  function isFunction$1(a) {
    return !!(a && a.constructor && a.call && a.apply)
  } //

  function getStyledEvents$1(_ref) {
    var events = _ref.events,
      minimumStartDifference = _ref.minimumStartDifference,
      slotMetrics = _ref.slotMetrics,
      accessors = _ref.accessors,
      dayLayoutAlgorithm = _ref.dayLayoutAlgorithm
    var algorithm = dayLayoutAlgorithm
    if (dayLayoutAlgorithm in DefaultAlgorithms)
      algorithm = DefaultAlgorithms[dayLayoutAlgorithm]

    if (!isFunction$1(algorithm)) {
      // invalid algorithm
      return []
    }

    return algorithm.apply(this, arguments)
  }

  var viewNames = Object.keys(views).map(function(k) {
    return views[k]
  })
  var accessor$1 = propTypes.oneOfType([propTypes.string, propTypes.func])
  var dateFormat = propTypes.any
  var dateRangeFormat = propTypes.func
  /**
   * accepts either an array of builtin view names:
   *
   * ```
   * views={['month', 'day', 'agenda']}
   * ```
   *
   * or an object hash of the view name and the component (or boolean for builtin)
   *
   * ```
   * views={{
   *   month: true,
   *   week: false,
   *   workweek: WorkWeekViewComponent,
   * }}
   * ```
   */

  var views$1 = propTypes.oneOfType([
    propTypes.arrayOf(propTypes.oneOf(viewNames)),
    propTypes.objectOf(function(prop, key) {
      var isBuiltinView =
        viewNames.indexOf(key) !== -1 && typeof prop[key] === 'boolean'

      if (isBuiltinView) {
        return null
      } else {
        for (
          var _len = arguments.length,
            args = new Array(_len > 2 ? _len - 2 : 0),
            _key = 2;
          _key < _len;
          _key++
        ) {
          args[_key - 2] = arguments[_key]
        }

        return propTypes.elementType.apply(propTypes, [prop, key].concat(args))
      }
    }),
  ])
  var DayLayoutAlgorithmPropType = propTypes.oneOfType([
    propTypes.oneOf(['overlap', 'no-overlap']),
    propTypes.func,
  ])

  var getDstOffset = function getDstOffset(start, end) {
    return start.getTimezoneOffset() - end.getTimezoneOffset()
  }

  var getKey$1 = function getKey(min, max, step, slots) {
    return (
      '' +
      +startOf(min, 'minutes') +
      ('' + +startOf(max, 'minutes')) +
      (step + '-' + slots)
    )
  }

  function getSlotMetrics$1(_ref) {
    var start = _ref.min,
      end = _ref.max,
      step = _ref.step,
      timeslots = _ref.timeslots
    var key = getKey$1(start, end, step, timeslots) // if the start is on a DST-changing day but *after* the moment of DST
    // transition we need to add those extra minutes to our minutesFromMidnight

    var daystart = startOf(start, 'day')
    var daystartdstoffset = getDstOffset(daystart, start)
    var totalMin = 1 + diff(start, end, 'minutes') + getDstOffset(start, end)
    var minutesFromMidnight =
      diff(daystart, start, 'minutes') + daystartdstoffset
    var numGroups = Math.ceil(totalMin / (step * timeslots))
    var numSlots = numGroups * timeslots
    var groups = new Array(numGroups)
    var slots = new Array(numSlots) // Each slot date is created from "zero", instead of adding `step` to
    // the previous one, in order to avoid DST oddities

    for (var grp = 0; grp < numGroups; grp++) {
      groups[grp] = new Array(timeslots)

      for (var slot = 0; slot < timeslots; slot++) {
        var slotIdx = grp * timeslots + slot
        var minFromStart = slotIdx * step // A date with total minutes calculated from the start of the day

        slots[slotIdx] = groups[grp][slot] = new Date(
          start.getFullYear(),
          start.getMonth(),
          start.getDate(),
          0,
          minutesFromMidnight + minFromStart,
          0,
          0
        )
      }
    } // Necessary to be able to select up until the last timeslot in a day

    var lastSlotMinFromStart = slots.length * step
    slots.push(
      new Date(
        start.getFullYear(),
        start.getMonth(),
        start.getDate(),
        0,
        minutesFromMidnight + lastSlotMinFromStart,
        0,
        0
      )
    )

    function positionFromDate(date) {
      var diff$1 = diff(start, date, 'minutes') + getDstOffset(start, date)
      return Math.min(diff$1, totalMin)
    }

    return {
      groups: groups,
      update: function update(args) {
        if (getKey$1(args) !== key) return getSlotMetrics$1(args)
        return this
      },
      dateIsInGroup: function dateIsInGroup(date, groupIndex) {
        var nextGroup = groups[groupIndex + 1]
        return inRange(
          date,
          groups[groupIndex][0],
          nextGroup ? nextGroup[0] : end,
          'minutes'
        )
      },
      nextSlot: function nextSlot(slot) {
        var next = slots[Math.min(slots.indexOf(slot) + 1, slots.length - 1)] // in the case of the last slot we won't a long enough range so manually get it

        if (next === slot) next = add(slot, step, 'minutes')
        return next
      },
      closestSlotToPosition: function closestSlotToPosition(percent) {
        var slot = Math.min(
          slots.length - 1,
          Math.max(0, Math.floor(percent * numSlots))
        )
        return slots[slot]
      },
      closestSlotFromPoint: function closestSlotFromPoint(point, boundaryRect) {
        var range = Math.abs(boundaryRect.top - boundaryRect.bottom)
        return this.closestSlotToPosition((point.y - boundaryRect.top) / range)
      },
      closestSlotFromDate: function closestSlotFromDate(date, offset) {
        if (offset === void 0) {
          offset = 0
        }

        if (lt(date, start, 'minutes')) return slots[0]
        var diffMins = diff(start, date, 'minutes')
        return slots[(diffMins - (diffMins % step)) / step + offset]
      },
      startsBeforeDay: function startsBeforeDay(date) {
        return lt(date, start, 'day')
      },
      startsAfterDay: function startsAfterDay(date) {
        return gt(date, end, 'day')
      },
      startsBefore: function startsBefore(date) {
        return lt(merge(start, date), start, 'minutes')
      },
      startsAfter: function startsAfter(date) {
        return gt(merge(end, date), end, 'minutes')
      },
      getRange: function getRange(rangeStart, rangeEnd, ignoreMin, ignoreMax) {
        if (!ignoreMin) rangeStart = min$2(end, max$2(start, rangeStart))
        if (!ignoreMax) rangeEnd = min$2(end, max$2(start, rangeEnd))
        var rangeStartMin = positionFromDate(rangeStart)
        var rangeEndMin = positionFromDate(rangeEnd)
        var top =
          rangeEndMin > step * numSlots && !eq$1(end, rangeEnd)
            ? ((rangeStartMin - step) / (step * numSlots)) * 100
            : (rangeStartMin / (step * numSlots)) * 100
        return {
          top: top,
          height: (rangeEndMin / (step * numSlots)) * 100 - top,
          start: positionFromDate(rangeStart),
          startDate: rangeStart,
          end: positionFromDate(rangeEnd),
          endDate: rangeEnd,
        }
      },
      getCurrentTimePosition: function getCurrentTimePosition(rangeStart) {
        var rangeStartMin = positionFromDate(rangeStart)
        var top = (rangeStartMin / (step * numSlots)) * 100
        return top
      },
    }
  }

  var _excluded$2 = ['dayProp'],
    _excluded2 = ['eventContainerWrapper']

  var DayColumn = /*#__PURE__*/ (function(_React$Component) {
    _inheritsLoose(DayColumn, _React$Component)

    function DayColumn() {
      var _this

      for (
        var _len = arguments.length, _args = new Array(_len), _key = 0;
        _key < _len;
        _key++
      ) {
        _args[_key] = arguments[_key]
      }

      _this =
        _React$Component.call.apply(_React$Component, [this].concat(_args)) ||
        this
      _this.state = {
        selecting: false,
        timeIndicatorPosition: null,
      }
      _this.intervalTriggered = false

      _this.renderEvents = function(_ref) {
        var events = _ref.events,
          isBackgroundEvent = _ref.isBackgroundEvent
        var _this$props = _this.props,
          rtl = _this$props.rtl,
          selected = _this$props.selected,
          accessors = _this$props.accessors,
          localizer = _this$props.localizer,
          getters = _this$props.getters,
          components = _this$props.components,
          step = _this$props.step,
          timeslots = _this$props.timeslots,
          dayLayoutAlgorithm = _this$props.dayLayoutAlgorithm,
          resizable = _this$props.resizable,
          showLabelTop = _this$props.showLabelTop

        var _assertThisInitialize = _assertThisInitialized(_this),
          slotMetrics = _assertThisInitialize.slotMetrics

        var messages = localizer.messages
        var styledEvents = getStyledEvents$1({
          events: events,
          accessors: accessors,
          slotMetrics: slotMetrics,
          minimumStartDifference: Math.ceil((step * timeslots) / 2),
          dayLayoutAlgorithm: dayLayoutAlgorithm,
        })
        return styledEvents.map(function(_ref2, idx) {
          var event = _ref2.event,
            style = _ref2.style
          var end = accessors.end(event)
          var start = accessors.start(event)
          var format = 'eventTimeRangeFormat'
          var label
          var startsBeforeDay = slotMetrics.startsBeforeDay(start)
          var startsAfterDay = slotMetrics.startsAfterDay(end)
          if (startsBeforeDay) format = 'eventTimeRangeEndFormat'
          else if (startsAfterDay) format = 'eventTimeRangeStartFormat'
          if (startsBeforeDay && startsAfterDay) label = messages.allDay
          else
            label = localizer.format(
              {
                start: start,
                end: end,
              },
              format
            )
          var continuesEarlier =
            startsBeforeDay || slotMetrics.startsBefore(start)
          var continuesLater = startsAfterDay || slotMetrics.startsAfter(end)
          return /*#__PURE__*/ React__default.createElement(TimeGridEvent, {
            style: style,
            event: event,
            label: label,
            key: 'evt_' + idx,
            getters: getters,
            rtl: rtl,
            components: components,
            continuesEarlier: continuesEarlier,
            continuesLater: continuesLater,
            accessors: accessors,
            selected: isSelected(event, selected),
            onClick: function onClick(e) {
              return _this._select(event, e)
            },
            onDoubleClick: function onDoubleClick(e) {
              return _this._doubleClick(event, e)
            },
            isBackgroundEvent: isBackgroundEvent,
            onKeyPress: function onKeyPress(e) {
              return _this._keyPress(event, e)
            },
            resizable: resizable,
            showLabelTop: showLabelTop,
          })
        })
      }

      _this._selectable = function() {
        var node = ReactDOM.findDOMNode(_assertThisInitialized(_this))
        var selector = (_this._selector = new Selection(
          function() {
            return ReactDOM.findDOMNode(_assertThisInitialized(_this))
          },
          {
            longPressThreshold: _this.props.longPressThreshold,
          }
        ))

        var maybeSelect = function maybeSelect(box) {
          var onSelecting = _this.props.onSelecting
          var current = _this.state || {}
          var state = selectionState(box)
          var start = state.startDate,
            end = state.endDate

          if (onSelecting) {
            if (
              (eq$1(current.startDate, start, 'minutes') &&
                eq$1(current.endDate, end, 'minutes')) ||
              onSelecting({
                start: start,
                end: end,
                resourceId: _this.props.resource,
              }) === false
            )
              return
          }

          if (
            _this.state.start !== state.start ||
            _this.state.end !== state.end ||
            _this.state.selecting !== state.selecting
          ) {
            _this.setState(state)
          }
        }

        var selectionState = function selectionState(point) {
          var currentSlot = _this.slotMetrics.closestSlotFromPoint(
            point,
            getBoundsForNode(node)
          )

          if (!_this.state.selecting) {
            _this._initialSlot = currentSlot
          }

          var initialSlot = _this._initialSlot

          if (lte(initialSlot, currentSlot)) {
            currentSlot = _this.slotMetrics.nextSlot(currentSlot)
          } else if (gt(initialSlot, currentSlot)) {
            initialSlot = _this.slotMetrics.nextSlot(initialSlot)
          }

          var selectRange = _this.slotMetrics.getRange(
            min$2(initialSlot, currentSlot),
            max$2(initialSlot, currentSlot)
          )

          return _extends({}, selectRange, {
            selecting: true,
            top: selectRange.top + '%',
            height: selectRange.height + '%',
          })
        }

        var selectorClicksHandler = function selectorClicksHandler(
          box,
          actionType
        ) {
          var container = ReactDOM.findDOMNode(_assertThisInitialized(_this))

          if (
            !isEvent(container, box) &&
            isOverContainer(container, box.x, box.y)
          ) {
            var _selectionState = selectionState(box),
              startDate = _selectionState.startDate,
              endDate = _selectionState.endDate

            _this._selectSlot({
              startDate: startDate,
              endDate: endDate,
              action: actionType,
              box: box,
            })
          }

          _this.setState({
            selecting: false,
          })
        }

        selector.on('selecting', maybeSelect)
        selector.on('selectStart', maybeSelect)
        selector.on('beforeSelect', function(box) {
          if (_this.props.selectable !== 'ignoreEvents') return
          return !isEvent(
            ReactDOM.findDOMNode(_assertThisInitialized(_this)),
            box
          )
        })
        selector.on('click', function(box) {
          return selectorClicksHandler(box, 'click')
        })
        selector.on('doubleClick', function(box) {
          return selectorClicksHandler(box, 'doubleClick')
        })
        selector.on('select', function(bounds) {
          if (_this.state.selecting) {
            _this._selectSlot(
              _extends({}, _this.state, {
                action: 'select',
                bounds: bounds,
              })
            )

            _this.setState({
              selecting: false,
            })
          }
        })
        selector.on('reset', function() {
          if (_this.state.selecting) {
            _this.setState({
              selecting: false,
            })
          }
        })
      }

      _this._teardownSelectable = function() {
        if (!_this._selector) return

        _this._selector.teardown()

        _this._selector = null
      }

      _this._selectSlot = function(_ref3) {
        var startDate = _ref3.startDate,
          endDate = _ref3.endDate,
          action = _ref3.action,
          bounds = _ref3.bounds,
          box = _ref3.box
        var current = startDate,
          slots = []

        while (lte(current, endDate)) {
          slots.push(current)
          current = new Date(+current + _this.props.step * 60 * 1000) // using Date ensures not to create an endless loop the day DST begins
        }

        notify(_this.props.onSelectSlot, {
          slots: slots,
          start: startDate,
          end: endDate,
          resourceId: _this.props.resource,
          action: action,
          bounds: bounds,
          box: box,
        })
      }

      _this._select = function() {
        for (
          var _len2 = arguments.length, args = new Array(_len2), _key2 = 0;
          _key2 < _len2;
          _key2++
        ) {
          args[_key2] = arguments[_key2]
        }

        notify(_this.props.onSelectEvent, args)
      }

      _this._doubleClick = function() {
        for (
          var _len3 = arguments.length, args = new Array(_len3), _key3 = 0;
          _key3 < _len3;
          _key3++
        ) {
          args[_key3] = arguments[_key3]
        }

        notify(_this.props.onDoubleClickEvent, args)
      }

      _this._keyPress = function() {
        for (
          var _len4 = arguments.length, args = new Array(_len4), _key4 = 0;
          _key4 < _len4;
          _key4++
        ) {
          args[_key4] = arguments[_key4]
        }

        notify(_this.props.onKeyPressEvent, args)
      }

      _this.slotMetrics = getSlotMetrics$1(_this.props)
      return _this
    }

    var _proto = DayColumn.prototype

    _proto.componentDidMount = function componentDidMount() {
      this.props.selectable && this._selectable()

      if (this.props.isNow) {
        this.setTimeIndicatorPositionUpdateInterval()
      }
    }

    _proto.componentWillUnmount = function componentWillUnmount() {
      this._teardownSelectable()

      this.clearTimeIndicatorInterval()
    }

    _proto.UNSAFE_componentWillReceiveProps = function UNSAFE_componentWillReceiveProps(
      nextProps
    ) {
      if (nextProps.selectable && !this.props.selectable) this._selectable()
      if (!nextProps.selectable && this.props.selectable)
        this._teardownSelectable()
      this.slotMetrics = this.slotMetrics.update(nextProps)
    }

    _proto.componentDidUpdate = function componentDidUpdate(
      prevProps,
      prevState
    ) {
      var getNowChanged = !eq$1(
        prevProps.getNow(),
        this.props.getNow(),
        'minutes'
      )

      if (prevProps.isNow !== this.props.isNow || getNowChanged) {
        this.clearTimeIndicatorInterval()

        if (this.props.isNow) {
          var tail =
            !getNowChanged &&
            eq$1(prevProps.date, this.props.date, 'minutes') &&
            prevState.timeIndicatorPosition === this.state.timeIndicatorPosition
          this.setTimeIndicatorPositionUpdateInterval(tail)
        }
      } else if (
        this.props.isNow &&
        (!eq$1(prevProps.min, this.props.min, 'minutes') ||
          !eq$1(prevProps.max, this.props.max, 'minutes'))
      ) {
        this.positionTimeIndicator()
      }
    }
    /**
     * @param tail {Boolean} - whether `positionTimeIndicator` call should be
     *   deferred or called upon setting interval (`true` - if deferred);
     */

    _proto.setTimeIndicatorPositionUpdateInterval = function setTimeIndicatorPositionUpdateInterval(
      tail
    ) {
      var _this2 = this

      if (tail === void 0) {
        tail = false
      }

      if (!this.intervalTriggered && !tail) {
        this.positionTimeIndicator()
      }

      this._timeIndicatorTimeout = window.setTimeout(function() {
        _this2.intervalTriggered = true

        _this2.positionTimeIndicator()

        _this2.setTimeIndicatorPositionUpdateInterval()
      }, 60000)
    }

    _proto.clearTimeIndicatorInterval = function clearTimeIndicatorInterval() {
      this.intervalTriggered = false
      window.clearTimeout(this._timeIndicatorTimeout)
    }

    _proto.positionTimeIndicator = function positionTimeIndicator() {
      var _this$props2 = this.props,
        min = _this$props2.min,
        max = _this$props2.max,
        getNow = _this$props2.getNow
      var current = getNow()

      if (current >= min && current <= max) {
        var top = this.slotMetrics.getCurrentTimePosition(current)
        this.intervalTriggered = true
        this.setState({
          timeIndicatorPosition: top,
        })
      } else {
        this.clearTimeIndicatorInterval()
      }
    }

    _proto.render = function render() {
      var _this$props3 = this.props,
        date = _this$props3.date,
        max = _this$props3.max,
        rtl = _this$props3.rtl,
        isNow = _this$props3.isNow,
        resource = _this$props3.resource,
        accessors = _this$props3.accessors,
        localizer = _this$props3.localizer,
        showLabelTop = _this$props3.showLabelTop,
        _this$props3$getters = _this$props3.getters,
        dayProp = _this$props3$getters.dayProp,
        getters = _objectWithoutPropertiesLoose(
          _this$props3$getters,
          _excluded$2
        ),
        _this$props3$componen = _this$props3.components,
        EventContainer = _this$props3$componen.eventContainerWrapper,
        components = _objectWithoutPropertiesLoose(
          _this$props3$componen,
          _excluded2
        )

      var slotMetrics = this.slotMetrics
      var _this$state = this.state,
        selecting = _this$state.selecting,
        top = _this$state.top,
        height = _this$state.height,
        startDate = _this$state.startDate,
        endDate = _this$state.endDate
      var selectDates = {
        start: startDate,
        end: endDate,
      }

      var _dayProp = dayProp(max),
        className = _dayProp.className,
        style = _dayProp.style

      var DayColumnWrapperComponent =
        components.dayColumnWrapper || DayColumnWrapper
      return /*#__PURE__*/ React__default.createElement(
        DayColumnWrapperComponent,
        {
          date: date,
          style: style,
          className: clsx(
            className,
            'rbc-day-slot',
            'rbc-time-column',
            isNow && 'rbc-now',
            isNow && 'rbc-today', // WHY
            selecting && 'rbc-slot-selecting'
          ),
        },
        slotMetrics.groups.map(function(grp, idx) {
          return /*#__PURE__*/ React__default.createElement(TimeSlotGroup, {
            key: idx,
            group: grp,
            resource: resource,
            getters: getters,
            components: components,
          })
        }),
        /*#__PURE__*/ React__default.createElement(
          EventContainer,
          {
            localizer: localizer,
            resource: resource,
            accessors: accessors,
            getters: getters,
            components: components,
            slotMetrics: slotMetrics,
            showLabelTop: showLabelTop,
          },
          /*#__PURE__*/ React__default.createElement(
            'div',
            {
              className: clsx('rbc-events-container', rtl && 'rtl'),
            },
            this.renderEvents({
              events: this.props.backgroundEvents,
              isBackgroundEvent: true,
            }),
            this.renderEvents({
              events: this.props.events,
            })
          )
        ),
        selecting &&
          /*#__PURE__*/ React__default.createElement(
            'div',
            {
              className: 'rbc-slot-selection',
              style: {
                top: top,
                height: height,
              },
            },
            /*#__PURE__*/ React__default.createElement(
              'span',
              null,
              localizer.format(selectDates, 'selectRangeFormat')
            )
          ),
        isNow &&
          this.intervalTriggered &&
          /*#__PURE__*/ React__default.createElement('div', {
            className: 'rbc-current-time-indicator',
            style: {
              top: this.state.timeIndicatorPosition + '%',
            },
          })
      )
    }

    return DayColumn
  })(React__default.Component)

  DayColumn.propTypes = {
    events: propTypes.array.isRequired,
    backgroundEvents: propTypes.array.isRequired,
    step: propTypes.number.isRequired,
    date: propTypes.instanceOf(Date).isRequired,
    min: propTypes.instanceOf(Date).isRequired,
    max: propTypes.instanceOf(Date).isRequired,
    getNow: propTypes.func.isRequired,
    isNow: propTypes.bool,
    rtl: propTypes.bool,
    resizable: propTypes.bool,
    accessors: propTypes.object.isRequired,
    components: propTypes.object.isRequired,
    getters: propTypes.object.isRequired,
    localizer: propTypes.object.isRequired,
    showMultiDayTimes: propTypes.bool,
    culture: propTypes.string,
    timeslots: propTypes.number,
    selected: propTypes.object,
    selectable: propTypes.oneOf([true, false, 'ignoreEvents']),
    eventOffset: propTypes.number,
    longPressThreshold: propTypes.number,
    onSelecting: propTypes.func,
    onSelectSlot: propTypes.func.isRequired,
    onSelectEvent: propTypes.func.isRequired,
    onDoubleClickEvent: propTypes.func.isRequired,
    onKeyPressEvent: propTypes.func,
    className: propTypes.string,
    dragThroughEvents: propTypes.bool,
    resource: propTypes.any,
    dayLayoutAlgorithm: DayLayoutAlgorithmPropType,
    showLabelTop: propTypes.bool,
  }
  DayColumn.defaultProps = {
    dragThroughEvents: true,
    timeslots: 2,
  }

  var ResourceHeader = function ResourceHeader(_ref) {
    var label = _ref.label
    return /*#__PURE__*/ React__default.createElement(
      React__default.Fragment,
      null,
      label
    )
  }

  ResourceHeader.propTypes = {
    label: propTypes.node,
    index: propTypes.number,
    resource: propTypes.object,
  }

  var TimeGridHeader = /*#__PURE__*/ (function(_React$Component) {
    _inheritsLoose(TimeGridHeader, _React$Component)

    function TimeGridHeader() {
      var _this

      for (
        var _len = arguments.length, args = new Array(_len), _key = 0;
        _key < _len;
        _key++
      ) {
        args[_key] = arguments[_key]
      }

      _this =
        _React$Component.call.apply(_React$Component, [this].concat(args)) ||
        this

      _this.handleHeaderClick = function(date, view, e) {
        e.preventDefault()
        notify(_this.props.onDrillDown, [date, view])
      }

      _this.renderRow = function(resource) {
        var _this$props = _this.props,
          events = _this$props.events,
          rtl = _this$props.rtl,
          selectable = _this$props.selectable,
          getNow = _this$props.getNow,
          range = _this$props.range,
          getters = _this$props.getters,
          localizer = _this$props.localizer,
          accessors = _this$props.accessors,
          components = _this$props.components,
          resizable = _this$props.resizable
        var resourceId = accessors.resourceId(resource)
        var eventsToDisplay = resource
          ? events.filter(function(event) {
              return accessors.resource(event) === resourceId
            })
          : events
        return /*#__PURE__*/ React__default.createElement(DateContentRow, {
          isAllDay: true,
          rtl: rtl,
          getNow: getNow,
          minRows: 2,
          range: range,
          events: eventsToDisplay,
          resourceId: resourceId,
          className: 'rbc-allday-cell',
          selectable: selectable,
          selected: _this.props.selected,
          components: components,
          accessors: accessors,
          getters: getters,
          localizer: localizer,
          onSelect: _this.props.onSelectEvent,
          onDoubleClick: _this.props.onDoubleClickEvent,
          onKeyPress: _this.props.onKeyPressEvent,
          onSelectSlot: _this.props.onSelectSlot,
          longPressThreshold: _this.props.longPressThreshold,
          resizable: resizable,
        })
      }

      return _this
    }

    var _proto = TimeGridHeader.prototype

    _proto.renderHeaderCells = function renderHeaderCells(range) {
      var _this2 = this

      var _this$props2 = this.props,
        localizer = _this$props2.localizer,
        getDrilldownView = _this$props2.getDrilldownView,
        getNow = _this$props2.getNow,
        dayProp = _this$props2.getters.dayProp,
        _this$props2$componen = _this$props2.components.header,
        HeaderComponent =
          _this$props2$componen === void 0 ? Header : _this$props2$componen
      var today = getNow()
      return range.map(function(date, i) {
        var drilldownView = getDrilldownView(date)
        var label = localizer.format(date, 'dayFormat')

        var _dayProp = dayProp(date),
          className = _dayProp.className,
          style = _dayProp.style

        var header = /*#__PURE__*/ React__default.createElement(
          HeaderComponent,
          {
            date: date,
            label: label,
            localizer: localizer,
          }
        )
        return /*#__PURE__*/ React__default.createElement(
          'div',
          {
            key: i,
            style: style,
            className: clsx(
              'rbc-header',
              className,
              eq$1(date, today, 'day') && 'rbc-today'
            ),
          },
          drilldownView
            ? /*#__PURE__*/ React__default.createElement(
                'a',
                {
                  href: '#',
                  onClick: function onClick(e) {
                    return _this2.handleHeaderClick(date, drilldownView, e)
                  },
                },
                header
              )
            : /*#__PURE__*/ React__default.createElement('span', null, header)
        )
      })
    }

    _proto.render = function render() {
      var _this3 = this

      var _this$props3 = this.props,
        rtl = _this$props3.rtl,
        resources = _this$props3.resources,
        range = _this$props3.range,
        events = _this$props3.events,
        getNow = _this$props3.getNow,
        accessors = _this$props3.accessors,
        selectable = _this$props3.selectable,
        components = _this$props3.components,
        getters = _this$props3.getters,
        scrollRef = _this$props3.scrollRef,
        localizer = _this$props3.localizer,
        _this$props3$componen = _this$props3.components,
        TimeGutterHeader = _this$props3$componen.timeGutterHeader,
        _this$props3$componen2 = _this$props3$componen.resourceHeader,
        ResourceHeaderComponent =
          _this$props3$componen2 === void 0
            ? ResourceHeader
            : _this$props3$componen2,
        resizable = _this$props3.resizable
      var style = {}
      var groupedEvents = resources.groupEvents(events)
      return /*#__PURE__*/ React__default.createElement(
        'div',
        {
          style: style,
          ref: scrollRef,
          className: clsx('rbc-time-header'),
        },
        /*#__PURE__*/ React__default.createElement(
          'div',
          {
            className: 'rbc-label rbc-time-header-gutter',
          },
          TimeGutterHeader &&
            /*#__PURE__*/ React__default.createElement(TimeGutterHeader, null)
        ),
        resources.map(function(_ref, idx) {
          var id = _ref[0],
            resource = _ref[1]
          return /*#__PURE__*/ React__default.createElement(
            'div',
            {
              className: 'rbc-time-header-content',
              key: id || idx,
            },
            resource &&
              /*#__PURE__*/ React__default.createElement(
                'div',
                {
                  className: 'rbc-row rbc-row-resource',
                  key: 'resource_' + idx,
                },
                /*#__PURE__*/ React__default.createElement(
                  'div',
                  {
                    className: 'rbc-header',
                  },
                  /*#__PURE__*/ React__default.createElement(
                    ResourceHeaderComponent,
                    {
                      index: idx,
                      label: accessors.resourceTitle(resource),
                      resource: resource,
                    }
                  )
                )
              ),
            /*#__PURE__*/ React__default.createElement(
              'div',
              {
                className:
                  'rbc-row rbc-time-header-cell' +
                  (range.length <= 1 ? ' rbc-time-header-cell-single-day' : ''),
              },
              _this3.renderHeaderCells(range)
            ),
            /*#__PURE__*/ React__default.createElement(DateContentRow, {
              isAllDay: true,
              rtl: rtl,
              getNow: getNow,
              minRows: 2,
              range: range,
              events: groupedEvents.get(id) || [],
              resourceId: resource && id,
              className: 'rbc-allday-cell',
              selectable: selectable,
              selected: _this3.props.selected,
              components: components,
              accessors: accessors,
              getters: getters,
              localizer: localizer,
              onSelect: _this3.props.onSelectEvent,
              onDoubleClick: _this3.props.onDoubleClickEvent,
              onKeyPress: _this3.props.onKeyPressEvent,
              onSelectSlot: _this3.props.onSelectSlot,
              longPressThreshold: _this3.props.longPressThreshold,
              resizable: resizable,
            })
          )
        })
      )
    }

    return TimeGridHeader
  })(React__default.Component)

  TimeGridHeader.propTypes = {
    range: propTypes.array.isRequired,
    events: propTypes.array.isRequired,
    resources: propTypes.object,
    getNow: propTypes.func.isRequired,
    rtl: propTypes.bool,
    resizable: propTypes.bool,
    localizer: propTypes.object.isRequired,
    accessors: propTypes.object.isRequired,
    components: propTypes.object.isRequired,
    getters: propTypes.object.isRequired,
    selected: propTypes.object,
    selectable: propTypes.oneOf([true, false, 'ignoreEvents']),
    longPressThreshold: propTypes.number,
    onSelectSlot: propTypes.func,
    onSelectEvent: propTypes.func,
    onDoubleClickEvent: propTypes.func,
    onKeyPressEvent: propTypes.func,
    onDrillDown: propTypes.func,
    getDrilldownView: propTypes.func.isRequired,
    scrollRef: propTypes.any,
  }

  var TimeGutter = /*#__PURE__*/ (function(_Component) {
    _inheritsLoose(TimeGutter, _Component)

    function TimeGutter() {
      var _this

      for (
        var _len = arguments.length, args = new Array(_len), _key = 0;
        _key < _len;
        _key++
      ) {
        args[_key] = arguments[_key]
      }

      _this = _Component.call.apply(_Component, [this].concat(args)) || this

      _this.renderSlot = function(value, idx) {
        if (idx !== 0) return null
        var _this$props = _this.props,
          localizer = _this$props.localizer,
          getNow = _this$props.getNow

        var isNow = _this.slotMetrics.dateIsInGroup(getNow(), idx)

        return /*#__PURE__*/ React__default.createElement(
          'span',
          {
            className: clsx('rbc-label', isNow && 'rbc-now'),
          },
          localizer.format(value, 'timeGutterFormat')
        )
      }

      var _this$props2 = _this.props,
        min = _this$props2.min,
        max = _this$props2.max,
        timeslots = _this$props2.timeslots,
        step = _this$props2.step
      _this.slotMetrics = getSlotMetrics$1({
        min: min,
        max: max,
        timeslots: timeslots,
        step: step,
      })
      return _this
    }

    var _proto = TimeGutter.prototype

    _proto.UNSAFE_componentWillReceiveProps = function UNSAFE_componentWillReceiveProps(
      nextProps
    ) {
      var min = nextProps.min,
        max = nextProps.max,
        timeslots = nextProps.timeslots,
        step = nextProps.step
      this.slotMetrics = this.slotMetrics.update({
        min: min,
        max: max,
        timeslots: timeslots,
        step: step,
      })
    }

    _proto.render = function render() {
      var _this2 = this

      var _this$props3 = this.props,
        resource = _this$props3.resource,
        components = _this$props3.components,
        getters = _this$props3.getters
      return /*#__PURE__*/ React__default.createElement(
        'div',
        {
          className: 'rbc-time-gutter rbc-time-column',
        },
        this.slotMetrics.groups.map(function(grp, idx) {
          return /*#__PURE__*/ React__default.createElement(TimeSlotGroup, {
            key: idx,
            group: grp,
            resource: resource,
            components: components,
            renderSlot: _this2.renderSlot,
            getters: getters,
          })
        })
      )
    }

    return TimeGutter
  })(React.Component)
  TimeGutter.propTypes = {
    min: propTypes.instanceOf(Date).isRequired,
    max: propTypes.instanceOf(Date).isRequired,
    timeslots: propTypes.number.isRequired,
    step: propTypes.number.isRequired,
    getNow: propTypes.func.isRequired,
    components: propTypes.object.isRequired,
    getters: propTypes.object,
    localizer: propTypes.object.isRequired,
    resource: propTypes.string,
  }

  var NONE = {}
  function Resources(resources, accessors) {
    return {
      map: function map(fn) {
        if (!resources) return [fn([NONE, null], 0)]
        return resources.map(function(resource, idx) {
          return fn([accessors.resourceId(resource), resource], idx)
        })
      },
      groupEvents: function groupEvents(events) {
        var eventsByResource = new Map()

        if (!resources) {
          // Return all events if resources are not provided
          eventsByResource.set(NONE, events)
          return eventsByResource
        }

        events.forEach(function(event) {
          var id = accessors.resource(event) || NONE
          var resourceEvents = eventsByResource.get(id) || []
          resourceEvents.push(event)
          eventsByResource.set(id, resourceEvents)
        })
        return eventsByResource
      },
    }
  }

  var TimeGrid = /*#__PURE__*/ (function(_Component) {
    _inheritsLoose(TimeGrid, _Component)

    function TimeGrid(props) {
      var _this

      _this = _Component.call(this, props) || this

      _this.handleScroll = function(e) {
        if (_this.scrollRef.current) {
          _this.scrollRef.current.scrollLeft = e.target.scrollLeft
        }
      }

      _this.handleSelectAlldayEvent = function() {
        //cancel any pending selections so only the event click goes through.
        _this.clearSelection()

        for (
          var _len = arguments.length, args = new Array(_len), _key = 0;
          _key < _len;
          _key++
        ) {
          args[_key] = arguments[_key]
        }

        notify(_this.props.onSelectEvent, args)
      }

      _this.handleSelectAllDaySlot = function(slots, slotInfo) {
        var onSelectSlot = _this.props.onSelectSlot
        var start = new Date(slots[0])
        var end = new Date(slots[slots.length - 1])
        end.setDate(slots[slots.length - 1].getDate() + 1)
        notify(onSelectSlot, {
          slots: slots,
          start: start,
          end: end,
          action: slotInfo.action,
          resourceId: slotInfo.resourceId,
        })
      }

      _this.memoizedResources = memoizeOne(function(resources, accessors) {
        return Resources(resources, accessors)
      })
      _this.scrollRef = /*#__PURE__*/ React__default.createRef()
      _this.contentRef = /*#__PURE__*/ React__default.createRef()
      _this._scrollRatio = null
      return _this
    }

    var _proto = TimeGrid.prototype

    _proto.UNSAFE_componentWillMount = function UNSAFE_componentWillMount() {
      this.calculateScroll()
    }

    _proto.componentDidMount = function componentDidMount() {
      this.applyScroll()
    }

    _proto.componentDidUpdate = function componentDidUpdate() {
      this.applyScroll()
    }

    _proto.UNSAFE_componentWillReceiveProps = function UNSAFE_componentWillReceiveProps(
      nextProps
    ) {
      var _this$props = this.props,
        range = _this$props.range,
        scrollToTime = _this$props.scrollToTime // When paginating, reset scroll

      if (
        !eq$1(nextProps.range[0], range[0], 'minute') ||
        !eq$1(nextProps.scrollToTime, scrollToTime, 'minute')
      ) {
        this.calculateScroll(nextProps)
      }
    }

    _proto.renderEvents = function renderEvents(
      range,
      events,
      backgroundEvents,
      now
    ) {
      var _this2 = this

      var _this$props2 = this.props,
        min = _this$props2.min,
        max = _this$props2.max,
        components = _this$props2.components,
        accessors = _this$props2.accessors,
        localizer = _this$props2.localizer,
        dayLayoutAlgorithm = _this$props2.dayLayoutAlgorithm
      var resources = this.memoizedResources(this.props.resources, accessors)
      var groupedEvents = resources.groupEvents(events)
      var groupedBackgroundEvents = resources.groupEvents(backgroundEvents)
      return resources.map(function(_ref, i) {
        var id = _ref[0],
          resource = _ref[1]
        return range.map(function(date, jj) {
          var daysEvents = (groupedEvents.get(id) || []).filter(function(
            event
          ) {
            return inRange(
              date,
              accessors.start(event),
              accessors.end(event),
              'day'
            )
          })
          var daysBackgroundEvents = (
            groupedBackgroundEvents.get(id) || []
          ).filter(function(event) {
            return inRange(
              date,
              accessors.start(event),
              accessors.end(event),
              'day'
            )
          })
          return /*#__PURE__*/ React__default.createElement(
            DayColumn,
            _extends({}, _this2.props, {
              localizer: localizer,
              min: merge(date, min),
              max: merge(date, max),
              resource: resource && id,
              components: components,
              isNow: eq$1(date, now, 'day'),
              key: i + '-' + jj,
              date: date,
              events: daysEvents,
              backgroundEvents: daysBackgroundEvents,
              dayLayoutAlgorithm: dayLayoutAlgorithm,
            })
          )
        })
      })
    }

    _proto.render = function render() {
      var _this$props3 = this.props,
        events = _this$props3.events,
        backgroundEvents = _this$props3.backgroundEvents,
        range = _this$props3.range,
        rtl = _this$props3.rtl,
        selected = _this$props3.selected,
        getNow = _this$props3.getNow,
        resources = _this$props3.resources,
        components = _this$props3.components,
        accessors = _this$props3.accessors,
        getters = _this$props3.getters,
        localizer = _this$props3.localizer,
        min = _this$props3.min,
        max = _this$props3.max,
        showMultiDayTimes = _this$props3.showMultiDayTimes,
        longPressThreshold = _this$props3.longPressThreshold,
        resizable = _this$props3.resizable,
        view = _this$props3.view
      var start = range[0],
        end = range[range.length - 1]
      this.slots = range.length
      var allDayEvents = [],
        rangeEvents = [],
        rangeBackgroundEvents = []
      events.forEach(function(event) {
        if (inRange$1(event, start, end, accessors)) {
          var eStart = accessors.start(event),
            eEnd = accessors.end(event)

          if (
            accessors.allDay(event) ||
            (isJustDate(eStart) && isJustDate(eEnd)) ||
            (!showMultiDayTimes && !eq$1(eStart, eEnd, 'day'))
          ) {
            allDayEvents.push(event)
          } else {
            rangeEvents.push(event)
          }
        }
      })
      backgroundEvents.forEach(function(event) {
        if (inRange$1(event, start, end, accessors)) {
          rangeBackgroundEvents.push(event)
        }
      })
      allDayEvents.sort(function(a, b) {
        return sortEvents(a, b, accessors)
      })
      return /*#__PURE__*/ React__default.createElement(
        'div',
        {
          className: clsx(
            'rbc-time-view',
            resources && 'rbc-time-view-resources'
          ),
        },
        /*#__PURE__*/ React__default.createElement(TimeGridHeader, {
          range: range,
          events: allDayEvents,
          rtl: rtl,
          getNow: getNow,
          localizer: localizer,
          selected: selected,
          resources: this.memoizedResources(resources, accessors),
          selectable: this.props.selectable,
          accessors: accessors,
          getters: getters,
          components: components,
          scrollRef: this.scrollRef,
          longPressThreshold: longPressThreshold,
          onSelectSlot: this.handleSelectAllDaySlot,
          onSelectEvent: this.handleSelectAlldayEvent,
          onDoubleClickEvent: this.props.onDoubleClickEvent,
          onKeyPressEvent: this.props.onKeyPressEvent,
          onDrillDown: this.props.onDrillDown,
          getDrilldownView: this.props.getDrilldownView,
          resizable: resizable,
        }),
        /*#__PURE__*/ React__default.createElement(
          'div',
          {
            ref: this.contentRef,
            className: 'rbc-time-content ' + view,
            onScroll: this.handleScroll,
          },
          /*#__PURE__*/ React__default.createElement(TimeGutter, {
            date: start,
            localizer: localizer,
            min: merge(start, min),
            max: merge(start, max),
            step: this.props.step,
            getNow: this.props.getNow,
            timeslots: this.props.timeslots,
            components: components,
            className: 'rbc-time-gutter',
            getters: getters,
          }),
          this.renderEvents(range, rangeEvents, rangeBackgroundEvents, getNow())
        )
      )
    }

    _proto.clearSelection = function clearSelection() {
      clearTimeout(this._selectTimer)
      this._pendingSelection = []
    }

    _proto.applyScroll = function applyScroll() {
      if (this._scrollRatio != null) {
        var content = this.contentRef.current
        content.scrollTop = content.scrollHeight * this._scrollRatio // Only do this once

        this._scrollRatio = null
      }
    }

    _proto.calculateScroll = function calculateScroll(props) {
      if (props === void 0) {
        props = this.props
      }

      var _props = props,
        min = _props.min,
        max = _props.max,
        scrollToTime = _props.scrollToTime
      var diffMillis = scrollToTime - startOf(scrollToTime, 'day')
      var totalMillis = diff(max, min)
      this._scrollRatio = diffMillis / totalMillis
    }

    return TimeGrid
  })(React.Component)
  TimeGrid.propTypes = {
    events: propTypes.array.isRequired,
    backgroundEvents: propTypes.array.isRequired,
    resources: propTypes.array,
    step: propTypes.number,
    timeslots: propTypes.number,
    range: propTypes.arrayOf(propTypes.instanceOf(Date)),
    min: propTypes.instanceOf(Date),
    max: propTypes.instanceOf(Date),
    getNow: propTypes.func.isRequired,
    scrollToTime: propTypes.instanceOf(Date),
    showMultiDayTimes: propTypes.bool,
    rtl: propTypes.bool,
    resizable: propTypes.bool,
    width: propTypes.number,
    accessors: propTypes.object.isRequired,
    components: propTypes.object.isRequired,
    getters: propTypes.object.isRequired,
    localizer: propTypes.object.isRequired,
    selected: propTypes.object,
    selectable: propTypes.oneOf([true, false, 'ignoreEvents']),
    longPressThreshold: propTypes.number,
    onNavigate: propTypes.func,
    onSelectSlot: propTypes.func,
    onSelectEnd: propTypes.func,
    onSelectStart: propTypes.func,
    onSelectEvent: propTypes.func,
    onDoubleClickEvent: propTypes.func,
    onKeyPressEvent: propTypes.func,
    onDrillDown: propTypes.func,
    getDrilldownView: propTypes.func.isRequired,
    dayLayoutAlgorithm: DayLayoutAlgorithmPropType,
    view: propTypes.string,
  }
  TimeGrid.defaultProps = {
    step: 30,
    timeslots: 2,
    min: startOf(new Date(), 'day'),
    max: endOf(new Date(), 'day'),
    scrollToTime: startOf(new Date(), 'day'),
  }

  var _excluded$3 = ['date']

  var Day = /*#__PURE__*/ (function(_React$Component) {
    _inheritsLoose(Day, _React$Component)

    function Day() {
      return _React$Component.apply(this, arguments) || this
    }

    var _proto = Day.prototype

    _proto.render = function render() {
      var _this$props = this.props,
        date = _this$props.date,
        props = _objectWithoutPropertiesLoose(_this$props, _excluded$3)

      var range = Day.range(date)
      return /*#__PURE__*/ React__default.createElement(
        TimeGrid,
        _extends({}, props, {
          range: range,
          eventOffset: 10,
        })
      )
    }

    return Day
  })(React__default.Component)

  Day.propTypes = {
    date: propTypes.instanceOf(Date).isRequired,
  }

  Day.range = function(date) {
    return [startOf(date, 'day')]
  }

  Day.navigate = function(date, action) {
    switch (action) {
      case navigate.PREVIOUS:
        return add(date, -1, 'day')

      case navigate.NEXT:
        return add(date, 1, 'day')

      default:
        return date
    }
  }

  Day.title = function(date, _ref) {
    var localizer = _ref.localizer
    return localizer.format(date, 'dayHeaderFormat')
  }

  var _excluded$4 = ['date']

  var Week = /*#__PURE__*/ (function(_React$Component) {
    _inheritsLoose(Week, _React$Component)

    function Week() {
      return _React$Component.apply(this, arguments) || this
    }

    var _proto = Week.prototype

    _proto.render = function render() {
      var _this$props = this.props,
        date = _this$props.date,
        props = _objectWithoutPropertiesLoose(_this$props, _excluded$4)

      var range = Week.range(date, this.props)
      return /*#__PURE__*/ React__default.createElement(
        TimeGrid,
        _extends({}, props, {
          range: range,
          eventOffset: 15,
        })
      )
    }

    return Week
  })(React__default.Component)

  Week.propTypes = {
    date: propTypes.instanceOf(Date).isRequired,
  }
  Week.defaultProps = TimeGrid.defaultProps

  Week.navigate = function(date, action) {
    switch (action) {
      case navigate.PREVIOUS:
        return add(date, -1, 'week')

      case navigate.NEXT:
        return add(date, 1, 'week')

      default:
        return date
    }
  }

  Week.range = function(date, _ref) {
    var localizer = _ref.localizer
    var firstOfWeek = localizer.startOfWeek()
    var start = startOf(date, 'week', firstOfWeek)
    var end = endOf(date, 'week', firstOfWeek)
    return range(start, end)
  }

  Week.title = function(date, _ref2) {
    var localizer = _ref2.localizer

    var _Week$range = Week.range(date, {
        localizer: localizer,
      }),
      start = _Week$range[0],
      rest = _Week$range.slice(1)

    return localizer.format(
      {
        start: start,
        end: rest.pop(),
      },
      'dayRangeHeaderFormat'
    )
  }

  var _excluded$5 = ['date']

  function workWeekRange(date, options) {
    return Week.range(date, options).filter(function(d) {
      return [6, 0].indexOf(d.getDay()) === -1
    })
  }

  var WorkWeek = /*#__PURE__*/ (function(_React$Component) {
    _inheritsLoose(WorkWeek, _React$Component)

    function WorkWeek() {
      return _React$Component.apply(this, arguments) || this
    }

    var _proto = WorkWeek.prototype

    _proto.render = function render() {
      var _this$props = this.props,
        date = _this$props.date,
        props = _objectWithoutPropertiesLoose(_this$props, _excluded$5)

      var range = workWeekRange(date, this.props)
      return /*#__PURE__*/ React__default.createElement(
        TimeGrid,
        _extends({}, props, {
          range: range,
          eventOffset: 15,
        })
      )
    }

    return WorkWeek
  })(React__default.Component)

  WorkWeek.propTypes = {
    date: propTypes.instanceOf(Date).isRequired,
  }
  WorkWeek.defaultProps = TimeGrid.defaultProps
  WorkWeek.range = workWeekRange
  WorkWeek.navigate = Week.navigate

  WorkWeek.title = function(date, _ref) {
    var localizer = _ref.localizer

    var _workWeekRange = workWeekRange(date, {
        localizer: localizer,
      }),
      start = _workWeekRange[0],
      rest = _workWeekRange.slice(1)

    return localizer.format(
      {
        start: start,
        end: rest.pop(),
      },
      'dayRangeHeaderFormat'
    )
  }

  /**
   * Checks if a given element has a CSS class.
   *
   * @param element the element
   * @param className the CSS class name
   */
  function hasClass(element, className) {
    if (element.classList)
      return !!className && element.classList.contains(className)
    return (
      (' ' + (element.className.baseVal || element.className) + ' ').indexOf(
        ' ' + className + ' '
      ) !== -1
    )
  }

  /**
   * Adds a CSS class to a given element.
   *
   * @param element the element
   * @param className the CSS class name
   */

  function addClass(element, className) {
    if (element.classList) element.classList.add(className)
    else if (!hasClass(element, className))
      if (typeof element.className === 'string')
        element.className = element.className + ' ' + className
      else
        element.setAttribute(
          'class',
          ((element.className && element.className.baseVal) || '') +
            ' ' +
            className
        )
  }

  function replaceClassName(origClass, classToRemove) {
    return origClass
      .replace(new RegExp('(^|\\s)' + classToRemove + '(?:\\s|$)', 'g'), '$1')
      .replace(/\s+/g, ' ')
      .replace(/^\s*|\s*$/g, '')
  }
  /**
   * Removes a CSS class from a given element.
   *
   * @param element the element
   * @param className the CSS class name
   */

  function removeClass(element, className) {
    if (element.classList) {
      element.classList.remove(className)
    } else if (typeof element.className === 'string') {
      element.className = replaceClassName(element.className, className)
    } else {
      element.setAttribute(
        'class',
        replaceClassName(
          (element.className && element.className.baseVal) || '',
          className
        )
      )
    }
  }

  /**
   * Returns the width of a given element.
   *
   * @param node the element
   * @param client whether to use `clientWidth` if possible
   */

  function getWidth(node, client) {
    var win = isWindow(node)
    return win ? win.innerWidth : client ? node.clientWidth : offset(node).width
  }

  var size
  function scrollbarSize(recalc) {
    if ((!size && size !== 0) || recalc) {
      if (canUseDOM) {
        var scrollDiv = document.createElement('div')
        scrollDiv.style.position = 'absolute'
        scrollDiv.style.top = '-9999px'
        scrollDiv.style.width = '50px'
        scrollDiv.style.height = '50px'
        scrollDiv.style.overflow = 'scroll'
        document.body.appendChild(scrollDiv)
        size = scrollDiv.offsetWidth - scrollDiv.clientWidth
        document.body.removeChild(scrollDiv)
      }
    }

    return size
  }

  function Agenda(_ref) {
    var selected = _ref.selected,
      getters = _ref.getters,
      accessors = _ref.accessors,
      localizer = _ref.localizer,
      components = _ref.components,
      length = _ref.length,
      date = _ref.date,
      events = _ref.events
    var headerRef = React.useRef(null)
    var dateColRef = React.useRef(null)
    var timeColRef = React.useRef(null)
    var contentRef = React.useRef(null)
    var tbodyRef = React.useRef(null)
    React.useEffect(function() {
      _adjustHeader()
    })

    var renderDay = function renderDay(day, events, dayKey) {
      var Event = components.event,
        AgendaDate = components.date
      events = events.filter(function(e) {
        return inRange$1(e, startOf(day, 'day'), endOf(day, 'day'), accessors)
      })
      return events.map(function(event, idx) {
        var title = accessors.title(event)
        var end = accessors.end(event)
        var start = accessors.start(event)
        var userProps = getters.eventProp(
          event,
          start,
          end,
          isSelected(event, selected)
        )
        var dateLabel = idx === 0 && localizer.format(day, 'agendaDateFormat')
        var first =
          idx === 0
            ? /*#__PURE__*/ React__default.createElement(
                'td',
                {
                  rowSpan: events.length,
                  className: 'rbc-agenda-date-cell',
                },
                AgendaDate
                  ? /*#__PURE__*/ React__default.createElement(AgendaDate, {
                      day: day,
                      label: dateLabel,
                    })
                  : dateLabel
              )
            : false
        return /*#__PURE__*/ React__default.createElement(
          'tr',
          {
            key: dayKey + '_' + idx,
            className: userProps.className,
            style: userProps.style,
          },
          first,
          /*#__PURE__*/ React__default.createElement(
            'td',
            {
              className: 'rbc-agenda-time-cell',
            },
            timeRangeLabel(day, event)
          ),
          /*#__PURE__*/ React__default.createElement(
            'td',
            {
              className: 'rbc-agenda-event-cell',
            },
            Event
              ? /*#__PURE__*/ React__default.createElement(Event, {
                  event: event,
                  title: title,
                })
              : title
          )
        )
      }, [])
    }

    var timeRangeLabel = function timeRangeLabel(day, event) {
      var labelClass = '',
        TimeComponent = components.time,
        label = localizer.messages.allDay
      var end = accessors.end(event)
      var start = accessors.start(event)

      if (!accessors.allDay(event)) {
        if (eq$1(start, end)) {
          label = localizer.format(start, 'agendaTimeFormat')
        } else if (eq$1(start, end, 'day')) {
          label = localizer.format(
            {
              start: start,
              end: end,
            },
            'agendaTimeRangeFormat'
          )
        } else if (eq$1(day, start, 'day')) {
          label = localizer.format(start, 'agendaTimeFormat')
        } else if (eq$1(day, end, 'day')) {
          label = localizer.format(end, 'agendaTimeFormat')
        }
      }

      if (gt(day, start, 'day')) labelClass = 'rbc-continues-prior'
      if (lt(day, end, 'day')) labelClass += ' rbc-continues-after'
      return /*#__PURE__*/ React__default.createElement(
        'span',
        {
          className: labelClass.trim(),
        },
        TimeComponent
          ? /*#__PURE__*/ React__default.createElement(TimeComponent, {
              event: event,
              day: day,
              label: label,
            })
          : label
      )
    }

    var _adjustHeader = function _adjustHeader() {
      if (!tbodyRef.current) return
      var header = headerRef.current
      var firstRow = tbodyRef.current.firstChild
      if (!firstRow) return
      var isOverflowing =
        contentRef.current.scrollHeight > contentRef.current.clientHeight
      var _widths = []
      var widths = _widths
      _widths = [getWidth(firstRow.children[0]), getWidth(firstRow.children[1])]

      if (widths[0] !== _widths[0] || widths[1] !== _widths[1]) {
        dateColRef.current.style.width = _widths[0] + 'px'
        timeColRef.current.style.width = _widths[1] + 'px'
      }

      if (isOverflowing) {
        addClass(header, 'rbc-header-overflowing')
        header.style.marginRight = scrollbarSize() + 'px'
      } else {
        removeClass(header, 'rbc-header-overflowing')
      }
    }

    var messages = localizer.messages
    var end = add(date, length, 'day')
    var range$1 = range(date, end, 'day')
    events = events.filter(function(event) {
      return inRange$1(
        event,
        startOf(date, 'day'),
        endOf(end, 'day'),
        accessors
      )
    })
    events.sort(function(a, b) {
      return +accessors.start(a) - +accessors.start(b)
    })
    return /*#__PURE__*/ React__default.createElement(
      'div',
      {
        className: 'rbc-agenda-view',
      },
      events.length !== 0
        ? /*#__PURE__*/ React__default.createElement(
            React__default.Fragment,
            null,
            /*#__PURE__*/ React__default.createElement(
              'table',
              {
                ref: headerRef,
                className: 'rbc-agenda-table',
              },
              /*#__PURE__*/ React__default.createElement(
                'thead',
                null,
                /*#__PURE__*/ React__default.createElement(
                  'tr',
                  null,
                  /*#__PURE__*/ React__default.createElement(
                    'th',
                    {
                      className: 'rbc-header',
                      ref: dateColRef,
                    },
                    messages.date
                  ),
                  /*#__PURE__*/ React__default.createElement(
                    'th',
                    {
                      className: 'rbc-header',
                      ref: timeColRef,
                    },
                    messages.time
                  ),
                  /*#__PURE__*/ React__default.createElement(
                    'th',
                    {
                      className: 'rbc-header',
                    },
                    messages.event
                  )
                )
              )
            ),
            /*#__PURE__*/ React__default.createElement(
              'div',
              {
                className: 'rbc-agenda-content',
                ref: contentRef,
              },
              /*#__PURE__*/ React__default.createElement(
                'table',
                {
                  className: 'rbc-agenda-table',
                },
                /*#__PURE__*/ React__default.createElement(
                  'tbody',
                  {
                    ref: tbodyRef,
                  },
                  range$1.map(function(day, idx) {
                    return renderDay(day, events, idx)
                  })
                )
              )
            )
          )
        : /*#__PURE__*/ React__default.createElement(
            'span',
            {
              className: 'rbc-agenda-empty',
            },
            messages.noEventsInRange
          )
    )
  }

  Agenda.propTypes = {
    events: propTypes.array,
    date: propTypes.instanceOf(Date),
    length: propTypes.number.isRequired,
    selected: propTypes.object,
    accessors: propTypes.object.isRequired,
    components: propTypes.object.isRequired,
    getters: propTypes.object.isRequired,
    localizer: propTypes.object.isRequired,
  }
  Agenda.defaultProps = {
    length: 30,
  }

  Agenda.range = function(start, _ref2) {
    var _ref2$length = _ref2.length,
      length =
        _ref2$length === void 0 ? Agenda.defaultProps.length : _ref2$length
    var end = add(start, length, 'day')
    return {
      start: start,
      end: end,
    }
  }

  Agenda.navigate = function(date, action, _ref3) {
    var _ref3$length = _ref3.length,
      length =
        _ref3$length === void 0 ? Agenda.defaultProps.length : _ref3$length

    switch (action) {
      case navigate.PREVIOUS:
        return add(date, -length, 'day')

      case navigate.NEXT:
        return add(date, length, 'day')

      default:
        return date
    }
  }

  Agenda.title = function(start, _ref4) {
    var _ref4$length = _ref4.length,
      length =
        _ref4$length === void 0 ? Agenda.defaultProps.length : _ref4$length,
      localizer = _ref4.localizer
    var end = add(start, length, 'day')
    return localizer.format(
      {
        start: start,
        end: end,
      },
      'agendaHeaderFormat'
    )
  }

  var _VIEWS
  var VIEWS =
    ((_VIEWS = {}),
    (_VIEWS[views.MONTH] = MonthView),
    (_VIEWS[views.WEEK] = Week),
    (_VIEWS[views.WORK_WEEK] = WorkWeek),
    (_VIEWS[views.DAY] = Day),
    (_VIEWS[views.AGENDA] = Agenda),
    _VIEWS)

  var _excluded$6 = ['action', 'date', 'today']
  function moveDate(View, _ref) {
    var action = _ref.action,
      date = _ref.date,
      today = _ref.today,
      props = _objectWithoutPropertiesLoose(_ref, _excluded$6)

    View = typeof View === 'string' ? VIEWS[View] : View

    switch (action) {
      case navigate.TODAY:
        date = today || new Date()
        break

      case navigate.DATE:
        break

      default:
        !(View && typeof View.navigate === 'function')
          ? invariant_1(
              false,
              'Calendar View components must implement a static `.navigate(date, action)` method.s'
            )
          : void 0
        date = View.navigate(date, action, props)
    }

    return date
  }

  var _excluded$7 = ['view', 'date', 'getNow', 'onNavigate'],
    _excluded2$1 = [
      'view',
      'toolbar',
      'events',
      'backgroundEvents',
      'style',
      'className',
      'elementProps',
      'date',
      'getNow',
      'length',
      'showMultiDayTimes',
      'onShowMore',
      'doShowMoreDrillDown',
      'components',
      'formats',
      'messages',
      'culture',
    ]

  function viewNames$1(_views) {
    return !Array.isArray(_views) ? Object.keys(_views) : _views
  }

  function isValidView(view, _ref) {
    var _views = _ref.views
    var names = viewNames$1(_views)
    return names.indexOf(view) !== -1
  }
  /**
   * react-big-calendar is a full featured Calendar component for managing events and dates. It uses
   * modern `flexbox` for layout, making it super responsive and performant. Leaving most of the layout heavy lifting
   * to the browser. __note:__ The default styles use `height: 100%` which means your container must set an explicit
   * height (feel free to adjust the styles to suit your specific needs).
   *
   * Big Calendar is unopiniated about editing and moving events, preferring to let you implement it in a way that makes
   * the most sense to your app. It also tries not to be prescriptive about your event data structures, just tell it
   * how to find the start and end datetimes and you can pass it whatever you want.
   *
   * One thing to note is that, `react-big-calendar` treats event start/end dates as an _exclusive_ range.
   * which means that the event spans up to, but not including, the end date. In the case
   * of displaying events on whole days, end dates are rounded _up_ to the next day. So an
   * event ending on `Apr 8th 12:00:00 am` will not appear on the 8th, whereas one ending
   * on `Apr 8th 12:01:00 am` will. If you want _inclusive_ ranges consider providing a
   * function `endAccessor` that returns the end date + 1 day for those events that end at midnight.
   */

  var Calendar = /*#__PURE__*/ (function(_React$Component) {
    _inheritsLoose(Calendar, _React$Component)

    function Calendar() {
      var _this

      for (
        var _len = arguments.length, _args = new Array(_len), _key = 0;
        _key < _len;
        _key++
      ) {
        _args[_key] = arguments[_key]
      }

      _this =
        _React$Component.call.apply(_React$Component, [this].concat(_args)) ||
        this

      _this.getViews = function() {
        var views = _this.props.views

        if (Array.isArray(views)) {
          return transform(
            views,
            function(obj, name) {
              return (obj[name] = VIEWS[name])
            },
            {}
          )
        }

        if (typeof views === 'object') {
          return mapValues(views, function(value, key) {
            if (value === true) {
              return VIEWS[key]
            }

            return value
          })
        }

        return VIEWS
      }

      _this.getView = function() {
        var views = _this.getViews()

        return views[_this.props.view]
      }

      _this.getDrilldownView = function(date) {
        var _this$props = _this.props,
          view = _this$props.view,
          drilldownView = _this$props.drilldownView,
          getDrilldownView = _this$props.getDrilldownView
        if (!getDrilldownView) return drilldownView
        return getDrilldownView(date, view, Object.keys(_this.getViews()))
      }

      _this.handleRangeChange = function(date, viewComponent, view) {
        var _this$props2 = _this.props,
          onRangeChange = _this$props2.onRangeChange,
          localizer = _this$props2.localizer

        if (onRangeChange) {
          if (viewComponent.range) {
            onRangeChange(
              viewComponent.range(date, {
                localizer: localizer,
              }),
              view
            )
          } else {
            {
              console.error('onRangeChange prop not supported for this view')
            }
          }
        }
      }

      _this.handleNavigate = function(action, newDate) {
        var _this$props3 = _this.props,
          view = _this$props3.view,
          date = _this$props3.date,
          getNow = _this$props3.getNow,
          onNavigate = _this$props3.onNavigate,
          props = _objectWithoutPropertiesLoose(_this$props3, _excluded$7)

        var ViewComponent = _this.getView()

        var today = getNow()
        date = moveDate(
          ViewComponent,
          _extends({}, props, {
            action: action,
            date: newDate || date || today,
            today: today,
          })
        )
        onNavigate(date, view, action)

        _this.handleRangeChange(date, ViewComponent)
      }

      _this.handleViewChange = function(view) {
        if (view !== _this.props.view && isValidView(view, _this.props)) {
          _this.props.onView(view)
        }

        var views = _this.getViews()

        _this.handleRangeChange(
          _this.props.date || _this.props.getNow(),
          views[view],
          view
        )
      }

      _this.handleSelectEvent = function() {
        for (
          var _len2 = arguments.length, args = new Array(_len2), _key2 = 0;
          _key2 < _len2;
          _key2++
        ) {
          args[_key2] = arguments[_key2]
        }

        notify(_this.props.onSelectEvent, args)
      }

      _this.handleDoubleClickEvent = function() {
        for (
          var _len3 = arguments.length, args = new Array(_len3), _key3 = 0;
          _key3 < _len3;
          _key3++
        ) {
          args[_key3] = arguments[_key3]
        }

        notify(_this.props.onDoubleClickEvent, args)
      }

      _this.handleKeyPressEvent = function() {
        for (
          var _len4 = arguments.length, args = new Array(_len4), _key4 = 0;
          _key4 < _len4;
          _key4++
        ) {
          args[_key4] = arguments[_key4]
        }

        notify(_this.props.onKeyPressEvent, args)
      }

      _this.handleSelectSlot = function(slotInfo) {
        notify(_this.props.onSelectSlot, slotInfo)
      }

      _this.handleDrillDown = function(date, view) {
        var onDrillDown = _this.props.onDrillDown

        if (onDrillDown) {
          onDrillDown(date, view, _this.drilldownView)
          return
        }

        if (view) _this.handleViewChange(view)

        _this.handleNavigate(navigate.DATE, date)
      }

      _this.state = {
        context: _this.getContext(_this.props),
      }
      return _this
    }

    var _proto = Calendar.prototype

    _proto.UNSAFE_componentWillReceiveProps = function UNSAFE_componentWillReceiveProps(
      nextProps
    ) {
      this.setState({
        context: this.getContext(nextProps),
      })
    }

    _proto.getContext = function getContext(_ref2) {
      var startAccessor = _ref2.startAccessor,
        endAccessor = _ref2.endAccessor,
        allDayAccessor = _ref2.allDayAccessor,
        tooltipAccessor = _ref2.tooltipAccessor,
        titleAccessor = _ref2.titleAccessor,
        resourceAccessor = _ref2.resourceAccessor,
        resourceIdAccessor = _ref2.resourceIdAccessor,
        resourceTitleAccessor = _ref2.resourceTitleAccessor,
        eventPropGetter = _ref2.eventPropGetter,
        backgroundEventPropGetter = _ref2.backgroundEventPropGetter,
        slotPropGetter = _ref2.slotPropGetter,
        slotGroupPropGetter = _ref2.slotGroupPropGetter,
        dayPropGetter = _ref2.dayPropGetter,
        view = _ref2.view,
        views = _ref2.views,
        localizer = _ref2.localizer,
        culture = _ref2.culture,
        _ref2$messages = _ref2.messages,
        messages$1 = _ref2$messages === void 0 ? {} : _ref2$messages,
        _ref2$components = _ref2.components,
        components = _ref2$components === void 0 ? {} : _ref2$components,
        _ref2$formats = _ref2.formats,
        formats = _ref2$formats === void 0 ? {} : _ref2$formats
      var names = viewNames$1(views)
      var msgs = messages(messages$1)
      return {
        viewNames: names,
        localizer: mergeWithDefaults(localizer, culture, formats, msgs),
        getters: {
          eventProp: function eventProp() {
            return (
              (eventPropGetter && eventPropGetter.apply(void 0, arguments)) ||
              {}
            )
          },
          backgroundEventProp: function backgroundEventProp() {
            return (
              (backgroundEventPropGetter &&
                backgroundEventPropGetter.apply(void 0, arguments)) ||
              {}
            )
          },
          slotProp: function slotProp() {
            return (
              (slotPropGetter && slotPropGetter.apply(void 0, arguments)) || {}
            )
          },
          slotGroupProp: function slotGroupProp() {
            return (
              (slotGroupPropGetter &&
                slotGroupPropGetter.apply(void 0, arguments)) ||
              {}
            )
          },
          dayProp: function dayProp() {
            return (
              (dayPropGetter && dayPropGetter.apply(void 0, arguments)) || {}
            )
          },
        },
        components: defaults(components[view] || {}, omit(components, names), {
          eventWrapper: NoopWrapper,
          backgroundEventWrapper: NoopWrapper,
          eventContainerWrapper: NoopWrapper,
          dateCellWrapper: NoopWrapper,
          weekWrapper: NoopWrapper,
          timeSlotWrapper: NoopWrapper,
        }),
        accessors: {
          start: wrapAccessor(startAccessor),
          end: wrapAccessor(endAccessor),
          allDay: wrapAccessor(allDayAccessor),
          tooltip: wrapAccessor(tooltipAccessor),
          title: wrapAccessor(titleAccessor),
          resource: wrapAccessor(resourceAccessor),
          resourceId: wrapAccessor(resourceIdAccessor),
          resourceTitle: wrapAccessor(resourceTitleAccessor),
        },
      }
    }

    _proto.render = function render() {
      var _this$props4 = this.props,
        view = _this$props4.view,
        toolbar = _this$props4.toolbar,
        events = _this$props4.events,
        _this$props4$backgrou = _this$props4.backgroundEvents,
        backgroundEvents =
          _this$props4$backgrou === void 0 ? [] : _this$props4$backgrou,
        style = _this$props4.style,
        className = _this$props4.className,
        elementProps = _this$props4.elementProps,
        current = _this$props4.date,
        getNow = _this$props4.getNow,
        length = _this$props4.length,
        showMultiDayTimes = _this$props4.showMultiDayTimes,
        onShowMore = _this$props4.onShowMore,
        doShowMoreDrillDown = _this$props4.doShowMoreDrillDown,
        _0 = _this$props4.components,
        _1 = _this$props4.formats,
        _2 = _this$props4.messages,
        _3 = _this$props4.culture,
        props = _objectWithoutPropertiesLoose(_this$props4, _excluded2$1)

      current = current || getNow()
      var View = this.getView()
      var _this$state$context = this.state.context,
        accessors = _this$state$context.accessors,
        components = _this$state$context.components,
        getters = _this$state$context.getters,
        localizer = _this$state$context.localizer,
        viewNames = _this$state$context.viewNames
      var CalToolbar = components.toolbar || Toolbar
      var label = View.title(current, {
        localizer: localizer,
        length: length,
      })
      return /*#__PURE__*/ React__default.createElement(
        'div',
        _extends({}, elementProps, {
          className: clsx(className, 'rbc-calendar', props.rtl && 'rbc-rtl'),
          style: style,
        }),
        toolbar &&
          /*#__PURE__*/ React__default.createElement(CalToolbar, {
            date: current,
            view: view,
            views: viewNames,
            label: label,
            onView: this.handleViewChange,
            onNavigate: this.handleNavigate,
            localizer: localizer,
          }),
        /*#__PURE__*/ React__default.createElement(
          View,
          _extends({}, props, {
            view: view,
            events: events,
            backgroundEvents: backgroundEvents,
            date: current,
            getNow: getNow,
            length: length,
            localizer: localizer,
            getters: getters,
            components: components,
            accessors: accessors,
            showMultiDayTimes: showMultiDayTimes,
            getDrilldownView: this.getDrilldownView,
            onNavigate: this.handleNavigate,
            onDrillDown: this.handleDrillDown,
            onSelectEvent: this.handleSelectEvent,
            onDoubleClickEvent: this.handleDoubleClickEvent,
            onKeyPressEvent: this.handleKeyPressEvent,
            onSelectSlot: this.handleSelectSlot,
            onShowMore: onShowMore,
            doShowMoreDrillDown: doShowMoreDrillDown,
          })
        )
      )
    }
    /**
     *
     * @param date
     * @param viewComponent
     * @param {'month'|'week'|'work_week'|'day'|'agenda'} [view] - optional
     * parameter. It appears when range change on view changing. It could be handy
     * when you need to have both: range and view type at once, i.e. for manage rbc
     * state via url
     */

    return Calendar
  })(React__default.Component)

  Calendar.defaultProps = {
    elementProps: {},
    popup: false,
    toolbar: true,
    view: views.MONTH,
    views: [views.MONTH, views.WEEK, views.DAY, views.AGENDA],
    step: 30,
    length: 30,
    doShowMoreDrillDown: true,
    drilldownView: views.DAY,
    titleAccessor: 'title',
    tooltipAccessor: 'title',
    allDayAccessor: 'allDay',
    startAccessor: 'start',
    endAccessor: 'end',
    resourceAccessor: 'resourceId',
    resourceIdAccessor: 'id',
    resourceTitleAccessor: 'title',
    longPressThreshold: 250,
    getNow: function getNow() {
      return new Date()
    },
    dayLayoutAlgorithm: 'overlap',
  }
  Calendar.propTypes = {
    localizer: propTypes.object.isRequired,

    /**
     * Props passed to main calendar `<div>`.
     *
     */
    elementProps: propTypes.object,

    /**
     * The current date value of the calendar. Determines the visible view range.
     * If `date` is omitted then the result of `getNow` is used; otherwise the
     * current date is used.
     *
     * @controllable onNavigate
     */
    date: propTypes.instanceOf(Date),

    /**
     * The current view of the calendar.
     *
     * @default 'month'
     * @controllable onView
     */
    view: propTypes.string,

    /**
     * The initial view set for the Calendar.
     * @type Calendar.Views ('month'|'week'|'work_week'|'day'|'agenda')
     * @default 'month'
     */
    defaultView: propTypes.string,

    /**
     * An array of event objects to display on the calendar. Events objects
     * can be any shape, as long as the Calendar knows how to retrieve the
     * following details of the event:
     *
     *  - start time
     *  - end time
     *  - title
     *  - whether its an "all day" event or not
     *  - any resource the event may be related to
     *
     * Each of these properties can be customized or generated dynamically by
     * setting the various "accessor" props. Without any configuration the default
     * event should look like:
     *
     * ```js
     * Event {
     *   title: string,
     *   start: Date,
     *   end: Date,
     *   allDay?: boolean
     *   resource?: any,
     * }
     * ```
     */
    events: propTypes.arrayOf(propTypes.object),

    /**
     * An array of background event objects to display on the calendar. Background
     * Events behave similarly to Events but are not factored into Event overlap logic,
     * allowing them to sit behind any Events that may occur during the same period.
     * Background Events objects can be any shape, as long as the Calendar knows how to
     * retrieve the following details of the event:
     *
     *  - start time
     *  - end time
     *
     * Each of these properties can be customized or generated dynamically by
     * setting the various "accessor" props. Without any configuration the default
     * event should look like:
     *
     * ```js
     * BackgroundEvent {
     *   start: Date,
     *   end: Date,
     * }
     * ```
     */
    backgroundEvents: propTypes.arrayOf(propTypes.object),

    /**
     * Accessor for the event title, used to display event information. Should
     * resolve to a `renderable` value.
     *
     * ```js
     * string | (event: Object) => string
     * ```
     *
     * @type {(func|string)}
     */
    titleAccessor: accessor$1,

    /**
     * Accessor for the event tooltip. Should
     * resolve to a `renderable` value. Removes the tooltip if null.
     *
     * ```js
     * string | (event: Object) => string
     * ```
     *
     * @type {(func|string)}
     */
    tooltipAccessor: accessor$1,

    /**
     * Determines whether the event should be considered an "all day" event and ignore time.
     * Must resolve to a `boolean` value.
     *
     * ```js
     * string | (event: Object) => boolean
     * ```
     *
     * @type {(func|string)}
     */
    allDayAccessor: accessor$1,

    /**
     * The start date/time of the event. Must resolve to a JavaScript `Date` object.
     *
     * ```js
     * string | (event: Object) => Date
     * ```
     *
     * @type {(func|string)}
     */
    startAccessor: accessor$1,

    /**
     * The end date/time of the event. Must resolve to a JavaScript `Date` object.
     *
     * ```js
     * string | (event: Object) => Date
     * ```
     *
     * @type {(func|string)}
     */
    endAccessor: accessor$1,

    /**
     * Returns the id of the `resource` that the event is a member of. This
     * id should match at least one resource in the `resources` array.
     *
     * ```js
     * string | (event: Object) => Date
     * ```
     *
     * @type {(func|string)}
     */
    resourceAccessor: accessor$1,

    /**
     * An array of resource objects that map events to a specific resource.
     * Resource objects, like events, can be any shape or have any properties,
     * but should be uniquly identifiable via the `resourceIdAccessor`, as
     * well as a "title" or name as provided by the `resourceTitleAccessor` prop.
     */
    resources: propTypes.arrayOf(propTypes.object),

    /**
     * Provides a unique identifier for each resource in the `resources` array
     *
     * ```js
     * string | (resource: Object) => any
     * ```
     *
     * @type {(func|string)}
     */
    resourceIdAccessor: accessor$1,

    /**
     * Provides a human readable name for the resource object, used in headers.
     *
     * ```js
     * string | (resource: Object) => any
     * ```
     *
     * @type {(func|string)}
     */
    resourceTitleAccessor: accessor$1,

    /**
     * Determines the current date/time which is highlighted in the views.
     *
     * The value affects which day is shaded and which time is shown as
     * the current time. It also affects the date used by the Today button in
     * the toolbar.
     *
     * Providing a value here can be useful when you are implementing time zones
     * using the `startAccessor` and `endAccessor` properties.
     *
     * @type {func}
     * @default () => new Date()
     */
    getNow: propTypes.func,

    /**
     * Callback fired when the `date` value changes.
     *
     * @controllable date
     */
    onNavigate: propTypes.func,

    /**
     * Callback fired when the `view` value changes.
     *
     * @controllable view
     */
    onView: propTypes.func,

    /**
     * Callback fired when date header, or the truncated events links are clicked
     *
     */
    onDrillDown: propTypes.func,

    /**
     *
     * ```js
     * (dates: Date[] | { start: Date; end: Date }, view: 'month'|'week'|'work_week'|'day'|'agenda'|undefined) => void
     * ```
     *
     * Callback fired when the visible date range changes. Returns an Array of dates
     * or an object with start and end dates for BUILTIN views. Optionally new `view`
     * will be returned when callback called after view change.
     *
     * Custom views may return something different.
     */
    onRangeChange: propTypes.func,

    /**
     * A callback fired when a date selection is made. Only fires when `selectable` is `true`.
     *
     * ```js
     * (
     *   slotInfo: {
     *     start: Date,
     *     end: Date,
     *     resourceId:  (number|string),
     *     slots: Array<Date>,
     *     action: "select" | "click" | "doubleClick",
     *     bounds: ?{ // For "select" action
     *       x: number,
     *       y: number,
     *       top: number,
     *       right: number,
     *       left: number,
     *       bottom: number,
     *     },
     *     box: ?{ // For "click" or "doubleClick" actions
     *       clientX: number,
     *       clientY: number,
     *       x: number,
     *       y: number,
     *     },
     *   }
     * ) => any
     * ```
     */
    onSelectSlot: propTypes.func,

    /**
     * Callback fired when a calendar event is selected.
     *
     * ```js
     * (event: Object, e: SyntheticEvent) => any
     * ```
     *
     * @controllable selected
     */
    onSelectEvent: propTypes.func,

    /**
     * Callback fired when a calendar event is clicked twice.
     *
     * ```js
     * (event: Object, e: SyntheticEvent) => void
     * ```
     */
    onDoubleClickEvent: propTypes.func,

    /**
     * Callback fired when a focused calendar event receives a key press.
     *
     * ```js
     * (event: Object, e: SyntheticEvent) => void
     * ```
     */
    onKeyPressEvent: propTypes.func,

    /**
     * Callback fired when dragging a selection in the Time views.
     *
     * Returning `false` from the handler will prevent a selection.
     *
     * ```js
     * (range: { start: Date, end: Date, resourceId: (number|string) }) => ?boolean
     * ```
     */
    onSelecting: propTypes.func,

    /**
     * Callback fired when a +{count} more is clicked
     *
     * ```js
     * (events: Object, date: Date) => any
     * ```
     */
    onShowMore: propTypes.func,

    /**
     * Displays all events on the month view instead of
     * having some hidden behind +{count} more. This will
     * cause the rows in the month view to be scrollable if
     * the number of events exceed the height of the row.
     */
    showAllEvents: propTypes.bool,

    /**
     * The selected event, if any.
     */
    selected: propTypes.object,

    /**
     * An array of built-in view names to allow the calendar to display.
     * accepts either an array of builtin view names,
     *
     * ```jsx
     * views={['month', 'day', 'agenda']}
     * ```
     * or an object hash of the view name and the component (or boolean for builtin).
     *
     * ```jsx
     * views={{
     *   month: true,
     *   week: false,
     *   myweek: WorkWeekViewComponent,
     * }}
     * ```
     *
     * Custom views can be any React component, that implements the following
     * interface:
     *
     * ```js
     * interface View {
     *   static title(date: Date, { formats: DateFormat[], culture: string?, ...props }): string
     *   static navigate(date: Date, action: 'PREV' | 'NEXT' | 'DATE'): Date
     * }
     * ```
     *
     * @type Views ('month'|'week'|'work_week'|'day'|'agenda')
     * @View
     ['month', 'week', 'day', 'agenda']
     */
    views: views$1,

    /**
     * Determines whether the drill down should occur when clicking on the "+_x_ more" link.
     * If `popup` is false, and `doShowMoreDrillDown` is true, the drill down will occur as usual.
     * If `popup` is false, and `doShowMoreDrillDown` is false, the drill down will not occur and the `onShowMore` function will trigger.
     */
    doShowMoreDrillDown: propTypes.bool,

    /**
     * The string name of the destination view for drill-down actions, such
     * as clicking a date header, or the truncated events links. If
     * `getDrilldownView` is also specified it will be used instead.
     *
     * Set to `null` to disable drill-down actions.
     *
     * ```js
     * <Calendar
     *   drilldownView="agenda"
     * />
     * ```
     */
    drilldownView: propTypes.string,

    /**
     * Functionally equivalent to `drilldownView`, but accepts a function
     * that can return a view name. It's useful for customizing the drill-down
     * actions depending on the target date and triggering view.
     *
     * Return `null` to disable drill-down actions.
     *
     * ```js
     * <Calendar
     *   getDrilldownView={(targetDate, currentViewName, configuredViewNames) =>
     *     if (currentViewName === 'month' && configuredViewNames.includes('week'))
     *       return 'week'
     *
     *     return null;
     *   }}
     * />
     * ```
     */
    getDrilldownView: propTypes.func,

    /**
     * Determines the end date from date prop in the agenda view
     * date prop + length (in number of days) = end date
     */
    length: propTypes.number,

    /**
     * Determines whether the toolbar is displayed
     */
    toolbar: propTypes.bool,

    /**
     * Show truncated events in an overlay when you click the "+_x_ more" link.
     */
    popup: propTypes.bool,

    /**
     * Distance in pixels, from the edges of the viewport, the "show more" overlay should be positioned.
     *
     * ```jsx
     * <Calendar popupOffset={30}/>
     * <Calendar popupOffset={{x: 30, y: 20}}/>
     * ```
     */
    popupOffset: propTypes.oneOfType([
      propTypes.number,
      propTypes.shape({
        x: propTypes.number,
        y: propTypes.number,
      }),
    ]),

    /**
     * Allows mouse selection of ranges of dates/times.
     *
     * The 'ignoreEvents' option prevents selection code from running when a
     * drag begins over an event. Useful when you want custom event click or drag
     * logic
     */
    selectable: propTypes.oneOf([true, false, 'ignoreEvents']),

    /**
     * Specifies the number of milliseconds the user must press and hold on the screen for a touch
     * to be considered a "long press." Long presses are used for time slot selection on touch
     * devices.
     *
     * @type {number}
     * @default 250
     */
    longPressThreshold: propTypes.number,

    /**
     * Determines the selectable time increments in week and day views, in minutes.
     */
    step: propTypes.number,

    /**
     * The number of slots per "section" in the time grid views. Adjust with `step`
     * to change the default of 1 hour long groups, with 30 minute slots.
     */
    timeslots: propTypes.number,

    /**
     *Switch the calendar to a `right-to-left` read direction.
     */
    rtl: propTypes.bool,

    /**
     * Optionally provide a function that returns an object of className or style props
     * to be applied to the the event node.
     *
     * ```js
     * (
     * 	event: Object,
     * 	start: Date,
     * 	end: Date,
     * 	isSelected: boolean
     * ) => { className?: string, style?: Object }
     * ```
     */
    eventPropGetter: propTypes.func,

    /**
     * Optionally provide a function that returns an object of className or style props
     * to be applied to the time-slot node. Caution! Styles that change layout or
     * position may break the calendar in unexpected ways.
     *
     * ```js
     * (date: Date, resourceId: (number|string)) => { className?: string, style?: Object }
     * ```
     */
    slotPropGetter: propTypes.func,

    /**
     * Optionally provide a function that returns an object of props to be applied
     * to the time-slot group node. Useful to dynamically change the sizing of time nodes.
     * ```js
     * () => { style?: Object }
     * ```
     */
    slotGroupPropGetter: propTypes.func,

    /**
     * Optionally provide a function that returns an object of className or style props
     * to be applied to the the day background. Caution! Styles that change layout or
     * position may break the calendar in unexpected ways.
     *
     * ```js
     * (date: Date) => { className?: string, style?: Object }
     * ```
     */
    dayPropGetter: propTypes.func,

    /**
     * Support to show multi-day events with specific start and end times in the
     * main time grid (rather than in the all day header).
     *
     * **Note: This may cause calendars with several events to look very busy in
     * the week and day views.**
     */
    showMultiDayTimes: propTypes.bool,

    /**
     * Constrains the minimum _time_ of the Day and Week views.
     */
    min: propTypes.instanceOf(Date),

    /**
     * Constrains the maximum _time_ of the Day and Week views.
     */
    max: propTypes.instanceOf(Date),

    /**
     * Determines how far down the scroll pane is initially scrolled down.
     */
    scrollToTime: propTypes.instanceOf(Date),

    /**
     * Specify a specific culture code for the Calendar.
     *
     * **Note: it's generally better to handle this globally via your i18n library.**
     */
    culture: propTypes.string,

    /**
     * Localizer specific formats, tell the Calendar how to format and display dates.
     *
     * `format` types are dependent on the configured localizer; both Moment and Globalize
     * accept strings of tokens according to their own specification, such as: `'DD mm yyyy'`.
     *
     * ```jsx
     * let formats = {
     *   dateFormat: 'dd',
     *
     *   dayFormat: (date, , localizer) =>
     *     localizer.format(date, 'DDD', culture),
     *
     *   dayRangeHeaderFormat: ({ start, end }, culture, localizer) =>
     *     localizer.format(start, { date: 'short' }, culture) + ' – ' +
     *     localizer.format(end, { date: 'short' }, culture)
     * }
     *
     * <Calendar formats={formats} />
     * ```
     *
     * All localizers accept a function of
     * the form `(date: Date, culture: ?string, localizer: Localizer) -> string`
     */
    formats: propTypes.shape({
      /**
       * Format for the day of the month heading in the Month view.
       * e.g. "01", "02", "03", etc
       */
      dateFormat: dateFormat,

      /**
       * A day of the week format for Week and Day headings,
       * e.g. "Wed 01/04"
       *
       */
      dayFormat: dateFormat,

      /**
       * Week day name format for the Month week day headings,
       * e.g: "Sun", "Mon", "Tue", etc
       *
       */
      weekdayFormat: dateFormat,

      /**
       * The timestamp cell formats in Week and Time views, e.g. "4:00 AM"
       */
      timeGutterFormat: dateFormat,

      /**
       * Toolbar header format for the Month view, e.g "2015 April"
       *
       */
      monthHeaderFormat: dateFormat,

      /**
       * Toolbar header format for the Week views, e.g. "Mar 29 - Apr 04"
       */
      dayRangeHeaderFormat: dateRangeFormat,

      /**
       * Toolbar header format for the Day view, e.g. "Wednesday Apr 01"
       */
      dayHeaderFormat: dateFormat,

      /**
       * Toolbar header format for the Agenda view, e.g. "4/1/2015 – 5/1/2015"
       */
      agendaHeaderFormat: dateRangeFormat,

      /**
       * A time range format for selecting time slots, e.g "8:00am – 2:00pm"
       */
      selectRangeFormat: dateRangeFormat,
      agendaDateFormat: dateFormat,
      agendaTimeFormat: dateFormat,
      agendaTimeRangeFormat: dateRangeFormat,

      /**
       * Time range displayed on events.
       */
      eventTimeRangeFormat: dateRangeFormat,

      /**
       * An optional event time range for events that continue onto another day
       */
      eventTimeRangeStartFormat: dateFormat,

      /**
       * An optional event time range for events that continue from another day
       */
      eventTimeRangeEndFormat: dateFormat,
    }),

    /**
     * Customize how different sections of the calendar render by providing custom Components.
     * In particular the `Event` component can be specified for the entire calendar, or you can
     * provide an individual component for each view type.
     *
     * ```jsx
     * let components = {
     *   event: MyEvent, // used by each view (Month, Day, Week)
     *   eventWrapper: MyEventWrapper,
     *   eventContainerWrapper: MyEventContainerWrapper,
     *   dateCellWrapper: MyDateCellWrapper,
     *   timeSlotWrapper: MyTimeSlotWrapper,
     *   timeGutterHeader: MyTimeGutterWrapper,
     *   toolbar: MyToolbar,
     *   agenda: {
     *   	 event: MyAgendaEvent // with the agenda view use a different component to render events
     *     time: MyAgendaTime,
     *     date: MyAgendaDate,
     *   },
     *   day: {
     *     header: MyDayHeader,
     *     event: MyDayEvent,
     *   },
     *   week: {
     *     header: MyWeekHeader,
     *     event: MyWeekEvent,
     *   },
     *   month: {
     *     header: MyMonthHeader,
     *     dateHeader: MyMonthDateHeader,
     *     event: MyMonthEvent,
     *   }
     * }
     * <Calendar components={components} />
     * ```
     */
    components: propTypes.shape({
      event: propTypes.elementType,
      eventWrapper: propTypes.elementType,
      eventContainerWrapper: propTypes.elementType,
      dateCellWrapper: propTypes.elementType,
      dayColumnWrapper: propTypes.elementType,
      timeSlotWrapper: propTypes.elementType,
      timeGutterHeader: propTypes.elementType,
      resourceHeader: propTypes.elementType,
      toolbar: propTypes.elementType,
      agenda: propTypes.shape({
        date: propTypes.elementType,
        time: propTypes.elementType,
        event: propTypes.elementType,
      }),
      day: propTypes.shape({
        header: propTypes.elementType,
        event: propTypes.elementType,
      }),
      week: propTypes.shape({
        header: propTypes.elementType,
        event: propTypes.elementType,
      }),
      month: propTypes.shape({
        header: propTypes.elementType,
        dateHeader: propTypes.elementType,
        event: propTypes.elementType,
      }),
    }),

    /**
     * String messages used throughout the component, override to provide localizations
     */
    messages: propTypes.shape({
      allDay: propTypes.node,
      previous: propTypes.node,
      next: propTypes.node,
      today: propTypes.node,
      month: propTypes.node,
      week: propTypes.node,
      day: propTypes.node,
      agenda: propTypes.node,
      date: propTypes.node,
      time: propTypes.node,
      event: propTypes.node,
      noEventsInRange: propTypes.node,
      showMore: propTypes.func,
    }),

    /**
     * A day event layout(arrangement) algorithm.
     * `overlap` allows events to be overlapped.
     * `no-overlap` resizes events to avoid overlap.
     * or custom `Function(events, minimumStartDifference, slotMetrics, accessors)`
     */
    dayLayoutAlgorithm: DayLayoutAlgorithmPropType,
  }
  var Calendar$1 = uncontrollable(Calendar, {
    view: 'onView',
    date: 'onNavigate',
    selected: 'onSelectEvent',
  })

  var dateRangeFormat$1 = function dateRangeFormat(_ref, culture, local) {
    var start = _ref.start,
      end = _ref.end
    return (
      local.format(start, 'L', culture) +
      ' – ' +
      local.format(end, 'L', culture)
    )
  }

  var timeRangeFormat = function timeRangeFormat(_ref2, culture, local) {
    var start = _ref2.start,
      end = _ref2.end
    return (
      local.format(start, 'LT', culture) +
      ' – ' +
      local.format(end, 'LT', culture)
    )
  }

  var timeRangeStartFormat = function timeRangeStartFormat(
    _ref3,
    culture,
    local
  ) {
    var start = _ref3.start
    return local.format(start, 'LT', culture) + ' – '
  }

  var timeRangeEndFormat = function timeRangeEndFormat(_ref4, culture, local) {
    var end = _ref4.end
    return ' – ' + local.format(end, 'LT', culture)
  }

  var weekRangeFormat = function weekRangeFormat(_ref5, culture, local) {
    var start = _ref5.start,
      end = _ref5.end
    return (
      local.format(start, 'MMMM DD', culture) +
      ' – ' +
      local.format(end, eq$1(start, end, 'month') ? 'DD' : 'MMMM DD', culture)
    )
  }

  var formats = {
    dateFormat: 'DD',
    dayFormat: 'DD ddd',
    weekdayFormat: 'ddd',
    selectRangeFormat: timeRangeFormat,
    eventTimeRangeFormat: timeRangeFormat,
    eventTimeRangeStartFormat: timeRangeStartFormat,
    eventTimeRangeEndFormat: timeRangeEndFormat,
    timeGutterFormat: 'LT',
    monthHeaderFormat: 'MMMM YYYY',
    dayHeaderFormat: 'dddd MMM DD',
    dayRangeHeaderFormat: weekRangeFormat,
    agendaHeaderFormat: dateRangeFormat$1,
    agendaDateFormat: 'ddd MMM DD',
    agendaTimeFormat: 'LT',
    agendaTimeRangeFormat: timeRangeFormat,
  }
  function moment(moment) {
    var locale = function locale(m, c) {
      return c ? m.locale(c) : m
    }

    return new DateLocalizer({
      formats: formats,
      firstOfWeek: function firstOfWeek(culture) {
        var data = culture ? moment.localeData(culture) : moment.localeData()
        return data ? data.firstDayOfWeek() : 0
      },
      format: function format(value, _format, culture) {
        return locale(moment(value), culture).format(_format)
      },
    })
  }

  var dateRangeFormat$2 = function dateRangeFormat(_ref, culture, local) {
    var start = _ref.start,
      end = _ref.end
    return (
      local.format(start, 'd', culture) +
      ' – ' +
      local.format(end, 'd', culture)
    )
  }

  var timeRangeFormat$1 = function timeRangeFormat(_ref2, culture, local) {
    var start = _ref2.start,
      end = _ref2.end
    return (
      local.format(start, 't', culture) +
      ' – ' +
      local.format(end, 't', culture)
    )
  }

  var timeRangeStartFormat$1 = function timeRangeStartFormat(
    _ref3,
    culture,
    local
  ) {
    var start = _ref3.start
    return local.format(start, 't', culture) + ' – '
  }

  var timeRangeEndFormat$1 = function timeRangeEndFormat(
    _ref4,
    culture,
    local
  ) {
    var end = _ref4.end
    return ' – ' + local.format(end, 't', culture)
  }

  var weekRangeFormat$1 = function weekRangeFormat(_ref5, culture, local) {
    var start = _ref5.start,
      end = _ref5.end
    return (
      local.format(start, 'MMM dd', culture) +
      ' – ' +
      local.format(end, eq$1(start, end, 'month') ? 'dd' : 'MMM dd', culture)
    )
  }

  var formats$1 = {
    dateFormat: 'dd',
    dayFormat: 'ddd dd/MM',
    weekdayFormat: 'ddd',
    selectRangeFormat: timeRangeFormat$1,
    eventTimeRangeFormat: timeRangeFormat$1,
    eventTimeRangeStartFormat: timeRangeStartFormat$1,
    eventTimeRangeEndFormat: timeRangeEndFormat$1,
    timeGutterFormat: 't',
    monthHeaderFormat: 'Y',
    dayHeaderFormat: 'dddd MMM dd',
    dayRangeHeaderFormat: weekRangeFormat$1,
    agendaHeaderFormat: dateRangeFormat$2,
    agendaDateFormat: 'ddd MMM dd',
    agendaTimeFormat: 't',
    agendaTimeRangeFormat: timeRangeFormat$1,
  }
  function oldGlobalize(globalize) {
    function getCulture(culture) {
      return culture
        ? globalize.findClosestCulture(culture)
        : globalize.culture()
    }

    function firstOfWeek(culture) {
      culture = getCulture(culture)
      return (culture && culture.calendar.firstDay) || 0
    }

    return new DateLocalizer({
      firstOfWeek: firstOfWeek,
      formats: formats$1,
      format: function format(value, _format, culture) {
        return globalize.format(value, _format, culture)
      },
    })
  }

  var dateRangeFormat$3 = function dateRangeFormat(_ref, culture, local) {
    var start = _ref.start,
      end = _ref.end
    return (
      local.format(
        start,
        {
          date: 'short',
        },
        culture
      ) +
      ' – ' +
      local.format(
        end,
        {
          date: 'short',
        },
        culture
      )
    )
  }

  var timeRangeFormat$2 = function timeRangeFormat(_ref2, culture, local) {
    var start = _ref2.start,
      end = _ref2.end
    return (
      local.format(
        start,
        {
          time: 'short',
        },
        culture
      ) +
      ' – ' +
      local.format(
        end,
        {
          time: 'short',
        },
        culture
      )
    )
  }

  var timeRangeStartFormat$2 = function timeRangeStartFormat(
    _ref3,
    culture,
    local
  ) {
    var start = _ref3.start
    return (
      local.format(
        start,
        {
          time: 'short',
        },
        culture
      ) + ' – '
    )
  }

  var timeRangeEndFormat$2 = function timeRangeEndFormat(
    _ref4,
    culture,
    local
  ) {
    var end = _ref4.end
    return (
      ' – ' +
      local.format(
        end,
        {
          time: 'short',
        },
        culture
      )
    )
  }

  var weekRangeFormat$2 = function weekRangeFormat(_ref5, culture, local) {
    var start = _ref5.start,
      end = _ref5.end
    return (
      local.format(start, 'MMM dd', culture) +
      ' – ' +
      local.format(end, eq$1(start, end, 'month') ? 'dd' : 'MMM dd', culture)
    )
  }

  var formats$2 = {
    dateFormat: 'dd',
    dayFormat: 'eee dd/MM',
    weekdayFormat: 'eee',
    selectRangeFormat: timeRangeFormat$2,
    eventTimeRangeFormat: timeRangeFormat$2,
    eventTimeRangeStartFormat: timeRangeStartFormat$2,
    eventTimeRangeEndFormat: timeRangeEndFormat$2,
    timeGutterFormat: {
      time: 'short',
    },
    monthHeaderFormat: 'MMMM yyyy',
    dayHeaderFormat: 'eeee MMM dd',
    dayRangeHeaderFormat: weekRangeFormat$2,
    agendaHeaderFormat: dateRangeFormat$3,
    agendaDateFormat: 'eee MMM dd',
    agendaTimeFormat: {
      time: 'short',
    },
    agendaTimeRangeFormat: timeRangeFormat$2,
  }
  function globalize(globalize) {
    var locale = function locale(culture) {
      return culture ? globalize(culture) : globalize
    } // return the first day of the week from the locale data. Defaults to 'world'
    // territory if no territory is derivable from CLDR.
    // Failing to use CLDR supplemental (not loaded?), revert to the original
    // method of getting first day of week.

    function firstOfWeek(culture) {
      try {
        var days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']
        var cldr = locale(culture).cldr
        var territory = cldr.attributes.territory
        var weekData = cldr.get('supplemental').weekData
        var firstDay = weekData.firstDay[territory || '001']
        return days.indexOf(firstDay)
      } catch (e) {
        {
          console.error(
            'Failed to accurately determine first day of the week.' +
              ' Is supplemental data loaded into CLDR?'
          )
        } // maybe cldr supplemental is not loaded? revert to original method

        var date = new Date() //cldr-data doesn't seem to be zero based

        var localeDay = Math.max(
          parseInt(
            locale(culture).formatDate(date, {
              raw: 'e',
            }),
            10
          ) - 1,
          0
        )
        return Math.abs(date.getDay() - localeDay)
      }
    }

    if (!globalize.load) return oldGlobalize(globalize)
    return new DateLocalizer({
      firstOfWeek: firstOfWeek,
      formats: formats$2,
      format: function format(value, _format, culture) {
        _format =
          typeof _format === 'string'
            ? {
                raw: _format,
              }
            : _format
        return locale(culture).formatDate(value, _format)
      },
    })
  }

  var dateRangeFormat$4 = function dateRangeFormat(_ref, culture, local) {
    var start = _ref.start,
      end = _ref.end
    return (
      local.format(start, 'P', culture) +
      ' \u2013 ' +
      local.format(end, 'P', culture)
    )
  }

  var timeRangeFormat$3 = function timeRangeFormat(_ref2, culture, local) {
    var start = _ref2.start,
      end = _ref2.end
    return (
      local.format(start, 'p', culture) +
      ' \u2013 ' +
      local.format(end, 'p', culture)
    )
  }

  var timeRangeStartFormat$3 = function timeRangeStartFormat(
    _ref3,
    culture,
    local
  ) {
    var start = _ref3.start
    return local.format(start, 'h:mma', culture) + ' \u2013 '
  }

  var timeRangeEndFormat$3 = function timeRangeEndFormat(
    _ref4,
    culture,
    local
  ) {
    var end = _ref4.end
    return ' \u2013 ' + local.format(end, 'h:mma', culture)
  }

  var weekRangeFormat$3 = function weekRangeFormat(_ref5, culture, local) {
    var start = _ref5.start,
      end = _ref5.end
    return (
      local.format(start, 'MMMM dd', culture) +
      ' \u2013 ' +
      local.format(end, eq$1(start, end, 'month') ? 'dd' : 'MMMM dd', culture)
    )
  }

  var formats$3 = {
    dateFormat: 'dd',
    dayFormat: 'dd eee',
    weekdayFormat: 'cccc',
    selectRangeFormat: timeRangeFormat$3,
    eventTimeRangeFormat: timeRangeFormat$3,
    eventTimeRangeStartFormat: timeRangeStartFormat$3,
    eventTimeRangeEndFormat: timeRangeEndFormat$3,
    timeGutterFormat: 'p',
    monthHeaderFormat: 'MMMM yyyy',
    dayHeaderFormat: 'cccc MMM dd',
    dayRangeHeaderFormat: weekRangeFormat$3,
    agendaHeaderFormat: dateRangeFormat$4,
    agendaDateFormat: 'ccc MMM dd',
    agendaTimeFormat: 'p',
    agendaTimeRangeFormat: timeRangeFormat$3,
  }

  var dateFnsLocalizer = function dateFnsLocalizer(_ref6) {
    var startOfWeek = _ref6.startOfWeek,
      getDay = _ref6.getDay,
      _format = _ref6.format,
      locales = _ref6.locales
    return new DateLocalizer({
      formats: formats$3,
      firstOfWeek: function firstOfWeek(culture) {
        return getDay(
          startOfWeek(new Date(), {
            locale: locales[culture],
          })
        )
      },
      format: function format(value, formatString, culture) {
        return _format(new Date(value), formatString, {
          locale: locales[culture],
        })
      },
    })
  }

  var components = {
    eventWrapper: NoopWrapper,
    timeSlotWrapper: NoopWrapper,
    dateCellWrapper: NoopWrapper,
  }

  exports.Calendar = Calendar$1
  exports.DateLocalizer = DateLocalizer
  exports.Navigate = navigate
  exports.Views = views
  exports.components = components
  exports.dateFnsLocalizer = dateFnsLocalizer
  exports.globalizeLocalizer = globalize
  exports.momentLocalizer = moment
  exports.move = moveDate

  Object.defineProperty(exports, '__esModule', { value: true })
})
