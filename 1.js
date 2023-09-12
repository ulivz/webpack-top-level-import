(() => {
  // webpackBootstrap
  "use strict";
  var __webpack_modules__ = {
    395: (module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.a(
        module,
        async (
          __webpack_handle_async_dependencies__,
          __webpack_async_result__
        ) => {
          // 处理了异步模块的加载失败的问题
          try {
            // 将 component 挂在到 __webpack_exports__ 上
            /* harmony export */ __webpack_require__.d(__webpack_exports__, {
              /* harmony export */ w: () => /* binding */ component,
              /* harmony export */
            });
            await 1000;

            function component() {
              const element = document.createElement("div");
              element.innerHTML = "Hello, Webpack!";
              return element;
            }

            __webpack_async_result__();
            // 如果加载失败会返回 Error
          } catch (e) {
            __webpack_async_result__(e);
          }
        },
        1
      );
    },

    138: (
      module,
      __unused_webpack___webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.a(
        module,
        async (
          __webpack_handle_async_dependencies__,
          __webpack_async_result__
        ) => {
          try {
            // 395 则是上述 component  模块
            /* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ =
              __webpack_require__(395);
            var __webpack_async_dependencies__ =
              __webpack_handle_async_dependencies__([
                _component__WEBPACK_IMPORTED_MODULE_0__,
              ]);
            // 获取异步依赖的 exports
            // 这里考虑了一个异步依赖仍然没有返回 Promise 的情况
            _component__WEBPACK_IMPORTED_MODULE_0__ = (
              __webpack_async_dependencies__.then
                ? (await __webpack_async_dependencies__)()
                : __webpack_async_dependencies__
            )[0];

            // 消费异步依赖的导出
            document.body.appendChild(
              (0, _component__WEBPACK_IMPORTED_MODULE_0__ /* .component */.w)()
            );

            __webpack_async_result__();
          } catch (e) {
            __webpack_async_result__(e);
          }
        }
      );
    },
  };
  /************************************************************************/

  // lib/javascript/JavascriptModulesPlugin.js
  // 这一段代码也是按需引入的，
  // The module cache
  var __webpack_module_cache__ = {};

  // The require function
  function __webpack_require__(moduleId) {
    // Check if module is in cache
    // 模块只会被 require 一次，也就是说，一个异步模块及时被多次依赖
    // 其异步行为只会执行一次
    var cachedModule = __webpack_module_cache__[moduleId];
    if (cachedModule !== undefined) {
      return cachedModule.exports;
    }
    // Create a new module (and put it into the cache)
    var module = (__webpack_module_cache__[moduleId] = {
      // no module.id needed
      // no module.loaded needed
      exports: {},
    });

    // Execute the module function
    __webpack_modules__[moduleId](module, module.exports, __webpack_require__);

    // Return the exports of the module
    return module.exports;
  }

  /************************************************************************/
  /* webpack/runtime/async module */
  (() => {
    var webpackQueues =
      typeof Symbol === "function"
        ? Symbol("webpack queues")
        : "__webpack_queues__";
    var webpackExports =
      typeof Symbol === "function"
        ? Symbol("webpack exports")
        : "__webpack_exports__";
    var webpackError =
      typeof Symbol === "function"
        ? Symbol("webpack error")
        : "__webpack_error__";
    var resolveQueue = (queue) => {
      if (queue && queue.d < 1) {
        queue.d = 1;
        queue.forEach((fn) => fn.r--);
        queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
      }
    };
    var wrapDeps = (deps) =>
      deps.map((dep) => {
        if (dep !== null && typeof dep === "object") {
          if (dep[webpackQueues]) return dep;
          if (dep.then) {
            var queue = [];
            queue.d = 0;
            dep.then(
              (r) => {
                obj[webpackExports] = r;
                resolveQueue(queue);
              },
              (e) => {
                obj[webpackError] = e;
                resolveQueue(queue);
              }
            );
            var obj = {};
            obj[webpackQueues] = (fn) => fn(queue);
            return obj;
          }
        }
        var ret = {};
        ret[webpackQueues] = (x) => {};
        ret[webpackExports] = dep;
        return ret;
      });

    // 定义异步模块的入口方法
    __webpack_require__.a = (module, body, hasAwait) => {
      var queue;
      // [d: -1]
      hasAwait && ((queue = []).d = -1);
      var depQueues = new Set(); // Set >= iOS 8
      var exports = module.exports;
      var currentDeps;
      var outerResolve;
      var reject;
      var promise = new Promise((resolve, rej) => {
        reject = rej;
        outerResolve = resolve;
      });
      promise[webpackExports] = exports;
      promise[webpackQueues] = (fn) => (
        queue && fn(queue), depQueues.forEach(fn), promise["catch"]((x) => {})
      );
      module.exports = promise;
      body(
        (deps) => {
          currentDeps = wrapDeps(deps);
          var fn;
          var getResult = () =>
            currentDeps.map((d) => {
              if (d[webpackError]) throw d[webpackError];
              return d[webpackExports];
            });
          var promise = new Promise((resolve) => {
            fn = () => resolve(getResult);
            fn.r = 0;
            var fnQueue = (q) =>
              q !== queue &&
              !depQueues.has(q) &&
              (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn)));
            currentDeps.map((dep) => dep[webpackQueues](fnQueue));
          });
          return fn.r ? promise : getResult();
        },
        (err) => (
          err ? reject((promise[webpackError] = err)) : outerResolve(exports),
          resolveQueue(queue)
        )
      );
      queue && queue.d < 0 && (queue.d = 0);
    };
  })();

  /* webpack/runtime/define property getters */
  (() => {
    // define getter functions for harmony exports
    __webpack_require__.d = (exports, definition) => {
      for (var key in definition) {
        if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
        }
      }
    };
  })();

  /* webpack/runtime/hasOwnProperty shorthand */
  (() => {
    __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
  })();

  /************************************************************************/

  // startup
  // Load entry module and return exports
  // This entry module used 'module' so it can't be inlined
  var __webpack_exports__ = __webpack_require__(138);
})();
//# sourceMappingURL=main.js.map
