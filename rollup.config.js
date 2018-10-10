import babel from 'rollup-plugin-babel';

export default {
    input: 'demo/src/js/main.js',
    output: {
        file: 'demo/dist/js/main-bundle.js',
        format: 'iife',
        name: 'demo-bundle.js'
    },
    plugins: [
        babel()
    ]
}