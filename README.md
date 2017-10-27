# `angular-atomic-library` - the starter for Angular libraries.

[![npm version](https://badge.fury.io/js/angular-atomic-library.svg)](https://badge.fury.io/js/angular-atomic-library)

> Seed project for [Angular](https://angular.io/) libraries that are [AOT](https://angular.io/docs/ts/latest/cookbook/aot-compiler.html)/[JIT](https://angular.io/docs/ts/latest/cookbook/aot-compiler.html) compatible and that use external [SCSS](http://sass-lang.com/)-styles and HTML-templates.

This project is contains an example of how to build a web component library . But what **most important** is that the project contains **reusable environment** for the libraries that allows to build, test, lint, document, explore and publish them. The complete demo application based on the atomic web design principles has been created and is available at https://github.com/ERS-HCL/angular-atomic-app 


# You might find this project helpful if
- You want to create library for **Angular 4**.
- You want your library to be ready for further **AOT** or **JIT** compilation.
- You want your library to be ready for further usage **directly in browsers** (let's say [UMD](https://github.com/umdjs/umd) bundle loaded by [SystemJS](https://github.com/systemjs/systemjs)).
- You want to write component styles in **external SCSS files**.
- You want to write component templates in **external HTML files**.
- You want to have **watch-mode** for library builds (including AOT build).

# Main Features
- **AOT/JIT** compatible library build via [Angular Compiler](https://www.npmjs.com/package/@angular/compiler-cli) (ngc).
- **UMD** build via [Webpack](https://webpack.js.org/) that allows you to use your library for browser builds. You may play with it on [Plunker](http://embed.plnkr.co/VbO1hldrCfF6ITG6VvGG/).
- **Testing** with [Karma](https://karma-runner.github.io/1.0/index.html) and [Jasmine](https://jasmine.github.io/).
- **Test coverage** report via [Istanbul](https://github.com/gotwarlost/istanbul).
- **Watch modes** for building and testing procedures that makes developing process easier.
- **Linting** with [TSLint](https://palantir.github.io/tslint/) and [Codelyzer](https://github.com/mgechev/codelyzer) for static code analysis.
- **Exploring your build** via [Sourcemap Explorer](https://www.npmjs.com/package/source-map-explorer) that shows you a treemap visualization to help you debug where all the code is coming from. 
- **Documentation generation** via [Compodoc](https://github.com/compodoc/compodoc). Take a look at [documentation example](https://tsukhu.github.io/angular-atomic-library/).
- **Documentation hosting**  via [GitHub Pages](https://pages.github.com/).
- **AOT/JIT/UMD demos** via [Webpack](https://webpack.js.org/) and [SystemJS](https://github.com/systemjs/systemjs) that allows you to test library builds.
- **Continuous integration** with [Travis CI](https://travis-ci.org/).
- **Code coverage** badge via [Codecov](https://codecov.io) as a reminder to cover code with tests.

# Quick Start

```bash
# Clone the repository
git clone https://github.com/tsukhu/angular-atomic-library.git

# Go to repository folder
cd angular-atomic-library

# Install all dependencies
yarn install

# Build the library
yarn build
```

# File Structure

```
angular-atomic-library
  ├─ demo                         * Folder for demo applications (MAY BE DELETED if not required) 
  |  ├─ esm                       * AOT/JIT demo project
  |  ├─ umd                       * UMD demo project
  |  └─ ...                       * More details about this folder may be found in demo folder README file.
  |
  ├─ src                          * Library sources home folder (THE PLACE FOR YOUR LIBRARY SOURCES)
  |  ├─ components                * Example of library components with tests
  |  ├─ services                  * Example of library services with tests
  |  ├─ index.ts                  * Library entry point that is used by builders
  |  └─ modules                   * Example of library modules
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
  ├─ package.json                 * NPM dependencies, scripts and package configuration
  ├─ tsconfig-aot.json            * TypeScript configuration for AOT build
  ├─ tsconfig.json                * TypeScript configuration for UMD and Test builds
  ├─ tslint.json                  * TypeScript linting configuration
  ├─ webpack-test.config.ts       * Webpack configuration for building test version of the library
  ├─ webpack-umd.config.ts        * Webpack configuration for building UMD bundle
  └─ yarn.lock                    * Yarn lock file that locks dependency versions
```

# Getting Started

## Dependencies

#### Node/NPM
Install latest Node and NPM following the [instructions](https://nodejs.org/en/download/). Make sure you have Node version ≥ 7.0 and NPM ≥ 4.

- `brew install node` for Mac.

#### Yarn
[Yarn package manager](https://yarnpkg.com/en/) is optional but highly recommended. If you prefer to work with `npm` directly you may ignore this step.

Yarn installs library dependencies faster and also locks theirs versions. It has [more advantages](https://yarnpkg.com/en/) but these two are already pretty attractive. 

Install Yarn by following the [instructions](https://yarnpkg.com/en/docs/install).

- `brew install yarn` for Mac.

## Installing
- `fork` this repository.
- `clone` your fork to your local environment.
- `yarn install` to install required dependencies (or `npm i`).

## Replace `TickTock` library with your own library
This step may be optional at first since you might just want to play with existing library example.

Once you're ready to develop your own library you should do the following.
- Check and re-configure `package.json` fields like `name`, `version`, `keywords`, `description` etc. You may read about specifics of npm's [package.json handling](https://docs.npmjs.com/files/package.json) to do that.
- Replace the content of `src` folder with your library sources. Your library must have `index.ts` file as an entry point for further building.
- Update `demo` sources to make them consume your library in case if you want to keep the demo folder.

## Build the library
- `yarn build` for building the library once (both ESM and AOT versions).
- `yarn build:watch` for building the library (both ESM and AOT versions) and watch for file changes.

You may also build UMD bundle and ESM files separately:
- `yarn build:esm` - for building AOT/JIT compatible versions of files.
- `yarn build:esm:watch` - the same as previous command but in watch-mode.
- `yarn build:umd` - for building UMD bundle only.
- `yarn build:umd:watch` - the same as previous command but in watch-mode.

## Other commands

#### Lint the code
- `yarn lint` for performing static code analysis.

#### Test the library
- `yarn test` for running all your `*.spec.ts` tests once. Generated code coverage report may be found in `coverage` folder.
- `yarn test:watch` for running all you `*.spec.ts` and watch for file changes.

#### Generate documentation
- `yarn docs` for generating documentation locally.
- `yarn gh-pages` for generating documentation and uploading it to GitHub Pages. [Documentation example](https://tsukhu.github.io/angular-atomic-library/).

#### Explore the bundle
- `yarn explorer` to find out where all your code in bundle is coming from.

#### Bump library version
- `npm version patch` to increase library version. [More on bumping](https://docs.npmjs.com/cli/version).

`preversion` script in this case will automatically run project testing and linting in prior in order to check that the library is ready for publishing.

#### Publish library to NPM
- `npm publish` to publish your library sources on [npmjs.com](https://www.npmjs.com/). Once the library is published it will be [available for usage](https://www.npmjs.com/package/angular-atomic-library) in npm packages.

`prepublishOnly` script in this case will automatically run project testing and linting in prior in order to check that the library is ready for publishing.

#### Cleaning
- `yarn clean:tmp` command will clean up all temporary files like `docs`, `dist`, `coverage` etc.
- `yarn clean:all` command will clean up all temporary files along with `node_modules` folder. 

# Library development workflow

In order to debug your library in browser you need to have Angular project that will consume your library, build the application and display it. For your convenience all of that should happen automatically in background so once you change library source code you should instantly see the changes in browser.

There are several ways to go here:
- Use your **real library-consumer project** and link your library to it via `yarn link` command (see below).
- Use [demo applications](https://github.com/tsukhu/angular-atomic-library/tree/master/demo) that are provided for your convenience as a part of this repository.
- Use [Angular-CLI](https://cli.angular.io/) to generate library-consumer project for you and then use `yarn link` to link your library to it.

### Using demo applications

You may take advantage of watch-modes for both library build and [demo-projects](https://github.com/tsukhu/angular-atomic-library/tree/master/demo) builds in order to see changes to your library's source code immediately in your browser.

To do so you need to:
1. Open two console instances.
2. Launch library build in watch mode in first console instance by running `yarn build:watch` (assuming that you're in `angular-atomic-library` root folder).
3. Launch demo project build (JIT version) in watch-mode by running `yarn start` in second console instance (assuming that you're in `angular-atomic-library/demo` folder).

As a result once you change library source code it will be automatically re-compiled and in turn your JIT demo-project will be automatically re-built and you will be able to see that changes in your browser instantly.

For more details about demo projects, their folder structure and npm commands please take a look at [demo projects README](https://github.com/tsukhu/angular-atomic-library/tree/master/demo).

### Using `yarn link`

In you library root folder:

```bash
# Create symbolic link
yarn link

# Build library in watch mode
yarn build:watch
```

In you project folder that should consume the library:

```bash
# Link you library to the project
yarn link "angular-atomic-library"

# Build your project. In case of Angular-CLI use the following command.
ng serve --aot
```

Then you need to import your library into your project's source code.

Now, once you update your library source code it will automatically be re-compiled and your project will be re-built so you may see library changes instantly.
  
[More information](https://yarnpkg.com/en/docs/cli/link) about `yarn link` command.

> At the moment of publishing this project there is a [bug](https://github.com/angular/angular-cli/issues/3854) exists when using `yarn link` in combination with Angular CLI. The issue is caused by having `node_modules` folder inside linked library. There is a [workaround](https://github.com/angular/angular-cli/issues/3854#issuecomment-274344771) has been provided that suggests to add a `paths` property with all Angular dependencies to the `tsconfig.json` file of the Angular CLI project like it is shown below:
```
{
  "compilerOptions": {
    "paths": { "@angular/*": ["../node_modules/@angular/*"] }
  }
}
```
