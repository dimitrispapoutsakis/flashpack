(() => {
	// webpackBootstrap
	"use strict";
	var __webpack_modules__ = {
		665: (
			__unused_webpack_module,
			__unused_webpack___webpack_exports__,
			__webpack_require__,
		) => {
			// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
			var jsx_runtime = __webpack_require__(848); // CONCATENATED MODULE: ./src/renderer/src/assets/scss/index.scss
			// extracted by css-extract-rspack-plugin

			// EXTERNAL MODULE: ./node_modules/react/index.js
			var react = __webpack_require__(540);
			// EXTERNAL MODULE: ./node_modules/react-dom/client.js
			var client = __webpack_require__(338);
			// EXTERNAL MODULE: ./node_modules/class-variance-authority/dist/index.mjs
			var dist = __webpack_require__(300);
			// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs + 253 modules
			var proxy = __webpack_require__(118);
			// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/motion/utils/is-motion-component.mjs
			var is_motion_component = __webpack_require__(937);
			// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
			var clsx = __webpack_require__(836);
			// EXTERNAL MODULE: ./node_modules/tailwind-merge/dist/bundle-mjs.mjs
			var bundle_mjs = __webpack_require__(544); // CONCATENATED MODULE: ./src/lib/utils.ts

			function cn() {
				for (
					var _len = arguments.length, inputs = new Array(_len), _key = 0;
					_key < _len;
					_key++
				) {
					inputs[_key] = arguments[_key];
				}
				return (0, bundle_mjs /* .twMerge */.QP)(
					(0, clsx /* .clsx */.$)(inputs),
				);
			} // CONCATENATED MODULE: ./src/components/animate-ui/primitives/animate/slot.tsx

			("use client");

			function mergeRefs() {
				for (
					var _len = arguments.length, refs = new Array(_len), _key = 0;
					_key < _len;
					_key++
				) {
					refs[_key] = arguments[_key];
				}
				return (node) => {
					refs.forEach((ref) => {
						if (!ref) return;
						if (typeof ref === "function") {
							ref(node);
						} else {
							ref.current = node;
						}
					});
				};
			}
			function mergeProps(childProps, slotProps) {
				const merged = {
					...childProps,
					...slotProps,
				};
				if (childProps.className || slotProps.className) {
					merged.className = cn(childProps.className, slotProps.className);
				}
				if (childProps.style || slotProps.style) {
					merged.style = {
						...childProps.style,
						...slotProps.style,
					};
				}
				return merged;
			}
			function Slot(param) {
				const { children, ref, ...props } = param;
				const isAlreadyMotion =
					typeof children.type === "object" &&
					children.type !== null &&
					(0, is_motion_component /* .isMotionComponent */.C)(children.type);
				const Base = react.useMemo(
					() =>
						isAlreadyMotion
							? children.type
							: proxy /* .motion.create */.P.create(children.type),
					[isAlreadyMotion, children.type],
				);
				if (!(/*#__PURE__*/ react.isValidElement(children))) return null;
				const { ref: childRef, ...childProps } = children.props;
				const mergedProps = mergeProps(childProps, props);
				return /*#__PURE__*/ (0, jsx_runtime.jsx)(Base, {
					...mergedProps,
					ref: mergeRefs(childRef, ref),
				});
			} // CONCATENATED MODULE: ./src/components/animate-ui/primitives/buttons/button.tsx

			("use client");

			function Button(param) {
				const {
					hoverScale = 1.05,
					tapScale = 0.95,
					asChild = false,
					...props
				} = param;
				const Component = asChild ? Slot : proxy /* .motion.button */.P.button;
				return /*#__PURE__*/ (0, jsx_runtime.jsx)(Component, {
					whileTap: {
						scale: tapScale,
					},
					whileHover: {
						scale: hoverScale,
					},
					...props,
				});
			} // CONCATENATED MODULE: ./src/components/animate-ui/components/buttons/button.tsx

			("use client");

			const buttonVariants = (0, dist /* .cva */.F)(
				"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[box-shadow,_color,_background-color,_border-color,_outline-color,_text-decoration-color,_fill,_stroke] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
				{
					variants: {
						variant: {
							default:
								"bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
							accent:
								"bg-accent text-accent-foreground shadow-xs hover:bg-accent/90",
							destructive:
								"bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
							outline:
								"border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
							secondary:
								"bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
							ghost:
								"hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
							link: "text-primary underline-offset-4 hover:underline",
						},
						size: {
							default: "h-9 px-4 py-2 has-[>svg]:px-3",
							sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
							lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
							icon: "size-9",
							"icon-sm": "size-8 rounded-md",
							"icon-lg": "size-10 rounded-md",
						},
					},
					defaultVariants: {
						variant: "default",
						size: "default",
					},
				},
			);
			function button_Button(param) {
				const { className, variant, size, ...props } = param;
				return /*#__PURE__*/ (0, jsx_runtime.jsx)(Button, {
					className: cn(
						buttonVariants({
							variant,
							size,
							className,
						}),
					),
					...props,
				});
			} // CONCATENATED MODULE: ./src/renderer/src/App.tsx

			const App = () => {
				return /*#__PURE__*/ (0, jsx_runtime.jsx)("div", {
					className:
						"min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center",
					children: /*#__PURE__*/ (0, jsx_runtime.jsxs)("div", {
						className: "bg-white rounded-lg shadow-xl p-8 max-w-md w-full mx-4",
						children: [
							/*#__PURE__*/ (0, jsx_runtime.jsx)("h1", {
								className: "text-3xl font-bold text-gray-800 mb-4 text-center",
								children: "Welcome to Flashpack",
							}),
							/*#__PURE__*/ (0, jsx_runtime.jsx)("p", {
								className: "text-gray-600 text-center mb-6",
								children:
									"Tailwind CSS is now set up and working! \uD83C\uDF89",
							}),
							/*#__PURE__*/ (0, jsx_runtime.jsx)("div", {
								className: "flex justify-center",
								children: /*#__PURE__*/ (0, jsx_runtime.jsx)(button_Button, {
									children: "Click me",
								}),
							}),
						],
					}),
				});
			};
			/* ESM default export */ const src_App = App; // CONCATENATED MODULE: ./src/renderer/src/main.tsx

			client.createRoot(document.getElementById("root")).render(
				/*#__PURE__*/ (0, jsx_runtime.jsx)(react.StrictMode, {
					children: /*#__PURE__*/ (0, jsx_runtime.jsx)(src_App, {}),
				}),
			);
		},
	};
	/************************************************************************/
	// The module cache
	var __webpack_module_cache__ = {};

	// The require function
	function __webpack_require__(moduleId) {
		// Check if module is in cache
		var cachedModule = __webpack_module_cache__[moduleId];
		if (cachedModule !== undefined) {
			return cachedModule.exports;
		}
		// Create a new module (and put it into the cache)
		var module = (__webpack_module_cache__[moduleId] = {
			exports: {},
		});
		// Execute the module function
		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);

		// Return the exports of the module
		return module.exports;
	}

	// expose the modules object (__webpack_modules__)
	__webpack_require__.m = __webpack_modules__;

	/************************************************************************/
	// webpack/runtime/define_property_getters
	(() => {
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
	// webpack/runtime/has_own_property
	(() => {
		__webpack_require__.o = (obj, prop) => Object.hasOwn(obj, prop);
	})();
	// webpack/runtime/on_chunk_loaded
	(() => {
		var deferred = [];
		__webpack_require__.O = (result, chunkIds, fn, priority) => {
			if (chunkIds) {
				priority = priority || 0;
				for (
					var i = deferred.length;
					i > 0 && deferred[i - 1][2] > priority;
					i--
				)
					deferred[i] = deferred[i - 1];
				deferred[i] = [chunkIds, fn, priority];
				return;
			}
			var notFulfilled = Infinity;
			for (var i = 0; i < deferred.length; i++) {
				var [chunkIds, fn, priority] = deferred[i];
				var fulfilled = true;
				for (var j = 0; j < chunkIds.length; j++) {
					if (
						(priority & (1 === 0) || notFulfilled >= priority) &&
						Object.keys(__webpack_require__.O).every((key) =>
							__webpack_require__.O[key](chunkIds[j]),
						)
					) {
						chunkIds.splice(j--, 1);
					} else {
						fulfilled = false;
						if (priority < notFulfilled) notFulfilled = priority;
					}
				}
				if (fulfilled) {
					deferred.splice(i--, 1);
					var r = fn();
					if (r !== undefined) result = r;
				}
			}
			return result;
		};
	})();
	// webpack/runtime/jsonp_chunk_loading
	(() => {
		// object to store loaded and loading chunks
		// undefined = chunk not loaded, null = chunk preloaded/prefetched
		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
		var installedChunks = { 410: 0 };
		__webpack_require__.O.j = (chunkId) => installedChunks[chunkId] === 0;
		// install a JSONP callback for chunk loading
		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
			var [chunkIds, moreModules, runtime] = data;
			// add "moreModules" to the modules object,
			// then flag all "chunkIds" as loaded and fire callback
			var moduleId,
				chunkId,
				i = 0;
			if (chunkIds.some((id) => installedChunks[id] !== 0)) {
				for (moduleId in moreModules) {
					if (__webpack_require__.o(moreModules, moduleId)) {
						__webpack_require__.m[moduleId] = moreModules[moduleId];
					}
				}
				if (runtime) var result = runtime(__webpack_require__);
			}
			if (parentChunkLoadingFunction) parentChunkLoadingFunction(data);
			for (; i < chunkIds.length; i++) {
				chunkId = chunkIds[i];
				if (
					__webpack_require__.o(installedChunks, chunkId) &&
					installedChunks[chunkId]
				) {
					installedChunks[chunkId][0]();
				}
				installedChunks[chunkId] = 0;
			}
			return __webpack_require__.O(result);
		};

		var chunkLoadingGlobal = (self["webpackChunkflashplack"] =
			self["webpackChunkflashplack"] || []);
		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
		chunkLoadingGlobal.push = webpackJsonpCallback.bind(
			null,
			chunkLoadingGlobal.push.bind(chunkLoadingGlobal),
		);
	})();
	/************************************************************************/
	// startup
	// Load entry module and return exports
	// This entry module depends on other loaded chunks and execution need to be delayed
	var __webpack_exports__ = __webpack_require__.O(
		undefined,
		["783", "183"],
		() => __webpack_require__(665),
	);
	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
