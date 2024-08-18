# syntax=docker/dockerfile:1

ARG NODE_VERSION=18.0.0
FROM node:${NODE_VERSION}-alpine AS base
WORKDIR /usr/src/app

FROM base as dev
RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,target=/root/.npm \
    npm ci --include=dev
USER node
COPY . .
CMD npm run dev

FROM base AS deps
RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,target=/root/.npm \
    npm ci --omit=dev

FROM base AS prod
ENV NODE_ENV=prod
USER node
COPY package.json .
COPY --from=deps /usr/src/app/node_modules ./node_modules
COPY --from=dev /usr/src/app/public ./public
EXPOSE 4000
CMD npm start
