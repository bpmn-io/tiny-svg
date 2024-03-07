# Changelog

All notable changes to [tiny-svg](https://github.com/bpmn-io/tiny-svg) are documented here. We use [semantic versioning](http://semver.org/) for releases.

## Unreleased

___Note:__ Yet to be released changes appear here._

## 4.0.0

* `CHORE`: turn into ES module
* `CHORE`: require Node >= 16
* `CHORE`: drop UMD distribution

### Breaking Change

* This library is now an ES only module, and can consumed as such in modern JavaScript environments.

## 3.0.1

* `FIX`: correct `create` type definition ([#13](https://github.com/bpmn-io/tiny-svg/pull/13))

## 3.0.0

* `FEAT`: change library target to `ES2018`
* `FEAT`: drop polyfills for browser not supporting `ES2018`

### Breaking Changes

* Target syntax is `ES2018`. Transpile the code base to target `< ES2018`.
* Polyfills for browsers not supporting `ES2018` are dropped (e.g. Element.classList).

## 2.2.4

* `FIX`: lazily create utility elements ([#10](https://github.com/bpmn-io/tiny-svg/issues/10))

## 2.2.3

* `CHORE`: add type definitions for prepend and prependTo

## 2.2.2

* `FIX`: correct type definitions for select and selectAll

## 2.2.1

* `FIX`: work around IE / MS Edge transform issue ([`980e9d6f`](https://github.com/bpmn-io/tiny-svg/commit/980e9d6f69a79ae500c6a4172d046b2420e4ca25))

## 2.2.0

* `FEAT`: add ability to `create` any SVG element via markup
* `FEAT`: add ability to set `innerSVG` to fragment
* `FEAT`: add `prependTo` and `prepend` utils

## 2.1.2

* `FIX`: correct `{}` TypeScript definition

## 2.1.1

* `FIX`: correct TypeScript definitions

## 2.1.0

* `FEAT`: add TypeScript definitions

## 2.0.0

* `FIX`: drop `browser` field for better interoperability with module bundlers

## 1.1.0

* `CHORE`: mark utils as side-effect free via `sideEffects: false`

## 1.0.0

* `CHORE`: migrate code base to ES6
* `FEAT`: generate bundles for CJS, ES6 and UMD

## ...

Check `git log` for earlier history.
