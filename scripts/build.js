// Automatically exclude all node_modules from the bundled version
// const { nodeExternalsPlugin } = require('esbuild-node-externals');

require('esbuild')
  .build({
    entryPoints: ['src/index.ts'],
    bundle: true,
    minify: true,
    outfile: 'lib/index.js',
    platform: 'node',
    sourcemap: true,
    target: 'node14',
    // plugins: [nodeExternalsPlugin()],
  })
  .catch(() => process.exit(1));
