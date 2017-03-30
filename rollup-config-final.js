// import rollup from 'rollup'
import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs';
// import uglify from 'rollup-plugin-uglify'

let pkg = require('./package.json');
let external = Object.keys(pkg.dependencies);

export default {
  entry: './final/aot/ng_library_starter.module.js',
  external: external,
  targets: [
    {
      dest: pkg.main,
      format: 'umd',
      moduleName: 'ngLibraryStarter',
      sourceMap: true
    },
    {
      dest: pkg.module,
      format: 'es',
      sourceMap: true
    }
  ],
  plugins: [
    nodeResolve({
      jsnext: true,
      module: true
    }),
    // commonjs({
    //   include: 'node_modules/rxjs/**',
    // })
  ],
  onwarn: function(warning) {
    // Skip certain warnings

    // should intercept ... but doesn't in some rollup versions
    //if ( warning.code === 'THIS_IS_UNDEFINED' ) { return; }
    // intercepts in some rollup versions
    //if ( warning.indexOf("The 'this' keyword is equivalent to 'undefined'") > -1 ) { return; }

    // console.warn everything else
    console.warn( warning.message );
  }
}
