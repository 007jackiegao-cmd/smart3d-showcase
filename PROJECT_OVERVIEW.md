# SMART3D · Project Overview

## Engineering design as a connected workflow

A useful engineering model carries more than a visible shape. It also carries the dimensions that define it, the rules used to generate it, the instances that compose it and the information needed to explain its outputs.

SMART3D organises those concerns into a coherent workflow: **define → compute → compose → inspect → export**. The public workbench makes that workflow tangible through executable geometry and an illustrative assembly.

## What the project demonstrates

### Parameter-driven geometry

A focused set of dimensions controls part size, thickness, bores and radial hole patterns. Rebuilding performs actual mesh Boolean operations through Manifold WebAssembly. Input checks guard dimensional ranges and hole clearances before geometry is constructed.

### Definitions separated from instances

Reusable part geometry is placed into an assembly, making the distinction between a component definition and its instances visible. The mounting example uses two matching components, a shaft and a configurable spacer array.

### Geometry connected to engineering information

Computed component volume, explicit material-density assumptions and instance quantities feed the bill of materials. GLB, CSV and parameter JSON outputs provide portable representations of the current configuration.

### A wider modular architecture

The source project includes a Vue/TypeScript editing layer, Python geometry services, expression-driven shape trees, a plugin registry, component versions and PostgreSQL-backed document services. Selected computational paths have been verified in an isolated environment. The public workbench is a newly prepared presentation of the workflow, rather than a deployment of the complete original application.

## Verification

75 existing source-project computational tests and 12 public-demonstration checks passed. A browser-generated assembly GLB was read back to confirm instance count and scale; a downloaded BOM CSV was checked for the expected quantities. Full details are in [VALIDATION.md](VALIDATION.md).

## Extension direction

Natural-language modelling has a defined contract in the source project, providing a route toward reviewed, validated changes to shape trees and parameters. The parser remains reserved; the current demonstration makes no claim of active LLM-driven modelling.

## Public presentation

The interface uses a restrained engineering layout: a component library and feature tree, a central 3D viewport, and a compact parameter-and-output panel. The public package contains synthetic examples and an AI-assisted presentation, with no personal biography or private operational material.
