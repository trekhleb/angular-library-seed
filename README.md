# `angular-library-seed` - the starter for Angular libraries

[![Build Status](https://travis-ci.org/trekhleb/angular-library-seed.svg?branch=master)](https://travis-ci.org/trekhleb/angular-library-seed)
[![codecov](https://codecov.io/gh/trekhleb/angular-library-seed/branch/master/graph/badge.svg)](https://codecov.io/gh/trekhleb/angular-library-seed)

> Seed project for [Angular](https://angular.io/) libraries that are [AOT](https://angular.io/docs/ts/latest/cookbook/aot-compiler.html)/[JIT](https://angular.io/docs/ts/latest/cookbook/aot-compiler.html) compatible and that use external [SCSS](http://sass-lang.com/)-styles and HTML-templates.

This project contains TickTock library example. The library itself is small and the only thing it does is [displaying current time](http://embed.plnkr.co/VbO1hldrCfF6ITG6VvGG/). But what **most important** is that the project contains **environment** for the library that allows its building, testing, linting, publishing etc.

# You might find this project helpful if
- You want to create library for **Angular 2+**
- You want your library to be ready for further **AOT** or **JIT** compilation
- You want your library to be ready for further usage **directly in browsers** (let's say [UMD](https://github.com/umdjs/umd) bundle loaded by [SystemJS](https://github.com/systemjs/systemjs))
- You want to write component styles in **external SCSS files**
- Your want to write component templates in **external HTML files**

<!--
# Main Features
- Building Angular library code that is written on TypeScript with JIT/AOT/UMD compatibility + watch mode
- Testing with Karma-Jasmine + test coverage with Istanbul + Watch mode
- Linting with TSLint + Codelyzer

## Additional
- Automatic versioning?
- Sourcemap explorer
- Travis integration
- Codecav integration
- Compodoc + GitHub Pages integration - automatic
- Demo folder that will help you test your builds against AOT/JIT compilation or build UMD compatible
-->
