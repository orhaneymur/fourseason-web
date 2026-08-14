# syntax=docker/dockerfile:1
# fourseason-web — Next.js 16 / React 19
# ÖNKOŞUL: next.config.ts içinde  output: "standalone"  olmalı.

# --- 1) BAĞIMLILIKLAR ------------------------------------------------------
# Sadece package dosyaları kopyalanır. Bunlar değişmedikçe Docker bu katmanı
# önbellekten alır; sonraki build'lerde npm ci hiç çalışmaz.
FROM node:22-alpine AS deps
WORKDIR /app
RUN apk add --no-cache libc6-compat
COPY package.json package-lock.json ./
RUN npm ci

# --- 2) DERLEME ------------------------------------------------------------
FROM node:22-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production
RUN npm run build

# --- 3) ÇALIŞMA ------------------------------------------------------------
# Sıfırdan temiz imaj: kaynak kod, node_modules ve npm önbelleği BURAYA GİRMEZ.
FROM node:22-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
# 0.0.0.0 ŞART: localhost'ta dinlerse Kubernetes pod'a ulaşamaz.
ENV HOSTNAME=0.0.0.0

RUN addgroup -g 1001 -S nodejs && adduser -S nextjs -u 1001

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
CMD ["node", "server.js"]
