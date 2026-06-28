import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';

const root = fileURLToPath(new URL('..', import.meta.url));
const path = join(root, 'dist/server/wrangler.json');

const cfg = JSON.parse(readFileSync(path, 'utf8'));

// Pages reserves "ASSETS" — it provides this binding automatically to every Worker.
// Removing the explicit declaration lets Pages inject it without a naming conflict.
delete cfg.assets;

// SESSION: the adapter auto-enables a KV session binding we don't use.
// Pages validation requires a real namespace id; removing the binding is safe.
delete cfg.kv_namespaces;

// Same cleanup in the previews stanza
if (cfg.previews) {
  delete cfg.previews.assets;
  delete cfg.previews.kv_namespaces;
}

writeFileSync(path, JSON.stringify(cfg, null, 2));
console.log('patched dist/server/wrangler.json');
