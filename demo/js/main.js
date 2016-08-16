!function(e){function r(e,r,o){return 4===arguments.length?t.apply(this,arguments):void n(e,{declarative:!0,deps:r,declare:o})}function t(e,r,t,o){n(e,{declarative:!1,deps:r,executingRequire:t,execute:o})}function n(e,r){r.name=e,e in v||(v[e]=r),r.normalizedDeps=r.deps}function o(e,r){if(r[e.groupIndex]=r[e.groupIndex]||[],-1==g.call(r[e.groupIndex],e)){r[e.groupIndex].push(e);for(var t=0,n=e.normalizedDeps.length;n>t;t++){var a=e.normalizedDeps[t],u=v[a];if(u&&!u.evaluated){var d=e.groupIndex+(u.declarative!=e.declarative);if(void 0===u.groupIndex||u.groupIndex<d){if(void 0!==u.groupIndex&&(r[u.groupIndex].splice(g.call(r[u.groupIndex],u),1),0==r[u.groupIndex].length))throw new TypeError("Mixed dependency cycle detected");u.groupIndex=d}o(u,r)}}}}function a(e){var r=v[e];r.groupIndex=0;var t=[];o(r,t);for(var n=!!r.declarative==t.length%2,a=t.length-1;a>=0;a--){for(var u=t[a],i=0;i<u.length;i++){var s=u[i];n?d(s):l(s)}n=!n}}function u(e){return y[e]||(y[e]={name:e,dependencies:[],exports:{},importers:[]})}function d(r){if(!r.module){var t=r.module=u(r.name),n=r.module.exports,o=r.declare.call(e,function(e,r){if(t.locked=!0,"object"==typeof e)for(var o in e)n[o]=e[o];else n[e]=r;for(var a=0,u=t.importers.length;u>a;a++){var d=t.importers[a];if(!d.locked)for(var i=0;i<d.dependencies.length;++i)d.dependencies[i]===t&&d.setters[i](n)}return t.locked=!1,r},{id:r.name});t.setters=o.setters,t.execute=o.execute;for(var a=0,i=r.normalizedDeps.length;i>a;a++){var l,s=r.normalizedDeps[a],c=v[s],f=y[s];f?l=f.exports:c&&!c.declarative?l=c.esModule:c?(d(c),f=c.module,l=f.exports):l=p(s),f&&f.importers?(f.importers.push(t),t.dependencies.push(f)):t.dependencies.push(null),t.setters[a]&&t.setters[a](l)}}}function i(e){var r,t=v[e];if(t)t.declarative?f(e,[]):t.evaluated||l(t),r=t.module.exports;else if(r=p(e),!r)throw new Error("Unable to load dependency "+e+".");return(!t||t.declarative)&&r&&r.__useDefault?r["default"]:r}function l(r){if(!r.module){var t={},n=r.module={exports:t,id:r.name};if(!r.executingRequire)for(var o=0,a=r.normalizedDeps.length;a>o;o++){var u=r.normalizedDeps[o],d=v[u];d&&l(d)}r.evaluated=!0;var c=r.execute.call(e,function(e){for(var t=0,n=r.deps.length;n>t;t++)if(r.deps[t]==e)return i(r.normalizedDeps[t]);throw new TypeError("Module "+e+" not declared as a dependency.")},t,n);c&&(n.exports=c),t=n.exports,t&&t.__esModule?r.esModule=t:r.esModule=s(t)}}function s(r){var t={};if(("object"==typeof r||"function"==typeof r)&&r!==e)if(m)for(var n in r)"default"!==n&&c(t,r,n);else{var o=r&&r.hasOwnProperty;for(var n in r)"default"===n||o&&!r.hasOwnProperty(n)||(t[n]=r[n])}return t["default"]=r,x(t,"__useDefault",{value:!0}),t}function c(e,r,t){try{var n;(n=Object.getOwnPropertyDescriptor(r,t))&&x(e,t,n)}catch(o){return e[t]=r[t],!1}}function f(r,t){var n=v[r];if(n&&!n.evaluated&&n.declarative){t.push(r);for(var o=0,a=n.normalizedDeps.length;a>o;o++){var u=n.normalizedDeps[o];-1==g.call(t,u)&&(v[u]?f(u,t):p(u))}n.evaluated||(n.evaluated=!0,n.module.execute.call(e))}}function p(e){if(I[e])return I[e];if("@node/"==e.substr(0,6))return I[e]=s(D(e.substr(6)));var r=v[e];if(!r)throw"Module "+e+" not present.";return a(e),f(e,[]),v[e]=void 0,r.declarative&&x(r.module.exports,"__esModule",{value:!0}),I[e]=r.declarative?r.module.exports:r.esModule}var v={},g=Array.prototype.indexOf||function(e){for(var r=0,t=this.length;t>r;r++)if(this[r]===e)return r;return-1},m=!0;try{Object.getOwnPropertyDescriptor({a:0},"a")}catch(h){m=!1}var x;!function(){try{Object.defineProperty({},"a",{})&&(x=Object.defineProperty)}catch(e){x=function(e,r,t){try{e[r]=t.value||t.get.call(e)}catch(n){}}}}();var y={},D="undefined"!=typeof System&&System._nodeRequire||"undefined"!=typeof require&&require.resolve&&"undefined"!=typeof process&&require,I={"@empty":{}};return function(e,n,o,a){return function(u){u(function(u){for(var d={_nodeRequire:D,register:r,registerDynamic:t,get:p,set:function(e,r){I[e]=r},newModule:function(e){return e}},i=0;i<n.length;i++)(function(e,r){r&&r.__esModule?I[e]=r:I[e]=s(r)})(n[i],arguments[i]);a(d);var l=p(e[0]);if(e.length>1)for(var i=1;i<e.length;i++)p(e[i]);return o?l["default"]:l})}}}("undefined"!=typeof self?self:global)

(["1"], [], false, function($__System) {
var require = this.require, exports = this.exports, module = this.module;
$__System.registerDynamic("2", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  "format cjs";
  return module.exports;
});

$__System.registerDynamic("3", ["4", "5"], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  var toInteger = $__require('4'),
      defined = $__require('5');
  module.exports = function(TO_STRING) {
    return function(that, pos) {
      var s = String(defined(that)),
          i = toInteger(pos),
          l = s.length,
          a,
          b;
      if (i < 0 || i >= l)
        return TO_STRING ? '' : undefined;
      a = s.charCodeAt(i);
      return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
    };
  };
  return module.exports;
});

$__System.registerDynamic("6", ["3", "7"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  var $at = $__require('3')(true);
  $__require('7')(String, 'String', function(iterated) {
    this._t = String(iterated);
    this._i = 0;
  }, function() {
    var O = this._t,
        index = this._i,
        point;
    if (index >= O.length)
      return {
        value: undefined,
        done: true
      };
    point = $at(O, index);
    this._i += point.length;
    return {
      value: point,
      done: false
    };
  });
  return module.exports;
});

$__System.registerDynamic("8", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  module.exports = function() {};
  return module.exports;
});

$__System.registerDynamic("9", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  module.exports = function(done, value) {
    return {
      value: value,
      done: !!done
    };
  };
  return module.exports;
});

$__System.registerDynamic("a", ["b", "5"], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  var IObject = $__require('b'),
      defined = $__require('5');
  module.exports = function(it) {
    return IObject(defined(it));
  };
  return module.exports;
});

$__System.registerDynamic("c", ["d", "e", "f", "10", "11"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  var $ = $__require('d'),
      descriptor = $__require('e'),
      setToStringTag = $__require('f'),
      IteratorPrototype = {};
  $__require('10')(IteratorPrototype, $__require('11')('iterator'), function() {
    return this;
  });
  module.exports = function(Constructor, NAME, next) {
    Constructor.prototype = $.create(IteratorPrototype, {next: descriptor(1, next)});
    setToStringTag(Constructor, NAME + ' Iterator');
  };
  return module.exports;
});

$__System.registerDynamic("7", ["12", "13", "14", "10", "15", "16", "c", "f", "d", "11"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  var LIBRARY = $__require('12'),
      $export = $__require('13'),
      redefine = $__require('14'),
      hide = $__require('10'),
      has = $__require('15'),
      Iterators = $__require('16'),
      $iterCreate = $__require('c'),
      setToStringTag = $__require('f'),
      getProto = $__require('d').getProto,
      ITERATOR = $__require('11')('iterator'),
      BUGGY = !([].keys && 'next' in [].keys()),
      FF_ITERATOR = '@@iterator',
      KEYS = 'keys',
      VALUES = 'values';
  var returnThis = function() {
    return this;
  };
  module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
    $iterCreate(Constructor, NAME, next);
    var getMethod = function(kind) {
      if (!BUGGY && kind in proto)
        return proto[kind];
      switch (kind) {
        case KEYS:
          return function keys() {
            return new Constructor(this, kind);
          };
        case VALUES:
          return function values() {
            return new Constructor(this, kind);
          };
      }
      return function entries() {
        return new Constructor(this, kind);
      };
    };
    var TAG = NAME + ' Iterator',
        DEF_VALUES = DEFAULT == VALUES,
        VALUES_BUG = false,
        proto = Base.prototype,
        $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT],
        $default = $native || getMethod(DEFAULT),
        methods,
        key;
    if ($native) {
      var IteratorPrototype = getProto($default.call(new Base));
      setToStringTag(IteratorPrototype, TAG, true);
      if (!LIBRARY && has(proto, FF_ITERATOR))
        hide(IteratorPrototype, ITERATOR, returnThis);
      if (DEF_VALUES && $native.name !== VALUES) {
        VALUES_BUG = true;
        $default = function values() {
          return $native.call(this);
        };
      }
    }
    if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
      hide(proto, ITERATOR, $default);
    }
    Iterators[NAME] = $default;
    Iterators[TAG] = returnThis;
    if (DEFAULT) {
      methods = {
        values: DEF_VALUES ? $default : getMethod(VALUES),
        keys: IS_SET ? $default : getMethod(KEYS),
        entries: !DEF_VALUES ? $default : getMethod('entries')
      };
      if (FORCED)
        for (key in methods) {
          if (!(key in proto))
            redefine(proto, key, methods[key]);
        }
      else
        $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
    }
    return methods;
  };
  return module.exports;
});

$__System.registerDynamic("17", ["8", "9", "16", "a", "7"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  var addToUnscopables = $__require('8'),
      step = $__require('9'),
      Iterators = $__require('16'),
      toIObject = $__require('a');
  module.exports = $__require('7')(Array, 'Array', function(iterated, kind) {
    this._t = toIObject(iterated);
    this._i = 0;
    this._k = kind;
  }, function() {
    var O = this._t,
        kind = this._k,
        index = this._i++;
    if (!O || index >= O.length) {
      this._t = undefined;
      return step(1);
    }
    if (kind == 'keys')
      return step(0, index);
    if (kind == 'values')
      return step(0, O[index]);
    return step(0, [index, O[index]]);
  }, 'values');
  Iterators.Arguments = Iterators.Array;
  addToUnscopables('keys');
  addToUnscopables('values');
  addToUnscopables('entries');
  return module.exports;
});

$__System.registerDynamic("18", ["17", "16"], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  $__require('17');
  var Iterators = $__require('16');
  Iterators.NodeList = Iterators.HTMLCollection = Iterators.Array;
  return module.exports;
});

$__System.registerDynamic("12", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  module.exports = true;
  return module.exports;
});

$__System.registerDynamic("19", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  module.exports = function(it, Constructor, name) {
    if (!(it instanceof Constructor))
      throw TypeError(name + ": use the 'new' operator!");
    return it;
  };
  return module.exports;
});

$__System.registerDynamic("1a", ["1b"], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  var anObject = $__require('1b');
  module.exports = function(iterator, fn, value, entries) {
    try {
      return entries ? fn(anObject(value)[0], value[1]) : fn(value);
    } catch (e) {
      var ret = iterator['return'];
      if (ret !== undefined)
        anObject(ret.call(iterator));
      throw e;
    }
  };
  return module.exports;
});

$__System.registerDynamic("1c", ["16", "11"], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  var Iterators = $__require('16'),
      ITERATOR = $__require('11')('iterator'),
      ArrayProto = Array.prototype;
  module.exports = function(it) {
    return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
  };
  return module.exports;
});

$__System.registerDynamic("4", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  var ceil = Math.ceil,
      floor = Math.floor;
  module.exports = function(it) {
    return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
  };
  return module.exports;
});

$__System.registerDynamic("1d", ["4"], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  var toInteger = $__require('4'),
      min = Math.min;
  module.exports = function(it) {
    return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0;
  };
  return module.exports;
});

$__System.registerDynamic("1e", ["1f", "11"], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  var cof = $__require('1f'),
      TAG = $__require('11')('toStringTag'),
      ARG = cof(function() {
        return arguments;
      }()) == 'Arguments';
  module.exports = function(it) {
    var O,
        T,
        B;
    return it === undefined ? 'Undefined' : it === null ? 'Null' : typeof(T = (O = Object(it))[TAG]) == 'string' ? T : ARG ? cof(O) : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
  };
  return module.exports;
});

$__System.registerDynamic("16", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  module.exports = {};
  return module.exports;
});

$__System.registerDynamic("20", ["1e", "11", "16", "21"], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  var classof = $__require('1e'),
      ITERATOR = $__require('11')('iterator'),
      Iterators = $__require('16');
  module.exports = $__require('21').getIteratorMethod = function(it) {
    if (it != undefined)
      return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
  };
  return module.exports;
});

$__System.registerDynamic("22", ["23", "1a", "1c", "1b", "1d", "20"], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  var ctx = $__require('23'),
      call = $__require('1a'),
      isArrayIter = $__require('1c'),
      anObject = $__require('1b'),
      toLength = $__require('1d'),
      getIterFn = $__require('20');
  module.exports = function(iterable, entries, fn, that) {
    var iterFn = getIterFn(iterable),
        f = ctx(fn, that, entries ? 2 : 1),
        index = 0,
        length,
        step,
        iterator;
    if (typeof iterFn != 'function')
      throw TypeError(iterable + ' is not iterable!');
    if (isArrayIter(iterFn))
      for (length = toLength(iterable.length); length > index; index++) {
        entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
      }
    else
      for (iterator = iterFn.call(iterable); !(step = iterator.next()).done; ) {
        call(iterator, f, step.value, entries);
      }
  };
  return module.exports;
});

$__System.registerDynamic("24", ["d", "25", "1b", "23"], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  var getDesc = $__require('d').getDesc,
      isObject = $__require('25'),
      anObject = $__require('1b');
  var check = function(O, proto) {
    anObject(O);
    if (!isObject(proto) && proto !== null)
      throw TypeError(proto + ": can't set as prototype!");
  };
  module.exports = {
    set: Object.setPrototypeOf || ('__proto__' in {} ? function(test, buggy, set) {
      try {
        set = $__require('23')(Function.call, getDesc(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) {
        buggy = true;
      }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy)
          O.__proto__ = proto;
        else
          set(O, proto);
        return O;
      };
    }({}, false) : undefined),
    check: check
  };
  return module.exports;
});

$__System.registerDynamic("26", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  module.exports = Object.is || function is(x, y) {
    return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
  };
  return module.exports;
});

$__System.registerDynamic("1b", ["25"], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  var isObject = $__require('25');
  module.exports = function(it) {
    if (!isObject(it))
      throw TypeError(it + ' is not an object!');
    return it;
  };
  return module.exports;
});

$__System.registerDynamic("27", ["1b", "28", "11"], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  var anObject = $__require('1b'),
      aFunction = $__require('28'),
      SPECIES = $__require('11')('species');
  module.exports = function(O, D) {
    var C = anObject(O).constructor,
        S;
    return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
  };
  return module.exports;
});

$__System.registerDynamic("29", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  module.exports = function(fn, args, that) {
    var un = that === undefined;
    switch (args.length) {
      case 0:
        return un ? fn() : fn.call(that);
      case 1:
        return un ? fn(args[0]) : fn.call(that, args[0]);
      case 2:
        return un ? fn(args[0], args[1]) : fn.call(that, args[0], args[1]);
      case 3:
        return un ? fn(args[0], args[1], args[2]) : fn.call(that, args[0], args[1], args[2]);
      case 4:
        return un ? fn(args[0], args[1], args[2], args[3]) : fn.call(that, args[0], args[1], args[2], args[3]);
    }
    return fn.apply(that, args);
  };
  return module.exports;
});

$__System.registerDynamic("2a", ["2b"], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  module.exports = $__require('2b').document && document.documentElement;
  return module.exports;
});

$__System.registerDynamic("25", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  module.exports = function(it) {
    return typeof it === 'object' ? it !== null : typeof it === 'function';
  };
  return module.exports;
});

$__System.registerDynamic("2c", ["25", "2b"], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  var isObject = $__require('25'),
      document = $__require('2b').document,
      is = isObject(document) && isObject(document.createElement);
  module.exports = function(it) {
    return is ? document.createElement(it) : {};
  };
  return module.exports;
});

$__System.registerDynamic("2d", ["23", "29", "2a", "2c", "2b", "1f", "2e"], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  (function(process) {
    var ctx = $__require('23'),
        invoke = $__require('29'),
        html = $__require('2a'),
        cel = $__require('2c'),
        global = $__require('2b'),
        process = global.process,
        setTask = global.setImmediate,
        clearTask = global.clearImmediate,
        MessageChannel = global.MessageChannel,
        counter = 0,
        queue = {},
        ONREADYSTATECHANGE = 'onreadystatechange',
        defer,
        channel,
        port;
    var run = function() {
      var id = +this;
      if (queue.hasOwnProperty(id)) {
        var fn = queue[id];
        delete queue[id];
        fn();
      }
    };
    var listner = function(event) {
      run.call(event.data);
    };
    if (!setTask || !clearTask) {
      setTask = function setImmediate(fn) {
        var args = [],
            i = 1;
        while (arguments.length > i)
          args.push(arguments[i++]);
        queue[++counter] = function() {
          invoke(typeof fn == 'function' ? fn : Function(fn), args);
        };
        defer(counter);
        return counter;
      };
      clearTask = function clearImmediate(id) {
        delete queue[id];
      };
      if ($__require('1f')(process) == 'process') {
        defer = function(id) {
          process.nextTick(ctx(run, id, 1));
        };
      } else if (MessageChannel) {
        channel = new MessageChannel;
        port = channel.port2;
        channel.port1.onmessage = listner;
        defer = ctx(port.postMessage, port, 1);
      } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
        defer = function(id) {
          global.postMessage(id + '', '*');
        };
        global.addEventListener('message', listner, false);
      } else if (ONREADYSTATECHANGE in cel('script')) {
        defer = function(id) {
          html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function() {
            html.removeChild(this);
            run.call(id);
          };
        };
      } else {
        defer = function(id) {
          setTimeout(ctx(run, id, 1), 0);
        };
      }
    }
    module.exports = {
      set: setTask,
      clear: clearTask
    };
  })($__require('2e'));
  return module.exports;
});

$__System.registerDynamic("2f", ["2b", "2d", "1f", "2e"], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  (function(process) {
    var global = $__require('2b'),
        macrotask = $__require('2d').set,
        Observer = global.MutationObserver || global.WebKitMutationObserver,
        process = global.process,
        Promise = global.Promise,
        isNode = $__require('1f')(process) == 'process',
        head,
        last,
        notify;
    var flush = function() {
      var parent,
          domain,
          fn;
      if (isNode && (parent = process.domain)) {
        process.domain = null;
        parent.exit();
      }
      while (head) {
        domain = head.domain;
        fn = head.fn;
        if (domain)
          domain.enter();
        fn();
        if (domain)
          domain.exit();
        head = head.next;
      }
      last = undefined;
      if (parent)
        parent.enter();
    };
    if (isNode) {
      notify = function() {
        process.nextTick(flush);
      };
    } else if (Observer) {
      var toggle = 1,
          node = document.createTextNode('');
      new Observer(flush).observe(node, {characterData: true});
      notify = function() {
        node.data = toggle = -toggle;
      };
    } else if (Promise && Promise.resolve) {
      notify = function() {
        Promise.resolve().then(flush);
      };
    } else {
      notify = function() {
        macrotask.call(global, flush);
      };
    }
    module.exports = function asap(fn) {
      var task = {
        fn: fn,
        next: undefined,
        domain: isNode && process.domain
      };
      if (last)
        last.next = task;
      if (!head) {
        head = task;
        notify();
      }
      last = task;
    };
  })($__require('2e'));
  return module.exports;
});

$__System.registerDynamic("e", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  module.exports = function(bitmap, value) {
    return {
      enumerable: !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable: !(bitmap & 4),
      value: value
    };
  };
  return module.exports;
});

$__System.registerDynamic("10", ["d", "e", "30"], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  var $ = $__require('d'),
      createDesc = $__require('e');
  module.exports = $__require('30') ? function(object, key, value) {
    return $.setDesc(object, key, createDesc(1, value));
  } : function(object, key, value) {
    object[key] = value;
    return object;
  };
  return module.exports;
});

$__System.registerDynamic("14", ["10"], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  module.exports = $__require('10');
  return module.exports;
});

$__System.registerDynamic("31", ["14"], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  var redefine = $__require('14');
  module.exports = function(target, src) {
    for (var key in src)
      redefine(target, key, src[key]);
    return target;
  };
  return module.exports;
});

$__System.registerDynamic("15", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  var hasOwnProperty = {}.hasOwnProperty;
  module.exports = function(it, key) {
    return hasOwnProperty.call(it, key);
  };
  return module.exports;
});

$__System.registerDynamic("f", ["d", "15", "11"], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  var def = $__require('d').setDesc,
      has = $__require('15'),
      TAG = $__require('11')('toStringTag');
  module.exports = function(it, tag, stat) {
    if (it && !has(it = stat ? it : it.prototype, TAG))
      def(it, TAG, {
        configurable: true,
        value: tag
      });
  };
  return module.exports;
});

$__System.registerDynamic("30", ["32"], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  module.exports = !$__require('32')(function() {
    return Object.defineProperty({}, 'a', {get: function() {
        return 7;
      }}).a != 7;
  });
  return module.exports;
});

$__System.registerDynamic("33", ["21", "d", "30", "11"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  var core = $__require('21'),
      $ = $__require('d'),
      DESCRIPTORS = $__require('30'),
      SPECIES = $__require('11')('species');
  module.exports = function(KEY) {
    var C = core[KEY];
    if (DESCRIPTORS && C && !C[SPECIES])
      $.setDesc(C, SPECIES, {
        configurable: true,
        get: function() {
          return this;
        }
      });
  };
  return module.exports;
});

$__System.registerDynamic("34", ["2b"], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  var global = $__require('2b'),
      SHARED = '__core-js_shared__',
      store = global[SHARED] || (global[SHARED] = {});
  module.exports = function(key) {
    return store[key] || (store[key] = {});
  };
  return module.exports;
});

$__System.registerDynamic("35", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  var id = 0,
      px = Math.random();
  module.exports = function(key) {
    return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
  };
  return module.exports;
});

$__System.registerDynamic("11", ["34", "35", "2b"], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  var store = $__require('34')('wks'),
      uid = $__require('35'),
      Symbol = $__require('2b').Symbol;
  module.exports = function(name) {
    return store[name] || (store[name] = Symbol && Symbol[name] || (Symbol || uid)('Symbol.' + name));
  };
  return module.exports;
});

$__System.registerDynamic("36", ["11"], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  var ITERATOR = $__require('11')('iterator'),
      SAFE_CLOSING = false;
  try {
    var riter = [7][ITERATOR]();
    riter['return'] = function() {
      SAFE_CLOSING = true;
    };
    Array.from(riter, function() {
      throw 2;
    });
  } catch (e) {}
  module.exports = function(exec, skipClosing) {
    if (!skipClosing && !SAFE_CLOSING)
      return false;
    var safe = false;
    try {
      var arr = [7],
          iter = arr[ITERATOR]();
      iter.next = function() {
        return {done: safe = true};
      };
      arr[ITERATOR] = function() {
        return iter;
      };
      exec(arr);
    } catch (e) {}
    return safe;
  };
  return module.exports;
});

$__System.registerDynamic("37", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  var process = module.exports = {};
  var cachedSetTimeout;
  var cachedClearTimeout;
  (function() {
    try {
      cachedSetTimeout = setTimeout;
    } catch (e) {
      cachedSetTimeout = function() {
        throw new Error('setTimeout is not defined');
      };
    }
    try {
      cachedClearTimeout = clearTimeout;
    } catch (e) {
      cachedClearTimeout = function() {
        throw new Error('clearTimeout is not defined');
      };
    }
  }());
  function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
      return setTimeout(fun, 0);
    }
    try {
      return cachedSetTimeout(fun, 0);
    } catch (e) {
      try {
        return cachedSetTimeout.call(null, fun, 0);
      } catch (e) {
        return cachedSetTimeout.call(this, fun, 0);
      }
    }
  }
  function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
      return clearTimeout(marker);
    }
    try {
      return cachedClearTimeout(marker);
    } catch (e) {
      try {
        return cachedClearTimeout.call(null, marker);
      } catch (e) {
        return cachedClearTimeout.call(this, marker);
      }
    }
  }
  var queue = [];
  var draining = false;
  var currentQueue;
  var queueIndex = -1;
  function cleanUpNextTick() {
    if (!draining || !currentQueue) {
      return;
    }
    draining = false;
    if (currentQueue.length) {
      queue = currentQueue.concat(queue);
    } else {
      queueIndex = -1;
    }
    if (queue.length) {
      drainQueue();
    }
  }
  function drainQueue() {
    if (draining) {
      return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;
    var len = queue.length;
    while (len) {
      currentQueue = queue;
      queue = [];
      while (++queueIndex < len) {
        if (currentQueue) {
          currentQueue[queueIndex].run();
        }
      }
      queueIndex = -1;
      len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
  }
  process.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
      for (var i = 1; i < arguments.length; i++) {
        args[i - 1] = arguments[i];
      }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
      runTimeout(drainQueue);
    }
  };
  function Item(fun, array) {
    this.fun = fun;
    this.array = array;
  }
  Item.prototype.run = function() {
    this.fun.apply(null, this.array);
  };
  process.title = 'browser';
  process.browser = true;
  process.env = {};
  process.argv = [];
  process.version = '';
  process.versions = {};
  function noop() {}
  process.on = noop;
  process.addListener = noop;
  process.once = noop;
  process.off = noop;
  process.removeListener = noop;
  process.removeAllListeners = noop;
  process.emit = noop;
  process.binding = function(name) {
    throw new Error('process.binding is not supported');
  };
  process.cwd = function() {
    return '/';
  };
  process.chdir = function(dir) {
    throw new Error('process.chdir is not supported');
  };
  process.umask = function() {
    return 0;
  };
  return module.exports;
});

$__System.registerDynamic("38", ["37"], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  module.exports = $__require('37');
  return module.exports;
});

$__System.registerDynamic("39", ["38"], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  module.exports = $__System._nodeRequire ? process : $__require('38');
  return module.exports;
});

$__System.registerDynamic("2e", ["39"], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  module.exports = $__require('39');
  return module.exports;
});

$__System.registerDynamic("3a", ["d", "12", "2b", "23", "1e", "13", "25", "1b", "28", "19", "22", "24", "26", "11", "27", "2f", "30", "31", "f", "33", "21", "36", "2e"], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  (function(process) {
    'use strict';
    var $ = $__require('d'),
        LIBRARY = $__require('12'),
        global = $__require('2b'),
        ctx = $__require('23'),
        classof = $__require('1e'),
        $export = $__require('13'),
        isObject = $__require('25'),
        anObject = $__require('1b'),
        aFunction = $__require('28'),
        strictNew = $__require('19'),
        forOf = $__require('22'),
        setProto = $__require('24').set,
        same = $__require('26'),
        SPECIES = $__require('11')('species'),
        speciesConstructor = $__require('27'),
        asap = $__require('2f'),
        PROMISE = 'Promise',
        process = global.process,
        isNode = classof(process) == 'process',
        P = global[PROMISE],
        empty = function() {},
        Wrapper;
    var testResolve = function(sub) {
      var test = new P(empty),
          promise;
      if (sub)
        test.constructor = function(exec) {
          exec(empty, empty);
        };
      (promise = P.resolve(test))['catch'](empty);
      return promise === test;
    };
    var USE_NATIVE = function() {
      var works = false;
      function P2(x) {
        var self = new P(x);
        setProto(self, P2.prototype);
        return self;
      }
      try {
        works = P && P.resolve && testResolve();
        setProto(P2, P);
        P2.prototype = $.create(P.prototype, {constructor: {value: P2}});
        if (!(P2.resolve(5).then(function() {}) instanceof P2)) {
          works = false;
        }
        if (works && $__require('30')) {
          var thenableThenGotten = false;
          P.resolve($.setDesc({}, 'then', {get: function() {
              thenableThenGotten = true;
            }}));
          works = thenableThenGotten;
        }
      } catch (e) {
        works = false;
      }
      return works;
    }();
    var sameConstructor = function(a, b) {
      if (LIBRARY && a === P && b === Wrapper)
        return true;
      return same(a, b);
    };
    var getConstructor = function(C) {
      var S = anObject(C)[SPECIES];
      return S != undefined ? S : C;
    };
    var isThenable = function(it) {
      var then;
      return isObject(it) && typeof(then = it.then) == 'function' ? then : false;
    };
    var PromiseCapability = function(C) {
      var resolve,
          reject;
      this.promise = new C(function($$resolve, $$reject) {
        if (resolve !== undefined || reject !== undefined)
          throw TypeError('Bad Promise constructor');
        resolve = $$resolve;
        reject = $$reject;
      });
      this.resolve = aFunction(resolve), this.reject = aFunction(reject);
    };
    var perform = function(exec) {
      try {
        exec();
      } catch (e) {
        return {error: e};
      }
    };
    var notify = function(record, isReject) {
      if (record.n)
        return;
      record.n = true;
      var chain = record.c;
      asap(function() {
        var value = record.v,
            ok = record.s == 1,
            i = 0;
        var run = function(reaction) {
          var handler = ok ? reaction.ok : reaction.fail,
              resolve = reaction.resolve,
              reject = reaction.reject,
              result,
              then;
          try {
            if (handler) {
              if (!ok)
                record.h = true;
              result = handler === true ? value : handler(value);
              if (result === reaction.promise) {
                reject(TypeError('Promise-chain cycle'));
              } else if (then = isThenable(result)) {
                then.call(result, resolve, reject);
              } else
                resolve(result);
            } else
              reject(value);
          } catch (e) {
            reject(e);
          }
        };
        while (chain.length > i)
          run(chain[i++]);
        chain.length = 0;
        record.n = false;
        if (isReject)
          setTimeout(function() {
            var promise = record.p,
                handler,
                console;
            if (isUnhandled(promise)) {
              if (isNode) {
                process.emit('unhandledRejection', value, promise);
              } else if (handler = global.onunhandledrejection) {
                handler({
                  promise: promise,
                  reason: value
                });
              } else if ((console = global.console) && console.error) {
                console.error('Unhandled promise rejection', value);
              }
            }
            record.a = undefined;
          }, 1);
      });
    };
    var isUnhandled = function(promise) {
      var record = promise._d,
          chain = record.a || record.c,
          i = 0,
          reaction;
      if (record.h)
        return false;
      while (chain.length > i) {
        reaction = chain[i++];
        if (reaction.fail || !isUnhandled(reaction.promise))
          return false;
      }
      return true;
    };
    var $reject = function(value) {
      var record = this;
      if (record.d)
        return;
      record.d = true;
      record = record.r || record;
      record.v = value;
      record.s = 2;
      record.a = record.c.slice();
      notify(record, true);
    };
    var $resolve = function(value) {
      var record = this,
          then;
      if (record.d)
        return;
      record.d = true;
      record = record.r || record;
      try {
        if (record.p === value)
          throw TypeError("Promise can't be resolved itself");
        if (then = isThenable(value)) {
          asap(function() {
            var wrapper = {
              r: record,
              d: false
            };
            try {
              then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
            } catch (e) {
              $reject.call(wrapper, e);
            }
          });
        } else {
          record.v = value;
          record.s = 1;
          notify(record, false);
        }
      } catch (e) {
        $reject.call({
          r: record,
          d: false
        }, e);
      }
    };
    if (!USE_NATIVE) {
      P = function Promise(executor) {
        aFunction(executor);
        var record = this._d = {
          p: strictNew(this, P, PROMISE),
          c: [],
          a: undefined,
          s: 0,
          d: false,
          v: undefined,
          h: false,
          n: false
        };
        try {
          executor(ctx($resolve, record, 1), ctx($reject, record, 1));
        } catch (err) {
          $reject.call(record, err);
        }
      };
      $__require('31')(P.prototype, {
        then: function then(onFulfilled, onRejected) {
          var reaction = new PromiseCapability(speciesConstructor(this, P)),
              promise = reaction.promise,
              record = this._d;
          reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
          reaction.fail = typeof onRejected == 'function' && onRejected;
          record.c.push(reaction);
          if (record.a)
            record.a.push(reaction);
          if (record.s)
            notify(record, false);
          return promise;
        },
        'catch': function(onRejected) {
          return this.then(undefined, onRejected);
        }
      });
    }
    $export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: P});
    $__require('f')(P, PROMISE);
    $__require('33')(PROMISE);
    Wrapper = $__require('21')[PROMISE];
    $export($export.S + $export.F * !USE_NATIVE, PROMISE, {reject: function reject(r) {
        var capability = new PromiseCapability(this),
            $$reject = capability.reject;
        $$reject(r);
        return capability.promise;
      }});
    $export($export.S + $export.F * (!USE_NATIVE || testResolve(true)), PROMISE, {resolve: function resolve(x) {
        if (x instanceof P && sameConstructor(x.constructor, this))
          return x;
        var capability = new PromiseCapability(this),
            $$resolve = capability.resolve;
        $$resolve(x);
        return capability.promise;
      }});
    $export($export.S + $export.F * !(USE_NATIVE && $__require('36')(function(iter) {
      P.all(iter)['catch'](function() {});
    })), PROMISE, {
      all: function all(iterable) {
        var C = getConstructor(this),
            capability = new PromiseCapability(C),
            resolve = capability.resolve,
            reject = capability.reject,
            values = [];
        var abrupt = perform(function() {
          forOf(iterable, false, values.push, values);
          var remaining = values.length,
              results = Array(remaining);
          if (remaining)
            $.each.call(values, function(promise, index) {
              var alreadyCalled = false;
              C.resolve(promise).then(function(value) {
                if (alreadyCalled)
                  return;
                alreadyCalled = true;
                results[index] = value;
                --remaining || resolve(results);
              }, reject);
            });
          else
            resolve(results);
        });
        if (abrupt)
          reject(abrupt.error);
        return capability.promise;
      },
      race: function race(iterable) {
        var C = getConstructor(this),
            capability = new PromiseCapability(C),
            reject = capability.reject;
        var abrupt = perform(function() {
          forOf(iterable, false, function(promise) {
            C.resolve(promise).then(capability.resolve, reject);
          });
        });
        if (abrupt)
          reject(abrupt.error);
        return capability.promise;
      }
    });
  })($__require('2e'));
  return module.exports;
});

$__System.registerDynamic("3b", ["2", "6", "18", "3a", "21"], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  $__require('2');
  $__require('6');
  $__require('18');
  $__require('3a');
  module.exports = $__require('21').Promise;
  return module.exports;
});

$__System.registerDynamic("3c", ["3b"], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  module.exports = {
    "default": $__require('3b'),
    __esModule: true
  };
  return module.exports;
});

$__System.registerDynamic("2b", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
  if (typeof __g == 'number')
    __g = global;
  return module.exports;
});

$__System.registerDynamic("28", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  module.exports = function(it) {
    if (typeof it != 'function')
      throw TypeError(it + ' is not a function!');
    return it;
  };
  return module.exports;
});

$__System.registerDynamic("23", ["28"], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  var aFunction = $__require('28');
  module.exports = function(fn, that, length) {
    aFunction(fn);
    if (that === undefined)
      return fn;
    switch (length) {
      case 1:
        return function(a) {
          return fn.call(that, a);
        };
      case 2:
        return function(a, b) {
          return fn.call(that, a, b);
        };
      case 3:
        return function(a, b, c) {
          return fn.call(that, a, b, c);
        };
    }
    return function() {
      return fn.apply(that, arguments);
    };
  };
  return module.exports;
});

$__System.registerDynamic("13", ["2b", "21", "23"], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  var global = $__require('2b'),
      core = $__require('21'),
      ctx = $__require('23'),
      PROTOTYPE = 'prototype';
  var $export = function(type, name, source) {
    var IS_FORCED = type & $export.F,
        IS_GLOBAL = type & $export.G,
        IS_STATIC = type & $export.S,
        IS_PROTO = type & $export.P,
        IS_BIND = type & $export.B,
        IS_WRAP = type & $export.W,
        exports = IS_GLOBAL ? core : core[name] || (core[name] = {}),
        target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE],
        key,
        own,
        out;
    if (IS_GLOBAL)
      source = name;
    for (key in source) {
      own = !IS_FORCED && target && key in target;
      if (own && key in exports)
        continue;
      out = own ? target[key] : source[key];
      exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key] : IS_BIND && own ? ctx(out, global) : IS_WRAP && target[key] == out ? (function(C) {
        var F = function(param) {
          return this instanceof C ? new C(param) : C(param);
        };
        F[PROTOTYPE] = C[PROTOTYPE];
        return F;
      })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
      if (IS_PROTO)
        (exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
    }
  };
  $export.F = 1;
  $export.G = 2;
  $export.S = 4;
  $export.P = 8;
  $export.B = 16;
  $export.W = 32;
  module.exports = $export;
  return module.exports;
});

$__System.registerDynamic("d", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  var $Object = Object;
  module.exports = {
    create: $Object.create,
    getProto: $Object.getPrototypeOf,
    isEnum: {}.propertyIsEnumerable,
    getDesc: $Object.getOwnPropertyDescriptor,
    setDesc: $Object.defineProperty,
    setDescs: $Object.defineProperties,
    getKeys: $Object.keys,
    getNames: $Object.getOwnPropertyNames,
    getSymbols: $Object.getOwnPropertySymbols,
    each: [].forEach
  };
  return module.exports;
});

$__System.registerDynamic("5", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  module.exports = function(it) {
    if (it == undefined)
      throw TypeError("Can't call method on  " + it);
    return it;
  };
  return module.exports;
});

$__System.registerDynamic("3d", ["5"], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  var defined = $__require('5');
  module.exports = function(it) {
    return Object(defined(it));
  };
  return module.exports;
});

$__System.registerDynamic("1f", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  var toString = {}.toString;
  module.exports = function(it) {
    return toString.call(it).slice(8, -1);
  };
  return module.exports;
});

$__System.registerDynamic("b", ["1f"], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  var cof = $__require('1f');
  module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it) {
    return cof(it) == 'String' ? it.split('') : Object(it);
  };
  return module.exports;
});

$__System.registerDynamic("32", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  module.exports = function(exec) {
    try {
      return !!exec();
    } catch (e) {
      return true;
    }
  };
  return module.exports;
});

$__System.registerDynamic("3e", ["d", "3d", "b", "32"], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  var $ = $__require('d'),
      toObject = $__require('3d'),
      IObject = $__require('b');
  module.exports = $__require('32')(function() {
    var a = Object.assign,
        A = {},
        B = {},
        S = Symbol(),
        K = 'abcdefghijklmnopqrst';
    A[S] = 7;
    K.split('').forEach(function(k) {
      B[k] = k;
    });
    return a({}, A)[S] != 7 || Object.keys(a({}, B)).join('') != K;
  }) ? function assign(target, source) {
    var T = toObject(target),
        $$ = arguments,
        $$len = $$.length,
        index = 1,
        getKeys = $.getKeys,
        getSymbols = $.getSymbols,
        isEnum = $.isEnum;
    while ($$len > index) {
      var S = IObject($$[index++]),
          keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S),
          length = keys.length,
          j = 0,
          key;
      while (length > j)
        if (isEnum.call(S, key = keys[j++]))
          T[key] = S[key];
    }
    return T;
  } : Object.assign;
  return module.exports;
});

$__System.registerDynamic("3f", ["13", "3e"], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  var $export = $__require('13');
  $export($export.S + $export.F, 'Object', {assign: $__require('3e')});
  return module.exports;
});

$__System.registerDynamic("21", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  var core = module.exports = {version: '1.2.6'};
  if (typeof __e == 'number')
    __e = core;
  return module.exports;
});

$__System.registerDynamic("40", ["3f", "21"], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  $__require('3f');
  module.exports = $__require('21').Object.assign;
  return module.exports;
});

$__System.registerDynamic("41", ["40"], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  module.exports = {
    "default": $__require('40'),
    __esModule: true
  };
  return module.exports;
});

$__System.register("42", ["41", "3c"], function (_export) {
    var _Object$assign, _Promise, fetchUtils, instance;

    return {
        setters: [function (_) {
            _Object$assign = _["default"];
        }, function (_c) {
            _Promise = _c["default"];
        }],
        execute: function () {
            /* */
            "use strict";

            fetchUtils = function fetchUtils() {

                var TIMEOUT = 10000;

                function processStatus(response) {
                    if (response.status === 200 || response.status === 201 || response.status === 0) {
                        return _Promise.resolve(response);
                    } else {
                        return _Promise.reject(new Error(response.statusText));
                    }
                };

                function parseJson(response) {
                    return response.json();
                };

                function parseHtml(response) {
                    return response.text();
                };

                function getWrappedPromise() {
                    var wrappedPromise = {},
                        promise = new _Promise(function (resolve, reject) {
                        wrappedPromise.resolve = resolve;
                        wrappedPromise.reject = reject;
                    });
                    wrappedPromise.then = promise.then.bind(promise);
                    wrappedPromise["catch"] = promise["catch"].bind(promise);
                    wrappedPromise.promise = promise;
                    return wrappedPromise;
                };

                function invokeFetch() {
                    var wrappedPromise = getWrappedPromise(),
                        args = Array.prototype.slice.call(arguments);
                    fetch.apply(null, args).then(function (response) {
                        wrappedPromise.resolve(response);
                    }, function (error) {
                        wrappedPromise.reject(error);
                    })["catch"](function (error) {
                        wrappedPromise["catch"](error);
                    });
                    return wrappedPromise;
                };

                function getJSON(url) {
                    var fetchParams = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
                    var options = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

                    var defaultHeaders = {
                        "Accept": 'application/json'
                    };

                    fetchParams.headers = _Object$assign({}, defaultHeaders, fetchParams.headers);

                    return getData(url, fetchParams, options).then(parseJson);
                };

                function getHTML(url) {
                    var fetchParams = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
                    var options = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

                    var defaultHeaders = {
                        "Accept": 'text/html'
                    };

                    fetchParams.headers = _Object$assign({}, defaultHeaders, fetchParams.headers);

                    return getData(url, fetchParams, options).then(parseHtml);
                };

                function getData(url, fetchParams, options) {
                    var timeout = options.timeout ? options.timeout : TIMEOUT;
                    url = options.cacheBusting ? url + '?' + new Date().getTime() : url;

                    fetchParams.method = fetchParams.method ? fetchParams.method : 'get';

                    var wrappedFetch = invokeFetch(url, fetchParams);

                    var timeoutId = setTimeout(function () {
                        wrappedFetch.reject(new Error('Load timeout for resource: ' + params.url));
                    }, timeout);

                    return wrappedFetch.promise.then(function (response) {
                        clearTimeout(timeoutId);
                        return response;
                    }).then(processStatus);
                }

                return {
                    getJSON: getJSON,
                    getHTML: getHTML
                };
            };

            instance = fetchUtils();

            _export("default", instance);
        }
    };
});

$__System.register("43", ["42"], function (_export) {
  "use strict";

  return {
    setters: [function (_) {
      var _exportObj = {};

      for (var _key in _) {
        if (_key !== "default") _exportObj[_key] = _[_key];
      }

      _exportObj["default"] = _["default"];

      _export(_exportObj);
    }],
    execute: function () {}
  };
});

$__System.register('1', ['43'], function (_export) {
	'use strict';

	var fetchUtils, main;
	return {
		setters: [function (_) {
			fetchUtils = _['default'];
		}],
		execute: function () {
			main = function main() {

				function init() {
					var pageEl = document.querySelector('.page');

					pageEl.addEventListener('click', onClick);
				}

				function onClick(e) {
					if (e.target.matches('.demo__button')) {
						var demoEl = e.target.closest('.demo');
						if (demoEl) {
							e.preventDefault();
							submitRequest(demoEl);
						}
					}
				}

				function submitRequest(demoEl) {

					var url = demoEl.getAttribute('data-url');
					var type = demoEl.getAttribute('data-type');

					var fetchParams = {
						method: demoEl.getAttribute('data-method')
					};

					var fetchPromise = undefined;

					switch (type) {
						case "JSON":
							fetchPromise = fetchUtils.getJSON(url, fetchParams);
							break;
						case "HTML":
						default:
							fetchPromise = fetchUtils.getHTML(url, fetchParams);
							break;
					}

					fetchPromise.then(function (data) {
						displayResponse(demoEl, data, type);
					});
				}

				function displayResponse(demoEl, data, type) {
					var responseEl = demoEl.querySelector('.js-response');
					var codeEl = responseEl.querySelector('.js-response-data');
					var formattedData = undefined;

					switch (type) {
						case "JSON":
							formattedData = JSON.stringify(data);
							break;
						case "HTML":
						default:
							formattedData = data;
							break;
					}
					codeEl.textContent = formattedData;

					responseEl.classList.remove('is-inactive');
				}

				init();
			};

			_export('default', main());
		}
	};
});

})
(function(factory) {
  factory();
});