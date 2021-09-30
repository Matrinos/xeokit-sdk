import nodeResolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

export default {
    input: './src/index.js',
    output: [
        {
            file: './dist/xeokit-sdk.es.js',
            format: 'es',
            name: 'bundle',
            sourcemap: true,
        }
    ],
    plugins: [
        nodeResolve(),
        babel({
            babelrc: false,
            presets: [['@babel/env', { modules: false }]],
        }),
    ]
}