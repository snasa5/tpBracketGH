
FROM node:20-alpine
WORKDIR /app
COPY package.json tsconfig.json ./
COPY api ./api
COPY services ./services
COPY config ./config
COPY server.ts ./server.ts
RUN npm install && npm run build
EXPOSE 8080
CMD ["node", "dist/server.js"]
