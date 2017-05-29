# `angular-library-seed` - the starter for Angular libraries

[![Build Status](https://travis-ci.org/trekhleb/angular-library-seed.svg?branch=master)](https://travis-ci.org/trekhleb/angular-library-seed)
[![codecov](https://codecov.io/gh/trekhleb/angular-library-seed/branch/master/graph/badge.svg)](https://codecov.io/gh/trekhleb/angular-library-seed)

> Seed project for [Angular](https://angular.io/) libraries that are [AOT](https://angular.io/docs/ts/latest/cookbook/aot-compiler.html)/[JIT](https://angular.io/docs/ts/latest/cookbook/aot-compiler.html) compatible and that use external [SCSS](http://sass-lang.com/)-styles and HTML-templates.

This project contains TickTock library example. The library itself is small and the only thing it does is [displaying current time](http://embed.plnkr.co/VbO1hldrCfF6ITG6VvGG/) (Plunker example). But what **most important** is that the project contains **reusable environment** for the libraries that allows to build, test, lint, document, explore and publish them.

# You might find this project helpful if
- You want to create library for **Angular 2+**.
- You want your library to be ready for further **AOT** or **JIT** compilation.
- You want your library to be ready for further usage **directly in browsers** (let's say [UMD](https://github.com/umdjs/umd) bundle loaded by [SystemJS](https://github.com/systemjs/systemjs)).
- You want to write component styles in **external SCSS files**.
- Your want to write component templates in **external HTML files**.

# Main Features
- **AOT/JIT** compatible library build via [Angular Compiler](https://www.npmjs.com/package/@angular/compiler-cli) (ngc).
- **UMD** build via [Webpack](https://webpack.js.org/) that allows you to use your library for browser builds. You may play with it on [Plunker](http://embed.plnkr.co/VbO1hldrCfF6ITG6VvGG/).
- **Testing** with [Karma](https://karma-runner.github.io/1.0/index.html) and [Jasmine](https://jasmine.github.io/).
- **Test coverage** report via [Istanbul](https://github.com/gotwarlost/istanbul).
- **Watch modes** for building and testing procedures that makes developing process easier.
- **Linting** with [TSLint](https://palantir.github.io/tslint/) and [Codelyzer](https://github.com/mgechev/codelyzer) for static code analysis.
- **Exploring your build** via [Sourcemap Explorer](https://www.npmjs.com/package/source-map-explorer) that shows you a treemap visualization to help you debug where all the code is coming from. 
- **Documentation generation** via [Compodoc](https://github.com/compodoc/compodoc). Take a look at [documentation example](https://trekhleb.github.io/angular-library-seed/).
- **Documentation hosting**  via [GitHub Pages](https://pages.github.com/).
- **AOT/JIT/UMD demos** via [Webpack](https://webpack.js.org/) and [SystemJS](https://github.com/systemjs/systemjs) that allows you to test library builds.
- **Continuous integration** with [Travis CI](https://travis-ci.org/).

# File Structure

```
angular-library-seed
  ├─ demo                         * Folder for demo applications (MAY BE DELETED if not required) 
  |  ├─ esm                       * AOT/JIT demo project
  |  ├─ umd                       * UMD demo project
  |  ├─ .gitignore                * List of files that are ignored while publishing to git repo
  |  ├─ gulpfile.js               * Gulp helper scripts for building demos
  |  ├─ package.json              * NPM dependencies and helper scripts for building demos
  |  └─ yarn.lock                 * Yarn dependency versions lock for demo applications
  |
  ├─ src                          * Library sources home folder (THE PLACE FOR YOUR LIBRARY SOURCES)
  |  ├─ components                * Example of library components with tests
  |  ├─ services                  * Example of library services with tests
  |  ├─ index.ts                  * Library entry point that is used by builders
  |  └─ tick-tock.module.ts       * Example of library module
  |
  ├─ .editorconfig                * Common IDE configuration
  ├─ .gitignore	                  * List of files that are ignored while publishing to git repo
  ├─ .npmignore                   * List of files that are ignored while publishing to npm
  ├─ .travis.yml                  * Travic CI configuration
  ├─ LICENSE                      * License details
  ├─ README.md                    * README for you library
  ├─ gulpfile.js                  * Gulp helper scripts
  ├─ karma-test-entry.ts          * Entry script for Karma tests
  ├─ karma.conf.ts                * Karma configuration for our unit tests
  ├─ package.json                 * NPM dependancies, scripts and package configuration
  ├─ tsconfig-aot.json            * TypeScript configuration for AOT build
  ├─ tsconfig.json                * TypeScript configuration for UMD and Test builds
  ├─ tslint.json                  * TypeScript linting configuration
  ├─ webpack-test.config.ts       * Webpack configuration for building test version of the library
  ├─ webpack-umd.config.ts        * Webpack configuration for building UMD bundle
  └─ yarn.lock                    * Yarn lock file that locks dependancy versions
```

# Getting Started

## Dependencies

#### Node/NPM
Install latest Node and NPM following the [instructions](https://nodejs.org/en/download/).

- `brew install node` for Mac.

#### Yarn
[Yarn package manager](https://yarnpkg.com/en/) is optional but highly recommended. If you prefer to work with `npm` directly you may ignore this step.

Yarn installs library dependencies faster and also locks theirs versions. It has [more advantages](https://yarnpkg.com/en/) but these two are already pretty attractive. 

Install Yarn by following the [instructions](https://yarnpkg.com/en/docs/install).

- `brew install yarn` for Mac.

## Installing
- `fork` this repo
- `clone` your fork
- `yarn install` to install required dependencies (or `npm i`)

## Build the library
- `yarn build` for building the library once
- `yarn build:watch` for building the library and watch for file changes
