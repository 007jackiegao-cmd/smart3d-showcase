# SMART3D · Parametric Studio

**A model that carries its logic.**

A focused public demonstration of a parametric modelling and assembly workflow: **dimensions → Boolean solid → placed instances → bill of materials → model export**.

The wider project combines a Vue/TypeScript editing frontend with a FastAPI/Python geometry service and PostgreSQL persistence. This public package presents its workflow through a newly prepared, AI-assisted browser demonstration. The original backend, tenant records, configuration and runtime assets are not included.

## Explore the demonstration

- Adjust dimensions, hole count and the material-density assumption.
- Rebuild a flange or mounting plate using genuine Manifold mesh Boolean operations.
- Orbit, zoom, fit the view or inspect wireframe rendering.
- Switch from a component to an illustrative mounting assembly.
- Inspect quantity aggregation and density-based mass in the bill of materials.
- Download a GLB model, BOM CSV or parameter JSON. Files are generated locally.

All parts and records are synthetic. No login, account data or external API is required. The runtime libraries and WASM binary are served with the project; there are no analytics, personal profiles or third-party data requests.

![Actual component interface](component-preview.jpg)

![Actual assembly interface](assembly-preview.jpg)

These images are browser screenshots of the runnable demo, not generated UI concepts.

## Run the published package locally

```sh
python3 -m http.server 8080 --bind 127.0.0.1
```

Open `http://localhost:8080`. A recent browser with WebGL and WebAssembly support is required.

## Inspect and test the public computation

`geometry-demo.js` is the unminified public demonstration kernel. It is a focused, newly written example, not the original private geometry engine.

```sh
npm ci --ignore-scripts
node test-demo.mjs
```

The demo includes 12 checks covering polygonal-volume references, closed mesh edges, dimensions, clearance guards, radial placement and BOM quantities/mass. The source archive contains the complete demonstration source and build configuration, without private project material.

See [architecture](ARCHITECTURE.md), [validation](VALIDATION.md), [Chinese project introduction](README.zh-CN.md) and [content provenance](PROVENANCE.md).

## Capability boundary

The original source contains component/version services, expression-driven shape trees, geometry plugins, assembly tools, material information, BOM processing and model publication. Selected isolated computational tests have been run; the complete database-backed application has not been deployed or verified end to end in this packaging task.

Natural-language modelling is a reserved contract in the project. The LLM parser is not active. Performance targets in planning documents are not measured results and are not repeated as achievements here.

Mass values use assumed densities and a discretised mesh. The demonstration does not establish strength, tolerances, manufacturing suitability or production security.

## Dependencies and attribution

- Three.js 0.172.0 — MIT, [upstream](https://github.com/mrdoob/three.js)
- Manifold 3.1.0 — Apache-2.0, [upstream](https://github.com/elalish/manifold)

Their licenses are bundled. The mesh Boolean algorithm is provided by Manifold; the presentation makes no claim of inventing that algorithm. No additional reuse license is granted for original project material by this showcase.
