export default {
  entry: 'dist/index.js',
  dest: 'dist/index.umd.js',
  format: 'umd',
  moduleName: 'tick-tock',
  sourceMap: true,
  context: 'window',
  globals: {
    '@angular/core': 'ng.core',
    '@angular/common': 'ng.common',
    '@angular/compiler': 'ng.compiler',
    '@angular/platform-browser': 'ng.platformBrowser',
    '@angular/platform-browser-dynamic': 'ng.platformBrowserDynamic',
    'rxjs/Subject': 'Rx',
    'rxjs/observable/PromiseObservable': 'Rx',
    'rxjs/operator/toPromise': 'Rx.Observable.prototype',
    'rxjs/Observable': 'Rx',
    'rxjs/Rx': 'Rx'
  },
  external: [
    'rxjs',
    '@angular/core',
    'rxjs/Observable'
  ]
}
