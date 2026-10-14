# SMART3D

Parametric parts and assemblies built with Manifold and Three.js.

[Open studio](https://007jackiegao-cmd.github.io/smart3d-showcase/)

- Edit flange or plate dimensions and rebuild the solid.
- View the component, assembly or bill of materials.
- Export GLB geometry, a CSV bill of materials or JSON parameters.
- Read volume, material-based mass and triangle count from the current model.

## Run

```sh
npm ci
npm run dev
npm test
npm run build
```

`geometry-demo.js` creates the solids and calculates quantities. `studio.js` manages the viewport, controls and exports; `studio.css` styles the interface. All dimensions are in millimetres. Mass uses mesh volume and the selected density.
