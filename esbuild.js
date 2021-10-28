const esbuild = require('esbuild');

esbuild
  .build({
    entryPoints: ['src/index.ts'],
    outdir: 'lib',
    bundle: true,
    sourcemap: true,
    minify: true, // 压缩代码
    splitting: true,
    format: 'esm',
    target: ['esnext'],
  })
  .catch(() => process.exit(1));
