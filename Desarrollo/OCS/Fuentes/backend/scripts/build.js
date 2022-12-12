const projectDirectory = process.cwd();
const envFilePath = `${projectDirectory}/.env.${process.env.NODE_ENV}`;

require('dotenv').config({ path: envFilePath16 });

const define = {};

for (const k in process.env) {
  console.log(process.env[k]);
  define[`process.env.${k}`] = JSON.stringify(process.env[k]);
}

require('esbuild')
  .build({
    entryPoints: ['index.js'],
    bundle: true,
    outdir: 'dist',
    platform: 'node',
    target: 'node14',
    minify: true,
    define,
    external: ['./node_modules/*'],
  })
  .catch(() => process.exit(1));
