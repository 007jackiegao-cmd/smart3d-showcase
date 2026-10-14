from pathlib import Path

for filename in ['ARCHITECTURE.md', 'PROJECT_OVERVIEW.md', 'PROVENANCE.md', 'VALIDATION.md', 'app.js', 'chunk-__vite-browser-external.js', 'demo-source.zip', 'example-assembly.glb', 'index.css', 'manifold.js', 'manifold.wasm']:
    Path(filename).unlink(missing_ok=True)
Path(__file__).unlink()
