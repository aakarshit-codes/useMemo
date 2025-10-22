# useMemo Demo (React + Vite)

This repository is a small React app scaffolded with Vite that demonstrates common list and summary patterns and how to optimize expensive computations using React's `useMemo` (or to reason about when not to use it).

The app contains a simple expenses dashboard that filters and summarizes expense data. It is intentionally small so you can focus on learning the performance trade-offs and patterns around memoization in React.

## What you'll find here

- A minimal Vite + React app with HMR for fast development.
- A small component tree that renders a list of expenses, a filter control, and a summary component.
- Example data in `src/assets/expensesData.js` used to populate the list for demos and experiments.

## Quick start

Prerequisites:

- Node.js 16+ (LTS recommended)
- npm (or yarn/pnpm)

Install dependencies and run the dev server:

```bash
npm install
npm run dev
```

Build for production and preview the build locally:

```bash
npm run build
npm run preview
```

If you're using yarn or pnpm, replace `npm` with `yarn`/`pnpm` accordingly.

## Available scripts

- `dev` - start the Vite dev server with HMR
- `build` - create a production build
- `preview` - locally preview the production build
- `lint` (if configured) - run ESLint

Check `package.json` for the exact script names in this project.

## Project structure (important files)

- `index.html` - Vite entry HTML
- `src/main.jsx` - app bootstrap and React root
- `src/App.jsx` - top-level app component
- `src/pages/Dashboard.jsx` - main page showing expenses and controls
- `src/components/ExpenseFilter.jsx` - component to choose/filter expenses
- `src/components/ExpenseList.jsx` - renders list of expenses
- `src/components/ExpenseSummary.jsx` - computes and displays totals/aggregates
- `src/components/Navbar.jsx` - top navigation bar
- `src/assets/expensesData.js` - sample expenses data
- `src/index.css` - base styles

The application is intentionally small and focused. The `ExpenseSummary` or similar components are good candidates to experiment with `useMemo` for caching derived data from props.

## Notes on useMemo and performance

This project is named `useMemo` because it's a good playground to try the hook and observe when it helps or hurts.

Key ideas:

- useMemo caches a computed value between renders. Use it when computing the value is expensive and the inputs change infrequently.
- Don't prematurely memoize: adding `useMemo` adds cognitive overhead and can sometimes cost more than it saves if the computation is cheap.
- Typical use cases in this app:
	- Summarizing large lists (e.g., totals, grouped aggregates).
	- Deriving filtered/sorted lists when the input array is large.

Quick checklist when you consider `useMemo`:

1. Is the computation noticeably expensive (CPU/time)?
2. Does the computed value get reused across renders?
3. Do you have stable, minimal dependencies to pass to `useMemo`?

Example pattern (conceptual):

```jsx
const filtered = useMemo(() => expensiveFilter(items, filter), [items, filter]);
```

Or for a summary:

```jsx
const totals = useMemo(() => computeTotals(items), [items]);
```

If `items` is a new array on every render (for example, rebuilt inline), memoization won't help. Prefer passing stable references or memoizing upstream changes.

## How to experiment

1. Run the app with `npm run dev`.
2. Open the DevTools and throttle CPU to see the impact of expensive computations.
3. Add console.time/console.timeEnd around computations in `ExpenseSummary` or `Dashboard` to measure.
4. Wrap expensive computations in `useMemo` and compare the render costs.

## Troubleshooting

- If HMR doesn't pick up changes, restart the dev server.
- If you see dependency errors, delete `node_modules` and `package-lock.json` (or lockfile) and reinstall.

## License

This project is provided as-is for learning and demo purposes.


