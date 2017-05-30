# `angular-library-seed` demo projects

> This folder contains two demo-projects (ESM and UMD related) for [angular-library-seed](https://github.com/trekhleb/angular-library-seed) that may help you test your library against:
> - [AOT](https://angular.io/docs/ts/latest/cookbook/aot-compiler.html) (ahead-of-time) project build.
> - [JIT](https://angular.io/docs/ts/latest/cookbook/aot-compiler.html) (just-in-time) project build.
> - [UMD](https://github.com/umdjs/umd) bundle usage by [SystemJS](https://github.com/systemjs/systemjs).

# Quick Start

```bash
# Assuming the yor are already in angular-library-seed/demo folder

# Install all dependencies
yarn install

# Start watching library dist folder and do JIT project build.
yarn start

# Or you may simply build AOT/JIT/UMD versions all at once by running the following command
yarn build
```

# File Structure

```
angular-library-seed
  └─ demo                           * Folder for demo applications (MAY BE DELETED if not required) 
     ├─ esm                         * AOT/JIT demo project
     |  └─ dist                     * This folder will contain project ESM builds
     |  |  ├─ aot                   * This folder contains project build made via AOT compilation
     |  |  |  └─ index.html         * <-- RUN THIS FILE TO CHECK AOT BUILD
     |  |  |
     |  |  └─ jit                   * This folder contains project build made via JIT compilation
     |  |     └─ index.html         * <-- RUN THIS FILE TO CHECK JIT BUILD
     |  |
     |  ├─ lib                      * Temporary folder with a copy of your library built sources
     |  ├─ src
     |  |  ├─ app                   * Demo application sources. Adopt them with your library.
     |  |  ├─ index.ejs             * Main application template.
     |  |  ├─ main-aot.ts           * AOT main entry.
     |  |  ├─ main-jit.ts           * JIT main entry.
     |  |  └─ polyfills.browser.ts  * Browser polyfills.
     |  |
     |  ├─ tsconfig-aot.json        * TypeScript configuration for AOT build.
     |  ├─ tsconfig.json            * TypeScript configuration for JIT build.
     |  ├─ webpack-aot.config.js    * Webpack configuration for AOT build.
     |  └─ webpack.config.js        * Webpack configuration for JIT build.
     |   
     ├─ umd                         * UMD demo project
     |  ├─ app                      * Demo application sources. Adopt them with your library.
     |  ├─ lib                      * Temporary folder with a copy of your library built sources
     |  ├─ index.html               * <-- RUN THIS FILE TO CHECK UMD BUILD
     |  ├─ main.ts                  * Main application entry file.
     |  └─ systemjs.config.js       * SystemJS configuration.
     |   
     ├─ .gitignore                  * List of files that are ignored while publishing to git repo
     ├─ gulpfile.js                 * Gulp helper scripts for building demos
     ├─ package.json                * NPM dependencies and helper scripts for building demos
     └─ yarn.lock                   * Yarn dependency versions lock for demo applications
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
- Switch to `demo` folder in your console.
- `yarn install` to install required dependencies (or `npm i`).

## Replace `TickTock` library with your own library
This step may be optional at first since you might just want to play with existing library example.

Once you're ready to develop your own library you should do the following.
- Check and re-configure `package.json` fields like `name`, `version`, `keywords`, `description` etc. You may read about specifics of npm's [package.json handling](https://docs.npmjs.com/files/package.json) to do that.
- Replace the content of `src` folder with your library sources. Your library must have `index.ts` file as an entry point for further building.
- Update `demo` sources to make them consume your library in case if you want to keep the demo folder.

## Build the projects
- `yarn build` for building the library once (both ESM and AOT versions).
- `yarn build:watch` for building the library (both ESM and AOT versions) and watch for file changes.

You may also build UMD bundle and ESM files separately:
- `yarn build:esm` - for building AOT/JIT compatible versions of files.
- `yarn build:esm:watch` - the same as previous command but in watch-mode.
- `yarn build:umd` - for building UMD bundle only.
- `yarn build:umd:watch` - the same as previous command but in watch-mode.

## Other commands

#### Cleaning
- `yarn clean:tmp` command will clean up all temporary files like `docs`, `dist`, `coverage` etc.
- `yarn clean:all` command will clean up all temporary files along with `node_modules` folder. 
