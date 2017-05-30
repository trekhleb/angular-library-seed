# Demo projects for `angular-library-seed`

> This folder contains two demo-project (ESM and UMD related) that may help you test your library against
 - AOT build.
 - ESM build.
 - UMD bundle usage by SystemJS

# Quick Start

```bash
# Assuming the yor are already in angular-library-seed folder
cd demo

# Install all dependencies
yarn install

# Build all projects
yarn build
```

# File Structure

```
angular-library-seed
  └─ demo                         * Folder for demo applications (MAY BE DELETED if not required) 
     ├─ esm                       * AOT/JIT demo project
     ├─ umd                       * UMD demo project
     ├─ .gitignore                * List of files that are ignored while publishing to git repo
     ├─ gulpfile.js               * Gulp helper scripts for building demos
     ├─ package.json              * NPM dependencies and helper scripts for building demos
     └─ yarn.lock                 * Yarn dependency versions lock for demo applications
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
