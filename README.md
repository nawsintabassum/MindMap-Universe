# MindMap Universe — Visual Knowledge Garden

**Connect Your Ideas. Discover New Possibilities.**

MindMap Universe is a dark, responsive visual knowledge workspace for organizing study notes, research, project plans, and ideas as a graph of draggable nodes and labeled relationships.

## Features
- SVG knowledge canvas with draggable nodes, panning, wheel zoom, fit-to-content, and a simplified mini-map.
- Seven node types, descriptions, tags, colors, resource links, timestamps, duplicate/delete/edit actions.
- Create relationships between nodes, label and style connections, and explore connected nodes.
- Multiple maps, favorites, recent maps, trash/restore, duplication, and editable templates.
- Search nodes, descriptions, tags, resource URLs, connection labels, and map names.
- Undo/redo history, multi-select and group movement, keyboard shortcuts, copy/paste.
- LocalStorage persistence, validated JSON import, workspace backup export, and complete-map SVG export.
- Dark/light theme and responsive sidebar / inspector panels.
- No framework, backend, package manager, or build step.

## Technology stack
HTML5, CSS3, Vanilla JavaScript ES modules, SVG, LocalStorage, Pointer Events, and native browser APIs.

## Run locally
1. Extract the ZIP.
2. Open the `mindmap-universe` folder in VS Code.
3. Start **Live Server** from `index.html` (recommended for ES modules).
4. The app opens in your browser. No install or build command is required.

Some browsers restrict JavaScript ES modules when opening HTML directly through `file://`; use Live Server if needed.

## Folder structure
```text
mindmap-universe/
├── index.html
├── css/
│   ├── style.css
│   ├── components.css
│   ├── canvas.css
│   └── responsive.css
├── js/
│   ├── app.js
│   ├── state.js
│   ├── storage.js
│   ├── canvas.js
│   ├── nodes.js
│   ├── connections.js
│   ├── viewport.js
│   ├── selection.js
│   ├── search.js
│   ├── history.js
│   ├── maps.js
│   ├── export.js
│   └── ui.js
├── assets/icons/
└── README.md
```

## Keyboard shortcuts
| Shortcut | Action |
|---|---|
| `N` | Create node |
| `Delete` / `Backspace` | Delete selected nodes |
| `Ctrl/Cmd + Z` | Undo |
| `Ctrl/Cmd + Shift + Z` | Redo |
| `Ctrl/Cmd + F` | Search |
| `Ctrl/Cmd + C` / `V` | Copy / paste selected nodes |
| `F` | Fit graph to screen |
| `Escape` | Cancel connection mode or close dialogs |

## Data storage and privacy
Map data is saved in this browser's LocalStorage. The app does not send map content to a server. Clearing browser data may remove saved maps, so use **Export workspace backup** regularly.

## Import and export
- **Export map as JSON** downloads the current map.
- **Export workspace backup** downloads all workspace data.
- **Export as SVG** exports all nodes and connections in the current map.
- **Import JSON** validates a map/workspace file and adds its maps without intentionally overwriting existing maps.

## Known limitations
- This is a local-first single-user app; maps do not sync between devices.
- Mini-map navigation is simplified and best suited to small and medium graphs.
- Node creation and movement are optimized for typical study/project maps, not unlimited graph sizes.
- Browser prompt/context actions are intentionally lightweight in this version.
- PNG export and cloud collaboration are not included.

## Future improvements
- Dedicated accessible context menus and touch gesture refinement.
- Optional PNG export, richer edge routing, and selection rectangle.
- IndexedDB for larger workspaces and cloud sync as an optional service.
- Automated interaction tests and larger-graph performance profiling.

## Screenshots
Add screenshots of the canvas, node inspector, template gallery, and search dialog here after running the app.
