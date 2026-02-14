# ============================================================
# Dockerfile — Astro + Bun (Production)
# ============================================================
#
# Multi-stage build mengikuti pola resmi Astro Docker:
# https://docs.astro.build/en/recipes/docker/#multi-stage-build-using-ssr
#
# Seluruhnya menggunakan Bun — install, build, dan runtime.
# https://docs.astro.build/en/recipes/bun/
#
# Stages:
#   1. base       — base image oven/bun
#   2. prod-deps  — production dependencies saja
#   3. build-deps — semua dependencies (termasuk devDependencies)
#   4. build      — build Astro project
#   5. runtime    — minimal production image
#
# Penggunaan:
#   docker compose --profile prod up -d --build
#
# Atau manual:
#   docker build -t medika-astro \
#     --build-arg STRAPI_URL=https://dev.rsuafdila.com \
#     --build-arg STRAPI_TOKEN=xxx \
#     --build-arg SITE_URL=https://domain.com .
#
#   docker run -p 4321:4321 \
#     -e STRAPI_URL=https://dev.rsuafdila.com \
#     -e STRAPI_TOKEN=xxx \
#     medika-astro
#
# ============================================================

# ── Stage 1: Base ────────────────────────────────────────────
FROM oven/bun:1-alpine AS base
WORKDIR /app

# Salin hanya package manifest + lockfile.
# Perubahan source code tidak invalidate cache layer ini.
COPY package.json bun.lock ./

# ── Stage 2: Production Dependencies ────────────────────────
FROM base AS prod-deps
RUN bun install --production --frozen-lockfile

# ── Stage 3: Build Dependencies ─────────────────────────────
FROM base AS build-deps
RUN bun install --frozen-lockfile

# ── Stage 4: Build ──────────────────────────────────────────
FROM build-deps AS build
COPY . .

# Build arguments — di-pass saat docker build untuk halaman SSG.
# Halaman yang di-prerender butuh env vars saat build time.
ARG STRAPI_URL=http://localhost:1337
ARG STRAPI_TOKEN=
ARG SITE_URL=http://localhost:4321

ENV STRAPI_URL=${STRAPI_URL}
ENV STRAPI_TOKEN=${STRAPI_TOKEN}
ENV SITE_URL=${SITE_URL}

RUN bun run build

# ── Stage 5: Runtime ────────────────────────────────────────
# Bun bisa menjalankan output @astrojs/node tanpa masalah.
# Lebih ringan dan cepat dibanding Node.js.
FROM oven/bun:1-alpine AS runtime
WORKDIR /app

# Production node_modules dari stage 2
COPY --from=prod-deps /app/node_modules ./node_modules

# Build output dari stage 4
COPY --from=build /app/dist ./dist

# @astrojs/node standalone membaca HOST dan PORT dari env.
# https://docs.astro.build/en/guides/integrations-guide/node/#custom-host-and-port
ENV HOST=0.0.0.0
ENV PORT=4321

EXPOSE 4321

# Entry point — jalankan Astro standalone server via Bun
CMD ["bun", "run", "./dist/server/entry.mjs"]
