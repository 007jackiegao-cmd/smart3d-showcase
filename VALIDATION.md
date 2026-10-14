# Validation and practical limits

## Original computational subset

75 existing tests passed in an isolated copy, with no original environment file, database dump or live database connection. The selected suites cover:

- expression engine and expression function plugins;
- geometry kernel and Boolean operations;
- shape-tree evaluation and reference handling;
- profile and modelling operations;
- GLB export and node-level geometry splitting.

Database-backed services, login, tenant isolation, migration, the full original frontend and end-to-end API workflows were not tested in this packaging task. Test success here does not establish production security or complete application readiness.

## Public demonstration

12 checks passed across multiple dimensions and both constructors:

- computed volume agrees with the matching polygonal-circle formula;
- every mesh edge has two incident triangles;
- output coordinates are finite and mesh counts are consistent;
- invalid clearance, bore overlap and noninteger hole counts are rejected;
- hole centres lie on the prescribed bolt circle;
- assembly quantities and density-based mass aggregation are consistent;
- changing a material assumption affects mass, without changing the mesh.

Run `node test-demo.mjs` after installing the pinned dependencies. Source and build are included in `demo-source.zip`.

## Browser and export checks

Dimension/hole-count edits rebuilt the visible mesh. Component, assembly, wireframe and BOM views were inspected. A browser-downloaded assembly GLB was independently parsed with trimesh: 11 mesh instances for two 8-hole components, eight spacers and one shaft. Overall bounds were 0.12 × 0.12 × 0.06 metres, consistent with the current millimetre inputs and export scale.

The GLB check establishes that this example file is structurally readable and scaled as intended. It does not certify engineering suitability, topology preservation in every downstream tool or other file variants.

## Unverified claims excluded

No measured latency, commercial adoption, customer count, manufacturing certification, validated load capacity, implemented LLM parser or production tenant-security claim is made. The original planning document's performance targets are not treated as results.
