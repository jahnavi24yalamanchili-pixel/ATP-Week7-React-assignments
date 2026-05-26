# Suntech Assignments - Week 7: Component Lifecycles, Side Effects & API Synchronization (react-handson-3)

Welcome to the documentation for **Week 7 (react-handson-3)**. Having mastered controlled multi-input forms, dynamic lists, and child-to-parent prop flows in our second hands-on project, this assignment advances our frontend architecture into handling asynchronous operations. We explore managing structural side effects, hooking into external servers via API fetching, and handling component lifecycles using the core **`useEffect`** hook.

---

## 📂 Project Directory Structure

The project directory framework separates presentational layout elements from network-driven state layers:

```text
react-handson-3/
├── public/             # Static public assets (Favicons, branding layouts)
├── src/                # Core React Application Source Code
│   ├── assets/         # Project styles and local presentation sheets
│   ├── components/     # Network-driven components (Data Feeds, Loaders, Error UI)
│   ├── App.jsx         # App Orchestrator (Coordinates side effects & async data)
│   └── main.jsx        # App Mount Point (Binds React to index.html container)
├── .gitignore          # Rules mapping to exclude local node_modules/ & build dirs
├── eslint.config.js    # Strict static code analysis and syntax auditing rules
├── index.html          # Application mount shell
├── package.json        # Project metadata, build targets, and script configuration
└── vite.config.js      # Configuration properties for the ultra-fast Vite engine
