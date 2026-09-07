FROM oven/bun
WORKDIR /app

COPY package.json bun.lockb* ./
RUN bun install

COPY . .
RUN bun run build
EXPOSE 23008
CMD ["node", "server.js"]
