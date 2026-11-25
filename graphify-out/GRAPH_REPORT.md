# Graph Report - Amal  (2026-11-24)

## Corpus Check
- Corpus is ~3,611 words - fits in a single context window. You may not need a graph.

## Summary
- 77 nodes · 136 edges · 13 communities (8 shown, 5 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- Runtime Dependencies
- Invitation UI Components
- App Shell & Routing
- Lint Config
- Package Metadata
- Vite Build
- Type Definitions
- NPM Scripts
- ESLint Core
- React Refresh Lint
- Globals
- React Vite Plugin

## God Nodes (most connected - your core abstractions)
1. `Invitation()` - 10 edges
2. `react` - 8 edges
3. `scripts` - 5 edges
4. `gsap` - 5 edges
5. `react-router-dom` - 5 edges
6. `WaxSeal()` - 5 edges
7. `@gsap/react` - 4 edges
8. `App()` - 4 edges
9. `RSVPModal()` - 4 edges
10. `@tailwindcss/vite` - 3 edges

## Surprising Connections (you probably didn't know these)
- `App()` --calls--> `Invitation()`  [EXTRACTED]
  src/App.jsx → src/pages/Invitation.jsx
- `App()` --calls--> `Home()`  [EXTRACTED]
  src/App.jsx → src/pages/Home.jsx
- `Invitation()` --calls--> `Countdown()`  [EXTRACTED]
  src/pages/Invitation.jsx → src/components/Countdown.jsx
- `RSVPModal()` --calls--> `WaxSeal()`  [EXTRACTED]
  src/components/RSVPModal.jsx → src/components/WaxSeal.jsx
- `Invitation()` --calls--> `RSVPModal()`  [EXTRACTED]
  src/pages/Invitation.jsx → src/components/RSVPModal.jsx

## Import Cycles
- None detected.

## Communities (13 total, 5 thin omitted)

### Community 0 - "Runtime Dependencies"
Cohesion: 0.13
Nodes (15): dependencies, canvas-confetti@^1.9.4, @gsap/react@^2.1.2, lenis@^1.3.27, lucide-react@^1.77.0, react@^19.3.1, react-dom@^19.3.1, react-router-dom@^7.18.6 (+7 more)

### Community 1 - "Invitation UI Components"
Cohesion: 0.30
Nodes (10): Countdown(), UNITS, RSVPModal(), WaxSeal(), Img(), Invitation(), Polaroid(), Script() (+2 more)

### Community 2 - "App Shell & Routing"
Cohesion: 0.29
Nodes (7): gsap@^3.15.1, gsap, react, react-router-dom, App(), LenisScroll(), Home()

### Community 3 - "Lint Config"
Cohesion: 0.40
Nodes (4): eslint@^10.14.0, eslint-plugin-react-hooks@^7.1.1, eslint, eslint-plugin-react-hooks

### Community 4 - "Package Metadata"
Cohesion: 0.40
Nodes (4): name, private, type, version

### Community 5 - "Vite Build"
Cohesion: 0.40
Nodes (4): @tailwindcss/vite@^4.3.5, vite@^8.3.6, @tailwindcss/vite, vite

### Community 6 - "Type Definitions"
Cohesion: 0.40
Nodes (5): devDependencies, @types/react@^19.3.0, @types/react-dom@^19.3.0, @types/react, @types/react-dom

### Community 7 - "NPM Scripts"
Cohesion: 0.40
Nodes (5): scripts, build, dev, lint, preview

## Knowledge Gaps
- **5 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `App Shell & Routing` to `Runtime Dependencies`, `Invitation UI Components`, `Package Metadata`?**
  _High betweenness centrality (0.144) - this node is a cross-community bridge._
- **Should `Runtime Dependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.13333333333333333 - nodes in this community are weakly interconnected._
- **Why does `devDependencies` connect `Type Definitions` to `Lint Config`, `Package Metadata`, `Vite Build`, `ESLint Core`, `React Refresh Lint`, `Globals`, `React Vite Plugin`?**
  _High betweenness centrality (0.115) - this node is a cross-community bridge._
- **Why does `dependencies` connect `Runtime Dependencies` to `App Shell & Routing`, `Package Metadata`, `Vite Build`?**
  _High betweenness centrality (0.110) - this node is a cross-community bridge._