const esbuild = require('esbuild');
const NodePath = require('path');
const extensibilityMap = require('@neos-project/neos-ui-extensibility/extensibilityMap.json');
const isWatch = process.argv.includes('--watch');

/** @type {import('esbuild').BuildOptions} */
const options = {
    logLevel: 'info',
    bundle: true,
    minify: true,
    target: 'es2020',
    format: 'esm',
    splitting: true,
    sourcemap: 'linked',
    entryPoints: { 'Plugin': 'src/index.js' },
    loader: {
        '.js': 'tsx'
    },
    alias: {
        ...extensibilityMap,
        fs: NodePath.join(__dirname, 'src/stubs/fs.ts')
    },
    define: {
        // for chalk.js
        'process.platform': 'undefined'
    },
    outdir: '../../Public/NeosEnvironmentDisplay'
};

if (isWatch) {
    esbuild.context(options).then((ctx) => ctx.watch());
} else {
    esbuild.build(options);
}
