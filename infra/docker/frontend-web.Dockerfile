
FROM node:20-alpine
WORKDIR /app
COPY package.json next.config.js ./
COPY pages ./pages
COPY components ./components
COPY lib ./lib
RUN npm install && npm run build
EXPOSE 3000
CMD ["npm", "run", "start"]
