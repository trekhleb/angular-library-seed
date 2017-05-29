# `angular-library-seed` - the starter for Angular libraries

[![Build Status](https://travis-ci.org/trekhleb/angular-library-seed.svg?branch=master)](https://travis-ci.org/trekhleb/angular-library-seed)
[![codecov](https://codecov.io/gh/trekhleb/angular-library-seed/branch/master/graph/badge.svg)](https://codecov.io/gh/trekhleb/angular-library-seed)

> Seed project for [Angular](https://angular.io/) libraries that are [AOT](https://angular.io/docs/ts/latest/cookbook/aot-compiler.html)/[JIT](https://angular.io/docs/ts/latest/cookbook/aot-compiler.html) compatible and that use external [SCSS](http://sass-lang.com/)-styles and HTML-templates.

This project contains TickTock library example. The library itself is small and the only thing it does is [displaying current time](http://embed.plnkr.co/VbO1hldrCfF6ITG6VvGG/). But what **most important** is that the project contains **environment** for the library that allows its building, testing, linting, publishing etc.

# You might find this project helpful if
- You want to create library for **Angular 2+**.
- You want your library to be ready for further **AOT** or **JIT** compilation.
- You want your library to be ready for further usage **directly in browsers** (let's say [UMD](https://github.com/umdjs/umd) bundle loaded by [SystemJS](https://github.com/systemjs/systemjs)).
- You want to write component styles in **external SCSS files**.
- Your want to write component templates in **external HTML files**.

# Main Features
- **AOT/JIT** compatible library build via [Angular Compiler](https://www.npmjs.com/package/@angular/compiler-cli) (ngc).
- **UMD** build via [Webpack](https://webpack.js.org/).
- **Testing** with [Karma](https://karma-runner.github.io/1.0/index.html) and [Jasmine](https://jasmine.github.io/).
- **Test coverage** report via [Istanbul](https://github.com/gotwarlost/istanbul).
- **Watch modes** for building and testing procedures that makes developing process easier.
- **Linting** with [TSLint](https://palantir.github.io/tslint/) and [Codelyzer](https://github.com/mgechev/codelyzer) for static code analysis.
- **Exploring your build** via [Sourcemap Explorer](https://www.npmjs.com/package/source-map-explorer) that shows you a treemap visualization to help you debug where all the code is coming from. 
- **Documentation generation** via [Compodoc](https://github.com/compodoc/compodoc).
- **Documentation hosting**  via [GitHub Pages](https://pages.github.com/).
- **AOT/JIT/UMD demos** via [Webpack](https://webpack.js.org/) and [SystemJS](https://github.com/systemjs/systemjs) that allows you to test library builds.
- **Continuous integration** with [Travis CI](https://travis-ci.org/).

# File Structure

```
angular-library-seed
  ├─ demo
  |  ├─ esm
  |  ├─ umd
  |  ├─ .gitignore
  |  ├─ gulpfile.js
  |  ├─ package.json
  |  └─ yarn.lock
  ├─ src
  ├─ .editorconfig
  ├─ .gitignore	
  ├─ .npmignore
  ├─ .travis.yml
  ├─ LICENSE
  ├─ README.md
  ├─ gulpfile.js
  ├─ karma-test-entry.ts
  ├─ karma.conf.ts
  ├─ package.json
  ├─ tsconfig-aot.json
  ├─ tsconfig.json
  ├─ tslint.json
  ├─ webpack-test.config.ts
  ├─ webpack-umd.config.ts
  └─ yarn.lock
```
