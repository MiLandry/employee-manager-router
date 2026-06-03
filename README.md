# Employee Manager — Apollo Router

Federated gateway for the **employees** (port 3000) and **payroll** (port 3001) subgraphs. The UI targets `http://localhost:4000/graphql`.

## Prerequisites

- **Bun** (runs `bun run compose` via `npx @apollo/rover` — no global `rover` install)
- **Docker** (for `bun run dev`)
- Subgraphs running locally (see spec 011 quickstart)

## Compose supergraph

```bash
bun run compose
```

Downloads Rover on first run, then writes `supergraph.graphql` from `subgraphs/*.graphql`. Re-run only after SDL changes.

A committed `supergraph.graphql` is already in the repo — you can skip compose and go straight to `bun run dev` unless you edited subgraph schemas.

## Run router

Start subgraphs first, then:

```bash
bun run dev
```

Router listens on **4000**; health on **8088**. Subgraph URLs in the composed supergraph use `host.docker.internal` so the router container can reach processes on the host.

## Local subgraph URLs (host)

| Subgraph   | URL |
|------------|-----|
| employees  | http://localhost:3000/graphql |
| payroll    | http://localhost:3001/graphql |
| router     | http://localhost:4000/graphql |
