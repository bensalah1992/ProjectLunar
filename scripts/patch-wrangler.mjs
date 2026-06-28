import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';

const root = fileURLToPath(new URL('..', import.meta.url));
const path = join(root, 'dist/server/wrangler.json');

const cfg = JSON.parse(readFileSync(path, 'utf8'));

// Root wrangler.toml already declares pages_build_output_dir for the Pages project.
// When this key is also present in the Worker config, wrangler validates the file
// as a Pages config and rejects Worker-only fields (main, rules). Remove it here.
delete cfg.pages_build_output_dir;

// "ASSETS" binding name is reserved by Cloudflare Pages — Pages provides it automatically.
// Keep assets.directory so Pages knows to upload dist/client/ to the CDN as static assets.
if (cfg.assets) delete cfg.assets.binding;

// SESSION: auto-enabled by the adapter but unused; Pages requires a real KV namespace id.
delete cfg.kv_namespaces;

// IMAGES: disabled via imageService: 'passthrough' — remove defensively.
delete cfg.images;

// Same cleanup in the previews stanza
if (cfg.previews) {
  delete cfg.previews.pages_build_output_dir;
  if (cfg.previews.assets) delete cfg.previews.assets.binding;
  delete cfg.previews.kv_namespaces;
  delete cfg.previews.images;
}

writeFileSync(path, JSON.stringify(cfg, null, 2));
console.log('patched dist/server/wrangler.json');
