# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

A small Node.js playground repo (ESM, `"type": "module"` in package.json). It contains two independent, parallel server implementations that are not meant to be merged — they're kept side by side for comparison/learning:

- `server.js` — a server built on the raw Node `http` module (`createServer`), with hand-rolled CORS headers and routing.
- `server-express.js` — the same idea rebuilt with Express 5.

Only `server.js` has a real route layer (`src/routes`, `src/controllers`); `server-express.js` is still just inline example routes (`/`, `/about/:name`) and hasn't been wired to the same controllers.

## Commands

- `npm run start` — run the raw-`http` server (`server.js`) with `node --watch`, on `http://localhost:8080`.
- `npm run start-express` — run the Express server (`server-express.js`) with `node --watch`, on `http://localhost:8080`.

There is no build step, linter, or test suite configured in this repo.

## Architecture (server.js path)

Request flow: `server.js` → `src/routes/mech.js` → `src/controllers/mechController.js` → `mock-data/mech-data.json`.

- `server.js` sets CORS headers (allowing `http://localhost:3000`) and `Content-Type: application/json` on every response, then dispatches by URL prefix (e.g. `/mechs`) to a routes module.
- Routes modules (e.g. `mechsRoutes`) match on `req.method` + `req.url` and call the matching controller function.
- Controllers contain the actual request-handling logic and currently read mock data from JSON files under `mock-data/` via `fs/promises`, standing in for a future server/database call.
- Both routes and controllers are `async` even though nothing awaits real I/O latency yet — this is intentional scaffolding for when data comes from an actual async source.

When adding a new resource, follow this same three-layer pattern: add a controller in `src/controllers/`, a routes module in `src/routes/` that dispatches on method + URL, and wire the URL prefix into `server.js`'s dispatcher.
