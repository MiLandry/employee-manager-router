import { spawnSync } from 'node:child_process'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const routerRoot = join(dirname(fileURLToPath(import.meta.url)), '..')
const apolloHome = join(routerRoot, '.apollo')

const result = spawnSync(
  'npx',
  [
    '-y',
    '@apollo/rover@0.26',
    'supergraph',
    'compose',
    '--config',
    'supergraph.yaml',
    '--output',
    'supergraph.graphql',
  ],
  {
    cwd: routerRoot,
    stdio: 'inherit',
    env: {
      ...process.env,
      APOLLO_CONFIG_HOME: apolloHome,
      APOLLO_ELV2_LICENSE: 'accept',
    },
  },
)

if (result.status !== 0) {
  process.exit(result.status ?? 1)
}

console.log('Wrote supergraph.graphql')
