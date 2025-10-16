"use strict";
(self["webpackChunkflashplack"] = self["webpackChunkflashplack"] || []).push([
	["183"],
	{
		300: (
			__unused_webpack___webpack_module__,
			__webpack_exports__,
			__webpack_require__,
		) => {
			__webpack_require__.d(__webpack_exports__, {
				F: () => cva,
			});
			/* ESM import */ var clsx__WEBPACK_IMPORTED_MODULE_0__ =
				__webpack_require__(836);
			/**
			 * Copyright 2022 Joe Bell. All rights reserved.
			 *
			 * This file is licensed to you under the Apache License, Version 2.0
			 * (the "License"); you may not use this file except in compliance with the
			 * License. You may obtain a copy of the License at
			 *
			 *   http://www.apache.org/licenses/LICENSE-2.0
			 *
			 * Unless required by applicable law or agreed to in writing, software
			 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
			 * WARRANTIES OR REPRESENTATIONS OF ANY KIND, either express or implied. See the
			 * License for the specific language governing permissions and limitations under
			 * the License.
			 */
			const falsyToString = (value) =>
				typeof value === "boolean" ? `${value}` : value === 0 ? "0" : value;
			const cx = clsx__WEBPACK_IMPORTED_MODULE_0__ /* .clsx */.$;
			const cva = (base, config) => (props) => {
				var _config_compoundVariants;
				if (
					(config === null || config === void 0 ? void 0 : config.variants) ==
					null
				)
					return cx(
						base,
						props === null || props === void 0 ? void 0 : props.class,
						props === null || props === void 0 ? void 0 : props.className,
					);
				const { variants, defaultVariants } = config;
				const getVariantClassNames = Object.keys(variants).map((variant) => {
					const variantProp =
						props === null || props === void 0 ? void 0 : props[variant];
					const defaultVariantProp =
						defaultVariants === null || defaultVariants === void 0
							? void 0
							: defaultVariants[variant];
					if (variantProp === null) return null;
					const variantKey =
						falsyToString(variantProp) || falsyToString(defaultVariantProp);
					return variants[variant][variantKey];
				});
				const propsWithoutUndefined =
					props &&
					Object.entries(props).reduce((acc, param) => {
						const [key, value] = param;
						if (value === undefined) {
							return acc;
						}
						acc[key] = value;
						return acc;
					}, {});
				const getCompoundVariantClassNames =
					config === null || config === void 0
						? void 0
						: (_config_compoundVariants = config.compoundVariants) === null ||
								_config_compoundVariants === void 0
							? void 0
							: _config_compoundVariants.reduce((acc, param) => {
									const {
										class: cvClass,
										className: cvClassName,
										...compoundVariantOptions
									} = param;
									return Object.entries(compoundVariantOptions).every(
										(param) => {
											const [key, value] = param;
											return Array.isArray(value)
												? value.includes(
														{
															...defaultVariants,
															...propsWithoutUndefined,
														}[key],
													)
												: {
														...defaultVariants,
														...propsWithoutUndefined,
													}[key] === value;
										},
									)
										? [...acc, cvClass, cvClassName]
										: acc;
								}, []);
				return cx(
					base,
					getVariantClassNames,
					getCompoundVariantClassNames,
					props === null || props === void 0 ? void 0 : props.class,
					props === null || props === void 0 ? void 0 : props.className,
				);
			};
		},
		836: (
			__unused_webpack___webpack_module__,
			__webpack_exports__,
			__webpack_require__,
		) => {
			__webpack_require__.d(__webpack_exports__, {
				$: () => clsx,
			});
			function r(e) {
				var t,
					f,
					n = "";
				if ("string" == typeof e || "number" == typeof e) n += e;
				else if ("object" == typeof e)
					if (Array.isArray(e)) {
						var o = e.length;
						for (t = 0; t < o; t++)
							e[t] && (f = r(e[t])) && (n && (n += " "), (n += f));
					} else for (f in e) e[f] && (n && (n += " "), (n += f));
				return n;
			}
			function clsx() {
				for (var e, t, f = 0, n = "", o = arguments.length; f < o; f++)
					(e = arguments[f]) && (t = r(e)) && (n && (n += " "), (n += t));
				return n;
			} /* unused ESM default export */
			var __WEBPACK_DEFAULT_EXPORT__ =
				/* unused pure expression or super */ null && clsx;
		},
		937: (
			__unused_webpack___webpack_module__,
			__webpack_exports__,
			__webpack_require__,
		) => {
			__webpack_require__.d(__webpack_exports__, {
				C: () => isMotionComponent,
			});
			/* ESM import */ var _symbol_mjs__WEBPACK_IMPORTED_MODULE_0__ =
				__webpack_require__(628);

			/**
			 * Checks if a component is a `motion` component.
			 */
			function isMotionComponent(component) {
				return (
					component !== null &&
					typeof component === "object" &&
					_symbol_mjs__WEBPACK_IMPORTED_MODULE_0__ /* .motionComponentSymbol */.o in
						component
				);
			}
		},
		628: (
			__unused_webpack___webpack_module__,
			__webpack_exports__,
			__webpack_require__,
		) => {
			__webpack_require__.d(__webpack_exports__, {
				o: () => motionComponentSymbol,
			});
			const motionComponentSymbol = Symbol.for("motionComponentSymbol");
		},
		118: (
			__unused_webpack___webpack_module__,
			__webpack_exports__,
			__webpack_require__,
		) => {
			// EXPORTS
			__webpack_require__.d(__webpack_exports__, {
				P: () => /* binding */ motion,
			});

			// EXTERNAL MODULE: ./node_modules/react/index.js
			var react = __webpack_require__(540); // CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/render/utils/keys-transform.mjs
			/**
			 * Generate a list of every possible transform key.
			 */
			const transformPropOrder = [
				"transformPerspective",
				"x",
				"y",
				"z",
				"translateX",
				"translateY",
				"translateZ",
				"scale",
				"scaleX",
				"scaleY",
				"rotate",
				"rotateX",
				"rotateY",
				"rotateZ",
				"skew",
				"skewX",
				"skewY",
			];
			/**
			 * A quick lookup for transform props.
			 */
			const transformProps = /*@__PURE__*/ (() =>
				new Set(transformPropOrder))(); // CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/render/dom/parse-transform.mjs
			const radToDeg = (rad) => (rad * 180) / Math.PI;
			const parse_transform_rotate = (v) => {
				const angle = radToDeg(Math.atan2(v[1], v[0]));
				return rebaseAngle(angle);
			};
			const matrix2dParsers = {
				x: 4,
				y: 5,
				translateX: 4,
				translateY: 5,
				scaleX: 0,
				scaleY: 3,
				scale: (v) => (Math.abs(v[0]) + Math.abs(v[3])) / 2,
				rotate: parse_transform_rotate,
				rotateZ: parse_transform_rotate,
				skewX: (v) => radToDeg(Math.atan(v[1])),
				skewY: (v) => radToDeg(Math.atan(v[2])),
				skew: (v) => (Math.abs(v[1]) + Math.abs(v[2])) / 2,
			};
			const rebaseAngle = (angle) => {
				angle = angle % 360;
				if (angle < 0) angle += 360;
				return angle;
			};
			const rotateZ = parse_transform_rotate;
			const parse_transform_scaleX = (v) =>
				Math.sqrt(v[0] * v[0] + v[1] * v[1]);
			const parse_transform_scaleY = (v) =>
				Math.sqrt(v[4] * v[4] + v[5] * v[5]);
			const matrix3dParsers = {
				x: 12,
				y: 13,
				z: 14,
				translateX: 12,
				translateY: 13,
				translateZ: 14,
				scaleX: parse_transform_scaleX,
				scaleY: parse_transform_scaleY,
				scale: (v) =>
					(parse_transform_scaleX(v) + parse_transform_scaleY(v)) / 2,
				rotateX: (v) => rebaseAngle(radToDeg(Math.atan2(v[6], v[5]))),
				rotateY: (v) => rebaseAngle(radToDeg(Math.atan2(-v[2], v[0]))),
				rotateZ,
				rotate: rotateZ,
				skewX: (v) => radToDeg(Math.atan(v[4])),
				skewY: (v) => radToDeg(Math.atan(v[1])),
				skew: (v) => (Math.abs(v[1]) + Math.abs(v[4])) / 2,
			};
			function defaultTransformValue(name) {
				return name.includes("scale") ? 1 : 0;
			}
			function parseValueFromTransform(transform, name) {
				if (!transform || transform === "none") {
					return defaultTransformValue(name);
				}
				const matrix3dMatch = transform.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
				let parsers;
				let match;
				if (matrix3dMatch) {
					parsers = matrix3dParsers;
					match = matrix3dMatch;
				} else {
					const matrix2dMatch = transform.match(/^matrix\(([-\d.e\s,]+)\)$/u);
					parsers = matrix2dParsers;
					match = matrix2dMatch;
				}
				if (!match) {
					return defaultTransformValue(name);
				}
				const valueParser = parsers[name];
				const values = match[1].split(",").map(convertTransformToNumber);
				return typeof valueParser === "function"
					? valueParser(values)
					: values[valueParser];
			}
			const readTransformValue = (instance, name) => {
				const { transform = "none" } = getComputedStyle(instance);
				return parseValueFromTransform(transform, name);
			};
			function convertTransformToNumber(value) {
				return parseFloat(value.trim());
			} // CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/animation/utils/is-css-variable.mjs
			const checkStringStartsWith = (token) => (key) =>
				typeof key === "string" && key.startsWith(token);
			const isCSSVariableName = /*@__PURE__*/ checkStringStartsWith("--");
			const startsAsVariableToken =
				/*@__PURE__*/ checkStringStartsWith("var(--");
			const isCSSVariableToken = (value) => {
				const startsWithToken = startsAsVariableToken(value);
				if (!startsWithToken) return false;
				// Ensure any comments are stripped from the value as this can harm performance of the regex.
				return singleCssVariableRegex.test(value.split("/*")[0].trim());
			};
			const singleCssVariableRegex =
				/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu; // CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/projection/geometry/conversion.mjs
			/**
			 * Bounding boxes tend to be defined as top, left, right, bottom. For various operations
			 * it's easier to consider each axis individually. This function returns a bounding box
			 * as a map of single-axis min/max values.
			 */
			function convertBoundingBoxToBox({ top, left, right, bottom }) {
				return {
					x: { min: left, max: right },
					y: { min: top, max: bottom },
				};
			}
			function convertBoxToBoundingBox({ x, y }) {
				return { top: y.min, right: x.max, bottom: y.max, left: x.min };
			}
			/**
			 * Applies a TransformPoint function to a bounding box. TransformPoint is usually a function
			 * provided by Framer to allow measured points to be corrected for device scaling. This is used
			 * when measuring DOM elements and DOM event points.
			 */
			function transformBoxPoints(point, transformPoint) {
				if (!transformPoint) return point;
				const topLeft = transformPoint({ x: point.left, y: point.top });
				const bottomRight = transformPoint({ x: point.right, y: point.bottom });
				return {
					top: topLeft.y,
					left: topLeft.x,
					bottom: bottomRight.y,
					right: bottomRight.x,
				};
			} // CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/utils/mix/number.mjs
			/*
  Value in range from progress

  Given a lower limit and an upper limit, we return the value within
  that range as expressed by progress (usually a number from 0 to 1)

  So progress = 0.5 would change

  from -------- to

  to

  from ---- to

  E.g. from = 10, to = 20, progress = 0.5 => 15

  @param [number]: Lower limit of range
  @param [number]: Upper limit of range
  @param [number]: The progress between lower and upper limits expressed 0-1
  @return [number]: Value as calculated from progress within range (not limited within range)
*/
			const mixNumber = (from, to, progress) => {
				return from + (to - from) * progress;
			}; // CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/projection/utils/has-transform.mjs
			function isIdentityScale(scale) {
				return scale === undefined || scale === 1;
			}
			function hasScale({ scale, scaleX, scaleY }) {
				return (
					!isIdentityScale(scale) ||
					!isIdentityScale(scaleX) ||
					!isIdentityScale(scaleY)
				);
			}
			function has_transform_hasTransform(values) {
				return (
					hasScale(values) ||
					has2DTranslate(values) ||
					values.z ||
					values.rotate ||
					values.rotateX ||
					values.rotateY ||
					values.skewX ||
					values.skewY
				);
			}
			function has2DTranslate(values) {
				return is2DTranslate(values.x) || is2DTranslate(values.y);
			}
			function is2DTranslate(value) {
				return value && value !== "0%";
			} // CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/projection/geometry/delta-apply.mjs

			/**
			 * Scales a point based on a factor and an originPoint
			 */
			function scalePoint(point, scale, originPoint) {
				const distanceFromOrigin = point - originPoint;
				const scaled = scale * distanceFromOrigin;
				return originPoint + scaled;
			}
			/**
			 * Applies a translate/scale delta to a point
			 */
			function applyPointDelta(point, translate, scale, originPoint, boxScale) {
				if (boxScale !== undefined) {
					point = scalePoint(point, boxScale, originPoint);
				}
				return scalePoint(point, scale, originPoint) + translate;
			}
			/**
			 * Applies a translate/scale delta to an axis
			 */
			function applyAxisDelta(
				axis,
				translate = 0,
				scale = 1,
				originPoint,
				boxScale,
			) {
				axis.min = applyPointDelta(
					axis.min,
					translate,
					scale,
					originPoint,
					boxScale,
				);
				axis.max = applyPointDelta(
					axis.max,
					translate,
					scale,
					originPoint,
					boxScale,
				);
			}
			/**
			 * Applies a translate/scale delta to a box
			 */
			function applyBoxDelta(box, { x, y }) {
				applyAxisDelta(box.x, x.translate, x.scale, x.originPoint);
				applyAxisDelta(box.y, y.translate, y.scale, y.originPoint);
			}
			const TREE_SCALE_SNAP_MIN = 0.999999999999;
			const TREE_SCALE_SNAP_MAX = 1.0000000000001;
			/**
			 * Apply a tree of deltas to a box. We do this to calculate the effect of all the transforms
			 * in a tree upon our box before then calculating how to project it into our desired viewport-relative box
			 *
			 * This is the final nested loop within updateLayoutDelta for future refactoring
			 */
			function applyTreeDeltas(
				box,
				treeScale,
				treePath,
				isSharedTransition = false,
			) {
				const treeLength = treePath.length;
				if (!treeLength) return;
				// Reset the treeScale
				treeScale.x = treeScale.y = 1;
				let node;
				let delta;
				for (let i = 0; i < treeLength; i++) {
					node = treePath[i];
					delta = node.projectionDelta;
					/**
					 * TODO: Prefer to remove this, but currently we have motion components with
					 * display: contents in Framer.
					 */
					const { visualElement } = node.options;
					if (
						visualElement &&
						visualElement.props.style &&
						visualElement.props.style.display === "contents"
					) {
						continue;
					}
					if (
						isSharedTransition &&
						node.options.layoutScroll &&
						node.scroll &&
						node !== node.root
					) {
						transformBox(box, {
							x: -node.scroll.offset.x,
							y: -node.scroll.offset.y,
						});
					}
					if (delta) {
						// Incoporate each ancestor's scale into a culmulative treeScale for this component
						treeScale.x *= delta.x.scale;
						treeScale.y *= delta.y.scale;
						// Apply each ancestor's calculated delta into this component's recorded layout box
						applyBoxDelta(box, delta);
					}
					if (
						isSharedTransition &&
						has_transform_hasTransform(node.latestValues)
					) {
						transformBox(box, node.latestValues);
					}
				}
				/**
				 * Snap tree scale back to 1 if it's within a non-perceivable threshold.
				 * This will help reduce useless scales getting rendered.
				 */
				if (
					treeScale.x < TREE_SCALE_SNAP_MAX &&
					treeScale.x > TREE_SCALE_SNAP_MIN
				) {
					treeScale.x = 1.0;
				}
				if (
					treeScale.y < TREE_SCALE_SNAP_MAX &&
					treeScale.y > TREE_SCALE_SNAP_MIN
				) {
					treeScale.y = 1.0;
				}
			}
			function translateAxis(axis, distance) {
				axis.min = axis.min + distance;
				axis.max = axis.max + distance;
			}
			/**
			 * Apply a transform to an axis from the latest resolved motion values.
			 * This function basically acts as a bridge between a flat motion value map
			 * and applyAxisDelta
			 */
			function transformAxis(
				axis,
				axisTranslate,
				axisScale,
				boxScale,
				axisOrigin = 0.5,
			) {
				const originPoint = mixNumber(axis.min, axis.max, axisOrigin);
				// Apply the axis delta to the final axis
				applyAxisDelta(axis, axisTranslate, axisScale, originPoint, boxScale);
			}
			/**
			 * Apply a transform to a box from the latest resolved motion values.
			 */
			function transformBox(box, transform) {
				transformAxis(
					box.x,
					transform.x,
					transform.scaleX,
					transform.scale,
					transform.originX,
				);
				transformAxis(
					box.y,
					transform.y,
					transform.scaleY,
					transform.scale,
					transform.originY,
				);
			} // CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/projection/utils/measure.mjs

			function measureViewportBox(instance, transformPoint) {
				return convertBoundingBoxToBox(
					transformBoxPoints(instance.getBoundingClientRect(), transformPoint),
				);
			}
			function measurePageBox(element, rootProjectionNode, transformPagePoint) {
				const viewportBox = measureViewportBox(element, transformPagePoint);
				const { scroll } = rootProjectionNode;
				if (scroll) {
					translateAxis(viewportBox.x, scroll.offset.x);
					translateAxis(viewportBox.y, scroll.offset.y);
				}
				return viewportBox;
			} // CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/render/utils/keys-position.mjs

			const positionalKeys = new Set([
				"width",
				"height",
				"top",
				"left",
				"right",
				"bottom",
				...transformPropOrder,
			]); // CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/value/types/auto.mjs
			/**
			 * ValueType for "auto"
			 */
			const auto = {
				test: (v) => v === "auto",
				parse: (v) => v,
			}; // CONCATENATED MODULE: ./node_modules/motion-utils/dist/es/clamp.mjs
			const clamp = (min, max, v) => {
				if (v > max) return max;
				if (v < min) return min;
				return v;
			}; // CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/value/types/numbers/index.mjs

			const numbers_number = {
				test: (v) => typeof v === "number",
				parse: parseFloat,
				transform: (v) => v,
			};
			const numbers_alpha = {
				...numbers_number,
				transform: (v) => clamp(0, 1, v),
			};
			const numbers_scale = {
				...numbers_number,
				default: 1,
			}; // CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/value/types/numbers/units.mjs
			/*#__NO_SIDE_EFFECTS__*/
			const createUnitType = (unit) => ({
				test: (v) =>
					typeof v === "string" &&
					v.endsWith(unit) &&
					v.split(" ").length === 1,
				parse: parseFloat,
				transform: (v) => `${v}${unit}`,
			});
			const degrees = /*@__PURE__*/ createUnitType("deg");
			const units_percent = /*@__PURE__*/ createUnitType("%");
			const px = /*@__PURE__*/ createUnitType("px");
			const vh = /*@__PURE__*/ createUnitType("vh");
			const vw = /*@__PURE__*/ createUnitType("vw");
			const progressPercentage = /*@__PURE__*/ (() => ({
				...units_percent,
				parse: (v) => units_percent.parse(v) / 100,
				transform: (v) => units_percent.transform(v * 100),
			}))(); // CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/value/types/test.mjs
			/**
			 * Tests a provided value against a ValueType
			 */
			const testValueType = (v) => (type) => type.test(v); // CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/value/types/dimensions.mjs

			/**
			 * A list of value types commonly used for dimensions
			 */
			const dimensionValueTypes = [
				numbers_number,
				px,
				units_percent,
				degrees,
				vw,
				vh,
				auto,
			];
			/**
			 * Tests a dimensional value against the list of dimension ValueTypes
			 */
			const findDimensionValueType = (v) =>
				dimensionValueTypes.find(testValueType(v)); // CONCATENATED MODULE: ./node_modules/motion-utils/dist/es/errors.mjs

			const warning = () => {};
			const invariant = () => {};
			if (false) {
			} // CONCATENATED MODULE: ./node_modules/motion-utils/dist/es/is-numerical-string.mjs
			/**
			 * Check if value is a numerical string, ie a string that is purely a number eg "100" or "-100.1"
			 */
			const isNumericalString = (v) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(v); // CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/animation/utils/css-variables-conversion.mjs

			/**
			 * Parse Framer's special CSS variable format into a CSS token and a fallback.
			 *
			 * ```
			 * `var(--foo, #fff)` => [`--foo`, '#fff']
			 * ```
			 *
			 * @param current
			 */
			const splitCSSVariableRegex =
				// eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
				/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
			function parseCSSVariable(current) {
				const match = splitCSSVariableRegex.exec(current);
				if (!match) return [,];
				const [, token1, token2, fallback] = match;
				return [`--${token1 ?? token2}`, fallback];
			}
			const maxDepth = 4;
			function getVariableValue(current, element, depth = 1) {
				invariant(
					depth <= maxDepth,
					`Max CSS variable fallback depth detected in property "${current}". This may indicate a circular fallback dependency.`,
					"max-css-var-depth",
				);
				const [token, fallback] = parseCSSVariable(current);
				// No CSS variable detected
				if (!token) return;
				// Attempt to read this CSS variable off the element
				const resolved = window
					.getComputedStyle(element)
					.getPropertyValue(token);
				if (resolved) {
					const trimmed = resolved.trim();
					return isNumericalString(trimmed) ? parseFloat(trimmed) : trimmed;
				}
				return isCSSVariableToken(fallback)
					? getVariableValue(fallback, element, depth + 1)
					: fallback;
			} // CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/animation/keyframes/utils/fill-wildcards.mjs
			function fillWildcards(keyframes) {
				for (let i = 1; i < keyframes.length; i++) {
					keyframes[i] ?? (keyframes[i] = keyframes[i - 1]);
				}
			} // CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/animation/keyframes/utils/unit-conversion.mjs

			const isNumOrPxType = (v) => v === numbers_number || v === px;
			const transformKeys = new Set(["x", "y", "z"]);
			const nonTranslationalTransformKeys = transformPropOrder.filter(
				(key) => !transformKeys.has(key),
			);
			function removeNonTranslationalTransform(visualElement) {
				const removedTransforms = [];
				nonTranslationalTransformKeys.forEach((key) => {
					const value = visualElement.getValue(key);
					if (value !== undefined) {
						removedTransforms.push([key, value.get()]);
						value.set(key.startsWith("scale") ? 1 : 0);
					}
				});
				return removedTransforms;
			}
			const positionalValues = {
				// Dimensions
				width: ({ x }, { paddingLeft = "0", paddingRight = "0" }) =>
					x.max - x.min - parseFloat(paddingLeft) - parseFloat(paddingRight),
				height: ({ y }, { paddingTop = "0", paddingBottom = "0" }) =>
					y.max - y.min - parseFloat(paddingTop) - parseFloat(paddingBottom),
				top: (_bbox, { top }) => parseFloat(top),
				left: (_bbox, { left }) => parseFloat(left),
				bottom: ({ y }, { top }) => parseFloat(top) + (y.max - y.min),
				right: ({ x }, { left }) => parseFloat(left) + (x.max - x.min),
				// Transform
				x: (_bbox, { transform }) => parseValueFromTransform(transform, "x"),
				y: (_bbox, { transform }) => parseValueFromTransform(transform, "y"),
			};
			// Alias translate longform names
			positionalValues.translateX = positionalValues.x;
			positionalValues.translateY = positionalValues.y; // CONCATENATED MODULE: ./node_modules/motion-utils/dist/es/noop.mjs
			/*#__NO_SIDE_EFFECTS__*/
			const noop = (any) => any; // CONCATENATED MODULE: ./node_modules/motion-utils/dist/es/global-config.mjs
			const MotionGlobalConfig = {}; // CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/frameloop/order.mjs
			const stepsOrder = [
				"setup", // Compute
				"read", // Read
				"resolveKeyframes", // Write/Read/Write/Read
				"preUpdate", // Compute
				"update", // Compute
				"preRender", // Compute
				"render", // Write
				"postRender", // Compute
			]; // CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/stats/buffer.mjs
			const statsBuffer = {
				value: null,
				addProjectionMetrics: null,
			}; // CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/frameloop/render-step.mjs

			function createRenderStep(runNextFrame, stepName) {
				/**
				 * We create and reuse two queues, one to queue jobs for the current frame
				 * and one for the next. We reuse to avoid triggering GC after x frames.
				 */
				let thisFrame = new Set();
				let nextFrame = new Set();
				/**
				 * Track whether we're currently processing jobs in this step. This way
				 * we can decide whether to schedule new jobs for this frame or next.
				 */
				let isProcessing = false;
				let flushNextFrame = false;
				/**
				 * A set of processes which were marked keepAlive when scheduled.
				 */
				const toKeepAlive = new WeakSet();
				let latestFrameData = {
					delta: 0.0,
					timestamp: 0.0,
					isProcessing: false,
				};
				let numCalls = 0;
				function triggerCallback(callback) {
					if (toKeepAlive.has(callback)) {
						step.schedule(callback);
						runNextFrame();
					}
					numCalls++;
					callback(latestFrameData);
				}
				const step = {
					/**
					 * Schedule a process to run on the next frame.
					 */
					schedule: (callback, keepAlive = false, immediate = false) => {
						const addToCurrentFrame = immediate && isProcessing;
						const queue = addToCurrentFrame ? thisFrame : nextFrame;
						if (keepAlive) toKeepAlive.add(callback);
						if (!queue.has(callback)) queue.add(callback);
						return callback;
					},
					/**
					 * Cancel the provided callback from running on the next frame.
					 */
					cancel: (callback) => {
						nextFrame.delete(callback);
						toKeepAlive.delete(callback);
					},
					/**
					 * Execute all schedule callbacks.
					 */
					process: (frameData) => {
						latestFrameData = frameData;
						/**
						 * If we're already processing we've probably been triggered by a flushSync
						 * inside an existing process. Instead of executing, mark flushNextFrame
						 * as true and ensure we flush the following frame at the end of this one.
						 */
						if (isProcessing) {
							flushNextFrame = true;
							return;
						}
						isProcessing = true;
						[thisFrame, nextFrame] = [nextFrame, thisFrame];
						// Execute this frame
						thisFrame.forEach(triggerCallback);
						/**
						 * If we're recording stats then
						 */
						if (stepName && statsBuffer.value) {
							statsBuffer.value.frameloop[stepName].push(numCalls);
						}
						numCalls = 0;
						// Clear the frame so no callbacks remain. This is to avoid
						// memory leaks should this render step not run for a while.
						thisFrame.clear();
						isProcessing = false;
						if (flushNextFrame) {
							flushNextFrame = false;
							step.process(frameData);
						}
					},
				};
				return step;
			} // CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/frameloop/batcher.mjs

			const maxElapsed = 40;
			function createRenderBatcher(scheduleNextBatch, allowKeepAlive) {
				let runNextFrame = false;
				let useDefaultElapsed = true;
				const state = {
					delta: 0.0,
					timestamp: 0.0,
					isProcessing: false,
				};
				const flagRunNextFrame = () => (runNextFrame = true);
				const steps = stepsOrder.reduce((acc, key) => {
					acc[key] = createRenderStep(
						flagRunNextFrame,
						allowKeepAlive ? key : undefined,
					);
					return acc;
				}, {});
				const {
					setup,
					read,
					resolveKeyframes,
					preUpdate,
					update,
					preRender,
					render,
					postRender,
				} = steps;
				const processBatch = () => {
					const timestamp = MotionGlobalConfig.useManualTiming
						? state.timestamp
						: performance.now();
					runNextFrame = false;
					if (!MotionGlobalConfig.useManualTiming) {
						state.delta = useDefaultElapsed
							? 1000 / 60
							: Math.max(Math.min(timestamp - state.timestamp, maxElapsed), 1);
					}
					state.timestamp = timestamp;
					state.isProcessing = true;
					// Unrolled render loop for better per-frame performance
					setup.process(state);
					read.process(state);
					resolveKeyframes.process(state);
					preUpdate.process(state);
					update.process(state);
					preRender.process(state);
					render.process(state);
					postRender.process(state);
					state.isProcessing = false;
					if (runNextFrame && allowKeepAlive) {
						useDefaultElapsed = false;
						scheduleNextBatch(processBatch);
					}
				};
				const wake = () => {
					runNextFrame = true;
					useDefaultElapsed = true;
					if (!state.isProcessing) {
						scheduleNextBatch(processBatch);
					}
				};
				const schedule = stepsOrder.reduce((acc, key) => {
					const step = steps[key];
					acc[key] = (process, keepAlive = false, immediate = false) => {
						if (!runNextFrame) wake();
						return step.schedule(process, keepAlive, immediate);
					};
					return acc;
				}, {});
				const cancel = (process) => {
					for (let i = 0; i < stepsOrder.length; i++) {
						steps[stepsOrder[i]].cancel(process);
					}
				};
				return { schedule, cancel, state, steps };
			} // CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/frameloop/frame.mjs

			const {
				schedule: frame_frame,
				cancel: cancelFrame,
				state: frame_frameData,
				steps: frameSteps,
			} = /* @__PURE__ */ createRenderBatcher(
				typeof requestAnimationFrame !== "undefined"
					? requestAnimationFrame
					: noop,
				true,
			); // CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/animation/keyframes/KeyframesResolver.mjs

			const toResolve = new Set();
			let isScheduled = false;
			let anyNeedsMeasurement = false;
			let isForced = false;
			function measureAllKeyframes() {
				if (anyNeedsMeasurement) {
					const resolversToMeasure = Array.from(toResolve).filter(
						(resolver) => resolver.needsMeasurement,
					);
					const elementsToMeasure = new Set(
						resolversToMeasure.map((resolver) => resolver.element),
					);
					const transformsToRestore = new Map();
					/**
					 * Write pass
					 * If we're measuring elements we want to remove bounding box-changing transforms.
					 */
					elementsToMeasure.forEach((element) => {
						const removedTransforms = removeNonTranslationalTransform(element);
						if (!removedTransforms.length) return;
						transformsToRestore.set(element, removedTransforms);
						element.render();
					});
					// Read
					resolversToMeasure.forEach((resolver) =>
						resolver.measureInitialState(),
					);
					// Write
					elementsToMeasure.forEach((element) => {
						element.render();
						const restore = transformsToRestore.get(element);
						if (restore) {
							restore.forEach(([key, value]) => {
								element.getValue(key)?.set(value);
							});
						}
					});
					// Read
					resolversToMeasure.forEach((resolver) => resolver.measureEndState());
					// Write
					resolversToMeasure.forEach((resolver) => {
						if (resolver.suspendedScrollY !== undefined) {
							window.scrollTo(0, resolver.suspendedScrollY);
						}
					});
				}
				anyNeedsMeasurement = false;
				isScheduled = false;
				toResolve.forEach((resolver) => resolver.complete(isForced));
				toResolve.clear();
			}
			function readAllKeyframes() {
				toResolve.forEach((resolver) => {
					resolver.readKeyframes();
					if (resolver.needsMeasurement) {
						anyNeedsMeasurement = true;
					}
				});
			}
			function flushKeyframeResolvers() {
				isForced = true;
				readAllKeyframes();
				measureAllKeyframes();
				isForced = false;
			}
			class KeyframeResolver {
				constructor(
					unresolvedKeyframes,
					onComplete,
					name,
					motionValue,
					element,
					isAsync = false,
				) {
					this.state = "pending";
					/**
					 * Track whether this resolver is async. If it is, it'll be added to the
					 * resolver queue and flushed in the next frame. Resolvers that aren't going
					 * to trigger read/write thrashing don't need to be async.
					 */
					this.isAsync = false;
					/**
					 * Track whether this resolver needs to perform a measurement
					 * to resolve its keyframes.
					 */
					this.needsMeasurement = false;
					this.unresolvedKeyframes = [...unresolvedKeyframes];
					this.onComplete = onComplete;
					this.name = name;
					this.motionValue = motionValue;
					this.element = element;
					this.isAsync = isAsync;
				}
				scheduleResolve() {
					this.state = "scheduled";
					if (this.isAsync) {
						toResolve.add(this);
						if (!isScheduled) {
							isScheduled = true;
							frame_frame.read(readAllKeyframes);
							frame_frame.resolveKeyframes(measureAllKeyframes);
						}
					} else {
						this.readKeyframes();
						this.complete();
					}
				}
				readKeyframes() {
					const { unresolvedKeyframes, name, element, motionValue } = this;
					// If initial keyframe is null we need to read it from the DOM
					if (unresolvedKeyframes[0] === null) {
						const currentValue = motionValue?.get();
						// TODO: This doesn't work if the final keyframe is a wildcard
						const finalKeyframe =
							unresolvedKeyframes[unresolvedKeyframes.length - 1];
						if (currentValue !== undefined) {
							unresolvedKeyframes[0] = currentValue;
						} else if (element && name) {
							const valueAsRead = element.readValue(name, finalKeyframe);
							if (valueAsRead !== undefined && valueAsRead !== null) {
								unresolvedKeyframes[0] = valueAsRead;
							}
						}
						if (unresolvedKeyframes[0] === undefined) {
							unresolvedKeyframes[0] = finalKeyframe;
						}
						if (motionValue && currentValue === undefined) {
							motionValue.set(unresolvedKeyframes[0]);
						}
					}
					fillWildcards(unresolvedKeyframes);
				}
				setFinalKeyframe() {}
				measureInitialState() {}
				renderEndStyles() {}
				measureEndState() {}
				complete(isForcedComplete = false) {
					this.state = "complete";
					this.onComplete(
						this.unresolvedKeyframes,
						this.finalKeyframe,
						isForcedComplete,
					);
					toResolve.delete(this);
				}
				cancel() {
					if (this.state === "scheduled") {
						toResolve.delete(this);
						this.state = "pending";
					}
				}
				resume() {
					if (this.state === "pending") this.scheduleResolve();
				}
			} // CONCATENATED MODULE: ./node_modules/motion-utils/dist/es/is-zero-value-string.mjs
			/**
			 * Check if the value is a zero value string like "0px" or "0%"
			 */
			const isZeroValueString = (v) => /^0[^.\s]+$/u.test(v); // CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/animation/keyframes/utils/is-none.mjs

			function isNone(value) {
				if (typeof value === "number") {
					return value === 0;
				} else if (value !== null) {
					return value === "none" || value === "0" || isZeroValueString(value);
				} else {
					return true;
				}
			} // CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/value/types/utils/sanitize.mjs
			// If this number is a decimal, make it just five decimal places
			// to avoid exponents
			const sanitize = (v) => Math.round(v * 100000) / 100000; // CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/value/types/utils/float-regex.mjs
			const floatRegex = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu; // CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/value/types/utils/is-nullish.mjs
			function isNullish(v) {
				return v == null;
			} // CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/value/types/utils/single-color-regex.mjs
			const singleColorRegex =
				/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu; // CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/value/types/color/utils.mjs

			/**
			 * Returns true if the provided string is a color, ie rgba(0,0,0,0) or #000,
			 * but false if a number or multiple colors
			 */
			const isColorString = (type, testProp) => (v) => {
				return Boolean(
					(typeof v === "string" &&
						singleColorRegex.test(v) &&
						v.startsWith(type)) ||
						(testProp && !isNullish(v) && Object.hasOwn(v, testProp)),
				);
			};
			const splitColor = (aName, bName, cName) => (v) => {
				if (typeof v !== "string") return v;
				const [a, b, c, alpha] = v.match(floatRegex);
				return {
					[aName]: parseFloat(a),
					[bName]: parseFloat(b),
					[cName]: parseFloat(c),
					alpha: alpha !== undefined ? parseFloat(alpha) : 1,
				};
			}; // CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/value/types/color/rgba.mjs

			const clampRgbUnit = (v) => clamp(0, 255, v);
			const rgbUnit = {
				...numbers_number,
				transform: (v) => Math.round(clampRgbUnit(v)),
			};
			const rgba = {
				test: /*@__PURE__*/ isColorString("rgb", "red"),
				parse: /*@__PURE__*/ splitColor("red", "green", "blue"),
				transform: ({ red, green, blue, alpha: alpha$1 = 1 }) =>
					"rgba(" +
					rgbUnit.transform(red) +
					", " +
					rgbUnit.transform(green) +
					", " +
					rgbUnit.transform(blue) +
					", " +
					sanitize(numbers_alpha.transform(alpha$1)) +
					")",
			}; // CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/value/types/color/hex.mjs

			function parseHex(v) {
				let r = "";
				let g = "";
				let b = "";
				let a = "";
				// If we have 6 characters, ie #FF0000
				if (v.length > 5) {
					r = v.substring(1, 3);
					g = v.substring(3, 5);
					b = v.substring(5, 7);
					a = v.substring(7, 9);
					// Or we have 3 characters, ie #F00
				} else {
					r = v.substring(1, 2);
					g = v.substring(2, 3);
					b = v.substring(3, 4);
					a = v.substring(4, 5);
					r += r;
					g += g;
					b += b;
					a += a;
				}
				return {
					red: parseInt(r, 16),
					green: parseInt(g, 16),
					blue: parseInt(b, 16),
					alpha: a ? parseInt(a, 16) / 255 : 1,
				};
			}
			const hex = {
				test: /*@__PURE__*/ isColorString("#"),
				parse: parseHex,
				transform: rgba.transform,
			}; // CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/value/types/color/hsla.mjs

			const hsla = {
				test: /*@__PURE__*/ isColorString("hsl", "hue"),
				parse: /*@__PURE__*/ splitColor("hue", "saturation", "lightness"),
				transform: ({ hue, saturation, lightness, alpha: alpha$1 = 1 }) => {
					return (
						"hsla(" +
						Math.round(hue) +
						", " +
						units_percent.transform(sanitize(saturation)) +
						", " +
						units_percent.transform(sanitize(lightness)) +
						", " +
						sanitize(numbers_alpha.transform(alpha$1)) +
						")"
					);
				},
			}; // CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/value/types/color/index.mjs

			const color_color = {
				test: (v) => rgba.test(v) || hex.test(v) || hsla.test(v),
				parse: (v) => {
					if (rgba.test(v)) {
						return rgba.parse(v);
					} else if (hsla.test(v)) {
						return hsla.parse(v);
					} else {
						return hex.parse(v);
					}
				},
				transform: (v) => {
					return typeof v === "string"
						? v
						: Object.hasOwn(v, "red")
							? rgba.transform(v)
							: hsla.transform(v);
				},
				getAnimatableNone: (v) => {
					const parsed = color_color.parse(v);
					parsed.alpha = 0;
					return color_color.transform(parsed);
				},
			}; // CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/value/types/utils/color-regex.mjs
			const colorRegex =
				/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu; // CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/value/types/complex/index.mjs

			function test(v) {
				return (
					isNaN(v) &&
					typeof v === "string" &&
					(v.match(floatRegex)?.length || 0) +
						(v.match(colorRegex)?.length || 0) >
						0
				);
			}
			const NUMBER_TOKEN = "number";
			const COLOR_TOKEN = "color";
			const VAR_TOKEN = "var";
			const VAR_FUNCTION_TOKEN = "var(";
			const SPLIT_TOKEN = "${}";
			// this regex consists of the `singleCssVariableRegex|rgbHSLValueRegex|digitRegex`
			const complexRegex =
				/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
			function analyseComplexValue(value) {
				const originalValue = value.toString();
				const values = [];
				const indexes = {
					color: [],
					number: [],
					var: [],
				};
				const types = [];
				let i = 0;
				const tokenised = originalValue.replace(complexRegex, (parsedValue) => {
					if (color_color.test(parsedValue)) {
						indexes.color.push(i);
						types.push(COLOR_TOKEN);
						values.push(color_color.parse(parsedValue));
					} else if (parsedValue.startsWith(VAR_FUNCTION_TOKEN)) {
						indexes.var.push(i);
						types.push(VAR_TOKEN);
						values.push(parsedValue);
					} else {
						indexes.number.push(i);
						types.push(NUMBER_TOKEN);
						values.push(parseFloat(parsedValue));
					}
					++i;
					return SPLIT_TOKEN;
				});
				const split = tokenised.split(SPLIT_TOKEN);
				return { values, split, indexes, types };
			}
			function parseComplexValue(v) {
				return analyseComplexValue(v).values;
			}
			function createTransformer(source) {
				const { split, types } = analyseComplexValue(source);
				const numSections = split.length;
				return (v) => {
					let output = "";
					for (let i = 0; i < numSections; i++) {
						output += split[i];
						if (v[i] !== undefined) {
							const type = types[i];
							if (type === NUMBER_TOKEN) {
								output += sanitize(v[i]);
							} else if (type === COLOR_TOKEN) {
								output += color_color.transform(v[i]);
							} else {
								output += v[i];
							}
						}
					}
					return output;
				};
			}
			const convertNumbersToZero = (v) =>
				typeof v === "number"
					? 0
					: color_color.test(v)
						? color_color.getAnimatableNone(v)
						: v;
			function getAnimatableNone(v) {
				const parsed = parseComplexValue(v);
				const transformer = createTransformer(v);
				return transformer(parsed.map(convertNumbersToZero));
			}
			const complex = {
				test,
				parse: parseComplexValue,
				createTransformer,
				getAnimatableNone,
			}; // CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/value/types/complex/filter.mjs

			/**
			 * Properties that should default to 1 or 100%
			 */
			const maxDefaults = new Set([
				"brightness",
				"contrast",
				"saturate",
				"opacity",
			]);
			function applyDefaultFilter(v) {
				const [name, value] = v.slice(0, -1).split("(");
				if (name === "drop-shadow") return v;
				const [number] = value.match(floatRegex) || [];
				if (!number) return v;
				const unit = value.replace(number, "");
				let defaultValue = maxDefaults.has(name) ? 1 : 0;
				if (number !== value) defaultValue *= 100;
				return name + "(" + defaultValue + unit + ")";
			}
			const functionRegex = /\b([a-z-]*)\(.*?\)/gu;
			const filter = {
				...complex,
				getAnimatableNone: (v) => {
					const functions = v.match(functionRegex);
					return functions ? functions.map(applyDefaultFilter).join(" ") : v;
				},
			}; // CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/value/types/int.mjs

			const int_int = {
				...numbers_number,
				transform: Math.round,
			}; // CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/value/types/maps/transform.mjs

			const transformValueTypes = {
				rotate: degrees,
				rotateX: degrees,
				rotateY: degrees,
				rotateZ: degrees,
				scale: numbers_scale,
				scaleX: numbers_scale,
				scaleY: numbers_scale,
				scaleZ: numbers_scale,
				skew: degrees,
				skewX: degrees,
				skewY: degrees,
				distance: px,
				translateX: px,
				translateY: px,
				translateZ: px,
				x: px,
				y: px,
				z: px,
				perspective: px,
				transformPerspective: px,
				opacity: numbers_alpha,
				originX: progressPercentage,
				originY: progressPercentage,
				originZ: px,
			}; // CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/value/types/maps/number.mjs

			const numberValueTypes = {
				// Border props
				borderWidth: px,
				borderTopWidth: px,
				borderRightWidth: px,
				borderBottomWidth: px,
				borderLeftWidth: px,
				borderRadius: px,
				radius: px,
				borderTopLeftRadius: px,
				borderTopRightRadius: px,
				borderBottomRightRadius: px,
				borderBottomLeftRadius: px,
				// Positioning props
				width: px,
				maxWidth: px,
				height: px,
				maxHeight: px,
				top: px,
				right: px,
				bottom: px,
				left: px,
				// Spacing props
				padding: px,
				paddingTop: px,
				paddingRight: px,
				paddingBottom: px,
				paddingLeft: px,
				margin: px,
				marginTop: px,
				marginRight: px,
				marginBottom: px,
				marginLeft: px,
				// Misc
				backgroundPositionX: px,
				backgroundPositionY: px,
				...transformValueTypes,
				zIndex: int_int,
				// SVG
				fillOpacity: numbers_alpha,
				strokeOpacity: numbers_alpha,
				numOctaves: int_int,
			}; // CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/value/types/maps/defaults.mjs

			/**
			 * A map of default value types for common values
			 */
			const defaultValueTypes = {
				...numberValueTypes,
				// Color props
				color: color_color,
				backgroundColor: color_color,
				outlineColor: color_color,
				fill: color_color,
				stroke: color_color,
				// Border props
				borderColor: color_color,
				borderTopColor: color_color,
				borderRightColor: color_color,
				borderBottomColor: color_color,
				borderLeftColor: color_color,
				filter: filter,
				WebkitFilter: filter,
			};
			/**
			 * Gets the default ValueType for the provided value key
			 */
			const getDefaultValueType = (key) => defaultValueTypes[key]; // CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/value/types/utils/animatable-none.mjs

			function animatable_none_getAnimatableNone(key, value) {
				let defaultValueType = getDefaultValueType(key);
				if (defaultValueType !== filter) defaultValueType = complex;
				// If value is not recognised as animatable, ie "none", create an animatable version origin based on the target
				return defaultValueType.getAnimatableNone
					? defaultValueType.getAnimatableNone(value)
					: undefined;
			} // CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/animation/keyframes/utils/make-none-animatable.mjs

			/**
			 * If we encounter keyframes like "none" or "0" and we also have keyframes like
			 * "#fff" or "200px 200px" we want to find a keyframe to serve as a template for
			 * the "none" keyframes. In this case "#fff" or "200px 200px" - then these get turned into
			 * zero equivalents, i.e. "#fff0" or "0px 0px".
			 */
			const invalidTemplates = new Set(["auto", "none", "0"]);
			function makeNoneKeyframesAnimatable(
				unresolvedKeyframes,
				noneKeyframeIndexes,
				name,
			) {
				let i = 0;
				let animatableTemplate;
				while (i < unresolvedKeyframes.length && !animatableTemplate) {
					const keyframe = unresolvedKeyframes[i];
					if (
						typeof keyframe === "string" &&
						!invalidTemplates.has(keyframe) &&
						analyseComplexValue(keyframe).values.length
					) {
						animatableTemplate = unresolvedKeyframes[i];
					}
					i++;
				}
				if (animatableTemplate && name) {
					for (const noneIndex of noneKeyframeIndexes) {
						unresolvedKeyframes[noneIndex] = animatable_none_getAnimatableNone(
							name,
							animatableTemplate,
						);
					}
				}
			} // CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/animation/keyframes/DOMKeyframesResolver.mjs

			class DOMKeyframesResolver extends KeyframeResolver {
				constructor(
					unresolvedKeyframes,
					onComplete,
					name,
					motionValue,
					element,
				) {
					super(
						unresolvedKeyframes,
						onComplete,
						name,
						motionValue,
						element,
						true,
					);
				}
				readKeyframes() {
					const { unresolvedKeyframes, element, name } = this;
					if (!element || !element.current) return;
					super.readKeyframes();
					/**
					 * If any keyframe is a CSS variable, we need to find its value by sampling the element
					 */
					for (let i = 0; i < unresolvedKeyframes.length; i++) {
						let keyframe = unresolvedKeyframes[i];
						if (typeof keyframe === "string") {
							keyframe = keyframe.trim();
							if (isCSSVariableToken(keyframe)) {
								const resolved = getVariableValue(keyframe, element.current);
								if (resolved !== undefined) {
									unresolvedKeyframes[i] = resolved;
								}
								if (i === unresolvedKeyframes.length - 1) {
									this.finalKeyframe = keyframe;
								}
							}
						}
					}
					/**
					 * Resolve "none" values. We do this potentially twice - once before and once after measuring keyframes.
					 * This could be seen as inefficient but it's a trade-off to avoid measurements in more situations, which
					 * have a far bigger performance impact.
					 */
					this.resolveNoneKeyframes();
					/**
					 * Check to see if unit type has changed. If so schedule jobs that will
					 * temporarily set styles to the destination keyframes.
					 * Skip if we have more than two keyframes or this isn't a positional value.
					 * TODO: We can throw if there are multiple keyframes and the value type changes.
					 */
					if (!positionalKeys.has(name) || unresolvedKeyframes.length !== 2) {
						return;
					}
					const [origin, target] = unresolvedKeyframes;
					const originType = findDimensionValueType(origin);
					const targetType = findDimensionValueType(target);
					/**
					 * Either we don't recognise these value types or we can animate between them.
					 */
					if (originType === targetType) return;
					/**
					 * If both values are numbers or pixels, we can animate between them by
					 * converting them to numbers.
					 */
					if (isNumOrPxType(originType) && isNumOrPxType(targetType)) {
						for (let i = 0; i < unresolvedKeyframes.length; i++) {
							const value = unresolvedKeyframes[i];
							if (typeof value === "string") {
								unresolvedKeyframes[i] = parseFloat(value);
							}
						}
					} else if (positionalValues[name]) {
						/**
						 * Else, the only way to resolve this is by measuring the element.
						 */
						this.needsMeasurement = true;
					}
				}
				resolveNoneKeyframes() {
					const { unresolvedKeyframes, name } = this;
					const noneKeyframeIndexes = [];
					for (let i = 0; i < unresolvedKeyframes.length; i++) {
						if (
							unresolvedKeyframes[i] === null ||
							isNone(unresolvedKeyframes[i])
						) {
							noneKeyframeIndexes.push(i);
						}
					}
					if (noneKeyframeIndexes.length) {
						makeNoneKeyframesAnimatable(
							unresolvedKeyframes,
							noneKeyframeIndexes,
							name,
						);
					}
				}
				measureInitialState() {
					const { element, unresolvedKeyframes, name } = this;
					if (!element || !element.current) return;
					if (name === "height") {
						this.suspendedScrollY = window.pageYOffset;
					}
					this.measuredOrigin = positionalValues[name](
						element.measureViewportBox(),
						window.getComputedStyle(element.current),
					);
					unresolvedKeyframes[0] = this.measuredOrigin;
					// Set final key frame to measure after next render
					const measureKeyframe =
						unresolvedKeyframes[unresolvedKeyframes.length - 1];
					if (measureKeyframe !== undefined) {
						element
							.getValue(name, measureKeyframe)
							.jump(measureKeyframe, false);
					}
				}
				measureEndState() {
					const { element, name, unresolvedKeyframes } = this;
					if (!element || !element.current) return;
					const value = element.getValue(name);
					value && value.jump(this.measuredOrigin, false);
					const finalKeyframeIndex = unresolvedKeyframes.length - 1;
					const finalKeyframe = unresolvedKeyframes[finalKeyframeIndex];
					unresolvedKeyframes[finalKeyframeIndex] = positionalValues[name](
						element.measureViewportBox(),
						window.getComputedStyle(element.current),
					);
					if (finalKeyframe !== null && this.finalKeyframe === undefined) {
						this.finalKeyframe = finalKeyframe;
					}
					// If we removed transform values, reapply them before the next render
					if (this.removedTransforms?.length) {
						this.removedTransforms.forEach(
							([unsetTransformName, unsetTransformValue]) => {
								element.getValue(unsetTransformName).set(unsetTransformValue);
							},
						);
					}
					this.resolveNoneKeyframes();
				}
			} // CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/value/utils/is-motion-value.mjs
			const isMotionValue = (value) => Boolean(value && value.getVelocity); // CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/frameloop/sync-time.mjs

			let sync_time_now;
			function clearTime() {
				sync_time_now = undefined;
			}
			/**
			 * An eventloop-synchronous alternative to performance.now().
			 *
			 * Ensures that time measurements remain consistent within a synchronous context.
			 * Usually calling performance.now() twice within the same synchronous context
			 * will return different values which isn't useful for animations when we're usually
			 * trying to sync animations to the same frame.
			 */
			const sync_time_time = {
				now: () => {
					if (sync_time_now === undefined) {
						sync_time_time.set(
							frame_frameData.isProcessing || MotionGlobalConfig.useManualTiming
								? frame_frameData.timestamp
								: performance.now(),
						);
					}
					return sync_time_now;
				},
				set: (newTime) => {
					sync_time_now = newTime;
					queueMicrotask(clearTime);
				},
			}; // CONCATENATED MODULE: ./node_modules/motion-utils/dist/es/array.mjs
			function addUniqueItem(arr, item) {
				if (arr.indexOf(item) === -1) arr.push(item);
			}
			function removeItem(arr, item) {
				const index = arr.indexOf(item);
				if (index > -1) arr.splice(index, 1);
			}
			// Adapted from array-move
			function moveItem([...arr], fromIndex, toIndex) {
				const startIndex = fromIndex < 0 ? arr.length + fromIndex : fromIndex;
				if (startIndex >= 0 && startIndex < arr.length) {
					const endIndex = toIndex < 0 ? arr.length + toIndex : toIndex;
					const [item] = arr.splice(fromIndex, 1);
					arr.splice(endIndex, 0, item);
				}
				return arr;
			} // CONCATENATED MODULE: ./node_modules/motion-utils/dist/es/subscription-manager.mjs

			class SubscriptionManager {
				constructor() {
					this.subscriptions = [];
				}
				add(handler) {
					addUniqueItem(this.subscriptions, handler);
					return () => removeItem(this.subscriptions, handler);
				}
				notify(a, b, c) {
					const numSubscriptions = this.subscriptions.length;
					if (!numSubscriptions) return;
					if (numSubscriptions === 1) {
						/**
						 * If there's only a single handler we can just call it without invoking a loop.
						 */
						this.subscriptions[0](a, b, c);
					} else {
						for (let i = 0; i < numSubscriptions; i++) {
							/**
							 * Check whether the handler exists before firing as it's possible
							 * the subscriptions were modified during this loop running.
							 */
							const handler = this.subscriptions[i];
							handler && handler(a, b, c);
						}
					}
				}
				getSize() {
					return this.subscriptions.length;
				}
				clear() {
					this.subscriptions.length = 0;
				}
			} // CONCATENATED MODULE: ./node_modules/motion-utils/dist/es/velocity-per-second.mjs
			/*
  Convert velocity into velocity per second

  @param [number]: Unit per frame
  @param [number]: Frame duration in ms
*/
			function velocityPerSecond(velocity, frameDuration) {
				return frameDuration ? velocity * (1000 / frameDuration) : 0;
			} // CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/value/index.mjs

			/**
			 * Maximum time between the value of two frames, beyond which we
			 * assume the velocity has since been 0.
			 */
			const MAX_VELOCITY_DELTA = 30;
			const isFloat = (value) => {
				return !isNaN(parseFloat(value));
			};
			const collectMotionValues = {
				current: undefined,
			};
			/**
			 * `MotionValue` is used to track the state and velocity of motion values.
			 *
			 * @public
			 */
			class MotionValue {
				/**
				 * @param init - The initiating value
				 * @param config - Optional configuration options
				 *
				 * -  `transformer`: A function to transform incoming values with.
				 */
				constructor(init, options = {}) {
					/**
					 * Tracks whether this value can output a velocity. Currently this is only true
					 * if the value is numerical, but we might be able to widen the scope here and support
					 * other value types.
					 *
					 * @internal
					 */
					this.canTrackVelocity = null;
					/**
					 * An object containing a SubscriptionManager for each active event.
					 */
					this.events = {};
					this.updateAndNotify = (v) => {
						const currentTime = sync_time_time.now();
						/**
						 * If we're updating the value during another frame or eventloop
						 * than the previous frame, then the we set the previous frame value
						 * to current.
						 */
						if (this.updatedAt !== currentTime) {
							this.setPrevFrameValue();
						}
						this.prev = this.current;
						this.setCurrent(v);
						// Update update subscribers
						if (this.current !== this.prev) {
							this.events.change?.notify(this.current);
							if (this.dependents) {
								for (const dependent of this.dependents) {
									dependent.dirty();
								}
							}
						}
					};
					this.hasAnimated = false;
					this.setCurrent(init);
					this.owner = options.owner;
				}
				setCurrent(current) {
					this.current = current;
					this.updatedAt = sync_time_time.now();
					if (this.canTrackVelocity === null && current !== undefined) {
						this.canTrackVelocity = isFloat(this.current);
					}
				}
				setPrevFrameValue(prevFrameValue = this.current) {
					this.prevFrameValue = prevFrameValue;
					this.prevUpdatedAt = this.updatedAt;
				}
				/**
				 * Adds a function that will be notified when the `MotionValue` is updated.
				 *
				 * It returns a function that, when called, will cancel the subscription.
				 *
				 * When calling `onChange` inside a React component, it should be wrapped with the
				 * `useEffect` hook. As it returns an unsubscribe function, this should be returned
				 * from the `useEffect` function to ensure you don't add duplicate subscribers..
				 *
				 * ```jsx
				 * export const MyComponent = () => {
				 *   const x = useMotionValue(0)
				 *   const y = useMotionValue(0)
				 *   const opacity = useMotionValue(1)
				 *
				 *   useEffect(() => {
				 *     function updateOpacity() {
				 *       const maxXY = Math.max(x.get(), y.get())
				 *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
				 *       opacity.set(newOpacity)
				 *     }
				 *
				 *     const unsubscribeX = x.on("change", updateOpacity)
				 *     const unsubscribeY = y.on("change", updateOpacity)
				 *
				 *     return () => {
				 *       unsubscribeX()
				 *       unsubscribeY()
				 *     }
				 *   }, [])
				 *
				 *   return <motion.div style={{ x }} />
				 * }
				 * ```
				 *
				 * @param subscriber - A function that receives the latest value.
				 * @returns A function that, when called, will cancel this subscription.
				 *
				 * @deprecated
				 */
				onChange(subscription) {
					if (false) {
					}
					return this.on("change", subscription);
				}
				on(eventName, callback) {
					if (!this.events[eventName]) {
						this.events[eventName] = new SubscriptionManager();
					}
					const unsubscribe = this.events[eventName].add(callback);
					if (eventName === "change") {
						return () => {
							unsubscribe();
							/**
							 * If we have no more change listeners by the start
							 * of the next frame, stop active animations.
							 */
							frame_frame.read(() => {
								if (!this.events.change.getSize()) {
									this.stop();
								}
							});
						};
					}
					return unsubscribe;
				}
				clearListeners() {
					for (const eventManagers in this.events) {
						this.events[eventManagers].clear();
					}
				}
				/**
				 * Attaches a passive effect to the `MotionValue`.
				 */
				attach(passiveEffect, stopPassiveEffect) {
					this.passiveEffect = passiveEffect;
					this.stopPassiveEffect = stopPassiveEffect;
				}
				/**
				 * Sets the state of the `MotionValue`.
				 *
				 * @remarks
				 *
				 * ```jsx
				 * const x = useMotionValue(0)
				 * x.set(10)
				 * ```
				 *
				 * @param latest - Latest value to set.
				 * @param render - Whether to notify render subscribers. Defaults to `true`
				 *
				 * @public
				 */
				set(v) {
					if (!this.passiveEffect) {
						this.updateAndNotify(v);
					} else {
						this.passiveEffect(v, this.updateAndNotify);
					}
				}
				setWithVelocity(prev, current, delta) {
					this.set(current);
					this.prev = undefined;
					this.prevFrameValue = prev;
					this.prevUpdatedAt = this.updatedAt - delta;
				}
				/**
				 * Set the state of the `MotionValue`, stopping any active animations,
				 * effects, and resets velocity to `0`.
				 */
				jump(v, endAnimation = true) {
					this.updateAndNotify(v);
					this.prev = v;
					this.prevUpdatedAt = this.prevFrameValue = undefined;
					endAnimation && this.stop();
					if (this.stopPassiveEffect) this.stopPassiveEffect();
				}
				dirty() {
					this.events.change?.notify(this.current);
				}
				addDependent(dependent) {
					if (!this.dependents) {
						this.dependents = new Set();
					}
					this.dependents.add(dependent);
				}
				removeDependent(dependent) {
					if (this.dependents) {
						this.dependents.delete(dependent);
					}
				}
				/**
				 * Returns the latest state of `MotionValue`
				 *
				 * @returns - The latest state of `MotionValue`
				 *
				 * @public
				 */
				get() {
					if (collectMotionValues.current) {
						collectMotionValues.current.push(this);
					}
					return this.current;
				}
				/**
				 * @public
				 */
				getPrevious() {
					return this.prev;
				}
				/**
				 * Returns the latest velocity of `MotionValue`
				 *
				 * @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
				 *
				 * @public
				 */
				getVelocity() {
					const currentTime = sync_time_time.now();
					if (
						!this.canTrackVelocity ||
						this.prevFrameValue === undefined ||
						currentTime - this.updatedAt > MAX_VELOCITY_DELTA
					) {
						return 0;
					}
					const delta = Math.min(
						this.updatedAt - this.prevUpdatedAt,
						MAX_VELOCITY_DELTA,
					);
					// Casts because of parseFloat's poor typing
					return velocityPerSecond(
						parseFloat(this.current) - parseFloat(this.prevFrameValue),
						delta,
					);
				}
				/**
				 * Registers a new animation to control this `MotionValue`. Only one
				 * animation can drive a `MotionValue` at one time.
				 *
				 * ```jsx
				 * value.start()
				 * ```
				 *
				 * @param animation - A function that starts the provided animation
				 */
				start(startAnimation) {
					this.stop();
					return new Promise((resolve) => {
						this.hasAnimated = true;
						this.animation = startAnimation(resolve);
						if (this.events.animationStart) {
							this.events.animationStart.notify();
						}
					}).then(() => {
						if (this.events.animationComplete) {
							this.events.animationComplete.notify();
						}
						this.clearAnimation();
					});
				}
				/**
				 * Stop the currently active animation.
				 *
				 * @public
				 */
				stop() {
					if (this.animation) {
						this.animation.stop();
						if (this.events.animationCancel) {
							this.events.animationCancel.notify();
						}
					}
					this.clearAnimation();
				}
				/**
				 * Returns `true` if this value is currently animating.
				 *
				 * @public
				 */
				isAnimating() {
					return !!this.animation;
				}
				clearAnimation() {
					delete this.animation;
				}
				/**
				 * Destroy and clean up subscribers to this `MotionValue`.
				 *
				 * The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
				 * handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
				 * created a `MotionValue` via the `motionValue` function.
				 *
				 * @public
				 */
				destroy() {
					this.dependents?.clear();
					this.events.destroy?.notify();
					this.clearListeners();
					this.stop();
					if (this.stopPassiveEffect) {
						this.stopPassiveEffect();
					}
				}
			}
			function value_motionValue(init, options) {
				return new MotionValue(init, options);
			} // CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/value/types/utils/find.mjs

			/**
			 * A list of all ValueTypes
			 */
			const valueTypes = [...dimensionValueTypes, color_color, complex];
			/**
			 * Tests a value against the list of ValueTypes
			 */
			const findValueType = (v) => valueTypes.find(testValueType(v)); // CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/frameloop/microtask.mjs

			const { schedule: microtask, cancel: cancelMicrotask } =
				/* @__PURE__ */ createRenderBatcher(queueMicrotask, false); // CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/motion/features/definitions.mjs
			const featureProps = {
				animation: [
					"animate",
					"variants",
					"whileHover",
					"whileTap",
					"exit",
					"whileInView",
					"whileFocus",
					"whileDrag",
				],
				exit: ["exit"],
				drag: ["drag", "dragControls"],
				focus: ["whileFocus"],
				hover: ["whileHover", "onHoverStart", "onHoverEnd"],
				tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
				pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
				inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
				layout: ["layout", "layoutId"],
			};
			const featureDefinitions = {};
			for (const key in featureProps) {
				featureDefinitions[key] = {
					isEnabled: (props) => featureProps[key].some((name) => !!props[name]),
				};
			} // CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/projection/geometry/models.mjs
			const createAxisDelta = () => ({
				translate: 0,
				scale: 1,
				origin: 0,
				originPoint: 0,
			});
			const createDelta = () => ({
				x: createAxisDelta(),
				y: createAxisDelta(),
			});
			const createAxis = () => ({ min: 0, max: 0 });
			const createBox = () => ({
				x: createAxis(),
				y: createAxis(),
			}); // CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/utils/is-browser.mjs
			const isBrowser = typeof window !== "undefined"; // CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/utils/reduced-motion/state.mjs
			// Does this device prefer reduced motion? Returns `null` server-side.
			const prefersReducedMotion = { current: null };
			const hasReducedMotionListener = { current: false }; // CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/utils/reduced-motion/index.mjs

			function initPrefersReducedMotion() {
				hasReducedMotionListener.current = true;
				if (!isBrowser) return;
				if (window.matchMedia) {
					const motionMediaQuery = window.matchMedia(
						"(prefers-reduced-motion)",
					);
					const setReducedMotionPreferences = () =>
						(prefersReducedMotion.current = motionMediaQuery.matches);
					motionMediaQuery.addEventListener(
						"change",
						setReducedMotionPreferences,
					);
					setReducedMotionPreferences();
				} else {
					prefersReducedMotion.current = false;
				}
			} // CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/store.mjs
			const visualElementStore = new WeakMap(); // CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/animation/utils/is-animation-controls.mjs
			function isAnimationControls(v) {
				return (
					v !== null && typeof v === "object" && typeof v.start === "function"
				);
			} // CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/utils/is-variant-label.mjs
			/**
			 * Decides if the supplied variable is variant label
			 */
			function isVariantLabel(v) {
				return typeof v === "string" || Array.isArray(v);
			} // CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/utils/variant-props.mjs
			const variantPriorityOrder = [
				"animate",
				"whileInView",
				"whileFocus",
				"whileHover",
				"whileTap",
				"whileDrag",
				"exit",
			];
			const variantProps = ["initial", ...variantPriorityOrder]; // CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/utils/is-controlling-variants.mjs

			function isControllingVariants(props) {
				return (
					isAnimationControls(props.animate) ||
					variantProps.some((name) => isVariantLabel(props[name]))
				);
			}
			function isVariantNode(props) {
				return Boolean(isControllingVariants(props) || props.variants);
			} // CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/utils/motion-values.mjs

			function updateMotionValuesFromProps(element, next, prev) {
				for (const key in next) {
					const nextValue = next[key];
					const prevValue = prev[key];
					if (isMotionValue(nextValue)) {
						/**
						 * If this is a motion value found in props or style, we want to add it
						 * to our visual element's motion value map.
						 */
						element.addValue(key, nextValue);
					} else if (isMotionValue(prevValue)) {
						/**
						 * If we're swapping from a motion value to a static value,
						 * create a new motion value from that
						 */
						element.addValue(
							key,
							value_motionValue(nextValue, { owner: element }),
						);
					} else if (prevValue !== nextValue) {
						/**
						 * If this is a flat value that has changed, update the motion value
						 * or create one if it doesn't exist. We only want to do this if we're
						 * not handling the value with our animation state.
						 */
						if (element.hasValue(key)) {
							const existingValue = element.getValue(key);
							if (existingValue.liveStyle === true) {
								existingValue.jump(nextValue);
							} else if (!existingValue.hasAnimated) {
								existingValue.set(nextValue);
							}
						} else {
							const latestValue = element.getStaticValue(key);
							element.addValue(
								key,
								value_motionValue(
									latestValue !== undefined ? latestValue : nextValue,
									{ owner: element },
								),
							);
						}
					}
				}
				// Handle removed values
				for (const key in prev) {
					if (next[key] === undefined) element.removeValue(key);
				}
				return next;
			} // CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/utils/resolve-variants.mjs
			function getValueState(visualElement) {
				const state = [{}, {}];
				visualElement?.values.forEach((value, key) => {
					state[0][key] = value.get();
					state[1][key] = value.getVelocity();
				});
				return state;
			}
			function resolveVariantFromProps(
				props,
				definition,
				custom,
				visualElement,
			) {
				/**
				 * If the variant definition is a function, resolve.
				 */
				if (typeof definition === "function") {
					const [current, velocity] = getValueState(visualElement);
					definition = definition(
						custom !== undefined ? custom : props.custom,
						current,
						velocity,
					);
				}
				/**
				 * If the variant definition is a variant label, or
				 * the function returned a variant label, resolve.
				 */
				if (typeof definition === "string") {
					definition = props.variants && props.variants[definition];
				}
				/**
				 * At this point we've resolved both functions and variant labels,
				 * but the resolved variant label might itself have been a function.
				 * If so, resolve. This can only have returned a valid target object.
				 */
				if (typeof definition === "function") {
					const [current, velocity] = getValueState(visualElement);
					definition = definition(
						custom !== undefined ? custom : props.custom,
						current,
						velocity,
					);
				}
				return definition;
			} // CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/VisualElement.mjs

			const propEventHandlers = [
				"AnimationStart",
				"AnimationComplete",
				"Update",
				"BeforeLayoutMeasure",
				"LayoutMeasure",
				"LayoutAnimationStart",
				"LayoutAnimationComplete",
			];
			/**
			 * A VisualElement is an imperative abstraction around UI elements such as
			 * HTMLElement, SVGElement, Three.Object3D etc.
			 */
			class VisualElement {
				/**
				 * This method takes React props and returns found MotionValues. For example, HTML
				 * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
				 *
				 * This isn't an abstract method as it needs calling in the constructor, but it is
				 * intended to be one.
				 */
				scrapeMotionValuesFromProps(_props, _prevProps, _visualElement) {
					return {};
				}
				constructor(
					{
						parent,
						props,
						presenceContext,
						reducedMotionConfig,
						blockInitialAnimation,
						visualState,
					},
					options = {},
				) {
					/**
					 * A reference to the current underlying Instance, e.g. a HTMLElement
					 * or Three.Mesh etc.
					 */
					this.current = null;
					/**
					 * A set containing references to this VisualElement's children.
					 */
					this.children = new Set();
					/**
					 * Determine what role this visual element should take in the variant tree.
					 */
					this.isVariantNode = false;
					this.isControllingVariants = false;
					/**
					 * Decides whether this VisualElement should animate in reduced motion
					 * mode.
					 *
					 * TODO: This is currently set on every individual VisualElement but feels
					 * like it could be set globally.
					 */
					this.shouldReduceMotion = null;
					/**
					 * A map of all motion values attached to this visual element. Motion
					 * values are source of truth for any given animated value. A motion
					 * value might be provided externally by the component via props.
					 */
					this.values = new Map();
					this.KeyframeResolver = KeyframeResolver;
					/**
					 * Cleanup functions for active features (hover/tap/exit etc)
					 */
					this.features = {};
					/**
					 * A map of every subscription that binds the provided or generated
					 * motion values onChange listeners to this visual element.
					 */
					this.valueSubscriptions = new Map();
					/**
					 * A reference to the previously-provided motion values as returned
					 * from scrapeMotionValuesFromProps. We use the keys in here to determine
					 * if any motion values need to be removed after props are updated.
					 */
					this.prevMotionValues = {};
					/**
					 * An object containing a SubscriptionManager for each active event.
					 */
					this.events = {};
					/**
					 * An object containing an unsubscribe function for each prop event subscription.
					 * For example, every "Update" event can have multiple subscribers via
					 * VisualElement.on(), but only one of those can be defined via the onUpdate prop.
					 */
					this.propEventSubscriptions = {};
					this.notifyUpdate = () => this.notify("Update", this.latestValues);
					this.render = () => {
						if (!this.current) return;
						this.triggerBuild();
						this.renderInstance(
							this.current,
							this.renderState,
							this.props.style,
							this.projection,
						);
					};
					this.renderScheduledAt = 0.0;
					this.scheduleRender = () => {
						const now = sync_time_time.now();
						if (this.renderScheduledAt < now) {
							this.renderScheduledAt = now;
							frame_frame.render(this.render, false, true);
						}
					};
					const { latestValues, renderState } = visualState;
					this.latestValues = latestValues;
					this.baseTarget = { ...latestValues };
					this.initialValues = props.initial ? { ...latestValues } : {};
					this.renderState = renderState;
					this.parent = parent;
					this.props = props;
					this.presenceContext = presenceContext;
					this.depth = parent ? parent.depth + 1 : 0;
					this.reducedMotionConfig = reducedMotionConfig;
					this.options = options;
					this.blockInitialAnimation = Boolean(blockInitialAnimation);
					this.isControllingVariants = isControllingVariants(props);
					this.isVariantNode = isVariantNode(props);
					if (this.isVariantNode) {
						this.variantChildren = new Set();
					}
					this.manuallyAnimateOnMount = Boolean(parent && parent.current);
					/**
					 * Any motion values that are provided to the element when created
					 * aren't yet bound to the element, as this would technically be impure.
					 * However, we iterate through the motion values and set them to the
					 * initial values for this component.
					 *
					 * TODO: This is impure and we should look at changing this to run on mount.
					 * Doing so will break some tests but this isn't necessarily a breaking change,
					 * more a reflection of the test.
					 */
					const { willChange, ...initialMotionValues } =
						this.scrapeMotionValuesFromProps(props, {}, this);
					for (const key in initialMotionValues) {
						const value = initialMotionValues[key];
						if (latestValues[key] !== undefined && isMotionValue(value)) {
							value.set(latestValues[key]);
						}
					}
				}
				mount(instance) {
					this.current = instance;
					visualElementStore.set(instance, this);
					if (this.projection && !this.projection.instance) {
						this.projection.mount(instance);
					}
					if (
						this.parent &&
						this.isVariantNode &&
						!this.isControllingVariants
					) {
						this.removeFromVariantTree = this.parent.addVariantChild(this);
					}
					this.values.forEach((value, key) =>
						this.bindToMotionValue(key, value),
					);
					if (!hasReducedMotionListener.current) {
						initPrefersReducedMotion();
					}
					this.shouldReduceMotion =
						this.reducedMotionConfig === "never"
							? false
							: this.reducedMotionConfig === "always"
								? true
								: prefersReducedMotion.current;
					if (false) {
					}
					this.parent?.addChild(this);
					this.update(this.props, this.presenceContext);
				}
				unmount() {
					this.projection && this.projection.unmount();
					cancelFrame(this.notifyUpdate);
					cancelFrame(this.render);
					this.valueSubscriptions.forEach((remove) => remove());
					this.valueSubscriptions.clear();
					this.removeFromVariantTree && this.removeFromVariantTree();
					this.parent?.removeChild(this);
					for (const key in this.events) {
						this.events[key].clear();
					}
					for (const key in this.features) {
						const feature = this.features[key];
						if (feature) {
							feature.unmount();
							feature.isMounted = false;
						}
					}
					this.current = null;
				}
				addChild(child) {
					this.children.add(child);
					this.enteringChildren ?? (this.enteringChildren = new Set());
					this.enteringChildren.add(child);
				}
				removeChild(child) {
					this.children.delete(child);
					this.enteringChildren && this.enteringChildren.delete(child);
				}
				bindToMotionValue(key, value) {
					if (this.valueSubscriptions.has(key)) {
						this.valueSubscriptions.get(key)();
					}
					const valueIsTransform = transformProps.has(key);
					if (valueIsTransform && this.onBindTransform) {
						this.onBindTransform();
					}
					const removeOnChange = value.on("change", (latestValue) => {
						this.latestValues[key] = latestValue;
						this.props.onUpdate && frame_frame.preRender(this.notifyUpdate);
						if (valueIsTransform && this.projection) {
							this.projection.isTransformDirty = true;
						}
						this.scheduleRender();
					});
					let removeSyncCheck;
					if (window.MotionCheckAppearSync) {
						removeSyncCheck = window.MotionCheckAppearSync(this, key, value);
					}
					this.valueSubscriptions.set(key, () => {
						removeOnChange();
						if (removeSyncCheck) removeSyncCheck();
						if (value.owner) value.stop();
					});
				}
				sortNodePosition(other) {
					/**
					 * If these nodes aren't even of the same type we can't compare their depth.
					 */
					if (
						!this.current ||
						!this.sortInstanceNodePosition ||
						this.type !== other.type
					) {
						return 0;
					}
					return this.sortInstanceNodePosition(this.current, other.current);
				}
				updateFeatures() {
					let key = "animation";
					for (key in featureDefinitions) {
						const featureDefinition = featureDefinitions[key];
						if (!featureDefinition) continue;
						const { isEnabled, Feature: FeatureConstructor } =
							featureDefinition;
						/**
						 * If this feature is enabled but not active, make a new instance.
						 */
						if (
							!this.features[key] &&
							FeatureConstructor &&
							isEnabled(this.props)
						) {
							this.features[key] = new FeatureConstructor(this);
						}
						/**
						 * If we have a feature, mount or update it.
						 */
						if (this.features[key]) {
							const feature = this.features[key];
							if (feature.isMounted) {
								feature.update();
							} else {
								feature.mount();
								feature.isMounted = true;
							}
						}
					}
				}
				triggerBuild() {
					this.build(this.renderState, this.latestValues, this.props);
				}
				/**
				 * Measure the current viewport box with or without transforms.
				 * Only measures axis-aligned boxes, rotate and skew must be manually
				 * removed with a re-render to work.
				 */
				measureViewportBox() {
					return this.current
						? this.measureInstanceViewportBox(this.current, this.props)
						: createBox();
				}
				getStaticValue(key) {
					return this.latestValues[key];
				}
				setStaticValue(key, value) {
					this.latestValues[key] = value;
				}
				/**
				 * Update the provided props. Ensure any newly-added motion values are
				 * added to our map, old ones removed, and listeners updated.
				 */
				update(props, presenceContext) {
					if (props.transformTemplate || this.props.transformTemplate) {
						this.scheduleRender();
					}
					this.prevProps = this.props;
					this.props = props;
					this.prevPresenceContext = this.presenceContext;
					this.presenceContext = presenceContext;
					/**
					 * Update prop event handlers ie onAnimationStart, onAnimationComplete
					 */
					for (let i = 0; i < propEventHandlers.length; i++) {
						const key = propEventHandlers[i];
						if (this.propEventSubscriptions[key]) {
							this.propEventSubscriptions[key]();
							delete this.propEventSubscriptions[key];
						}
						const listenerName = "on" + key;
						const listener = props[listenerName];
						if (listener) {
							this.propEventSubscriptions[key] = this.on(key, listener);
						}
					}
					this.prevMotionValues = updateMotionValuesFromProps(
						this,
						this.scrapeMotionValuesFromProps(props, this.prevProps, this),
						this.prevMotionValues,
					);
					if (this.handleChildMotionValue) {
						this.handleChildMotionValue();
					}
				}
				getProps() {
					return this.props;
				}
				/**
				 * Returns the variant definition with a given name.
				 */
				getVariant(name) {
					return this.props.variants ? this.props.variants[name] : undefined;
				}
				/**
				 * Returns the defined default transition on this component.
				 */
				getDefaultTransition() {
					return this.props.transition;
				}
				getTransformPagePoint() {
					return this.props.transformPagePoint;
				}
				getClosestVariantNode() {
					return this.isVariantNode
						? this
						: this.parent
							? this.parent.getClosestVariantNode()
							: undefined;
				}
				/**
				 * Add a child visual element to our set of children.
				 */
				addVariantChild(child) {
					const closestVariantNode = this.getClosestVariantNode();
					if (closestVariantNode) {
						closestVariantNode.variantChildren &&
							closestVariantNode.variantChildren.add(child);
						return () => closestVariantNode.variantChildren.delete(child);
					}
				}
				/**
				 * Add a motion value and bind it to this visual element.
				 */
				addValue(key, value) {
					// Remove existing value if it exists
					const existingValue = this.values.get(key);
					if (value !== existingValue) {
						if (existingValue) this.removeValue(key);
						this.bindToMotionValue(key, value);
						this.values.set(key, value);
						this.latestValues[key] = value.get();
					}
				}
				/**
				 * Remove a motion value and unbind any active subscriptions.
				 */
				removeValue(key) {
					this.values.delete(key);
					const unsubscribe = this.valueSubscriptions.get(key);
					if (unsubscribe) {
						unsubscribe();
						this.valueSubscriptions.delete(key);
					}
					delete this.latestValues[key];
					this.removeValueFromRenderState(key, this.renderState);
				}
				/**
				 * Check whether we have a motion value for this key
				 */
				hasValue(key) {
					return this.values.has(key);
				}
				getValue(key, defaultValue) {
					if (this.props.values && this.props.values[key]) {
						return this.props.values[key];
					}
					let value = this.values.get(key);
					if (value === undefined && defaultValue !== undefined) {
						value = value_motionValue(
							defaultValue === null ? undefined : defaultValue,
							{ owner: this },
						);
						this.addValue(key, value);
					}
					return value;
				}
				/**
				 * If we're trying to animate to a previously unencountered value,
				 * we need to check for it in our state and as a last resort read it
				 * directly from the instance (which might have performance implications).
				 */
				readValue(key, target) {
					let value =
						this.latestValues[key] !== undefined || !this.current
							? this.latestValues[key]
							: (this.getBaseTargetFromProps(this.props, key) ??
								this.readValueFromInstance(this.current, key, this.options));
					if (value !== undefined && value !== null) {
						if (
							typeof value === "string" &&
							(isNumericalString(value) || isZeroValueString(value))
						) {
							// If this is a number read as a string, ie "0" or "200", convert it to a number
							value = parseFloat(value);
						} else if (!findValueType(value) && complex.test(target)) {
							value = animatable_none_getAnimatableNone(key, target);
						}
						this.setBaseTarget(key, isMotionValue(value) ? value.get() : value);
					}
					return isMotionValue(value) ? value.get() : value;
				}
				/**
				 * Set the base target to later animate back to. This is currently
				 * only hydrated on creation and when we first read a value.
				 */
				setBaseTarget(key, value) {
					this.baseTarget[key] = value;
				}
				/**
				 * Find the base target for a value thats been removed from all animation
				 * props.
				 */
				getBaseTarget(key) {
					const { initial } = this.props;
					let valueFromInitial;
					if (typeof initial === "string" || typeof initial === "object") {
						const variant = resolveVariantFromProps(
							this.props,
							initial,
							this.presenceContext?.custom,
						);
						if (variant) {
							valueFromInitial = variant[key];
						}
					}
					/**
					 * If this value still exists in the current initial variant, read that.
					 */
					if (initial && valueFromInitial !== undefined) {
						return valueFromInitial;
					}
					/**
					 * Alternatively, if this VisualElement config has defined a getBaseTarget
					 * so we can read the value from an alternative source, try that.
					 */
					const target = this.getBaseTargetFromProps(this.props, key);
					if (target !== undefined && !isMotionValue(target)) return target;
					/**
					 * If the value was initially defined on initial, but it doesn't any more,
					 * return undefined. Otherwise return the value as initially read from the DOM.
					 */
					return this.initialValues[key] !== undefined &&
						valueFromInitial === undefined
						? undefined
						: this.baseTarget[key];
				}
				on(eventName, callback) {
					if (!this.events[eventName]) {
						this.events[eventName] = new SubscriptionManager();
					}
					return this.events[eventName].add(callback);
				}
				notify(eventName, ...args) {
					if (this.events[eventName]) {
						this.events[eventName].notify(...args);
					}
				}
				scheduleRenderMicrotask() {
					microtask.render(this.render);
				}
			} // CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/dom/DOMVisualElement.mjs

			class DOMVisualElement extends VisualElement {
				constructor() {
					super(...arguments);
					this.KeyframeResolver = DOMKeyframesResolver;
				}
				sortInstanceNodePosition(a, b) {
					/**
					 * compareDocumentPosition returns a bitmask, by using the bitwise &
					 * we're returning true if 2 in that bitmask is set to true. 2 is set
					 * to true if b preceeds a.
					 */
					return a.compareDocumentPosition(b) & 2 ? 1 : -1;
				}
				getBaseTargetFromProps(props, key) {
					return props.style ? props.style[key] : undefined;
				}
				removeValueFromRenderState(key, { vars, style }) {
					delete vars[key];
					delete style[key];
				}
				handleChildMotionValue() {
					if (this.childSubscription) {
						this.childSubscription();
						delete this.childSubscription;
					}
					const { children } = this.props;
					if (isMotionValue(children)) {
						this.childSubscription = children.on("change", (latest) => {
							if (this.current) {
								this.current.textContent = `${latest}`;
							}
						});
					}
				}
			} // CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/value/types/utils/get-as-type.mjs
			/**
			 * Provided a value and a ValueType, returns the value as that value type.
			 */
			const getValueAsType = (value, type) => {
				return type && typeof value === "number"
					? type.transform(value)
					: value;
			}; // CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/html/utils/build-transform.mjs

			const translateAlias = {
				x: "translateX",
				y: "translateY",
				z: "translateZ",
				transformPerspective: "perspective",
			};
			const numTransforms = transformPropOrder.length;
			/**
			 * Build a CSS transform style from individual x/y/scale etc properties.
			 *
			 * This outputs with a default order of transforms/scales/rotations, this can be customised by
			 * providing a transformTemplate function.
			 */
			function buildTransform(latestValues, transform, transformTemplate) {
				// The transform string we're going to build into.
				let transformString = "";
				let transformIsDefault = true;
				/**
				 * Loop over all possible transforms in order, adding the ones that
				 * are present to the transform string.
				 */
				for (let i = 0; i < numTransforms; i++) {
					const key = transformPropOrder[i];
					const value = latestValues[key];
					if (value === undefined) continue;
					let valueIsDefault = true;
					if (typeof value === "number") {
						valueIsDefault = value === (key.startsWith("scale") ? 1 : 0);
					} else {
						valueIsDefault = parseFloat(value) === 0;
					}
					if (!valueIsDefault || transformTemplate) {
						const valueAsType = getValueAsType(value, numberValueTypes[key]);
						if (!valueIsDefault) {
							transformIsDefault = false;
							const transformName = translateAlias[key] || key;
							transformString += `${transformName}(${valueAsType}) `;
						}
						if (transformTemplate) {
							transform[key] = valueAsType;
						}
					}
				}
				transformString = transformString.trim();
				// If we have a custom `transform` template, pass our transform values and
				// generated transformString to that before returning
				if (transformTemplate) {
					transformString = transformTemplate(
						transform,
						transformIsDefault ? "" : transformString,
					);
				} else if (transformIsDefault) {
					transformString = "none";
				}
				return transformString;
			} // CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/html/utils/build-styles.mjs

			function buildHTMLStyles(state, latestValues, transformTemplate) {
				const { style, vars, transformOrigin } = state;
				// Track whether we encounter any transform or transformOrigin values.
				let hasTransform = false;
				let hasTransformOrigin = false;
				/**
				 * Loop over all our latest animated values and decide whether to handle them
				 * as a style or CSS variable.
				 *
				 * Transforms and transform origins are kept separately for further processing.
				 */
				for (const key in latestValues) {
					const value = latestValues[key];
					if (transformProps.has(key)) {
						// If this is a transform, flag to enable further transform processing
						hasTransform = true;
					} else if (isCSSVariableName(key)) {
						vars[key] = value;
					} else {
						// Convert the value to its default value type, ie 0 -> "0px"
						const valueAsType = getValueAsType(value, numberValueTypes[key]);
						if (key.startsWith("origin")) {
							// If this is a transform origin, flag and enable further transform-origin processing
							hasTransformOrigin = true;
							transformOrigin[key] = valueAsType;
						} else {
							style[key] = valueAsType;
						}
					}
				}
				if (!latestValues.transform) {
					if (hasTransform || transformTemplate) {
						style.transform = buildTransform(
							latestValues,
							state.transform,
							transformTemplate,
						);
					} else if (style.transform) {
						/**
						 * If we have previously created a transform but currently don't have any,
						 * reset transform style to none.
						 */
						style.transform = "none";
					}
				}
				/**
				 * Build a transformOrigin style. Uses the same defaults as the browser for
				 * undefined origins.
				 */
				if (hasTransformOrigin) {
					const {
						originX = "50%",
						originY = "50%",
						originZ = 0,
					} = transformOrigin;
					style.transformOrigin = `${originX} ${originY} ${originZ}`;
				}
			} // CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/html/utils/render.mjs
			function renderHTML(element, { style, vars }, styleProp, projection) {
				const elementStyle = element.style;
				let key;
				for (key in style) {
					// CSSStyleDeclaration has [index: number]: string; in the types, so we use that as key type.
					elementStyle[key] = style[key];
				}
				// Write projection styles directly to element style
				projection?.applyProjectionStyles(elementStyle, styleProp);
				for (key in vars) {
					// Loop over any CSS variables and assign those.
					// They can only be assigned using `setProperty`.
					elementStyle.setProperty(key, vars[key]);
				}
			} // CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/projection/styles/scale-correction.mjs

			const scaleCorrectors = {};
			function addScaleCorrector(correctors) {
				for (const key in correctors) {
					scaleCorrectors[key] = correctors[key];
					if (isCSSVariableName(key)) {
						scaleCorrectors[key].isCSSVariable = true;
					}
				}
			} // CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/motion/utils/is-forced-motion-value.mjs

			function isForcedMotionValue(key, { layout, layoutId }) {
				return (
					transformProps.has(key) ||
					key.startsWith("origin") ||
					((layout || layoutId !== undefined) &&
						(!!scaleCorrectors[key] || key === "opacity"))
				);
			} // CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/html/utils/scrape-motion-values.mjs

			function scrape_motion_values_scrapeMotionValuesFromProps(
				props,
				prevProps,
				visualElement,
			) {
				const { style } = props;
				const newValues = {};
				for (const key in style) {
					if (
						isMotionValue(style[key]) ||
						(prevProps.style && isMotionValue(prevProps.style[key])) ||
						isForcedMotionValue(key, props) ||
						visualElement?.getValue(key)?.liveStyle !== undefined
					) {
						newValues[key] = style[key];
					}
				}
				return newValues;
			} // CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/html/HTMLVisualElement.mjs

			function HTMLVisualElement_getComputedStyle(element) {
				return window.getComputedStyle(element);
			}
			class HTMLVisualElement extends DOMVisualElement {
				constructor() {
					super(...arguments);
					this.type = "html";
					this.renderInstance = renderHTML;
				}
				readValueFromInstance(instance, key) {
					if (transformProps.has(key)) {
						return this.projection?.isProjecting
							? defaultTransformValue(key)
							: readTransformValue(instance, key);
					} else {
						const computedStyle = HTMLVisualElement_getComputedStyle(instance);
						const value =
							(isCSSVariableName(key)
								? computedStyle.getPropertyValue(key)
								: computedStyle[key]) || 0;
						return typeof value === "string" ? value.trim() : value;
					}
				}
				measureInstanceViewportBox(instance, { transformPagePoint }) {
					return measureViewportBox(instance, transformPagePoint);
				}
				build(renderState, latestValues, props) {
					buildHTMLStyles(renderState, latestValues, props.transformTemplate);
				}
				scrapeMotionValuesFromProps(props, prevProps, visualElement) {
					return scrape_motion_values_scrapeMotionValuesFromProps(
						props,
						prevProps,
						visualElement,
					);
				}
			} // CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/dom/utils/camel-to-dash.mjs
			/**
			 * Convert camelCase to dash-case properties.
			 */
			const camelToDash = (str) =>
				str.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(); // CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/svg/utils/path.mjs

			const dashKeys = {
				offset: "stroke-dashoffset",
				array: "stroke-dasharray",
			};
			const camelKeys = {
				offset: "strokeDashoffset",
				array: "strokeDasharray",
			};
			/**
			 * Build SVG path properties. Uses the path's measured length to convert
			 * our custom pathLength, pathSpacing and pathOffset into stroke-dashoffset
			 * and stroke-dasharray attributes.
			 *
			 * This function is mutative to reduce per-frame GC.
			 */
			function buildSVGPath(
				attrs,
				length,
				spacing = 1,
				offset = 0,
				useDashCase = true,
			) {
				// Normalise path length by setting SVG attribute pathLength to 1
				attrs.pathLength = 1;
				// We use dash case when setting attributes directly to the DOM node and camel case
				// when defining props on a React component.
				const keys = useDashCase ? dashKeys : camelKeys;
				// Build the dash offset
				attrs[keys.offset] = px.transform(-offset);
				// Build the dash array
				const pathLength = px.transform(length);
				const pathSpacing = px.transform(spacing);
				attrs[keys.array] = `${pathLength} ${pathSpacing}`;
			} // CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/svg/utils/build-attrs.mjs

			/**
			 * Build SVG visual attributes, like cx and style.transform
			 */
			function buildSVGAttrs(
				state,
				{
					attrX,
					attrY,
					attrScale,
					pathLength,
					pathSpacing = 1,
					pathOffset = 0,
					// This is object creation, which we try to avoid per-frame.
					...latest
				},
				isSVGTag,
				transformTemplate,
				styleProp,
			) {
				buildHTMLStyles(state, latest, transformTemplate);
				/**
				 * For svg tags we just want to make sure viewBox is animatable and treat all the styles
				 * as normal HTML tags.
				 */
				if (isSVGTag) {
					if (state.style.viewBox) {
						state.attrs.viewBox = state.style.viewBox;
					}
					return;
				}
				state.attrs = state.style;
				state.style = {};
				const { attrs, style } = state;
				/**
				 * However, we apply transforms as CSS transforms.
				 * So if we detect a transform, transformOrigin we take it from attrs and copy it into style.
				 */
				if (attrs.transform) {
					style.transform = attrs.transform;
					delete attrs.transform;
				}
				if (style.transform || attrs.transformOrigin) {
					style.transformOrigin = attrs.transformOrigin ?? "50% 50%";
					delete attrs.transformOrigin;
				}
				if (style.transform) {
					/**
					 * SVG's element transform-origin uses its own median as a reference.
					 * Therefore, transformBox becomes a fill-box
					 */
					style.transformBox = styleProp?.transformBox ?? "fill-box";
					delete attrs.transformBox;
				}
				// Render attrX/attrY/attrScale as attributes
				if (attrX !== undefined) attrs.x = attrX;
				if (attrY !== undefined) attrs.y = attrY;
				if (attrScale !== undefined) attrs.scale = attrScale;
				// Build SVG path if one has been defined
				if (pathLength !== undefined) {
					buildSVGPath(attrs, pathLength, pathSpacing, pathOffset, false);
				}
			} // CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/svg/utils/camel-case-attrs.mjs
			/**
			 * A set of attribute names that are always read/written as camel case.
			 */
			const camelCaseAttributes = new Set([
				"baseFrequency",
				"diffuseConstant",
				"kernelMatrix",
				"kernelUnitLength",
				"keySplines",
				"keyTimes",
				"limitingConeAngle",
				"markerHeight",
				"markerWidth",
				"numOctaves",
				"targetX",
				"targetY",
				"surfaceScale",
				"specularConstant",
				"specularExponent",
				"stdDeviation",
				"tableValues",
				"viewBox",
				"gradientTransform",
				"pathLength",
				"startOffset",
				"textLength",
				"lengthAdjust",
			]); // CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/svg/utils/is-svg-tag.mjs
			const is_svg_tag_isSVGTag = (tag) =>
				typeof tag === "string" && tag.toLowerCase() === "svg"; // CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/svg/utils/render.mjs

			function renderSVG(element, renderState, _styleProp, projection) {
				renderHTML(element, renderState, undefined, projection);
				for (const key in renderState.attrs) {
					element.setAttribute(
						!camelCaseAttributes.has(key) ? camelToDash(key) : key,
						renderState.attrs[key],
					);
				}
			} // CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/svg/utils/scrape-motion-values.mjs

			function utils_scrape_motion_values_scrapeMotionValuesFromProps(
				props,
				prevProps,
				visualElement,
			) {
				const newValues = scrape_motion_values_scrapeMotionValuesFromProps(
					props,
					prevProps,
					visualElement,
				);
				for (const key in props) {
					if (isMotionValue(props[key]) || isMotionValue(prevProps[key])) {
						const targetKey =
							transformPropOrder.indexOf(key) !== -1
								? "attr" + key.charAt(0).toUpperCase() + key.substring(1)
								: key;
						newValues[targetKey] = props[key];
					}
				}
				return newValues;
			} // CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/svg/SVGVisualElement.mjs

			class SVGVisualElement extends DOMVisualElement {
				constructor() {
					super(...arguments);
					this.type = "svg";
					this.isSVGTag = false;
					this.measureInstanceViewportBox = createBox;
				}
				getBaseTargetFromProps(props, key) {
					return props[key];
				}
				readValueFromInstance(instance, key) {
					if (transformProps.has(key)) {
						const defaultType = getDefaultValueType(key);
						return defaultType ? defaultType.default || 0 : 0;
					}
					key = !camelCaseAttributes.has(key) ? camelToDash(key) : key;
					return instance.getAttribute(key);
				}
				scrapeMotionValuesFromProps(props, prevProps, visualElement) {
					return utils_scrape_motion_values_scrapeMotionValuesFromProps(
						props,
						prevProps,
						visualElement,
					);
				}
				build(renderState, latestValues, props) {
					buildSVGAttrs(
						renderState,
						latestValues,
						this.isSVGTag,
						props.transformTemplate,
						props.style,
					);
				}
				renderInstance(instance, renderState, styleProp, projection) {
					renderSVG(instance, renderState, styleProp, projection);
				}
				mount(instance) {
					this.isSVGTag = is_svg_tag_isSVGTag(instance.tagName);
					super.mount(instance);
				}
			} // CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/svg/lowercase-elements.mjs
			/**
			 * We keep these listed separately as we use the lowercase tag names as part
			 * of the runtime bundle to detect SVG components
			 */
			const lowercaseSVGElements = [
				"animate",
				"circle",
				"defs",
				"desc",
				"ellipse",
				"g",
				"image",
				"line",
				"filter",
				"marker",
				"mask",
				"metadata",
				"path",
				"pattern",
				"polygon",
				"polyline",
				"rect",
				"stop",
				"switch",
				"symbol",
				"svg",
				"text",
				"tspan",
				"use",
				"view",
			]; // CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/dom/utils/is-svg-component.mjs

			function isSVGComponent(Component) {
				if (
					/**
					 * If it's not a string, it's a custom React component. Currently we only support
					 * HTML custom React components.
					 */
					typeof Component !== "string" ||
					/**
					 * If it contains a dash, the element is a custom HTML webcomponent.
					 */
					Component.includes("-")
				) {
					return false;
				} else if (
					/**
					 * If it's in our list of lowercase SVG tags, it's an SVG component
					 */
					lowercaseSVGElements.indexOf(Component) > -1 ||
					/**
					 * If it contains a capital letter, it's an SVG component
					 */
					/[A-Z]/u.test(Component)
				) {
					return true;
				}
				return false;
			} // CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/dom/create-visual-element.mjs

			const createDomVisualElement = (Component, options) => {
				return isSVGComponent(Component)
					? new SVGVisualElement(options)
					: new HTMLVisualElement(options, {
							allowProjection: Component !== react.Fragment,
						});
			};

			// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
			var jsx_runtime = __webpack_require__(848); // CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/context/LayoutGroupContext.mjs
			("use client");

			const LayoutGroupContext = (0, react.createContext)({}); // CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/context/LazyContext.mjs

			("use client");

			const LazyContext = (0, react.createContext)({ strict: false }); // CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/context/MotionConfigContext.mjs

			("use client");

			/**
			 * @public
			 */
			const MotionConfigContext = (0, react.createContext)({
				transformPagePoint: (p) => p,
				isStatic: false,
				reducedMotion: "never",
			}); // CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/context/MotionContext/index.mjs

			("use client");

			const MotionContext = /* @__PURE__ */ (0, react.createContext)({}); // CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/context/MotionContext/utils.mjs

			function getCurrentTreeVariants(props, context) {
				if (isControllingVariants(props)) {
					const { initial, animate } = props;
					return {
						initial:
							initial === false || isVariantLabel(initial)
								? initial
								: undefined,
						animate: isVariantLabel(animate) ? animate : undefined,
					};
				}
				return props.inherit !== false ? context : {};
			} // CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/context/MotionContext/create.mjs

			("use client");

			function useCreateMotionContext(props) {
				const { initial, animate } = getCurrentTreeVariants(
					props,
					(0, react.useContext)(MotionContext),
				);
				return (0, react.useMemo)(
					() => ({ initial, animate }),
					[
						variantLabelsAsDependency(initial),
						variantLabelsAsDependency(animate),
					],
				);
			}
			function variantLabelsAsDependency(prop) {
				return Array.isArray(prop) ? prop.join(" ") : prop;
			} // CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/html/utils/create-render-state.mjs
			const createHtmlRenderState = () => ({
				style: {},
				transform: {},
				transformOrigin: {},
				vars: {},
			}); // CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/html/use-props.mjs

			("use client");

			function copyRawValuesOnly(target, source, props) {
				for (const key in source) {
					if (!isMotionValue(source[key]) && !isForcedMotionValue(key, props)) {
						target[key] = source[key];
					}
				}
			}
			function useInitialMotionValues({ transformTemplate }, visualState) {
				return (0, react.useMemo)(() => {
					const state = createHtmlRenderState();
					buildHTMLStyles(state, visualState, transformTemplate);
					return Object.assign({}, state.vars, state.style);
				}, [visualState]);
			}
			function useStyle(props, visualState) {
				const styleProp = props.style || {};
				const style = {};
				/**
				 * Copy non-Motion Values straight into style
				 */
				copyRawValuesOnly(style, styleProp, props);
				Object.assign(style, useInitialMotionValues(props, visualState));
				return style;
			}
			function useHTMLProps(props, visualState) {
				// The `any` isn't ideal but it is the type of createElement props argument
				const htmlProps = {};
				const style = useStyle(props, visualState);
				if (props.drag && props.dragListener !== false) {
					// Disable the ghost element when a user drags
					htmlProps.draggable = false;
					// Disable text selection
					style.userSelect =
						style.WebkitUserSelect =
						style.WebkitTouchCallout =
							"none";
					// Disable scrolling on the draggable direction
					style.touchAction =
						props.drag === true
							? "none"
							: `pan-${props.drag === "x" ? "y" : "x"}`;
				}
				if (
					props.tabIndex === undefined &&
					(props.onTap || props.onTapStart || props.whileTap)
				) {
					htmlProps.tabIndex = 0;
				}
				htmlProps.style = style;
				return htmlProps;
			} // CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/svg/utils/create-render-state.mjs

			const createSvgRenderState = () => ({
				...createHtmlRenderState(),
				attrs: {},
			}); // CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/svg/use-props.mjs

			("use client");

			function useSVGProps(props, visualState, _isStatic, Component) {
				const visualProps = (0, react.useMemo)(() => {
					const state = createSvgRenderState();
					buildSVGAttrs(
						state,
						visualState,
						is_svg_tag_isSVGTag(Component),
						props.transformTemplate,
						props.style,
					);
					return {
						...state.attrs,
						style: { ...state.style },
					};
				}, [visualState]);
				if (props.style) {
					const rawStyles = {};
					copyRawValuesOnly(rawStyles, props.style, props);
					visualProps.style = { ...rawStyles, ...visualProps.style };
				}
				return visualProps;
			} // CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/motion/utils/valid-prop.mjs
			/**
			 * A list of all valid MotionProps.
			 *
			 * @privateRemarks
			 * This doesn't throw if a `MotionProp` name is missing - it should.
			 */
			const validMotionProps = new Set([
				"animate",
				"exit",
				"variants",
				"initial",
				"style",
				"values",
				"variants",
				"transition",
				"transformTemplate",
				"custom",
				"inherit",
				"onBeforeLayoutMeasure",
				"onAnimationStart",
				"onAnimationComplete",
				"onUpdate",
				"onDragStart",
				"onDrag",
				"onDragEnd",
				"onMeasureDragConstraints",
				"onDirectionLock",
				"onDragTransitionEnd",
				"_dragX",
				"_dragY",
				"onHoverStart",
				"onHoverEnd",
				"onViewportEnter",
				"onViewportLeave",
				"globalTapTarget",
				"ignoreStrict",
				"viewport",
			]);
			/**
			 * Check whether a prop name is a valid `MotionProp` key.
			 *
			 * @param key - Name of the property to check
			 * @returns `true` is key is a valid `MotionProp`.
			 *
			 * @public
			 */
			function isValidMotionProp(key) {
				return (
					key.startsWith("while") ||
					(key.startsWith("drag") && key !== "draggable") ||
					key.startsWith("layout") ||
					key.startsWith("onTap") ||
					key.startsWith("onPan") ||
					key.startsWith("onLayout") ||
					validMotionProps.has(key)
				);
			} // CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/dom/utils/filter-props.mjs

			let shouldForward = (key) => !isValidMotionProp(key);
			function loadExternalIsValidProp(isValidProp) {
				if (typeof isValidProp !== "function") return;
				// Explicitly filter our events
				shouldForward = (key) =>
					key.startsWith("on") ? !isValidMotionProp(key) : isValidProp(key);
			}
			/**
			 * Emotion and Styled Components both allow users to pass through arbitrary props to their components
			 * to dynamically generate CSS. They both use the `@emotion/is-prop-valid` package to determine which
			 * of these should be passed to the underlying DOM node.
			 *
			 * However, when styling a Motion component `styled(motion.div)`, both packages pass through *all* props
			 * as it's seen as an arbitrary component rather than a DOM node. Motion only allows arbitrary props
			 * passed through the `custom` prop so it doesn't *need* the payload or computational overhead of
			 * `@emotion/is-prop-valid`, however to fix this problem we need to use it.
			 *
			 * By making it an optionalDependency we can offer this functionality only in the situations where it's
			 * actually required.
			 */
			try {
				/**
				 * We attempt to import this package but require won't be defined in esm environments, in that case
				 * isPropValid will have to be provided via `MotionContext`. In a 6.0.0 this should probably be removed
				 * in favour of explicit injection.
				 */
				loadExternalIsValidProp(require("@emotion/is-prop-valid").default);
			} catch {
				// We don't need to actually do anything here - the fallback is the existing `isPropValid`.
			}
			function filterProps(props, isDom, forwardMotionProps) {
				const filteredProps = {};
				for (const key in props) {
					/**
					 * values is considered a valid prop by Emotion, so if it's present
					 * this will be rendered out to the DOM unless explicitly filtered.
					 *
					 * We check the type as it could be used with the `feColorMatrix`
					 * element, which we support.
					 */
					if (key === "values" && typeof props.values === "object") continue;
					if (
						shouldForward(key) ||
						(forwardMotionProps === true && isValidMotionProp(key)) ||
						(!isDom && !isValidMotionProp(key)) ||
						// If trying to use native HTML drag events, forward drag listeners
						(props["draggable"] && key.startsWith("onDrag"))
					) {
						filteredProps[key] = props[key];
					}
				}
				return filteredProps;
			} // CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/dom/use-render.mjs

			("use client");

			function useRender(
				Component,
				props,
				ref,
				{ latestValues },
				isStatic,
				forwardMotionProps = false,
			) {
				const useVisualProps = isSVGComponent(Component)
					? useSVGProps
					: useHTMLProps;
				const visualProps = useVisualProps(
					props,
					latestValues,
					isStatic,
					Component,
				);
				const filteredProps = filterProps(
					props,
					typeof Component === "string",
					forwardMotionProps,
				);
				const elementProps =
					Component !== react.Fragment
						? { ...filteredProps, ...visualProps, ref }
						: {};
				/**
				 * If component has been handed a motion value as its child,
				 * memoise its initial value and render that. Subsequent updates
				 * will be handled by the onChange handler
				 */
				const { children } = props;
				const renderedChildren = (0, react.useMemo)(
					() => (isMotionValue(children) ? children.get() : children),
					[children],
				);
				return (0, react.createElement)(Component, {
					...elementProps,
					children: renderedChildren,
				});
			} // CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/context/PresenceContext.mjs

			("use client");

			/**
			 * @public
			 */
			const PresenceContext_PresenceContext = /* @__PURE__ */ (0,
			react.createContext)(null); // CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/utils/use-constant.mjs

			("use client");

			/**
			 * Creates a constant value over the lifecycle of a component.
			 *
			 * Even if `useMemo` is provided an empty array as its final argument, it doesn't offer
			 * a guarantee that it won't re-run for performance reasons later on. By using `useConstant`
			 * you can ensure that initialisers don't execute twice or more.
			 */
			function useConstant(init) {
				const ref = (0, react.useRef)(null);
				if (ref.current === null) {
					ref.current = init();
				}
				return ref.current;
			} // CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/value/utils/resolve-motion-value.mjs

			/**
			 * If the provided value is a MotionValue, this returns the actual value, otherwise just the value itself
			 *
			 * TODO: Remove and move to library
			 */
			function resolveMotionValue(value) {
				return isMotionValue(value) ? value.get() : value;
			} // CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/motion/utils/use-visual-state.mjs

			("use client");

			function makeState(
				{ scrapeMotionValuesFromProps, createRenderState },
				props,
				context,
				presenceContext,
			) {
				const state = {
					latestValues: makeLatestValues(
						props,
						context,
						presenceContext,
						scrapeMotionValuesFromProps,
					),
					renderState: createRenderState(),
				};
				return state;
			}
			function makeLatestValues(
				props,
				context,
				presenceContext,
				scrapeMotionValues,
			) {
				const values = {};
				const motionValues = scrapeMotionValues(props, {});
				for (const key in motionValues) {
					values[key] = resolveMotionValue(motionValues[key]);
				}
				let { initial, animate } = props;
				const isControllingVariants$1 = isControllingVariants(props);
				const isVariantNode$1 = isVariantNode(props);
				if (
					context &&
					isVariantNode$1 &&
					!isControllingVariants$1 &&
					props.inherit !== false
				) {
					if (initial === undefined) initial = context.initial;
					if (animate === undefined) animate = context.animate;
				}
				let isInitialAnimationBlocked = presenceContext
					? presenceContext.initial === false
					: false;
				isInitialAnimationBlocked =
					isInitialAnimationBlocked || initial === false;
				const variantToSet = isInitialAnimationBlocked ? animate : initial;
				if (
					variantToSet &&
					typeof variantToSet !== "boolean" &&
					!isAnimationControls(variantToSet)
				) {
					const list = Array.isArray(variantToSet)
						? variantToSet
						: [variantToSet];
					for (let i = 0; i < list.length; i++) {
						const resolved = resolveVariantFromProps(props, list[i]);
						if (resolved) {
							const { transitionEnd, transition, ...target } = resolved;
							for (const key in target) {
								let valueTarget = target[key];
								if (Array.isArray(valueTarget)) {
									/**
									 * Take final keyframe if the initial animation is blocked because
									 * we want to initialise at the end of that blocked animation.
									 */
									const index = isInitialAnimationBlocked
										? valueTarget.length - 1
										: 0;
									valueTarget = valueTarget[index];
								}
								if (valueTarget !== null) {
									values[key] = valueTarget;
								}
							}
							for (const key in transitionEnd) {
								values[key] = transitionEnd[key];
							}
						}
					}
				}
				return values;
			}
			const makeUseVisualState = (config) => (props, isStatic) => {
				const context = (0, react.useContext)(MotionContext);
				const presenceContext = (0, react.useContext)(
					PresenceContext_PresenceContext,
				);
				const make = () => makeState(config, props, context, presenceContext);
				return isStatic ? make() : useConstant(make);
			}; // CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/html/use-html-visual-state.mjs

			("use client");

			const useHTMLVisualState = /*@__PURE__*/ makeUseVisualState({
				scrapeMotionValuesFromProps:
					scrape_motion_values_scrapeMotionValuesFromProps,
				createRenderState: createHtmlRenderState,
			}); // CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/svg/use-svg-visual-state.mjs

			("use client");

			const useSVGVisualState = /*@__PURE__*/ makeUseVisualState({
				scrapeMotionValuesFromProps:
					utils_scrape_motion_values_scrapeMotionValuesFromProps,
				createRenderState: createSvgRenderState,
			}); // CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/motion/features/load-features.mjs

			function loadFeatures(features) {
				for (const key in features) {
					featureDefinitions[key] = {
						...featureDefinitions[key],
						...features[key],
					};
				}
			}

			// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/motion/utils/symbol.mjs
			var symbol = __webpack_require__(628); // CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/utils/is-ref-object.mjs
			function isRefObject(ref) {
				return ref && typeof ref === "object" && Object.hasOwn(ref, "current");
			} // CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/motion/utils/use-motion-ref.mjs

			("use client");

			/**
			 * Creates a ref function that, when called, hydrates the provided
			 * external ref and VisualElement.
			 */
			function useMotionRef(visualState, visualElement, externalRef) {
				return (0, react.useCallback)(
					(instance) => {
						if (instance) {
							visualState.onMount && visualState.onMount(instance);
						}
						if (visualElement) {
							if (instance) {
								visualElement.mount(instance);
							} else {
								visualElement.unmount();
							}
						}
						if (externalRef) {
							if (typeof externalRef === "function") {
								externalRef(instance);
							} else if (isRefObject(externalRef)) {
								externalRef.current = instance;
							}
						}
					},
					/**
					 * Include externalRef in dependencies to ensure the callback updates
					 * when the ref changes, allowing proper ref forwarding.
					 */
					[visualElement],
				);
			} // CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/animation/optimized-appear/data-id.mjs

			const optimizedAppearDataId = "framerAppearId";
			const optimizedAppearDataAttribute =
				"data-" + camelToDash(optimizedAppearDataId); // CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/context/SwitchLayoutGroupContext.mjs

			("use client");

			/**
			 * Internal, exported only for usage in Framer
			 */
			const SwitchLayoutGroupContext = (0, react.createContext)({}); // CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs

			("use client");

			const useIsomorphicLayoutEffect = isBrowser
				? react.useLayoutEffect
				: react.useEffect; // CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/motion/utils/use-visual-element.mjs

			("use client");

			function useVisualElement(
				Component,
				visualState,
				props,
				createVisualElement,
				ProjectionNodeConstructor,
			) {
				const { visualElement: parent } = (0, react.useContext)(MotionContext);
				const lazyContext = (0, react.useContext)(LazyContext);
				const presenceContext = (0, react.useContext)(
					PresenceContext_PresenceContext,
				);
				const reducedMotionConfig = (0, react.useContext)(
					MotionConfigContext,
				).reducedMotion;
				const visualElementRef = (0, react.useRef)(null);
				/**
				 * If we haven't preloaded a renderer, check to see if we have one lazy-loaded
				 */
				createVisualElement = createVisualElement || lazyContext.renderer;
				if (!visualElementRef.current && createVisualElement) {
					visualElementRef.current = createVisualElement(Component, {
						visualState,
						parent,
						props,
						presenceContext,
						blockInitialAnimation: presenceContext
							? presenceContext.initial === false
							: false,
						reducedMotionConfig,
					});
				}
				const visualElement = visualElementRef.current;
				/**
				 * Load Motion gesture and animation features. These are rendered as renderless
				 * components so each feature can optionally make use of React lifecycle methods.
				 */
				const initialLayoutGroupConfig = (0, react.useContext)(
					SwitchLayoutGroupContext,
				);
				if (
					visualElement &&
					!visualElement.projection &&
					ProjectionNodeConstructor &&
					(visualElement.type === "html" || visualElement.type === "svg")
				) {
					createProjectionNode(
						visualElementRef.current,
						props,
						ProjectionNodeConstructor,
						initialLayoutGroupConfig,
					);
				}
				const isMounted = (0, react.useRef)(false);
				(0, react.useInsertionEffect)(() => {
					/**
					 * Check the component has already mounted before calling
					 * `update` unnecessarily. This ensures we skip the initial update.
					 */
					if (visualElement && isMounted.current) {
						visualElement.update(props, presenceContext);
					}
				});
				/**
				 * Cache this value as we want to know whether HandoffAppearAnimations
				 * was present on initial render - it will be deleted after this.
				 */
				const optimisedAppearId = props[optimizedAppearDataAttribute];
				const wantsHandoff = (0, react.useRef)(
					Boolean(optimisedAppearId) &&
						!window.MotionHandoffIsComplete?.(optimisedAppearId) &&
						window.MotionHasOptimisedAnimation?.(optimisedAppearId),
				);
				useIsomorphicLayoutEffect(() => {
					if (!visualElement) return;
					isMounted.current = true;
					window.MotionIsMounted = true;
					visualElement.updateFeatures();
					visualElement.scheduleRenderMicrotask();
					/**
					 * Ideally this function would always run in a useEffect.
					 *
					 * However, if we have optimised appear animations to handoff from,
					 * it needs to happen synchronously to ensure there's no flash of
					 * incorrect styles in the event of a hydration error.
					 *
					 * So if we detect a situtation where optimised appear animations
					 * are running, we use useLayoutEffect to trigger animations.
					 */
					if (wantsHandoff.current && visualElement.animationState) {
						visualElement.animationState.animateChanges();
					}
				});
				(0, react.useEffect)(() => {
					if (!visualElement) return;
					if (!wantsHandoff.current && visualElement.animationState) {
						visualElement.animationState.animateChanges();
					}
					if (wantsHandoff.current) {
						// This ensures all future calls to animateChanges() in this component will run in useEffect
						queueMicrotask(() => {
							window.MotionHandoffMarkAsComplete?.(optimisedAppearId);
						});
						wantsHandoff.current = false;
					}
					/**
					 * Now we've finished triggering animations for this element we
					 * can wipe the enteringChildren set for the next render.
					 */
					visualElement.enteringChildren = undefined;
				});
				return visualElement;
			}
			function createProjectionNode(
				visualElement,
				props,
				ProjectionNodeConstructor,
				initialPromotionConfig,
			) {
				const {
					layoutId,
					layout,
					drag,
					dragConstraints,
					layoutScroll,
					layoutRoot,
					layoutCrossfade,
				} = props;
				visualElement.projection = new ProjectionNodeConstructor(
					visualElement.latestValues,
					props["data-framer-portal-id"]
						? undefined
						: getClosestProjectingNode(visualElement.parent),
				);
				visualElement.projection.setOptions({
					layoutId,
					layout,
					alwaysMeasureLayout:
						Boolean(drag) || (dragConstraints && isRefObject(dragConstraints)),
					visualElement,
					/**
					 * TODO: Update options in an effect. This could be tricky as it'll be too late
					 * to update by the time layout animations run.
					 * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
					 * ensuring it gets called if there's no potential layout animations.
					 *
					 */
					animationType: typeof layout === "string" ? layout : "both",
					initialPromotionConfig,
					crossfade: layoutCrossfade,
					layoutScroll,
					layoutRoot,
				});
			}
			function getClosestProjectingNode(visualElement) {
				if (!visualElement) return undefined;
				return visualElement.options.allowProjection !== false
					? visualElement.projection
					: getClosestProjectingNode(visualElement.parent);
			} // CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/motion/index.mjs

			("use client");

			/**
			 * Create a `motion` component.
			 *
			 * This function accepts a Component argument, which can be either a string (ie "div"
			 * for `motion.div`), or an actual React component.
			 *
			 * Alongside this is a config option which provides a way of rendering the provided
			 * component "offline", or outside the React render cycle.
			 */
			function createMotionComponent(
				Component,
				{ forwardMotionProps = false } = {},
				preloadedFeatures,
				createVisualElement,
			) {
				preloadedFeatures && loadFeatures(preloadedFeatures);
				const useVisualState = isSVGComponent(Component)
					? useSVGVisualState
					: useHTMLVisualState;
				function MotionDOMComponent(props, externalRef) {
					/**
					 * If we need to measure the element we load this functionality in a
					 * separate class component in order to gain access to getSnapshotBeforeUpdate.
					 */
					let MeasureLayout;
					const configAndProps = {
						...(0, react.useContext)(MotionConfigContext),
						...props,
						layoutId: useLayoutId(props),
					};
					const { isStatic } = configAndProps;
					const context = useCreateMotionContext(props);
					const visualState = useVisualState(props, isStatic);
					if (!isStatic && isBrowser) {
						useStrictMode(configAndProps, preloadedFeatures);
						const layoutProjection = getProjectionFunctionality(configAndProps);
						MeasureLayout = layoutProjection.MeasureLayout;
						/**
						 * Create a VisualElement for this component. A VisualElement provides a common
						 * interface to renderer-specific APIs (ie DOM/Three.js etc) as well as
						 * providing a way of rendering to these APIs outside of the React render loop
						 * for more performant animations and interactions
						 */
						context.visualElement = useVisualElement(
							Component,
							visualState,
							configAndProps,
							createVisualElement,
							layoutProjection.ProjectionNode,
						);
					}
					/**
					 * The mount order and hierarchy is specific to ensure our element ref
					 * is hydrated by the time features fire their effects.
					 */
					return (0, jsx_runtime.jsxs)(MotionContext.Provider, {
						value: context,
						children: [
							MeasureLayout && context.visualElement
								? (0, jsx_runtime.jsx)(MeasureLayout, {
										visualElement: context.visualElement,
										...configAndProps,
									})
								: null,
							useRender(
								Component,
								props,
								useMotionRef(visualState, context.visualElement, externalRef),
								visualState,
								isStatic,
								forwardMotionProps,
							),
						],
					});
				}
				MotionDOMComponent.displayName = `motion.${
					typeof Component === "string"
						? Component
						: `create(${Component.displayName ?? Component.name ?? ""})`
				}`;
				const ForwardRefMotionComponent = (0, react.forwardRef)(
					MotionDOMComponent,
				);
				ForwardRefMotionComponent[symbol /* .motionComponentSymbol */.o] =
					Component;
				return ForwardRefMotionComponent;
			}
			function useLayoutId({ layoutId }) {
				const layoutGroupId = (0, react.useContext)(LayoutGroupContext).id;
				return layoutGroupId && layoutId !== undefined
					? layoutGroupId + "-" + layoutId
					: layoutId;
			}
			function useStrictMode(configAndProps, preloadedFeatures) {
				const isStrict = (0, react.useContext)(LazyContext).strict;
				/**
				 * If we're in development mode, check to make sure we're not rendering a motion component
				 * as a child of LazyMotion, as this will break the file-size benefits of using it.
				 */
				if (false) {
				}
			}
			function getProjectionFunctionality(props) {
				const { drag, layout } = featureDefinitions;
				if (!drag && !layout) return {};
				const combined = { ...drag, ...layout };
				return {
					MeasureLayout:
						drag?.isEnabled(props) || layout?.isEnabled(props)
							? combined.MeasureLayout
							: undefined,
					ProjectionNode: combined.ProjectionNode,
				};
			} // CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/components/create-proxy.mjs

			function createMotionProxy(preloadedFeatures, createVisualElement) {
				if (typeof Proxy === "undefined") {
					return createMotionComponent;
				}
				/**
				 * A cache of generated `motion` components, e.g `motion.div`, `motion.input` etc.
				 * Rather than generating them anew every render.
				 */
				const componentCache = new Map();
				const factory = (Component, options) => {
					return createMotionComponent(
						Component,
						options,
						preloadedFeatures,
						createVisualElement,
					);
				};
				/**
				 * Support for deprecated`motion(Component)` pattern
				 */
				const deprecatedFactoryFunction = (Component, options) => {
					if (false) {
					}
					return factory(Component, options);
				};
				return new Proxy(deprecatedFactoryFunction, {
					/**
					 * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
					 * The prop name is passed through as `key` and we can use that to generate a `motion`
					 * DOM component with that name.
					 */
					get: (_target, key) => {
						if (key === "create") return factory;
						/**
						 * If this element doesn't exist in the component cache, create it and cache.
						 */
						if (!componentCache.has(key)) {
							componentCache.set(
								key,
								createMotionComponent(
									key,
									undefined,
									preloadedFeatures,
									createVisualElement,
								),
							);
						}
						return componentCache.get(key);
					},
				});
			} // CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/utils/resolve-dynamic-variants.mjs

			function resolveVariant(visualElement, definition, custom) {
				const props = visualElement.getProps();
				return resolveVariantFromProps(
					props,
					definition,
					custom !== undefined ? custom : props.custom,
					visualElement,
				);
			} // CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/animation/utils/get-value-transition.mjs
			function getValueTransition(transition, key) {
				return transition?.[key] ?? transition?.["default"] ?? transition;
			} // CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/animation/utils/is-keyframes-target.mjs
			const isKeyframesTarget = (v) => {
				return Array.isArray(v);
			}; // CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/utils/setters.mjs

			/**
			 * Set VisualElement's MotionValue, creating a new MotionValue for it if
			 * it doesn't exist.
			 */
			function setMotionValue(visualElement, key, value) {
				if (visualElement.hasValue(key)) {
					visualElement.getValue(key).set(value);
				} else {
					visualElement.addValue(key, value_motionValue(value));
				}
			}
			function resolveFinalValueInKeyframes(v) {
				// TODO maybe throw if v.length - 1 is placeholder token?
				return isKeyframesTarget(v) ? v[v.length - 1] || 0 : v;
			}
			function setTarget(visualElement, definition) {
				const resolved = resolveVariant(visualElement, definition);
				let { transitionEnd = {}, transition = {}, ...target } = resolved || {};
				target = { ...target, ...transitionEnd };
				for (const key in target) {
					const value = resolveFinalValueInKeyframes(target[key]);
					setMotionValue(visualElement, key, value);
				}
			} // CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/value/use-will-change/is.mjs

			function isWillChangeMotionValue(value) {
				return Boolean(isMotionValue(value) && value.add);
			} // CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/value/use-will-change/add-will-change.mjs

			function addValueToWillChange(visualElement, key) {
				const willChange = visualElement.getValue("willChange");
				/**
				 * It could be that a user has set willChange to a regular MotionValue,
				 * in which case we can't add the value to it.
				 */
				if (isWillChangeMotionValue(willChange)) {
					return willChange.add(key);
				} else if (!willChange && MotionGlobalConfig.WillChange) {
					const newWillChange = new MotionGlobalConfig.WillChange("auto");
					visualElement.addValue("willChange", newWillChange);
					newWillChange.add(key);
				}
			} // CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/animation/optimized-appear/get-appear-id.mjs

			function getOptimisedAppearId(visualElement) {
				return visualElement.props[optimizedAppearDataAttribute];
			} // CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/animation/utils/make-animation-instant.mjs
			function makeAnimationInstant(options) {
				options.duration = 0;
				options.type = "keyframes";
			} // CONCATENATED MODULE: ./node_modules/motion-utils/dist/es/pipe.mjs
			/**
			 * Pipe
			 * Compose other transformers to run linearily
			 * pipe(min(20), max(40))
			 * @param  {...functions} transformers
			 * @return {function}
			 */
			const combineFunctions = (a, b) => (v) => b(a(v));
			const pipe = (...transformers) => transformers.reduce(combineFunctions); // CONCATENATED MODULE: ./node_modules/motion-utils/dist/es/time-conversion.mjs
			/**
			 * Converts seconds to milliseconds
			 *
			 * @param seconds - Time in seconds.
			 * @return milliseconds - Converted time in milliseconds.
			 */
			/*#__NO_SIDE_EFFECTS__*/
			const time_conversion_secondsToMilliseconds = (seconds) => seconds * 1000;
			/*#__NO_SIDE_EFFECTS__*/
			const millisecondsToSeconds = (milliseconds) => milliseconds / 1000; // CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/stats/animation-count.mjs
			const activeAnimations = {
				layout: 0,
				mainThread: 0,
				waapi: 0,
			}; // CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/value/types/color/hsla-to-rgba.mjs
			// Adapted from https://gist.github.com/mjackson/5311256
			function hueToRgb(p, q, t) {
				if (t < 0) t += 1;
				if (t > 1) t -= 1;
				if (t < 1 / 6) return p + (q - p) * 6 * t;
				if (t < 1 / 2) return q;
				if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
				return p;
			}
			function hslaToRgba({ hue, saturation, lightness, alpha }) {
				hue /= 360;
				saturation /= 100;
				lightness /= 100;
				let red = 0;
				let green = 0;
				let blue = 0;
				if (!saturation) {
					red = green = blue = lightness;
				} else {
					const q =
						lightness < 0.5
							? lightness * (1 + saturation)
							: lightness + saturation - lightness * saturation;
					const p = 2 * lightness - q;
					red = hueToRgb(p, q, hue + 1 / 3);
					green = hueToRgb(p, q, hue);
					blue = hueToRgb(p, q, hue - 1 / 3);
				}
				return {
					red: Math.round(red * 255),
					green: Math.round(green * 255),
					blue: Math.round(blue * 255),
					alpha,
				};
			} // CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/utils/mix/immediate.mjs
			function mixImmediate(a, b) {
				return (p) => (p > 0 ? b : a);
			} // CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/utils/mix/color.mjs

			// Linear color space blending
			// Explained https://www.youtube.com/watch?v=LKnqECcg6Gw
			// Demonstrated http://codepen.io/osublake/pen/xGVVaN
			const mixLinearColor = (from, to, v) => {
				const fromExpo = from * from;
				const expo = v * (to * to - fromExpo) + fromExpo;
				return expo < 0 ? 0 : Math.sqrt(expo);
			};
			const colorTypes = [hex, rgba, hsla];
			const getColorType = (v) => colorTypes.find((type) => type.test(v));
			function asRGBA(color) {
				const type = getColorType(color);
				warning(
					Boolean(type),
					`'${color}' is not an animatable color. Use the equivalent color code instead.`,
					"color-not-animatable",
				);
				if (!type) return false;
				let model = type.parse(color);
				if (type === hsla) {
					// TODO Remove this cast - needed since Motion's stricter typing
					model = hslaToRgba(model);
				}
				return model;
			}
			const mixColor = (from, to) => {
				const fromRGBA = asRGBA(from);
				const toRGBA = asRGBA(to);
				if (!fromRGBA || !toRGBA) {
					return mixImmediate(from, to);
				}
				const blended = { ...fromRGBA };
				return (v) => {
					blended.red = mixLinearColor(fromRGBA.red, toRGBA.red, v);
					blended.green = mixLinearColor(fromRGBA.green, toRGBA.green, v);
					blended.blue = mixLinearColor(fromRGBA.blue, toRGBA.blue, v);
					blended.alpha = mixNumber(fromRGBA.alpha, toRGBA.alpha, v);
					return rgba.transform(blended);
				};
			}; // CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/utils/mix/visibility.mjs
			const invisibleValues = new Set(["none", "hidden"]);
			/**
			 * Returns a function that, when provided a progress value between 0 and 1,
			 * will return the "none" or "hidden" string only when the progress is that of
			 * the origin or target.
			 */
			function mixVisibility(origin, target) {
				if (invisibleValues.has(origin)) {
					return (p) => (p <= 0 ? origin : target);
				} else {
					return (p) => (p >= 1 ? target : origin);
				}
			} // CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/utils/mix/complex.mjs

			function complex_mixNumber(a, b) {
				return (p) => mixNumber(a, b, p);
			}
			function getMixer(a) {
				if (typeof a === "number") {
					return complex_mixNumber;
				} else if (typeof a === "string") {
					return isCSSVariableToken(a)
						? mixImmediate
						: color_color.test(a)
							? mixColor
							: mixComplex;
				} else if (Array.isArray(a)) {
					return mixArray;
				} else if (typeof a === "object") {
					return color_color.test(a) ? mixColor : mixObject;
				}
				return mixImmediate;
			}
			function mixArray(a, b) {
				const output = [...a];
				const numValues = output.length;
				const blendValue = a.map((v, i) => getMixer(v)(v, b[i]));
				return (p) => {
					for (let i = 0; i < numValues; i++) {
						output[i] = blendValue[i](p);
					}
					return output;
				};
			}
			function mixObject(a, b) {
				const output = { ...a, ...b };
				const blendValue = {};
				for (const key in output) {
					if (a[key] !== undefined && b[key] !== undefined) {
						blendValue[key] = getMixer(a[key])(a[key], b[key]);
					}
				}
				return (v) => {
					for (const key in blendValue) {
						output[key] = blendValue[key](v);
					}
					return output;
				};
			}
			function matchOrder(origin, target) {
				const orderedOrigin = [];
				const pointers = { color: 0, var: 0, number: 0 };
				for (let i = 0; i < target.values.length; i++) {
					const type = target.types[i];
					const originIndex = origin.indexes[type][pointers[type]];
					const originValue = origin.values[originIndex] ?? 0;
					orderedOrigin[i] = originValue;
					pointers[type]++;
				}
				return orderedOrigin;
			}
			const mixComplex = (origin, target) => {
				const template = complex.createTransformer(target);
				const originStats = analyseComplexValue(origin);
				const targetStats = analyseComplexValue(target);
				const canInterpolate =
					originStats.indexes.var.length === targetStats.indexes.var.length &&
					originStats.indexes.color.length ===
						targetStats.indexes.color.length &&
					originStats.indexes.number.length >=
						targetStats.indexes.number.length;
				if (canInterpolate) {
					if (
						(invisibleValues.has(origin) && !targetStats.values.length) ||
						(invisibleValues.has(target) && !originStats.values.length)
					) {
						return mixVisibility(origin, target);
					}
					return pipe(
						mixArray(matchOrder(originStats, targetStats), targetStats.values),
						template,
					);
				} else {
					warning(
						true,
						`Complex values '${origin}' and '${target}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`,
						"complex-values-different",
					);
					return mixImmediate(origin, target);
				}
			}; // CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/utils/mix/index.mjs

			function mix(from, to, p) {
				if (
					typeof from === "number" &&
					typeof to === "number" &&
					typeof p === "number"
				) {
					return mixNumber(from, to, p);
				}
				const mixer = getMixer(from);
				return mixer(from, to);
			} // CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/animation/drivers/frame.mjs

			const frameloopDriver = (update) => {
				const passTimestamp = ({ timestamp }) => update(timestamp);
				return {
					start: (keepAlive = true) =>
						frame_frame.update(passTimestamp, keepAlive),
					stop: () => cancelFrame(passTimestamp),
					/**
					 * If we're processing this frame we can use the
					 * framelocked timestamp to keep things in sync.
					 */
					now: () =>
						frame_frameData.isProcessing
							? frame_frameData.timestamp
							: sync_time_time.now(),
				};
			}; // CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/animation/waapi/utils/linear.mjs
			const generateLinearEasing = (
				easing,
				duration, // as milliseconds
				resolution = 10, // as milliseconds
			) => {
				let points = "";
				const numPoints = Math.max(Math.round(duration / resolution), 2);
				for (let i = 0; i < numPoints; i++) {
					points +=
						Math.round(easing(i / (numPoints - 1)) * 10000) / 10000 + ", ";
				}
				return `linear(${points.substring(0, points.length - 2)})`;
			}; // CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/animation/generators/utils/calc-duration.mjs
			/**
			 * Implement a practical max duration for keyframe generation
			 * to prevent infinite loops
			 */
			const maxGeneratorDuration = 20000;
			function calcGeneratorDuration(generator) {
				let duration = 0;
				const timeStep = 50;
				let state = generator.next(duration);
				while (!state.done && duration < maxGeneratorDuration) {
					duration += timeStep;
					state = generator.next(duration);
				}
				return duration >= maxGeneratorDuration ? Infinity : duration;
			} // CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/animation/generators/utils/create-generator-easing.mjs

			/**
			 * Create a progress => progress easing function from a generator.
			 */
			function createGeneratorEasing(options, scale = 100, createGenerator) {
				const generator = createGenerator({
					...options,
					keyframes: [0, scale],
				});
				const duration = Math.min(
					calcGeneratorDuration(generator),
					/* inlined export .maxGeneratorDuration */ 20000,
				);
				return {
					type: "keyframes",
					ease: (progress) => {
						return generator.next(duration * progress).value / scale;
					},
					duration: millisecondsToSeconds(duration),
				};
			} // CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/animation/generators/utils/velocity.mjs

			const velocitySampleDuration = 5; // ms
			function calcGeneratorVelocity(resolveValue, t, current) {
				const prevT = Math.max(t - velocitySampleDuration, 0);
				return velocityPerSecond(current - resolveValue(prevT), t - prevT);
			} // CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/animation/generators/spring/defaults.mjs
			const springDefaults = {
				// Default spring physics
				stiffness: 100,
				damping: 10,
				mass: 1.0,
				velocity: 0.0,
				// Default duration/bounce-based options
				duration: 800, // in ms
				bounce: 0.3,
				visualDuration: 0.3, // in seconds
				// Rest thresholds
				restSpeed: {
					granular: 0.01,
					default: 2,
				},
				restDelta: {
					granular: 0.005,
					default: 0.5,
				},
				// Limits
				minDuration: 0.01, // in seconds
				maxDuration: 10.0, // in seconds
				minDamping: 0.05,
				maxDamping: 1,
			}; // CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/animation/generators/spring/find.mjs

			const safeMin = 0.001;
			function findSpring({
				duration = springDefaults.duration,
				bounce = springDefaults.bounce,
				velocity = springDefaults.velocity,
				mass = springDefaults.mass,
			}) {
				let envelope;
				let derivative;
				warning(
					duration <=
						time_conversion_secondsToMilliseconds(springDefaults.maxDuration),
					"Spring duration must be 10 seconds or less",
					"spring-duration-limit",
				);
				let dampingRatio = 1 - bounce;
				/**
				 * Restrict dampingRatio and duration to within acceptable ranges.
				 */
				dampingRatio = clamp(
					springDefaults.minDamping,
					springDefaults.maxDamping,
					dampingRatio,
				);
				duration = clamp(
					springDefaults.minDuration,
					springDefaults.maxDuration,
					millisecondsToSeconds(duration),
				);
				if (dampingRatio < 1) {
					/**
					 * Underdamped spring
					 */
					envelope = (undampedFreq) => {
						const exponentialDecay = undampedFreq * dampingRatio;
						const delta = exponentialDecay * duration;
						const a = exponentialDecay - velocity;
						const b = calcAngularFreq(undampedFreq, dampingRatio);
						const c = Math.exp(-delta);
						return safeMin - (a / b) * c;
					};
					derivative = (undampedFreq) => {
						const exponentialDecay = undampedFreq * dampingRatio;
						const delta = exponentialDecay * duration;
						const d = delta * velocity + velocity;
						const e = dampingRatio ** 2 * undampedFreq ** 2 * duration;
						const f = Math.exp(-delta);
						const g = calcAngularFreq(undampedFreq ** 2, dampingRatio);
						const factor = -envelope(undampedFreq) + safeMin > 0 ? -1 : 1;
						return (factor * ((d - e) * f)) / g;
					};
				} else {
					/**
					 * Critically-damped spring
					 */
					envelope = (undampedFreq) => {
						const a = Math.exp(-undampedFreq * duration);
						const b = (undampedFreq - velocity) * duration + 1;
						return -safeMin + a * b;
					};
					derivative = (undampedFreq) => {
						const a = Math.exp(-undampedFreq * duration);
						const b = (velocity - undampedFreq) * (duration * duration);
						return a * b;
					};
				}
				const initialGuess = 5 / duration;
				const undampedFreq = approximateRoot(
					envelope,
					derivative,
					initialGuess,
				);
				duration = time_conversion_secondsToMilliseconds(duration);
				if (isNaN(undampedFreq)) {
					return {
						stiffness: springDefaults.stiffness,
						damping: springDefaults.damping,
						duration,
					};
				} else {
					const stiffness = undampedFreq ** 2 * mass;
					return {
						stiffness,
						damping: dampingRatio * 2 * Math.sqrt(mass * stiffness),
						duration,
					};
				}
			}
			const rootIterations = 12;
			function approximateRoot(envelope, derivative, initialGuess) {
				let result = initialGuess;
				for (let i = 1; i < rootIterations; i++) {
					result = result - envelope(result) / derivative(result);
				}
				return result;
			}
			function calcAngularFreq(undampedFreq, dampingRatio) {
				return undampedFreq * Math.sqrt(1 - dampingRatio * dampingRatio);
			} // CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/animation/generators/spring/index.mjs

			const durationKeys = ["duration", "bounce"];
			const physicsKeys = ["stiffness", "damping", "mass"];
			function isSpringType(options, keys) {
				return keys.some((key) => options[key] !== undefined);
			}
			function getSpringOptions(options) {
				let springOptions = {
					velocity: springDefaults.velocity,
					stiffness: springDefaults.stiffness,
					damping: springDefaults.damping,
					mass: springDefaults.mass,
					isResolvedFromDuration: false,
					...options,
				};
				// stiffness/damping/mass overrides duration/bounce
				if (
					!isSpringType(options, physicsKeys) &&
					isSpringType(options, durationKeys)
				) {
					if (options.visualDuration) {
						const visualDuration = options.visualDuration;
						const root = (2 * Math.PI) / (visualDuration * 1.2);
						const stiffness = root * root;
						const damping =
							2 *
							clamp(0.05, 1, 1 - (options.bounce || 0)) *
							Math.sqrt(stiffness);
						springOptions = {
							...springOptions,
							mass: springDefaults.mass,
							stiffness,
							damping,
						};
					} else {
						const derived = findSpring(options);
						springOptions = {
							...springOptions,
							...derived,
							mass: springDefaults.mass,
						};
						springOptions.isResolvedFromDuration = true;
					}
				}
				return springOptions;
			}
			function spring(
				optionsOrVisualDuration = springDefaults.visualDuration,
				bounce = springDefaults.bounce,
			) {
				const options =
					typeof optionsOrVisualDuration !== "object"
						? {
								visualDuration: optionsOrVisualDuration,
								keyframes: [0, 1],
								bounce,
							}
						: optionsOrVisualDuration;
				let { restSpeed, restDelta } = options;
				const origin = options.keyframes[0];
				const target = options.keyframes[options.keyframes.length - 1];
				/**
				 * This is the Iterator-spec return value. We ensure it's mutable rather than using a generator
				 * to reduce GC during animation.
				 */
				const state = { done: false, value: origin };
				const {
					stiffness,
					damping,
					mass,
					duration,
					velocity,
					isResolvedFromDuration,
				} = getSpringOptions({
					...options,
					velocity: -millisecondsToSeconds(options.velocity || 0),
				});
				const initialVelocity = velocity || 0.0;
				const dampingRatio = damping / (2 * Math.sqrt(stiffness * mass));
				const initialDelta = target - origin;
				const undampedAngularFreq = millisecondsToSeconds(
					Math.sqrt(stiffness / mass),
				);
				/**
				 * If we're working on a granular scale, use smaller defaults for determining
				 * when the spring is finished.
				 *
				 * These defaults have been selected emprically based on what strikes a good
				 * ratio between feeling good and finishing as soon as changes are imperceptible.
				 */
				const isGranularScale = Math.abs(initialDelta) < 5;
				restSpeed ||
					(restSpeed = isGranularScale
						? springDefaults.restSpeed.granular
						: springDefaults.restSpeed["default"]);
				restDelta ||
					(restDelta = isGranularScale
						? springDefaults.restDelta.granular
						: springDefaults.restDelta["default"]);
				let resolveSpring;
				if (dampingRatio < 1) {
					const angularFreq = calcAngularFreq(
						undampedAngularFreq,
						dampingRatio,
					);
					// Underdamped spring
					resolveSpring = (t) => {
						const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
						return (
							target -
							envelope *
								(((initialVelocity +
									dampingRatio * undampedAngularFreq * initialDelta) /
									angularFreq) *
									Math.sin(angularFreq * t) +
									initialDelta * Math.cos(angularFreq * t))
						);
					};
				} else if (dampingRatio === 1) {
					// Critically damped spring
					resolveSpring = (t) =>
						target -
						Math.exp(-undampedAngularFreq * t) *
							(initialDelta +
								(initialVelocity + undampedAngularFreq * initialDelta) * t);
				} else {
					// Overdamped spring
					const dampedAngularFreq =
						undampedAngularFreq * Math.sqrt(dampingRatio * dampingRatio - 1);
					resolveSpring = (t) => {
						const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
						// When performing sinh or cosh values can hit Infinity so we cap them here
						const freqForT = Math.min(dampedAngularFreq * t, 300);
						return (
							target -
							(envelope *
								((initialVelocity +
									dampingRatio * undampedAngularFreq * initialDelta) *
									Math.sinh(freqForT) +
									dampedAngularFreq * initialDelta * Math.cosh(freqForT))) /
								dampedAngularFreq
						);
					};
				}
				const generator = {
					calculatedDuration: isResolvedFromDuration ? duration || null : null,
					next: (t) => {
						const current = resolveSpring(t);
						if (!isResolvedFromDuration) {
							let currentVelocity = t === 0 ? initialVelocity : 0.0;
							/**
							 * We only need to calculate velocity for under-damped springs
							 * as over- and critically-damped springs can't overshoot, so
							 * checking only for displacement is enough.
							 */
							if (dampingRatio < 1) {
								currentVelocity =
									t === 0
										? time_conversion_secondsToMilliseconds(initialVelocity)
										: calcGeneratorVelocity(resolveSpring, t, current);
							}
							const isBelowVelocityThreshold =
								Math.abs(currentVelocity) <= restSpeed;
							const isBelowDisplacementThreshold =
								Math.abs(target - current) <= restDelta;
							state.done =
								isBelowVelocityThreshold && isBelowDisplacementThreshold;
						} else {
							state.done = t >= duration;
						}
						state.value = state.done ? target : current;
						return state;
					},
					toString: () => {
						const calculatedDuration = Math.min(
							calcGeneratorDuration(generator),
							/* inlined export .maxGeneratorDuration */ 20000,
						);
						const easing = generateLinearEasing(
							(progress) => generator.next(calculatedDuration * progress).value,
							calculatedDuration,
							30,
						);
						return calculatedDuration + "ms " + easing;
					},
					toTransition: () => {},
				};
				return generator;
			}
			spring.applyToOptions = (options) => {
				const generatorOptions = createGeneratorEasing(options, 100, spring);
				options.ease = generatorOptions.ease;
				options.duration = time_conversion_secondsToMilliseconds(
					generatorOptions.duration,
				);
				options.type = "keyframes";
				return options;
			}; // CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/animation/generators/inertia.mjs

			function inertia_inertia({
				keyframes,
				velocity = 0.0,
				power = 0.8,
				timeConstant = 325,
				bounceDamping = 10,
				bounceStiffness = 500,
				modifyTarget,
				min,
				max,
				restDelta = 0.5,
				restSpeed,
			}) {
				const origin = keyframes[0];
				const state = {
					done: false,
					value: origin,
				};
				const isOutOfBounds = (v) =>
					(min !== undefined && v < min) || (max !== undefined && v > max);
				const nearestBoundary = (v) => {
					if (min === undefined) return max;
					if (max === undefined) return min;
					return Math.abs(min - v) < Math.abs(max - v) ? min : max;
				};
				let amplitude = power * velocity;
				const ideal = origin + amplitude;
				const target = modifyTarget === undefined ? ideal : modifyTarget(ideal);
				/**
				 * If the target has changed we need to re-calculate the amplitude, otherwise
				 * the animation will start from the wrong position.
				 */
				if (target !== ideal) amplitude = target - origin;
				const calcDelta = (t) => -amplitude * Math.exp(-t / timeConstant);
				const calcLatest = (t) => target + calcDelta(t);
				const applyFriction = (t) => {
					const delta = calcDelta(t);
					const latest = calcLatest(t);
					state.done = Math.abs(delta) <= restDelta;
					state.value = state.done ? target : latest;
				};
				/**
				 * Ideally this would resolve for t in a stateless way, we could
				 * do that by always precalculating the animation but as we know
				 * this will be done anyway we can assume that spring will
				 * be discovered during that.
				 */
				let timeReachedBoundary;
				let spring$1;
				const checkCatchBoundary = (t) => {
					if (!isOutOfBounds(state.value)) return;
					timeReachedBoundary = t;
					spring$1 = spring({
						keyframes: [state.value, nearestBoundary(state.value)],
						velocity: calcGeneratorVelocity(calcLatest, t, state.value), // TODO: This should be passing * 1000
						damping: bounceDamping,
						stiffness: bounceStiffness,
						restDelta,
						restSpeed,
					});
				};
				checkCatchBoundary(0);
				return {
					calculatedDuration: null,
					next: (t) => {
						/**
						 * We need to resolve the friction to figure out if we need a
						 * spring but we don't want to do this twice per frame. So here
						 * we flag if we updated for this frame and later if we did
						 * we can skip doing it again.
						 */
						let hasUpdatedFrame = false;
						if (!spring$1 && timeReachedBoundary === undefined) {
							hasUpdatedFrame = true;
							applyFriction(t);
							checkCatchBoundary(t);
						}
						/**
						 * If we have a spring and the provided t is beyond the moment the friction
						 * animation crossed the min/max boundary, use the spring.
						 */
						if (timeReachedBoundary !== undefined && t >= timeReachedBoundary) {
							return spring$1.next(t - timeReachedBoundary);
						} else {
							!hasUpdatedFrame && applyFriction(t);
							return state;
						}
					},
				};
			} // CONCATENATED MODULE: ./node_modules/motion-utils/dist/es/easing/cubic-bezier.mjs

			/*
  Bezier function generator
  This has been modified from Gaëtan Renaudeau's BezierEasing
  https://github.com/gre/bezier-easing/blob/master/src/index.js
  https://github.com/gre/bezier-easing/blob/master/LICENSE
  
  I've removed the newtonRaphsonIterate algo because in benchmarking it
  wasn't noticeably faster than binarySubdivision, indeed removing it
  usually improved times, depending on the curve.
  I also removed the lookup table, as for the added bundle size and loop we're
  only cutting ~4 or so subdivision iterations. I bumped the max iterations up
  to 12 to compensate and this still tended to be faster for no perceivable
  loss in accuracy.
  Usage
    const easeOut = cubicBezier(.17,.67,.83,.67);
    const x = easeOut(0.5); // returns 0.627...
*/
			// Returns x(t) given t, x1, and x2, or y(t) given t, y1, and y2.
			const calcBezier = (t, a1, a2) =>
				(((1.0 - 3.0 * a2 + 3.0 * a1) * t + (3.0 * a2 - 6.0 * a1)) * t +
					3.0 * a1) *
				t;
			const subdivisionPrecision = 0.0000001;
			const subdivisionMaxIterations = 12;
			function binarySubdivide(x, lowerBound, upperBound, mX1, mX2) {
				let currentX;
				let currentT;
				let i = 0;
				do {
					currentT = lowerBound + (upperBound - lowerBound) / 2.0;
					currentX = calcBezier(currentT, mX1, mX2) - x;
					if (currentX > 0.0) {
						upperBound = currentT;
					} else {
						lowerBound = currentT;
					}
				} while (
					Math.abs(currentX) > subdivisionPrecision &&
					++i < subdivisionMaxIterations
				);
				return currentT;
			}
			function cubicBezier(mX1, mY1, mX2, mY2) {
				// If this is a linear gradient, return linear easing
				if (mX1 === mY1 && mX2 === mY2) return noop;
				const getTForX = (aX) => binarySubdivide(aX, 0, 1, mX1, mX2);
				// If animation is at start/end, return t without easing
				return (t) =>
					t === 0 || t === 1 ? t : calcBezier(getTForX(t), mY1, mY2);
			} // CONCATENATED MODULE: ./node_modules/motion-utils/dist/es/easing/ease.mjs

			const easeIn = /*@__PURE__*/ cubicBezier(0.42, 0, 1, 1);
			const easeOut = /*@__PURE__*/ cubicBezier(0, 0, 0.58, 1);
			const easeInOut = /*@__PURE__*/ cubicBezier(0.42, 0, 0.58, 1); // CONCATENATED MODULE: ./node_modules/motion-utils/dist/es/easing/utils/is-easing-array.mjs
			const isEasingArray = (ease) => {
				return Array.isArray(ease) && typeof ease[0] !== "number";
			}; // CONCATENATED MODULE: ./node_modules/motion-utils/dist/es/easing/modifiers/mirror.mjs
			// Accepts an easing function and returns a new one that outputs mirrored values for
			// the second half of the animation. Turns easeIn into easeInOut.
			const mirrorEasing = (easing) => (p) =>
				p <= 0.5 ? easing(2 * p) / 2 : (2 - easing(2 * (1 - p))) / 2; // CONCATENATED MODULE: ./node_modules/motion-utils/dist/es/easing/modifiers/reverse.mjs
			// Accepts an easing function and returns a new one that outputs reversed values.
			// Turns easeIn into easeOut.
			const reverseEasing = (easing) => (p) => 1 - easing(1 - p); // CONCATENATED MODULE: ./node_modules/motion-utils/dist/es/easing/back.mjs

			const backOut = /*@__PURE__*/ cubicBezier(0.33, 1.53, 0.69, 0.99);
			const backIn = /*@__PURE__*/ reverseEasing(backOut);
			const backInOut = /*@__PURE__*/ mirrorEasing(backIn); // CONCATENATED MODULE: ./node_modules/motion-utils/dist/es/easing/anticipate.mjs

			const anticipate = (p) =>
				(p *= 2) < 1 ? 0.5 * backIn(p) : 0.5 * (2 - 2 ** (-10 * (p - 1))); // CONCATENATED MODULE: ./node_modules/motion-utils/dist/es/easing/circ.mjs

			const circIn = (p) => 1 - Math.sin(Math.acos(p));
			const circOut = reverseEasing(circIn);
			const circInOut = mirrorEasing(circIn); // CONCATENATED MODULE: ./node_modules/motion-utils/dist/es/easing/utils/is-bezier-definition.mjs
			const isBezierDefinition = (easing) =>
				Array.isArray(easing) && typeof easing[0] === "number"; // CONCATENATED MODULE: ./node_modules/motion-utils/dist/es/easing/utils/map.mjs

			const easingLookup = {
				linear: noop,
				easeIn: easeIn,
				easeInOut: easeInOut,
				easeOut: easeOut,
				circIn: circIn,
				circInOut: circInOut,
				circOut: circOut,
				backIn: backIn,
				backInOut: backInOut,
				backOut: backOut,
				anticipate: anticipate,
			};
			const isValidEasing = (easing) => {
				return typeof easing === "string";
			};
			const easingDefinitionToFunction = (definition) => {
				if (isBezierDefinition(definition)) {
					// If cubic bezier definition, create bezier curve
					invariant(
						definition.length === 4,
						`Cubic bezier arrays must contain four numerical values.`,
						"cubic-bezier-length",
					);
					const [x1, y1, x2, y2] = definition;
					return cubicBezier(x1, y1, x2, y2);
				} else if (isValidEasing(definition)) {
					// Else lookup from table
					invariant(
						easingLookup[definition] !== undefined,
						`Invalid easing type '${definition}'`,
						"invalid-easing-type",
					);
					return easingLookup[definition];
				}
				return definition;
			}; // CONCATENATED MODULE: ./node_modules/motion-utils/dist/es/progress.mjs
			/*
  Progress within given range

  Given a lower limit and an upper limit, we return the progress
  (expressed as a number 0-1) represented by the given value, and
  limit that progress to within 0-1.

  @param [number]: Lower limit
  @param [number]: Upper limit
  @param [number]: Value to find progress within given range
  @return [number]: Progress of value within range as expressed 0-1
*/
			/*#__NO_SIDE_EFFECTS__*/
			const progress_progress = (from, to, value) => {
				const toFromDifference = to - from;
				return toFromDifference === 0 ? 1 : (value - from) / toFromDifference;
			}; // CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/utils/interpolate.mjs

			function createMixers(output, ease, customMixer) {
				const mixers = [];
				const mixerFactory = customMixer || MotionGlobalConfig.mix || mix;
				const numMixers = output.length - 1;
				for (let i = 0; i < numMixers; i++) {
					let mixer = mixerFactory(output[i], output[i + 1]);
					if (ease) {
						const easingFunction = Array.isArray(ease) ? ease[i] || noop : ease;
						mixer = pipe(easingFunction, mixer);
					}
					mixers.push(mixer);
				}
				return mixers;
			}
			/**
			 * Create a function that maps from a numerical input array to a generic output array.
			 *
			 * Accepts:
			 *   - Numbers
			 *   - Colors (hex, hsl, hsla, rgb, rgba)
			 *   - Complex (combinations of one or more numbers or strings)
			 *
			 * ```jsx
			 * const mixColor = interpolate([0, 1], ['#fff', '#000'])
			 *
			 * mixColor(0.5) // 'rgba(128, 128, 128, 1)'
			 * ```
			 *
			 * TODO Revisit this approach once we've moved to data models for values,
			 * probably not needed to pregenerate mixer functions.
			 *
			 * @public
			 */
			function interpolate(
				input,
				output,
				{ clamp: isClamp = true, ease, mixer } = {},
			) {
				const inputLength = input.length;
				invariant(
					inputLength === output.length,
					"Both input and output ranges must be the same length",
					"range-length",
				);
				/**
				 * If we're only provided a single input, we can just make a function
				 * that returns the output.
				 */
				if (inputLength === 1) return () => output[0];
				if (inputLength === 2 && output[0] === output[1])
					return () => output[1];
				const isZeroDeltaRange = input[0] === input[1];
				// If input runs highest -> lowest, reverse both arrays
				if (input[0] > input[inputLength - 1]) {
					input = [...input].reverse();
					output = [...output].reverse();
				}
				const mixers = createMixers(output, ease, mixer);
				const numMixers = mixers.length;
				const interpolator = (v) => {
					if (isZeroDeltaRange && v < input[0]) return output[0];
					let i = 0;
					if (numMixers > 1) {
						for (; i < input.length - 2; i++) {
							if (v < input[i + 1]) break;
						}
					}
					const progressInRange = progress_progress(input[i], input[i + 1], v);
					return mixers[i](progressInRange);
				};
				return isClamp
					? (v) => interpolator(clamp(input[0], input[inputLength - 1], v))
					: interpolator;
			} // CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/animation/keyframes/offsets/fill.mjs

			function fillOffset(offset, remaining) {
				const min = offset[offset.length - 1];
				for (let i = 1; i <= remaining; i++) {
					const offsetProgress = progress_progress(0, remaining, i);
					offset.push(mixNumber(min, 1, offsetProgress));
				}
			} // CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/animation/keyframes/offsets/default.mjs

			function defaultOffset(arr) {
				const offset = [0];
				fillOffset(offset, arr.length - 1);
				return offset;
			} // CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/animation/keyframes/offsets/time.mjs
			function convertOffsetToTimes(offset, duration) {
				return offset.map((o) => o * duration);
			} // CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/animation/generators/keyframes.mjs

			function defaultEasing(values, easing) {
				return values
					.map(() => easing || easeInOut)
					.splice(0, values.length - 1);
			}
			function keyframes_keyframes({
				duration = 300,
				keyframes: keyframeValues,
				times,
				ease = "easeInOut",
			}) {
				/**
				 * Easing functions can be externally defined as strings. Here we convert them
				 * into actual functions.
				 */
				const easingFunctions = isEasingArray(ease)
					? ease.map(easingDefinitionToFunction)
					: easingDefinitionToFunction(ease);
				/**
				 * This is the Iterator-spec return value. We ensure it's mutable rather than using a generator
				 * to reduce GC during animation.
				 */
				const state = {
					done: false,
					value: keyframeValues[0],
				};
				/**
				 * Create a times array based on the provided 0-1 offsets
				 */
				const absoluteTimes = convertOffsetToTimes(
					// Only use the provided offsets if they're the correct length
					// TODO Maybe we should warn here if there's a length mismatch
					times && times.length === keyframeValues.length
						? times
						: defaultOffset(keyframeValues),
					duration,
				);
				const mapTimeToKeyframe = interpolate(absoluteTimes, keyframeValues, {
					ease: Array.isArray(easingFunctions)
						? easingFunctions
						: defaultEasing(keyframeValues, easingFunctions),
				});
				return {
					calculatedDuration: duration,
					next: (t) => {
						state.value = mapTimeToKeyframe(t);
						state.done = t >= duration;
						return state;
					},
				};
			} // CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/animation/keyframes/get-final.mjs
			const isNotNull = (value) => value !== null;
			function getFinalKeyframe(
				keyframes,
				{ repeat, repeatType = "loop" },
				finalKeyframe,
				speed = 1,
			) {
				const resolvedKeyframes = keyframes.filter(isNotNull);
				const useFirstKeyframe =
					speed < 0 || (repeat && repeatType !== "loop" && repeat % 2 === 1);
				const index = useFirstKeyframe ? 0 : resolvedKeyframes.length - 1;
				return !index || finalKeyframe === undefined
					? resolvedKeyframes[index]
					: finalKeyframe;
			} // CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/animation/utils/replace-transition-type.mjs

			const transitionTypeMap = {
				decay: inertia_inertia,
				inertia: inertia_inertia,
				tween: keyframes_keyframes,
				keyframes: keyframes_keyframes,
				spring: spring,
			};
			function replaceTransitionType(transition) {
				if (typeof transition.type === "string") {
					transition.type = transitionTypeMap[transition.type];
				}
			} // CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/animation/utils/WithPromise.mjs
			class WithPromise {
				constructor() {
					this.updateFinished();
				}
				get finished() {
					return this._finished;
				}
				updateFinished() {
					this._finished = new Promise((resolve) => {
						this.resolve = resolve;
					});
				}
				notifyFinished() {
					this.resolve();
				}
				/**
				 * Allows the animation to be awaited.
				 *
				 * @deprecated Use `finished` instead.
				 */
				then(onResolve, onReject) {
					return this.finished.then(onResolve, onReject);
				}
			} // CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/animation/JSAnimation.mjs

			const percentToProgress = (percent) => percent / 100;
			class JSAnimation extends WithPromise {
				constructor(options) {
					super();
					this.state = "idle";
					this.startTime = null;
					this.isStopped = false;
					/**
					 * The current time of the animation.
					 */
					this.currentTime = 0;
					/**
					 * The time at which the animation was paused.
					 */
					this.holdTime = null;
					/**
					 * Playback speed as a factor. 0 would be stopped, -1 reverse and 2 double speed.
					 */
					this.playbackSpeed = 1;
					/**
					 * This method is bound to the instance to fix a pattern where
					 * animation.stop is returned as a reference from a useEffect.
					 */
					this.stop = () => {
						const { motionValue } = this.options;
						if (motionValue && motionValue.updatedAt !== sync_time_time.now()) {
							this.tick(sync_time_time.now());
						}
						this.isStopped = true;
						if (this.state === "idle") return;
						this.teardown();
						this.options.onStop?.();
					};
					activeAnimations.mainThread++;
					this.options = options;
					this.initAnimation();
					this.play();
					if (options.autoplay === false) this.pause();
				}
				initAnimation() {
					const { options } = this;
					replaceTransitionType(options);
					const {
						type = keyframes_keyframes,
						repeat = 0,
						repeatDelay = 0,
						repeatType,
						velocity = 0,
					} = options;
					let { keyframes: keyframes$1 } = options;
					const generatorFactory = type || keyframes_keyframes;
					if (false) {
					}
					if (
						generatorFactory !== keyframes_keyframes &&
						typeof keyframes$1[0] !== "number"
					) {
						this.mixKeyframes = pipe(
							percentToProgress,
							mix(keyframes$1[0], keyframes$1[1]),
						);
						keyframes$1 = [0, 100];
					}
					const generator = generatorFactory({
						...options,
						keyframes: keyframes$1,
					});
					/**
					 * If we have a mirror repeat type we need to create a second generator that outputs the
					 * mirrored (not reversed) animation and later ping pong between the two generators.
					 */
					if (repeatType === "mirror") {
						this.mirroredGenerator = generatorFactory({
							...options,
							keyframes: [...keyframes$1].reverse(),
							velocity: -velocity,
						});
					}
					/**
					 * If duration is undefined and we have repeat options,
					 * we need to calculate a duration from the generator.
					 *
					 * We set it to the generator itself to cache the duration.
					 * Any timeline resolver will need to have already precalculated
					 * the duration by this step.
					 */
					if (generator.calculatedDuration === null) {
						generator.calculatedDuration = calcGeneratorDuration(generator);
					}
					const { calculatedDuration } = generator;
					this.calculatedDuration = calculatedDuration;
					this.resolvedDuration = calculatedDuration + repeatDelay;
					this.totalDuration =
						this.resolvedDuration * (repeat + 1) - repeatDelay;
					this.generator = generator;
				}
				updateTime(timestamp) {
					const animationTime =
						Math.round(timestamp - this.startTime) * this.playbackSpeed;
					// Update currentTime
					if (this.holdTime !== null) {
						this.currentTime = this.holdTime;
					} else {
						// Rounding the time because floating point arithmetic is not always accurate, e.g. 3000.367 - 1000.367 =
						// 2000.0000000000002. This is a problem when we are comparing the currentTime with the duration, for
						// example.
						this.currentTime = animationTime;
					}
				}
				tick(timestamp, sample = false) {
					const {
						generator,
						totalDuration,
						mixKeyframes,
						mirroredGenerator,
						resolvedDuration,
						calculatedDuration,
					} = this;
					if (this.startTime === null) return generator.next(0);
					const {
						delay = 0,
						keyframes,
						repeat,
						repeatType,
						repeatDelay,
						type,
						onUpdate,
						finalKeyframe,
					} = this.options;
					/**
					 * requestAnimationFrame timestamps can come through as lower than
					 * the startTime as set by performance.now(). Here we prevent this,
					 * though in the future it could be possible to make setting startTime
					 * a pending operation that gets resolved here.
					 */
					if (this.speed > 0) {
						this.startTime = Math.min(this.startTime, timestamp);
					} else if (this.speed < 0) {
						this.startTime = Math.min(
							timestamp - totalDuration / this.speed,
							this.startTime,
						);
					}
					if (sample) {
						this.currentTime = timestamp;
					} else {
						this.updateTime(timestamp);
					}
					// Rebase on delay
					const timeWithoutDelay =
						this.currentTime - delay * (this.playbackSpeed >= 0 ? 1 : -1);
					const isInDelayPhase =
						this.playbackSpeed >= 0
							? timeWithoutDelay < 0
							: timeWithoutDelay > totalDuration;
					this.currentTime = Math.max(timeWithoutDelay, 0);
					// If this animation has finished, set the current time  to the total duration.
					if (this.state === "finished" && this.holdTime === null) {
						this.currentTime = totalDuration;
					}
					let elapsed = this.currentTime;
					let frameGenerator = generator;
					if (repeat) {
						/**
						 * Get the current progress (0-1) of the animation. If t is >
						 * than duration we'll get values like 2.5 (midway through the
						 * third iteration)
						 */
						const progress =
							Math.min(this.currentTime, totalDuration) / resolvedDuration;
						/**
						 * Get the current iteration (0 indexed). For instance the floor of
						 * 2.5 is 2.
						 */
						let currentIteration = Math.floor(progress);
						/**
						 * Get the current progress of the iteration by taking the remainder
						 * so 2.5 is 0.5 through iteration 2
						 */
						let iterationProgress = progress % 1.0;
						/**
						 * If iteration progress is 1 we count that as the end
						 * of the previous iteration.
						 */
						if (!iterationProgress && progress >= 1) {
							iterationProgress = 1;
						}
						iterationProgress === 1 && currentIteration--;
						currentIteration = Math.min(currentIteration, repeat + 1);
						/**
						 * Reverse progress if we're not running in "normal" direction
						 */
						const isOddIteration = Boolean(currentIteration % 2);
						if (isOddIteration) {
							if (repeatType === "reverse") {
								iterationProgress = 1 - iterationProgress;
								if (repeatDelay) {
									iterationProgress -= repeatDelay / resolvedDuration;
								}
							} else if (repeatType === "mirror") {
								frameGenerator = mirroredGenerator;
							}
						}
						elapsed = clamp(0, 1, iterationProgress) * resolvedDuration;
					}
					/**
					 * If we're in negative time, set state as the initial keyframe.
					 * This prevents delay: x, duration: 0 animations from finishing
					 * instantly.
					 */
					const state = isInDelayPhase
						? { done: false, value: keyframes[0] }
						: frameGenerator.next(elapsed);
					if (mixKeyframes) {
						state.value = mixKeyframes(state.value);
					}
					let { done } = state;
					if (!isInDelayPhase && calculatedDuration !== null) {
						done =
							this.playbackSpeed >= 0
								? this.currentTime >= totalDuration
								: this.currentTime <= 0;
					}
					const isAnimationFinished =
						this.holdTime === null &&
						(this.state === "finished" || (this.state === "running" && done));
					// TODO: The exception for inertia could be cleaner here
					if (isAnimationFinished && type !== inertia_inertia) {
						state.value = getFinalKeyframe(
							keyframes,
							this.options,
							finalKeyframe,
							this.speed,
						);
					}
					if (onUpdate) {
						onUpdate(state.value);
					}
					if (isAnimationFinished) {
						this.finish();
					}
					return state;
				}
				/**
				 * Allows the returned animation to be awaited or promise-chained. Currently
				 * resolves when the animation finishes at all but in a future update could/should
				 * reject if its cancels.
				 */
				then(resolve, reject) {
					return this.finished.then(resolve, reject);
				}
				get duration() {
					return millisecondsToSeconds(this.calculatedDuration);
				}
				get iterationDuration() {
					const { delay = 0 } = this.options || {};
					return this.duration + millisecondsToSeconds(delay);
				}
				get time() {
					return millisecondsToSeconds(this.currentTime);
				}
				set time(newTime) {
					newTime = time_conversion_secondsToMilliseconds(newTime);
					this.currentTime = newTime;
					if (
						this.startTime === null ||
						this.holdTime !== null ||
						this.playbackSpeed === 0
					) {
						this.holdTime = newTime;
					} else if (this.driver) {
						this.startTime = this.driver.now() - newTime / this.playbackSpeed;
					}
					this.driver?.start(false);
				}
				get speed() {
					return this.playbackSpeed;
				}
				set speed(newSpeed) {
					this.updateTime(sync_time_time.now());
					const hasChanged = this.playbackSpeed !== newSpeed;
					this.playbackSpeed = newSpeed;
					if (hasChanged) {
						this.time = millisecondsToSeconds(this.currentTime);
					}
				}
				play() {
					if (this.isStopped) return;
					const { driver = frameloopDriver, startTime } = this.options;
					if (!this.driver) {
						this.driver = driver((timestamp) => this.tick(timestamp));
					}
					this.options.onPlay?.();
					const now = this.driver.now();
					if (this.state === "finished") {
						this.updateFinished();
						this.startTime = now;
					} else if (this.holdTime !== null) {
						this.startTime = now - this.holdTime;
					} else if (!this.startTime) {
						this.startTime = startTime ?? now;
					}
					if (this.state === "finished" && this.speed < 0) {
						this.startTime += this.calculatedDuration;
					}
					this.holdTime = null;
					/**
					 * Set playState to running only after we've used it in
					 * the previous logic.
					 */
					this.state = "running";
					this.driver.start();
				}
				pause() {
					this.state = "paused";
					this.updateTime(sync_time_time.now());
					this.holdTime = this.currentTime;
				}
				complete() {
					if (this.state !== "running") {
						this.play();
					}
					this.state = "finished";
					this.holdTime = null;
				}
				finish() {
					this.notifyFinished();
					this.teardown();
					this.state = "finished";
					this.options.onComplete?.();
				}
				cancel() {
					this.holdTime = null;
					this.startTime = 0;
					this.tick(0);
					this.teardown();
					this.options.onCancel?.();
				}
				teardown() {
					this.state = "idle";
					this.stopDriver();
					this.startTime = this.holdTime = null;
					activeAnimations.mainThread--;
				}
				stopDriver() {
					if (!this.driver) return;
					this.driver.stop();
					this.driver = undefined;
				}
				sample(sampleTime) {
					this.startTime = 0;
					return this.tick(sampleTime, true);
				}
				attachTimeline(timeline) {
					if (this.options.allowFlatten) {
						this.options.type = "keyframes";
						this.options.ease = "linear";
						this.initAnimation();
					}
					this.driver?.stop();
					return timeline.observe(this);
				}
			}
			// Legacy function support
			function animateValue(options) {
				return new JSAnimation(options);
			} // CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/render/dom/is-css-var.mjs
			const isCSSVar = (name) => name.startsWith("--"); // CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/render/dom/style-set.mjs

			function setStyle(element, name, value) {
				isCSSVar(name)
					? element.style.setProperty(name, value)
					: (element.style[name] = value);
			} // CONCATENATED MODULE: ./node_modules/motion-utils/dist/es/memo.mjs
			/*#__NO_SIDE_EFFECTS__*/
			function memo(callback) {
				let result;
				return () => {
					if (result === undefined) result = callback();
					return result;
				};
			} // CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/utils/supports/scroll-timeline.mjs

			const supportsScrollTimeline = /* @__PURE__ */ memo(
				() => window.ScrollTimeline !== undefined,
			); // CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/utils/supports/flags.mjs
			/**
			 * Add the ability for test suites to manually set support flags
			 * to better test more environments.
			 */
			const supportsFlags = {}; // CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/utils/supports/memo.mjs

			function memoSupports(callback, supportsFlag) {
				const memoized = memo(callback);
				return () => supportsFlags[supportsFlag] ?? memoized();
			} // CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/utils/supports/linear-easing.mjs

			const supportsLinearEasing = /*@__PURE__*/ memoSupports(() => {
				try {
					document
						.createElement("div")
						.animate({ opacity: 0 }, { easing: "linear(0, 1)" });
				} catch (e) {
					return false;
				}
				return true;
			}, "linearEasing"); // CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/animation/waapi/easing/cubic-bezier.mjs
			const cubicBezierAsString = ([a, b, c, d]) =>
				`cubic-bezier(${a}, ${b}, ${c}, ${d})`; // CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/animation/waapi/easing/supported.mjs

			const supportedWaapiEasing = {
				linear: "linear",
				ease: "ease",
				easeIn: "ease-in",
				easeOut: "ease-out",
				easeInOut: "ease-in-out",
				circIn: /*@__PURE__*/ cubicBezierAsString([0, 0.65, 0.55, 1]),
				circOut: /*@__PURE__*/ cubicBezierAsString([0.55, 0, 1, 0.45]),
				backIn: /*@__PURE__*/ cubicBezierAsString([0.31, 0.01, 0.66, -0.59]),
				backOut: /*@__PURE__*/ cubicBezierAsString([0.33, 1.53, 0.69, 0.99]),
			}; // CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/animation/waapi/easing/map-easing.mjs

			function mapEasingToNativeEasing(easing, duration) {
				if (!easing) {
					return undefined;
				} else if (typeof easing === "function") {
					return supportsLinearEasing()
						? generateLinearEasing(easing, duration)
						: "ease-out";
				} else if (isBezierDefinition(easing)) {
					return cubicBezierAsString(easing);
				} else if (Array.isArray(easing)) {
					return easing.map(
						(segmentEasing) =>
							mapEasingToNativeEasing(segmentEasing, duration) ||
							supportedWaapiEasing.easeOut,
					);
				} else {
					return supportedWaapiEasing[easing];
				}
			} // CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/animation/waapi/start-waapi-animation.mjs

			function startWaapiAnimation(
				element,
				valueName,
				keyframes,
				{
					delay = 0,
					duration = 300,
					repeat = 0,
					repeatType = "loop",
					ease = "easeOut",
					times,
				} = {},
				pseudoElement = undefined,
			) {
				const keyframeOptions = {
					[valueName]: keyframes,
				};
				if (times) keyframeOptions.offset = times;
				const easing = mapEasingToNativeEasing(ease, duration);
				/**
				 * If this is an easing array, apply to keyframes, not animation as a whole
				 */
				if (Array.isArray(easing)) keyframeOptions.easing = easing;
				if (statsBuffer.value) {
					activeAnimations.waapi++;
				}
				const options = {
					delay,
					duration,
					easing: !Array.isArray(easing) ? easing : "linear",
					fill: "both",
					iterations: repeat + 1,
					direction: repeatType === "reverse" ? "alternate" : "normal",
				};
				if (pseudoElement) options.pseudoElement = pseudoElement;
				const animation = element.animate(keyframeOptions, options);
				if (statsBuffer.value) {
					animation.finished.finally(() => {
						activeAnimations.waapi--;
					});
				}
				return animation;
			} // CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/animation/generators/utils/is-generator.mjs
			function isGenerator(type) {
				return typeof type === "function" && "applyToOptions" in type;
			} // CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/animation/waapi/utils/apply-generator.mjs

			function applyGeneratorOptions({ type, ...options }) {
				if (isGenerator(type) && supportsLinearEasing()) {
					return type.applyToOptions(options);
				} else {
					options.duration ?? (options.duration = 300);
					options.ease ?? (options.ease = "easeOut");
				}
				return options;
			} // CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/animation/NativeAnimation.mjs

			/**
			 * NativeAnimation implements AnimationPlaybackControls for the browser's Web Animations API.
			 */
			class NativeAnimation extends WithPromise {
				constructor(options) {
					super();
					this.finishedTime = null;
					this.isStopped = false;
					if (!options) return;
					const {
						element,
						name,
						keyframes,
						pseudoElement,
						allowFlatten = false,
						finalKeyframe,
						onComplete,
					} = options;
					this.isPseudoElement = Boolean(pseudoElement);
					this.allowFlatten = allowFlatten;
					this.options = options;
					invariant(
						typeof options.type !== "string",
						`Mini animate() doesn't support "type" as a string.`,
						"mini-spring",
					);
					const transition = applyGeneratorOptions(options);
					this.animation = startWaapiAnimation(
						element,
						name,
						keyframes,
						transition,
						pseudoElement,
					);
					if (transition.autoplay === false) {
						this.animation.pause();
					}
					this.animation.onfinish = () => {
						this.finishedTime = this.time;
						if (!pseudoElement) {
							const keyframe = getFinalKeyframe(
								keyframes,
								this.options,
								finalKeyframe,
								this.speed,
							);
							if (this.updateMotionValue) {
								this.updateMotionValue(keyframe);
							} else {
								/**
								 * If we can, we want to commit the final style as set by the user,
								 * rather than the computed keyframe value supplied by the animation.
								 */
								setStyle(element, name, keyframe);
							}
							this.animation.cancel();
						}
						onComplete?.();
						this.notifyFinished();
					};
				}
				play() {
					if (this.isStopped) return;
					this.animation.play();
					if (this.state === "finished") {
						this.updateFinished();
					}
				}
				pause() {
					this.animation.pause();
				}
				complete() {
					this.animation.finish?.();
				}
				cancel() {
					try {
						this.animation.cancel();
					} catch (e) {}
				}
				stop() {
					if (this.isStopped) return;
					this.isStopped = true;
					const { state } = this;
					if (state === "idle" || state === "finished") {
						return;
					}
					if (this.updateMotionValue) {
						this.updateMotionValue();
					} else {
						this.commitStyles();
					}
					if (!this.isPseudoElement) this.cancel();
				}
				/**
				 * WAAPI doesn't natively have any interruption capabilities.
				 *
				 * In this method, we commit styles back to the DOM before cancelling
				 * the animation.
				 *
				 * This is designed to be overridden by NativeAnimationExtended, which
				 * will create a renderless JS animation and sample it twice to calculate
				 * its current value, "previous" value, and therefore allow
				 * Motion to also correctly calculate velocity for any subsequent animation
				 * while deferring the commit until the next animation frame.
				 */
				commitStyles() {
					if (!this.isPseudoElement) {
						this.animation.commitStyles?.();
					}
				}
				get duration() {
					const duration =
						this.animation.effect?.getComputedTiming?.().duration || 0;
					return millisecondsToSeconds(Number(duration));
				}
				get iterationDuration() {
					const { delay = 0 } = this.options || {};
					return this.duration + millisecondsToSeconds(delay);
				}
				get time() {
					return millisecondsToSeconds(Number(this.animation.currentTime) || 0);
				}
				set time(newTime) {
					this.finishedTime = null;
					this.animation.currentTime =
						time_conversion_secondsToMilliseconds(newTime);
				}
				/**
				 * The playback speed of the animation.
				 * 1 = normal speed, 2 = double speed, 0.5 = half speed.
				 */
				get speed() {
					return this.animation.playbackRate;
				}
				set speed(newSpeed) {
					// Allow backwards playback after finishing
					if (newSpeed < 0) this.finishedTime = null;
					this.animation.playbackRate = newSpeed;
				}
				get state() {
					return this.finishedTime !== null
						? "finished"
						: this.animation.playState;
				}
				get startTime() {
					return Number(this.animation.startTime);
				}
				set startTime(newStartTime) {
					this.animation.startTime = newStartTime;
				}
				/**
				 * Attaches a timeline to the animation, for instance the `ScrollTimeline`.
				 */
				attachTimeline({ timeline, observe }) {
					if (this.allowFlatten) {
						this.animation.effect?.updateTiming({ easing: "linear" });
					}
					this.animation.onfinish = null;
					if (timeline && supportsScrollTimeline()) {
						this.animation.timeline = timeline;
						return noop;
					} else {
						return observe(this);
					}
				}
			} // CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/animation/waapi/utils/unsupported-easing.mjs

			const unsupportedEasingFunctions = {
				anticipate: anticipate,
				backInOut: backInOut,
				circInOut: circInOut,
			};
			function isUnsupportedEase(key) {
				return key in unsupportedEasingFunctions;
			}
			function replaceStringEasing(transition) {
				if (
					typeof transition.ease === "string" &&
					isUnsupportedEase(transition.ease)
				) {
					transition.ease = unsupportedEasingFunctions[transition.ease];
				}
			} // CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/animation/NativeAnimationExtended.mjs

			/**
			 * 10ms is chosen here as it strikes a balance between smooth
			 * results (more than one keyframe per frame at 60fps) and
			 * keyframe quantity.
			 */
			const sampleDelta = 10; //ms
			class NativeAnimationExtended extends NativeAnimation {
				constructor(options) {
					/**
					 * The base NativeAnimation function only supports a subset
					 * of Motion easings, and WAAPI also only supports some
					 * easing functions via string/cubic-bezier definitions.
					 *
					 * This function replaces those unsupported easing functions
					 * with a JS easing function. This will later get compiled
					 * to a linear() easing function.
					 */
					replaceStringEasing(options);
					/**
					 * Ensure we replace the transition type with a generator function
					 * before passing to WAAPI.
					 *
					 * TODO: Does this have a better home? It could be shared with
					 * JSAnimation.
					 */
					replaceTransitionType(options);
					super(options);
					if (options.startTime) {
						this.startTime = options.startTime;
					}
					this.options = options;
				}
				/**
				 * WAAPI doesn't natively have any interruption capabilities.
				 *
				 * Rather than read commited styles back out of the DOM, we can
				 * create a renderless JS animation and sample it twice to calculate
				 * its current value, "previous" value, and therefore allow
				 * Motion to calculate velocity for any subsequent animation.
				 */
				updateMotionValue(value) {
					const { motionValue, onUpdate, onComplete, element, ...options } =
						this.options;
					if (!motionValue) return;
					if (value !== undefined) {
						motionValue.set(value);
						return;
					}
					const sampleAnimation = new JSAnimation({
						...options,
						autoplay: false,
					});
					const sampleTime = time_conversion_secondsToMilliseconds(
						this.finishedTime ?? this.time,
					);
					motionValue.setWithVelocity(
						sampleAnimation.sample(sampleTime - sampleDelta).value,
						sampleAnimation.sample(sampleTime).value,
						sampleDelta,
					);
					sampleAnimation.stop();
				}
			} // CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/animation/utils/is-animatable.mjs

			/**
			 * Check if a value is animatable. Examples:
			 *
			 * ✅: 100, "100px", "#fff"
			 * ❌: "block", "url(2.jpg)"
			 * @param value
			 *
			 * @internal
			 */
			const isAnimatable = (value, name) => {
				// If the list of keys that might be non-animatable grows, replace with Set
				if (name === "zIndex") return false;
				// If it's a number or a keyframes array, we can animate it. We might at some point
				// need to do a deep isAnimatable check of keyframes, or let Popmotion handle this,
				// but for now lets leave it like this for performance reasons
				if (typeof value === "number" || Array.isArray(value)) return true;
				if (
					typeof value === "string" && // It's animatable if we have a string
					(complex.test(value) || value === "0") && // And it contains numbers and/or colors
					!value.startsWith("url(") // Unless it starts with "url("
				) {
					return true;
				}
				return false;
			}; // CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/animation/utils/can-animate.mjs

			function hasKeyframesChanged(keyframes) {
				const current = keyframes[0];
				if (keyframes.length === 1) return true;
				for (let i = 0; i < keyframes.length; i++) {
					if (keyframes[i] !== current) return true;
				}
			}
			function canAnimate(keyframes, name, type, velocity) {
				/**
				 * Check if we're able to animate between the start and end keyframes,
				 * and throw a warning if we're attempting to animate between one that's
				 * animatable and another that isn't.
				 */
				const originKeyframe = keyframes[0];
				if (originKeyframe === null) return false;
				/**
				 * These aren't traditionally animatable but we do support them.
				 * In future we could look into making this more generic or replacing
				 * this function with mix() === mixImmediate
				 */
				if (name === "display" || name === "visibility") return true;
				const targetKeyframe = keyframes[keyframes.length - 1];
				const isOriginAnimatable = isAnimatable(originKeyframe, name);
				const isTargetAnimatable = isAnimatable(targetKeyframe, name);
				warning(
					isOriginAnimatable === isTargetAnimatable,
					`You are trying to animate ${name} from "${originKeyframe}" to "${targetKeyframe}". "${isOriginAnimatable ? targetKeyframe : originKeyframe}" is not an animatable value.`,
					"value-not-animatable",
				);
				// Always skip if any of these are true
				if (!isOriginAnimatable || !isTargetAnimatable) {
					return false;
				}
				return (
					hasKeyframesChanged(keyframes) ||
					((type === "spring" || isGenerator(type)) && velocity)
				);
			} // CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/animation/waapi/supports/waapi.mjs

			/**
			 * A list of values that can be hardware-accelerated.
			 */
			const acceleratedValues = new Set([
				"opacity",
				"clipPath",
				"filter",
				"transform",
				// TODO: Could be re-enabled now we have support for linear() easing
				// "background-color"
			]);
			const supportsWaapi = /*@__PURE__*/ memo(() =>
				Object.hasOwn(Element.prototype, "animate"),
			);
			function supportsBrowserAnimation(options) {
				const { motionValue, name, repeatDelay, repeatType, damping, type } =
					options;
				const subject = motionValue?.owner?.current;
				/**
				 * We use this check instead of isHTMLElement() because we explicitly
				 * **don't** want elements in different timing contexts (i.e. popups)
				 * to be accelerated, as it's not possible to sync these animations
				 * properly with those driven from the main window frameloop.
				 */
				if (!(subject instanceof HTMLElement)) {
					return false;
				}
				const { onUpdate, transformTemplate } = motionValue.owner.getProps();
				return (
					supportsWaapi() &&
					name &&
					acceleratedValues.has(name) &&
					(name !== "transform" || !transformTemplate) &&
					/**
					 * If we're outputting values to onUpdate then we can't use WAAPI as there's
					 * no way to read the value from WAAPI every frame.
					 */
					!onUpdate &&
					!repeatDelay &&
					repeatType !== "mirror" &&
					damping !== 0 &&
					type !== "inertia"
				);
			} // CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/animation/AsyncMotionValueAnimation.mjs

			/**
			 * Maximum time allowed between an animation being created and it being
			 * resolved for us to use the latter as the start time.
			 *
			 * This is to ensure that while we prefer to "start" an animation as soon
			 * as it's triggered, we also want to avoid a visual jump if there's a big delay
			 * between these two moments.
			 */
			const MAX_RESOLVE_DELAY = 40;
			class AsyncMotionValueAnimation extends WithPromise {
				constructor({
					autoplay = true,
					delay = 0,
					type = "keyframes",
					repeat = 0,
					repeatDelay = 0,
					repeatType = "loop",
					keyframes,
					name,
					motionValue,
					element,
					...options
				}) {
					super();
					/**
					 * Bound to support return animation.stop pattern
					 */
					this.stop = () => {
						if (this._animation) {
							this._animation.stop();
							this.stopTimeline?.();
						}
						this.keyframeResolver?.cancel();
					};
					this.createdAt = sync_time_time.now();
					const optionsWithDefaults = {
						autoplay,
						delay,
						type,
						repeat,
						repeatDelay,
						repeatType,
						name,
						motionValue,
						element,
						...options,
					};
					const KeyframeResolver$1 =
						element?.KeyframeResolver || KeyframeResolver;
					this.keyframeResolver = new KeyframeResolver$1(
						keyframes,
						(resolvedKeyframes, finalKeyframe, forced) =>
							this.onKeyframesResolved(
								resolvedKeyframes,
								finalKeyframe,
								optionsWithDefaults,
								!forced,
							),
						name,
						motionValue,
						element,
					);
					this.keyframeResolver?.scheduleResolve();
				}
				onKeyframesResolved(keyframes, finalKeyframe, options, sync) {
					this.keyframeResolver = undefined;
					const { name, type, velocity, delay, isHandoff, onUpdate } = options;
					this.resolvedAt = sync_time_time.now();
					/**
					 * If we can't animate this value with the resolved keyframes
					 * then we should complete it immediately.
					 */
					if (!canAnimate(keyframes, name, type, velocity)) {
						if (MotionGlobalConfig.instantAnimations || !delay) {
							onUpdate?.(getFinalKeyframe(keyframes, options, finalKeyframe));
						}
						keyframes[0] = keyframes[keyframes.length - 1];
						makeAnimationInstant(options);
						options.repeat = 0;
					}
					/**
					 * Resolve startTime for the animation.
					 *
					 * This method uses the createdAt and resolvedAt to calculate the
					 * animation startTime. *Ideally*, we would use the createdAt time as t=0
					 * as the following frame would then be the first frame of the animation in
					 * progress, which would feel snappier.
					 *
					 * However, if there's a delay (main thread work) between the creation of
					 * the animation and the first commited frame, we prefer to use resolvedAt
					 * to avoid a sudden jump into the animation.
					 */
					const startTime = sync
						? !this.resolvedAt
							? this.createdAt
							: this.resolvedAt - this.createdAt > MAX_RESOLVE_DELAY
								? this.resolvedAt
								: this.createdAt
						: undefined;
					const resolvedOptions = {
						startTime,
						finalKeyframe,
						...options,
						keyframes,
					};
					/**
					 * Animate via WAAPI if possible. If this is a handoff animation, the optimised animation will be running via
					 * WAAPI. Therefore, this animation must be JS to ensure it runs "under" the
					 * optimised animation.
					 */
					const animation =
						!isHandoff && supportsBrowserAnimation(resolvedOptions)
							? new NativeAnimationExtended({
									...resolvedOptions,
									element: resolvedOptions.motionValue.owner.current,
								})
							: new JSAnimation(resolvedOptions);
					animation.finished.then(() => this.notifyFinished()).catch(noop);
					if (this.pendingTimeline) {
						this.stopTimeline = animation.attachTimeline(this.pendingTimeline);
						this.pendingTimeline = undefined;
					}
					this._animation = animation;
				}
				get finished() {
					if (!this._animation) {
						return this._finished;
					} else {
						return this.animation.finished;
					}
				}
				then(onResolve, _onReject) {
					return this.finished.finally(onResolve).then(() => {});
				}
				get animation() {
					if (!this._animation) {
						this.keyframeResolver?.resume();
						flushKeyframeResolvers();
					}
					return this._animation;
				}
				get duration() {
					return this.animation.duration;
				}
				get iterationDuration() {
					return this.animation.iterationDuration;
				}
				get time() {
					return this.animation.time;
				}
				set time(newTime) {
					this.animation.time = newTime;
				}
				get speed() {
					return this.animation.speed;
				}
				get state() {
					return this.animation.state;
				}
				set speed(newSpeed) {
					this.animation.speed = newSpeed;
				}
				get startTime() {
					return this.animation.startTime;
				}
				attachTimeline(timeline) {
					if (this._animation) {
						this.stopTimeline = this.animation.attachTimeline(timeline);
					} else {
						this.pendingTimeline = timeline;
					}
					return () => this.stop();
				}
				play() {
					this.animation.play();
				}
				pause() {
					this.animation.pause();
				}
				complete() {
					this.animation.complete();
				}
				cancel() {
					if (this._animation) {
						this.animation.cancel();
					}
					this.keyframeResolver?.cancel();
				}
			} // CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/animation/animators/waapi/utils/get-final-keyframe.mjs
			const get_final_keyframe_isNotNull = (value) => value !== null;
			function get_final_keyframe_getFinalKeyframe(
				keyframes,
				{ repeat, repeatType = "loop" },
				finalKeyframe,
			) {
				const resolvedKeyframes = keyframes.filter(
					get_final_keyframe_isNotNull,
				);
				const index =
					repeat && repeatType !== "loop" && repeat % 2 === 1
						? 0
						: resolvedKeyframes.length - 1;
				return !index || finalKeyframe === undefined
					? resolvedKeyframes[index]
					: finalKeyframe;
			} // CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/animation/utils/default-transitions.mjs

			const underDampedSpring = {
				type: "spring",
				stiffness: 500,
				damping: 25,
				restSpeed: 10,
			};
			const criticallyDampedSpring = (target) => ({
				type: "spring",
				stiffness: 550,
				damping: target === 0 ? 2 * Math.sqrt(550) : 30,
				restSpeed: 10,
			});
			const keyframesTransition = {
				type: "keyframes",
				duration: 0.8,
			};
			/**
			 * Default easing curve is a slightly shallower version of
			 * the default browser easing curve.
			 */
			const default_transitions_ease = {
				type: "keyframes",
				ease: [0.25, 0.1, 0.35, 1],
				duration: 0.3,
			};
			const getDefaultTransition = (valueKey, { keyframes }) => {
				if (keyframes.length > 2) {
					return keyframesTransition;
				} else if (transformProps.has(valueKey)) {
					return valueKey.startsWith("scale")
						? criticallyDampedSpring(keyframes[1])
						: underDampedSpring;
				}
				return default_transitions_ease;
			}; // CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/animation/utils/is-transition-defined.mjs
			/**
			 * Decide whether a transition is defined on a given Transition.
			 * This filters out orchestration options and returns true
			 * if any options are left.
			 */
			function isTransitionDefined({
				when,
				delay: _delay,
				delayChildren,
				staggerChildren,
				staggerDirection,
				repeat,
				repeatType,
				repeatDelay,
				from,
				elapsed,
				...transition
			}) {
				return !!Object.keys(transition).length;
			} // CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/animation/interfaces/motion-value.mjs

			const animateMotionValue =
				(name, value, target, transition = {}, element, isHandoff) =>
				(onComplete) => {
					const valueTransition = getValueTransition(transition, name) || {};
					/**
					 * Most transition values are currently completely overwritten by value-specific
					 * transitions. In the future it'd be nicer to blend these transitions. But for now
					 * delay actually does inherit from the root transition if not value-specific.
					 */
					const delay = valueTransition.delay || transition.delay || 0;
					/**
					 * Elapsed isn't a public transition option but can be passed through from
					 * optimized appear effects in milliseconds.
					 */
					let { elapsed = 0 } = transition;
					elapsed = elapsed - time_conversion_secondsToMilliseconds(delay);
					const options = {
						keyframes: Array.isArray(target) ? target : [null, target],
						ease: "easeOut",
						velocity: value.getVelocity(),
						...valueTransition,
						delay: -elapsed,
						onUpdate: (v) => {
							value.set(v);
							valueTransition.onUpdate && valueTransition.onUpdate(v);
						},
						onComplete: () => {
							onComplete();
							valueTransition.onComplete && valueTransition.onComplete();
						},
						name,
						motionValue: value,
						element: isHandoff ? undefined : element,
					};
					/**
					 * If there's no transition defined for this value, we can generate
					 * unique transition settings for this value.
					 */
					if (!isTransitionDefined(valueTransition)) {
						Object.assign(options, getDefaultTransition(name, options));
					}
					/**
					 * Both WAAPI and our internal animation functions use durations
					 * as defined by milliseconds, while our external API defines them
					 * as seconds.
					 */
					options.duration &&
						(options.duration = time_conversion_secondsToMilliseconds(
							options.duration,
						));
					options.repeatDelay &&
						(options.repeatDelay = time_conversion_secondsToMilliseconds(
							options.repeatDelay,
						));
					/**
					 * Support deprecated way to set initial value. Prefer keyframe syntax.
					 */
					if (options.from !== undefined) {
						options.keyframes[0] = options.from;
					}
					let shouldSkip = false;
					if (
						options.type === false ||
						(options.duration === 0 && !options.repeatDelay)
					) {
						makeAnimationInstant(options);
						if (options.delay === 0) {
							shouldSkip = true;
						}
					}
					if (
						MotionGlobalConfig.instantAnimations ||
						MotionGlobalConfig.skipAnimations
					) {
						shouldSkip = true;
						makeAnimationInstant(options);
						options.delay = 0;
					}
					/**
					 * If the transition type or easing has been explicitly set by the user
					 * then we don't want to allow flattening the animation.
					 */
					options.allowFlatten = !valueTransition.type && !valueTransition.ease;
					/**
					 * If we can or must skip creating the animation, and apply only
					 * the final keyframe, do so. We also check once keyframes are resolved but
					 * this early check prevents the need to create an animation at all.
					 */
					if (shouldSkip && !isHandoff && value.get() !== undefined) {
						const finalKeyframe = get_final_keyframe_getFinalKeyframe(
							options.keyframes,
							valueTransition,
						);
						if (finalKeyframe !== undefined) {
							frame_frame.update(() => {
								options.onUpdate(finalKeyframe);
								options.onComplete();
							});
							return;
						}
					}
					return valueTransition.isSync
						? new JSAnimation(options)
						: new AsyncMotionValueAnimation(options);
				}; // CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/animation/interfaces/visual-element-target.mjs

			/**
			 * Decide whether we should block this animation. Previously, we achieved this
			 * just by checking whether the key was listed in protectedKeys, but this
			 * posed problems if an animation was triggered by afterChildren and protectedKeys
			 * had been set to true in the meantime.
			 */
			function shouldBlockAnimation({ protectedKeys, needsAnimating }, key) {
				const shouldBlock =
					Object.hasOwn(protectedKeys, key) && needsAnimating[key] !== true;
				needsAnimating[key] = false;
				return shouldBlock;
			}
			function animateTarget(
				visualElement,
				targetAndTransition,
				{ delay = 0, transitionOverride, type } = {},
			) {
				let {
					transition = visualElement.getDefaultTransition(),
					transitionEnd,
					...target
				} = targetAndTransition;
				if (transitionOverride) transition = transitionOverride;
				const animations = [];
				const animationTypeState =
					type &&
					visualElement.animationState &&
					visualElement.animationState.getState()[type];
				for (const key in target) {
					const value = visualElement.getValue(
						key,
						visualElement.latestValues[key] ?? null,
					);
					const valueTarget = target[key];
					if (
						valueTarget === undefined ||
						(animationTypeState &&
							shouldBlockAnimation(animationTypeState, key))
					) {
						continue;
					}
					const valueTransition = {
						delay,
						...getValueTransition(transition || {}, key),
					};
					/**
					 * If the value is already at the defined target, skip the animation.
					 */
					const currentValue = value.get();
					if (
						currentValue !== undefined &&
						!value.isAnimating &&
						!Array.isArray(valueTarget) &&
						valueTarget === currentValue &&
						!valueTransition.velocity
					) {
						continue;
					}
					/**
					 * If this is the first time a value is being animated, check
					 * to see if we're handling off from an existing animation.
					 */
					let isHandoff = false;
					if (window.MotionHandoffAnimation) {
						const appearId = getOptimisedAppearId(visualElement);
						if (appearId) {
							const startTime = window.MotionHandoffAnimation(
								appearId,
								key,
								frame_frame,
							);
							if (startTime !== null) {
								valueTransition.startTime = startTime;
								isHandoff = true;
							}
						}
					}
					addValueToWillChange(visualElement, key);
					value.start(
						animateMotionValue(
							key,
							value,
							valueTarget,
							visualElement.shouldReduceMotion && positionalKeys.has(key)
								? { type: false }
								: valueTransition,
							visualElement,
							isHandoff,
						),
					);
					const animation = value.animation;
					if (animation) {
						animations.push(animation);
					}
				}
				if (transitionEnd) {
					Promise.all(animations).then(() => {
						frame_frame.update(() => {
							transitionEnd && setTarget(visualElement, transitionEnd);
						});
					});
				}
				return animations;
			} // CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/animation/utils/calc-child-stagger.mjs
			function calcChildStagger(
				children,
				child,
				delayChildren,
				staggerChildren = 0,
				staggerDirection = 1,
			) {
				const index = Array.from(children)
					.sort((a, b) => a.sortNodePosition(b))
					.indexOf(child);
				const numChildren = children.size;
				const maxStaggerDuration = (numChildren - 1) * staggerChildren;
				const delayIsFunction = typeof delayChildren === "function";
				return delayIsFunction
					? delayChildren(index, numChildren)
					: staggerDirection === 1
						? index * staggerChildren
						: maxStaggerDuration - index * staggerChildren;
			} // CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/animation/interfaces/visual-element-variant.mjs

			function animateVariant(visualElement, variant, options = {}) {
				const resolved = resolveVariant(
					visualElement,
					variant,
					options.type === "exit"
						? visualElement.presenceContext?.custom
						: undefined,
				);
				let { transition = visualElement.getDefaultTransition() || {} } =
					resolved || {};
				if (options.transitionOverride) {
					transition = options.transitionOverride;
				}
				/**
				 * If we have a variant, create a callback that runs it as an animation.
				 * Otherwise, we resolve a Promise immediately for a composable no-op.
				 */
				const getAnimation = resolved
					? () => Promise.all(animateTarget(visualElement, resolved, options))
					: () => Promise.resolve();
				/**
				 * If we have children, create a callback that runs all their animations.
				 * Otherwise, we resolve a Promise immediately for a composable no-op.
				 */
				const getChildAnimations =
					visualElement.variantChildren && visualElement.variantChildren.size
						? (forwardDelay = 0) => {
								const {
									delayChildren = 0,
									staggerChildren,
									staggerDirection,
								} = transition;
								return animateChildren(
									visualElement,
									variant,
									forwardDelay,
									delayChildren,
									staggerChildren,
									staggerDirection,
									options,
								);
							}
						: () => Promise.resolve();
				/**
				 * If the transition explicitly defines a "when" option, we need to resolve either
				 * this animation or all children animations before playing the other.
				 */
				const { when } = transition;
				if (when) {
					const [first, last] =
						when === "beforeChildren"
							? [getAnimation, getChildAnimations]
							: [getChildAnimations, getAnimation];
					return first().then(() => last());
				} else {
					return Promise.all([
						getAnimation(),
						getChildAnimations(options.delay),
					]);
				}
			}
			function animateChildren(
				visualElement,
				variant,
				delay = 0,
				delayChildren = 0,
				staggerChildren = 0,
				staggerDirection = 1,
				options,
			) {
				const animations = [];
				for (const child of visualElement.variantChildren) {
					child.notify("AnimationStart", variant);
					animations.push(
						animateVariant(child, variant, {
							...options,
							delay:
								delay +
								(typeof delayChildren === "function" ? 0 : delayChildren) +
								calcChildStagger(
									visualElement.variantChildren,
									child,
									delayChildren,
									staggerChildren,
									staggerDirection,
								),
						}).then(() => child.notify("AnimationComplete", variant)),
					);
				}
				return Promise.all(animations);
			} // CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/animation/interfaces/visual-element.mjs

			function animateVisualElement(visualElement, definition, options = {}) {
				visualElement.notify("AnimationStart", definition);
				let animation;
				if (Array.isArray(definition)) {
					const animations = definition.map((variant) =>
						animateVariant(visualElement, variant, options),
					);
					animation = Promise.all(animations);
				} else if (typeof definition === "string") {
					animation = animateVariant(visualElement, definition, options);
				} else {
					const resolvedDefinition =
						typeof definition === "function"
							? resolveVariant(visualElement, definition, options.custom)
							: definition;
					animation = Promise.all(
						animateTarget(visualElement, resolvedDefinition, options),
					);
				}
				return animation.then(() => {
					visualElement.notify("AnimationComplete", definition);
				});
			} // CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/utils/shallow-compare.mjs
			function shallowCompare(next, prev) {
				if (!Array.isArray(prev)) return false;
				const prevLength = prev.length;
				if (prevLength !== next.length) return false;
				for (let i = 0; i < prevLength; i++) {
					if (prev[i] !== next[i]) return false;
				}
				return true;
			} // CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/utils/get-variant-context.mjs

			const numVariantProps = variantProps.length;
			function getVariantContext(visualElement) {
				if (!visualElement) return undefined;
				if (!visualElement.isControllingVariants) {
					const context = visualElement.parent
						? getVariantContext(visualElement.parent) || {}
						: {};
					if (visualElement.props.initial !== undefined) {
						context.initial = visualElement.props.initial;
					}
					return context;
				}
				const context = {};
				for (let i = 0; i < numVariantProps; i++) {
					const name = variantProps[i];
					const prop = visualElement.props[name];
					if (isVariantLabel(prop) || prop === false) {
						context[name] = prop;
					}
				}
				return context;
			} // CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/utils/animation-state.mjs

			const reversePriorityOrder = [...variantPriorityOrder].reverse();
			const numAnimationTypes = variantPriorityOrder.length;
			function animateList(visualElement) {
				return (animations) =>
					Promise.all(
						animations.map(({ animation, options }) =>
							animateVisualElement(visualElement, animation, options),
						),
					);
			}
			function createAnimationState(visualElement) {
				let animate = animateList(visualElement);
				let state = createState();
				let isInitialRender = true;
				/**
				 * This function will be used to reduce the animation definitions for
				 * each active animation type into an object of resolved values for it.
				 */
				const buildResolvedTypeValues = (type) => (acc, definition) => {
					const resolved = resolveVariant(
						visualElement,
						definition,
						type === "exit" ? visualElement.presenceContext?.custom : undefined,
					);
					if (resolved) {
						const { transition, transitionEnd, ...target } = resolved;
						acc = { ...acc, ...target, ...transitionEnd };
					}
					return acc;
				};
				/**
				 * This just allows us to inject mocked animation functions
				 * @internal
				 */
				function setAnimateFunction(makeAnimator) {
					animate = makeAnimator(visualElement);
				}
				/**
				 * When we receive new props, we need to:
				 * 1. Create a list of protected keys for each type. This is a directory of
				 *    value keys that are currently being "handled" by types of a higher priority
				 *    so that whenever an animation is played of a given type, these values are
				 *    protected from being animated.
				 * 2. Determine if an animation type needs animating.
				 * 3. Determine if any values have been removed from a type and figure out
				 *    what to animate those to.
				 */
				function animateChanges(changedActiveType) {
					const { props } = visualElement;
					const context = getVariantContext(visualElement.parent) || {};
					/**
					 * A list of animations that we'll build into as we iterate through the animation
					 * types. This will get executed at the end of the function.
					 */
					const animations = [];
					/**
					 * Keep track of which values have been removed. Then, as we hit lower priority
					 * animation types, we can check if they contain removed values and animate to that.
					 */
					const removedKeys = new Set();
					/**
					 * A dictionary of all encountered keys. This is an object to let us build into and
					 * copy it without iteration. Each time we hit an animation type we set its protected
					 * keys - the keys its not allowed to animate - to the latest version of this object.
					 */
					let encounteredKeys = {};
					/**
					 * If a variant has been removed at a given index, and this component is controlling
					 * variant animations, we want to ensure lower-priority variants are forced to animate.
					 */
					let removedVariantIndex = Infinity;
					/**
					 * Iterate through all animation types in reverse priority order. For each, we want to
					 * detect which values it's handling and whether or not they've changed (and therefore
					 * need to be animated). If any values have been removed, we want to detect those in
					 * lower priority props and flag for animation.
					 */
					for (let i = 0; i < numAnimationTypes; i++) {
						const type = reversePriorityOrder[i];
						const typeState = state[type];
						const prop =
							props[type] !== undefined ? props[type] : context[type];
						const propIsVariant = isVariantLabel(prop);
						/**
						 * If this type has *just* changed isActive status, set activeDelta
						 * to that status. Otherwise set to null.
						 */
						const activeDelta =
							type === changedActiveType ? typeState.isActive : null;
						if (activeDelta === false) removedVariantIndex = i;
						/**
						 * If this prop is an inherited variant, rather than been set directly on the
						 * component itself, we want to make sure we allow the parent to trigger animations.
						 *
						 * TODO: Can probably change this to a !isControllingVariants check
						 */
						let isInherited =
							prop === context[type] && prop !== props[type] && propIsVariant;
						if (
							isInherited &&
							isInitialRender &&
							visualElement.manuallyAnimateOnMount
						) {
							isInherited = false;
						}
						/**
						 * Set all encountered keys so far as the protected keys for this type. This will
						 * be any key that has been animated or otherwise handled by active, higher-priortiy types.
						 */
						typeState.protectedKeys = { ...encounteredKeys };
						// Check if we can skip analysing this prop early
						if (
							// If it isn't active and hasn't *just* been set as inactive
							(!typeState.isActive && activeDelta === null) ||
							// If we didn't and don't have any defined prop for this animation type
							(!prop && !typeState.prevProp) ||
							// Or if the prop doesn't define an animation
							isAnimationControls(prop) ||
							typeof prop === "boolean"
						) {
							continue;
						}
						/**
						 * As we go look through the values defined on this type, if we detect
						 * a changed value or a value that was removed in a higher priority, we set
						 * this to true and add this prop to the animation list.
						 */
						const variantDidChange = checkVariantsDidChange(
							typeState.prevProp,
							prop,
						);
						let shouldAnimateType =
							variantDidChange ||
							// If we're making this variant active, we want to always make it active
							(type === changedActiveType &&
								typeState.isActive &&
								!isInherited &&
								propIsVariant) ||
							// If we removed a higher-priority variant (i is in reverse order)
							(i > removedVariantIndex && propIsVariant);
						let handledRemovedValues = false;
						/**
						 * As animations can be set as variant lists, variants or target objects, we
						 * coerce everything to an array if it isn't one already
						 */
						const definitionList = Array.isArray(prop) ? prop : [prop];
						/**
						 * Build an object of all the resolved values. We'll use this in the subsequent
						 * animateChanges calls to determine whether a value has changed.
						 */
						let resolvedValues = definitionList.reduce(
							buildResolvedTypeValues(type),
							{},
						);
						if (activeDelta === false) resolvedValues = {};
						/**
						 * Now we need to loop through all the keys in the prev prop and this prop,
						 * and decide:
						 * 1. If the value has changed, and needs animating
						 * 2. If it has been removed, and needs adding to the removedKeys set
						 * 3. If it has been removed in a higher priority type and needs animating
						 * 4. If it hasn't been removed in a higher priority but hasn't changed, and
						 *    needs adding to the type's protectedKeys list.
						 */
						const { prevResolvedValues = {} } = typeState;
						const allKeys = {
							...prevResolvedValues,
							...resolvedValues,
						};
						const markToAnimate = (key) => {
							shouldAnimateType = true;
							if (removedKeys.has(key)) {
								handledRemovedValues = true;
								removedKeys.delete(key);
							}
							typeState.needsAnimating[key] = true;
							const motionValue = visualElement.getValue(key);
							if (motionValue) motionValue.liveStyle = false;
						};
						for (const key in allKeys) {
							const next = resolvedValues[key];
							const prev = prevResolvedValues[key];
							// If we've already handled this we can just skip ahead
							if (Object.hasOwn(encounteredKeys, key)) continue;
							/**
							 * If the value has changed, we probably want to animate it.
							 */
							let valueHasChanged = false;
							if (isKeyframesTarget(next) && isKeyframesTarget(prev)) {
								valueHasChanged = !shallowCompare(next, prev);
							} else {
								valueHasChanged = next !== prev;
							}
							if (valueHasChanged) {
								if (next !== undefined && next !== null) {
									// If next is defined and doesn't equal prev, it needs animating
									markToAnimate(key);
								} else {
									// If it's undefined, it's been removed.
									removedKeys.add(key);
								}
							} else if (next !== undefined && removedKeys.has(key)) {
								/**
								 * If next hasn't changed and it isn't undefined, we want to check if it's
								 * been removed by a higher priority
								 */
								markToAnimate(key);
							} else {
								/**
								 * If it hasn't changed, we add it to the list of protected values
								 * to ensure it doesn't get animated.
								 */
								typeState.protectedKeys[key] = true;
							}
						}
						/**
						 * Update the typeState so next time animateChanges is called we can compare the
						 * latest prop and resolvedValues to these.
						 */
						typeState.prevProp = prop;
						typeState.prevResolvedValues = resolvedValues;
						if (typeState.isActive) {
							encounteredKeys = { ...encounteredKeys, ...resolvedValues };
						}
						if (isInitialRender && visualElement.blockInitialAnimation) {
							shouldAnimateType = false;
						}
						/**
						 * If this is an inherited prop we want to skip this animation
						 * unless the inherited variants haven't changed on this render.
						 */
						const willAnimateViaParent = isInherited && variantDidChange;
						const needsAnimating =
							!willAnimateViaParent || handledRemovedValues;
						if (shouldAnimateType && needsAnimating) {
							animations.push(
								...definitionList.map((animation) => {
									const options = { type };
									/**
									 * If we're performing the initial animation, but we're not
									 * rendering at the same time as the variant-controlling parent,
									 * we want to use the parent's transition to calculate the stagger.
									 */
									if (
										typeof animation === "string" &&
										isInitialRender &&
										!willAnimateViaParent &&
										visualElement.manuallyAnimateOnMount &&
										visualElement.parent
									) {
										const { parent } = visualElement;
										const parentVariant = resolveVariant(parent, animation);
										if (parent.enteringChildren && parentVariant) {
											const { delayChildren } = parentVariant.transition || {};
											options.delay = calcChildStagger(
												parent.enteringChildren,
												visualElement,
												delayChildren,
											);
										}
									}
									return {
										animation: animation,
										options,
									};
								}),
							);
						}
					}
					/**
					 * If there are some removed value that haven't been dealt with,
					 * we need to create a new animation that falls back either to the value
					 * defined in the style prop, or the last read value.
					 */
					if (removedKeys.size) {
						const fallbackAnimation = {};
						/**
						 * If the initial prop contains a transition we can use that, otherwise
						 * allow the animation function to use the visual element's default.
						 */
						if (typeof props.initial !== "boolean") {
							const initialTransition = resolveVariant(
								visualElement,
								Array.isArray(props.initial) ? props.initial[0] : props.initial,
							);
							if (initialTransition && initialTransition.transition) {
								fallbackAnimation.transition = initialTransition.transition;
							}
						}
						removedKeys.forEach((key) => {
							const fallbackTarget = visualElement.getBaseTarget(key);
							const motionValue = visualElement.getValue(key);
							if (motionValue) motionValue.liveStyle = true;
							// @ts-expect-error - @mattgperry to figure if we should do something here
							fallbackAnimation[key] = fallbackTarget ?? null;
						});
						animations.push({ animation: fallbackAnimation });
					}
					let shouldAnimate = Boolean(animations.length);
					if (
						isInitialRender &&
						(props.initial === false || props.initial === props.animate) &&
						!visualElement.manuallyAnimateOnMount
					) {
						shouldAnimate = false;
					}
					isInitialRender = false;
					return shouldAnimate ? animate(animations) : Promise.resolve();
				}
				/**
				 * Change whether a certain animation type is active.
				 */
				function setActive(type, isActive) {
					// If the active state hasn't changed, we can safely do nothing here
					if (state[type].isActive === isActive) return Promise.resolve();
					// Propagate active change to children
					visualElement.variantChildren?.forEach((child) =>
						child.animationState?.setActive(type, isActive),
					);
					state[type].isActive = isActive;
					const animations = animateChanges(type);
					for (const key in state) {
						state[key].protectedKeys = {};
					}
					return animations;
				}
				return {
					animateChanges,
					setActive,
					setAnimateFunction,
					getState: () => state,
					reset: () => {
						state = createState();
						/**
						 * Temporarily disabling resetting this flag as it prevents components
						 * with initial={false} from animating after being remounted, for instance
						 * as the child of an Activity component.
						 */
						// isInitialRender = true
					},
				};
			}
			function checkVariantsDidChange(prev, next) {
				if (typeof next === "string") {
					return next !== prev;
				} else if (Array.isArray(next)) {
					return !shallowCompare(next, prev);
				}
				return false;
			}
			function createTypeState(isActive = false) {
				return {
					isActive,
					protectedKeys: {},
					needsAnimating: {},
					prevResolvedValues: {},
				};
			}
			function createState() {
				return {
					animate: createTypeState(true),
					whileInView: createTypeState(),
					whileHover: createTypeState(),
					whileTap: createTypeState(),
					whileDrag: createTypeState(),
					whileFocus: createTypeState(),
					exit: createTypeState(),
				};
			} // CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/motion/features/Feature.mjs
			class Feature {
				constructor(node) {
					this.isMounted = false;
					this.node = node;
				}
				update() {}
			} // CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/motion/features/animation/index.mjs

			class AnimationFeature extends Feature {
				/**
				 * We dynamically generate the AnimationState manager as it contains a reference
				 * to the underlying animation library. We only want to load that if we load this,
				 * so people can optionally code split it out using the `m` component.
				 */
				constructor(node) {
					super(node);
					node.animationState ||
						(node.animationState = createAnimationState(node));
				}
				updateAnimationControlsSubscription() {
					const { animate } = this.node.getProps();
					if (isAnimationControls(animate)) {
						this.unmountControls = animate.subscribe(this.node);
					}
				}
				/**
				 * Subscribe any provided AnimationControls to the component's VisualElement
				 */
				mount() {
					this.updateAnimationControlsSubscription();
				}
				update() {
					const { animate } = this.node.getProps();
					const { animate: prevAnimate } = this.node.prevProps || {};
					if (animate !== prevAnimate) {
						this.updateAnimationControlsSubscription();
					}
				}
				unmount() {
					this.node.animationState.reset();
					this.unmountControls?.();
				}
			} // CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/motion/features/animation/exit.mjs

			let exit_id = 0;
			class ExitAnimationFeature extends Feature {
				constructor() {
					super(...arguments);
					this.id = exit_id++;
				}
				update() {
					if (!this.node.presenceContext) return;
					const { isPresent, onExitComplete } = this.node.presenceContext;
					const { isPresent: prevIsPresent } =
						this.node.prevPresenceContext || {};
					if (!this.node.animationState || isPresent === prevIsPresent) {
						return;
					}
					const exitAnimation = this.node.animationState.setActive(
						"exit",
						!isPresent,
					);
					if (onExitComplete && !isPresent) {
						exitAnimation.then(() => {
							onExitComplete(this.id);
						});
					}
				}
				mount() {
					const { register, onExitComplete } = this.node.presenceContext || {};
					if (onExitComplete) {
						onExitComplete(this.id);
					}
					if (register) {
						this.unmount = register(this.id);
					}
				}
				unmount() {}
			} // CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/motion/features/animations.mjs

			const animations_animations = {
				animation: {
					Feature: AnimationFeature,
				},
				exit: {
					Feature: ExitAnimationFeature,
				},
			}; // CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/gestures/drag/state/is-active.mjs
			const is_active_isDragging = {
				x: false,
				y: false,
			};
			function isDragActive() {
				return is_active_isDragging.x || is_active_isDragging.y;
			} // CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/gestures/drag/state/set-active.mjs

			function setDragLock(axis) {
				if (axis === "x" || axis === "y") {
					if (is_active_isDragging[axis]) {
						return null;
					} else {
						is_active_isDragging[axis] = true;
						return () => {
							is_active_isDragging[axis] = false;
						};
					}
				} else {
					if (is_active_isDragging.x || is_active_isDragging.y) {
						return null;
					} else {
						is_active_isDragging.x = is_active_isDragging.y = true;
						return () => {
							is_active_isDragging.x = is_active_isDragging.y = false;
						};
					}
				}
			} // CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/events/add-dom-event.mjs
			function addDomEvent(
				target,
				eventName,
				handler,
				options = { passive: true },
			) {
				target.addEventListener(eventName, handler, options);
				return () => target.removeEventListener(eventName, handler);
			} // CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/gestures/utils/is-primary-pointer.mjs
			const isPrimaryPointer = (event) => {
				if (event.pointerType === "mouse") {
					return typeof event.button !== "number" || event.button <= 0;
				} else {
					/**
					 * isPrimary is true for all mice buttons, whereas every touch point
					 * is regarded as its own input. So subsequent concurrent touch points
					 * will be false.
					 *
					 * Specifically match against false here as incomplete versions of
					 * PointerEvents in very old browser might have it set as undefined.
					 */
					return event.isPrimary !== false;
				}
			}; // CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/events/event-info.mjs

			function extractEventInfo(event) {
				return {
					point: {
						x: event.pageX,
						y: event.pageY,
					},
				};
			}
			const addPointerInfo = (handler) => {
				return (event) =>
					isPrimaryPointer(event) && handler(event, extractEventInfo(event));
			}; // CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/events/add-pointer-event.mjs

			function addPointerEvent(target, eventName, handler, options) {
				return addDomEvent(target, eventName, addPointerInfo(handler), options);
			} // CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/projection/geometry/delta-calc.mjs

			const SCALE_PRECISION = 0.0001;
			const SCALE_MIN = 1 - SCALE_PRECISION;
			const SCALE_MAX = 1 + SCALE_PRECISION;
			const TRANSLATE_PRECISION = 0.01;
			const TRANSLATE_MIN = 0 - TRANSLATE_PRECISION;
			const TRANSLATE_MAX = 0 + TRANSLATE_PRECISION;
			function calcLength(axis) {
				return axis.max - axis.min;
			}
			function isNear(value, target, maxDistance) {
				return Math.abs(value - target) <= maxDistance;
			}
			function calcAxisDelta(delta, source, target, origin = 0.5) {
				delta.origin = origin;
				delta.originPoint = mixNumber(source.min, source.max, delta.origin);
				delta.scale = calcLength(target) / calcLength(source);
				delta.translate =
					mixNumber(target.min, target.max, delta.origin) - delta.originPoint;
				if (
					(delta.scale >= SCALE_MIN && delta.scale <= SCALE_MAX) ||
					isNaN(delta.scale)
				) {
					delta.scale = 1.0;
				}
				if (
					(delta.translate >= TRANSLATE_MIN &&
						delta.translate <= TRANSLATE_MAX) ||
					isNaN(delta.translate)
				) {
					delta.translate = 0.0;
				}
			}
			function calcBoxDelta(delta, source, target, origin) {
				calcAxisDelta(
					delta.x,
					source.x,
					target.x,
					origin ? origin.originX : undefined,
				);
				calcAxisDelta(
					delta.y,
					source.y,
					target.y,
					origin ? origin.originY : undefined,
				);
			}
			function calcRelativeAxis(target, relative, parent) {
				target.min = parent.min + relative.min;
				target.max = target.min + calcLength(relative);
			}
			function calcRelativeBox(target, relative, parent) {
				calcRelativeAxis(target.x, relative.x, parent.x);
				calcRelativeAxis(target.y, relative.y, parent.y);
			}
			function calcRelativeAxisPosition(target, layout, parent) {
				target.min = layout.min - parent.min;
				target.max = target.min + calcLength(layout);
			}
			function calcRelativePosition(target, layout, parent) {
				calcRelativeAxisPosition(target.x, layout.x, parent.x);
				calcRelativeAxisPosition(target.y, layout.y, parent.y);
			} // CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/projection/utils/each-axis.mjs
			function eachAxis(callback) {
				return [callback("x"), callback("y")];
			} // CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/utils/get-context-window.mjs
			// Fixes https://github.com/motiondivision/motion/issues/2270
			const getContextWindow = ({ current }) => {
				return current ? current.ownerDocument.defaultView : null;
			}; // CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/utils/distance.mjs
			const distance_distance = (a, b) => Math.abs(a - b);
			function distance2D(a, b) {
				// Multi-dimensional
				const xDelta = distance_distance(a.x, b.x);
				const yDelta = distance_distance(a.y, b.y);
				return Math.sqrt(xDelta ** 2 + yDelta ** 2);
			} // CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/gestures/pan/PanSession.mjs

			/**
			 * @internal
			 */
			class PanSession {
				constructor(
					event,
					handlers,
					{
						transformPagePoint,
						contextWindow = window,
						dragSnapToOrigin = false,
						distanceThreshold = 3,
					} = {},
				) {
					/**
					 * @internal
					 */
					this.startEvent = null;
					/**
					 * @internal
					 */
					this.lastMoveEvent = null;
					/**
					 * @internal
					 */
					this.lastMoveEventInfo = null;
					/**
					 * @internal
					 */
					this.handlers = {};
					/**
					 * @internal
					 */
					this.contextWindow = window;
					this.updatePoint = () => {
						if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
						const info = getPanInfo(this.lastMoveEventInfo, this.history);
						const isPanStarted = this.startEvent !== null;
						// Only start panning if the offset is larger than 3 pixels. If we make it
						// any larger than this we'll want to reset the pointer history
						// on the first update to avoid visual snapping to the cursor.
						const isDistancePastThreshold =
							distance2D(info.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
						if (!isPanStarted && !isDistancePastThreshold) return;
						const { point } = info;
						const { timestamp } = frame_frameData;
						this.history.push({ ...point, timestamp });
						const { onStart, onMove } = this.handlers;
						if (!isPanStarted) {
							onStart && onStart(this.lastMoveEvent, info);
							this.startEvent = this.lastMoveEvent;
						}
						onMove && onMove(this.lastMoveEvent, info);
					};
					this.handlePointerMove = (event, info) => {
						this.lastMoveEvent = event;
						this.lastMoveEventInfo = PanSession_transformPoint(
							info,
							this.transformPagePoint,
						);
						// Throttle mouse move event to once per frame
						frame_frame.update(this.updatePoint, true);
					};
					this.handlePointerUp = (event, info) => {
						this.end();
						const { onEnd, onSessionEnd, resumeAnimation } = this.handlers;
						if (this.dragSnapToOrigin) resumeAnimation && resumeAnimation();
						if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
						const panInfo = getPanInfo(
							event.type === "pointercancel"
								? this.lastMoveEventInfo
								: PanSession_transformPoint(info, this.transformPagePoint),
							this.history,
						);
						if (this.startEvent && onEnd) {
							onEnd(event, panInfo);
						}
						onSessionEnd && onSessionEnd(event, panInfo);
					};
					// If we have more than one touch, don't start detecting this gesture
					if (!isPrimaryPointer(event)) return;
					this.dragSnapToOrigin = dragSnapToOrigin;
					this.handlers = handlers;
					this.transformPagePoint = transformPagePoint;
					this.distanceThreshold = distanceThreshold;
					this.contextWindow = contextWindow || window;
					const info = extractEventInfo(event);
					const initialInfo = PanSession_transformPoint(
						info,
						this.transformPagePoint,
					);
					const { point } = initialInfo;
					const { timestamp } = frame_frameData;
					this.history = [{ ...point, timestamp }];
					const { onSessionStart } = handlers;
					onSessionStart &&
						onSessionStart(event, getPanInfo(initialInfo, this.history));
					this.removeListeners = pipe(
						addPointerEvent(
							this.contextWindow,
							"pointermove",
							this.handlePointerMove,
						),
						addPointerEvent(
							this.contextWindow,
							"pointerup",
							this.handlePointerUp,
						),
						addPointerEvent(
							this.contextWindow,
							"pointercancel",
							this.handlePointerUp,
						),
					);
				}
				updateHandlers(handlers) {
					this.handlers = handlers;
				}
				end() {
					this.removeListeners && this.removeListeners();
					cancelFrame(this.updatePoint);
				}
			}
			function PanSession_transformPoint(info, transformPagePoint) {
				return transformPagePoint
					? { point: transformPagePoint(info.point) }
					: info;
			}
			function subtractPoint(a, b) {
				return { x: a.x - b.x, y: a.y - b.y };
			}
			function getPanInfo({ point }, history) {
				return {
					point,
					delta: subtractPoint(point, lastDevicePoint(history)),
					offset: subtractPoint(point, startDevicePoint(history)),
					velocity: getVelocity(history, 0.1),
				};
			}
			function startDevicePoint(history) {
				return history[0];
			}
			function lastDevicePoint(history) {
				return history[history.length - 1];
			}
			function getVelocity(history, timeDelta) {
				if (history.length < 2) {
					return { x: 0, y: 0 };
				}
				let i = history.length - 1;
				let timestampedPoint = null;
				const lastPoint = lastDevicePoint(history);
				while (i >= 0) {
					timestampedPoint = history[i];
					if (
						lastPoint.timestamp - timestampedPoint.timestamp >
						time_conversion_secondsToMilliseconds(timeDelta)
					) {
						break;
					}
					i--;
				}
				if (!timestampedPoint) {
					return { x: 0, y: 0 };
				}
				const time = millisecondsToSeconds(
					lastPoint.timestamp - timestampedPoint.timestamp,
				);
				if (time === 0) {
					return { x: 0, y: 0 };
				}
				const currentVelocity = {
					x: (lastPoint.x - timestampedPoint.x) / time,
					y: (lastPoint.y - timestampedPoint.y) / time,
				};
				if (currentVelocity.x === Infinity) {
					currentVelocity.x = 0;
				}
				if (currentVelocity.y === Infinity) {
					currentVelocity.y = 0;
				}
				return currentVelocity;
			} // CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/gestures/drag/utils/constraints.mjs

			/**
			 * Apply constraints to a point. These constraints are both physical along an
			 * axis, and an elastic factor that determines how much to constrain the point
			 * by if it does lie outside the defined parameters.
			 */
			function applyConstraints(point, { min, max }, elastic) {
				if (min !== undefined && point < min) {
					// If we have a min point defined, and this is outside of that, constrain
					point = elastic
						? mixNumber(min, point, elastic.min)
						: Math.max(point, min);
				} else if (max !== undefined && point > max) {
					// If we have a max point defined, and this is outside of that, constrain
					point = elastic
						? mixNumber(max, point, elastic.max)
						: Math.min(point, max);
				}
				return point;
			}
			/**
			 * Calculate constraints in terms of the viewport when defined relatively to the
			 * measured axis. This is measured from the nearest edge, so a max constraint of 200
			 * on an axis with a max value of 300 would return a constraint of 500 - axis length
			 */
			function calcRelativeAxisConstraints(axis, min, max) {
				return {
					min: min !== undefined ? axis.min + min : undefined,
					max:
						max !== undefined
							? axis.max + max - (axis.max - axis.min)
							: undefined,
				};
			}
			/**
			 * Calculate constraints in terms of the viewport when
			 * defined relatively to the measured bounding box.
			 */
			function calcRelativeConstraints(
				layoutBox,
				{ top, left, bottom, right },
			) {
				return {
					x: calcRelativeAxisConstraints(layoutBox.x, left, right),
					y: calcRelativeAxisConstraints(layoutBox.y, top, bottom),
				};
			}
			/**
			 * Calculate viewport constraints when defined as another viewport-relative axis
			 */
			function calcViewportAxisConstraints(layoutAxis, constraintsAxis) {
				let min = constraintsAxis.min - layoutAxis.min;
				let max = constraintsAxis.max - layoutAxis.max;
				// If the constraints axis is actually smaller than the layout axis then we can
				// flip the constraints
				if (
					constraintsAxis.max - constraintsAxis.min <
					layoutAxis.max - layoutAxis.min
				) {
					[min, max] = [max, min];
				}
				return { min, max };
			}
			/**
			 * Calculate viewport constraints when defined as another viewport-relative box
			 */
			function calcViewportConstraints(layoutBox, constraintsBox) {
				return {
					x: calcViewportAxisConstraints(layoutBox.x, constraintsBox.x),
					y: calcViewportAxisConstraints(layoutBox.y, constraintsBox.y),
				};
			}
			/**
			 * Calculate a transform origin relative to the source axis, between 0-1, that results
			 * in an asthetically pleasing scale/transform needed to project from source to target.
			 */
			function calcOrigin(source, target) {
				let origin = 0.5;
				const sourceLength = calcLength(source);
				const targetLength = calcLength(target);
				if (targetLength > sourceLength) {
					origin = progress_progress(
						target.min,
						target.max - sourceLength,
						source.min,
					);
				} else if (sourceLength > targetLength) {
					origin = progress_progress(
						source.min,
						source.max - targetLength,
						target.min,
					);
				}
				return clamp(0, 1, origin);
			}
			/**
			 * Rebase the calculated viewport constraints relative to the layout.min point.
			 */
			function rebaseAxisConstraints(layout, constraints) {
				const relativeConstraints = {};
				if (constraints.min !== undefined) {
					relativeConstraints.min = constraints.min - layout.min;
				}
				if (constraints.max !== undefined) {
					relativeConstraints.max = constraints.max - layout.min;
				}
				return relativeConstraints;
			}
			const defaultElastic = 0.35;
			/**
			 * Accepts a dragElastic prop and returns resolved elastic values for each axis.
			 */
			function resolveDragElastic(dragElastic = defaultElastic) {
				if (dragElastic === false) {
					dragElastic = 0;
				} else if (dragElastic === true) {
					dragElastic = defaultElastic;
				}
				return {
					x: resolveAxisElastic(dragElastic, "left", "right"),
					y: resolveAxisElastic(dragElastic, "top", "bottom"),
				};
			}
			function resolveAxisElastic(dragElastic, minLabel, maxLabel) {
				return {
					min: resolvePointElastic(dragElastic, minLabel),
					max: resolvePointElastic(dragElastic, maxLabel),
				};
			}
			function resolvePointElastic(dragElastic, label) {
				return typeof dragElastic === "number"
					? dragElastic
					: dragElastic[label] || 0;
			} // CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/gestures/drag/VisualElementDragControls.mjs

			const elementDragControls = new WeakMap();
			class VisualElementDragControls {
				constructor(visualElement) {
					this.openDragLock = null;
					this.isDragging = false;
					this.currentDirection = null;
					this.originPoint = { x: 0, y: 0 };
					/**
					 * The permitted boundaries of travel, in pixels.
					 */
					this.constraints = false;
					this.hasMutatedConstraints = false;
					/**
					 * The per-axis resolved elastic values.
					 */
					this.elastic = createBox();
					/**
					 * The latest pointer event. Used as fallback when the `cancel` and `stop` functions are called without arguments.
					 */
					this.latestPointerEvent = null;
					/**
					 * The latest pan info. Used as fallback when the `cancel` and `stop` functions are called without arguments.
					 */
					this.latestPanInfo = null;
					this.visualElement = visualElement;
				}
				start(originEvent, { snapToCursor = false, distanceThreshold } = {}) {
					/**
					 * Don't start dragging if this component is exiting
					 */
					const { presenceContext } = this.visualElement;
					if (presenceContext && presenceContext.isPresent === false) return;
					const onSessionStart = (event) => {
						const { dragSnapToOrigin } = this.getProps();
						// Stop or pause any animations on both axis values immediately. This allows the user to throw and catch
						// the component.
						dragSnapToOrigin ? this.pauseAnimation() : this.stopAnimation();
						if (snapToCursor) {
							this.snapToCursor(extractEventInfo(event).point);
						}
					};
					const onStart = (event, info) => {
						// Attempt to grab the global drag gesture lock - maybe make this part of PanSession
						const { drag, dragPropagation, onDragStart } = this.getProps();
						if (drag && !dragPropagation) {
							if (this.openDragLock) this.openDragLock();
							this.openDragLock = setDragLock(drag);
							// If we don 't have the lock, don't start dragging
							if (!this.openDragLock) return;
						}
						this.latestPointerEvent = event;
						this.latestPanInfo = info;
						this.isDragging = true;
						this.currentDirection = null;
						this.resolveConstraints();
						if (this.visualElement.projection) {
							this.visualElement.projection.isAnimationBlocked = true;
							this.visualElement.projection.target = undefined;
						}
						/**
						 * Record gesture origin
						 */
						eachAxis((axis) => {
							let current = this.getAxisMotionValue(axis).get() || 0;
							/**
							 * If the MotionValue is a percentage value convert to px
							 */
							if (units_percent.test(current)) {
								const { projection } = this.visualElement;
								if (projection && projection.layout) {
									const measuredAxis = projection.layout.layoutBox[axis];
									if (measuredAxis) {
										const length = calcLength(measuredAxis);
										current = length * (parseFloat(current) / 100);
									}
								}
							}
							this.originPoint[axis] = current;
						});
						// Fire onDragStart event
						if (onDragStart) {
							frame_frame.postRender(() => onDragStart(event, info));
						}
						addValueToWillChange(this.visualElement, "transform");
						const { animationState } = this.visualElement;
						animationState && animationState.setActive("whileDrag", true);
					};
					const onMove = (event, info) => {
						this.latestPointerEvent = event;
						this.latestPanInfo = info;
						const {
							dragPropagation,
							dragDirectionLock,
							onDirectionLock,
							onDrag,
						} = this.getProps();
						// If we didn't successfully receive the gesture lock, early return.
						if (!dragPropagation && !this.openDragLock) return;
						const { offset } = info;
						// Attempt to detect drag direction if directionLock is true
						if (dragDirectionLock && this.currentDirection === null) {
							this.currentDirection = getCurrentDirection(offset);
							// If we've successfully set a direction, notify listener
							if (this.currentDirection !== null) {
								onDirectionLock && onDirectionLock(this.currentDirection);
							}
							return;
						}
						// Update each point with the latest position
						this.updateAxis("x", info.point, offset);
						this.updateAxis("y", info.point, offset);
						/**
						 * Ideally we would leave the renderer to fire naturally at the end of
						 * this frame but if the element is about to change layout as the result
						 * of a re-render we want to ensure the browser can read the latest
						 * bounding box to ensure the pointer and element don't fall out of sync.
						 */
						this.visualElement.render();
						/**
						 * This must fire after the render call as it might trigger a state
						 * change which itself might trigger a layout update.
						 */
						onDrag && onDrag(event, info);
					};
					const onSessionEnd = (event, info) => {
						this.latestPointerEvent = event;
						this.latestPanInfo = info;
						this.stop(event, info);
						this.latestPointerEvent = null;
						this.latestPanInfo = null;
					};
					const resumeAnimation = () =>
						eachAxis(
							(axis) =>
								this.getAnimationState(axis) === "paused" &&
								this.getAxisMotionValue(axis).animation?.play(),
						);
					const { dragSnapToOrigin } = this.getProps();
					this.panSession = new PanSession(
						originEvent,
						{
							onSessionStart,
							onStart,
							onMove,
							onSessionEnd,
							resumeAnimation,
						},
						{
							transformPagePoint: this.visualElement.getTransformPagePoint(),
							dragSnapToOrigin,
							distanceThreshold,
							contextWindow: getContextWindow(this.visualElement),
						},
					);
				}
				/**
				 * @internal
				 */
				stop(event, panInfo) {
					const finalEvent = event || this.latestPointerEvent;
					const finalPanInfo = panInfo || this.latestPanInfo;
					const isDragging = this.isDragging;
					this.cancel();
					if (!isDragging || !finalPanInfo || !finalEvent) return;
					const { velocity } = finalPanInfo;
					this.startAnimation(velocity);
					const { onDragEnd } = this.getProps();
					if (onDragEnd) {
						frame_frame.postRender(() => onDragEnd(finalEvent, finalPanInfo));
					}
				}
				/**
				 * @internal
				 */
				cancel() {
					this.isDragging = false;
					const { projection, animationState } = this.visualElement;
					if (projection) {
						projection.isAnimationBlocked = false;
					}
					this.panSession && this.panSession.end();
					this.panSession = undefined;
					const { dragPropagation } = this.getProps();
					if (!dragPropagation && this.openDragLock) {
						this.openDragLock();
						this.openDragLock = null;
					}
					animationState && animationState.setActive("whileDrag", false);
				}
				updateAxis(axis, _point, offset) {
					const { drag } = this.getProps();
					// If we're not dragging this axis, do an early return.
					if (!offset || !shouldDrag(axis, drag, this.currentDirection)) return;
					const axisValue = this.getAxisMotionValue(axis);
					let next = this.originPoint[axis] + offset[axis];
					// Apply constraints
					if (this.constraints && this.constraints[axis]) {
						next = applyConstraints(
							next,
							this.constraints[axis],
							this.elastic[axis],
						);
					}
					axisValue.set(next);
				}
				resolveConstraints() {
					const { dragConstraints, dragElastic } = this.getProps();
					const layout =
						this.visualElement.projection &&
						!this.visualElement.projection.layout
							? this.visualElement.projection.measure(false)
							: this.visualElement.projection?.layout;
					const prevConstraints = this.constraints;
					if (dragConstraints && isRefObject(dragConstraints)) {
						if (!this.constraints) {
							this.constraints = this.resolveRefConstraints();
						}
					} else {
						if (dragConstraints && layout) {
							this.constraints = calcRelativeConstraints(
								layout.layoutBox,
								dragConstraints,
							);
						} else {
							this.constraints = false;
						}
					}
					this.elastic = resolveDragElastic(dragElastic);
					/**
					 * If we're outputting to external MotionValues, we want to rebase the measured constraints
					 * from viewport-relative to component-relative.
					 */
					if (
						prevConstraints !== this.constraints &&
						layout &&
						this.constraints &&
						!this.hasMutatedConstraints
					) {
						eachAxis((axis) => {
							if (this.constraints !== false && this.getAxisMotionValue(axis)) {
								this.constraints[axis] = rebaseAxisConstraints(
									layout.layoutBox[axis],
									this.constraints[axis],
								);
							}
						});
					}
				}
				resolveRefConstraints() {
					const { dragConstraints: constraints, onMeasureDragConstraints } =
						this.getProps();
					if (!constraints || !isRefObject(constraints)) return false;
					const constraintsElement = constraints.current;
					invariant(
						constraintsElement !== null,
						"If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.",
						"drag-constraints-ref",
					);
					const { projection } = this.visualElement;
					// TODO
					if (!projection || !projection.layout) return false;
					const constraintsBox = measurePageBox(
						constraintsElement,
						projection.root,
						this.visualElement.getTransformPagePoint(),
					);
					let measuredConstraints = calcViewportConstraints(
						projection.layout.layoutBox,
						constraintsBox,
					);
					/**
					 * If there's an onMeasureDragConstraints listener we call it and
					 * if different constraints are returned, set constraints to that
					 */
					if (onMeasureDragConstraints) {
						const userConstraints = onMeasureDragConstraints(
							convertBoxToBoundingBox(measuredConstraints),
						);
						this.hasMutatedConstraints = !!userConstraints;
						if (userConstraints) {
							measuredConstraints = convertBoundingBoxToBox(userConstraints);
						}
					}
					return measuredConstraints;
				}
				startAnimation(velocity) {
					const {
						drag,
						dragMomentum,
						dragElastic,
						dragTransition,
						dragSnapToOrigin,
						onDragTransitionEnd,
					} = this.getProps();
					const constraints = this.constraints || {};
					const momentumAnimations = eachAxis((axis) => {
						if (!shouldDrag(axis, drag, this.currentDirection)) {
							return;
						}
						let transition = (constraints && constraints[axis]) || {};
						if (dragSnapToOrigin) transition = { min: 0, max: 0 };
						/**
						 * Overdamp the boundary spring if `dragElastic` is disabled. There's still a frame
						 * of spring animations so we should look into adding a disable spring option to `inertia`.
						 * We could do something here where we affect the `bounceStiffness` and `bounceDamping`
						 * using the value of `dragElastic`.
						 */
						const bounceStiffness = dragElastic ? 200 : 1000000;
						const bounceDamping = dragElastic ? 40 : 10000000;
						const inertia = {
							type: "inertia",
							velocity: dragMomentum ? velocity[axis] : 0,
							bounceStiffness,
							bounceDamping,
							timeConstant: 750,
							restDelta: 1,
							restSpeed: 10,
							...dragTransition,
							...transition,
						};
						// If we're not animating on an externally-provided `MotionValue` we can use the
						// component's animation controls which will handle interactions with whileHover (etc),
						// otherwise we just have to animate the `MotionValue` itself.
						return this.startAxisValueAnimation(axis, inertia);
					});
					// Run all animations and then resolve the new drag constraints.
					return Promise.all(momentumAnimations).then(onDragTransitionEnd);
				}
				startAxisValueAnimation(axis, transition) {
					const axisValue = this.getAxisMotionValue(axis);
					addValueToWillChange(this.visualElement, axis);
					return axisValue.start(
						animateMotionValue(
							axis,
							axisValue,
							0,
							transition,
							this.visualElement,
							false,
						),
					);
				}
				stopAnimation() {
					eachAxis((axis) => this.getAxisMotionValue(axis).stop());
				}
				pauseAnimation() {
					eachAxis((axis) => this.getAxisMotionValue(axis).animation?.pause());
				}
				getAnimationState(axis) {
					return this.getAxisMotionValue(axis).animation?.state;
				}
				/**
				 * Drag works differently depending on which props are provided.
				 *
				 * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
				 * - Otherwise, we apply the delta to the x/y motion values.
				 */
				getAxisMotionValue(axis) {
					const dragKey = `_drag${axis.toUpperCase()}`;
					const props = this.visualElement.getProps();
					const externalMotionValue = props[dragKey];
					return externalMotionValue
						? externalMotionValue
						: this.visualElement.getValue(
								axis,
								(props.initial ? props.initial[axis] : undefined) || 0,
							);
				}
				snapToCursor(point) {
					eachAxis((axis) => {
						const { drag } = this.getProps();
						// If we're not dragging this axis, do an early return.
						if (!shouldDrag(axis, drag, this.currentDirection)) return;
						const { projection } = this.visualElement;
						const axisValue = this.getAxisMotionValue(axis);
						if (projection && projection.layout) {
							const { min, max } = projection.layout.layoutBox[axis];
							axisValue.set(point[axis] - mixNumber(min, max, 0.5));
						}
					});
				}
				/**
				 * When the viewport resizes we want to check if the measured constraints
				 * have changed and, if so, reposition the element within those new constraints
				 * relative to where it was before the resize.
				 */
				scalePositionWithinConstraints() {
					if (!this.visualElement.current) return;
					const { drag, dragConstraints } = this.getProps();
					const { projection } = this.visualElement;
					if (!isRefObject(dragConstraints) || !projection || !this.constraints)
						return;
					/**
					 * Stop current animations as there can be visual glitching if we try to do
					 * this mid-animation
					 */
					this.stopAnimation();
					/**
					 * Record the relative position of the dragged element relative to the
					 * constraints box and save as a progress value.
					 */
					const boxProgress = { x: 0, y: 0 };
					eachAxis((axis) => {
						const axisValue = this.getAxisMotionValue(axis);
						if (axisValue && this.constraints !== false) {
							const latest = axisValue.get();
							boxProgress[axis] = calcOrigin(
								{ min: latest, max: latest },
								this.constraints[axis],
							);
						}
					});
					/**
					 * Update the layout of this element and resolve the latest drag constraints
					 */
					const { transformTemplate } = this.visualElement.getProps();
					this.visualElement.current.style.transform = transformTemplate
						? transformTemplate({}, "")
						: "none";
					projection.root && projection.root.updateScroll();
					projection.updateLayout();
					this.resolveConstraints();
					/**
					 * For each axis, calculate the current progress of the layout axis
					 * within the new constraints.
					 */
					eachAxis((axis) => {
						if (!shouldDrag(axis, drag, null)) return;
						/**
						 * Calculate a new transform based on the previous box progress
						 */
						const axisValue = this.getAxisMotionValue(axis);
						const { min, max } = this.constraints[axis];
						axisValue.set(mixNumber(min, max, boxProgress[axis]));
					});
				}
				addListeners() {
					if (!this.visualElement.current) return;
					elementDragControls.set(this.visualElement, this);
					const element = this.visualElement.current;
					/**
					 * Attach a pointerdown event listener on this DOM element to initiate drag tracking.
					 */
					const stopPointerListener = addPointerEvent(
						element,
						"pointerdown",
						(event) => {
							const { drag, dragListener = true } = this.getProps();
							drag && dragListener && this.start(event);
						},
					);
					const measureDragConstraints = () => {
						const { dragConstraints } = this.getProps();
						if (isRefObject(dragConstraints) && dragConstraints.current) {
							this.constraints = this.resolveRefConstraints();
						}
					};
					const { projection } = this.visualElement;
					const stopMeasureLayoutListener = projection.addEventListener(
						"measure",
						measureDragConstraints,
					);
					if (projection && !projection.layout) {
						projection.root && projection.root.updateScroll();
						projection.updateLayout();
					}
					frame_frame.read(measureDragConstraints);
					/**
					 * Attach a window resize listener to scale the draggable target within its defined
					 * constraints as the window resizes.
					 */
					const stopResizeListener = addDomEvent(window, "resize", () =>
						this.scalePositionWithinConstraints(),
					);
					/**
					 * If the element's layout changes, calculate the delta and apply that to
					 * the drag gesture's origin point.
					 */
					const stopLayoutUpdateListener = projection.addEventListener(
						"didUpdate",
						({ delta, hasLayoutChanged }) => {
							if (this.isDragging && hasLayoutChanged) {
								eachAxis((axis) => {
									const motionValue = this.getAxisMotionValue(axis);
									if (!motionValue) return;
									this.originPoint[axis] += delta[axis].translate;
									motionValue.set(motionValue.get() + delta[axis].translate);
								});
								this.visualElement.render();
							}
						},
					);
					return () => {
						stopResizeListener();
						stopPointerListener();
						stopMeasureLayoutListener();
						stopLayoutUpdateListener && stopLayoutUpdateListener();
					};
				}
				getProps() {
					const props = this.visualElement.getProps();
					const {
						drag = false,
						dragDirectionLock = false,
						dragPropagation = false,
						dragConstraints = false,
						dragElastic = defaultElastic,
						dragMomentum = true,
					} = props;
					return {
						...props,
						drag,
						dragDirectionLock,
						dragPropagation,
						dragConstraints,
						dragElastic,
						dragMomentum,
					};
				}
			}
			function shouldDrag(direction, drag, currentDirection) {
				return (
					(drag === true || drag === direction) &&
					(currentDirection === null || currentDirection === direction)
				);
			}
			/**
			 * Based on an x/y offset determine the current drag direction. If both axis' offsets are lower
			 * than the provided threshold, return `null`.
			 *
			 * @param offset - The x/y offset from origin.
			 * @param lockThreshold - (Optional) - the minimum absolute offset before we can determine a drag direction.
			 */
			function getCurrentDirection(offset, lockThreshold = 10) {
				let direction = null;
				if (Math.abs(offset.y) > lockThreshold) {
					direction = "y";
				} else if (Math.abs(offset.x) > lockThreshold) {
					direction = "x";
				}
				return direction;
			} // CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/gestures/drag/index.mjs

			class DragGesture extends Feature {
				constructor(node) {
					super(node);
					this.removeGroupControls = noop;
					this.removeListeners = noop;
					this.controls = new VisualElementDragControls(node);
				}
				mount() {
					// If we've been provided a DragControls for manual control over the drag gesture,
					// subscribe this component to it on mount.
					const { dragControls } = this.node.getProps();
					if (dragControls) {
						this.removeGroupControls = dragControls.subscribe(this.controls);
					}
					this.removeListeners = this.controls.addListeners() || noop;
				}
				unmount() {
					this.removeGroupControls();
					this.removeListeners();
				}
			} // CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/gestures/pan/index.mjs

			const asyncHandler = (handler) => (event, info) => {
				if (handler) {
					frame_frame.postRender(() => handler(event, info));
				}
			};
			class PanGesture extends Feature {
				constructor() {
					super(...arguments);
					this.removePointerDownListener = noop;
				}
				onPointerDown(pointerDownEvent) {
					this.session = new PanSession(
						pointerDownEvent,
						this.createPanHandlers(),
						{
							transformPagePoint: this.node.getTransformPagePoint(),
							contextWindow: getContextWindow(this.node),
						},
					);
				}
				createPanHandlers() {
					const { onPanSessionStart, onPanStart, onPan, onPanEnd } =
						this.node.getProps();
					return {
						onSessionStart: asyncHandler(onPanSessionStart),
						onStart: asyncHandler(onPanStart),
						onMove: onPan,
						onEnd: (event, info) => {
							delete this.session;
							if (onPanEnd) {
								frame_frame.postRender(() => onPanEnd(event, info));
							}
						},
					};
				}
				mount() {
					this.removePointerDownListener = addPointerEvent(
						this.node.current,
						"pointerdown",
						(event) => this.onPointerDown(event),
					);
				}
				update() {
					this.session && this.session.updateHandlers(this.createPanHandlers());
				}
				unmount() {
					this.removePointerDownListener();
					this.session && this.session.end();
				}
			} // CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/components/AnimatePresence/use-presence.mjs

			("use client");

			/**
			 * When a component is the child of `AnimatePresence`, it can use `usePresence`
			 * to access information about whether it's still present in the React tree.
			 *
			 * ```jsx
			 * import { usePresence } from "framer-motion"
			 *
			 * export const Component = () => {
			 *   const [isPresent, safeToRemove] = usePresence()
			 *
			 *   useEffect(() => {
			 *     !isPresent && setTimeout(safeToRemove, 1000)
			 *   }, [isPresent])
			 *
			 *   return <div />
			 * }
			 * ```
			 *
			 * If `isPresent` is `false`, it means that a component has been removed the tree, but
			 * `AnimatePresence` won't really remove it until `safeToRemove` has been called.
			 *
			 * @public
			 */
			function usePresence(subscribe = true) {
				const context = (0, react.useContext)(PresenceContext_PresenceContext);
				if (context === null) return [true, null];
				const { isPresent, onExitComplete, register } = context;
				// It's safe to call the following hooks conditionally (after an early return) because the context will always
				// either be null or non-null for the lifespan of the component.
				const id = (0, react.useId)();
				(0, react.useEffect)(() => {
					if (subscribe) {
						return register(id);
					}
				}, [subscribe]);
				const safeToRemove = (0, react.useCallback)(
					() => subscribe && onExitComplete && onExitComplete(id),
					[id, onExitComplete, subscribe],
				);
				return !isPresent && onExitComplete ? [false, safeToRemove] : [true];
			}
			/**
			 * Similar to `usePresence`, except `useIsPresent` simply returns whether or not the component is present.
			 * There is no `safeToRemove` function.
			 *
			 * ```jsx
			 * import { useIsPresent } from "framer-motion"
			 *
			 * export const Component = () => {
			 *   const isPresent = useIsPresent()
			 *
			 *   useEffect(() => {
			 *     !isPresent && console.log("I've been removed!")
			 *   }, [isPresent])
			 *
			 *   return <div />
			 * }
			 * ```
			 *
			 * @public
			 */
			function useIsPresent() {
				return use_presence_isPresent(useContext(PresenceContext));
			}
			function use_presence_isPresent(context) {
				return context === null ? true : context.isPresent;
			} // CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/projection/node/state.mjs
			/**
			 * This should only ever be modified on the client otherwise it'll
			 * persist through server requests. If we need instanced states we
			 * could lazy-init via root.
			 */
			const globalProjectionState = {
				/**
				 * Global flag as to whether the tree has animated since the last time
				 * we resized the window
				 */
				hasAnimatedSinceResize: true,
				/**
				 * We set this to true once, on the first update. Any nodes added to the tree beyond that
				 * update will be given a `data-projection-id` attribute.
				 */
				hasEverUpdated: false,
			}; // CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/projection/styles/scale-border-radius.mjs

			function pixelsToPercent(pixels, axis) {
				if (axis.max === axis.min) return 0;
				return (pixels / (axis.max - axis.min)) * 100;
			}
			/**
			 * We always correct borderRadius as a percentage rather than pixels to reduce paints.
			 * For example, if you are projecting a box that is 100px wide with a 10px borderRadius
			 * into a box that is 200px wide with a 20px borderRadius, that is actually a 10%
			 * borderRadius in both states. If we animate between the two in pixels that will trigger
			 * a paint each time. If we animate between the two in percentage we'll avoid a paint.
			 */
			const correctBorderRadius = {
				correct: (latest, node) => {
					if (!node.target) return latest;
					/**
					 * If latest is a string, if it's a percentage we can return immediately as it's
					 * going to be stretched appropriately. Otherwise, if it's a pixel, convert it to a number.
					 */
					if (typeof latest === "string") {
						if (px.test(latest)) {
							latest = parseFloat(latest);
						} else {
							return latest;
						}
					}
					/**
					 * If latest is a number, it's a pixel value. We use the current viewportBox to calculate that
					 * pixel value as a percentage of each axis
					 */
					const x = pixelsToPercent(latest, node.target.x);
					const y = pixelsToPercent(latest, node.target.y);
					return `${x}% ${y}%`;
				},
			}; // CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/projection/styles/scale-box-shadow.mjs

			const correctBoxShadow = {
				correct: (latest, { treeScale, projectionDelta }) => {
					const original = latest;
					const shadow = complex.parse(latest);
					// TODO: Doesn't support multiple shadows
					if (shadow.length > 5) return original;
					const template = complex.createTransformer(latest);
					const offset = typeof shadow[0] !== "number" ? 1 : 0;
					// Calculate the overall context scale
					const xScale = projectionDelta.x.scale * treeScale.x;
					const yScale = projectionDelta.y.scale * treeScale.y;
					shadow[0 + offset] /= xScale;
					shadow[1 + offset] /= yScale;
					/**
					 * Ideally we'd correct x and y scales individually, but because blur and
					 * spread apply to both we have to take a scale average and apply that instead.
					 * We could potentially improve the outcome of this by incorporating the ratio between
					 * the two scales.
					 */
					const averageScale = mixNumber(xScale, yScale, 0.5);
					// Blur
					if (typeof shadow[2 + offset] === "number")
						shadow[2 + offset] /= averageScale;
					// Spread
					if (typeof shadow[3 + offset] === "number")
						shadow[3 + offset] /= averageScale;
					return template(shadow);
				},
			}; // CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/motion/features/layout/MeasureLayout.mjs

			("use client");

			/**
			 * Track whether we've taken any snapshots yet. If not,
			 * we can safely skip notification of didUpdate.
			 *
			 * Difficult to capture in a test but to prevent flickering
			 * we must set this to true either on update or unmount.
			 * Running `next-env/layout-id` in Safari will show this behaviour if broken.
			 */
			let hasTakenAnySnapshot = false;
			class MeasureLayoutWithContext extends react.Component {
				/**
				 * This only mounts projection nodes for components that
				 * need measuring, we might want to do it for all components
				 * in order to incorporate transforms
				 */
				componentDidMount() {
					const { visualElement, layoutGroup, switchLayoutGroup, layoutId } =
						this.props;
					const { projection } = visualElement;
					addScaleCorrector(defaultScaleCorrectors);
					if (projection) {
						if (layoutGroup.group) layoutGroup.group.add(projection);
						if (switchLayoutGroup && switchLayoutGroup.register && layoutId) {
							switchLayoutGroup.register(projection);
						}
						if (hasTakenAnySnapshot) {
							projection.root.didUpdate();
						}
						projection.addEventListener("animationComplete", () => {
							this.safeToRemove();
						});
						projection.setOptions({
							...projection.options,
							onExitComplete: () => this.safeToRemove(),
						});
					}
					globalProjectionState.hasEverUpdated = true;
				}
				getSnapshotBeforeUpdate(prevProps) {
					const { layoutDependency, visualElement, drag, isPresent } =
						this.props;
					const { projection } = visualElement;
					if (!projection) return null;
					/**
					 * TODO: We use this data in relegate to determine whether to
					 * promote a previous element. There's no guarantee its presence data
					 * will have updated by this point - if a bug like this arises it will
					 * have to be that we markForRelegation and then find a new lead some other way,
					 * perhaps in didUpdate
					 */
					projection.isPresent = isPresent;
					hasTakenAnySnapshot = true;
					if (
						drag ||
						prevProps.layoutDependency !== layoutDependency ||
						layoutDependency === undefined ||
						prevProps.isPresent !== isPresent
					) {
						projection.willUpdate();
					} else {
						this.safeToRemove();
					}
					if (prevProps.isPresent !== isPresent) {
						if (isPresent) {
							projection.promote();
						} else if (!projection.relegate()) {
							/**
							 * If there's another stack member taking over from this one,
							 * it's in charge of the exit animation and therefore should
							 * be in charge of the safe to remove. Otherwise we call it here.
							 */
							frame_frame.postRender(() => {
								const stack = projection.getStack();
								if (!stack || !stack.members.length) {
									this.safeToRemove();
								}
							});
						}
					}
					return null;
				}
				componentDidUpdate() {
					const { projection } = this.props.visualElement;
					if (projection) {
						projection.root.didUpdate();
						microtask.postRender(() => {
							if (!projection.currentAnimation && projection.isLead()) {
								this.safeToRemove();
							}
						});
					}
				}
				componentWillUnmount() {
					const {
						visualElement,
						layoutGroup,
						switchLayoutGroup: promoteContext,
					} = this.props;
					const { projection } = visualElement;
					hasTakenAnySnapshot = true;
					if (projection) {
						projection.scheduleCheckAfterUnmount();
						if (layoutGroup && layoutGroup.group)
							layoutGroup.group.remove(projection);
						if (promoteContext && promoteContext.deregister)
							promoteContext.deregister(projection);
					}
				}
				safeToRemove() {
					const { safeToRemove } = this.props;
					safeToRemove && safeToRemove();
				}
				render() {
					return null;
				}
			}
			function MeasureLayout_MeasureLayout(props) {
				const [isPresent, safeToRemove] = usePresence();
				const layoutGroup = (0, react.useContext)(LayoutGroupContext);
				return (0, jsx_runtime.jsx)(MeasureLayoutWithContext, {
					...props,
					layoutGroup: layoutGroup,
					switchLayoutGroup: (0, react.useContext)(SwitchLayoutGroupContext),
					isPresent: isPresent,
					safeToRemove: safeToRemove,
				});
			}
			const defaultScaleCorrectors = {
				borderRadius: {
					...correctBorderRadius,
					applyTo: [
						"borderTopLeftRadius",
						"borderTopRightRadius",
						"borderBottomLeftRadius",
						"borderBottomRightRadius",
					],
				},
				borderTopLeftRadius: correctBorderRadius,
				borderTopRightRadius: correctBorderRadius,
				borderBottomLeftRadius: correctBorderRadius,
				borderBottomRightRadius: correctBorderRadius,
				boxShadow: correctBoxShadow,
			}; // CONCATENATED MODULE: ./node_modules/motion-utils/dist/es/is-object.mjs
			function isObject(value) {
				return typeof value === "object" && value !== null;
			} // CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/utils/is-svg-element.mjs

			/**
			 * Checks if an element is an SVG element in a way
			 * that works across iframes
			 */
			function isSVGElement(element) {
				return isObject(element) && "ownerSVGElement" in element;
			} // CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/utils/is-svg-svg-element.mjs

			/**
			 * Checks if an element is specifically an SVGSVGElement (the root SVG element)
			 * in a way that works across iframes
			 */
			function isSVGSVGElement(element) {
				return isSVGElement(element) && element.tagName === "svg";
			} // CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/animation/animate/single-value.mjs

			function animateSingleValue(value, keyframes, options) {
				const motionValue$1 = isMotionValue(value)
					? value
					: value_motionValue(value);
				motionValue$1.start(
					animateMotionValue("", motionValue$1, keyframes, options),
				);
				return motionValue$1.animation;
			} // CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/utils/compare-by-depth.mjs
			const compareByDepth = (a, b) => a.depth - b.depth; // CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/utils/flat-tree.mjs

			class FlatTree {
				constructor() {
					this.children = [];
					this.isDirty = false;
				}
				add(child) {
					addUniqueItem(this.children, child);
					this.isDirty = true;
				}
				remove(child) {
					removeItem(this.children, child);
					this.isDirty = true;
				}
				forEach(callback) {
					this.isDirty && this.children.sort(compareByDepth);
					this.isDirty = false;
					this.children.forEach(callback);
				}
			} // CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/utils/delay.mjs

			/**
			 * Timeout defined in ms
			 */
			function delay_delay(callback, timeout) {
				const start = sync_time_time.now();
				const checkElapsed = ({ timestamp }) => {
					const elapsed = timestamp - start;
					if (elapsed >= timeout) {
						cancelFrame(checkElapsed);
						callback(elapsed - timeout);
					}
				};
				frame_frame.setup(checkElapsed, true);
				return () => cancelFrame(checkElapsed);
			}
			function delayInSeconds(callback, timeout) {
				return delay_delay(callback, secondsToMilliseconds(timeout));
			} // CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/projection/animation/mix-values.mjs

			const borders = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"];
			const numBorders = borders.length;
			const asNumber = (value) =>
				typeof value === "string" ? parseFloat(value) : value;
			const isPx = (value) => typeof value === "number" || px.test(value);
			function mixValues(
				target,
				follow,
				lead,
				progress,
				shouldCrossfadeOpacity,
				isOnlyMember,
			) {
				if (shouldCrossfadeOpacity) {
					target.opacity = mixNumber(
						0,
						lead.opacity ?? 1,
						easeCrossfadeIn(progress),
					);
					target.opacityExit = mixNumber(
						follow.opacity ?? 1,
						0,
						easeCrossfadeOut(progress),
					);
				} else if (isOnlyMember) {
					target.opacity = mixNumber(
						follow.opacity ?? 1,
						lead.opacity ?? 1,
						progress,
					);
				}
				/**
				 * Mix border radius
				 */
				for (let i = 0; i < numBorders; i++) {
					const borderLabel = `border${borders[i]}Radius`;
					let followRadius = getRadius(follow, borderLabel);
					let leadRadius = getRadius(lead, borderLabel);
					if (followRadius === undefined && leadRadius === undefined) continue;
					followRadius || (followRadius = 0);
					leadRadius || (leadRadius = 0);
					const canMix =
						followRadius === 0 ||
						leadRadius === 0 ||
						isPx(followRadius) === isPx(leadRadius);
					if (canMix) {
						target[borderLabel] = Math.max(
							mixNumber(asNumber(followRadius), asNumber(leadRadius), progress),
							0,
						);
						if (
							units_percent.test(leadRadius) ||
							units_percent.test(followRadius)
						) {
							target[borderLabel] += "%";
						}
					} else {
						target[borderLabel] = leadRadius;
					}
				}
				/**
				 * Mix rotation
				 */
				if (follow.rotate || lead.rotate) {
					target.rotate = mixNumber(
						follow.rotate || 0,
						lead.rotate || 0,
						progress,
					);
				}
			}
			function getRadius(values, radiusName) {
				return values[radiusName] !== undefined
					? values[radiusName]
					: values.borderRadius;
			}
			// /**
			//  * We only want to mix the background color if there's a follow element
			//  * that we're not crossfading opacity between. For instance with switch
			//  * AnimateSharedLayout animations, this helps the illusion of a continuous
			//  * element being animated but also cuts down on the number of paints triggered
			//  * for elements where opacity is doing that work for us.
			//  */
			// if (
			//     !hasFollowElement &&
			//     latestLeadValues.backgroundColor &&
			//     latestFollowValues.backgroundColor
			// ) {
			//     /**
			//      * This isn't ideal performance-wise as mixColor is creating a new function every frame.
			//      * We could probably create a mixer that runs at the start of the animation but
			//      * the idea behind the crossfader is that it runs dynamically between two potentially
			//      * changing targets (ie opacity or borderRadius may be animating independently via variants)
			//      */
			//     leadState.backgroundColor = followState.backgroundColor = mixColor(
			//         latestFollowValues.backgroundColor as string,
			//         latestLeadValues.backgroundColor as string
			//     )(p)
			// }
			const easeCrossfadeIn = /*@__PURE__*/ compress(0, 0.5, circOut);
			const easeCrossfadeOut = /*@__PURE__*/ compress(0.5, 0.95, noop);
			function compress(min, max, easing) {
				return (p) => {
					// Could replace ifs with clamp
					if (p < min) return 0;
					if (p > max) return 1;
					return easing(progress_progress(min, max, p));
				};
			} // CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/projection/geometry/copy.mjs
			/**
			 * Reset an axis to the provided origin box.
			 *
			 * This is a mutative operation.
			 */
			function copyAxisInto(axis, originAxis) {
				axis.min = originAxis.min;
				axis.max = originAxis.max;
			}
			/**
			 * Reset a box to the provided origin box.
			 *
			 * This is a mutative operation.
			 */
			function copyBoxInto(box, originBox) {
				copyAxisInto(box.x, originBox.x);
				copyAxisInto(box.y, originBox.y);
			}
			/**
			 * Reset a delta to the provided origin box.
			 *
			 * This is a mutative operation.
			 */
			function copyAxisDeltaInto(delta, originDelta) {
				delta.translate = originDelta.translate;
				delta.scale = originDelta.scale;
				delta.originPoint = originDelta.originPoint;
				delta.origin = originDelta.origin;
			} // CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/projection/geometry/delta-remove.mjs

			/**
			 * Remove a delta from a point. This is essentially the steps of applyPointDelta in reverse
			 */
			function removePointDelta(
				point,
				translate,
				scale,
				originPoint,
				boxScale,
			) {
				point -= translate;
				point = scalePoint(point, 1 / scale, originPoint);
				if (boxScale !== undefined) {
					point = scalePoint(point, 1 / boxScale, originPoint);
				}
				return point;
			}
			/**
			 * Remove a delta from an axis. This is essentially the steps of applyAxisDelta in reverse
			 */
			function removeAxisDelta(
				axis,
				translate = 0,
				scale = 1,
				origin = 0.5,
				boxScale,
				originAxis = axis,
				sourceAxis = axis,
			) {
				if (units_percent.test(translate)) {
					translate = parseFloat(translate);
					const relativeProgress = mixNumber(
						sourceAxis.min,
						sourceAxis.max,
						translate / 100,
					);
					translate = relativeProgress - sourceAxis.min;
				}
				if (typeof translate !== "number") return;
				let originPoint = mixNumber(originAxis.min, originAxis.max, origin);
				if (axis === originAxis) originPoint -= translate;
				axis.min = removePointDelta(
					axis.min,
					translate,
					scale,
					originPoint,
					boxScale,
				);
				axis.max = removePointDelta(
					axis.max,
					translate,
					scale,
					originPoint,
					boxScale,
				);
			}
			/**
			 * Remove a transforms from an axis. This is essentially the steps of applyAxisTransforms in reverse
			 * and acts as a bridge between motion values and removeAxisDelta
			 */
			function removeAxisTransforms(
				axis,
				transforms,
				[key, scaleKey, originKey],
				origin,
				sourceAxis,
			) {
				removeAxisDelta(
					axis,
					transforms[key],
					transforms[scaleKey],
					transforms[originKey],
					transforms.scale,
					origin,
					sourceAxis,
				);
			}
			/**
			 * The names of the motion values we want to apply as translation, scale and origin.
			 */
			const xKeys = ["x", "scaleX", "originX"];
			const yKeys = ["y", "scaleY", "originY"];
			/**
			 * Remove a transforms from an box. This is essentially the steps of applyAxisBox in reverse
			 * and acts as a bridge between motion values and removeAxisDelta
			 */
			function removeBoxTransforms(box, transforms, originBox, sourceBox) {
				removeAxisTransforms(
					box.x,
					transforms,
					xKeys,
					originBox ? originBox.x : undefined,
					sourceBox ? sourceBox.x : undefined,
				);
				removeAxisTransforms(
					box.y,
					transforms,
					yKeys,
					originBox ? originBox.y : undefined,
					sourceBox ? sourceBox.y : undefined,
				);
			} // CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/projection/geometry/utils.mjs

			function isAxisDeltaZero(delta) {
				return delta.translate === 0 && delta.scale === 1;
			}
			function isDeltaZero(delta) {
				return isAxisDeltaZero(delta.x) && isAxisDeltaZero(delta.y);
			}
			function axisEquals(a, b) {
				return a.min === b.min && a.max === b.max;
			}
			function boxEquals(a, b) {
				return axisEquals(a.x, b.x) && axisEquals(a.y, b.y);
			}
			function axisEqualsRounded(a, b) {
				return (
					Math.round(a.min) === Math.round(b.min) &&
					Math.round(a.max) === Math.round(b.max)
				);
			}
			function boxEqualsRounded(a, b) {
				return axisEqualsRounded(a.x, b.x) && axisEqualsRounded(a.y, b.y);
			}
			function aspectRatio(box) {
				return calcLength(box.x) / calcLength(box.y);
			}
			function axisDeltaEquals(a, b) {
				return (
					a.translate === b.translate &&
					a.scale === b.scale &&
					a.originPoint === b.originPoint
				);
			} // CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/projection/shared/stack.mjs

			class NodeStack {
				constructor() {
					this.members = [];
				}
				add(node) {
					addUniqueItem(this.members, node);
					node.scheduleRender();
				}
				remove(node) {
					removeItem(this.members, node);
					if (node === this.prevLead) {
						this.prevLead = undefined;
					}
					if (node === this.lead) {
						const prevLead = this.members[this.members.length - 1];
						if (prevLead) {
							this.promote(prevLead);
						}
					}
				}
				relegate(node) {
					const indexOfNode = this.members.findIndex(
						(member) => node === member,
					);
					if (indexOfNode === 0) return false;
					/**
					 * Find the next projection node that is present
					 */
					let prevLead;
					for (let i = indexOfNode; i >= 0; i--) {
						const member = this.members[i];
						if (member.isPresent !== false) {
							prevLead = member;
							break;
						}
					}
					if (prevLead) {
						this.promote(prevLead);
						return true;
					} else {
						return false;
					}
				}
				promote(node, preserveFollowOpacity) {
					const prevLead = this.lead;
					if (node === prevLead) return;
					this.prevLead = prevLead;
					this.lead = node;
					node.show();
					if (prevLead) {
						prevLead.instance && prevLead.scheduleRender();
						node.scheduleRender();
						node.resumeFrom = prevLead;
						if (preserveFollowOpacity) {
							node.resumeFrom.preserveOpacity = true;
						}
						if (prevLead.snapshot) {
							node.snapshot = prevLead.snapshot;
							node.snapshot.latestValues =
								prevLead.animationValues || prevLead.latestValues;
						}
						if (node.root && node.root.isUpdating) {
							node.isLayoutDirty = true;
						}
						const { crossfade } = node.options;
						if (crossfade === false) {
							prevLead.hide();
						}
						/**
						 * TODO:
						 *   - Test border radius when previous node was deleted
						 *   - boxShadow mixing
						 *   - Shared between element A in scrolled container and element B (scroll stays the same or changes)
						 *   - Shared between element A in transformed container and element B (transform stays the same or changes)
						 *   - Shared between element A in scrolled page and element B (scroll stays the same or changes)
						 * ---
						 *   - Crossfade opacity of root nodes
						 *   - layoutId changes after animation
						 *   - layoutId changes mid animation
						 */
					}
				}
				exitAnimationComplete() {
					this.members.forEach((node) => {
						const { options, resumingFrom } = node;
						options.onExitComplete && options.onExitComplete();
						if (resumingFrom) {
							resumingFrom.options.onExitComplete &&
								resumingFrom.options.onExitComplete();
						}
					});
				}
				scheduleRender() {
					this.members.forEach((node) => {
						node.instance && node.scheduleRender(false);
					});
				}
				/**
				 * Clear any leads that have been removed this render to prevent them from being
				 * used in future animations and to prevent memory leaks
				 */
				removeLeadSnapshot() {
					if (this.lead && this.lead.snapshot) {
						this.lead.snapshot = undefined;
					}
				}
			} // CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/projection/styles/transform.mjs
			function buildProjectionTransform(delta, treeScale, latestTransform) {
				let transform = "";
				/**
				 * The translations we use to calculate are always relative to the viewport coordinate space.
				 * But when we apply scales, we also scale the coordinate space of an element and its children.
				 * For instance if we have a treeScale (the culmination of all parent scales) of 0.5 and we need
				 * to move an element 100 pixels, we actually need to move it 200 in within that scaled space.
				 */
				const xTranslate = delta.x.translate / treeScale.x;
				const yTranslate = delta.y.translate / treeScale.y;
				const zTranslate = latestTransform?.z || 0;
				if (xTranslate || yTranslate || zTranslate) {
					transform = `translate3d(${xTranslate}px, ${yTranslate}px, ${zTranslate}px) `;
				}
				/**
				 * Apply scale correction for the tree transform.
				 * This will apply scale to the screen-orientated axes.
				 */
				if (treeScale.x !== 1 || treeScale.y !== 1) {
					transform += `scale(${1 / treeScale.x}, ${1 / treeScale.y}) `;
				}
				if (latestTransform) {
					const {
						transformPerspective,
						rotate,
						rotateX,
						rotateY,
						skewX,
						skewY,
					} = latestTransform;
					if (transformPerspective)
						transform = `perspective(${transformPerspective}px) ${transform}`;
					if (rotate) transform += `rotate(${rotate}deg) `;
					if (rotateX) transform += `rotateX(${rotateX}deg) `;
					if (rotateY) transform += `rotateY(${rotateY}deg) `;
					if (skewX) transform += `skewX(${skewX}deg) `;
					if (skewY) transform += `skewY(${skewY}deg) `;
				}
				/**
				 * Apply scale to match the size of the element to the size we want it.
				 * This will apply scale to the element-orientated axes.
				 */
				const elementScaleX = delta.x.scale * treeScale.x;
				const elementScaleY = delta.y.scale * treeScale.y;
				if (elementScaleX !== 1 || elementScaleY !== 1) {
					transform += `scale(${elementScaleX}, ${elementScaleY})`;
				}
				return transform || "none";
			} // CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/projection/node/create-projection-node.mjs

			const metrics = {
				nodes: 0,
				calculatedTargetDeltas: 0,
				calculatedProjections: 0,
			};
			const transformAxes = ["", "X", "Y", "Z"];
			/**
			 * We use 1000 as the animation target as 0-1000 maps better to pixels than 0-1
			 * which has a noticeable difference in spring animations
			 */
			const animationTarget = 1000;
			let create_projection_node_id = 0;
			function resetDistortingTransform(
				key,
				visualElement,
				values,
				sharedAnimationValues,
			) {
				const { latestValues } = visualElement;
				// Record the distorting transform and then temporarily set it to 0
				if (latestValues[key]) {
					values[key] = latestValues[key];
					visualElement.setStaticValue(key, 0);
					if (sharedAnimationValues) {
						sharedAnimationValues[key] = 0;
					}
				}
			}
			function cancelTreeOptimisedTransformAnimations(projectionNode) {
				projectionNode.hasCheckedOptimisedAppear = true;
				if (projectionNode.root === projectionNode) return;
				const { visualElement } = projectionNode.options;
				if (!visualElement) return;
				const appearId = getOptimisedAppearId(visualElement);
				if (window.MotionHasOptimisedAnimation(appearId, "transform")) {
					const { layout, layoutId } = projectionNode.options;
					window.MotionCancelOptimisedAnimation(
						appearId,
						"transform",
						frame_frame,
						!(layout || layoutId),
					);
				}
				const { parent } = projectionNode;
				if (parent && !parent.hasCheckedOptimisedAppear) {
					cancelTreeOptimisedTransformAnimations(parent);
				}
			}
			function create_projection_node_createProjectionNode({
				attachResizeListener,
				defaultParent,
				measureScroll,
				checkIsScrollRoot,
				resetTransform,
			}) {
				return class ProjectionNode {
					constructor(latestValues = {}, parent = defaultParent?.()) {
						/**
						 * A unique ID generated for every projection node.
						 */
						this.id = create_projection_node_id++;
						/**
						 * An id that represents a unique session instigated by startUpdate.
						 */
						this.animationId = 0;
						this.animationCommitId = 0;
						/**
						 * A Set containing all this component's children. This is used to iterate
						 * through the children.
						 *
						 * TODO: This could be faster to iterate as a flat array stored on the root node.
						 */
						this.children = new Set();
						/**
						 * Options for the node. We use this to configure what kind of layout animations
						 * we should perform (if any).
						 */
						this.options = {};
						/**
						 * We use this to detect when its safe to shut down part of a projection tree.
						 * We have to keep projecting children for scale correction and relative projection
						 * until all their parents stop performing layout animations.
						 */
						this.isTreeAnimating = false;
						this.isAnimationBlocked = false;
						/**
						 * Flag to true if we think this layout has been changed. We can't always know this,
						 * currently we set it to true every time a component renders, or if it has a layoutDependency
						 * if that has changed between renders. Additionally, components can be grouped by LayoutGroup
						 * and if one node is dirtied, they all are.
						 */
						this.isLayoutDirty = false;
						/**
						 * Flag to true if we think the projection calculations for this node needs
						 * recalculating as a result of an updated transform or layout animation.
						 */
						this.isProjectionDirty = false;
						/**
						 * Flag to true if the layout *or* transform has changed. This then gets propagated
						 * throughout the projection tree, forcing any element below to recalculate on the next frame.
						 */
						this.isSharedProjectionDirty = false;
						/**
						 * Flag transform dirty. This gets propagated throughout the whole tree but is only
						 * respected by shared nodes.
						 */
						this.isTransformDirty = false;
						/**
						 * Block layout updates for instant layout transitions throughout the tree.
						 */
						this.updateManuallyBlocked = false;
						this.updateBlockedByResize = false;
						/**
						 * Set to true between the start of the first `willUpdate` call and the end of the `didUpdate`
						 * call.
						 */
						this.isUpdating = false;
						/**
						 * If this is an SVG element we currently disable projection transforms
						 */
						this.isSVG = false;
						/**
						 * Flag to true (during promotion) if a node doing an instant layout transition needs to reset
						 * its projection styles.
						 */
						this.needsReset = false;
						/**
						 * Flags whether this node should have its transform reset prior to measuring.
						 */
						this.shouldResetTransform = false;
						/**
						 * Store whether this node has been checked for optimised appear animations. As
						 * effects fire bottom-up, and we want to look up the tree for appear animations,
						 * this makes sure we only check each path once, stopping at nodes that
						 * have already been checked.
						 */
						this.hasCheckedOptimisedAppear = false;
						/**
						 * An object representing the calculated contextual/accumulated/tree scale.
						 * This will be used to scale calculcated projection transforms, as these are
						 * calculated in screen-space but need to be scaled for elements to layoutly
						 * make it to their calculated destinations.
						 *
						 * TODO: Lazy-init
						 */
						this.treeScale = { x: 1, y: 1 };
						/**
						 *
						 */
						this.eventHandlers = new Map();
						this.hasTreeAnimated = false;
						// Note: Currently only running on root node
						this.updateScheduled = false;
						this.scheduleUpdate = () => this.update();
						this.projectionUpdateScheduled = false;
						this.checkUpdateFailed = () => {
							if (this.isUpdating) {
								this.isUpdating = false;
								this.clearAllSnapshots();
							}
						};
						/**
						 * This is a multi-step process as shared nodes might be of different depths. Nodes
						 * are sorted by depth order, so we need to resolve the entire tree before moving to
						 * the next step.
						 */
						this.updateProjection = () => {
							this.projectionUpdateScheduled = false;
							/**
							 * Reset debug counts. Manually resetting rather than creating a new
							 * object each frame.
							 */
							if (statsBuffer.value) {
								metrics.nodes =
									metrics.calculatedTargetDeltas =
									metrics.calculatedProjections =
										0;
							}
							this.nodes.forEach(propagateDirtyNodes);
							this.nodes.forEach(resolveTargetDelta);
							this.nodes.forEach(calcProjection);
							this.nodes.forEach(cleanDirtyNodes);
							if (statsBuffer.addProjectionMetrics) {
								statsBuffer.addProjectionMetrics(metrics);
							}
						};
						/**
						 * Frame calculations
						 */
						this.resolvedRelativeTargetAt = 0.0;
						this.hasProjected = false;
						this.isVisible = true;
						this.animationProgress = 0;
						/**
						 * Shared layout
						 */
						// TODO Only running on root node
						this.sharedNodes = new Map();
						this.latestValues = latestValues;
						this.root = parent ? parent.root || parent : this;
						this.path = parent ? [...parent.path, parent] : [];
						this.parent = parent;
						this.depth = parent ? parent.depth + 1 : 0;
						for (let i = 0; i < this.path.length; i++) {
							this.path[i].shouldResetTransform = true;
						}
						if (this.root === this) this.nodes = new FlatTree();
					}
					addEventListener(name, handler) {
						if (!this.eventHandlers.has(name)) {
							this.eventHandlers.set(name, new SubscriptionManager());
						}
						return this.eventHandlers.get(name).add(handler);
					}
					notifyListeners(name, ...args) {
						const subscriptionManager = this.eventHandlers.get(name);
						subscriptionManager && subscriptionManager.notify(...args);
					}
					hasListeners(name) {
						return this.eventHandlers.has(name);
					}
					/**
					 * Lifecycles
					 */
					mount(instance) {
						if (this.instance) return;
						this.isSVG = isSVGElement(instance) && !isSVGSVGElement(instance);
						this.instance = instance;
						const { layoutId, layout, visualElement } = this.options;
						if (visualElement && !visualElement.current) {
							visualElement.mount(instance);
						}
						this.root.nodes.add(this);
						this.parent && this.parent.children.add(this);
						if (this.root.hasTreeAnimated && (layout || layoutId)) {
							this.isLayoutDirty = true;
						}
						if (attachResizeListener) {
							let cancelDelay;
							let innerWidth = 0;
							const resizeUnblockUpdate = () =>
								(this.root.updateBlockedByResize = false);
							// Set initial innerWidth in a frame.read callback to batch the read
							frame_frame.read(() => {
								innerWidth = window.innerWidth;
							});
							attachResizeListener(instance, () => {
								const newInnerWidth = window.innerWidth;
								if (newInnerWidth === innerWidth) return;
								innerWidth = newInnerWidth;
								this.root.updateBlockedByResize = true;
								cancelDelay && cancelDelay();
								cancelDelay = delay_delay(resizeUnblockUpdate, 250);
								if (globalProjectionState.hasAnimatedSinceResize) {
									globalProjectionState.hasAnimatedSinceResize = false;
									this.nodes.forEach(finishAnimation);
								}
							});
						}
						if (layoutId) {
							this.root.registerSharedNode(layoutId, this);
						}
						// Only register the handler if it requires layout animation
						if (
							this.options.animate !== false &&
							visualElement &&
							(layoutId || layout)
						) {
							this.addEventListener(
								"didUpdate",
								({
									delta,
									hasLayoutChanged,
									hasRelativeLayoutChanged,
									layout: newLayout,
								}) => {
									if (this.isTreeAnimationBlocked()) {
										this.target = undefined;
										this.relativeTarget = undefined;
										return;
									}
									// TODO: Check here if an animation exists
									const layoutTransition =
										this.options.transition ||
										visualElement.getDefaultTransition() ||
										defaultLayoutTransition;
									const { onLayoutAnimationStart, onLayoutAnimationComplete } =
										visualElement.getProps();
									/**
									 * The target layout of the element might stay the same,
									 * but its position relative to its parent has changed.
									 */
									const hasTargetChanged =
										!this.targetLayout ||
										!boxEqualsRounded(this.targetLayout, newLayout);
									/*
									 * Note: Disabled to fix relative animations always triggering new
									 * layout animations. If this causes further issues, we can try
									 * a different approach to detecting relative target changes.
									 */
									// || hasRelativeLayoutChanged
									/**
									 * If the layout hasn't seemed to have changed, it might be that the
									 * element is visually in the same place in the document but its position
									 * relative to its parent has indeed changed. So here we check for that.
									 */
									const hasOnlyRelativeTargetChanged =
										!hasLayoutChanged && hasRelativeLayoutChanged;
									if (
										this.options.layoutRoot ||
										this.resumeFrom ||
										hasOnlyRelativeTargetChanged ||
										(hasLayoutChanged &&
											(hasTargetChanged || !this.currentAnimation))
									) {
										if (this.resumeFrom) {
											this.resumingFrom = this.resumeFrom;
											this.resumingFrom.resumingFrom = undefined;
										}
										const animationOptions = {
											...getValueTransition(layoutTransition, "layout"),
											onPlay: onLayoutAnimationStart,
											onComplete: onLayoutAnimationComplete,
										};
										if (
											visualElement.shouldReduceMotion ||
											this.options.layoutRoot
										) {
											animationOptions.delay = 0;
											animationOptions.type = false;
										}
										this.startAnimation(animationOptions);
										/**
										 * Set animation origin after starting animation to avoid layout jump
										 * caused by stopping previous layout animation
										 */
										this.setAnimationOrigin(
											delta,
											hasOnlyRelativeTargetChanged,
										);
									} else {
										/**
										 * If the layout hasn't changed and we have an animation that hasn't started yet,
										 * finish it immediately. Otherwise it will be animating from a location
										 * that was probably never commited to screen and look like a jumpy box.
										 */
										if (!hasLayoutChanged) {
											finishAnimation(this);
										}
										if (this.isLead() && this.options.onExitComplete) {
											this.options.onExitComplete();
										}
									}
									this.targetLayout = newLayout;
								},
							);
						}
					}
					unmount() {
						this.options.layoutId && this.willUpdate();
						this.root.nodes.remove(this);
						const stack = this.getStack();
						stack && stack.remove(this);
						this.parent && this.parent.children.delete(this);
						this.instance = undefined;
						this.eventHandlers.clear();
						cancelFrame(this.updateProjection);
					}
					// only on the root
					blockUpdate() {
						this.updateManuallyBlocked = true;
					}
					unblockUpdate() {
						this.updateManuallyBlocked = false;
					}
					isUpdateBlocked() {
						return this.updateManuallyBlocked || this.updateBlockedByResize;
					}
					isTreeAnimationBlocked() {
						return (
							this.isAnimationBlocked ||
							(this.parent && this.parent.isTreeAnimationBlocked()) ||
							false
						);
					}
					// Note: currently only running on root node
					startUpdate() {
						if (this.isUpdateBlocked()) return;
						this.isUpdating = true;
						this.nodes && this.nodes.forEach(resetSkewAndRotation);
						this.animationId++;
					}
					getTransformTemplate() {
						const { visualElement } = this.options;
						return visualElement && visualElement.getProps().transformTemplate;
					}
					willUpdate(shouldNotifyListeners = true) {
						this.root.hasTreeAnimated = true;
						if (this.root.isUpdateBlocked()) {
							this.options.onExitComplete && this.options.onExitComplete();
							return;
						}
						/**
						 * If we're running optimised appear animations then these must be
						 * cancelled before measuring the DOM. This is so we can measure
						 * the true layout of the element rather than the WAAPI animation
						 * which will be unaffected by the resetSkewAndRotate step.
						 *
						 * Note: This is a DOM write. Worst case scenario is this is sandwiched
						 * between other snapshot reads which will cause unnecessary style recalculations.
						 * This has to happen here though, as we don't yet know which nodes will need
						 * snapshots in startUpdate(), but we only want to cancel optimised animations
						 * if a layout animation measurement is actually going to be affected by them.
						 */
						if (
							window.MotionCancelOptimisedAnimation &&
							!this.hasCheckedOptimisedAppear
						) {
							cancelTreeOptimisedTransformAnimations(this);
						}
						!this.root.isUpdating && this.root.startUpdate();
						if (this.isLayoutDirty) return;
						this.isLayoutDirty = true;
						for (let i = 0; i < this.path.length; i++) {
							const node = this.path[i];
							node.shouldResetTransform = true;
							node.updateScroll("snapshot");
							if (node.options.layoutRoot) {
								node.willUpdate(false);
							}
						}
						const { layoutId, layout } = this.options;
						if (layoutId === undefined && !layout) return;
						const transformTemplate = this.getTransformTemplate();
						this.prevTransformTemplateValue = transformTemplate
							? transformTemplate(this.latestValues, "")
							: undefined;
						this.updateSnapshot();
						shouldNotifyListeners && this.notifyListeners("willUpdate");
					}
					update() {
						this.updateScheduled = false;
						const updateWasBlocked = this.isUpdateBlocked();
						// When doing an instant transition, we skip the layout update,
						// but should still clean up the measurements so that the next
						// snapshot could be taken correctly.
						if (updateWasBlocked) {
							this.unblockUpdate();
							this.clearAllSnapshots();
							this.nodes.forEach(clearMeasurements);
							return;
						}
						/**
						 * If this is a repeat of didUpdate then ignore the animation.
						 */
						if (this.animationId <= this.animationCommitId) {
							this.nodes.forEach(clearIsLayoutDirty);
							return;
						}
						this.animationCommitId = this.animationId;
						if (!this.isUpdating) {
							this.nodes.forEach(clearIsLayoutDirty);
						} else {
							this.isUpdating = false;
							/**
							 * Write
							 */
							this.nodes.forEach(resetTransformStyle);
							/**
							 * Read ==================
							 */
							// Update layout measurements of updated children
							this.nodes.forEach(updateLayout);
							/**
							 * Write
							 */
							// Notify listeners that the layout is updated
							this.nodes.forEach(notifyLayoutUpdate);
						}
						this.clearAllSnapshots();
						/**
						 * Manually flush any pending updates. Ideally
						 * we could leave this to the following requestAnimationFrame but this seems
						 * to leave a flash of incorrectly styled content.
						 */
						const now = sync_time_time.now();
						frame_frameData.delta = clamp(
							0,
							1000 / 60,
							now - frame_frameData.timestamp,
						);
						frame_frameData.timestamp = now;
						frame_frameData.isProcessing = true;
						frameSteps.update.process(frame_frameData);
						frameSteps.preRender.process(frame_frameData);
						frameSteps.render.process(frame_frameData);
						frame_frameData.isProcessing = false;
					}
					didUpdate() {
						if (!this.updateScheduled) {
							this.updateScheduled = true;
							microtask.read(this.scheduleUpdate);
						}
					}
					clearAllSnapshots() {
						this.nodes.forEach(clearSnapshot);
						this.sharedNodes.forEach(removeLeadSnapshots);
					}
					scheduleUpdateProjection() {
						if (!this.projectionUpdateScheduled) {
							this.projectionUpdateScheduled = true;
							frame_frame.preRender(this.updateProjection, false, true);
						}
					}
					scheduleCheckAfterUnmount() {
						/**
						 * If the unmounting node is in a layoutGroup and did trigger a willUpdate,
						 * we manually call didUpdate to give a chance to the siblings to animate.
						 * Otherwise, cleanup all snapshots to prevents future nodes from reusing them.
						 */
						frame_frame.postRender(() => {
							if (this.isLayoutDirty) {
								this.root.didUpdate();
							} else {
								this.root.checkUpdateFailed();
							}
						});
					}
					/**
					 * Update measurements
					 */
					updateSnapshot() {
						if (this.snapshot || !this.instance) return;
						this.snapshot = this.measure();
						if (
							this.snapshot &&
							!calcLength(this.snapshot.measuredBox.x) &&
							!calcLength(this.snapshot.measuredBox.y)
						) {
							this.snapshot = undefined;
						}
					}
					updateLayout() {
						if (!this.instance) return;
						this.updateScroll();
						if (
							!(this.options.alwaysMeasureLayout && this.isLead()) &&
							!this.isLayoutDirty
						) {
							return;
						}
						/**
						 * When a node is mounted, it simply resumes from the prevLead's
						 * snapshot instead of taking a new one, but the ancestors scroll
						 * might have updated while the prevLead is unmounted. We need to
						 * update the scroll again to make sure the layout we measure is
						 * up to date.
						 */
						if (this.resumeFrom && !this.resumeFrom.instance) {
							for (let i = 0; i < this.path.length; i++) {
								const node = this.path[i];
								node.updateScroll();
							}
						}
						const prevLayout = this.layout;
						this.layout = this.measure(false);
						this.layoutCorrected = createBox();
						this.isLayoutDirty = false;
						this.projectionDelta = undefined;
						this.notifyListeners("measure", this.layout.layoutBox);
						const { visualElement } = this.options;
						visualElement &&
							visualElement.notify(
								"LayoutMeasure",
								this.layout.layoutBox,
								prevLayout ? prevLayout.layoutBox : undefined,
							);
					}
					updateScroll(phase = "measure") {
						let needsMeasurement = Boolean(
							this.options.layoutScroll && this.instance,
						);
						if (
							this.scroll &&
							this.scroll.animationId === this.root.animationId &&
							this.scroll.phase === phase
						) {
							needsMeasurement = false;
						}
						if (needsMeasurement && this.instance) {
							const isRoot = checkIsScrollRoot(this.instance);
							this.scroll = {
								animationId: this.root.animationId,
								phase,
								isRoot,
								offset: measureScroll(this.instance),
								wasRoot: this.scroll ? this.scroll.isRoot : isRoot,
							};
						}
					}
					resetTransform() {
						if (!resetTransform) return;
						const isResetRequested =
							this.isLayoutDirty ||
							this.shouldResetTransform ||
							this.options.alwaysMeasureLayout;
						const hasProjection =
							this.projectionDelta && !isDeltaZero(this.projectionDelta);
						const transformTemplate = this.getTransformTemplate();
						const transformTemplateValue = transformTemplate
							? transformTemplate(this.latestValues, "")
							: undefined;
						const transformTemplateHasChanged =
							transformTemplateValue !== this.prevTransformTemplateValue;
						if (
							isResetRequested &&
							this.instance &&
							(hasProjection ||
								has_transform_hasTransform(this.latestValues) ||
								transformTemplateHasChanged)
						) {
							resetTransform(this.instance, transformTemplateValue);
							this.shouldResetTransform = false;
							this.scheduleRender();
						}
					}
					measure(removeTransform = true) {
						const pageBox = this.measurePageBox();
						let layoutBox = this.removeElementScroll(pageBox);
						/**
						 * Measurements taken during the pre-render stage
						 * still have transforms applied so we remove them
						 * via calculation.
						 */
						if (removeTransform) {
							layoutBox = this.removeTransform(layoutBox);
						}
						roundBox(layoutBox);
						return {
							animationId: this.root.animationId,
							measuredBox: pageBox,
							layoutBox,
							latestValues: {},
							source: this.id,
						};
					}
					measurePageBox() {
						const { visualElement } = this.options;
						if (!visualElement) return createBox();
						const box = visualElement.measureViewportBox();
						const wasInScrollRoot =
							this.scroll?.wasRoot || this.path.some(checkNodeWasScrollRoot);
						if (!wasInScrollRoot) {
							// Remove viewport scroll to give page-relative coordinates
							const { scroll } = this.root;
							if (scroll) {
								translateAxis(box.x, scroll.offset.x);
								translateAxis(box.y, scroll.offset.y);
							}
						}
						return box;
					}
					removeElementScroll(box) {
						const boxWithoutScroll = createBox();
						copyBoxInto(boxWithoutScroll, box);
						if (this.scroll?.wasRoot) {
							return boxWithoutScroll;
						}
						/**
						 * Performance TODO: Keep a cumulative scroll offset down the tree
						 * rather than loop back up the path.
						 */
						for (let i = 0; i < this.path.length; i++) {
							const node = this.path[i];
							const { scroll, options } = node;
							if (node !== this.root && scroll && options.layoutScroll) {
								/**
								 * If this is a new scroll root, we want to remove all previous scrolls
								 * from the viewport box.
								 */
								if (scroll.wasRoot) {
									copyBoxInto(boxWithoutScroll, box);
								}
								translateAxis(boxWithoutScroll.x, scroll.offset.x);
								translateAxis(boxWithoutScroll.y, scroll.offset.y);
							}
						}
						return boxWithoutScroll;
					}
					applyTransform(box, transformOnly = false) {
						const withTransforms = createBox();
						copyBoxInto(withTransforms, box);
						for (let i = 0; i < this.path.length; i++) {
							const node = this.path[i];
							if (
								!transformOnly &&
								node.options.layoutScroll &&
								node.scroll &&
								node !== node.root
							) {
								transformBox(withTransforms, {
									x: -node.scroll.offset.x,
									y: -node.scroll.offset.y,
								});
							}
							if (!has_transform_hasTransform(node.latestValues)) continue;
							transformBox(withTransforms, node.latestValues);
						}
						if (has_transform_hasTransform(this.latestValues)) {
							transformBox(withTransforms, this.latestValues);
						}
						return withTransforms;
					}
					removeTransform(box) {
						const boxWithoutTransform = createBox();
						copyBoxInto(boxWithoutTransform, box);
						for (let i = 0; i < this.path.length; i++) {
							const node = this.path[i];
							if (!node.instance) continue;
							if (!has_transform_hasTransform(node.latestValues)) continue;
							hasScale(node.latestValues) && node.updateSnapshot();
							const sourceBox = createBox();
							const nodeBox = node.measurePageBox();
							copyBoxInto(sourceBox, nodeBox);
							removeBoxTransforms(
								boxWithoutTransform,
								node.latestValues,
								node.snapshot ? node.snapshot.layoutBox : undefined,
								sourceBox,
							);
						}
						if (has_transform_hasTransform(this.latestValues)) {
							removeBoxTransforms(boxWithoutTransform, this.latestValues);
						}
						return boxWithoutTransform;
					}
					setTargetDelta(delta) {
						this.targetDelta = delta;
						this.root.scheduleUpdateProjection();
						this.isProjectionDirty = true;
					}
					setOptions(options) {
						this.options = {
							...this.options,
							...options,
							crossfade:
								options.crossfade !== undefined ? options.crossfade : true,
						};
					}
					clearMeasurements() {
						this.scroll = undefined;
						this.layout = undefined;
						this.snapshot = undefined;
						this.prevTransformTemplateValue = undefined;
						this.targetDelta = undefined;
						this.target = undefined;
						this.isLayoutDirty = false;
					}
					forceRelativeParentToResolveTarget() {
						if (!this.relativeParent) return;
						/**
						 * If the parent target isn't up-to-date, force it to update.
						 * This is an unfortunate de-optimisation as it means any updating relative
						 * projection will cause all the relative parents to recalculate back
						 * up the tree.
						 */
						if (
							this.relativeParent.resolvedRelativeTargetAt !==
							frame_frameData.timestamp
						) {
							this.relativeParent.resolveTargetDelta(true);
						}
					}
					resolveTargetDelta(forceRecalculation = false) {
						/**
						 * Once the dirty status of nodes has been spread through the tree, we also
						 * need to check if we have a shared node of a different depth that has itself
						 * been dirtied.
						 */
						const lead = this.getLead();
						this.isProjectionDirty ||
							(this.isProjectionDirty = lead.isProjectionDirty);
						this.isTransformDirty ||
							(this.isTransformDirty = lead.isTransformDirty);
						this.isSharedProjectionDirty ||
							(this.isSharedProjectionDirty = lead.isSharedProjectionDirty);
						const isShared = Boolean(this.resumingFrom) || this !== lead;
						/**
						 * We don't use transform for this step of processing so we don't
						 * need to check whether any nodes have changed transform.
						 */
						const canSkip = !(
							forceRecalculation ||
							(isShared && this.isSharedProjectionDirty) ||
							this.isProjectionDirty ||
							this.parent?.isProjectionDirty ||
							this.attemptToResolveRelativeTarget ||
							this.root.updateBlockedByResize
						);
						if (canSkip) return;
						const { layout, layoutId } = this.options;
						/**
						 * If we have no layout, we can't perform projection, so early return
						 */
						if (!this.layout || !(layout || layoutId)) return;
						this.resolvedRelativeTargetAt = frame_frameData.timestamp;
						/**
						 * If we don't have a targetDelta but do have a layout, we can attempt to resolve
						 * a relativeParent. This will allow a component to perform scale correction
						 * even if no animation has started.
						 */
						if (!this.targetDelta && !this.relativeTarget) {
							const relativeParent = this.getClosestProjectingParent();
							if (
								relativeParent &&
								relativeParent.layout &&
								this.animationProgress !== 1
							) {
								this.relativeParent = relativeParent;
								this.forceRelativeParentToResolveTarget();
								this.relativeTarget = createBox();
								this.relativeTargetOrigin = createBox();
								calcRelativePosition(
									this.relativeTargetOrigin,
									this.layout.layoutBox,
									relativeParent.layout.layoutBox,
								);
								copyBoxInto(this.relativeTarget, this.relativeTargetOrigin);
							} else {
								this.relativeParent = this.relativeTarget = undefined;
							}
						}
						/**
						 * If we have no relative target or no target delta our target isn't valid
						 * for this frame.
						 */
						if (!this.relativeTarget && !this.targetDelta) return;
						/**
						 * Lazy-init target data structure
						 */
						if (!this.target) {
							this.target = createBox();
							this.targetWithTransforms = createBox();
						}
						/**
						 * If we've got a relative box for this component, resolve it into a target relative to the parent.
						 */
						if (
							this.relativeTarget &&
							this.relativeTargetOrigin &&
							this.relativeParent &&
							this.relativeParent.target
						) {
							this.forceRelativeParentToResolveTarget();
							calcRelativeBox(
								this.target,
								this.relativeTarget,
								this.relativeParent.target,
							);
							/**
							 * If we've only got a targetDelta, resolve it into a target
							 */
						} else if (this.targetDelta) {
							if (this.resumingFrom) {
								// TODO: This is creating a new object every frame
								this.target = this.applyTransform(this.layout.layoutBox);
							} else {
								copyBoxInto(this.target, this.layout.layoutBox);
							}
							applyBoxDelta(this.target, this.targetDelta);
						} else {
							/**
							 * If no target, use own layout as target
							 */
							copyBoxInto(this.target, this.layout.layoutBox);
						}
						/**
						 * If we've been told to attempt to resolve a relative target, do so.
						 */
						if (this.attemptToResolveRelativeTarget) {
							this.attemptToResolveRelativeTarget = false;
							const relativeParent = this.getClosestProjectingParent();
							if (
								relativeParent &&
								Boolean(relativeParent.resumingFrom) ===
									Boolean(this.resumingFrom) &&
								!relativeParent.options.layoutScroll &&
								relativeParent.target &&
								this.animationProgress !== 1
							) {
								this.relativeParent = relativeParent;
								this.forceRelativeParentToResolveTarget();
								this.relativeTarget = createBox();
								this.relativeTargetOrigin = createBox();
								calcRelativePosition(
									this.relativeTargetOrigin,
									this.target,
									relativeParent.target,
								);
								copyBoxInto(this.relativeTarget, this.relativeTargetOrigin);
							} else {
								this.relativeParent = this.relativeTarget = undefined;
							}
						}
						/**
						 * Increase debug counter for resolved target deltas
						 */
						if (statsBuffer.value) {
							metrics.calculatedTargetDeltas++;
						}
					}
					getClosestProjectingParent() {
						if (
							!this.parent ||
							hasScale(this.parent.latestValues) ||
							has2DTranslate(this.parent.latestValues)
						) {
							return undefined;
						}
						if (this.parent.isProjecting()) {
							return this.parent;
						} else {
							return this.parent.getClosestProjectingParent();
						}
					}
					isProjecting() {
						return Boolean(
							(this.relativeTarget ||
								this.targetDelta ||
								this.options.layoutRoot) &&
								this.layout,
						);
					}
					calcProjection() {
						const lead = this.getLead();
						const isShared = Boolean(this.resumingFrom) || this !== lead;
						let canSkip = true;
						/**
						 * If this is a normal layout animation and neither this node nor its nearest projecting
						 * is dirty then we can't skip.
						 */
						if (this.isProjectionDirty || this.parent?.isProjectionDirty) {
							canSkip = false;
						}
						/**
						 * If this is a shared layout animation and this node's shared projection is dirty then
						 * we can't skip.
						 */
						if (
							isShared &&
							(this.isSharedProjectionDirty || this.isTransformDirty)
						) {
							canSkip = false;
						}
						/**
						 * If we have resolved the target this frame we must recalculate the
						 * projection to ensure it visually represents the internal calculations.
						 */
						if (this.resolvedRelativeTargetAt === frame_frameData.timestamp) {
							canSkip = false;
						}
						if (canSkip) return;
						const { layout, layoutId } = this.options;
						/**
						 * If this section of the tree isn't animating we can
						 * delete our target sources for the following frame.
						 */
						this.isTreeAnimating = Boolean(
							(this.parent && this.parent.isTreeAnimating) ||
								this.currentAnimation ||
								this.pendingAnimation,
						);
						if (!this.isTreeAnimating) {
							this.targetDelta = this.relativeTarget = undefined;
						}
						if (!this.layout || !(layout || layoutId)) return;
						/**
						 * Reset the corrected box with the latest values from box, as we're then going
						 * to perform mutative operations on it.
						 */
						copyBoxInto(this.layoutCorrected, this.layout.layoutBox);
						/**
						 * Record previous tree scales before updating.
						 */
						const prevTreeScaleX = this.treeScale.x;
						const prevTreeScaleY = this.treeScale.y;
						/**
						 * Apply all the parent deltas to this box to produce the corrected box. This
						 * is the layout box, as it will appear on screen as a result of the transforms of its parents.
						 */
						applyTreeDeltas(
							this.layoutCorrected,
							this.treeScale,
							this.path,
							isShared,
						);
						/**
						 * If this layer needs to perform scale correction but doesn't have a target,
						 * use the layout as the target.
						 */
						if (
							lead.layout &&
							!lead.target &&
							(this.treeScale.x !== 1 || this.treeScale.y !== 1)
						) {
							lead.target = lead.layout.layoutBox;
							lead.targetWithTransforms = createBox();
						}
						const { target } = lead;
						if (!target) {
							/**
							 * If we don't have a target to project into, but we were previously
							 * projecting, we want to remove the stored transform and schedule
							 * a render to ensure the elements reflect the removed transform.
							 */
							if (this.prevProjectionDelta) {
								this.createProjectionDeltas();
								this.scheduleRender();
							}
							return;
						}
						if (!this.projectionDelta || !this.prevProjectionDelta) {
							this.createProjectionDeltas();
						} else {
							copyAxisDeltaInto(
								this.prevProjectionDelta.x,
								this.projectionDelta.x,
							);
							copyAxisDeltaInto(
								this.prevProjectionDelta.y,
								this.projectionDelta.y,
							);
						}
						/**
						 * Update the delta between the corrected box and the target box before user-set transforms were applied.
						 * This will allow us to calculate the corrected borderRadius and boxShadow to compensate
						 * for our layout reprojection, but still allow them to be scaled correctly by the user.
						 * It might be that to simplify this we may want to accept that user-set scale is also corrected
						 * and we wouldn't have to keep and calc both deltas, OR we could support a user setting
						 * to allow people to choose whether these styles are corrected based on just the
						 * layout reprojection or the final bounding box.
						 */
						calcBoxDelta(
							this.projectionDelta,
							this.layoutCorrected,
							target,
							this.latestValues,
						);
						if (
							this.treeScale.x !== prevTreeScaleX ||
							this.treeScale.y !== prevTreeScaleY ||
							!axisDeltaEquals(
								this.projectionDelta.x,
								this.prevProjectionDelta.x,
							) ||
							!axisDeltaEquals(
								this.projectionDelta.y,
								this.prevProjectionDelta.y,
							)
						) {
							this.hasProjected = true;
							this.scheduleRender();
							this.notifyListeners("projectionUpdate", target);
						}
						/**
						 * Increase debug counter for recalculated projections
						 */
						if (statsBuffer.value) {
							metrics.calculatedProjections++;
						}
					}
					hide() {
						this.isVisible = false;
						// TODO: Schedule render
					}
					show() {
						this.isVisible = true;
						// TODO: Schedule render
					}
					scheduleRender(notifyAll = true) {
						this.options.visualElement?.scheduleRender();
						if (notifyAll) {
							const stack = this.getStack();
							stack && stack.scheduleRender();
						}
						if (this.resumingFrom && !this.resumingFrom.instance) {
							this.resumingFrom = undefined;
						}
					}
					createProjectionDeltas() {
						this.prevProjectionDelta = createDelta();
						this.projectionDelta = createDelta();
						this.projectionDeltaWithTransform = createDelta();
					}
					setAnimationOrigin(delta, hasOnlyRelativeTargetChanged = false) {
						const snapshot = this.snapshot;
						const snapshotLatestValues = snapshot ? snapshot.latestValues : {};
						const mixedValues = { ...this.latestValues };
						const targetDelta = createDelta();
						if (
							!this.relativeParent ||
							!this.relativeParent.options.layoutRoot
						) {
							this.relativeTarget = this.relativeTargetOrigin = undefined;
						}
						this.attemptToResolveRelativeTarget = !hasOnlyRelativeTargetChanged;
						const relativeLayout = createBox();
						const snapshotSource = snapshot ? snapshot.source : undefined;
						const layoutSource = this.layout ? this.layout.source : undefined;
						const isSharedLayoutAnimation = snapshotSource !== layoutSource;
						const stack = this.getStack();
						const isOnlyMember = !stack || stack.members.length <= 1;
						const shouldCrossfadeOpacity = Boolean(
							isSharedLayoutAnimation &&
								!isOnlyMember &&
								this.options.crossfade === true &&
								!this.path.some(hasOpacityCrossfade),
						);
						this.animationProgress = 0;
						let prevRelativeTarget;
						this.mixTargetDelta = (latest) => {
							const progress = latest / 1000;
							mixAxisDelta(targetDelta.x, delta.x, progress);
							mixAxisDelta(targetDelta.y, delta.y, progress);
							this.setTargetDelta(targetDelta);
							if (
								this.relativeTarget &&
								this.relativeTargetOrigin &&
								this.layout &&
								this.relativeParent &&
								this.relativeParent.layout
							) {
								calcRelativePosition(
									relativeLayout,
									this.layout.layoutBox,
									this.relativeParent.layout.layoutBox,
								);
								mixBox(
									this.relativeTarget,
									this.relativeTargetOrigin,
									relativeLayout,
									progress,
								);
								/**
								 * If this is an unchanged relative target we can consider the
								 * projection not dirty.
								 */
								if (
									prevRelativeTarget &&
									boxEquals(this.relativeTarget, prevRelativeTarget)
								) {
									this.isProjectionDirty = false;
								}
								if (!prevRelativeTarget) prevRelativeTarget = createBox();
								copyBoxInto(prevRelativeTarget, this.relativeTarget);
							}
							if (isSharedLayoutAnimation) {
								this.animationValues = mixedValues;
								mixValues(
									mixedValues,
									snapshotLatestValues,
									this.latestValues,
									progress,
									shouldCrossfadeOpacity,
									isOnlyMember,
								);
							}
							this.root.scheduleUpdateProjection();
							this.scheduleRender();
							this.animationProgress = progress;
						};
						this.mixTargetDelta(this.options.layoutRoot ? 1000 : 0);
					}
					startAnimation(options) {
						this.notifyListeners("animationStart");
						this.currentAnimation?.stop();
						this.resumingFrom?.currentAnimation?.stop();
						if (this.pendingAnimation) {
							cancelFrame(this.pendingAnimation);
							this.pendingAnimation = undefined;
						}
						/**
						 * Start the animation in the next frame to have a frame with progress 0,
						 * where the target is the same as when the animation started, so we can
						 * calculate the relative positions correctly for instant transitions.
						 */
						this.pendingAnimation = frame_frame.update(() => {
							globalProjectionState.hasAnimatedSinceResize = true;
							activeAnimations.layout++;
							this.motionValue || (this.motionValue = value_motionValue(0));
							this.currentAnimation = animateSingleValue(
								this.motionValue,
								[0, 1000],
								{
									...options,
									velocity: 0,
									isSync: true,
									onUpdate: (latest) => {
										this.mixTargetDelta(latest);
										options.onUpdate && options.onUpdate(latest);
									},
									onStop: () => {
										activeAnimations.layout--;
									},
									onComplete: () => {
										activeAnimations.layout--;
										options.onComplete && options.onComplete();
										this.completeAnimation();
									},
								},
							);
							if (this.resumingFrom) {
								this.resumingFrom.currentAnimation = this.currentAnimation;
							}
							this.pendingAnimation = undefined;
						});
					}
					completeAnimation() {
						if (this.resumingFrom) {
							this.resumingFrom.currentAnimation = undefined;
							this.resumingFrom.preserveOpacity = undefined;
						}
						const stack = this.getStack();
						stack && stack.exitAnimationComplete();
						this.resumingFrom =
							this.currentAnimation =
							this.animationValues =
								undefined;
						this.notifyListeners("animationComplete");
					}
					finishAnimation() {
						if (this.currentAnimation) {
							this.mixTargetDelta && this.mixTargetDelta(animationTarget);
							this.currentAnimation.stop();
						}
						this.completeAnimation();
					}
					applyTransformsToTarget() {
						const lead = this.getLead();
						let { targetWithTransforms, target, layout, latestValues } = lead;
						if (!targetWithTransforms || !target || !layout) return;
						/**
						 * If we're only animating position, and this element isn't the lead element,
						 * then instead of projecting into the lead box we instead want to calculate
						 * a new target that aligns the two boxes but maintains the layout shape.
						 */
						if (
							this !== lead &&
							this.layout &&
							layout &&
							shouldAnimatePositionOnly(
								this.options.animationType,
								this.layout.layoutBox,
								layout.layoutBox,
							)
						) {
							target = this.target || createBox();
							const xLength = calcLength(this.layout.layoutBox.x);
							target.x.min = lead.target.x.min;
							target.x.max = target.x.min + xLength;
							const yLength = calcLength(this.layout.layoutBox.y);
							target.y.min = lead.target.y.min;
							target.y.max = target.y.min + yLength;
						}
						copyBoxInto(targetWithTransforms, target);
						/**
						 * Apply the latest user-set transforms to the targetBox to produce the targetBoxFinal.
						 * This is the final box that we will then project into by calculating a transform delta and
						 * applying it to the corrected box.
						 */
						transformBox(targetWithTransforms, latestValues);
						/**
						 * Update the delta between the corrected box and the final target box, after
						 * user-set transforms are applied to it. This will be used by the renderer to
						 * create a transform style that will reproject the element from its layout layout
						 * into the desired bounding box.
						 */
						calcBoxDelta(
							this.projectionDeltaWithTransform,
							this.layoutCorrected,
							targetWithTransforms,
							latestValues,
						);
					}
					registerSharedNode(layoutId, node) {
						if (!this.sharedNodes.has(layoutId)) {
							this.sharedNodes.set(layoutId, new NodeStack());
						}
						const stack = this.sharedNodes.get(layoutId);
						stack.add(node);
						const config = node.options.initialPromotionConfig;
						node.promote({
							transition: config ? config.transition : undefined,
							preserveFollowOpacity:
								config && config.shouldPreserveFollowOpacity
									? config.shouldPreserveFollowOpacity(node)
									: undefined,
						});
					}
					isLead() {
						const stack = this.getStack();
						return stack ? stack.lead === this : true;
					}
					getLead() {
						const { layoutId } = this.options;
						return layoutId ? this.getStack()?.lead || this : this;
					}
					getPrevLead() {
						const { layoutId } = this.options;
						return layoutId ? this.getStack()?.prevLead : undefined;
					}
					getStack() {
						const { layoutId } = this.options;
						if (layoutId) return this.root.sharedNodes.get(layoutId);
					}
					promote({ needsReset, transition, preserveFollowOpacity } = {}) {
						const stack = this.getStack();
						if (stack) stack.promote(this, preserveFollowOpacity);
						if (needsReset) {
							this.projectionDelta = undefined;
							this.needsReset = true;
						}
						if (transition) this.setOptions({ transition });
					}
					relegate() {
						const stack = this.getStack();
						if (stack) {
							return stack.relegate(this);
						} else {
							return false;
						}
					}
					resetSkewAndRotation() {
						const { visualElement } = this.options;
						if (!visualElement) return;
						// If there's no detected skew or rotation values, we can early return without a forced render.
						let hasDistortingTransform = false;
						/**
						 * An unrolled check for rotation values. Most elements don't have any rotation and
						 * skipping the nested loop and new object creation is 50% faster.
						 */
						const { latestValues } = visualElement;
						if (
							latestValues.z ||
							latestValues.rotate ||
							latestValues.rotateX ||
							latestValues.rotateY ||
							latestValues.rotateZ ||
							latestValues.skewX ||
							latestValues.skewY
						) {
							hasDistortingTransform = true;
						}
						// If there's no distorting values, we don't need to do any more.
						if (!hasDistortingTransform) return;
						const resetValues = {};
						if (latestValues.z) {
							resetDistortingTransform(
								"z",
								visualElement,
								resetValues,
								this.animationValues,
							);
						}
						// Check the skew and rotate value of all axes and reset to 0
						for (let i = 0; i < transformAxes.length; i++) {
							resetDistortingTransform(
								`rotate${transformAxes[i]}`,
								visualElement,
								resetValues,
								this.animationValues,
							);
							resetDistortingTransform(
								`skew${transformAxes[i]}`,
								visualElement,
								resetValues,
								this.animationValues,
							);
						}
						// Force a render of this element to apply the transform with all skews and rotations
						// set to 0.
						visualElement.render();
						// Put back all the values we reset
						for (const key in resetValues) {
							visualElement.setStaticValue(key, resetValues[key]);
							if (this.animationValues) {
								this.animationValues[key] = resetValues[key];
							}
						}
						// Schedule a render for the next frame. This ensures we won't visually
						// see the element with the reset rotate value applied.
						visualElement.scheduleRender();
					}
					applyProjectionStyles(
						targetStyle, // CSSStyleDeclaration - doesn't allow numbers to be assigned to properties
						styleProp,
					) {
						if (!this.instance || this.isSVG) return;
						if (!this.isVisible) {
							targetStyle.visibility = "hidden";
							return;
						}
						const transformTemplate = this.getTransformTemplate();
						if (this.needsReset) {
							this.needsReset = false;
							targetStyle.visibility = "";
							targetStyle.opacity = "";
							targetStyle.pointerEvents =
								resolveMotionValue(styleProp?.pointerEvents) || "";
							targetStyle.transform = transformTemplate
								? transformTemplate(this.latestValues, "")
								: "none";
							return;
						}
						const lead = this.getLead();
						if (!this.projectionDelta || !this.layout || !lead.target) {
							if (this.options.layoutId) {
								targetStyle.opacity =
									this.latestValues.opacity !== undefined
										? this.latestValues.opacity
										: 1;
								targetStyle.pointerEvents =
									resolveMotionValue(styleProp?.pointerEvents) || "";
							}
							if (
								this.hasProjected &&
								!has_transform_hasTransform(this.latestValues)
							) {
								targetStyle.transform = transformTemplate
									? transformTemplate({}, "")
									: "none";
								this.hasProjected = false;
							}
							return;
						}
						targetStyle.visibility = "";
						const valuesToRender = lead.animationValues || lead.latestValues;
						this.applyTransformsToTarget();
						let transform = buildProjectionTransform(
							this.projectionDeltaWithTransform,
							this.treeScale,
							valuesToRender,
						);
						if (transformTemplate) {
							transform = transformTemplate(valuesToRender, transform);
						}
						targetStyle.transform = transform;
						const { x, y } = this.projectionDelta;
						targetStyle.transformOrigin = `${x.origin * 100}% ${y.origin * 100}% 0`;
						if (lead.animationValues) {
							/**
							 * If the lead component is animating, assign this either the entering/leaving
							 * opacity
							 */
							targetStyle.opacity =
								lead === this
									? (valuesToRender.opacity ?? this.latestValues.opacity ?? 1)
									: this.preserveOpacity
										? this.latestValues.opacity
										: valuesToRender.opacityExit;
						} else {
							/**
							 * Or we're not animating at all, set the lead component to its layout
							 * opacity and other components to hidden.
							 */
							targetStyle.opacity =
								lead === this
									? valuesToRender.opacity !== undefined
										? valuesToRender.opacity
										: ""
									: valuesToRender.opacityExit !== undefined
										? valuesToRender.opacityExit
										: 0;
						}
						/**
						 * Apply scale correction
						 */
						for (const key in scaleCorrectors) {
							if (valuesToRender[key] === undefined) continue;
							const { correct, applyTo, isCSSVariable } = scaleCorrectors[key];
							/**
							 * Only apply scale correction to the value if we have an
							 * active projection transform. Otherwise these values become
							 * vulnerable to distortion if the element changes size without
							 * a corresponding layout animation.
							 */
							const corrected =
								transform === "none"
									? valuesToRender[key]
									: correct(valuesToRender[key], lead);
							if (applyTo) {
								const num = applyTo.length;
								for (let i = 0; i < num; i++) {
									targetStyle[applyTo[i]] = corrected;
								}
							} else {
								// If this is a CSS variable, set it directly on the instance.
								// Replacing this function from creating styles to setting them
								// would be a good place to remove per frame object creation
								if (isCSSVariable) {
									this.options.visualElement.renderState.vars[key] = corrected;
								} else {
									targetStyle[key] = corrected;
								}
							}
						}
						/**
						 * Disable pointer events on follow components. This is to ensure
						 * that if a follow component covers a lead component it doesn't block
						 * pointer events on the lead.
						 */
						if (this.options.layoutId) {
							targetStyle.pointerEvents =
								lead === this
									? resolveMotionValue(styleProp?.pointerEvents) || ""
									: "none";
						}
					}
					clearSnapshot() {
						this.resumeFrom = this.snapshot = undefined;
					}
					// Only run on root
					resetTree() {
						this.root.nodes.forEach((node) => node.currentAnimation?.stop());
						this.root.nodes.forEach(clearMeasurements);
						this.root.sharedNodes.clear();
					}
				};
			}
			function updateLayout(node) {
				node.updateLayout();
			}
			function notifyLayoutUpdate(node) {
				const snapshot = node.resumeFrom?.snapshot || node.snapshot;
				if (
					node.isLead() &&
					node.layout &&
					snapshot &&
					node.hasListeners("didUpdate")
				) {
					const { layoutBox: layout, measuredBox: measuredLayout } =
						node.layout;
					const { animationType } = node.options;
					const isShared = snapshot.source !== node.layout.source;
					// TODO Maybe we want to also resize the layout snapshot so we don't trigger
					// animations for instance if layout="size" and an element has only changed position
					if (animationType === "size") {
						eachAxis((axis) => {
							const axisSnapshot = isShared
								? snapshot.measuredBox[axis]
								: snapshot.layoutBox[axis];
							const length = calcLength(axisSnapshot);
							axisSnapshot.min = layout[axis].min;
							axisSnapshot.max = axisSnapshot.min + length;
						});
					} else if (
						shouldAnimatePositionOnly(animationType, snapshot.layoutBox, layout)
					) {
						eachAxis((axis) => {
							const axisSnapshot = isShared
								? snapshot.measuredBox[axis]
								: snapshot.layoutBox[axis];
							const length = calcLength(layout[axis]);
							axisSnapshot.max = axisSnapshot.min + length;
							/**
							 * Ensure relative target gets resized and rerendererd
							 */
							if (node.relativeTarget && !node.currentAnimation) {
								node.isProjectionDirty = true;
								node.relativeTarget[axis].max =
									node.relativeTarget[axis].min + length;
							}
						});
					}
					const layoutDelta = createDelta();
					calcBoxDelta(layoutDelta, layout, snapshot.layoutBox);
					const visualDelta = createDelta();
					if (isShared) {
						calcBoxDelta(
							visualDelta,
							node.applyTransform(measuredLayout, true),
							snapshot.measuredBox,
						);
					} else {
						calcBoxDelta(visualDelta, layout, snapshot.layoutBox);
					}
					const hasLayoutChanged = !isDeltaZero(layoutDelta);
					let hasRelativeLayoutChanged = false;
					if (!node.resumeFrom) {
						const relativeParent = node.getClosestProjectingParent();
						/**
						 * If the relativeParent is itself resuming from a different element then
						 * the relative snapshot is not relavent
						 */
						if (relativeParent && !relativeParent.resumeFrom) {
							const { snapshot: parentSnapshot, layout: parentLayout } =
								relativeParent;
							if (parentSnapshot && parentLayout) {
								const relativeSnapshot = createBox();
								calcRelativePosition(
									relativeSnapshot,
									snapshot.layoutBox,
									parentSnapshot.layoutBox,
								);
								const relativeLayout = createBox();
								calcRelativePosition(
									relativeLayout,
									layout,
									parentLayout.layoutBox,
								);
								if (!boxEqualsRounded(relativeSnapshot, relativeLayout)) {
									hasRelativeLayoutChanged = true;
								}
								if (relativeParent.options.layoutRoot) {
									node.relativeTarget = relativeLayout;
									node.relativeTargetOrigin = relativeSnapshot;
									node.relativeParent = relativeParent;
								}
							}
						}
					}
					node.notifyListeners("didUpdate", {
						layout,
						snapshot,
						delta: visualDelta,
						layoutDelta,
						hasLayoutChanged,
						hasRelativeLayoutChanged,
					});
				} else if (node.isLead()) {
					const { onExitComplete } = node.options;
					onExitComplete && onExitComplete();
				}
				/**
				 * Clearing transition
				 * TODO: Investigate why this transition is being passed in as {type: false } from Framer
				 * and why we need it at all
				 */
				node.options.transition = undefined;
			}
			function propagateDirtyNodes(node) {
				/**
				 * Increase debug counter for nodes encountered this frame
				 */
				if (statsBuffer.value) {
					metrics.nodes++;
				}
				if (!node.parent) return;
				/**
				 * If this node isn't projecting, propagate isProjectionDirty. It will have
				 * no performance impact but it will allow the next child that *is* projecting
				 * but *isn't* dirty to just check its parent to see if *any* ancestor needs
				 * correcting.
				 */
				if (!node.isProjecting()) {
					node.isProjectionDirty = node.parent.isProjectionDirty;
				}
				/**
				 * Propagate isSharedProjectionDirty and isTransformDirty
				 * throughout the whole tree. A future revision can take another look at
				 * this but for safety we still recalcualte shared nodes.
				 */
				node.isSharedProjectionDirty ||
					(node.isSharedProjectionDirty = Boolean(
						node.isProjectionDirty ||
							node.parent.isProjectionDirty ||
							node.parent.isSharedProjectionDirty,
					));
				node.isTransformDirty ||
					(node.isTransformDirty = node.parent.isTransformDirty);
			}
			function cleanDirtyNodes(node) {
				node.isProjectionDirty =
					node.isSharedProjectionDirty =
					node.isTransformDirty =
						false;
			}
			function clearSnapshot(node) {
				node.clearSnapshot();
			}
			function clearMeasurements(node) {
				node.clearMeasurements();
			}
			function clearIsLayoutDirty(node) {
				node.isLayoutDirty = false;
			}
			function resetTransformStyle(node) {
				const { visualElement } = node.options;
				if (visualElement && visualElement.getProps().onBeforeLayoutMeasure) {
					visualElement.notify("BeforeLayoutMeasure");
				}
				node.resetTransform();
			}
			function finishAnimation(node) {
				node.finishAnimation();
				node.targetDelta = node.relativeTarget = node.target = undefined;
				node.isProjectionDirty = true;
			}
			function resolveTargetDelta(node) {
				node.resolveTargetDelta();
			}
			function calcProjection(node) {
				node.calcProjection();
			}
			function resetSkewAndRotation(node) {
				node.resetSkewAndRotation();
			}
			function removeLeadSnapshots(stack) {
				stack.removeLeadSnapshot();
			}
			function mixAxisDelta(output, delta, p) {
				output.translate = mixNumber(delta.translate, 0, p);
				output.scale = mixNumber(delta.scale, 1, p);
				output.origin = delta.origin;
				output.originPoint = delta.originPoint;
			}
			function mixAxis(output, from, to, p) {
				output.min = mixNumber(from.min, to.min, p);
				output.max = mixNumber(from.max, to.max, p);
			}
			function mixBox(output, from, to, p) {
				mixAxis(output.x, from.x, to.x, p);
				mixAxis(output.y, from.y, to.y, p);
			}
			function hasOpacityCrossfade(node) {
				return (
					node.animationValues && node.animationValues.opacityExit !== undefined
				);
			}
			const defaultLayoutTransition = {
				duration: 0.45,
				ease: [0.4, 0, 0.1, 1],
			};
			const userAgentContains = (string) =>
				typeof navigator !== "undefined" &&
				navigator.userAgent &&
				navigator.userAgent.toLowerCase().includes(string);
			/**
			 * Measured bounding boxes must be rounded in Safari and
			 * left untouched in Chrome, otherwise non-integer layouts within scaled-up elements
			 * can appear to jump.
			 */
			const roundPoint =
				userAgentContains("applewebkit/") && !userAgentContains("chrome/")
					? Math.round
					: noop;
			function roundAxis(axis) {
				// Round to the nearest .5 pixels to support subpixel layouts
				axis.min = roundPoint(axis.min);
				axis.max = roundPoint(axis.max);
			}
			function roundBox(box) {
				roundAxis(box.x);
				roundAxis(box.y);
			}
			function shouldAnimatePositionOnly(animationType, snapshot, layout) {
				return (
					animationType === "position" ||
					(animationType === "preserve-aspect" &&
						!isNear(aspectRatio(snapshot), aspectRatio(layout), 0.2))
				);
			}
			function checkNodeWasScrollRoot(node) {
				return node !== node.root && node.scroll?.wasRoot;
			} // CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/projection/node/DocumentProjectionNode.mjs

			const DocumentProjectionNode =
				create_projection_node_createProjectionNode({
					attachResizeListener: (ref, notify) =>
						addDomEvent(ref, "resize", notify),
					measureScroll: () => ({
						x: document.documentElement.scrollLeft || document.body.scrollLeft,
						y: document.documentElement.scrollTop || document.body.scrollTop,
					}),
					checkIsScrollRoot: () => true,
				}); // CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/projection/node/HTMLProjectionNode.mjs

			const HTMLProjectionNode_rootProjectionNode = {
				current: undefined,
			};
			const HTMLProjectionNode = create_projection_node_createProjectionNode({
				measureScroll: (instance) => ({
					x: instance.scrollLeft,
					y: instance.scrollTop,
				}),
				defaultParent: () => {
					if (!HTMLProjectionNode_rootProjectionNode.current) {
						const documentNode = new DocumentProjectionNode({});
						documentNode.mount(window);
						documentNode.setOptions({ layoutScroll: true });
						HTMLProjectionNode_rootProjectionNode.current = documentNode;
					}
					return HTMLProjectionNode_rootProjectionNode.current;
				},
				resetTransform: (instance, value) => {
					instance.style.transform = value !== undefined ? value : "none";
				},
				checkIsScrollRoot: (instance) =>
					Boolean(window.getComputedStyle(instance).position === "fixed"),
			}); // CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/motion/features/drag.mjs

			const drag_drag = {
				pan: {
					Feature: PanGesture,
				},
				drag: {
					Feature: DragGesture,
					ProjectionNode: HTMLProjectionNode,
					MeasureLayout: MeasureLayout_MeasureLayout,
				},
			}; // CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/utils/resolve-elements.mjs
			function resolveElements(elementOrSelector, scope, selectorCache) {
				if (elementOrSelector instanceof EventTarget) {
					return [elementOrSelector];
				} else if (typeof elementOrSelector === "string") {
					let root = document;
					if (scope) {
						root = scope.current;
					}
					const elements =
						selectorCache?.[elementOrSelector] ??
						root.querySelectorAll(elementOrSelector);
					return elements ? Array.from(elements) : [];
				}
				return Array.from(elementOrSelector);
			} // CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/gestures/utils/setup.mjs

			function setupGesture(elementOrSelector, options) {
				const elements = resolveElements(elementOrSelector);
				const gestureAbortController = new AbortController();
				const eventOptions = {
					passive: true,
					...options,
					signal: gestureAbortController.signal,
				};
				const cancel = () => gestureAbortController.abort();
				return [elements, eventOptions, cancel];
			} // CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/gestures/hover.mjs

			function isValidHover(event) {
				return !(event.pointerType === "touch" || isDragActive());
			}
			/**
			 * Create a hover gesture. hover() is different to .addEventListener("pointerenter")
			 * in that it has an easier syntax, filters out polyfilled touch events, interoperates
			 * with drag gestures, and automatically removes the "pointerennd" event listener when the hover ends.
			 *
			 * @public
			 */
			function hover(elementOrSelector, onHoverStart, options = {}) {
				const [elements, eventOptions, cancel] = setupGesture(
					elementOrSelector,
					options,
				);
				const onPointerEnter = (enterEvent) => {
					if (!isValidHover(enterEvent)) return;
					const { target } = enterEvent;
					const onHoverEnd = onHoverStart(target, enterEvent);
					if (typeof onHoverEnd !== "function" || !target) return;
					const onPointerLeave = (leaveEvent) => {
						if (!isValidHover(leaveEvent)) return;
						onHoverEnd(leaveEvent);
						target.removeEventListener("pointerleave", onPointerLeave);
					};
					target.addEventListener("pointerleave", onPointerLeave, eventOptions);
				};
				elements.forEach((element) => {
					element.addEventListener(
						"pointerenter",
						onPointerEnter,
						eventOptions,
					);
				});
				return cancel;
			} // CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/gestures/hover.mjs

			function handleHoverEvent(node, event, lifecycle) {
				const { props } = node;
				if (node.animationState && props.whileHover) {
					node.animationState.setActive("whileHover", lifecycle === "Start");
				}
				const eventName = "onHover" + lifecycle;
				const callback = props[eventName];
				if (callback) {
					frame_frame.postRender(() =>
						callback(event, extractEventInfo(event)),
					);
				}
			}
			class HoverGesture extends Feature {
				mount() {
					const { current } = this.node;
					if (!current) return;
					this.unmount = hover(current, (_element, startEvent) => {
						handleHoverEvent(this.node, startEvent, "Start");
						return (endEvent) => handleHoverEvent(this.node, endEvent, "End");
					});
				}
				unmount() {}
			} // CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/gestures/focus.mjs

			class FocusGesture extends Feature {
				constructor() {
					super(...arguments);
					this.isActive = false;
				}
				onFocus() {
					let isFocusVisible = false;
					/**
					 * If this element doesn't match focus-visible then don't
					 * apply whileHover. But, if matches throws that focus-visible
					 * is not a valid selector then in that browser outline styles will be applied
					 * to the element by default and we want to match that behaviour with whileFocus.
					 */
					try {
						isFocusVisible = this.node.current.matches(":focus-visible");
					} catch (e) {
						isFocusVisible = true;
					}
					if (!isFocusVisible || !this.node.animationState) return;
					this.node.animationState.setActive("whileFocus", true);
					this.isActive = true;
				}
				onBlur() {
					if (!this.isActive || !this.node.animationState) return;
					this.node.animationState.setActive("whileFocus", false);
					this.isActive = false;
				}
				mount() {
					this.unmount = pipe(
						addDomEvent(this.node.current, "focus", () => this.onFocus()),
						addDomEvent(this.node.current, "blur", () => this.onBlur()),
					);
				}
				unmount() {}
			} // CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/utils/is-html-element.mjs

			/**
			 * Checks if an element is an HTML element in a way
			 * that works across iframes
			 */
			function isHTMLElement(element) {
				return isObject(element) && "offsetHeight" in element;
			} // CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/gestures/utils/is-node-or-child.mjs
			/**
			 * Recursively traverse up the tree to check whether the provided child node
			 * is the parent or a descendant of it.
			 *
			 * @param parent - Element to find
			 * @param child - Element to test against parent
			 */
			const isNodeOrChild = (parent, child) => {
				if (!child) {
					return false;
				} else if (parent === child) {
					return true;
				} else {
					return isNodeOrChild(parent, child.parentElement);
				}
			}; // CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/gestures/press/utils/is-keyboard-accessible.mjs
			const focusableElements = new Set([
				"BUTTON",
				"INPUT",
				"SELECT",
				"TEXTAREA",
				"A",
			]);
			function isElementKeyboardAccessible(element) {
				return (
					focusableElements.has(element.tagName) || element.tabIndex !== -1
				);
			} // CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/gestures/press/utils/state.mjs
			const isPressing = new WeakSet(); // CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/gestures/press/utils/keyboard.mjs

			/**
			 * Filter out events that are not "Enter" keys.
			 */
			function filterEvents(callback) {
				return (event) => {
					if (event.key !== "Enter") return;
					callback(event);
				};
			}
			function firePointerEvent(target, type) {
				target.dispatchEvent(
					new PointerEvent("pointer" + type, {
						isPrimary: true,
						bubbles: true,
					}),
				);
			}
			const enableKeyboardPress = (focusEvent, eventOptions) => {
				const element = focusEvent.currentTarget;
				if (!element) return;
				const handleKeydown = filterEvents(() => {
					if (isPressing.has(element)) return;
					firePointerEvent(element, "down");
					const handleKeyup = filterEvents(() => {
						firePointerEvent(element, "up");
					});
					const handleBlur = () => firePointerEvent(element, "cancel");
					element.addEventListener("keyup", handleKeyup, eventOptions);
					element.addEventListener("blur", handleBlur, eventOptions);
				});
				element.addEventListener("keydown", handleKeydown, eventOptions);
				/**
				 * Add an event listener that fires on blur to remove the keydown events.
				 */
				element.addEventListener(
					"blur",
					() => element.removeEventListener("keydown", handleKeydown),
					eventOptions,
				);
			}; // CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/gestures/press/index.mjs

			/**
			 * Filter out events that are not primary pointer events, or are triggering
			 * while a Motion gesture is active.
			 */
			function isValidPressEvent(event) {
				return isPrimaryPointer(event) && !isDragActive();
			}
			/**
			 * Create a press gesture.
			 *
			 * Press is different to `"pointerdown"`, `"pointerup"` in that it
			 * automatically filters out secondary pointer events like right
			 * click and multitouch.
			 *
			 * It also adds accessibility support for keyboards, where
			 * an element with a press gesture will receive focus and
			 *  trigger on Enter `"keydown"` and `"keyup"` events.
			 *
			 * This is different to a browser's `"click"` event, which does
			 * respond to keyboards but only for the `"click"` itself, rather
			 * than the press start and end/cancel. The element also needs
			 * to be focusable for this to work, whereas a press gesture will
			 * make an element focusable by default.
			 *
			 * @public
			 */
			function press(targetOrSelector, onPressStart, options = {}) {
				const [targets, eventOptions, cancelEvents] = setupGesture(
					targetOrSelector,
					options,
				);
				const startPress = (startEvent) => {
					const target = startEvent.currentTarget;
					if (!isValidPressEvent(startEvent)) return;
					isPressing.add(target);
					const onPressEnd = onPressStart(target, startEvent);
					const onPointerEnd = (endEvent, success) => {
						window.removeEventListener("pointerup", onPointerUp);
						window.removeEventListener("pointercancel", onPointerCancel);
						if (isPressing.has(target)) {
							isPressing["delete"](target);
						}
						if (!isValidPressEvent(endEvent)) {
							return;
						}
						if (typeof onPressEnd === "function") {
							onPressEnd(endEvent, { success });
						}
					};
					const onPointerUp = (upEvent) => {
						onPointerEnd(
							upEvent,
							target === window ||
								target === document ||
								options.useGlobalTarget ||
								isNodeOrChild(target, upEvent.target),
						);
					};
					const onPointerCancel = (cancelEvent) => {
						onPointerEnd(cancelEvent, false);
					};
					window.addEventListener("pointerup", onPointerUp, eventOptions);
					window.addEventListener(
						"pointercancel",
						onPointerCancel,
						eventOptions,
					);
				};
				targets.forEach((target) => {
					const pointerDownTarget = options.useGlobalTarget ? window : target;
					pointerDownTarget.addEventListener(
						"pointerdown",
						startPress,
						eventOptions,
					);
					if (isHTMLElement(target)) {
						target.addEventListener("focus", (event) =>
							enableKeyboardPress(event, eventOptions),
						);
						if (
							!isElementKeyboardAccessible(target) &&
							!target.hasAttribute("tabindex")
						) {
							target.tabIndex = 0;
						}
					}
				});
				return cancelEvents;
			} // CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/gestures/press.mjs

			function handlePressEvent(node, event, lifecycle) {
				const { props } = node;
				if (
					node.current instanceof HTMLButtonElement &&
					node.current.disabled
				) {
					return;
				}
				if (node.animationState && props.whileTap) {
					node.animationState.setActive("whileTap", lifecycle === "Start");
				}
				const eventName = "onTap" + (lifecycle === "End" ? "" : lifecycle);
				const callback = props[eventName];
				if (callback) {
					frame_frame.postRender(() =>
						callback(event, extractEventInfo(event)),
					);
				}
			}
			class PressGesture extends Feature {
				mount() {
					const { current } = this.node;
					if (!current) return;
					this.unmount = press(
						current,
						(_element, startEvent) => {
							handlePressEvent(this.node, startEvent, "Start");
							return (endEvent, { success }) =>
								handlePressEvent(
									this.node,
									endEvent,
									success ? "End" : "Cancel",
								);
						},
						{ useGlobalTarget: this.node.props.globalTapTarget },
					);
				}
				unmount() {}
			} // CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/motion/features/viewport/observers.mjs
			/**
			 * Map an IntersectionHandler callback to an element. We only ever make one handler for one
			 * element, so even though these handlers might all be triggered by different
			 * observers, we can keep them in the same map.
			 */
			const observerCallbacks = new WeakMap();
			/**
			 * Multiple observers can be created for multiple element/document roots. Each with
			 * different settings. So here we store dictionaries of observers to each root,
			 * using serialised settings (threshold/margin) as lookup keys.
			 */
			const observers = new WeakMap();
			const fireObserverCallback = (entry) => {
				const callback = observerCallbacks.get(entry.target);
				callback && callback(entry);
			};
			const fireAllObserverCallbacks = (entries) => {
				entries.forEach(fireObserverCallback);
			};
			function initIntersectionObserver({ root, ...options }) {
				const lookupRoot = root || document;
				/**
				 * If we don't have an observer lookup map for this root, create one.
				 */
				if (!observers.has(lookupRoot)) {
					observers.set(lookupRoot, {});
				}
				const rootObservers = observers.get(lookupRoot);
				const key = JSON.stringify(options);
				/**
				 * If we don't have an observer for this combination of root and settings,
				 * create one.
				 */
				if (!rootObservers[key]) {
					rootObservers[key] = new IntersectionObserver(
						fireAllObserverCallbacks,
						{ root, ...options },
					);
				}
				return rootObservers[key];
			}
			function observeIntersection(element, options, callback) {
				const rootInteresectionObserver = initIntersectionObserver(options);
				observerCallbacks.set(element, callback);
				rootInteresectionObserver.observe(element);
				return () => {
					observerCallbacks.delete(element);
					rootInteresectionObserver.unobserve(element);
				};
			} // CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/motion/features/viewport/index.mjs

			const thresholdNames = {
				some: 0,
				all: 1,
			};
			class InViewFeature extends Feature {
				constructor() {
					super(...arguments);
					this.hasEnteredView = false;
					this.isInView = false;
				}
				startObserver() {
					this.unmount();
					const { viewport = {} } = this.node.getProps();
					const { root, margin: rootMargin, amount = "some", once } = viewport;
					const options = {
						root: root ? root.current : undefined,
						rootMargin,
						threshold:
							typeof amount === "number" ? amount : thresholdNames[amount],
					};
					const onIntersectionUpdate = (entry) => {
						const { isIntersecting } = entry;
						/**
						 * If there's been no change in the viewport state, early return.
						 */
						if (this.isInView === isIntersecting) return;
						this.isInView = isIntersecting;
						/**
						 * Handle hasEnteredView. If this is only meant to run once, and
						 * element isn't visible, early return. Otherwise set hasEnteredView to true.
						 */
						if (once && !isIntersecting && this.hasEnteredView) {
							return;
						} else if (isIntersecting) {
							this.hasEnteredView = true;
						}
						if (this.node.animationState) {
							this.node.animationState.setActive("whileInView", isIntersecting);
						}
						/**
						 * Use the latest committed props rather than the ones in scope
						 * when this observer is created
						 */
						const { onViewportEnter, onViewportLeave } = this.node.getProps();
						const callback = isIntersecting ? onViewportEnter : onViewportLeave;
						callback && callback(entry);
					};
					return observeIntersection(
						this.node.current,
						options,
						onIntersectionUpdate,
					);
				}
				mount() {
					this.startObserver();
				}
				update() {
					if (typeof IntersectionObserver === "undefined") return;
					const { props, prevProps } = this.node;
					const hasOptionsChanged = ["amount", "margin", "root"].some(
						hasViewportOptionChanged(props, prevProps),
					);
					if (hasOptionsChanged) {
						this.startObserver();
					}
				}
				unmount() {}
			}
			function hasViewportOptionChanged(
				{ viewport = {} },
				{ viewport: prevViewport = {} } = {},
			) {
				return (name) => viewport[name] !== prevViewport[name];
			} // CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/motion/features/gestures.mjs

			const gestureAnimations = {
				inView: {
					Feature: InViewFeature,
				},
				tap: {
					Feature: PressGesture,
				},
				focus: {
					Feature: FocusGesture,
				},
				hover: {
					Feature: HoverGesture,
				},
			}; // CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/motion/features/layout.mjs

			const layout_layout = {
				layout: {
					ProjectionNode: HTMLProjectionNode,
					MeasureLayout: MeasureLayout_MeasureLayout,
				},
			}; // CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/components/motion/feature-bundle.mjs

			const featureBundle = {
				...animations_animations,
				...gestureAnimations,
				...drag_drag,
				...layout_layout,
			}; // CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs

			const motion = /*@__PURE__*/ createMotionProxy(
				featureBundle,
				createDomVisualElement,
			);
		},
		544: (
			__unused_webpack___webpack_module__,
			__webpack_exports__,
			__webpack_require__,
		) => {
			__webpack_require__.d(__webpack_exports__, {
				QP: () => twMerge,
			});
			const CLASS_PART_SEPARATOR = "-";
			const createClassGroupUtils = (config) => {
				const classMap = createClassMap(config);
				const { conflictingClassGroups, conflictingClassGroupModifiers } =
					config;
				const getClassGroupId = (className) => {
					const classParts = className.split(CLASS_PART_SEPARATOR);
					// Classes like `-inset-1` produce an empty string as first classPart. We assume that classes for negative values are used correctly and remove it from classParts.
					if (classParts[0] === "" && classParts.length !== 1) {
						classParts.shift();
					}
					return (
						getGroupRecursive(classParts, classMap) ||
						getGroupIdForArbitraryProperty(className)
					);
				};
				const getConflictingClassGroupIds = (
					classGroupId,
					hasPostfixModifier,
				) => {
					const conflicts = conflictingClassGroups[classGroupId] || [];
					if (
						hasPostfixModifier &&
						conflictingClassGroupModifiers[classGroupId]
					) {
						return [
							...conflicts,
							...conflictingClassGroupModifiers[classGroupId],
						];
					}
					return conflicts;
				};
				return {
					getClassGroupId,
					getConflictingClassGroupIds,
				};
			};
			const getGroupRecursive = (classParts, classPartObject) => {
				if (classParts.length === 0) {
					return classPartObject.classGroupId;
				}
				const currentClassPart = classParts[0];
				const nextClassPartObject =
					classPartObject.nextPart.get(currentClassPart);
				const classGroupFromNextClassPart = nextClassPartObject
					? getGroupRecursive(classParts.slice(1), nextClassPartObject)
					: undefined;
				if (classGroupFromNextClassPart) {
					return classGroupFromNextClassPart;
				}
				if (classPartObject.validators.length === 0) {
					return undefined;
				}
				const classRest = classParts.join(CLASS_PART_SEPARATOR);
				return classPartObject.validators.find(({ validator }) =>
					validator(classRest),
				)?.classGroupId;
			};
			const arbitraryPropertyRegex = /^\[(.+)\]$/;
			const getGroupIdForArbitraryProperty = (className) => {
				if (arbitraryPropertyRegex.test(className)) {
					const arbitraryPropertyClassName =
						arbitraryPropertyRegex.exec(className)[1];
					const property = arbitraryPropertyClassName?.substring(
						0,
						arbitraryPropertyClassName.indexOf(":"),
					);
					if (property) {
						// I use two dots here because one dot is used as prefix for class groups in plugins
						return "arbitrary.." + property;
					}
				}
			};
			/**
			 * Exported for testing only
			 */
			const createClassMap = (config) => {
				const { theme, classGroups } = config;
				const classMap = {
					nextPart: new Map(),
					validators: [],
				};
				for (const classGroupId in classGroups) {
					processClassesRecursively(
						classGroups[classGroupId],
						classMap,
						classGroupId,
						theme,
					);
				}
				return classMap;
			};
			const processClassesRecursively = (
				classGroup,
				classPartObject,
				classGroupId,
				theme,
			) => {
				classGroup.forEach((classDefinition) => {
					if (typeof classDefinition === "string") {
						const classPartObjectToEdit =
							classDefinition === ""
								? classPartObject
								: getPart(classPartObject, classDefinition);
						classPartObjectToEdit.classGroupId = classGroupId;
						return;
					}
					if (typeof classDefinition === "function") {
						if (isThemeGetter(classDefinition)) {
							processClassesRecursively(
								classDefinition(theme),
								classPartObject,
								classGroupId,
								theme,
							);
							return;
						}
						classPartObject.validators.push({
							validator: classDefinition,
							classGroupId,
						});
						return;
					}
					Object.entries(classDefinition).forEach(([key, classGroup]) => {
						processClassesRecursively(
							classGroup,
							getPart(classPartObject, key),
							classGroupId,
							theme,
						);
					});
				});
			};
			const getPart = (classPartObject, path) => {
				let currentClassPartObject = classPartObject;
				path.split(CLASS_PART_SEPARATOR).forEach((pathPart) => {
					if (!currentClassPartObject.nextPart.has(pathPart)) {
						currentClassPartObject.nextPart.set(pathPart, {
							nextPart: new Map(),
							validators: [],
						});
					}
					currentClassPartObject =
						currentClassPartObject.nextPart.get(pathPart);
				});
				return currentClassPartObject;
			};
			const isThemeGetter = (func) => func.isThemeGetter;

			// LRU cache inspired from hashlru (https://github.com/dominictarr/hashlru/blob/v1.0.4/index.js) but object replaced with Map to improve performance
			const createLruCache = (maxCacheSize) => {
				if (maxCacheSize < 1) {
					return {
						get: () => undefined,
						set: () => {},
					};
				}
				let cacheSize = 0;
				let cache = new Map();
				let previousCache = new Map();
				const update = (key, value) => {
					cache.set(key, value);
					cacheSize++;
					if (cacheSize > maxCacheSize) {
						cacheSize = 0;
						previousCache = cache;
						cache = new Map();
					}
				};
				return {
					get(key) {
						let value = cache.get(key);
						if (value !== undefined) {
							return value;
						}
						if ((value = previousCache.get(key)) !== undefined) {
							update(key, value);
							return value;
						}
					},
					set(key, value) {
						if (cache.has(key)) {
							cache.set(key, value);
						} else {
							update(key, value);
						}
					},
				};
			};
			const IMPORTANT_MODIFIER = "!";
			const MODIFIER_SEPARATOR = ":";
			const MODIFIER_SEPARATOR_LENGTH = MODIFIER_SEPARATOR.length;
			const createParseClassName = (config) => {
				const { prefix, experimentalParseClassName } = config;
				/**
				 * Parse class name into parts.
				 *
				 * Inspired by `splitAtTopLevelOnly` used in Tailwind CSS
				 * @see https://github.com/tailwindlabs/tailwindcss/blob/v3.2.2/src/util/splitAtTopLevelOnly.js
				 */
				let parseClassName = (className) => {
					const modifiers = [];
					let bracketDepth = 0;
					let parenDepth = 0;
					let modifierStart = 0;
					let postfixModifierPosition;
					for (let index = 0; index < className.length; index++) {
						const currentCharacter = className[index];
						if (bracketDepth === 0 && parenDepth === 0) {
							if (currentCharacter === MODIFIER_SEPARATOR) {
								modifiers.push(className.slice(modifierStart, index));
								modifierStart = index + MODIFIER_SEPARATOR_LENGTH;
								continue;
							}
							if (currentCharacter === "/") {
								postfixModifierPosition = index;
								continue;
							}
						}
						if (currentCharacter === "[") {
							bracketDepth++;
						} else if (currentCharacter === "]") {
							bracketDepth--;
						} else if (currentCharacter === "(") {
							parenDepth++;
						} else if (currentCharacter === ")") {
							parenDepth--;
						}
					}
					const baseClassNameWithImportantModifier =
						modifiers.length === 0
							? className
							: className.substring(modifierStart);
					const baseClassName = stripImportantModifier(
						baseClassNameWithImportantModifier,
					);
					const hasImportantModifier =
						baseClassName !== baseClassNameWithImportantModifier;
					const maybePostfixModifierPosition =
						postfixModifierPosition && postfixModifierPosition > modifierStart
							? postfixModifierPosition - modifierStart
							: undefined;
					return {
						modifiers,
						hasImportantModifier,
						baseClassName,
						maybePostfixModifierPosition,
					};
				};
				if (prefix) {
					const fullPrefix = prefix + MODIFIER_SEPARATOR;
					const parseClassNameOriginal = parseClassName;
					parseClassName = (className) =>
						className.startsWith(fullPrefix)
							? parseClassNameOriginal(className.substring(fullPrefix.length))
							: {
									isExternal: true,
									modifiers: [],
									hasImportantModifier: false,
									baseClassName: className,
									maybePostfixModifierPosition: undefined,
								};
				}
				if (experimentalParseClassName) {
					const parseClassNameOriginal = parseClassName;
					parseClassName = (className) =>
						experimentalParseClassName({
							className,
							parseClassName: parseClassNameOriginal,
						});
				}
				return parseClassName;
			};
			const stripImportantModifier = (baseClassName) => {
				if (baseClassName.endsWith(IMPORTANT_MODIFIER)) {
					return baseClassName.substring(0, baseClassName.length - 1);
				}
				/**
				 * In Tailwind CSS v3 the important modifier was at the start of the base class name. This is still supported for legacy reasons.
				 * @see https://github.com/dcastil/tailwind-merge/issues/513#issuecomment-2614029864
				 */
				if (baseClassName.startsWith(IMPORTANT_MODIFIER)) {
					return baseClassName.substring(1);
				}
				return baseClassName;
			};

			/**
			 * Sorts modifiers according to following schema:
			 * - Predefined modifiers are sorted alphabetically
			 * - When an arbitrary variant appears, it must be preserved which modifiers are before and after it
			 */
			const createSortModifiers = (config) => {
				const orderSensitiveModifiers = Object.fromEntries(
					config.orderSensitiveModifiers.map((modifier) => [modifier, true]),
				);
				const sortModifiers = (modifiers) => {
					if (modifiers.length <= 1) {
						return modifiers;
					}
					const sortedModifiers = [];
					let unsortedModifiers = [];
					modifiers.forEach((modifier) => {
						const isPositionSensitive =
							modifier[0] === "[" || orderSensitiveModifiers[modifier];
						if (isPositionSensitive) {
							sortedModifiers.push(...unsortedModifiers.sort(), modifier);
							unsortedModifiers = [];
						} else {
							unsortedModifiers.push(modifier);
						}
					});
					sortedModifiers.push(...unsortedModifiers.sort());
					return sortedModifiers;
				};
				return sortModifiers;
			};
			const createConfigUtils = (config) => ({
				cache: createLruCache(config.cacheSize),
				parseClassName: createParseClassName(config),
				sortModifiers: createSortModifiers(config),
				...createClassGroupUtils(config),
			});
			const SPLIT_CLASSES_REGEX = /\s+/;
			const mergeClassList = (classList, configUtils) => {
				const {
					parseClassName,
					getClassGroupId,
					getConflictingClassGroupIds,
					sortModifiers,
				} = configUtils;
				/**
				 * Set of classGroupIds in following format:
				 * `{importantModifier}{variantModifiers}{classGroupId}`
				 * @example 'float'
				 * @example 'hover:focus:bg-color'
				 * @example 'md:!pr'
				 */
				const classGroupsInConflict = [];
				const classNames = classList.trim().split(SPLIT_CLASSES_REGEX);
				let result = "";
				for (let index = classNames.length - 1; index >= 0; index -= 1) {
					const originalClassName = classNames[index];
					const {
						isExternal,
						modifiers,
						hasImportantModifier,
						baseClassName,
						maybePostfixModifierPosition,
					} = parseClassName(originalClassName);
					if (isExternal) {
						result =
							originalClassName + (result.length > 0 ? " " + result : result);
						continue;
					}
					let hasPostfixModifier = !!maybePostfixModifierPosition;
					let classGroupId = getClassGroupId(
						hasPostfixModifier
							? baseClassName.substring(0, maybePostfixModifierPosition)
							: baseClassName,
					);
					if (!classGroupId) {
						if (!hasPostfixModifier) {
							// Not a Tailwind class
							result =
								originalClassName + (result.length > 0 ? " " + result : result);
							continue;
						}
						classGroupId = getClassGroupId(baseClassName);
						if (!classGroupId) {
							// Not a Tailwind class
							result =
								originalClassName + (result.length > 0 ? " " + result : result);
							continue;
						}
						hasPostfixModifier = false;
					}
					const variantModifier = sortModifiers(modifiers).join(":");
					const modifierId = hasImportantModifier
						? variantModifier + IMPORTANT_MODIFIER
						: variantModifier;
					const classId = modifierId + classGroupId;
					if (classGroupsInConflict.includes(classId)) {
						// Tailwind class omitted due to conflict
						continue;
					}
					classGroupsInConflict.push(classId);
					const conflictGroups = getConflictingClassGroupIds(
						classGroupId,
						hasPostfixModifier,
					);
					for (let i = 0; i < conflictGroups.length; ++i) {
						const group = conflictGroups[i];
						classGroupsInConflict.push(modifierId + group);
					}
					// Tailwind class not in conflict
					result =
						originalClassName + (result.length > 0 ? " " + result : result);
				}
				return result;
			};

			/**
			 * The code in this file is copied from https://github.com/lukeed/clsx and modified to suit the needs of tailwind-merge better.
			 *
			 * Specifically:
			 * - Runtime code from https://github.com/lukeed/clsx/blob/v1.2.1/src/index.js
			 * - TypeScript types from https://github.com/lukeed/clsx/blob/v1.2.1/clsx.d.ts
			 *
			 * Original code has MIT license: Copyright (c) Luke Edwards <luke.edwards05@gmail.com> (lukeed.com)
			 */
			function twJoin() {
				let index = 0;
				let argument;
				let resolvedValue;
				let string = "";
				while (index < arguments.length) {
					if ((argument = arguments[index++])) {
						if ((resolvedValue = toValue(argument))) {
							string && (string += " ");
							string += resolvedValue;
						}
					}
				}
				return string;
			}
			const toValue = (mix) => {
				if (typeof mix === "string") {
					return mix;
				}
				let resolvedValue;
				let string = "";
				for (let k = 0; k < mix.length; k++) {
					if (mix[k]) {
						if ((resolvedValue = toValue(mix[k]))) {
							string && (string += " ");
							string += resolvedValue;
						}
					}
				}
				return string;
			};
			function createTailwindMerge(createConfigFirst, ...createConfigRest) {
				let configUtils;
				let cacheGet;
				let cacheSet;
				let functionToCall = initTailwindMerge;
				function initTailwindMerge(classList) {
					const config = createConfigRest.reduce(
						(previousConfig, createConfigCurrent) =>
							createConfigCurrent(previousConfig),
						createConfigFirst(),
					);
					configUtils = createConfigUtils(config);
					cacheGet = configUtils.cache.get;
					cacheSet = configUtils.cache.set;
					functionToCall = tailwindMerge;
					return tailwindMerge(classList);
				}
				function tailwindMerge(classList) {
					const cachedResult = cacheGet(classList);
					if (cachedResult) {
						return cachedResult;
					}
					const result = mergeClassList(classList, configUtils);
					cacheSet(classList, result);
					return result;
				}
				return function callTailwindMerge() {
					return functionToCall(twJoin.apply(null, arguments));
				};
			}
			const fromTheme = (key) => {
				const themeGetter = (theme) => theme[key] || [];
				themeGetter.isThemeGetter = true;
				return themeGetter;
			};
			const arbitraryValueRegex = /^\[(?:(\w[\w-]*):)?(.+)\]$/i;
			const arbitraryVariableRegex = /^\((?:(\w[\w-]*):)?(.+)\)$/i;
			const fractionRegex = /^\d+\/\d+$/;
			const tshirtUnitRegex = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/;
			const lengthUnitRegex =
				/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/;
			const colorFunctionRegex =
				/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/;
			// Shadow always begins with x and y offset separated by underscore optionally prepended by inset
			const shadowRegex =
				/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
			const imageRegex =
				/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
			const isFraction = (value) => fractionRegex.test(value);
			const isNumber = (value) => !!value && !Number.isNaN(Number(value));
			const isInteger = (value) => !!value && Number.isInteger(Number(value));
			const isPercent = (value) =>
				value.endsWith("%") && isNumber(value.slice(0, -1));
			const isTshirtSize = (value) => tshirtUnitRegex.test(value);
			const isAny = () => true;
			const isLengthOnly = (value) =>
				// `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
				// For example, `hsl(0 0% 0%)` would be classified as a length without this check.
				// I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
				lengthUnitRegex.test(value) && !colorFunctionRegex.test(value);
			const isNever = () => false;
			const isShadow = (value) => shadowRegex.test(value);
			const isImage = (value) => imageRegex.test(value);
			const isAnyNonArbitrary = (value) =>
				!isArbitraryValue(value) && !isArbitraryVariable(value);
			const isArbitrarySize = (value) =>
				getIsArbitraryValue(value, isLabelSize, isNever);
			const isArbitraryValue = (value) => arbitraryValueRegex.test(value);
			const isArbitraryLength = (value) =>
				getIsArbitraryValue(value, isLabelLength, isLengthOnly);
			const isArbitraryNumber = (value) =>
				getIsArbitraryValue(value, isLabelNumber, isNumber);
			const isArbitraryPosition = (value) =>
				getIsArbitraryValue(value, isLabelPosition, isNever);
			const isArbitraryImage = (value) =>
				getIsArbitraryValue(value, isLabelImage, isImage);
			const isArbitraryShadow = (value) =>
				getIsArbitraryValue(value, isLabelShadow, isShadow);
			const isArbitraryVariable = (value) => arbitraryVariableRegex.test(value);
			const isArbitraryVariableLength = (value) =>
				getIsArbitraryVariable(value, isLabelLength);
			const isArbitraryVariableFamilyName = (value) =>
				getIsArbitraryVariable(value, isLabelFamilyName);
			const isArbitraryVariablePosition = (value) =>
				getIsArbitraryVariable(value, isLabelPosition);
			const isArbitraryVariableSize = (value) =>
				getIsArbitraryVariable(value, isLabelSize);
			const isArbitraryVariableImage = (value) =>
				getIsArbitraryVariable(value, isLabelImage);
			const isArbitraryVariableShadow = (value) =>
				getIsArbitraryVariable(value, isLabelShadow, true);
			// Helpers
			const getIsArbitraryValue = (value, testLabel, testValue) => {
				const result = arbitraryValueRegex.exec(value);
				if (result) {
					if (result[1]) {
						return testLabel(result[1]);
					}
					return testValue(result[2]);
				}
				return false;
			};
			const getIsArbitraryVariable = (
				value,
				testLabel,
				shouldMatchNoLabel = false,
			) => {
				const result = arbitraryVariableRegex.exec(value);
				if (result) {
					if (result[1]) {
						return testLabel(result[1]);
					}
					return shouldMatchNoLabel;
				}
				return false;
			};
			// Labels
			const isLabelPosition = (label) =>
				label === "position" || label === "percentage";
			const isLabelImage = (label) => label === "image" || label === "url";
			const isLabelSize = (label) =>
				label === "length" || label === "size" || label === "bg-size";
			const isLabelLength = (label) => label === "length";
			const isLabelNumber = (label) => label === "number";
			const isLabelFamilyName = (label) => label === "family-name";
			const isLabelShadow = (label) => label === "shadow";
			const validators = /*#__PURE__*/ Object.defineProperty(
				{
					__proto__: null,
					isAny,
					isAnyNonArbitrary,
					isArbitraryImage,
					isArbitraryLength,
					isArbitraryNumber,
					isArbitraryPosition,
					isArbitraryShadow,
					isArbitrarySize,
					isArbitraryValue,
					isArbitraryVariable,
					isArbitraryVariableFamilyName,
					isArbitraryVariableImage,
					isArbitraryVariableLength,
					isArbitraryVariablePosition,
					isArbitraryVariableShadow,
					isArbitraryVariableSize,
					isFraction,
					isInteger,
					isNumber,
					isPercent,
					isTshirtSize,
				},
				Symbol.toStringTag,
				{
					value: "Module",
				},
			);
			const getDefaultConfig = () => {
				/**
				 * Theme getters for theme variable namespaces
				 * @see https://tailwindcss.com/docs/theme#theme-variable-namespaces
				 */
				/***/
				const themeColor = fromTheme("color");
				const themeFont = fromTheme("font");
				const themeText = fromTheme("text");
				const themeFontWeight = fromTheme("font-weight");
				const themeTracking = fromTheme("tracking");
				const themeLeading = fromTheme("leading");
				const themeBreakpoint = fromTheme("breakpoint");
				const themeContainer = fromTheme("container");
				const themeSpacing = fromTheme("spacing");
				const themeRadius = fromTheme("radius");
				const themeShadow = fromTheme("shadow");
				const themeInsetShadow = fromTheme("inset-shadow");
				const themeTextShadow = fromTheme("text-shadow");
				const themeDropShadow = fromTheme("drop-shadow");
				const themeBlur = fromTheme("blur");
				const themePerspective = fromTheme("perspective");
				const themeAspect = fromTheme("aspect");
				const themeEase = fromTheme("ease");
				const themeAnimate = fromTheme("animate");
				/**
				 * Helpers to avoid repeating the same scales
				 *
				 * We use functions that create a new array every time they're called instead of static arrays.
				 * This ensures that users who modify any scale by mutating the array (e.g. with `array.push(element)`) don't accidentally mutate arrays in other parts of the config.
				 */
				/***/
				const scaleBreak = () => [
					"auto",
					"avoid",
					"all",
					"avoid-page",
					"page",
					"left",
					"right",
					"column",
				];
				const scalePosition = () => [
					"center",
					"top",
					"bottom",
					"left",
					"right",
					"top-left",
					// Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
					"left-top",
					"top-right",
					// Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
					"right-top",
					"bottom-right",
					// Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
					"right-bottom",
					"bottom-left",
					// Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
					"left-bottom",
				];
				const scalePositionWithArbitrary = () => [
					...scalePosition(),
					isArbitraryVariable,
					isArbitraryValue,
				];
				const scaleOverflow = () => [
					"auto",
					"hidden",
					"clip",
					"visible",
					"scroll",
				];
				const scaleOverscroll = () => ["auto", "contain", "none"];
				const scaleUnambiguousSpacing = () => [
					isArbitraryVariable,
					isArbitraryValue,
					themeSpacing,
				];
				const scaleInset = () => [
					isFraction,
					"full",
					"auto",
					...scaleUnambiguousSpacing(),
				];
				const scaleGridTemplateColsRows = () => [
					isInteger,
					"none",
					"subgrid",
					isArbitraryVariable,
					isArbitraryValue,
				];
				const scaleGridColRowStartAndEnd = () => [
					"auto",
					{
						span: ["full", isInteger, isArbitraryVariable, isArbitraryValue],
					},
					isInteger,
					isArbitraryVariable,
					isArbitraryValue,
				];
				const scaleGridColRowStartOrEnd = () => [
					isInteger,
					"auto",
					isArbitraryVariable,
					isArbitraryValue,
				];
				const scaleGridAutoColsRows = () => [
					"auto",
					"min",
					"max",
					"fr",
					isArbitraryVariable,
					isArbitraryValue,
				];
				const scaleAlignPrimaryAxis = () => [
					"start",
					"end",
					"center",
					"between",
					"around",
					"evenly",
					"stretch",
					"baseline",
					"center-safe",
					"end-safe",
				];
				const scaleAlignSecondaryAxis = () => [
					"start",
					"end",
					"center",
					"stretch",
					"center-safe",
					"end-safe",
				];
				const scaleMargin = () => ["auto", ...scaleUnambiguousSpacing()];
				const scaleSizing = () => [
					isFraction,
					"auto",
					"full",
					"dvw",
					"dvh",
					"lvw",
					"lvh",
					"svw",
					"svh",
					"min",
					"max",
					"fit",
					...scaleUnambiguousSpacing(),
				];
				const scaleColor = () => [
					themeColor,
					isArbitraryVariable,
					isArbitraryValue,
				];
				const scaleBgPosition = () => [
					...scalePosition(),
					isArbitraryVariablePosition,
					isArbitraryPosition,
					{
						position: [isArbitraryVariable, isArbitraryValue],
					},
				];
				const scaleBgRepeat = () => [
					"no-repeat",
					{
						repeat: ["", "x", "y", "space", "round"],
					},
				];
				const scaleBgSize = () => [
					"auto",
					"cover",
					"contain",
					isArbitraryVariableSize,
					isArbitrarySize,
					{
						size: [isArbitraryVariable, isArbitraryValue],
					},
				];
				const scaleGradientStopPosition = () => [
					isPercent,
					isArbitraryVariableLength,
					isArbitraryLength,
				];
				const scaleRadius = () => [
					// Deprecated since Tailwind CSS v4.0.0
					"",
					"none",
					"full",
					themeRadius,
					isArbitraryVariable,
					isArbitraryValue,
				];
				const scaleBorderWidth = () => [
					"",
					isNumber,
					isArbitraryVariableLength,
					isArbitraryLength,
				];
				const scaleLineStyle = () => ["solid", "dashed", "dotted", "double"];
				const scaleBlendMode = () => [
					"normal",
					"multiply",
					"screen",
					"overlay",
					"darken",
					"lighten",
					"color-dodge",
					"color-burn",
					"hard-light",
					"soft-light",
					"difference",
					"exclusion",
					"hue",
					"saturation",
					"color",
					"luminosity",
				];
				const scaleMaskImagePosition = () => [
					isNumber,
					isPercent,
					isArbitraryVariablePosition,
					isArbitraryPosition,
				];
				const scaleBlur = () => [
					// Deprecated since Tailwind CSS v4.0.0
					"",
					"none",
					themeBlur,
					isArbitraryVariable,
					isArbitraryValue,
				];
				const scaleRotate = () => [
					"none",
					isNumber,
					isArbitraryVariable,
					isArbitraryValue,
				];
				const scaleScale = () => [
					"none",
					isNumber,
					isArbitraryVariable,
					isArbitraryValue,
				];
				const scaleSkew = () => [
					isNumber,
					isArbitraryVariable,
					isArbitraryValue,
				];
				const scaleTranslate = () => [
					isFraction,
					"full",
					...scaleUnambiguousSpacing(),
				];
				return {
					cacheSize: 500,
					theme: {
						animate: ["spin", "ping", "pulse", "bounce"],
						aspect: ["video"],
						blur: [isTshirtSize],
						breakpoint: [isTshirtSize],
						color: [isAny],
						container: [isTshirtSize],
						"drop-shadow": [isTshirtSize],
						ease: ["in", "out", "in-out"],
						font: [isAnyNonArbitrary],
						"font-weight": [
							"thin",
							"extralight",
							"light",
							"normal",
							"medium",
							"semibold",
							"bold",
							"extrabold",
							"black",
						],
						"inset-shadow": [isTshirtSize],
						leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
						perspective: [
							"dramatic",
							"near",
							"normal",
							"midrange",
							"distant",
							"none",
						],
						radius: [isTshirtSize],
						shadow: [isTshirtSize],
						spacing: ["px", isNumber],
						text: [isTshirtSize],
						"text-shadow": [isTshirtSize],
						tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"],
					},
					classGroups: {
						// --------------
						// --- Layout ---
						// --------------
						/**
						 * Aspect Ratio
						 * @see https://tailwindcss.com/docs/aspect-ratio
						 */
						aspect: [
							{
								aspect: [
									"auto",
									"square",
									isFraction,
									isArbitraryValue,
									isArbitraryVariable,
									themeAspect,
								],
							},
						],
						/**
						 * Container
						 * @see https://tailwindcss.com/docs/container
						 * @deprecated since Tailwind CSS v4.0.0
						 */
						container: ["container"],
						/**
						 * Columns
						 * @see https://tailwindcss.com/docs/columns
						 */
						columns: [
							{
								columns: [
									isNumber,
									isArbitraryValue,
									isArbitraryVariable,
									themeContainer,
								],
							},
						],
						/**
						 * Break After
						 * @see https://tailwindcss.com/docs/break-after
						 */
						"break-after": [
							{
								"break-after": scaleBreak(),
							},
						],
						/**
						 * Break Before
						 * @see https://tailwindcss.com/docs/break-before
						 */
						"break-before": [
							{
								"break-before": scaleBreak(),
							},
						],
						/**
						 * Break Inside
						 * @see https://tailwindcss.com/docs/break-inside
						 */
						"break-inside": [
							{
								"break-inside": ["auto", "avoid", "avoid-page", "avoid-column"],
							},
						],
						/**
						 * Box Decoration Break
						 * @see https://tailwindcss.com/docs/box-decoration-break
						 */
						"box-decoration": [
							{
								"box-decoration": ["slice", "clone"],
							},
						],
						/**
						 * Box Sizing
						 * @see https://tailwindcss.com/docs/box-sizing
						 */
						box: [
							{
								box: ["border", "content"],
							},
						],
						/**
						 * Display
						 * @see https://tailwindcss.com/docs/display
						 */
						display: [
							"block",
							"inline-block",
							"inline",
							"flex",
							"inline-flex",
							"table",
							"inline-table",
							"table-caption",
							"table-cell",
							"table-column",
							"table-column-group",
							"table-footer-group",
							"table-header-group",
							"table-row-group",
							"table-row",
							"flow-root",
							"grid",
							"inline-grid",
							"contents",
							"list-item",
							"hidden",
						],
						/**
						 * Screen Reader Only
						 * @see https://tailwindcss.com/docs/display#screen-reader-only
						 */
						sr: ["sr-only", "not-sr-only"],
						/**
						 * Floats
						 * @see https://tailwindcss.com/docs/float
						 */
						float: [
							{
								float: ["right", "left", "none", "start", "end"],
							},
						],
						/**
						 * Clear
						 * @see https://tailwindcss.com/docs/clear
						 */
						clear: [
							{
								clear: ["left", "right", "both", "none", "start", "end"],
							},
						],
						/**
						 * Isolation
						 * @see https://tailwindcss.com/docs/isolation
						 */
						isolation: ["isolate", "isolation-auto"],
						/**
						 * Object Fit
						 * @see https://tailwindcss.com/docs/object-fit
						 */
						"object-fit": [
							{
								object: ["contain", "cover", "fill", "none", "scale-down"],
							},
						],
						/**
						 * Object Position
						 * @see https://tailwindcss.com/docs/object-position
						 */
						"object-position": [
							{
								object: scalePositionWithArbitrary(),
							},
						],
						/**
						 * Overflow
						 * @see https://tailwindcss.com/docs/overflow
						 */
						overflow: [
							{
								overflow: scaleOverflow(),
							},
						],
						/**
						 * Overflow X
						 * @see https://tailwindcss.com/docs/overflow
						 */
						"overflow-x": [
							{
								"overflow-x": scaleOverflow(),
							},
						],
						/**
						 * Overflow Y
						 * @see https://tailwindcss.com/docs/overflow
						 */
						"overflow-y": [
							{
								"overflow-y": scaleOverflow(),
							},
						],
						/**
						 * Overscroll Behavior
						 * @see https://tailwindcss.com/docs/overscroll-behavior
						 */
						overscroll: [
							{
								overscroll: scaleOverscroll(),
							},
						],
						/**
						 * Overscroll Behavior X
						 * @see https://tailwindcss.com/docs/overscroll-behavior
						 */
						"overscroll-x": [
							{
								"overscroll-x": scaleOverscroll(),
							},
						],
						/**
						 * Overscroll Behavior Y
						 * @see https://tailwindcss.com/docs/overscroll-behavior
						 */
						"overscroll-y": [
							{
								"overscroll-y": scaleOverscroll(),
							},
						],
						/**
						 * Position
						 * @see https://tailwindcss.com/docs/position
						 */
						position: ["static", "fixed", "absolute", "relative", "sticky"],
						/**
						 * Top / Right / Bottom / Left
						 * @see https://tailwindcss.com/docs/top-right-bottom-left
						 */
						inset: [
							{
								inset: scaleInset(),
							},
						],
						/**
						 * Right / Left
						 * @see https://tailwindcss.com/docs/top-right-bottom-left
						 */
						"inset-x": [
							{
								"inset-x": scaleInset(),
							},
						],
						/**
						 * Top / Bottom
						 * @see https://tailwindcss.com/docs/top-right-bottom-left
						 */
						"inset-y": [
							{
								"inset-y": scaleInset(),
							},
						],
						/**
						 * Start
						 * @see https://tailwindcss.com/docs/top-right-bottom-left
						 */
						start: [
							{
								start: scaleInset(),
							},
						],
						/**
						 * End
						 * @see https://tailwindcss.com/docs/top-right-bottom-left
						 */
						end: [
							{
								end: scaleInset(),
							},
						],
						/**
						 * Top
						 * @see https://tailwindcss.com/docs/top-right-bottom-left
						 */
						top: [
							{
								top: scaleInset(),
							},
						],
						/**
						 * Right
						 * @see https://tailwindcss.com/docs/top-right-bottom-left
						 */
						right: [
							{
								right: scaleInset(),
							},
						],
						/**
						 * Bottom
						 * @see https://tailwindcss.com/docs/top-right-bottom-left
						 */
						bottom: [
							{
								bottom: scaleInset(),
							},
						],
						/**
						 * Left
						 * @see https://tailwindcss.com/docs/top-right-bottom-left
						 */
						left: [
							{
								left: scaleInset(),
							},
						],
						/**
						 * Visibility
						 * @see https://tailwindcss.com/docs/visibility
						 */
						visibility: ["visible", "invisible", "collapse"],
						/**
						 * Z-Index
						 * @see https://tailwindcss.com/docs/z-index
						 */
						z: [
							{
								z: [isInteger, "auto", isArbitraryVariable, isArbitraryValue],
							},
						],
						// ------------------------
						// --- Flexbox and Grid ---
						// ------------------------
						/**
						 * Flex Basis
						 * @see https://tailwindcss.com/docs/flex-basis
						 */
						basis: [
							{
								basis: [
									isFraction,
									"full",
									"auto",
									themeContainer,
									...scaleUnambiguousSpacing(),
								],
							},
						],
						/**
						 * Flex Direction
						 * @see https://tailwindcss.com/docs/flex-direction
						 */
						"flex-direction": [
							{
								flex: ["row", "row-reverse", "col", "col-reverse"],
							},
						],
						/**
						 * Flex Wrap
						 * @see https://tailwindcss.com/docs/flex-wrap
						 */
						"flex-wrap": [
							{
								flex: ["nowrap", "wrap", "wrap-reverse"],
							},
						],
						/**
						 * Flex
						 * @see https://tailwindcss.com/docs/flex
						 */
						flex: [
							{
								flex: [
									isNumber,
									isFraction,
									"auto",
									"initial",
									"none",
									isArbitraryValue,
								],
							},
						],
						/**
						 * Flex Grow
						 * @see https://tailwindcss.com/docs/flex-grow
						 */
						grow: [
							{
								grow: ["", isNumber, isArbitraryVariable, isArbitraryValue],
							},
						],
						/**
						 * Flex Shrink
						 * @see https://tailwindcss.com/docs/flex-shrink
						 */
						shrink: [
							{
								shrink: ["", isNumber, isArbitraryVariable, isArbitraryValue],
							},
						],
						/**
						 * Order
						 * @see https://tailwindcss.com/docs/order
						 */
						order: [
							{
								order: [
									isInteger,
									"first",
									"last",
									"none",
									isArbitraryVariable,
									isArbitraryValue,
								],
							},
						],
						/**
						 * Grid Template Columns
						 * @see https://tailwindcss.com/docs/grid-template-columns
						 */
						"grid-cols": [
							{
								"grid-cols": scaleGridTemplateColsRows(),
							},
						],
						/**
						 * Grid Column Start / End
						 * @see https://tailwindcss.com/docs/grid-column
						 */
						"col-start-end": [
							{
								col: scaleGridColRowStartAndEnd(),
							},
						],
						/**
						 * Grid Column Start
						 * @see https://tailwindcss.com/docs/grid-column
						 */
						"col-start": [
							{
								"col-start": scaleGridColRowStartOrEnd(),
							},
						],
						/**
						 * Grid Column End
						 * @see https://tailwindcss.com/docs/grid-column
						 */
						"col-end": [
							{
								"col-end": scaleGridColRowStartOrEnd(),
							},
						],
						/**
						 * Grid Template Rows
						 * @see https://tailwindcss.com/docs/grid-template-rows
						 */
						"grid-rows": [
							{
								"grid-rows": scaleGridTemplateColsRows(),
							},
						],
						/**
						 * Grid Row Start / End
						 * @see https://tailwindcss.com/docs/grid-row
						 */
						"row-start-end": [
							{
								row: scaleGridColRowStartAndEnd(),
							},
						],
						/**
						 * Grid Row Start
						 * @see https://tailwindcss.com/docs/grid-row
						 */
						"row-start": [
							{
								"row-start": scaleGridColRowStartOrEnd(),
							},
						],
						/**
						 * Grid Row End
						 * @see https://tailwindcss.com/docs/grid-row
						 */
						"row-end": [
							{
								"row-end": scaleGridColRowStartOrEnd(),
							},
						],
						/**
						 * Grid Auto Flow
						 * @see https://tailwindcss.com/docs/grid-auto-flow
						 */
						"grid-flow": [
							{
								"grid-flow": ["row", "col", "dense", "row-dense", "col-dense"],
							},
						],
						/**
						 * Grid Auto Columns
						 * @see https://tailwindcss.com/docs/grid-auto-columns
						 */
						"auto-cols": [
							{
								"auto-cols": scaleGridAutoColsRows(),
							},
						],
						/**
						 * Grid Auto Rows
						 * @see https://tailwindcss.com/docs/grid-auto-rows
						 */
						"auto-rows": [
							{
								"auto-rows": scaleGridAutoColsRows(),
							},
						],
						/**
						 * Gap
						 * @see https://tailwindcss.com/docs/gap
						 */
						gap: [
							{
								gap: scaleUnambiguousSpacing(),
							},
						],
						/**
						 * Gap X
						 * @see https://tailwindcss.com/docs/gap
						 */
						"gap-x": [
							{
								"gap-x": scaleUnambiguousSpacing(),
							},
						],
						/**
						 * Gap Y
						 * @see https://tailwindcss.com/docs/gap
						 */
						"gap-y": [
							{
								"gap-y": scaleUnambiguousSpacing(),
							},
						],
						/**
						 * Justify Content
						 * @see https://tailwindcss.com/docs/justify-content
						 */
						"justify-content": [
							{
								justify: [...scaleAlignPrimaryAxis(), "normal"],
							},
						],
						/**
						 * Justify Items
						 * @see https://tailwindcss.com/docs/justify-items
						 */
						"justify-items": [
							{
								"justify-items": [...scaleAlignSecondaryAxis(), "normal"],
							},
						],
						/**
						 * Justify Self
						 * @see https://tailwindcss.com/docs/justify-self
						 */
						"justify-self": [
							{
								"justify-self": ["auto", ...scaleAlignSecondaryAxis()],
							},
						],
						/**
						 * Align Content
						 * @see https://tailwindcss.com/docs/align-content
						 */
						"align-content": [
							{
								content: ["normal", ...scaleAlignPrimaryAxis()],
							},
						],
						/**
						 * Align Items
						 * @see https://tailwindcss.com/docs/align-items
						 */
						"align-items": [
							{
								items: [
									...scaleAlignSecondaryAxis(),
									{
										baseline: ["", "last"],
									},
								],
							},
						],
						/**
						 * Align Self
						 * @see https://tailwindcss.com/docs/align-self
						 */
						"align-self": [
							{
								self: [
									"auto",
									...scaleAlignSecondaryAxis(),
									{
										baseline: ["", "last"],
									},
								],
							},
						],
						/**
						 * Place Content
						 * @see https://tailwindcss.com/docs/place-content
						 */
						"place-content": [
							{
								"place-content": scaleAlignPrimaryAxis(),
							},
						],
						/**
						 * Place Items
						 * @see https://tailwindcss.com/docs/place-items
						 */
						"place-items": [
							{
								"place-items": [...scaleAlignSecondaryAxis(), "baseline"],
							},
						],
						/**
						 * Place Self
						 * @see https://tailwindcss.com/docs/place-self
						 */
						"place-self": [
							{
								"place-self": ["auto", ...scaleAlignSecondaryAxis()],
							},
						],
						// Spacing
						/**
						 * Padding
						 * @see https://tailwindcss.com/docs/padding
						 */
						p: [
							{
								p: scaleUnambiguousSpacing(),
							},
						],
						/**
						 * Padding X
						 * @see https://tailwindcss.com/docs/padding
						 */
						px: [
							{
								px: scaleUnambiguousSpacing(),
							},
						],
						/**
						 * Padding Y
						 * @see https://tailwindcss.com/docs/padding
						 */
						py: [
							{
								py: scaleUnambiguousSpacing(),
							},
						],
						/**
						 * Padding Start
						 * @see https://tailwindcss.com/docs/padding
						 */
						ps: [
							{
								ps: scaleUnambiguousSpacing(),
							},
						],
						/**
						 * Padding End
						 * @see https://tailwindcss.com/docs/padding
						 */
						pe: [
							{
								pe: scaleUnambiguousSpacing(),
							},
						],
						/**
						 * Padding Top
						 * @see https://tailwindcss.com/docs/padding
						 */
						pt: [
							{
								pt: scaleUnambiguousSpacing(),
							},
						],
						/**
						 * Padding Right
						 * @see https://tailwindcss.com/docs/padding
						 */
						pr: [
							{
								pr: scaleUnambiguousSpacing(),
							},
						],
						/**
						 * Padding Bottom
						 * @see https://tailwindcss.com/docs/padding
						 */
						pb: [
							{
								pb: scaleUnambiguousSpacing(),
							},
						],
						/**
						 * Padding Left
						 * @see https://tailwindcss.com/docs/padding
						 */
						pl: [
							{
								pl: scaleUnambiguousSpacing(),
							},
						],
						/**
						 * Margin
						 * @see https://tailwindcss.com/docs/margin
						 */
						m: [
							{
								m: scaleMargin(),
							},
						],
						/**
						 * Margin X
						 * @see https://tailwindcss.com/docs/margin
						 */
						mx: [
							{
								mx: scaleMargin(),
							},
						],
						/**
						 * Margin Y
						 * @see https://tailwindcss.com/docs/margin
						 */
						my: [
							{
								my: scaleMargin(),
							},
						],
						/**
						 * Margin Start
						 * @see https://tailwindcss.com/docs/margin
						 */
						ms: [
							{
								ms: scaleMargin(),
							},
						],
						/**
						 * Margin End
						 * @see https://tailwindcss.com/docs/margin
						 */
						me: [
							{
								me: scaleMargin(),
							},
						],
						/**
						 * Margin Top
						 * @see https://tailwindcss.com/docs/margin
						 */
						mt: [
							{
								mt: scaleMargin(),
							},
						],
						/**
						 * Margin Right
						 * @see https://tailwindcss.com/docs/margin
						 */
						mr: [
							{
								mr: scaleMargin(),
							},
						],
						/**
						 * Margin Bottom
						 * @see https://tailwindcss.com/docs/margin
						 */
						mb: [
							{
								mb: scaleMargin(),
							},
						],
						/**
						 * Margin Left
						 * @see https://tailwindcss.com/docs/margin
						 */
						ml: [
							{
								ml: scaleMargin(),
							},
						],
						/**
						 * Space Between X
						 * @see https://tailwindcss.com/docs/margin#adding-space-between-children
						 */
						"space-x": [
							{
								"space-x": scaleUnambiguousSpacing(),
							},
						],
						/**
						 * Space Between X Reverse
						 * @see https://tailwindcss.com/docs/margin#adding-space-between-children
						 */
						"space-x-reverse": ["space-x-reverse"],
						/**
						 * Space Between Y
						 * @see https://tailwindcss.com/docs/margin#adding-space-between-children
						 */
						"space-y": [
							{
								"space-y": scaleUnambiguousSpacing(),
							},
						],
						/**
						 * Space Between Y Reverse
						 * @see https://tailwindcss.com/docs/margin#adding-space-between-children
						 */
						"space-y-reverse": ["space-y-reverse"],
						// --------------
						// --- Sizing ---
						// --------------
						/**
						 * Size
						 * @see https://tailwindcss.com/docs/width#setting-both-width-and-height
						 */
						size: [
							{
								size: scaleSizing(),
							},
						],
						/**
						 * Width
						 * @see https://tailwindcss.com/docs/width
						 */
						w: [
							{
								w: [themeContainer, "screen", ...scaleSizing()],
							},
						],
						/**
						 * Min-Width
						 * @see https://tailwindcss.com/docs/min-width
						 */
						"min-w": [
							{
								"min-w": [
									themeContainer,
									"screen" /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */,
									"none",
									...scaleSizing(),
								],
							},
						],
						/**
						 * Max-Width
						 * @see https://tailwindcss.com/docs/max-width
						 */
						"max-w": [
							{
								"max-w": [
									themeContainer,
									"screen",
									"none" /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */,
									"prose" /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */,
									{
										screen: [themeBreakpoint],
									},
									...scaleSizing(),
								],
							},
						],
						/**
						 * Height
						 * @see https://tailwindcss.com/docs/height
						 */
						h: [
							{
								h: ["screen", "lh", ...scaleSizing()],
							},
						],
						/**
						 * Min-Height
						 * @see https://tailwindcss.com/docs/min-height
						 */
						"min-h": [
							{
								"min-h": ["screen", "lh", "none", ...scaleSizing()],
							},
						],
						/**
						 * Max-Height
						 * @see https://tailwindcss.com/docs/max-height
						 */
						"max-h": [
							{
								"max-h": ["screen", "lh", ...scaleSizing()],
							},
						],
						// ------------------
						// --- Typography ---
						// ------------------
						/**
						 * Font Size
						 * @see https://tailwindcss.com/docs/font-size
						 */
						"font-size": [
							{
								text: [
									"base",
									themeText,
									isArbitraryVariableLength,
									isArbitraryLength,
								],
							},
						],
						/**
						 * Font Smoothing
						 * @see https://tailwindcss.com/docs/font-smoothing
						 */
						"font-smoothing": ["antialiased", "subpixel-antialiased"],
						/**
						 * Font Style
						 * @see https://tailwindcss.com/docs/font-style
						 */
						"font-style": ["italic", "not-italic"],
						/**
						 * Font Weight
						 * @see https://tailwindcss.com/docs/font-weight
						 */
						"font-weight": [
							{
								font: [themeFontWeight, isArbitraryVariable, isArbitraryNumber],
							},
						],
						/**
						 * Font Stretch
						 * @see https://tailwindcss.com/docs/font-stretch
						 */
						"font-stretch": [
							{
								"font-stretch": [
									"ultra-condensed",
									"extra-condensed",
									"condensed",
									"semi-condensed",
									"normal",
									"semi-expanded",
									"expanded",
									"extra-expanded",
									"ultra-expanded",
									isPercent,
									isArbitraryValue,
								],
							},
						],
						/**
						 * Font Family
						 * @see https://tailwindcss.com/docs/font-family
						 */
						"font-family": [
							{
								font: [
									isArbitraryVariableFamilyName,
									isArbitraryValue,
									themeFont,
								],
							},
						],
						/**
						 * Font Variant Numeric
						 * @see https://tailwindcss.com/docs/font-variant-numeric
						 */
						"fvn-normal": ["normal-nums"],
						/**
						 * Font Variant Numeric
						 * @see https://tailwindcss.com/docs/font-variant-numeric
						 */
						"fvn-ordinal": ["ordinal"],
						/**
						 * Font Variant Numeric
						 * @see https://tailwindcss.com/docs/font-variant-numeric
						 */
						"fvn-slashed-zero": ["slashed-zero"],
						/**
						 * Font Variant Numeric
						 * @see https://tailwindcss.com/docs/font-variant-numeric
						 */
						"fvn-figure": ["lining-nums", "oldstyle-nums"],
						/**
						 * Font Variant Numeric
						 * @see https://tailwindcss.com/docs/font-variant-numeric
						 */
						"fvn-spacing": ["proportional-nums", "tabular-nums"],
						/**
						 * Font Variant Numeric
						 * @see https://tailwindcss.com/docs/font-variant-numeric
						 */
						"fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
						/**
						 * Letter Spacing
						 * @see https://tailwindcss.com/docs/letter-spacing
						 */
						tracking: [
							{
								tracking: [
									themeTracking,
									isArbitraryVariable,
									isArbitraryValue,
								],
							},
						],
						/**
						 * Line Clamp
						 * @see https://tailwindcss.com/docs/line-clamp
						 */
						"line-clamp": [
							{
								"line-clamp": [
									isNumber,
									"none",
									isArbitraryVariable,
									isArbitraryNumber,
								],
							},
						],
						/**
						 * Line Height
						 * @see https://tailwindcss.com/docs/line-height
						 */
						leading: [
							{
								leading: [
									/** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
									themeLeading,
									...scaleUnambiguousSpacing(),
								],
							},
						],
						/**
						 * List Style Image
						 * @see https://tailwindcss.com/docs/list-style-image
						 */
						"list-image": [
							{
								"list-image": ["none", isArbitraryVariable, isArbitraryValue],
							},
						],
						/**
						 * List Style Position
						 * @see https://tailwindcss.com/docs/list-style-position
						 */
						"list-style-position": [
							{
								list: ["inside", "outside"],
							},
						],
						/**
						 * List Style Type
						 * @see https://tailwindcss.com/docs/list-style-type
						 */
						"list-style-type": [
							{
								list: [
									"disc",
									"decimal",
									"none",
									isArbitraryVariable,
									isArbitraryValue,
								],
							},
						],
						/**
						 * Text Alignment
						 * @see https://tailwindcss.com/docs/text-align
						 */
						"text-alignment": [
							{
								text: ["left", "center", "right", "justify", "start", "end"],
							},
						],
						/**
						 * Placeholder Color
						 * @deprecated since Tailwind CSS v3.0.0
						 * @see https://v3.tailwindcss.com/docs/placeholder-color
						 */
						"placeholder-color": [
							{
								placeholder: scaleColor(),
							},
						],
						/**
						 * Text Color
						 * @see https://tailwindcss.com/docs/text-color
						 */
						"text-color": [
							{
								text: scaleColor(),
							},
						],
						/**
						 * Text Decoration
						 * @see https://tailwindcss.com/docs/text-decoration
						 */
						"text-decoration": [
							"underline",
							"overline",
							"line-through",
							"no-underline",
						],
						/**
						 * Text Decoration Style
						 * @see https://tailwindcss.com/docs/text-decoration-style
						 */
						"text-decoration-style": [
							{
								decoration: [...scaleLineStyle(), "wavy"],
							},
						],
						/**
						 * Text Decoration Thickness
						 * @see https://tailwindcss.com/docs/text-decoration-thickness
						 */
						"text-decoration-thickness": [
							{
								decoration: [
									isNumber,
									"from-font",
									"auto",
									isArbitraryVariable,
									isArbitraryLength,
								],
							},
						],
						/**
						 * Text Decoration Color
						 * @see https://tailwindcss.com/docs/text-decoration-color
						 */
						"text-decoration-color": [
							{
								decoration: scaleColor(),
							},
						],
						/**
						 * Text Underline Offset
						 * @see https://tailwindcss.com/docs/text-underline-offset
						 */
						"underline-offset": [
							{
								"underline-offset": [
									isNumber,
									"auto",
									isArbitraryVariable,
									isArbitraryValue,
								],
							},
						],
						/**
						 * Text Transform
						 * @see https://tailwindcss.com/docs/text-transform
						 */
						"text-transform": [
							"uppercase",
							"lowercase",
							"capitalize",
							"normal-case",
						],
						/**
						 * Text Overflow
						 * @see https://tailwindcss.com/docs/text-overflow
						 */
						"text-overflow": ["truncate", "text-ellipsis", "text-clip"],
						/**
						 * Text Wrap
						 * @see https://tailwindcss.com/docs/text-wrap
						 */
						"text-wrap": [
							{
								text: ["wrap", "nowrap", "balance", "pretty"],
							},
						],
						/**
						 * Text Indent
						 * @see https://tailwindcss.com/docs/text-indent
						 */
						indent: [
							{
								indent: scaleUnambiguousSpacing(),
							},
						],
						/**
						 * Vertical Alignment
						 * @see https://tailwindcss.com/docs/vertical-align
						 */
						"vertical-align": [
							{
								align: [
									"baseline",
									"top",
									"middle",
									"bottom",
									"text-top",
									"text-bottom",
									"sub",
									"super",
									isArbitraryVariable,
									isArbitraryValue,
								],
							},
						],
						/**
						 * Whitespace
						 * @see https://tailwindcss.com/docs/whitespace
						 */
						whitespace: [
							{
								whitespace: [
									"normal",
									"nowrap",
									"pre",
									"pre-line",
									"pre-wrap",
									"break-spaces",
								],
							},
						],
						/**
						 * Word Break
						 * @see https://tailwindcss.com/docs/word-break
						 */
						break: [
							{
								break: ["normal", "words", "all", "keep"],
							},
						],
						/**
						 * Overflow Wrap
						 * @see https://tailwindcss.com/docs/overflow-wrap
						 */
						wrap: [
							{
								wrap: ["break-word", "anywhere", "normal"],
							},
						],
						/**
						 * Hyphens
						 * @see https://tailwindcss.com/docs/hyphens
						 */
						hyphens: [
							{
								hyphens: ["none", "manual", "auto"],
							},
						],
						/**
						 * Content
						 * @see https://tailwindcss.com/docs/content
						 */
						content: [
							{
								content: ["none", isArbitraryVariable, isArbitraryValue],
							},
						],
						// -------------------
						// --- Backgrounds ---
						// -------------------
						/**
						 * Background Attachment
						 * @see https://tailwindcss.com/docs/background-attachment
						 */
						"bg-attachment": [
							{
								bg: ["fixed", "local", "scroll"],
							},
						],
						/**
						 * Background Clip
						 * @see https://tailwindcss.com/docs/background-clip
						 */
						"bg-clip": [
							{
								"bg-clip": ["border", "padding", "content", "text"],
							},
						],
						/**
						 * Background Origin
						 * @see https://tailwindcss.com/docs/background-origin
						 */
						"bg-origin": [
							{
								"bg-origin": ["border", "padding", "content"],
							},
						],
						/**
						 * Background Position
						 * @see https://tailwindcss.com/docs/background-position
						 */
						"bg-position": [
							{
								bg: scaleBgPosition(),
							},
						],
						/**
						 * Background Repeat
						 * @see https://tailwindcss.com/docs/background-repeat
						 */
						"bg-repeat": [
							{
								bg: scaleBgRepeat(),
							},
						],
						/**
						 * Background Size
						 * @see https://tailwindcss.com/docs/background-size
						 */
						"bg-size": [
							{
								bg: scaleBgSize(),
							},
						],
						/**
						 * Background Image
						 * @see https://tailwindcss.com/docs/background-image
						 */
						"bg-image": [
							{
								bg: [
									"none",
									{
										linear: [
											{
												to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"],
											},
											isInteger,
											isArbitraryVariable,
											isArbitraryValue,
										],
										radial: ["", isArbitraryVariable, isArbitraryValue],
										conic: [isInteger, isArbitraryVariable, isArbitraryValue],
									},
									isArbitraryVariableImage,
									isArbitraryImage,
								],
							},
						],
						/**
						 * Background Color
						 * @see https://tailwindcss.com/docs/background-color
						 */
						"bg-color": [
							{
								bg: scaleColor(),
							},
						],
						/**
						 * Gradient Color Stops From Position
						 * @see https://tailwindcss.com/docs/gradient-color-stops
						 */
						"gradient-from-pos": [
							{
								from: scaleGradientStopPosition(),
							},
						],
						/**
						 * Gradient Color Stops Via Position
						 * @see https://tailwindcss.com/docs/gradient-color-stops
						 */
						"gradient-via-pos": [
							{
								via: scaleGradientStopPosition(),
							},
						],
						/**
						 * Gradient Color Stops To Position
						 * @see https://tailwindcss.com/docs/gradient-color-stops
						 */
						"gradient-to-pos": [
							{
								to: scaleGradientStopPosition(),
							},
						],
						/**
						 * Gradient Color Stops From
						 * @see https://tailwindcss.com/docs/gradient-color-stops
						 */
						"gradient-from": [
							{
								from: scaleColor(),
							},
						],
						/**
						 * Gradient Color Stops Via
						 * @see https://tailwindcss.com/docs/gradient-color-stops
						 */
						"gradient-via": [
							{
								via: scaleColor(),
							},
						],
						/**
						 * Gradient Color Stops To
						 * @see https://tailwindcss.com/docs/gradient-color-stops
						 */
						"gradient-to": [
							{
								to: scaleColor(),
							},
						],
						// ---------------
						// --- Borders ---
						// ---------------
						/**
						 * Border Radius
						 * @see https://tailwindcss.com/docs/border-radius
						 */
						rounded: [
							{
								rounded: scaleRadius(),
							},
						],
						/**
						 * Border Radius Start
						 * @see https://tailwindcss.com/docs/border-radius
						 */
						"rounded-s": [
							{
								"rounded-s": scaleRadius(),
							},
						],
						/**
						 * Border Radius End
						 * @see https://tailwindcss.com/docs/border-radius
						 */
						"rounded-e": [
							{
								"rounded-e": scaleRadius(),
							},
						],
						/**
						 * Border Radius Top
						 * @see https://tailwindcss.com/docs/border-radius
						 */
						"rounded-t": [
							{
								"rounded-t": scaleRadius(),
							},
						],
						/**
						 * Border Radius Right
						 * @see https://tailwindcss.com/docs/border-radius
						 */
						"rounded-r": [
							{
								"rounded-r": scaleRadius(),
							},
						],
						/**
						 * Border Radius Bottom
						 * @see https://tailwindcss.com/docs/border-radius
						 */
						"rounded-b": [
							{
								"rounded-b": scaleRadius(),
							},
						],
						/**
						 * Border Radius Left
						 * @see https://tailwindcss.com/docs/border-radius
						 */
						"rounded-l": [
							{
								"rounded-l": scaleRadius(),
							},
						],
						/**
						 * Border Radius Start Start
						 * @see https://tailwindcss.com/docs/border-radius
						 */
						"rounded-ss": [
							{
								"rounded-ss": scaleRadius(),
							},
						],
						/**
						 * Border Radius Start End
						 * @see https://tailwindcss.com/docs/border-radius
						 */
						"rounded-se": [
							{
								"rounded-se": scaleRadius(),
							},
						],
						/**
						 * Border Radius End End
						 * @see https://tailwindcss.com/docs/border-radius
						 */
						"rounded-ee": [
							{
								"rounded-ee": scaleRadius(),
							},
						],
						/**
						 * Border Radius End Start
						 * @see https://tailwindcss.com/docs/border-radius
						 */
						"rounded-es": [
							{
								"rounded-es": scaleRadius(),
							},
						],
						/**
						 * Border Radius Top Left
						 * @see https://tailwindcss.com/docs/border-radius
						 */
						"rounded-tl": [
							{
								"rounded-tl": scaleRadius(),
							},
						],
						/**
						 * Border Radius Top Right
						 * @see https://tailwindcss.com/docs/border-radius
						 */
						"rounded-tr": [
							{
								"rounded-tr": scaleRadius(),
							},
						],
						/**
						 * Border Radius Bottom Right
						 * @see https://tailwindcss.com/docs/border-radius
						 */
						"rounded-br": [
							{
								"rounded-br": scaleRadius(),
							},
						],
						/**
						 * Border Radius Bottom Left
						 * @see https://tailwindcss.com/docs/border-radius
						 */
						"rounded-bl": [
							{
								"rounded-bl": scaleRadius(),
							},
						],
						/**
						 * Border Width
						 * @see https://tailwindcss.com/docs/border-width
						 */
						"border-w": [
							{
								border: scaleBorderWidth(),
							},
						],
						/**
						 * Border Width X
						 * @see https://tailwindcss.com/docs/border-width
						 */
						"border-w-x": [
							{
								"border-x": scaleBorderWidth(),
							},
						],
						/**
						 * Border Width Y
						 * @see https://tailwindcss.com/docs/border-width
						 */
						"border-w-y": [
							{
								"border-y": scaleBorderWidth(),
							},
						],
						/**
						 * Border Width Start
						 * @see https://tailwindcss.com/docs/border-width
						 */
						"border-w-s": [
							{
								"border-s": scaleBorderWidth(),
							},
						],
						/**
						 * Border Width End
						 * @see https://tailwindcss.com/docs/border-width
						 */
						"border-w-e": [
							{
								"border-e": scaleBorderWidth(),
							},
						],
						/**
						 * Border Width Top
						 * @see https://tailwindcss.com/docs/border-width
						 */
						"border-w-t": [
							{
								"border-t": scaleBorderWidth(),
							},
						],
						/**
						 * Border Width Right
						 * @see https://tailwindcss.com/docs/border-width
						 */
						"border-w-r": [
							{
								"border-r": scaleBorderWidth(),
							},
						],
						/**
						 * Border Width Bottom
						 * @see https://tailwindcss.com/docs/border-width
						 */
						"border-w-b": [
							{
								"border-b": scaleBorderWidth(),
							},
						],
						/**
						 * Border Width Left
						 * @see https://tailwindcss.com/docs/border-width
						 */
						"border-w-l": [
							{
								"border-l": scaleBorderWidth(),
							},
						],
						/**
						 * Divide Width X
						 * @see https://tailwindcss.com/docs/border-width#between-children
						 */
						"divide-x": [
							{
								"divide-x": scaleBorderWidth(),
							},
						],
						/**
						 * Divide Width X Reverse
						 * @see https://tailwindcss.com/docs/border-width#between-children
						 */
						"divide-x-reverse": ["divide-x-reverse"],
						/**
						 * Divide Width Y
						 * @see https://tailwindcss.com/docs/border-width#between-children
						 */
						"divide-y": [
							{
								"divide-y": scaleBorderWidth(),
							},
						],
						/**
						 * Divide Width Y Reverse
						 * @see https://tailwindcss.com/docs/border-width#between-children
						 */
						"divide-y-reverse": ["divide-y-reverse"],
						/**
						 * Border Style
						 * @see https://tailwindcss.com/docs/border-style
						 */
						"border-style": [
							{
								border: [...scaleLineStyle(), "hidden", "none"],
							},
						],
						/**
						 * Divide Style
						 * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
						 */
						"divide-style": [
							{
								divide: [...scaleLineStyle(), "hidden", "none"],
							},
						],
						/**
						 * Border Color
						 * @see https://tailwindcss.com/docs/border-color
						 */
						"border-color": [
							{
								border: scaleColor(),
							},
						],
						/**
						 * Border Color X
						 * @see https://tailwindcss.com/docs/border-color
						 */
						"border-color-x": [
							{
								"border-x": scaleColor(),
							},
						],
						/**
						 * Border Color Y
						 * @see https://tailwindcss.com/docs/border-color
						 */
						"border-color-y": [
							{
								"border-y": scaleColor(),
							},
						],
						/**
						 * Border Color S
						 * @see https://tailwindcss.com/docs/border-color
						 */
						"border-color-s": [
							{
								"border-s": scaleColor(),
							},
						],
						/**
						 * Border Color E
						 * @see https://tailwindcss.com/docs/border-color
						 */
						"border-color-e": [
							{
								"border-e": scaleColor(),
							},
						],
						/**
						 * Border Color Top
						 * @see https://tailwindcss.com/docs/border-color
						 */
						"border-color-t": [
							{
								"border-t": scaleColor(),
							},
						],
						/**
						 * Border Color Right
						 * @see https://tailwindcss.com/docs/border-color
						 */
						"border-color-r": [
							{
								"border-r": scaleColor(),
							},
						],
						/**
						 * Border Color Bottom
						 * @see https://tailwindcss.com/docs/border-color
						 */
						"border-color-b": [
							{
								"border-b": scaleColor(),
							},
						],
						/**
						 * Border Color Left
						 * @see https://tailwindcss.com/docs/border-color
						 */
						"border-color-l": [
							{
								"border-l": scaleColor(),
							},
						],
						/**
						 * Divide Color
						 * @see https://tailwindcss.com/docs/divide-color
						 */
						"divide-color": [
							{
								divide: scaleColor(),
							},
						],
						/**
						 * Outline Style
						 * @see https://tailwindcss.com/docs/outline-style
						 */
						"outline-style": [
							{
								outline: [...scaleLineStyle(), "none", "hidden"],
							},
						],
						/**
						 * Outline Offset
						 * @see https://tailwindcss.com/docs/outline-offset
						 */
						"outline-offset": [
							{
								"outline-offset": [
									isNumber,
									isArbitraryVariable,
									isArbitraryValue,
								],
							},
						],
						/**
						 * Outline Width
						 * @see https://tailwindcss.com/docs/outline-width
						 */
						"outline-w": [
							{
								outline: [
									"",
									isNumber,
									isArbitraryVariableLength,
									isArbitraryLength,
								],
							},
						],
						/**
						 * Outline Color
						 * @see https://tailwindcss.com/docs/outline-color
						 */
						"outline-color": [
							{
								outline: scaleColor(),
							},
						],
						// ---------------
						// --- Effects ---
						// ---------------
						/**
						 * Box Shadow
						 * @see https://tailwindcss.com/docs/box-shadow
						 */
						shadow: [
							{
								shadow: [
									// Deprecated since Tailwind CSS v4.0.0
									"",
									"none",
									themeShadow,
									isArbitraryVariableShadow,
									isArbitraryShadow,
								],
							},
						],
						/**
						 * Box Shadow Color
						 * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
						 */
						"shadow-color": [
							{
								shadow: scaleColor(),
							},
						],
						/**
						 * Inset Box Shadow
						 * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
						 */
						"inset-shadow": [
							{
								"inset-shadow": [
									"none",
									themeInsetShadow,
									isArbitraryVariableShadow,
									isArbitraryShadow,
								],
							},
						],
						/**
						 * Inset Box Shadow Color
						 * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
						 */
						"inset-shadow-color": [
							{
								"inset-shadow": scaleColor(),
							},
						],
						/**
						 * Ring Width
						 * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
						 */
						"ring-w": [
							{
								ring: scaleBorderWidth(),
							},
						],
						/**
						 * Ring Width Inset
						 * @see https://v3.tailwindcss.com/docs/ring-width#inset-rings
						 * @deprecated since Tailwind CSS v4.0.0
						 * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
						 */
						"ring-w-inset": ["ring-inset"],
						/**
						 * Ring Color
						 * @see https://tailwindcss.com/docs/box-shadow#setting-the-ring-color
						 */
						"ring-color": [
							{
								ring: scaleColor(),
							},
						],
						/**
						 * Ring Offset Width
						 * @see https://v3.tailwindcss.com/docs/ring-offset-width
						 * @deprecated since Tailwind CSS v4.0.0
						 * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
						 */
						"ring-offset-w": [
							{
								"ring-offset": [isNumber, isArbitraryLength],
							},
						],
						/**
						 * Ring Offset Color
						 * @see https://v3.tailwindcss.com/docs/ring-offset-color
						 * @deprecated since Tailwind CSS v4.0.0
						 * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
						 */
						"ring-offset-color": [
							{
								"ring-offset": scaleColor(),
							},
						],
						/**
						 * Inset Ring Width
						 * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
						 */
						"inset-ring-w": [
							{
								"inset-ring": scaleBorderWidth(),
							},
						],
						/**
						 * Inset Ring Color
						 * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
						 */
						"inset-ring-color": [
							{
								"inset-ring": scaleColor(),
							},
						],
						/**
						 * Text Shadow
						 * @see https://tailwindcss.com/docs/text-shadow
						 */
						"text-shadow": [
							{
								"text-shadow": [
									"none",
									themeTextShadow,
									isArbitraryVariableShadow,
									isArbitraryShadow,
								],
							},
						],
						/**
						 * Text Shadow Color
						 * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
						 */
						"text-shadow-color": [
							{
								"text-shadow": scaleColor(),
							},
						],
						/**
						 * Opacity
						 * @see https://tailwindcss.com/docs/opacity
						 */
						opacity: [
							{
								opacity: [isNumber, isArbitraryVariable, isArbitraryValue],
							},
						],
						/**
						 * Mix Blend Mode
						 * @see https://tailwindcss.com/docs/mix-blend-mode
						 */
						"mix-blend": [
							{
								"mix-blend": [
									...scaleBlendMode(),
									"plus-darker",
									"plus-lighter",
								],
							},
						],
						/**
						 * Background Blend Mode
						 * @see https://tailwindcss.com/docs/background-blend-mode
						 */
						"bg-blend": [
							{
								"bg-blend": scaleBlendMode(),
							},
						],
						/**
						 * Mask Clip
						 * @see https://tailwindcss.com/docs/mask-clip
						 */
						"mask-clip": [
							{
								"mask-clip": [
									"border",
									"padding",
									"content",
									"fill",
									"stroke",
									"view",
								],
							},
							"mask-no-clip",
						],
						/**
						 * Mask Composite
						 * @see https://tailwindcss.com/docs/mask-composite
						 */
						"mask-composite": [
							{
								mask: ["add", "subtract", "intersect", "exclude"],
							},
						],
						/**
						 * Mask Image
						 * @see https://tailwindcss.com/docs/mask-image
						 */
						"mask-image-linear-pos": [
							{
								"mask-linear": [isNumber],
							},
						],
						"mask-image-linear-from-pos": [
							{
								"mask-linear-from": scaleMaskImagePosition(),
							},
						],
						"mask-image-linear-to-pos": [
							{
								"mask-linear-to": scaleMaskImagePosition(),
							},
						],
						"mask-image-linear-from-color": [
							{
								"mask-linear-from": scaleColor(),
							},
						],
						"mask-image-linear-to-color": [
							{
								"mask-linear-to": scaleColor(),
							},
						],
						"mask-image-t-from-pos": [
							{
								"mask-t-from": scaleMaskImagePosition(),
							},
						],
						"mask-image-t-to-pos": [
							{
								"mask-t-to": scaleMaskImagePosition(),
							},
						],
						"mask-image-t-from-color": [
							{
								"mask-t-from": scaleColor(),
							},
						],
						"mask-image-t-to-color": [
							{
								"mask-t-to": scaleColor(),
							},
						],
						"mask-image-r-from-pos": [
							{
								"mask-r-from": scaleMaskImagePosition(),
							},
						],
						"mask-image-r-to-pos": [
							{
								"mask-r-to": scaleMaskImagePosition(),
							},
						],
						"mask-image-r-from-color": [
							{
								"mask-r-from": scaleColor(),
							},
						],
						"mask-image-r-to-color": [
							{
								"mask-r-to": scaleColor(),
							},
						],
						"mask-image-b-from-pos": [
							{
								"mask-b-from": scaleMaskImagePosition(),
							},
						],
						"mask-image-b-to-pos": [
							{
								"mask-b-to": scaleMaskImagePosition(),
							},
						],
						"mask-image-b-from-color": [
							{
								"mask-b-from": scaleColor(),
							},
						],
						"mask-image-b-to-color": [
							{
								"mask-b-to": scaleColor(),
							},
						],
						"mask-image-l-from-pos": [
							{
								"mask-l-from": scaleMaskImagePosition(),
							},
						],
						"mask-image-l-to-pos": [
							{
								"mask-l-to": scaleMaskImagePosition(),
							},
						],
						"mask-image-l-from-color": [
							{
								"mask-l-from": scaleColor(),
							},
						],
						"mask-image-l-to-color": [
							{
								"mask-l-to": scaleColor(),
							},
						],
						"mask-image-x-from-pos": [
							{
								"mask-x-from": scaleMaskImagePosition(),
							},
						],
						"mask-image-x-to-pos": [
							{
								"mask-x-to": scaleMaskImagePosition(),
							},
						],
						"mask-image-x-from-color": [
							{
								"mask-x-from": scaleColor(),
							},
						],
						"mask-image-x-to-color": [
							{
								"mask-x-to": scaleColor(),
							},
						],
						"mask-image-y-from-pos": [
							{
								"mask-y-from": scaleMaskImagePosition(),
							},
						],
						"mask-image-y-to-pos": [
							{
								"mask-y-to": scaleMaskImagePosition(),
							},
						],
						"mask-image-y-from-color": [
							{
								"mask-y-from": scaleColor(),
							},
						],
						"mask-image-y-to-color": [
							{
								"mask-y-to": scaleColor(),
							},
						],
						"mask-image-radial": [
							{
								"mask-radial": [isArbitraryVariable, isArbitraryValue],
							},
						],
						"mask-image-radial-from-pos": [
							{
								"mask-radial-from": scaleMaskImagePosition(),
							},
						],
						"mask-image-radial-to-pos": [
							{
								"mask-radial-to": scaleMaskImagePosition(),
							},
						],
						"mask-image-radial-from-color": [
							{
								"mask-radial-from": scaleColor(),
							},
						],
						"mask-image-radial-to-color": [
							{
								"mask-radial-to": scaleColor(),
							},
						],
						"mask-image-radial-shape": [
							{
								"mask-radial": ["circle", "ellipse"],
							},
						],
						"mask-image-radial-size": [
							{
								"mask-radial": [
									{
										closest: ["side", "corner"],
										farthest: ["side", "corner"],
									},
								],
							},
						],
						"mask-image-radial-pos": [
							{
								"mask-radial-at": scalePosition(),
							},
						],
						"mask-image-conic-pos": [
							{
								"mask-conic": [isNumber],
							},
						],
						"mask-image-conic-from-pos": [
							{
								"mask-conic-from": scaleMaskImagePosition(),
							},
						],
						"mask-image-conic-to-pos": [
							{
								"mask-conic-to": scaleMaskImagePosition(),
							},
						],
						"mask-image-conic-from-color": [
							{
								"mask-conic-from": scaleColor(),
							},
						],
						"mask-image-conic-to-color": [
							{
								"mask-conic-to": scaleColor(),
							},
						],
						/**
						 * Mask Mode
						 * @see https://tailwindcss.com/docs/mask-mode
						 */
						"mask-mode": [
							{
								mask: ["alpha", "luminance", "match"],
							},
						],
						/**
						 * Mask Origin
						 * @see https://tailwindcss.com/docs/mask-origin
						 */
						"mask-origin": [
							{
								"mask-origin": [
									"border",
									"padding",
									"content",
									"fill",
									"stroke",
									"view",
								],
							},
						],
						/**
						 * Mask Position
						 * @see https://tailwindcss.com/docs/mask-position
						 */
						"mask-position": [
							{
								mask: scaleBgPosition(),
							},
						],
						/**
						 * Mask Repeat
						 * @see https://tailwindcss.com/docs/mask-repeat
						 */
						"mask-repeat": [
							{
								mask: scaleBgRepeat(),
							},
						],
						/**
						 * Mask Size
						 * @see https://tailwindcss.com/docs/mask-size
						 */
						"mask-size": [
							{
								mask: scaleBgSize(),
							},
						],
						/**
						 * Mask Type
						 * @see https://tailwindcss.com/docs/mask-type
						 */
						"mask-type": [
							{
								"mask-type": ["alpha", "luminance"],
							},
						],
						/**
						 * Mask Image
						 * @see https://tailwindcss.com/docs/mask-image
						 */
						"mask-image": [
							{
								mask: ["none", isArbitraryVariable, isArbitraryValue],
							},
						],
						// ---------------
						// --- Filters ---
						// ---------------
						/**
						 * Filter
						 * @see https://tailwindcss.com/docs/filter
						 */
						filter: [
							{
								filter: [
									// Deprecated since Tailwind CSS v3.0.0
									"",
									"none",
									isArbitraryVariable,
									isArbitraryValue,
								],
							},
						],
						/**
						 * Blur
						 * @see https://tailwindcss.com/docs/blur
						 */
						blur: [
							{
								blur: scaleBlur(),
							},
						],
						/**
						 * Brightness
						 * @see https://tailwindcss.com/docs/brightness
						 */
						brightness: [
							{
								brightness: [isNumber, isArbitraryVariable, isArbitraryValue],
							},
						],
						/**
						 * Contrast
						 * @see https://tailwindcss.com/docs/contrast
						 */
						contrast: [
							{
								contrast: [isNumber, isArbitraryVariable, isArbitraryValue],
							},
						],
						/**
						 * Drop Shadow
						 * @see https://tailwindcss.com/docs/drop-shadow
						 */
						"drop-shadow": [
							{
								"drop-shadow": [
									// Deprecated since Tailwind CSS v4.0.0
									"",
									"none",
									themeDropShadow,
									isArbitraryVariableShadow,
									isArbitraryShadow,
								],
							},
						],
						/**
						 * Drop Shadow Color
						 * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
						 */
						"drop-shadow-color": [
							{
								"drop-shadow": scaleColor(),
							},
						],
						/**
						 * Grayscale
						 * @see https://tailwindcss.com/docs/grayscale
						 */
						grayscale: [
							{
								grayscale: [
									"",
									isNumber,
									isArbitraryVariable,
									isArbitraryValue,
								],
							},
						],
						/**
						 * Hue Rotate
						 * @see https://tailwindcss.com/docs/hue-rotate
						 */
						"hue-rotate": [
							{
								"hue-rotate": [isNumber, isArbitraryVariable, isArbitraryValue],
							},
						],
						/**
						 * Invert
						 * @see https://tailwindcss.com/docs/invert
						 */
						invert: [
							{
								invert: ["", isNumber, isArbitraryVariable, isArbitraryValue],
							},
						],
						/**
						 * Saturate
						 * @see https://tailwindcss.com/docs/saturate
						 */
						saturate: [
							{
								saturate: [isNumber, isArbitraryVariable, isArbitraryValue],
							},
						],
						/**
						 * Sepia
						 * @see https://tailwindcss.com/docs/sepia
						 */
						sepia: [
							{
								sepia: ["", isNumber, isArbitraryVariable, isArbitraryValue],
							},
						],
						/**
						 * Backdrop Filter
						 * @see https://tailwindcss.com/docs/backdrop-filter
						 */
						"backdrop-filter": [
							{
								"backdrop-filter": [
									// Deprecated since Tailwind CSS v3.0.0
									"",
									"none",
									isArbitraryVariable,
									isArbitraryValue,
								],
							},
						],
						/**
						 * Backdrop Blur
						 * @see https://tailwindcss.com/docs/backdrop-blur
						 */
						"backdrop-blur": [
							{
								"backdrop-blur": scaleBlur(),
							},
						],
						/**
						 * Backdrop Brightness
						 * @see https://tailwindcss.com/docs/backdrop-brightness
						 */
						"backdrop-brightness": [
							{
								"backdrop-brightness": [
									isNumber,
									isArbitraryVariable,
									isArbitraryValue,
								],
							},
						],
						/**
						 * Backdrop Contrast
						 * @see https://tailwindcss.com/docs/backdrop-contrast
						 */
						"backdrop-contrast": [
							{
								"backdrop-contrast": [
									isNumber,
									isArbitraryVariable,
									isArbitraryValue,
								],
							},
						],
						/**
						 * Backdrop Grayscale
						 * @see https://tailwindcss.com/docs/backdrop-grayscale
						 */
						"backdrop-grayscale": [
							{
								"backdrop-grayscale": [
									"",
									isNumber,
									isArbitraryVariable,
									isArbitraryValue,
								],
							},
						],
						/**
						 * Backdrop Hue Rotate
						 * @see https://tailwindcss.com/docs/backdrop-hue-rotate
						 */
						"backdrop-hue-rotate": [
							{
								"backdrop-hue-rotate": [
									isNumber,
									isArbitraryVariable,
									isArbitraryValue,
								],
							},
						],
						/**
						 * Backdrop Invert
						 * @see https://tailwindcss.com/docs/backdrop-invert
						 */
						"backdrop-invert": [
							{
								"backdrop-invert": [
									"",
									isNumber,
									isArbitraryVariable,
									isArbitraryValue,
								],
							},
						],
						/**
						 * Backdrop Opacity
						 * @see https://tailwindcss.com/docs/backdrop-opacity
						 */
						"backdrop-opacity": [
							{
								"backdrop-opacity": [
									isNumber,
									isArbitraryVariable,
									isArbitraryValue,
								],
							},
						],
						/**
						 * Backdrop Saturate
						 * @see https://tailwindcss.com/docs/backdrop-saturate
						 */
						"backdrop-saturate": [
							{
								"backdrop-saturate": [
									isNumber,
									isArbitraryVariable,
									isArbitraryValue,
								],
							},
						],
						/**
						 * Backdrop Sepia
						 * @see https://tailwindcss.com/docs/backdrop-sepia
						 */
						"backdrop-sepia": [
							{
								"backdrop-sepia": [
									"",
									isNumber,
									isArbitraryVariable,
									isArbitraryValue,
								],
							},
						],
						// --------------
						// --- Tables ---
						// --------------
						/**
						 * Border Collapse
						 * @see https://tailwindcss.com/docs/border-collapse
						 */
						"border-collapse": [
							{
								border: ["collapse", "separate"],
							},
						],
						/**
						 * Border Spacing
						 * @see https://tailwindcss.com/docs/border-spacing
						 */
						"border-spacing": [
							{
								"border-spacing": scaleUnambiguousSpacing(),
							},
						],
						/**
						 * Border Spacing X
						 * @see https://tailwindcss.com/docs/border-spacing
						 */
						"border-spacing-x": [
							{
								"border-spacing-x": scaleUnambiguousSpacing(),
							},
						],
						/**
						 * Border Spacing Y
						 * @see https://tailwindcss.com/docs/border-spacing
						 */
						"border-spacing-y": [
							{
								"border-spacing-y": scaleUnambiguousSpacing(),
							},
						],
						/**
						 * Table Layout
						 * @see https://tailwindcss.com/docs/table-layout
						 */
						"table-layout": [
							{
								table: ["auto", "fixed"],
							},
						],
						/**
						 * Caption Side
						 * @see https://tailwindcss.com/docs/caption-side
						 */
						caption: [
							{
								caption: ["top", "bottom"],
							},
						],
						// ---------------------------------
						// --- Transitions and Animation ---
						// ---------------------------------
						/**
						 * Transition Property
						 * @see https://tailwindcss.com/docs/transition-property
						 */
						transition: [
							{
								transition: [
									"",
									"all",
									"colors",
									"opacity",
									"shadow",
									"transform",
									"none",
									isArbitraryVariable,
									isArbitraryValue,
								],
							},
						],
						/**
						 * Transition Behavior
						 * @see https://tailwindcss.com/docs/transition-behavior
						 */
						"transition-behavior": [
							{
								transition: ["normal", "discrete"],
							},
						],
						/**
						 * Transition Duration
						 * @see https://tailwindcss.com/docs/transition-duration
						 */
						duration: [
							{
								duration: [
									isNumber,
									"initial",
									isArbitraryVariable,
									isArbitraryValue,
								],
							},
						],
						/**
						 * Transition Timing Function
						 * @see https://tailwindcss.com/docs/transition-timing-function
						 */
						ease: [
							{
								ease: [
									"linear",
									"initial",
									themeEase,
									isArbitraryVariable,
									isArbitraryValue,
								],
							},
						],
						/**
						 * Transition Delay
						 * @see https://tailwindcss.com/docs/transition-delay
						 */
						delay: [
							{
								delay: [isNumber, isArbitraryVariable, isArbitraryValue],
							},
						],
						/**
						 * Animation
						 * @see https://tailwindcss.com/docs/animation
						 */
						animate: [
							{
								animate: [
									"none",
									themeAnimate,
									isArbitraryVariable,
									isArbitraryValue,
								],
							},
						],
						// ------------------
						// --- Transforms ---
						// ------------------
						/**
						 * Backface Visibility
						 * @see https://tailwindcss.com/docs/backface-visibility
						 */
						backface: [
							{
								backface: ["hidden", "visible"],
							},
						],
						/**
						 * Perspective
						 * @see https://tailwindcss.com/docs/perspective
						 */
						perspective: [
							{
								perspective: [
									themePerspective,
									isArbitraryVariable,
									isArbitraryValue,
								],
							},
						],
						/**
						 * Perspective Origin
						 * @see https://tailwindcss.com/docs/perspective-origin
						 */
						"perspective-origin": [
							{
								"perspective-origin": scalePositionWithArbitrary(),
							},
						],
						/**
						 * Rotate
						 * @see https://tailwindcss.com/docs/rotate
						 */
						rotate: [
							{
								rotate: scaleRotate(),
							},
						],
						/**
						 * Rotate X
						 * @see https://tailwindcss.com/docs/rotate
						 */
						"rotate-x": [
							{
								"rotate-x": scaleRotate(),
							},
						],
						/**
						 * Rotate Y
						 * @see https://tailwindcss.com/docs/rotate
						 */
						"rotate-y": [
							{
								"rotate-y": scaleRotate(),
							},
						],
						/**
						 * Rotate Z
						 * @see https://tailwindcss.com/docs/rotate
						 */
						"rotate-z": [
							{
								"rotate-z": scaleRotate(),
							},
						],
						/**
						 * Scale
						 * @see https://tailwindcss.com/docs/scale
						 */
						scale: [
							{
								scale: scaleScale(),
							},
						],
						/**
						 * Scale X
						 * @see https://tailwindcss.com/docs/scale
						 */
						"scale-x": [
							{
								"scale-x": scaleScale(),
							},
						],
						/**
						 * Scale Y
						 * @see https://tailwindcss.com/docs/scale
						 */
						"scale-y": [
							{
								"scale-y": scaleScale(),
							},
						],
						/**
						 * Scale Z
						 * @see https://tailwindcss.com/docs/scale
						 */
						"scale-z": [
							{
								"scale-z": scaleScale(),
							},
						],
						/**
						 * Scale 3D
						 * @see https://tailwindcss.com/docs/scale
						 */
						"scale-3d": ["scale-3d"],
						/**
						 * Skew
						 * @see https://tailwindcss.com/docs/skew
						 */
						skew: [
							{
								skew: scaleSkew(),
							},
						],
						/**
						 * Skew X
						 * @see https://tailwindcss.com/docs/skew
						 */
						"skew-x": [
							{
								"skew-x": scaleSkew(),
							},
						],
						/**
						 * Skew Y
						 * @see https://tailwindcss.com/docs/skew
						 */
						"skew-y": [
							{
								"skew-y": scaleSkew(),
							},
						],
						/**
						 * Transform
						 * @see https://tailwindcss.com/docs/transform
						 */
						transform: [
							{
								transform: [
									isArbitraryVariable,
									isArbitraryValue,
									"",
									"none",
									"gpu",
									"cpu",
								],
							},
						],
						/**
						 * Transform Origin
						 * @see https://tailwindcss.com/docs/transform-origin
						 */
						"transform-origin": [
							{
								origin: scalePositionWithArbitrary(),
							},
						],
						/**
						 * Transform Style
						 * @see https://tailwindcss.com/docs/transform-style
						 */
						"transform-style": [
							{
								transform: ["3d", "flat"],
							},
						],
						/**
						 * Translate
						 * @see https://tailwindcss.com/docs/translate
						 */
						translate: [
							{
								translate: scaleTranslate(),
							},
						],
						/**
						 * Translate X
						 * @see https://tailwindcss.com/docs/translate
						 */
						"translate-x": [
							{
								"translate-x": scaleTranslate(),
							},
						],
						/**
						 * Translate Y
						 * @see https://tailwindcss.com/docs/translate
						 */
						"translate-y": [
							{
								"translate-y": scaleTranslate(),
							},
						],
						/**
						 * Translate Z
						 * @see https://tailwindcss.com/docs/translate
						 */
						"translate-z": [
							{
								"translate-z": scaleTranslate(),
							},
						],
						/**
						 * Translate None
						 * @see https://tailwindcss.com/docs/translate
						 */
						"translate-none": ["translate-none"],
						// ---------------------
						// --- Interactivity ---
						// ---------------------
						/**
						 * Accent Color
						 * @see https://tailwindcss.com/docs/accent-color
						 */
						accent: [
							{
								accent: scaleColor(),
							},
						],
						/**
						 * Appearance
						 * @see https://tailwindcss.com/docs/appearance
						 */
						appearance: [
							{
								appearance: ["none", "auto"],
							},
						],
						/**
						 * Caret Color
						 * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
						 */
						"caret-color": [
							{
								caret: scaleColor(),
							},
						],
						/**
						 * Color Scheme
						 * @see https://tailwindcss.com/docs/color-scheme
						 */
						"color-scheme": [
							{
								scheme: [
									"normal",
									"dark",
									"light",
									"light-dark",
									"only-dark",
									"only-light",
								],
							},
						],
						/**
						 * Cursor
						 * @see https://tailwindcss.com/docs/cursor
						 */
						cursor: [
							{
								cursor: [
									"auto",
									"default",
									"pointer",
									"wait",
									"text",
									"move",
									"help",
									"not-allowed",
									"none",
									"context-menu",
									"progress",
									"cell",
									"crosshair",
									"vertical-text",
									"alias",
									"copy",
									"no-drop",
									"grab",
									"grabbing",
									"all-scroll",
									"col-resize",
									"row-resize",
									"n-resize",
									"e-resize",
									"s-resize",
									"w-resize",
									"ne-resize",
									"nw-resize",
									"se-resize",
									"sw-resize",
									"ew-resize",
									"ns-resize",
									"nesw-resize",
									"nwse-resize",
									"zoom-in",
									"zoom-out",
									isArbitraryVariable,
									isArbitraryValue,
								],
							},
						],
						/**
						 * Field Sizing
						 * @see https://tailwindcss.com/docs/field-sizing
						 */
						"field-sizing": [
							{
								"field-sizing": ["fixed", "content"],
							},
						],
						/**
						 * Pointer Events
						 * @see https://tailwindcss.com/docs/pointer-events
						 */
						"pointer-events": [
							{
								"pointer-events": ["auto", "none"],
							},
						],
						/**
						 * Resize
						 * @see https://tailwindcss.com/docs/resize
						 */
						resize: [
							{
								resize: ["none", "", "y", "x"],
							},
						],
						/**
						 * Scroll Behavior
						 * @see https://tailwindcss.com/docs/scroll-behavior
						 */
						"scroll-behavior": [
							{
								scroll: ["auto", "smooth"],
							},
						],
						/**
						 * Scroll Margin
						 * @see https://tailwindcss.com/docs/scroll-margin
						 */
						"scroll-m": [
							{
								"scroll-m": scaleUnambiguousSpacing(),
							},
						],
						/**
						 * Scroll Margin X
						 * @see https://tailwindcss.com/docs/scroll-margin
						 */
						"scroll-mx": [
							{
								"scroll-mx": scaleUnambiguousSpacing(),
							},
						],
						/**
						 * Scroll Margin Y
						 * @see https://tailwindcss.com/docs/scroll-margin
						 */
						"scroll-my": [
							{
								"scroll-my": scaleUnambiguousSpacing(),
							},
						],
						/**
						 * Scroll Margin Start
						 * @see https://tailwindcss.com/docs/scroll-margin
						 */
						"scroll-ms": [
							{
								"scroll-ms": scaleUnambiguousSpacing(),
							},
						],
						/**
						 * Scroll Margin End
						 * @see https://tailwindcss.com/docs/scroll-margin
						 */
						"scroll-me": [
							{
								"scroll-me": scaleUnambiguousSpacing(),
							},
						],
						/**
						 * Scroll Margin Top
						 * @see https://tailwindcss.com/docs/scroll-margin
						 */
						"scroll-mt": [
							{
								"scroll-mt": scaleUnambiguousSpacing(),
							},
						],
						/**
						 * Scroll Margin Right
						 * @see https://tailwindcss.com/docs/scroll-margin
						 */
						"scroll-mr": [
							{
								"scroll-mr": scaleUnambiguousSpacing(),
							},
						],
						/**
						 * Scroll Margin Bottom
						 * @see https://tailwindcss.com/docs/scroll-margin
						 */
						"scroll-mb": [
							{
								"scroll-mb": scaleUnambiguousSpacing(),
							},
						],
						/**
						 * Scroll Margin Left
						 * @see https://tailwindcss.com/docs/scroll-margin
						 */
						"scroll-ml": [
							{
								"scroll-ml": scaleUnambiguousSpacing(),
							},
						],
						/**
						 * Scroll Padding
						 * @see https://tailwindcss.com/docs/scroll-padding
						 */
						"scroll-p": [
							{
								"scroll-p": scaleUnambiguousSpacing(),
							},
						],
						/**
						 * Scroll Padding X
						 * @see https://tailwindcss.com/docs/scroll-padding
						 */
						"scroll-px": [
							{
								"scroll-px": scaleUnambiguousSpacing(),
							},
						],
						/**
						 * Scroll Padding Y
						 * @see https://tailwindcss.com/docs/scroll-padding
						 */
						"scroll-py": [
							{
								"scroll-py": scaleUnambiguousSpacing(),
							},
						],
						/**
						 * Scroll Padding Start
						 * @see https://tailwindcss.com/docs/scroll-padding
						 */
						"scroll-ps": [
							{
								"scroll-ps": scaleUnambiguousSpacing(),
							},
						],
						/**
						 * Scroll Padding End
						 * @see https://tailwindcss.com/docs/scroll-padding
						 */
						"scroll-pe": [
							{
								"scroll-pe": scaleUnambiguousSpacing(),
							},
						],
						/**
						 * Scroll Padding Top
						 * @see https://tailwindcss.com/docs/scroll-padding
						 */
						"scroll-pt": [
							{
								"scroll-pt": scaleUnambiguousSpacing(),
							},
						],
						/**
						 * Scroll Padding Right
						 * @see https://tailwindcss.com/docs/scroll-padding
						 */
						"scroll-pr": [
							{
								"scroll-pr": scaleUnambiguousSpacing(),
							},
						],
						/**
						 * Scroll Padding Bottom
						 * @see https://tailwindcss.com/docs/scroll-padding
						 */
						"scroll-pb": [
							{
								"scroll-pb": scaleUnambiguousSpacing(),
							},
						],
						/**
						 * Scroll Padding Left
						 * @see https://tailwindcss.com/docs/scroll-padding
						 */
						"scroll-pl": [
							{
								"scroll-pl": scaleUnambiguousSpacing(),
							},
						],
						/**
						 * Scroll Snap Align
						 * @see https://tailwindcss.com/docs/scroll-snap-align
						 */
						"snap-align": [
							{
								snap: ["start", "end", "center", "align-none"],
							},
						],
						/**
						 * Scroll Snap Stop
						 * @see https://tailwindcss.com/docs/scroll-snap-stop
						 */
						"snap-stop": [
							{
								snap: ["normal", "always"],
							},
						],
						/**
						 * Scroll Snap Type
						 * @see https://tailwindcss.com/docs/scroll-snap-type
						 */
						"snap-type": [
							{
								snap: ["none", "x", "y", "both"],
							},
						],
						/**
						 * Scroll Snap Type Strictness
						 * @see https://tailwindcss.com/docs/scroll-snap-type
						 */
						"snap-strictness": [
							{
								snap: ["mandatory", "proximity"],
							},
						],
						/**
						 * Touch Action
						 * @see https://tailwindcss.com/docs/touch-action
						 */
						touch: [
							{
								touch: ["auto", "none", "manipulation"],
							},
						],
						/**
						 * Touch Action X
						 * @see https://tailwindcss.com/docs/touch-action
						 */
						"touch-x": [
							{
								"touch-pan": ["x", "left", "right"],
							},
						],
						/**
						 * Touch Action Y
						 * @see https://tailwindcss.com/docs/touch-action
						 */
						"touch-y": [
							{
								"touch-pan": ["y", "up", "down"],
							},
						],
						/**
						 * Touch Action Pinch Zoom
						 * @see https://tailwindcss.com/docs/touch-action
						 */
						"touch-pz": ["touch-pinch-zoom"],
						/**
						 * User Select
						 * @see https://tailwindcss.com/docs/user-select
						 */
						select: [
							{
								select: ["none", "text", "all", "auto"],
							},
						],
						/**
						 * Will Change
						 * @see https://tailwindcss.com/docs/will-change
						 */
						"will-change": [
							{
								"will-change": [
									"auto",
									"scroll",
									"contents",
									"transform",
									isArbitraryVariable,
									isArbitraryValue,
								],
							},
						],
						// -----------
						// --- SVG ---
						// -----------
						/**
						 * Fill
						 * @see https://tailwindcss.com/docs/fill
						 */
						fill: [
							{
								fill: ["none", ...scaleColor()],
							},
						],
						/**
						 * Stroke Width
						 * @see https://tailwindcss.com/docs/stroke-width
						 */
						"stroke-w": [
							{
								stroke: [
									isNumber,
									isArbitraryVariableLength,
									isArbitraryLength,
									isArbitraryNumber,
								],
							},
						],
						/**
						 * Stroke
						 * @see https://tailwindcss.com/docs/stroke
						 */
						stroke: [
							{
								stroke: ["none", ...scaleColor()],
							},
						],
						// ---------------------
						// --- Accessibility ---
						// ---------------------
						/**
						 * Forced Color Adjust
						 * @see https://tailwindcss.com/docs/forced-color-adjust
						 */
						"forced-color-adjust": [
							{
								"forced-color-adjust": ["auto", "none"],
							},
						],
					},
					conflictingClassGroups: {
						overflow: ["overflow-x", "overflow-y"],
						overscroll: ["overscroll-x", "overscroll-y"],
						inset: [
							"inset-x",
							"inset-y",
							"start",
							"end",
							"top",
							"right",
							"bottom",
							"left",
						],
						"inset-x": ["right", "left"],
						"inset-y": ["top", "bottom"],
						flex: ["basis", "grow", "shrink"],
						gap: ["gap-x", "gap-y"],
						p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
						px: ["pr", "pl"],
						py: ["pt", "pb"],
						m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
						mx: ["mr", "ml"],
						my: ["mt", "mb"],
						size: ["w", "h"],
						"font-size": ["leading"],
						"fvn-normal": [
							"fvn-ordinal",
							"fvn-slashed-zero",
							"fvn-figure",
							"fvn-spacing",
							"fvn-fraction",
						],
						"fvn-ordinal": ["fvn-normal"],
						"fvn-slashed-zero": ["fvn-normal"],
						"fvn-figure": ["fvn-normal"],
						"fvn-spacing": ["fvn-normal"],
						"fvn-fraction": ["fvn-normal"],
						"line-clamp": ["display", "overflow"],
						rounded: [
							"rounded-s",
							"rounded-e",
							"rounded-t",
							"rounded-r",
							"rounded-b",
							"rounded-l",
							"rounded-ss",
							"rounded-se",
							"rounded-ee",
							"rounded-es",
							"rounded-tl",
							"rounded-tr",
							"rounded-br",
							"rounded-bl",
						],
						"rounded-s": ["rounded-ss", "rounded-es"],
						"rounded-e": ["rounded-se", "rounded-ee"],
						"rounded-t": ["rounded-tl", "rounded-tr"],
						"rounded-r": ["rounded-tr", "rounded-br"],
						"rounded-b": ["rounded-br", "rounded-bl"],
						"rounded-l": ["rounded-tl", "rounded-bl"],
						"border-spacing": ["border-spacing-x", "border-spacing-y"],
						"border-w": [
							"border-w-x",
							"border-w-y",
							"border-w-s",
							"border-w-e",
							"border-w-t",
							"border-w-r",
							"border-w-b",
							"border-w-l",
						],
						"border-w-x": ["border-w-r", "border-w-l"],
						"border-w-y": ["border-w-t", "border-w-b"],
						"border-color": [
							"border-color-x",
							"border-color-y",
							"border-color-s",
							"border-color-e",
							"border-color-t",
							"border-color-r",
							"border-color-b",
							"border-color-l",
						],
						"border-color-x": ["border-color-r", "border-color-l"],
						"border-color-y": ["border-color-t", "border-color-b"],
						translate: ["translate-x", "translate-y", "translate-none"],
						"translate-none": [
							"translate",
							"translate-x",
							"translate-y",
							"translate-z",
						],
						"scroll-m": [
							"scroll-mx",
							"scroll-my",
							"scroll-ms",
							"scroll-me",
							"scroll-mt",
							"scroll-mr",
							"scroll-mb",
							"scroll-ml",
						],
						"scroll-mx": ["scroll-mr", "scroll-ml"],
						"scroll-my": ["scroll-mt", "scroll-mb"],
						"scroll-p": [
							"scroll-px",
							"scroll-py",
							"scroll-ps",
							"scroll-pe",
							"scroll-pt",
							"scroll-pr",
							"scroll-pb",
							"scroll-pl",
						],
						"scroll-px": ["scroll-pr", "scroll-pl"],
						"scroll-py": ["scroll-pt", "scroll-pb"],
						touch: ["touch-x", "touch-y", "touch-pz"],
						"touch-x": ["touch"],
						"touch-y": ["touch"],
						"touch-pz": ["touch"],
					},
					conflictingClassGroupModifiers: {
						"font-size": ["leading"],
					},
					orderSensitiveModifiers: [
						"*",
						"**",
						"after",
						"backdrop",
						"before",
						"details-content",
						"file",
						"first-letter",
						"first-line",
						"marker",
						"placeholder",
						"selection",
					],
				};
			};

			/**
			 * @param baseConfig Config where other config will be merged into. This object will be mutated.
			 * @param configExtension Partial config to merge into the `baseConfig`.
			 */
			const mergeConfigs = (
				baseConfig,
				{
					cacheSize,
					prefix,
					experimentalParseClassName,
					extend = {},
					override = {},
				},
			) => {
				overrideProperty(baseConfig, "cacheSize", cacheSize);
				overrideProperty(baseConfig, "prefix", prefix);
				overrideProperty(
					baseConfig,
					"experimentalParseClassName",
					experimentalParseClassName,
				);
				overrideConfigProperties(baseConfig.theme, override.theme);
				overrideConfigProperties(baseConfig.classGroups, override.classGroups);
				overrideConfigProperties(
					baseConfig.conflictingClassGroups,
					override.conflictingClassGroups,
				);
				overrideConfigProperties(
					baseConfig.conflictingClassGroupModifiers,
					override.conflictingClassGroupModifiers,
				);
				overrideProperty(
					baseConfig,
					"orderSensitiveModifiers",
					override.orderSensitiveModifiers,
				);
				mergeConfigProperties(baseConfig.theme, extend.theme);
				mergeConfigProperties(baseConfig.classGroups, extend.classGroups);
				mergeConfigProperties(
					baseConfig.conflictingClassGroups,
					extend.conflictingClassGroups,
				);
				mergeConfigProperties(
					baseConfig.conflictingClassGroupModifiers,
					extend.conflictingClassGroupModifiers,
				);
				mergeArrayProperties(baseConfig, extend, "orderSensitiveModifiers");
				return baseConfig;
			};
			const overrideProperty = (baseObject, overrideKey, overrideValue) => {
				if (overrideValue !== undefined) {
					baseObject[overrideKey] = overrideValue;
				}
			};
			const overrideConfigProperties = (baseObject, overrideObject) => {
				if (overrideObject) {
					for (const key in overrideObject) {
						overrideProperty(baseObject, key, overrideObject[key]);
					}
				}
			};
			const mergeConfigProperties = (baseObject, mergeObject) => {
				if (mergeObject) {
					for (const key in mergeObject) {
						mergeArrayProperties(baseObject, mergeObject, key);
					}
				}
			};
			const mergeArrayProperties = (baseObject, mergeObject, key) => {
				const mergeValue = mergeObject[key];
				if (mergeValue !== undefined) {
					baseObject[key] = baseObject[key]
						? baseObject[key].concat(mergeValue)
						: mergeValue;
				}
			};
			const extendTailwindMerge = (configExtension, ...createConfig) =>
				typeof configExtension === "function"
					? createTailwindMerge(
							getDefaultConfig,
							configExtension,
							...createConfig,
						)
					: createTailwindMerge(
							() => mergeConfigs(getDefaultConfig(), configExtension),
							...createConfig,
						);
			const twMerge = /*#__PURE__*/ createTailwindMerge(getDefaultConfig);

			//# sourceMappingURL=bundle-mjs.mjs.map
		},
	},
]);
